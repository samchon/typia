//go:build typia_native_internal
// +build typia_native_internal

package metadata

import (
	"testing"

	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestIterateMetadataCollectionBranchMatrix covers recursive graph detection.
//
// Metadata collection recursion is decided by walking schema graphs through
// array, tuple, object, alias, map, set, escaped, and rest edges. The checker
// normally builds those graphs, but the recursion walkers can be verified with
// compact schema fixtures.
//
// 1. Mark collection-owned array, tuple, and object types as recursive.
// 2. Exercise direct self-reference and visited/nil guard branches.
// 3. Walk alias, tuple, array, map, set, escaped, and rest edges for arrays.
// 4. Walk the same edge families for tuple and object recursion.
func TestIterateMetadataCollectionBranchMatrix(t *testing.T) {
	collection := schemametadata.NewMetadataCollection()
	arrayType, _, setArray := collection.EmplaceArray(nil, nil)
	tupleType, _, setTuple := collection.EmplaceTuple(nil, nil)
	objectType, _ := collection.Emplace(nil, nil)
	arrayType.Value = arrayRef(arrayType)
	setArray(arrayType.Value)
	tupleType.Elements = []*schemametadata.MetadataSchema{tupleRef(tupleType)}
	setTuple(tupleType.Elements)
	objectType.Properties = []*schemametadata.MetadataProperty{
		schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{
			Key:   literalMetadata("self"),
			Value: objectRef(objectType),
		}),
	}
	Iterate_metadata_collection(struct {
		Errors     *[]MetadataFactory_IError
		Collection *schemametadata.MetadataCollection
	}{Collection: collection})
	if arrayType.Recursive != true || tupleType.Recursive != true || objectType.Recursive != true {
		t.Fatal("collection recursion flags were not detected")
	}

	if iterate_metadata_collection_is_array_recursive(struct {
		Visited  map[*schemametadata.MetadataSchema]bool
		Array    *schemametadata.MetadataArrayType
		Metadata *schemametadata.MetadataSchema
	}{Visited: map[*schemametadata.MetadataSchema]bool{}, Array: arrayType}) {
		t.Fatal("nil array metadata should not be recursive")
	}
	visited := arrayRef(arrayType)
	if iterate_metadata_collection_is_array_recursive(struct {
		Visited  map[*schemametadata.MetadataSchema]bool
		Array    *schemametadata.MetadataArrayType
		Metadata *schemametadata.MetadataSchema
	}{Visited: map[*schemametadata.MetadataSchema]bool{visited: true}, Array: arrayType, Metadata: visited}) {
		t.Fatal("visited array metadata should not recurse again")
	}

	for _, meta := range []*schemametadata.MetadataSchema{
		arrayRef(arrayType),
		aliasTo(arrayRef(arrayType)),
		tupleOf(arrayRef(arrayType), false),
		mapValue(arrayRef(arrayType)),
		setValue(arrayRef(arrayType)),
		escapedReturns(arrayRef(arrayType)),
		restOf(arrayRef(arrayType)),
	} {
		if !iterate_metadata_collection_is_array_recursive(struct {
			Visited  map[*schemametadata.MetadataSchema]bool
			Array    *schemametadata.MetadataArrayType
			Metadata *schemametadata.MetadataSchema
		}{Visited: map[*schemametadata.MetadataSchema]bool{}, Array: arrayType, Metadata: meta}) {
			t.Fatalf("array recursion was not found through %s", meta.GetName())
		}
	}

	for _, meta := range []*schemametadata.MetadataSchema{
		tupleRef(tupleType),
		tupleOf(tupleRef(tupleType), false),
		arrayOf(tupleRef(tupleType), false),
		mapValue(tupleRef(tupleType)),
		setValue(tupleRef(tupleType)),
		aliasTo(tupleRef(tupleType)),
		escapedReturns(tupleRef(tupleType)),
		restOf(tupleRef(tupleType)),
	} {
		if !iterate_metadata_collection_is_tuple_recursive(struct {
			Visited  map[*schemametadata.MetadataSchema]bool
			Tuple    *schemametadata.MetadataTupleType
			Metadata *schemametadata.MetadataSchema
		}{Visited: map[*schemametadata.MetadataSchema]bool{}, Tuple: tupleType, Metadata: meta}) {
			t.Fatalf("tuple recursion was not found through %s", meta.GetName())
		}
	}

	for _, meta := range []*schemametadata.MetadataSchema{
		objectRef(objectType),
		objectWithProperty(objectRef(objectType)),
		aliasTo(objectRef(objectType)),
		arrayOf(objectRef(objectType), false),
		tupleOf(objectRef(objectType), false),
		mapValue(objectRef(objectType)),
		setValue(objectRef(objectType)),
		escapedReturns(objectRef(objectType)),
		restOf(objectRef(objectType)),
	} {
		if !iterate_metadata_collection_is_object_recursive(struct {
			Visited  map[*schemametadata.MetadataSchema]bool
			Object   *schemametadata.MetadataObjectType
			Metadata *schemametadata.MetadataSchema
		}{Visited: map[*schemametadata.MetadataSchema]bool{}, Object: objectType, Metadata: meta}) {
			t.Fatalf("object recursion was not found through %s", meta.GetName())
		}
	}
}

