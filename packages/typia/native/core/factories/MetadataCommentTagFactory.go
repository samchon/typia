package factories

import (
	"math"
	"strconv"
	"strings"

	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type metadataCommentTagFactoryNamespace struct{}

var MetadataCommentTagFactory = metadataCommentTagFactoryNamespace{}

type metadataCommentTagFactory_TagRecord map[string][]schemametadata.IMetadataTypeTag

type metadataCommentTagFactory_parser func(props struct {
	Report func(msg string) any
	Value  string
}) metadataCommentTagFactory_TagRecord

func (metadataCommentTagFactoryNamespace) Analyze(props struct {
	Errors   *[]MetadataFactory_IError
	Metadata *schemametadata.MetadataSchema
	Tags     []schemametadata.IJsDocTagInfo
	Explore  MetadataFactory_IExplore
}) {
	messages := []string{}
	report := func(msg string) any {
		messages = append(messages, msg)
		return nil
	}
	validateReport := func(next struct {
		Property *string
		Message  string
	}) bool {
		property := "[\"typia.tag\"]"
		if next.Property != nil {
			property = "[\"typia.tag." + *next.Property + "\"]"
		}
		messages = append(messages, "the property "+property+" "+next.Message+".")
		return false
	}

	for _, tag := range props.Tags {
		tagger := metadataCommentTagFactory_parse(struct {
			Report func(msg string) any
			Tag    schemametadata.IJsDocTagInfo
		}{Report: report, Tag: tag})
		if tagger == nil {
			continue
		}
		for key, value := range tagger {
			filtered := []schemametadata.IMetadataTypeTag{}
			for _, elem := range value {
				filtered = append(filtered, elem)
			}
			if key == "array" {
				if len(props.Metadata.Arrays) == 0 {
					report("requires array type")
					continue
				}
				for _, array := range props.Metadata.Arrays {
					rows := [][]schemametadata.IMetadataTypeTag{}
					for _, row := range array.Tags {
						candidate := append(append([]schemametadata.IMetadataTypeTag{}, row...), filtered...)
						if MetadataTypeTagFactory.Validate(struct {
							Report func(struct {
								Property *string
								Message  string
							}) bool
							Type string
							Tags []schemametadata.IMetadataTypeTag
						}{Report: validateReport, Type: "array", Tags: candidate}) {
							rows = append(rows, row)
						}
					}
					array.Tags = rows
					if len(array.Tags) == 0 {
						array.Tags = append(array.Tags, filtered)
					} else {
						for i := range array.Tags {
							array.Tags[i] = append(array.Tags[i], filtered...)
						}
					}
				}
				continue
			}

			var atomic *schemametadata.MetadataAtomic
			for _, candidate := range props.Metadata.Atomics {
				if candidate.Type == key {
					atomic = candidate
					break
				}
			}
			if atomic == nil {
				if key == "bigint" || key == "number" {
					opposite := "bigint"
					if key == "bigint" {
						opposite = "number"
					}
					if _, ok := tagger[opposite]; ok {
						found := false
						for _, a := range props.Metadata.Atomics {
							if a.Type == opposite {
								found = true
								break
							}
						}
						if found {
							continue
						}
					}
				} else if key == "string" && len(value) != 0 && value[0].Kind == "format" && value[0].Value == "date-time" {
					continue
				}
				report("requires " + key + " type")
				continue
			}
			rows := [][]schemametadata.IMetadataTypeTag{}
			for _, row := range atomic.Tags {
				candidate := append(append([]schemametadata.IMetadataTypeTag{}, row...), filtered...)
				if MetadataTypeTagFactory.Validate(struct {
					Report func(struct {
						Property *string
						Message  string
					}) bool
					Type string
					Tags []schemametadata.IMetadataTypeTag
				}{Report: validateReport, Type: key, Tags: candidate}) {
					rows = append(rows, row)
				}
			}
			atomic.Tags = rows
			if len(atomic.Tags) == 0 {
				atomic.Tags = append(atomic.Tags, filtered)
			} else {
				for i := range atomic.Tags {
					atomic.Tags[i] = append(atomic.Tags[i], filtered...)
				}
			}
		}
	}

	if len(messages) != 0 && props.Errors != nil {
		*props.Errors = append(*props.Errors, MetadataFactory_IError{
			Name:     "comment tag(s)",
			Explore:  props.Explore,
			Messages: messages,
		})
	}
}

func metadataCommentTagFactory_parse(props struct {
	Report func(msg string) any
	Tag    schemametadata.IJsDocTagInfo
}) metadataCommentTagFactory_TagRecord {
	next := metadataCommentTagFactory_PARSER[props.Tag.Name]
	if next == nil {
		return metadataCommentTagFactory_TagRecord{}
	}
	value := ""
	if len(props.Tag.Text) != 0 {
		value = props.Tag.Text[0].Text
	}
	if value == "" && props.Tag.Name != "uniqueItems" {
		props.Report("no comment tag value")
		return nil
	}
	return next(struct {
		Report func(msg string) any
		Value  string
	}{Report: props.Report, Value: value})
}

func (metadataCommentTagFactoryNamespace) Get(props struct {
	Kind  string
	Type  string
	Value string
}) []schemametadata.IMetadataTypeTag {
	parser := metadataCommentTagFactory_PARSER[props.Kind]
	var output []schemametadata.IMetadataTypeTag
	if parser != nil {
		output = parser(struct {
			Report func(msg string) any
			Value  string
		}{
			Report: func(msg string) any { return nil },
			Value:  props.Value,
		})[props.Type]
	}
	if output == nil {
		panic("no tag found for (kind: " + props.Kind + ", type: " + props.Type + ").")
	}
	return output
}

var metadataCommentTagFactory_PARSER = map[string]metadataCommentTagFactory_parser{
	"items": func(props struct {
		Report func(msg string) any
		Value  string
	}) metadataCommentTagFactory_TagRecord {
		value := metadataCommentTagFactory_parse_integer(struct {
			Report   func(msg string) any
			Unsigned bool
			Value    string
		}{Report: props.Report, Value: props.Value, Unsigned: true})
		return metadataCommentTagFactory_TagRecord{"array": {
			{Name: "MinItems<" + props.Value + ">", Target: "array", Kind: "minItems", Value: value, Validate: props.Value + " <= $input.length", Exclusive: true, Schema: map[string]any{"minItems": value}},
			{Name: "MaxItems<" + props.Value + ">", Target: "array", Kind: "maxItems", Value: value, Validate: "$input.length <= " + props.Value, Exclusive: true, Schema: map[string]any{"maxItems": value}},
		}}
	},
	"minItems": func(props struct {
		Report func(msg string) any
		Value  string
	}) metadataCommentTagFactory_TagRecord {
		value := metadataCommentTagFactory_parse_integer(struct {
			Report   func(msg string) any
			Unsigned bool
			Value    string
		}{Report: props.Report, Value: props.Value, Unsigned: true})
		return metadataCommentTagFactory_TagRecord{"array": {{Name: "MinItems<" + props.Value + ">", Target: "array", Kind: "minItems", Value: value, Validate: props.Value + " <= $input.length", Exclusive: true, Schema: map[string]any{"minItems": value}}}}
	},
	"maxItems": func(props struct {
		Report func(msg string) any
		Value  string
	}) metadataCommentTagFactory_TagRecord {
		value := metadataCommentTagFactory_parse_integer(struct {
			Report   func(msg string) any
			Unsigned bool
			Value    string
		}{Report: props.Report, Value: props.Value, Unsigned: true})
		return metadataCommentTagFactory_TagRecord{"array": {{Name: "MaxItems<" + props.Value + ">", Target: "array", Kind: "maxItems", Value: value, Validate: "$input.length <= " + props.Value, Exclusive: true, Schema: map[string]any{"maxItems": value}}}}
	},
	"uniqueItems": func(props struct {
		Report func(msg string) any
		Value  string
	}) metadataCommentTagFactory_TagRecord {
		return metadataCommentTagFactory_TagRecord{"array": {{Name: "UniqueItems", Target: "array", Kind: "uniqueItems", Value: true, Validate: "$input.length <= 1 || (new Set($input).size === $input.length)", Exclusive: true, Schema: map[string]any{"uniqueItems": true}}}}
	},
	"type": metadataCommentTagFactory_parse_type,
	"minimum": func(props struct {
		Report func(msg string) any
		Value  string
	}) metadataCommentTagFactory_TagRecord {
		return metadataCommentTagFactory_numeric(props, "Minimum", "minimum", props.Value+" <= $input", props.Value+" <= $input", []string{"minimum", "exclusiveMinimum"})
	},
	"maximum": func(props struct {
		Report func(msg string) any
		Value  string
	}) metadataCommentTagFactory_TagRecord {
		return metadataCommentTagFactory_numeric(props, "Maximum", "maximum", "$input <= "+props.Value, "$input <= "+props.Value, []string{"maximum", "exclusiveMaximum"})
	},
	"exclusiveMinimum": func(props struct {
		Report func(msg string) any
		Value  string
	}) metadataCommentTagFactory_TagRecord {
		return metadataCommentTagFactory_numeric(props, "ExclusiveMinimum", "exclusiveMinimum", props.Value+" < $input", props.Value+" < $input", []string{"minimum", "exclusiveMinimum"})
	},
	"exclusiveMaximum": func(props struct {
		Report func(msg string) any
		Value  string
	}) metadataCommentTagFactory_TagRecord {
		return metadataCommentTagFactory_numeric(props, "ExclusiveMaximum", "exclusiveMaximum", "$input < "+props.Value, "$input < "+props.Value, []string{"maximum", "exclusiveMaximum"})
	},
	"multipleOf": func(props struct {
		Report func(msg string) any
		Value  string
	}) metadataCommentTagFactory_TagRecord {
		return metadataCommentTagFactory_numeric(props, "MultipleOf", "multipleOf", "$input % "+props.Value+" === 0", "$input % "+props.Value+"n === 0n", true)
	},
	"format": func(props struct {
		Report func(msg string) any
		Value  string
	}) metadataCommentTagFactory_TagRecord {
		matched, ok := metadataCommentTagFactory_FORMATS[props.Value]
		if ok == false {
			return metadataCommentTagFactory_TagRecord{}
		}
		return metadataCommentTagFactory_TagRecord{"string": {{Name: "Format<" + strconv.Quote(matched[0]) + ">", Target: "string", Kind: "format", Value: matched[0], Validate: matched[1], Exclusive: true, Schema: map[string]any{"format": matched[0]}}}}
	},
	"pattern": func(props struct {
		Report func(msg string) any
		Value  string
	}) metadataCommentTagFactory_TagRecord {
		return metadataCommentTagFactory_TagRecord{"string": {{Name: "Pattern<" + strconv.Quote(props.Value) + ">", Target: "string", Kind: "pattern", Value: props.Value, Validate: "RegExp(" + strconv.Quote(props.Value) + ").test($input)", Exclusive: []string{"format"}, Schema: map[string]any{"pattern": props.Value}}}}
	},
	"length": func(props struct {
		Report func(msg string) any
		Value  string
	}) metadataCommentTagFactory_TagRecord {
		value := metadataCommentTagFactory_parse_number(props)
		return metadataCommentTagFactory_TagRecord{"string": {
			{Name: "MinLength<" + props.Value + ">", Target: "string", Kind: "minLength", Value: value, Validate: props.Value + " <= $input.length", Exclusive: true, Schema: map[string]any{"minLength": value}},
			{Name: "MaxLength<" + props.Value + ">", Target: "string", Kind: "maxLength", Value: value, Validate: "$input.length <= " + props.Value, Exclusive: true, Schema: map[string]any{"maxLength": value}},
		}}
	},
	"minLength": func(props struct {
		Report func(msg string) any
		Value  string
	}) metadataCommentTagFactory_TagRecord {
		value := metadataCommentTagFactory_parse_number(props)
		return metadataCommentTagFactory_TagRecord{"string": {{Name: "MinLength<" + props.Value + ">", Target: "string", Kind: "minLength", Value: value, Validate: props.Value + " <= $input.length", Exclusive: true, Schema: map[string]any{"minLength": value}}}}
	},
	"maxLength": func(props struct {
		Report func(msg string) any
		Value  string
	}) metadataCommentTagFactory_TagRecord {
		value := metadataCommentTagFactory_parse_number(props)
		return metadataCommentTagFactory_TagRecord{"string": {{Name: "MaxLength<" + props.Value + ">", Target: "string", Kind: "maxLength", Value: value, Validate: "$input.length <= " + props.Value, Exclusive: true, Schema: map[string]any{"maxLength": value}}}}
	},
}

func metadataCommentTagFactory_parse_type(props struct {
	Report func(msg string) any
	Value  string
}) metadataCommentTagFactory_TagRecord {
	value := props.Value
	if strings.HasPrefix(value, "{") && strings.HasSuffix(value, "}") {
		value = value[1 : len(value)-1]
	}
	if value == "int" {
		value = "int32"
	} else if value == "uint" {
		value = "uint32"
	}
	if metadataCommentTagFactory_includes([]string{"int32", "uint32", "int64", "uint64", "float", "double"}, value) == false {
		return metadataCommentTagFactory_TagRecord{}
	}
	validate := "true"
	if value == "int32" {
		validate = "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647"
	} else if value == "uint32" {
		validate = "Math.floor($input) === $input && 0 <= $input && $input <= 4294967295"
	} else if value == "int64" {
		validate = "Math.floor($input) === $input && -9223372036854775808 <= $input && $input <= 9223372036854775807"
	} else if value == "uint64" {
		validate = "Math.floor($input) === $input && 0 <= $input && $input <= 18446744073709551615"
	} else if value == "float" {
		validate = "-1.175494351e38 <= $input && $input <= 3.4028235e38"
	}
	var numberSchema any
	if value == "int32" || value == "int64" {
		numberSchema = map[string]any{"type": "integer"}
	} else if value == "uint32" || value == "uint64" {
		numberSchema = map[string]any{"type": "integer", "minimum": 0}
	}
	var bigintSchema any
	if value == "uint64" {
		bigintSchema = map[string]any{"minimum": 0}
	}
	return metadataCommentTagFactory_TagRecord{
		"number": {{Name: "Type<" + strconv.Quote(value) + ">", Target: "number", Kind: "type", Value: value, Validate: validate, Exclusive: true, Schema: numberSchema}},
		"bigint": {{Name: "Type<" + strconv.Quote(value) + ">", Target: "bigint", Kind: "type", Value: value, Validate: map[bool]string{true: "true", false: "BigInt(0) <= $input"}[value == "int64"], Exclusive: true, Schema: bigintSchema}},
	}
}

func metadataCommentTagFactory_numeric(props struct {
	Report func(msg string) any
	Value  string
}, name string, kind string, numberValidate string, bigintValidate string, exclusive any) metadataCommentTagFactory_TagRecord {
	number := metadataCommentTagFactory_parse_number(props)
	integer := metadataCommentTagFactory_parse_integer(struct {
		Report   func(msg string) any
		Unsigned bool
		Value    string
	}{Report: props.Report, Value: props.Value, Unsigned: false})
	var bigint any
	if integer != nil {
		bigint = int64(*integer)
	}
	return metadataCommentTagFactory_TagRecord{
		"number": {{Name: name + "<" + props.Value + ">", Target: "number", Kind: kind, Value: number, Validate: numberValidate, Exclusive: exclusive, Schema: map[string]any{kind: number}}},
		"bigint": {{Name: name + "<" + props.Value + "n>", Target: "bigint", Kind: kind, Value: bigint, Validate: bigintValidate, Exclusive: exclusive, Schema: map[string]any{kind: number}}},
	}
}

func metadataCommentTagFactory_parse_number(props struct {
	Report func(msg string) any
	Value  string
}) any {
	parsed, err := strconv.ParseFloat(props.Value, 64)
	if err != nil || math.IsNaN(parsed) {
		props.Report("invalid number")
		return nil
	}
	return parsed
}

func metadataCommentTagFactory_parse_integer(props struct {
	Report   func(msg string) any
	Unsigned bool
	Value    string
}) *int {
	parsedAny := metadataCommentTagFactory_parse_number(struct {
		Report func(msg string) any
		Value  string
	}{Report: props.Report, Value: props.Value})
	parsed, ok := parsedAny.(float64)
	if ok == false {
		return nil
	}
	if math.Floor(parsed) != parsed {
		props.Report("invalid integer")
		return nil
	}
	if props.Unsigned && parsed < 0 {
		props.Report("invalid unsigned integer")
		return nil
	}
	value := int(parsed)
	return &value
}

var metadataCommentTagFactory_FORMATS = func() map[string][2]string {
	output := map[string][2]string{}
	for key, value := range FormatCheatSheet {
		output[key] = [2]string{key, value}
	}
	output["datetime"] = [2]string{"date-time", "!isNaN(new Date($input).getTime())"}
	output["dateTime"] = [2]string{"date-time", "!isNaN(new Date($input).getTime())"}
	return output
}()

func metadataCommentTagFactory_includes(values []string, target string) bool {
	for _, value := range values {
		if value == target {
			return true
		}
	}
	return false
}
