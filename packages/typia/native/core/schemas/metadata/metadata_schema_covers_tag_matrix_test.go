package metadata

import "testing"

// TestMetadataSchemaCoversTagMatrix verifies covers respects type tags.
//
// Issue #1913: MetadataSchema_covers ignored tag matrices, so
// covers(number & Minimum<5>, number) reported true although the tagged
// runtime check rejects values the untagged side accepts. covers feeds union
// sort order, so the comparator must never report containment a predicate can
// break. The sound approximation without predicate implication is row
// inclusion over validating tags; tags without predicates stay transparent.
func TestMetadataSchemaCoversTagMatrix(t *testing.T) {
  minimum := IMetadataTypeTag{
    Target:   "number",
    Name:     "Minimum<5>",
    Kind:     "minimum",
    Value:    5,
    Validate: "5 <= $input",
  }
  maximum := IMetadataTypeTag{
    Target:   "number",
    Name:     "Maximum<9>",
    Kind:     "maximum",
    Value:    9,
    Validate: "$input <= 9",
  }
  example := IMetadataTypeTag{
    Target: "number",
    Name:   "Example<5>",
    Kind:   "example",
    Value:  5,
  }
  number := func(tags [][]IMetadataTypeTag) *MetadataSchema {
    schema := MetadataSchema_initialize()
    schema.Atomics = append(schema.Atomics, MetadataAtomic_create(MetadataAtomic{
      Type: "number",
      Tags: tags,
    }))
    return schema
  }
  constant := func(value float64) *MetadataSchema {
    schema := MetadataSchema_initialize()
    schema.Constants = append(schema.Constants, MetadataConstant_create(MetadataConstant{
      Type: "number",
      Values: []*MetadataConstantValue{
        MetadataConstantValue_create(MetadataConstantValue{Value: value}),
      },
    }))
    return schema
  }

  cases := []struct {
    title    string
    x        *MetadataSchema
    y        *MetadataSchema
    expected bool
  }{
    {
      title:    "tagged atomic does not cover the untagged base",
      x:        number([][]IMetadataTypeTag{{minimum}}),
      y:        number(nil),
      expected: false,
    },
    {
      title:    "untagged atomic covers any tagged narrowing",
      x:        number(nil),
      y:        number([][]IMetadataTypeTag{{minimum}}),
      expected: true,
    },
    {
      title:    "identical tag rows keep covering",
      x:        number([][]IMetadataTypeTag{{minimum, maximum}}),
      y:        number([][]IMetadataTypeTag{{maximum, minimum}}),
      expected: true,
    },
    {
      title:    "superset of OR rows covers the subset",
      x:        number([][]IMetadataTypeTag{{minimum}, {maximum}}),
      y:        number([][]IMetadataTypeTag{{minimum}}),
      expected: true,
    },
    {
      title:    "subset of OR rows does not cover the superset",
      x:        number([][]IMetadataTypeTag{{minimum}}),
      y:        number([][]IMetadataTypeTag{{minimum}, {maximum}}),
      expected: false,
    },
    {
      title:    "differing AND rows do not cover",
      x:        number([][]IMetadataTypeTag{{minimum}}),
      y:        number([][]IMetadataTypeTag{{maximum}}),
      expected: false,
    },
    {
      title:    "non-validating tags stay transparent on both sides",
      x:        number([][]IMetadataTypeTag{{example}}),
      y:        number(nil),
      expected: true,
    },
    {
      title:    "a predicate-free row unconstrains an otherwise tagged matrix",
      x:        number([][]IMetadataTypeTag{{minimum}, {example}}),
      y:        number(nil),
      expected: true,
    },
    {
      title:    "tagged atomic does not absorb a numeric literal",
      x:        number([][]IMetadataTypeTag{{minimum}}),
      y:        constant(3),
      expected: false,
    },
    {
      title:    "untagged atomic still absorbs a numeric literal",
      x:        number(nil),
      y:        constant(3),
      expected: true,
    },
  }
  for _, c := range cases {
    if actual := MetadataSchema_covers(c.x, c.y); actual != c.expected {
      t.Errorf("%s: covers == %v, expected %v", c.title, actual, c.expected)
    }
  }
}
