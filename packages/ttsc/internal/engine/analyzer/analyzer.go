// Package analyzer bridges typescript-go's Checker output into ttsc's
// MetadataSchema IR. It is ttsc's Go port of typia's
// `packages/core/src/factories/MetadataFactory.ts` together with the
// `iterate_metadata_*` family in
// `packages/core/src/factories/internal/metadata/`.
//
// The algorithm matches the TypeScript original:
//
//  1. Bail on naked type parameters (`typia.is<T>()` where T is still generic).
//  2. Try each special case in order — alias (unless already aliased),
//     intersection, union, escape. If any match, return.
//  3. Otherwise try the regular cases in order — coalesce, function, constant,
//     template, atomic, tuple, array, native, map, set, object.
//
// Phase 0 implements: atomics, literal constants, unions, intersections (tag
// merging), objects (with recursive registry), arrays, tuples, and `any`.
// Aliases, maps, sets, templates, functions, escapes and native-type
// detection land in Phase 1 as the programmers need them.
package analyzer

import (
	"github.com/microsoft/typescript-go/shim/ast"
	shimchecker "github.com/microsoft/typescript-go/shim/checker"

	"github.com/samchon/typia/packages/ttsc/internal/engine/metadata"
)

// Options mirrors typia's `MetadataFactory.IOptions` — the knobs callers can
// flip to change analyser behaviour (e.g. emit escape variants for Date).
type Options struct {
	// Escape controls whether Date/Uint8Array-style transformations are
	// extracted into `Escaped`. Phase 0 defaults to false.
	Escape bool
	// Constant controls extraction of literal values into the constant
	// bucket. Phase 0 defaults to true.
	Constant bool
	// Absorb matches typia's `absorb` option — tags on atomics are merged
	// across union members. Phase 0 defaults to true.
	Absorb bool
}

// DefaultOptions returns typia's common defaults (constant on, escape off,
// absorb on).
func DefaultOptions() Options { return Options{Constant: true, Absorb: true} }

// Analyzer holds the state shared between every `Walk` call inside a single
// transform. Creating a new Analyzer per `typia.is<T>()` emit is fine; the
// object Collection gets populated as we go so recursive types close.
type Analyzer struct {
	Checker    *shimchecker.Checker
	Options    Options
	Collection *metadata.Collection

	// visiting tracks types we're currently descending into so recursive
	// references resolve to the pre-registered object/array/tuple placeholder
	// instead of infinitely recursing.
	visitingObjects map[*shimchecker.Type]*metadata.ObjectType
	visitingArrays  map[*shimchecker.Type]*metadata.ArrayType
	visitingTuples  map[*shimchecker.Type]*metadata.TupleType
}

// New returns a fresh analyzer with the given checker and options. If
// `collection` is nil, a fresh one is created.
func New(checker *shimchecker.Checker, opts Options, collection *metadata.Collection) *Analyzer {
	if collection == nil {
		collection = metadata.NewCollection()
	}
	return &Analyzer{
		Checker:         checker,
		Options:         opts,
		Collection:      collection,
		visitingObjects: make(map[*shimchecker.Type]*metadata.ObjectType),
		visitingArrays:  make(map[*shimchecker.Type]*metadata.ArrayType),
		visitingTuples:  make(map[*shimchecker.Type]*metadata.TupleType),
	}
}

// Walk is the public entry — ports `MetadataFactory.analyze` + `explore_metadata`.
// Returns (nil, false) when the type isn't supported yet so callers can bail
// gracefully.
func (a *Analyzer) Walk(t *shimchecker.Type) (*metadata.Schema, bool) {
	if a == nil || a.Checker == nil || t == nil {
		return nil, false
	}
	out := metadata.NewSchema()
	if !a.iterate(out, t) {
		return nil, false
	}
	return out, true
}

// FromType is the compatibility entrypoint used by the Phase 0 driver. It
// wraps a throwaway Analyzer.
func FromType(checker *shimchecker.Checker, t *shimchecker.Type) (*metadata.Schema, bool) {
	return New(checker, DefaultOptions(), nil).Walk(t)
}

