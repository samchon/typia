package metadata

import (
	nativechecker "github.com/microsoft/typescript-go/shim/checker"
	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

func Iterate_metadata_atomic(props struct {
	Metadata *schemametadata.MetadataSchema
	Type     *nativechecker.Type
}) bool {
	filter := func(flag nativechecker.TypeFlags) bool {
		return props.Type.Flags()&flag != 0
	}
	for _, info := range iterate_metadata_atomic_atomcs {
		if filter(info.atomic) || filter(info.literal) {
			found := false
			for _, atomic := range props.Metadata.Atomics {
				if atomic.Type == info.name {
					found = true
					break
				}
			}
			if found == false {
				props.Metadata.Atomics = append(props.Metadata.Atomics, schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{
					Type: info.name,
					Tags: [][]schemametadata.IMetadataTypeTag{},
				}))
			}
			return true
		}
	}
	return false
}

type iterate_metadata_atomic_info struct {
	name    string
	atomic  nativechecker.TypeFlags
	literal nativechecker.TypeFlags
}

var iterate_metadata_atomic_atomcs = []iterate_metadata_atomic_info{
	{
		name:    "boolean",
		atomic:  nativechecker.TypeFlagsBooleanLike,
		literal: nativechecker.TypeFlagsBooleanLiteral,
	},
	{
		name:    "number",
		atomic:  nativechecker.TypeFlagsNumberLike,
		literal: nativechecker.TypeFlagsNumberLiteral,
	},
	{
		name:    "bigint",
		atomic:  nativechecker.TypeFlagsBigIntLike,
		literal: nativechecker.TypeFlagsBigIntLiteral,
	},
	{
		name:    "string",
		atomic:  nativechecker.TypeFlagsStringLike,
		literal: nativechecker.TypeFlagsStringLiteral,
	},
}
