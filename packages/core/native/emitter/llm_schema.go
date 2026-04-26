package emitter

import (
	"encoding/json"
	"errors"
	"fmt"
	"sort"
	"strings"
)

func ConvertJsonSchemaExpressionToLlmParametersExpression(expr string) (string, error) {
	return ConvertJsonSchemaExpressionToLlmParametersExpressionWithConfig(expr, false)
}

func ConvertJsonSchemaExpressionToLlmParametersExpressionWithConfig(expr string, strict bool) (string, error) {
	return convertJsonSchemaExpressionToLlmParametersExpression(expr, strict, nil)
}

type llmRootMetadata struct {
	Title               string
	Description         string
	DescriptionFallback string
}

func ConvertJsonSchemaExpressionToLlmParametersExpressionWithRootMetadata(expr string, strict bool, meta llmRootMetadata) (string, error) {
	return convertJsonSchemaExpressionToLlmParametersExpression(expr, strict, &meta)
}

func convertJsonSchemaExpressionToLlmParametersExpression(expr string, strict bool, meta *llmRootMetadata) (string, error) {
	wrapper, err := parseJsonSchemaExpression(expr)
	if err != nil {
		return "", err
	}
	applyLlmRootMetadata(&wrapper, meta)
	defs := map[string]any{}
	root, err := llmParametersRootSchema(wrapper)
	if err != nil {
		return "", err
	}
	schema, err := convertOpenApiToLlmSchema(wrapper, defs, root, strict)
	if err != nil {
		return "", err
	}
	obj, ok := schema.(map[string]any)
	if !ok || obj["type"] != "object" {
		return "", errors.New("llm.parameters: target schema must be an object")
	}
	obj["additionalProperties"] = false
	obj["$defs"] = defs
	if rootObj, ok := wrapper.Schema.(map[string]any); ok {
		if ref, ok := rootObj["$ref"].(string); ok {
			if description := llmCascadeDescription(wrapper, ref, rootObj["description"], obj["description"]); description != "" {
				obj["description"] = description
			}
		}
	}
	raw, err := json.Marshal(obj)
	if err != nil {
		return "", err
	}
	return "(" + string(raw) + ")", nil
}

func applyLlmRootMetadata(wrapper *jsonSchemaExpressionWrapper, meta *llmRootMetadata) {
	if wrapper == nil || meta == nil {
		return
	}
	root, ok := wrapper.Schema.(map[string]any)
	if !ok {
		return
	}
	target := root
	if ref, ok := root["$ref"].(string); ok {
		key := ref[strings.LastIndex(ref, "/")+1:]
		if schema, ok := wrapper.Components.Schemas[key].(map[string]any); ok {
			target = schema
		}
	}
	if strings.TrimSpace(meta.Title) != "" {
		if _, ok := target["title"]; !ok {
			target["title"] = strings.TrimSpace(meta.Title)
		}
	}
	if strings.TrimSpace(meta.Description) != "" {
		if _, ok := target["description"]; !ok {
			target["description"] = strings.TrimSpace(meta.Description)
		}
		if _, ok := root["description"]; !ok {
			root["description"] = strings.TrimSpace(meta.Description)
		}
	} else if strings.TrimSpace(meta.DescriptionFallback) != "" {
		if _, ok := target["description"]; !ok {
			target["description"] = strings.TrimSpace(meta.DescriptionFallback)
		}
		if _, ok := root["description"]; !ok {
			root["description"] = strings.TrimSpace(meta.DescriptionFallback)
		}
	}
}

func ConvertJsonSchemaExpressionToLlmSchemaArrowFunction(expr string, preface string, target string) (string, error) {
	return ConvertJsonSchemaExpressionToLlmSchemaArrowFunctionWithConfig(expr, preface, target, false)
}

