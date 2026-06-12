//go:build typia_native_internal
// +build typia_native_internal

package metadata

import "testing"

// TestSchemaSequenceAndJSONCoverage exercises metadata JSON helpers.
//
// Most schema JSON conversion is reached through transform fixtures, but map,
// set, template, sequence-cache, alias-recursive, and tag-row equality helpers
// have small branches that are clearer as direct metadata tests. This keeps the
// schema package behavior covered without constructing a compiler program.
//
// 1. Build tagged atomic schemas and verify protobuf sequence detection.
// 2. Convert map, set, and template schemas to and from JSON structures.
// 3. Merge same-kind tagged metadata and preserve distinct tag rows.
// 4. Rebuild rich schemas from JSON references and cover missing-reference errors.
// 5. Exercise schema name, size, bucket, intersect, cover, merge, and unalias branches.
// 6. Mark recursive components and compare string slice equality cases.
// 7. Cover false sequence tags, mismatched cover branches, and merge fallbacks.
func TestSchemaSequenceAndJSONCoverage(t *testing.T) {
	sequenceTag := IMetadataTypeTag{
		Name:   "sequence",
		Kind:   "sequence",
		Schema: map[string]any{"x-protobuf-sequence": 1},
	}
	floatSequenceTag := IMetadataTypeTag{
		Name:   "sequence",
		Kind:   "sequence",
		Schema: map[string]any{"x-protobuf-sequence": float64(2)},
	}
	atomic := MetadataAtomic_create(MetadataAtomic{
		Type: "string",
		Tags: [][]IMetadataTypeTag{{sequenceTag}},
	})
	schema := MetadataSchema_initialize()
	schema.Atomics = append(schema.Atomics, atomic)
	schema.Constants = append(schema.Constants, MetadataConstant_create(MetadataConstant{
		Type: "string",
		Values: []*MetadataConstantValue{
			MetadataConstantValue_create(MetadataConstantValue{Value: "sequence", Tags: [][]IMetadataTypeTag{{sequenceTag}}}),
		},
	}))
	schema.Templates = append(schema.Templates, MetadataTemplate_create(MetadataTemplate{
		Row:  []*MetadataSchema{MetadataSchema_initialize()},
		Tags: [][]IMetadataTypeTag{{sequenceTag}},
	}))
	schema.Arrays = append(schema.Arrays, MetadataArray_create(MetadataArray{
		Type: MetadataArrayType_create(MetadataArrayType{Name: "ArrayType", Value: MetadataSchema_initialize()}),
		Tags: [][]IMetadataTypeTag{{sequenceTag}},
	}))
	schema.Objects = append(schema.Objects, MetadataObject_create(MetadataObject{
		Type: MetadataObjectType_create(MetadataObjectType{Name: "ObjectType"}),
		Tags: [][]IMetadataTypeTag{{sequenceTag}},
	}))
	schema.Natives = append(schema.Natives, MetadataNative_create(MetadataNative{
		Name: "Uint8Array",
		Tags: [][]IMetadataTypeTag{{sequenceTag}},
	}))
	if !schema.IsSequence() || !schema.IsSequence() {
		t.Fatal("sequence cache should detect protobuf sequence tags")
	}
	floatSequence := MetadataSchema_initialize()
	floatSequence.Atomics = append(floatSequence.Atomics, MetadataAtomic_create(MetadataAtomic{
		Type: "string",
		Tags: [][]IMetadataTypeTag{
			{{Name: "other", Kind: "sequence", Schema: "not-object"}},
			{floatSequenceTag},
		},
	}))
	floatSequence.Constants = append(floatSequence.Constants, MetadataConstant_create(MetadataConstant{
		Type: "string",
		Values: []*MetadataConstantValue{
			MetadataConstantValue_create(MetadataConstantValue{Value: "float", Tags: [][]IMetadataTypeTag{{floatSequenceTag}}}),
		},
	}))
	floatSequence.Templates = append(floatSequence.Templates, MetadataTemplate_create(MetadataTemplate{
		Row:  []*MetadataSchema{MetadataSchema_initialize()},
		Tags: [][]IMetadataTypeTag{{floatSequenceTag}},
	}))
	floatSequence.Arrays = append(floatSequence.Arrays, MetadataArray_create(MetadataArray{
		Type: MetadataArrayType_create(MetadataArrayType{Name: "FloatArray", Value: MetadataSchema_initialize()}),
		Tags: [][]IMetadataTypeTag{{floatSequenceTag}},
	}))
	floatSequence.Objects = append(floatSequence.Objects, MetadataObject_create(MetadataObject{
		Type: MetadataObjectType_create(MetadataObjectType{Name: "FloatObject"}),
		Tags: [][]IMetadataTypeTag{{floatSequenceTag}},
	}))
	floatSequence.Natives = append(floatSequence.Natives, MetadataNative_create(MetadataNative{
		Name: "Uint8Array",
		Tags: [][]IMetadataTypeTag{{floatSequenceTag}},
	}))
	if !floatSequence.IsSequence() {
		t.Fatal("float64 protobuf sequence tag should be detected")
	}
	nonSequence := MetadataSchema_initialize()
	nonSequence.Atomics = append(nonSequence.Atomics, MetadataAtomic_create(MetadataAtomic{
		Type: "string",
		Tags: [][]IMetadataTypeTag{{{Name: "not-sequence", Kind: "format", Schema: "plain"}}},
	}))
	if nonSequence.IsSequence() {
		t.Fatal("schema without sequence tags should not be a sequence")
	}
	plain := MetadataSchema_initialize()
	plain.Atomics = append(plain.Atomics, MetadataAtomic_create(MetadataAtomic{Type: "number"}))

	set := MetadataSet_create(MetadataSet{Value: schema, Tags: [][]IMetadataTypeTag{{sequenceTag}}})
	if set.GetName() == "" || set.ToJSON().Value == nil {
		t.Fatal("set schema JSON conversion failed")
	}
	mapped := MetadataMap_create(MetadataMap{Key: plain, Value: schema, Tags: [][]IMetadataTypeTag{{sequenceTag}}})
	if mapped.GetName() == "" || mapped.ToJSON().Key == nil || mapped.ToJSON().Value == nil {
		t.Fatal("map schema JSON conversion failed")
	}

	constant := MetadataSchema_initialize()
	constant.Constants = append(constant.Constants, MetadataConstant_create(MetadataConstant{
		Type: "string",
		Values: []*MetadataConstantValue{
			MetadataConstantValue_create(MetadataConstantValue{Value: "prefix"}),
		},
	}))
	template := MetadataTemplate_create(MetadataTemplate{
		Row:  []*MetadataSchema{constant, plain},
		Tags: [][]IMetadataTypeTag{{sequenceTag}},
	})
	if template.GetBaseName() != "`prefix${number}`" || template.ToJSON().Row == nil {
		t.Fatalf("template base name or JSON mismatch: %s", template.GetBaseName())
	}
	rebuilt := MetadataTemplate_from(template.ToJSON(), IMetadataDictionary{})
	if rebuilt.GetName() == "" || len(rebuilt.Row) != 2 {
		t.Fatal("template JSON reconstruction failed")
	}
	paramDescription := "parameter"
	arrayType := MetadataArrayType_create(MetadataArrayType{Name: "ArrayType", Value: plain, Nullables: []bool{false}})
	tupleType := MetadataTupleType_create(MetadataTupleType{Name: "TupleType", Elements: []*MetadataSchema{plain}, Nullables: []bool{false}})
	objectType := MetadataObjectType_create(MetadataObjectType{
		Name: "ObjectType",
		Properties: []*MetadataProperty{
			MetadataProperty_create(MetadataProperty{Key: schemaLiteral("field"), Value: plain}),
		},
	})
	aliasType := MetadataAliasType_create(MetadataAliasType{Name: "AliasType", Value: plain})
	escaped := MetadataEscaped_create(MetadataEscaped{Original: plain, Returns: schemaLiteral("escaped")})
	rest := MetadataSchema_initialize()
	rest.Atomics = append(rest.Atomics, MetadataAtomic_create(MetadataAtomic{Type: "boolean"}))
	rich := MetadataSchema_initialize(true)
	rich.Any = false
	rich.Nullable = true
	rich.Optional = true
	rich.Required = false
	rich.Functions = append(rich.Functions, MetadataFunction_create(MetadataFunction{
		Parameters: []*MetadataParameter{
			MetadataParameter_create(MetadataParameter{Name: "input", Type: plain, Description: &paramDescription}),
		},
		Output: schemaLiteral("result"),
		Async:  true,
	}))
	rich.Escaped = escaped
	rich.Rest = rest
	rich.Atomics = append(rich.Atomics, MetadataAtomic_create(MetadataAtomic{Type: "string"}))
	rich.Constants = append(rich.Constants, MetadataConstant_create(MetadataConstant{
		Type: "boolean",
		Values: []*MetadataConstantValue{
			MetadataConstantValue_create(MetadataConstantValue{Value: true}),
		},
	}))
	rich.Templates = append(rich.Templates, template)
	rich.Arrays = append(rich.Arrays, MetadataArray_create(MetadataArray{Type: arrayType, Tags: [][]IMetadataTypeTag{{sequenceTag}}}))
	rich.Tuples = append(rich.Tuples, MetadataTuple_create(MetadataTuple{Type: tupleType, Tags: [][]IMetadataTypeTag{{sequenceTag}}}))
	rich.Objects = append(rich.Objects, MetadataObject_create(MetadataObject{Type: objectType, Tags: [][]IMetadataTypeTag{{sequenceTag}}}))
	rich.Aliases = append(rich.Aliases, MetadataAlias_create(MetadataAlias{Type: aliasType, Tags: [][]IMetadataTypeTag{{sequenceTag}}}))
	rich.Natives = append(rich.Natives, MetadataNative_create(MetadataNative{Name: "Uint8Array", Tags: [][]IMetadataTypeTag{{sequenceTag}}}))
	rich.Sets = append(rich.Sets, set)
	rich.Maps = append(rich.Maps, mapped)
	dict := IMetadataDictionary{
		Arrays:  map[string]*MetadataArrayType{arrayType.Name: arrayType},
		Tuples:  map[string]*MetadataTupleType{tupleType.Name: tupleType},
		Objects: map[string]*MetadataObjectType{objectType.Name: objectType},
		Aliases: map[string]*MetadataAliasType{aliasType.Name: aliasType},
	}
	richJSON := rich.ToJSON()
	fromJSON := MetadataSchema_from(richJSON, dict)
	if fromJSON.Size() == 0 || fromJSON.Bucket() == 0 || fromJSON.GetName() == "" {
		t.Fatal("rich metadata schema reconstruction lost required state")
	}
	for _, broken := range []*IMetadataSchema{
		{Arrays: []IMetadataSchema_IReference{{Name: "missing-array"}}},
		{Tuples: []IMetadataSchema_IReference{{Name: "missing-tuple"}}},
		{Objects: []IMetadataSchema_IReference{{Name: "missing-object"}}},
		{Aliases: []IMetadataSchema_IReference{{Name: "missing-alias"}}},
	} {
		schemaMustPanic(t, func() {
			_ = MetadataSchema_from(broken, dict)
		})
	}

	anySchema := MetadataSchema_initialize()
	anySchema.Any = true
	optionalSchema := MetadataSchema_initialize()
	optionalSchema.Required = false
	optionalSchema.Optional = true
	nullableSchema := MetadataSchema_initialize()
	nullableSchema.Nullable = true
	functionSchema := MetadataSchema_initialize()
	functionSchema.Functions = append(functionSchema.Functions, MetadataFunction_create(MetadataFunction{Output: plain}))
	arraySchema := MetadataSchema_initialize()
	arraySchema.Arrays = append(arraySchema.Arrays, MetadataArray_create(MetadataArray{Type: arrayType}))
	tupleSchema := MetadataSchema_initialize()
	tupleSchema.Tuples = append(tupleSchema.Tuples, MetadataTuple_create(MetadataTuple{Type: tupleType}))
	objectSchema := MetadataSchema_initialize()
	objectSchema.Objects = append(objectSchema.Objects, MetadataObject_create(MetadataObject{Type: objectType}))
	aliasSchema := MetadataSchema_initialize()
	aliasSchema.Aliases = append(aliasSchema.Aliases, MetadataAlias_create(MetadataAlias{Type: aliasType}))
	nativeValue := MetadataNative_create(MetadataNative{Name: "Uint8Array"})
	nativeSchema := MetadataSchema_initialize()
	nativeSchema.Natives = append(nativeSchema.Natives, nativeValue)
	nativeSchemaPeer := MetadataSchema_initialize()
	nativeSchemaPeer.Natives = append(nativeSchemaPeer.Natives, nativeValue)
	escapedSchema := MetadataSchema_initialize()
	escapedSchema.Escaped = MetadataEscaped_create(MetadataEscaped{Original: schemaLiteral("a"), Returns: schemaLiteral("b")})
	escapedOther := MetadataSchema_initialize()
	escapedOther.Escaped = MetadataEscaped_create(MetadataEscaped{Original: schemaLiteral("a"), Returns: schemaLiteral("c")})
	escapedPeer := MetadataSchema_initialize()
	escapedPeer.Escaped = MetadataEscaped_create(MetadataEscaped{Original: schemaLiteral("a"), Returns: schemaLiteral("b")})
	objectSchemaPeer := MetadataSchema_initialize()
	objectSchemaPeer.Objects = append(objectSchemaPeer.Objects, MetadataObject_create(MetadataObject{Type: objectType}))
	aliasSchemaPeer := MetadataSchema_initialize()
	aliasSchemaPeer.Aliases = append(aliasSchemaPeer.Aliases, MetadataAlias_create(MetadataAlias{Type: aliasType}))
	otherAliasSchema := MetadataSchema_initialize()
	otherAliasSchema.Aliases = append(otherAliasSchema.Aliases, MetadataAlias_create(MetadataAlias{
		Type: MetadataAliasType_create(MetadataAliasType{Name: "OtherAlias", Value: plain}),
	}))
	stringSchema := schemaAtomic("string")
	numberSchema := schemaAtomic("number")
	templateString := MetadataSchema_initialize()
	templateString.Templates = append(templateString.Templates, template)
	otherNativeSchema := MetadataSchema_initialize()
	otherNativeSchema.Natives = append(otherNativeSchema.Natives, MetadataNative_create(MetadataNative{Name: "OtherNative"}))
	if !MetadataSchema_intersects(anySchema, plain) ||
		!MetadataSchema_intersects(optionalSchema, optionalSchema) ||
		!MetadataSchema_intersects(nullableSchema, nullableSchema) ||
		!MetadataSchema_intersects(functionSchema, functionSchema) ||
		!MetadataSchema_intersects(arraySchema, arraySchema) ||
		!MetadataSchema_intersects(tupleSchema, tupleSchema) ||
		!MetadataSchema_intersects(objectSchema, objectSchema) ||
		!MetadataSchema_intersects(aliasSchema, aliasSchema) ||
		!MetadataSchema_intersects(nativeSchema, nativeSchema) ||
		!MetadataSchema_intersects(escapedSchema, escapedOther) ||
		!MetadataSchema_intersects(stringSchema, schemaLiteral("x")) ||
		!MetadataSchema_intersects(schemaLiteral("x"), stringSchema) ||
		!MetadataSchema_intersects(schemaLiteral("x"), schemaLiteral("x")) ||
		!MetadataSchema_intersects(stringSchema, stringSchema) ||
		!MetadataSchema_intersects(templateString, stringSchema) ||
		!MetadataSchema_intersects(stringSchema, templateString) ||
		MetadataSchema_intersects(schemaLiteral("x"), numberSchema) {
		t.Fatal("schema intersection branch returned unexpected result")
	}
	otherObjectSchema := MetadataSchema_initialize()
	otherObjectSchema.Objects = append(otherObjectSchema.Objects, MetadataObject_create(MetadataObject{
		Type: MetadataObjectType_create(MetadataObjectType{Name: "OtherObject"}),
	}))
	if MetadataSchema_covers(plain, plain) ||
		!MetadataSchema_covers(anySchema, plain) ||
		MetadataSchema_covers(plain, anySchema) ||
		MetadataSchema_covers(plain, escapedSchema) ||
		MetadataSchema_covers(escapedSchema, escapedOther) ||
		!MetadataSchema_covers(escapedSchema, escapedPeer, 0, true) ||
		MetadataSchema_covers(arraySchema, schemaArrayOf(schemaAtomic("string"))) ||
		MetadataSchema_covers(tupleSchema, schemaTupleOf(schemaAtomic("string"), schemaAtomic("number"))) ||
		MetadataSchema_covers(schemaTupleOf(schemaAtomic("string"), schemaAtomic("number")), schemaTupleOf(schemaAtomic("string"))) ||
		!MetadataSchema_covers(schemaTupleOf(schemaAtomic("string"), schemaAtomic("string")), schemaTupleOf(schemaAtomic("string"))) ||
		!MetadataSchema_covers(objectSchema, objectSchemaPeer) ||
		MetadataSchema_covers(objectSchema, otherObjectSchema) ||
		!MetadataSchema_covers(aliasSchema, aliasSchemaPeer) ||
		MetadataSchema_covers(aliasSchema, otherAliasSchema) ||
		!MetadataSchema_covers(nativeSchema, nativeSchemaPeer) ||
		MetadataSchema_covers(nativeSchema, otherNativeSchema) ||
		!MetadataSchema_covers(schemaSetOf(schemaAtomic("number")), schemaSetOf(schemaAtomic("number"))) ||
		MetadataSchema_covers(schemaSetOf(schemaAtomic("number")), schemaSetOf(schemaAtomic("string"))) ||
		MetadataSchema_covers(numberSchema, stringSchema) ||
		!MetadataSchema_covers(stringSchema, schemaLiteral("covered")) ||
		MetadataSchema_covers(MetadataSchema_initialize(), schemaLiteral("x")) ||
		MetadataSchema_covers(schemaLiteral("x"), schemaLiteral("missing")) ||
		MetadataSchema_covers(schemaLiteral("x"), schemaLiteral("y")) ||
		MetadataSchema_covers(MetadataSchema_initialize(), functionSchema) {
		t.Fatal("schema coverage branch returned unexpected result")
	}
	if !MetadataSchema_initialize().Empty() ||
		anySchema.Size() == 0 ||
		anySchema.Bucket() == 0 ||
		!rich.IsUnionBucket() ||
		!schemaLiteral("x").IsSoleLiteral() ||
		schemaLiteral("x").GetSoleLiteral() == nil ||
		schemaAtomic("string").GetSoleLiteral() != nil ||
		!rich.IsParentResolved() ||
		anySchema.GetName() != "any" ||
		safeMetadataName(nil) != "unknown" ||
		taggedName("Base", nil) != "Base" ||
		taggedName("Base", [][]IMetadataTypeTag{{{Name: "A"}}, {{Name: "B"}, {Name: "C"}}}) == "" ||
		len(firstNonEmpty([]*MetadataFunction{MetadataFunction_create(MetadataFunction{Output: plain})}, []*MetadataFunction{})) == 0 {
		t.Fatal("metadata naming fallback helpers returned unexpected values")
	}

	left := MetadataSchema_initialize()
	left.Atomics = append(left.Atomics, MetadataAtomic_create(MetadataAtomic{
		Type: "string",
		Tags: [][]IMetadataTypeTag{{{Name: "A", Kind: "format", Validate: "true"}}},
	}))
	right := MetadataSchema_initialize()
	right.Atomics = append(right.Atomics, MetadataAtomic_create(MetadataAtomic{
		Type: "string",
		Tags: [][]IMetadataTypeTag{
			{{Name: "A", Kind: "format", Validate: "true"}},
			{{Name: "B", Kind: "minLength", Validate: "true"}},
		},
	}))
	merged := MetadataSchema_merge(left, right)
	if len(merged.Atomics) != 1 || len(merged.Atomics[0].Tags) != 2 {
		t.Fatal("tagged metadata merge should keep distinct tag rows")
	}
	mergeLeft := MetadataSchema_initialize()
	mergeLeft.Escaped = MetadataEscaped_create(MetadataEscaped{Original: schemaLiteral("left"), Returns: schemaLiteral("left")})
	mergeLeft.Rest = schemaAtomic("string")
	mergeLeft.Arrays = append(mergeLeft.Arrays, MetadataArray_create(MetadataArray{Type: arrayType, Tags: [][]IMetadataTypeTag{{{Name: "A"}}}}))
	mergeLeft.Tuples = append(mergeLeft.Tuples, MetadataTuple_create(MetadataTuple{Type: tupleType, Tags: [][]IMetadataTypeTag{{{Name: "A"}}}}))
	mergeLeft.Objects = append(mergeLeft.Objects, MetadataObject_create(MetadataObject{Type: objectType, Tags: [][]IMetadataTypeTag{{{Name: "A"}}}}))
	mergeLeft.Aliases = append(mergeLeft.Aliases, MetadataAlias_create(MetadataAlias{Type: aliasType, Tags: [][]IMetadataTypeTag{{{Name: "A"}}}}))
	mergeLeft.Natives = append(mergeLeft.Natives, MetadataNative_create(MetadataNative{Name: "Uint8Array", Tags: [][]IMetadataTypeTag{{{Name: "A"}}}}))
	mergeLeft.Sets = append(mergeLeft.Sets, MetadataSet_create(MetadataSet{Value: plain, Tags: [][]IMetadataTypeTag{{{Name: "A"}}}}))
	mergeLeft.Maps = append(mergeLeft.Maps, MetadataMap_create(MetadataMap{Key: plain, Value: stringSchema, Tags: [][]IMetadataTypeTag{{{Name: "A"}}}}))
	mergeRight := MetadataSchema_initialize()
	mergeRight.Escaped = MetadataEscaped_create(MetadataEscaped{Original: schemaLiteral("right"), Returns: schemaLiteral("right")})
	mergeRight.Rest = schemaAtomic("number")
	mergeRight.Constants = append(mergeRight.Constants, MetadataConstant_create(MetadataConstant{
		Type: "string",
		Values: []*MetadataConstantValue{
			MetadataConstantValue_create(MetadataConstantValue{Value: "new"}),
			MetadataConstantValue_create(MetadataConstantValue{Value: "new"}),
		},
	}))
	mergeRight.Arrays = append(mergeRight.Arrays, MetadataArray_create(MetadataArray{Type: arrayType, Tags: [][]IMetadataTypeTag{{{Name: "B"}}, {{Name: "A"}}}}))
	mergeRight.Tuples = append(mergeRight.Tuples, MetadataTuple_create(MetadataTuple{Type: tupleType, Tags: [][]IMetadataTypeTag{{{Name: "B"}}}}))
	mergeRight.Objects = append(mergeRight.Objects, MetadataObject_create(MetadataObject{Type: objectType, Tags: [][]IMetadataTypeTag{{{Name: "B"}}}}))
	mergeRight.Aliases = append(mergeRight.Aliases, MetadataAlias_create(MetadataAlias{Type: aliasType, Tags: [][]IMetadataTypeTag{{{Name: "B"}}}}))
	mergeRight.Natives = append(mergeRight.Natives, MetadataNative_create(MetadataNative{Name: "Uint8Array", Tags: [][]IMetadataTypeTag{{{Name: "B"}}}}))
	mergeRight.Sets = append(mergeRight.Sets, MetadataSet_create(MetadataSet{Value: plain, Tags: [][]IMetadataTypeTag{{{Name: "B"}}}}))
	mergeRight.Maps = append(mergeRight.Maps, MetadataMap_create(MetadataMap{Key: plain, Value: stringSchema, Tags: [][]IMetadataTypeTag{{{Name: "B"}}}}))
	mergedKinds := MetadataSchema_merge(mergeLeft, mergeRight)
	if mergedKinds.Escaped == nil || mergedKinds.Rest == nil || len(mergedKinds.Arrays[0].Tags) != 2 || len(mergedKinds.Constants[0].Values) != 1 {
		t.Fatal("schema merge did not combine rich tagged branches")
	}
	if mergeEscaped(mergeLeft.Escaped, nil) == nil || mergeRest(mergeLeft.Rest, nil) == nil {
		t.Fatal("merge fallback helpers should keep left values")
	}

	collection := NewMetadataCollection()
	alias := MetadataAliasType_create(MetadataAliasType{Name: "Alias", Value: plain})
	collection.SetAliasRecursive(alias, true)
	if !alias.Recursive {
		t.Fatal("alias recursive flag was not applied")
	}
	if !stringSliceEqual([]string{"a", "b"}, []string{"a", "b"}) ||
		stringSliceEqual([]string{"a"}, []string{"a", "b"}) ||
		stringSliceEqual([]string{"a", "b"}, []string{"a", "c"}) {
		t.Fatal("string slice equality helper returned unexpected result")
	}
	aliasWrapper := MetadataSchema_initialize()
	aliasWrapper.Aliases = append(aliasWrapper.Aliases, MetadataAlias_create(MetadataAlias{Type: alias}))
	if MetadataSchema_unalias(aliasWrapper) != plain {
		t.Fatal("single alias wrapper should unalias to the aliased value")
	}
	alias.Value = aliasWrapper
	if MetadataSchema_unalias(aliasWrapper) == nil {
		t.Fatal("recursive alias unwrapping should terminate with a schema")
	}
}

