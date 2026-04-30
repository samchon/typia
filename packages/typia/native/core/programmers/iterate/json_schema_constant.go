package iterate

import (
	"math/big"

	nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

func json_schema_constant(constant *nativemetadata.MetadataConstant) []JsonSchema {
	output := []JsonSchema{}
	for _, value := range constant.Values {
		schemas := json_schema_plugin(struct {
			schema JsonSchema
			tags   [][]nativemetadata.IMetadataTypeTag
		}{
			schema: JsonSchema{
				"const":       json_schema_constant_value(value.Value),
				"title":       json_schema_title(json_schema_constant_props(value)),
				"description": json_schema_description(json_schema_constant_props(value)),
			},
			tags: value.Tags,
		})
		output = append(output, schemas...)
	}
	return output
}

func json_schema_constant_props(value *nativemetadata.MetadataConstantValue) struct {
	description *string
	jsDocTags   []nativemetadata.IJsDocTagInfo
} {
	return struct {
		description *string
		jsDocTags   []nativemetadata.IJsDocTagInfo
	}{
		description: value.Description,
		jsDocTags:   value.JsDocTags,
	}
}

func json_schema_constant_value(value any) any {
	switch v := value.(type) {
	case big.Int:
		return float64(v.Int64())
	case *big.Int:
		if v == nil {
			return nil
		}
		return float64(v.Int64())
	default:
		return value
	}
}
