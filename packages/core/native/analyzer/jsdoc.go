package analyzer

import (
	"strings"

	"github.com/microsoft/typescript-go/shim/ast"
	shimscanner "github.com/microsoft/typescript-go/shim/scanner"

	"github.com/samchon/typia/packages/core/native/metadata"
)

func symbolDescription(sym *ast.Symbol) *string {
	for _, decl := range symbolDeclarations(sym) {
		if description := nodeDescription(decl); description != nil {
			return description
		}
	}
	return nil
}

func symbolDeclarations(sym *ast.Symbol) []*ast.Node {
	if sym == nil {
		return nil
	}
	output := make([]*ast.Node, 0, len(sym.Declarations)+1)
	if sym.ValueDeclaration != nil {
		output = append(output, sym.ValueDeclaration)
	}
	for _, decl := range sym.Declarations {
		if decl == nil || decl == sym.ValueDeclaration {
			continue
		}
		output = append(output, decl)
	}
	return output
}

func symbolHasInternalJsDoc(sym *ast.Symbol) bool {
	for _, decl := range symbolDeclarations(sym) {
		if nodeHasJsDocTag(decl, "internal") {
			return true
		}
	}
	return false
}

func jsDocTagsFromSymbol(sym *ast.Symbol) []string {
	if sym == nil {
		return nil
	}
	out := []string{}
	seen := map[string]bool{}
	for _, decl := range symbolDeclarations(sym) {
		for _, name := range nodeJsDocTagNames(decl) {
			if seen[name] {
				continue
			}
			seen[name] = true
			out = append(out, name)
		}
	}
	return out
}

func jsDocTextsFromSymbol(sym *ast.Symbol) map[string][]string {
	if sym == nil {
		return nil
	}
	out := map[string][]string{}
	for _, decl := range symbolDeclarations(sym) {
		for name, values := range nodeJsDocTexts(decl) {
			out[name] = append(out[name], values...)
		}
	}
	if len(out) == 0 {
		return nil
	}
	return out
}

func jsDocTagInfosFromSymbol(sym *ast.Symbol) []metadata.JsDocTagInfo {
	if sym == nil {
		return nil
	}
	out := []metadata.JsDocTagInfo{}
	seen := map[string]bool{}
	for _, decl := range symbolDeclarations(sym) {
		for _, info := range nodeJsDocTagInfos(decl) {
			key := jsDocTagInfoKey(info)
			if seen[key] {
				continue
			}
			seen[key] = true
			out = append(out, info)
		}
	}
	if len(out) == 0 {
		return nil
	}
	return out
}

func nodeDescription(node *ast.Node) *string {
	if node == nil {
		return nil
	}
	file := ast.GetSourceFileOfNode(node)
	if file == nil {
		return nil
	}
	jsdocs := node.JSDoc(file)
	lines := make([]string, 0, len(jsdocs))
	for _, jsdoc := range jsdocs {
		if jsdoc == nil || jsdoc.CommentList() == nil {
			continue
		}
		var builder strings.Builder
		for _, part := range jsdoc.CommentList().Nodes {
			if part == nil {
				continue
			}
			builder.WriteString(part.Text())
		}
		text := strings.TrimSpace(strings.ReplaceAll(builder.String(), "\r\n", "\n"))
		if text != "" {
			lines = append(lines, text)
		}
	}
	if len(lines) != 0 {
		description := strings.Join(lines, "\n\n")
		return &description
	}
	if raw := parseRawLeadingJsDocDescription(file.Text(), shimscanner.GetTokenPosOfNode(node, file, false)); raw != nil {
		return raw
	}
	if raw := parseRawLeadingJsDocDescription(file.Text(), int(node.Pos())); raw != nil {
		return raw
	}
	return nil
}

func nodeHasJsDocTag(node *ast.Node, target string) bool {
	for _, tag := range nodeJsDocTags(node) {
		if strings.EqualFold(strings.TrimSpace(tag.Name), target) {
			return true
		}
	}
	return false
}

func nodeJsDocTagNames(node *ast.Node) []string {
	tags := nodeJsDocTags(node)
	if len(tags) == 0 {
		return nil
	}
	out := make([]string, 0, len(tags))
	seen := map[string]bool{}
	for _, tag := range tags {
		name := strings.TrimSpace(tag.Name)
		if name == "" || seen[name] {
			continue
		}
		seen[name] = true
		out = append(out, name)
	}
	return out
}

