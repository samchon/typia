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
//
// @evidence contracts/testing.md#behavioral-verification JSON metadata validation runs on a schema holding atomic bigint, a bigint constant and native BigInt, and exactly one bigint diagnostic must be reported.
// @evidence contracts/testing.md#independent-expectations The union fills three buckets for one unsupported type, so the authored expectation is one message.
// @evidence contracts/testing.md#distinguishing-cases One three-bucket union; a single bucket is covered by the native rejection case.
// @evidence contracts/testing.md#execution-ownership The canonical native Go command (pnpm test:go:native) runs this same-package Test function in process. It calls the validator on constructed metadata with no checker, filesystem fixture or process.
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