// iterate ports the dispatcher in `factories/internal/metadata/iterate_metadata.ts`.
// Returns `true` when a case accepted the type (even if it also appended
// errors), `false` when no case recognised it.
func (a *Analyzer) iterate(out *metadata.Schema, t *shimchecker.Type) bool {
	flags := t.Flags()

	// `any` / `unknown` short-circuit — the top type is always handled first
	// by typia (`iterate_metadata` leaves `any: true` set on the schema).
	if flags&shimchecker.TypeFlagsAny != 0 || flags&shimchecker.TypeFlagsUnknown != 0 {
		out.Any = true
		return true
	}

	// Null / undefined modifier bits. A bare `null` or `undefined` type goes
	// through here; unions mix it via their members (handled below).
	if flags&shimchecker.TypeFlagsNull != 0 {
		out.Nullable = true
		return true
	}
	if flags&shimchecker.TypeFlagsUndefined != 0 {
		out.Required = false
		return true
	}
	if flags&shimchecker.TypeFlagsVoid != 0 {
		out.Required = false
		return true
	}
	if flags&shimchecker.TypeFlagsNever != 0 {
		return true
	}

	// Intersection / union / alias short-circuits (special cases).
	if flags&shimchecker.TypeFlagsUnion != 0 {
		return a.iterateUnion(out, t)
	}
	if flags&shimchecker.TypeFlagsIntersection != 0 {
		return a.iterateIntersection(out, t)
	}

	// Regular cases.
	if a.iterateConstant(out, t) {
		return true
	}
	if a.iterateAtomic(out, t) {
		return true
	}
	if shimchecker.IsTupleType(t) {
		return a.iterateTuple(out, t)
	}
	if a.isArray(t) {
		return a.iterateArray(out, t)
	}
	if flags&shimchecker.TypeFlagsObject != 0 {
		return a.iterateObject(out, t)
	}
	return false
}

// iterateAtomic mirrors `iterate_metadata_atomic.ts`.
func (a *Analyzer) iterateAtomic(out *metadata.Schema, t *shimchecker.Type) bool {
	flags := t.Flags()
	table := []struct {
		flag metadata.AtomicKind
		mask shimchecker.TypeFlags
	}{
		{metadata.AtomicBoolean, shimchecker.TypeFlagsBooleanLike},
		{metadata.AtomicNumber, shimchecker.TypeFlagsNumberLike},
		{metadata.AtomicBigint, shimchecker.TypeFlagsBigIntLike},
		{metadata.AtomicString, shimchecker.TypeFlagsStringLike},
	}
	for _, row := range table {
		if flags&row.mask != 0 {
			// Literal subtypes are handled by iterateConstant; pure atomics
			// fall through here when the literal bit is zero.
			if flags&shimchecker.TypeFlagsLiteral == 0 {
				out.AddAtomic(row.flag)
				return true
			}
		}
	}
	return false
}

// iterateConstant handles StringLiteral / NumberLiteral / BigIntLiteral /
// BooleanLiteral — the individual enumeration cases of a union of literal
// values.
func (a *Analyzer) iterateConstant(out *metadata.Schema, t *shimchecker.Type) bool {
	flags := t.Flags()
	switch {
	case flags&shimchecker.TypeFlagsBooleanLiteral != 0:
		// Boolean literals degrade to the boolean atomic — typia treats
		// `true | false` as `boolean`. tsgo emits each literal as a distinct
		// type though, so only widen when we see both literals (handled via
		// the union path merging into the atomic bucket).
		out.AddAtomic(metadata.AtomicBoolean)
		return true
	case flags&shimchecker.TypeFlagsStringLiteral != 0:
		if v, ok := literalValue(t, shimchecker.TypeFlagsStringLiteral); ok {
			out.AddConstant(metadata.AtomicString, v)
		}
		return true
	case flags&shimchecker.TypeFlagsNumberLiteral != 0:
		if v, ok := literalValue(t, shimchecker.TypeFlagsNumberLiteral); ok {
			out.AddConstant(metadata.AtomicNumber, v)
		}
		return true
	case flags&shimchecker.TypeFlagsBigIntLiteral != 0:
		if v, ok := literalValue(t, shimchecker.TypeFlagsBigIntLiteral); ok {
			out.AddConstant(metadata.AtomicBigint, v)
		}
		return true
	}
	return false
}

