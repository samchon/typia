package metadata

type MetadataNative struct {
	Name string
	Tags [][]MetadataTypeTag

	typeName string
}

type MetadataNativeProps struct {
	Name string
	Tags [][]MetadataTypeTag
}

func CreateMetadataNative(props MetadataNativeProps) *MetadataNative {
	return &MetadataNative{
		Name: props.Name,
		Tags: cloneTagMatrix(props.Tags),
	}
}

func (m *MetadataNative) GetName() string {
	if m.typeName == "" {
		m.typeName = taggedReferenceName(m.Name, m.Tags)
	}
	return m.typeName
}

func (m *MetadataNative) ToJSON() MetadataReferenceJSON {
	return MetadataReferenceJSON{
		Name: m.Name,
		Tags: cloneTagMatrix(m.Tags),
	}
}
