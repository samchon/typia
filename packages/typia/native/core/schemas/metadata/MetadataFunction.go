package metadata

type IMetadataSchema_IFunction struct {
	Parameters []*IMetadataSchema_IParameter
	Output     *IMetadataSchema
	Async      bool
}

type MetadataFunction struct {
	Parameters []*MetadataParameter
	Output     *MetadataSchema
	Async      bool
}

func MetadataFunction_create(props MetadataFunction) *MetadataFunction {
	return &MetadataFunction{
		Parameters: props.Parameters,
		Output:     props.Output,
		Async:      props.Async,
	}
}

func MetadataFunction_from(json IMetadataSchema_IFunction, dict IMetadataDictionary) *MetadataFunction {
	parameters := make([]*MetadataParameter, 0, len(json.Parameters))
	for _, p := range json.Parameters {
		parameters = append(parameters, MetadataParameter_from(*p, dict))
	}
	return MetadataFunction_create(MetadataFunction{
		Parameters: parameters,
		Output:     MetadataSchema_from(json.Output, dict),
		Async:      json.Async,
	})
}

func (obj *MetadataFunction) ToJSON() IMetadataSchema_IFunction {
	parameters := make([]*IMetadataSchema_IParameter, 0, len(obj.Parameters))
	for _, p := range obj.Parameters {
		json := p.ToJSON()
		parameters = append(parameters, &json)
	}
	return IMetadataSchema_IFunction{
		Parameters: parameters,
		Output:     obj.Output.ToJSON(),
		Async:      obj.Async,
	}
}
