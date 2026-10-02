package main

import (
  "bytes"
  "crypto/sha256"
  "os"
  "path/filepath"
  "testing"
)

// TestJsonSchemaDynamicKeyDeterminismTransform checks the authored operation results described below.
//
// Deterministic source/schema generation must not depend on Go map enumeration order. Repetition is an ordering oracle only; semantic branch-preservation checks are separate assertions on the authored fixture.
//
// 1. Composite, template, key-union, fixed-property, singleton-dynamic and ordinary-union shapes coexist, and TypeScript/JavaScript outputs are checked independently.
// 2. Both output modes produce identical complete bytes across thirty-two transforms of one unchanged dynamic-key project.
//
// @evidence contracts/testing.md#behavioral-verification Both output modes retain the authored fixed-property types, required keys, dynamic value-type unions, single dynamic value and ordinary primitive union, then produce identical complete bytes across thirty-two transforms of one unchanged project.
// @evidence contracts/testing.md#independent-expectations Deterministic source/schema generation must not depend on Go map enumeration order. Repetition is an ordering oracle only; semantic branch-preservation checks are separate assertions on the authored fixture.
// @evidence contracts/testing.md#distinguishing-cases Composite, template, key-union, fixed-property, singleton-dynamic and ordinary-union shapes coexist, and TypeScript/JavaScript outputs are checked independently.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestJsonSchemaDynamicKeyDeterminismTransform as a unit test. Its helpers call the owning Go operations in process; named subcases retain their fixture inputs, assertions and failure identities. Temporary fixtures and captured output are scoped to the test without a compiler or product-host subprocess.
func TestJsonSchemaDynamicKeyDeterminismTransform(t *testing.T) {
  project := jsonSchemaDynamicKeyDeterminismProject(t)
  for _, output := range []string{"ts", "js"} {
    baseline := jsonSchemaDynamicKeyDeterminismTransform(t, project, output)
    unit := ttscTypiaTestSchemaLiteral(t, baseline)
    for name, expected := range map[string][]any{
      "DynamicComposite": {map[string]any{"type": "number"}, map[string]any{"type": "string"}, map[string]any{"type": "boolean"}},
      "DynamicTemplate":  {map[string]any{"type": "string"}, map[string]any{"type": "number"}, map[string]any{"type": "boolean"}},
      "DynamicUnion":     {map[string]any{"type": "string"}, map[string]any{"type": "number"}},
    } {
      ttscTypiaTestSchemaEqual(t, ttscTypiaTestSchemaPath(t, unit, "components", "schemas", name, "additionalProperties", "oneOf"), expected)
    }
    ttscTypiaTestSchemaEqual(t, ttscTypiaTestSchemaPath(t, unit, "components", "schemas", "DynamicComposite", "properties"), map[string]any{"id": map[string]any{"type": "string"}, "name": map[string]any{"type": "string"}})
    ttscTypiaTestSchemaEqual(t, ttscTypiaTestSchemaPath(t, unit, "components", "schemas", "DynamicComposite", "required"), []any{"id", "name"})
    ttscTypiaTestSchemaEqual(t, ttscTypiaTestSchemaPath(t, unit, "components", "schemas", "LiteralOnly", "properties"), map[string]any{"z": map[string]any{"type": "string"}, "a": map[string]any{"type": "number"}})
    ttscTypiaTestSchemaEqual(t, ttscTypiaTestSchemaPath(t, unit, "components", "schemas", "LiteralOnly", "required"), []any{"z", "a"})
    ttscTypiaTestSchemaEqual(t, ttscTypiaTestSchemaPath(t, unit, "components", "schemas", "LiteralOnly", "additionalProperties"), false)
    ttscTypiaTestSchemaEqual(t, ttscTypiaTestSchemaPath(t, unit, "components", "schemas", "SingleDynamic", "additionalProperties"), map[string]any{"type": "string"})
    ttscTypiaTestSchemaEqual(t, ttscTypiaTestSchemaPath(t, unit, "components", "schemas", "OrdinaryUnion", "oneOf"), []any{map[string]any{"type": "string"}, map[string]any{"type": "number"}})
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
  }
}

func jsonSchemaDynamicKeyDeterminismProject(t *testing.T) string {
  t.Helper()
  dir := ttscTypiaTestFixtureDirectory(t, "json-schema-dynamic-key-determinism-")
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
