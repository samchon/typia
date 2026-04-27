package metadata

func IterateMetadataCoalesce(metadata *MetadataSchema, typ TypeLike) bool {
	if metadata == nil || typ == nil {
		return false
	}
	flags := typ.Flags()
	if flags&(TypeFlagUnknown|TypeFlagAny) != 0 {
		metadata.Any = true
		return true
	}
	if flags&TypeFlagNull != 0 {
		metadata.Nullable = true
		return true
	}
	if flags&(TypeFlagUndefined|TypeFlagNever|TypeFlagVoid) != 0 {
		metadata.Required = false
		return true
	}
	return false
}
