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
