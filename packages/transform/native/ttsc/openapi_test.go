package ttsc

import (
	"fmt"
	"path/filepath"
	"strings"
	"testing"

	"github.com/microsoft/typescript-go/shim/ast"
	_jsii "github.com/microsoft/typescript-go/shim/checker"
	shimscanner "github.com/microsoft/typescript-go/shim/scanner"

	"github.com/samchon/typia/packages/core/native/analyzer"
	"github.com/samchon/typia/packages/ttsc/driver"
)

func TestAnalyzeOpenApiIJsonSchema(t *testing.T) {
	repoRoot, err := filepath.Abs(filepath.Join("..", "..", "..", ".."))
	if err != nil {
		t.Fatalf("repo root: %v", err)
	}
	cwd := filepath.Join(repoRoot, "tests", "test-typia-automated")

	prog, diags, err := driver.LoadProgram(cwd, "tsconfig.json", driver.LoadProgramOptions{
		ForceEmit: true,
	})
	if err != nil {
		t.Fatalf("load program: %v", err)
	}
	defer prog.Close()
	if len(diags) != 0 {
		t.Fatalf("unexpected diagnostics: %v", diags)
	}

	var site *CallSite
	for _, candidate := range CollectCallSites(prog.SourceFiles(), prog.Checker) {
		if strings.HasSuffix(filepath.ToSlash(candidate.FilePath), "/src/probes/repro_openapi_is.ts") &&
			candidate.Method == "createIs" {
			copied := candidate
			site = &copied
			break
		}
	}
	if site == nil {
		t.Fatalf("target call site not found")
	}
	t.Logf(
		"typeNode=%q flags=%v typeName=%q",
		shimscanner.GetTextOfNode(site.TypeNode),
		func() _jsii.TypeFlags {
			if site.TypeArgument == nil {
				return 0
			}
			return site.TypeArgument.Flags()
		}(),
		analyzer.TypeName(prog.Checker, site.TypeArgument),
	)
	if ref := site.TypeNode.AsTypeReferenceNode(); ref != nil {
		t.Logf("typeName kind=%d debug=%s", ref.TypeName.Kind, debugNodeSymbol(prog.Checker, ref.TypeName.AsNode()))
		t.Logf("resolveEntityName(type)=%s", debugResolvedEntityName(prog.Checker, ref.TypeName.AsNode(), ast.SymbolFlagsType))
		t.Logf("resolveEntityName(namespace)=%s", debugResolvedEntityName(prog.Checker, ref.TypeName.AsNode(), ast.SymbolFlagsNamespace))
		t.Logf("related(typeName)=%v", debugRelatedDeclarations(prog.Checker, ref.TypeName.AsNode()))
		if ref.TypeName.Kind == ast.KindQualifiedName {
			q := ref.TypeName.AsNode().AsQualifiedName()
			t.Logf("qualified left=%s", debugNodeSymbol(prog.Checker, q.Left))
			t.Logf("qualified right=%s", debugNodeSymbol(prog.Checker, q.Right))
			if scope := debugScopeSymbol(prog.Checker, q.Left, "OpenApi"); scope != nil {
				t.Logf("scope(OpenApi) name=%q flags=%v member(IJsonSchema)=%s", scope.Name, scope.Flags, debugModuleMember(prog.Checker, scope, "IJsonSchema"))
			}
			t.Logf("type(left)=%s", debugTypeAtLocation(prog.Checker, q.Left))
			t.Logf("type(right)=%s", debugTypeAtLocation(prog.Checker, q.Right))
			if decls := debugRelatedDeclarationsFromSymbols(prog.Checker, debugExpressionSymbols(prog.Checker, q.Left, nil)...); len(decls) != 0 {
				if target := _jsii.Checker_getTargetOfImportSpecifier(prog.Checker, decls[0]); target != nil {
					exportNames := make([]string, 0, 8)
					for _, sym := range prog.Checker.GetExportsOfModule(target) {
						if sym == nil {
							continue
						}
						exportNames = append(exportNames, sym.Name)
						if len(exportNames) >= 8 {
							break
						}
					}
					t.Logf("importTarget name=%q flags=%v exports=%v", target.Name, target.Flags, exportNames)
				}
				if importDecl := findImportDeclaration(decls[0]); importDecl != nil {
					if decl := importDecl.AsImportDeclaration(); decl != nil && decl.ModuleSpecifier != nil {
						t.Logf("moduleSpecifier=%s", debugNodeSymbol(prog.Checker, decl.ModuleSpecifier))
						t.Logf("type(moduleSpecifier)=%s", debugTypeAtLocation(prog.Checker, decl.ModuleSpecifier))
						t.Logf("related(moduleSpecifier)=%v", debugRelatedDeclarations(prog.Checker, decl.ModuleSpecifier))
					}
				}
			}
			if importDecl := findImportDeclaration(q.Left); importDecl != nil {
				if decl := importDecl.AsImportDeclaration(); decl != nil && decl.ModuleSpecifier != nil {
					t.Logf("moduleSpecifier=%s", debugNodeSymbol(prog.Checker, decl.ModuleSpecifier))
					t.Logf("type(moduleSpecifier)=%s", debugTypeAtLocation(prog.Checker, decl.ModuleSpecifier))
					t.Logf("related(moduleSpecifier)=%v", debugRelatedDeclarations(prog.Checker, decl.ModuleSpecifier))
				}
			}
			t.Logf("related(left)=%v", debugRelatedDeclarations(prog.Checker, q.Left))
			t.Logf("related(right)=%v", debugRelatedDeclarations(prog.Checker, q.Right))
		}
	}

	fallbackNode := resolveQualifiedImportedTypeNode(prog.TSProgram.SourceFiles(), site.TypeNode)
	t.Logf("fallbackNode=%q", func() string {
		if fallbackNode == nil {
			return ""
		}
		return shimscanner.GetTextOfNode(fallbackNode)
	}())
	if fallbackNode != nil {
		if typ := prog.Checker.GetTypeFromTypeNode(fallbackNode); typ != nil {
			t.Logf("fallbackTypeFromTypeNode flags=%v name=%q", typ.Flags(), analyzer.TypeName(prog.Checker, typ))
		}
		if typ := prog.Checker.GetTypeAtLocation(fallbackNode); typ != nil {
			t.Logf("fallbackTypeAtLocation flags=%v name=%q", typ.Flags(), analyzer.TypeName(prog.Checker, typ))
		}
	}

	schema, ok := AnalyzeType(prog.Checker, site.TypeArgument, site.TypeNode, prog.TSProgram.SourceFiles())
	if !ok {
		t.Fatalf("AnalyzeType failed")
	}
	syntaxOnly, syntaxOK := analyzer.New(prog.Checker, analyzer.DefaultOptions(), nil).WalkWithTypeNode(nil, site.TypeNode)
	t.Logf("syntaxOnly ok=%v schema=%#v", syntaxOK, syntaxOnly)
	if schema == nil || schema.Empty() {
		t.Fatalf("schema is empty")
	}
	foundOneOf := false
	for _, ref := range schema.Objects {
		if ref == nil || ref.Type == nil {
			continue
		}
		for _, prop := range ref.Type.Properties {
			if prop == nil || prop.Key == nil {
				continue
			}
			if key, ok := prop.Key.GetSoleLiteral(); ok && key == "oneOf" {
				foundOneOf = true
				break
			}
		}
		if foundOneOf {
			break
		}
	}
	if !foundOneOf {
		t.Fatalf("expected oneOf property in OpenApi.IJsonSchema, got %#v", schema)
	}
}

