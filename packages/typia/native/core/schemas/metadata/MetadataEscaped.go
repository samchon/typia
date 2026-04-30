package metadata

type IMetadataSchema_IEscaped struct {
	Original *IMetadataSchema
	Returns  *IMetadataSchema
}

type MetadataEscaped struct {
	Original *MetadataSchema
	Returns  *MetadataSchema
}

func MetadataEscaped_from(props IMetadataSchema_IEscaped, dict IMetadataDictionary) *MetadataEscaped {
	return MetadataEscaped_create(MetadataEscaped{
		Original: MetadataSchema_from(props.Original, dict),
		Returns:  MetadataSchema_from(props.Returns, dict),
	})
}

func MetadataEscaped_create(props MetadataEscaped) *MetadataEscaped {
	return &MetadataEscaped{
		Original: props.Original,
		Returns:  props.Returns,
	}
}

func (obj *MetadataEscaped) GetName() string {
	return obj.Returns.GetName()
}

func (obj *MetadataEscaped) ToJSON() IMetadataSchema_IEscaped {
	return IMetadataSchema_IEscaped{
		Original: obj.Original.ToJSON(),
		Returns:  obj.Returns.ToJSON(),
	}
}
