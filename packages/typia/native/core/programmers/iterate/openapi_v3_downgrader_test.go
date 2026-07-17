package iterate

import (
  "encoding/json"
  "strings"
  "testing"
)

// TestOpenApiV3DowngraderRewritesDialect verifies the 3.0 downgrade rewrites the
// three constructs the emended 3.1 writer emits that OpenAPI 3.0 does not define.
//
// json_schema_station speaks 3.1 only: a nullable type is a `{"type": "null"}`
// union member, a literal is `const`, and a tuple is `prefixItems`. The "3.0"
// entry points used to relabel that document without rewriting it, so a document
// declaring 3.0 carried keywords no conformant 3.0 consumer can read. The
// expected shapes below come from the OpenAPI 3.0 specification, not from what
// the downgrader happens to produce.
//
// 1. Downgrade a nullable atomic, a literal union, and a tuple.
// 2. Assert each uses the 3.0 spelling: nullable flag, enum, bounded array.
// 3. Assert no 3.1-only keyword (`const`, `prefixItems`, a null union member)
//    survives.
func TestOpenApiV3DowngraderRewritesDialect(t *testing.T) {
  collection := OpenApiV3Downgrader_downgrade_components(&OpenApi_IComponents{})

  cases := []struct {
    label    string
    input    JsonSchema
    expected JsonSchema
  }{
    {
      label: "nullable atomic uses the nullable flag",
      input: JsonSchema{
        "oneOf": []JsonSchema{
          {"type": "null"},
          {"type": "string"},
        },
      },
      expected: JsonSchema{"type": "string", "nullable": true},
    },
    {
      label: "literal union collapses to enum",
      input: JsonSchema{
        "oneOf": []JsonSchema{
          {"const": "alpha"},
          {"const": "beta"},
        },
      },
      expected: JsonSchema{"type": "string", "enum": []any{"alpha", "beta"}},
    },
    {
      // A numeric literal reaches the downgrader as the compiler's named
      // `jsnum.Number` (underlying float64), so classifying constants by
      // concrete type mislabels the numeric branch `object`. The named type
      // below stands in for it.
      label: "mixed literal union labels the numeric branch number",
      input: JsonSchema{
        "oneOf": []JsonSchema{
          {"const": "three"},
          {"const": openApiV3DowngraderTestNumber(1)},
          {"const": openApiV3DowngraderTestNumber(2)},
        },
      },
      expected: JsonSchema{
        "oneOf": []JsonSchema{
          {"type": "string", "enum": []any{"three"}},
          {"type": "number", "enum": []any{openApiV3DowngraderTestNumber(1), openApiV3DowngraderTestNumber(2)}},
        },
      },
    },
    {
      label: "tuple degrades to a bounded array",
      input: JsonSchema{
        "type": "array",
        "prefixItems": []JsonSchema{
          {"type": "string"},
          {"type": "number"},
        },
        "additionalItems": false,
      },
      expected: JsonSchema{
        "type": "array",
        "items": JsonSchema{
          "oneOf": []JsonSchema{
            {"type": "string"},
            {"type": "number"},
          },
        },
        "minItems": 2,
        "maxItems": 2,
      },
    },
  }

  for _, tc := range cases {
    actual := OpenApiV3Downgrader_downgrade_schema(collection, tc.input)
    if openApiV3DowngraderTestJSON(t, actual) != openApiV3DowngraderTestJSON(t, tc.expected) {
      t.Fatalf("%s: got %s, want %s", tc.label,
        openApiV3DowngraderTestJSON(t, actual),
        openApiV3DowngraderTestJSON(t, tc.expected))
    }
    serialized := openApiV3DowngraderTestJSON(t, actual)
    for _, keyword := range []string{`"const"`, `"prefixItems"`, `"type":"null"`} {
      if strings.Contains(serialized, keyword) {
        t.Fatalf("%s: 3.1-only keyword %s leaked into 3.0 output: %s", tc.label, keyword, serialized)
      }
    }
  }
}

// openApiV3DowngraderTestNumber is a named float64 type standing in for the
// compiler's `jsnum.Number`, so the test exercises the reflected-kind path
// rather than the plain `float64` a literal never actually carries.
type openApiV3DowngraderTestNumber float64

func openApiV3DowngraderTestJSON(t *testing.T, schema JsonSchema) string {
  t.Helper()
  bytes, err := json.Marshal(schema)
  if err != nil {
    t.Fatalf("marshal failed: %v", err)
  }
  return string(bytes)
}
