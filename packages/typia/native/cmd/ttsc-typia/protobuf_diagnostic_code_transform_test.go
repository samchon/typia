package main

import (
  "os"
  "path/filepath"
  "regexp"
  "sort"
  "strings"
  "testing"
)

// TestProtobufDiagnosticCodeTransform verifies that a rejected protobuf call
// site is named by its own API in the diagnostic code (#2285).
//
// `ProtobufFactory.Metadata` used to compose the code as `"typia.protobuf." +
// props.Method`, while the encode and decode programmers pass the whole call
// accessor (`ModuloMethodText`, the same text `TypeGuardError.method` carries).
// Sixteen of the seventeen entry points therefore reported
// `TS(typia.protobuf.typia.protobuf.encode)`; only `protobuf.message` was
// correct, because its programmer passed a bare literal. The code is the only
// machine-readable identity a typia rejection has, so a code that names no API
// is a silent loss for anyone searching it.
//
// The oracle is the fixture source, not another copy of the expected string: a
// diagnostic code is correct only when the accessor it names is literally the
// accessor written at a call site in that file. A concatenation defect cannot
// satisfy that, and neither can a misspelling.
//
//  1. Write one fixture that calls every protobuf entry point with `bigint`,
//     which none of them supports.
//  2. Transform it and collect every diagnostic code the transform reported.
//  3. Require each code to be an accessor present in the fixture, and require
//     every entry point to have been named.
func TestProtobufDiagnosticCodeTransform(t *testing.T) {
  methods := []string{
    "message",
    "encode",
    "decode",
    "assertEncode",
    "assertDecode",
    "isEncode",
    "isDecode",
    "validateEncode",
    "validateDecode",
    "createEncode",
    "createDecode",
    "createAssertEncode",
    "createAssertDecode",
    "createIsEncode",
    "createIsDecode",
    "createValidateEncode",
    "createValidateDecode",
  }
  project, source := protobufDiagnosticCodeProject(t, methods)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
    })
  })
  if code == 0 {
    t.Fatalf("protobuf fixture transformed successfully, want failure:\nstdout=%s\nstderr=%s", out, errText)
  }

  codes := map[string]bool{}
  for _, match := range protobufDiagnosticCodePattern.FindAllStringSubmatch(out, -1) {
    codes[match[1]] = true
  }
  if len(codes) == 0 {
    t.Fatalf("no typia diagnostic code was reported:\nstdout=%s\nstderr=%s", out, errText)
  }

  unnamed := []string{}
  for reported := range codes {
    if !strings.Contains(source, reported+"<") {
      unnamed = append(unnamed, reported)
    }
  }
  sort.Strings(unnamed)
  if len(unnamed) != 0 {
    t.Fatalf(
      "diagnostic code(s) name no call site in the fixture: %s",
      strings.Join(unnamed, ", "),
    )
  }

  missing := []string{}
  for _, method := range methods {
    if !codes["typia.protobuf."+method] {
      missing = append(missing, method)
    }
  }
  if len(missing) != 0 {
    t.Fatalf(
      "no diagnostic named these entry points: %s\nstdout=%s",
      strings.Join(missing, ", "),
      out,
    )
  }
}

// The command reports diagnostics as JSON, and `code` is the field ttsc renders
// as `error TS(<code>)`; reading it here keeps the assertion on the value the
// transform produced rather than on one renderer's formatting.
var protobufDiagnosticCodePattern = regexp.MustCompile(`"code":"([^"]+)"`)

func protobufDiagnosticCodeProject(t *testing.T, methods []string) (string, string) {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "protobuf-code-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() {
    _ = os.RemoveAll(dir)
  })
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(protobufDiagnosticCodeTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  lines := []string{`import typia from "typia";`, ""}
  for _, method := range methods {
    lines = append(lines, protobufDiagnosticCodeCall(method))
  }
  source := strings.Join(lines, "\n") + "\n"
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(source), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir, source
}

// protobufDiagnosticCodeCall writes the call form each entry point takes: the
// factories take no value argument, the encoders take the message, and the
// decoders take the buffer.
func protobufDiagnosticCodeCall(method string) string {
  call := "typia.protobuf." + method + "<bigint>"
  switch {
  case method == "message" || strings.HasPrefix(method, "create"):
    return call + "();"
  case strings.HasSuffix(method, "Decode"):
    return call + "(new Uint8Array());"
  default:
    return call + "(1n as any);"
  }
}

const protobufDiagnosticCodeTSConfig = `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "bundler",
    "ignoreDeprecations": "6.0",
    "types": ["*"],
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
`
