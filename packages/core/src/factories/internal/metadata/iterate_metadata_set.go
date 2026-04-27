package metadata

func IterateMetadataSet(props IMetadataIteratorProps) bool {
	if props.Type == nil || !props.Type.IsSet() || len(props.Type.TypeArguments()) != 1 {
		return false
	}
	keyType := props.Type.TypeArguments()[0]
	value := ExploreMetadata(ExploreMetadataProps{Options: props.Options, Checker: props.Checker, Components: props.Components, Errors: props.Errors, Type: keyType, Explore: props.Explore.WithAliased(false).WithEscaped(false)})
	addSet(&props.Metadata.Sets, MetadataSet{Value: value})
	return true
}
