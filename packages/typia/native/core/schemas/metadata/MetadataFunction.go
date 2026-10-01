package metadata

// IMetadataSchema_IFunction is the JSON form of a function: its parameters, its
// output schema and whether it is async.
//
// @evidence contracts/common.md#principled-implementation The JSON form keeps the signature data a validator or schema needs.
// @evidence contracts/common.md#clear-and-simple-design Three fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record holds and which function reads or writes it.
type IMetadataSchema_IFunction struct {
  Parameters []*IMetadataSchema_IParameter
  Output     *IMetadataSchema
  Async      bool
}

// MetadataFunction is a function type: parameters, the schema of the awaited
// output and whether the function is async.
//
// @evidence contracts/common.md#principled-implementation A function schema is its parameter list plus the output and the async flag, which is what the validators and the function-based programmers read.
// @evidence contracts/common.md#clear-and-simple-design Three fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names each part.
type MetadataFunction struct {
  Parameters []*MetadataParameter
  Output     *MetadataSchema
  Async      bool
}

// MetadataFunction_create builds a function from props. The parameter slice and
// the output schema are stored as given.
//
// @evidence contracts/common.md#principled-implementation The signature is the function's definition, so the pieces are stored and not copied.
// @evidence contracts/common.md#clear-and-simple-design One constructor.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Nothing is dropped.
// @evidence contracts/common.md#meaningful-documentation The doc states that the slice is shared, not copied.
func MetadataFunction_create(props MetadataFunction) *MetadataFunction {
  return &MetadataFunction{
    Parameters: props.Parameters,
    Output:     props.Output,
    Async:      props.Async,
  }
}

// MetadataFunction_from builds a function from its JSON form, loading every
// parameter and the output against dict.
//
// @evidence contracts/common.md#principled-implementation Each part is loaded through its own from function so reference resolution has one implementation.
// @evidence contracts/common.md#clear-and-simple-design One loop and one constructor call.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A nil parameter or output is a caller error and is not masked.
// @evidence contracts/common.md#meaningful-documentation The doc states the dictionary use.
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

// ToJSON returns the JSON form of the function; the output schema must be set.
//
// @evidence contracts/common.md#principled-implementation Each parameter and the output are converted by their own ToJSON.
// @evidence contracts/common.md#clear-and-simple-design One loop and one record construction.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A nil output is a caller error that the doc states.
// @evidence contracts/common.md#meaningful-documentation The doc states the precondition.
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
