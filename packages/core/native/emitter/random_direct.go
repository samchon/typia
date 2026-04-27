package emitter

import (
	"encoding/json"
	"fmt"
	"regexp"
	"sort"
	"strconv"
	"strings"

	"github.com/samchon/typia/packages/core/native/metadata"
)

type randomDirectState struct {
	objects        map[*metadata.ObjectType]string
	visiting       map[*metadata.Schema]bool
	visitingArrays map[*metadata.ArrayType]bool
	visitingTuples map[*metadata.TupleType]bool
	visitingAlias  map[*metadata.AliasType]bool
}

func emitRandomDirectArrowFunction(schema *metadata.Schema) (string, error) {
	state := newRandomDirectState(schema)
	body, err := state.decode(schema, false)
	if err != nil {
		return "", err
	}
	return fmt.Sprintf(`(() => { %slet _generator; let _recursive = false; let _depth = 0; return (generator) => { _generator = generator; return %s; }; })()`, state.objectHelpers(), body), nil
}

func emitCreateRandomDirectArrowFunction(schema *metadata.Schema) (string, error) {
	state := newRandomDirectState(schema)
	body, err := state.decode(schema, false)
	if err != nil {
		return "", err
	}
	return fmt.Sprintf(`(() => { %slet _generator; let _recursive = false; let _depth = 0; return (generator) => { _generator = generator; return () => %s; }; })()`, state.objectHelpers(), body), nil
}

func newRandomDirectState(schema *metadata.Schema) *randomDirectState {
	return &randomDirectState{
		objects:        collectRandomObjects(schema),
		visiting:       map[*metadata.Schema]bool{},
		visitingArrays: map[*metadata.ArrayType]bool{},
		visitingTuples: map[*metadata.TupleType]bool{},
		visitingAlias:  map[*metadata.AliasType]bool{},
	}
}

func collectRandomObjects(root *metadata.Schema) map[*metadata.ObjectType]string {
	seen := map[*metadata.ObjectType]string{}
	seenSchemas := map[*metadata.Schema]bool{}
	seenArrays := map[*metadata.ArrayType]bool{}
	seenArrayNames := map[string]bool{}
	seenTuples := map[*metadata.TupleType]bool{}
	seenTupleNames := map[string]bool{}
	seenAliases := map[*metadata.AliasType]bool{}
	seenAliasNames := map[string]bool{}
	var walk func(*metadata.Schema)
	walk = func(schema *metadata.Schema) {
		if schema == nil {
			return
		}
		if seenSchemas[schema] {
			return
		}
		seenSchemas[schema] = true
		if schema.Escaped != nil {
			walk(schema.Escaped.Returns)
		}
		if schema.Rest != nil {
			walk(schema.Rest)
		}
		for _, ref := range schema.Arrays {
			if ref != nil && ref.Type != nil {
				if seenArrays[ref.Type] || (ref.Type.Name != "" && seenArrayNames[ref.Type.Name]) {
					continue
				}
				seenArrays[ref.Type] = true
				if ref.Type.Name != "" {
					seenArrayNames[ref.Type.Name] = true
				}
				walk(ref.Type.Value)
			}
		}
		for _, ref := range schema.Tuples {
			if ref != nil && ref.Type != nil {
				if seenTuples[ref.Type] || (ref.Type.Name != "" && seenTupleNames[ref.Type.Name]) {
					continue
				}
				seenTuples[ref.Type] = true
				if ref.Type.Name != "" {
					seenTupleNames[ref.Type.Name] = true
				}
				for _, elem := range ref.Type.Elements {
					walk(elem)
				}
			}
		}
		for _, ref := range schema.Objects {
			if ref == nil || ref.Type == nil {
				continue
			}
			if _, ok := seen[ref.Type]; !ok {
				seen[ref.Type] = fmt.Sprintf("_ro%d", len(seen))
				for _, prop := range ref.Type.Properties {
					if prop != nil {
						walk(prop.Value)
						walk(prop.Key)
					}
				}
				for _, prop := range ref.Type.DynamicProperties {
					if prop != nil {
						walk(prop.Value)
						walk(prop.Key)
					}
				}
				walk(ref.Type.AdditionalProperties)
			}
		}
		for _, ref := range schema.Aliases {
			if ref != nil && ref.Type != nil {
				if seenAliases[ref.Type] || (ref.Type.Name != "" && seenAliasNames[ref.Type.Name]) {
					continue
				}
				seenAliases[ref.Type] = true
				if ref.Type.Name != "" {
					seenAliasNames[ref.Type.Name] = true
				}
				walk(ref.Type.Value)
			}
		}
		for _, ref := range schema.Sets {
			if ref != nil {
				walk(ref.Value)
			}
		}
		for _, ref := range schema.Maps {
			if ref != nil {
				walk(ref.Key)
				walk(ref.Value)
			}
		}
	}
	walk(root)
	return seen
}

