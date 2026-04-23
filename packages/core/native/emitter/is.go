// Package emitter produces JavaScript source from MetadataSchema. It is the
// Go port of `packages/core/src/programmers/IsProgrammer.ts`,
// `AssertProgrammer.ts` and `ValidateProgrammer.ts`, including the shared
// helpers in `internal/CheckerProgrammer.ts` and `iterate/check_*.ts`.
//
// The API is deliberately shaped to match typia v12: every programmer takes
// an input expression string (e.g. `input`, `$input.user.name`) and returns
// a JavaScript boolean expression. The `assert` and `validate` flavors
// produce extra path-tracking code using the same shape.
package emitter

import (
	"errors"
	"fmt"
	"sort"
	"strconv"
	"strings"

	"github.com/samchon/typia/packages/core/native/metadata"
)

// ErrUnsupportedSchema is returned for schemas the emitter cannot (yet)
// handle. Callers should leave the original call untouched when this fires.
var ErrUnsupportedSchema = errors.New("emitter: schema shape not yet supported")

// EmitIs returns a boolean JS expression that tests whether `valueExpr`
// conforms to `schema`. Handles primitives, literals, objects, arrays,
// tuples, unions, null and undefined.
func EmitIs(valueExpr string, schema *metadata.Schema) (string, error) {
	if schema == nil {
		return "", errors.New("emitter: nil schema")
	}
	if valueExpr == "" {
		return "", errors.New("emitter: empty value expression")
	}
	st := newIsState(false)
	expr, err := st.buildIs(valueExpr, schema)
	if err != nil {
		return "", err
	}
	return st.wrap(expr), nil
}

// EmitIsArrowFunction wraps EmitIs in an arrow function compatible with
// typia v12's `typia.is<T>` emit shape: `(input) => <expr>`.
func EmitIsArrowFunction(schema *metadata.Schema) (string, error) {
	return EmitIsArrowFunctionWithEquals(schema, false)
}

func EmitIsArrowFunctionWithEquals(schema *metadata.Schema, equals bool) (string, error) {
	st := newIsState(equals)
	expr, err := st.buildIs("input", schema)
	if err != nil {
		return "", err
	}
	return "(input) => " + st.wrap(expr), nil
}

// isState tracks in-progress object emissions so recursive types hoist into
// named helpers (`__is_0`, `__is_1`, …) instead of stack-overflowing.
type isState struct {
	equals bool
	// helpers collects already-hoisted helper definitions, keyed by helper
	// identifier. Values are the JS body (e.g. `(v) => (...)`).
	helpers map[string]string
	// helperOrder records insertion order so wrap() emits stable code.
	helperOrder []string
	// helper names keyed by recursive container type.
	objectHelpers map[*metadata.ObjectType]string
	arrayHelpers  map[*metadata.ArrayType]string
	tupleHelpers  map[*metadata.TupleType]string
	// visiting tracks which recursive container types are currently on the
	// emit stack. Revisiting a visited type means the type must be routed
	// through a helper.
	visitingObjects map[*metadata.ObjectType]bool
	visitingArrays  map[*metadata.ArrayType]bool
	visitingTuples  map[*metadata.TupleType]bool
	tempIndex       int
}

func newIsState(equals bool) *isState {
	return &isState{
		equals:          equals,
		helpers:         make(map[string]string),
		objectHelpers:   make(map[*metadata.ObjectType]string),
		arrayHelpers:    make(map[*metadata.ArrayType]string),
		tupleHelpers:    make(map[*metadata.TupleType]string),
		visitingObjects: make(map[*metadata.ObjectType]bool),
		visitingArrays:  make(map[*metadata.ArrayType]bool),
		visitingTuples:  make(map[*metadata.TupleType]bool),
	}
}

// wrap materializes hoisted helpers around `body` when recursion was detected.
// For non-recursive schemas this is a pass-through, so the common case keeps
// the compact single-expression shape.
func (s *isState) wrap(body string) string {
	if len(s.helpers) == 0 {
		return body
	}
	var b strings.Builder
	b.WriteString("(() => { ")
	for _, name := range s.helperOrder {
		b.WriteString("const ")
		b.WriteString(name)
		b.WriteString(" = ")
		b.WriteString(s.helpers[name])
		b.WriteString("; ")
	}
	b.WriteString("return ")
	b.WriteString(body)
	b.WriteString("; })()")
	return b.String()
}