func ConvertJsonSchemaExpressionToLlmSchemaArrowFunctionWithConfig(expr string, preface string, target string, strict bool) (string, error) {
	wrapper, err := parseJsonSchemaExpression(expr)
	if err != nil {
		return "", err
	}
	if strings.TrimSpace(preface) != "" {
		root := extractQuotedRootFromPreface(preface)
		if root != "" {
			wrapper.Components.Schemas[root] = wrapper.Schema
			target = fmt.Sprintf(`{"$ref":"#/components/schemas/%s"}`, root)
		}
	}
	var targetSchema any = wrapper.Schema
	if strings.HasPrefix(target, "{") {
		if err := json.Unmarshal([]byte(target), &targetSchema); err != nil {
			return "", err
		}
	}
	defs := map[string]any{}
	schema, err := convertOpenApiToLlmSchema(wrapper, defs, targetSchema, strict)
	if err != nil {
		return "", err
	}
	rawSchema, err := json.Marshal(schema)
	if err != nil {
		return "", err
	}
	rawDefs, err := json.Marshal(defs)
	if err != nil {
		return "", err
	}
	if len(defs) == 0 {
		return "($defs = {}) => (" + string(rawSchema) + ")", nil
	}
	return fmt.Sprintf(`($defs = {}) => { Object.assign($defs, %s); return %s; }`, string(rawDefs), string(rawSchema)), nil
}

type jsonSchemaExpressionWrapper struct {
	Components struct {
		Schemas map[string]any `json:"schemas"`
	} `json:"components"`
	Schema any `json:"schema"`
}

func parseJsonSchemaExpression(expr string) (jsonSchemaExpressionWrapper, error) {
	trimmed := strings.TrimSpace(expr)
	trimmed = strings.TrimPrefix(trimmed, "(")
	trimmed = strings.TrimSuffix(trimmed, ")")
	var wrapper jsonSchemaExpressionWrapper
	if err := json.Unmarshal([]byte(trimmed), &wrapper); err != nil {
		return wrapper, err
	}
	if wrapper.Components.Schemas == nil {
		wrapper.Components.Schemas = map[string]any{}
	}
	return wrapper, nil
}

func llmParametersRootSchema(wrapper jsonSchemaExpressionWrapper) (any, error) {
	obj, ok := wrapper.Schema.(map[string]any)
	if !ok {
		return nil, errors.New("llm.parameters: target schema must be an object")
	}
	if ref, ok := obj["$ref"].(string); ok {
		key := ref[strings.LastIndex(ref, "/")+1:]
		target, ok := wrapper.Components.Schemas[key]
		if !ok {
			return nil, fmt.Errorf("llm.parameters: unable to find reference type %q", key)
		}
		return target, nil
	}
	if obj["type"] != "object" {
		return nil, errors.New("llm.parameters: target schema must be an object")
	}
	if llmTruthy(obj["additionalProperties"]) {
		return nil, errors.New("llm.parameters: additionalProperties are not allowed")
	}
	return obj, nil
}

func llmRequiredKeys(obj map[string]any, strict bool) []any {
	if strict {
		props, _ := obj["properties"].(map[string]any)
		keys := make([]string, 0, len(props))
		for key := range props {
			keys = append(keys, key)
		}
		sort.Strings(keys)
		out := make([]any, 0, len(keys))
		for _, key := range keys {
			out = append(out, key)
		}
		return out
	}
	if required, ok := obj["required"].([]any); ok {
		return required
	}
	return []any{}
}

func llmTruthy(value any) bool {
	if value == nil {
		return false
	}
	if b, ok := value.(bool); ok {
		return b
	}
	return true
}

func llmAppendTags(description any, tags []string) string {
	desc, _ := description.(string)
	if len(tags) == 0 {
		return desc
	}
	parts := []string{}
	if strings.TrimSpace(desc) != "" {
		parts = append(parts, desc, "")
	}
	parts = append(parts, tags...)
	return strings.Join(parts, "\n")
}

func shiftLlmArrayConstraints(out map[string]any, input map[string]any) {
	tags := []string{}
	for _, key := range []string{"minItems", "maxItems"} {
		if value, ok := input[key]; ok {
			tags = append(tags, "@"+key+" "+fmt.Sprint(value))
			delete(out, key)
		}
	}
	if value, ok := input["uniqueItems"].(bool); ok {
		if value {
			tags = append(tags, "@uniqueItems")
		}
		delete(out, "uniqueItems")
	}
	if desc := llmAppendTags(input["description"], tags); desc != "" {
		out["description"] = desc
	} else {
		delete(out, "description")
	}
}

