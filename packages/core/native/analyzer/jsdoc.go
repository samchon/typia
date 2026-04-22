package analyzer

import (
	"strings"

	"github.com/microsoft/typescript-go/shim/ast"
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
	if len(jsdocs) == 0 {
		return nil
	}

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
	if len(lines) == 0 {
		return nil
	}
	description := strings.Join(lines, "\n\n")
	return &description
}

func nodeHasJsDocTag(node *ast.Node, target string) bool {
	for _, tag := range nodeJsDocTags(node) {
		if strings.EqualFold(strings.TrimSpace(tag.Name), target) {
			return true
		}
	}
	return false
}
