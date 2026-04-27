package metadata

type MetadataArrayType struct {
	Name      string
	Value     *MetadataSchema
	Nullables []bool
	Recursive bool
	Index     *int
}

type MetadataArrayTypeProps struct {
	Name      string
	Value     *MetadataSchema
	Nullables []bool
	Recursive bool
	Index     *int
}

func CreateMetadataArrayType(props MetadataArrayTypeProps) *MetadataArrayType {
	return &MetadataArrayType{
		Name:      props.Name,
		Value:     props.Value,
		Index:     cloneIntPtr(props.Index),
		Recursive: props.Recursive,
		Nullables: append([]bool(nil), props.Nullables...),
	}
}

func MetadataArrayTypeFromWithoutValue(props MetadataArrayTypeJSON) *MetadataArrayType {
	return CreateMetadataArrayType(MetadataArrayTypeProps{
		Name:      props.Name,
		Index:     props.Index,
		Recursive: props.Recursive,
		Nullables: props.Nullables,
	})
}

func (m *MetadataArrayType) ToJSON() MetadataArrayTypeJSON {
	var value MetadataSchemaJSON
	if m.Value != nil {
		value = m.Value.ToJSON()
	}
	return MetadataArrayTypeJSON{
		Name:      m.Name,
		Value:     value,
		Nullables: append([]bool(nil), m.Nullables...),
		Recursive: m.Recursive,
		Index:     cloneIntPtr(m.Index),
	}
}
