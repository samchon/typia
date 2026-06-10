package typia_test

import (
  "testing"

  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// definedNumber mimics typescript-go's internal jsnum.Number: a defined
// float64 type that a closed `case float64:` switch never matches.
type definedNumber float64

// TestMetadataTypeTagReadsDefinedNumberSequences verifies sequence coercion.
//
// typescript-go materializes `Sequence<N>` schema literals as its internal
// defined number type, not a plain float64, so the sequence reader must coerce
// values by reflection kind. A closed type switch silently dropped every
// sequence tag, disabling explicit protobuf field numbers and their
// duplicate-detection validators.
//
// 1. Read a sequence tag whose schema value is a defined float64 type.
// 2. Read plain int, float64, and numeric-string values the old switch knew.
// 3. Reject non-sequence kinds, malformed schemas, and non-numeric values.
func TestMetadataTypeTagReadsDefinedNumberSequences(t *testing.T) {
  tag := func(value any) metadata.IMetadataTypeTag {
    return metadata.IMetadataTypeTag{
      Kind:   "sequence",
      Name:   "Sequence",
      Schema: map[string]any{"x-protobuf-sequence": value},
    }
  }
  for name, value := range map[string]any{
    "defined-float64": definedNumber(7),
    "int":             7,
    "float64":         float64(7),
    "string":          "7",
  } {
    sequence := metadata.IMetadataTypeTag_getSequence(tag(value))
    if sequence == nil || *sequence != 7 {
      t.Fatalf("%s sequence value should coerce to 7, got %v", name, sequence)
    }
  }
  if metadata.IMetadataTypeTag_getSequence(metadata.IMetadataTypeTag{
    Kind:   "type",
    Schema: map[string]any{"x-protobuf-sequence": 7},
  }) != nil {
    t.Fatal("non-sequence tag kinds should not produce a sequence")
  }
  if metadata.IMetadataTypeTag_getSequence(metadata.IMetadataTypeTag{Kind: "sequence"}) != nil {
    t.Fatal("sequence tag without schema should not produce a sequence")
  }
  if metadata.IMetadataTypeTag_getSequence(tag(nil)) != nil {
    t.Fatal("nil schema value should not produce a sequence")
  }
  if metadata.IMetadataTypeTag_getSequence(tag("seven")) != nil {
    t.Fatal("non-numeric string should not produce a sequence")
  }
  if metadata.IMetadataTypeTag_getSequence(tag(true)) != nil {
    t.Fatal("boolean schema value should not produce a sequence")
  }
}
