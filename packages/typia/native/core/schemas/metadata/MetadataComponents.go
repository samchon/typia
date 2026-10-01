package metadata

// IMetadataComponents is the JSON form of the shared types of a graph: its
// objects, aliases, arrays and tuples.
//
// @evidence contracts/common.md#principled-implementation The shared types are serialized once here and referenced by name elsewhere.
// @evidence contracts/common.md#clear-and-simple-design Four slices.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record holds and which function reads or writes it.
type IMetadataComponents struct {
  Objects []IMetadataSchema_IObjectType
  Aliases []IMetadataSchema_IAliasType
  Arrays  []IMetadataSchema_IArrayType
  Tuples  []IMetadataSchema_ITupleType
}

// MetadataComponents are the shared types of a loaded graph, as lists in the
// order of their JSON form and as the dictionary that resolves references.
//
// @evidence contracts/common.md#principled-implementation A loaded graph needs the type lists and the dictionary built from the same values.
// @evidence contracts/common.md#clear-and-simple-design Five fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states the order and the dictionary.
type MetadataComponents struct {
  Aliases    []*MetadataAliasType
  Objects    []*MetadataObjectType
  Arrays     []*MetadataArrayType
  Tuples     []*MetadataTupleType
  Dictionary IMetadataDictionary
}

// MetadataComponents_from loads shared types from their JSON form in two phases:
// it creates every type without its content and then fills in properties,
// values and elements, so references between them, recursive ones included,
// resolve. The lists keep the order of the JSON and repeat no name. It is the
// inverse of MetadataCollection.ToJSON; no transform path calls it today.
//
// @evidence contracts/common.md#principled-implementation Two phases are what make a graph with cycles loadable, and keeping the JSON order makes the result and its JSON deterministic.
// @evidence contracts/common.md#clear-and-simple-design Two loops over four kinds and a generic ordering helper.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A test pins the order; no map iteration decides the output.
// @evidence contracts/common.md#meaningful-documentation The doc states the phases and the ordering guarantee.
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
    Aliases: metadataComponents_ordered(
      metadataComponents_names(json.Aliases, func(x IMetadataSchema_IAliasType) string { return x.Name }),
      dictionary.Aliases,
    ),
    Objects: metadataComponents_ordered(
      metadataComponents_names(json.Objects, func(x IMetadataSchema_IObjectType) string { return x.Name }),
      dictionary.Objects,
    ),
    Arrays: metadataComponents_ordered(
      metadataComponents_names(json.Arrays, func(x IMetadataSchema_IArrayType) string { return x.Name }),
      dictionary.Arrays,
    ),
    Tuples: metadataComponents_ordered(
      metadataComponents_names(json.Tuples, func(x IMetadataSchema_ITupleType) string { return x.Name }),
      dictionary.Tuples,
    ),
    Dictionary: dictionary,
  }
}

// ToJSON returns the JSON form of the shared types in the order of the lists.
//
// @evidence contracts/common.md#principled-implementation Each type is converted by its own ToJSON.
// @evidence contracts/common.md#clear-and-simple-design Four loops.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The order is that of the lists.
// @evidence contracts/common.md#meaningful-documentation The doc states the order.
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

// metadataComponents_ordered lists the dictionary entries in the order their
// names first appear, so the result does not depend on map iteration order.
func metadataComponents_ordered[T any](names []string, input map[string]*T) []*T {
  output := make([]*T, 0, len(input))
  seen := make(map[string]struct{}, len(input))
  for _, name := range names {
    if _, ok := seen[name]; ok {
      continue
    }
    seen[name] = struct{}{}
    output = append(output, input[name])
  }
  return output
}

func metadataComponents_names[T any](input []T, name func(T) string) []string {
  output := make([]string, 0, len(input))
  for _, elem := range input {
    output = append(output, name(elem))
  }
  return output
}
