package metadata

type MetadataAtomic struct {
	Type string
	Tags [][]MetadataTypeTag

	name string
}

type MetadataAtomicProps struct {
	Type string
	Tags [][]MetadataTypeTag
}

func CreateMetadataAtomic(props MetadataAtomicProps) *MetadataAtomic {
	return &MetadataAtomic{
		Type: props.Type,
		Tags: cloneTagMatrix(props.Tags),
	}
}

func MetadataAtomicFrom(json MetadataAtomicJSON) *MetadataAtomic {
	return CreateMetadataAtomic(MetadataAtomicProps{
		Type: json.Type,
		Tags: normalizeTagMatrixFromJSON(json.Tags),
	})
}

func (m *MetadataAtomic) GetName() string {
	if m.name == "" {
		m.name = taggedReferenceName(m.Type, m.Tags)
	}
	return m.name
}

func (m *MetadataAtomic) ToJSON() MetadataAtomicJSON {
	return MetadataAtomicJSON{
		Type: m.Type,
		Tags: normalizeTagMatrixToJSON(m.Tags),
	}
}
