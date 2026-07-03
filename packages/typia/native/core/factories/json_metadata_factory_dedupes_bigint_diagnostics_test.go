package factories

import (
  "testing"

  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestJsonMetadataFactoryDedupesBigintDiagnostics verifies single bigint report.
//
// A union like `bigint | 1n | BigInt` fills the atomic, constant, and native
// buckets at once. Each bucket used to append its own copy of the identical
// "JSON does not support bigint type." message; the validator must report the
// unsupported type exactly once.
//
// 1. Build metadata holding atomic bigint, a bigint constant, and native BigInt.
// 2. Validate it through `JsonMetadataFactory`.
// 3. Require exactly one bigint diagnostic.
func TestJsonMetadataFactoryDedupesBigintDiagnostics(t *testing.T) {
  meta := schemametadata.MetadataSchema_initialize()
  meta.Atomics = append(meta.Atomics, schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: "bigint"}))
  meta.Constants = append(meta.Constants, schemametadata.MetadataConstant_create(schemametadata.MetadataConstant{
    Type: "bigint",
    Values: []*schemametadata.MetadataConstantValue{
      schemametadata.MetadataConstantValue_create(schemametadata.MetadataConstantValue{Value: "1"}),
    },
  }))
  meta.Natives = append(meta.Natives, schemametadata.MetadataNative_create(schemametadata.MetadataNative{Name: "BigInt"}))
  messages := JsonMetadataFactory.Validate(struct {
    Metadata *schemametadata.MetadataSchema
    Explore  MetadataFactory_IExplore
  }{Metadata: meta})
  if len(messages) != 1 || messages[0] != "JSON does not support bigint type." {
    t.Fatalf("expected exactly one JSON bigint diagnostic, got %v", messages)
  }
}
