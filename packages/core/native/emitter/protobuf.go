package emitter

import (
	"errors"
	"fmt"
	"math"
	"sort"
	"strconv"
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
	root := protobufRootObject(schema)
	if root == nil {
		return "", errors.New("protobuf.encode: target type must be a sole static object")
	}
	state := newProtobufTransformState()
	encodeRoot, err := state.emitEncodeHelper(root)
	if err != nil {
		return "", err
	}
	helpers := state.render()
	return fmt.Sprintf(`(() => { %s return (input) => { const __sizer = %s(new %s._ProtobufSizer(), input); const __writer = %s(new %s._ProtobufWriter(__sizer), input); return __writer.buffer(); }; })()`, helpers, encodeRoot, protobufSizerImportAlias, encodeRoot, protobufWriterImportAlias), nil
}

func EmitProtobufDecodeArrowFunction(schema *metadata.Schema) (string, error) {
	root := protobufRootObject(schema)
	if root == nil {
		return "", errors.New("protobuf.decode: target type must be a sole static object")
	}
	state := newProtobufTransformState()
	decodeRoot, err := state.emitDecodeHelper(root)
	if err != nil {
		return "", err
	}
	helpers := state.render()
	return fmt.Sprintf(`(() => { %s return (input) => { const __reader = new %s._ProtobufReader(input); return %s(__reader, __reader.size()); }; })()`, helpers, protobufReaderImportAlias, decodeRoot), nil
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
	b.WriteString(`(writer, input) => { `)
	specs, err := protobufPropertySpecs(obj)
	if err != nil {
		return "", err
	}
	for _, spec := range specs {
		accessor := accessProperty("input", spec.Key)
		if len(spec.Variants) == 1 {
			variant := spec.Variants[0]
			statement, err := s.encodeField("writer", accessor, variant.Schema, variant.FieldType, variant.Index)
			if err != nil {
				return "", err
			}
			b.WriteString(`if (undefined !== `)
			b.WriteString(accessor)
			b.WriteString(` && null !== `)
			b.WriteString(accessor)
			b.WriteString(`) { `)
			b.WriteString(statement)
			b.WriteString(`} `)
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
			statement, err := s.encodeField("writer", accessor, variant.Schema, variant.FieldType, variant.Index)
			if err != nil {
				return "", err
			}
			if i == 0 {
				b.WriteString(`if (`)
			} else {
				b.WriteString(`else if (`)
			}
			b.WriteString(predicate)
			b.WriteString(`) { `)
			b.WriteString(statement)
			b.WriteString(`} `)
		}
		b.WriteString(`} `)
	}
	b.WriteString(`return writer; }`)
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

	specs, err := protobufPropertySpecs(obj)
	if err != nil {
		return "", err
	}
	var b strings.Builder
	b.WriteString(`(reader, limit) => { const output = {`)
	for i, spec := range specs {
		if i != 0 {
			b.WriteString(`,`)
		}
		b.WriteString(jsonQuote(spec.Key))
		b.WriteString(`:`)
		b.WriteString(protobufDefaultValueExpression(spec.Schema))
	}
	b.WriteString(`}; while (reader.index() < limit) { const tag = reader.uint32(); switch (tag >>> 3) { `)
	for _, spec := range specs {
		for _, variant := range spec.Variants {
			statement, err := s.decodeField("reader", "tag", accessProperty("output", spec.Key), variant.Schema, variant.FieldType)
			if err != nil {
				return "", err
			}
			b.WriteString(`case `)
			b.WriteString(fmt.Sprintf("%d", variant.Index))
			b.WriteString(`: { `)
			b.WriteString(statement)
			b.WriteString(`break; } `)
		}
	}
	b.WriteString(`default: reader.skipType(tag & 7); break; } } return output; }`)
	s.helpers[name] = b.String()
	return name, nil
}

