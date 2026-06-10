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