func shiftLlmNumericConstraints(out map[string]any) {
	tags := []string{}
	for _, key := range []string{"minimum", "maximum", "exclusiveMinimum", "exclusiveMaximum", "multipleOf"} {
		if value, ok := out[key]; ok {
			tags = append(tags, "@"+key+" "+fmt.Sprint(value))
			delete(out, key)
		}
	}
	if _, ok := out["default"]; ok {
		delete(out, "default")
	}
	if desc := llmAppendTags(out["description"], tags); desc != "" {
		out["description"] = desc
	} else {
		delete(out, "description")
	}
}

func shiftLlmStringConstraints(out map[string]any) {
	tags := []string{}
	for _, key := range []string{"minLength", "maxLength", "format", "pattern", "contentMediaType"} {
		if value, ok := out[key]; ok {
			tags = append(tags, "@"+key+" "+fmt.Sprint(value))
			delete(out, key)
		}
	}
	if value, ok := out["default"]; ok {
		tags = append(tags, "@default "+fmt.Sprint(value))
		delete(out, "default")
	}
	if desc := llmAppendTags(out["description"], tags); desc != "" {
		out["description"] = desc
	} else {
		delete(out, "description")
	}
}

func llmStrictObjectDescription(obj map[string]any) string {
	desc, _ := obj["description"].(string)
	rawProps, _ := obj["properties"].(map[string]any)
	keys := make([]string, 0, len(rawProps))
	for key, value := range rawProps {
		child, ok := value.(map[string]any)
		if !ok {
			continue
		}
		if _, ok := child["$ref"]; !ok {
			continue
		}
		if text, ok := child["description"].(string); ok && strings.TrimSpace(text) != "" {
			keys = append(keys, key)
		}
	}
	sort.Strings(keys)
	parts := []string{}
	if strings.TrimSpace(desc) != "" {
		parts = append(parts, desc)
	}
	for _, key := range keys {
		child := rawProps[key].(map[string]any)
		text, _ := child["description"].(string)
		parts = append(parts, fmt.Sprintf("### Description of {@link %s} property:\n\n%s", llmDescriptionLinkKey(key), blockQuoteDescription(text)))
	}
	return strings.Join(parts, "\n\n")
}

func llmDescriptionLinkKey(key string) string {
	if key == "" {
		return jsonQuote(key)
	}
	for i, r := range key {
		if i == 0 {
			if r == '$' || r == '_' || ('A' <= r && r <= 'Z') || ('a' <= r && r <= 'z') {
				continue
			}
			return jsonQuote(key)
		}
		if r == '$' || r == '_' || ('0' <= r && r <= '9') || ('A' <= r && r <= 'Z') || ('a' <= r && r <= 'z') {
			continue
		}
		return jsonQuote(key)
	}
	return key
}

func blockQuoteDescription(text string) string {
	lines := strings.Split(text, "\n")
	for i, line := range lines {
		lines[i] = "> " + line
	}
	return strings.Join(lines, "\n")
}

func llmCascadeDescription(wrapper jsonSchemaExpressionWrapper, ref string, rootDescription any, current any) string {
	key := ref[strings.LastIndex(ref, "/")+1:]
	rootText, _ := rootDescription.(string)
	currentText, _ := current.(string)
	schema, _ := wrapper.Components.Schemas[key].(map[string]any)
	parentText, _ := schema["description"].(string)
	if strings.TrimSpace(rootText) == "" && strings.TrimSpace(currentText) == "" && strings.TrimSpace(parentText) == "" {
		return ""
	}
	parts := []string{}
	if strings.TrimSpace(rootText) != "" {
		parts = append(parts, rootText)
	}
	if strings.TrimSpace(currentText) != "" {
		if strings.TrimSpace(currentText) != strings.TrimSpace(rootText) {
			parts = append(parts, currentText)
		}
	}
	if strings.TrimSpace(parentText) != "" {
		parts = append(parts, "Description of the current {@link "+key+"} type:\n\n"+blockQuoteDescription(parentText))
	} else {
		parts = append(parts, "Current Type: {@link "+key+"}")
	}
	return strings.Join(parts, "\n\n------------------------------\n\n")
}

