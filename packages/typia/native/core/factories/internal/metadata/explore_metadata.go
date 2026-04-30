package metadata

import (
	nativechecker "github.com/microsoft/typescript-go/shim/checker"
	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type Explore_metadata_IProps struct {
	Options     MetadataFactory_IOptions
	Checker     *nativechecker.Checker
	Components  *schemametadata.MetadataCollection
	Errors      *[]MetadataFactory_IError
	Type        *nativechecker.Type
	Explore     MetadataFactory_IExplore
	Intersected bool
}

func Explore_metadata(props Explore_metadata_IProps) *schemametadata.MetadataSchema {
	metadata := schemametadata.MetadataSchema_initialize(props.Explore.Escaped)
	if props.Type == nil {
		return metadata
	}
	Iterate_metadata(IMetadataIteratorProps{
		Options:     props.Options,
		Checker:     props.Checker,
		Components:  props.Components,
		Errors:      props.Errors,
		Metadata:    metadata,
		Type:        props.Type,
		Explore:     props.Explore,
		Intersected: props.Intersected,
	})
	Emend_metadata_atomics(metadata)
	if metadata.Escaped != nil {
		Emend_metadata_atomics(metadata.Escaped.Original)
		Emend_metadata_atomics(metadata.Escaped.Returns)
	}
	return metadata
}
