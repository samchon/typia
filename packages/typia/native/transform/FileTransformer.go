package transform

import (
  "sync"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  shimcore "github.com/microsoft/typescript-go/shim/core"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  "github.com/samchon/ttsc/packages/ttsc/driver"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
)

type fileTransformerNamespace struct{}

var FileTransformer = fileTransformerNamespace{}

// FileTransformer_IEnvironments is what the file transformer needs from the host:
// the program, compiler options and checker, typia's options and extras, and the
// emit context that selects the emit mode. The first three are untyped so the
// host can pass whatever it holds; a value of another type is treated as absent.
//
// @evidence contracts/common.md#principled-implementation The host hands over its program, options and checker as untyped values and the transform narrows them with checked conversions, so a value of another type yields a nil and not a panic; the optional emit context selects the emit mode that the field comment explains.
// @evidence contracts/common.md#clear-and-simple-design Six fields read once by Transform.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states the untyped fields and the absent-value rule, and the field comment explains the emit context.
type FileTransformer_IEnvironments struct {
  Program         any
  CompilerOptions any
  Checker         any
  Options         nativecontext.ITransformOptions
  Extras          nativecontext.ITypiaContext_Extras
  // EmitContext, when set, puts the importer into AST-integration mode so the
  // emitted file carries namespace imports that tsgo's module-transform aliases,
  // instead of bare identifiers meant for the legacy text-splice path.
  EmitContext *shimprinter.EmitContext
}

// FileTransformer_Type rewrites one source file and returns the rewritten file.
//
// @evidence contracts/common.md#principled-implementation A per-file transformer maps a source file to its rewritten source file.
// @evidence contracts/common.md#clear-and-simple-design One function type.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
// @evidence contracts/common.md#meaningful-documentation The doc states the mapping.
type FileTransformer_Type func(file *shimast.SourceFile) *shimast.SourceFile

var fileTransformer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

// Transform builds the per-file transformer of a host. Every file gets its own importer, a TransformerError raised while a node is
// transformed becomes a diagnostic and leaves the node unchanged, and the
// importer's statements are inserted after the leading directive prologue.
func (fileTransformerNamespace) Transform(environments FileTransformer_IEnvironments) FileTransformer_Type {
  shared := environments.Extras.Shared
  if shared == nil {
    shared = &sync.Map{}
  }
  return func(file *shimast.SourceFile) *shimast.SourceFile {
    if file == nil || file.IsDeclarationFile {
      return file
    }
    importer := nativecontext.NewImportProgrammer(nativecontext.ImportProgrammer_IOptions{
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
      Shared:          shared,
    }
    visited := fileTransformer_iterate_file(context, file)
    result := fileTransformer_inject_imports(visited, importer.ToStatements(), environments.EmitContext)
    return result
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
      File:    file,
      Node:    node,
    })
    if next == nil {
      next = node
    }
    return visitor.VisitEachChild(next)
  }
  // Traverse with the emit context when available. Recreated ancestor nodes then
  // retain original parse-tree links, which lets tsgo's emit resolver recover
  // binder symbols and lower exported namespaces correctly. The standalone
  // factory loses those links, so module exports can disappear silently.
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

// FileTransformer_TryTransformNodeProps is the context, the file and the node that
// is about to be transformed.
//
// @evidence contracts/common.md#principled-implementation Transforming one node needs the context, the file that supplies the diagnostic location and the node.
// @evidence contracts/common.md#clear-and-simple-design Three fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states the three parts.
type FileTransformer_TryTransformNodeProps struct {
  Context nativecontext.ITypiaContext
  File    *shimast.SourceFile
  Node    *shimast.Node
}

func fileTransformer_try_transform_node(props FileTransformer_TryTransformNodeProps) (output *shimast.Node) {
  defer func() {
    if exp := recover(); exp != nil {
      // typia raises a TransformerError to report a user-facing transform error
      // (e.g. `typia.llm.schema<Record<...>>` whose argument is not a literal
      // object). The programmers and the transformers raise the same type, and it
      // must turn into a diagnostic, not a repanic that kills the whole emit.
      switch err := exp.(type) {
      case *nativecontext.TransformerError:
        fileTransformer_addDiagnostic(props, err.Code, err.Message)
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

func fileTransformer_addDiagnostic(props FileTransformer_TryTransformNodeProps, code string, message string) {
  if props.Context.Extras.AddDiagnostic == nil {
    return
  }
  text := "typia transform error"
  if message != "" {
    text += ": " + message
  }
  diag := &nativecontext.ITypiaDiagnostic{
    File:    props.File,
    Code:    code,
    Message: text,
  }
  if props.Node != nil {
    if pos := props.Node.Pos(); pos >= 0 {
      diag.Start = &pos
      if end := props.Node.End(); end >= pos {
        length := end - pos
        diag.Length = &length
      }
    }
  }
  props.Context.Extras.AddDiagnostic(diag)
}

func fileTransformer_inject_imports(file *shimast.SourceFile, imports []*shimast.Node, emit ...*shimprinter.EmitContext) *shimast.SourceFile {
  if file == nil || len(imports) == 0 {
    return file
  }
  f := nativecontext.EmitFactoryOf(fileTransformer_factory, emit...)
  index := fileTransformer_find_import_injection_index(file)
  nodes := make([]*shimast.Node, 0, len(file.Statements.Nodes)+len(imports))
  nodes = append(nodes, file.Statements.Nodes[:index]...)
  nodes = append(nodes, imports...)
  nodes = append(nodes, file.Statements.Nodes[index:]...)
  return f.UpdateSourceFile(
    file,
    f.NewNodeList(nodes),
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