func debugNodeSymbol(checker *_jsii.Checker, node *ast.Node) string {
	if node == nil {
		return "node=nil"
	}
	decls := func(sym *ast.Symbol) []string {
		if sym == nil {
			return nil
		}
		out := make([]string, 0, len(sym.Declarations))
		for _, decl := range sym.Declarations {
			if decl == nil {
				continue
			}
			out = append(out, fmt.Sprintf("%d:%q", decl.Kind, shimscanner.GetTextOfNode(decl)))
		}
		return out
	}
	return fmt.Sprintf(
		"text=%q nodeSym=%q checkerSym=%q aliased=%q decls(node)=%v decls(checker)=%v decls(alias)=%v",
		shimscanner.GetTextOfNode(node),
		func() string {
			if node.Symbol() == nil {
				return ""
			}
			return node.Symbol().Name
		}(),
		func() string {
			if checker == nil {
				return ""
			}
			if sym := checker.GetSymbolAtLocation(node); sym != nil {
				return sym.Name
			}
			return ""
		}(),
		func() string {
			if aliased := safeAliasedSymbol(checker, node); aliased != nil {
				return aliased.Name
			}
			return ""
		}(),
		decls(node.Symbol()),
		decls(func() *ast.Symbol {
			if checker == nil {
				return nil
			}
			return checker.GetSymbolAtLocation(node)
		}()),
		decls(func() *ast.Symbol {
			return safeAliasedSymbol(checker, node)
		}()),
	)
}

