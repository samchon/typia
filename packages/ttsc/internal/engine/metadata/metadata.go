// Package metadata is ttsc's in-memory representation of TypeScript types
// after they have been analysed by the engine. It is the Go port of typia's
// `packages/core/src/schemas/metadata/*.ts` module and is the single IR
// consumed by every code generator in `internal/engine/codegen`.
//
// Design guarantees:
//
//   - Zero dependencies outside the Go standard library. Schemas must be
//     trivially inspectable, JSON-serialisable, and debuggable.
//   - Mirrors the TypeScript class layout — names match the TS sources so a
//     diff between the two packages stays legible.
//   - Pointers (`*T`) are used where the TS class uses `null` so the zero
//     value is unambiguous for callers.
package metadata

import (
	"sort"
	"strings"
)

// -----------------------------------------------------------------------------
// Tags (MetadataTypeTag)
// -----------------------------------------------------------------------------

// TypeTag is a single brand-type attribute attached to an atomic / array /
// constant / template / native / object. Matches `IMetadataTypeTag` in TS.
type TypeTag struct {
	Target    string `json:"target"`
	Name      string `json:"name"`
	Kind      string `json:"kind"`
	Value     any    `json:"value,omitempty"`
	Validate  string `json:"validate,omitempty"`
	Exclusive any    `json:"exclusive,omitempty"` // string[] or bool
	Schema    any    `json:"schema,omitempty"`
}

// TagMatrix is the typia tag representation: outer slice means
// union-of-rows (top-level union + tags), inner slice is the conjunction of
// tags applied to a single shape.
type TagMatrix [][]TypeTag

// Clone returns a deep copy of the tag matrix.
func (m TagMatrix) Clone() TagMatrix {
	if m == nil {
		return nil
	}
	out := make(TagMatrix, len(m))
	for i, row := range m {
		r := make([]TypeTag, len(row))
		copy(r, row)
		out[i] = r
	}
	return out
}

// -----------------------------------------------------------------------------
// AtomicKind
// -----------------------------------------------------------------------------

// AtomicKind enumerates the TypeScript primitive atomics that typia
// distinguishes.
type AtomicKind string

const (
	AtomicBoolean AtomicKind = "boolean"
	AtomicNumber  AtomicKind = "number"
	AtomicBigint  AtomicKind = "bigint"
	AtomicString  AtomicKind = "string"
)

// IsValid reports whether k is one of the canonical atomic kinds.
func (k AtomicKind) IsValid() bool {
	switch k {
	case AtomicBoolean, AtomicNumber, AtomicBigint, AtomicString:
		return true
	default:
		return false
	}
}

// -----------------------------------------------------------------------------
// Atomic / Constant / Template
// -----------------------------------------------------------------------------

// Atomic ↔ `packages/core/src/schemas/metadata/MetadataAtomic.ts`.
type Atomic struct {
	Type AtomicKind `json:"type"`
	Tags TagMatrix  `json:"tags,omitempty"`
}

// ConstantValue ↔ `MetadataConstantValue`.
type ConstantValue struct {
	Value any       `json:"value"`
	Tags  TagMatrix `json:"tags,omitempty"`
}

// Constant ↔ `MetadataConstant`.
type Constant struct {
	Type   AtomicKind      `json:"type"`
	Values []ConstantValue `json:"values"`
}

// Template ↔ `MetadataTemplate`.
type Template struct {
	RawName string    `json:"name"`
	Tags    TagMatrix `json:"tags,omitempty"`
}

// -----------------------------------------------------------------------------
// Array / Tuple / Object (registry types + references)
// -----------------------------------------------------------------------------

// ArrayType ↔ `MetadataArrayType`.
type ArrayType struct {
	Name      string  `json:"name"`
	Value     *Schema `json:"value"`
	Index     *int    `json:"index,omitempty"`
	Recursive bool    `json:"recursive"`
	Nullables []bool  `json:"nullables,omitempty"`
}

// ArrayRef ↔ `MetadataArray`.
type ArrayRef struct {
	Type *ArrayType `json:"type"`
	Tags TagMatrix  `json:"tags,omitempty"`
}

