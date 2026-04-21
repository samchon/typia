package metadata

// Native mirrors `MetadataNative` — a built-in class such as `Date`,
// `Uint8Array`, `RegExp`, `Map`, `Set`. The analyzer identifies these by
// symbol name so the emitter can render `instanceof X` rather than a
// structural walk.
type Native struct {
	Name      string    `json:"name"`
	JsDocTags []string  `json:"jsDocTags,omitempty"`
	Tags      TagMatrix `json:"tags,omitempty"`
}

// Escaped mirrors `MetadataEscaped` — typia's representation of a class with
// a `toJSON()` (e.g. Date → string). `Original` holds the class shape,
// `Returns` the primitive produced by `toJSON`.
type Escaped struct {
	Original *Schema `json:"original"`
	Returns  *Schema `json:"returns"`
}

// Parameter mirrors `MetadataParameter` — one argument of a Function.
type Parameter struct {
	Name        string  `json:"name"`
	Type        *Schema `json:"type"`
	Description *string `json:"description,omitempty"`
	Optional    bool    `json:"optional"`
}

// Function mirrors `MetadataFunction` — used for callable object fields and
// the Escaped `toJSON` signature in typia v12.
type Function struct {
	Parameters  []*Parameter `json:"parameters"`
	Output      *Schema      `json:"output,omitempty"`
	Description *string      `json:"description,omitempty"`
	Async       bool         `json:"async"`
	JsDocTags   []string     `json:"jsDocTags,omitempty"`
}

// SetRef mirrors `MetadataSet` — `Set<T>`.
type SetRef struct {
	Value *Schema   `json:"value"`
	Tags  TagMatrix `json:"tags,omitempty"`
}

// MapRef mirrors `MetadataMap` — `Map<K, V>`.
type MapRef struct {
	Key   *Schema   `json:"key"`
	Value *Schema   `json:"value"`
	Tags  TagMatrix `json:"tags,omitempty"`
}
