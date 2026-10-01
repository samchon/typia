package llm

import (
  "testing"

  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestLlmSchemaProgrammerRejectsExcludeTagInStrict verifies strict exclusion.
//
// The exclude type tag compiles to `not: { enum: [...] }` in JSON schema, but
// OpenAI strict structured outputs support no `not` keyword (only types,
// enum, anyOf, and $defs). A strict LLM schema configuration must therefore
// reject the tag instead of silently emitting an unenforceable schema, while
// non-strict configurations keep accepting it.
//
// 1. Build metadata with a number atomic carrying an exclude-kind tag.
// 2. Validate with strict config and require the rejection diagnostic.
// 3. Validate without strict config and require no diagnostic.
//
// @evidence contracts/testing.md#behavioral-verification The LLM schema validator runs on a type with an exclude tag under strict and non-strict configurations; strict must report and non-strict must accept.
// @evidence contracts/testing.md#independent-expectations OpenAI strict structured outputs support no not keyword, which is where the exclude tag compiles; the verdicts are authored from that provider contract.
// @evidence contracts/testing.md#distinguishing-cases Strict versus non-strict with the same input is the one-axis pair.
// @evidence contracts/testing.md#execution-ownership The canonical native Go command (pnpm test:go:native) runs this same-package Test function in process. It calls the validator on constructed metadata with no checker, filesystem fixture or process.
func TestLlmSchemaProgrammerRejectsExcludeTagInStrict(t *testing.T) {
  build := func() *schemametadata.MetadataSchema {
    meta := schemametadata.MetadataSchema_initialize()
    meta.Atomics = append(meta.Atomics, schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{
      Type: "number",
      Tags: [][]schemametadata.IMetadataTypeTag{{
        {
          Kind:   "exclude",
          Name:   "Exclude<[0, 22]>",
          Schema: map[string]any{"not": map[string]any{"enum": []any{0, 22}}},
        },
      }},
    }))
    return meta
  }
  strict := LlmSchemaProgrammer.Validate(struct {
    Config   map[string]any
    Metadata *schemametadata.MetadataSchema
    Explore  nativefactories.MetadataFactory_IExplore
  }{Config: map[string]any{"strict": true}, Metadata: build()})
  if len(strict) != 1 || strict[0] != "Strict mode does not support exclude type tag." {
    t.Fatalf("strict config should reject the exclude tag, got %v", strict)
  }
  loose := LlmSchemaProgrammer.Validate(struct {
    Config   map[string]any
    Metadata *schemametadata.MetadataSchema
    Explore  nativefactories.MetadataFactory_IExplore
  }{Metadata: build()})
  if len(loose) != 0 {
    t.Fatalf("non-strict config should accept the exclude tag, got %v", loose)
  }
}
