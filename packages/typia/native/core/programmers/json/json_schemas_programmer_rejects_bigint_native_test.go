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
