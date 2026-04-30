package metadata

type IMetadataSchema_ITupleType struct {
	Name      string
	Elements  []*IMetadataSchema
	Index     *int
	Recursive bool
	Nullables []bool
}

type MetadataTupleType struct {
	Name      string
	Elements  []*MetadataSchema
	Index     *int
	Recursive bool
	Nullables []bool
	Of_map    *bool
}

func MetadataTupleType__From_without_elements(props IMetadataSchema_ITupleType) *MetadataTupleType {
	return MetadataTupleType_create(MetadataTupleType{
		Name:      props.Name,
		Index:     props.Index,
		Elements:  nil,
		Recursive: props.Recursive,
		Nullables: append([]bool{}, props.Nullables...),
	})
}

func MetadataTupleType_create(props MetadataTupleType) *MetadataTupleType {
	return &MetadataTupleType{
		Name:      props.Name,
		Elements:  props.Elements,
		Index:     props.Index,
		Recursive: props.Recursive,
		Nullables: append([]bool{}, props.Nullables...),
		Of_map:    props.Of_map,
	}
}

func (obj *MetadataTupleType) IsRest() bool {
	return len(obj.Elements) > 0 && obj.Elements[len(obj.Elements)-1].Rest != nil
}

func (obj *MetadataTupleType) ToJSON() IMetadataSchema_ITupleType {
	elements := make([]*IMetadataSchema, 0, len(obj.Elements))
	for _, elem := range obj.Elements {
		elements = append(elements, elem.ToJSON())
	}
	return IMetadataSchema_ITupleType{
		Name:      obj.Name,
		Index:     obj.Index,
		Elements:  elements,
		Recursive: obj.Recursive,
		Nullables: append([]bool{}, obj.Nullables...),
	}
}
