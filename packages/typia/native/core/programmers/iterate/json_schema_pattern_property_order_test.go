package iterate

import (
  "slices"
  "testing"

  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestJsonSchemaPatternPropertyOrderPreservesFirstPosition verifies repeated patterns keep one ordered slot.
//
// The legacy TypeScript producer stored pairs in a plain object: assigning an
// existing pattern replaced its value without moving or duplicating its first
// insertion position. The Go order record must preserve that overwrite contract.
//
//  1. Insert two patterns, then replace the first pattern with new metadata and schema values.
//  2. Assert the ordered keys remain unique and the map retains the replacement pair.
//
// @evidence contracts/testing.md#behavioral-verification Pattern properties are recorded with a repeated pattern; the key order must keep the first position and the replacement pair must be retained.
// @evidence contracts/testing.md#independent-expectations Replacing an existing key without moving it is JavaScript object assignment semantics; the order is authored.
// @evidence contracts/testing.md#distinguishing-cases One repeated pattern; distinct patterns are covered by ordering in the same fixture.
// @evidence contracts/testing.md#execution-ownership The canonical native Go command (pnpm test:go:native) runs this same-package Test function in process. It calls the order recorder in memory with no checker, filesystem fixture or process.
func TestJsonSchemaPatternPropertyOrderPreservesFirstPosition(t *testing.T) {
  first := &nativemetadata.MetadataSchema{}
  replacement := &nativemetadata.MetadataSchema{}
  extra := json_schema_superfluous{
    patternProperties: map[string]json_schema_metadata_schema_pair{},
  }
  extra.setPatternProperty("first", json_schema_metadata_schema_pair{
    metadata: first,
    schema:   JsonSchema{"type": "string"},
  })
  extra.setPatternProperty("second", json_schema_metadata_schema_pair{
    metadata: &nativemetadata.MetadataSchema{},
    schema:   JsonSchema{"type": "boolean"},
  })
  extra.setPatternProperty("first", json_schema_metadata_schema_pair{
    metadata: replacement,
    schema:   JsonSchema{"type": "number"},
  })

  if slices.Equal(extra.patternPropertyKeys, []string{"first", "second"}) == false {
    t.Fatalf("pattern property order was %v", extra.patternPropertyKeys)
  }
  pair := extra.patternProperties["first"]
  if pair.metadata != replacement || pair.schema["type"] != "number" {
    t.Fatalf("replacement pair was not retained: %#v", pair)
  }
}
