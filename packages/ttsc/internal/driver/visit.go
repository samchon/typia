package driver

import (
	"path/filepath"
	"strings"

	"github.com/microsoft/typescript-go/shim/ast"
	shimchecker "github.com/microsoft/typescript-go/shim/checker"
)

// CallSite describes a single `typia.*` call located by the visitor.
type CallSite struct {
	File         *ast.SourceFile
	FilePath     string
	Module       string // file-stem the signature resolved to (module / json / llm / ...)
	Method       string // method name (is / assert / validate / ...)
	Call         *ast.CallExpression
	TypeArgument *shimchecker.Type
	// RootName is the JS-visible local name for the typia default-import in
	// this file, e.g. `typia` (if `import typia from "typia"`) or `t` (if
	// `import t from "typia"`). Derived from the left-most identifier of the
	// call's expression chain.
	RootName string
	// Namespaces are the namespace segments between the root and method,
	// e.g. `["json"]` for `typia.json.stringify`. Empty for root-level
	// calls like `typia.is`.
	Namespaces []string
}

// CollectCallSites walks every non-declaration source file and records every
// typia.* call.
func (p *Program) CollectCallSites() []CallSite {
	var sites []CallSite
	for _, file := range p.SourceFiles() {
		file.ForEachChild(func(node *ast.Node) bool {
			walk(p, file, node, &sites)
			return false
		})
	}
	return sites
}

func walk(p *Program, file *ast.SourceFile, node *ast.Node, sites *[]CallSite) {
	if node == nil {
		return
	}
	if node.Kind == ast.KindCallExpression {
		if site, ok := tryCallSite(p, file, node); ok {
			*sites = append(*sites, site)
		}
	}
	node.ForEachChild(func(child *ast.Node) bool {
		walk(p, file, child, sites)
		return false
	})
}

func tryCallSite(p *Program, file *ast.SourceFile, node *ast.Node) (CallSite, bool) {
	call := node.AsCallExpression()
	if call == nil {
		return CallSite{}, false
	}

	sig := p.Checker.GetResolvedSignature(node)
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

	method := methodName(p.Checker, decl, call)
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
		site.TypeArgument = p.Checker.GetTypeFromTypeNode(typeArgs.Nodes[0])
	}
	return site, true
}

// matchTypiaModule returns the module name when `path` points at a typia file.
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

// methodName extracts the *original* method name from the call site.
func methodName(checker *shimchecker.Checker, decl *ast.Node, call *ast.CallExpression) string {
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

// extractRootAndNamespaces walks the left side of the call expression to
// decompose it into (rootName, namespaces). For `typia.json.stringify` it
// returns ("typia", ["json"]) — the trailing method name is known to the
// caller already.
//
// Safe against non-PropertyAccess expressions (e.g. bare identifiers,
// parenthesised expressions) — tsgo's AsX() helpers panic when the kind
// doesn't match, so we must gate every call by Kind.
func extractRootAndNamespaces(call *ast.CallExpression, method string) (string, []string, bool) {
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
	// Drop the trailing method name from the namespace list.
	_ = method
	namespaces := segments[:len(segments)-1]
	return rootID.Text, namespaces, true
}