func (s *randomDirectState) objectHelpers() string {
	if len(s.objects) == 0 {
		return ""
	}
	objects := make([]*metadata.ObjectType, 0, len(s.objects))
	for obj := range s.objects {
		objects = append(objects, obj)
	}
	sort.Slice(objects, func(i, j int) bool { return objects[i].Index < objects[j].Index })
	sort.SliceStable(objects, func(i, j int) bool { return s.objects[objects[i]] < s.objects[objects[j]] })
	var b strings.Builder
	for _, obj := range objects {
		b.WriteString("const ")
		b.WriteString(s.objects[obj])
		b.WriteString(" = (_recursive = false, _depth = 0) => ")
		b.WriteString(s.objectLiteral(obj, true))
		b.WriteString("; ")
	}
	return b.String()
}

func (s *randomDirectState) decode(schema *metadata.Schema, recursive bool) (string, error) {
	if schema == nil {
		return "undefined", nil
	}
	if s.visiting[schema] {
		return "undefined", nil
	}
	s.visiting[schema] = true
	defer delete(s.visiting, schema)
	expressions := []string{}
	if schema.Any {
		expressions = append(expressions, jsonQuote("any type used..."))
	}
	if !schema.IsRequired() || len(schema.Functions) != 0 {
		expressions = append(expressions, "undefined")
	}
	if schema.Nullable {
		expressions = append(expressions, "null")
	}
	for _, constant := range schema.Constants {
		for _, value := range constant.Values {
			expressions = append(expressions, jsLiteral(constant.Type, value.Value))
		}
	}
	for _, tmpl := range schema.Templates {
		expressions = append(expressions, s.decodeTemplate(tmpl, recursive))
	}
	for _, atomic := range schema.Atomics {
		parts, err := s.decodeAtomic(atomic)
		if err != nil {
			return "", err
		}
		expressions = append(expressions, parts...)
	}
	if schema.Escaped != nil {
		expr, err := s.decode(schema.Escaped.Returns, recursive)
		if err != nil {
			return "", err
		}
		expressions = append(expressions, expr)
	}
	for _, ref := range schema.Arrays {
		if ref == nil || ref.Type == nil {
			continue
		}
		expr, err := s.decodeArray(ref, recursive)
		if err != nil {
			return "", err
		}
		expressions = append(expressions, expr)
	}
	for _, ref := range schema.Tuples {
		if ref == nil || ref.Type == nil {
			continue
		}
		expr, err := s.decodeTuple(ref.Type, recursive)
		if err != nil {
			return "", err
		}
		expressions = append(expressions, expr)
	}
	for _, ref := range schema.Objects {
		if ref == nil || ref.Type == nil {
			continue
		}
		expressions = append(expressions, s.decodeObject(ref.Type, recursive))
	}
	for _, ref := range schema.Aliases {
		if ref == nil || ref.Type == nil {
			continue
		}
		if s.visitingAlias[ref.Type] {
			continue
		}
		s.visitingAlias[ref.Type] = true
		expr, err := s.decode(ref.Type.Value, recursive)
		delete(s.visitingAlias, ref.Type)
		if err != nil {
			return "", err
		}
		expressions = append(expressions, expr)
	}
	for _, native := range schema.Natives {
		expr, err := s.decodeNative(native.Name, recursive)
		if err != nil {
			return "", err
		}
		expressions = append(expressions, expr)
	}
	for _, ref := range schema.Sets {
		if ref == nil {
			continue
		}
		expr, err := s.decodeSet(ref, recursive)
		if err != nil {
			return "", err
		}
		expressions = append(expressions, expr)
	}
	for _, ref := range schema.Maps {
		if ref == nil {
			continue
		}
		expr, err := s.decodeMap(ref, recursive)
		if err != nil {
			return "", err
		}
		expressions = append(expressions, expr)
	}
	if len(expressions) == 0 {
		return "undefined", nil
	}
	if len(expressions) == 1 {
		return expressions[0], nil
	}
	callbacks := make([]string, len(expressions))
	for i, expr := range expressions {
		callbacks[i] = "() => " + expr
	}
	return fmt.Sprintf("%s._randomPick([%s])()", randomPickImportAlias, strings.Join(callbacks, ", ")), nil
}

