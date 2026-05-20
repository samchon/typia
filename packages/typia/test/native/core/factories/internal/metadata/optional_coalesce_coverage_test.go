//go:build typia_native_internal
// +build typia_native_internal

package metadata

import (
  "testing"

  nativechecker "github.com/microsoft/typescript-go/shim/checker"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestOptionalCoalesceCoverage exercises optional coalesce dispatch.
//
// Optional coalescing normally receives checker union and intersection types.
// The nil-type fallback delegates to the common metadata coalescer, whose
// current contract still expects a checker type. This test documents that branch
// and catches its panic so coverage can record the dispatch path.
//
// TODO: if the metadata coalescer is updated to handle nil types gracefully,
// remove the panic recovery and assert that no error occurs instead.
//
// 1. Create an empty metadata schema.
// 2. Invoke optional coalescing with no checker type.
// 3. Recover the expected checker nil-type panic.
// 4. Verify the metadata value remains allocated.
func TestOptionalCoalesceCoverage(t *testing.T) {
  meta := schemametadata.MetadataSchema_initialize()
  defer func() {
    if recovered := recover(); recovered == nil {
      t.Fatal("nil checker type should panic in metadata coalescer")
    }
    if meta == nil {
      t.Fatal("metadata should remain allocated after optional coalesce panic")
    }
  }()
  iterate_optional_coalesce(struct {
    Metadata *schemametadata.MetadataSchema
    Type     *nativechecker.Type
  }{Metadata: meta})
}
