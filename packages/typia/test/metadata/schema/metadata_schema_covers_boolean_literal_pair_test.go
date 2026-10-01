package typia_test

import (
  "testing"

  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
)

// TestMetadataSchemaCoversBooleanLiteralPair verifies exhaustive literal pairs.
//
// `true | false` accepts exactly the same runtime values as atomic `boolean`,
// so the literal pair must cover the atomic. A sole literal keeps rejecting
// the atomic, and the atomic keeps covering its literals.
//
// 1. Assert the {true, false} constant pair covers atomic boolean.
// 2. Assert a sole boolean literal does not cover atomic boolean.
// 3. Assert atomic boolean still covers the literal pair.
//
// @evidence contracts/testing.md#behavioral-verification MetadataSchema_covers compares the {true, false} literal pair, a sole boolean literal and atomic boolean in both directions; a missing exhaustiveness rule or a sole literal that covers boolean fails.
// @evidence contracts/testing.md#independent-expectations true | false accepts exactly the values boolean accepts, while true alone accepts fewer; the three authored booleans follow that value-set reasoning.
// @evidence contracts/testing.md#distinguishing-cases The exhaustive pair covering atomic is the positive case, the single literal not covering is its one-axis negative, and atomic covering the pair is the reverse direction. Other literal types are not covered here.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It calls the exported coverage function on constructed metadata with no filesystem fixture, process or native command build.
func TestMetadataSchemaCoversBooleanLiteralPair(t *testing.T) {
  if !metadata.MetadataSchema_covers(
    testutil.ConstantMetadata("boolean", true, false),
    testutil.AtomicMetadata("boolean"),
  ) {
    t.Fatal("the {true, false} literal pair should cover atomic boolean")
  }
  if metadata.MetadataSchema_covers(
    testutil.ConstantMetadata("boolean", true),
    testutil.AtomicMetadata("boolean"),
  ) {
    t.Fatal("a sole boolean literal should not cover atomic boolean")
  }
  if !metadata.MetadataSchema_covers(
    testutil.AtomicMetadata("boolean"),
    testutil.ConstantMetadata("boolean", true, false),
  ) {
    t.Fatal("atomic boolean should cover the literal pair")
  }
}
