package metadata

import "testing"

// TestMetadataSchemaSoleLiteralCachesPointer verifies literal property keys are
// cached after the first lookup.
//
// schema-dts-style validators ask for the same property key literal while
// generating many object helpers, so the schema stores the positive literal
// result and reuses it.
//
// @evidence contracts/testing.md#behavioral-verification The sole-literal lookup is called twice on a literal schema and once on a non-literal atomic; the literal value, pointer reuse, absent atomic result and recorded negative cache flag are asserted.
// @evidence contracts/testing.md#independent-expectations The expected literal roleName and absence are authored; pointer reuse pins a caching implementation property.
// @evidence contracts/testing.md#distinguishing-cases Repeated literal lookup checks pointer reuse; a single non-literal lookup checks absence and the recorded cache flag. Repeated negative lookup is not exercised.
// @evidence contracts/testing.md#execution-ownership The canonical native Go command (pnpm test:go:native) runs this same-package Test function in process. It calls the exported accessor in memory with no filesystem fixture, process or native command build.
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
