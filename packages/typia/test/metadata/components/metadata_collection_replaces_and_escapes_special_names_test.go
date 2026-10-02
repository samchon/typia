package typia_test

import (
  "testing"

  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataCollectionReplacesAndEscapesSpecialNames verifies name encoding.
//
// Metadata collection names can contain TypeScript punctuation that is unsafe
// for generated helper identifiers. Replacement strips punctuation when a name
// still has ordinary text and falls back to encoded tokens when the whole name
// would otherwise disappear.
//
// 1. Build a mixed text-and-punctuation name.
// 2. Assert replacement strips unsafe punctuation from the mixed name.
// 3. Build a punctuation-only name and replace it.
// 4. Assert each punctuation-only name is replaced by its exact encoded tokens.
//
// @evidence contracts/testing.md#behavioral-verification MetadataCollection_replace runs on a mixed text-and-punctuation name and on three punctuation-only names; the stripped text and the exact encoded tokens are compared, so a lost or reordered replacement fails.
// @evidence contracts/testing.md#independent-expectations The expected strings are authored from the documented replacement table (for example $ to _dollar_, & to _and_, | to _or_) and from the rule that ordinary text survives with punctuation stripped; neither is read back from the function.
// @evidence contracts/testing.md#distinguishing-cases The mixed name is the strip case and the punctuation-only names are the fallback case, so the two branches differ by whether any ordinary text remains. Names with non-ASCII text are not covered.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It calls the exported replacement function on strings with no filesystem fixture, process or native command build.
func TestMetadataCollectionReplacesAndEscapesSpecialNames(t *testing.T) {
  mixed := `$A & B | {C}<D>[0], "E" 'F' ? : ;`
  if replaced := metadata.MetadataCollection_replace(mixed); replaced != "ABCD0EF" {
    t.Fatalf("mixed metadata name should strip punctuation: %q", replaced)
  }

  for input, expected := range map[string]string{
    "$&|":  "_dollar__and__or_",
    "{}":   "_blt__bgt_",
    "<[]>": "_lt__alt__agt__gt_",
  } {
    if replaced := metadata.MetadataCollection_replace(input); replaced != expected {
      t.Fatalf("punctuation-only name %q should be encoded as %q: %q", input, expected, replaced)
    }
  }
}
