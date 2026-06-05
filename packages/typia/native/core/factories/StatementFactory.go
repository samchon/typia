package factories

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
)

type statementFactoryNamespace struct{}

var StatementFactory = statementFactoryNamespace{}

type StatementFactory_MutProps struct {
  Name        string
  Type        *shimast.TypeNode
  Initializer *shimast.Expression
}

type StatementFactory_ConstantProps struct {
  Name  string
  Type  *shimast.TypeNode
  Value *shimast.Expression
}

type StatementFactory_EntryProps struct {
  Key   string
  Value string
}

var statementFactory_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (statementFactoryNamespace) Mut(props StatementFactory_MutProps, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(statementFactory_factory, emit...)
  typeNode := props.Type
  if typeNode == nil && props.Initializer == nil {
    typeNode = TypeFactory.Keyword("any", emit...)
  }
  declaration := f.NewVariableDeclaration(
    f.NewIdentifier(props.Name),
    nil,
    typeNode,
    props.Initializer,
  )
  return f.NewVariableStatement(
    nil,
    f.NewVariableDeclarationList(
      f.NewNodeList([]*shimast.Node{declaration}),
      shimast.NodeFlagsLet,
    ),
  )
}

func (statementFactoryNamespace) Constant(props StatementFactory_ConstantProps, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(statementFactory_factory, emit...)
  typeNode := props.Type
  if typeNode == nil && props.Value == nil {
    typeNode = TypeFactory.Keyword("any", emit...)
  }
  declaration := f.NewVariableDeclaration(
    f.NewIdentifier(props.Name),
    nil,
    typeNode,
    props.Value,
  )
  return f.NewVariableStatement(
    nil,
    f.NewVariableDeclarationList(
      f.NewNodeList([]*shimast.Node{declaration}),
      shimast.NodeFlagsConst,
    ),
  )
}

func (statementFactoryNamespace) Entry(props StatementFactory_EntryProps, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(statementFactory_factory, emit...)
  key := f.NewBindingElement(
    nil,
    nil,
    f.NewIdentifier(props.Key),
    nil,
  )
  value := f.NewBindingElement(
    nil,
    nil,
    f.NewIdentifier(props.Value),
    nil,
  )
  pattern := f.NewBindingPattern(
    shimast.KindArrayBindingPattern,
    f.NewNodeList([]*shimast.Node{key, value}),
  )
  declaration := f.NewVariableDeclaration(pattern, nil, nil, nil)
  return f.NewVariableDeclarationList(
    f.NewNodeList([]*shimast.Node{declaration}),
    shimast.NodeFlagsConst,
  )
}

func (statementFactoryNamespace) Transpile(script string, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(statementFactory_factory, emit...)
  return f.NewExpressionStatement(
    f.NewIdentifier(script),
  )
}

func (statementFactoryNamespace) Block(expression *shimast.Expression, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(statementFactory_factory, emit...)
  return f.NewBlock(
    f.NewNodeList([]*shimast.Node{
      f.NewExpressionStatement(expression),
    }),
    true,
  )
}