func schemaMustPanic(t *testing.T, run func()) {
	t.Helper()
	defer func() {
		if recover() == nil {
			t.Fatal("expected metadata schema reconstruction to panic")
		}
	}()
	run()
}

func schemaAtomic(name string) *MetadataSchema {
	meta := MetadataSchema_initialize()
	meta.Atomics = append(meta.Atomics, MetadataAtomic_create(MetadataAtomic{Type: name}))
	return meta
}

func schemaLiteral(value string) *MetadataSchema {
	meta := MetadataSchema_initialize()
	meta.Constants = append(meta.Constants, MetadataConstant_create(MetadataConstant{
		Type: "string",
		Values: []*MetadataConstantValue{
			MetadataConstantValue_create(MetadataConstantValue{Value: value}),
		},
	}))
	return meta
}

func schemaArrayOf(value *MetadataSchema) *MetadataSchema {
	meta := MetadataSchema_initialize()
	meta.Arrays = append(meta.Arrays, MetadataArray_create(MetadataArray{
		Type: MetadataArrayType_create(MetadataArrayType{Name: "ArrayOf" + value.GetName(), Value: value}),
	}))
	return meta
}

func schemaTupleOf(elements ...*MetadataSchema) *MetadataSchema {
	meta := MetadataSchema_initialize()
	meta.Tuples = append(meta.Tuples, MetadataTuple_create(MetadataTuple{
		Type: MetadataTupleType_create(MetadataTupleType{Name: "TupleOf", Elements: elements}),
	}))
	return meta
}

func schemaSetOf(value *MetadataSchema) *MetadataSchema {
	meta := MetadataSchema_initialize()
	meta.Sets = append(meta.Sets, MetadataSet_create(MetadataSet{Value: value}))
	return meta
}
