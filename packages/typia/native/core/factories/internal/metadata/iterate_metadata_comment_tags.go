package metadata

import (
	"strconv"
	"strings"

	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

func Iterate_metadata_comment_tags(props struct {
	Errors *[]MetadataFactory_IError
	Object *schemametadata.MetadataObjectType
}) {
	if props.Object == nil || props.Object.Tagged_ == true {
		return
	}
	props.Object.Tagged_ = true

	for _, property := range props.Object.Properties {
		if property == nil || property.Value == nil || len(property.JsDocTags) == 0 {
			continue
		}
		for _, tag := range property.JsDocTags {
			iterate_metadata_comment_tags_apply(props.Errors, props.Object, property, tag)
		}
	}
}

func iterate_metadata_comment_tags_apply(
	errors *[]MetadataFactory_IError,
	object *schemametadata.MetadataObjectType,
	property *schemametadata.MetadataProperty,
	tag schemametadata.IJsDocTagInfo,
) {
	value := iterate_metadata_comment_tags_value(tag)
	switch tag.Name {
	case "type":
		if iterate_metadata_comment_tags_require_value(errors, object, property, tag.Name, value) == false {
			return
		}
		iterate_metadata_comment_tags_type(property.Value, value)
	case "format":
		if iterate_metadata_comment_tags_require_value(errors, object, property, tag.Name, value) == false {
			return
		}
		if next, ok := iterate_metadata_comment_tags_format(value); ok {
			iterate_metadata_comment_tags_add_atomic(property.Value, "string", next)
		}
	case "pattern":
		if iterate_metadata_comment_tags_require_value(errors, object, property, tag.Name, value) == false {
			return
		}
		iterate_metadata_comment_tags_add_atomic(property.Value, "string", schemametadata.IMetadataTypeTag{
			Name: "Pattern<" + strconv.Quote(value) + ">", Target: "string", Kind: "pattern", Value: value,
			Validate:  "RegExp(" + strconv.Quote(value) + ").test($input)",
			Exclusive: []string{"format"},
			Schema:    map[string]any{"pattern": value},
		})
	case "length":
		if iterate_metadata_comment_tags_require_value(errors, object, property, tag.Name, value) == false {
			return
		}
		parsed := iterate_metadata_comment_tags_number(value)
		iterate_metadata_comment_tags_add_atomic(property.Value, "string", schemametadata.IMetadataTypeTag{
			Name: "MinLength<" + value + ">", Target: "string", Kind: "minLength", Value: parsed,
			Validate: value + " <= $input.length", Exclusive: true, Schema: map[string]any{"minLength": parsed},
		})
		iterate_metadata_comment_tags_add_atomic(property.Value, "string", schemametadata.IMetadataTypeTag{
			Name: "MaxLength<" + value + ">", Target: "string", Kind: "maxLength", Value: parsed,
			Validate: "$input.length <= " + value, Exclusive: true, Schema: map[string]any{"maxLength": parsed},
		})
	case "minLength":
		if iterate_metadata_comment_tags_require_value(errors, object, property, tag.Name, value) == false {
			return
		}
		parsed := iterate_metadata_comment_tags_number(value)
		iterate_metadata_comment_tags_add_atomic(property.Value, "string", schemametadata.IMetadataTypeTag{
			Name: "MinLength<" + value + ">", Target: "string", Kind: "minLength", Value: parsed,
			Validate: value + " <= $input.length", Exclusive: true, Schema: map[string]any{"minLength": parsed},
		})
	case "maxLength":
		if iterate_metadata_comment_tags_require_value(errors, object, property, tag.Name, value) == false {
			return
		}
		parsed := iterate_metadata_comment_tags_number(value)
		iterate_metadata_comment_tags_add_atomic(property.Value, "string", schemametadata.IMetadataTypeTag{
			Name: "MaxLength<" + value + ">", Target: "string", Kind: "maxLength", Value: parsed,
			Validate: "$input.length <= " + value, Exclusive: true, Schema: map[string]any{"maxLength": parsed},
		})
	case "items":
		if iterate_metadata_comment_tags_require_value(errors, object, property, tag.Name, value) == false {
			return
		}
		parsed := iterate_metadata_comment_tags_uint(value)
		iterate_metadata_comment_tags_add_array(property.Value, schemametadata.IMetadataTypeTag{
			Name: "MinItems<" + value + ">", Target: "array", Kind: "minItems", Value: parsed,
			Validate: value + " <= $input.length", Exclusive: true, Schema: map[string]any{"minItems": parsed},
		})
		iterate_metadata_comment_tags_add_array(property.Value, schemametadata.IMetadataTypeTag{
			Name: "MaxItems<" + value + ">", Target: "array", Kind: "maxItems", Value: parsed,
			Validate: "$input.length <= " + value, Exclusive: true, Schema: map[string]any{"maxItems": parsed},
		})
	case "minItems":
		if iterate_metadata_comment_tags_require_value(errors, object, property, tag.Name, value) == false {
			return
		}
		parsed := iterate_metadata_comment_tags_uint(value)
		iterate_metadata_comment_tags_add_array(property.Value, schemametadata.IMetadataTypeTag{
			Name: "MinItems<" + value + ">", Target: "array", Kind: "minItems", Value: parsed,
			Validate: value + " <= $input.length", Exclusive: true, Schema: map[string]any{"minItems": parsed},
		})
	case "maxItems":
		if iterate_metadata_comment_tags_require_value(errors, object, property, tag.Name, value) == false {
			return
		}
		parsed := iterate_metadata_comment_tags_uint(value)
		iterate_metadata_comment_tags_add_array(property.Value, schemametadata.IMetadataTypeTag{
			Name: "MaxItems<" + value + ">", Target: "array", Kind: "maxItems", Value: parsed,
			Validate: "$input.length <= " + value, Exclusive: true, Schema: map[string]any{"maxItems": parsed},
		})
	case "uniqueItems":
		iterate_metadata_comment_tags_add_array(property.Value, schemametadata.IMetadataTypeTag{
			Name: "UniqueItems", Target: "array", Kind: "uniqueItems", Value: true,
			Validate:  "$input.length <= 1 || (new Set($input).size === $input.length)",
			Exclusive: true,
			Schema:    map[string]any{"uniqueItems": true},
		})
	case "minimum", "maximum", "exclusiveMinimum", "exclusiveMaximum", "multipleOf":
		if iterate_metadata_comment_tags_require_value(errors, object, property, tag.Name, value) == false {
			return
		}
		iterate_metadata_comment_tags_numeric(property.Value, tag.Name, value)
	}
}

func iterate_metadata_comment_tags_value(tag schemametadata.IJsDocTagInfo) string {
	if len(tag.Text) == 0 {
		return ""
	}
	value := strings.TrimSpace(tag.Text[0].Text)
	if strings.HasPrefix(value, "{") && strings.HasSuffix(value, "}") {
		value = strings.TrimSpace(value[1 : len(value)-1])
	}
	return value
}

func iterate_metadata_comment_tags_type(metadata *schemametadata.MetadataSchema, value string) {
	if value == "int" {
		value = "int32"
	} else if value == "uint" {
		value = "uint32"
	}
	validate := "true"
	var numberSchema any
	var bigintSchema any
	switch value {
	case "int32":
		validate = "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647"
		numberSchema = map[string]any{"type": "integer"}
	case "uint32":
		validate = "Math.floor($input) === $input && 0 <= $input && $input <= 4294967295"
		numberSchema = map[string]any{"type": "integer", "minimum": 0}
	case "int64":
		validate = "Math.floor($input) === $input && -9223372036854775808 <= $input && $input <= 9223372036854775807"
		numberSchema = map[string]any{"type": "integer"}
	case "uint64":
		validate = "Math.floor($input) === $input && 0 <= $input && $input <= 18446744073709551615"
		numberSchema = map[string]any{"type": "integer", "minimum": 0}
		bigintSchema = map[string]any{"minimum": 0}
	case "float":
		validate = "-1.175494351e38 <= $input && $input <= 3.4028235e38"
	case "double":
	default:
		return
	}
	iterate_metadata_comment_tags_add_atomic(metadata, "number", schemametadata.IMetadataTypeTag{
		Name: "Type<" + strconv.Quote(value) + ">", Target: "number", Kind: "type", Value: value,
		Validate: validate, Exclusive: true, Schema: numberSchema,
	})
	bigintValidate := "BigInt(0) <= $input"
	if value == "int64" {
		bigintValidate = "true"
	}
	iterate_metadata_comment_tags_add_atomic(metadata, "bigint", schemametadata.IMetadataTypeTag{
		Name: "Type<" + strconv.Quote(value) + ">", Target: "bigint", Kind: "type", Value: value,
		Validate: bigintValidate, Exclusive: true, Schema: bigintSchema,
	})
}

func iterate_metadata_comment_tags_numeric(metadata *schemametadata.MetadataSchema, kind string, value string) {
	parsed := iterate_metadata_comment_tags_number(value)
	name := map[string]string{
		"minimum":          "Minimum",
		"maximum":          "Maximum",
		"exclusiveMinimum": "ExclusiveMinimum",
		"exclusiveMaximum": "ExclusiveMaximum",
		"multipleOf":       "MultipleOf",
	}[kind]
	validate := map[string]string{
		"minimum":          value + " <= $input",
		"maximum":          "$input <= " + value,
		"exclusiveMinimum": value + " < $input",
		"exclusiveMaximum": "$input < " + value,
		"multipleOf":       "$input % " + value + " === 0",
	}[kind]
	iterate_metadata_comment_tags_add_atomic(metadata, "number", schemametadata.IMetadataTypeTag{
		Name: name + "<" + value + ">", Target: "number", Kind: kind, Value: parsed,
		Validate: validate, Exclusive: true, Schema: map[string]any{kind: parsed},
	})
}

func iterate_metadata_comment_tags_format(value string) (schemametadata.IMetadataTypeTag, bool) {
	importInternal := func(name string) string {
		return `$importInternal("` + name + `")($input)`
	}
	formats := map[string]string{
		"uuid":      importInternal("_isFormatUuid"),
		"email":     importInternal("_isFormatEmail"),
		"url":       importInternal("_isFormatUrl"),
		"uri":       importInternal("_isFormatUri"),
		"ipv4":      importInternal("_isFormatIpv4"),
		"ipv6":      importInternal("_isFormatIpv6"),
		"date":      importInternal("_isFormatDate"),
		"date-time": importInternal("_isFormatDateTime"),
		"datetime":  "!isNaN(new Date($input).getTime())",
		"dateTime":  "!isNaN(new Date($input).getTime())",
	}
	validate, ok := formats[value]
	if ok == false {
		return schemametadata.IMetadataTypeTag{}, false
	}
	normalized := value
	if value == "datetime" || value == "dateTime" {
		normalized = "date-time"
	}
	return schemametadata.IMetadataTypeTag{
		Name: "Format<" + strconv.Quote(normalized) + ">", Target: "string", Kind: "format", Value: normalized,
		Validate: validate, Exclusive: true, Schema: map[string]any{"format": normalized},
	}, true
}

func iterate_metadata_comment_tags_add_atomic(metadata *schemametadata.MetadataSchema, typ string, tag schemametadata.IMetadataTypeTag) {
	if metadata == nil {
		return
	}
	for _, atomic := range metadata.Atomics {
		if atomic != nil && atomic.Type == typ {
			atomic.Tags = iterate_metadata_comment_tags_append(atomic.Tags, tag)
		}
	}
}

func iterate_metadata_comment_tags_add_array(metadata *schemametadata.MetadataSchema, tag schemametadata.IMetadataTypeTag) {
	if metadata == nil {
		return
	}
	for _, array := range metadata.Arrays {
		if array != nil {
			array.Tags = iterate_metadata_comment_tags_append(array.Tags, tag)
		}
	}
}

func iterate_metadata_comment_tags_append(rows [][]schemametadata.IMetadataTypeTag, tag schemametadata.IMetadataTypeTag) [][]schemametadata.IMetadataTypeTag {
	if len(rows) == 0 {
		return [][]schemametadata.IMetadataTypeTag{{tag}}
	}
	next := make([][]schemametadata.IMetadataTypeTag, len(rows))
	for i, row := range rows {
		next[i] = append(append([]schemametadata.IMetadataTypeTag{}, row...), tag)
	}
	return next
}

func iterate_metadata_comment_tags_number(value string) any {
	if strings.ContainsAny(value, ".eE") {
		if parsed, err := strconv.ParseFloat(value, 64); err == nil {
			return parsed
		}
	}
	if parsed, err := strconv.Atoi(value); err == nil {
		return parsed
	}
	return value
}

func iterate_metadata_comment_tags_uint(value string) any {
	if parsed, err := strconv.ParseUint(value, 10, 64); err == nil {
		return parsed
	}
	return iterate_metadata_comment_tags_number(value)
}

func iterate_metadata_comment_tags_require_value(
	errors *[]MetadataFactory_IError,
	object *schemametadata.MetadataObjectType,
	property *schemametadata.MetadataProperty,
	name string,
	value string,
) bool {
	if value != "" {
		return true
	}
	iterate_metadata_comment_tags_error(errors, object, property, "comment tag @"+name+" has no value")
	return false
}

func iterate_metadata_comment_tags_error(
	errors *[]MetadataFactory_IError,
	object *schemametadata.MetadataObjectType,
	property *schemametadata.MetadataProperty,
	message string,
) {
	if errors == nil {
		return
	}
	*errors = append(*errors, MetadataFactory_IError{
		Name: "comment tag(s)",
		Explore: MetadataFactory_IExplore{
			Object:   object,
			Property: property.Key,
		},
		Messages: []string{message},
	})
}