func convertOpenApiToLlmSchema(
	wrapper jsonSchemaExpressionWrapper,
	defs map[string]any,
	schema any,
	strict bool,
) (any, error) {
	obj, ok := schema.(map[string]any)
	if !ok {
		return map[string]any{}, nil
	}
	if ref, ok := obj["$ref"].(string); ok {
		key := ref[strings.LastIndex(ref, "/")+1:]
		if _, exists := defs[key]; !exists {
			defs[key] = map[string]any{}
			target, ok := wrapper.Components.Schemas[key]
			if !ok {
				return nil, fmt.Errorf("llm.schema: unable to find reference type %q", key)
			}
			converted, err := convertOpenApiToLlmSchema(wrapper, defs, target, strict)
			if err != nil {
				return nil, err
			}
			defs[key] = converted
		}
		return map[string]any{"$ref": "#/$defs/" + key}, nil
	}
	if oneOf, ok := obj["oneOf"].([]any); ok {
		anyOf := make([]any, 0, len(oneOf))
		for _, child := range oneOf {
			next, err := convertOpenApiToLlmSchema(wrapper, defs, child, strict)
			if err != nil {
				return nil, err
			}
			anyOf = append(anyOf, next)
		}
		normalized := normalizeLlmAnyOf(anyOf)
		if len(normalized) == 1 {
			return mergeLlmAttribute(obj, normalized[0]), nil
		}
		out := map[string]any{"anyOf": normalized}
		if discriminator := llmDiscriminatorFromOpenApi(obj, normalized, len(oneOf)); discriminator != nil {
			out["x-discriminator"] = discriminator
		}
		return mergeLlmAttribute(obj, out), nil
	}
	if constValue, ok := obj["const"]; ok {
		return llmConstantSchema(constValue), nil
	}
	typ, _ := obj["type"].(string)
	switch typ {
	case "object":
		out := copyLlmAttribute(obj)
		out["type"] = "object"
		props := map[string]any{}
		if rawProps, ok := obj["properties"].(map[string]any); ok {
			keys := make([]string, 0, len(rawProps))
			for key := range rawProps {
				keys = append(keys, key)
			}
			sort.Strings(keys)
			for _, key := range keys {
				next, err := convertOpenApiToLlmSchema(wrapper, defs, rawProps[key], strict)
				if err != nil {
					return nil, err
				}
				props[key] = next
			}
		}
		out["properties"] = props
		out["required"] = llmRequiredKeys(obj, strict)
		if additional, ok := obj["additionalProperties"]; ok {
			if strict && llmTruthy(additional) {
				return nil, errors.New("llm.schema: strict mode does not allow additionalProperties")
			}
			if child, ok := additional.(map[string]any); ok {
				next, err := convertOpenApiToLlmSchema(wrapper, defs, child, strict)
				if err != nil {
					return nil, err
				}
				out["additionalProperties"] = next
			} else {
				out["additionalProperties"] = additional
			}
		} else if strict {
			out["additionalProperties"] = false
		}
		if strict {
			if description := llmStrictObjectDescription(obj); description != "" {
				out["description"] = description
			} else {
				delete(out, "description")
			}
		}
		return out, nil
	case "array":
		out := copyLlmAttribute(obj)
		out["type"] = "array"
		next, err := convertOpenApiToLlmSchema(wrapper, defs, obj["items"], strict)
		if err != nil {
			return nil, err
		}
		out["items"] = next
		if strict {
			shiftLlmArrayConstraints(out, obj)
		}
		return out, nil
	case "boolean", "integer", "number", "string", "null":
		out := copyOpenApiSchema(obj)
		if strict {
			switch typ {
			case "integer", "number":
				shiftLlmNumericConstraints(out)
			case "string":
				shiftLlmStringConstraints(out)
			}
		}
		return out, nil
	default:
		return copyLlmAttribute(obj), nil
	}
}

