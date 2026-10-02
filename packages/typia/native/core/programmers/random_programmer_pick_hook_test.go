package programmers

import (
  "testing"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
)

// TestRandomProgrammerPickHook preserves lazy selection, fallback and receiver.
//
// A union picker must choose a lazy callback before generating its value. Its
// optional customization is independent of integer leaves, and a stateful pick
// method must receive its generator object instead of an unbound invocation.
//
//  1. Build singleton and two-candidate selections directly in memory.
//  2. Require the optional pick/fallback target and exact generator receiver.
//  3. Check every original expression remains in a zero-argument thunk and only
//     the selected thunk is invoked by the outer zero-argument call.
//
// @evidence contracts/testing.md#behavioral-verification The actual randomProgrammer_decode_pick AST builder runs for one and two candidate expressions. Its nullish hook/fallback, .call receiver, lazy callback array, expression identities and outer invocation are inspected structurally.
// @evidence contracts/testing.md#independent-expectations The customization contract requires generator.pick when present and randomPick otherwise; JavaScript method receiver semantics require .call(generator). Lazy candidate bodies and zero-argument selected invocation follow from selecting before generating, independently of emitted text.
// @evidence contracts/testing.md#distinguishing-cases Singleton and two-alternative inputs retain candidate order and identity. Nullish fallback and optional access are explicit boundaries; no integer leaf callback is substituted for union selection. Native schema cases separately execute stateful selection and default runtime behavior.
// @evidence contracts/testing.md#execution-ownership The native Go unit runner discovers this same-package Test function. It constructs and inspects AST nodes in process with no consumer fixture, native build or JavaScript subprocess.
func TestRandomProgrammerPickHook(t *testing.T) {
  for _, size := range []int{1, 2} {
    emit := shimprinter.NewEmitContext()
    factory := shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
    candidates := []*shimast.Node{factory.NewStringLiteral("left", shimast.TokenFlagsNone), factory.NewStringLiteral("right", shimast.TokenFlagsNone)}
    candidates = candidates[:size]
    node := randomProgrammer_decode_pick(randomProgrammer_decodeProps{
      Context: nativecontext.ITypiaContext{Emit: emit},
    }, candidates)
    if node.Kind != shimast.KindCallExpression {
      t.Fatal("selected lazy candidate must be called")
    }
    outer := node.AsCallExpression()
    if outer.Arguments != nil && len(outer.Arguments.Nodes) != 0 {
      t.Fatal("selected candidate invocation must have no arguments")
    }
    if outer.Expression.Kind != shimast.KindCallExpression {
      t.Fatal("outer target must be the selector result")
    }
    selected := outer.Expression.AsCallExpression()
    if selected.Arguments == nil || len(selected.Arguments.Nodes) != 2 || selected.Arguments.Nodes[0].Text() != "_generator" {
      t.Fatal("selector must receive the generator object as its receiver")
    }
    if selected.Expression.Kind != shimast.KindPropertyAccessExpression {
      t.Fatal("selector must be invoked through call")
    }
    target := selected.Expression.AsPropertyAccessExpression()
    if target.Name().Text() != "call" {
      t.Fatal("selector must preserve method receiver with call")
    }
    choice := target.Expression
    for choice.Kind == shimast.KindParenthesizedExpression {
      choice = choice.AsParenthesizedExpression().Expression
    }
    if choice.Kind != shimast.KindBinaryExpression {
      t.Fatal("custom selector must retain its nullish fallback")
    }
    coalesce := choice.AsBinaryExpression()
    if coalesce.OperatorToken.Kind != shimast.KindQuestionQuestionToken || coalesce.Right.Text() != "randomPick" {
      t.Fatal("missing built-in randomPick fallback")
    }
    if coalesce.Left.Kind != shimast.KindPropertyAccessExpression {
      t.Fatal("custom pick must be read from the generator")
    }
    custom := coalesce.Left.AsPropertyAccessExpression()
    if custom.Name().Text() != "pick" || custom.Expression.Text() != "_generator" || custom.QuestionDotToken == nil {
      t.Fatal("custom pick must use optional generator access")
    }
    array := selected.Arguments.Nodes[1]
    if array.Kind != shimast.KindArrayLiteralExpression || len(array.AsArrayLiteralExpression().Elements.Nodes) != size {
      t.Fatal("candidate population must remain unchanged")
    }
    for index, candidate := range array.AsArrayLiteralExpression().Elements.Nodes {
      if candidate.Kind != shimast.KindArrowFunction {
        t.Fatal("candidate must remain lazy")
      }
      thunk := candidate.AsArrowFunction()
      if thunk.Body != candidates[index] || (thunk.Parameters != nil && len(thunk.Parameters.Nodes) != 0) {
        t.Fatal("candidate expression/order or zero-argument shape changed")
      }
    }
  }
}
