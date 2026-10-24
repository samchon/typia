package main

import (
  "os"
  "path/filepath"
  "testing"
)

// TestJsonSchemaRecursiveArrayAliasTransform verifies recursive arrays survive
// analysis and produce finite, repeatable schema literals.
//
// The alias and array metadata may share an identity; constructed metadata alone
// cannot establish which names the TypeScript checker actually supplies.
//
// 1. Transform recursive, constrained and nonrecursive declarations together.
// 2. Compare named structural bodies and distinct use-site constraints.
// 3. Repeat emission and require identical complete JavaScript bytes.
//
// @evidence contracts/testing.md#behavioral-verification Runs the native transform in process, decodes emitted schema literals and compares array bodies and tagged properties; complete output equality pins deterministic emission.
// @evidence contracts/testing.md#independent-expectations The authored recursive type requires an array whose items reference the value union. Explicit max/min tags constrain different properties and must not modify an untagged sibling.
// @evidence contracts/testing.md#distinguishing-cases Union-root and array-root traversal, two tagged sibling uses and an untagged sibling coexist with an ordinary array control; emitted identity and constraint placement are asserted separately.
// @evidence contracts/testing.md#execution-ownership pnpm test:go:native discovers this test; runTransform and AST decoding execute in process using one fixture project, without compiler or JavaScript subprocesses.
func TestJsonSchemaRecursiveArrayAliasTransform(t *testing.T) {
  dir := ttscTypiaTestFixtureDirectory(t, "recursive-array-schema-")
  if err := os.MkdirAll(filepath.Join(dir, "src"), 0o755); err != nil {
    t.Fatal(err)
  }
  for name, source := range map[string]string{
    "tsconfig.json": atomicIntersectionSchemaTSConfig,
    "src/main.ts": `import typia, { tags } from "typia";
type JsonArray = JsonValue[];
type JsonObject = { [key: string]: JsonValue };
type JsonValue = string | number | boolean | null | JsonArray | JsonObject;
interface Constrained {
  small: JsonArray & tags.MaxItems<1>;
  many: JsonArray & tags.MinItems<2>;
  plain: JsonArray;
}
export const schemas = typia.json.schemas<[JsonValue, JsonArray, Constrained, string[]]>();
`,
  } {
    if err := os.WriteFile(filepath.Join(dir, filepath.FromSlash(name)), []byte(source), 0o644); err != nil {
      t.Fatal(err)
    }
  }
  var previous string
  for i := 0; i < 3; i++ {
    output, stderr, code := ttscTypiaTestCapture(func() int {
      return runTransform([]string{"--cwd", dir, "--tsconfig", "tsconfig.json", "--file", "src/main.ts", "--output", "js"})
    })
    if code != 0 {
      t.Fatalf("transform failed (%d): %s", code, stderr)
    }
    unit := ttscTypiaTestSchemaLiteral(t, output)
    if i != 0 && output != previous {
      t.Error("unchanged source produced different bytes")
    }
    previous = output
    schemas := ttscTypiaTestSchemaPath(t, unit, "components", "schemas").(map[string]any)
    body := schemas["JsonArray"].(map[string]any)
    ttscTypiaTestSchemaEqual(t, body, map[string]any{"type": "array", "items": map[string]any{"$ref": "#/components/schemas/JsonValue"}})
    properties := ttscTypiaTestSchemaPath(t, unit, "components", "schemas", "Constrained", "properties").(map[string]any)
    for _, sample := range []struct {
      name       string
      constraint string
      value      any
    }{
      {"small", "maxItems", float64(1)}, {"many", "minItems", float64(2)}, {"plain", "", nil},
    } {
      ref := properties[sample.name].(map[string]any)["$ref"].(string)
      target := schemas[ref[len("#/components/schemas/"):]].(map[string]any)
      expected := map[string]any{"type": "array", "items": map[string]any{"$ref": "#/components/schemas/JsonValue"}}
      if sample.constraint != "" {
        expected[sample.constraint] = sample.value
      }
      ttscTypiaTestSchemaEqual(t, target, expected)
    }
  }
}
