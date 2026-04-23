package analyzer

import (
	"strconv"

	"github.com/samchon/typia/packages/core/native/metadata"
)

// extractTag recognises the typia brand-type shape:
//
//	{ "typia.tag"?: { target, kind, value, validate?, exclusive?, schema? } }
//
// Returns (tag, true) when the given schema holds exactly such an object.
// Mirrors typia v12's `MetadataTagFactory.read`.
func extractTag(s *metadata.Schema) (metadata.TypeTag, bool) {
	if s == nil || len(s.Objects) != 1 {
		return metadata.TypeTag{}, false
	}
	obj := s.Objects[0].Type
	if obj == nil || len(obj.Properties) != 1 {
		return metadata.TypeTag{}, false
	}
	prop := obj.Properties[0]
	if prop == nil || prop.Key == nil || prop.Value == nil {
		return metadata.TypeTag{}, false
	}
	key, ok := prop.Key.GetSoleLiteral()
	if !ok || key != "typia.tag" {
		return metadata.TypeTag{}, false
	}
	if len(prop.Value.Objects) != 1 {
		return metadata.TypeTag{}, false
	}
	tagObj := prop.Value.Objects[0].Type
	if tagObj == nil {
		return metadata.TypeTag{}, false
	}

	tag := metadata.TypeTag{Name: obj.Name}
	for _, p := range tagObj.Properties {
		if p == nil || p.Key == nil || p.Value == nil {
			continue
		}
		name, ok := p.Key.GetSoleLiteral()
		if !ok {
			continue
		}
		switch name {
		case "target":
			if v, ok := p.Value.GetSoleLiteral(); ok {
				tag.Target = v
			}
		case "kind":
			if v, ok := p.Value.GetSoleLiteral(); ok {
				tag.Kind = v
			}
		case "value":
			if len(p.Value.Constants) > 0 && len(p.Value.Constants[0].Values) > 0 {
				tag.Value = p.Value.Constants[0].Values[0].Value
			}
		case "validate":
			if v, ok := p.Value.GetSoleLiteral(); ok {
				tag.Validate = v
			} else if len(p.Value.Templates) == 1 &&
				p.Value.Size() == 1 &&
				p.Value.Bucket() == 1 {
				tag.Validate = p.Value.Templates[0].RawName
			} else if len(p.Value.Constants) == 1 && len(p.Value.Constants[0].Values) == 1 {
				if value, ok := p.Value.Constants[0].Values[0].Value.(string); ok {
					tag.Validate = value
				}
			}
		case "exclusive":
			// `exclusive` is typed `boolean | string[]`. iterate_metadata
			// widens boolean literals into the Atomics bucket, so check both.
			if len(p.Value.Constants) > 0 && len(p.Value.Constants[0].Values) > 0 {
				tag.Exclusive = p.Value.Constants[0].Values[0].Value
			} else if len(p.Value.Atomics) > 0 && p.Value.Atomics[0].Type == metadata.AtomicBoolean {
				// Non-literal boolean — assume the common `exclusive: true` case.
				tag.Exclusive = true
			}
		case "schema":
			if schema, ok := serializeTagSchemaValue(p.Value); ok {
				tag.Schema = schema
			}
		}
	}
	if tag.Kind == "" {
		return metadata.TypeTag{}, false
	}
	normalizeExtractedTag(&tag)
	return tag, true
}

func serializeTagSchemaValue(schema *metadata.Schema) (any, bool) {
	if schema == nil {
		return nil, false
	}
	if value, ok := schema.GetSoleLiteral(); ok {
		return value, true
	}
	if len(schema.Constants) == 1 {
		constant := schema.Constants[0]
		if len(constant.Values) == 1 {
			return constant.Values[0].Value, true
		}
		values := make([]any, 0, len(constant.Values))
		for _, value := range constant.Values {
			values = append(values, value.Value)
		}
		return values, true
	}
	if len(schema.Templates) != 0 && len(schema.Templates) == schema.Size() {
		out := make([]any, 0, len(schema.Templates))
		for _, tpl := range schema.Templates {
			out = append(out, tpl.RawName)
		}
		return out, true
	}
	if len(schema.Arrays) == 1 && schema.Bucket() == 1 && schema.Size() == 1 {
		array := schema.Arrays[0]
		if array == nil || array.Type == nil {
			return nil, false
		}
		return serializeTagSchemaValue(array.Type.Value)
	}
	if len(schema.Objects) == 1 && schema.Bucket() == 1 && schema.Size() == 1 {
		obj := schema.Objects[0]
		if obj == nil || obj.Type == nil {
			return nil, false
		}
		if len(obj.Type.DynamicProperties) != 0 || obj.Type.AdditionalProperties != nil {
			return nil, false
		}
		out := map[string]any{}
		for _, prop := range obj.Type.Properties {
			if prop == nil || prop.Key == nil || prop.Value == nil {
				continue
			}
			key, ok := prop.Key.GetSoleLiteral()
			if !ok {
				return nil, false
			}
			value, ok := serializeTagSchemaValue(prop.Value)
			if !ok {
				return nil, false
			}
			out[key] = value
		}
		return out, true
	}
	return nil, false
}

