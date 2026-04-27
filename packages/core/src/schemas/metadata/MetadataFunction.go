package metadata

type MetadataFunction struct {
	Parameters []*MetadataParameter
	Output     *MetadataSchema
	Async      bool
}

type MetadataFunctionProps struct {
	Parameters []*MetadataParameter
	Output     *MetadataSchema
	Async      bool
}

func CreateMetadataFunction(props MetadataFunctionProps) *MetadataFunction {
	return &MetadataFunction{
		Parameters: append([]*MetadataParameter(nil), props.Parameters...),
		Output:     props.Output,
		Async:      props.Async,
	}
}

func MetadataFunctionFrom(json MetadataFunctionJSON, dict *IMetadataDictionary) (*MetadataFunction, error) {
	parameters := make([]*MetadataParameter, 0, len(json.Parameters))
	for _, param := range json.Parameters {
		next, err := MetadataParameterFrom(param, dict)
		if err != nil {
			return nil, err
		}
		parameters = append(parameters, next)
	}
	output, err := MetadataSchemaFrom(json.Output, dict)
	if err != nil {
		return nil, err
	}
	return CreateMetadataFunction(MetadataFunctionProps{
		Parameters: parameters,
		Output:     output,
		Async:      json.Async,
	}), nil
}

func (m *MetadataFunction) ToJSON() MetadataFunctionJSON {
	parameters := make([]MetadataParameterJSON, 0, len(m.Parameters))
	for _, param := range m.Parameters {
		parameters = append(parameters, param.ToJSON())
	}
	return MetadataFunctionJSON{
		Parameters: parameters,
		Output:     m.Output.ToJSON(),
		Async:      m.Async,
	}
}