// reserveHelper assigns a stable name to `obj` and registers insertion order.
func (s *isState) reserveObjectHelper(obj *metadata.ObjectType) string {
	if name, ok := s.objectHelpers[obj]; ok {
		return name
	}
	name := s.reserveHelperName()
	s.objectHelpers[obj] = name
	return name
}

func (s *isState) reserveArrayHelper(arr *metadata.ArrayType) string {
	if name, ok := s.arrayHelpers[arr]; ok {
		return name
	}
	name := s.reserveHelperName()
	s.arrayHelpers[arr] = name
	return name
}

func (s *isState) reserveTupleHelper(tuple *metadata.TupleType) string {
	if name, ok := s.tupleHelpers[tuple]; ok {
		return name
	}
	name := s.reserveHelperName()
	s.tupleHelpers[tuple] = name
	return name
}

func (s *isState) reserveHelperName() string {
	name := fmt.Sprintf("__is_%d", len(s.helperOrder))
	s.helperOrder = append(s.helperOrder, name)
	return name
}

func (s *isState) fresh(prefix string) string {
	name := fmt.Sprintf("__%s_%d", prefix, s.tempIndex)
	s.tempIndex++
	return name
}

// buildIs is the recursive worker. It mirrors typia's
// `CheckerProgrammer.decode` and the fan-out in `iterate/check_*.ts`.
func (s *isState) buildIs(ve string, sc *metadata.Schema) (string, error) {
	if sc.Any {
		return "true", nil
	}

	alternatives := make([]string, 0, sc.Bucket()+2)

	// Nullable / optional modifier short-circuits.
	if sc.Nullable {
		alternatives = append(alternatives, "null === "+ve)
	}
	if !sc.IsRequired() {
		alternatives = append(alternatives, "undefined === "+ve)
	}

	// Atomics (+ attached tags).
	for _, atom := range sc.Atomics {
		base := atomicCheck(ve, atom.Type)
		if base == "" {
			continue
		}
		alternatives = append(alternatives, atomicWithTags(base, ve, atom.Tags))
	}

	// Literal constants.
	for _, c := range sc.Constants {
		for _, v := range c.Values {
			if e := constantCheck(ve, c.Type, v.Value); e != "" {
				alternatives = append(alternatives, e)
			}
		}
	}
	for _, t := range sc.Templates {
		if e := templateCheck(ve, t); e != "" {
			alternatives = append(alternatives, e)
		}
	}

	// Arrays.
	for _, ref := range sc.Arrays {
		a, err := s.emitArrayCheck(ve, ref)
		if err != nil {
			return "", err
		}
		alternatives = append(alternatives, a)
	}

	// Tuples.
	for _, ref := range sc.Tuples {
		a, err := s.emitTupleCheck(ve, ref)
		if err != nil {
			return "", err
		}
		alternatives = append(alternatives, a)
	}

	// Objects.
	if len(sc.Objects) != 0 {
		a, err := s.emitObjectUnionCheck(ve, sc.Objects)
		if err != nil {
			return "", err
		}
		alternatives = append(alternatives, a)
	}

	// Native classes — `input instanceof Date`-style check.
	for _, n := range sc.Natives {
		alternatives = append(alternatives, nativeCheckExpr(ve, n.Name))
	}
	for _, ref := range sc.Sets {
		expr, err := s.emitSetCheck(ve, ref)
		if err != nil {
			return "", err
		}
		alternatives = append(alternatives, expr)
	}
	for _, ref := range sc.Maps {
		expr, err := s.emitMapCheck(ve, ref)
		if err != nil {
			return "", err
		}
		alternatives = append(alternatives, expr)
	}
	if len(sc.Functions) != 0 {
		alternatives = append(alternatives, `"function" === typeof `+ve)
	}

	if len(alternatives) == 0 {
		return "", fmt.Errorf("%w: empty schema", ErrUnsupportedSchema)
	}
	if len(alternatives) == 1 {
		return alternatives[0], nil
	}
	// Stable ordering so test diffs are deterministic.
	sort.Strings(alternatives)
	return "(" + strings.Join(alternatives, " || ") + ")", nil
}

