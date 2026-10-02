package json

import (
  "testing"

  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestJsonSchemasProgrammerRejectsBigIntNative verifies JSON schema rejects BigInt.
//
// `BigInt` is collected as native metadata for ordinary validators, but JSON
// schema has no bigint representation. The schema validator must reject the
// native bucket before schema emission can convert it into a bigint schema.
//
// 1. Build metadata with only a native `BigInt` bucket.
// 2. Validate it through `JsonSchemasProgrammer`.
// 3. Require the bigint unsupported diagnostic.
//
// @evidence contracts/testing.md#behavioral-verification The JSON schemas validator runs on metadata with only a native BigInt bucket and must reject it.
// @evidence contracts/testing.md#independent-expectations JSON schema has no bigint, so rejection is authored.
// @evidence contracts/testing.md#distinguishing-cases Native BigInt alone; other natives are not asserted.
// @evidence contracts/testing.md#execution-ownership The canonical native Go command (pnpm test:go:native) runs this same-package Test function in process. It calls the validator on constructed metadata with no checker, filesystem fixture or process.
func TestJsonSchemasProgrammerRejectsBigIntNative(t *testing.T) {
  meta := schemametadata.MetadataSchema_initialize()
  meta.Natives = append(meta.Natives, schemametadata.MetadataNative_create(schemametadata.MetadataNative{Name: "BigInt"}))
  messages := JsonSchemasProgrammer.Validate(struct {
    Metadata *schemametadata.MetadataSchema
    Explore  nativefactories.MetadataFactory_IExplore
  }{Metadata: meta})
  if len(messages) != 1 || messages[0] != "JSON schema does not support bigint type." {
    t.Fatalf("expected JSON schema bigint native rejection, got %v", messages)
  }
}
