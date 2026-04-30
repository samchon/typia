package metadata

type IMetadataComponents struct {
	Objects []IMetadataSchema_IObjectType
	Aliases []IMetadataSchema_IAliasType
	Arrays  []IMetadataSchema_IArrayType
	Tuples  []IMetadataSchema_ITupleType
}

type MetadataComponents struct {
	Aliases    []*MetadataAliasType
	Objects    []*MetadataObjectType
	Arrays     []*MetadataArrayType
	Tuples     []*MetadataTupleType
	Dictionary IMetadataDictionary
}

func MetadataComponents_from(json IMetadataComponents) *MetadataComponents {
	dictionary := IMetadataDictionary{
		Objects: map[string]*MetadataObjectType{},
		Aliases: map[string]*MetadataAliasType{},
		Arrays:  map[string]*MetadataArrayType{},
		Tuples:  map[string]*MetadataTupleType{},
	}
	for _, obj := range json.Objects {
		dictionary.Objects[obj.Name] = MetadataObjectType__From_without_properties(obj)
	}
	for _, alias := range json.Aliases {
		dictionary.Aliases[alias.Name] = MetadataAliasType__From_without_value(alias)
	}
	for _, array := range json.Arrays {
		dictionary.Arrays[array.Name] = MetadataArrayType__From_without_value(array)
	}
	for _, tuple := range json.Tuples {
		dictionary.Tuples[tuple.Name] = MetadataTupleType__From_without_elements(tuple)
	}

	for _, obj := range json.Objects {
		target := dictionary.Objects[obj.Name]
		for _, prop := range obj.Properties {
			target.Properties = append(target.Properties, MetadataProperty_from(*prop, dictionary))
		}
	}
	for _, alias := range json.Aliases {
		dictionary.Aliases[alias.Name].Value = MetadataSchema_from(alias.Value, dictionary)
	}
	for _, array := range json.Arrays {
		dictionary.Arrays[array.Name].Value = MetadataSchema_from(array.Value, dictionary)
	}
	for _, tuple := range json.Tuples {
		elements := make([]*MetadataSchema, 0, len(tuple.Elements))
		for _, elem := range tuple.Elements {
			elements = append(elements, MetadataSchema_from(elem, dictionary))
		}
		dictionary.Tuples[tuple.Name].Elements = elements
	}

	return &MetadataComponents{
		Aliases:    metadataComponents_aliases(dictionary.Aliases),
		Objects:    metadataComponents_objects(dictionary.Objects),
		Arrays:     metadataComponents_arrays(dictionary.Arrays),
		Tuples:     metadataComponents_tuples(dictionary.Tuples),
		Dictionary: dictionary,
	}
}

func (components *MetadataComponents) ToJSON() IMetadataComponents {
	aliases := make([]IMetadataSchema_IAliasType, 0, len(components.Aliases))
	for _, alias := range components.Aliases {
		aliases = append(aliases, alias.ToJSON())
	}
	objects := make([]IMetadataSchema_IObjectType, 0, len(components.Objects))
	for _, object := range components.Objects {
		objects = append(objects, object.ToJSON())
	}
	arrays := make([]IMetadataSchema_IArrayType, 0, len(components.Arrays))
	for _, array := range components.Arrays {
		arrays = append(arrays, array.ToJSON())
	}
	tuples := make([]IMetadataSchema_ITupleType, 0, len(components.Tuples))
	for _, tuple := range components.Tuples {
		tuples = append(tuples, tuple.ToJSON())
	}
	return IMetadataComponents{
		Aliases: aliases,
		Objects: objects,
		Arrays:  arrays,
		Tuples:  tuples,
	}
}

func metadataComponents_aliases(input map[string]*MetadataAliasType) []*MetadataAliasType {
	output := make([]*MetadataAliasType, 0, len(input))
	for _, value := range input {
		output = append(output, value)
	}
	return output
}

func metadataComponents_objects(input map[string]*MetadataObjectType) []*MetadataObjectType {
	output := make([]*MetadataObjectType, 0, len(input))
	for _, value := range input {
		output = append(output, value)
	}
	return output
}

func metadataComponents_arrays(input map[string]*MetadataArrayType) []*MetadataArrayType {
	output := make([]*MetadataArrayType, 0, len(input))
	for _, value := range input {
		output = append(output, value)
	}
	return output
}

func metadataComponents_tuples(input map[string]*MetadataTupleType) []*MetadataTupleType {
	output := make([]*MetadataTupleType, 0, len(input))
	for _, value := range input {
		output = append(output, value)
	}
	return output
}
