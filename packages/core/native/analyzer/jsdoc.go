package analyzer

import (
	"strings"

	"github.com/microsoft/typescript-go/shim/ast"
	shimscanner "github.com/microsoft/typescript-go/shim/scanner"
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
	if end < 2 || text[end-2:end] != "*/" {
		return nil
	}
	start := strings.LastIndex(text[:end-2], "/**")
	if start < 0 {
		return nil
	}
	body := text[start+3 : end-2]
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
