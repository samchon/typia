package programmers

import (
  "testing"

  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type randomProgrammerDefinedFloat float64
type randomProgrammerDefinedInt int

// TestRandomProgrammerFindPositiveMinItems detects only positive MinItems tags.
//
// The recursive-array diagnostic depends on a narrow tag lookup before it can
// decide whether the current array is a rejected cutoff edge. The lookup has to
// detect direct, schema-backed, bridge numeric, and fractional values while
// ignoring zero, negative, and unrelated array tags.
//
// 1. Check positive direct, schema-backed, defined numeric, and fractional tags.
// 2. Check zero, negative, and unrelated tags are ignored.
// 3. Verify the helper returns the matching tag name for diagnostics.
func TestRandomProgrammerFindPositiveMinItems(t *testing.T) {
  for _, tags := range [][][]schemametadata.IMetadataTypeTag{
    {{{Name: "MinItems<2>", Kind: "minItems", Value: 2}}},
    {{{Name: "SchemaMinItems", Kind: "minItems", Schema: map[string]any{"minItems": "3"}}}},
    {{{Name: "DefinedFloatMinItems", Kind: "minItems", Value: randomProgrammerDefinedFloat(1)}}},
    {{{Name: "DefinedIntSchemaMinItems", Kind: "minItems", Schema: map[string]any{"minItems": randomProgrammerDefinedInt(2)}}}},
    {{{Name: "FractionalMinItems", Kind: "minItems", Value: randomProgrammerDefinedFloat(0.5)}}},
  } {
    if tag := randomProgrammer_find_positive_min_items(tags); tag == nil || tag.Name != tags[0][0].Name {
      t.Fatalf("positive MinItems tag should be detected: %+v", tags)
    }
  }
  for _, tags := range [][][]schemametadata.IMetadataTypeTag{
    {{{Name: "ZeroMinItems", Kind: "minItems", Value: 0}}},
    {{{Name: "NegativeMinItems", Kind: "minItems", Value: "-1"}}},
    {{{Name: "OtherKind", Kind: "maxItems", Value: 1}}},
    {{{Name: "SchemaZeroMinItems", Kind: "minItems", Schema: map[string]any{"minItems": 0}}}},
  } {
    if tag := randomProgrammer_find_positive_min_items(tags); tag != nil {
      t.Fatalf("non-positive or non-MinItems tag should be ignored: %+v", *tag)
    }
  }
}