func copyLlmAttribute(input map[string]any) map[string]any {
	out := map[string]any{}
	for _, key := range []string{
		"title",
		"description",
		"deprecated",
		"readOnly",
		"writeOnly",
		"example",
		"examples",
	} {
		if value, ok := input[key]; ok {
			out[key] = value
		}
	}
	for key, value := range input {
		if strings.HasPrefix(key, "x-") {
			out[key] = value
		}
	}
	return out
}

func copyOpenApiSchema(input map[string]any) map[string]any {
	out := copyLlmAttribute(input)
	for key, value := range input {
		if _, exists := out[key]; exists {
			continue
		}
		if key == "const" {
			continue
		}
		out[key] = value
	}
	return out
}

func mergeLlmAttribute(input map[string]any, schema any) map[string]any {
	base := copyLlmAttribute(input)
	if obj, ok := schema.(map[string]any); ok {
		for key, value := range obj {
			base[key] = value
		}
		return base
	}
	return base
}

func llmDiscriminatorFromOpenApi(input map[string]any, union []any, sourceLength int) map[string]any {
	raw, ok := input["discriminator"].(map[string]any)
	if !ok || sourceLength != len(union) {
		return nil
	}
	for _, elem := range union {
		if !isLlmReferenceOrNull(elem) {
			return nil
		}
	}
	propertyName, ok := raw["propertyName"].(string)
	if !ok || strings.TrimSpace(propertyName) == "" {
		return nil
	}
	out := map[string]any{"propertyName": propertyName}
	if mapping, ok := raw["mapping"].(map[string]any); ok {
		next := map[string]any{}
		for key, value := range mapping {
			ref, ok := value.(string)
			if !ok {
				continue
			}
			next[key] = "#/$defs/" + ref[strings.LastIndex(ref, "/")+1:]
		}
		if len(next) != 0 {
			out["mapping"] = next
		}
	}
	return out
}

func isLlmReferenceOrNull(value any) bool {
	obj, ok := value.(map[string]any)
	if !ok {
		return false
	}
	if _, ok := obj["$ref"].(string); ok {
		return true
	}
	typ, _ := obj["type"].(string)
	return typ == "null"
}

func llmConstantSchema(value any) map[string]any {
	switch value.(type) {
	case nil:
		return map[string]any{"type": "null"}
	case bool:
		return map[string]any{"type": "boolean", "enum": []any{value}}
	case string:
		return map[string]any{"type": "string", "enum": []any{value}}
	case float64:
		typ := "number"
		if value.(float64) == float64(int64(value.(float64))) {
			typ = "integer"
		}
		return map[string]any{"type": typ, "enum": []any{value}}
	default:
		return map[string]any{}
	}
}

func normalizeLlmAnyOf(values []any) []any {
	if len(values) <= 1 {
		return values
	}
	typ := ""
	enums := []any{}
	for _, value := range values {
		obj, ok := value.(map[string]any)
		if !ok || len(obj) != 2 {
			return values
		}
		nextType, _ := obj["type"].(string)
		rawEnum, ok := obj["enum"].([]any)
		if !ok || nextType == "" {
			return values
		}
		if typ == "" {
			typ = nextType
		} else if typ != nextType {
			return values
		}
		enums = append(enums, rawEnum...)
	}
	return []any{map[string]any{"type": typ, "enum": uniqueAnyValues(enums)}}
}

func uniqueAnyValues(values []any) []any {
	seen := map[string]struct{}{}
	out := make([]any, 0, len(values))
	for _, value := range values {
		key := fmt.Sprintf("%T:%v", value, value)
		if _, ok := seen[key]; ok {
			continue
		}
		seen[key] = struct{}{}
		out = append(out, value)
	}
	return out
}

func extractQuotedRootFromPreface(preface string) string {
	start := strings.Index(preface, `"`)
	end := strings.LastIndex(preface, `"`)
	if start < 0 || end <= start {
		return ""
	}
	var out string
	if err := json.Unmarshal([]byte(preface[start:end+1]), &out); err != nil {
		return ""
	}
	return out
}