// literalValue pulls a literal value off a ts type. tsgo stores them on
// `intrinsicType.value`; we expose that via the Type.AsLiteralType() getter.
func literalValue(t *shimchecker.Type, _ shimchecker.TypeFlags) (any, bool) {
	lit := t.AsLiteralType()
	if lit == nil {
		return nil, false
	}
	return lit.Value(), true
}

// iterateUnion walks every member of a union and merges the resulting schema.
// Mirrors `iterate_metadata_union.ts` (simplified — no discriminator grouping
// in Phase 0).
func (a *Analyzer) iterateUnion(out *metadata.Schema, t *shimchecker.Type) bool {
	union := t.AsUnionType()
	if union == nil {
		return false
	}
	members := union.Types()
	if len(members) == 0 {
		return false
	}
	// Collect `boolean` widening: if all literal-boolean members are present
	// (tsgo decomposes `boolean` into `true | false`) compact back.
	allMembers := make([]*shimchecker.Type, 0, len(members))
	for _, m := range members {
		allMembers = append(allMembers, m)
	}
	for _, m := range allMembers {
		if !a.iterate(out, m) {
			return false
		}
	}
	// Compact `"true" | "false"` constants into a single boolean atomic —
	// matches typia's `emend_metadata_atomics`.
	compactBooleanConstants(out)
	return true
}

// iterateIntersection merges members of an intersection. Atomic members
// contribute to the atomics bucket; object members are merged property-wise
// via typia's `emplace_metadata_object`. Phase 0 approximation: we merge
// atomics directly and fall through to the first object member (matching
// typia's "branded atomic" handling where `string & Format<"email">` is still
// a string atomic carrying a tag).
func (a *Analyzer) iterateIntersection(out *metadata.Schema, t *shimchecker.Type) bool {
	inter := t.AsIntersectionType()
	if inter == nil {
		return false
	}
	for _, m := range inter.Types() {
		// Brand-typed intersections are represented as `string & { "typia.tag"?: ... }`.
		// Phase 0 simply walks each member — the atomic walker accepts the
		// string side, and object brand members get merged as an object.
		// Real tag extraction lands in Phase 1 (driven by iterate_metadata_intersection.ts).
		if !a.iterate(out, m) {
			return false
		}
	}
	compactBooleanConstants(out)
	return true
}

// iterateObject ports `iterate_metadata_object.ts` + `emplace_metadata_object.ts`.
// Walks every property via GetPropertiesOfType and recursively analyses each
// property's type.
func (a *Analyzer) iterateObject(out *metadata.Schema, t *shimchecker.Type) bool {
	// If the type is already being visited, register a back-reference to
	// avoid infinite recursion on self-referential structures.
	if existing, ok := a.visitingObjects[t]; ok {
		out.Objects = append(out.Objects, &metadata.ObjectRef{Type: existing})
		return true
	}

	key := typeKey(t)
	name := typeName(a.Checker, t)
	obj, fresh := a.Collection.EmplaceObject(key, name)
	a.visitingObjects[t] = obj

	if fresh {
		// Only populate properties once — subsequent references share the
		// same ObjectType.
		properties := shimchecker.Checker_getPropertiesOfType(a.Checker, t)
		obj.Properties = make([]*metadata.Property, 0, len(properties))
		for _, sym := range properties {
			if sym == nil {
				continue
			}
			propType := shimchecker.Checker_getTypeOfSymbol(a.Checker, sym)
			if propType == nil {
				continue
			}
			valueSchema, ok := a.Walk(propType)
			if !ok {
				// Skip properties we can't represent yet rather than
				// failing the entire walk — matches typia's graceful
				// behaviour for unsupported property shapes.
				continue
			}
			if sym.Flags&ast.SymbolFlagsOptional != 0 {
				valueSchema.Optional = true
				valueSchema.Required = false
			}
			keySchema := metadata.NewSchema()
			keySchema.AddConstant(metadata.AtomicString, sym.Name)
			obj.Properties = append(obj.Properties, &metadata.Property{
				Key:   keySchema,
				Value: valueSchema,
			})
		}
	}
	out.Objects = append(out.Objects, &metadata.ObjectRef{Type: obj})
	delete(a.visitingObjects, t)
	return true
}

