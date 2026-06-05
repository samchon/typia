package iterate

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

func Stringify_dynamic_properties(dynamic []nativehelpers.IExpressionEntry, regular []string, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(stringify_dynamic_properties_factory, emit...)
  statements := []*shimast.Node{
    f.NewIfStatement(
      f.NewBinaryExpression(
        nil,
        f.NewIdentifier("undefined"),
        nil,
        f.NewToken(shimast.KindEqualsEqualsEqualsToken),
        f.NewIdentifier("value"),
      ),
      f.NewReturnStatement(
        f.NewStringLiteral("", shimast.TokenFlagsNone),
      ),
      nil,
    ),
  }

  output := func() *shimast.Node {
    mapped := f.NewCallExpression(
      nativefactories.IdentifierFactory.Access(
        nil,
        f.NewCallExpression(
          f.NewIdentifier("Object.entries"),
          nil,
          nil,
          f.NewNodeList([]*shimast.Node{
            f.NewIdentifier("input"),
          }),
          shimast.NodeFlagsNone,
        ),
        "map",
      ),
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{
        f.NewArrowFunction(
          nil,
          nil,
          f.NewNodeList([]*shimast.Node{
            nativefactories.IdentifierFactory.Parameter(
              stringify_dynamic_properties_binding_pattern(emit...),
              f.NewTypeReferenceNode(
                f.NewIdentifier("[string, any]"),
                nil,
              ),
              nil,
            ),
          }),
          nil,
          nil,
          f.NewToken(shimast.KindEqualsGreaterThanToken),
          f.NewBlock(
            f.NewNodeList(statements),
            false,
          ),
        ),
      }),
      shimast.NodeFlagsNone,
    )
    filtered := f.NewCallExpression(
      nativefactories.IdentifierFactory.Access(nil, mapped, "filter"),
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{
        f.NewArrowFunction(
          nil,
          nil,
          f.NewNodeList([]*shimast.Node{
            nativefactories.IdentifierFactory.Parameter("str", nil, nil),
          }),
          nil,
          nil,
          f.NewToken(shimast.KindEqualsGreaterThanToken),
          f.NewBinaryExpression(
            nil,
            f.NewStringLiteral("", shimast.TokenFlagsNone),
            nil,
            f.NewToken(shimast.KindExclamationEqualsEqualsToken),
            f.NewIdentifier("str"),
          ),
        ),
      }),
      shimast.NodeFlagsNone,
    )
    return f.NewCallExpression(
      nativefactories.IdentifierFactory.Access(nil, filtered, "join"),
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{
        f.NewStringLiteral(",", shimast.TokenFlagsNone),
      }),
      shimast.NodeFlagsNone,
    )
  }

  if len(regular) != 0 {
    elements := make([]*shimast.Node, 0, len(regular))
    for _, key := range regular {
      elements = append(elements, f.NewStringLiteral(key, shimast.TokenFlagsNone))
    }
    statements = append(statements, f.NewIfStatement(
      f.NewCallExpression(
        nativefactories.IdentifierFactory.Access(
          nil,
          f.NewArrayLiteralExpression(
            f.NewNodeList(elements),
            false,
          ),
          "some",
        ),
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{
          f.NewArrowFunction(
            nil,
            nil,
            f.NewNodeList([]*shimast.Node{
              nativefactories.IdentifierFactory.Parameter("regular", nil, nil),
            }),
            nil,
            nil,
            f.NewToken(shimast.KindEqualsGreaterThanToken),
            f.NewBinaryExpression(
              nil,
              f.NewIdentifier("regular"),
              nil,
              f.NewToken(shimast.KindEqualsEqualsEqualsToken),
              f.NewIdentifier("key"),
            ),
          ),
        }),
        shimast.NodeFlagsNone,
      ),
      f.NewReturnStatement(
        f.NewStringLiteral("", shimast.TokenFlagsNone),
      ),
      nil,
    ))
  }

  simple := len(dynamic) == 1 &&
    dynamic[0].Key.Size() == 1 &&
    len(dynamic[0].Key.Atomics) != 0 &&
    dynamic[0].Key.Atomics[0].Type == "string"
  if simple {
    statements = append(statements, stringify_dynamic_properties_stringify(dynamic[0], emit...))
    return output()
  }

  for _, entry := range dynamic {
    statements = append(statements, f.NewIfStatement(
      f.NewCallExpression(
        f.NewIdentifier("RegExp(/"+metadata_to_pattern(struct {
          top      bool
          metadata *nativemetadata.MetadataSchema
        }{
          top:      true,
          metadata: entry.Key,
        })+"/).test"),
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{
          f.NewIdentifier("key"),
        }),
        shimast.NodeFlagsNone,
      ),
      stringify_dynamic_properties_stringify(entry, emit...),
      nil,
    ))
  }
  statements = append(statements, f.NewReturnStatement(
    f.NewStringLiteral("", shimast.TokenFlagsNone),
  ))
  return output()
}

func stringify_dynamic_properties_stringify(entry nativehelpers.IExpressionEntry, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(stringify_dynamic_properties_factory, emit...)
  return f.NewReturnStatement(
    nativefactories.TemplateFactory.Generate([]*shimast.Node{
      f.NewCallExpression(
        f.NewIdentifier("JSON.stringify"),
        nil,
        f.NewNodeList(nil),
        f.NewNodeList([]*shimast.Node{
          f.NewIdentifier("key"),
        }),
        shimast.NodeFlagsNone,
      ),
      f.NewStringLiteral(":", shimast.TokenFlagsNone),
      entry.Expression,
    }),
  )
}

func stringify_dynamic_properties_binding_pattern(emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(stringify_dynamic_properties_factory, emit...)
  return f.NewBindingPattern(
    shimast.KindArrayBindingPattern,
    f.NewNodeList([]*shimast.Node{
      f.NewBindingElement(nil, nil, f.NewIdentifier("key"), nil),
      f.NewBindingElement(nil, nil, f.NewIdentifier("value"), nil),
    }),
  )
}

var stringify_dynamic_properties_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
