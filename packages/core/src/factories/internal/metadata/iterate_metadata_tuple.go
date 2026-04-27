package metadata

func IterateMetadataTuple(props IMetadataIteratorProps) bool {
	if props.Type == nil || !props.Type.IsTuple() {
		return false
	}
	tupleType := EmplaceMetadataTuple(props)
	addTuple(&props.Metadata.Tuples, MetadataTuple{Type: tupleType})
	return true
}
