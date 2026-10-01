package factories

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
)

type statementFactoryNamespace struct{}

var StatementFactory = statementFactoryNamespace{}

// StatementFactory_MutProps names a mutable variable with an optional type and
// initializer.
//
// @evidence contracts/common.md#principled-implementation A mutable variable declaration needs a name and optionally a type and an initializer, and with neither it is typed any.
// @evidence contracts/common.md#clear-and-simple-design A three-field argument record for Mut.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states the optional parts.
type StatementFactory_MutProps struct {
  Name        string
  Type        *shimast.TypeNode
  Initializer *shimast.Expression
}

// StatementFactory_ConstantProps names a constant with an optional type and its
// value.
//
// @evidence contracts/common.md#principled-implementation A constant declaration needs a name, an optional type and the value.
// @evidence contracts/common.md#clear-and-simple-design A three-field argument record for Constant.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states the fields.
type StatementFactory_ConstantProps struct {
  Name  string
  Type  *shimast.TypeNode
  Value *shimast.Expression
}

// StatementFactory_EntryProps names the two bindings of the `[key, value]` array pattern of an entry declaration.
//
// @evidence contracts/common.md#principled-implementation An entry declaration destructures a `[key, value]` pair, so the two binding names are the whole argument.
// @evidence contracts/common.md#clear-and-simple-design A two-field argument record for Entry.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states the two bindings.
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