// attachTag adds the tag to every bucket whose category matches tag.Target.
// The tag joins the atomic's last tag row (intersection semantics) so that
// `string & Format<"email"> & MinLength<3>` composes AND-style.
func attachTag(out *metadata.Schema, tag metadata.TypeTag) {
	if tag.Target == "" {
		if inferred, ok := inferTagTarget(out, tag); ok {
			tag.Target = inferred
			normalizeExtractedTag(&tag)
		}
	}
	if tag.Kind == "sequence" || tag.Target == "" {
		for i := range out.Atomics {
			out.Atomics[i].Tags = appendTagRow(out.Atomics[i].Tags, tag)
		}
		for i := range out.Constants {
			for j := range out.Constants[i].Values {
				out.Constants[i].Values[j].Tags = appendTagRow(out.Constants[i].Values[j].Tags, tag)
			}
		}
		for i := range out.Templates {
			out.Templates[i].Tags = appendTagRow(out.Templates[i].Tags, tag)
		}
		for i := range out.Arrays {
			out.Arrays[i].Tags = appendTagRow(out.Arrays[i].Tags, tag)
		}
		for i := range out.Objects {
			out.Objects[i].Tags = appendTagRow(out.Objects[i].Tags, tag)
		}
		for i := range out.Sets {
			out.Sets[i].Tags = appendTagRow(out.Sets[i].Tags, tag)
		}
		for i := range out.Maps {
			out.Maps[i].Tags = appendTagRow(out.Maps[i].Tags, tag)
		}
		for i := range out.Natives {
			out.Natives[i].Tags = appendTagRow(out.Natives[i].Tags, tag)
		}
		return
	}
	switch tag.Target {
	case "string", "boolean", "bigint", "number":
		if tag.Target == "number" && tag.Kind == "type" {
			if kind, ok := tag.Value.(string); ok && (kind == "int64" || kind == "uint64") {
				bigintTag := tag
				bigintTag.Target = "bigint"
				normalizeExtractedTag(&bigintTag)
				applied := false
				for i := range out.Atomics {
					if out.Atomics[i].Type == metadata.AtomicBigint {
						out.Atomics[i].Tags = appendTagRow(out.Atomics[i].Tags, bigintTag)
						applied = true
					}
				}
				for i := range out.Constants {
					if out.Constants[i].Type == metadata.AtomicBigint {
						for j := range out.Constants[i].Values {
							out.Constants[i].Values[j].Tags = appendTagRow(out.Constants[i].Values[j].Tags, bigintTag)
						}
						applied = true
					}
				}
				if applied {
					return
				}
			}
		}
		normalizeExtractedTag(&tag)
		for i := range out.Atomics {
			if string(out.Atomics[i].Type) == tag.Target {
				out.Atomics[i].Tags = appendTagRow(out.Atomics[i].Tags, tag)
				return
			}
		}
		for i := range out.Constants {
			if string(out.Constants[i].Type) == tag.Target {
				for j := range out.Constants[i].Values {
					out.Constants[i].Values[j].Tags = appendTagRow(out.Constants[i].Values[j].Tags, tag)
				}
				return
			}
		}
	case "array":
		for i := range out.Arrays {
			out.Arrays[i].Tags = appendTagRow(out.Arrays[i].Tags, tag)
		}
	case "object":
		for i := range out.Objects {
			out.Objects[i].Tags = appendTagRow(out.Objects[i].Tags, tag)
		}
	}
}

// appendTagRow adds tag to the last row of the matrix (or starts a new row
// if empty). AND-style composition inside a row, OR-style across rows.
func appendTagRow(m metadata.TagMatrix, tag metadata.TypeTag) metadata.TagMatrix {
	if len(m) == 0 {
		return metadata.TagMatrix{{tag}}
	}
	last := m[len(m)-1]
	m[len(m)-1] = append(last, tag)
	return m
}