func (s *protobufTransformState) encodeField(writer, expr string, schema *metadata.Schema, fieldType string, index int) (string, error) {
	if schema == nil {
		return "", nil
	}
	schema = protobufUnalias(schema)
	if len(schema.Aliases) == 1 && schema.Aliases[0] != nil && schema.Aliases[0].Type != nil {
		return s.encodeField(writer, expr, schema.Aliases[0].Type.Value, fieldType, index)
	}
	if len(schema.Maps) != 0 && schema.Maps[0] != nil {
		ref := schema.Maps[0]
		keyType, _, err := protobufFieldType(ref.Key)
		if err != nil {
			return "", err
		}
		valueType, _, err := protobufFieldType(ref.Value)
		if err != nil {
			return "", err
		}
		keyStmt, err := s.encodeField(writer, "__key", ref.Key, keyType, 1)
		if err != nil {
			return "", err
		}
		valueStmt, err := s.encodeField(writer, "__value", ref.Value, valueType, 2)
		if err != nil {
			return "", err
		}
		return fmt.Sprintf(`for (const [__key, __value] of (%s instanceof Map ? %s.entries() : Object.entries(%s))) { %s.uint32(%d); %s.fork(); %s%s.ldelim(); } `, expr, expr, expr, writer, protobufTag(index, protobufWireLen), writer, keyStmt+valueStmt, writer), nil
	}
	if len(schema.Arrays) != 0 && schema.Arrays[0] != nil && schema.Arrays[0].Type != nil {
		elem := schema.Arrays[0].Type.Value
		elemType, _, err := protobufFieldType(elem)
		if err != nil {
			return "", err
		}
		if method, wire, ok := protobufScalarMethod(elemType); ok && wire != protobufWireLen {
			return fmt.Sprintf(`if (%s.length !== 0) { %s.uint32(%d); %s.fork(); for (const __elem of %s) { %s.%s(__elem); } %s.ldelim(); } `, expr, writer, protobufTag(index, protobufWireLen), writer, expr, writer, method, writer), nil
		}
		elemStmt, err := s.encodeField(writer, "__elem", elem, elemType, index)
		if err != nil {
			return "", err
		}
		return `for (const __elem of ` + expr + `) { ` + elemStmt + `} `, nil
	}
	if len(schema.Objects) != 0 && schema.Objects[0] != nil && schema.Objects[0].Type != nil {
		if valueSchema := protobufDynamicObjectValueSchema(schema.Objects[0].Type); valueSchema != nil {
			valueType, _, err := protobufFieldType(valueSchema)
			if err != nil {
				return "", err
			}
			keyStmt, err := s.encodeField(writer, "__key", protobufSchemaForAtomic(metadata.Atomic{Type: metadata.AtomicString}), "string", 1)
			if err != nil {
				return "", err
			}
			valueStmt, err := s.encodeField(writer, "__value", valueSchema, valueType, 2)
			if err != nil {
				return "", err
			}
			return fmt.Sprintf(`for (const [__key, __value] of Object.entries(%s)) { %s.uint32(%d); %s.fork(); %s%s.ldelim(); } `, expr, writer, protobufTag(index, protobufWireLen), writer, keyStmt+valueStmt, writer), nil
		}
		name, err := s.emitEncodeHelper(schema.Objects[0].Type)
		if err != nil {
			return "", err
		}
		return fmt.Sprintf(`%s.uint32(%d); %s.fork(); %s(%s, %s); %s.ldelim(); `, writer, protobufTag(index, protobufWireLen), writer, name, writer, expr, writer), nil
	}
	method, wire, ok := protobufScalarMethod(fieldType)
	if !ok {
		return "", fmt.Errorf("protobuf.encode: unsupported field type %q", fieldType)
	}
	return fmt.Sprintf(`%s.uint32(%d); %s.%s(%s); `, writer, protobufTag(index, wire), writer, method, expr), nil
}

