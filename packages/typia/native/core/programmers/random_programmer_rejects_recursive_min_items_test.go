package programmers

import (
  "strings"
  "testing"

  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type randomProgrammerDefinedFloat float64
type randomProgrammerDefinedInt int

// TestRandomProgrammerRejectsRecursiveMinItems verifies recursive array length guards.
//
// Positive MinItems on a recursive array cannot be satisfied when random
// generation hits its depth stop, while zero or non-recursive MinItems remain
// valid. The tag value can arrive either through Value or JSON schema payload,
// including defined numeric types from the TypeScript-Go bridge.
//
// 1. Reject recursive arrays with a positive MinItems value.
// 2. Reject recursive arrays when the positive value only exists in tag.Schema.
// 3. Allow recursive MinItems<0> and non-recursive MinItems<1>.
func TestRandomProgrammerRejectsRecursiveMinItems(t *testing.T) {
  cases := []struct {
    name     string
    metadata *schemametadata.MetadataSchema
    rejected bool
  }{
    {
      name: "positive value",
      metadata: randomProgrammerRecursiveMinItemsMetadata(
        randomProgrammerMinItemsTag("MinItems<1>", randomProgrammerDefinedFloat(1), nil),
        true,
      ),
      rejected: true,
    },
    {
      name: "schema fallback",
      metadata: randomProgrammerRecursiveMinItemsMetadata(
        randomProgrammerMinItemsTag("MinItems<2>", nil, map[string]any{"minItems": randomProgrammerDefinedInt(2)}),
        true,
      ),
      rejected: true,
    },
    {
      name: "fractional positive",
      metadata: randomProgrammerRecursiveMinItemsMetadata(
        randomProgrammerMinItemsTag("MinItems<0.5>", randomProgrammerDefinedFloat(0.5), nil),
        true,
      ),
      rejected: true,
    },
    {
      name: "zero recursive",
      metadata: randomProgrammerRecursiveMinItemsMetadata(
        randomProgrammerMinItemsTag("MinItems<0>", randomProgrammerDefinedFloat(0), nil),
        true,
      ),
      rejected: false,
    },
    {
      name: "positive nonrecursive",
      metadata: randomProgrammerRecursiveMinItemsMetadata(
        randomProgrammerMinItemsTag("MinItems<1>", randomProgrammerDefinedFloat(1), nil),
        false,
      ),
      rejected: false,
    },
  }
  for _, tc := range cases {
    messages := randomProgrammer_validate_recursive_min_items(tc.metadata)
    if (len(messages) != 0) != tc.rejected {
      t.Fatalf("%s rejection mismatch: %#v", tc.name, messages)
    }
    if tc.rejected && strings.Contains(messages[0], "MinItems<") == false {
      t.Fatalf("%s should mention MinItems tag: %#v", tc.name, messages)
    }
  }
}

func randomProgrammerRecursiveMinItemsMetadata(
  tag schemametadata.IMetadataTypeTag,
  recursive bool,
) *schemametadata.MetadataSchema {
  root := schemametadata.MetadataSchema_initialize()
  value := root
  if recursive == false {
    value = schemametadata.MetadataSchema_initialize()
    value.Atomics = append(value.Atomics, schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{
      Type: "string",
      Tags: [][]schemametadata.IMetadataTypeTag{},
    }))
  }
  root.Arrays = append(root.Arrays, schemametadata.MetadataArray_create(schemametadata.MetadataArray{
    Type: schemametadata.MetadataArrayType_create(schemametadata.MetadataArrayType{
      Name:      "Array<string>",
      Value:     value,
      Recursive: recursive,
      Nullables: []bool{false},
    }),
    Tags: [][]schemametadata.IMetadataTypeTag{{tag}},
  }))
  return root
}

func randomProgrammerMinItemsTag(
  name string,
  value any,
  schema any,
) schemametadata.IMetadataTypeTag {
  return schemametadata.IMetadataTypeTag{
    Name:   name,
    Kind:   "minItems",
    Value:  value,
    Schema: schema,
  }
}