func safeAliasedSymbol(checker *_jsii.Checker, node *ast.Node) (out *ast.Symbol) {
	defer func() {
		if recover() != nil {
			out = nil
		}
	}()
	if checker == nil || node == nil {
		return nil
	}
	sym := checker.GetSymbolAtLocation(node)
	if sym == nil {
		return nil
	}
	return _jsii.Checker_getAliasedSymbol(checker, sym)
}

func debugRelatedDeclarations(checker *_jsii.Checker, node *ast.Node) []string {
	symbols := debugExpressionSymbols(checker, node, nil)
	decls := debugRelatedDeclarationsFromSymbols(checker, symbols...)
	out := make([]string, 0, len(decls))
	for _, decl := range decls {
		if decl == nil {
			continue
		}
		out = append(out, fmt.Sprintf("%d:%q", decl.Kind, shimscanner.GetTextOfNode(decl)))
	}
	return out
}

func debugExpressionSymbols(checker *_jsii.Checker, expr *ast.Node, resolved *_jsii.Type) []*ast.Symbol {
	out := make([]*ast.Symbol, 0, 4)
	seen := map[*ast.Symbol]struct{}{}
	appendSymbol := func(sym *ast.Symbol) {
		if sym == nil {
			return
		}
		if _, exists := seen[sym]; exists {
			return
		}
		seen[sym] = struct{}{}
		out = append(out, sym)
	}
	appendNode := func(node *ast.Node) {
		if node == nil {
			return
		}
		appendSymbol(node.Symbol())
		if checker != nil {
			appendSymbol(checker.GetSymbolAtLocation(node))
		}
	}
	var walk func(*ast.Node)
	walk = func(node *ast.Node) {
		if node == nil {
			return
		}
		appendNode(node)
		if node.Kind == ast.KindQualifiedName {
			q := node.AsQualifiedName()
			if q != nil {
				walk(q.Left)
				walk(q.Right)
			}
		}
	}
	walk(expr)
	if resolved != nil {
		appendSymbol(resolved.Symbol())
		appendSymbol(_jsii.Type_getTypeNameSymbol(resolved))
	}
	return out
}

func debugRelatedDeclarationsFromSymbols(checker *_jsii.Checker, seeds ...*ast.Symbol) []*ast.Node {
	symbols := debugRelatedSymbols(checker, seeds...)
	out := make([]*ast.Node, 0, len(symbols))
	seen := map[*ast.Node]struct{}{}
	for _, sym := range symbols {
		if sym == nil {
			continue
		}
		for _, decl := range sym.Declarations {
			if decl == nil {
				continue
			}
			if _, exists := seen[decl]; exists {
				continue
			}
			seen[decl] = struct{}{}
			out = append(out, decl)
		}
	}
	return out
}

