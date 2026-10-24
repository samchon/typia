package programmers

import (
  "reflect"
  "testing"

  iterate "github.com/samchon/typia/packages/typia/native/core/programmers/iterate"
)

// TestRandomProgrammerArraySchemaReference verifies random generation consumes
// the schema writer's selected recursive variant rather than the bare type name.
//
// A recursive array can have several constrained schema components; only the
// returned reference identifies the constraints of the current use.
//
// 1. Supply a decoy plain component and a referenced maximum-zero variant.
// 2. Resolve a variant with multiple alternative tag rows.
// 3. Preserve inline, external and unresolved schemas without inventing a target.
//
// @evidence contracts/testing.md#behavioral-verification Resolves authored component references and compares complete schema lists, including explicit zero bounds and alternatives, as consumed by the random generator.
// @evidence contracts/testing.md#independent-expectations A local reference selects its named component, not a similarly named unconstrained component; literal array schema maps establish the expected constraints.
// @evidence contracts/testing.md#distinguishing-cases Distinguishes plain versus constrained targets, zero bounds, one versus multiple rows, inline schemas, nil components, absent targets and external references.
// @evidence contracts/testing.md#execution-ownership pnpm test:go:native discovers this same-package unit test; it executes the schema consumer in memory with no compiler or product process.
func TestRandomProgrammerArraySchemaReference(t *testing.T) {
  empty := iterate.JsonSchema{"type": "array", "maxItems": 0}
  multiple := []iterate.JsonSchema{empty, {"type": "array", "minItems": 2}}
  components := &iterate.OpenApi_IComponents{Schemas: map[string]iterate.JsonSchema{
    "Tree": {"type": "array"}, "Tree-array": empty,
    "Tree-array-1": {"oneOf": multiple},
  }}
  for _, sample := range []struct {
    name     string
    schema   iterate.JsonSchema
    expected []iterate.JsonSchema
  }{
    {"selected tagged target", iterate.JsonSchema{"$ref": "#/components/schemas/Tree-array"}, []iterate.JsonSchema{empty}},
    {"alternative rows", iterate.JsonSchema{"$ref": "#/components/schemas/Tree-array-1"}, multiple},
    {"inline", empty, []iterate.JsonSchema{empty}},
    {"missing", iterate.JsonSchema{"$ref": "#/components/schemas/Missing"}, []iterate.JsonSchema{{"$ref": "#/components/schemas/Missing"}}},
    {"external", iterate.JsonSchema{"$ref": "other.json#/Tree-array"}, []iterate.JsonSchema{{"$ref": "other.json#/Tree-array"}}},
  } {
    t.Run(sample.name, func(t *testing.T) {
      actual := randomProgrammer_array_schema_list(components, []iterate.JsonSchema{sample.schema})
      if !reflect.DeepEqual(actual, sample.expected) {
        t.Errorf("got %#v, want %#v", actual, sample.expected)
      }
    })
  }
  original := []iterate.JsonSchema{empty}
  if !reflect.DeepEqual(randomProgrammer_array_schema_list(nil, original), original) {
    t.Error("nil components changed inline schema")
  }
}
