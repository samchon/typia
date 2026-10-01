package typia_test

import (
	"testing"

	metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataTypeWithoutValueConstructors verifies first-pass component shells.
//
// Component restoration creates empty shells before resolving recursive values.
// The without-value constructors must preserve identity fields and recursive
// flags without requiring child schemas up front.
//
// 1. Build alias, array, object, and tuple DTO shells.
// 2. Construct runtime component shells without child schemas.
// 3. Assert names, recursive flags, and nullability vectors are preserved.
//
// @evidence contracts/testing.md#behavioral-verification The without-value constructors for alias, array, object and tuple shells are called and their names, recursive flags, nullability vectors and empty children are compared.
// @evidence contracts/testing.md#independent-expectations The authored DTO fields are the expected values and the shell contract is that children are absent until resolution.
// @evidence contracts/testing.md#distinguishing-cases Four shell kinds with recursive flags and nullability vectors of differing length; shells with children supplied are not covered.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It constructs shells in memory with no filesystem fixture, process or native command build.
func TestMetadataTypeWithoutValueConstructors(t *testing.T) {
	alias := metadata.MetadataAliasType__From_without_value(metadata.IMetadataSchema_IAliasType{
		Name: "Alias",
	})
	array := metadata.MetadataArrayType__From_without_value(metadata.IMetadataSchema_IArrayType{
		Name: "Array", Recursive: true, Nullables: []bool{true},
	})
	object := metadata.MetadataObjectType__From_without_properties(metadata.IMetadataSchema_IObjectType{
		Name: "Object", Recursive: true, Nullables: []bool{false, true},
	})
	tuple := metadata.MetadataTupleType__From_without_elements(metadata.IMetadataSchema_ITupleType{
		Name: "Tuple", Recursive: true, Nullables: []bool{true, false},
	})

	if alias.Name != "Alias" || alias.Value != nil {
		t.Fatalf("alias shell mismatch: %#v", alias)
	}
	if array.Name != "Array" || !array.Recursive || len(array.Nullables) != 1 || array.Value != nil {
		t.Fatalf("array shell mismatch: %#v", array)
	}
	if object.Name != "Object" || !object.Recursive || len(object.Properties) != 0 || len(object.Nullables) != 2 {
		t.Fatalf("object shell mismatch: %#v", object)
	}
	if tuple.Name != "Tuple" || !tuple.Recursive || tuple.Elements != nil || len(tuple.Nullables) != 2 {
		t.Fatalf("tuple shell mismatch: %#v", tuple)
	}
}