func (s *isState) emitSetCheck(ve string, ref *metadata.SetRef) (string, error) {
	if ref == nil {
		return "", fmt.Errorf("%w: nil set ref", ErrUnsupportedSchema)
	}
	elemCheck := "true"
	if ref.Value != nil {
		check, err := s.buildIs("elem", ref.Value)
		if err != nil {
			return "", err
		}
		elemCheck = check
	}
	base := ve + " instanceof Set && Array.from(" + ve + `.values()).every((elem) => ` + elemCheck + ")"
	return atomicWithTags(base, ve, ref.Tags), nil
}

func (s *isState) emitMapCheck(ve string, ref *metadata.MapRef) (string, error) {
	if ref == nil {
		return "", fmt.Errorf("%w: nil map ref", ErrUnsupportedSchema)
	}
	keyCheck := "true"
	if ref.Key != nil {
		check, err := s.buildIs("key", ref.Key)
		if err != nil {
			return "", err
		}
		keyCheck = check
	}
	valueCheck := "true"
	if ref.Value != nil {
		check, err := s.buildIs("value", ref.Value)
		if err != nil {
			return "", err
		}
		valueCheck = check
	}
	base := ve + " instanceof Map && Array.from(" + ve + `.entries()).every(([key, value]) => ` + keyCheck + " && " + valueCheck + ")"
	return atomicWithTags(base, ve, ref.Tags), nil
}

// atomicCheck returns the JS expression for a primitive atomic type.
func atomicCheck(ve string, kind metadata.AtomicKind) string {
	switch kind {
	case metadata.AtomicBoolean:
		return `"boolean" === typeof ` + ve
	case metadata.AtomicNumber:
		return `"number" === typeof ` + ve + ` && Number.isFinite(` + ve + `)`
	case metadata.AtomicBigint:
		return `"bigint" === typeof ` + ve
	case metadata.AtomicString:
		return `"string" === typeof ` + ve
	}
	return ""
}

func nativeCheckExpr(ve string, name string) string {
	switch name {
	case "Boolean":
		return `("boolean" === typeof ` + ve + ` || ` + ve + ` instanceof Boolean)`
	case "Number":
		return `(("number" === typeof ` + ve + ` && Number.isFinite(` + ve + `)) || ` + ve + ` instanceof Number)`
	case "String":
		return `("string" === typeof ` + ve + ` || ` + ve + ` instanceof String)`
	default:
		return ve + " instanceof " + name
	}
}

// constantCheck returns the JS expression for a literal value check.
func constantCheck(ve string, kind metadata.AtomicKind, value any) string {
	switch kind {
	case metadata.AtomicString:
		if s, ok := value.(string); ok {
			return jsonQuote(s) + " === " + ve
		}
	case metadata.AtomicNumber:
		return numberLiteral(value) + " === " + ve
	case metadata.AtomicBigint:
		return numberLiteral(value) + "n === " + ve
	case metadata.AtomicBoolean:
		if b, ok := value.(bool); ok {
			if b {
				return "true === " + ve
			}
			return "false === " + ve
		}
	}
	return ""
}

func templateCheck(ve string, t metadata.Template) string {
	pattern, ok := templateLiteralPattern(t.RawName)
	if !ok {
		return `"string" === typeof ` + ve
	}
	return atomicWithTags(`("string" === typeof `+ve+` && new RegExp(`+jsonQuote(pattern)+`).test(`+ve+`))`, ve, t.Tags)
}

