//go:build !js

package main

import (
  "bufio"
  "bytes"
  "encoding/json"
  "fmt"
  "io"
  "os"
  "path/filepath"
  "strings"

  "github.com/samchon/ttsc/packages/ttsc/driver"
)

// checkServeRequest is one analysis watch cycle: the filesystem transitions
// since the previous cycle. Project, plugin and compiler options are fixed by
// the command line the host was started with.
type checkServeRequest struct {
  // Invalidate drops the resident Program before answering.
  Invalidate bool `json:"invalidate,omitempty"`

  // Changed lists the local files changed since the previous cycle.
  Changed []string `json:"changed,omitempty"`

  // External is the subset of Changed declared by a project-input snapshot.
  External []string `json:"external,omitempty"`
}

// checkServeTelemetry reports how the resident Program served the cycle.
type checkServeTelemetry struct {
  // PID identifies the resident host process.
  PID int `json:"pid"`

  // ProgramLoads counts initial loads and full Program reconstructions.
  ProgramLoads int `json:"programLoads"`

  // ProgramUpdates counts incremental updates that reused the Program graph.
  ProgramUpdates int `json:"programUpdates"`

  // Reused reports whether this cycle was answered without a new load.
  Reused bool `json:"reused"`
}

// checkServeResponse is one cycle's answer in the shape ttsc's resident check
// protocol reads: what one-shot `check` would print and return for the same
// files, plus the residency report.
type checkServeResponse struct {
  // Status is one-shot check's exit status for the same files.
  Status int `json:"status"`

  // Stdout is what one-shot check would print to stdout.
  Stdout string `json:"stdout"`

  // Stderr is what one-shot check would print to stderr.
  Stderr string `json:"stderr"`

  // Telemetry reports the resident Program's loads and updates.
  Telemetry checkServeTelemetry `json:"telemetry"`

  // ProgramFiles names the checked Program's files, default libraries under
  // their `bundled:///libs/` names, so the launcher needs no listing.
  ProgramFiles []string `json:"programFiles,omitempty"`

  // TypeScriptDiagnosticsReported acknowledges that Stderr holds the loaded
  // Program's complete diagnostic batch. Absent when loading failed.
  TypeScriptDiagnosticsReported bool `json:"typeScriptDiagnosticsReported,omitempty"`
}

// checkServeState owns at most one resident Program and the answer it gave.
//
// A Program stays resident only while no linked ProgramPlugin is selected:
// such a hook rewrites the parsed ASTs in place before typia reads them, so a
// reused Program would show the next cycle source an earlier cycle already
// rewrote. typia's own transformer leaves the ASTs untouched (see
// analyzeTypiaProgram), which is what lets every other Program stay.
type checkServeState struct {
  settings buildSettings
  outDir   string
  session  *driver.Session

  // answer is the response for the resident generation. A cycle that applies
  // no change returns it, so the checker that served typia's type queries
  // never answers a second diagnostic request.
  answer *checkServeResponse

  loads   int
  updates int
}

// runCheckServe is typia's resident analysis check for `ttsc --noEmit --watch`.
// ttsc starts it in place of `check`, with check's arguments, once the
// descriptor declares `capabilities.residentCheck`. It reads one JSON request
// per line from in and writes one JSON response per request to out until in
// reaches EOF.
//
// Each response holds what one-shot `check` prints and returns for the same
// files. A known changed source is applied to the resident Program through
// driver.Session; an unknown path, an unreadable change or an invalidation
// loads it again. Exit status 2 reports a startup, read or response-write
// failure; check failures travel in each response.
//
// Membership comes from Session.Contains, which runs no linked hook, and
// updates go through the upstream UpdateProgram. The state holds at most one
// Program, its overlay of applied edits and one answer; invalidation, reload
// and stream end close the Program. Request and response buffers are per line,
// without a byte cap.
func runCheckServe(in io.Reader, out io.Writer, args []string) int {
  flags, ok := parseBuildFlags("check-serve", args)
  if !ok {
    return 2
  }
  if flags.observationsPath != "" || flags.provenancePath != "" {
    fmt.Fprintln(stderr, "ttsc-typia check-serve: private result paths belong to a one-shot build")
    return 2
  }
  flags.noEmit = true
  settings, code := prepareBuild("ttsc-typia check-serve", flags)
  if code != 0 {
    return code
  }
  // driver.Session anchors its incremental updates on an absolute project root.
  if !filepath.IsAbs(settings.cwd) {
    absolute, err := filepath.Abs(settings.cwd)
    if err != nil {
      fmt.Fprintf(stderr, "ttsc-typia check-serve: cwd: %v\n", err)
      return 2
    }
    settings.cwd = absolute
  }
  state := &checkServeState{settings: settings, outDir: flags.outDir}
  defer state.close()
  encoder := json.NewEncoder(out)
  reader := bufio.NewReader(in)
  for {
    raw, readErr := reader.ReadString('\n')
    if line := strings.TrimSpace(raw); line != "" {
      if err := encoder.Encode(state.handle(line)); err != nil {
        fmt.Fprintf(stderr, "ttsc-typia check-serve: write error: %v\n", err)
        return 2
      }
    }
    if readErr != nil {
      if readErr != io.EOF {
        fmt.Fprintf(stderr, "ttsc-typia check-serve: read error: %v\n", readErr)
        return 2
      }
      return 0
    }
  }
}

