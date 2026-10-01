package typia_test

import (
	testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
	"testing"

	metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataNativeGetNameFormatsTags verifies native tag display names.
//
// Native metadata follows the same tag-name rules as atomic metadata. This keeps
// branded native types such as Date or Uint8Array distinguishable when metadata
// buckets are serialized or merged.
//
// 1. Build an untagged native metadata reference.
// 2. Assert its name is the native type name.
// 3. Build a multi-row tagged native reference.
// 4. Assert the generated name includes every tag row.
//
// @evidence contracts/testing.md#behavioral-verification GetName on an untagged Date native and a multi-row tagged Uint8Array native returns exact strings.
// @evidence contracts/testing.md#independent-expectations The native name and the tag union format are authored literals following the same rule as atomic names.
// @evidence contracts/testing.md#distinguishing-cases Untagged and multi-row tagged cases separate plain from branded names.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It reads names from constructed metadata with no filesystem fixture, process or native command build.
func TestMetadataNativeGetNameFormatsTags(t *testing.T) {
	if got := metadata.MetadataNative_create(metadata.MetadataNative{Name: "Date"}).GetName(); got != "Date" {
		t.Fatalf("unexpected native name: %q", got)
	}

	tagged := metadata.MetadataNative_create(metadata.MetadataNative{
		Name: "Uint8Array",
		Tags: [][]metadata.IMetadataTypeTag{
			{testutil.NamedTag("Bytes")},
			{testutil.NamedTag("MinLength"), testutil.NamedTag("MaxLength")},
		},
	})
	if got := tagged.GetName(); got != "(Uint8Array & (Bytes | (MinLength & MaxLength)))" {
		t.Fatalf("unexpected tagged native name: %q", got)
	}
}
