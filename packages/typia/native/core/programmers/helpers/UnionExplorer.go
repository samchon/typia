package helpers

import (
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type unionExplorerNamespace struct{}

var UnionExplorer = unionExplorerNamespace{}

// UnionExplorer_IExplore is where a union is being explored. Tracable says
// whether the path of the value is tracked, Source is where the value is checked
// (`top` or `function`), From is the kind of parent (`top`, `array` or
// `object`), Postfix is the path suffix and Start is the index offset of a rest
// element.
//
// @evidence contracts/common.md#principled-implementation It is where a union is being explored; its 5 fields (Tracable, Source, From, Postfix, Start) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 5-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is and explains its non-obvious fields.
type UnionExplorer_IExplore struct {
  Tracable bool
  Source   string
  From     string
  Postfix  string
  Start    *int
}

// UnionExplorer_ObjectConfig is the configuration of UnionExplorer.Object, which
// supplies the object operations.
//
// @evidence contracts/common.md#principled-implementation It is the configuration of UnionExplorer.Object, which supplies the object operations; its 1 members (Objector) are supplied by the caller, so the shared programmer holds no feature-specific behavior.
// @evidence contracts/common.md#clear-and-simple-design A 1-member record of values and callbacks.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
// @evidence contracts/common.md#meaningful-documentation The doc states the role.
type UnionExplorer_ObjectConfig struct {
  Objector UnionExplorer_IObjector
}

// UnionExplorer_IObjector is the object operations that a feature supplies to
// UnionExplorer.Object. Checker, Decoder, Unionizer, Failure, Full and Joiner
// build the feature's checks and results; Is and Required test the input, and
// Type is the checked type. Joiner is typed any because each feature has its own
// joiner record.
//
// @evidence contracts/common.md#principled-implementation It is the object operations that a feature supplies to UnionExplorer.Object; its 9 members (Checker, Decoder, Joiner, Unionizer, Failure, Is, Required, Full, Type) are supplied by the caller, so the shared programmer holds no feature-specific behavior.
// @evidence contracts/common.md#clear-and-simple-design A 9-member record of values and callbacks.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
// @evidence contracts/common.md#meaningful-documentation The doc states the role and the meaning of the members that are not obvious.
type UnionExplorer_IObjector struct {
  Checker   func(props UnionExplorer_ObjectorCheckerProps) *shimast.Node
  Decoder   func(props UnionExplorer_ObjectorDecoderProps) *shimast.Node
  Joiner    any
  Unionizer func(props UnionExplorer_ObjectorUnionizerProps) *shimast.Node
  Failure   func(props UnionExplorer_ObjectorFailureProps) *shimast.Node
  Is        func(exp *shimast.Expression) *shimast.Node
  Required  func(exp *shimast.Expression) *shimast.Node
  Full      func(props UnionExplorer_ObjectorFullProps) *shimast.Node
  Type      *shimast.TypeNode
}

// UnionExplorer_ObjectorCheckerProps is the argument of the Checker operation,
// which tests an input against one metadata schema.
//
// @evidence contracts/common.md#principled-implementation It is the argument of the Checker operation, which tests an input against one metadata schema; its 3 fields (Metadata, Input, Explore) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 3-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is and explains its non-obvious fields.
type UnionExplorer_ObjectorCheckerProps struct {
  Metadata *nativemetadata.MetadataSchema
  Input    *shimast.Expression
  Explore  UnionExplorer_IExplore
}

// UnionExplorer_ObjectorDecoderProps is the argument of the Decoder operation,
// which decodes an input as one object type.
//
// @evidence contracts/common.md#principled-implementation It is the argument of the Decoder operation, which decodes an input as one object type; its 3 fields (Input, Object, Explore) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 3-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type UnionExplorer_ObjectorDecoderProps struct {
  Input   *shimast.Expression
  Object  *nativemetadata.MetadataObjectType
  Explore UnionExplorer_IExplore
}

// UnionExplorer_ObjectorUnionizerProps is the argument of the Unionizer
// operation, which handles several object types that no property can
// discriminate.
//
// @evidence contracts/common.md#principled-implementation It is the argument of the Unionizer operation, which handles several object types that no property can discriminate; its 3 fields (Objects, Input, Explore) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 3-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type UnionExplorer_ObjectorUnionizerProps struct {
  Objects []*nativemetadata.MetadataObjectType
  Input   *shimast.Expression
  Explore UnionExplorer_IExplore
}

// UnionExplorer_ObjectorFailureProps is the argument of the Failure operation,
// which reports that no object type matched.
//
// @evidence contracts/common.md#principled-implementation It is the argument of the Failure operation, which reports that no object type matched; its 3 fields (Input, Expected, Explore) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 3-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type UnionExplorer_ObjectorFailureProps struct {
  Input    *shimast.Expression
  Expected string
  Explore  UnionExplorer_IExplore
}

// UnionExplorer_ObjectorFullProps is the argument of the Full operation, which
// wraps a matched condition with the expected description.
//
// @evidence contracts/common.md#principled-implementation It is the argument of the Full operation, which wraps a matched condition with the expected description; its 4 fields (Condition, Input, Expected, Explore) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 4-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type UnionExplorer_ObjectorFullProps struct {
  Condition *shimast.Expression
  Input     *shimast.Expression
  Expected  string
  Explore   UnionExplorer_IExplore
}

