package metadata

type MetadataAlias struct {
  Type  *MetadataAliasType
  Tags  [][]IMetadataTypeTag
  name_ string
}

func MetadataAlias_create(props MetadataAlias) *MetadataAlias {
  return &MetadataAlias{
    Type: props.Type,
    Tags: cloneTagMatrix(props.Tags),
  }
}

func (obj *MetadataAlias) GetName() string {
  if obj.name_ == "" {
    obj.name_ = taggedName(obj.Type.Name, obj.Tags)
  }
  return obj.name_
}

func (obj *MetadataAlias) ToJSON() IMetadataSchema_IReference {
  return IMetadataSchema_IReference{
    Name: obj.Type.Name,
    Tags: cloneTagMatrix(obj.Tags),
  }
}
