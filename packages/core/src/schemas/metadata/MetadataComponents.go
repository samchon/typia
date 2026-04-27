package metadata

type MetadataComponents struct {
	Aliases    []*MetadataAliasType
	Objects    []*MetadataObjectType
	Arrays     []*MetadataArrayType
	Tuples     []*MetadataTupleType
	Dictionary *IMetadataDictionary
}

func MetadataComponentsFrom(json MetadataComponentsJSON) (*MetadataComponents, error) {
	dict := NewIMetadataDictionary()
	for _, obj := range json.Objects {
		dict.Objects[obj.Name] = MetadataObjectTypeFromWithoutProperties(obj)
	}
	for _, alias := range json.Aliases {
		dict.Aliases[alias.Name] = MetadataAliasTypeFromWithoutValue(alias)
	}
	for _, array := range json.Arrays {
		dict.Arrays[array.Name] = MetadataArrayTypeFromWithoutValue(array)
	}
	for _, tuple := range json.Tuples {
		dict.Tuples[tuple.Name] = MetadataTupleTypeFromWithoutElements(tuple)
	}
	for _, obj := range json.Objects {
		target := dict.Objects[obj.Name]
		for _, prop := range obj.Properties {
			next, err := MetadataPropertyFrom(prop, dict)
			if err != nil {
				return nil, err
			}
			target.Properties = append(target.Properties, next)
		}
	}
	for _, alias := range json.Aliases {
		value, err := MetadataSchemaFrom(alias.Value, dict)
		if err != nil {
			return nil, err
		}
		dict.Aliases[alias.Name].Value = value
	}
	for _, array := range json.Arrays {
		value, err := MetadataSchemaFrom(array.Value, dict)
		if err != nil {
			return nil, err
		}
		dict.Arrays[array.Name].Value = value
	}
	for _, tuple := range json.Tuples {
		elements := make([]*MetadataSchema, 0, len(tuple.Elements))
		for _, elem := range tuple.Elements {
			next, err := MetadataSchemaFrom(elem, dict)
			if err != nil {
				return nil, err
			}
			elements = append(elements, next)
		}
		dict.Tuples[tuple.Name].Elements = elements
	}
	return &MetadataComponents{
		Aliases:    valuesByAliasJSONOrder(json.Aliases, dict.Aliases),
		Objects:    valuesByObjectJSONOrder(json.Objects, dict.Objects),
		Arrays:     valuesByArrayJSONOrder(json.Arrays, dict.Arrays),
		Tuples:     valuesByTupleJSONOrder(json.Tuples, dict.Tuples),
		Dictionary: dict,
	}, nil
}

func (m *MetadataComponents) ToJSON() MetadataComponentsJSON {
	output := MetadataComponentsJSON{
		Aliases: make([]MetadataAliasTypeJSON, 0, len(m.Aliases)),
		Objects: make([]MetadataObjectTypeJSON, 0, len(m.Objects)),
		Arrays:  make([]MetadataArrayTypeJSON, 0, len(m.Arrays)),
		Tuples:  make([]MetadataTupleTypeJSON, 0, len(m.Tuples)),
	}
	for _, alias := range m.Aliases {
		output.Aliases = append(output.Aliases, alias.ToJSON())
	}
	for _, object := range m.Objects {
		output.Objects = append(output.Objects, object.ToJSON())
	}
	for _, array := range m.Arrays {
		output.Arrays = append(output.Arrays, array.ToJSON())
	}
	for _, tuple := range m.Tuples {
		output.Tuples = append(output.Tuples, tuple.ToJSON())
	}
	return output
}
