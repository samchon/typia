package metadata

func EmplaceMetadataObject(props IMetadataIteratorProps) MetadataObjectType {
	object, newbie := props.Components.EmplaceObject(props.Type)
	addBool(&object.Nullables, props.Metadata.Nullable)
	if !newbie || props.Type == nil {
		return object
	}
	for _, property := range props.Type.Properties() {
		key := MetadataHelper.LiteralToMetadata(property.Name)
		value := ExploreMetadata(ExploreMetadataProps{
			Options: props.Options, Checker: props.Checker, Components: props.Components, Errors: props.Errors,
			Type: property.Type, Explore: MetadataExplore{Object: object, Property: property.Name},
		})
		value.Optional = property.Optional
		value.Required = !property.Optional
		object.Properties = append(object.Properties, MetadataProperty{
			Key: key, Value: value, Description: property.Description, JSDocTags: property.JSDocTags, Mutability: property.Mutability,
		})
	}
	return object
}

func IterateOptionalCoalesce(props struct {
	Metadata *MetadataSchema
	Type     TypeLike
}) {
	IterateMetadataCoalesce(props.Metadata, props.Type)
}
