package helpers

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type pruneJoinerNamespace struct{}

var PruneJoiner = pruneJoinerNamespace{}

type PruneJoiner_ObjectProps struct {
  Input   *shimast.Expression
  Entries []IExpressionEntry
  Object  *nativemetadata.MetadataObjectType
  Emit    *shimprinter.EmitContext
}

type PruneJoiner_ArrayProps struct {
  Input *shimast.Expression
  Arrow *shimast.Expression
  Emit  *shimprinter.EmitContext
}

type PruneJoiner_TupleProps struct {
  Elements []*shimast.ConciseBody
  Rest     *shimast.ConciseBody
  Emit     *shimprinter.EmitContext
}

var pruneJoiner_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (pruneJoinerNamespace) Object(props PruneJoiner_ObjectProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(pruneJoiner_factory, props.Emit)
  regular := []IExpressionEntry{}
  dynamic := []IExpressionEntry{}
  for _, entry := range props.Entries {
    if entry.Key.IsSoleLiteral() {
      regular = append(regular, entry)
    } else {
      dynamic = append(dynamic, entry)
    }
  }

  statements := []*shimast.Node{}
  for _, entry := range regular {
    statements = append(statements, pruneJoiner_statements(entry.Expression, props.Emit)...)
  }
  if len(dynamic) != 0 {
    statements = append(statements, f.NewExpressionStatement(
      pruneJoiner_iterate_dynamic_properties(pruneJoiner_iterate_dynamic_propertiesProps{
        Regular: regular,
        Dynamic: dynamic,
        Input:   props.Input,
        Emit:    props.Emit,
      }),
    ))
  }
  statements = append(statements, pruneJoiner_prune_object_properties(props.Object, props.Emit))
  return f.NewBlock(
    f.NewNodeList(statements),
    true,
  )
}

func (pruneJoinerNamespace) Array(props PruneJoiner_ArrayProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(pruneJoiner_factory, props.Emit)
  return f.NewCallExpression(
    nativefactories.IdentifierFactory.Access(nil, props.Input, "forEach"),
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{props.Arrow}),
    shimast.NodeFlagsNone,
  )
}

func (pruneJoinerNamespace) Tuple(props PruneJoiner_TupleProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(pruneJoiner_factory, props.Emit)
  entire := make([]*shimast.Node, 0, len(props.Elements)+1)
  for _, elem := range props.Elements {
    entire = append(entire, elem)
  }
  if props.Rest != nil {
    entire = append(entire, props.Rest)
  }
  statements := []*shimast.Node{}
  for _, elem := range entire {
    statements = append(statements, pruneJoiner_statements(elem, props.Emit)...)
  }
  return f.NewBlock(
    f.NewNodeList(statements),
    true,
  )
}

func pruneJoiner_statements(node *shimast.Node, emit ...*shimprinter.EmitContext) []*shimast.Node {
  f := nativecontext.EmitFactoryOf(pruneJoiner_factory, emit...)
  if node != nil && node.Kind == shimast.KindBlock {
    return append([]*shimast.Node{}, node.Statements()...)
  }
  return []*shimast.Node{f.NewExpressionStatement(node)}
}

type pruneJoiner_iterate_dynamic_propertiesProps struct {
  Regular []IExpressionEntry
  Dynamic []IExpressionEntry
  Input   *shimast.Expression
  Emit    *shimprinter.EmitContext
}

