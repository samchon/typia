package metadata

func IterateMetadataAlias(props IMetadataIteratorProps) bool {
	if props.Options.Absorb != nil && *props.Options.Absorb {
		return false
	}
	if props.Type == nil || props.Type.AliasSymbol() == nil {
		return false
	}
	alias := EmplaceMetadataAlias(props)
	takeAlias(&props.Metadata.Aliases, MetadataAlias{Type: alias})
	return true
}
