package ttsc

import (
	"encoding/json"
	"os"
	"path/filepath"
	"strings"

	"github.com/microsoft/typescript-go/shim/ast"

	"github.com/samchon/typia/packages/core/native/metadata"
)

func schemaIsAnyOnly(schema *metadata.Schema) bool {
	return schema != nil && schema.Any && schema.Size() == 1 && schema.Bucket() == 1
}

func resolveQualifiedImportedTypeNode(
	sourceFiles []*ast.SourceFile,
	typeNode *ast.Node,
) *ast.Node {
	if typeNode == nil || typeNode.Kind != ast.KindTypeReference {
		return nil
	}
	ref := typeNode.AsTypeReferenceNode()
	if ref == nil || ref.TypeName == nil || ref.TypeName.Kind != ast.KindQualifiedName {
		return nil
	}
	segments := qualifiedNameSegments(ref.TypeName.AsNode())
	if len(segments) < 2 {
		return nil
	}
	source := ast.GetSourceFileOfNode(typeNode)
	if source == nil {
		return nil
	}
	moduleSpec, exportRoot, remaining, ok := resolveImportedBinding(source, segments)
	if !ok {
		return nil
	}
	candidates := resolveModuleSourceFiles(sourceFiles, source.FileName(), moduleSpec)
	if len(candidates) == 0 {
		return nil
	}
	current := findNamedDeclarationInFiles(candidates, exportRoot)
	if current == nil {
		return nil
	}
	for _, name := range remaining {
		current = resolveNestedNamedDeclaration(current, name)
		if current == nil {
			return nil
		}
	}
	return declarationTypeNode(current)
}

func qualifiedNameSegments(node *ast.Node) []string {
	if node == nil {
		return nil
	}
	switch node.Kind {
	case ast.KindIdentifier:
		if ident := node.AsIdentifier(); ident != nil && ident.Text != "" {
			return []string{ident.Text}
		}
	case ast.KindQualifiedName:
		q := node.AsQualifiedName()
		if q != nil {
			return append(qualifiedNameSegments(q.Left), qualifiedNameSegments(q.Right)...)
		}
	}
	return nil
}

func resolveImportedBinding(
	source *ast.SourceFile,
	segments []string,
) (moduleSpec string, exportRoot string, remaining []string, ok bool) {
	if source == nil || len(segments) < 2 {
		return "", "", nil, false
	}
	localRoot := segments[0]
	source.ForEachChild(func(child *ast.Node) bool {
		if child == nil || child.Kind != ast.KindImportDeclaration {
			return false
		}
		decl := child.AsImportDeclaration()
		if decl == nil || decl.ImportClause == nil || decl.ModuleSpecifier == nil {
			return false
		}
		specifier, success := stringLiteralText(decl.ModuleSpecifier)
		if !success {
			return false
		}
		if clauseNode := decl.ImportClause; clauseNode != nil {
			clause := clauseNode.AsImportClause()
			if clause == nil || clause.NamedBindings == nil {
				return false
			}
			switch clause.NamedBindings.Kind {
			case ast.KindNamedImports:
				named := clause.NamedBindings.AsNamedImports()
				if named == nil || named.Elements == nil {
					return false
				}
				for _, elem := range named.Elements.Nodes {
					if elem == nil || elem.Kind != ast.KindImportSpecifier {
						continue
					}
					spec := elem.AsImportSpecifier()
					if spec == nil || spec.Name() == nil {
						continue
					}
					if declarationNameText(spec.Name()) != localRoot {
						continue
					}
					name := localRoot
					if spec.PropertyName != nil {
						name = declarationNameText(spec.PropertyName)
					}
					moduleSpec, exportRoot, remaining, ok = specifier, name, segments[1:], true
					return true
				}
			case ast.KindNamespaceImport:
				ns := clause.NamedBindings.AsNamespaceImport()
				if ns == nil || ns.Name() == nil || declarationNameText(ns.Name()) != localRoot || len(segments) < 3 {
					return false
				}
				moduleSpec, exportRoot, remaining, ok = specifier, segments[1], segments[2:], true
				return true
			}
		}
		return false
	})
	return
}

func resolveModuleSourceFiles(
	sourceFiles []*ast.SourceFile,
	importerPath string,
	moduleSpec string,
) []*ast.SourceFile {
	if strings.HasPrefix(moduleSpec, ".") || strings.HasPrefix(moduleSpec, "/") {
		return resolveRelativeModuleSourceFiles(sourceFiles, importerPath, moduleSpec)
	}
	return resolvePackageModuleSourceFiles(sourceFiles, moduleSpec)
}

func resolveRelativeModuleSourceFiles(
	sourceFiles []*ast.SourceFile,
	importerPath string,
	moduleSpec string,
) []*ast.SourceFile {
	base := moduleSpec
	if !filepath.IsAbs(base) {
		base = filepath.Join(filepath.Dir(importerPath), moduleSpec)
	}
	base = filepath.Clean(base)
	want := map[string]struct{}{}
	for _, candidate := range []string{
		base,
		base + ".ts",
		base + ".tsx",
		base + ".d.ts",
		filepath.Join(base, "index.ts"),
		filepath.Join(base, "index.tsx"),
		filepath.Join(base, "index.d.ts"),
	} {
		want[filepath.ToSlash(filepath.Clean(candidate))] = struct{}{}
	}
	out := []*ast.SourceFile{}
	for _, file := range sourceFiles {
		if file == nil {
			continue
		}
		if _, exists := want[filepath.ToSlash(filepath.Clean(file.FileName()))]; exists {
			out = append(out, file)
		}
	}
	return out
}