func pruneJoiner_iterate_dynamic_properties(props pruneJoiner_iterate_dynamic_propertiesProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(pruneJoiner_factory, props.Emit)
  statements := []*shimast.Node{
    f.NewIfStatement(
      f.NewBinaryExpression(
        nil,
        f.NewIdentifier("undefined"),
        nil,
        f.NewToken(shimast.KindEqualsEqualsEqualsToken),
        f.NewIdentifier("value"),
      ),
      f.NewReturnStatement(nil),
      nil,
    ),
  }
  for _, entry := range props.Regular {
    key := entry.Key.GetSoleLiteral()
    statements = append(statements, f.NewIfStatement(
      f.NewBinaryExpression(
        nil,
        f.NewStringLiteral(*key, shimast.TokenFlagsNone),
        nil,
        f.NewToken(shimast.KindEqualsEqualsEqualsToken),
        f.NewIdentifier("key"),
      ),
      f.NewReturnStatement(nil),
      nil,
    ))
  }
  for _, dynamic := range props.Dynamic {
    body := dynamic.Expression
    if body.Kind != shimast.KindBlock {
      body = f.NewBlock(
        f.NewNodeList([]*shimast.Node{
          f.NewExpressionStatement(body),
        }),
        false,
      )
    }
    statements = append(statements, f.NewIfStatement(
      f.NewCallExpression(
        f.NewIdentifier("RegExp(/"+cloneJoiner_metadata_to_pattern(struct {
          top      bool
          metadata *nativemetadata.MetadataSchema
        }{top: true, metadata: dynamic.Key})+"/).test"),
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{
          f.NewIdentifier("key"),
        }),
        shimast.NodeFlagsNone,
      ),
      body,
      nil,
    ))
  }
  return f.NewCallExpression(
    nativefactories.IdentifierFactory.Access(
      nil,
      f.NewCallExpression(
        f.NewIdentifier("Object.entries"),
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{props.Input}),
        shimast.NodeFlagsNone,
      ),
      "forEach",
    ),
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{
      f.NewArrowFunction(
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{
          nativefactories.IdentifierFactory.Parameter(pruneJoiner_binding_pattern(props.Emit), nil, nil, props.Emit),
        }),
        nil,
        nil,
        f.NewToken(shimast.KindEqualsGreaterThanToken),
        f.NewBlock(f.NewNodeList(statements), true),
      ),
    }),
    shimast.NodeFlagsNone,
  )
}

func pruneJoiner_binding_pattern(emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(pruneJoiner_factory, emit...)
  return f.NewBindingPattern(
    shimast.KindArrayBindingPattern,
    f.NewNodeList([]*shimast.Node{
      f.NewBindingElement(nil, nil, f.NewIdentifier("key"), nil),
      f.NewBindingElement(nil, nil, f.NewIdentifier("value"), nil),
    }),
  )
}

func pruneJoiner_prune_object_properties(object *nativemetadata.MetadataObjectType, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(pruneJoiner_factory, emit...)
  input := f.NewIdentifier("input")
  key := f.NewIdentifier("key")
  conditions := []*shimast.Node{}
  for _, prop := range object.Properties {
    name := prop.Key.GetSoleLiteral()
    if name != nil {
      conditions = append(conditions, f.NewBinaryExpression(
        nil,
        f.NewStringLiteral(*name, shimast.TokenFlagsNone),
        nil,
        f.NewToken(shimast.KindEqualsEqualsEqualsToken),
        key,
      ))
    } else {
      conditions = append(conditions, f.NewCallExpression(
        f.NewIdentifier("RegExp(/"+cloneJoiner_metadata_to_pattern(struct {
          top      bool
          metadata *nativemetadata.MetadataSchema
        }{top: true, metadata: prop.Key})+"/).test"),
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{key}),
        shimast.NodeFlagsNone,
      ))
    }
  }
  statements := []*shimast.Node{}
  if len(conditions) != 0 {
    statements = append(statements, f.NewIfStatement(
      pruneJoiner_reduce(conditions, shimast.KindBarBarToken, emit...),
      f.NewContinueStatement(nil),
      nil,
    ))
  }
  statements = append(statements, f.NewExpressionStatement(
    f.NewDeleteExpression(
      f.NewElementAccessExpression(input, nil, key, shimast.NodeFlagsNone),
    ),
  ))
  statement := statements[0]
  if len(statements) != 1 {
    statement = f.NewBlock(f.NewNodeList(statements), true)
  }
  return f.NewForInOrOfStatement(
    shimast.KindForOfStatement,
    nil,
    f.NewVariableDeclarationList(
      f.NewNodeList([]*shimast.Node{
        f.NewVariableDeclaration(key, nil, nil, nil),
      }),
      shimast.NodeFlagsConst,
    ),
    f.NewCallExpression(
      f.NewIdentifier("Object.keys"),
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{input}),
      shimast.NodeFlagsNone,
    ),
    statement,
  )
}

func pruneJoiner_reduce(expressions []*shimast.Node, operator shimast.Kind, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(pruneJoiner_factory, emit...)
  output := expressions[0]
  for _, next := range expressions[1:] {
    output = f.NewBinaryExpression(
      nil,
      output,
      nil,
      f.NewToken(operator),
      next,
    )
  }
  return output
}