// UnionExplorer_ObjectProps is the argument record of UnionExplorer.Object,
// which explores a union of object types. Level is the nesting depth: it grows
// when the object types left after the first discrimination are explored again.
//
// @evidence contracts/common.md#principled-implementation It is the argument record of UnionExplorer.Object, which explores a union of object types; its 6 fields (Config, Level, Objects, Input, Explore, Emit) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 6-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is and explains its non-obvious fields.
type UnionExplorer_ObjectProps struct {
  Config  UnionExplorer_ObjectConfig
  Level   int
  Objects []*nativemetadata.MetadataObjectType
  Input   *shimast.Expression
  Explore UnionExplorer_IExplore
  Emit    *shimprinter.EmitContext
}

// UnionExplorer_ArrayLikeConfig is the configuration shared by the array, tuple,
// set and map explorers, which supplies their operations. Empty and Success are
// the nodes returned for an empty input and for a match.
//
// @evidence contracts/common.md#principled-implementation It is the configuration shared by the array, tuple, set and map explorers, which supplies their operations; its 6 members (Checker, Candidate, Decoder, Empty, Success, Failure) are supplied by the caller, so the shared programmer holds no feature-specific behavior.
// @evidence contracts/common.md#clear-and-simple-design A 6-member record of values and callbacks.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
// @evidence contracts/common.md#meaningful-documentation The doc states the role and the meaning of the members that are not obvious.
type UnionExplorer_ArrayLikeConfig struct {
  Checker   func(props UnionExplorer_ArrayLikeCheckerProps) *shimast.Node
  Candidate func(props UnionExplorer_ArrayLikeCandidateProps) *shimast.Node
  Decoder   func(props UnionExplorer_ArrayLikeDecoderProps) *shimast.Node
  Empty     *shimast.Node
  Success   *shimast.Expression
  Failure   func(props UnionExplorer_ArrayLikeFailureProps) *shimast.Node
}

// UnionExplorer_ArrayLikeCheckerProps is the argument of the Checker operation
// of an array-like union, which tests one definition against the input.
//
// @evidence contracts/common.md#principled-implementation It is the argument of the Checker operation of an array-like union, which tests one definition against the input; its 4 fields (Input, Definition, Explore, Container) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 4-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type UnionExplorer_ArrayLikeCheckerProps struct {
  Input      *shimast.Expression
  Definition any
  Explore    UnionExplorer_IExplore
  Container  *shimast.Expression
}

// UnionExplorer_ArrayLikeDecoderProps is the argument of the Decoder operation
// of an array-like union, which decodes the input as one definition.
//
// @evidence contracts/common.md#principled-implementation It is the argument of the Decoder operation of an array-like union, which decodes the input as one definition; its 3 fields (Input, Definition, Explore) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 3-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type UnionExplorer_ArrayLikeDecoderProps struct {
  Input      *shimast.Expression
  Definition any
  Explore    UnionExplorer_IExplore
}

// UnionExplorer_ArrayLikeCandidateProps is the argument of the Candidate
// operation of an array-like union, which tests the whole array against one
// definition before it is decoded.
//
// @evidence contracts/common.md#principled-implementation It is the argument of the Candidate operation of an array-like union, which tests the whole array against one definition before it is decoded; its 3 fields (Input, Definition, Explore) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 3-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type UnionExplorer_ArrayLikeCandidateProps struct {
  Input      *shimast.Expression
  Definition any
  Explore    UnionExplorer_IExplore
}

// UnionExplorer_ArrayLikeFailureProps is the argument of the Failure operation
// of an array-like union, which reports that no definition matched.
//
// @evidence contracts/common.md#principled-implementation It is the argument of the Failure operation of an array-like union, which reports that no definition matched; its 3 fields (Input, Expected, Explore) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 3-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type UnionExplorer_ArrayLikeFailureProps struct {
  Input    *shimast.Expression
  Expected string
  Explore  UnionExplorer_IExplore
}

// UnionExplorer_TupleProps is the argument record of UnionExplorer.Tuple, which
// explores a union of tuple types.
//
// @evidence contracts/common.md#principled-implementation It is the argument record of UnionExplorer.Tuple, which explores a union of tuple types; its 6 fields (Config, Parameters, Input, Tuples, Explore, Emit) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 6-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type UnionExplorer_TupleProps struct {
  Config     UnionExplorer_ArrayLikeConfig
  Parameters []*shimast.Node
  Input      *shimast.Expression
  Tuples     []*nativemetadata.MetadataTuple
  Explore    UnionExplorer_IExplore
  Emit       *shimprinter.EmitContext
}

// UnionExplorer_ArrayProps is the argument record of UnionExplorer.Array, which
// explores a union of array types.
//
// @evidence contracts/common.md#principled-implementation It is the argument record of UnionExplorer.Array, which explores a union of array types; its 6 fields (Config, Parameters, Input, Arrays, Explore, Emit) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 6-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type UnionExplorer_ArrayProps struct {
  Config     UnionExplorer_ArrayLikeConfig
  Parameters []*shimast.Node
  Input      *shimast.Expression
  Arrays     []*nativemetadata.MetadataArray
  Explore    UnionExplorer_IExplore
  Emit       *shimprinter.EmitContext
}

