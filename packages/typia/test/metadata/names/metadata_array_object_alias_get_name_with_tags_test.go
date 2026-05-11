package typia_test

import (
	testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
	"testing"

	metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataArrayObjectAliasGetNameWithTags verifies tagged reference names.
//
// Array, object, and alias metadata all share the same reference-name formatting
// rule. Tags must be included in the display name so merged schema buckets do
// not lose validation-brand information.
//
// 1. Build array, object, and alias references with one tag row.
// 2. Read each generated metadata name.
// 3. Assert every name contains the base reference and tag.
func TestMetadataArrayObjectAliasGetNameWithTags(t *testing.T) {
	array := metadata.MetadataArray_create(metadata.MetadataArray{
		Type: metadata.MetadataArrayType_create(metadata.MetadataArrayType{
			Name:  "UserArray",
			Value: testutil.AtomicMetadata("string"),
		}),
		Tags: [][]metadata.IMetadataTypeTag{{testutil.NamedTag("MinItems")}},
	})
	object := metadata.MetadataObject_create(metadata.MetadataObject{
		Type: metadata.MetadataObjectType_create(metadata.MetadataObjectType{Name: "User"}),
		Tags: [][]metadata.IMetadataTypeTag{{testutil.NamedTag("Readonly")}},
	})
	alias := metadata.MetadataAlias_create(metadata.MetadataAlias{
		Type: metadata.MetadataAliasType_create(metadata.MetadataAliasType{
			Name:  "UserId",
			Value: testutil.AtomicMetadata("string"),
		}),
		Tags: [][]metadata.IMetadataTypeTag{{testutil.NamedTag("Uuid")}},
	})

	if array.GetName() != "(UserArray & MinItems)" {
		t.Fatalf("unexpected array name: %q", array.GetName())
	}
	if object.GetName() != "(User & Readonly)" {
		t.Fatalf("unexpected object name: %q", object.GetName())
	}
	if alias.GetName() != "(UserId & Uuid)" {
		t.Fatalf("unexpected alias name: %q", alias.GetName())
	}
}
