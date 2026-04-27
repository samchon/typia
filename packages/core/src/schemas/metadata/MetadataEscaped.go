package metadata

type MetadataEscaped struct {
	Original *MetadataSchema
	Returns  *MetadataSchema
}

type MetadataEscapedProps struct {
	Original *MetadataSchema
	Returns  *MetadataSchema
}

func CreateMetadataEscaped(props MetadataEscapedProps) *MetadataEscaped {
	return &MetadataEscaped{
		Original: props.Original,
		Returns:  props.Returns,
	}
}

func MetadataEscapedFrom(props MetadataEscapedJSON, dict *IMetadataDictionary) (*MetadataEscaped, error) {
	original, err := MetadataSchemaFrom(props.Original, dict)
	if err != nil {
		return nil, err
	}
	returns, err := MetadataSchemaFrom(props.Returns, dict)
	if err != nil {
		return nil, err
	}
	return CreateMetadataEscaped(MetadataEscapedProps{
		Original: original,
		Returns:  returns,
	}), nil
}

func (m *MetadataEscaped) GetName() string {
	if m == nil || m.Returns == nil {
		return ""
	}
	return m.Returns.GetName()
}

func (m *MetadataEscaped) ToJSON() MetadataEscapedJSON {
	return MetadataEscapedJSON{
		Original: m.Original.ToJSON(),
		Returns:  m.Returns.ToJSON(),
	}
}
