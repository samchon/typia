package metadata

type IMetadataSchema_IConstant struct {
  Type   string
  Values []IMetadataSchema_IConstant_IValue
}

type MetadataConstant struct {
  Type   string
  Values []*MetadataConstantValue
}

func MetadataConstant_create(props MetadataConstant) *MetadataConstant {
  values := make([]*MetadataConstantValue, 0, len(props.Values))
  for _, value := range props.Values {
    if value == nil {
      continue
    }
    values = append(values, MetadataConstantValue_create(*value))
  }
  return &MetadataConstant{
    Type:   props.Type,
    Values: values,
  }
}

func MetadataConstant_from(json IMetadataSchema_IConstant) *MetadataConstant {
  values := make([]*MetadataConstantValue, 0, len(json.Values))
  for _, value := range json.Values {
    values = append(values, MetadataConstantValue_from(value))
  }
  return MetadataConstant_create(MetadataConstant{
    Type:   json.Type,
    Values: values,
  })
}

func (obj *MetadataConstant) ToJSON() IMetadataSchema_IConstant {
  values := make([]IMetadataSchema_IConstant_IValue, 0, len(obj.Values))
  for _, value := range obj.Values {
    values = append(values, value.ToJSON())
  }
  return IMetadataSchema_IConstant{
    Type:   obj.Type,
    Values: values,
  }
}