// emitArrayCheck covers `T[]` / `Array<T>`.
func (s *isState) emitArrayCheck(ve string, ref *metadata.ArrayRef) (string, error) {
	if ref == nil || ref.Type == nil {
		return "", fmt.Errorf("%w: nil array ref", ErrUnsupportedSchema)
	}
	if name, ok := s.arrayHelpers[ref.Type]; ok && !s.visitingArrays[ref.Type] {
		return atomicWithTags(name+"("+ve+")", ve, ref.Tags), nil
	}
	if s.visitingArrays[ref.Type] {
		name := s.reserveArrayHelper(ref.Type)
		return atomicWithTags(name+"("+ve+")", ve, ref.Tags), nil
	}

	s.visitingArrays[ref.Type] = true
	defer delete(s.visitingArrays, ref.Type)

	elemExpr := "elem"
	elemCheck := "true"
	if ref.Type.Value != nil {
		e, err := s.buildIs(elemExpr, ref.Type.Value)
		if err != nil {
			return "", err
		}
		elemCheck = e
	}
	body := "Array.isArray(v) && v.every((" + elemExpr + ") => " + elemCheck + ")"
	if name, ok := s.arrayHelpers[ref.Type]; ok {
		s.helpers[name] = "(v) => " + body
		return atomicWithTags(name+"("+ve+")", ve, ref.Tags), nil
	}
	return atomicWithTags("Array.isArray("+ve+") && "+ve+".every(("+elemExpr+") => "+elemCheck+")", ve, ref.Tags), nil
}

// emitTupleCheck covers fixed-length tuples.
func (s *isState) emitTupleCheck(ve string, ref *metadata.TupleRef) (string, error) {
	if ref == nil || ref.Type == nil {
		return "", fmt.Errorf("%w: nil tuple ref", ErrUnsupportedSchema)
	}
	if name, ok := s.tupleHelpers[ref.Type]; ok && !s.visitingTuples[ref.Type] {
		return atomicWithTags(name+"("+ve+")", ve, ref.Tags), nil
	}
	if s.visitingTuples[ref.Type] {
		name := s.reserveTupleHelper(ref.Type)
		return atomicWithTags(name+"("+ve+")", ve, ref.Tags), nil
	}

	s.visitingTuples[ref.Type] = true
	defer delete(s.visitingTuples, ref.Type)

	t := ref.Type
	inline := []string{"Array.isArray(" + ve + ")"}
	body := []string{"Array.isArray(v)"}
	if lengthCheck := tupleLengthCheckExpr(ve, t.Elements); lengthCheck != "" {
		inline = append(inline, lengthCheck)
	}
	if lengthCheck := tupleLengthCheckExpr("v", t.Elements); lengthCheck != "" {
		body = append(body, lengthCheck)
	}
	restStart := len(t.Elements)
	if tupleHasRest(t.Elements) {
		restStart--
	}
	for i, el := range t.Elements {
		if el != nil && el.Rest != nil {
			restInlineVar := "__elem"
			restBodyVar := "__rest"
			inlineCheck, err := s.buildIs(restInlineVar, el.Rest)
			if err != nil {
				return "", err
			}
			bodyCheck, err := s.buildIs(restBodyVar, el.Rest)
			if err != nil {
				return "", err
			}
			inline = append(inline, ve+".slice("+intString(int64(restStart))+").every(("+restInlineVar+") => "+inlineCheck+")")
			body = append(body, "v.slice("+intString(int64(restStart))+").every(("+restBodyVar+") => "+bodyCheck+")")
			break
		}
		index := intString(int64(i))
		inlineExpr := ve + "[" + index + "]"
		bodyExpr := "v[" + index + "]"
		inlineCheck, err := s.buildIs(inlineExpr, el)
		if err != nil {
			return "", err
		}
		bodyCheck, err := s.buildIs(bodyExpr, el)
		if err != nil {
			return "", err
		}
		if el != nil && el.Optional {
			inlineCheck = "(" + inlineExpr + " === undefined || " + inlineCheck + ")"
			bodyCheck = "(" + bodyExpr + " === undefined || " + bodyCheck + ")"
		}
		inline = append(inline, inlineCheck)
		body = append(body, bodyCheck)
	}
	if name, ok := s.tupleHelpers[ref.Type]; ok {
		s.helpers[name] = "(v) => (" + strings.Join(body, " && ") + ")"
		return atomicWithTags(name+"("+ve+")", ve, ref.Tags), nil
	}
	return atomicWithTags("("+strings.Join(inline, " && ")+")", ve, ref.Tags), nil
}

func tupleHasRest(elements []*metadata.Schema) bool {
	return len(elements) != 0 && elements[len(elements)-1] != nil && elements[len(elements)-1].Rest != nil
}

