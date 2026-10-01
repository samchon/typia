package iterate

import (
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// Decode_union_objectProps is the argument record of Decode_union_object, which
// decodes a union of object types. Checker and Decoder receive one object type
// at a time, Success wraps a checker result and Escaper builds the failure when
// no object type matches.
//
// @evidence contracts/common.md#principled-implementation It is the argument record of Decode_union_object, which decodes a union of object types; its 8 fields (Checker, Decoder, Success, Escaper, Objects, Input, Explore, Emit) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 8-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is and explains its non-obvious fields.
type Decode_union_objectProps struct {
  Checker func(next Decode_union_object_next) *shimast.Node
  Decoder func(next Decode_union_object_next) *shimast.Node
  Success func(exp *shimast.Expression) *shimast.Node
  Escaper func(next Decode_union_object_escape) *shimast.Node
  Objects []*nativemetadata.MetadataObjectType
  Input   *shimast.Expression
  Explore any
  Emit    *shimprinter.EmitContext
}

// Decode_union_object_next is the argument of the Checker and Decoder callbacks
// of Decode_union_object: the input and the one object type to consider.
//
// @evidence contracts/common.md#principled-implementation It is the argument of the Checker and Decoder callbacks of Decode_union_object: the input and the one object type to consider; its 3 fields (Input, Object, Explore) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 3-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type Decode_union_object_next struct {
  Input   *shimast.Expression
  Object  *nativemetadata.MetadataObjectType
  Explore any
}

// Decode_union_object_escape is the argument of the Escaper callback of
// Decode_union_object: the input and the description of the expected union.
//
// @evidence contracts/common.md#principled-implementation It is the argument of the Escaper callback of Decode_union_object: the input and the description of the expected union; its 2 fields (Input, Expected) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 2-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type Decode_union_object_escape struct {
  Input    *shimast.Expression
  Expected string
}

// Decode_union_object builds an immediately invoked function that tries each
// object type in order with its checker and returns the decoded value of the
// first match, and falls back to the escaper when none matches; a checker that
// is always true ends the search.
//
// @evidence contracts/common.md#principled-implementation It builds an immediately invoked function that tries each object type in order with its checker and returns the decoded value of the first match, and falls back to the escaper when none matches; a checker that is always true ends the search.
// @evidence contracts/common.md#clear-and-simple-design One exported function; the pieces that repeat live in private helpers of the same file.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Its inputs are its arguments and the context they carry, and it keeps no state of its own.
// @evidence contracts/common.md#meaningful-documentation The doc states what it builds.
func Decode_union_object(props Decode_union_objectProps) *shimast.Node {
  unions := make([]decode_union_object_IUnion, 0, len(props.Objects))
  names := make([]string, 0, len(props.Objects))
  for _, object := range props.Objects {
    obj := object
    names = append(names, obj.GetDisplayName())
    unions = append(unions, decode_union_object_IUnion{
      Type: "object",
      Is: func() *shimast.Node {
        return props.Success(props.Checker(Decode_union_object_next{
          Input:   props.Input,
          Explore: props.Explore,
          Object:  obj,
        }))
      },
      Value: func() *shimast.Node {
        return props.Decoder(Decode_union_object_next{
          Input:   props.Input,
          Explore: props.Explore,
          Object:  obj,
        })
      },
    })
  }
  f := nativecontext.EmitFactoryOf(decode_union_object_factory, props.Emit)
  return f.NewCallExpression(
    f.NewArrowFunction(
      nil,
      nil,
      f.NewNodeList(nil),
      nil,
      nil,
      f.NewToken(shimast.KindEqualsGreaterThanToken),
      decode_union_object_iterate(decode_union_object_iterateProps{
        Escaper:  props.Escaper,
        Input:    props.Input,
        Unions:   unions,
        Expected: "(" + strings.Join(names, " | ") + ")",
        Emit:     props.Emit,
      }),
    ),
    nil,
    nil,
    nil,
    shimast.NodeFlagsNone,
  )
}

type decode_union_object_iterateProps struct {
  Escaper  func(next Decode_union_object_escape) *shimast.Node
  Unions   []decode_union_object_IUnion
  Expected string
  Input    *shimast.Expression
  Emit     *shimprinter.EmitContext
}

type decode_union_object_IBranch struct {
  Condition *shimast.Node
  Value     *shimast.Node
}

func decode_union_object_iterate(props decode_union_object_iterateProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(decode_union_object_factory, props.Emit)
  branches := []decode_union_object_IBranch{}
  for _, u := range props.Unions {
    condition := u.Is()
    if condition.Kind == shimast.KindTrueKeyword {
      branches = append(branches, decode_union_object_IBranch{
        Condition: nil,
        Value:     u.Value(),
      })
      break
    }
    branches = append(branches, decode_union_object_IBranch{
      Condition: condition,
      Value:     u.Value(),
    })
  }
  if len(branches) == 0 {
    return f.NewBlock(
      f.NewNodeList([]*shimast.Node{
        props.Escaper(Decode_union_object_escape{
          Input:    props.Input,
          Expected: props.Expected,
        }),
      }),
      true,
    )
  }
  if len(branches) == 1 && branches[0].Condition == nil {
    return branches[0].Value
  }

  statements := make([]*shimast.Node, 0, len(branches)+1)
  for _, b := range branches {
    if b.Condition != nil {
      statements = append(statements, f.NewIfStatement(
        b.Condition,
        f.NewReturnStatement(b.Value),
        nil,
      ))
    } else {
      statements = append(statements, f.NewReturnStatement(b.Value))
    }
  }
  if branches[len(branches)-1].Condition != nil {
    statements = append(statements, props.Escaper(Decode_union_object_escape{
      Input:    props.Input,
      Expected: props.Expected,
    }))
  }
  return f.NewBlock(
    f.NewNodeList(statements),
    true,
  )
}

type decode_union_object_IUnion struct {
  Type  string
  Is    func() *shimast.Node
  Value func() *shimast.Node
}

var decode_union_object_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
