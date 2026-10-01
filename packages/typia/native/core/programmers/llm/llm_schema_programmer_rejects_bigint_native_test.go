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
//
// @evidence contracts/testing.md#behavioral-verification The LLM schema validator runs on metadata with only a native BigInt bucket and must reject it.
// @evidence contracts/testing.md#independent-expectations LLM schemas derive from JSON schema which has no bigint, so rejection is authored.
// @evidence contracts/testing.md#distinguishing-cases Native BigInt alone.
// @evidence contracts/testing.md#execution-ownership The canonical native Go command (pnpm test:go:native) runs this same-package Test function in process. It calls the validator on constructed metadata with no checker, filesystem fixture or process.
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