// UnionExplorer_ArrayOrTupleProps is the argument record of
// UnionExplorer.Array_or_tuple, which explores a union of array and tuple
// definitions in one pass.
//
// @evidence contracts/common.md#principled-implementation It is the argument record of UnionExplorer.Array_or_tuple, which explores a union of array and tuple definitions in one pass; its 6 fields (Config, Parameters, Input, Definitions, Explore, Emit) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 6-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type UnionExplorer_ArrayOrTupleProps struct {
  Config      UnionExplorer_ArrayLikeConfig
  Parameters  []*shimast.Node
  Input       *shimast.Expression
  Definitions []any
  Explore     UnionExplorer_IExplore
  Emit        *shimprinter.EmitContext
}

// UnionExplorer_SetProps is the argument record of UnionExplorer.Set, which
// explores a union of set types.
//
// @evidence contracts/common.md#principled-implementation It is the argument record of UnionExplorer.Set, which explores a union of set types; its 6 fields (Config, Parameters, Input, Sets, Explore, Emit) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 6-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type UnionExplorer_SetProps struct {
  Config     UnionExplorer_ArrayLikeConfig
  Parameters []*shimast.Node
  Input      *shimast.Expression
  Sets       []*nativemetadata.MetadataSet
  Explore    UnionExplorer_IExplore
  Emit       *shimprinter.EmitContext
}

// UnionExplorer_MapProps is the argument record of UnionExplorer.Map, which
// explores a union of map types.
//
// @evidence contracts/common.md#principled-implementation It is the argument record of UnionExplorer.Map, which explores a union of map types; its 6 fields (Config, Parameters, Input, Maps, Explore, Emit) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 6-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type UnionExplorer_MapProps struct {
  Config     UnionExplorer_ArrayLikeConfig
  Parameters []*shimast.Node
  Input      *shimast.Expression
  Maps       []*nativemetadata.MetadataMap
  Explore    UnionExplorer_IExplore
  Emit       *shimprinter.EmitContext
}

func (unionExplorerNamespace) Object(props UnionExplorer_ObjectProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(unionExplorer_factory, props.Emit)
  if len(props.Objects) == 1 {
    return props.Config.Objector.Decoder(UnionExplorer_ObjectorDecoderProps{
      Input:   props.Input,
      Object:  props.Objects[0],
      Explore: props.Explore,
    })
  }

  names := make([]string, 0, len(props.Objects))
  for _, obj := range props.Objects {
    names = append(names, obj.GetDisplayName())
  }
  expected := "(" + strings.Join(names, " | ") + ")"

  specList := UnionPredicator.Object(props.Objects)
  if len(specList) == 0 {
    condition := props.Config.Objector.Unionizer(UnionExplorer_ObjectorUnionizerProps{
      Objects: props.Objects,
      Input:   props.Input,
      Explore: unionExplorer_with_tracable(props.Explore, false),
    })
    if props.Config.Objector.Full != nil {
      return props.Config.Objector.Full(UnionExplorer_ObjectorFullProps{
        Condition: condition,
        Expected:  expected,
        Explore:   props.Explore,
        Input:     props.Input,
      })
    }
    return condition
  }

  remained := []*nativemetadata.MetadataObjectType{}
  for _, obj := range props.Objects {
    found := false
    for _, spec := range specList {
      if spec.Object == obj {
        found = true
        break
      }
    }
    if found == false {
      remained = append(remained, obj)
    }
  }

  filtered := []UnionPredicator_ISpecialized{}
  for _, spec := range specList {
    if spec.Property.Key.GetSoleLiteral() != nil {
      filtered = append(filtered, spec)
    }
  }
  if len(filtered) == 0 {
    condition := props.Config.Objector.Unionizer(UnionExplorer_ObjectorUnionizerProps{
      Objects: props.Objects,
      Input:   props.Input,
      Explore: unionExplorer_with_tracable(props.Explore, false),
    })
    if props.Config.Objector.Full != nil {
      return props.Config.Objector.Full(UnionExplorer_ObjectorFullProps{
        Condition: condition,
        Expected:  expected,
        Explore:   props.Explore,
        Input:     props.Input,
      })
    }
    return condition
  }

  var condition *shimast.Node
  for i := len(filtered) - 1; i >= 0; i-- {
    spec := filtered[i]
    key := *spec.Property.Key.GetSoleLiteral()
    accessor := nativefactories.IdentifierFactory.Access(nil, props.Input, key)

    var pred *shimast.Node
    if spec.Neighbor {
      pred = props.Config.Objector.Checker(UnionExplorer_ObjectorCheckerProps{
        Input:    accessor,
        Metadata: spec.Property.Value,
        Explore:  unionExplorer_with_postfix(props.Explore, false, nativefactories.IdentifierFactory.Postfix(key)),
      })
    } else {
      pred = nativefactories.ExpressionFactory.IsRequired(accessor)
      if props.Config.Objector.Required != nil {
        pred = props.Config.Objector.Required(pred)
      }
    }
    if props.Config.Objector.Is != nil {
      pred = props.Config.Objector.Is(pred)
    }

    var elseStatement *shimast.Node
    if i == len(filtered)-1 {
      if len(remained) != 0 {
        elseStatement = f.NewReturnStatement(UnionExplorer.Object(UnionExplorer_ObjectProps{
          Config:  props.Config,
          Level:   props.Level + 1,
          Input:   props.Input,
          Objects: remained,
          Explore: props.Explore,
          Emit:    props.Emit,
        }))
      } else {
        elseStatement = props.Config.Objector.Failure(UnionExplorer_ObjectorFailureProps{
          Input:    props.Input,
          Explore:  props.Explore,
          Expected: expected,
        })
      }
    } else {
      elseStatement = condition
    }

    condition = f.NewIfStatement(
      pred,
      f.NewReturnStatement(
        props.Config.Objector.Decoder(UnionExplorer_ObjectorDecoderProps{
          Object:  spec.Object,
          Input:   props.Input,
          Explore: props.Explore,
        }),
      ),
      elseStatement,
    )
  }

  return f.NewCallExpression(
    f.NewArrowFunction(
      nil,
      nil,
      f.NewNodeList(nil),
      nil,
      nil,
      f.NewToken(shimast.KindEqualsGreaterThanToken),
      f.NewBlock(f.NewNodeList([]*shimast.Node{condition}), true),
    ),
    nil,
    nil,
    nil,
    shimast.NodeFlagsNone,
  )
}

