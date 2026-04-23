package analyzer

import (
	"strings"

	"github.com/microsoft/typescript-go/shim/ast"
	shimchecker "github.com/microsoft/typescript-go/shim/checker"
)

// shimTypeString tries to retrieve a human-readable name for `t`. tsgo
// exposes the full Checker.typeToString as a private method; exposing it via
// gen_shims ExtraMethods would require extra wrangling because it takes a
// `TypeFormatFlags`. We fall back to symbol names when present and to a
// synthetic "Type#<id>" otherwise — good enough for the registry
// keys and emitted error paths in the is/assert programmers.
func shimTypeString(_ *shimchecker.Checker, t *shimchecker.Type) string {
	if t == nil {
		return ""
	}
	if name := qualifiedTypeName(t); name != "" {
		return name
	}
	if sym := t.Symbol(); sym != nil && sym.Name != "" {
		return sym.Name
	}
	return ""
}

func qualifiedTypeName(t *shimchecker.Type) string {
	if t == nil {
		return ""
	}
	if name := qualifiedSymbolName(t.Symbol()); name != "" {
		return name
	}
	if name := qualifiedSymbolName(shimchecker.Type_getTypeNameSymbol(t)); name != "" {
		return name
	}
	return ""
}

func qualifiedSymbolName(sym *ast.Symbol) string {
	if sym == nil || sym.Name == "" {
		return ""
	}
	if name := qualifiedSymbolChain(sym); name != "" {
		return name
	}
	if decl := firstDeclarationNode(sym); decl != nil {
		if name := qualifiedDeclarationName(decl); name != "" {
			return name
		}
	}
	return ""
}

func qualifiedSymbolChain(sym *ast.Symbol) string {
	if sym == nil || sym.Name == "" {
		return ""
	}
	parts := []string{}
	for current := sym; current != nil; current = current.Parent {
		name := strings.TrimSpace(current.Name)
		if name == "" || name == "__global" || strings.Contains(name, "/") {
			continue
		}
		parts = append([]string{name}, parts...)
	}
	if len(parts) <= 1 {
		return ""
	}
	return strings.Join(parts, ".")
}

func firstDeclarationNode(sym *ast.Symbol) *ast.Node {
	if sym == nil {
		return nil
	}
	if sym.ValueDeclaration != nil {
		return sym.ValueDeclaration
	}
	for _, decl := range sym.Declarations {
		if decl != nil {
			return decl
		}
	}
	return nil
}

func qualifiedDeclarationName(decl *ast.Node) string {
	if decl == nil {
		return ""
	}
	name := declarationNameTextFromNode(decl)
	if name == "" {
		return ""
	}
	parts := []string{name}
	for parent := decl.Parent; parent != nil; parent = parent.Parent {
		if parent.Kind != ast.KindModuleDeclaration {
			continue
		}
		moduleName := declarationNameTextFromNode(parent)
		if moduleName == "" || strings.Contains(moduleName, "/") {
			continue
		}
		parts = append([]string{moduleName}, parts...)
	}
	return strings.Join(parts, ".")
}

func declarationNameTextFromNode(node *ast.Node) string {
	if node == nil || node.Name() == nil {
		return ""
	}
	return declarationNameText(node.Name())
}

func declarationNameText(node *ast.Node) string {
	if node == nil {
		return ""
	}
	switch node.Kind {
	case ast.KindIdentifier:
		if ident := node.AsIdentifier(); ident != nil {
			return ident.Text
		}
	case ast.KindStringLiteral:
		if literal := node.AsStringLiteral(); literal != nil {
			return literal.Text
		}
	}
	return ""
}
