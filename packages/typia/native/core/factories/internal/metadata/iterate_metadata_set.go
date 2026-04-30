package metadata

import (
	"strings"

	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

func Iterate_metadata_set(props IMetadataIteratorProps) bool {
	if props.Checker == nil || props.Type == nil {
		return false
	}
	typ := props.Checker.GetApparentType(props.Type)
	name := metadata_type_full_name(props.Checker, typ)
	if strings.HasPrefix(name, "Set<") == false {
		return false
	}
	generic := metadata_get_type_arguments(props.Checker, typ)
	if len(generic) != 1 {
		return false
	}

	key := generic[0]
	explore := props.Explore
	explore.Escaped = false
	explore.Aliased = false
	value := Explore_metadata(Explore_metadata_IProps{
		Options:     props.Options,
		Checker:     props.Checker,
		Components:  props.Components,
		Errors:      props.Errors,
		Type:        key,
		Explore:     explore,
		Intersected: false,
	})
	for _, elem := range props.Metadata.Sets {
		if elem.Value.GetName() == value.GetName() {
			return true
		}
	}
	props.Metadata.Sets = append(props.Metadata.Sets, schemametadata.MetadataSet_create(schemametadata.MetadataSet{
		Value: value,
		Tags:  [][]schemametadata.IMetadataTypeTag{},
	}))
	return true
}
