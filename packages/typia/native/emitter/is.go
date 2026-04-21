// Package emitter produces JavaScript source from MetadataSchema. It is the
// Go port of `packages/core/src/programmers/IsProgrammer.ts`,
// `AssertProgrammer.ts` and `ValidateProgrammer.ts`, including the shared
// helpers in `internal/CheckerProgrammer.ts` and `iterate/check_*.ts`.
//
// The API is deliberately shaped to match typia v12: every programmer takes
// an input expression string (e.g. `input`, `$input.user.name`) and returns
// a JavaScript boolean expression. The `assert` and `validate` flavours
// produce extra path-tracking code using the same shape.
package emitter

import (
	"errors"
	"fmt"
	"sort"
	"strings"

	"github.com/samchon/typia/packages/typia/native/metadata"
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
	st := newIsState()
	expr, err := st.buildIs(valueExpr, schema)
	if err != nil {
		return "", err
	}
	return st.wrap(expr), nil
}

// EmitIsArrowFunction wraps EmitIs in an arrow function compatible with
// typia v12's `typia.is<T>` emit shape: `(input) => <expr>`.
func EmitIsArrowFunction(schema *metadata.Schema) (string, error) {
	st := newIsState()
	expr, err := st.buildIs("input", schema)
	if err != nil {
		return "", err
	}
	return "(input) => " + st.wrap(expr), nil
}

// isState tracks in-progress object emissions so recursive types hoist into
// named helpers (`__is_0`, `__is_1`, …) instead of stack-overflowing.
type isState struct {
	// helpers collects already-hoisted helper definitions, keyed by the
	// ObjectType pointer. Values are the JS body (e.g. `(v) => (...)`).
	helpers map[*metadata.ObjectType]string
	// helperName maps ObjectType → generated helper identifier.
	helperName map[*metadata.ObjectType]string
	// visiting tracks which ObjectTypes are currently on the emit stack.
	// Revisiting a visited type means the type is recursive and must be
	// routed through a helper.
	visiting map[*metadata.ObjectType]bool
	// helperOrder records insertion order so wrap() emits stable code.
	helperOrder []*metadata.ObjectType
}

func newIsState() *isState {
	return &isState{
		helpers:    make(map[*metadata.ObjectType]string),
		helperName: make(map[*metadata.ObjectType]string),
		visiting:   make(map[*metadata.ObjectType]bool),
	}
}

// wrap materialises hoisted helpers around `body` when recursion was detected.
// For non-recursive schemas this is a pass-through, so the common case keeps
// the compact single-expression shape.
func (s *isState) wrap(body string) string {
	if len(s.helpers) == 0 {
		return body
	}
	var b strings.Builder
	b.WriteString("(() => { ")
	for _, obj := range s.helperOrder {
		b.WriteString("const ")
		b.WriteString(s.helperName[obj])
		b.WriteString(" = ")
		b.WriteString(s.helpers[obj])
		b.WriteString("; ")
	}
	b.WriteString("return ")
	b.WriteString(body)
	b.WriteString("; })()")
	return b.String()
}

