package emitter

import (
	"errors"
	"fmt"
	"sort"
	"strings"
	"unicode"

	"github.com/samchon/typia/packages/core/native/metadata"
)

func EmitProtobufMessageExpression(schema *metadata.Schema) (string, error) {
	if schema == nil {
		return "", errors.New("emitter: nil schema")
	}
	obj := protobufRootObject(schema)
	if obj == nil {
		return "", errors.New("protobuf.message: target type must be a sole static object")
	}
	body, err := protobufMessage(obj)
	if err != nil {
		return "", err
	}
	return jsonQuote(body), nil
}

func EmitProtobufEncodeArrowFunction(schema *metadata.Schema) (string, error) {
	message, err := EmitProtobufMessageExpression(schema)
	if err != nil {
		return "", err
	}
	root := protobufRootObject(schema)
	if root == nil {
		return "", errors.New("protobuf.encode: target type must be a sole static object")
	}
	name := protobufTypeName(protobufObjectName(root))
	state := newProtobufTransformState()
	encodeRoot, err := state.emitEncodeHelper(root)
	if err != nil {
		return "", err
	}
	helpers := state.render()
	return fmt.Sprintf(`(() => { const __message = %s; const __pjs = require("protobufjs"); const __name = %s; const __type = __pjs.parse(__message, { keepCase: true }).root.lookupType(__name); %s return (input) => __type.encode(%s(input)).finish(); })()`, message, jsonQuote(name), helpers, encodeRoot), nil
}

func EmitProtobufDecodeArrowFunction(schema *metadata.Schema) (string, error) {
	message, err := EmitProtobufMessageExpression(schema)
	if err != nil {
		return "", err
	}
	root := protobufRootObject(schema)
	if root == nil {
		return "", errors.New("protobuf.decode: target type must be a sole static object")
	}
	name := protobufTypeName(protobufObjectName(root))
	state := newProtobufTransformState()
	decodeRoot, err := state.emitDecodeHelper(root)
	if err != nil {
		return "", err
	}
	helpers := state.render()
	return fmt.Sprintf(`(() => { const __message = %s; const __pjs = require("protobufjs"); const __name = %s; const __type = __pjs.parse(__message, { keepCase: true }).root.lookupType(__name); %s return (input) => %s(__type.toObject(__type.decode(input), { longs: String, enums: String, bytes: Uint8Array, defaults: false, arrays: true, objects: true })); })()`, message, jsonQuote(name), helpers, decodeRoot), nil
}

type protobufTransformState struct {
	helpers        map[string]string
	order          []string
	encodeHelpers  map[*metadata.ObjectType]string
	decodeHelpers  map[*metadata.ObjectType]string
	visitingEncode map[*metadata.ObjectType]bool
	visitingDecode map[*metadata.ObjectType]bool
}

func newProtobufTransformState() *protobufTransformState {
	return &protobufTransformState{
		helpers:        make(map[string]string),
		encodeHelpers:  make(map[*metadata.ObjectType]string),
		decodeHelpers:  make(map[*metadata.ObjectType]string),
		visitingEncode: make(map[*metadata.ObjectType]bool),
		visitingDecode: make(map[*metadata.ObjectType]bool),
	}
}

func (s *protobufTransformState) render() string {
	if len(s.order) == 0 {
		return ""
	}
	var b strings.Builder
	for _, name := range s.order {
		b.WriteString("const ")
		b.WriteString(name)
		b.WriteString(" = ")
		b.WriteString(s.helpers[name])
		b.WriteString("; ")
	}
	return b.String()
}

func (s *protobufTransformState) reserve(prefix string) string {
	name := fmt.Sprintf("__pb_%s_%d", prefix, len(s.order))
	s.order = append(s.order, name)
	return name
}

func (s *protobufTransformState) emitEncodeHelper(obj *metadata.ObjectType) (string, error) {
	if name, ok := s.encodeHelpers[obj]; ok {
		return name, nil
	}
	name := s.reserve("enc")
	s.encodeHelpers[obj] = name
	if s.visitingEncode[obj] {
		return name, nil
	}
	s.visitingEncode[obj] = true
	defer delete(s.visitingEncode, obj)

	var b strings.Builder
	b.WriteString(`(v) => { const out = {}; `)
	specs, err := protobufPropertySpecs(obj)
	if err != nil {
		return "", err
	}
	for _, spec := range specs {
		accessor := accessProperty("v", spec.Key)
		if len(spec.Variants) == 1 {
			variant := spec.Variants[0]
			valueExpr, err := s.encodeExpr(accessor, variant.Schema)
			if err != nil {
				return "", err
			}
			b.WriteString(`if (undefined !== `)
			b.WriteString(accessor)
			b.WriteString(` && null !== `)
			b.WriteString(accessor)
			b.WriteString(`) out[`)
			b.WriteString(jsonQuote(variant.FieldName))
			b.WriteString(`] = `)
			b.WriteString(valueExpr)
			b.WriteString(`; `)
			continue
		}
		ordered := protobufOrderVariantsForEncode(spec.Variants)
		b.WriteString(`if (undefined !== `)
		b.WriteString(accessor)
		b.WriteString(` && null !== `)
		b.WriteString(accessor)
		b.WriteString(`) { `)
		for i, variant := range ordered {
			predicate, err := EmitIs(accessor, variant.Schema)
			if err != nil {
				return "", err
			}
			valueExpr, err := s.encodeExpr(accessor, variant.Schema)
			if err != nil {
				return "", err
			}
			if i == 0 {
				b.WriteString(`if (`)
			} else {
				b.WriteString(`else if (`)
			}
			b.WriteString(predicate)
			b.WriteString(`) out[`)
			b.WriteString(jsonQuote(variant.FieldName))
			b.WriteString(`] = `)
			b.WriteString(valueExpr)
			b.WriteString(`; `)
		}
		b.WriteString(`} `)
	}
	b.WriteString(`return out; }`)
	s.helpers[name] = b.String()
	return name, nil
}

