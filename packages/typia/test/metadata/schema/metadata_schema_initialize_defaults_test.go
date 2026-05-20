package typia_test

import (
  "testing"

  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataSchemaInitializeDefaults verifies initialized metadata state.
//
// The metadata analyzer starts new schemas through the initializer rather than a
// zero-value struct. The initializer must produce required, non-nullable,
// non-optional metadata with empty bucket slices and the requested
// parent-resolution marker.
//
// 1. Initialize metadata with parent resolution enabled.
// 2. Assert required, optional, nullable, and parent flags.
// 3. Assert all primary bucket slices are initialized empty.
func TestMetadataSchemaInitializeDefaults(t *testing.T) {
  meta := metadata.MetadataSchema_initialize(true)

  if !meta.IsRequired() || meta.Optional || meta.Nullable || !meta.IsParentResolved() {
    t.Fatalf("unexpected initialized flags: %#v", meta)
  }
  if meta.Atomics == nil || meta.Constants == nil || meta.Templates == nil ||
    meta.Objects == nil || meta.Arrays == nil || meta.Tuples == nil ||
    meta.Aliases == nil || meta.Functions == nil || meta.Natives == nil ||
    meta.Sets == nil || meta.Maps == nil {
    t.Fatalf("initializer should allocate all bucket slices: %#v", meta)
  }
  if !meta.Empty() {
    t.Fatalf("fresh initialized metadata should be empty: size=%d bucket=%d", meta.Size(), meta.Bucket())
  }
}
