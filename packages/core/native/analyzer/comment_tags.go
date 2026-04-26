package analyzer

import (
	"strconv"
	"strings"

	"github.com/microsoft/typescript-go/shim/ast"
	shimscanner "github.com/microsoft/typescript-go/shim/scanner"

	"github.com/samchon/typia/packages/core/native/metadata"
)

type jsDocTag struct {
	Name string
	Text string
}

func applyCommentTags(schema *metadata.Schema, node *ast.Node) {
	if schema == nil || node == nil {
		return
	}
	for _, tag := range nodeJsDocTags(node) {
		for _, parsed := range parseCommentTag(tag) {
			attachTag(schema, parsed)
		}
	}
}

func nodeJsDocTags(node *ast.Node) []jsDocTag {
	if node == nil {
		return nil
	}
	file := ast.GetSourceFileOfNode(node)
	if file == nil {
		return nil
	}
	output := []jsDocTag{}
	seen := map[string]bool{}
	appendTag := func(tag jsDocTag) {
		name := strings.TrimSpace(tag.Name)
		text := strings.TrimSpace(tag.Text)
		if name == "" {
			return
		}
		key := name + "\x00" + text
		if seen[key] {
			return
		}
		seen[key] = true
		output = append(output, jsDocTag{Name: name, Text: text})
	}
	jsdocs := node.JSDoc(file)
	if len(jsdocs) != 0 {
		last := jsdocs[len(jsdocs)-1]
		if last != nil && last.IsJSDoc() {
			doc := last.AsJSDoc()
			if doc != nil && doc.Tags != nil && len(doc.Tags.Nodes) != 0 {
				for _, tag := range doc.Tags.Nodes {
					if tag == nil || tag.TagName() == nil {
						continue
					}
					text := jsDocTagText(tag)
					appendTag(jsDocTag{
						Name: strings.TrimSpace(tag.TagName().Text()),
						Text: text,
					})
				}
			}
		}
	}
	for _, tag := range parseRawLeadingJsDocTags(file.Text(), shimscanner.GetTokenPosOfNode(node, file, false)) {
		appendTag(tag)
	}
	return output
}

func jsDocTagText(tag *ast.Node) string {
	if tag == nil {
		return ""
	}
	text := strings.TrimSpace(joinCommentList(tag.CommentList()))
	if text != "" {
		return text
	}
	raw := strings.TrimSpace(shimscanner.GetTextOfNode(tag))
	if raw == "" || !strings.HasPrefix(raw, "@") {
		return ""
	}
	if nameNode := tag.TagName(); nameNode != nil {
		name := strings.TrimSpace(nameNode.Text())
		if name != "" {
			raw = strings.TrimPrefix(raw, "@"+name)
			raw = strings.TrimSpace(raw)
		}
	}
	raw = strings.TrimPrefix(raw, "{")
	raw = strings.TrimSuffix(raw, "}")
	return strings.TrimSpace(raw)
}

func parseRawLeadingJsDocTags(text string, pos int) []jsDocTag {
	if pos <= 0 || pos > len(text) {
		return nil
	}
	end := pos
	for end > 0 {
		switch text[end-1] {
		case ' ', '\t', '\r', '\n':
			end--
		default:
			goto trimmed
		}
	}
trimmed:
	if end < 2 || text[end-2:end] != "*/" {
		return nil
	}
	start := strings.LastIndex(text[:end-2], "/**")
	if start < 0 {
		return nil
	}
	body := text[start+3 : end-2]
	lines := strings.Split(body, "\n")
	output := make([]jsDocTag, 0, len(lines))
	for _, line := range lines {
		line = strings.TrimSpace(line)
		line = strings.TrimPrefix(line, "*")
		line = strings.TrimSpace(line)
		if !strings.HasPrefix(line, "@") {
			continue
		}
		line = strings.TrimPrefix(line, "@")
		name := line
		value := ""
		for i, r := range line {
			if r == ' ' || r == '\t' {
				name = line[:i]
				value = strings.TrimSpace(line[i+1:])
				break
			}
		}
		if name == "" {
			continue
		}
		output = append(output, jsDocTag{Name: name, Text: value})
	}
	return output
}

