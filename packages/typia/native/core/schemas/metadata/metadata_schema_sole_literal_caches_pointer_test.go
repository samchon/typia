package metadata

import "testing"

// TestMetadataSchemaSoleLiteralCachesPointer verifies literal property keys are
// cached after the first lookup.
//
// schema-dts-style validators ask for the same property key literal while
// generating many object helpers, so the schema stores the positive literal
// result and reuses it.
func TestMetadataSchemaSoleLiteralCachesPointer(t *testing.T) {
  schema := MetadataSchema_initialize()
  schema.Constants = append(schema.Constants, MetadataConstant_create(MetadataConstant{
    Type: "string",
    Values: []*MetadataConstantValue{
      MetadataConstantValue_create(MetadataConstantValue{Value: "roleName"}),
    },
  }))

  first := schema.GetSoleLiteral()
  second := schema.GetSoleLiteral()

  if first == nil || *first != "roleName" {
    t.Fatalf("first literal = %v, expected roleName", first)
  }
  if first != second {
    t.Fatalf("literal pointer was not cached")
  }

  nonLiteral := MetadataSchema_initialize()
  nonLiteral.Atomics = append(nonLiteral.Atomics, MetadataAtomic_create(MetadataAtomic{Type: "string"}))
  if actual := nonLiteral.GetSoleLiteral(); actual != nil {
    t.Fatalf("non-literal atomic returned %q", *actual)
  }
  if nonLiteral.sole_literal_cached_ == false {
    t.Fatalf("non-literal lookup was not cached")
  }
}
