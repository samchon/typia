package metadata

import schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"

func Emplace_metadata_alias(props IMetadataIteratorProps) *schemametadata.MetadataAliasType {
	symbol := props.Type.Symbol()
	if typeName := nativechecker_type_name_symbol(props.Type); typeName != nil {
		symbol = typeName
	}
	alias, newbie, closure := props.Components.EmplaceAlias(
		props.Checker,
		props.Type,
		symbol,
	)
	metadata_array_util_add_bool(&alias.Nullables, props.Metadata.Nullable)
	if newbie == false {
		return alias
	}

	explore := props.Explore
	explore.Escaped = false
	explore.Aliased = true
	value := Explore_metadata(Explore_metadata_IProps{
		Options:     props.Options,
		Checker:     props.Checker,
		Components:  props.Components,
		Errors:      props.Errors,
		Type:        props.Type,
		Explore:     explore,
		Intersected: false,
	})
	closure(value)
	return alias
}
