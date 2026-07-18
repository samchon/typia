package main

import (
  "fmt"
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestFiniteOptionNumberLeafTransform pins the finite/numeric option matrix for a
// bare `number` leaf across typia.is, typia.assert, and typia.validate (#2196).
//
// The `finite` option is documented as an independent flag that rejects both NaN
// and Infinity, yet it was inert unless `numeric` was also set: typia.is dropped
// `finite` when it built its number gate, and assert/validate gate their verdict
// on that same is-checker, so all three accepted NaN and Infinity under
// `finite:true` alone. The other three rows are regression guards that must not
// move:
//
//   - finite alone   -> reject NaN, Infinity, -Infinity (the #2196 red case)
//   - numeric alone  -> reject NaN, ACCEPT Infinity/-Infinity (numeric != finite)
//   - finite+numeric -> reject NaN, Infinity, -Infinity (already worked)
//   - neither option -> ACCEPT everything (the documented default)
//
//  1. Transform the same `number`-leaf fixture once per option row, injecting the
//     row's options through the resolved --plugins-json payload (the only option
//     source runTransform reads).
//  2. Execute the emitted validators in Node against a finite value plus NaN,
//     Infinity, and -Infinity, requiring is/assert/validate to agree with the row.
//  3. Require the runner to report the exact executed case count so a runner that
//     silently exercised nothing cannot pass as green.
func TestFiniteOptionNumberLeafTransform(t *testing.T) {
  for _, tc := range finiteOptionNumberLeafCases() {
    t.Run(tc.name, func(t *testing.T) {
      project := finiteOptionNumberLeafProject(t)
      js := finiteOptionNumberLeafTransform(t, project, tc.payload())
      finiteOptionNumberLeafRunRuntimeCases(t, project, js, tc)
    })
  }
}

type finiteOptionNumberLeafCase struct {
  name string
  // config is the JSON fragment appended to typia's resolved plugin entry, e.g.
  // `,"finite":true`. Empty means typia's documented defaults.
  config string
  // acceptNaN and acceptInfinity are the expected verdicts for the non-finite
  // inputs; a finite value is always accepted.
  acceptNaN      bool
  acceptInfinity bool
}

func (tc finiteOptionNumberLeafCase) payload() string {
  return `[{"config":{"transform":"typia/lib/transform"` + tc.config + `},"name":"typia","stage":"transform"}]`
}

func finiteOptionNumberLeafCases() []finiteOptionNumberLeafCase {
  return []finiteOptionNumberLeafCase{
    {
      name:           "finite alone rejects NaN and Infinity",
      config:         `,"finite":true`,
      acceptNaN:      false,
      acceptInfinity: false,
    },
    {
      name:           "numeric alone rejects NaN but accepts Infinity",
      config:         `,"numeric":true`,
      acceptNaN:      false,
      acceptInfinity: true,
    },
    {
      name:           "finite and numeric together reject NaN and Infinity",
      config:         `,"finite":true,"numeric":true`,
      acceptNaN:      false,
      acceptInfinity: false,
    },
    {
      name:           "neither option accepts NaN and Infinity",
      config:         ``,
      acceptNaN:      true,
      acceptInfinity: true,
    },
  }
}

func finiteOptionNumberLeafProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "finite-option-number-leaf-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(finiteOptionNumberLeafTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(finiteOptionNumberLeafSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func finiteOptionNumberLeafTransform(t *testing.T, project string, payload string) string {
  t.Helper()
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
      "--plugins-json", payload,
    })
  })
  if code != 0 {
    t.Fatalf("finite option transform failed: code=%d stderr=\n%s", code, errText)
  }
  return out
}

func finiteOptionNumberLeafRunRuntimeCases(t *testing.T, project string, js string, tc finiteOptionNumberLeafCase) {
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
  if err := os.WriteFile(runner, []byte(finiteOptionNumberLeafRuntimeRunner(tc)), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = project
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("finite option runtime cases failed: %v\n%s", err, output)
  }
  // Every input drives is, validate, and assert, so the runner must report one
  // executed assertion per (input, function) pair. Pinning the count keeps a
  // runner that short-circuited or skipped cases from passing as a false green.
  const expected = "RAN 12 CASES"
  if !strings.Contains(string(output), expected) {
    t.Fatalf("finite option runner did not report %q; got:\n%s", expected, output)
  }
}

func finiteOptionNumberLeafRuntimeRunner(tc finiteOptionNumberLeafCase) string {
  return fmt.Sprintf(`const mod = require("./main.cjs");

const cases = [
  { name: "finite 1", value: 1, accept: true },
  { name: "NaN", value: Number.NaN, accept: %[1]t },
  { name: "Infinity", value: Number.POSITIVE_INFINITY, accept: %[2]t },
  { name: "-Infinity", value: Number.NEGATIVE_INFINITY, accept: %[2]t },
];

let ran = 0;
for (const c of cases) {
  const result = mod.run(c.value);

  ran += 1;
  if (result.is !== c.accept) {
    throw new Error(c.name + ": typia.is expected " + c.accept + " but got " + result.is);
  }

  ran += 1;
  if (result.validate !== c.accept) {
    throw new Error(c.name + ": typia.validate.success expected " + c.accept + " but got " + result.validate);
  }

  ran += 1;
  const assertAccepted = result.assertThrew === false;
  if (assertAccepted !== c.accept) {
    throw new Error(c.name + ": typia.assert accepted=" + assertAccepted + " but expected " + c.accept);
  }
}

console.log("RAN " + ran + " CASES");
`, tc.acceptNaN, tc.acceptInfinity)
}

const finiteOptionNumberLeafTSConfig = `{
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

const finiteOptionNumberLeafSource = `import typia from "typia";

interface FiniteBox {
  value: number;
}

const check = typia.createIs<FiniteBox>();
const validate = typia.createValidate<FiniteBox>();
const assert = typia.createAssert<FiniteBox>();

const captureThrow = (task: () => void): boolean => {
  try {
    task();
    return false;
  } catch {
    return true;
  }
};

export const run = (value: number) => ({
  is: check({ value }),
  validate: validate({ value }).success,
  assertThrew: captureThrow(() => assert({ value })),
});
`
