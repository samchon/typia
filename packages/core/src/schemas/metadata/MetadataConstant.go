package metadata

type MetadataConstant struct {
	Type   string
	Values []*MetadataConstantValue
}

type MetadataConstantProps struct {
	Type   string
	Values []*MetadataConstantValue
}

func CreateMetadataConstant(props MetadataConstantProps) *MetadataConstant {
	return &MetadataConstant{
		Type:   props.Type,
		Values: append([]*MetadataConstantValue(nil), props.Values...),
	}
}

func MetadataConstantFrom(json MetadataConstantJSON) *MetadataConstant {
	values := make([]*MetadataConstantValue, 0, len(json.Values))
	for _, value := range json.Values {
		values = append(values, MetadataConstantValueFrom(value))
	}
	return CreateMetadataConstant(MetadataConstantProps{
		Type:   json.Type,
		Values: values,
	})
}

func (m *MetadataConstant) ToJSON() MetadataConstantJSON {
	values := make([]MetadataConstantValueJSON, 0, len(m.Values))
	for _, value := range m.Values {
		values = append(values, value.ToJSON())
	}
	return MetadataConstantJSON{
		Type:   m.Type,
		Values: values,
	}
}
