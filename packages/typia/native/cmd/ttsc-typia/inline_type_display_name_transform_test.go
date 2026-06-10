package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestInlineTypeDisplayNameTransform verifies expected strings of inline types.
//
// Issue #1667: validators reported anonymous (inline) type literals through
// their synthetic identifier names — `__type`, `__type.o1`, `Array<__type>` —
// which tell the user nothing about the violated type. Human-facing expected
// strings must instead render the structural form (`{ property: string; }`),
// while the synthetic identifiers stay everywhere identity matters: JSON
// schema component keys and generated-function deduplication.
//
//  1. Transform a fixture mixing inline objects, named interfaces, inline
//     array elements, inline unions, and Set/Map of inline values.
//  2. Execute validate entrypoints against violating inputs and require every
//     reported `expected` to use the structural rendering, never `__type`.
//  3. Require named interfaces to keep reporting their identifier names.
//  4. Require the emitted artifact to carry no `__type` leak at all: inline
//     literal objects are inlined by `typia.json.schemas` (never referenced
//     as components), so with display names in place the synthetic
//     identifiers must vanish from the output entirely.
func TestInlineTypeDisplayNameTransform(t *testing.T) {
  project := inlineTypeDisplayNameProject(t)
  js := inlineTypeDisplayNameTransform(t, project)
  if strings.Contains(js, "__type") {
    t.Fatalf("emitted JavaScript leaked an anonymous __type identifier:\n%s", js)
  }
  if !strings.Contains(js, `"inline"`) {
    t.Fatalf("json.schemas literal lost the inline property:\n%s", js)
  }
  inlineTypeDisplayNameRunRuntimeCases(t, project, js)
}

func inlineTypeDisplayNameProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "inline-display-name-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(inlineTypeDisplayNameTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(inlineTypeDisplayNameSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func inlineTypeDisplayNameTransform(t *testing.T, project string) string {
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
    t.Fatalf("inline display name transform failed: code=%d stderr=\n%s", code, errText)
  }
  return out
}

