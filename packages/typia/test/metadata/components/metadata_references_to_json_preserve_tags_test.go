package typia_test

import (
	testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
	"testing"

	metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataReferencesToJSONPreserveTags verifies reference DTO tags.
//
// Reference metadata for arrays, tuples, objects, and aliases stores tags next
// to the referenced component name. DTO conversion must keep those tags because
// component references can be reused with different validation tags.
//
// 1. Build array, tuple, object, and alias references with one tag each.
// 2. Convert each reference to JSON.
// 3. Assert the reference name and first tag name are preserved.
func TestMetadataReferencesToJSONPreserveTags(t *testing.T) {
	array := metadata.MetadataArray_create(metadata.MetadataArray{
		Type: metadata.MetadataArrayType_create(metadata.MetadataArrayType{Name: "Items", Value: testutil.AtomicMetadata("string")}),
		Tags: [][]metadata.IMetadataTypeTag{{testutil.NamedTag("ArrayTag")}},
	}).ToJSON()
	tuple := metadata.MetadataTuple_create(metadata.MetadataTuple{
		Type: metadata.MetadataTupleType_create(metadata.MetadataTupleType{Name: "Pair"}),
		Tags: [][]metadata.IMetadataTypeTag{{testutil.NamedTag("TupleTag")}},
	}).ToJSON()
	object := metadata.MetadataObject_create(metadata.MetadataObject{
		Type: metadata.MetadataObjectType_create(metadata.MetadataObjectType{Name: "User"}),
		Tags: [][]metadata.IMetadataTypeTag{{testutil.NamedTag("ObjectTag")}},
	}).ToJSON()
	alias := metadata.MetadataAlias_create(metadata.MetadataAlias{
		Type: metadata.MetadataAliasType_create(metadata.MetadataAliasType{Name: "UserId", Value: testutil.AtomicMetadata("string")}),
		Tags: [][]metadata.IMetadataTypeTag{{testutil.NamedTag("AliasTag")}},
	}).ToJSON()

	cases := []metadata.IMetadataSchema_IReference{array, tuple, object, alias}
	for _, ref := range cases {
		if ref.Name == "" || len(ref.Tags) != 1 || len(ref.Tags[0]) != 1 || ref.Tags[0][0].Name == "" {
			t.Fatalf("reference JSON lost name or tag: %#v", ref)
		}
	}
}
