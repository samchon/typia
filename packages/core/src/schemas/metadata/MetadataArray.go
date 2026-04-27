package metadata

type MetadataArray struct {
	Type *MetadataArrayType
	Tags [][]MetadataTypeTag

	name string
}

type MetadataArrayProps struct {
	Type *MetadataArrayType
	Tags [][]MetadataTypeTag
}

func CreateMetadataArray(props MetadataArrayProps) *MetadataArray {
	return &MetadataArray{
		Type: props.Type,
		Tags: cloneTagMatrix(props.Tags),
	}
}

func (m *MetadataArray) GetName() string {
	if m == nil || m.Type == nil {
		return ""
	}
	if m.name == "" {
		m.name = taggedReferenceName(m.Type.Name, m.Tags)
	}
	return m.name
}

func (m *MetadataArray) ToJSON() MetadataReferenceJSON {
	return MetadataReferenceJSON{
		Name: m.Type.Name,
		Tags: cloneTagMatrix(m.Tags),
	}
}
