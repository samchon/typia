package metadata

func IterateMetadataIntersection(props IMetadataIteratorProps) bool {
	if props.Intersected || props.Type == nil || !props.Type.IsIntersection() {
		return false
	}
	children := props.Type.Types()
	if len(children) == 0 {
		return false
	}
	tagObjects := make([]MetadataObjectType, 0)
	metadatas := make([]*MetadataSchema, 0, len(children))
	for _, child := range children {
		meta := ExploreMetadata(ExploreMetadataProps{
			Options: props.Options.WithAbsorb(true).WithFunctional(false), Checker: props.Checker, Components: props.Components,
			Errors: props.Errors, Type: child, Explore: props.Explore.WithAliased(false),
		})
		if len(meta.Objects) == 1 && IsTypeTagObject(meta.Objects[0].Type) {
			tagObjects = append(tagObjects, meta.Objects[0].Type)
		} else {
			metadatas = append(metadatas, meta)
		}
	}
	if len(metadatas) == 0 && len(tagObjects) != 0 {
		props.Errors.Add(MetadataError{Name: "intersection", Explore: props.Explore, Messages: []string{"type tag cannot be standalone"}})
		return true
	}
	for _, meta := range metadatas {
		AbsorbMetadata(props.Metadata, meta)
	}
	tags := AnalyzeTypeTags(tagObjects, "object")
	if len(tags) != 0 {
		assignTags(props.Metadata, tags)
	}
	return true
}
