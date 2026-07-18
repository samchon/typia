//go:build typia_native_internal
// +build typia_native_internal

package protobuf

import (
	"testing"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	shimprinter "github.com/microsoft/typescript-go/shim/printer"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
	nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
	schemaprotobuf "github.com/samchon/typia/packages/typia/native/core/schemas/protobuf"
)

// TestProtobufProgrammerHelperCoverage exercises protobuf helper branches.
//
// Protobuf encode and decode helpers normalize schema variants and feature
// explore values before larger reader/writer generation starts. They are pure
// helpers, so direct unit calls are enough to keep these branches visible.
//
// 1. Read bigint names from property and schema bigint variants.
// 2. Verify unsupported bigint schema variants return an empty name.
// 3. Convert feature explore values from value, pointer, and unknown inputs.
// 4. Convert feature explore values into checker explore values.
// 5. Visit encode/decode schema switches for every protobuf property variant.
// 6. Build object, map, and discriminator-union protobuf encode blocks.
// 7. Exercise encode union, wrapper, container, and fallback helper branches.
// 8. Exercise protobuf decode property, array, map, default, and importer helpers.
func TestProtobufProgrammerHelperCoverage(t *testing.T) {
	emit := shimprinter.NewEmitContext()
	if protobufDecodeProgrammer_bigintName(&schemaprotobuf.IProtobufPropertyType_IBigint{
		IProtobufSchema_IBigint: schemaprotobuf.IProtobufSchema_IBigint{Name: "int64"},
	}) != "int64" {
		t.Fatal("protobuf bigint property name mismatch")
	}
	if protobufDecodeProgrammer_bigintName(schemaprotobuf.IProtobufSchema_IBigint{Name: "uint64"}) != "uint64" ||
		protobufDecodeProgrammer_bigintName(schemaprotobuf.IProtobufSchema_IString{}) != "" {
		t.Fatal("protobuf bigint schema name mismatch")
	}
	explore := nativeinternal.FeatureProgrammer_IExplore{Tracable: true, Source: "source", From: "from", Postfix: ".x"}
	if protobufEncodeProgrammer_feature_explore(explore).Postfix != ".x" ||
		protobufEncodeProgrammer_feature_explore(&explore).Source != "source" ||
		protobufEncodeProgrammer_feature_explore("unknown").Postfix != "" {
		t.Fatal("protobuf feature explore conversion mismatch")
	}
	if protobufEncodeProgrammer_checker_explore(&explore).From != "from" {
		t.Fatal("protobuf checker explore conversion mismatch")
	}

	factory := shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
	context := nativecontext.ITypiaContext{}
	functor := nativehelpers.NewFunctionProgrammer("protobuf.encode")
	input := factory.NewIdentifier("input")
	first := 1
	second := 2
	alpha := protobufProgrammerObject("Alpha", "kind", "alpha")
	beta := protobufProgrammerObject("Beta", "kind", "beta")
	rest := schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{Name: "Rest"})
	objectSchema := &schemaprotobuf.IProtobufPropertyType_IObject{
		IProtobufSchema_IObject: schemaprotobuf.IProtobufSchema_IObject{Type: "object", Object: alpha},
		Index:                   &first,
	}
	mapSchema := &schemaprotobuf.IProtobufPropertyType_IMap{
		IProtobufSchema_IMap: schemaprotobuf.IProtobufSchema_IMap{
			Type:  "map",
			Map:   alpha,
			Key:   schemaprotobuf.IProtobufSchema_IString{Type: "string"},
			Value: schemaprotobuf.IProtobufSchema_INumber{Type: "number", Name: "int32"},
		},
		Index: &second,
	}
	concreteMap := schemametadata.MetadataMap_create(schemametadata.MetadataMap{
		Key:   protobufProgrammerAtomic("string"),
		Value: protobufProgrammerAtomic("number"),
	})
	concreteMapSchema := &schemaprotobuf.IProtobufPropertyType_IMap{
		IProtobufSchema_IMap: schemaprotobuf.IProtobufSchema_IMap{
			Type:  "map",
			Map:   concreteMap,
			Key:   schemaprotobuf.IProtobufSchema_IString{Type: "string"},
			Value: schemaprotobuf.IProtobufSchema_INumber{Type: "number", Name: "int32"},
		},
		Index: &second,
	}
	arrayType := schemametadata.MetadataArrayType_create(schemametadata.MetadataArrayType{
		Name:      "string[]",
		Value:     protobufProgrammerLiteral("value"),
		Nullables: []bool{},
	})
	propertyVariants := []schemaprotobuf.IProtobufPropertyType{
		&schemaprotobuf.IProtobufPropertyType_IByte{IProtobufSchema_IByte: schemaprotobuf.IProtobufSchema_IByte{Type: "bytes"}, Index: &first},
		&schemaprotobuf.IProtobufPropertyType_IBoolean{IProtobufSchema_IBoolean: schemaprotobuf.IProtobufSchema_IBoolean{Type: "bool"}, Index: &first},
		&schemaprotobuf.IProtobufPropertyType_IBigint{IProtobufSchema_IBigint: schemaprotobuf.IProtobufSchema_IBigint{Type: "bigint", Name: "int64"}, Index: &first},
		&schemaprotobuf.IProtobufPropertyType_INumber{IProtobufSchema_INumber: schemaprotobuf.IProtobufSchema_INumber{Type: "number", Name: "double"}, Index: &first},
		&schemaprotobuf.IProtobufPropertyType_IString{IProtobufSchema_IString: schemaprotobuf.IProtobufSchema_IString{Type: "string"}, Index: &first},
		&schemaprotobuf.IProtobufPropertyType_IArray{IProtobufSchema_IArray: schemaprotobuf.IProtobufSchema_IArray{Type: "array", Array: arrayType, Value: schemaprotobuf.IProtobufSchema_IString{Type: "string"}}, Index: &first},
		objectSchema,
		mapSchema,
		concreteMapSchema,
	}
	for _, variant := range propertyVariants {
		if protobufEncodeProgrammer_propertyIndex(variant) == nil ||
			protobufDecodeProgrammer_propertyIndex(variant) == nil ||
			protobufEncodeProgrammer_schemaType(variant) == "" ||
			protobufDecodeProgrammer_schemaType(variant) == "" {
			t.Fatalf("protobuf property switch missed %T", variant)
		}
		if protobufDecodeProgrammer_decode_property_type(protobufDecodeProgrammer_decodePropertyTypeProps{
			Context:  context,
			Accessor: input,
			Schema:   variant,
			Required: false,
		}) == nil {
			t.Fatalf("protobuf decode property switch missed %T", variant)
		}
	}
	schemaVariants := []schemaprotobuf.IProtobufSchema{
		schemaprotobuf.IProtobufSchema_IByte{Type: "bytes"},
		schemaprotobuf.IProtobufSchema_IBoolean{Type: "bool"},
		schemaprotobuf.IProtobufSchema_IBigint{Type: "bigint", Name: "int64"},
		schemaprotobuf.IProtobufSchema_INumber{Type: "number", Name: "float"},
		schemaprotobuf.IProtobufSchema_IString{Type: "string"},
		schemaprotobuf.IProtobufSchema_IArray{Type: "array", Array: arrayType, Value: schemaprotobuf.IProtobufSchema_IString{Type: "string"}},
		schemaprotobuf.IProtobufSchema_IObject{Type: "object", Object: alpha},
		schemaprotobuf.IProtobufSchema_IMap{Type: "map", Map: alpha, Key: schemaprotobuf.IProtobufSchema_IString{Type: "string"}, Value: schemaprotobuf.IProtobufSchema_IString{Type: "string"}},
	}
	for _, variant := range schemaVariants {
		if protobufEncodeProgrammer_schemaType(variant) == "" ||
			protobufDecodeProgrammer_schemaType(variant) == "" {
			t.Fatalf("protobuf schema switch missed %T", variant)
		}
	}
	if protobufDecodeProgrammer_arrayValueName(propertyVariants[5]) != "\"value\"" ||
		protobufDecodeProgrammer_arrayValueName(schemaprotobuf.IProtobufSchema_IArray{Type: "array", Value: schemaprotobuf.IProtobufSchema_IString{Type: "string"}}) != "string" ||
		protobufDecodeProgrammer_arrayValueName(schemaprotobuf.IProtobufSchema_IString{Type: "string"}) != "unknown" {
		t.Fatal("protobuf array value name branch mismatch")
	}
	if protobufDecodeProgrammer_propertyIndex(nil) != nil ||
		protobufDecodeProgrammer_schemaType(nil) != "" ||
		protobufDecodeProgrammer_numberName(schemaprotobuf.IProtobufSchema_IString{Type: "string"}) != "" ||
		protobufDecodeProgrammer_arrayValue(nil) != nil ||
		protobufDecodeProgrammer_objectSchema(&schemaprotobuf.IProtobufPropertyType_IObject{IProtobufSchema_IObject: schemaprotobuf.IProtobufSchema_IObject{Type: "object", Object: beta}, Index: &first}) != beta {
		t.Fatal("protobuf decode fallback switch helpers mismatch")
	}
	if protobufEncodeProgrammer_propertyIndex(objectSchema) == nil ||
		protobufEncodeProgrammer_schemaType(mapSchema) != "map" ||
		protobufEncodeProgrammer_objectSchema(mapSchema) != alpha ||
		len(protobufEncodeProgrammer_objectSchemas([]schemaprotobuf.IProtobufPropertyType{objectSchema, mapSchema})) != 2 {
		t.Fatal("protobuf object schema helpers missed object/map branches")
	}
	for _, schemas := range [][]schemaprotobuf.IProtobufPropertyType{
		{objectSchema},
		{mapSchema},
		{
			objectSchema,
			&schemaprotobuf.IProtobufPropertyType_IObject{
				IProtobufSchema_IObject: schemaprotobuf.IProtobufSchema_IObject{Type: "object", Object: beta},
				Index:                   &second,
			},
			&schemaprotobuf.IProtobufPropertyType_IObject{
				IProtobufSchema_IObject: schemaprotobuf.IProtobufSchema_IObject{Type: "object", Object: rest},
				Index:                   &second,
			},
		},
	} {
		if protobufEncodeProgrammer_explore_objects(protobufEncodeProgrammer_exploreObjectsProps{
			Context: context,
			Functor: functor,
			Input:   input,
			Schemas: schemas,
			Explore: nativeinternal.FeatureProgrammer_IExplore{Tracable: true},
		}) == nil {
			t.Fatal("protobuf object exploration returned nil")
		}
	}
	unionBlock := protobufEncodeProgrammer_decode_property(protobufEncodeProgrammer_decodePropertyProps{
		Context:  context,
		Functor:  functor,
		Metadata: schemametadata.MetadataSchema_initialize(),
		Protobuf: &schemaprotobuf.IProtobufProperty{Union: propertyVariants},
		Input:    input,
		Explore:  nativeinternal.FeatureProgrammer_IExplore{Tracable: true},
	})
	if unionBlock == nil {
		t.Fatal("protobuf union property should decode")
	}
	for _, meta := range []*schemametadata.MetadataSchema{
		schemametadata.MetadataSchema_create(schemametadata.MetadataSchema{Optional: true, Nullable: true}),
		schemametadata.MetadataSchema_create(schemametadata.MetadataSchema{Optional: true}),
		schemametadata.MetadataSchema_create(schemametadata.MetadataSchema{Required: true, Nullable: true}),
	} {
		if protobufEncodeProgrammer_decode_property(protobufEncodeProgrammer_decodePropertyProps{
			Context:  context,
			Functor:  functor,
			Metadata: meta,
			Protobuf: &schemaprotobuf.IProtobufProperty{Union: []schemaprotobuf.IProtobufPropertyType{
				&schemaprotobuf.IProtobufPropertyType_IString{IProtobufSchema_IString: schemaprotobuf.IProtobufSchema_IString{Type: "string"}, Index: &first},
			}},
			Input: input,
		}) == nil {
			t.Fatal("protobuf optional/nullable wrapper should decode")
		}
	}
	if protobufEncodeProgrammer_decode_property(protobufEncodeProgrammer_decodePropertyProps{
		Context:  context,
		Functor:  functor,
		Metadata: schemametadata.MetadataSchema_initialize(),
		Protobuf: &schemaprotobuf.IProtobufProperty{},
		Input:    input,
	}) == nil {
		t.Fatal("protobuf empty union should produce an empty block")
	}
	if len(protobufDecodeProgrammer_decode_property(protobufDecodeProgrammer_decodePropertyProps{
		Context:  context,
		Metadata: schemametadata.MetadataSchema_initialize(),
		Protobuf: nil,
		Accessor: input,
	})) != 0 {
		t.Fatal("nil protobuf property should produce no decode statements")
	}
	for _, meta := range []*schemametadata.MetadataSchema{
		func() *schemametadata.MetadataSchema {
			next := schemametadata.MetadataSchema_initialize()
			next.Arrays = append(next.Arrays, schemametadata.MetadataArray_create(schemametadata.MetadataArray{Type: arrayType}))
			return next
		}(),
		func() *schemametadata.MetadataSchema {
			next := schemametadata.MetadataSchema_initialize()
			next.Maps = append(next.Maps, concreteMap)
			return next
		}(),
		func() *schemametadata.MetadataSchema {
			next := schemametadata.MetadataSchema_initialize()
			next.Natives = append(next.Natives, schemametadata.MetadataNative_create(schemametadata.MetadataNative{Name: "Uint8Array"}))
			return next
		}(),
		protobufProgrammerAtomic("string"),
		func() *schemametadata.MetadataSchema {
			next := schemametadata.MetadataSchema_initialize()
			next.Constants = append(next.Constants, schemametadata.MetadataConstant_create(schemametadata.MetadataConstant{
				Type: "string",
				Values: []*schemametadata.MetadataConstantValue{
					schemametadata.MetadataConstantValue_create(schemametadata.MetadataConstantValue{Value: ""}),
				},
			}))
			return next
		}(),
		func() *schemametadata.MetadataSchema {
			next := schemametadata.MetadataSchema_initialize()
			next.Templates = append(next.Templates, schemametadata.MetadataTemplate_create(schemametadata.MetadataTemplate{
				Row: []*schemametadata.MetadataSchema{protobufProgrammerAtomic("string")},
			}))
			return next
		}(),
		func() *schemametadata.MetadataSchema {
			next := schemametadata.MetadataSchema_initialize()
			next.Objects = append(next.Objects, schemametadata.MetadataObject_create(schemametadata.MetadataObject{
				Type: schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{Name: "Dynamic"}),
			}))
			return next
		}(),
	} {
		if protobufDecodeProgrammer_write_property_default_value(meta, emit) == nil {
			t.Fatal("protobuf decode default value returned nil")
		}
	}
	// #2179: an absent required number/boolean/bigint seeds its proto3 typed
	// default (0/false/0n), just as an absent required string seeds "". Each
	// seed is wrapped in an `as any`, so unwrap it and pin the literal so a
	// regression to `undefined` cannot pass.
	for _, expected := range []struct {
		typ  string
		kind shimast.Kind
		text string
	}{
		{typ: "number", kind: shimast.KindNumericLiteral, text: "0"},
		{typ: "boolean", kind: shimast.KindFalseKeyword, text: ""},
		{typ: "bigint", kind: shimast.KindBigIntLiteral, text: "0n"},
		{typ: "string", kind: shimast.KindStringLiteral, text: ""},
	} {
		seed := protobufDecodeProgrammer_write_property_default_value(protobufProgrammerAtomic(expected.typ), emit)
		if seed == nil || seed.Kind != shimast.KindAsExpression {
			t.Fatalf("protobuf %s default should be an as-expression", expected.typ)
		}
		inner := seed.Expression()
		if inner == nil || inner.Kind != expected.kind {
			t.Fatalf("protobuf %s default seeded the wrong node kind", expected.typ)
		}
		if expected.text != "" && inner.Text() != expected.text {
			t.Fatalf("protobuf %s default seeded %q instead of %q", expected.typ, inner.Text(), expected.text)
		}
	}
	if protobufDecodeProgrammer_write_object_function_body(protobufDecodeProgrammer_objectBodyProps{
		Context: nativecontext.ITypiaContext{},
		Condition: protobufDecodeProgrammer_factory.NewKeywordExpression(
			shimast.KindTrueKeyword,
		),
		Tag:    "tag",
		Output: "output",
		Object: protobufProgrammerObject("DecodeBody", "kind", "body"),
	}) == nil {
		t.Fatal("protobuf decode object body returned nil")
	}
	if protobufDecodeProgrammer_decode_number(schemaprotobuf.IProtobufSchema_INumber{Type: "number", Name: "int64"}, emit) == nil ||
		protobufDecodeProgrammer_decode_number(&schemaprotobuf.IProtobufPropertyType_INumber{IProtobufSchema_INumber: schemaprotobuf.IProtobufSchema_INumber{Type: "number", Name: "uint64"}, Index: &first}, emit) == nil {
		t.Fatal("protobuf decode number bigint-compatible branch returned nil")
	}
	for _, schema := range []schemaprotobuf.IProtobufSchema{
		schemaprotobuf.IProtobufSchema_IByte{Type: "bytes"},
		schemaprotobuf.IProtobufSchema_IBoolean{Type: "bool"},
		schemaprotobuf.IProtobufSchema_IBigint{Type: "bigint", Name: "int64"},
		schemaprotobuf.IProtobufSchema_INumber{Type: "number", Name: "double"},
		schemaprotobuf.IProtobufSchema_IString{Type: "string"},
		schemaprotobuf.IProtobufSchema_IObject{Type: "object", Object: beta},
	} {
		if protobufDecodeProgrammer_decode_array_value(schema, emit) == nil {
			t.Fatalf("protobuf decode array value returned nil for %T", schema)
		}
	}
	if protobufDecodeProgrammer_decode_array(protobufDecodeProgrammer_decodeArrayProps{
		Accessor: input,
		Schema: schemaprotobuf.IProtobufSchema_IArray{
			Type:  "array",
			Value: schemaprotobuf.IProtobufSchema_IBoolean{Type: "bool"},
		},
		Required: false,
	}, emit) == nil || protobufDecodeProgrammer_decode_array(protobufDecodeProgrammer_decodeArrayProps{
		Accessor: input,
		Schema: schemaprotobuf.IProtobufSchema_IArray{
			Type:  "array",
			Value: schemaprotobuf.IProtobufSchema_IString{Type: "string"},
		},
		Required: true,
	}, emit) == nil {
		t.Fatal("protobuf decode array branches returned nil")
	}
	if protobufDecodeProgrammer_decode_map(protobufDecodeProgrammer_decodeMapProps{
		Context:     context,
		Accessor:    input,
		Key:         protobufProgrammerAtomic("string"),
		Value:       protobufProgrammerAtomic("number"),
		Schema:      schemaprotobuf.IProtobufSchema_IMap{Type: "map"},
		Initializer: factory.NewNewExpression(factory.NewIdentifier("Map"), nil, nil),
		Required:    true,
		Setter:      func() *shimast.Node { return input },
	}) == nil || protobufDecodeProgrammer_decode_map(protobufDecodeProgrammer_decodeMapProps{
		Context:     context,
		Accessor:    input,
		Key:         protobufProgrammerAtomic("string"),
		Value:       protobufProgrammerAtomic("number"),
		Schema:      schemaprotobuf.IProtobufSchema_IMap{Type: "map"},
		Initializer: factory.NewNewExpression(factory.NewIdentifier("Map"), nil, nil),
		Required:    false,
		Setter:      func() *shimast.Node { return input },
	}) == nil {
		t.Fatal("protobuf decode map branches returned nil")
	}
	func() {
		defer func() {
			if recover() == nil {
				t.Fatal("protobuf decode property type default should panic")
			}
		}()
		_ = protobufDecodeProgrammer_decode_property_type(protobufDecodeProgrammer_decodePropertyTypeProps{
			Context:  context,
			Accessor: input,
			Schema:   nil,
			Required: true,
		})
	}()
	func() {
		defer func() {
			if recover() == nil {
				t.Fatal("protobuf decode array value default should panic")
			}
		}()
		_ = protobufDecodeProgrammer_decode_array_value(nil, emit)
	}()
	for _, schema := range []schemaprotobuf.IProtobufSchema{
		&schemaprotobuf.IProtobufPropertyType_IBoolean{IProtobufSchema_IBoolean: schemaprotobuf.IProtobufSchema_IBoolean{Type: "bool"}, Index: &first},
		schemaprotobuf.IProtobufSchema_IBoolean{Type: "bool"},
		&schemaprotobuf.IProtobufPropertyType_IBigint{IProtobufSchema_IBigint: schemaprotobuf.IProtobufSchema_IBigint{Type: "bigint", Name: "int64"}, Index: &first},
		schemaprotobuf.IProtobufSchema_IBigint{Type: "bigint", Name: "uint64"},
		&schemaprotobuf.IProtobufPropertyType_INumber{IProtobufSchema_INumber: schemaprotobuf.IProtobufSchema_INumber{Type: "number", Name: "float"}, Index: &first},
		schemaprotobuf.IProtobufSchema_INumber{Type: "number", Name: "double"},
		schemaprotobuf.IProtobufSchema_IByte{Type: "bytes"},
		schemaprotobuf.IProtobufSchema_IObject{Type: "object", Object: beta},
	} {
		if protobufEncodeProgrammer_decode_container_value(struct {
			Context nativecontext.ITypiaContext
			Functor *nativehelpers.FunctionProgrammer
			Schema  schemaprotobuf.IProtobufSchema
			Index   int
			Kind    string
			Input   *shimast.Node
		}{Context: context, Functor: functor, Schema: schema, Index: 1, Kind: "map", Input: input}) == nil {
			t.Fatalf("protobuf container value should decode %T", schema)
		}
	}
	if protobufEncodeProgrammer_decode_bigint(struct {
		Candidates []string
		Type       string
		Input      *shimast.Node
		Index      *int
	}{Candidates: []string{"int64"}, Type: "int64", Input: input, Index: &first}, emit).Is() == nil {
		t.Fatal("single bigint candidate should use typeof predicate")
	}
	if protobufEncodeProgrammer_decode_number(struct {
		Candidates []string
		Type       string
		Input      *shimast.Node
		Index      *int
	}{Candidates: []string{"int32", "uint32"}, Type: "uint32", Input: input, Index: &first}, emit).Is() == nil {
		t.Fatal("multiple number candidates should use range predicate")
	}
	if protobufEncodeProgrammer_containerIndex("array", 1) != nil ||
		protobufEncodeProgrammer_indexValue(nil) != 0 ||
		func() bool {
			_, ok := protobufEncodeProgrammer_numberSchema(schemaprotobuf.IProtobufSchema_INumber{Type: "number", Name: "int32"})
			return ok
		}() == false ||
		func() bool {
			_, ok := protobufEncodeProgrammer_numberSchema(schemaprotobuf.IProtobufSchema_IString{Type: "string"})
			return ok
		}() {
		t.Fatal("protobuf fallback helper branches mismatch")
	}
	if protobufEncodeProgrammer_objectSchema(schemaprotobuf.IProtobufSchema_IMap{Type: "map", Map: beta}) != beta ||
		protobufEncodeProgrammer_objectSchema(schemaprotobuf.IProtobufSchema_IString{Type: "string"}) != nil {
		t.Fatal("protobuf object schema fallback mismatch")
	}
	nodeName := factory.NewIdentifier("DirectType")
	if protobufEncodeProgrammer_import_type(context, nativecontext.ImportProgrammer_TypeProps{Name: "StringType"}) == nil ||
		protobufEncodeProgrammer_import_type(context, nativecontext.ImportProgrammer_TypeProps{Name: nodeName}) != nodeName ||
		protobufEncodeProgrammer_internal(context, "internal") == nil ||
		protobufEncodeProgrammer_method_text(nil) != "" {
		t.Fatal("protobuf import/internal/method fallback helpers mismatch")
	}
	importContext := nativecontext.ITypiaContext{Importer: nativecontext.NewImportProgrammer()}
	if protobufDecodeProgrammer_import_type(importContext, nativecontext.ImportProgrammer_TypeProps{Name: "Imported"}) == nil ||
		protobufDecodeProgrammer_import_type(context, nativecontext.ImportProgrammer_TypeProps{Name: "StringType"}) == nil ||
		protobufDecodeProgrammer_import_type(context, nativecontext.ImportProgrammer_TypeProps{Name: nodeName}) != nodeName ||
		protobufDecodeProgrammer_internal(importContext, "internal") == nil ||
		protobufDecodeProgrammer_internal(context, "internal") == nil ||
		protobufDecodeProgrammer_method_text(factory.NewIdentifier("method")) == "" {
		t.Fatal("protobuf decode import/internal/method helpers mismatch")
	}
}

func protobufProgrammerObject(name string, key string, value string) *schemametadata.MetadataObjectType {
	return schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{
		Name: name,
		Properties: []*schemametadata.MetadataProperty{
			schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{
				Key:   protobufProgrammerLiteral(key),
				Value: protobufProgrammerLiteral(value),
			}),
		},
	})
}

func protobufProgrammerLiteral(value string) *schemametadata.MetadataSchema {
	meta := schemametadata.MetadataSchema_initialize()
	meta.Constants = append(meta.Constants, schemametadata.MetadataConstant_create(schemametadata.MetadataConstant{
		Type: "string",
		Values: []*schemametadata.MetadataConstantValue{
			schemametadata.MetadataConstantValue_create(schemametadata.MetadataConstantValue{Value: value}),
		},
	}))
	return meta
}

func protobufProgrammerAtomic(typ string) *schemametadata.MetadataSchema {
	meta := schemametadata.MetadataSchema_initialize()
	meta.Atomics = append(meta.Atomics, schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: typ}))
	return meta
}