func joinCommentList(list *ast.NodeList) string {
	if list == nil || len(list.Nodes) == 0 {
		return ""
	}
	var builder strings.Builder
	for _, part := range list.Nodes {
		if part == nil {
			continue
		}
		builder.WriteString(part.Text())
	}
	return builder.String()
}

func parseCommentTag(tag jsDocTag) []metadata.TypeTag {
	switch tag.Name {
	case "default":
		return nil
	case "uniqueItems":
		return []metadata.TypeTag{{
			Name:      "UniqueItems",
			Target:    "array",
			Kind:      "uniqueItems",
			Value:     true,
			Validate:  "$input.length <= 1 || (new Set($input).size === $input.length)",
			Exclusive: true,
			Schema: map[string]any{
				"uniqueItems": true,
			},
		}}
	case "items":
		value, ok := parseUnsignedInteger(tag.Text)
		if !ok {
			return nil
		}
		return []metadata.TypeTag{
			arrayBoundaryTag("minItems", value),
			arrayBoundaryTag("maxItems", value),
		}
	case "minItems", "maxItems":
		value, ok := parseUnsignedInteger(tag.Text)
		if !ok {
			return nil
		}
		return []metadata.TypeTag{arrayBoundaryTag(tag.Name, value)}
	case "length":
		value, ok := parseUnsignedInteger(tag.Text)
		if !ok {
			return nil
		}
		return []metadata.TypeTag{
			stringBoundaryTag("minLength", value),
			stringBoundaryTag("maxLength", value),
		}
	case "minLength", "maxLength":
		value, ok := parseUnsignedInteger(tag.Text)
		if !ok {
			return nil
		}
		return []metadata.TypeTag{stringBoundaryTag(tag.Name, value)}
	case "format":
		value := strings.TrimSpace(tag.Text)
		if value == "" {
			return nil
		}
		return []metadata.TypeTag{{
			Name:      "Format<" + strconv.Quote(value) + ">",
			Target:    "string",
			Kind:      "format",
			Value:     value,
			Exclusive: true,
			Schema: map[string]any{
				"format": value,
			},
		}}
	case "pattern":
		value := strings.TrimSpace(tag.Text)
		if value == "" {
			return nil
		}
		return []metadata.TypeTag{{
			Name:      "Pattern<" + strconv.Quote(value) + ">",
			Target:    "string",
			Kind:      "pattern",
			Value:     value,
			Validate:  "RegExp(" + strconv.Quote(value) + ").test($input)",
			Exclusive: []string{"format"},
			Schema: map[string]any{
				"pattern": value,
			},
		}}
	case "minimum", "maximum", "exclusiveMinimum", "exclusiveMaximum", "multipleOf":
		return numericCommentTags(tag.Name, tag.Text)
	case "type":
		return typeCommentTags(tag.Text)
	default:
		return nil
	}
}

func arrayBoundaryTag(kind string, value int64) metadata.TypeTag {
	text := strconv.FormatInt(value, 10)
	name := "MinItems"
	validate := text + " <= $input.length"
	schemaKey := "minItems"
	if kind == "maxItems" {
		name = "MaxItems"
		validate = "$input.length <= " + text
		schemaKey = "maxItems"
	}
	return metadata.TypeTag{
		Name:      name + "<" + text + ">",
		Target:    "array",
		Kind:      kind,
		Value:     value,
		Validate:  validate,
		Exclusive: true,
		Schema: map[string]any{
			schemaKey: value,
		},
	}
}

