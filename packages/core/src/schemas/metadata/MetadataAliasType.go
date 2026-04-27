package metadata

type MetadataAliasType struct {
	Name        string
	Value       *MetadataSchema
	Description *string
	JsDocTags   []JsDocTagInfo
	Recursive   bool
	Nullables   []bool
}

type MetadataAliasTypeProps struct {
	Name        string
	Value       *MetadataSchema
	Description *string
	JsDocTags   []JsDocTagInfo
	Recursive   bool
	Nullables   []bool
}

func CreateMetadataAliasType(props MetadataAliasTypeProps) *MetadataAliasType {
	return &MetadataAliasType{
		Name:        props.Name,
		Value:       props.Value,
		Description: props.Description,
		JsDocTags:   cloneJsDocTags(props.JsDocTags),
		Recursive:   props.Recursive,
		Nullables:   append([]bool(nil), props.Nullables...),
	}
}

func MetadataAliasTypeFromWithoutValue(props MetadataAliasTypeJSON) *MetadataAliasType {
	return CreateMetadataAliasType(MetadataAliasTypeProps{
		Name:        props.Name,
		Description: props.Description,
		Recursive:   props.Recursive,
		JsDocTags:   props.JsDocTags,
		Nullables:   props.Nullables,
	})
}

func (m *MetadataAliasType) ToJSON() MetadataAliasTypeJSON {
	var value MetadataSchemaJSON
	if m.Value != nil {
		value = m.Value.ToJSON()
	}
	return MetadataAliasTypeJSON{
		Name:        m.Name,
		Value:       value,
		Description: m.Description,
		Recursive:   m.Recursive,
		JsDocTags:   cloneJsDocTags(m.JsDocTags),
		Nullables:   append([]bool(nil), m.Nullables...),
	}
}
