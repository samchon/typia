package main

import (
  "bufio"
  "encoding/json"
  "io"
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestCheckServeMatchesColdCheck verifies typia's resident check keeps one
// Program across compatible edits and answers exactly what one-shot `check`
// answers for the same files.
//
// The watch launcher trusts each reply's status, output, file list and
// completeness acknowledgement in place of a cold check, so every reply must
// equal a cold check run after the same edit.
//
//  1. Start check-serve over pipes and answer a typia transform failure with
//     one load, the acknowledgement and the project files.
//  2. Fix the call, then break the TypeScript, requiring incremental updates
//     whose answers equal a cold check each time, then drop the import and
//     require the reconstruction to count as a load.
//  3. Send a cycle without changes and one naming only a declared external
//     input, requiring the same answer without new work.
//  4. Add a root, invalidate, and send a malformed line, requiring a reload for
//     the first two and a protocol error for the last.
//  5. Close stdin and require a clean exit.
//
// @evidence contracts/testing.md#behavioral-verification runCheckServe answers framed requests over real pipes; each answer's status, stdout and stderr must equal a captured cold `check`, with telemetry and file lists following the protocol, so a stale Program, a lost transform diagnostic, a missing reload or broken framing fails an assertion.
// @evidence contracts/testing.md#independent-expectations Cold `check` of the same files is the differential oracle; the expected statuses follow from the authored sources (a generic typia.is call fails the transform, a string assigned to number fails TypeScript) and the protocol fixes the load and update counts.
// @evidence contracts/testing.md#distinguishing-cases Transform failure, success and TypeScript failure cycles, an edit UpdateProgram must reconstruct, an unchanged and an external-only cycle, an unknown root, an invalidation and a malformed request; TestCheckServeReloadsWithProgramPlugin owns the linked ProgramPlugin case.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers this unit test; it runs runCheckServe in a goroutine of the test process and starts no daemon or built binary.
func TestCheckServeMatchesColdCheck(t *testing.T) {
  root := checkServeProject(t)
  main := filepath.Join(root, "src", "main.ts")
  args := []string{"--tsconfig=" + filepath.Join(root, "tsconfig.json"), "--cwd=" + root}
  serve := startCheckServe(t, args)

  first := serve.send(t, `{}`)
  if first.Status != 3 || !first.TypeScriptDiagnosticsReported ||
    first.Telemetry.ProgramLoads != 1 || first.Telemetry.ProgramUpdates != 0 || first.Telemetry.Reused ||
    first.Telemetry.PID != os.Getpid() {
    t.Fatalf("first cycle = %#v", first)
  }
  if !strings.Contains(filepath.ToSlash(first.Stderr), "src/main.ts:3:9 - error TS(typia.is):") {
    t.Fatalf("first cycle lost the transform diagnostic:\n%s", first.Stderr)
  }
  checkServeAssertFiles(t, first.ProgramFiles, main, filepath.Join(root, "src", "other.ts"))
  checkServeAssertCold(t, args, first)

  for index, cycle := range []struct {
    source  string
    status  int
    reused  bool
    loads   int
    updates int
  }{
    {typiaCheckValidSource, 0, true, 1, 1},
    {typiaCheckValidSource + "export const value: number = \"text\";\n", 2, true, 1, 2},
    // Dropping the import changes the file's references, so UpdateProgram
    // reconstructs the Program: a load, not a reuse.
    {"export const value: number = \"text\";\n", 2, false, 2, 2},
  } {
    typiaCheckWrite(t, main, cycle.source)
    answer := serve.send(t, checkServeChanged(t, main))
    if answer.Status != cycle.status || answer.Telemetry.Reused != cycle.reused || !answer.TypeScriptDiagnosticsReported ||
      answer.Telemetry.ProgramLoads != cycle.loads || answer.Telemetry.ProgramUpdates != cycle.updates {
      t.Fatalf("edited cycle %d = %#v", index, answer)
    }
    checkServeAssertCold(t, args, answer)
  }

  unchanged := serve.send(t, `{}`)
  external := filepath.Join(root, "lint.config.json")
  typiaCheckWrite(t, external, "{}\n")
  declared, _ := json.Marshal(checkServeRequest{Changed: []string{external}, External: []string{external}})
  externalOnly := serve.send(t, string(declared))
  for _, answer := range []checkServeResponse{unchanged, externalOnly} {
    if answer.Status != 2 || !answer.Telemetry.Reused ||
      answer.Telemetry.ProgramLoads != 2 || answer.Telemetry.ProgramUpdates != 2 {
      t.Fatalf("no-change cycle = %#v", answer)
    }
    checkServeAssertCold(t, args, answer)
  }

  added := filepath.Join(root, "src", "added.ts")
  typiaCheckWrite(t, added, typiaCheckValidSource)
  reloaded := serve.send(t, checkServeChanged(t, added))
  if reloaded.Telemetry.Reused || reloaded.Telemetry.ProgramLoads != 3 {
    t.Fatalf("new root cycle = %#v", reloaded)
  }
  checkServeAssertFiles(t, reloaded.ProgramFiles, added)
  checkServeAssertCold(t, args, reloaded)

  typiaCheckWrite(t, main, typiaCheckValidSource)
  invalidated := serve.send(t, `{"invalidate":true}`)
  if invalidated.Status != 0 || invalidated.Telemetry.Reused || invalidated.Telemetry.ProgramLoads != 4 {
    t.Fatalf("invalidated cycle = %#v", invalidated)
  }
  checkServeAssertCold(t, args, invalidated)

  malformed := serve.send(t, `not json`)
  if malformed.Status != 2 || malformed.TypeScriptDiagnosticsReported ||
    !strings.Contains(malformed.Stderr, "invalid request") {
    t.Fatalf("malformed request = %#v", malformed)
  }
  if code := serve.stop(); code != 0 {
    t.Fatalf("check-serve exited with %d after stdin closed", code)
  }
}

// checkServeHost is a check-serve command running in the test process.
type checkServeHost struct {
  in    *io.PipeWriter
  lines *bufio.Scanner
  done  chan int
}

func startCheckServe(t *testing.T, args []string) *checkServeHost {
  t.Helper()
  inReader, inWriter := io.Pipe()
  outReader, outWriter := io.Pipe()
  done := make(chan int, 1)
  go func() {
    code := runCheckServe(inReader, outWriter, args)
    _ = inReader.Close()
    _ = outWriter.Close()
    done <- code
  }()
  // A failed assertion leaves the host waiting on a pipe; closing both ends
  // lets it return.
  t.Cleanup(func() {
    _ = inWriter.Close()
    _ = outReader.Close()
  })
  lines := bufio.NewScanner(outReader)
  lines.Buffer(make([]byte, 0, 64*1024), 64*1024*1024)
  return &checkServeHost{in: inWriter, lines: lines, done: done}
}

func (h *checkServeHost) send(t *testing.T, request string) checkServeResponse {
  t.Helper()
  if _, err := io.WriteString(h.in, request+"\n"); err != nil {
    t.Fatalf("write request: %v", err)
  }
  if !h.lines.Scan() {
    t.Fatalf("no response to %s: %v", request, h.lines.Err())
  }
  var response checkServeResponse
  if err := json.Unmarshal(h.lines.Bytes(), &response); err != nil {
    t.Fatalf("decode response %s: %v", h.lines.Text(), err)
  }
  return response
}

func (h *checkServeHost) stop() int {
  _ = h.in.Close()
  return <-h.done
}

func checkServeChanged(t *testing.T, files ...string) string {
  t.Helper()
  line, err := json.Marshal(checkServeRequest{Changed: files})
  if err != nil {
    t.Fatal(err)
  }
  return string(line)
}

// checkServeAssertCold requires a resident answer to equal a one-shot `check`
// of the files as they are now.
func checkServeAssertCold(t *testing.T, args []string, resident checkServeResponse) {
  t.Helper()
  out, errText, code := ttscTypiaTestCapture(func() int {
    return run(append([]string{"check"}, args...))
  })
  if code != resident.Status || out != resident.Stdout || errText != resident.Stderr {
    t.Fatalf("resident/cold mismatch\nresident=%#v\ncold=(%d, %q, %q)", resident, code, out, errText)
  }
}

// checkServeAssertFiles requires every listed file to be absolute or an
// embedded default library, and the wanted files to be listed. Slash spellings
// are compared without case, since a Windows drive letter may be spelled
// differently by the temporary-directory API.
func checkServeAssertFiles(t *testing.T, files []string, want ...string) {
  t.Helper()
  for _, file := range files {
    if !filepath.IsAbs(file) && !strings.HasPrefix(file, "bundled:///libs/") {
      t.Fatalf("program file %q is neither absolute nor a bundled library", file)
    }
  }
  for _, wanted := range want {
    found := false
    for _, file := range files {
      if strings.EqualFold(filepath.ToSlash(file), filepath.ToSlash(wanted)) {
        found = true
        break
      }
    }
    if !found {
      t.Fatalf("program files omit %s: %v", wanted, files)
    }
  }
}

func checkServeProject(t *testing.T) string {
  t.Helper()
  root := t.TempDir()
  transformDiagnosticWriteTypiaStub(t, root)
  typiaCheckWrite(t, filepath.Join(root, "tsconfig.json"), `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "bundler",
    "ignoreDeprecations": "6.0",
    "types": ["*"],
    "strict": true,
    "skipLibCheck": true,
    "noEmit": true
  },
  "include": ["src"]
}
`)
  typiaCheckWrite(t, filepath.Join(root, "src", "main.ts"), transformDiagnosticSource)
  typiaCheckWrite(t, filepath.Join(root, "src", "other.ts"), `import typia from "typia";
export const isName = (input: unknown): input is { name: string } =>
  typia.is<{ name: string }>(input);
`)
  return root
}
