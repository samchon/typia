package metadata

func IterateMetadataTemplate(props IMetadataIteratorProps) bool {
	if props.Type == nil || props.Type.Flags()&TypeFlagTemplateLiteral == 0 {
		return false
	}
	row := make([]*MetadataSchema, 0)
	for _, part := range props.Type.TemplateParts() {
		if part.Text != "" {
			row = append(row, MetadataHelper.LiteralToMetadata(part.Text))
		}
		if part.Type != nil {
			row = append(row, ExploreMetadata(ExploreMetadataProps{
				Options: props.Options, Checker: props.Checker, Components: props.Components, Errors: props.Errors,
				Type: part.Type, Explore: props.Explore.WithAliased(false).WithEscaped(false),
			}))
		}
	}
	props.Metadata.Templates = append(props.Metadata.Templates, MetadataTemplate{Row: row})
	return true
}