func (s *protobufTransformState) emitDecodeHelper(obj *metadata.ObjectType) (string, error) {
	if name, ok := s.decodeHelpers[obj]; ok {
		return name, nil
	}
	name := s.reserve("dec")
	s.decodeHelpers[obj] = name
	if s.visitingDecode[obj] {
		return name, nil
	}
	s.visitingDecode[obj] = true
	defer delete(s.visitingDecode, obj)

	var b strings.Builder
	b.WriteString(`(v) => { const out = {}; `)
	specs, err := protobufPropertySpecs(obj)
	if err != nil {
		return "", err
	}
	for _, spec := range specs {
		if len(spec.Variants) == 1 {
			variant := spec.Variants[0]
			accessor := accessProperty("v", variant.FieldName)
			valueExpr, err := s.decodeExpr(accessor, variant.Schema)
			if err != nil {
				return "", err
			}
			b.WriteString(`if (undefined !== `)
			b.WriteString(accessor)
			b.WriteString(` && null !== `)
			b.WriteString(accessor)
			b.WriteString(`) out[`)
			b.WriteString(jsonQuote(spec.Key))
			b.WriteString(`] = `)
			b.WriteString(valueExpr)
			b.WriteString(`; `)
			if spec.Nullable {
				b.WriteString(`else out[`)
				b.WriteString(jsonQuote(spec.Key))
				b.WriteString(`] = null; `)
			}
			continue
		}
		for i, variant := range spec.Variants {
			accessor := accessProperty("v", variant.FieldName)
			valueExpr, err := s.decodeExpr(accessor, variant.Schema)
			if err != nil {
				return "", err
			}
			if i == 0 {
				b.WriteString(`if (`)
			} else {
				b.WriteString(`else if (`)
			}
			b.WriteString(`undefined !== `)
			b.WriteString(accessor)
			b.WriteString(` && null !== `)
			b.WriteString(accessor)
			b.WriteString(`) out[`)
			b.WriteString(jsonQuote(spec.Key))
			b.WriteString(`] = `)
			b.WriteString(valueExpr)
			b.WriteString(`; `)
		}
		if spec.Nullable {
			b.WriteString(`else out[`)
			b.WriteString(jsonQuote(spec.Key))
			b.WriteString(`] = null; `)
		}
	}
	b.WriteString(`return out; }`)
	s.helpers[name] = b.String()
	return name, nil
}

func (s *protobufTransformState) encodeExpr(expr string, schema *metadata.Schema) (string, error) {
	if schema == nil {
		return expr, nil
	}
	if len(schema.Aliases) == 1 && schema.Aliases[0] != nil && schema.Aliases[0].Type != nil {
		return s.encodeExpr(expr, schema.Aliases[0].Type.Value)
	}
	if len(schema.Maps) != 0 && schema.Maps[0] != nil {
		ref := schema.Maps[0]
		keyExpr, err := s.encodeExpr("__key", ref.Key)
		if err != nil {
			return "", err
		}
		valueExpr, err := s.encodeExpr("__value", ref.Value)
		if err != nil {
			return "", err
		}
		return `Object.fromEntries(Array.from(` + expr + `.entries()).map(([__key, __value]) => [` + keyExpr + `, ` + valueExpr + `]))`, nil
	}
	if len(schema.Arrays) != 0 && schema.Arrays[0] != nil && schema.Arrays[0].Type != nil {
		valueExpr, err := s.encodeExpr("__elem", schema.Arrays[0].Type.Value)
		if err != nil {
			return "", err
		}
		return `(` + expr + `).map((__elem) => ` + valueExpr + `)`, nil
	}
	if len(schema.Objects) != 0 && schema.Objects[0] != nil && schema.Objects[0].Type != nil {
		if valueSchema := protobufDynamicObjectValueSchema(schema.Objects[0].Type); valueSchema != nil {
			valueExpr, err := s.encodeExpr("__value", valueSchema)
			if err != nil {
				return "", err
			}
			return `Object.fromEntries(Object.entries(` + expr + `).map(([__key, __value]) => [__key, ` + valueExpr + `]))`, nil
		}
		name, err := s.emitEncodeHelper(schema.Objects[0].Type)
		if err != nil {
			return "", err
		}
		return name + "(" + expr + ")", nil
	}
	if protobufIsBigintSchema(schema) {
		return `(` + expr + `).toString()`, nil
	}
	return expr, nil
}

