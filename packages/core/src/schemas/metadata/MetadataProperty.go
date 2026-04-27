package metadata

type MetadataProperty struct {
	Key         *MetadataSchema
	Value       *MetadataSchema
	Description *string
	JsDocTags   []JsDocTagInfo
	Mutability  *string

	OfProtobuf any
}

type MetadataPropertyProps struct {
	Key         *MetadataSchema
	Value       *MetadataSchema
	Description *string
	JsDocTags   []JsDocTagInfo
	Mutability  *string
	OfProtobuf  any
}

func CreateMetadataProperty(props MetadataPropertyProps) *MetadataProperty {
	return &MetadataProperty{
		Key:         props.Key,
		Value:       props.Value,
		Description: props.Description,
		JsDocTags:   cloneJsDocTags(props.JsDocTags),
		Mutability:  props.Mutability,
		OfProtobuf:  props.OfProtobuf,
	}
}

func MetadataPropertyFrom(property MetadataPropertyJSON, dict *IMetadataDictionary) (*MetadataProperty, error) {
	key, err := MetadataSchemaFrom(property.Key, dict)
	if err != nil {
		return nil, err
	}
	value, err := MetadataSchemaFrom(property.Value, dict)
	if err != nil {
		return nil, err
	}
	return CreateMetadataProperty(MetadataPropertyProps{
		Key:         key,
		Value:       value,
		Description: property.Description,
		JsDocTags:   property.JsDocTags,
		Mutability:  property.Mutability,
	}), nil
}

func (m *MetadataProperty) ToJSON() MetadataPropertyJSON {
	return MetadataPropertyJSON{
		Key:         m.Key.ToJSON(),
		Value:       m.Value.ToJSON(),
		Description: m.Description,
		JsDocTags:   cloneJsDocTags(m.JsDocTags),
		Mutability:  m.Mutability,
	}
}