func (s *randomDirectState) decodeAtomic(atomic metadata.Atomic) ([]string, error) {
	schemas, err := atomicRandomSchemas(atomic)
	if err != nil {
		return nil, err
	}
	out := make([]string, 0, len(schemas))
	for _, schema := range schemas {
		out = append(out, randomAtomicCall(atomic.Type, schema))
	}
	return out, nil
}

func atomicRandomSchemas(atomic metadata.Atomic) ([]map[string]any, error) {
	if len(atomic.Tags) == 0 {
		return []map[string]any{randomAtomicSchema(atomic.Type, nil)}, nil
	}
	out := make([]map[string]any, 0, len(atomic.Tags))
	for _, row := range atomic.Tags {
		out = append(out, randomAtomicSchema(atomic.Type, metadata.TagMatrix{row}))
	}
	return out, nil
}

func randomAtomicSchema(kind metadata.AtomicKind, tags metadata.TagMatrix) map[string]any {
	schema := map[string]any{"type": string(kind)}
	if kind == metadata.AtomicBigint {
		schema = map[string]any{"type": "integer", "x-typia-bigint": true}
	}
	applyTagsToAtomic(schema, tags)
	if kind == metadata.AtomicBigint {
		normalizeRandomBigintSchema(schema)
	}
	return schema
}

func normalizeRandomBigintSchema(schema map[string]any) {
	for _, key := range []string{"minimum", "maximum", "exclusiveMinimum", "exclusiveMaximum", "multipleOf"} {
		value, ok := schema[key].(string)
		if !ok {
			continue
		}
		trimmed := strings.TrimSuffix(value, "n")
		if parsed, err := strconv.ParseFloat(trimmed, 64); err == nil {
			schema[key] = parsed
		}
	}
}

func randomAtomicCall(kind metadata.AtomicKind, schema map[string]any) string {
	switch kind {
	case metadata.AtomicBoolean:
		return fmt.Sprintf("(_generator?.boolean ?? %s._randomBoolean)()", randomBooleanImportAlias)
	case metadata.AtomicString:
		if format, ok := schema["format"].(string); ok {
			if method, alias, name, ok := randomFormatHelper(format); ok {
				return fmt.Sprintf("(_generator?.%s ?? %s.%s)()", method, alias, name)
			}
		}
		if pattern, ok := schema["pattern"].(string); ok {
			return fmt.Sprintf("(_generator?.pattern ?? %s._randomPattern)(new RegExp(%s))", randomPatternImportAlias, jsonQuote(pattern))
		}
		return fmt.Sprintf("(_generator?.string ?? %s._randomString)(%s)", randomStringImportAlias, randomLiteral(schema))
	case metadata.AtomicNumber:
		if schema["type"] == "integer" {
			return fmt.Sprintf("(_generator?.integer ?? %s._randomInteger)(%s)", randomIntegerImportAlias, randomLiteral(schema))
		}
		return fmt.Sprintf("(_generator?.number ?? %s._randomNumber)(%s)", randomNumberImportAlias, randomLiteral(schema))
	case metadata.AtomicBigint:
		return fmt.Sprintf("(_generator?.bigint ?? %s._randomBigint)(%s)", randomBigintImportAlias, randomLiteral(schema))
	default:
		return "undefined"
	}
}