func (s *protobufTransformState) decodeExpr(expr string, schema *metadata.Schema) (string, error) {
	if schema == nil {
		return expr, nil
	}
	if len(schema.Aliases) == 1 && schema.Aliases[0] != nil && schema.Aliases[0].Type != nil {
		return s.decodeExpr(expr, schema.Aliases[0].Type.Value)
	}
	if len(schema.Maps) != 0 && schema.Maps[0] != nil {
		ref := schema.Maps[0]
		keyExpr, err := s.decodeExpr("__key", ref.Key)
		if err != nil {
			return "", err
		}
		valueExpr, err := s.decodeExpr("__value", ref.Value)
		if err != nil {
			return "", err
		}
		return `new Map(Object.entries(` + expr + `).map(([__key, __value]) => [` + keyExpr + `, ` + valueExpr + `]))`, nil
	}
	if len(schema.Arrays) != 0 && schema.Arrays[0] != nil && schema.Arrays[0].Type != nil {
		valueExpr, err := s.decodeExpr("__elem", schema.Arrays[0].Type.Value)
		if err != nil {
			return "", err
		}
		return `(` + expr + `).map((__elem) => ` + valueExpr + `)`, nil
	}
	if len(schema.Objects) != 0 && schema.Objects[0] != nil && schema.Objects[0].Type != nil {
		if valueSchema := protobufDynamicObjectValueSchema(schema.Objects[0].Type); valueSchema != nil {
			valueExpr, err := s.decodeExpr("__value", valueSchema)
			if err != nil {
				return "", err
			}
			return `Object.fromEntries(Object.entries(` + expr + `).map(([__key, __value]) => [__key, ` + valueExpr + `]))`, nil
		}
		name, err := s.emitDecodeHelper(schema.Objects[0].Type)
		if err != nil {
			return "", err
		}
		return name + "(" + expr + ")", nil
	}
	if protobufIsLongNumberSchema(schema) {
		return `Number(` + expr + `)`, nil
	}
	if protobufIsBigintSchema(schema) {
		return `BigInt(` + expr + `)`, nil
	}
	return expr, nil
}

func protobufIsBigintSchema(schema *metadata.Schema) bool {
	if schema == nil {
		return false
	}
	for _, atomic := range schema.Atomics {
		if atomic.Type == metadata.AtomicBigint {
			return true
		}
	}
	for _, constant := range schema.Constants {
		if constant.Type == metadata.AtomicBigint {
			return true
		}
	}
	if len(schema.Aliases) == 1 && schema.Aliases[0] != nil && schema.Aliases[0].Type != nil {
		return protobufIsBigintSchema(schema.Aliases[0].Type.Value)
	}
	return false
}

func protobufDynamicObjectValueSchema(obj *metadata.ObjectType) *metadata.Schema {
	if obj == nil {
		return nil
	}
	if obj.AdditionalProperties != nil {
		return obj.AdditionalProperties
	}
	if len(obj.DynamicProperties) == 1 && obj.DynamicProperties[0] != nil {
		return obj.DynamicProperties[0].Value
	}
	if len(obj.Properties) == 1 && obj.Properties[0] != nil && obj.Properties[0].Key != nil && !obj.Properties[0].Key.IsSoleLiteral() {
		return obj.Properties[0].Value
	}
	return nil
}

func protobufIsLongNumberSchema(schema *metadata.Schema) bool {
	if schema == nil {
		return false
	}
	for _, atomic := range schema.Atomics {
		if atomic.Type != metadata.AtomicNumber {
			continue
		}
		switch protobufNumberType(atomic.Tags) {
		case "int64", "uint64":
			return true
		}
	}
	if len(schema.Aliases) == 1 && schema.Aliases[0] != nil && schema.Aliases[0].Type != nil {
		return protobufIsLongNumberSchema(schema.Aliases[0].Type.Value)
	}
	return false
}