// TupleType ↔ `MetadataTupleType`.
type TupleType struct {
	Name      string    `json:"name"`
	Elements  []*Schema `json:"elements"`
	Index     *int      `json:"index,omitempty"`
	Recursive bool      `json:"recursive"`
	Nullables []bool    `json:"nullables,omitempty"`
}

// TupleRef ↔ `MetadataTuple`.
type TupleRef struct {
	Type *TupleType `json:"type"`
	Tags TagMatrix  `json:"tags,omitempty"`
}

// Property ↔ `MetadataProperty`.
type Property struct {
	Key         *Schema  `json:"key"`
	Value       *Schema  `json:"value"`
	Description *string  `json:"description,omitempty"`
	JsDocTags   []string `json:"jsDocTags,omitempty"`
}

// ObjectType ↔ `MetadataObjectType`.
type ObjectType struct {
	Name        string      `json:"name"`
	Properties  []*Property `json:"properties"`
	Description *string     `json:"description,omitempty"`
	JsDocTags   []string    `json:"jsDocTags,omitempty"`
	Index       int         `json:"index"`
	Validated   bool        `json:"validated"`
	Recursive   bool        `json:"recursive"`
	Nullables   []bool      `json:"nullables,omitempty"`
}

// ObjectRef ↔ `MetadataObject`.
type ObjectRef struct {
	Type *ObjectType `json:"type"`
	Tags TagMatrix   `json:"tags,omitempty"`
}

// -----------------------------------------------------------------------------
// Alias / Native / Escaped / Function / Set / Map
// -----------------------------------------------------------------------------

// AliasType ↔ `MetadataAliasType`.
type AliasType struct {
	Name        string   `json:"name"`
	Value       *Schema  `json:"value"`
	Description *string  `json:"description,omitempty"`
	JsDocTags   []string `json:"jsDocTags,omitempty"`
	Recursive   bool     `json:"recursive"`
	Nullables   []bool   `json:"nullables,omitempty"`
}

// AliasRef ↔ `MetadataAlias`.
type AliasRef struct {
	Type *AliasType `json:"type"`
	Tags TagMatrix  `json:"tags,omitempty"`
}

// Native ↔ `MetadataNative` (Date, Uint8Array, RegExp, ...).
type Native struct {
	Name      string    `json:"name"`
	JsDocTags []string  `json:"jsDocTags,omitempty"`
	Tags      TagMatrix `json:"tags,omitempty"`
}

// Escaped ↔ `MetadataEscaped` (e.g. Date.toJSON ⇒ string).
type Escaped struct {
	Original *Schema `json:"original"`
	Returns  *Schema `json:"returns"`
}

// Parameter ↔ `MetadataParameter`.
type Parameter struct {
	Name        string  `json:"name"`
	Type        *Schema `json:"type"`
	Description *string `json:"description,omitempty"`
	Optional    bool    `json:"optional"`
}

// Function ↔ `MetadataFunction`.
type Function struct {
	Parameters  []*Parameter `json:"parameters"`
	Output      *Schema      `json:"output,omitempty"`
	Description *string      `json:"description,omitempty"`
	Async       bool         `json:"async"`
	JsDocTags   []string     `json:"jsDocTags,omitempty"`
}

// SetRef ↔ `MetadataSet`.
type SetRef struct {
	Value *Schema   `json:"value"`
	Tags  TagMatrix `json:"tags,omitempty"`
}

// MapRef ↔ `MetadataMap`.
type MapRef struct {
	Key   *Schema   `json:"key"`
	Value *Schema   `json:"value"`
	Tags  TagMatrix `json:"tags,omitempty"`
}

// -----------------------------------------------------------------------------
// Schema (MetadataSchema)
// -----------------------------------------------------------------------------