func debugRelatedSymbols(checker *_jsii.Checker, seeds ...*ast.Symbol) []*ast.Symbol {
	out := make([]*ast.Symbol, 0, len(seeds))
	seen := map[*ast.Symbol]struct{}{}
	appendSymbol := func(sym *ast.Symbol) {
		if sym == nil {
			return
		}
		if _, exists := seen[sym]; exists {
			return
		}
		seen[sym] = struct{}{}
		out = append(out, sym)
	}
	for _, seed := range seeds {
		appendSymbol(seed)
	}
	for i := 0; i < len(out); i++ {
		if checker == nil {
			continue
		}
		for _, decl := range out[i].Declarations {
			if decl == nil {
				continue
			}
			switch decl.Kind {
			case ast.KindImportSpecifier:
				appendSymbol(_jsii.Checker_getTargetOfImportSpecifier(checker, decl))
			case ast.KindExportSpecifier:
				appendSymbol(checker.GetExportSpecifierLocalTargetSymbol(decl))
			}
		}
		if out[i].Flags&ast.SymbolFlagsAlias == 0 {
			continue
		}
		appendSymbol(safeAliasedSymbolFromSymbol(checker, out[i]))
	}
	return out
}

func safeAliasedSymbolFromSymbol(checker *_jsii.Checker, sym *ast.Symbol) (out *ast.Symbol) {
	defer func() {
		if recover() != nil {
			out = nil
		}
	}()
	if checker == nil || sym == nil || sym.Flags&ast.SymbolFlagsAlias == 0 {
		return nil
	}
	return _jsii.Checker_getAliasedSymbol(checker, sym)
}

func debugTypeAtLocation(checker *_jsii.Checker, node *ast.Node) string {
	if checker == nil || node == nil {
		return ""
	}
	typ := checker.GetTypeAtLocation(node)
	if typ == nil {
		return "type=nil"
	}
	decls := []string{}
	if sym := typ.Symbol(); sym != nil {
		for _, decl := range sym.Declarations {
			if decl == nil {
				continue
			}
			decls = append(decls, fmt.Sprintf("%d:%q", decl.Kind, shimscanner.GetTextOfNode(decl)))
		}
	}
	return fmt.Sprintf("flags=%v symbol=%q decls=%v", typ.Flags(), func() string {
		if typ.Symbol() == nil {
			return ""
		}
		return typ.Symbol().Name
	}(), decls)
}

func debugResolvedEntityName(checker *_jsii.Checker, node *ast.Node, meaning ast.SymbolFlags) string {
	if checker == nil || node == nil {
		return ""
	}
	sym := _jsii.Checker_resolveEntityName(checker, node, meaning, true, false, nil)
	if sym == nil {
		return "nil"
	}
	decls := make([]string, 0, len(sym.Declarations))
	for _, decl := range sym.Declarations {
		if decl == nil {
			continue
		}
		decls = append(decls, fmt.Sprintf("%d:%q", decl.Kind, shimscanner.GetTextOfNode(decl)))
	}
	return fmt.Sprintf("name=%q flags=%v decls=%v", sym.Name, sym.Flags, decls)
}

func debugScopeSymbol(checker *_jsii.Checker, location *ast.Node, name string) *ast.Symbol {
	if checker == nil || location == nil {
		return nil
	}
	for _, sym := range checker.GetSymbolsInScope(location, ast.SymbolFlagsNamespace|ast.SymbolFlagsType) {
		if sym != nil && sym.Name == name {
			return sym
		}
	}
	return nil
}

func debugModuleMember(checker *_jsii.Checker, module *ast.Symbol, name string) string {
	if checker == nil || module == nil {
		return "nil"
	}
	member := checker.TryGetMemberInModuleExports(name, module)
	if member == nil {
		return "nil"
	}
	decls := make([]string, 0, len(member.Declarations))
	for _, decl := range member.Declarations {
		if decl == nil {
			continue
		}
		decls = append(decls, fmt.Sprintf("%d:%q", decl.Kind, shimscanner.GetTextOfNode(decl)))
	}
	return fmt.Sprintf("name=%q flags=%v decls=%v", member.Name, member.Flags, decls)
}

func findImportDeclaration(node *ast.Node) *ast.Node {
	for current := node; current != nil; current = current.Parent {
		if safeAsImportDeclaration(current) != nil {
			return current
		}
	}
	return nil
}

func safeAsImportDeclaration(node *ast.Node) (out any) {
	defer func() {
		if recover() != nil {
			out = nil
		}
	}()
	if node == nil {
		return nil
	}
	return node.AsImportDeclaration()
}