func protobufMessage(obj *metadata.ObjectType) (string, error) {
	reachable := collectProtobufObjects(obj)
	roots := map[string]*protobufHierarchy{}
	for _, candidate := range reachable {
		emplaceProtobufHierarchy(roots, candidate)
	}
	rootParts := protobufHierarchyParts(protobufObjectName(obj))
	rootKey := ""
	if len(rootParts) != 0 {
		rootKey = rootParts[0]
	}
	keys := make([]string, 0, len(roots))
	for key := range roots {
		keys = append(keys, key)
	}
	sort.Strings(keys)
	if rootKey != "" {
		for i, key := range keys {
			if key == rootKey {
				copy(keys[1:i+1], keys[0:i])
				keys[0] = key
				break
			}
		}
	}
	blocks := make([]string, 0, len(keys)+1)
	blocks = append(blocks, `syntax = "proto3";`)
	for _, key := range keys {
		body, err := writeProtobufHierarchy(roots[key])
		if err != nil {
			return "", err
		}
		blocks = append(blocks, body)
	}
	return strings.Join(blocks, "\n\n"), nil
}

func protobufRootObject(schema *metadata.Schema) *metadata.ObjectType {
	if schema == nil || !schema.IsRequired() || schema.Nullable {
		return nil
	}
	if len(schema.Objects) == 1 && schema.Size() == 1 && schema.Objects[0] != nil {
		obj := schema.Objects[0].Type
		if obj == nil ||
			len(obj.Properties) == 0 ||
			len(obj.DynamicProperties) != 0 ||
			obj.AdditionalProperties != nil {
			return nil
		}
		return obj
	}
	if len(schema.Aliases) == 1 && schema.Aliases[0] != nil && schema.Aliases[0].Type != nil {
		return protobufRootObject(schema.Aliases[0].Type.Value)
	}
	return nil
}

func protobufFieldType(schema *metadata.Schema) (string, bool, error) {
	if schema == nil {
		return "", false, errors.New("missing schema")
	}
	if len(schema.Aliases) == 1 && schema.Aliases[0] != nil && schema.Aliases[0].Type != nil && schema.Aliases[0].Type.Value != nil {
		if field, repeated, err := protobufFieldType(schema.Aliases[0].Type.Value); err == nil {
			return field, repeated, nil
		}
	}
	if len(schema.Maps) > 0 {
		ref := schema.Maps[0]
		key, _, err := protobufFieldType(ref.Key)
		if err != nil {
			return "", false, err
		}
		value, _, err := protobufFieldType(ref.Value)
		if err != nil {
			return "", false, err
		}
		return fmt.Sprintf("map<%s, %s>", key, value), true, nil
	}
	if len(schema.Arrays) > 0 && schema.Arrays[0] != nil && schema.Arrays[0].Type != nil {
		value, _, err := protobufFieldType(schema.Arrays[0].Type.Value)
		if err != nil {
			return "", false, err
		}
		return "repeated " + value, true, nil
	}
	if len(schema.Objects) > 0 && schema.Objects[0] != nil && schema.Objects[0].Type != nil {
		if schema.Objects[0].Type.AdditionalProperties != nil {
			value, _, err := protobufFieldType(schema.Objects[0].Type.AdditionalProperties)
			if err != nil {
				return "", false, err
			}
			return fmt.Sprintf("map<string, %s>", value), true, nil
		}
		return protobufTypeName(protobufObjectName(schema.Objects[0].Type)), false, nil
	}
	if len(schema.Constants) > 0 {
		switch schema.Constants[0].Type {
		case metadata.AtomicString:
			return "string", false, nil
		case metadata.AtomicBoolean:
			return "bool", false, nil
		case metadata.AtomicNumber:
			return "double", false, nil
		case metadata.AtomicBigint:
			return "int64", false, nil
		}
	}
	if len(schema.Atomics) > 0 {
		atomic := schema.Atomics[0]
		switch atomic.Type {
		case metadata.AtomicString:
			return "string", false, nil
		case metadata.AtomicBoolean:
			return "bool", false, nil
		case metadata.AtomicBigint:
			return "int64", false, nil
		case metadata.AtomicNumber:
			if typ := protobufNumberType(atomic.Tags); typ != "" {
				return typ, false, nil
			}
			return "double", false, nil
		}
	}
	if len(schema.Templates) > 0 {
		return "string", false, nil
	}
	for _, native := range schema.Natives {
		switch native.Name {
		case "Uint8Array":
			return "bytes", false, nil
		}
	}
	return "", false, errors.New("unsupported property type")
}

func protobufSequenceRow(tags []metadata.TypeTag) int {
	for _, tag := range tags {
		if tag.Kind != "sequence" {
			continue
		}
		switch value := tag.Value.(type) {
		case int:
			return value
		case int32:
			return int(value)
		case int64:
			return int(value)
		case float64:
			return int(value)
		}
	}
	return 0
}

func protobufNumberTypeRow(tags []metadata.TypeTag) string {
	for _, tag := range tags {
		if tag.Kind != "type" {
			continue
		}
		if value, ok := tag.Value.(string); ok {
			switch value {
			case "int32", "uint32", "int64", "uint64", "double", "float":
				return value
			}
		}
	}
	return ""
}