func randomFormatHelper(format string) (method string, alias string, name string, ok bool) {
	switch format {
	case "byte":
		return "byte", randomFormatByteImportAlias, "_randomFormatByte", true
	case "date":
		return "date", randomFormatDateImportAlias, "_randomFormatDate", true
	case "date-time":
		return "datetime", randomFormatDatetimeAlias, "_randomFormatDatetime", true
	case "duration":
		return "duration", randomFormatDurationAlias, "_randomFormatDuration", true
	case "email":
		return "email", randomFormatEmailImportAlias, "_randomFormatEmail", true
	case "hostname":
		return "hostname", randomFormatHostnameAlias, "_randomFormatHostname", true
	case "idn-email":
		return "idnEmail", randomFormatIdnEmailAlias, "_randomFormatIdnEmail", true
	case "idn-hostname":
		return "idnHostname", randomFormatIdnHostnameAlias, "_randomFormatIdnHostname", true
	case "ipv4":
		return "ipv4", randomFormatIpv4ImportAlias, "_randomFormatIpv4", true
	case "ipv6":
		return "ipv6", randomFormatIpv6ImportAlias, "_randomFormatIpv6", true
	case "iri":
		return "iri", randomFormatIriImportAlias, "_randomFormatIri", true
	case "iri-reference":
		return "iriReference", randomFormatIriRefAlias, "_randomFormatIriReference", true
	case "json-pointer":
		return "jsonPointer", randomFormatJsonPointerAlias, "_randomFormatJsonPointer", true
	case "password":
		return "password", randomFormatPasswordAlias, "_randomFormatPassword", true
	case "regex":
		return "regex", randomFormatRegexAlias, "_randomFormatRegex", true
	case "relative-json-pointer":
		return "relativeJsonPointer", randomFormatRelativeJsonAlias, "_randomFormatRelativeJsonPointer", true
	case "time":
		return "time", randomFormatTimeImportAlias, "_randomFormatTime", true
	case "uri":
		return "uri", randomFormatUriImportAlias, "_randomFormatUri", true
	case "uri-reference":
		return "uriReference", randomFormatUriReferenceAlias, "_randomFormatUriReference", true
	case "uri-template":
		return "uriTemplate", randomFormatUriTemplateAlias, "_randomFormatUriTemplate", true
	case "url":
		return "url", randomFormatUrlImportAlias, "_randomFormatUrl", true
	case "uuid":
		return "uuid", randomFormatUuidImportAlias, "_randomFormatUuid", true
	default:
		return "", "", "", false
	}
}

func (s *randomDirectState) decodeTemplate(t metadata.Template, recursive bool) string {
	pattern, ok := templateLiteralPattern(t.RawName)
	if !ok || pattern == "" {
		return fmt.Sprintf("String(%s._randomString({ type: \"string\" }))", randomStringImportAlias)
	}
	return fmt.Sprintf("(_generator?.pattern ?? %s._randomPattern)(new RegExp(%s))", randomPatternImportAlias, jsonQuote(pattern))
}

func (s *randomDirectState) decodeArray(ref *metadata.ArrayRef, recursive bool) (string, error) {
	if s.visitingArrays[ref.Type] {
		return "[]", nil
	}
	s.visitingArrays[ref.Type] = true
	defer delete(s.visitingArrays, ref.Type)
	elem, err := s.decode(ref.Type.Value, recursive || ref.Type.Recursive)
	if err != nil {
		return "", err
	}
	schema, err := randomArraySchemaLiteral(ref)
	if err != nil {
		return "", err
	}
	call := fmt.Sprintf("(_generator?.array ?? %s._randomArray)(%s)", randomArrayImportAlias, objectWithElement(schema, elem))
	if recursive || ref.Type.Recursive {
		return fmt.Sprintf("(5 >= _depth ? %s : [])", call), nil
	}
	return call, nil
}

func (s *randomDirectState) decodeTuple(tuple *metadata.TupleType, recursive bool) (string, error) {
	if s.visitingTuples[tuple] {
		return "[]", nil
	}
	s.visitingTuples[tuple] = true
	defer delete(s.visitingTuples, tuple)
	parts := make([]string, 0, len(tuple.Elements))
	for _, elem := range tuple.Elements {
		target := elem
		if elem != nil && elem.Rest != nil {
			target = elem.Rest
		}
		expr, err := s.decode(target, recursive || tuple.Recursive)
		if err != nil {
			return "", err
		}
		parts = append(parts, expr)
	}
	body := "[" + strings.Join(parts, ", ") + "]"
	if recursive || tuple.Recursive {
		return fmt.Sprintf("(5 >= _depth ? %s : [])", body), nil
	}
	return body, nil
}

