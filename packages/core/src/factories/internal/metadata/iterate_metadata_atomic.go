package metadata

func IterateMetadataAtomic(metadata *MetadataSchema, typ TypeLike) bool {
	if metadata == nil || typ == nil {
		return false
	}
	flags := typ.Flags()
	checks := []struct {
		Name string
		Flag TypeFlags
	}{
		{"boolean", TypeFlagBoolean | TypeFlagBooleanLiteral},
		{"number", TypeFlagNumber | TypeFlagNumberLiteral},
		{"bigint", TypeFlagBigint | TypeFlagBigintLiteral},
		{"string", TypeFlagString | TypeFlagStringLiteral},
	}
	for _, info := range checks {
		if flags&info.Flag != 0 {
			takeAtomic(&metadata.Atomics, MetadataAtomic{Type: info.Name})
			return true
		}
	}
	return false
}