func (s *isState) emitObjectUnionCheck(ve string, refs []*metadata.ObjectRef) (string, error) {
	if len(refs) == 1 {
		return s.emitObjectCheck(ve, refs[0])
	}
	specialized, remained := objectUnionSpecializers(refs)
	if len(specialized) != 0 {
		var remainedExpr string
		if len(remained) != 0 {
			var err error
			remainedExpr, err = s.emitObjectUnionCheck(ve, remained)
			if err != nil {
				return "", err
			}
		}

		var b strings.Builder
		b.WriteString(`("object" === typeof `)
		b.WriteString(ve)
		b.WriteString(` && null !== `)
		b.WriteString(ve)
		b.WriteString(` && false === Array.isArray(`)
		b.WriteString(ve)
		b.WriteString(`) ? (() => { `)
		for _, group := range objectUnionSpecializerGroups(specialized) {
			b.WriteString(`{ const __matched = []; `)
			for _, spec := range group {
				accessor := accessProperty(ve, spec.key)
				check, err := s.emitObjectCheck(ve, spec.ref)
				if err != nil {
					return "", err
				}
				predicate, err := objectUnionDiagnosticPredicate(accessor, spec.value, spec.neighbor, s.equals)
				if err != nil {
					return "", err
				}
				b.WriteString(`if (`)
				b.WriteString(predicate)
				b.WriteString(`) __matched.push(`)
				b.WriteString(check)
				b.WriteString(`); `)
			}
			b.WriteString(`if (__matched.length !== 0) return __matched.some((value) => value); } `)
		}
		if remainedExpr != "" {
			b.WriteString(`return `)
			b.WriteString(remainedExpr)
			b.WriteString(`; `)
		} else {
			b.WriteString(`return false; `)
		}
		b.WriteString(`})() : false)`)
		return b.String(), nil
	}
	plain := make([]string, 0, len(refs))
	for _, ref := range refs {
		chunk, err := s.emitObjectCheck(ve, ref)
		if err != nil {
			return "", err
		}
		plain = append(plain, chunk)
	}
	sort.Strings(plain)
	return "(" + strings.Join(plain, " || ") + ")", nil
}

func tupleLengthCheckExpr(valueExpr string, elements []*metadata.Schema) string {
	required := 0
	for _, element := range elements {
		if element == nil || element.Rest != nil {
			continue
		}
		if !element.Optional {
			required++
		}
	}
	if tupleHasRest(elements) {
		return valueExpr + ".length >= " + intString(int64(required))
	}
	if required == len(elements) {
		return valueExpr + ".length === " + intString(int64(len(elements)))
	}
	return "(" +
		valueExpr + ".length >= " + intString(int64(required)) +
		" && " +
		valueExpr + ".length <= " + intString(int64(len(elements))) +
		")"
}

// emitObjectCheck covers object types (interfaces, type literals). Recursive
// types are hoisted into a helper named `__is_N` so the emitted JS is finite
// even when the IR contains a back-edge.
func (s *isState) emitObjectCheck(ve string, ref *metadata.ObjectRef) (string, error) {
	if ref == nil || ref.Type == nil {
		return "", fmt.Errorf("%w: nil object ref", ErrUnsupportedSchema)
	}
	obj := ref.Type
	if name, ok := s.objectHelpers[obj]; ok && !s.visitingObjects[obj] {
		return atomicWithTags(name+"("+ve+")", ve, ref.Tags), nil
	}
	if s.visitingObjects[obj] {
		name := s.reserveObjectHelper(obj)
		return atomicWithTags(name+"("+ve+")", ve, ref.Tags), nil
	}

	name := s.reserveObjectHelper(obj)
	s.visitingObjects[obj] = true
	defer delete(s.visitingObjects, obj)

	body, err := s.emitObjectBody("v", obj)
	if err != nil {
		return "", err
	}
	s.helpers[name] = "(v) => " + body
	return atomicWithTags(name+"("+ve+")", ve, ref.Tags), nil
}

