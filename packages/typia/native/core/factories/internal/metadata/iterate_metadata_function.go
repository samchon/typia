package metadata

import (
	nativechecker "github.com/microsoft/typescript-go/shim/checker"
	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

func Iterate_metadata_function(props IMetadataIteratorProps) bool {
	declaration := metadata_get_function_node(props.Type)
	if declaration == nil {
		return false
	}
	if props.Options.Functional == false {
		if len(props.Metadata.Functions) == 0 {
			props.Metadata.Functions = append(props.Metadata.Functions, schemametadata.MetadataFunction_create(schemametadata.MetadataFunction{
				Parameters: []*schemametadata.MetadataParameter{},
				Output:     schemametadata.MetadataSchema_initialize(),
				Async:      false,
			}))
		}
		return true
	}

	signatures := []*nativechecker.Signature{}
	if props.Checker != nil {
		signatures = props.Checker.GetSignaturesOfType(props.Type, nativechecker.SignatureKindCall)
	}
	if len(signatures) == 0 || signatures[0].Declaration() == nil {
		props.Metadata.Functions = append(props.Metadata.Functions, schemametadata.MetadataFunction_create(schemametadata.MetadataFunction{
			Parameters: []*schemametadata.MetadataParameter{},
			Output:     schemametadata.MetadataSchema_initialize(),
			Async:      false,
		}))
		return true
	}

	signature := signatures[0]
	returnType := props.Checker.GetReturnTypeOfSignature(signature)
	async := false
	if returnType != nil {
		if symbol := returnType.Symbol(); symbol != nil && symbol.Name == "Promise" {
			generic := metadata_get_type_arguments(props.Checker, returnType)
			if len(generic) != 0 {
				returnType = generic[0]
			}
			async = true
		}
	}

	parameters := make([]*schemametadata.MetadataParameter, 0, len(signature.Parameters()))
	for _, p := range signature.Parameters() {
		paramType := props.Checker.GetTypeOfSymbol(p)
		explore := props.Explore
		explore.Top = false
		explore.Parameter = p.Name
		parameters = append(parameters, schemametadata.MetadataParameter_create(schemametadata.MetadataParameter{
			Name: p.Name,
			Type: Explore_metadata(Explore_metadata_IProps{
				Options:     props.Options,
				Checker:     props.Checker,
				Components:  props.Components,
				Errors:      props.Errors,
				Type:        paramType,
				Explore:     explore,
				Intersected: false,
			}),
			TsType:      paramType,
			Description: metadata_node_description(p),
			JsDocTags:   metadata_node_js_doc_tags(p),
		}))
	}

	outputExplore := props.Explore
	outputExplore.Top = false
	outputExplore.Output = true
	outputOptions := props.Options
	outputOptions.Functional = false
	output := Explore_metadata(Explore_metadata_IProps{
		Options:     outputOptions,
		Checker:     props.Checker,
		Components:  props.Components,
		Errors:      props.Errors,
		Type:        returnType,
		Explore:     outputExplore,
		Intersected: false,
	})
	props.Metadata.Functions = append(props.Metadata.Functions, schemametadata.MetadataFunction_create(schemametadata.MetadataFunction{
		Parameters: parameters,
		Output:     output,
		Async:      async,
	}))
	return true
}
