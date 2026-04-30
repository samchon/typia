package metadata

type IMetadataSchema_IMap struct {
	Key   *IMetadataSchema
	Value *IMetadataSchema
	Tags  [][]IMetadataTypeTag
}

type MetadataMap struct {
	Key   *MetadataSchema
	Value *MetadataSchema
	Tags  [][]IMetadataTypeTag
	name_ string
}

func MetadataMap_create(props MetadataMap) *MetadataMap {
	return &MetadataMap{
		Key:   props.Key,
		Value: props.Value,
		Tags:  cloneTagMatrix(props.Tags),
	}
}

func (obj *MetadataMap) GetName() string {
	if obj.name_ == "" {
		obj.name_ = taggedName("Map<"+safeMetadataName(obj.Key)+", "+safeMetadataName(obj.Value)+">", obj.Tags)
	}
	return obj.name_
}

func (obj *MetadataMap) ToJSON() IMetadataSchema_IMap {
	return IMetadataSchema_IMap{
		Key:   obj.Key.ToJSON(),
		Value: obj.Value.ToJSON(),
		Tags:  cloneTagMatrix(obj.Tags),
	}
}
