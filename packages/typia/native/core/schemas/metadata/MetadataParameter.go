package metadata

import shimchecker "github.com/microsoft/typescript-go/shim/checker"

// IMetadataSchema_IParameter is the JSON form of a function parameter: name,
// type schema, description and JSDoc tags.
//
// @evidence contracts/common.md#principled-implementation The JSON form lists what a parameter needs as data and leaves out the compiler type.
// @evidence contracts/common.md#clear-and-simple-design Four fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record holds and which function reads or writes it.
type IMetadataSchema_IParameter struct {
  Name        string
  Type        *IMetadataSchema
  Description *string
  JsDocTags   []IJsDocTagInfo
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
  Name        string
  Type        *MetadataSchema
  Description *string
  JsDocTags   []IJsDocTagInfo
  TsType      *shimchecker.Type
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

// MetadataParameter_from builds a parameter from its JSON form, loading the type
// schema against dict. TsType is not in the JSON and is nil.
//
// @evidence contracts/common.md#principled-implementation The schema is loaded through MetadataSchema_from so reference resolution has one implementation.
// @evidence contracts/common.md#clear-and-simple-design One constructor call.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The missing compiler type is the documented JSON contract.
// @evidence contracts/common.md#meaningful-documentation The doc states the nil TsType.
func MetadataParameter_from(json IMetadataSchema_IParameter, dict IMetadataDictionary) *MetadataParameter {
  return MetadataParameter_create(MetadataParameter{
    Name:        json.Name,
    Type:        MetadataSchema_from(json.Type, dict),
    Description: json.Description,
    JsDocTags:   json.JsDocTags,
  })
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
