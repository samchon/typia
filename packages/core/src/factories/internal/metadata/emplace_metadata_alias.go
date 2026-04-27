package metadata

func EmplaceMetadataAlias(props IMetadataIteratorProps) MetadataAliasType {
	alias, newbie, closure := props.Components.EmplaceAlias(props.Type)
	addBool(&alias.Nullables, props.Metadata.Nullable)
	if !newbie {
		return alias
	}
	value := ExploreMetadata(ExploreMetadataProps{
		Options: props.Options, Checker: props.Checker, Components: props.Components, Errors: props.Errors,
		Type: props.Type, Explore: props.Explore.WithAliased(true).WithEscaped(false),
	})
	closure(value)
	return alias
}