func inlineTypeDisplayNameRunRuntimeCases(t *testing.T, project string, js string) {
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
  if err := os.WriteFile(runner, []byte(inlineTypeDisplayNameRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("inline display name runtime cases failed: %v\n%s", err, output)
  }
}

const inlineTypeDisplayNameTSConfig = `{
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

const inlineTypeDisplayNameSource = `import typia from "typia";

// The issue #1667 playground shape: nested inline type literals.
export const validateNested = typia.createValidate<{
  property: { property: string };
}>();

// Named interfaces must keep reporting their identifier names.
interface INamed {
  value: string;
}
export const validateNamed = typia.createValidate<{ child: INamed }>();

// Inline element types of arrays previously surfaced by synthetic names.
export const validateInlineArray = typia.createValidate<{
  list: { value: number }[];
}>();

// Inline unions previously surfaced as a pair of synthetic names.
export const validateInlineUnion = typia.createValidate<{
  union: { kind: "a"; a: string } | { kind: "b"; b: number };
}>();

// Containers of inline values previously wrapped the synthetic names.
export const validateInlineSet = typia.createValidate<{
  entries: Set<{ flag: boolean }>;
}>();

// Top-level inline types must render structurally at the "$input" root.
export const validateTopLevel = typia.createValidate<{ id: string }>();

// Tuples of inline objects must render each element structurally.
export const validateInlineTuple = typia.createValidate<{
  pair: [{ a: string }, { b: number }];
}>();

// Component keys are identifiers and must stay on the synthetic names.
export const schemas = typia.json.schemas<[{ inline: { id: string } }]>();
`

const inlineTypeDisplayNameRuntimeRunner = `const mod = require("./main.cjs");

const expectError = (label, result, path, expected) => {
  if (result.success !== false) {
    throw new Error(label + " unexpectedly passed");
  }
  const entry = result.errors.find((error) => error.path === path);
  if (entry === undefined) {
    throw new Error(label + " did not report " + path + ": " + JSON.stringify(result.errors));
  }
  if (entry.expected !== expected) {
    throw new Error(
      label + " reported wrong expected string.\n  wanted: " + expected + "\n  actual: " + entry.expected,
    );
  }
};

const forbidAnonymous = (label, result) => {
  for (const entry of result.errors) {
    if (entry.expected.includes("__type")) {
      throw new Error(label + " leaked an anonymous identifier: " + JSON.stringify(entry));
    }
  }
};

// 1. Nested inline object: the inner property is undefined.
const nested = mod.validateNested({ property: { property: undefined } });
expectError(
  "nested inline (missing leaf)",
  nested,
  "$input.property.property",
  "string",
);
forbidAnonymous("nested inline (missing leaf)", nested);

// 2. Nested inline object: the intermediate object is undefined. The expected
//    string must render the structural form, not __type.
const intermediate = mod.validateNested({ property: undefined });
expectError(
  "nested inline (missing branch)",
  intermediate,
  "$input.property",
  "{ property: string; }",
);
forbidAnonymous("nested inline (missing branch)", intermediate);

// 3. Named interfaces keep their identifier names.
const named = mod.validateNamed({ child: undefined });
expectError("named interface", named, "$input.child", "INamed");

// 4. Inline array element type.
const arrayElement = mod.validateInlineArray({ list: [{ value: "1" }] });
expectError(
  "inline array (element violation)",
  arrayElement,
  "$input.list[0].value",
  "number",
);
forbidAnonymous("inline array (element violation)", arrayElement);

const arrayBranch = mod.validateInlineArray({ list: undefined });
expectError(
  "inline array (missing list)",
  arrayBranch,
  "$input.list",
  "{ value: number; }[]",
);
forbidAnonymous("inline array (missing list)", arrayBranch);

// 5. Inline union: both branches must render structurally.
const union = mod.validateInlineUnion({ union: { kind: "c" } });
if (union.success !== false) {
  throw new Error("inline union unexpectedly passed");
}
forbidAnonymous("inline union", union);

const unionMissing = mod.validateInlineUnion({ union: undefined });
if (unionMissing.success !== false) {
  throw new Error("inline union (missing) unexpectedly passed");
}
const unionEntry = unionMissing.errors.find((error) => error.path === "$input.union");
if (unionEntry === undefined) {
  throw new Error("inline union (missing) did not report $input.union: " + JSON.stringify(unionMissing.errors));
}
if (unionEntry.expected.includes("__type")) {
  throw new Error("inline union (missing) leaked an anonymous identifier: " + JSON.stringify(unionEntry));
}
if (!unionEntry.expected.includes("{ kind: \"a\"; a: string; }") || !unionEntry.expected.includes("{ kind: \"b\"; b: number; }")) {
  throw new Error("inline union (missing) lost a structural branch: " + JSON.stringify(unionEntry));
}

// 6. Set of inline values.
const set = mod.validateInlineSet({ entries: undefined });
expectError(
  "inline Set (missing entries)",
  set,
  "$input.entries",
  "Set<{ flag: boolean; }>",
);
forbidAnonymous("inline Set (missing entries)", set);

// 7. Top-level inline type.
const topLevel = mod.validateTopLevel(null);
expectError("top-level inline", topLevel, "$input", "{ id: string; }");
forbidAnonymous("top-level inline", topLevel);

// 8. Tuple of inline objects.
const tupleElement = mod.validateInlineTuple({ pair: [{ a: "x" }, { b: "1" }] });
expectError(
  "inline tuple (element violation)",
  tupleElement,
  "$input.pair[1].b",
  "number",
);
forbidAnonymous("inline tuple (element violation)", tupleElement);

const tupleMissing = mod.validateInlineTuple({ pair: undefined });
expectError(
  "inline tuple (missing pair)",
  tupleMissing,
  "$input.pair",
  "[{ a: string; }, { b: number; }]",
);
forbidAnonymous("inline tuple (missing pair)", tupleMissing);
`