// emitObjectBody returns the bare expression body (no receiver substitution)
// for an object check. Used both inline and as the body of a hoisted helper.
func (s *isState) emitObjectBody(ve string, obj *metadata.ObjectType) (string, error) {
	parts := []string{
		`"object" === typeof ` + ve,
		"null !== " + ve,
		"false === Array.isArray(" + ve + ")",
	}
	props, dynamicProps := splitObjectProperties(obj)
	literalKeys := make([]string, 0, len(props))
	for _, p := range props {
		name, ok := p.Key.GetSoleLiteral()
		if !ok {
			continue
		}
		literalKeys = append(literalKeys, name)
		propExpr := accessProperty(ve, name)
		check, err := s.buildIs(propExpr, p.Value)
		if err != nil {
			return "", err
		}
		parts = append(parts, check)
	}
	allowed := make([]string, 0, len(literalKeys))
	for _, key := range literalKeys {
		allowed = append(allowed, jsonQuote(key))
	}
	if len(dynamicProps) != 0 {
		dynamicChecks := make([]string, 0, len(dynamicProps))
		keyVar := s.fresh("key")
		for _, prop := range dynamicProps {
			if prop == nil || prop.Key == nil || prop.Value == nil {
				continue
			}
			keyCheck, err := dynamicKeyCheck(keyVar, prop.Key)
			if err != nil {
				return "", err
			}
			valueCheck, err := s.buildIs(ve+"["+keyVar+"]", prop.Value)
			if err != nil {
				return "", err
			}
			dynamicChecks = append(dynamicChecks, "(("+keyCheck+") && ("+valueCheck+"))")
		}
		predicate := "false"
		if len(dynamicChecks) != 0 {
			predicate = strings.Join(dynamicChecks, " || ")
		}
		if len(allowed) != 0 {
			predicate = "[" + strings.Join(allowed, ", ") + `].includes(` + keyVar + `) || (` + predicate + ")"
		}
		parts = append(
			parts,
			"Object.keys("+ve+").every(("+keyVar+") => "+predicate+")",
		)
	} else if obj.AdditionalProperties != nil {
		keyVar := s.fresh("key")
		check, err := s.buildIs(ve+"["+keyVar+"]", obj.AdditionalProperties)
		if err != nil {
			return "", err
		}
		predicate := "(" + check + ")"
		if len(allowed) != 0 {
			predicate = "[" + strings.Join(allowed, ", ") + `].includes(` + keyVar + `) || ` + predicate
		}
		parts = append(
			parts,
			"Object.keys("+ve+").every(("+keyVar+") => "+predicate+")",
		)
	} else if s.equals {
		keyVar := s.fresh("key")
		parts = append(
			parts,
			"Object.keys("+ve+").every(("+keyVar+") => ["+strings.Join(allowed, ", ")+`].includes(`+keyVar+`))`,
		)
	}
	return "(" + strings.Join(parts, " && ") + ")", nil
}

// accessProperty produces either `obj.name` or `obj["name"]` depending on
// whether `name` is a safe JS identifier.
func accessProperty(ve, name string) string {
	if isIdentifier(name) {
		return ve + "." + name
	}
	return ve + "[" + jsonQuote(name) + "]"
}

func isIdentifier(s string) bool {
	if s == "" {
		return false
	}
	for i, r := range s {
		if i == 0 && !(isAlpha(r) || r == '_' || r == '$') {
			return false
		}
		if i > 0 && !(isAlpha(r) || isDigit(r) || r == '_' || r == '$') {
			return false
		}
	}
	return true
}

func isAlpha(r rune) bool { return (r >= 'a' && r <= 'z') || (r >= 'A' && r <= 'Z') }
func isDigit(r rune) bool { return r >= '0' && r <= '9' }

func templateLiteralPattern(raw string) (string, bool) {
	if len(raw) < 2 || raw[0] != '`' || raw[len(raw)-1] != '`' {
		return "", false
	}
	body := raw[1 : len(raw)-1]
	var b strings.Builder
	b.WriteString("^")
	for len(body) != 0 {
		index := strings.Index(body, "${")
		if index == -1 {
			b.WriteString(regexpEscape(body))
			break
		}
		b.WriteString(regexpEscape(body[:index]))
		body = body[index+2:]
		end := strings.IndexByte(body, '}')
		if end == -1 {
			return "", false
		}
		pattern, ok := templatePlaceholderPattern(strings.TrimSpace(body[:end]))
		if !ok {
			return "", false
		}
		b.WriteString(pattern)
		body = body[end+1:]
	}
	b.WriteString("$")
	return b.String(), true
}

