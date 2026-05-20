package metadata

type IMetadataTypeTag struct {
  Target    string
  Name      string
  Kind      string
  Exclusive any
  Value     any
  Validate  string
  Schema    any
}

type IMetadataSchema_IReference struct {
  Name string
  Tags [][]IMetadataTypeTag
}

type MetadataNative struct {
  Name      string
  Tags      [][]IMetadataTypeTag
  typeName_ string
}

func MetadataNative_create(props MetadataNative) *MetadataNative {
  return &MetadataNative{
    Name: props.Name,
    Tags: props.Tags,
  }
}

func (obj *MetadataNative) GetName() string {
  if obj.typeName_ == "" {
    obj.typeName_ = metadataNative_getName(obj)
  }
  return obj.typeName_
}

func (obj *MetadataNative) ToJSON() IMetadataSchema_IReference {
  return IMetadataSchema_IReference{
    Name: obj.Name,
    Tags: obj.Tags,
  }
}

func metadataNative_getName(obj *MetadataNative) string {
  return taggedName(obj.Name, obj.Tags)
}