func (s *protobufTransformState) decodeField(reader, tag, accessor string, schema *metadata.Schema, fieldType string) (string, error) {
	if schema == nil {
		return "", nil
	}
	schema = protobufUnalias(schema)
	if len(schema.Aliases) == 1 && schema.Aliases[0] != nil && schema.Aliases[0].Type != nil {
		return s.decodeField(reader, tag, accessor, schema.Aliases[0].Type.Value, fieldType)
	}
	if len(schema.Maps) != 0 && schema.Maps[0] != nil {
		ref := schema.Maps[0]
		keyType, _, err := protobufFieldType(ref.Key)
		if err != nil {
			return "", err
		}
		valueType, _, err := protobufFieldType(ref.Value)
		if err != nil {
			return "", err
		}
		entryDecoder, err := s.decodeEntryObject(reader, keyType, ref.Key, valueType, ref.Value)
		if err != nil {
			return "", err
		}
		return `(() => { const __end = ` + reader + `.uint32() + ` + reader + `.index(); const __entry = ` + entryDecoder + `; ` + accessor + ` ??= new Map(); ` + accessor + `.set(__entry.key, __entry.value); })(); `, nil
	}
	if len(schema.Arrays) != 0 && schema.Arrays[0] != nil && schema.Arrays[0].Type != nil {
		elem := schema.Arrays[0].Type.Value
		elemType, _, err := protobufFieldType(elem)
		if err != nil {
			return "", err
		}
		valueExpr, err := s.decodeValue(reader, elem, elemType)
		if err != nil {
			return "", err
		}
		if _, wire, ok := protobufScalarMethod(elemType); ok && wire != protobufWireLen {
			return accessor + ` ??= []; if ((` + tag + ` & 7) === 2) { const __end = ` + reader + `.uint32() + ` + reader + `.index(); while (` + reader + `.index() < __end) ` + accessor + `.push(` + valueExpr + `); } else ` + accessor + `.push(` + valueExpr + `); `, nil
		}
		return accessor + ` ??= []; ` + accessor + `.push(` + valueExpr + `); `, nil
	}
	if len(schema.Objects) != 0 && schema.Objects[0] != nil && schema.Objects[0].Type != nil {
		if valueSchema := protobufDynamicObjectValueSchema(schema.Objects[0].Type); valueSchema != nil {
			valueType, _, err := protobufFieldType(valueSchema)
			if err != nil {
				return "", err
			}
			entryDecoder, err := s.decodeEntryObject(reader, "string", protobufSchemaForAtomic(metadata.Atomic{Type: metadata.AtomicString}), valueType, valueSchema)
			if err != nil {
				return "", err
			}
			return `(() => { const __end = ` + reader + `.uint32() + ` + reader + `.index(); const __entry = ` + entryDecoder + `; ` + accessor + ` ??= {}; ` + accessor + `[__entry.key] = __entry.value; })(); `, nil
		}
		name, err := s.emitDecodeHelper(schema.Objects[0].Type)
		if err != nil {
			return "", err
		}
		return accessor + ` = ` + name + `(` + reader + `, ` + reader + `.uint32() + ` + reader + `.index()); `, nil
	}
	valueExpr, err := s.decodeValue(reader, schema, fieldType)
	if err != nil {
		return "", err
	}
	return accessor + ` = ` + valueExpr + `; `, nil
}

func (s *protobufTransformState) decodeEntryObject(reader, keyType string, keySchema *metadata.Schema, valueType string, valueSchema *metadata.Schema) (string, error) {
	keyExpr, err := s.decodeValue(reader, keySchema, keyType)
	if err != nil {
		return "", err
	}
	valueExpr, err := s.decodeValue(reader, valueSchema, valueType)
	if err != nil {
		return "", err
	}
	return `(() => { const __entry = { key: undefined, value: undefined }; while (` + reader + `.index() < __end) { const __kind = ` + reader + `.uint32(); switch (__kind >>> 3) { case 1: __entry.key = ` + keyExpr + `; break; case 2: __entry.value = ` + valueExpr + `; break; default: ` + reader + `.skipType(__kind & 7); break; } } return __entry; })()`, nil
}

func (s *protobufTransformState) decodeValue(reader string, schema *metadata.Schema, fieldType string) (string, error) {
	schema = protobufUnalias(schema)
	if len(schema.Objects) != 0 && schema.Objects[0] != nil && schema.Objects[0].Type != nil {
		if protobufDynamicObjectValueSchema(schema.Objects[0].Type) == nil {
			name, err := s.emitDecodeHelper(schema.Objects[0].Type)
			if err != nil {
				return "", err
			}
			return name + `(` + reader + `, ` + reader + `.uint32() + ` + reader + `.index())`, nil
		}
	}
	method, _, ok := protobufScalarMethod(fieldType)
	if !ok {
		return "", fmt.Errorf("protobuf.decode: unsupported field type %q", fieldType)
	}
	expr := reader + "." + method + "()"
	if protobufIsLongNumberSchema(schema) {
		return "Number(" + expr + ")", nil
	}
	return expr, nil
}

const (
	protobufWireVariant = 0
	protobufWireI64     = 1
	protobufWireLen     = 2
	protobufWireI32     = 5
)

func protobufTag(index int, wire int) int {
	return (index << 3) | wire
}

