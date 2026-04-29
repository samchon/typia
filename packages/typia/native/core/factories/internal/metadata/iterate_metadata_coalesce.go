package metadata

import (
	nativechecker "github.com/microsoft/typescript-go/shim/checker"
	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

func Iterate_metadata_coalesce(props struct {
	Metadata *schemametadata.MetadataSchema
	Type     *nativechecker.Type
}) bool {
	filter := func(flag nativechecker.TypeFlags) bool {
		return props.Type.Flags()&flag != 0
	}
	if filter(nativechecker.TypeFlagsUnknown) || filter(nativechecker.TypeFlagsAny) {
		props.Metadata.Any = true
		return true
	}
	if filter(nativechecker.TypeFlagsNull) {
		props.Metadata.Nullable = true
		return true
	}
	if filter(nativechecker.TypeFlagsUndefined) ||
		filter(nativechecker.TypeFlagsNever) ||
		filter(nativechecker.TypeFlagsVoid) {
		props.Metadata.Required = false
		return true
	}
	return false
}
