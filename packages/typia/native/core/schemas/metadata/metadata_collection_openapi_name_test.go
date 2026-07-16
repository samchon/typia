package metadata

import (
  "regexp"
  "testing"
)

// TestMetadataCollectionOpenApiName verifies the OpenAPI-specific metadata
// name allocator preserves legal controls while encoding every other rune.
//
// The schema generators use the allocated name as both a Components Object
// key and a local-reference token. Deleting punctuation is insufficient:
// distinct names can collapse, and the surviving key can still violate OAS.
//
//  1. Preserve ordinary, dotted, hyphenated, and underscored legal controls.
//  2. Encode empty, punctuation, percent, fragment, and Unicode boundaries.
//  3. Prove formerly colliding inputs remain legal, distinct, and repeatable.
func TestMetadataCollectionOpenApiName(t *testing.T) {
  legal := map[string]string{
    "Plain":            "Plain",
    "Qualified.Member": "Qualified.Member",
    "A-B":              "A-B",
    "A_B":              "A_B",
  }
  for input, expected := range legal {
    if actual := MetadataCollection_replaceOpenApi(input); actual != expected {
      t.Fatalf("legal OpenAPI component name changed: input=%q actual=%q expected=%q", input, actual, expected)
    }
  }

  inputs := []string{
    "",
    `Recursive<"A/B">`,
    `Recursive<"T~N">`,
    `Recursive<"C%D">`,
    `Recursive<"A#B">`,
    `Recursive<"A B">`,
    `Recursive<"A:B">`,
    `Recursive<"AB">`,
    `Recursive<"///">`,
    "Café",
    "한글",
  }
  grammar := regexp.MustCompile(`^[a-zA-Z0-9.\-_]+$`)
  outputs := map[string]string{}
  for _, input := range inputs {
    first := MetadataCollection_replaceOpenApi(input)
    second := MetadataCollection_replaceOpenApi(input)
    if first != second {
      t.Fatalf("OpenAPI component allocation is not repeatable: input=%q first=%q second=%q", input, first, second)
    }
    if grammar.MatchString(first) == false {
      t.Fatalf("illegal OpenAPI component name: input=%q output=%q", input, first)
    }
    if previous, ok := outputs[first]; ok && previous != input {
      t.Fatalf("OpenAPI component allocation collided: first=%q second=%q output=%q", previous, input, first)
    }
    outputs[first] = input
  }
}
