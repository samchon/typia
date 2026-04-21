package metadata

// Schema mirrors `MetadataSchema`. Fields map one-to-one to the TypeScript
// class so side-by-side diffs stay legible. It is the single IR consumed by
// every code generator in `../emitter`.
//
// Pointer buckets (`*ArrayRef`, `*ObjectRef`, …) are used so recursive types
// close under the same pointer; the Collection registry hands out one copy
// per semantic type.
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
	parentResolved bool //nolint:unused // reserved for Phase 1 parent-resolution pass
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

// AddConstant appends (or merges) a constant value into the kind bucket.
// Dedupes by `==` equality so `1 | 1 | 2` collapses to `{1, 2}`.
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

// Size mirrors TS `MetadataSchema#size` — total number of atomic "alternatives"
// the schema can produce. Used by predicates like `IsSoleAtomic`.
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

// Bucket mirrors TS `MetadataSchema#bucket` — count of distinct *kinds* of
// alternative (atomics as a single group, not per-element).
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

// IsRequired mirrors TS `isRequired()` — the schema is required when the
// `Required` flag is set and no `Optional` bit was OR'd in by a union member.
func (s *Schema) IsRequired() bool { return s.Required && !s.Optional }

// Empty reports whether the schema has no buckets or zero total values.
func (s *Schema) Empty() bool { return s.Bucket() == 0 || s.Size() == 0 }

// IsConstant reports whether the schema holds *only* constant values — used
// by the emitter to skip `typeof`-style checks for pure literal unions.
func (s *Schema) IsConstant() bool {
	got := 0
	if len(s.Constants) > 0 {
		got = 1
	}
	return s.Bucket() == got
}

// IsSoleAtomic reports whether the schema represents exactly one primitive
// atomic kind (e.g. `string`). Used by `typia.http.parameter<T>` and the
// json.stringify fast-path.
func (s *Schema) IsSoleAtomic() (AtomicKind, bool) {
	if s.Size() == 1 && s.Bucket() == 1 && len(s.Atomics) == 1 {
		return s.Atomics[0].Type, true
	}
	return "", false
}

// GetSoleLiteral returns the single string-literal value when the schema
// represents exactly that — used for property key extraction.
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
// Cached on first call so repeated emit passes don't recompute.
func (s *Schema) Name() string {
	if s.name != "" {
		return s.name
	}
	s.name = computeName(s)
	return s.name
}
