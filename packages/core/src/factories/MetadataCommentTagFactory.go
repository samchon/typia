package factories

import (
	"fmt"
	"strconv"
	"strings"
)

type metadataCommentTagFactory struct{}

var MetadataCommentTagFactory metadataCommentTagFactory

func (metadataCommentTagFactory) Analyze(props MetadataCommentAnalyzeProps) {
	messages := make([]string, 0)
	report := func(msg string) {
		messages = append(messages, msg)
	}
	validateReport := func(next ValidateReportProps) bool {
		property := `["typia.tag"]`
		if next.Property != nil {
			property = fmt.Sprintf(`["typia.tag.%s"]`, *next.Property)
		}
		messages = append(messages, "the property "+property+" "+next.Message+".")
		return false
	}
	for _, tag := range props.Tags {
		tagger := parseCommentTag(tag, report)
		for key, value := range tagger {
			filtered := make([]MetadataTypeTag, 0, len(value))
			for _, v := range value {
				if v.Validate != "" {
					filtered = append(filtered, v)
				}
			}
			if key == "array" {
				if len(props.Metadata.Arrays) == 0 {
					report("requires array type")
					continue
				}
				for i := range props.Metadata.Arrays {
					props.Metadata.Arrays[i].Tags = mergeTagMatrix(props.Metadata.Arrays[i].Tags, filtered, "array", validateReport)
				}
				continue
			}
			atomic := props.Metadata.FindAtomic(key)
			if atomic == nil {
				report("requires " + key + " type")
				continue
			}
			atomic.Tags = mergeTagMatrix(atomic.Tags, filtered, key, validateReport)
		}
	}
	if len(messages) != 0 {
		props.Errors.Add(MetadataError{Name: "comment tag(s)", Explore: props.Explore, Messages: messages})
	}
}

func (metadataCommentTagFactory) Get(props MetadataCommentGetProps) ([]MetadataTypeTag, error) {
	output := parseCommentTag(JSDocTag{Name: props.Kind, Text: props.Value}, func(string) {})[props.Type]
	if output == nil {
		return nil, fmt.Errorf("no tag found for (kind: %s, type: %s)", props.Kind, props.Type)
	}
	return output, nil
}

func parseCommentTag(tag JSDocTag, report func(string)) map[string][]MetadataTypeTag {
	value := strings.TrimSpace(tag.Text)
	if value == "" && tag.Name != "uniqueItems" {
		report("no comment tag value")
		return nil
	}
	switch tag.Name {
	case "items", "minItems":
		return map[string][]MetadataTypeTag{"array": {arrayBoundTag("minItems", value, report)}}
	case "maxItems":
		return map[string][]MetadataTypeTag{"array": {arrayBoundTag("maxItems", value, report)}}
	case "uniqueItems":
		return map[string][]MetadataTypeTag{"array": {{Name: "UniqueItems", Target: "array", Kind: "uniqueItems", Value: true, Validate: "$input.length <= 1 || (new Set($input).size === $input.length)", Exclusive: true, Schema: map[string]any{"uniqueItems": true}}}}
	case "type":
		normalized := strings.Trim(value, "{}")
		if normalized == "int" {
			normalized = "int32"
		} else if normalized == "uint" {
			normalized = "uint32"
		}
		if contains([]string{"int32", "uint32", "int64", "uint64", "float", "double"}, normalized) {
			return map[string][]MetadataTypeTag{
				"number": {{Name: fmt.Sprintf("Type<%q>", normalized), Target: "number", Kind: "type", Value: normalized, Validate: numberTypeValidate(normalized), Exclusive: true, Schema: map[string]any{"type": normalized}}},
				"bigint": {{Name: fmt.Sprintf("Type<%q>", normalized), Target: "bigint", Kind: "type", Value: normalized, Validate: bigintTypeValidate(normalized), Exclusive: true, Schema: map[string]any{"type": normalized}}},
			}
		}
	case "minimum", "exclusiveMinimum", "maximum", "exclusiveMaximum", "multipleOf":
		return numericRangeTags(tag.Name, value, report)
	case "minLength", "maxLength":
		return stringLengthTags(tag.Name, value, report)
	case "pattern":
		return map[string][]MetadataTypeTag{"string": {{Name: "Pattern<" + strconv.Quote(value) + ">", Target: "string", Kind: "pattern", Value: value, Validate: fmt.Sprintf("/%s/.test($input)", value), Exclusive: true, Schema: map[string]any{"pattern": value}}}}
	case "format":
		validate := FormatCheatSheet[value]
		return map[string][]MetadataTypeTag{"string": {{Name: "Format<" + strconv.Quote(value) + ">", Target: "string", Kind: "format", Value: value, Validate: validate, Exclusive: true, Schema: map[string]any{"format": value}}}}
	}
	return map[string][]MetadataTypeTag{}
}

func arrayBoundTag(kind, value string, report func(string)) MetadataTypeTag {
	parsed := parseInteger(value, true, report)
	schemaKey := kind
	validate := fmt.Sprintf("%s <= $input.length", value)
	if kind == "maxItems" {
		validate = fmt.Sprintf("$input.length <= %s", value)
	}
	return MetadataTypeTag{Name: upperFirst(kind) + "<" + value + ">", Target: "array", Kind: kind, Value: parsed, Validate: validate, Exclusive: true, Schema: map[string]any{schemaKey: parsed}}
}
