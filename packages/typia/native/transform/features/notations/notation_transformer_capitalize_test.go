//go:build typia_native_internal
// +build typia_native_internal

package notations

import "testing"

// TestNotationTransformerCapitalizePreservesMethodSuffix verifies notation method capitalization.
//
// Validating and factory transformers prepend their operation to a capitalized
// notation name. The helper must retain an empty suffix and change only the
// first letter of a nonempty name, so the generated diagnostic method remains
// the selected notation operation.
//
// 1. Require the original empty input to remain empty.
// 2. Require the original camel input to become Camel without changing its tail.
//
// @evidence contracts/testing.md#behavioral-verification Calls the actual transformer suffix helper and compares the original empty and camel inputs with their exact outputs, detecting a wrong method prefix or altered tail.
// @evidence contracts/testing.md#independent-expectations The notation method spelling is authored: camel becomes Camel when joined to assert/create method names, while an empty input has no letter to capitalize. Neither expectation is generated from the helper.
// @evidence contracts/testing.md#distinguishing-cases Empty and ordinary nonempty inputs restore both exact decisions previously carried by the deleted transformer-entry coverage case; programmer-side capitalization is a separate helper and cannot replace these assertions.
// @evidence contracts/testing.md#execution-ownership The typia_native_internal Go command discovers this one same-package Test function. It calls a pure string helper in process without a checker, native build, fixture or product-host process.
func TestNotationTransformerCapitalizePreservesMethodSuffix(t *testing.T) {
  if got := notationGeneralTransformer_capitalize(""); got != "" {
    t.Fatalf("empty notation suffix should remain empty: got %q", got)
  }
  if got := notationGeneralTransformer_capitalize("camel"); got != "Camel" {
    t.Fatalf("camel notation suffix should become Camel: got %q", got)
  }
}
