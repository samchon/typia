package transform

import (
	"path/filepath"
	"strings"

	shimast "github.com/microsoft/typescript-go/shim/ast"
)

type importTransformerNamespace struct{}

var ImportTransformer = importTransformerNamespace{}

type ImportTransformer_TransformProps struct {
	From string
	To   string
}

type ImportTransformer_Type func(file *shimast.SourceFile) *shimast.SourceFile

type importTransformer_transformFileProps struct {
	Top     string
	To      string
	Context any
	File    *shimast.SourceFile
}

type importTransformer_transformNodeProps struct {
	Top  string
	From string
	To   string
	Node *shimast.Node
}

type importTransformer_importMetadata struct {
	Declaration *shimast.ImportDeclaration
	Default     bool
}

var importTransformer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (importTransformerNamespace) Transform(props ImportTransformer_TransformProps) func(context any) ImportTransformer_Type {
	return func(context any) ImportTransformer_Type {
		return func(file *shimast.SourceFile) *shimast.SourceFile {
			return importTransformer_transform_file(importTransformer_transformFileProps{
				Top:     props.From,
				To:      props.To,
				Context: context,
				File:    file,
			})
		}
	}
}

func importTransformer_transform_file(props importTransformer_transformFileProps) *shimast.SourceFile {
	if props.File == nil || props.File.IsDeclarationFile {
		return props.File
	}
	from := get_directory_path(filepath.Clean(props.File.FileName()))
	to := strings.Replace(from, filepath.Clean(props.Top), filepath.Clean(props.To), 1)

	var visitor *shimast.NodeVisitor
	visitor = shimast.NewNodeVisitor(func(node *shimast.Node) *shimast.Node {
		if node == nil {
			return nil
		}
		next := importTransformer_transform_node(importTransformer_transformNodeProps{
			Top:  props.Top,
			From: from,
			To:   to,
			Node: node,
		})
		return visitor.VisitEachChild(next)
	}, importTransformer_factory, shimast.NodeVisitorHooks{})

	transformed := visitor.VisitNode(props.File.AsNode())
	if transformed == nil {
		return props.File
	}
	return removeUnusedTypiaImports(transformed.AsSourceFile())
}

func importTransformer_transform_node(props importTransformer_transformNodeProps) *shimast.Node {
	if props.Node == nil || props.Node.Kind != shimast.KindImportDeclaration {
		return props.Node
	}
	decl := props.Node.AsImportDeclaration()
	if decl == nil || decl.ModuleSpecifier == nil || decl.ModuleSpecifier.Kind != shimast.KindStringLiteral {
		return props.Node
	}
	text := decl.ModuleSpecifier.AsStringLiteral().Text
	if text == "" || text[0] != '.' {
		return props.Node
	}

	location := filepath.Clean(filepath.Join(props.From, text))
	top := filepath.Clean(props.Top)
	if strings.HasPrefix(location, top) {
		return props.Node
	}

	replaced, err := filepath.Rel(props.To, location)
	if err != nil {
		return props.Node
	}
	replaced = filepath.ToSlash(replaced)
	if strings.HasPrefix(replaced, ".") == false {
		replaced = "./" + replaced
	}
	return importTransformer_factory.UpdateImportDeclaration(
		decl,
		decl.Modifiers(),
		decl.ImportClause,
		importTransformer_factory.NewStringLiteral(replaced, shimast.TokenFlagsNone),
		decl.Attributes,
	)
}

func get_directory_path(file string) string {
	return filepath.Clean(filepath.Dir(file))
}

