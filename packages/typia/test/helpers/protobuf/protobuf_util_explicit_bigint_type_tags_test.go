package typia_test

import (
  testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
  "testing"

  helpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestProtobufUtilExplicitBigintTypeTags verifies bigint type-tag precedence.
//
// When a bigint metadata row carries a protobuf type tag, the explicit tag must
// override the default signed scalar choice. This is how users preserve uint64
// fields even when the generic bigint atomic path defaults to int64.
//
// 1. Build bigint atomic metadata with an explicit uint64 type tag.
// 2. Extract protobuf bigint buckets.
// 3. Assert uint64 is selected.
// 4. Assert the default int64 bucket is not emitted for that tagged row.
//
// @evidence contracts/testing.md#behavioral-verification A bigint atomic with an explicit uint64 type tag is extracted and the selected bucket and the absence of the default int64 bucket are asserted.
// @evidence contracts/testing.md#independent-expectations An explicit type tag overrides defaults by contract; both literal expectations are authored.
// @evidence contracts/testing.md#distinguishing-cases Tagged bigint with presence and absence assertions; other tags are not covered.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It calls the exported utility on constructed metadata with no filesystem fixture, process or native command build.
func TestProtobufUtilExplicitBigintTypeTags(t *testing.T) {
  meta := metadata.MetadataSchema_create(metadata.MetadataSchema{
    Atomics: []*metadata.MetadataAtomic{
      metadata.MetadataAtomic_create(metadata.MetadataAtomic{
        Type: "bigint",
        Tags: [][]metadata.IMetadataTypeTag{{testutil.TypeTag("uint64")}},
      }),
    },
  })

  bigints := helpers.ProtobufUtil.GetBigints(meta)
  if _, ok := bigints["uint64"]; !ok {
    t.Fatalf("explicit uint64 tag should be selected: %#v", bigints)
  }
  if _, ok := bigints["int64"]; ok {
    t.Fatalf("explicit uint64 tag should not emit default int64: %#v", bigints)
  }
}