func protobufBigintTypeRow(tags []metadata.TypeTag) string {
	for _, tag := range tags {
		if tag.Kind != "type" {
			continue
		}
		if value, ok := tag.Value.(string); ok {
			switch value {
			case "int64", "uint64":
				return value
			}
		}
	}
	return ""
}

type protobufPropertySpec struct {
	Key      string
	Optional bool
	Nullable bool
	Variants []protobufVariantSpec
}

type protobufVariantSpec struct {
	FieldName string
	FieldType string
	Index     int
	Repeated  bool
	Schema    *metadata.Schema
	fixed     bool
}

func protobufPropertySpecs(obj *metadata.ObjectType) ([]protobufPropertySpec, error) {
	specs := make([]protobufPropertySpec, 0, len(obj.Properties))
	for _, prop := range obj.Properties {
		if prop == nil || prop.Key == nil || prop.Value == nil {
			continue
		}
		key, ok := prop.Key.GetSoleLiteral()
		if !ok {
			return nil, errors.New("protobuf.message: dynamic keys are not supported")
		}
		variants, err := protobufVariantSpecs(prop.Value)
		if err != nil {
			return nil, fmt.Errorf("protobuf.message.%s: %w", key, err)
		}
		specs = append(specs, protobufPropertySpec{
			Key:      key,
			Optional: !prop.Value.IsRequired() || prop.Value.Optional || prop.Value.Nullable,
			Nullable: prop.Value.Nullable,
			Variants: variants,
		})
	}

	unique := map[int]bool{}
	index := 1
	for i := range specs {
		fixed := len(specs[i].Variants) != 0
		maxIndex := 0
		for _, variant := range specs[i].Variants {
			if !variant.fixed {
				fixed = false
				continue
			}
			unique[variant.Index] = true
			if variant.Index > maxIndex {
				maxIndex = variant.Index
			}
		}
		if fixed {
			if maxIndex+1 > index {
				index = maxIndex + 1
			}
			continue
		}
		for j := range specs[i].Variants {
			if specs[i].Variants[j].fixed {
				continue
			}
			for unique[index] {
				index++
			}
			specs[i].Variants[j].Index = index
			specs[i].Variants[j].fixed = true
			unique[index] = true
		}
		index++
	}

	for i := range specs {
		if len(specs[i].Variants) == 1 {
			specs[i].Variants[0].FieldName = specs[i].Key
		} else {
			for j := range specs[i].Variants {
				specs[i].Variants[j].FieldName = fmt.Sprintf("v%d", specs[i].Variants[j].Index)
			}
		}
	}
	return specs, nil
}

func protobufVariantSpecs(schema *metadata.Schema) ([]protobufVariantSpec, error) {
	if schema == nil {
		return nil, errors.New("missing schema")
	}
	if len(schema.Aliases) == 1 && schema.Aliases[0] != nil && schema.Aliases[0].Type != nil {
		return protobufVariantSpecs(schema.Aliases[0].Type.Value)
	}
	var specs []protobufVariantSpec
	for _, native := range schema.Natives {
		if native.Name != "Uint8Array" {
			continue
		}
		variant := protobufSchemaForNative(native)
		fieldType, repeated, err := protobufFieldType(variant)
		if err != nil {
			return nil, err
		}
		specs = append(specs, protobufVariantSpec{
			FieldType: fieldType,
			Repeated:  repeated,
			Schema:    variant,
			Index:     protobufSequence(native.Tags),
			fixed:     protobufSequence(native.Tags) != 0,
		})
	}
	for _, atomic := range schema.Atomics {
		variants, err := protobufAtomicVariantSpecs(atomic)
		if err != nil {
			return nil, err
		}
		specs = append(specs, variants...)
	}
	for _, constant := range schema.Constants {
		variants, err := protobufConstantVariantSpecs(constant)
		if err != nil {
			return nil, err
		}
		specs = append(specs, variants...)
	}
	for _, tpl := range schema.Templates {
		variant := protobufSchemaForTemplate(tpl)
		fieldType, repeated, err := protobufFieldType(variant)
		if err != nil {
			return nil, err
		}
		index := protobufSequence(tpl.Tags)
		specs = append(specs, protobufVariantSpec{
			FieldType: fieldType,
			Repeated:  repeated,
			Schema:    variant,
			Index:     index,
			fixed:     index != 0,
		})
	}
	for _, ref := range schema.Arrays {
		if ref == nil || ref.Type == nil {
			continue
		}
		variant := protobufSchemaForArray(ref)
		fieldType, repeated, err := protobufFieldType(variant)
		if err != nil {
			return nil, err
		}
		index := protobufSequence(ref.Tags)
		specs = append(specs, protobufVariantSpec{
			FieldType: fieldType,
			Repeated:  repeated,
			Schema:    variant,
			Index:     index,
			fixed:     index != 0,
		})
	}
	for _, ref := range schema.Maps {
		if ref == nil {
			continue
		}
		variant := protobufSchemaForMap(ref)
		fieldType, repeated, err := protobufFieldType(variant)
		if err != nil {
			return nil, err
		}
		index := protobufSequence(ref.Tags)
		specs = append(specs, protobufVariantSpec{
			FieldType: fieldType,
			Repeated:  repeated,
			Schema:    variant,
			Index:     index,
			fixed:     index != 0,
		})
	}
	for _, ref := range schema.Objects {
		if ref == nil || ref.Type == nil {
			continue
		}
		variant := protobufSchemaForObject(ref)
		fieldType, repeated, err := protobufFieldType(variant)
		if err != nil {
			return nil, err
		}
		index := protobufSequence(ref.Tags)
		specs = append(specs, protobufVariantSpec{
			FieldType: fieldType,
			Repeated:  repeated,
			Schema:    variant,
			Index:     index,
			fixed:     index != 0,
		})
	}
	if len(specs) == 0 {
		fieldType, repeated, err := protobufFieldType(schema)
		if err != nil {
			return nil, err
		}
		specs = append(specs, protobufVariantSpec{
			FieldType: fieldType,
			Repeated:  repeated,
			Schema:    schema,
		})
	}
	return specs, nil
}

