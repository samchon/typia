package metadata

func IterateMetadataEscape(props IMetadataIteratorProps) bool {
	if props.Options.Escape != nil && !*props.Options.Escape {
		return false
	}
	if props.Explore.Escaped || props.Checker == nil || props.Type == nil {
		return false
	}
	escaped := props.Checker.ReturnTypeOfMethod(props.Type, "toJSON")
	if escaped == nil {
		return false
	}
	if props.Metadata.Escaped == nil {
		props.Metadata.Escaped = &MetadataEscaped{Original: NewMetadataSchema(), Returns: NewMetadataSchema()}
	}
	IterateMetadata(IMetadataIteratorProps{Options: props.Options, Checker: props.Checker, Components: props.Components, Errors: props.Errors, Metadata: props.Metadata.Escaped.Original, Type: props.Type, Explore: props.Explore.WithEscaped(true)})
	IterateMetadata(IMetadataIteratorProps{Options: props.Options, Checker: props.Checker, Components: props.Components, Errors: props.Errors, Metadata: props.Metadata.Escaped.Returns, Type: escaped, Explore: props.Explore.WithEscaped(true)})
	return true
}
