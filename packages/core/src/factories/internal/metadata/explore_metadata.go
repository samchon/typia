package metadata

func ExploreMetadata(props ExploreMetadataProps) *MetadataSchema {
	metadata := NewMetadataSchema(props.Explore.Escaped)
	if props.Type == nil {
		return metadata
	}
	props.Intersected = false
	IterateMetadata(IMetadataIteratorProps{
		Options: props.Options, Checker: props.Checker, Components: props.Components, Errors: props.Errors,
		Metadata: metadata, Type: props.Type, Explore: props.Explore, Intersected: props.Intersected,
	})
	EmendMetadataAtomics(metadata)
	if metadata.Escaped != nil {
		EmendMetadataAtomics(metadata.Escaped.Original)
		EmendMetadataAtomics(metadata.Escaped.Returns)
	}
	return metadata
}
