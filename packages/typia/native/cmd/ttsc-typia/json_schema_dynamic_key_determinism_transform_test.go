package main

import (
  "bytes"
  "crypto/sha256"
  "os"
  "os/exec"
  "path/filepath"
  "testing"
)

// TestJsonSchemaDynamicKeyDeterminismTransform verifies dynamic-key schemas emit deterministically.
//
// Multiple template and numeric index signatures used to reach a Go map before
// their value metadata was merged. Repeating one unchanged transform therefore
// has to compare the complete output bytes, while runtime checks ensure a stable
// order is not achieved by losing, duplicating, or broadening schema branches.
//
//  1. Transform unchanged tag-free dynamic-key fixtures repeatedly to TypeScript and JavaScript.
//  2. Require every complete emit to match the first emit byte for byte.
//  3. Execute the JavaScript and assert branch completeness plus unrelated ordering controls.
func TestJsonSchemaDynamicKeyDeterminismTransform(t *testing.T) {
  project := jsonSchemaDynamicKeyDeterminismProject(t)
  var javascript string
  for _, output := range []string{"ts", "js"} {
    baseline := jsonSchemaDynamicKeyDeterminismTransform(t, project, output)
    for iteration := 1; iteration < 32; iteration++ {
      current := jsonSchemaDynamicKeyDeterminismTransform(t, project, output)
      if bytes.Equal([]byte(current), []byte(baseline)) == false {
        t.Fatalf(
          "%s emit %d changed for unchanged input: baseline=%x current=%x first-difference=%d",
          output,
          iteration+1,
          sha256.Sum256([]byte(baseline)),
          sha256.Sum256([]byte(current)),
          jsonSchemaDynamicKeyDeterminismFirstDifference(baseline, current),
        )
      }
    }
    t.Logf("%s emit remained byte-identical across 32 transforms: sha256=%x", output, sha256.Sum256([]byte(baseline)))
    if output == "js" {
      javascript = baseline
    }
  }
  jsonSchemaDynamicKeyDeterminismRunRuntimeCases(t, project, javascript)
}

func jsonSchemaDynamicKeyDeterminismProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "json-schema-dynamic-key-determinism-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(jsonSchemaDynamicKeyDeterminismTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(jsonSchemaDynamicKeyDeterminismSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func jsonSchemaDynamicKeyDeterminismTransform(t *testing.T, project string, output string) string {
  t.Helper()
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", output,
    })
  })
  if code != 0 {
    t.Fatalf("dynamic-key schema transform failed: output=%s code=%d stderr=\n%s", output, code, errText)
  }
  return out
}

func jsonSchemaDynamicKeyDeterminismFirstDifference(x string, y string) int {
  limit := len(x)
  if len(y) < limit {
    limit = len(y)
  }
  for i := 0; i < limit; i++ {
    if x[i] != y[i] {
      return i
    }
  }
  return limit
}

func jsonSchemaDynamicKeyDeterminismRunRuntimeCases(t *testing.T, project string, javascript string) {
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
  runtimeJS := ttscTypiaTestRewriteCommonJS(t, javascript)
  if err := os.WriteFile(filepath.Join(runtimeDir, "main.cjs"), []byte(runtimeJS), 0o644); err != nil {
    t.Fatalf("write runtime module: %v", err)
  }
  runner := filepath.Join(runtimeDir, "run.cjs")
  if err := os.WriteFile(runner, []byte(jsonSchemaDynamicKeyDeterminismRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("dynamic-key schema runtime cases failed: %v\n%s", err, output)
  }
}

const jsonSchemaDynamicKeyDeterminismTSConfig = `{
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

const jsonSchemaDynamicKeyDeterminismSource = `import typia from "typia";

interface DynamicComposite {
  id: string;
  name: string;
  [index: number]: number;
  [key: ` + "`prefix_${string}`" + `]: string;
  [key: ` + "`${string}_postfix`" + `]: string;
  [key: ` + "`value_${number}`" + `]: boolean | string | number;
  [key: ` + "`between_${string}_and_${number}`" + `]: boolean;
}

interface DynamicTemplate {
  [key: ` + "`prefix_${string}`" + `]: string;
  [key: ` + "`${string}_postfix`" + `]: string;
  [key: ` + "`value_${number}`" + `]: number;
  [key: ` + "`between_${string}_and_${number}`" + `]: boolean;
}

interface DynamicUnion {
  [key: number | ` + "`prefix_${string}`" + ` | ` + "`${string}_postfix`" + `]: string;
  [key: ` + "`value_between_${number}_and_${number}`" + `]: number;
}

interface LiteralOnly {
  z: string;
  a: number;
}

interface SingleDynamic {
  [key: ` + "`only_${string}`" + `]: string;
}

type OrdinaryUnion = string | number;

export const schemas = typia.json.schemas<[
  DynamicComposite,
  DynamicTemplate,
  DynamicUnion,
  LiteralOnly,
  SingleDynamic,
  OrdinaryUnion,
]>();
`

const jsonSchemaDynamicKeyDeterminismRuntimeRunner = `const unit = require("./main.cjs").schemas;

const components = unit.components?.schemas ?? {};
const assertTypes = (name, expected) => {
  const additional = components[name]?.additionalProperties;
  const actual = Array.isArray(additional?.oneOf)
    ? additional.oneOf.map((schema) => schema.type)
    : [additional?.type];
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    throw new Error(name + " branches were " + JSON.stringify(actual) + ", expected " + JSON.stringify(expected));
  }
};

assertTypes("DynamicComposite", ["number", "string", "boolean"]);
assertTypes("DynamicTemplate", ["string", "number", "boolean"]);
assertTypes("DynamicUnion", ["string", "number"]);

const literal = components.LiteralOnly;
const literalShape = {
  type: literal?.type,
  propertyKeys: Object.keys(literal?.properties ?? {}),
  propertyTypes: Object.values(literal?.properties ?? {}).map((schema) => schema.type),
  required: literal?.required,
  additionalProperties: literal?.additionalProperties,
};
const expectedLiteralShape = {
  type: "object",
  propertyKeys: ["z", "a"],
  propertyTypes: ["string", "number"],
  required: ["z", "a"],
  additionalProperties: false,
};
if (JSON.stringify(literalShape) !== JSON.stringify(expectedLiteralShape)) {
  throw new Error("zero-dynamic literal schema changed: " + JSON.stringify(literalShape));
}
if (components.SingleDynamic?.additionalProperties?.type !== "string") {
  throw new Error("single dynamic-key schema changed: " + JSON.stringify(components.SingleDynamic));
}
const ordinaryTypes = components.OrdinaryUnion?.oneOf?.map((schema) => schema.type) ?? [];
if (JSON.stringify(ordinaryTypes) !== JSON.stringify(["string", "number"])) {
  throw new Error("ordinary union branches changed: " + JSON.stringify(ordinaryTypes));
}

const refs = unit.schemas.map((schema) => schema.$ref);
const expectedRefs = [
  "#/components/schemas/DynamicComposite",
  "#/components/schemas/DynamicTemplate",
  "#/components/schemas/DynamicUnion",
  "#/components/schemas/LiteralOnly",
  "#/components/schemas/SingleDynamic",
  "#/components/schemas/OrdinaryUnion",
];
if (JSON.stringify(refs) !== JSON.stringify(expectedRefs)) {
  throw new Error("schema order changed: " + JSON.stringify(refs));
}
`