func (unionExplorerNamespace) Tuple(props UnionExplorer_TupleProps) *shimast.Node {
  definitions := make([]any, 0, len(props.Tuples))
  for _, tuple := range props.Tuples {
    definitions = append(definitions, tuple)
  }
  return unionExplorer_check_union_array_like(unionExplorer_check_union_array_likeProps{
    Config: props.Config,
    Accessor: unionExplorer_check_union_array_likeAccessor{
      Transform: func(x any) any { return x },
      Element:   func(x any) any { return x },
      Size:      func(input *shimast.Expression) *shimast.Node { return nil },
      Front:     func(input *shimast.Expression) *shimast.Node { return input },
      Array:     func(input *shimast.Expression) *shimast.Node { return input },
      Name: func(t any, elem any) string {
        return t.(*nativemetadata.MetadataTuple).Type.GetDisplayName()
      },
    },
    Parameters:  props.Parameters,
    Input:       props.Input,
    Definitions: definitions,
    Explore:     props.Explore,
    Emit:        props.Emit,
  })
}

func (unionExplorerNamespace) Array(props UnionExplorer_ArrayProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(unionExplorer_factory, props.Emit)
  definitions := make([]any, 0, len(props.Arrays))
  for _, array := range props.Arrays {
    definitions = append(definitions, array)
  }
  return unionExplorer_check_union_array_like(unionExplorer_check_union_array_likeProps{
    Config: props.Config,
    Accessor: unionExplorer_check_union_array_likeAccessor{
      Transform: func(x any) any { return x },
      Element: func(x any) any {
        return x.(*nativemetadata.MetadataArray).Type.Value
      },
      Size: func(input *shimast.Expression) *shimast.Node {
        return nativefactories.IdentifierFactory.Access(nil, input, "length")
      },
      Front: func(input *shimast.Expression) *shimast.Node {
        return f.NewElementAccessExpression(input, nil, nativefactories.ExpressionFactory.Number(0, props.Emit), shimast.NodeFlagsNone)
      },
      Array: func(input *shimast.Expression) *shimast.Node { return input },
      Name: func(t any, elem any) string {
        return t.(*nativemetadata.MetadataArray).Type.GetDisplayName()
      },
    },
    Parameters:  props.Parameters,
    Input:       props.Input,
    Definitions: definitions,
    Explore:     props.Explore,
    Emit:        props.Emit,
  })
}

func (unionExplorerNamespace) Array_or_tuple(props UnionExplorer_ArrayOrTupleProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(unionExplorer_factory, props.Emit)
  return unionExplorer_check_union_array_like(unionExplorer_check_union_array_likeProps{
    Config: props.Config,
    Accessor: unionExplorer_check_union_array_likeAccessor{
      Transform: func(x any) any { return x },
      Element: func(x any) any {
        if array, ok := x.(*nativemetadata.MetadataArray); ok {
          return array.Type.Value
        }
        return x
      },
      Size: func(input *shimast.Expression) *shimast.Node {
        return nativefactories.IdentifierFactory.Access(nil, input, "length")
      },
      Front: func(input *shimast.Expression) *shimast.Node {
        return f.NewElementAccessExpression(input, nil, nativefactories.ExpressionFactory.Number(0, props.Emit), shimast.NodeFlagsNone)
      },
      Array: func(input *shimast.Expression) *shimast.Node { return input },
      Name: func(m any, elem any) string {
        switch v := m.(type) {
        case *nativemetadata.MetadataArray:
          return v.Type.GetDisplayName()
        case *nativemetadata.MetadataTuple:
          return v.Type.GetDisplayName()
        default:
          return "unknown"
        }
      },
    },
    Parameters:  props.Parameters,
    Input:       props.Input,
    Definitions: props.Definitions,
    Explore:     props.Explore,
    Emit:        props.Emit,
  })
}