func stringBoundaryTag(kind string, value int64) metadata.TypeTag {
	text := strconv.FormatInt(value, 10)
	name := "MinLength"
	validate := text + " <= $input.length"
	schemaKey := "minLength"
	if kind == "maxLength" {
		name = "MaxLength"
		validate = "$input.length <= " + text
		schemaKey = "maxLength"
	}
	return metadata.TypeTag{
		Name:      name + "<" + text + ">",
		Target:    "string",
		Kind:      kind,
		Value:     value,
		Validate:  validate,
		Exclusive: true,
		Schema: map[string]any{
			schemaKey: value,
		},
	}
}

func numericCommentTags(kind string, raw string) []metadata.TypeTag {
	value, ok := parseNumberLiteral(raw)
	if !ok {
		return nil
	}
	schemaValue := raw
	if n, ok := value.(int64); ok {
		schemaValue = strconv.FormatInt(n, 10)
	}
	numberTag := metadata.TypeTag{
		Name:      numericTagName(kind, schemaValue),
		Target:    "number",
		Kind:      kind,
		Value:     value,
		Validate:  numberValidate(kind, schemaValue, false),
		Exclusive: numericExclusive(kind),
		Schema: map[string]any{
			kind: value,
		},
	}
	bigintTag := metadata.TypeTag{
		Name:      numericTagName(kind, schemaValue+"n"),
		Target:    "bigint",
		Kind:      kind,
		Value:     schemaValue,
		Validate:  numberValidate(kind, schemaValue, true),
		Exclusive: numericExclusive(kind),
		Schema: map[string]any{
			kind: value,
		},
	}
	return []metadata.TypeTag{numberTag, bigintTag}
}

func numericTagName(kind string, value string) string {
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

func numericExclusive(kind string) any {
	switch kind {
	case "minimum", "exclusiveMinimum":
		return []string{"minimum", "exclusiveMinimum"}
	case "maximum", "exclusiveMaximum":
		return []string{"maximum", "exclusiveMaximum"}
	default:
		return true
	}
}

func numberValidate(kind string, value string, bigint bool) string {
	literal := value
	if bigint {
		literal += "n"
	}
	switch kind {
	case "minimum":
		return literal + " <= $input"
	case "maximum":
		return "$input <= " + literal
	case "exclusiveMinimum":
		return literal + " < $input"
	case "exclusiveMaximum":
		return "$input < " + literal
	default:
		return "$input % " + literal + " === " + zeroLiteral(bigint)
	}
}

func zeroLiteral(bigint bool) string {
	if bigint {
		return "0n"
	}
	return "0"
}

func typeCommentTags(raw string) []metadata.TypeTag {
	value := strings.TrimSpace(raw)
	value = strings.TrimPrefix(value, "{")
	value = strings.TrimSuffix(value, "}")
	switch value {
	case "int":
		value = "int32"
	case "uint":
		value = "uint32"
	}
	numberTag := metadata.TypeTag{
		Name:   "Type<" + strconv.Quote(value) + ">",
		Target: "number",
		Kind:   "type",
		Value:  value,
	}
	switch value {
	case "int64", "uint64":
		return []metadata.TypeTag{
			numberTag,
			{
				Name:   "Type<" + strconv.Quote(value) + ">",
				Target: "bigint",
				Kind:   "type",
				Value:  value,
			},
		}
	case "int32", "uint32", "float", "double":
		return []metadata.TypeTag{numberTag}
	default:
		return nil
	}
}

func parseUnsignedInteger(raw string) (int64, bool) {
	value, err := strconv.ParseInt(strings.TrimSpace(raw), 10, 64)
	if err != nil || value < 0 {
		return 0, false
	}
	return value, true
}

func parseNumberLiteral(raw string) (any, bool) {
	text := strings.TrimSpace(raw)
	if text == "" {
		return nil, false
	}
	if !strings.ContainsAny(text, ".eE") {
		value, err := strconv.ParseInt(text, 10, 64)
		if err == nil {
			return value, true
		}
	}
	value, err := strconv.ParseFloat(text, 64)
	if err != nil {
		return nil, false
	}
	return value, true
}
