package metadata

import "fmt"

type MetadataSet struct {
	Value *MetadataSchema
	Tags  [][]MetadataTypeTag

	name string
}

type MetadataSetProps struct {
	Value *MetadataSchema
	Tags  [][]MetadataTypeTag
}

func CreateMetadataSet(props MetadataSetProps) *MetadataSet {
	return &MetadataSet{
		Value: props.Value,
		Tags:  cloneTagMatrix(props.Tags),
	}
}

func (m *MetadataSet) GetName() string {
	if m.name == "" {
		m.name = taggedReferenceName(fmt.Sprintf("Set<%s>", m.Value.GetName()), m.Tags)
	}
	return m.name
}

func (m *MetadataSet) ToJSON() MetadataSetJSON {
	return MetadataSetJSON{
		Value: m.Value.ToJSON(),
		Tags:  cloneTagMatrix(m.Tags),
	}
}
