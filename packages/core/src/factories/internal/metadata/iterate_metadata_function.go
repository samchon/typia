package metadata

func IterateMetadataFunction(props IMetadataIteratorProps) bool {
	if props.Type == nil || props.Type.Function() == nil {
		return false
	}
	if props.Options.Functional == nil || !*props.Options.Functional {
		if len(props.Metadata.Functions) == 0 {
			props.Metadata.Functions = append(props.Metadata.Functions, MetadataFunction{Output: NewMetadataSchema()})
		}
		return true
	}
	function := props.Type.Function()
	parameters := make([]MetadataParameter, 0, len(function.Parameters()))
	for _, param := range function.Parameters() {
		parameters = append(parameters, MetadataParameter{
			Name: param.Name,
			Type: ExploreMetadata(ExploreMetadataProps{
				Options: props.Options, Checker: props.Checker, Components: props.Components, Errors: props.Errors,
				Type: param.Type, Explore: props.Explore.WithTop(false),
			}),
			TSType: param.Type, Description: param.Description, JSDocTags: param.JSDocTags,
		})
	}
	props.Metadata.Functions = append(props.Metadata.Functions, MetadataFunction{
		Parameters: parameters,
		Async:      function.Async(),
		Output: ExploreMetadata(ExploreMetadataProps{
			Options: props.Options.WithFunctional(false), Checker: props.Checker, Components: props.Components, Errors: props.Errors,
			Type: function.ReturnType(), Explore: props.Explore.WithTop(false),
		}),
	})
	return true
}
