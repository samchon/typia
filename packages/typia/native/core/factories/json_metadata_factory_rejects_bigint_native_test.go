package factories

import (
  "testing"

  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestJsonMetadataFactoryRejectsBigIntNative verifies JSON rejects native BigInt.
//
// The native metadata collector recognizes TypeScript `BigInt`, but JSON cannot
// serialize either primitive or boxed BigInt values. The JSON metadata validator
// must therefore reject `MetadataNative{Name:"BigInt"}` just like atomic
// `bigint`.
//
// 1. Build metadata with only a native `BigInt` bucket.
// 2. Validate it through `JsonMetadataFactory`.
// 3. Require the bigint unsupported diagnostic.
//
// @evidence contracts/testing.md#behavioral-verification JSON metadata validation runs on a schema with only a native BigInt bucket and must report the unsupported-bigint diagnostic.
// @evidence contracts/testing.md#independent-expectations JSON cannot serialize boxed BigInt, so rejection is the authored expectation.
// @evidence contracts/testing.md#distinguishing-cases Native BigInt alone is the positive rejection; native Number or other wrappers are not asserted.
// @evidence contracts/testing.md#execution-ownership The canonical native Go command (pnpm test:go:native) runs this same-package Test function in process. It calls the validator on constructed metadata with no checker, filesystem fixture or process.
func TestJsonMetadataFactoryRejectsBigIntNative(t *testing.T) {
  meta := schemametadata.MetadataSchema_initialize()
  meta.Natives = append(meta.Natives, schemametadata.MetadataNative_create(schemametadata.MetadataNative{Name: "BigInt"}))
  messages := JsonMetadataFactory.Validate(struct {
    Metadata *schemametadata.MetadataSchema
    Explore  MetadataFactory_IExplore
  }{Metadata: meta})
  if len(messages) != 1 || messages[0] != "JSON does not support bigint type." {
    t.Fatalf("expected JSON bigint native rejection, got %v", messages)
  }
}
