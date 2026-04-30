package metadata

import (
	nativechecker "github.com/microsoft/typescript-go/shim/checker"
	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

func Iterate_metadata_template(props IMetadataIteratorProps) bool {
	if props.Type == nil || props.Type.Flags()&nativechecker.TypeFlagsTemplateLiteral == 0 {
		return false
	}

	template := props.Type.AsTemplateLiteralType()
	texts := template.Texts()
	types := template.Types()
	row := []*schemametadata.MetadataSchema{}
	for i, text := range texts {
		if text != "" {
			row = append(row, MetadataHelper.Literal_to_metadata(text))
		}
		if i < len(types) && types[i] != nil {
			explore := props.Explore
			explore.Escaped = false
			explore.Aliased = false
			row = append(row, Explore_metadata(Explore_metadata_IProps{
				Options:     props.Options,
				Checker:     props.Checker,
				Components:  props.Components,
				Errors:      props.Errors,
				Type:        types[i],
				Explore:     explore,
				Intersected: false,
			}))
		}
	}
	props.Metadata.Templates = append(props.Metadata.Templates, schemametadata.MetadataTemplate_create(schemametadata.MetadataTemplate{
		Row:  row,
		Tags: [][]schemametadata.IMetadataTypeTag{},
	}))
	return true
}
