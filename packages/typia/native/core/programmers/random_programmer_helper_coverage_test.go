package programmers

import (
	"testing"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	shimchecker "github.com/microsoft/typescript-go/shim/checker"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
	nativeiterate "github.com/samchon/typia/packages/typia/native/core/programmers/iterate"
	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestRandomProgrammerHelperCoverage exercises random programmer helpers.
//
// Random generation for native and typed-array values is mostly selected from
// metadata-driven code paths. These helpers are deterministic AST builders, so
// direct calls can cover their range tables and import fallbacks precisely.
//
// 1. Verify typed-array detection and range tuples for every supported native name.
// 2. Build ArrayBuffer and SharedArrayBuffer random native expressions.
// 3. Cover internal and type import fallbacks with and without an importer.
// 4. Verify naming, formatting, first-element, and schema-copy helpers.
// 5. Decode mixed metadata, recursive tuple, native object, and error adapter branches.
func TestRandomProgrammerHelperCoverage(t *testing.T) {
	factory := shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
	context := nativecontext.ITypiaContext{}
	functor := nativehelpers.NewFunctionProgrammer("random")
	constant := func(value any) *schemametadata.MetadataConstantValue {
		return schemametadata.MetadataConstantValue_create(schemametadata.MetadataConstantValue{
			Value: value,
			Tags:  [][]schemametadata.IMetadataTypeTag{},
		})
	}
	atomicSchema := func(name string) *schemametadata.MetadataSchema {
		meta := schemametadata.MetadataSchema_initialize()
		meta.Atomics = append(meta.Atomics, schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{
			Type: name,
			Tags: [][]schemametadata.IMetadataTypeTag{},
		}))
		return meta
	}
	literalSchema := func(value string) *schemametadata.MetadataSchema {
		meta := schemametadata.MetadataSchema_initialize()
		meta.Constants = append(meta.Constants, schemametadata.MetadataConstant_create(schemametadata.MetadataConstant{
			Type:   "string",
			Values: []*schemametadata.MetadataConstantValue{constant(value)},
		}))
		return meta
	}
	for _, name := range []string{
		"Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "BigUint64Array",
		"Int8Array", "Int16Array", "Int32Array", "BigInt64Array", "Float32Array", "Float64Array",
	} {
		if !randomProgrammer_is_typed_array(name) {
			t.Fatalf("%s should be recognized as typed array", name)
		}
		typ, minimum, maximum := randomProgrammer_typed_array_range(name)
		if typ == "" || minimum == "" || maximum == "" {
			t.Fatalf("%s typed array range was incomplete", name)
		}
	}
	if randomProgrammer_is_typed_array("Date") {
		t.Fatal("Date should not be recognized as typed array")
	}
	if typ, minimum, maximum := randomProgrammer_typed_array_range("Float64Array"); typ != "double" || minimum == "" || maximum == "" {
		t.Fatal("default typed array range should describe double")
	}
	if randomProgrammer_decode_native_array_buffer(struct {
		Context nativecontext.ITypiaContext
		Functor *nativehelpers.FunctionProgrammer
		Explore randomProgrammer_IExplore
		Name    string
	}{Context: context, Functor: functor, Name: "ArrayBuffer"}) == nil ||
		randomProgrammer_decode_native_array_buffer(struct {
			Context nativecontext.ITypiaContext
			Functor *nativehelpers.FunctionProgrammer
			Explore randomProgrammer_IExplore
			Name    string
		}{Context: context, Functor: functor, Name: "SharedArrayBuffer"}) == nil {
		t.Fatal("random array buffer helper returned nil")
	}
	if randomProgrammer_internal(context, "helper") == nil ||
		randomProgrammer_internal(nativecontext.ITypiaContext{Importer: randomProgrammerImporter{}}, "helper") == nil {
		t.Fatal("random internal helper returned nil")
	}
	if randomProgrammer_import_type(context, ImportProgrammer_TypeProps{Name: "Alias"}) == nil ||
		randomProgrammer_import_type(context, ImportProgrammer_TypeProps{Name: factory.NewIdentifier("AliasNode")}) == nil ||
		randomProgrammer_import_type(nativecontext.ITypiaContext{Importer: randomProgrammerImporter{}}, ImportProgrammer_TypeProps{Name: "Alias"}) == nil {
		t.Fatal("random import type helper returned nil")
	}
	explicit := "Named"
	if randomProgrammer_type_reference(context, nil, &explicit) == nil ||
		randomProgrammer_method_text(nil) != "" ||
		randomProgrammer_method_text(factory.NewIdentifier("method")) != "method" {
		t.Fatal("random type reference or method text helper failed")
	}
	if randomProgrammer_capitalize("") != "" ||
		randomProgrammer_capitalize("word") != "Word" ||
		randomProgrammer_format_pascal("date-time") != "DateTime" ||
		randomProgrammer_format_method("date-time") != "dateTime" {
		t.Fatal("random naming helper failed")
	}
	if randomProgrammer_first(nil).Text() != "undefined" ||
		randomProgrammer_first([]*shimast.Node{factory.NewIdentifier("value")}).Text() != "value" {
		t.Fatal("random first helper failed")
	}
	if randomProgrammer_schema_without_items(nativeiterate.JsonSchema{"type": "array", "items": "skip"}) == nil {
		t.Fatal("random schema copy helper returned nil")
	}
	if randomProgrammer_compose_atomic("string", nativeiterate.JsonSchema{"type": "string", "format": "date-time"}).Internal != "randomFormatDatetime" {
		t.Fatal("date-time format should use the datetime random helper")
	}
	if randomProgrammer_compose_atomic("string", nativeiterate.JsonSchema{"type": "string", "format": "uuid"}).Internal != "randomFormatUuid" ||
		randomProgrammer_compose_atomic("string", nativeiterate.JsonSchema{"type": "string", "pattern": "^[a]$"}).Internal != "randomPattern" {
		t.Fatal("string format and pattern helpers should select specialized random helpers")
	}

	metadata := schemametadata.MetadataSchema_initialize()
	metadata.Any = true
	metadata.Required = false
	metadata.Nullable = true
	metadata.Constants = append(metadata.Constants,
		schemametadata.MetadataConstant_create(schemametadata.MetadataConstant{
			Type:   "boolean",
			Values: []*schemametadata.MetadataConstantValue{constant(true), constant(false)},
		}),
		schemametadata.MetadataConstant_create(schemametadata.MetadataConstant{
			Type:   "bigint",
			Values: []*schemametadata.MetadataConstantValue{constant(int64(1))},
		}),
		schemametadata.MetadataConstant_create(schemametadata.MetadataConstant{
			Type:   "number",
			Values: []*schemametadata.MetadataConstantValue{constant(2)},
		}),
		schemametadata.MetadataConstant_create(schemametadata.MetadataConstant{
			Type:   "string",
			Values: []*schemametadata.MetadataConstantValue{constant("literal")},
		}),
	)
	escapedReturn := schemametadata.MetadataSchema_initialize()
	escapedReturn.Constants = append(escapedReturn.Constants, schemametadata.MetadataConstant_create(schemametadata.MetadataConstant{
		Type:   "string",
		Values: []*schemametadata.MetadataConstantValue{constant("escaped")},
	}))
	templateLeft := schemametadata.MetadataSchema_initialize()
	templateLeft.Constants = append(templateLeft.Constants, schemametadata.MetadataConstant_create(schemametadata.MetadataConstant{
		Type:   "string",
		Values: []*schemametadata.MetadataConstantValue{constant("left")},
	}))
	templateRight := atomicSchema("string")
	arrayIndex := 2
	arrayValue := atomicSchema("number")
	array := schemametadata.MetadataArray_create(schemametadata.MetadataArray{
		Type: schemametadata.MetadataArrayType_create(schemametadata.MetadataArrayType{
			Name:      "Array<number>",
			Value:     arrayValue,
			Index:     &arrayIndex,
			Recursive: true,
			Nullables: []bool{false},
		}),
		Tags: [][]schemametadata.IMetadataTypeTag{},
	})
	objectType := schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{
		Name:       "RandomObject",
		Index:      3,
		Recursive:  true,
		Nullables:  []bool{false},
		Properties: []*schemametadata.MetadataProperty{},
	})
	metadata.Escaped = schemametadata.MetadataEscaped_create(schemametadata.MetadataEscaped{
		Original: escapedReturn,
		Returns:  escapedReturn,
	})
	metadata.Templates = append(metadata.Templates, schemametadata.MetadataTemplate_create(schemametadata.MetadataTemplate{
		Row:  []*schemametadata.MetadataSchema{templateLeft, templateRight},
		Tags: [][]schemametadata.IMetadataTypeTag{},
	}))
	metadata.Arrays = append(metadata.Arrays, array)
	metadata.Tuples = append(metadata.Tuples, schemametadata.MetadataTuple_create(schemametadata.MetadataTuple{
		Type: schemametadata.MetadataTupleType_create(schemametadata.MetadataTupleType{
			Name:      "PlainTuple",
			Elements:  []*schemametadata.MetadataSchema{atomicSchema("string")},
			Nullables: []bool{false},
		}),
		Tags: [][]schemametadata.IMetadataTypeTag{},
	}))
	metadata.Objects = append(metadata.Objects, schemametadata.MetadataObject_create(schemametadata.MetadataObject{
		Type: objectType,
		Tags: [][]schemametadata.IMetadataTypeTag{},
	}))
	metadata.Natives = append(metadata.Natives, schemametadata.MetadataNative_create(schemametadata.MetadataNative{Name: "Date"}))
	metadata.Sets = append(metadata.Sets, schemametadata.MetadataSet_create(schemametadata.MetadataSet{
		Value: atomicSchema("string"),
		Tags:  [][]schemametadata.IMetadataTypeTag{},
	}))
	metadata.Maps = append(metadata.Maps, schemametadata.MetadataMap_create(schemametadata.MetadataMap{
		Key:   atomicSchema("string"),
		Value: atomicSchema("number"),
		Tags:  [][]schemametadata.IMetadataTypeTag{},
	}))
	if randomProgrammer_decode(randomProgrammer_decodeProps{
		Context:  context,
		Functor:  functor,
		Metadata: metadata,
	}) == nil {
		t.Fatal("random metadata decode returned nil")
	}

	tupleIndex := 1
	tupleElement := schemametadata.MetadataSchema_initialize()
	tupleElement.Atomics = append(tupleElement.Atomics, schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{
		Type: "string",
		Tags: [][]schemametadata.IMetadataTypeTag{},
	}))
	recursiveTuple := schemametadata.MetadataTuple_create(schemametadata.MetadataTuple{
		Type: schemametadata.MetadataTupleType_create(schemametadata.MetadataTupleType{
			Name:      "RecursiveTuple",
			Index:     &tupleIndex,
			Recursive: true,
			Elements:  []*schemametadata.MetadataSchema{tupleElement},
			Nullables: []bool{false},
		}),
		Tags: [][]schemametadata.IMetadataTypeTag{},
	})
	if randomProgrammer_decode_tuple(randomProgrammer_decodeTupleProps{
		Context: context,
		Functor: functor,
		Explore: randomProgrammer_IExplore{
			Recursive: true,
		},
		Tuple: recursiveTuple,
	}) == nil {
		t.Fatal("random recursive tuple decode returned nil")
	}
	collection := schemametadata.NewMetadataCollection()
	object, _ := collection.Emplace(nil, &shimchecker.Type{})
	object.Properties = []*schemametadata.MetadataProperty{
		schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{
			Key:   literalSchema("value"),
			Value: atomicSchema("string"),
		}),
	}
	recursiveArray, _, setRecursiveArray := collection.EmplaceArray(nil, &shimchecker.Type{})
	setRecursiveArray(atomicSchema("string"))
	collection.SetArrayRecursive(recursiveArray, true)
	_, _, setPlainArray := collection.EmplaceArray(nil, &shimchecker.Type{})
	setPlainArray(atomicSchema("number"))
	recursiveTupleType, _, setRecursiveTuple := collection.EmplaceTuple(nil, &shimchecker.Type{})
	setRecursiveTuple([]*schemametadata.MetadataSchema{atomicSchema("boolean")})
	collection.SetTupleRecursive(recursiveTupleType, true)
	_, _, setPlainTuple := collection.EmplaceTuple(nil, &shimchecker.Type{})
	setPlainTuple([]*schemametadata.MetadataSchema{atomicSchema("string")})
	if len(randomProgrammer_write_object_functions(struct {
		Context    nativecontext.ITypiaContext
		Functor    *nativehelpers.FunctionProgrammer
		Collection *schemametadata.MetadataCollection
	}{Context: context, Functor: functor, Collection: collection})) == 0 ||
		len(randomProgrammer_write_array_functions(struct {
			Context    nativecontext.ITypiaContext
			Functor    *nativehelpers.FunctionProgrammer
			Collection *schemametadata.MetadataCollection
		}{Context: context, Functor: functor, Collection: collection})) == 0 ||
		len(randomProgrammer_write_tuple_functions(struct {
			Context    nativecontext.ITypiaContext
			Functor    *nativehelpers.FunctionProgrammer
			Collection *schemametadata.MetadataCollection
		}{Context: context, Functor: functor, Collection: collection})) == 0 {
		t.Fatal("random recursive local function writers returned no functions")
	}

	for _, name := range []string{
		"Boolean", "Number", "BigInt", "String", "Blob", "File", "DataView", "RegExp", "CustomNative",
	} {
		if randomProgrammer_decode_native(struct {
			Context nativecontext.ITypiaContext
			Functor *nativehelpers.FunctionProgrammer
			Explore randomProgrammer_IExplore
			Name    string
		}{Context: context, Functor: functor, Name: name}) == nil {
			t.Fatalf("%s native random decode returned nil", name)
		}
	}
	if randomProgrammer_decode_native_byte_array(struct {
		Context nativecontext.ITypiaContext
		Functor *nativehelpers.FunctionProgrammer
		Explore randomProgrammer_IExplore
		Name    string
	}{Context: context, Functor: functor, Name: "BigInt64Array"}) == nil {
		t.Fatal("bigint typed-array random decode returned nil")
	}
	if randomProgrammer_decode_object(randomProgrammer_decodeObjectProps{
		Functor: functor,
		Explore: randomProgrammer_IExplore{
			Function:  true,
			Recursive: true,
		},
		Object: objectType,
	}) == nil {
		t.Fatal("function-scoped object random decode returned nil")
	}
	if randomProgrammer_decode_native(struct {
		Context nativecontext.ITypiaContext
		Functor *nativehelpers.FunctionProgrammer
		Explore randomProgrammer_IExplore
		Name    string
	}{Context: context, Functor: functor, Name: "Uint8Array"}) == nil ||
		randomProgrammer_decode_native(struct {
			Context nativecontext.ITypiaContext
			Functor *nativehelpers.FunctionProgrammer
			Explore randomProgrammer_IExplore
			Name    string
		}{Context: context, Functor: functor, Name: "ArrayBuffer"}) == nil {
		t.Fatal("typed array or ArrayBuffer native random decode returned nil")
	}
	if randomProgrammer_type_reference(context, nil, nil) == nil {
		t.Fatal("random inferred type reference returned nil")
	}
	if randomProgrammer_prefix_object(1) == "" ||
		randomProgrammer_prefix_array(1) == "" ||
		randomProgrammer_prefix_tuple(1) == "" {
		t.Fatal("random prefix helper returned an empty name")
	}
	errors := randomProgrammer_errors([]nativefactories.MetadataFactory_IError{
		{
			Name: "Failure",
			Explore: nativefactories.MetadataFactory_IExplore{
				Object: schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{Name: "Object"}),
				Output: true,
			},
			Messages: []string{"message"},
		},
	})
	if len(errors) != 1 || errors[0].Name != "Failure" || len(errors[0].Messages) != 1 {
		t.Fatal("random error adapter failed")
	}
	if len(RandomProgrammer.Validate(struct {
		Metadata *schemametadata.MetadataSchema
		Explore  nativefactories.MetadataFactory_IExplore
		Top      *schemametadata.MetadataSchema
	}{
		Metadata: &schemametadata.MetadataSchema{
			Natives: []*schemametadata.MetadataNative{
				schemametadata.MetadataNative_create(schemametadata.MetadataNative{Name: "WeakSet"}),
			},
		},
	})) == 0 ||
		len(RandomProgrammer.Validate(struct {
			Metadata *schemametadata.MetadataSchema
			Explore  nativefactories.MetadataFactory_IExplore
			Top      *schemametadata.MetadataSchema
		}{
			Metadata: &schemametadata.MetadataSchema{
				Natives: []*schemametadata.MetadataNative{
					schemametadata.MetadataNative_create(schemametadata.MetadataNative{Name: "WeakMap"}),
				},
			},
		})) == 0 {
		t.Fatal("random validator should reject weak collections")
	}
}

type randomProgrammerImporter struct{}

func (randomProgrammerImporter) Internal(name string) *shimast.Node {
	return randomProgrammer_factory.NewIdentifier(name)
}

func (randomProgrammerImporter) Type(ImportProgrammer_TypeProps) *shimast.Node {
	return randomProgrammer_factory.NewIdentifier("Imported")
}
