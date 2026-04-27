package metadata

import "fmt"

type MetadataMap struct {
	Key   *MetadataSchema
	Value *MetadataSchema
	Tags  [][]MetadataTypeTag

	name string
}

type MetadataMapProps struct {
	Key   *MetadataSchema
	Value *MetadataSchema
	Tags  [][]MetadataTypeTag
}

func CreateMetadataMap(props MetadataMapProps) *MetadataMap {
	return &MetadataMap{
		Key:   props.Key,
		Value: props.Value,
		Tags:  cloneTagMatrix(props.Tags),
	}
}

func (m *MetadataMap) GetName() string {
	if m.name == "" {
		symbol := fmt.Sprintf("Map<%s, %s>", m.Key.GetName(), m.Value.GetName())
		m.name = taggedReferenceName(symbol, m.Tags)
	}
	return m.name
}

func (m *MetadataMap) ToJSON() MetadataMapJSON {
	return MetadataMapJSON{
		Key:   m.Key.ToJSON(),
		Value: m.Value.ToJSON(),
		Tags:  cloneTagMatrix(m.Tags),
	}
}