func (unionExplorerNamespace) Set(props UnionExplorer_SetProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(unionExplorer_factory, props.Emit)
  definitions := make([]any, 0, len(props.Sets))
  for _, set := range props.Sets {
    definitions = append(definitions, set.Value)
  }
  return unionExplorer_check_union_array_like(unionExplorer_check_union_array_likeProps{
    Config: props.Config,
    Accessor: unionExplorer_check_union_array_likeAccessor{
      Transform: func(value any) any {
        meta := value.(*nativemetadata.MetadataSchema)
        return nativemetadata.MetadataArray_create(nativemetadata.MetadataArray{
          Tags: [][]nativemetadata.IMetadataTypeTag{},
          Type: nativemetadata.MetadataArrayType_create(nativemetadata.MetadataArrayType{
            Name:        "Set<" + meta.GetName() + ">",
            DisplayName: "Set<" + meta.GetDisplayName() + ">",
            Index:       nil,
            Recursive:   false,
            Nullables:   []bool{},
            Value:       meta,
          }),
        })
      },
      Element: func(array any) any {
        return array.(*nativemetadata.MetadataArray).Type.Value
      },
      Size: func(input *shimast.Expression) *shimast.Node {
        return nativefactories.IdentifierFactory.Access(nil, input, "size")
      },
      Front: func(input *shimast.Expression) *shimast.Node {
        values := f.NewCallExpression(
          nativefactories.IdentifierFactory.Access(nil, input, "values"),
          nil,
          nil,
          nil,
          shimast.NodeFlagsNone,
        )
        next := f.NewCallExpression(
          nativefactories.IdentifierFactory.Access(nil, values, "next"),
          nil,
          nil,
          nil,
          shimast.NodeFlagsNone,
        )
        return nativefactories.IdentifierFactory.Access(nil, next, "value")
      },
      Array: func(input *shimast.Expression) *shimast.Node {
        return f.NewArrayLiteralExpression(
          f.NewNodeList([]*shimast.Node{
            f.NewSpreadElement(input),
          }),
          false,
        )
      },
      Name: func(_m any, elem any) string {
        return "Set<" + elem.(*nativemetadata.MetadataSchema).GetDisplayName() + ">"
      },
    },
    Parameters:  props.Parameters,
    Input:       props.Input,
    Definitions: definitions,
    Explore:     props.Explore,
    Emit:        props.Emit,
  })
}

func (unionExplorerNamespace) Map(props UnionExplorer_MapProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(unionExplorer_factory, props.Emit)
  definitions := make([]any, 0, len(props.Maps))
  for _, m := range props.Maps {
    definitions = append(definitions, m)
  }
  return unionExplorer_check_union_array_like(unionExplorer_check_union_array_likeProps{
    Config: props.Config,
    Accessor: unionExplorer_check_union_array_likeAccessor{
      Element: func(array any) any {
        elements := array.(*nativemetadata.MetadataArray).Type.Value.Tuples[0].Type.Elements
        return []*nativemetadata.MetadataSchema{elements[0], elements[1]}
      },
      Size: func(input *shimast.Expression) *shimast.Node {
        return nativefactories.IdentifierFactory.Access(nil, input, "size")
      },
      Front: func(input *shimast.Expression) *shimast.Node {
        entries := f.NewCallExpression(
          nativefactories.IdentifierFactory.Access(nil, input, "entries"),
          nil,
          nil,
          nil,
          shimast.NodeFlagsNone,
        )
        next := f.NewCallExpression(
          nativefactories.IdentifierFactory.Access(nil, entries, "next"),
          nil,
          nil,
          nil,
          shimast.NodeFlagsNone,
        )
        return nativefactories.IdentifierFactory.Access(nil, next, "value")
      },
      Array: func(input *shimast.Expression) *shimast.Node {
        return f.NewArrayLiteralExpression(
          f.NewNodeList([]*shimast.Node{
            f.NewSpreadElement(input),
          }),
          false,
        )
      },
      Name: func(_m any, elem any) string {
        pair := elem.([]*nativemetadata.MetadataSchema)
        return "Map<" + pair[0].GetDisplayName() + ", " + pair[1].GetDisplayName() + ">"
      },
      Transform: func(origin any) any {
        m := origin.(*nativemetadata.MetadataMap)
        ofMap := true
        tuple := nativemetadata.MetadataTuple_create(nativemetadata.MetadataTuple{
          Tags: [][]nativemetadata.IMetadataTypeTag{},
          Type: nativemetadata.MetadataTupleType_create(nativemetadata.MetadataTupleType{
            Name:        "[" + m.Key.GetName() + ", " + m.Value.GetName() + "]",
            DisplayName: "[" + m.Key.GetDisplayName() + ", " + m.Value.GetDisplayName() + "]",
            Index:       nil,
            Recursive:   false,
            Nullables:   []bool{},
            Elements:    []*nativemetadata.MetadataSchema{m.Key, m.Value},
          }),
        })
        tuple.Type.Of_map = &ofMap
        return nativemetadata.MetadataArray_create(nativemetadata.MetadataArray{
          Tags: [][]nativemetadata.IMetadataTypeTag{},
          Type: nativemetadata.MetadataArrayType_create(nativemetadata.MetadataArrayType{
            Name:        "Map<" + m.Key.GetName() + ", " + m.Value.GetName() + ">",
            DisplayName: "Map<" + m.Key.GetDisplayName() + ", " + m.Value.GetDisplayName() + ">",
            Index:       nil,
            Recursive:   false,
            Nullables:   []bool{},
            Value: nativemetadata.MetadataSchema_create(nativemetadata.MetadataSchema{
              Any:       false,
              Required:  true,
              Optional:  false,
              Nullable:  false,
              Escaped:   nil,
              Constants: []*nativemetadata.MetadataConstant{},
              Atomics:   []*nativemetadata.MetadataAtomic{},
              Templates: []*nativemetadata.MetadataTemplate{},
              Arrays:    []*nativemetadata.MetadataArray{},
              Tuples:    []*nativemetadata.MetadataTuple{tuple},
              Objects:   []*nativemetadata.MetadataObject{},
              Aliases:   []*nativemetadata.MetadataAlias{},
              Functions: []*nativemetadata.MetadataFunction{},
              Rest:      nil,
              Natives:   []*nativemetadata.MetadataNative{},
              Sets:      []*nativemetadata.MetadataSet{},
              Maps:      []*nativemetadata.MetadataMap{},
            }),
          }),
        })
      },
    },
    Parameters:  props.Parameters,
    Input:       props.Input,
    Definitions: definitions,
    Explore:     props.Explore,
    Emit:        props.Emit,
  })
}

