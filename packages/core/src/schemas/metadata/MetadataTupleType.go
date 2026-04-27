package metadata

type MetadataTupleType struct {
	Name      string
	Elements  []*MetadataSchema
	Index     *int
	Recursive bool
	Nullables []bool

	OfMap bool
}

type MetadataTupleTypeProps struct {
	Name      string
	Elements  []*MetadataSchema
	Index     *int
	Recursive bool
	Nullables []bool
	OfMap     bool
}

func MetadataTupleTypeFromWithoutElements(props MetadataTupleTypeJSON) *MetadataTupleType {
	return CreateMetadataTupleType(MetadataTupleTypeProps{
		Name:      props.Name,
		Index:     props.Index,
		Recursive: props.Recursive,
		Nullables: props.Nullables,
	})
}

func CreateMetadataTupleType(props MetadataTupleTypeProps) *MetadataTupleType {
	return &MetadataTupleType{
		Name:      props.Name,
		Elements:  append([]*MetadataSchema(nil), props.Elements...),
		Index:     cloneIntPtr(props.Index),
		Recursive: props.Recursive,
		Nullables: append([]bool(nil), props.Nullables...),
		OfMap:     props.OfMap,
	}
}

func (m *MetadataTupleType) IsRest() bool {
	return len(m.Elements) > 0 && m.Elements[len(m.Elements)-1].Rest != nil
}

func (m *MetadataTupleType) ToJSON() MetadataTupleTypeJSON {
	elements := make([]MetadataSchemaJSON, 0, len(m.Elements))
	for _, elem := range m.Elements {
		elements = append(elements, elem.ToJSON())
	}
	return MetadataTupleTypeJSON{
		Name:      m.Name,
		Index:     cloneIntPtr(m.Index),
		Elements:  elements,
		Recursive: m.Recursive,
		Nullables: append([]bool(nil), m.Nullables...),
	}
}