func (s *randomDirectState) decodeObject(obj *metadata.ObjectType, recursive bool) string {
	name, ok := s.objects[obj]
	if !ok {
		name = fmt.Sprintf("_ro%d", obj.Index)
	}
	if recursive {
		call := fmt.Sprintf("%s(true, 1 + _depth)", name)
		if len(obj.Properties) == 0 && len(obj.DynamicProperties) != 0 {
			return fmt.Sprintf("(5 >= _depth ? %s : {})", call)
		}
		return call
	}
	return name + "()"
}

func (s *randomDirectState) objectLiteral(obj *metadata.ObjectType, recursive bool) string {
	if len(obj.Properties) == 0 && len(obj.DynamicProperties) == 0 {
		return "{}"
	}
	parts := []string{}
	for _, prop := range obj.Properties {
		if prop == nil || prop.Key == nil || prop.Value == nil {
			continue
		}
		key, ok := prop.Key.GetSoleLiteral()
		if !ok {
			continue
		}
		value, err := s.decode(prop.Value, recursive || obj.Recursive)
		if err != nil {
			value = "undefined"
		}
		parts = append(parts, randomPropertyKey(key)+": "+value)
	}
	for _, prop := range obj.DynamicProperties {
		if prop == nil || prop.Key == nil || prop.Value == nil {
			continue
		}
		expr, err := s.decodeDynamicProperty(prop, recursive || obj.Recursive)
		if err == nil {
			parts = append(parts, "..."+expr)
		}
	}
	return "({" + strings.Join(parts, ", ") + "})"
}

func (s *randomDirectState) decodeDynamicProperty(prop *metadata.Property, recursive bool) (string, error) {
	key, err := s.decode(prop.Key, recursive)
	if err != nil {
		return "", err
	}
	value, err := s.decode(prop.Value, recursive)
	if err != nil {
		return "", err
	}
	entry := "[" + key + ", " + value + "]"
	array := fmt.Sprintf("(_generator?.array ?? %s._randomArray)({ element: () => %s })", randomArrayImportAlias, entry)
	return "Object.fromEntries(" + array + ")", nil
}

func (s *randomDirectState) decodeSet(set *metadata.SetRef, recursive bool) (string, error) {
	elem, err := s.decode(set.Value, recursive)
	if err != nil {
		return "", err
	}
	array := fmt.Sprintf("(_generator?.array ?? %s._randomArray)({ element: () => %s })", randomArrayImportAlias, elem)
	call := "new Set(" + array + ")"
	if recursive {
		return "(5 >= _depth ? " + call + " : new Set())", nil
	}
	return call, nil
}

func (s *randomDirectState) decodeMap(mp *metadata.MapRef, recursive bool) (string, error) {
	key, err := s.decode(mp.Key, recursive)
	if err != nil {
		return "", err
	}
	value, err := s.decode(mp.Value, recursive)
	if err != nil {
		return "", err
	}
	entry := "[" + key + ", " + value + "]"
	array := fmt.Sprintf("(_generator?.array ?? %s._randomArray)({ element: () => %s })", randomArrayImportAlias, entry)
	call := "new Map(" + array + ")"
	if recursive {
		return "(5 >= _depth ? " + call + " : new Map())", nil
	}
	return call, nil
}

func (s *randomDirectState) decodeNative(name string, recursive bool) (string, error) {
	switch name {
	case "Boolean":
		return randomAtomicCall(metadata.AtomicBoolean, randomAtomicSchema(metadata.AtomicBoolean, nil)), nil
	case "Number":
		return randomAtomicCall(metadata.AtomicNumber, randomAtomicSchema(metadata.AtomicNumber, nil)), nil
	case "BigInt":
		return randomAtomicCall(metadata.AtomicBigint, randomAtomicSchema(metadata.AtomicBigint, nil)), nil
	case "String":
		return randomAtomicCall(metadata.AtomicString, randomAtomicSchema(metadata.AtomicString, nil)), nil
	case "Date":
		return fmt.Sprintf("new Date((_generator?.datetime ?? %s._randomFormatDatetime)())", randomFormatDatetimeAlias), nil
	case "RegExp":
		return "new RegExp(/(?:)/)", nil
	case "URL":
		return "new URL(\"https://example.com\")", nil
	case "ArrayBuffer", "SharedArrayBuffer":
		return "new " + name + "()", nil
	case "DataView":
		return "new DataView(new ArrayBuffer())", nil
	case "Blob":
		bytes, err := s.decodeNativeByteArray("Uint8Array", recursive)
		if err != nil {
			return "", err
		}
		return "new Blob([" + bytes + "])", nil
	case "File":
		bytes, err := s.decodeNativeByteArray("Uint8Array", recursive)
		if err != nil {
			return "", err
		}
		return "new File([" + bytes + "], `${" + writeRangedString(1, 8) + "}.${" + writeRangedString(3, 3) + "}`)", nil
	case "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "BigUint64Array",
		"Int8Array", "Int16Array", "Int32Array", "BigInt64Array", "Float32Array", "Float64Array":
		return s.decodeNativeByteArray(name, recursive)
	default:
		return "new " + name + "()", nil
	}
}

