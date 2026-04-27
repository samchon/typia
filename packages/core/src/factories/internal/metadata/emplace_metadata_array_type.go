package metadata

func EmplaceMetadataArrayType(props IMetadataIteratorProps, array TypeLike) MetadataArrayType {
	arrayType, newbie, setValue := props.Components.EmplaceArray(props.Type)
	addBool(&arrayType.Nullables, props.Metadata.Nullable)
	if !newbie {
		return arrayType
	}
	valueType := props.Type
	if array != nil && len(array.TypeArguments()) != 0 {
		valueType = array.TypeArguments()[0]
	}
	value := ExploreMetadata(ExploreMetadataProps{
		Options: props.Options, Checker: props.Checker, Components: props.Components, Errors: props.Errors,
		Type: valueType, Explore: props.Explore.WithAliased(false).WithEscaped(false),
	})
	setValue(value)
	return arrayType
}