func inferTagTarget(out *metadata.Schema, tag metadata.TypeTag) (string, bool) {
	candidates := make([]string, 0, 6)
	seen := make(map[string]bool)
	add := func(target string) {
		if target == "" || seen[target] {
			return
		}
		seen[target] = true
		candidates = append(candidates, target)
	}
	for _, atomic := range out.Atomics {
		add(string(atomic.Type))
	}
	for _, constant := range out.Constants {
		add(string(constant.Type))
	}
	if len(out.Templates) != 0 {
		add("string")
	}
	if len(out.Arrays) != 0 || len(out.Tuples) != 0 {
		add("array")
	}
	if len(out.Objects) != 0 {
		add("object")
	}
	if len(candidates) == 1 {
		return candidates[0], true
	}
	if tag.Kind == "type" {
		if value, ok := tag.Value.(string); ok {
			switch value {
			case "int64", "uint64":
				if seen["bigint"] {
					return "bigint", true
				}
				if seen["number"] {
					return "number", true
				}
			case "int32", "uint32", "float", "double":
				if seen["number"] {
					return "number", true
				}
			}
		}
	}
	return "", false
}

func normalizeExtractedTag(tag *metadata.TypeTag) {
	if tag == nil {
		return
	}
	switch tag.Kind {
	case "type":
		normalizeExtractedTypeTag(tag)
	case "minimum", "maximum", "exclusiveMinimum", "exclusiveMaximum", "multipleOf":
		normalizeExtractedNumericTag(tag)
	}
}

func normalizeExtractedTypeTag(tag *metadata.TypeTag) {
	value, ok := tag.Value.(string)
	if !ok || value == "" {
		return
	}
	if value == "int" {
		value = "int32"
		tag.Value = value
	} else if value == "uint" {
		value = "uint32"
		tag.Value = value
	}
	tag.Name = `Type<` + strconv.Quote(value) + `>`
	switch tag.Target {
	case "bigint":
		if value == "uint64" {
			tag.Validate = "BigInt(0) <= $input"
			tag.Schema = map[string]any{
				"minimum": 0,
			}
		} else {
			tag.Validate = "true"
			tag.Schema = nil
		}
	case "number":
		switch value {
		case "int32":
			tag.Validate = `Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647`
			tag.Schema = map[string]any{"type": "integer"}
		case "uint32":
			tag.Validate = `Math.floor($input) === $input && 0 <= $input && $input <= 4294967295`
			tag.Schema = map[string]any{"type": "integer", "minimum": 0}
		case "int64":
			tag.Validate = `Math.floor($input) === $input && -9223372036854775808 <= $input && $input <= 9223372036854775807`
			tag.Schema = map[string]any{"type": "integer"}
		case "uint64":
			tag.Validate = `Math.floor($input) === $input && 0 <= $input && $input <= 18446744073709551615`
			tag.Schema = map[string]any{"type": "integer", "minimum": 0}
		case "float":
			tag.Validate = `-1.175494351e38 <= $input && $input <= 3.4028235e38`
			tag.Schema = nil
		case "double":
			tag.Validate = `true`
			tag.Schema = nil
		}
	}
}

func normalizeExtractedNumericTag(tag *metadata.TypeTag) {
	if tag.Value == nil {
		return
	}
	suffix := ""
	if tag.Target == "bigint" {
		suffix = "n"
	}
	value := tagLiteralValue(tag.Value, tag.Target == "bigint")
	if value == "" {
		return
	}
	tag.Name = normalizedNumericTagName(tag.Kind, value+suffix)
	if tag.Target == "bigint" && tag.Kind == "multipleOf" {
		tag.Validate = "$input % " + value + "n === 0n"
	}
}

func tagLiteralValue(value any, bigint bool) string {
	switch v := value.(type) {
	case string:
		return v
	case int:
		return strconv.FormatInt(int64(v), 10)
	case int8:
		return strconv.FormatInt(int64(v), 10)
	case int16:
		return strconv.FormatInt(int64(v), 10)
	case int32:
		return strconv.FormatInt(int64(v), 10)
	case int64:
		return strconv.FormatInt(v, 10)
	case uint:
		return strconv.FormatUint(uint64(v), 10)
	case uint8:
		return strconv.FormatUint(uint64(v), 10)
	case uint16:
		return strconv.FormatUint(uint64(v), 10)
	case uint32:
		return strconv.FormatUint(uint64(v), 10)
	case uint64:
		return strconv.FormatUint(v, 10)
	case float32:
		return strconv.FormatFloat(float64(v), 'g', -1, 32)
	case float64:
		return strconv.FormatFloat(v, 'g', -1, 64)
	}
	if bigint {
		return ""
	}
	return ""
}

func normalizedNumericTagName(kind string, value string) string {
	switch kind {
	case "minimum":
		return "Minimum<" + value + ">"
	case "maximum":
		return "Maximum<" + value + ">"
	case "exclusiveMinimum":
		return "ExclusiveMinimum<" + value + ">"
	case "exclusiveMaximum":
		return "ExclusiveMaximum<" + value + ">"
	default:
		return "MultipleOf<" + value + ">"
	}
}