func literalMetadata(value string) *schemametadata.MetadataSchema {
	meta := schemametadata.MetadataSchema_initialize()
	meta.Constants = append(meta.Constants, schemametadata.MetadataConstant_create(schemametadata.MetadataConstant{
		Type: "string",
		Values: []*schemametadata.MetadataConstantValue{
			schemametadata.MetadataConstantValue_create(schemametadata.MetadataConstantValue{Value: value}),
		},
	}))
	return meta
}

func arrayRef(array *schemametadata.MetadataArrayType) *schemametadata.MetadataSchema {
	meta := schemametadata.MetadataSchema_initialize()
	meta.Arrays = append(meta.Arrays, schemametadata.MetadataArray_create(schemametadata.MetadataArray{Type: array}))
	return meta
}

func arrayOf(value *schemametadata.MetadataSchema, recursive bool) *schemametadata.MetadataSchema {
	array := schemametadata.MetadataArrayType_create(schemametadata.MetadataArrayType{Name: "NestedArray", Value: value, Recursive: recursive})
	return arrayRef(array)
}

func tupleRef(tuple *schemametadata.MetadataTupleType) *schemametadata.MetadataSchema {
	meta := schemametadata.MetadataSchema_initialize()
	meta.Tuples = append(meta.Tuples, schemametadata.MetadataTuple_create(schemametadata.MetadataTuple{Type: tuple}))
	return meta
}

func tupleOf(value *schemametadata.MetadataSchema, recursive bool) *schemametadata.MetadataSchema {
	tuple := schemametadata.MetadataTupleType_create(schemametadata.MetadataTupleType{Name: "NestedTuple", Elements: []*schemametadata.MetadataSchema{value}, Recursive: recursive})
	return tupleRef(tuple)
}

func objectRef(object *schemametadata.MetadataObjectType) *schemametadata.MetadataSchema {
	meta := schemametadata.MetadataSchema_initialize()
	meta.Objects = append(meta.Objects, schemametadata.MetadataObject_create(schemametadata.MetadataObject{Type: object}))
	return meta
}

func objectWithProperty(value *schemametadata.MetadataSchema) *schemametadata.MetadataSchema {
	object := schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{
		Name: "NestedObject",
		Properties: []*schemametadata.MetadataProperty{
			schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{Key: literalMetadata("value"), Value: value}),
		},
	})
	return objectRef(object)
}

func aliasTo(value *schemametadata.MetadataSchema) *schemametadata.MetadataSchema {
	alias := schemametadata.MetadataAliasType_create(schemametadata.MetadataAliasType{Name: "Alias", Value: value})
	meta := schemametadata.MetadataSchema_initialize()
	meta.Aliases = append(meta.Aliases, schemametadata.MetadataAlias_create(schemametadata.MetadataAlias{Type: alias}))
	return meta
}

func mapValue(value *schemametadata.MetadataSchema) *schemametadata.MetadataSchema {
	meta := schemametadata.MetadataSchema_initialize()
	meta.Maps = append(meta.Maps, schemametadata.MetadataMap_create(schemametadata.MetadataMap{Key: literalMetadata("key"), Value: value}))
	return meta
}

func setValue(value *schemametadata.MetadataSchema) *schemametadata.MetadataSchema {
	meta := schemametadata.MetadataSchema_initialize()
	meta.Sets = append(meta.Sets, schemametadata.MetadataSet_create(schemametadata.MetadataSet{Value: value}))
	return meta
}

func escapedReturns(value *schemametadata.MetadataSchema) *schemametadata.MetadataSchema {
	meta := schemametadata.MetadataSchema_initialize()
	meta.Escaped = schemametadata.MetadataEscaped_create(schemametadata.MetadataEscaped{
		Original: literalMetadata("source"),
		Returns:  value,
	})
	return meta
}

func restOf(value *schemametadata.MetadataSchema) *schemametadata.MetadataSchema {
	meta := schemametadata.MetadataSchema_initialize()
	meta.Rest = value
	return meta
}