func templatePlaceholderPattern(placeholder string) (string, bool) {
	if placeholder == "" {
		return "", false
	}
	items := strings.Split(placeholder, "|")
	patterns := make([]string, 0, len(items))
	for _, item := range items {
		pattern, ok := templatePlaceholderItemPattern(strings.TrimSpace(item))
		if !ok {
			return "", false
		}
		if pattern == ".*" {
			return ".*", true
		}
		patterns = append(patterns, pattern)
	}
	if len(patterns) == 1 {
		return patterns[0], true
	}
	sort.Strings(patterns)
	return "(?:" + strings.Join(patterns, "|") + ")", true
}

func templatePlaceholderItemPattern(item string) (string, bool) {
	switch item {
	case "string":
		return ".*", true
	case "number":
		return `-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?`, true
	case "bigint":
		return `-?(?:0|[1-9]\d*)`, true
	case "boolean":
		return `(?:true|false)`, true
	case "true", "false":
		return regexpEscape(item), true
	}
	if len(item) >= 2 && ((item[0] == '"' && item[len(item)-1] == '"') || (item[0] == '\'' && item[len(item)-1] == '\'')) {
		return regexpEscape(item[1 : len(item)-1]), true
	}
	if strings.HasSuffix(item, "n") {
		base := strings.TrimSuffix(item, "n")
		if _, err := strconv.ParseInt(base, 10, 64); err == nil {
			return regexpEscape(base), true
		}
	}
	if _, err := strconv.ParseFloat(item, 64); err == nil {
		return regexpEscape(item), true
	}
	return "", false
}

func regexpEscape(input string) string {
	var b strings.Builder
	for _, r := range input {
		switch r {
		case '\\', '.', '+', '*', '?', '(', ')', '[', ']', '{', '}', '|', '^', '$':
			b.WriteByte('\\')
		}
		b.WriteRune(r)
	}
	return b.String()
}

// jsonQuote returns a JSON-escaped string literal.
func jsonQuote(s string) string {
	var b strings.Builder
	b.Grow(len(s) + 2)
	b.WriteByte('"')
	for _, r := range s {
		switch r {
		case '"':
			b.WriteString(`\"`)
		case '\\':
			b.WriteString(`\\`)
		case '\n':
			b.WriteString(`\n`)
		case '\r':
			b.WriteString(`\r`)
		case '\t':
			b.WriteString(`\t`)
		default:
			if r < 0x20 {
				b.WriteString(fmt.Sprintf(`\u%04x`, r))
			} else {
				b.WriteRune(r)
			}
		}
	}
	b.WriteByte('"')
	return b.String()
}

// numberLiteral renders a literal number value.
func numberLiteral(v any) string {
	switch t := v.(type) {
	case string:
		return t
	case int:
		return intString(int64(t))
	case int8:
		return intString(int64(t))
	case int16:
		return intString(int64(t))
	case int32:
		return intString(int64(t))
	case int64:
		return intString(t)
	case uint:
		return uintString(uint64(t))
	case uint8:
		return uintString(uint64(t))
	case uint16:
		return uintString(uint64(t))
	case uint32:
		return uintString(uint64(t))
	case uint64:
		return uintString(t)
	case float32:
		f := float64(t)
		if f == float64(int64(f)) {
			return intString(int64(f))
		}
		return formatFloatG(f)
	case float64:
		if t == float64(int64(t)) {
			return intString(int64(t))
		}
		return formatFloatG(t)
	case interface{ String() string }:
		return t.String()
	}
	return "0"
}

func intString(n int64) string {
	if n == 0 {
		return "0"
	}
	neg := n < 0
	if neg {
		n = -n
	}
	var buf [20]byte
	i := len(buf)
	for n > 0 {
		i--
		buf[i] = byte('0' + n%10)
		n /= 10
	}
	if neg {
		i--
		buf[i] = '-'
	}
	return string(buf[i:])
}

func uintString(n uint64) string {
	if n == 0 {
		return "0"
	}
	var buf [20]byte
	i := len(buf)
	for n > 0 {
		i--
		buf[i] = byte('0' + n%10)
		n /= 10
	}
	return string(buf[i:])
}