func protobufAtomicVariantSpecs(atomic metadata.Atomic) ([]protobufVariantSpec, error) {
	if len(atomic.Tags) == 0 {
		variant := protobufSchemaForAtomic(atomic)
		fieldType, repeated, err := protobufFieldType(variant)
		if err != nil {
			return nil, err
		}
		return []protobufVariantSpec{{
			FieldType: fieldType,
			Repeated:  repeated,
			Schema:    variant,
		}}, nil
	}
	specs := make([]protobufVariantSpec, 0, len(atomic.Tags))
	for _, row := range atomic.Tags {
		next := atomic
		next.Tags = metadata.TagMatrix{row}
		switch atomic.Type {
		case metadata.AtomicNumber:
			if typ := protobufNumberTypeRow(row); typ == "" {
				next.Tags = nil
			}
		case metadata.AtomicBigint:
			if typ := protobufBigintTypeRow(row); typ == "" {
				next.Tags = nil
			}
		}
		variant := protobufSchemaForAtomic(next)
		fieldType, repeated, err := protobufFieldType(variant)
		if err != nil {
			return nil, err
		}
		index := protobufSequenceRow(row)
		specs = append(specs, protobufVariantSpec{
			FieldType: fieldType,
			Repeated:  repeated,
			Schema:    variant,
			Index:     index,
			fixed:     index != 0,
		})
	}
	return specs, nil
}

func protobufConstantVariantSpecs(constant metadata.Constant) ([]protobufVariantSpec, error) {
	if len(constant.Values) == 0 {
		return nil, nil
	}
	specs := []protobufVariantSpec{}
	for _, value := range constant.Values {
		if len(value.Tags) == 0 {
			variant := protobufSchemaForConstant(metadata.Constant{
				Type:   constant.Type,
				Values: []metadata.ConstantValue{{Value: value.Value}},
			})
			fieldType, repeated, err := protobufFieldType(variant)
			if err != nil {
				return nil, err
			}
			specs = append(specs, protobufVariantSpec{
				FieldType: fieldType,
				Repeated:  repeated,
				Schema:    variant,
			})
			continue
		}
		for _, row := range value.Tags {
			next := metadata.Constant{
				Type: constant.Type,
				Values: []metadata.ConstantValue{{
					Value: value.Value,
					Tags:  metadata.TagMatrix{row},
				}},
			}
			switch constant.Type {
			case metadata.AtomicNumber:
				if typ := protobufNumberTypeRow(row); typ == "" {
					next.Values[0].Tags = nil
				}
			case metadata.AtomicBigint:
				if typ := protobufBigintTypeRow(row); typ == "" {
					next.Values[0].Tags = nil
				}
			}
			variant := protobufSchemaForConstant(next)
			fieldType, repeated, err := protobufFieldType(variant)
			if err != nil {
				return nil, err
			}
			index := protobufSequenceRow(row)
			specs = append(specs, protobufVariantSpec{
				FieldType: fieldType,
				Repeated:  repeated,
				Schema:    variant,
				Index:     index,
				fixed:     index != 0,
			})
		}
	}
	return specs, nil
}

func protobufOrderVariantsForEncode(variants []protobufVariantSpec) []protobufVariantSpec {
	if len(variants) <= 1 {
		return variants
	}
	ordered := append([]protobufVariantSpec(nil), variants...)
	sort.SliceStable(ordered, func(i, j int) bool {
		return protobufVariantEncodePriority(ordered[i]) > protobufVariantEncodePriority(ordered[j])
	})
	return ordered
}

