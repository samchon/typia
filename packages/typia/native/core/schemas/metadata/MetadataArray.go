package metadata

type MetadataArray struct {
  Type  *MetadataArrayType
  Tags  [][]IMetadataTypeTag
  name_ string
}

func MetadataArray_create(props MetadataArray) *MetadataArray {
  return &MetadataArray{
    Type: props.Type,
    Tags: cloneTagMatrix(props.Tags),
  }
}

func (obj *MetadataArray) GetName() string {
  if obj.name_ == "" {
    obj.name_ = taggedName(obj.Type.Name, obj.Tags)
  }
  return obj.name_
}

func (obj *MetadataArray) ToJSON() IMetadataSchema_IReference {
  return IMetadataSchema_IReference{
    Name: obj.Type.Name,
    Tags: cloneTagMatrix(obj.Tags),
  }
}
