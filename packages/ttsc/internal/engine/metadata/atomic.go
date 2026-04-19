package metadata

// AtomicKind enumerates the TypeScript primitive atomics typia distinguishes.
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

// Atomic mirrors `MetadataAtomic` — a primitive type with optional tag matrix.
type Atomic struct {
	Type AtomicKind `json:"type"`
	Tags TagMatrix  `json:"tags,omitempty"`
}

// ConstantValue mirrors `MetadataConstantValue` — one literal within a bucket.
type ConstantValue struct {
	Value any       `json:"value"`
	Tags  TagMatrix `json:"tags,omitempty"`
}

// Constant mirrors `MetadataConstant` — a bucket of literal values sharing
// the same atomic kind. typia groups `"a" | "b" | "c"` as a single Constant
// with three values.
type Constant struct {
	Type   AtomicKind      `json:"type"`
	Values []ConstantValue `json:"values"`
}

// Template mirrors `MetadataTemplate` — a template-literal type such as
// `` `user-${number}` ``. Only the raw string representation is stored in
// Phase 0; pattern synthesis is deferred until the emitter needs it.
type Template struct {
	RawName string    `json:"name"`
	Tags    TagMatrix `json:"tags,omitempty"`
}