func protobufVariantEncodePriority(variant protobufVariantSpec) int {
	if variant.Schema == nil {
		return 0
	}
	if len(variant.Schema.Objects) != 0 && variant.Schema.Objects[0] != nil && variant.Schema.Objects[0].Type != nil {
		obj := variant.Schema.Objects[0].Type
		return 1000 + len(obj.Properties)*10 + len(obj.DynamicProperties)
	}
	if len(variant.Schema.Arrays) != 0 {
		return 200
	}
	if len(variant.Schema.Maps) != 0 {
		return 150
	}
	if len(variant.Schema.Natives) != 0 || len(variant.Schema.Templates) != 0 || len(variant.Schema.Constants) != 0 || len(variant.Schema.Atomics) != 0 {
		return 100
	}
	return 0
}

func protobufSchemaForAtomic(atomic metadata.Atomic) *metadata.Schema {
	return &metadata.Schema{
		Required: true,
		Atomics:  []metadata.Atomic{atomic},
	}
}

func protobufSchemaForConstant(constant metadata.Constant) *metadata.Schema {
	return &metadata.Schema{
		Required:  true,
		Constants: []metadata.Constant{constant},
	}
}

func protobufSchemaForTemplate(tpl metadata.Template) *metadata.Schema {
	return &metadata.Schema{
		Required:  true,
		Templates: []metadata.Template{tpl},
	}
}

func protobufSchemaForNative(native metadata.Native) *metadata.Schema {
	return &metadata.Schema{
		Required: true,
		Natives:  []metadata.Native{native},
	}
}

func protobufSchemaForArray(ref *metadata.ArrayRef) *metadata.Schema {
	return &metadata.Schema{
		Required: true,
		Arrays:   []*metadata.ArrayRef{ref},
	}
}

func protobufSchemaForMap(ref *metadata.MapRef) *metadata.Schema {
	return &metadata.Schema{
		Required: true,
		Maps:     []*metadata.MapRef{ref},
	}
}

func protobufSchemaForObject(ref *metadata.ObjectRef) *metadata.Schema {
	return &metadata.Schema{
		Required: true,
		Objects:  []*metadata.ObjectRef{ref},
	}
}

func protobufSequence(tags metadata.TagMatrix) int {
	for _, row := range tags {
		for _, tag := range row {
			if tag.Kind != "sequence" {
				continue
			}
			switch value := tag.Value.(type) {
			case int:
				return value
			case int32:
				return int(value)
			case int64:
				return int(value)
			case float64:
				return int(value)
			}
		}
	}
	return 0
}

type protobufHierarchy struct {
	Key      string
	Object   *metadata.ObjectType
	Children map[string]*protobufHierarchy
}

func collectProtobufObjects(root *metadata.ObjectType) []*metadata.ObjectType {
	if root == nil {
		return nil
	}
	out := []*metadata.ObjectType{}
	visited := map[*metadata.ObjectType]bool{}
	var visitSchema func(*metadata.Schema)
	var visitObject func(*metadata.ObjectType)
	visitObject = func(obj *metadata.ObjectType) {
		if obj == nil || visited[obj] {
			return
		}
		visited[obj] = true
		if protobufDynamicObjectValueSchema(obj) == nil {
			out = append(out, obj)
		}
		for _, prop := range obj.Properties {
			if prop != nil && prop.Value != nil {
				visitSchema(prop.Value)
			}
		}
		for _, prop := range obj.DynamicProperties {
			if prop != nil && prop.Value != nil {
				visitSchema(prop.Value)
			}
		}
		if obj.AdditionalProperties != nil {
			visitSchema(obj.AdditionalProperties)
		}
	}
	visitSchema = func(schema *metadata.Schema) {
		if schema == nil {
			return
		}
		for _, ref := range schema.Objects {
			if ref != nil && ref.Type != nil {
				visitObject(ref.Type)
			}
		}
		for _, ref := range schema.Arrays {
			if ref != nil && ref.Type != nil {
				visitSchema(ref.Type.Value)
			}
		}
		for _, ref := range schema.Tuples {
			if ref == nil || ref.Type == nil {
				continue
			}
			for _, elem := range ref.Type.Elements {
				if elem == nil {
					continue
				}
				if elem.Rest != nil {
					visitSchema(elem.Rest)
					continue
				}
				visitSchema(elem)
			}
		}
		for _, ref := range schema.Maps {
			if ref == nil {
				continue
			}
			visitSchema(ref.Key)
			visitSchema(ref.Value)
		}
		for _, ref := range schema.Sets {
			if ref != nil {
				visitSchema(ref.Value)
			}
		}
		if schema.Rest != nil {
			visitSchema(schema.Rest)
		}
		if schema.Escaped != nil && schema.Escaped.Original != nil {
			visitSchema(schema.Escaped.Original)
		}
	}
	visitObject(root)
	return out
}

