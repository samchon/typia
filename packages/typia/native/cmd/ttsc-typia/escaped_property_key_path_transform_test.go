package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "testing"
)

// TestEscapedPropertyKeyPathTransform verifies emits with hostile keys parse.
//
// Sole-literal property keys are folded into the emit as accessor path text, and
// no build step reads the file back, so a mis-escaped key shipped as a broken
// artifact while ttsc still exited 0. A `"` in a key terminated the path string
// early and the emitted module stopped being JavaScript; a control character
// stayed raw and the reported path became unparseable. Only running node against
// a real emit can catch that, which is why this asserts on the transform output
// rather than on the factory in isolation.
//
//  1. Transform a fixture whose keys carry quotes, backslashes, and control
//     characters.
//  2. Assert node --check accepts the emitted module as JavaScript.
//  3. Execute it and assert each reported path is the accessor JSON.stringify
//     defines for that key, which is what the runtime helper produces for
//     dynamic keys.
func TestEscapedPropertyKeyPathTransform(t *testing.T) {
  project := escapedPropertyKeyPathProject(t)
  js := escapedPropertyKeyPathTransform(t, project)
  escapedPropertyKeyPathCheckSyntax(t, project, js)
  escapedPropertyKeyPathRunRuntimeCases(t, project, js)
}

func escapedPropertyKeyPathProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "escaped-property-key-path-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(escapedPropertyKeyPathTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(escapedPropertyKeyPathSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func escapedPropertyKeyPathTransform(t *testing.T, project string) string {
  t.Helper()
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("escaped property key transform failed: code=%d stderr=\n%s", code, errText)
  }
  return out
}

// escapedPropertyKeyPathCheckSyntax runs node against the emit exactly as it
// would ship. node --check only parses, so the unresolved typia imports in the
// untouched output do not matter, and that keeps this a check of the real
// artifact rather than of a rewritten copy.
func escapedPropertyKeyPathCheckSyntax(t *testing.T, project string, js string) {
  t.Helper()
  node, err := exec.LookPath("node")
  if err != nil {
    t.Skip("node executable not found")
  }
  emitted := filepath.Join(project, "emitted.cjs")
  if err := os.WriteFile(emitted, []byte(js), 0o644); err != nil {
    t.Fatalf("write emitted module: %v", err)
  }
  if output, err := exec.Command(node, "--check", emitted).CombinedOutput(); err != nil {
    t.Fatalf("emitted module is not valid JavaScript: %v\n%s\n--- emit ---\n%s", err, output, js)
  }
}

func escapedPropertyKeyPathRunRuntimeCases(t *testing.T, project string, js string) {
  t.Helper()
  node, err := exec.LookPath("node")
  if err != nil {
    t.Skip("node executable not found")
  }
  runtimeDir := filepath.Join(project, "runtime")
  if err := os.MkdirAll(runtimeDir, 0o755); err != nil {
    t.Fatalf("mkdir runtime dir: %v", err)
  }
  ttscTypiaTestWriteCommonRuntimeStubs(t, runtimeDir)
  runtimeJS := ttscTypiaTestRewriteCommonJS(t, js)
  if err := os.WriteFile(filepath.Join(runtimeDir, "main.cjs"), []byte(runtimeJS), 0o644); err != nil {
    t.Fatalf("write runtime module: %v", err)
  }
  runner := filepath.Join(runtimeDir, "run.cjs")
  if err := os.WriteFile(runner, []byte(escapedPropertyKeyPathRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = project
  if output, err := cmd.CombinedOutput(); err != nil {
    t.Fatalf("escaped property key runtime cases failed: %v\n%s", err, output)
  }
}

const escapedPropertyKeyPathTSConfig = `{
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

const escapedPropertyKeyPathSource = `import typia from "typia";

interface IHostileKeys {
  "quote\"key": number;
  "back\\slash": number;
  "line\nbreak": number;
  "tab\tkey": number;
  "bell\u0007key": number;
  "nul\u0000key": number;
  "sep\u2028key": number;
  "plain-key": number;
  plainIdentifier: number;
}

export const KEYS: string[] = [
  "quote\"key",
  "back\\slash",
  "line\nbreak",
  "tab\tkey",
  "bell\u0007key",
  "nul\u0000key",
  "sep\u2028key",
  "plain-key",
];

const validateHostile = typia.createValidate<IHostileKeys>();

export const run = () => {
  const input: Record<string, unknown> = { plainIdentifier: 1 };
  for (const key of KEYS) input[key] = "not a number";
  return validateHostile(input);
};
`

// The expected path is rebuilt with JSON.stringify rather than written out
// literally, because that is the contract _accessExpressionAsString implements
// for dynamic keys and the compile-time fold must agree with it.
const escapedPropertyKeyPathRuntimeRunner = `const mod = require("./main.cjs");
const result = mod.run();

if (result.success !== false) {
  throw new Error("validate accepted non-number values");
}
for (const key of mod.KEYS) {
  const expected = "$input[" + JSON.stringify(key) + "]";
  const found = result.errors.find((error) => error.path === expected);
  if (!found) {
    throw new Error(
      "missing path for key " + JSON.stringify(key) +
        ": expected " + JSON.stringify(expected) +
        ", got " + JSON.stringify(result.errors.map((error) => error.path)),
    );
  }
}
if (result.errors.some((error) => error.path === "$input.plainIdentifier")) {
  throw new Error("identifier fast path reported an error for a valid value");
}
`
