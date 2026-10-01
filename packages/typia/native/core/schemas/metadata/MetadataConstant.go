package metadata

// IMetadataSchema_IConstant is the JSON form of a group of literal constants of
// one primitive type.
//
// @evidence contracts/common.md#principled-implementation The JSON form groups the values by the primitive type, like the analysis does.
// @evidence contracts/common.md#clear-and-simple-design Two fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record holds and which function reads or writes it.
type IMetadataSchema_IConstant struct {
  Type   string
  Values []IMetadataSchema_IConstant_IValue
}

// MetadataConstant is a group of literal values (`"a"`, `1`, `true`, a bigint)
// that share one primitive type.
//
// @evidence contracts/common.md#principled-implementation Literals of one primitive type are kept together so the type test, the ordering and the schema output can treat them as one bucket.
// @evidence contracts/common.md#clear-and-simple-design Two fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states the grouping.
type MetadataConstant struct {
  Type   string
  Values []*MetadataConstantValue
}

// MetadataConstant_create builds a group from props, skipping nil values and
// copying every other value.
//
// @evidence contracts/common.md#principled-implementation Each value is rebuilt through its own constructor so the group does not share value records with its source, and a nil entry carries no information.
// @evidence contracts/common.md#clear-and-simple-design One loop over the values.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Skipping nil is stated; no other value is dropped.
// @evidence contracts/common.md#meaningful-documentation The doc states the skipping and the copying.
func MetadataConstant_create(props MetadataConstant) *MetadataConstant {
  values := make([]*MetadataConstantValue, 0, len(props.Values))
  for _, value := range props.Values {
    if value == nil {
      continue
    }
    values = append(values, MetadataConstantValue_create(*value))
  }
  return &MetadataConstant{
    Type:   props.Type,
    Values: values,
  }
}

// ToJSON returns the JSON form of the group.
//
// @evidence contracts/common.md#principled-implementation Each value is converted by its own ToJSON.
// @evidence contracts/common.md#clear-and-simple-design One loop.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Nothing is added or dropped beyond the value-level contract.
// @evidence contracts/common.md#meaningful-documentation The doc states the conversion.
func (obj *MetadataConstant) ToJSON() IMetadataSchema_IConstant {
  values := make([]IMetadataSchema_IConstant_IValue, 0, len(obj.Values))
  for _, value := range obj.Values {
    values = append(values, value.ToJSON())
  }
  return IMetadataSchema_IConstant{
    Type:   obj.Type,
    Values: values,
  }
}