func emplaceProtobufHierarchy(roots map[string]*protobufHierarchy, obj *metadata.ObjectType) {
	if obj == nil {
		return
	}
	parts := protobufHierarchyParts(protobufObjectName(obj))
	if len(parts) == 0 {
		return
	}
	current, ok := roots[parts[0]]
	if !ok {
		current = &protobufHierarchy{
			Key:      parts[0],
			Children: map[string]*protobufHierarchy{},
		}
		roots[parts[0]] = current
	}
	for _, part := range parts[1:] {
		child, ok := current.Children[part]
		if !ok {
			child = &protobufHierarchy{
				Key:      part,
				Children: map[string]*protobufHierarchy{},
			}
			current.Children[part] = child
		}
		current = child
	}
	current.Object = obj
}

func writeProtobufHierarchy(hierarchy *protobufHierarchy) (string, error) {
	if hierarchy == nil {
		return "", errors.New("protobuf.message: missing hierarchy")
	}
	lines := []string{fmt.Sprintf("message %s {", protobufNameEncode(hierarchy.Key))}
	if hierarchy.Object != nil {
		body, err := protobufObjectBody(hierarchy.Object)
		if err != nil {
			return "", err
		}
		for _, line := range strings.Split(body, "\n") {
			lines = append(lines, "  "+line)
		}
	}
	keys := make([]string, 0, len(hierarchy.Children))
	for key := range hierarchy.Children {
		keys = append(keys, key)
	}
	sort.Strings(keys)
	for _, key := range keys {
		body, err := writeProtobufHierarchy(hierarchy.Children[key])
		if err != nil {
			return "", err
		}
		for _, line := range strings.Split(body, "\n") {
			lines = append(lines, "  "+line)
		}
	}
	lines = append(lines, "}")
	return strings.Join(lines, "\n"), nil
}

func protobufObjectBody(obj *metadata.ObjectType) (string, error) {
	specs, err := protobufPropertySpecs(obj)
	if err != nil {
		return "", err
	}
	lines := make([]string, 0, len(specs))
	for _, spec := range specs {
		if len(spec.Variants) == 1 {
			variant := spec.Variants[0]
			modifier := ""
			if !variant.Repeated && spec.Optional {
				modifier = "optional "
			}
			lines = append(lines, fmt.Sprintf("%s%s %s = %d;", modifier, variant.FieldType, variant.FieldName, variant.Index))
			continue
		}
		lines = append(lines, fmt.Sprintf("oneof %s {", spec.Key))
		for _, variant := range spec.Variants {
			lines = append(lines, fmt.Sprintf("  %s %s = %d;", variant.FieldType, variant.FieldName, variant.Index))
		}
		lines = append(lines, "}")
	}
	return strings.Join(lines, "\n"), nil
}

func protobufTypeName(name string) string {
	parts := protobufHierarchyParts(name)
	for i, part := range parts {
		parts[i] = protobufNameEncode(part)
	}
	return strings.Join(parts, ".")
}

func protobufObjectName(obj *metadata.ObjectType) string {
	if obj == nil {
		return ""
	}
	return strings.TrimSpace(obj.Name)
}

func protobufHierarchyParts(name string) []string {
	name = strings.TrimSpace(name)
	if name == "" {
		return nil
	}
	if strings.HasPrefix(name, "Intersection<") && strings.HasSuffix(name, ">") {
		return []string{name}
	}
	return strings.Split(name, ".")
}

var protobufNameReplacer = strings.NewReplacer(
	".", "_",
	"$", "_dollar_",
	"&", "_and_",
	"|", "_or_",
	"{", "_blt_",
	"}", "_bgt_",
	"<", "_lt_",
	">", "_gt_",
	"(", "_lp_",
	")", "_rp_",
	"[", "_alt_",
	"]", "_agt_",
	",", "_comma_",
	"#", "_sharp_",
	"`", "_backquote_",
	"'", "_singlequote_",
	`"`, "_doublequote_",
	" ", "_space_",
)

func protobufNameEncode(input string) string {
	encoded := protobufNameReplacer.Replace(input)
	if encoded == "" {
		return "_"
	}
	var b strings.Builder
	for i, r := range encoded {
		switch {
		case r == '_':
			b.WriteRune(r)
		case unicode.IsLetter(r):
			b.WriteRune(r)
		case unicode.IsDigit(r):
			if i == 0 {
				b.WriteRune('_')
			}
			b.WriteRune(r)
		default:
			b.WriteRune('_')
		}
	}
	out := b.String()
	if out == "" {
		return "_"
	}
	return out
}

func protobufNumberType(matrix metadata.TagMatrix) string {
	for _, row := range matrix {
		for _, tag := range row {
			if tag.Kind != "type" {
				continue
			}
			if value, ok := tag.Value.(string); ok {
				switch value {
				case "int32", "uint32", "int64", "uint64", "double", "float":
					return value
				}
			}
		}
	}
	return ""
}