// Schema ↔ `MetadataSchema`. Fields map one-to-one to the TypeScript class.
type Schema struct {
	Any      bool `json:"any"`
	Required bool `json:"required"`
	Optional bool `json:"optional"`
	Nullable bool `json:"nullable"`

	Atomics   []Atomic   `json:"atomics,omitempty"`
	Constants []Constant `json:"constants,omitempty"`
	Templates []Template `json:"templates,omitempty"`

	Arrays  []*ArrayRef  `json:"arrays,omitempty"`
	Tuples  []*TupleRef  `json:"tuples,omitempty"`
	Objects []*ObjectRef `json:"objects,omitempty"`
	Aliases []*AliasRef  `json:"aliases,omitempty"`

	Natives   []Native    `json:"natives,omitempty"`
	Sets      []*SetRef   `json:"sets,omitempty"`
	Maps      []*MapRef   `json:"maps,omitempty"`
	Functions []*Function `json:"functions,omitempty"`
	Escaped   *Escaped    `json:"escaped,omitempty"`
	Rest      *Schema     `json:"rest,omitempty"`

	name           string
	parentResolved bool
}

// NewSchema returns a fresh schema with `required=true` and empty containers
// (matches TS `initialize()`).
func NewSchema() *Schema {
	return &Schema{Required: true}
}

// AddAtomic appends an atomic kind, deduplicating by kind.
func (s *Schema) AddAtomic(k AtomicKind) *Schema {
	if !k.IsValid() {
		panic("metadata: AddAtomic received invalid kind " + string(k))
	}
	for _, existing := range s.Atomics {
		if existing.Type == k {
			return s
		}
	}
	s.Atomics = append(s.Atomics, Atomic{Type: k})
	return s
}

// AddConstant appends (or merges) a constant value.
func (s *Schema) AddConstant(typ AtomicKind, value any) *Schema {
	if !typ.IsValid() {
		panic("metadata: AddConstant received invalid kind " + string(typ))
	}
	for i, c := range s.Constants {
		if c.Type == typ {
			for _, existing := range c.Values {
				if existing.Value == value {
					return s
				}
			}
			s.Constants[i].Values = append(s.Constants[i].Values, ConstantValue{Value: value})
			return s
		}
	}
	s.Constants = append(s.Constants, Constant{Type: typ, Values: []ConstantValue{{Value: value}}})
	return s
}

// Size mirrors TypeScript `MetadataSchema#size`.
func (s *Schema) Size() int {
	n := 0
	if s.Any {
		n++
	}
	if s.Escaped != nil {
		n++
	}
	if s.Rest != nil {
		n += s.Rest.Size()
	}
	n += len(s.Templates) + len(s.Atomics)
	for _, c := range s.Constants {
		n += len(c.Values)
	}
	n += len(s.Arrays) + len(s.Tuples) + len(s.Objects) + len(s.Aliases)
	n += len(s.Natives) + len(s.Sets) + len(s.Maps) + len(s.Functions)
	return n
}

// Bucket mirrors TypeScript `MetadataSchema#bucket`.
func (s *Schema) Bucket() int {
	n := 0
	if s.Any {
		n++
	}
	if s.Escaped != nil {
		n++
	}
	if len(s.Templates) > 0 {
		n++
	}
	if len(s.Atomics) > 0 {
		n++
	}
	if len(s.Constants) > 0 {
		n++
	}
	if s.Rest != nil {
		n += s.Rest.Size()
	}
	if len(s.Arrays) > 0 {
		n++
	}
	if len(s.Tuples) > 0 {
		n++
	}
	if len(s.Natives) > 0 {
		n++
	}
	if len(s.Sets) > 0 {
		n++
	}
	if len(s.Maps) > 0 {
		n++
	}
	if len(s.Objects) > 0 {
		n++
	}
	if len(s.Functions) > 0 {
		n++
	}
	if len(s.Aliases) > 0 {
		n++
	}
	return n
}

// IsRequired mirrors TS `isRequired()`.
func (s *Schema) IsRequired() bool { return s.Required && !s.Optional }

// Empty reports whether the schema has no buckets or zero total values.
func (s *Schema) Empty() bool { return s.Bucket() == 0 || s.Size() == 0 }

// IsConstant reports whether the schema holds *only* constant values.
func (s *Schema) IsConstant() bool {
	got := 0
	if len(s.Constants) > 0 {
		got = 1
	}
	return s.Bucket() == got
}