// reserveHelper assigns a stable name to `obj` and registers insertion order.
func (s *isState) reserveHelper(obj *metadata.ObjectType) string {
	if name, ok := s.helperName[obj]; ok {
		return name
	}
	name := fmt.Sprintf("__is_%d", len(s.helperName))
	s.helperName[obj] = name
	s.helperOrder = append(s.helperOrder, obj)
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
	for _, ref := range sc.Objects {
		a, err := s.emitObjectCheck(ve, ref)
		if err != nil {
			return "", err
		}
		alternatives = append(alternatives, a)
	}

	// Native classes — `input instanceof Date`-style check.
	for _, n := range sc.Natives {
		alternatives = append(alternatives, ve+" instanceof "+n.Name)
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

// atomicCheck returns the JS expression for a primitive atomic type.
func atomicCheck(ve string, kind metadata.AtomicKind) string {
	switch kind {
	case metadata.AtomicBoolean:
		return `"boolean" === typeof ` + ve
	case metadata.AtomicNumber:
		return `"number" === typeof ` + ve
	case metadata.AtomicBigint:
		return `"bigint" === typeof ` + ve
	case metadata.AtomicString:
		return `"string" === typeof ` + ve
	}
	return ""
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

// emitArrayCheck covers `T[]` / `Array<T>`.
func (s *isState) emitArrayCheck(ve string, ref *metadata.ArrayRef) (string, error) {
	if ref == nil || ref.Type == nil {
		return "", fmt.Errorf("%w: nil array ref", ErrUnsupportedSchema)
	}
	elemExpr := "elem"
	elemCheck := "true"
	if ref.Type.Value != nil {
		e, err := s.buildIs(elemExpr, ref.Type.Value)
		if err != nil {
			return "", err
		}
		elemCheck = e
	}
	return "Array.isArray(" + ve + ") && " + ve + ".every((" + elemExpr + ") => " + elemCheck + ")", nil
}

// emitTupleCheck covers fixed-length tuples.
func (s *isState) emitTupleCheck(ve string, ref *metadata.TupleRef) (string, error) {
	if ref == nil || ref.Type == nil {
		return "", fmt.Errorf("%w: nil tuple ref", ErrUnsupportedSchema)
	}
	t := ref.Type
	parts := []string{"Array.isArray(" + ve + ")", ve + ".length === " + intString(int64(len(t.Elements)))}
	for i, el := range t.Elements {
		index := intString(int64(i))
		elExpr := ve + "[" + index + "]"
		e, err := s.buildIs(elExpr, el)
		if err != nil {
			return "", err
		}
		parts = append(parts, e)
	}
	return "(" + strings.Join(parts, " && ") + ")", nil
}

// emitObjectCheck covers object types (interfaces, type literals). Recursive
// types are hoisted into a helper named `__is_N` so the emitted JS is finite
// even when the IR contains a back-edge.
func (s *isState) emitObjectCheck(ve string, ref *metadata.ObjectRef) (string, error) {
	if ref == nil || ref.Type == nil {
		return "", fmt.Errorf("%w: nil object ref", ErrUnsupportedSchema)
	}
	obj := ref.Type
	// Already-emitted helper → just call it.
	if name, ok := s.helperName[obj]; ok && !s.visiting[obj] {
		return name + "(" + ve + ")", nil
	}
	// Currently visiting → cycle detected, reserve a helper and forward.
	if s.visiting[obj] {
		name := s.reserveHelper(obj)
		return name + "(" + ve + ")", nil
	}

	s.visiting[obj] = true
	defer delete(s.visiting, obj)

	body, err := s.emitObjectBody("v", obj)
	if err != nil {
		return "", err
	}
	// If a recursive reference fired during body emission, promote the
	// type to a helper and return a call.
	if _, ok := s.helperName[obj]; ok {
		s.helpers[obj] = "(v) => " + body
		return s.helperName[obj] + "(" + ve + ")", nil
	}
	// No recursion — inline the check at the call site for the simple case.
	return s.inlineObjectBody(ve, obj)
}

// emitObjectBody returns the bare expression body (no receiver substitution)
// for an object check. Used both inline and as the body of a hoisted helper.
func (s *isState) emitObjectBody(ve string, obj *metadata.ObjectType) (string, error) {
	parts := []string{
		`"object" === typeof ` + ve,
		"null !== " + ve,
		"false === Array.isArray(" + ve + ")",
	}
	props := make([]*metadata.Property, len(obj.Properties))
	copy(props, obj.Properties)
	sort.Slice(props, func(i, j int) bool {
		ki, _ := props[i].Key.GetSoleLiteral()
		kj, _ := props[j].Key.GetSoleLiteral()
		return ki < kj
	})
	for _, p := range props {
		name, ok := p.Key.GetSoleLiteral()
		if !ok {
			continue
		}
		propExpr := accessProperty(ve, name)
		check, err := s.buildIs(propExpr, p.Value)
		if err != nil {
			return "", err
		}
		parts = append(parts, check)
	}
	return "(" + strings.Join(parts, " && ") + ")", nil
}

// inlineObjectBody re-emits the object check against `ve` for the simple
// (non-recursive) case so the emitted JS keeps typia v12's compact shape.
func (s *isState) inlineObjectBody(ve string, obj *metadata.ObjectType) (string, error) {
	return s.emitObjectBody(ve, obj)
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
	case int64:
		return intString(t)
	case float64:
		if t == float64(int64(t)) {
			return intString(int64(t))
		}
		return formatFloatG(t)
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
