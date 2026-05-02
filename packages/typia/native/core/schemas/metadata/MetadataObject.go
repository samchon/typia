package metadata

type MetadataObject struct {
  Type  *MetadataObjectType
  Tags  [][]IMetadataTypeTag
  name_ string
}

func MetadataObject_create(props MetadataObject) *MetadataObject {
  return &MetadataObject{
    Type: props.Type,
    Tags: cloneTagMatrix(props.Tags),
  }
}

func (obj *MetadataObject) GetName() string {
  if obj.name_ == "" {
    obj.name_ = taggedName(obj.Type.Name, obj.Tags)
  }
  return obj.name_
}

func (obj *MetadataObject) ToJSON() IMetadataSchema_IReference {
  return IMetadataSchema_IReference{
    Name: obj.Type.Name,
    Tags: cloneTagMatrix(obj.Tags),
  }
}