func protobufUnalias(schema *metadata.Schema) *metadata.Schema {
	for schema != nil && len(schema.Aliases) == 1 && schema.Aliases[0] != nil && schema.Aliases[0].Type != nil && schema.Aliases[0].Type.Value != nil {
		schema = schema.Aliases[0].Type.Value
	}
	return schema
}

func protobufScalarMethod(fieldType string) (string, int, bool) {
	fieldType = strings.TrimSpace(strings.TrimPrefix(fieldType, "repeated "))
	switch fieldType {
	case "bool":
		return "bool", protobufWireVariant, true
	case "int32":
		return "int32", protobufWireVariant, true
	case "uint32":
		return "uint32", protobufWireVariant, true
	case "sint32":
		return "sint32", protobufWireVariant, true
	case "int64":
		return "int64", protobufWireVariant, true
	case "uint64":
		return "uint64", protobufWireVariant, true
	case "sint64":
		return "sint64", protobufWireVariant, true
	case "float":
		return "float", protobufWireI32, true
	case "double":
		return "double", protobufWireI64, true
	case "string":
		return "string", protobufWireLen, true
	case "bytes":
		return "bytes", protobufWireLen, true
	default:
		return "", 0, false
	}
}

func protobufDefaultValueExpression(schema *metadata.Schema) string {
	schema = protobufUnalias(schema)
	if schema == nil {
		return "undefined"
	}
	if schema.Nullable {
		return "null"
	}
	if !schema.IsRequired() || schema.Optional {
		return "undefined"
	}
	if len(schema.Arrays) != 0 {
		return "[]"
	}
	if len(schema.Maps) != 0 {
		return "new Map()"
	}
	for _, native := range schema.Natives {
		if native.Name == "Uint8Array" {
			return "new Uint8Array([])"
		}
	}
	if len(schema.Atomics) != 0 {
		for _, atomic := range schema.Atomics {
			if atomic.Type == metadata.AtomicString {
				return jsonQuote("")
			}
		}
	}
	if len(schema.Constants) != 0 {
		for _, constant := range schema.Constants {
			if constant.Type != metadata.AtomicString {
				continue
			}
			for _, value := range constant.Values {
				if text, ok := value.Value.(string); ok && text == "" {
					return jsonQuote("")
				}
			}
		}
	}
	if len(schema.Templates) != 0 {
		return jsonQuote("")
	}
	if len(schema.Objects) != 0 {
		for _, ref := range schema.Objects {
			if ref != nil && ref.Type != nil && protobufDynamicObjectValueSchema(ref.Type) != nil {
				return "{}"
			}
		}
	}
	return "undefined"
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
	Schema   *metadata.Schema
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
			Schema:   prop.Value,
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
	switch constant.Type {
	case metadata.AtomicBoolean:
		return protobufConstantAtomicVariant(constant, "bool", 0)
	case metadata.AtomicString:
		return protobufConstantAtomicVariant(constant, "string", 0)
	case metadata.AtomicNumber:
		return protobufNumberConstantVariants(constant)
	case metadata.AtomicBigint:
		return protobufBigintConstantVariants(constant)
	default:
		return nil, nil
	}
}

func protobufConstantAtomicVariant(constant metadata.Constant, fieldType string, index int) ([]protobufVariantSpec, error) {
	fixed := false
	if len(constant.Values) != 0 && len(constant.Values[0].Tags) != 0 {
		index = protobufSequenceRow(constant.Values[0].Tags[0])
		fixed = index != 0
	}
	schema := protobufSchemaForAtomic(metadata.Atomic{
		Type: constant.Type,
		Tags: protobufTagMatrixForFieldType(fieldType),
	})
	return []protobufVariantSpec{{
		FieldType: fieldType,
		Schema:    schema,
		Index:     index,
		fixed:     fixed,
	}}, nil
}

func protobufNumberConstantVariants(constant metadata.Constant) ([]protobufVariantSpec, error) {
	init := protobufDeduceNumberConstantType(constant.Values)
	grouped := map[string]protobufVariantSpec{}
	for _, value := range constant.Values {
		if len(value.Tags) == 0 {
			grouped[init] = protobufVariantSpec{
				FieldType: init,
				Schema: protobufSchemaForAtomic(metadata.Atomic{
					Type: metadata.AtomicNumber,
					Tags: protobufTagMatrixForFieldType(init),
				}),
			}
			continue
		}
		for _, row := range value.Tags {
			fieldType := protobufNumberTypeRow(row)
			if fieldType == "" {
				fieldType = "double"
			}
			index := protobufSequenceRow(row)
			grouped[fieldType] = protobufVariantSpec{
				FieldType: fieldType,
				Schema: protobufSchemaForAtomic(metadata.Atomic{
					Type: metadata.AtomicNumber,
					Tags: metadata.TagMatrix{protobufRowWithFieldType(row, fieldType)},
				}),
				Index: index,
				fixed: index != 0,
			}
		}
	}
	return protobufOrderedScalarVariants(grouped), nil
}

