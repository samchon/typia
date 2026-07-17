package factories

import (
  "testing"

  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataTypeTagFactoryAcceptsLegalTagCombinations verifies enforcing exclusivity rejects nothing a declaration permits.
//
// This is the negative twin of the rejection tests. Making an inert check fire
// is only correct if it fires on exactly the declared `exclusive` pairs: a check
// that over-matches would reject `Minimum<0> & Maximum<10>`, which neither tag's
// `exclusive` list names and which every bounded-range type depends on.
//
// 1. Combine each array-form tag with a kind absent from its exclusive list.
// 2. Combine bool-form tags of differing kinds, which the untouched branch owns.
// 3. Require every combination, and each tag alone, to validate.
func TestMetadataTypeTagFactoryAcceptsLegalTagCombinations(t *testing.T) {
  declarations := metadataTypeTagFactoryTestDeclarations()
  byKind := map[string]metadataTypeTagFactoryTestDeclaration{}
  for _, declaration := range declarations {
    byKind[declaration.kind] = declaration
    success, messages := metadataTypeTagFactoryTestValidate(
      declaration.target,
      []schemametadata.IMetadataTypeTag{declaration.tag("A")},
    )
    if success == false {
      t.Fatalf("a lone %s tag must validate, reported %#v", declaration.kind, messages)
    }
  }

  for _, pair := range [][2]string{
    {"minimum", "maximum"},
    {"minimum", "exclusiveMaximum"},
    {"exclusiveMinimum", "maximum"},
    {"exclusiveMinimum", "exclusiveMaximum"},
  } {
    left := byKind[pair[0]]
    right := byKind[pair[1]]
    success, messages := metadataTypeTagFactoryTestValidate(
      left.target,
      []schemametadata.IMetadataTypeTag{left.tag("0"), right.tag("10")},
    )
    if success == false {
      t.Fatalf("%s and %s bound opposite ends and must combine, reported %#v", pair[0], pair[1], messages)
    }
  }

  boolFormTarget := "string"
  boolForm := []schemametadata.IMetadataTypeTag{
    {Target: boolFormTarget, Name: "MinLength<3>", Kind: "minLength", Exclusive: true},
    {Target: boolFormTarget, Name: "MaxLength<7>", Kind: "maxLength", Exclusive: true},
    {Target: boolFormTarget, Name: "Format<\"uuid\">", Kind: "format", Exclusive: true},
  }
  success, messages := metadataTypeTagFactoryTestValidate(boolFormTarget, boolForm)
  if success == false {
    t.Fatalf("bool-form tags of differing kinds must combine, reported %#v", messages)
  }
}