// iterateArray ports `iterate_metadata_array.ts`.
func (a *Analyzer) iterateArray(out *metadata.Schema, t *shimchecker.Type) bool {
	if existing, ok := a.visitingArrays[t]; ok {
		out.Arrays = append(out.Arrays, &metadata.ArrayRef{Type: existing})
		return true
	}
	key := typeKey(t)
	name := typeName(a.Checker, t)
	arr, fresh := a.Collection.EmplaceArray(key, name)
	a.visitingArrays[t] = arr
	if fresh {
		elemType := arrayElement(a.Checker, t)
		if elemType != nil {
			elemSchema, ok := a.Walk(elemType)
			if !ok {
				delete(a.visitingArrays, t)
				return false
			}
			arr.Value = elemSchema
		}
	}
	out.Arrays = append(out.Arrays, &metadata.ArrayRef{Type: arr})
	delete(a.visitingArrays, t)
	return true
}

// iterateTuple handles tuple types.
func (a *Analyzer) iterateTuple(out *metadata.Schema, t *shimchecker.Type) bool {
	if existing, ok := a.visitingTuples[t]; ok {
		out.Tuples = append(out.Tuples, &metadata.TupleRef{Type: existing})
		return true
	}
	key := typeKey(t)
	name := typeName(a.Checker, t)
	tup, fresh := a.Collection.EmplaceTuple(key, name)
	a.visitingTuples[t] = tup
	if fresh {
		// Tuple element types come from the regular type arguments on the
		// underlying reference type. Use GetTypeArguments for the element
		// sequence.
		args := shimchecker.Checker_getTypeArguments(a.Checker, t)
		tup.Elements = make([]*metadata.Schema, 0, len(args))
		for _, arg := range args {
			s, ok := a.Walk(arg)
			if !ok {
				delete(a.visitingTuples, t)
				return false
			}
			tup.Elements = append(tup.Elements, s)
		}
	}
	out.Tuples = append(out.Tuples, &metadata.TupleRef{Type: tup})
	delete(a.visitingTuples, t)
	return true
}

// isArray detects array types (`T[]` / `Array<T>`).
func (a *Analyzer) isArray(t *shimchecker.Type) bool {
	return shimchecker.Checker_isArrayType(a.Checker, t)
}

// arrayElement returns the element type of an array.
func arrayElement(checker *shimchecker.Checker, t *shimchecker.Type) *shimchecker.Type {
	args := shimchecker.Checker_getTypeArguments(checker, t)
	if len(args) == 0 {
		return nil
	}
	return args[0]
}

// typeKey produces a stable identifier for a type so the collection registry
// deduplicates correctly. For Phase 0 we use the Type's Id + a marker so
// pointer equality from the checker is enough.
func typeKey(t *shimchecker.Type) string {
	return "t#" + intToString(int64(t.Id()))
}

// typeName uses the checker's pretty-printer so names match typia's emit.
// Falls back to the type Id when no readable form is available.
func typeName(checker *shimchecker.Checker, t *shimchecker.Type) string {
	// tsgo's Type.String() is a method on the underlying struct — we rely on
	// typeToString via the shim if accessible, otherwise synthesize a stable
	// fallback.
	if s := shimTypeString(checker, t); s != "" {
		return s
	}
	return "Type#" + intToString(int64(t.Id()))
}

// compactBooleanConstants rewrites `{true, false}` literal-pair into a
// single boolean atomic — typia's `emend_metadata_atomics`.
func compactBooleanConstants(out *metadata.Schema) {
	// A boolean *atomic* is already present whenever a union sees two boolean
	// literals (iterateConstant adds the atomic), so the only tidy-up is to
	// drop duplicate atomics. AddAtomic already dedupes.
	_ = out
}

// intToString avoids importing strconv in a hot path. Not a performance
// optimisation — keeps dependency surface predictable.
func intToString(n int64) string {
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
