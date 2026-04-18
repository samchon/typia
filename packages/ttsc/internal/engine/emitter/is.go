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

	"github.com/samchon/typia/packages/ttsc/internal/engine/metadata"
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
	expr, err := buildIs(valueExpr, schema)
	if err != nil {
		return "", err
	}
	return expr, nil
}

// EmitIsArrowFunction wraps EmitIs in an arrow function compatible with
// typia v12's `typia.is<T>` emit shape: `(input) => <expr>`.
func EmitIsArrowFunction(schema *metadata.Schema) (string, error) {
	expr, err := EmitIs("input", schema)
	if err != nil {
		return "", err
	}
	return "(input) => " + expr, nil
}

// buildIs is the recursive worker. It mirrors typia's
// `CheckerProgrammer.decode` and the fan-out in `iterate/check_*.ts`.
func buildIs(ve string, s *metadata.Schema) (string, error) {
	if s.Any {
		return "true", nil
	}

	alternatives := make([]string, 0, s.Bucket()+2)

	// Nullable / optional modifier short-circuits.
	if s.Nullable {
		alternatives = append(alternatives, "null === "+ve)
	}
	if !s.IsRequired() {
		alternatives = append(alternatives, "undefined === "+ve)
	}

	// Atomics.
	for _, atom := range s.Atomics {
		if a := atomicCheck(ve, atom.Type); a != "" {
			alternatives = append(alternatives, a)
		}
	}

	// Literal constants.
	for _, c := range s.Constants {
		for _, v := range c.Values {
			if e := constantCheck(ve, c.Type, v.Value); e != "" {
				alternatives = append(alternatives, e)
			}
		}
	}

	// Arrays.
	for _, ref := range s.Arrays {
		a, err := emitArrayCheck(ve, ref)
		if err != nil {
			return "", err
		}
		alternatives = append(alternatives, a)
	}

	// Tuples.
	for _, ref := range s.Tuples {
		a, err := emitTupleCheck(ve, ref)
		if err != nil {
			return "", err
		}
		alternatives = append(alternatives, a)
	}

	// Objects.
	for _, ref := range s.Objects {
		a, err := emitObjectCheck(ve, ref)
		if err != nil {
			return "", err
		}
		alternatives = append(alternatives, a)
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
func emitArrayCheck(ve string, ref *metadata.ArrayRef) (string, error) {
	if ref == nil || ref.Type == nil {
		return "", fmt.Errorf("%w: nil array ref", ErrUnsupportedSchema)
	}
	elemExpr := "elem"
	elemCheck := "true"
	if ref.Type.Value != nil {
		e, err := buildIs(elemExpr, ref.Type.Value)
		if err != nil {
			return "", err
		}
		elemCheck = e
	}
	return "Array.isArray(" + ve + ") && " + ve + ".every((" + elemExpr + ") => " + elemCheck + ")", nil
}

// emitTupleCheck covers fixed-length tuples.
func emitTupleCheck(ve string, ref *metadata.TupleRef) (string, error) {
	if ref == nil || ref.Type == nil {
		return "", fmt.Errorf("%w: nil tuple ref", ErrUnsupportedSchema)
	}
	t := ref.Type
	parts := []string{"Array.isArray(" + ve + ")", ve + ".length === " + intString(int64(len(t.Elements)))}
	for i, el := range t.Elements {
		index := intString(int64(i))
		elExpr := ve + "[" + index + "]"
		e, err := buildIs(elExpr, el)
		if err != nil {
			return "", err
		}
		parts = append(parts, e)
	}
	return "(" + strings.Join(parts, " && ") + ")", nil
}

// emitObjectCheck covers object types (interfaces, type literals).
func emitObjectCheck(ve string, ref *metadata.ObjectRef) (string, error) {
	if ref == nil || ref.Type == nil {
		return "", fmt.Errorf("%w: nil object ref", ErrUnsupportedSchema)
	}
	obj := ref.Type
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
		check, err := buildIs(propExpr, p.Value)
		if err != nil {
			return "", err
		}
		parts = append(parts, check)
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
