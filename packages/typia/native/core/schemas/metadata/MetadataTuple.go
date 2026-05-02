package metadata

type MetadataTuple struct {
  Type *MetadataTupleType
  Tags [][]IMetadataTypeTag
}

func MetadataTuple_create(props MetadataTuple) *MetadataTuple {
  return &MetadataTuple{
    Type: props.Type,
    Tags: cloneTagMatrix(props.Tags),
  }
}

func (obj *MetadataTuple) ToJSON() IMetadataSchema_IReference {
  return IMetadataSchema_IReference{
    Name: obj.Type.Name,
    Tags: cloneTagMatrix(obj.Tags),
  }
}
