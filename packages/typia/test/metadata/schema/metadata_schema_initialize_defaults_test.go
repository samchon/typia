package typia_test

import (
  "testing"

  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataSchemaInitializeDefaults verifies initialized metadata state.
//
// The metadata analyzer starts new schemas through the initializer rather than a
// zero-value struct. The initializer must produce required, non-nullable,
// non-optional metadata with empty bucket slices.
//
// 1. Initialize metadata.
// 2. Assert required, optional and nullable flags.
// 3. Assert all primary bucket slices are initialized empty.
//
// @evidence contracts/testing.md#behavioral-verification MetadataSchema_initialize is called and its flags, bucket slices and emptiness are asserted.
// @evidence contracts/testing.md#independent-expectations The documented initializer contract (required, not optional, not nullable, empty non-nil slices) supplies the expected values as literals.
// @evidence contracts/testing.md#distinguishing-cases One initialization; non-default flags are not covered.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It calls the exported initializer directly, with no filesystem fixture, process or native command build.
func TestMetadataSchemaInitializeDefaults(t *testing.T) {
  meta := metadata.MetadataSchema_initialize()

  if !meta.IsRequired() || meta.Optional || meta.Nullable {
    t.Fatalf("unexpected initialized flags: %#v", meta)
  }
  if meta.Atomics == nil || meta.Constants == nil || meta.Templates == nil || meta.Objects == nil {
    t.Fatalf("initializer should allocate primary bucket slices: %#v", meta)
  }
  if !meta.Empty() {
    t.Fatalf("fresh initialized metadata should be empty: size=%d bucket=%d", meta.Size(), meta.Bucket())
  }
}