type unionExplorer_check_union_array_likeProps struct {
  Config      UnionExplorer_ArrayLikeConfig
  Accessor    unionExplorer_check_union_array_likeAccessor
  Parameters  []*shimast.Node
  Input       *shimast.Expression
  Definitions []any
  Explore     UnionExplorer_IExplore
  Emit        *shimprinter.EmitContext
}

type unionExplorer_check_union_array_likeAccessor struct {
  Transform func(origin any) any
  Element   func(meta any) any
  Name      func(meta any, elem any) string
  Front     func(input *shimast.Expression) *shimast.Node
  Array     func(input *shimast.Expression) *shimast.Node
  Size      func(input *shimast.Expression) *shimast.Node
}

func unionExplorer_check_union_array_like(props unionExplorer_check_union_array_likeProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(unionExplorer_factory, props.Emit)
  transform := props.Accessor.Transform
  if transform == nil {
    transform = func(origin any) any { return origin }
  }
  targets := make([]any, 0, len(props.Definitions))
  for _, definition := range props.Definitions {
    targets = append(targets, transform(definition))
  }
  if len(targets) == 1 {
    return f.NewArrowFunction(
      nil,
      nil,
      f.NewNodeList(props.Parameters),
      nil,
      nil,
      f.NewToken(shimast.KindEqualsGreaterThanToken),
      props.Config.Decoder(UnionExplorer_ArrayLikeDecoderProps{
        Input:      props.Accessor.Array(props.Input),
        Definition: targets[0],
        Explore:    props.Explore,
      }),
    )
  }

  array := f.NewIdentifier("array")
  top := f.NewIdentifier("top")
  statements := []*shimast.Node{}
  tupleList := []*nativemetadata.MetadataTuple{}
  arrayList := []*nativemetadata.MetadataArray{}
  for _, target := range targets {
    switch v := target.(type) {
    case *nativemetadata.MetadataTuple:
      tupleList = append(tupleList, v)
    case *nativemetadata.MetadataArray:
      arrayList = append(arrayList, v)
    }
  }

  predicate := func(meta any) *shimast.Node {
    inputType := f.NewTypeReferenceNode(f.NewIdentifier("any[]"), nil)
    postfix := ""
    if _, ok := meta.(*nativemetadata.MetadataArrayType); ok {
      inputType = nativefactories.TypeFactory.Keyword("any", props.Emit)
      postfix = "\"[0]\""
    }
    entries := []*shimast.Node{
      f.NewArrowFunction(
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{
          nativefactories.IdentifierFactory.Parameter("top", inputType, nil, props.Emit),
        }),
        nativefactories.TypeFactory.Keyword("any", props.Emit),
        nil,
        f.NewToken(shimast.KindEqualsGreaterThanToken),
        props.Config.Checker(UnionExplorer_ArrayLikeCheckerProps{
          Input:      f.NewIdentifier("top"),
          Definition: props.Accessor.Element(meta),
          Explore:    unionExplorer_with_postfix(props.Explore, false, postfix),
          Container:  array,
        }),
      ),
      f.NewArrowFunction(
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{
          nativefactories.IdentifierFactory.Parameter(
            "entire",
            f.NewTypeReferenceNode(f.NewIdentifier("any[]"), nil),
            nil,
            props.Emit,
          ),
        }),
        nativefactories.TypeFactory.Keyword("any", props.Emit),
        nil,
        f.NewToken(shimast.KindEqualsGreaterThanToken),
        props.Config.Decoder(UnionExplorer_ArrayLikeDecoderProps{
          Input:      f.NewIdentifier("entire"),
          Definition: meta,
          Explore:    unionExplorer_with_tracable(props.Explore, true),
        }),
      ),
    }
    if props.Config.Candidate != nil {
      entries = append(entries, f.NewArrowFunction(
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{
          nativefactories.IdentifierFactory.Parameter(
            "entire",
            f.NewTypeReferenceNode(f.NewIdentifier("any[]"), nil),
            nil,
            props.Emit,
          ),
        }),
        nativefactories.TypeFactory.Keyword("boolean", props.Emit),
        nil,
        f.NewToken(shimast.KindEqualsGreaterThanToken),
        props.Config.Candidate(UnionExplorer_ArrayLikeCandidateProps{
          Input:      f.NewIdentifier("entire"),
          Definition: meta,
          Explore:    unionExplorer_with_tracable(props.Explore, false),
        }),
      ))
    }
    return f.NewAsExpression(
      f.NewArrayLiteralExpression(
        f.NewNodeList(entries),
        true,
      ),
      f.NewTypeReferenceNode(f.NewIdentifier("const"), nil),
    )
  }

  iterate := func(init string, from *shimast.Expression, ifStatement *shimast.Node) *shimast.Node {
    return f.NewForInOrOfStatement(
      shimast.KindForOfStatement,
      nil,
      f.NewVariableDeclarationList(
        f.NewNodeList([]*shimast.Node{
          f.NewVariableDeclaration(
            f.NewIdentifier(init),
            nil,
            nil,
            nil,
          ),
        }),
        shimast.NodeFlagsConst,
      ),
      from,
      ifStatement,
    )
  }

  if len(tupleList) != 0 {
    tuplePredicates := make([]*shimast.Node, 0, len(tupleList))
    for _, x := range tupleList {
      tuplePredicates = append(tuplePredicates, predicate(x))
    }
    statements = append(statements,
      nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
        Name:  "array",
        Value: props.Accessor.Array(props.Input),
      }, props.Emit),
      nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
        Name: "tuplePredicators",
        Value: f.NewArrayLiteralExpression(
          f.NewNodeList(tuplePredicates),
          true,
        ),
      }, props.Emit),
      iterate(
        "pred",
        f.NewIdentifier("tuplePredicators"),
        f.NewIfStatement(
          unionExplorer_array_candidate_condition(
            f.NewCallExpression(
              f.NewIdentifier("pred[0]"),
              nil,
              nil,
              f.NewNodeList([]*shimast.Node{array}),
              shimast.NodeFlagsNone,
            ),
            props.Config.Candidate != nil,
            array,
            props.Emit,
          ),
          f.NewReturnStatement(
            f.NewCallExpression(
              f.NewIdentifier("pred[1]"),
              nil,
              nil,
              f.NewNodeList([]*shimast.Node{array}),
              shimast.NodeFlagsNone,
            ),
          ),
          nil,
        ),
      ),
    )
  }
  if len(arrayList) != 0 {
    if len(tupleList) == 0 {
      statements = append(statements, nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
        Name:  "array",
        Value: props.Accessor.Array(props.Input),
      }, props.Emit))
    }
    arrayPredicates := make([]*shimast.Node, 0, len(arrayList))
    for _, x := range arrayList {
      arrayPredicates = append(arrayPredicates, predicate(x))
    }
    statements = append(statements, nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
      Name:  "top",
      Value: props.Accessor.Front(props.Input),
    }, props.Emit))
    if props.Config.Candidate == nil {
      statements = append(statements, f.NewIfStatement(
        f.NewBinaryExpression(
          nil,
          nativefactories.ExpressionFactory.Number(0, props.Emit),
          nil,
          f.NewToken(shimast.KindEqualsEqualsEqualsToken),
          props.Accessor.Size(props.Input),
        ),
        unionExplorer_return_or_statement(props.Config.Empty, props.Emit),
        nil,
      ))
    }
    statements = append(statements,
      nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
        Name: "arrayPredicators",
        Value: f.NewArrayLiteralExpression(
          f.NewNodeList(arrayPredicates),
          true,
        ),
      }, props.Emit),
      nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
        Name: "passed",
        Value: f.NewCallExpression(
          nativefactories.IdentifierFactory.Access(nil, f.NewIdentifier("arrayPredicators"), "filter"),
          nil,
          nil,
          f.NewNodeList([]*shimast.Node{
            f.NewArrowFunction(
              nil,
              nil,
              f.NewNodeList([]*shimast.Node{
                nativefactories.IdentifierFactory.Parameter("pred", nil, nil, props.Emit),
              }),
              nil,
              nil,
              f.NewToken(shimast.KindEqualsGreaterThanToken),
              func() *shimast.Node {
                element := f.NewCallExpression(
                  f.NewIdentifier("pred[0]"),
                  nil,
                  nil,
                  f.NewNodeList([]*shimast.Node{top}),
                  shimast.NodeFlagsNone,
                )
                if props.Config.Candidate == nil {
                  return element
                }
                return f.NewBinaryExpression(
                  nil,
                  f.NewBinaryExpression(
                    nil,
                    nativefactories.ExpressionFactory.Number(0, props.Emit),
                    nil,
                    f.NewToken(shimast.KindEqualsEqualsEqualsToken),
                    props.Accessor.Size(props.Input),
                  ),
                  nil,
                  f.NewToken(shimast.KindBarBarToken),
                  element,
                )
              }(),
            ),
          }),
          shimast.NodeFlagsNone,
        ),
      }, props.Emit),
      unionExplorer_array_if(iterate, array, top, props.Config.Success, props.Config.Candidate != nil, props.Emit),
    )
  }
  names := make([]string, 0, len(targets))
  for _, target := range targets {
    elem := props.Accessor.Element(target)
    names = append(names, props.Accessor.Name(target, elem))
  }
  statements = append(statements, props.Config.Failure(UnionExplorer_ArrayLikeFailureProps{
    Input:    props.Input,
    Expected: "(" + strings.Join(names, " | ") + ")",
    Explore:  props.Explore,
  }))
  return f.NewArrowFunction(
    nil,
    nil,
    f.NewNodeList(props.Parameters),
    nil,
    nil,
    f.NewToken(shimast.KindEqualsGreaterThanToken),
    f.NewBlock(
      f.NewNodeList(statements),
      true,
    ),
  )
}

