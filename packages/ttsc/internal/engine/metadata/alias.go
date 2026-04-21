package metadata

// AliasType mirrors `MetadataAliasType` — a named type alias such as
// `type Id = string & tags.Format<"uuid">`. Only stored when the analyzer
// chooses to preserve the alias rather than resolve it (typia uses aliases
// for JSDoc / naming metadata; Phase 0 mostly resolves through).
type AliasType struct {
	Name        string   `json:"name"`
	Value       *Schema  `json:"value"`
	Description *string  `json:"description,omitempty"`
	JsDocTags   []string `json:"jsDocTags,omitempty"`
	Recursive   bool     `json:"recursive"`
	Nullables   []bool   `json:"nullables,omitempty"`
}

// AliasRef mirrors `MetadataAlias` — the pointer-plus-tags reference form.
type AliasRef struct {
	Type *AliasType `json:"type"`
	Tags TagMatrix  `json:"tags,omitempty"`
}