func removeUnusedTypiaImports(file *shimast.SourceFile) *shimast.SourceFile {
	if file == nil || file.Statements == nil {
		return file
	}
	imports := map[string]importTransformer_importMetadata{}
	for _, stmt := range file.Statements.Nodes {
		decl := importTransformer_typiaImport(stmt)
		if decl == nil || decl.ImportClause == nil {
			continue
		}
		clause := decl.ImportClause.AsImportClause()
		if clause == nil {
			continue
		}
		if name := importTransformer_identifierText(clause.Name()); name != "" {
			imports[name] = importTransformer_importMetadata{Declaration: decl, Default: true}
		}
		if clause.NamedBindings != nil && clause.NamedBindings.Kind == shimast.KindNamedImports {
			named := clause.NamedBindings.AsNamedImports()
			if named != nil && named.Elements != nil {
				for _, elem := range named.Elements.Nodes {
					if elem == nil {
						continue
					}
					spec := elem.AsImportSpecifier()
					if spec == nil {
						continue
					}
					if name := importTransformer_identifierText(spec.Name()); name != "" {
						imports[name] = importTransformer_importMetadata{Declaration: decl, Default: false}
					}
				}
			}
		}
	}
	if len(imports) == 0 {
		return file
	}

	nonTransformableUsage := map[string]bool{}
	var checkUsage func(node *shimast.Node)
	checkUsage = func(node *shimast.Node) {
		if node == nil {
			return
		}
		if node.Kind == shimast.KindIdentifier {
			identifier := node.AsIdentifier().Text
			if _, ok := imports[identifier]; ok {
				parent := node.Parent
				if parent != nil && parent.Kind == shimast.KindPropertyAccessExpression {
					access := parent.AsPropertyAccessExpression()
					if access != nil && access.Expression == node {
						if importTransformer_isLikelyTransformableCall(parent) == false {
							nonTransformableUsage[identifier] = true
						}
					}
				} else {
					nonTransformableUsage[identifier] = true
				}
			}
		}
		node.ForEachChild(func(child *shimast.Node) bool {
			checkUsage(child)
			return false
		})
	}
	for _, stmt := range file.Statements.Nodes {
		if importTransformer_typiaImport(stmt) == nil {
			checkUsage(stmt)
		}
	}

	nodes := make([]*shimast.Node, 0, len(file.Statements.Nodes))
	for _, stmt := range file.Statements.Nodes {
		decl := importTransformer_typiaImport(stmt)
		if decl == nil || decl.ImportClause == nil {
			nodes = append(nodes, stmt)
			continue
		}
		clause := decl.ImportClause.AsImportClause()
		if clause == nil {
			nodes = append(nodes, stmt)
			continue
		}
		name := clause.Name()
		if importTransformer_identifierText(name) != "" && nonTransformableUsage[importTransformer_identifierText(name)] == false {
			name = nil
		}
		namedBindings := clause.NamedBindings
		if name == nil && namedBindings == nil {
			continue
		}
		nextImportClause := importTransformer_factory.NewImportClause(
			clause.PhaseModifier,
			name,
			namedBindings,
		).AsImportClause()
		nodes = append(nodes, importTransformer_factory.UpdateImportDeclaration(
			decl,
			decl.Modifiers(),
			nextImportClause.AsNode(),
			decl.ModuleSpecifier,
			decl.Attributes,
		))
	}
	return importTransformer_factory.UpdateSourceFile(
		file,
		importTransformer_factory.NewNodeList(nodes),
		file.EndOfFileToken,
	).AsSourceFile()
}

func importTransformer_typiaImport(stmt *shimast.Node) *shimast.ImportDeclaration {
	if stmt == nil || stmt.Kind != shimast.KindImportDeclaration {
		return nil
	}
	decl := stmt.AsImportDeclaration()
	if decl == nil || decl.ModuleSpecifier == nil || decl.ModuleSpecifier.Kind != shimast.KindStringLiteral {
		return nil
	}
	if decl.ModuleSpecifier.AsStringLiteral().Text != "typia" {
		return nil
	}
	return decl
}

func importTransformer_isLikelyTransformableCall(node *shimast.Node) bool {
	current := node
	for current != nil && current.Kind == shimast.KindPropertyAccessExpression {
		current = current.Parent
	}
	if current == nil || current.Kind != shimast.KindCallExpression {
		return false
	}
	call := current.AsCallExpression()
	if call == nil {
		return false
	}
	if call.Expression == node {
		return true
	}
	return call.Expression != nil &&
		call.Expression.Kind == shimast.KindPropertyAccessExpression &&
		importTransformer_isTypiaPropertyChain(call.Expression)
}

func importTransformer_isTypiaPropertyChain(node *shimast.Node) bool {
	current := node
	for current != nil && current.Kind == shimast.KindPropertyAccessExpression {
		current = current.AsPropertyAccessExpression().Expression
	}
	return importTransformer_identifierText(current) == "typia"
}

func importTransformer_identifierText(node *shimast.Node) string {
	if node == nil || node.Kind != shimast.KindIdentifier {
		return ""
	}
	return node.AsIdentifier().Text
}
