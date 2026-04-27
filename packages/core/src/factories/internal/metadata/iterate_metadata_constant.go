package metadata

func IterateMetadataConstant(props IMetadataIteratorProps) bool {
	if props.Options.Constant != nil && !*props.Options.Constant {
		return false
	}
	if props.Type == nil {
		return false
	}
	if value, ok := props.Type.Literal(); ok {
		kind := literalKind(value)
		constant := takeConstant(&props.Metadata.Constants, kind)
		addConstantValue(&constant.Values, MetadataConstantValue{Value: value})
		return true
	}
	return false
}
