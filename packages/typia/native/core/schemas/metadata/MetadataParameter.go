package metadata

import shimchecker "github.com/microsoft/typescript-go/shim/checker"

// IMetadataSchema_IParameter is the JSON form of a function parameter: name,
// type schema, description and JSDoc tags.
//
// @evidence contracts/common.md#principled-implementation The JSON form lists what a parameter needs as data and leaves out the compiler type.
// @evidence contracts/common.md#clear-and-simple-design Four fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc explains the signature projection, with each serialized field documented separately.
type IMetadataSchema_IParameter struct {
  // Name is the parameter name supplied by the selected signature.
  Name string

  // Type is the serialized metadata of the parameter's type.
  Type *IMetadataSchema

  // Description is the parameter documentation, or nil when absent.
  Description *string

  // JsDocTags retains the parameter's ordered JSDoc tags.
  JsDocTags []IJsDocTagInfo
}

// MetadataParameter is a function parameter: name, type schema, documentation
// and the compiler type it was analyzed from. TsType is analysis-only and is not
// serialized.
//
// @evidence contracts/common.md#principled-implementation The LLM programmers need the compiler type of a parameter, so it is kept next to the schema.
// @evidence contracts/common.md#clear-and-simple-design Five fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The analysis-only field is stated.
// @evidence contracts/common.md#meaningful-documentation The doc states the analysis-only field.
type MetadataParameter struct {
  // Name is the parameter name supplied by the selected signature.
  Name string

  // Type is the analyzed parameter schema, including argument omission.
  Type *MetadataSchema

  // Description is the parameter documentation, or nil when absent.
  Description *string

  // JsDocTags retains the parameter's ordered JSDoc tags.
  JsDocTags []IJsDocTagInfo

  // TsType is the compiler type used by LLM programmers; it is not serialized.
  TsType *shimchecker.Type
}

// MetadataParameter_create builds a parameter from props, copying the JSDoc tag
// slice and storing the type schema and TsType as given.
//
// @evidence contracts/common.md#principled-implementation The slice that others append to is copied and the type schema is shared.
// @evidence contracts/common.md#clear-and-simple-design One constructor.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Nothing is dropped.
// @evidence contracts/common.md#meaningful-documentation The doc states what is copied.
func MetadataParameter_create(props MetadataParameter) *MetadataParameter {
  return &MetadataParameter{
    Name:        props.Name,
    Type:        props.Type,
    Description: props.Description,
    JsDocTags:   append([]IJsDocTagInfo{}, props.JsDocTags...),
    TsType:      props.TsType,
  }
}

// ToJSON returns the JSON form of the parameter; the type schema must be set.
//
// @evidence contracts/common.md#principled-implementation The type schema is converted by its own ToJSON and the JSDoc tags are copied.
// @evidence contracts/common.md#clear-and-simple-design One record construction.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A nil type is a caller error that the doc states.
// @evidence contracts/common.md#meaningful-documentation The doc states the precondition.
func (obj *MetadataParameter) ToJSON() IMetadataSchema_IParameter {
  return IMetadataSchema_IParameter{
    Name:        obj.Name,
    Type:        obj.Type.ToJSON(),
    Description: obj.Description,
    JsDocTags:   append([]IJsDocTagInfo{}, obj.JsDocTags...),
  }
}
