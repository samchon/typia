package iterate

import (
  "testing"
)

// TestOpenApiV3DowngraderCarriesBooleanKeywords verifies the 3.0 downgrade keeps
// a boolean's declared keywords instead of rebuilding a bare `{"type":
// "boolean"}`.
//
// The boolean branch used to append `{"type": "boolean"}` from scratch, dropping
// `default` and every other keyword, while the number/string/reference branch
// carried theirs through `omit_examples`. So a `boolean & Default<true>` kept
// `default` under 3.1 but lost it under 3.0, contradicting
// `OpenApiV3.IJsonSchema.IBoolean`, which declares `default` (and the shared
// `title`/`description`/`deprecated` attributes). The expectations below come
// from that declared type: only keys it allows may survive, and `examples` — the
// one 3.0 does not define — must not.
//
// 1. Downgrade a boolean carrying `default`, and one also carrying attributes.
// 2. Assert each keeps every declared keyword and drops only `examples`.
// 3. Assert a keyword-less boolean still degrades to a bare `{"type": "boolean"}`
//    and that a boolean inside a union keeps its `default`.
func TestOpenApiV3DowngraderCarriesBooleanKeywords(t *testing.T) {
  collection := OpenApiV3Downgrader_downgrade_components(&OpenApi_IComponents{})

  cases := []struct {
    label    string
    input    JsonSchema
    expected JsonSchema
  }{
    {
      label:    "boolean carries its default",
      input:    JsonSchema{"type": "boolean", "default": true},
      expected: JsonSchema{"type": "boolean", "default": true},
    },
    {
      label: "boolean carries default:false and shared attributes",
      input: JsonSchema{
        "type":        "boolean",
        "default":     false,
        "title":       "Enabled",
        "description": "Whether the feature is enabled.",
        "deprecated":  true,
      },
      expected: JsonSchema{
        "type":        "boolean",
        "default":     false,
        "title":       "Enabled",
        "description": "Whether the feature is enabled.",
        "deprecated":  true,
      },
    },
    {
      // `examples` is the one attribute 3.0 does not define; the downgrade must
      // drop it while keeping `default`.
      label: "boolean drops examples but keeps default",
      input: JsonSchema{
        "type":     "boolean",
        "default":  true,
        "examples": map[string]any{"on": true},
      },
      expected: JsonSchema{"type": "boolean", "default": true},
    },
    {
      label:    "keyword-less boolean stays bare",
      input:    JsonSchema{"type": "boolean"},
      expected: JsonSchema{"type": "boolean"},
    },
    {
      label: "boolean default survives inside a union",
      input: JsonSchema{
        "oneOf": []JsonSchema{
          {"type": "boolean", "default": true},
          {"type": "number"},
        },
      },
      expected: JsonSchema{
        "oneOf": []JsonSchema{
          {"type": "boolean", "default": true},
          {"type": "number"},
        },
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
  }
}
