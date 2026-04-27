package metadata

func IterateMetadataArray(props IMetadataIteratorProps) bool {
	array := FindArrayExtended(props.Checker, map[TypeLike]TypeLike{}, props.Type)
	if array == nil {
		return false
	}
	arrayType := EmplaceMetadataArrayType(props, array)
	addArray(&props.Metadata.Arrays, MetadataArray{Type: arrayType})
	return true
}

func FindArrayExtended(checker TypeChecker, memory map[TypeLike]TypeLike, typ TypeLike) TypeLike {
	if typ == nil {
		return nil
	}
	if cached, ok := memory[typ]; ok {
		return cached
	}
	memory[typ] = nil
	if typ.IsArray() {
		memory[typ] = typ
		return typ
	}
	for _, base := range typ.BaseTypes() {
		if found := FindArrayExtended(checker, memory, base); found != nil {
			memory[typ] = found
			return found
		}
	}
	return nil
}
