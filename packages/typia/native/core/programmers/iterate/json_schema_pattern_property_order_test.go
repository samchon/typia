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
