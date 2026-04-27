package metadata

func IterateMetadataObject(props IMetadataIteratorProps, ensure bool) bool {
	if !ensure && (props.Type == nil || !props.Type.IsObject()) {
		return false
	}
	object := EmplaceMetadataObject(props)
	addObject(&props.Metadata.Objects, MetadataObject{Type: object})
	return true
}
