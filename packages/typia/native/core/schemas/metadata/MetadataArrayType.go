package metadata

type IMetadataSchema_IArrayType struct {
  Name      string
  Value     *IMetadataSchema
  Nullables []bool
  Recursive bool
  Index     *int
}

type MetadataArrayType struct {
  Name      string
  Value     *MetadataSchema
  Nullables []bool
  Recursive bool
  Index     *int
}

func MetadataArrayType__From_without_value(props IMetadataSchema_IArrayType) *MetadataArrayType {
  return MetadataArrayType_create(MetadataArrayType{
    Name:      props.Name,
    Value:     nil,
    Index:     props.Index,
    Recursive: props.Recursive,
    Nullables: append([]bool{}, props.Nullables...),
  })
}

func MetadataArrayType_create(props MetadataArrayType) *MetadataArrayType {
  return &MetadataArrayType{
    Name:      props.Name,
    Value:     props.Value,
    Index:     props.Index,
    Recursive: props.Recursive,
    Nullables: append([]bool{}, props.Nullables...),
  }
}

func (obj *MetadataArrayType) ToJSON() IMetadataSchema_IArrayType {
  return IMetadataSchema_IArrayType{
    Name:      obj.Name,
    Value:     obj.Value.ToJSON(),
    Nullables: append([]bool{}, obj.Nullables...),
    Recursive: obj.Recursive,
    Index:     obj.Index,
  }
}