func protobufBigintConstantVariants(constant metadata.Constant) ([]protobufVariantSpec, error) {
	init := protobufDeduceBigintConstantType(constant.Values)
	grouped := map[string]protobufVariantSpec{}
	for _, value := range constant.Values {
		if len(value.Tags) == 0 {
			grouped[init] = protobufVariantSpec{
				FieldType: init,
				Schema: protobufSchemaForAtomic(metadata.Atomic{
					Type: metadata.AtomicBigint,
					Tags: protobufTagMatrixForFieldType(init),
				}),
			}
			continue
		}
		for _, row := range value.Tags {
			fieldType := protobufBigintTypeRow(row)
			if fieldType == "" {
				fieldType = "int64"
			}
			index := protobufSequenceRow(row)
			grouped[fieldType] = protobufVariantSpec{
				FieldType: fieldType,
				Schema: protobufSchemaForAtomic(metadata.Atomic{
					Type: metadata.AtomicBigint,
					Tags: metadata.TagMatrix{protobufRowWithFieldType(row, fieldType)},
				}),
				Index: index,
				fixed: index != 0,
			}
		}
	}
	return protobufOrderedScalarVariants(grouped), nil
}

func protobufOrderedScalarVariants(grouped map[string]protobufVariantSpec) []protobufVariantSpec {
	order := map[string]int{
		"bool":   0,
		"int32":  1,
		"uint32": 2,
		"int64":  3,
		"uint64": 4,
		"float":  5,
		"double": 6,
		"string": 7,
	}
	keys := make([]string, 0, len(grouped))
	for key := range grouped {
		keys = append(keys, key)
	}
	sort.SliceStable(keys, func(i, j int) bool {
		return order[keys[i]] < order[keys[j]]
	})
	out := make([]protobufVariantSpec, 0, len(keys))
	for _, key := range keys {
		out = append(out, grouped[key])
	}
	return out
}

func protobufDeduceNumberConstantType(values []metadata.ConstantValue) string {
	if len(values) == 0 {
		return "double"
	}
	allInteger := true
	allInt32 := true
	for _, value := range values {
		n, ok := protobufFloat(value.Value)
		if !ok || math.Trunc(n) != n {
			allInteger = false
			break
		}
		if n < -2147483648 || n > 2147483647 {
			allInt32 = false
		}
	}
	if !allInteger {
		return "double"
	}
	if allInt32 {
		return "int32"
	}
	return "int64"
}

func protobufDeduceBigintConstantType(values []metadata.ConstantValue) string {
	for _, value := range values {
		text := strings.TrimSpace(fmt.Sprint(value.Value))
		if strings.HasPrefix(text, "-") {
			return "int64"
		}
	}
	return "uint64"
}

func protobufFloat(value any) (float64, bool) {
	switch v := value.(type) {
	case float64:
		return v, true
	case float32:
		return float64(v), true
	case int:
		return float64(v), true
	case int32:
		return float64(v), true
	case int64:
		return float64(v), true
	case uint:
		return float64(v), true
	case uint32:
		return float64(v), true
	case uint64:
		return float64(v), true
	case jsonNumber:
		n, err := strconv.ParseFloat(string(v), 64)
		return n, err == nil
	case string:
		n, err := strconv.ParseFloat(v, 64)
		return n, err == nil
	default:
		return 0, false
	}
}

type jsonNumber string

func protobufTagMatrixForFieldType(fieldType string) metadata.TagMatrix {
	return metadata.TagMatrix{[]metadata.TypeTag{{Kind: "type", Value: fieldType}}}
}

func protobufRowWithFieldType(row []metadata.TypeTag, fieldType string) []metadata.TypeTag {
	out := append([]metadata.TypeTag(nil), row...)
	for i := range out {
		if out[i].Kind == "type" {
			out[i].Value = fieldType
			return out
		}
	}
	out = append(out, metadata.TypeTag{Kind: "type", Value: fieldType})
	return out
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
