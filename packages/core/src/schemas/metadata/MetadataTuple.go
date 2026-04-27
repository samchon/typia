package metadata

type MetadataTuple struct {
	Type *MetadataTupleType
	Tags [][]MetadataTypeTag
}

type MetadataTupleProps struct {
	Type *MetadataTupleType
	Tags [][]MetadataTypeTag
}

func CreateMetadataTuple(props MetadataTupleProps) *MetadataTuple {
	return &MetadataTuple{
		Type: props.Type,
		Tags: cloneTagMatrix(props.Tags),
	}
}

func (m *MetadataTuple) ToJSON() MetadataReferenceJSON {
	return MetadataReferenceJSON{
		Name: m.Type.Name,
		Tags: cloneTagMatrix(m.Tags),
	}
}
