package metadata

func IterateMetadataMap(props IMetadataIteratorProps) bool {
	if props.Type == nil || !props.Type.IsMap() || len(props.Type.TypeArguments()) != 2 {
		return false
	}
	keyType := props.Type.TypeArguments()[0]
	valueType := props.Type.TypeArguments()[1]
	key := ExploreMetadata(ExploreMetadataProps{Options: props.Options, Checker: props.Checker, Components: props.Components, Errors: props.Errors, Type: keyType, Explore: props.Explore.WithAliased(false).WithEscaped(false)})
	value := ExploreMetadata(ExploreMetadataProps{Options: props.Options, Checker: props.Checker, Components: props.Components, Errors: props.Errors, Type: valueType, Explore: props.Explore.WithAliased(false).WithEscaped(false)})
	addMap(&props.Metadata.Maps, MetadataMap{Key: key, Value: value})
	return true
}
