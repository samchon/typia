package metadata

type IMetadataSchema_ISet struct {
  Value *IMetadataSchema
  Tags  [][]IMetadataTypeTag
}

type MetadataSet struct {
  Value *MetadataSchema
  Tags  [][]IMetadataTypeTag
  name_ string
}

func MetadataSet_create(props MetadataSet) *MetadataSet {
  return &MetadataSet{
    Value: props.Value,
    Tags:  cloneTagMatrix(props.Tags),
  }
}

func (obj *MetadataSet) GetName() string {
  if obj.name_ == "" {
    obj.name_ = taggedName("Set<"+safeMetadataName(obj.Value)+">", obj.Tags)
  }
  return obj.name_
}

func (obj *MetadataSet) ToJSON() IMetadataSchema_ISet {
  return IMetadataSchema_ISet{
    Value: obj.Value.ToJSON(),
    Tags:  cloneTagMatrix(obj.Tags),
  }
}
