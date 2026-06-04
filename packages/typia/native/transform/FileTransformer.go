package transform

import (
  "sync"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  shimcore "github.com/microsoft/typescript-go/shim/core"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  "github.com/samchon/ttsc/packages/ttsc/driver"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
  nativeprinter "github.com/samchon/typia/packages/typia/native/internal/printer"
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
  // EmitContext, when set, puts the importer into AST-integration mode so the
  // emitted file carries namespace imports that tsgo's module-transform aliases,
  // instead of bare identifiers meant for the legacy text-splice path.
  EmitContext *shimprinter.EmitContext
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
      if environments.EmitContext != nil {
        importer.SetEmitContext(environments.EmitContext)
      }
      context := nativecontext.ITypiaContext{
        Program:         fileTransformer_program(environments.Program),
        CompilerOptions: fileTransformer_compilerOptions(environments.CompilerOptions),
        Checker:         fileTransformer_checker(environments.Checker),
        Options:         environments.Options,
        Emit:            environments.EmitContext,
        Importer:        importer,
        Extras:          environments.Extras,
      }
      _ = transformer
      fileTransformer_checkJsDocParsingMode(context, file)
      visited := fileTransformer_iterate_file(context, file)
      result := fileTransformer_inject_imports(visited, importer.ToStatements())
      if environments.EmitContext != nil {
        // AST-integration emit prints these nodes through tsgo's printer, which
        // dereferences operator tokens typia leaves nil; the legacy text path
        // normalized them before printing, so do the same here.
        nativeprinter.NormalizeSyntheticTokens(result.AsNode())
      }
      return result
    }
  }
}

func fileTransformer_iterate_file(context nativecontext.ITypiaContext, file *shimast.SourceFile) *shimast.SourceFile {
  var visitor *shimast.NodeVisitor
  visit := func(node *shimast.Node) *shimast.Node {
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
  }
  // emit EmitContext로 순회한다. 그래야 변환된 자식(예: typia 호출을 감싼
  // namespace)을 담으려고 재생성되는 모든 조상 노드에 parse-tree 노드로의
  // original 링크가 걸린다. tsgo emit resolver가 그 링크를 따라 binder 심볼을
  // 되찾으므로 export된 namespace가 exports.X = X = {} 로 lowering된다. 일반
  // factory는 링크를 잃어 모듈 export가 조용히 사라진다.
  if context.Emit != nil {
    visitor = context.Emit.NewNodeVisitor(visit)
  } else {
    visitor = shimast.NewNodeVisitor(visit, fileTransformer_factory, shimast.NodeVisitorHooks{})
  }
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
      // typia raises a TransformerError to report a user-facing transform error
      // (e.g. `typia.llm.schema<Record<...>>` whose argument is not a literal
      // object). core/programmers panic nativecontext.TransformerError while
      // transform/features panic the transform-layer alias; both must turn into
      // a diagnostic, not a repanic that kills the whole emit (the legacy text
      // adapter swallowed every panic, so the node path must at least handle
      // both error types).
      switch exp.(type) {
      case *TransformerError, *nativecontext.TransformerError:
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
