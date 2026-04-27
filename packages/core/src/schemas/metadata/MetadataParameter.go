package metadata

type MetadataParameter struct {
	Name        string
	Type        *MetadataSchema
	Description *string
	JsDocTags   []JsDocTagInfo
	TsType      any
}

type MetadataParameterProps struct {
	Name        string
	Type        *MetadataSchema
	Description *string
	JsDocTags   []JsDocTagInfo
	TsType      any
}

func CreateMetadataParameter(props MetadataParameterProps) *MetadataParameter {
	return &MetadataParameter{
		Name:        props.Name,
		Type:        props.Type,
		Description: props.Description,
		JsDocTags:   cloneJsDocTags(props.JsDocTags),
		TsType:      props.TsType,
	}
}

func MetadataParameterFrom(json MetadataParameterJSON, dict *IMetadataDictionary) (*MetadataParameter, error) {
	schema, err := MetadataSchemaFrom(json.Type, dict)
	if err != nil {
		return nil, err
	}
	return CreateMetadataParameter(MetadataParameterProps{
		Name:        json.Name,
		Type:        schema,
		Description: json.Description,
		JsDocTags:   json.JsDocTags,
	}), nil
}

func (m *MetadataParameter) ToJSON() MetadataParameterJSON {
	return MetadataParameterJSON{
		Name:        m.Name,
		Type:        m.Type.ToJSON(),
		Description: m.Description,
		JsDocTags:   cloneJsDocTags(m.JsDocTags),
	}
}
