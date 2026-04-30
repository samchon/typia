package metadata

import (
	nativechecker "github.com/microsoft/typescript-go/shim/checker"
	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

func Emplace_metadata_tuple(props IMetadataIteratorProps) *schemametadata.MetadataTupleType {
	tuple, newbie, closure := props.Components.EmplaceTuple(
		props.Checker,
		props.Type,
	)
	metadata_array_util_add_bool(&tuple.Nullables, props.Metadata.Nullable)
	if newbie == false {
		return tuple
	}

	flagList := []nativechecker.ElementFlags{}
	if props.Type != nil && nativechecker.IsTupleType(props.Type) {
		flagList = props.Type.TargetTupleType().ElementFlags()
	}
	args := []*nativechecker.Type{}
	if props.Checker != nil {
		args = metadata_get_type_arguments(props.Checker, props.Type)
	}
	elements := make([]*schemametadata.MetadataSchema, 0, len(args))
	for i, elem := range args {
		explore := props.Explore
		explore.Nested = tuple
		explore.Aliased = false
		explore.Escaped = false
		child := Explore_metadata(Explore_metadata_IProps{
			Options:     props.Options,
			Checker:     props.Checker,
			Components:  props.Components,
			Errors:      props.Errors,
			Type:        elem,
			Explore:     explore,
			Intersected: false,
		})
		var flag nativechecker.ElementFlags
		if i < len(flagList) {
			flag = flagList[i]
		}
		if flag == nativechecker.ElementFlagsOptional {
			child.Optional = true
		}
		if flag != nativechecker.ElementFlagsRest {
			elements = append(elements, child)
			continue
		}
		wrapper := schemametadata.MetadataSchema_initialize()
		wrapper.Rest = child
		elements = append(elements, wrapper)
	}
	closure(elements)
	return tuple
}
