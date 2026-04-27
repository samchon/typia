package metadata

func IterateMetadataUnion(props IMetadataIteratorProps) bool {
	if props.Type == nil || !props.Type.IsUnion() {
		return false
	}
	for _, child := range props.Type.Types() {
		next := props
		next.Type = child
		next.Explore = props.Explore.WithAliased(false)
		IterateMetadata(next)
	}
	return true
}
