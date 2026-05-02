package metadata

type IMetadataSchema_IAliasType struct {
  Name        string
  Value       *IMetadataSchema
  Description *string
  JsDocTags   []IJsDocTagInfo
  Recursive   bool
  Nullables   []bool
}

type MetadataAliasType struct {
  Name        string
  Value       *MetadataSchema
  Description *string
  JsDocTags   []IJsDocTagInfo
  Recursive   bool
  Nullables   []bool
}

func MetadataAliasType_create(props MetadataAliasType) *MetadataAliasType {
  return &MetadataAliasType{
    Name:        props.Name,
    Value:       props.Value,
    Description: props.Description,
    JsDocTags:   append([]IJsDocTagInfo{}, props.JsDocTags...),
    Recursive:   props.Recursive,
    Nullables:   append([]bool{}, props.Nullables...),
  }
}

func MetadataAliasType__From_without_value(props IMetadataSchema_IAliasType) *MetadataAliasType {
  return MetadataAliasType_create(MetadataAliasType{
    Name:        props.Name,
    Value:       nil,
    Description: props.Description,
    Recursive:   props.Recursive,
    JsDocTags:   append([]IJsDocTagInfo{}, props.JsDocTags...),
    Nullables:   append([]bool{}, props.Nullables...),
  })
}

func (obj *MetadataAliasType) ToJSON() IMetadataSchema_IAliasType {
  return IMetadataSchema_IAliasType{
    Name:        obj.Name,
    Value:       obj.Value.ToJSON(),
    Description: obj.Description,
    Recursive:   obj.Recursive,
    JsDocTags:   append([]IJsDocTagInfo{}, obj.JsDocTags...),
    Nullables:   append([]bool{}, obj.Nullables...),
  }
}
