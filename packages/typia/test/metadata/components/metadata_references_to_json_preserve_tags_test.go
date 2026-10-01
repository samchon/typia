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
//
// @evidence contracts/testing.md#behavioral-verification ToJSON runs on array, tuple, object and alias references each carrying one named tag, and the exact reference name and tag name of every result are compared.
// @evidence contracts/testing.md#independent-expectations Names (Items, Pair, User, UserId) and tags (ArrayTag, TupleTag, ObjectTag, AliasTag) are authored constants in the test.
// @evidence contracts/testing.md#distinguishing-cases Four reference kinds each own one tag row; multiple tag rows and tag values are not covered.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It converts in memory with no filesystem fixture, process or native command build.
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

	cases := []struct {
		ref  metadata.IMetadataSchema_IReference
		name string
		tag  string
	}{
		{array, "Items", "ArrayTag"},
		{tuple, "Pair", "TupleTag"},
		{object, "User", "ObjectTag"},
		{alias, "UserId", "AliasTag"},
	}
	for _, c := range cases {
		if c.ref.Name != c.name || len(c.ref.Tags) != 1 || len(c.ref.Tags[0]) != 1 || c.ref.Tags[0][0].Name != c.tag {
			t.Fatalf("reference JSON lost name %q or tag %q: %#v", c.name, c.tag, c.ref)
		}
	}
}
