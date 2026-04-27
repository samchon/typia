package metadata

func IterateMetadataCollection(props struct {
	Errors     *MetadataErrors
	Collection *MetadataCollection
}) {
	if props.Collection == nil {
		return
	}
	for i := range props.Collection.ArrayTypes {
		if props.Collection.ArrayTypes[i].Recursive == nil {
			recursive := isArrayRecursive(map[*MetadataSchema]bool{}, &props.Collection.ArrayTypes[i], props.Collection.ArrayTypes[i].Value)
			props.Collection.ArrayTypes[i].Recursive = &recursive
		}
	}
	for i := range props.Collection.TupleTypes {
		recursive := false
		for _, elem := range props.Collection.TupleTypes[i].Elements {
			if isTupleRecursive(map[*MetadataSchema]bool{}, &props.Collection.TupleTypes[i], elem) {
				recursive = true
				break
			}
		}
		props.Collection.TupleTypes[i].Recursive = recursive
	}
	for i := range props.Collection.ObjectTypes {
		IterateMetadataCommentTags(struct {
			Errors *MetadataErrors
			Object *MetadataObjectType
		}{Errors: props.Errors, Object: &props.Collection.ObjectTypes[i]})
		if props.Collection.ObjectTypes[i].Recursive == nil {
			recursive := false
			for _, property := range props.Collection.ObjectTypes[i].Properties {
				if isObjectRecursive(map[*MetadataSchema]bool{}, &props.Collection.ObjectTypes[i], property.Value) {
					recursive = true
					break
				}
			}
			props.Collection.ObjectTypes[i].Recursive = &recursive
		}
	}
}

func isArrayRecursive(visited map[*MetadataSchema]bool, array *MetadataArrayType, metadata *MetadataSchema) bool {
	if metadata == nil || visited[metadata] {
		return false
	}
	visited[metadata] = true
	for _, child := range metadata.Arrays {
		if &child.Type == array || isArrayRecursive(visited, array, child.Type.Value) {
			return true
		}
	}
	return false
}

func isTupleRecursive(visited map[*MetadataSchema]bool, tuple *MetadataTupleType, metadata *MetadataSchema) bool {
	if metadata == nil || visited[metadata] {
		return false
	}
	visited[metadata] = true
	for _, child := range metadata.Tuples {
		if &child.Type == tuple {
			return true
		}
		for _, elem := range child.Type.Elements {
			if isTupleRecursive(visited, tuple, elem) {
				return true
			}
		}
	}
	return false
}

func isObjectRecursive(visited map[*MetadataSchema]bool, object *MetadataObjectType, metadata *MetadataSchema) bool {
	if metadata == nil || visited[metadata] {
		return false
	}
	visited[metadata] = true
	for _, child := range metadata.Objects {
		if &child.Type == object {
			return true
		}
		for _, property := range child.Type.Properties {
			if isObjectRecursive(visited, object, property.Value) {
				return true
			}
		}
	}
	return false
}
