package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestNonTrailingRestTupleTransform verifies non-trailing rest rejection.
//
// Issue #1932: tuples whose rest element is not in the trailing position
// compiled into positionally wrong validators — `[...unknown[], Status]`
// checked the post-rest element at the fixed index 1 and emitted an exact
// length comparison, so only length-2 inputs could ever pass, and then only
// by coincidence. Every programmer (checker, stringify, clone, random)
// addresses tuples by fixed leading positions, so the honest resolution is
// a compile-time rejection, mirroring the json.schemas bigint precedent.
//
//  1. Require leading-rest and middle-rest tuples to be rejected: the transform
//     records a diagnostic naming the offending tuple, which every host --
//     single-file included since samchon/typia#2117 -- reports while refusing to
//     publish an artifact.
//  2. Require a trailing-rest tuple to transform successfully and retain both
//     its number head check and boolean rest checks in emitted code.
//
// @evidence contracts/testing.md#behavioral-verification Leading and middle rest positions return status 3, name the offending tuple and cause, and publish no artifact; the trailing-rest twin emits number and boolean guards instead of the runtime stub.
// @evidence contracts/testing.md#independent-expectations Typia's positional tuple contract supports a fixed head followed by a repeated tail, while non-trailing variable-length segments are explicitly unsupported and must diagnose rather than emit fixed wrong indices.
// @evidence contracts/testing.md#distinguishing-cases Leading and middle rest shapes are rejected separately; moving the variable-length segment to the end produces an accepted number-head/boolean-tail twin.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestNonTrailingRestTupleTransform as a unit test. Its named subtests call runTransform in process on isolated fixture files; the helper verifies diagnostic identity and output without a compiler subprocess.
func TestNonTrailingRestTupleTransform(t *testing.T) {
  t.Run("leading rest rejected", func(t *testing.T) {
    nonTrailingRestExpectRejection(t, "leading-",
      "export const validate = typia.createValidate<[...unknown[], string]>();",
      "[...unknown[], string]")
  })
  t.Run("middle rest rejected", func(t *testing.T) {
    nonTrailingRestExpectRejection(t, "middle-",
      "export const validate = typia.createValidate<[number, ...boolean[], string]>();",
      "[number, ...boolean[], string]")
  })
  t.Run("trailing rest keeps working", func(t *testing.T) {
    project := nonTrailingRestProject(t, "trailing-",
      "export const validate = typia.createValidate<[number, ...boolean[]]>();")
    out, errText, code := ttscTypiaTestCapture(func() int {
      return runTransform([]string{"--cwd", project, "--tsconfig", "tsconfig.json", "--file", "src/main.ts", "--output", "js"})
    })
    if code != 0 {
      t.Fatalf("trailing rest tuple must transform: code=%d stderr=%s", code, errText)
    }
    if !strings.Contains(out, `"number" === typeof`) || !strings.Contains(out, `"boolean" === typeof`) || strings.Contains(out, ".createValidate()") {
      t.Fatalf("trailing rest output must check both the head and rest elements:\n%s", out)
    }
  })
}

func nonTrailingRestProject(t *testing.T, prefix string, body string) string {
  t.Helper()
  dir := ttscTypiaTestFixtureDirectory(t, "rest-tuple-"+prefix)
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(nonTrailingRestTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  source := "import typia from \"typia\";\n\n" + body + "\n"
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(source), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

// nonTrailingRestExpectRejection requires the rejection to reach the caller as a
// diagnostic naming `tuple`, with no artifact published. This previously asserted
// code 0 and inspected the untransformed call in stdout; that success code was
// the samchon/typia#2117 defect, and in `js` mode the surviving `.createValidate()`
// was only type erasure, so the diagnostic is the load-bearing evidence anyway.
func nonTrailingRestExpectRejection(t *testing.T, prefix string, body string, tuple string) {
  t.Helper()
  project := nonTrailingRestProject(t, prefix, body)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 3 {
    t.Fatalf("non-trailing rest tuple should be rejected with code 3: code=%d stdout=\n%s\nstderr=\n%s", code, out, errText)
  }
  if !strings.Contains(errText, "error TS(typia.createValidate):") ||
    !strings.Contains(errText, tuple) ||
    !strings.Contains(errText, "non-trailing rest element in tuple type is not supported.") {
    t.Fatalf("rejection diagnostic did not name the tuple and cause:\n%s", errText)
  }
  if out != "" {
    t.Fatalf("rejected transform published an artifact:\n%s", out)
  }
}

const nonTrailingRestTSConfig = `{
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
