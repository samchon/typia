package metadata

type IMetadataSchema_IArrayType struct {
  Name      string
  Value     *IMetadataSchema
  Nullables []bool
  Recursive bool
  Index     *int
}

type MetadataArrayType struct {
  Name        string
  DisplayName string
  Value       *MetadataSchema
  Nullables   []bool
  Recursive   bool
  Index       *int
}

func MetadataArrayType__From_without_value(props IMetadataSchema_IArrayType) *MetadataArrayType {
  return MetadataArrayType_create(MetadataArrayType{
    Name:      props.Name,
    Value:     nil,
    Index:     props.Index,
    Recursive: props.Recursive,
    Nullables: append([]bool{}, props.Nullables...),
  })
}

func MetadataArrayType_create(props MetadataArrayType) *MetadataArrayType {
  return &MetadataArrayType{
    Name:        props.Name,
    DisplayName: props.DisplayName,
    Value:       props.Value,
    Index:       props.Index,
    Recursive:   props.Recursive,
    Nullables:   append([]bool{}, props.Nullables...),
  }
}

// GetDisplayName returns the human-facing rendering of the type: the
// structural form for anonymous (inline) types, the identifier name otherwise.
// Identity-sensitive logic (function keys, deduplication) must keep using Name.
func (obj *MetadataArrayType) GetDisplayName() string {
  if obj.DisplayName != "" {
    return obj.DisplayName
  }
  return obj.Name
}

func (obj *MetadataArrayType) ToJSON() IMetadataSchema_IArrayType {
  return IMetadataSchema_IArrayType{
    Name:      obj.Name,
    Value:     obj.Value.ToJSON(),
    Nullables: append([]bool{}, obj.Nullables...),
    Recursive: obj.Recursive,
    Index:     obj.Index,
  }
}
