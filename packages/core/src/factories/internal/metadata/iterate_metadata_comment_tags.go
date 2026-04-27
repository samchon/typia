package metadata

func IterateMetadataCommentTags(props struct {
	Errors *MetadataErrors
	Object *MetadataObjectType
}) {
	if props.Object == nil || props.Object.Tagged {
		return
	}
	props.Object.Tagged = true
	for _, property := range props.Object.Properties {
		AnalyzeCommentTags(struct {
			Errors   *MetadataErrors
			Metadata *MetadataSchema
			Tags     []JSDocTag
			Explore  MetadataExplore
		}{
			Errors: props.Errors, Metadata: property.Value, Tags: property.JSDocTags,
			Explore: MetadataExplore{Object: props.Object, Property: property.Key.GetSoleLiteral()},
		})
	}
}