// IsSoleAtomic reports whether the schema represents exactly one primitive
// atomic kind (e.g. `string`).
func (s *Schema) IsSoleAtomic() (AtomicKind, bool) {
	if s.Size() == 1 && s.Bucket() == 1 && len(s.Atomics) == 1 {
		return s.Atomics[0].Type, true
	}
	return "", false
}

// GetSoleLiteral returns the single string-literal value if that's all the
// schema represents.
func (s *Schema) GetSoleLiteral() (string, bool) {
	if s.Size() == 1 && len(s.Constants) == 1 {
		c := s.Constants[0]
		if c.Type == AtomicString && len(c.Values) == 1 {
			if v, ok := c.Values[0].Value.(string); ok {
				return v, true
			}
		}
	}
	return "", false
}

// IsSoleLiteral is a convenience around GetSoleLiteral.
func (s *Schema) IsSoleLiteral() bool {
	_, ok := s.GetSoleLiteral()
	return ok
}

// Name returns the human-readable TypeScript representation of this schema.
func (s *Schema) Name() string {
	if s.name != "" {
		return s.name
	}
	s.name = computeName(s)
	return s.name
}

func computeName(s *Schema) string {
	if s.Any {
		return "any"
	}
	elems := make([]string, 0, s.Size()+2)
	if s.Nullable {
		elems = append(elems, "null")
	}
	if !s.IsRequired() {
		elems = append(elems, "undefined")
	}
	for _, a := range s.Atomics {
		if len(a.Tags) == 0 {
			elems = append(elems, string(a.Type))
			continue
		}
		first := []string{string(a.Type)}
		for _, tag := range a.Tags[0] {
			first = append(first, tag.Name)
		}
		elems = append(elems, "("+strings.Join(first, " & ")+")")
	}
	for _, c := range s.Constants {
		for _, v := range c.Values {
			elems = append(elems, literalName(c.Type, v.Value))
		}
	}
	for _, t := range s.Templates {
		elems = append(elems, t.RawName)
	}
	for _, n := range s.Natives {
		elems = append(elems, n.Name)
	}
	for _, set := range s.Sets {
		elems = append(elems, "Set<"+set.Value.Name()+">")
	}
	for _, m := range s.Maps {
		elems = append(elems, "Map<"+m.Key.Name()+", "+m.Value.Name()+">")
	}
	if s.Rest != nil {
		elems = append(elems, "..."+s.Rest.Name())
	}
	for _, t := range s.Tuples {
		elems = append(elems, t.Type.Name)
	}
	for _, a := range s.Arrays {
		elems = append(elems, a.Type.Name+"[]")
	}
	for _, o := range s.Objects {
		elems = append(elems, o.Type.Name)
	}
	for _, a := range s.Aliases {
		elems = append(elems, a.Type.Name)
	}
	if s.Escaped != nil {
		elems = append(elems, "escape<"+s.Escaped.Original.Name()+", "+s.Escaped.Returns.Name()+">")
	}
	switch len(elems) {
	case 0:
		return "unknown"
	case 1:
		return elems[0]
	}
	sort.Strings(elems)
	return "(" + strings.Join(elems, " | ") + ")"
}

// literalName emits a JS-flavoured source form for a constant literal.
func literalName(k AtomicKind, v any) string {
	switch k {
	case AtomicString:
		if s, ok := v.(string); ok {
			return `"` + s + `"`
		}
	case AtomicBigint:
		return jsString(v) + "n"
	}
	return jsString(v)
}

func jsString(v any) string {
	switch t := v.(type) {
	case string:
		return `"` + t + `"`
	case bool:
		if t {
			return "true"
		}
		return "false"
	case int:
		return intString(int64(t))
	case int64:
		return intString(t)
	case float64:
		if t == float64(int64(t)) {
			return intString(int64(t))
		}
		return floatFormatG(t)
	}
	return ""
}

func intString(n int64) string {
	if n == 0 {
		return "0"
	}
	neg := n < 0
	if neg {
		n = -n
	}
	var tmp [20]byte
	i := len(tmp)
	for n > 0 {
		i--
		tmp[i] = byte('0' + n%10)
		n /= 10
	}
	if neg {
		i--
		tmp[i] = '-'
	}
	return string(tmp[i:])
}
