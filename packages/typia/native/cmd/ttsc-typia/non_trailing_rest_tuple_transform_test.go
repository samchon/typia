package main

import (
  "os"
  "os/exec"
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
//  2. Require trailing-rest tuples to keep compiling and validating
//     correctly at every length.
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
    nonTrailingRestTrailingControl(t)
  })
}

func nonTrailingRestProject(t *testing.T, prefix string, body string) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "rest-tuple-"+prefix)
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

func nonTrailingRestTrailingControl(t *testing.T) {
  t.Helper()
  project := nonTrailingRestProject(t, "trailing-",
    "export const validate = typia.createValidate<[string, ...number[]]>();")
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("trailing rest tuple failed to compile: %s", errText)
  }
  node, err := exec.LookPath("node")
  if err != nil {
    t.Skip("node executable not found")
  }
  runtimeDir := filepath.Join(project, "runtime")
  if err := os.MkdirAll(runtimeDir, 0o755); err != nil {
    t.Fatalf("mkdir runtime dir: %v", err)
  }
  ttscTypiaTestWriteCommonRuntimeStubs(t, runtimeDir)
  runtimeJS := ttscTypiaTestRewriteCommonJS(t, out)
  if err := os.WriteFile(filepath.Join(runtimeDir, "main.cjs"), []byte(runtimeJS), 0o644); err != nil {
    t.Fatalf("write runtime module: %v", err)
  }
  runner := filepath.Join(runtimeDir, "run.cjs")
  if err := os.WriteFile(runner, []byte(nonTrailingRestRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("trailing rest runtime cases failed: %v\n%s", err, output)
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

const nonTrailingRestRuntimeRunner = `const mod = require("./main.cjs");

const expect = (label, result, success) => {
  if (result.success !== success) {
    throw new Error(label + " expected success=" + success + ": " + JSON.stringify(result.errors));
  }
};

expect("solo head", mod.validate(["head"]), true);
expect("head + numbers", mod.validate(["head", 1, 2, 3]), true);
expect("empty", mod.validate([]), false);
expect("wrong head", mod.validate([1, 2]), false);
expect("wrong rest element", mod.validate(["head", 1, "x"]), false);
`
