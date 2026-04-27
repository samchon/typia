package metadata

type MetadataObject struct {
	Type *MetadataObjectType
	Tags [][]MetadataTypeTag

	name string
}

type MetadataObjectProps struct {
	Type *MetadataObjectType
	Tags [][]MetadataTypeTag
}

func CreateMetadataObject(props MetadataObjectProps) *MetadataObject {
	return &MetadataObject{
		Type: props.Type,
		Tags: cloneTagMatrix(props.Tags),
	}
}

func (m *MetadataObject) GetName() string {
	if m == nil || m.Type == nil {
		return ""
	}
	if m.name == "" {
		m.name = taggedReferenceName(m.Type.Name, m.Tags)
	}
	return m.name
}

func (m *MetadataObject) ToJSON() MetadataReferenceJSON {
	return MetadataReferenceJSON{
		Name: m.Type.Name,
		Tags: cloneTagMatrix(m.Tags),
	}
}
