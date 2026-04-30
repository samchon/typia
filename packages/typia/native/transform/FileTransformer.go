package transform

import (
	"sync"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	shimchecker "github.com/microsoft/typescript-go/shim/checker"
	shimcore "github.com/microsoft/typescript-go/shim/core"
	"github.com/samchon/ttsc/packages/ttsc/driver"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
)

type fileTransformerNamespace struct{}

var FileTransformer = fileTransformerNamespace{}

type FileTransformer_IEnvironments struct {
	Program         any
	CompilerOptions any
	Checker         any
	Printer         any
	Options         nativecontext.ITransformOptions
	Extras          nativecontext.ITypiaContext_Extras
}

type FileTransformer_Type func(file *shimast.SourceFile) *shimast.SourceFile

var fileTransformer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
var fileTransformer_jsDocParsingMode sync.Map

func (fileTransformerNamespace) Transform(environments FileTransformer_IEnvironments) func(transformer any) FileTransformer_Type {
	return func(transformer any) FileTransformer_Type {
		return func(file *shimast.SourceFile) *shimast.SourceFile {
			if file == nil || file.IsDeclarationFile {
				return file
			}
			importer := nativeprogrammers.NewImportProgrammer(nativeprogrammers.ImportProgrammer_IOptions{
				InternalPrefix: "typia_transform_",
				Runtime:        environments.Options.Runtime,
			})
			context := nativecontext.ITypiaContext{
				Program:         fileTransformer_program(environments.Program),
				CompilerOptions: fileTransformer_compilerOptions(environments.CompilerOptions),
				Checker:         fileTransformer_checker(environments.Checker),
				Printer:         environments.Printer,
				Options:         environments.Options,
				Transformer:     transformer,
				Importer:        importer,
				Extras:          environments.Extras,
			}
			fileTransformer_checkJsDocParsingMode(context, file)
			visited := fileTransformer_iterate_file(context, file)
			return fileTransformer_inject_imports(visited, importer.ToStatements())
		}
	}
}

func fileTransformer_iterate_file(context nativecontext.ITypiaContext, file *shimast.SourceFile) *shimast.SourceFile {
	var visitor *shimast.NodeVisitor
	visitor = shimast.NewNodeVisitor(func(node *shimast.Node) *shimast.Node {
		if node == nil {
			return nil
		}
		next := fileTransformer_try_transform_node(FileTransformer_TryTransformNodeProps{
			Context: context,
			Node:    node,
		})
		if next == nil {
			next = node
		}
		return visitor.VisitEachChild(next)
	}, fileTransformer_factory, shimast.NodeVisitorHooks{})
	output := visitor.VisitNode(file.AsNode())
	if output == nil {
		return file
	}
	return output.AsSourceFile()
}

type FileTransformer_TryTransformNodeProps struct {
	Context nativecontext.ITypiaContext
	Node    *shimast.Node
}

func fileTransformer_try_transform_node(props FileTransformer_TryTransformNodeProps) (output *shimast.Node) {
	defer func() {
		if exp := recover(); exp != nil {
			if _, ok := exp.(*TransformerError); ok {
				fileTransformer_addDiagnostic(props)
				output = nil
				return
			}
			panic(exp)
		}
	}()
	return NodeTransformer.Transform(NodeTransformer_TransformProps{
		Context: props.Context,
		Node:    props.Node,
	})
}

func fileTransformer_addDiagnostic(props FileTransformer_TryTransformNodeProps) {
	if props.Context.Extras.AddDiagnostic == nil {
		return
	}
	props.Context.Extras.AddDiagnostic(&shimast.Diagnostic{})
}

func fileTransformer_inject_imports(file *shimast.SourceFile, imports []*shimast.Node) *shimast.SourceFile {
	if file == nil || len(imports) == 0 {
		return file
	}
	index := fileTransformer_find_import_injection_index(file)
	nodes := make([]*shimast.Node, 0, len(file.Statements.Nodes)+len(imports))
	nodes = append(nodes, file.Statements.Nodes[:index]...)
	nodes = append(nodes, imports...)
	nodes = append(nodes, file.Statements.Nodes[index:]...)
	return fileTransformer_factory.UpdateSourceFile(
		file,
		fileTransformer_factory.NewNodeList(nodes),
		file.EndOfFileToken,
	).AsSourceFile()
}

func fileTransformer_find_import_injection_index(file *shimast.SourceFile) int {
	i := 0
	for ; i < len(file.Statements.Nodes); i++ {
		stmt := file.Statements.Nodes[i]
		if stmt == nil || stmt.Kind != shimast.KindExpressionStatement {
			break
		}
		expression := stmt.AsExpressionStatement().Expression
		if expression == nil || expression.Kind != shimast.KindStringLiteral {
			break
		}
		if text := expression.AsStringLiteral().Text; len(text) < 4 || text[:4] != "use " {
			break
		}
	}
	return i
}

func fileTransformer_checkJsDocParsingMode(context nativecontext.ITypiaContext, file *shimast.SourceFile) {
	if file == nil || context.Extras.AddDiagnostic == nil {
		return
	}
	if _, loaded := fileTransformer_jsDocParsingMode.LoadOrStore(file.FileName(), struct{}{}); loaded {
		return
	}
}

func fileTransformer_program(value any) *driver.Program {
	if cast, ok := value.(*driver.Program); ok {
		return cast
	}
	return nil
}

func fileTransformer_compilerOptions(value any) *shimcore.CompilerOptions {
	if cast, ok := value.(*shimcore.CompilerOptions); ok {
		return cast
	}
	return nil
}

func fileTransformer_checker(value any) *shimchecker.Checker {
	if cast, ok := value.(*shimchecker.Checker); ok {
		return cast
	}
	return nil
}
