package metadata

type IMetadataSchema_IAtomic struct {
  Type string
  Tags [][]IMetadataTypeTag
}

type MetadataAtomic struct {
  Type  string
  Tags  [][]IMetadataTypeTag
  name_ string
}

func MetadataAtomic_create(props MetadataAtomic) *MetadataAtomic {
  return &MetadataAtomic{
    Type: props.Type,
    Tags: props.Tags,
  }
}

func MetadataAtomic_from(json IMetadataSchema_IAtomic) *MetadataAtomic {
  return MetadataAtomic_create(MetadataAtomic{
    Type: json.Type,
    Tags: json.Tags,
  })
}

func (obj *MetadataAtomic) GetName() string {
  if obj.name_ == "" {
    obj.name_ = metadataAtomic_getName(obj)
  }
  return obj.name_
}

func (obj *MetadataAtomic) ToJSON() IMetadataSchema_IAtomic {
  return IMetadataSchema_IAtomic{
    Type: obj.Type,
    Tags: obj.Tags,
  }
}

func metadataAtomic_getName(obj *MetadataAtomic) string {
  return taggedName(obj.Type, obj.Tags)
}
