package metadata

func IterateMetadata(props IMetadataIteratorProps) {
	if props.Type == nil || props.Metadata == nil {
		return
	}
	if props.Type.IsTypeParameter() {
		props.Errors.Add(MetadataError{Name: props.Type.String(), Explore: props.Explore, Messages: []string{"non-specified generic argument found."}})
		return
	}
	if (!props.Explore.Aliased && IterateMetadataAlias(props)) ||
		IterateMetadataIntersection(props) ||
		IterateMetadataUnion(props) ||
		IterateMetadataEscape(props) {
		return
	}
	IterateMetadataCoalesce(props.Metadata, props.Type)
	IterateMetadataFunction(props)
	IterateMetadataConstant(props)
	IterateMetadataTemplate(props)
	IterateMetadataAtomic(props.Metadata, props.Type)
	IterateMetadataTuple(props)
	IterateMetadataArray(props)
	IterateMetadataNative(props)
	IterateMetadataMap(props)
	IterateMetadataSet(props)
	IterateMetadataObject(props, false)
}
