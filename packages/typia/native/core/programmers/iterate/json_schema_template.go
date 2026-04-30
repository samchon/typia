package iterate

import nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"

func json_schema_templates(metadata *nativemetadata.MetadataSchema) []JsonSchema {
	pureTemplates := []*nativemetadata.MetadataTemplate{}
	taggedTemplates := []*nativemetadata.MetadataTemplate{}
	for _, tpl := range metadata.Templates {
		if json_schema_template_isPure(tpl.Tags) {
			pureTemplates = append(pureTemplates, tpl)
		} else {
			taggedTemplates = append(taggedTemplates, tpl)
		}
	}

	output := []JsonSchema{}
	if len(pureTemplates) != 0 {
		meta := nativemetadata.MetadataSchema_initialize()
		meta.Templates = pureTemplates
		output = append(output, JsonSchema{
			"type": "string",
			"pattern": metadata_to_pattern(struct {
				top      bool
				metadata *nativemetadata.MetadataSchema
			}{
				top:      true,
				metadata: meta,
			}),
		})
	}
	for _, tpl := range taggedTemplates {
		meta := nativemetadata.MetadataSchema_initialize()
		meta.Templates = []*nativemetadata.MetadataTemplate{tpl}
		output = append(output, json_schema_plugin(struct {
			schema JsonSchema
			tags   [][]nativemetadata.IMetadataTypeTag
		}{
			schema: JsonSchema{
				"type": "string",
				"pattern": metadata_to_pattern(struct {
					top      bool
					metadata *nativemetadata.MetadataSchema
				}{
					top:      false,
					metadata: meta,
				}),
			},
			tags: tpl.Tags,
		})...)
	}
	return output
}

func json_schema_template_isPure(matrix [][]nativemetadata.IMetadataTypeTag) bool {
	for _, tags := range matrix {
		for _, tag := range tags {
			if tag.Schema != nil {
				return false
			}
		}
	}
	return true
}
