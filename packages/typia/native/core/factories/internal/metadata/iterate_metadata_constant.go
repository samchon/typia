package metadata

import (
	"fmt"

	nativechecker "github.com/microsoft/typescript-go/shim/checker"
	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

func Iterate_metadata_constant(props IMetadataIteratorProps) bool {
	if props.Options.Constant == false {
		return false
	}
	filter := func(flag nativechecker.TypeFlags) bool {
		return props.Type.Flags()&flag != 0
	}
	comment := func() struct {
		description *string
		jsDocTags   []schemametadata.IJsDocTagInfo
	} {
		return struct {
			description *string
			jsDocTags   []schemametadata.IJsDocTagInfo
		}{}
	}

	if filter(nativechecker.TypeFlagsStringLiteral) ||
		filter(nativechecker.TypeFlagsNumberLiteral) ||
		filter(nativechecker.TypeFlagsBigIntLiteral) {
		value := props.Type.AsLiteralType().Value()
		typ := "string"
		if filter(nativechecker.TypeFlagsNumberLiteral) {
			typ = "number"
		} else if filter(nativechecker.TypeFlagsBigIntLiteral) {
			typ = "bigint"
		}
		constant := iterate_metadata_constant_take(props.Metadata, typ)
		info := comment()
		iterate_metadata_constant_add(constant, schemametadata.MetadataConstantValue_create(schemametadata.MetadataConstantValue{
			Value:       value,
			Tags:        [][]schemametadata.IMetadataTypeTag{},
			Description: info.description,
			JsDocTags:   info.jsDocTags,
		}))
		return true
	}
	if filter(nativechecker.TypeFlagsBooleanLiteral) {
		value := false
		if props.Checker != nil && props.Checker.TypeToString(props.Type) == "true" {
			value = true
		}
		constant := iterate_metadata_constant_take(props.Metadata, "boolean")
		info := comment()
		iterate_metadata_constant_add(constant, schemametadata.MetadataConstantValue_create(schemametadata.MetadataConstantValue{
			Value:       value,
			Tags:        [][]schemametadata.IMetadataTypeTag{},
			Description: info.description,
			JsDocTags:   info.jsDocTags,
		}))
		return true
	}
	return false
}

func iterate_metadata_constant_take(metadata *schemametadata.MetadataSchema, typ string) *schemametadata.MetadataConstant {
	for _, constant := range metadata.Constants {
		if constant.Type == typ {
			return constant
		}
	}
	constant := schemametadata.MetadataConstant_create(schemametadata.MetadataConstant{
		Type:   typ,
		Values: []*schemametadata.MetadataConstantValue{},
	})
	metadata.Constants = append(metadata.Constants, constant)
	return constant
}

func iterate_metadata_constant_add(constant *schemametadata.MetadataConstant, value *schemametadata.MetadataConstantValue) {
	for _, oldbie := range constant.Values {
		if fmt.Sprint(oldbie.Value) == fmt.Sprint(value.Value) {
			return
		}
	}
	constant.Values = append(constant.Values, value)
}