func (s *checkServeState) close() {
  if s.session != nil {
    _ = s.session.Close()
    s.session = nil
  }
  s.answer = nil
}

// handle answers one request line; a panic drops the resident Program.
func (s *checkServeState) handle(line string) (response checkServeResponse) {
  response = checkServeResponse{Status: 2}
  defer func() {
    if recovered := recover(); recovered != nil {
      s.close()
      response = checkServeResponse{
        Status: 2,
        Stderr: fmt.Sprintf("ttsc-typia check-serve: request panicked: %v\n", recovered),
      }
    }
    response.Telemetry.PID = os.Getpid()
    response.Telemetry.ProgramLoads = s.loads
    response.Telemetry.ProgramUpdates = s.updates
  }()
  var req checkServeRequest
  if err := json.Unmarshal([]byte(line), &req); err != nil {
    response.Stderr = fmt.Sprintf("ttsc-typia check-serve: invalid request: %v\n", err)
    return response
  }
  reused := s.apply(req)
  return s.check(reused)
}

// apply moves the resident Program to the request's filesystem state, or drops
// it when only a fresh load can: an invalidation, a path that is not a Program
// member and not a declared external input, or a change that cannot be read.
func (s *checkServeState) apply(req checkServeRequest) bool {
  if req.Invalidate {
    s.close()
    return false
  }
  if s.session == nil {
    return false
  }
  external := map[string]struct{}{}
  for _, location := range req.External {
    if resolved, err := filepath.Abs(location); err == nil {
      external[filepath.Clean(resolved)] = struct{}{}
    }
  }
  reused := true
  for _, location := range req.Changed {
    resolved, err := filepath.Abs(location)
    if err != nil {
      s.close()
      return false
    }
    resolved = filepath.Clean(resolved)
    if !s.session.Contains(resolved) {
      if _, declared := external[resolved]; declared {
        continue
      }
      s.close()
      return false
    }
    content, err := os.ReadFile(resolved)
    if err != nil {
      s.close()
      return false
    }
    s.answer = nil
    if s.session.Apply(resolved, string(content)) {
      s.updates++
    } else {
      // UpdateProgram reconstructed the Program: a real load, not a reuse.
      s.loads++
      reused = false
    }
  }
  return reused
}

// check answers the current generation as one-shot check does, loading it
// first when no resident Program survived apply, and decides whether the
// Program stays for the next request.
func (s *checkServeState) check(reused bool) checkServeResponse {
  if s.session != nil && s.answer != nil {
    // Nothing the resident generation was built from changed, so a cold check
    // of the same files gives the same answer.
    response := *s.answer
    response.Telemetry.Reused = true
    return response
  }
  var out, errOut bytes.Buffer
  var prog *driver.Program
  var overlay *driver.OverlayFS
  if s.session != nil {
    prog = s.session.Program()
  } else {
    overlay = driver.NewOverlayFS(driver.DefaultFS())
    loaded, status := loadTypiaProgram(s.settings, driver.LoadProgramOptions{
      ForceNoEmit: true,
      OutDir:      s.outDir,
      FS:          overlay,
    }, &errOut)
    if status != 0 {
      if loaded != nil {
        _ = loaded.Close()
      }
      return checkServeResponse{Status: status, Stdout: out.String(), Stderr: errOut.String()}
    }
    s.loads++
    reused = false
    prog = loaded
    // A Program that does not become resident below, or a panic before that,
    // still releases its checker lease.
    defer func() {
      if s.session == nil {
        _ = loaded.Close()
      }
    }()
  }
  status := reportTypiaProgramDiagnostics(prog, s.settings.cwd, &errOut)
  if status == 0 {
    status = analyzeTypiaProgram(prog, s.settings, &out, &errOut)
  }
  response := checkServeResponse{
    Status:                        status,
    Stdout:                        out.String(),
    Stderr:                        errOut.String(),
    ProgramFiles:                  programFileNames(prog),
    TypeScriptDiagnosticsReported: true,
  }
  response.Telemetry.Reused = reused
  // ApplyLinkedPlugins is latched per Program: after an analysis it returns
  // that outcome, and after failing Program diagnostics it only settles the
  // registry check, since no ProgramPlugin is linked when it is asked. A
  // latched failure would enter every later Diagnostics of this Program, which
  // a cold check never sees, so such a Program is not kept either.
  if prog.HasLinkedProgramPlugins() || prog.ApplyLinkedPlugins() != nil {
    s.close()
  } else {
    if s.session == nil {
      s.session = driver.NewSessionFromProgram(s.settings.cwd, overlay, prog)
    }
    answer := response
    s.answer = &answer
  }
  return response
}

// programFileNames lists a Program's files as the compiler names them.
func programFileNames(prog *driver.Program) []string {
  if prog == nil || prog.TSProgram == nil {
    return nil
  }
  files := prog.TSProgram.SourceFiles()
  names := make([]string, 0, len(files))
  for _, file := range files {
    if file != nil {
      names = append(names, string(file.FileName()))
    }
  }
  return names
}
