package metadata

func EmplaceMetadataTuple(props IMetadataIteratorProps) MetadataTupleType {
	tuple, newbie, closure := props.Components.EmplaceTuple(props.Type)
	addBool(&tuple.Nullables, props.Metadata.Nullable)
	if !newbie {
		return tuple
	}
	elements := make([]*MetadataSchema, 0)
	if props.Type != nil {
		for _, elem := range props.Type.TypeArguments() {
			child := ExploreMetadata(ExploreMetadataProps{
				Options: props.Options, Checker: props.Checker, Components: props.Components, Errors: props.Errors,
				Type: elem, Explore: props.Explore.WithAliased(false).WithEscaped(false),
			})
			elements = append(elements, child)
		}
	}
	closure(elements)
	return tuple
}