func unionExplorer_array_if(iterate func(init string, from *shimast.Expression, ifStatement *shimast.Node) *shimast.Node, array *shimast.Node, top *shimast.Node, success *shimast.Expression, candidate bool, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(unionExplorer_factory, emit...)
  if candidate {
    elementCondition := f.NewCallExpression(
      nativefactories.IdentifierFactory.Access(nil, array, "every"),
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{
        f.NewArrowFunction(
          nil,
          nil,
          f.NewNodeList([]*shimast.Node{
            nativefactories.IdentifierFactory.Parameter("value", nativefactories.TypeFactory.Keyword("any", emit...), nil, emit...),
          }),
          nil,
          nil,
          f.NewToken(shimast.KindEqualsGreaterThanToken),
          f.NewBinaryExpression(
            nil,
            success,
            nil,
            f.NewToken(shimast.KindEqualsEqualsEqualsToken),
            f.NewCallExpression(
              f.NewIdentifier("pred[0]"),
              nil,
              nil,
              f.NewNodeList([]*shimast.Node{f.NewIdentifier("value")}),
              shimast.NodeFlagsNone,
            ),
          ),
        ),
      }),
      shimast.NodeFlagsNone,
    )
    return f.NewBlock(f.NewNodeList([]*shimast.Node{
      iterate(
        "pred",
        f.NewIdentifier("passed"),
        f.NewIfStatement(
          unionExplorer_array_candidate_condition(elementCondition, true, array, emit...),
          f.NewReturnStatement(f.NewCallExpression(
            f.NewIdentifier("pred[1]"),
            nil,
            nil,
            f.NewNodeList([]*shimast.Node{array}),
            shimast.NodeFlagsNone,
          )),
          nil,
        ),
      ),
      f.NewIfStatement(
        f.NewBinaryExpression(
          nil,
          nativefactories.ExpressionFactory.Number(0, emit...),
          nil,
          f.NewToken(shimast.KindLessThanToken),
          f.NewIdentifier("passed.length"),
        ),
        f.NewReturnStatement(f.NewCallExpression(
          f.NewIdentifier("passed[0][1]"),
          nil,
          nil,
          f.NewNodeList([]*shimast.Node{array}),
          shimast.NodeFlagsNone,
        )),
        nil,
      ),
    }), true)
  }
  return f.NewIfStatement(
    f.NewBinaryExpression(
      nil,
      nativefactories.ExpressionFactory.Number(1, emit...),
      nil,
      f.NewToken(shimast.KindEqualsEqualsEqualsToken),
      f.NewIdentifier("passed.length"),
    ),
    f.NewReturnStatement(
      f.NewCallExpression(
        f.NewElementAccessExpression(
          f.NewNonNullExpression(
            f.NewIdentifier("passed[0]"),
            shimast.NodeFlagsNone,
          ),
          nil,
          nativefactories.ExpressionFactory.Number(1, emit...),
          shimast.NodeFlagsNone,
        ),
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{array}),
        shimast.NodeFlagsNone,
      ),
    ),
    f.NewIfStatement(
      f.NewBinaryExpression(
        nil,
        nativefactories.ExpressionFactory.Number(1, emit...),
        nil,
        f.NewToken(shimast.KindLessThanToken),
        f.NewIdentifier("passed.length"),
      ),
      iterate(
        "pred",
        f.NewIdentifier("passed"),
        f.NewIfStatement(
          f.NewCallExpression(
            nativefactories.IdentifierFactory.Access(nil, array, "every"),
            nil,
            nil,
            f.NewNodeList([]*shimast.Node{
              f.NewArrowFunction(
                nil,
                nil,
                f.NewNodeList([]*shimast.Node{
                  nativefactories.IdentifierFactory.Parameter("value", nativefactories.TypeFactory.Keyword("any", emit...), nil, emit...),
                }),
                nil,
                nil,
                f.NewToken(shimast.KindEqualsGreaterThanToken),
                f.NewBinaryExpression(
                  nil,
                  success,
                  nil,
                  f.NewToken(shimast.KindEqualsEqualsEqualsToken),
                  f.NewCallExpression(
                    f.NewIdentifier("pred[0]"),
                    nil,
                    nil,
                    f.NewNodeList([]*shimast.Node{
                      f.NewIdentifier("value"),
                    }),
                    shimast.NodeFlagsNone,
                  ),
                ),
              ),
            }),
            shimast.NodeFlagsNone,
          ),
          f.NewReturnStatement(
            f.NewCallExpression(
              f.NewIdentifier("pred[1]"),
              nil,
              nil,
              f.NewNodeList([]*shimast.Node{
                f.NewIdentifier("array"),
              }),
              shimast.NodeFlagsNone,
            ),
          ),
          nil,
        ),
      ),
      nil,
    ),
  )
}

func unionExplorer_array_candidate_condition(element *shimast.Node, candidate bool, array *shimast.Node, emit ...*shimprinter.EmitContext) *shimast.Node {
  if candidate == false {
    return element
  }
  f := nativecontext.EmitFactoryOf(unionExplorer_factory, emit...)
  return f.NewBinaryExpression(
    nil,
    f.NewCallExpression(
      f.NewIdentifier("pred[2]"),
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{array}),
      shimast.NodeFlagsNone,
    ),
    nil,
    f.NewToken(shimast.KindAmpersandAmpersandToken),
    element,
  )
}

func unionExplorer_return_or_statement(node *shimast.Node, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(unionExplorer_factory, emit...)
  if node == nil || node.Kind == shimast.KindReturnStatement {
    return node
  }
  return f.NewReturnStatement(node)
}

func unionExplorer_with_tracable(base UnionExplorer_IExplore, tracable bool) UnionExplorer_IExplore {
  base.Tracable = tracable
  return base
}

func unionExplorer_with_postfix(base UnionExplorer_IExplore, tracable bool, postfix string) UnionExplorer_IExplore {
  base.Tracable = tracable
  base.Postfix = postfix
  return base
}

var unionExplorer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