func resolvePackageModuleSourceFiles(
	sourceFiles []*ast.SourceFile,
	moduleSpec string,
) []*ast.SourceFile {
	cache := map[string]string{}
	out := []*ast.SourceFile{}
	for _, file := range sourceFiles {
		if file == nil {
			continue
		}
		if nearestPackageName(cache, file.FileName()) == moduleSpec {
			out = append(out, file)
		}
	}
	return out
}

func nearestPackageName(cache map[string]string, fileName string) string {
	dir := filepath.Dir(fileName)
	if cached, ok := cache[dir]; ok {
		return cached
	}
	original := dir
	for {
		packageJSON := filepath.Join(dir, "package.json")
		if data, err := os.ReadFile(packageJSON); err == nil {
			var parsed struct {
				Name string `json:"name"`
			}
			if json.Unmarshal(data, &parsed) == nil && parsed.Name != "" {
				cache[original] = parsed.Name
				return parsed.Name
			}
		}
		parent := filepath.Dir(dir)
		if parent == dir {
			break
		}
		dir = parent
	}
	cache[original] = ""
	return ""
}

func findNamedDeclarationInFiles(files []*ast.SourceFile, name string) *ast.Node {
	for _, declaration := range []func([]*ast.SourceFile, string) *ast.Node{
		findNamedDeclarationInPreferredSources,
		findNamedDeclarationInAnySources,
	} {
		if node := declaration(files, name); node != nil {
			return node
		}
	}
	return nil
}

func findNamedDeclarationInPreferredSources(files []*ast.SourceFile, name string) *ast.Node {
	for _, file := range files {
		if file == nil || strings.HasSuffix(file.FileName(), ".d.ts") {
			continue
		}
		if node := findNamedDeclarationInContainer(file.AsNode(), name); node != nil {
			return node
		}
	}
	return nil
}

func findNamedDeclarationInAnySources(files []*ast.SourceFile, name string) *ast.Node {
	for _, file := range files {
		if file == nil {
			continue
		}
		if node := findNamedDeclarationInContainer(file.AsNode(), name); node != nil {
			return node
		}
	}
	return nil
}

func findNamedDeclarationInContainer(container *ast.Node, name string) *ast.Node {
	if container == nil || name == "" {
		return nil
	}
	var found *ast.Node
	switch container.Kind {
	case ast.KindModuleDeclaration:
		decl := container.AsModuleDeclaration()
		if decl == nil || decl.Body == nil {
			return nil
		}
		return findNamedDeclarationInContainer(decl.Body, name)
	case ast.KindModuleBlock:
		block := container.AsModuleBlock()
		if block == nil || block.Statements == nil {
			return nil
		}
		for _, stmt := range block.Statements.Nodes {
			if declarationNameTextFromNode(stmt) == name {
				return stmt
			}
		}
	default:
		container.ForEachChild(func(child *ast.Node) bool {
			if declarationNameTextFromNode(child) == name {
				found = child
				return true
			}
			return false
		})
	}
	return found
}

func resolveNestedNamedDeclaration(current *ast.Node, name string) *ast.Node {
	if current == nil {
		return nil
	}
	switch current.Kind {
	case ast.KindModuleDeclaration:
		return findNamedDeclarationInContainer(current, name)
	case ast.KindTypeAliasDeclaration, ast.KindInterfaceDeclaration:
		container := current.Parent
		if container == nil {
			return nil
		}
		merged := findModuleDeclarationInContainer(container, declarationNameTextFromNode(current))
		if merged == nil {
			return nil
		}
		return findNamedDeclarationInContainer(merged, name)
	default:
		return nil
	}
}

func findModuleDeclarationInContainer(container *ast.Node, name string) *ast.Node {
	if container == nil || name == "" {
		return nil
	}
	var found *ast.Node
	visit := func(node *ast.Node) {
		if node != nil && node.Kind == ast.KindModuleDeclaration && declarationNameTextFromNode(node) == name {
			found = node
		}
	}
	switch container.Kind {
	case ast.KindModuleDeclaration:
		decl := container.AsModuleDeclaration()
		if decl != nil && decl.Body != nil {
			container = decl.Body
		}
	}
	if container.Kind == ast.KindModuleBlock {
		block := container.AsModuleBlock()
		if block == nil || block.Statements == nil {
			return nil
		}
		for _, stmt := range block.Statements.Nodes {
			visit(stmt)
			if found != nil {
				return found
			}
		}
		return nil
	}
	container.ForEachChild(func(child *ast.Node) bool {
		visit(child)
		return found != nil
	})
	return found
}

func declarationTypeNode(node *ast.Node) *ast.Node {
	if node == nil {
		return nil
	}
	switch node.Kind {
	case ast.KindTypeAliasDeclaration:
		decl := node.AsTypeAliasDeclaration()
		if decl != nil {
			return decl.Type
		}
	}
	return nil
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

func stringLiteralText(node *ast.Node) (string, bool) {
	if node == nil || node.Kind != ast.KindStringLiteral {
		return "", false
	}
	literal := node.AsStringLiteral()
	if literal == nil {
		return "", false
	}
	return literal.Text, true
}
