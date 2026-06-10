package llm

import (
  "testing"

  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestLlmSchemaProgrammerRejectsBigIntNative verifies LLM schema rejects BigInt.
//
// LLM schemas are JSON-schema derived and cannot represent bigint values. A
// native TypeScript `BigInt` bucket must be rejected just like atomic `bigint`
// instead of passing through the primitive-native shortcut.
//
// 1. Build metadata with only a native `BigInt` bucket.
// 2. Validate it through `LlmSchemaProgrammer`.
// 3. Require the bigint unsupported diagnostic.
func TestLlmSchemaProgrammerRejectsBigIntNative(t *testing.T) {
  meta := schemametadata.MetadataSchema_initialize()
  meta.Natives = append(meta.Natives, schemametadata.MetadataNative_create(schemametadata.MetadataNative{Name: "BigInt"}))
  messages := LlmSchemaProgrammer.Validate(struct {
    Config   map[string]any
    Metadata *schemametadata.MetadataSchema
    Explore  nativefactories.MetadataFactory_IExplore
  }{Metadata: meta})
  if len(messages) != 1 || messages[0] != "LLM schema does not support bigint type." {
    t.Fatalf("expected LLM schema bigint native rejection, got %v", messages)
  }
}
