package metadata

type MetadataAlias struct {
	Type *MetadataAliasType
	Tags [][]MetadataTypeTag

	name string
}

type MetadataAliasProps struct {
	Type *MetadataAliasType
	Tags [][]MetadataTypeTag
}

func CreateMetadataAlias(props MetadataAliasProps) *MetadataAlias {
	return &MetadataAlias{
		Type: props.Type,
		Tags: cloneTagMatrix(props.Tags),
	}
}

func (m *MetadataAlias) GetName() string {
	if m == nil || m.Type == nil {
		return ""
	}
	if m.name == "" {
		m.name = taggedReferenceName(m.Type.Name, m.Tags)
	}
	return m.name
}

func (m *MetadataAlias) ToJSON() MetadataReferenceJSON {
	return MetadataReferenceJSON{
		Name: m.Type.Name,
		Tags: cloneTagMatrix(m.Tags),
	}
}
