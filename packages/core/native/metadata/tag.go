package metadata

// TypeTag is a single brand-type attribute attached to an atomic / array /
// constant / template / native / object. Mirrors `IMetadataTypeTag` in typia.
type TypeTag struct {
	Target    string `json:"target"`
	Name      string `json:"name"`
	Kind      string `json:"kind"`
	Value     any    `json:"value,omitempty"`
	Validate  string `json:"validate,omitempty"`
	Exclusive any    `json:"exclusive,omitempty"` // string[] or bool
	Schema    any    `json:"schema,omitempty"`
}

// TagMatrix is the typia tag representation: outer slice = union-of-rows,
// inner slice = conjunction of tags applied to a single shape. typia's
// `string & MinLength<2> & MaxLength<10>` lands as `[[MinLength, MaxLength]]`.
type TagMatrix [][]TypeTag

// Clone returns a deep copy of the tag matrix — useful when a caller wants to
// append tags without affecting the source schema.
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
