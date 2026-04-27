package factories

type jsonMetadataFactory struct{}

var JsonMetadataFactory jsonMetadataFactory

func (jsonMetadataFactory) Analyze(props JsonMetadataAnalyzeProps) (JsonMetadataOutput, error) {
	collection := NewMetadataCollection()
	result := MetadataFactory.Analyze(MetadataAnalyzeProps{
		Checker:    props.Checker,
		Components: collection,
		Type:       props.Type,
		Options: MetadataFactoryOptions{
			Absorb:   boolPtr(true),
			Escape:   boolPtr(true),
			Constant: boolPtr(true),
			Validate: func(next MetadataValidateProps) []string {
				errors := JsonMetadataFactory.Validate(next)
				if props.Validate != nil {
					errors = append(errors, props.Validate(next)...)
				}
				return errors
			},
		},
	})
	if !result.Success {
		return JsonMetadataOutput{}, TransformerErrorFrom(props.Method, result.Errors)
	}
	return JsonMetadataOutput{Collection: collection, Metadata: result.Data}, nil
}

func (jsonMetadataFactory) Validate(props MetadataValidateProps) []string {
	output := make([]string, 0)
	for _, atomic := range props.Metadata.Atomics {
		if atomic.Type == "bigint" {
			output = append(output, "JSON does not support bigint type.")
			break
		}
	}
	for _, constant := range props.Metadata.Constants {
		if constant.Type == "bigint" {
			output = append(output, "JSON does not support bigint type.")
			break
		}
	}
	for _, tuple := range props.Metadata.Tuples {
		for _, elem := range tuple.Type.Elements {
			if !elem.IsRequired() {
				output = append(output, "JSON does not support undefined type in array.")
				break
			}
		}
	}
	for _, array := range props.Metadata.Arrays {
		if !array.Type.Value.IsRequired() {
			output = append(output, "JSON does not support undefined type in array.")
			break
		}
	}
	if len(props.Metadata.Maps) != 0 {
		output = append(output, "JSON does not support Map type.")
	}
	if len(props.Metadata.Sets) != 0 {
		output = append(output, "JSON does not support Set type.")
	}
	for _, native := range props.Metadata.Natives {
		if !atomicNative(native.Name) && native.Name != "Date" {
			output = append(output, "JSON does not support "+native.Name+" type.")
		}
	}
	return output
}
