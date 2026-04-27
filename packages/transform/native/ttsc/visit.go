package ttsc

import (
	"path/filepath"
	"strings"

	"github.com/microsoft/typescript-go/shim/ast"
	shimchecker "github.com/microsoft/typescript-go/shim/checker"
)

// CallSite describes one typia consumer call recognized by the typia native
// plugin. The generic ttsc host does not own this shape.
type CallSite struct {
	File           *ast.SourceFile
	FilePath       string
	Module         string
	Method         string
	Call           *ast.CallExpression
	TypeNode       *ast.Node
	ConfigTypeNode *ast.Node
	TypeArgument   *shimchecker.Type
	RootName       string
	Namespaces     []string
}

// CollectCallSites walks the provided source files and records typia call
// expressions resolved through the checker.
func CollectCallSites(
	files []*ast.SourceFile,
	checker *shimchecker.Checker,
) []CallSite {
	var sites []CallSite
	for _, file := range files {
		file.ForEachChild(func(node *ast.Node) bool {
			walk(file, checker, node, &sites)
			return false
		})
	}
	return sites
}

func walk(
	file *ast.SourceFile,
	checker *shimchecker.Checker,
	node *ast.Node,
	sites *[]CallSite,
) {
	if node == nil {
		return
	}
	if node.Kind == ast.KindCallExpression {
		if site, ok := tryCallSite(file, checker, node); ok {
			*sites = append(*sites, site)
		}
	}
	node.ForEachChild(func(child *ast.Node) bool {
		walk(file, checker, child, sites)
		return false
	})
}

func tryCallSite(
	file *ast.SourceFile,
	checker *shimchecker.Checker,
	node *ast.Node,
) (CallSite, bool) {
	call := node.AsCallExpression()
	if call == nil {
		return CallSite{}, false
	}

	sig := checker.GetResolvedSignature(node)
	if sig == nil {
		return CallSite{}, false
	}
	decl := sig.Declaration()
	if decl == nil {
		return CallSite{}, false
	}
	declFile := ast.GetSourceFileOfNode(decl)
	if declFile == nil {
		return CallSite{}, false
	}
	declPath := filepath.ToSlash(declFile.FileName())

	module, ok := matchTypiaModule(declPath)
	if !ok {
		return CallSite{}, false
	}

	method := methodName(checker, decl, call)
	if method == "" {
		return CallSite{}, false
	}

	root, namespaces, ok := extractRootAndNamespaces(call, method)
	if !ok {
		return CallSite{}, false
	}

	site := CallSite{
		File:       file,
		FilePath:   file.FileName(),
		Module:     module,
		Method:     method,
		Call:       call,
		RootName:   root,
		Namespaces: namespaces,
	}
	if typeArgs := call.TypeArguments; typeArgs != nil && typeArgs.Nodes != nil && len(typeArgs.Nodes) > 0 {
		site.TypeNode = typeArgs.Nodes[0]
		site.TypeArgument = checker.GetTypeFromTypeNode(typeArgs.Nodes[0])
		if site.TypeArgument == nil {
			site.TypeArgument = checker.GetTypeAtLocation(typeArgs.Nodes[0])
		}
		if len(typeArgs.Nodes) > 1 {
			site.ConfigTypeNode = typeArgs.Nodes[1]
		}
	} else if supportsInferredInputType(module, method, call) {
		input := call.Arguments.Nodes[0]
		site.TypeArgument = checker.GetTypeAtLocation(input)
		site.TypeNode = inferredInputTypeNode(checker, input)
	}
	return site, true
}

func supportsInferredInputType(
	module string,
	method string,
	call *ast.CallExpression,
) bool {
	if call == nil || call.Arguments == nil || call.Arguments.Nodes == nil || len(call.Arguments.Nodes) == 0 {
		return false
	}
	switch module {
	case "module":
		switch method {
		case "assert",
			"assertEquals",
			"assertGuard",
			"assertGuardEquals",
			"assertType",
			"equals",
			"is",
			"validate",
			"validateEquals":
			return true
		default:
			return false
		}
	case "json":
		switch method {
		case "stringify", "assertStringify", "isStringify", "validateStringify":
			return true
		default:
			return false
		}
	default:
		return false
	}
}

func inferredInputTypeNode(
	checker *shimchecker.Checker,
	input *ast.Node,
) *ast.Node {
	if checker == nil || input == nil {
		return nil
	}
	sym := checker.GetSymbolAtLocation(input)
	if sym == nil && input.Kind == ast.KindPropertyAccessExpression {
		if prop := input.AsPropertyAccessExpression(); prop != nil {
			sym = checker.GetSymbolAtLocation(prop.Name())
		}
	}
	if sym == nil {
		return nil
	}
	if sym.ValueDeclaration != nil && sym.ValueDeclaration.Type() != nil {
		return sym.ValueDeclaration.Type()
	}
	for _, decl := range sym.Declarations {
		if decl != nil && decl.Type() != nil {
			return decl.Type()
		}
	}
	return nil
}

func matchTypiaModule(path string) (string, bool) {
	path = filepath.ToSlash(path)
	for _, suf := range []string{".d.ts", ".ts"} {
		for _, mid := range []string{"typia/lib/", "typia/src/", "packages/typia/src/"} {
			idx := strings.LastIndex(path, mid)
			if idx < 0 {
				continue
			}
			name := path[idx+len(mid):]
			if !strings.HasSuffix(name, suf) {
				continue
			}
			name = strings.TrimSuffix(name, suf)
			if strings.Contains(name, "/") {
				continue
			}
			return name, true
		}
	}
	return "", false
}

func methodName(
	checker *shimchecker.Checker,
	decl *ast.Node,
	call *ast.CallExpression,
) string {
	if declName := decl.Name(); declName != nil {
		if sym := checker.GetSymbolAtLocation(declName); sym != nil && sym.Name != "" {
			return sym.Name
		}
	}
	if call.Expression != nil && call.Expression.Kind == ast.KindPropertyAccessExpression {
		if prop := call.Expression.AsPropertyAccessExpression(); prop != nil {
			name := prop.Name()
			if name != nil && name.Kind == ast.KindIdentifier {
				if id := name.AsIdentifier(); id != nil {
					return id.Text
				}
			}
		}
	}
	if declName := decl.Name(); declName != nil && declName.Kind == ast.KindIdentifier {
		if ident := declName.AsIdentifier(); ident != nil {
			return ident.Text
		}
	}
	return ""
}

func extractRootAndNamespaces(
	call *ast.CallExpression,
	method string,
) (string, []string, bool) {
	expr := call.Expression
	var segments []string
	for expr != nil && expr.Kind == ast.KindPropertyAccessExpression {
		prop := expr.AsPropertyAccessExpression()
		if prop == nil {
			break
		}
		name := prop.Name()
		if name == nil || name.Kind != ast.KindIdentifier {
			return "", nil, false
		}
		id := name.AsIdentifier()
		if id == nil {
			return "", nil, false
		}
		segments = append([]string{id.Text}, segments...)
		expr = prop.Expression
	}
	if expr == nil || expr.Kind != ast.KindIdentifier {
		return "", nil, false
	}
	rootID := expr.AsIdentifier()
	if rootID == nil || rootID.Text == "" {
		return "", nil, false
	}
	if len(segments) == 0 {
		return "", nil, false
	}
	if segments[len(segments)-1] != method {
		return "", nil, false
	}
	namespaces := segments[:len(segments)-1]
	return rootID.Text, namespaces, true
}
