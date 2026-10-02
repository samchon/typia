package main

import (
  "os"
  "path/filepath"
  "regexp"
  "sort"
  "strings"
  "testing"
)

// TestProtobufDiagnosticCodeTransform checks the authored operation results described below.
//
// Diagnostic codes identify public calls as written, not programmer-internal naming conventions. The authored call accessor list supplies an independent finite expected identity set.
//
// 1. All seventeen direct/factory message/encode/decode combinations reject a top-level bigint instead of a static message object and retain their own operation code.
// 2. Every rejected protobuf operation is represented exactly by a code matching a source-written accessor, with no doubled typia.protobuf prefix.
//
// @evidence contracts/testing.md#behavioral-verification Every rejected protobuf operation is represented exactly by a code matching a source-written accessor, with no doubled typia.protobuf prefix.
// @evidence contracts/testing.md#independent-expectations Diagnostic codes identify public calls as written, not programmer-internal naming conventions. The authored call accessor list supplies an independent finite expected identity set.
// @evidence contracts/testing.md#distinguishing-cases All seventeen direct/factory message/encode/decode combinations reject a top-level bigint instead of a static message object and retain their own operation code.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestProtobufDiagnosticCodeTransform as a unit test. Its helpers call the owning Go operations in process; named subcases retain their fixture inputs, assertions and failure identities. Temporary fixtures and captured output are scoped to the test without a compiler or product-host subprocess.
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
  dir := ttscTypiaTestFixtureDirectory(t, "protobuf-code-")
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
