package metadata

// ArrayType mirrors `MetadataArrayType` — the registry entry for `T[]`.
type ArrayType struct {
	Name      string  `json:"name"`
	Value     *Schema `json:"value"`
	Index     *int    `json:"index,omitempty"`
	Recursive bool    `json:"recursive"`
	Nullables []bool  `json:"nullables,omitempty"`
}

// ArrayRef mirrors `MetadataArray` — a pointer-to-type plus its tags, so the
// same ArrayType can appear under different tag matrices in a union.
type ArrayRef struct {
	Type *ArrayType `json:"type"`
	Tags TagMatrix  `json:"tags,omitempty"`
}

// TupleType mirrors `MetadataTupleType`.
type TupleType struct {
	Name      string    `json:"name"`
	Elements  []*Schema `json:"elements"`
	Index     *int      `json:"index,omitempty"`
	Recursive bool      `json:"recursive"`
	Nullables []bool    `json:"nullables,omitempty"`
}

// TupleRef mirrors `MetadataTuple`.
type TupleRef struct {
	Type *TupleType `json:"type"`
	Tags TagMatrix  `json:"tags,omitempty"`
}

// Property mirrors `MetadataProperty` — one (key, value) pair on an object.
// Key is stored as a full Schema because typia supports computed / symbolic
// keys (`${string}-id` → Template, symbols → constant, etc.).
type Property struct {
	Key         *Schema  `json:"key"`
	Value       *Schema  `json:"value"`
	Description *string  `json:"description,omitempty"`
	JsDocTags   []string `json:"jsDocTags,omitempty"`
}

// ObjectType mirrors `MetadataObjectType`.
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

// ObjectRef mirrors `MetadataObject`.
type ObjectRef struct {
	Type *ObjectType `json:"type"`
	Tags TagMatrix   `json:"tags,omitempty"`
}