func nodeJsDocTexts(node *ast.Node) map[string][]string {
	tags := nodeJsDocTags(node)
	if len(tags) == 0 {
		return nil
	}
	out := map[string][]string{}
	for _, tag := range tags {
		name := strings.TrimSpace(tag.Name)
		if name == "" {
			continue
		}
		out[name] = append(out[name], strings.TrimSpace(tag.Text))
	}
	if len(out) == 0 {
		return nil
	}
	return out
}

func nodeJsDocTagInfos(node *ast.Node) []metadata.JsDocTagInfo {
	tags := nodeJsDocTags(node)
	if len(tags) == 0 {
		return nil
	}
	out := make([]metadata.JsDocTagInfo, 0, len(tags))
	for _, tag := range tags {
		name := strings.TrimSpace(tag.Name)
		if name == "" {
			continue
		}
		info := metadata.JsDocTagInfo{Name: name}
		if len(tag.Segments) != 0 {
			info.Text = append([]metadata.JsDocText(nil), tag.Segments...)
		} else if text := strings.TrimSpace(tag.Text); text != "" {
			info.Text = []metadata.JsDocText{{Text: text, Kind: "text"}}
		}
		out = append(out, info)
	}
	if len(out) == 0 {
		return nil
	}
	return out
}

func jsDocTagInfoKey(info metadata.JsDocTagInfo) string {
	var builder strings.Builder
	builder.WriteString(info.Name)
	for _, segment := range info.Text {
		builder.WriteByte('\x00')
		builder.WriteString(segment.Kind)
		builder.WriteByte('\x00')
		builder.WriteString(segment.Text)
	}
	return builder.String()
}

func propertyMutabilityFromNode(node *ast.Node) *string {
	if node == nil || node.Modifiers() == nil {
		return nil
	}
	for _, modifier := range node.Modifiers().Nodes {
		if modifier != nil && strings.TrimSpace(shimscanner.GetTextOfNode(modifier)) == "readonly" {
			value := "readonly"
			return &value
		}
	}
	return nil
}

func propertyMutabilityFromSymbol(sym *ast.Symbol) *string {
	if sym == nil {
		return nil
	}
	for _, decl := range sym.Declarations {
		if mutability := propertyMutabilityFromNode(decl); mutability != nil {
			return mutability
		}
	}
	return nil
}

func parameterDescriptionFromMethodJsDoc(texts map[string][]string, name string, sole bool) string {
	values := texts["param"]
	if len(values) == 0 {
		return ""
	}
	for _, value := range values {
		text := strings.TrimSpace(value)
		if text == "" {
			continue
		}
		fields := strings.Fields(text)
		if len(fields) != 0 && fields[0] == name {
			return strings.TrimSpace(strings.TrimPrefix(text, fields[0]))
		}
	}
	if sole && len(values) == 1 {
		return strings.TrimSpace(values[0])
	}
	return ""
}

func parseRawLeadingJsDocDescription(text string, pos int) *string {
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
	end = skipLeadingModifiersBeforePosition(text, end)
	if end < 2 || text[end-2:end] != "*/" {
		return nil
	}
	start := strings.LastIndex(text[:end-2], "/**")
	if start < 0 {
		return nil
	}
	return parseRawJsDocDescription(text[start:end])
}

func parseRawJsDocDescription(comment string) *string {
	comment = strings.TrimSpace(comment)
	if len(comment) < 5 || !strings.HasPrefix(comment, "/**") || !strings.HasSuffix(comment, "*/") {
		return nil
	}
	body := comment[3 : len(comment)-2]
	lines := strings.Split(body, "\n")
	output := make([]string, 0, len(lines))
	lastBlank := false
	for _, line := range lines {
		line = strings.TrimSpace(line)
		line = strings.TrimPrefix(line, "*")
		line = strings.TrimSpace(line)
		if strings.HasPrefix(line, "@") {
			continue
		}
		if line == "" {
			if len(output) != 0 && !lastBlank {
				output = append(output, "")
			}
			lastBlank = true
			continue
		}
		output = append(output, line)
		lastBlank = false
	}
	for len(output) != 0 && output[len(output)-1] == "" {
		output = output[:len(output)-1]
	}
	if len(output) == 0 {
		return nil
	}
	description := strings.Join(output, "\n")
	return &description
}
