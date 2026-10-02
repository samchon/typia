package json

import (
  "testing"

  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestJsonSchemasProgrammerDedupesBigintDiagnostics verifies single bigint report.
//
// A union like `bigint | 1n | BigInt` fills the atomic, constant, and native
// buckets at once. Each bucket used to append its own copy of the identical
// "JSON schema does not support bigint type." message; the schema validator
// must report the unsupported type exactly once.
//
// 1. Build metadata holding atomic bigint, a bigint constant, and native BigInt.
// 2. Validate it through `JsonSchemasProgrammer`.
// 3. Require exactly one bigint diagnostic.
//
// @evidence contracts/testing.md#behavioral-verification The JSON schemas validator runs on a union holding atomic bigint, a bigint constant and native BigInt and must report one diagnostic.
// @evidence contracts/testing.md#independent-expectations One unsupported type must produce one message; the expected count is authored.
// @evidence contracts/testing.md#distinguishing-cases A three-bucket union; the native-only case is separate.
// @evidence contracts/testing.md#execution-ownership The canonical native Go command (pnpm test:go:native) runs this same-package Test function in process. It calls the validator on constructed metadata with no checker, filesystem fixture or process.
func TestJsonSchemasProgrammerDedupesBigintDiagnostics(t *testing.T) {
  meta := schemametadata.MetadataSchema_initialize()
  meta.Atomics = append(meta.Atomics, schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: "bigint"}))
  meta.Constants = append(meta.Constants, schemametadata.MetadataConstant_create(schemametadata.MetadataConstant{
    Type: "bigint",
    Values: []*schemametadata.MetadataConstantValue{
      schemametadata.MetadataConstantValue_create(schemametadata.MetadataConstantValue{Value: "1"}),
    },
  }))
  meta.Natives = append(meta.Natives, schemametadata.MetadataNative_create(schemametadata.MetadataNative{Name: "BigInt"}))
  messages := JsonSchemasProgrammer.Validate(struct {
    Metadata *schemametadata.MetadataSchema
    Explore  nativefactories.MetadataFactory_IExplore
  }{Metadata: meta})
  if len(messages) != 1 || messages[0] != "JSON schema does not support bigint type." {
    t.Fatalf("expected exactly one JSON schema bigint diagnostic, got %v", messages)
  }
}
