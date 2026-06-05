package iterate

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

func Prune_object_properties(object *nativemetadata.MetadataObjectType, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(prune_object_properties_factory, emit...)
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
        f.NewIdentifier("key"),
      ))
      continue
    }
    conditions = append(conditions, f.NewCallExpression(
      f.NewIdentifier("RegExp(/"+metadata_to_pattern(struct {
        top      bool
        metadata *nativemetadata.MetadataSchema
      }{
        top:      true,
        metadata: prop.Key,
      })+"/).test"),
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{key}),
      shimast.NodeFlagsNone,
    ))
  }

  statements := []*shimast.Node{}
  if len(conditions) != 0 {
    statements = append(statements, f.NewIfStatement(
      prune_object_properties_reduce(conditions, shimast.KindBarBarToken, emit...),
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
    statement = f.NewBlock(
      f.NewNodeList(statements),
      true,
    )
  }

  return f.NewForInOrOfStatement(
    shimast.KindForOfStatement,
    nil,
    f.NewVariableDeclarationList(
      f.NewNodeList([]*shimast.Node{
        f.NewVariableDeclaration(
          f.NewIdentifier("key"),
          nil,
          nil,
          nil,
        ),
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

func prune_object_properties_reduce(expressions []*shimast.Node, operator shimast.Kind, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(prune_object_properties_factory, emit...)
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

var prune_object_properties_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