func (s *randomDirectState) decodeNativeByteArray(name string, recursive bool) (string, error) {
	kind, tags := nativeByteArrayAtomic(name)
	value := metadata.NewSchema()
	value.Atomics = append(value.Atomics, metadata.Atomic{Type: kind, Tags: metadata.TagMatrix{tags}})
	array := &metadata.ArrayRef{Type: &metadata.ArrayType{Name: name + "<" + string(kind) + ">", Value: value}}
	expr, err := s.decodeArray(array, recursive)
	if err != nil {
		return "", err
	}
	return "new " + name + "(" + expr + ")", nil
}

func nativeByteArrayAtomic(name string) (metadata.AtomicKind, []metadata.TypeTag) {
	typeSpec := "double"
	minimum := any(0)
	maximum := any(0)
	kind := metadata.AtomicNumber
	switch name {
	case "Uint8Array", "Uint8ClampedArray":
		typeSpec, minimum, maximum = "uint32", 0, 255
	case "Uint16Array":
		typeSpec, minimum, maximum = "uint32", 0, 65535
	case "Uint32Array":
		typeSpec, minimum, maximum = "uint32", 0, int64(4294967295)
	case "BigUint64Array":
		typeSpec, minimum, maximum, kind = "uint64", 0, int64(9007199254740991), metadata.AtomicBigint
	case "Int8Array":
		typeSpec, minimum, maximum = "int32", -128, 127
	case "Int16Array":
		typeSpec, minimum, maximum = "int32", -32768, 32767
	case "Int32Array":
		typeSpec, minimum, maximum = "int32", -2147483648, 2147483647
	case "BigInt64Array":
		typeSpec, minimum, maximum, kind = "int64", int64(-9007199254740991), int64(9007199254740991), metadata.AtomicBigint
	case "Float32Array":
		typeSpec, minimum, maximum = "float", -3.4028235e38, 3.4028235e38
	case "Float64Array":
		typeSpec, minimum, maximum = "double", -1e100, 1e100
	}
	return kind, []metadata.TypeTag{
		{Kind: "type", Target: string(kind), Value: typeSpec},
		{Kind: "minimum", Target: string(kind), Value: minimum},
		{Kind: "maximum", Target: string(kind), Value: maximum},
	}
}

func writeRangedString(min, max int) string {
	return fmt.Sprintf("(_generator?.string ?? %s._randomString)({ type: \"string\", minLength: %d, maxLength: %d })", randomStringImportAlias, min, max)
}

func randomArraySchemaLiteral(ref *metadata.ArrayRef) (string, error) {
	tmp := metadata.NewSchema()
	tmp.Arrays = append(tmp.Arrays, ref)
	encoder := newRandomSchemaEncoder()
	raw, err := encoder.encodeSchema(tmp)
	if err != nil {
		return "", err
	}
	m := toMap(raw)
	delete(m, "items")
	delete(m, "prefixItems")
	delete(m, "additionalItems")
	delete(m, "$ref")
	return randomLiteral(m), nil
}

func objectWithElement(schemaLiteral, element string) string {
	if schemaLiteral == "{}" {
		return "({ element: () => " + element + " })"
	}
	return "(" + strings.TrimSuffix(schemaLiteral, "}") + ", \"element\": () => " + element + "})"
}

func randomLiteral(value any) string {
	raw, err := json.Marshal(value)
	if err != nil {
		return "{}"
	}
	return string(raw)
}

var randomIdentifierPattern = regexp.MustCompile(`^[A-Za-z_$][A-Za-z0-9_$]*$`)

func randomPropertyKey(key string) string {
	if randomIdentifierPattern.MatchString(key) {
		return key
	}
	return jsonQuote(key)
}
