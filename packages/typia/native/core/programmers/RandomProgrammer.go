package programmers

import (
  "fmt"
  "math"
  "reflect"
  "sort"
  "strconv"
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
  nativeiterate "github.com/samchon/typia/packages/typia/native/core/programmers/iterate"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type randomProgrammerNamespace struct{}

var RandomProgrammer = randomProgrammerNamespace{}

type RandomProgrammer_IProps struct {
  Context nativecontext.ITypiaContext
  Modulo  *shimast.Node
  Type    *shimchecker.Type
  Name    *string
  Init    *shimast.Node
}

type RandomProgrammer_IDecomposeProps struct {
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Type    *shimchecker.Type
  Name    *string
  Init    *shimast.Node
}

type randomProgrammer_IExplore struct {
  Function  bool
  Recursive bool
  Object    *schemametadata.MetadataObjectType
  Tuple     *schemametadata.MetadataTupleType
}

type randomProgrammer_decodeProps struct {
  Context  nativecontext.ITypiaContext
  Functor  *nativehelpers.FunctionProgrammer
  Explore  randomProgrammer_IExplore
  Metadata *schemametadata.MetadataSchema
}

type randomProgrammer_decodeAtomicProps struct {
  Context nativecontext.ITypiaContext
  Atomic  *schemametadata.MetadataAtomic
}

type randomProgrammer_decodeArrayProps struct {
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Explore randomProgrammer_IExplore
  Array   *schemametadata.MetadataArray
}

type randomProgrammer_decodeTupleProps struct {
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Explore randomProgrammer_IExplore
  Tuple   *schemametadata.MetadataTuple
}

type randomProgrammer_decodeObjectProps struct {
  Functor *nativehelpers.FunctionProgrammer
  Explore randomProgrammer_IExplore
  Object  *schemametadata.MetadataObjectType
  Emit    *shimprinter.EmitContext
}

const (
  randomProgrammer_PREFIX_OBJECT = "_ro"
  randomProgrammer_PREFIX_ARRAY  = "_ra"
  randomProgrammer_PREFIX_TUPLE  = "_rt"
)

var randomProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (randomProgrammerNamespace) Decompose(props RandomProgrammer_IDecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  f := nativecontext.EmitFactoryOf(randomProgrammer_factory, props.Context.Emit)
  collection := schemametadata.NewMetadataCollection()
  result := nativefactories.MetadataFactory.Analyze(nativefactories.MetadataFactory_IProps{
    Checker: props.Context.Checker,
    Options: nativefactories.MetadataFactory_IOptions{
      Escape:   false,
      Constant: true,
      Absorb:   true,
      Validate: RandomProgrammer.Validate,
    },
    Components: collection,
    Type:       props.Type,
  })
  if result.Success == false {
    panic(nativecontext.TransformerError_from(struct {
      Code   string
      Errors []nativecontext.TransformerError_MetadataFactory_IError
    }{
      Code:   props.Functor.Method,
      Errors: randomProgrammer_errors(result.Errors),
    }))
  }
  functions := map[string]*shimast.Node{}
  for i, stmt := range randomProgrammer_write_object_functions(struct {
    Context    nativecontext.ITypiaContext
    Functor    *nativehelpers.FunctionProgrammer
    Collection *schemametadata.MetadataCollection
  }{Context: props.Context, Functor: props.Functor, Collection: collection}) {
    functions[randomProgrammer_prefix_object(i)] = stmt
  }
  for i, stmt := range randomProgrammer_write_array_functions(struct {
    Context    nativecontext.ITypiaContext
    Functor    *nativehelpers.FunctionProgrammer
    Collection *schemametadata.MetadataCollection
  }{Context: props.Context, Functor: props.Functor, Collection: collection}) {
    functions[randomProgrammer_prefix_array(i)] = stmt
  }
  for i, stmt := range randomProgrammer_write_tuple_functions(struct {
    Context    nativecontext.ITypiaContext
    Functor    *nativehelpers.FunctionProgrammer
    Collection *schemametadata.MetadataCollection
  }{Context: props.Context, Functor: props.Functor, Collection: collection}) {
    functions[randomProgrammer_prefix_tuple(i)] = stmt
  }

  randomGeneratorType := f.NewTypeReferenceNode(
    f.NewIdentifier("Partial"),
    f.NewNodeList([]*shimast.Node{
      randomProgrammer_import_type(props.Context, nativecontext.ImportProgrammer_TypeProps{
        File: "typia",
        Name: "IRandomGenerator",
      }),
    }),
  )
  init := props.Init
  if init == nil {
    init = f.NewToken(shimast.KindQuestionToken)
  }
  resolvedType := randomProgrammer_import_type(props.Context, nativecontext.ImportProgrammer_TypeProps{
    File: "typia",
    Name: "Resolved",
    Arguments: []*shimast.TypeNode{
      randomProgrammer_type_reference(props.Context, props.Type, props.Name),
    },
  })
  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions: functions,
    Statements: []*shimast.Node{
      nativefactories.StatementFactory.Mut(nativefactories.StatementFactory_MutProps{
        Name: "_generator",
        Type: f.NewUnionTypeNode(f.NewNodeList([]*shimast.Node{
          randomGeneratorType,
          f.NewTypeReferenceNode(f.NewIdentifier("undefined"), nil),
        })),
      }, props.Context.Emit),
    },
    Arrow: f.NewArrowFunction(
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{
        nativefactories.IdentifierFactory.Parameter("generator", randomGeneratorType, init, props.Context.Emit),
      }),
      resolvedType,
      nil,
      f.NewToken(shimast.KindEqualsGreaterThanToken),
      f.NewBlock(f.NewNodeList([]*shimast.Node{
        f.NewExpressionStatement(f.NewBinaryExpression(
          nil,
          f.NewIdentifier("_generator"),
          nil,
          f.NewToken(shimast.KindEqualsToken),
          f.NewIdentifier("generator"),
        )),
        f.NewReturnStatement(randomProgrammer_decode(randomProgrammer_decodeProps{
          Context: props.Context,
          Functor: props.Functor,
          Explore: randomProgrammer_IExplore{
            Function:  false,
            Recursive: false,
          },
          Metadata: result.Data,
        })),
      }), true),
    ),
  }
}

func (randomProgrammerNamespace) Write(props RandomProgrammer_IProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(randomProgrammer_method_text(props.Modulo), props.Context.Emit)
  result := RandomProgrammer.Decompose(RandomProgrammer_IDecomposeProps{
    Context: props.Context,
    Functor: functor,
    Type:    props.Type,
    Name:    props.Name,
    Init:    props.Init,
  })
  return nativeinternal.FeatureProgrammer.WriteDecomposed(nativeinternal.FeatureProgrammer_WriteDecomposedProps{
    Modulo:  props.Modulo,
    Functor: functor,
    Result:  result,
  })
}

func (randomProgrammerNamespace) Validate(props struct {
  Metadata *schemametadata.MetadataSchema
  Explore  nativefactories.MetadataFactory_IExplore
  Top      *schemametadata.MetadataSchema
}) []string {
  output := []string{}
  for _, native := range props.Metadata.Natives {
    if native.Name == "WeakSet" {
      output = append(output, "WeakSet is not supported.")
      break
    }
    if native.Name == "WeakMap" {
      output = append(output, "WeakMap is not supported.")
      break
    }
  }
  return output
}

func randomProgrammer_find_positive_min_items(tags [][]schemametadata.IMetadataTypeTag) *schemametadata.IMetadataTypeTag {
  for _, row := range tags {
    for _, tag := range row {
      if tag.Kind == "minItems" && randomProgrammer_is_positive_min_items_tag(tag) {
        copied := tag
        return &copied
      }
    }
  }
  return nil
}

func randomProgrammer_is_positive_min_items_tag(tag schemametadata.IMetadataTypeTag) bool {
  if randomProgrammer_is_positive_numeric(tag.Value) {
    return true
  }
  if schema, ok := tag.Schema.(map[string]any); ok {
    return randomProgrammer_is_positive_numeric(schema["minItems"])
  }
  return false
}

func randomProgrammer_is_positive_numeric(value any) bool {
  if value == nil {
    return false
  }
  rv := reflect.ValueOf(value)
  switch rv.Kind() {
  case reflect.Int, reflect.Int8, reflect.Int16, reflect.Int32, reflect.Int64:
    return rv.Int() > 0
  case reflect.Uint, reflect.Uint8, reflect.Uint16, reflect.Uint32, reflect.Uint64:
    return rv.Uint() > 0
  case reflect.Float32, reflect.Float64:
    return rv.Float() > 0
  case reflect.String:
    parsed, err := strconv.ParseFloat(rv.String(), 64)
    return err == nil && parsed > 0
  default:
    return false
  }
}

func randomProgrammer_write_object_functions(props struct {
  Context    nativecontext.ITypiaContext
  Functor    *nativehelpers.FunctionProgrammer
  Collection *schemametadata.MetadataCollection
}) []*shimast.Node {
  f := nativecontext.EmitFactoryOf(randomProgrammer_factory, props.Context.Emit)
  output := []*shimast.Node{}
  for i, obj := range props.Collection.Objects() {
    index := i
    object := obj
    if object.Recursive && nativehelpers.RandomJoiner.IsUnsatisfiableRecursiveObject(object) {
      panic(nativecontext.NewTransformerError(nativecontext.TransformerError_IProps{
        Code:    props.Functor.Method,
        Message: fmt.Sprintf("recursive type %q cannot be randomly generated because the recursion never terminates; give it a nullable, optional, or array/set/map escape.", object.Name),
      }))
    }
    output = append(output, nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
      Name: randomProgrammer_prefix_object(index),
      Value: f.NewArrowFunction(
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{
          nativefactories.IdentifierFactory.Parameter("_recursive", nativefactories.TypeFactory.Keyword("boolean", props.Context.Emit), f.NewIdentifier(fmt.Sprint(object.Recursive)), props.Context.Emit),
          nativefactories.IdentifierFactory.Parameter("_depth", nativefactories.TypeFactory.Keyword("number", props.Context.Emit), nativefactories.ExpressionFactory.Number(0, props.Context.Emit), props.Context.Emit),
        }),
        nativefactories.TypeFactory.Keyword("any", props.Context.Emit),
        nil,
        f.NewToken(shimast.KindEqualsGreaterThanToken),
        nativehelpers.RandomJoiner.Object(nativehelpers.RandomJoiner_ObjectProps{
          Decode: func(metadata *schemametadata.MetadataSchema) *shimast.Node {
            return randomProgrammer_decode(randomProgrammer_decodeProps{
              Context: props.Context,
              Functor: props.Functor,
              Explore: randomProgrammer_IExplore{
                Recursive: object.Recursive,
                Function:  true,
                Object:    object,
              },
              Metadata: metadata,
            })
          },
          StrictOptionalUndefined: func(metadata *schemametadata.MetadataSchema) bool {
            return nativehelpers.OptionPredicator.StrictOptionalUndefined(props.Context, metadata)
          },
          OptionalProperty: func(metadata *schemametadata.MetadataSchema) bool {
            return nativehelpers.OptionPredicator.ExactOptionalProperty(props.Context, metadata)
          },
          Optional: func() *shimast.Node {
            return f.NewCallExpression(
              randomProgrammer_coalesce(props.Context, "boolean", "randomBoolean"),
              nil,
              nil,
              nil,
              shimast.NodeFlagsNone,
            )
          },
          Object: object,
          Emit:   props.Context.Emit,
        }),
      ),
    }, props.Context.Emit))
  }
  return output
}

func randomProgrammer_write_array_functions(props struct {
  Context    nativecontext.ITypiaContext
  Functor    *nativehelpers.FunctionProgrammer
  Collection *schemametadata.MetadataCollection
}) []*shimast.Node {
  f := nativecontext.EmitFactoryOf(randomProgrammer_factory, props.Context.Emit)
  output := []*shimast.Node{}
  for i, array := range props.Collection.Arrays() {
    if array.Recursive == false {
      continue
    }
    index := i
    array := array
    output = append(output, nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
      Name: randomProgrammer_prefix_array(index),
      Value: f.NewArrowFunction(
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{
          nativefactories.IdentifierFactory.Parameter("_schema", nativefactories.TypeFactory.Keyword("any", props.Context.Emit), nil, props.Context.Emit),
          nativefactories.IdentifierFactory.Parameter("_recursive", nativefactories.TypeFactory.Keyword("boolean", props.Context.Emit), f.NewKeywordExpression(shimast.KindTrueKeyword), props.Context.Emit),
          nativefactories.IdentifierFactory.Parameter("_depth", nativefactories.TypeFactory.Keyword("number", props.Context.Emit), nativefactories.ExpressionFactory.Number(0, props.Context.Emit), props.Context.Emit),
        }),
        nativefactories.TypeFactory.Keyword("any", props.Context.Emit),
        nil,
        f.NewToken(shimast.KindEqualsGreaterThanToken),
        nativehelpers.RandomJoiner.Array(nativehelpers.RandomJoiner_ArrayProps{
          Decode: func(metadata *schemametadata.MetadataSchema) *shimast.Node {
            return randomProgrammer_decode(randomProgrammer_decodeProps{
              Context: props.Context,
              Functor: props.Functor,
              Explore: randomProgrammer_IExplore{
                Recursive: true,
                Function:  true,
              },
              Metadata: metadata,
            })
          },
          Recursive:  true,
          Expression: randomProgrammer_coalesce(props.Context, "array", "randomArray"),
          Array:      array,
          Schema:     nil,
          Emit:       props.Context.Emit,
        }),
      ),
    }, props.Context.Emit))
  }
  return output
}

func randomProgrammer_write_tuple_functions(props struct {
  Context    nativecontext.ITypiaContext
  Functor    *nativehelpers.FunctionProgrammer
  Collection *schemametadata.MetadataCollection
}) []*shimast.Node {
  f := nativecontext.EmitFactoryOf(randomProgrammer_factory, props.Context.Emit)
  output := []*shimast.Node{}
  for i, tuple := range props.Collection.Tuples() {
    if tuple.Recursive == false {
      continue
    }
    index := i
    tuple := tuple
    if nativehelpers.RandomJoiner.IsUnsatisfiableRecursiveTuple(tuple) {
      panic(nativecontext.NewTransformerError(nativecontext.TransformerError_IProps{
        Code:    props.Functor.Method,
        Message: fmt.Sprintf("recursive type %q cannot be randomly generated because the recursion never terminates; give it a nullable, optional, or array/set/map escape.", tuple.Name),
      }))
    }
    output = append(output, nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
      Name: randomProgrammer_prefix_tuple(index),
      Value: f.NewArrowFunction(
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{
          nativefactories.IdentifierFactory.Parameter("_recursive", nativefactories.TypeFactory.Keyword("boolean", props.Context.Emit), f.NewKeywordExpression(shimast.KindTrueKeyword), props.Context.Emit),
          nativefactories.IdentifierFactory.Parameter("_depth", nativefactories.TypeFactory.Keyword("number", props.Context.Emit), nativefactories.ExpressionFactory.Number(0, props.Context.Emit), props.Context.Emit),
        }),
        nativefactories.TypeFactory.Keyword("any", props.Context.Emit),
        nil,
        f.NewToken(shimast.KindEqualsGreaterThanToken),
        nativehelpers.RandomJoiner.Tuple(nativehelpers.RandomJoiner_TupleProps{
          Decode: func(metadata *schemametadata.MetadataSchema) *shimast.Node {
            return randomProgrammer_decode(randomProgrammer_decodeProps{
              Context: props.Context,
              Functor: props.Functor,
              Explore: randomProgrammer_IExplore{
                Function:  true,
                Recursive: true,
                Tuple:     tuple,
              },
              Metadata: metadata,
            })
          },
          Elements: tuple.Elements,
          Emit:     props.Context.Emit,
        }),
      ),
    }, props.Context.Emit))
  }
  return output
}

func randomProgrammer_decode(props randomProgrammer_decodeProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(randomProgrammer_factory, props.Context.Emit)
  expressions := []*shimast.Node{}
  if props.Metadata.Any {
    expressions = append(expressions, f.NewStringLiteral("any type used...", shimast.TokenFlagsNone))
  }
  if props.Metadata.IsRequired() == false || len(props.Metadata.Functions) != 0 {
    expressions = append(expressions, f.NewIdentifier("undefined"))
  }
  if props.Metadata.Nullable {
    expressions = append(expressions, f.NewKeywordExpression(shimast.KindNullKeyword))
  }
  for _, constant := range props.Metadata.Constants {
    for _, value := range constant.Values {
      if constant.Type == "boolean" {
        if truthy, _ := value.Value.(bool); truthy {
          expressions = append(expressions, f.NewKeywordExpression(shimast.KindTrueKeyword))
        } else {
          expressions = append(expressions, f.NewKeywordExpression(shimast.KindFalseKeyword))
        }
      } else if constant.Type == "bigint" {
        expressions = append(expressions, nativefactories.ExpressionFactory.Bigint(value.Value, props.Context.Emit))
      } else if constant.Type == "number" {
        expressions = append(expressions, nativefactories.ExpressionFactory.Number(value.Value, props.Context.Emit))
      } else {
        expressions = append(expressions, f.NewStringLiteral(fmt.Sprint(value.Value), shimast.TokenFlagsNone))
      }
    }
  }
  for _, template := range props.Metadata.Templates {
    expressions = append(expressions, randomProgrammer_decode_template(struct {
      Context  nativecontext.ITypiaContext
      Functor  *nativehelpers.FunctionProgrammer
      Explore  randomProgrammer_IExplore
      Template *schemametadata.MetadataTemplate
    }{
      Context: props.Context, Functor: props.Functor, Explore: props.Explore, Template: template,
    }))
  }
  for _, atomic := range props.Metadata.Atomics {
    expressions = append(expressions, randomProgrammer_decode_atomic(randomProgrammer_decodeAtomicProps{
      Context: props.Context,
      Atomic:  atomic,
    })...)
  }
  if props.Metadata.Escaped != nil {
    next := props
    next.Metadata = props.Metadata.Escaped.Returns
    expressions = append(expressions, randomProgrammer_decode(next))
  }
  for _, array := range props.Metadata.Arrays {
    next := props
    expressions = append(expressions, randomProgrammer_decode_array(randomProgrammer_decodeArrayProps{
      Context: next.Context,
      Functor: next.Functor,
      Explore: next.Explore,
      Array:   array,
    })...)
  }
  for _, tuple := range props.Metadata.Tuples {
    expressions = append(expressions, randomProgrammer_decode_tuple(randomProgrammer_decodeTupleProps{
      Context: props.Context,
      Functor: props.Functor,
      Explore: props.Explore,
      Tuple:   tuple,
    }))
  }
  for _, object := range props.Metadata.Objects {
    expressions = append(expressions, randomProgrammer_decode_object(randomProgrammer_decodeObjectProps{
      Functor: props.Functor,
      Explore: props.Explore,
      Object:  object.Type,
      Emit:    props.Context.Emit,
    }))
  }
  for _, native := range props.Metadata.Natives {
    expressions = append(expressions, randomProgrammer_decode_native(struct {
      Context nativecontext.ITypiaContext
      Functor *nativehelpers.FunctionProgrammer
      Explore randomProgrammer_IExplore
      Name    string
    }{Context: props.Context, Functor: props.Functor, Explore: props.Explore, Name: native.Name}))
  }
  for _, set := range props.Metadata.Sets {
    expressions = append(expressions, randomProgrammer_decode_set(struct {
      Context nativecontext.ITypiaContext
      Functor *nativehelpers.FunctionProgrammer
      Explore randomProgrammer_IExplore
      Set     *schemametadata.MetadataSet
    }{Context: props.Context, Functor: props.Functor, Explore: props.Explore, Set: set}))
  }
  for _, entry := range props.Metadata.Maps {
    expressions = append(expressions, randomProgrammer_decode_map(struct {
      Context nativecontext.ITypiaContext
      Functor *nativehelpers.FunctionProgrammer
      Explore randomProgrammer_IExplore
      Map     *schemametadata.MetadataMap
    }{Context: props.Context, Functor: props.Functor, Explore: props.Explore, Map: entry}))
  }
  if len(expressions) == 1 {
    return expressions[0]
  }
  pickers := make([]*shimast.Node, 0, len(expressions))
  for _, expr := range expressions {
    value := expr
    pickers = append(pickers, f.NewArrowFunction(
      nil,
      nil,
      f.NewNodeList(nil),
      nil,
      nil,
      f.NewToken(shimast.KindEqualsGreaterThanToken),
      value,
    ))
  }
  return f.NewCallExpression(
    f.NewCallExpression(
      randomProgrammer_internal(props.Context, "randomPick"),
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{
        f.NewArrayLiteralExpression(f.NewNodeList(pickers), true),
      }),
      shimast.NodeFlagsNone,
    ),
    nil,
    nil,
    nil,
    shimast.NodeFlagsNone,
  )
}

func randomProgrammer_decode_atomic(props randomProgrammer_decodeAtomicProps) []*shimast.Node {
  var schemaList []nativeiterate.JsonSchema
  if props.Atomic.Type == "boolean" {
    schemaList = nativeiterate.Json_schema_boolean_export(props.Atomic)
  } else if props.Atomic.Type == "string" {
    schemaList = nativeiterate.Json_schema_string_export(props.Atomic)
  } else if props.Atomic.Type == "bigint" {
    schemaList = nativeiterate.Json_schema_bigint_export(props.Atomic)
  } else {
    schemaList = nativeiterate.Json_schema_number_export(props.Atomic)
  }
  f := nativecontext.EmitFactoryOf(randomProgrammer_factory, props.Context.Emit)
  output := make([]*shimast.Node, 0, len(schemaList))
  for _, schema := range schemaList {
    composed := randomProgrammer_compose_atomic(props.Atomic.Type, schema, props.Context.Emit)
    output = append(output, f.NewCallExpression(
      nativefactories.ExpressionFactory.Coalesce(
        nativefactories.IdentifierFactory.Access(props.Context.Emit, f.NewIdentifier("_generator"), composed.Method, true),
        randomProgrammer_internal(props.Context, composed.Internal),
        props.Context.Emit,
      ),
      nil,
      nil,
      f.NewNodeList(composed.Arguments),
      shimast.NodeFlagsNone,
    ))
  }
  return output
}

type randomProgrammer_composedAtomic struct {
  Method    string
  Internal  string
  Arguments []*shimast.Node
}

func randomProgrammer_compose_atomic(atomicType string, schema nativeiterate.JsonSchema, emit *shimprinter.EmitContext) randomProgrammer_composedAtomic {
  f := nativecontext.EmitFactoryOf(randomProgrammer_factory, emit)
  if atomicType == "string" {
    if raw, ok := schema["format"].(string); ok && raw != "" {
      if raw == "date-time" {
        return randomProgrammer_composedAtomic{Method: "datetime", Internal: "randomFormatDatetime"}
      }
      method := randomProgrammer_format_method(raw)
      return randomProgrammer_composedAtomic{
        Method:   method,
        Internal: "randomFormat" + randomProgrammer_format_pascal(raw),
      }
    }
    if pattern, ok := schema["pattern"].(string); ok && pattern != "" {
      return randomProgrammer_composedAtomic{
        Method:   "pattern",
        Internal: "randomPattern",
        Arguments: []*shimast.Node{
          f.NewNewExpression(
            f.NewIdentifier("RegExp"),
            nil,
            f.NewNodeList([]*shimast.Node{f.NewStringLiteral(pattern, shimast.TokenFlagsNone)}),
          ),
        },
      }
    }
  } else if atomicType == "number" {
    if typ, ok := schema["type"].(string); ok && typ == "integer" {
      return randomProgrammer_composedAtomic{
        Method:    "integer",
        Internal:  "randomInteger",
        Arguments: []*shimast.Node{nativefactories.LiteralFactory.Write(schema, emit)},
      }
    }
  } else if atomicType == "boolean" {
    return randomProgrammer_composedAtomic{
      Method:   "boolean",
      Internal: "randomBoolean",
    }
  }
  return randomProgrammer_composedAtomic{
    Method:    atomicType,
    Internal:  "random" + randomProgrammer_capitalize(atomicType),
    Arguments: []*shimast.Node{nativefactories.LiteralFactory.Write(schema, emit)},
  }
}

func randomProgrammer_decode_template(props struct {
  Context  nativecontext.ITypiaContext
  Functor  *nativehelpers.FunctionProgrammer
  Explore  randomProgrammer_IExplore
  Template *schemametadata.MetadataTemplate
}) *shimast.Node {
  expressions := make([]*shimast.Expression, 0, len(props.Template.Row))
  for _, metadata := range props.Template.Row {
    expressions = append(expressions, randomProgrammer_decode(randomProgrammer_decodeProps{
      Context:  props.Context,
      Functor:  props.Functor,
      Explore:  props.Explore,
      Metadata: metadata,
    }))
  }
  return nativefactories.TemplateFactory.Generate(expressions, props.Context.Emit)
}

func randomProgrammer_decode_array(props randomProgrammer_decodeArrayProps) []*shimast.Node {
  components := &nativeiterate.OpenApi_IComponents{}
  schemaList := nativeiterate.Json_schema_array_export(nativeiterate.Json_schema_array_export_props{
    Components: components,
    Array:      props.Array,
  })
  schemaList = randomProgrammer_array_schema_list(props.Array, components, schemaList)
  f := nativecontext.EmitFactoryOf(randomProgrammer_factory, props.Context.Emit)
  output := make([]*shimast.Node, 0, len(schemaList))
  if props.Array.Type.Recursive {
    if tag := randomProgrammer_find_positive_min_items(props.Array.Tags); tag != nil {
      panic(nativecontext.NewTransformerError(nativecontext.TransformerError_IProps{
        Code:    props.Functor.Method,
        Message: fmt.Sprintf("recursive array type cannot have %s.", tag.Name),
      }))
    }
    for _, schema := range schemaList {
      arguments := []*shimast.Node{
        randomProgrammer_schema_without_items(schema, props.Context.Emit),
      }
      if props.Explore.Function {
        recursive := f.NewIdentifier("_recursive")
        if props.Explore.Recursive {
          recursive = f.NewKeywordExpression(shimast.KindTrueKeyword)
        }
        depth := f.NewIdentifier("_depth")
        if props.Explore.Recursive {
          depth = f.NewBinaryExpression(
            nil,
            nativefactories.ExpressionFactory.Number(1, props.Context.Emit),
            nil,
            f.NewToken(shimast.KindPlusToken),
            f.NewIdentifier("_depth"),
          )
        }
        arguments = append(arguments, recursive, depth)
      }
      output = append(output, f.NewCallExpression(
        f.NewIdentifier(props.Functor.UseLocal(randomProgrammer_prefix_array(*props.Array.Type.Index))),
        nil,
        nil,
        f.NewNodeList(arguments),
        shimast.NodeFlagsNone,
      ))
    }
    return output
  }
  for _, schema := range schemaList {
    schema := schema
    guardProps := nativehelpers.RandomJoiner_RecursiveArrayGuardProps{
      Array:  props.Array.Type,
      Object: props.Explore.Object,
      Tuple:  props.Explore.Tuple,
    }
    requiredGuard := nativehelpers.RandomJoiner.RequiresRecursiveArrayGuardFor(guardProps)
    directOwnerPath := nativehelpers.RandomJoiner.HasDirectRecursiveOwnerPathFor(guardProps)
    positiveMinItems := randomProgrammer_find_positive_min_items(props.Array.Tags)
    if props.Explore.Recursive && positiveMinItems != nil && (requiredGuard || directOwnerPath) {
      panic(nativecontext.NewTransformerError(nativecontext.TransformerError_IProps{
        Code:    props.Functor.Method,
        Message: fmt.Sprintf("recursive array type cannot have %s.", positiveMinItems.Name),
      }))
    }
    ownerPath := requiredGuard || nativehelpers.RandomJoiner.HasRecursiveOwnerPathFor(guardProps)
    guardRecursive := props.Explore.Recursive &&
      ownerPath &&
      !(positiveMinItems != nil && requiredGuard == false)
    output = append(output, nativehelpers.RandomJoiner.Array(nativehelpers.RandomJoiner_ArrayProps{
      Decode: func(metadata *schemametadata.MetadataSchema) *shimast.Node {
        return randomProgrammer_decode(randomProgrammer_decodeProps{
          Context:  props.Context,
          Functor:  props.Functor,
          Explore:  props.Explore,
          Metadata: metadata,
        })
      },
      Expression: randomProgrammer_coalesce(props.Context, "array", "randomArray"),
      Array:      props.Array.Type,
      Recursive:  guardRecursive,
      Schema:     schema,
      Emit:       props.Context.Emit,
    }))
  }
  return output
}

func randomProgrammer_decode_tuple(props randomProgrammer_decodeTupleProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(randomProgrammer_factory, props.Context.Emit)
  if props.Tuple.Type.Recursive {
    depth := nativefactories.ExpressionFactory.Number(0, props.Context.Emit)
    if props.Explore.Recursive {
      depth = f.NewBinaryExpression(
        nil,
        nativefactories.ExpressionFactory.Number(1, props.Context.Emit),
        nil,
        f.NewToken(shimast.KindPlusToken),
        f.NewIdentifier("_depth"),
      )
    }
    return f.NewCallExpression(
      f.NewIdentifier(props.Functor.UseLocal(randomProgrammer_prefix_tuple(*props.Tuple.Type.Index))),
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{
        f.NewKeywordExpression(shimast.KindTrueKeyword),
        depth,
      }),
      shimast.NodeFlagsNone,
    )
  }
  return nativehelpers.RandomJoiner.Tuple(nativehelpers.RandomJoiner_TupleProps{
    Decode: func(metadata *schemametadata.MetadataSchema) *shimast.Node {
      return randomProgrammer_decode(randomProgrammer_decodeProps{
        Context:  props.Context,
        Functor:  props.Functor,
        Explore:  props.Explore,
        Metadata: metadata,
      })
    },
    Elements: props.Tuple.Type.Elements,
    Emit:     props.Context.Emit,
  })
}

func randomProgrammer_decode_object(props randomProgrammer_decodeObjectProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(randomProgrammer_factory, props.Emit)
  var args *shimast.NodeList
  if props.Explore.Function {
    recursive := f.NewIdentifier("_recursive")
    if props.Explore.Recursive {
      recursive = f.NewKeywordExpression(shimast.KindTrueKeyword)
    }
    args = f.NewNodeList([]*shimast.Node{
      recursive,
      nativefactories.ExpressionFactory.Conditional(
        f.NewIdentifier("_recursive"),
        f.NewBinaryExpression(
          nil,
          nativefactories.ExpressionFactory.Number(1, props.Emit),
          nil,
          f.NewToken(shimast.KindPlusToken),
          f.NewIdentifier("_depth"),
        ),
        f.NewIdentifier("_depth"),
        props.Emit,
      ),
    })
  }
  return f.NewCallExpression(
    f.NewIdentifier(props.Functor.UseLocal(randomProgrammer_prefix_object(props.Object.Index))),
    nil,
    nil,
    args,
    shimast.NodeFlagsNone,
  )
}

func randomProgrammer_decode_set(props struct {
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Explore randomProgrammer_IExplore
  Set     *schemametadata.MetadataSet
}) *shimast.Node {
  f := nativecontext.EmitFactoryOf(randomProgrammer_factory, props.Context.Emit)
  array := schemametadata.MetadataArray_create(schemametadata.MetadataArray{
    Tags: [][]schemametadata.IMetadataTypeTag{},
    Type: schemametadata.MetadataArrayType_create(schemametadata.MetadataArrayType{
      Value:     props.Set.Value,
      Recursive: false,
      Index:     nil,
      Nullables: []bool{},
      Name:      props.Set.GetName(),
    }),
  })
  return f.NewNewExpression(
    f.NewIdentifier("Set"),
    nil,
    f.NewNodeList([]*shimast.Node{
      randomProgrammer_first(randomProgrammer_decode_array(randomProgrammer_decodeArrayProps{
        Context: props.Context,
        Functor: props.Functor,
        Explore: props.Explore,
        Array:   array,
      }), props.Context.Emit),
    }),
  )
}

func randomProgrammer_decode_map(props struct {
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Explore randomProgrammer_IExplore
  Map     *schemametadata.MetadataMap
}) *shimast.Node {
  f := nativecontext.EmitFactoryOf(randomProgrammer_factory, props.Context.Emit)
  ofMap := true
  tupleType := schemametadata.MetadataTupleType_create(schemametadata.MetadataTupleType{
    Name:      fmt.Sprintf("[%s, %s]", props.Map.Key.GetName(), props.Map.Value.GetName()),
    Index:     nil,
    Recursive: false,
    Nullables: []bool{},
    Elements:  []*schemametadata.MetadataSchema{props.Map.Key, props.Map.Value},
    Of_map:    &ofMap,
  })
  value := schemametadata.MetadataSchema_initialize()
  value.Tuples = []*schemametadata.MetadataTuple{
    schemametadata.MetadataTuple_create(schemametadata.MetadataTuple{
      Type: tupleType,
      Tags: [][]schemametadata.IMetadataTypeTag{},
    }),
  }
  array := schemametadata.MetadataArray_create(schemametadata.MetadataArray{
    Tags: [][]schemametadata.IMetadataTypeTag{},
    Type: schemametadata.MetadataArrayType_create(schemametadata.MetadataArrayType{
      Name:      props.Map.GetName(),
      Index:     nil,
      Recursive: false,
      Nullables: []bool{},
      Value:     value,
    }),
  })
  return f.NewNewExpression(
    f.NewIdentifier("Map"),
    nil,
    f.NewNodeList([]*shimast.Node{
      randomProgrammer_first(randomProgrammer_decode_array(randomProgrammer_decodeArrayProps{
        Context: props.Context,
        Functor: props.Functor,
        Explore: props.Explore,
        Array:   array,
      }), props.Context.Emit),
    }),
  )
}

func randomProgrammer_decode_native(props struct {
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Explore randomProgrammer_IExplore
  Name    string
}) *shimast.Node {
  if atomic, ok := schemametadata.MetadataSchema_atomicLikeNative(props.Name); ok {
    return randomProgrammer_first(randomProgrammer_decode_atomic(randomProgrammer_decodeAtomicProps{
      Context: props.Context,
      Atomic: schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{
        Type: atomic,
        Tags: [][]schemametadata.IMetadataTypeTag{},
      }),
    }), props.Context.Emit)
  }
  if props.Name == "Date" {
    return randomProgrammer_decode_native_date(props.Context)
  }
  if randomProgrammer_is_typed_array(props.Name) {
    return randomProgrammer_decode_native_byte_array(struct {
      Context nativecontext.ITypiaContext
      Functor *nativehelpers.FunctionProgrammer
      Explore randomProgrammer_IExplore
      Name    string
    }{Context: props.Context, Functor: props.Functor, Explore: props.Explore, Name: props.Name})
  }
  if props.Name == "ArrayBuffer" || props.Name == "SharedArrayBuffer" {
    return randomProgrammer_decode_native_array_buffer(struct {
      Context nativecontext.ITypiaContext
      Functor *nativehelpers.FunctionProgrammer
      Explore randomProgrammer_IExplore
      Name    string
    }{Context: props.Context, Functor: props.Functor, Explore: props.Explore, Name: props.Name})
  }
  if props.Name == "DataView" {
    return randomProgrammer_decode_native_data_view(props)
  }
  if props.Name == "Blob" {
    return randomProgrammer_decode_native_blob(props)
  }
  if props.Name == "File" {
    return randomProgrammer_decode_native_file(props)
  }
  if props.Name == "RegExp" {
    return randomProgrammer_decode_regexp(props.Context)
  }
  f := nativecontext.EmitFactoryOf(randomProgrammer_factory, props.Context.Emit)
  return f.NewNewExpression(f.NewIdentifier(props.Name), nil, f.NewNodeList(nil))
}

func randomProgrammer_decode_native_date(context nativecontext.ITypiaContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(randomProgrammer_factory, context.Emit)
  return f.NewNewExpression(
    f.NewIdentifier("Date"),
    nil,
    f.NewNodeList([]*shimast.Node{
      f.NewCallExpression(randomProgrammer_coalesce(context, "datetime", "randomFormatDatetime"), nil, nil, f.NewNodeList(nil), shimast.NodeFlagsNone),
    }),
  )
}

func randomProgrammer_decode_native_byte_array(props struct {
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Explore randomProgrammer_IExplore
  Name    string
}) *shimast.Node {
  f := nativecontext.EmitFactoryOf(randomProgrammer_factory, props.Context.Emit)
  protobufType, minimum, maximum := randomProgrammer_typed_array_range(props.Name)
  atomic := "number"
  if props.Name == "BigInt64Array" || props.Name == "BigUint64Array" {
    atomic = "bigint"
  }
  value := schemametadata.MetadataSchema_initialize()
  value.Atomics = []*schemametadata.MetadataAtomic{
    schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{
      Type: atomic,
      Tags: [][]schemametadata.IMetadataTypeTag{randomProgrammer_tags([]schemametadata.IMetadataTypeTag{},
        nativefactories.MetadataCommentTagFactory.Get(struct {
          Kind  string
          Type  string
          Value string
        }{Kind: "type", Type: atomic, Value: protobufType}),
        nativefactories.MetadataCommentTagFactory.Get(struct {
          Kind  string
          Type  string
          Value string
        }{Kind: "minimum", Type: "number", Value: minimum}),
        nativefactories.MetadataCommentTagFactory.Get(struct {
          Kind  string
          Type  string
          Value string
        }{Kind: "maximum", Type: "number", Value: maximum}),
      )},
    }),
  }
  array := schemametadata.MetadataArray_create(schemametadata.MetadataArray{
    Tags: [][]schemametadata.IMetadataTypeTag{},
    Type: schemametadata.MetadataArrayType_create(schemametadata.MetadataArrayType{
      Name:      fmt.Sprintf("%s<%s>", props.Name, atomic),
      Value:     value,
      Recursive: false,
      Index:     nil,
      Nullables: []bool{},
    }),
  })
  return f.NewNewExpression(
    f.NewIdentifier(props.Name),
    nil,
    f.NewNodeList(randomProgrammer_decode_array(randomProgrammer_decodeArrayProps{
      Context: props.Context,
      Functor: props.Functor,
      Explore: props.Explore,
      Array:   array,
    })),
  )
}

func randomProgrammer_decode_native_blob(props struct {
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Explore randomProgrammer_IExplore
  Name    string
}) *shimast.Node {
  f := nativecontext.EmitFactoryOf(randomProgrammer_factory, props.Context.Emit)
  return f.NewNewExpression(
    f.NewIdentifier("Blob"),
    nil,
    f.NewNodeList([]*shimast.Node{
      f.NewArrayLiteralExpression(f.NewNodeList([]*shimast.Node{
        randomProgrammer_decode_native_byte_array(struct {
          Context nativecontext.ITypiaContext
          Functor *nativehelpers.FunctionProgrammer
          Explore randomProgrammer_IExplore
          Name    string
        }{Context: props.Context, Functor: props.Functor, Explore: props.Explore, Name: "Uint8Array"}),
      }), true),
    }),
  )
}

func randomProgrammer_decode_native_file(props struct {
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Explore randomProgrammer_IExplore
  Name    string
}) *shimast.Node {
  f := nativecontext.EmitFactoryOf(randomProgrammer_factory, props.Context.Emit)
  return f.NewNewExpression(
    f.NewIdentifier("File"),
    nil,
    f.NewNodeList([]*shimast.Node{
      f.NewArrayLiteralExpression(f.NewNodeList([]*shimast.Node{
        randomProgrammer_decode_native_byte_array(struct {
          Context nativecontext.ITypiaContext
          Functor *nativehelpers.FunctionProgrammer
          Explore randomProgrammer_IExplore
          Name    string
        }{Context: props.Context, Functor: props.Functor, Explore: props.Explore, Name: "Uint8Array"}),
      }), true),
      f.NewTemplateExpression(
        f.NewTemplateHead("", "", shimast.TokenFlagsNone),
        f.NewNodeList([]*shimast.Node{
          f.NewTemplateSpan(
            randomProgrammer_write_ranged_string(props.Context, 1, 8),
            f.NewTemplateMiddle(".", ".", shimast.TokenFlagsNone),
          ),
          f.NewTemplateSpan(
            randomProgrammer_write_ranged_string(props.Context, 3, 3),
            f.NewTemplateTail("", "", shimast.TokenFlagsNone),
          ),
        }),
      ),
    }),
  )
}

func randomProgrammer_decode_native_array_buffer(props struct {
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Explore randomProgrammer_IExplore
  Name    string
}) *shimast.Node {
  f := nativecontext.EmitFactoryOf(randomProgrammer_factory, props.Context.Emit)
  if props.Name == "ArrayBuffer" {
    return nativefactories.IdentifierFactory.Access(
      props.Context.Emit,
      randomProgrammer_decode_native_byte_array(struct {
        Context nativecontext.ITypiaContext
        Functor *nativehelpers.FunctionProgrammer
        Explore randomProgrammer_IExplore
        Name    string
      }{Context: props.Context, Functor: props.Functor, Explore: props.Explore, Name: "Uint8Array"}),
      "buffer",
    )
  }
  length := randomProgrammer_first(randomProgrammer_decode_atomic(randomProgrammer_decodeAtomicProps{
    Context: props.Context,
    Atomic: schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{
      Type: "number",
      Tags: [][]schemametadata.IMetadataTypeTag{nativefactories.MetadataCommentTagFactory.Get(struct {
        Kind  string
        Type  string
        Value string
      }{Kind: "type", Type: "number", Value: "uint32"})},
    }),
  }), props.Context.Emit)
  byteValue := randomProgrammer_first(randomProgrammer_decode_atomic(randomProgrammer_decodeAtomicProps{
    Context: props.Context,
    Atomic: schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{
      Type: "number",
      Tags: [][]schemametadata.IMetadataTypeTag{randomProgrammer_tags([]schemametadata.IMetadataTypeTag{},
        nativefactories.MetadataCommentTagFactory.Get(struct {
          Kind  string
          Type  string
          Value string
        }{Kind: "type", Type: "number", Value: "uint32"}),
        nativefactories.MetadataCommentTagFactory.Get(struct {
          Kind  string
          Type  string
          Value string
        }{Kind: "minimum", Type: "number", Value: "0"}),
        nativefactories.MetadataCommentTagFactory.Get(struct {
          Kind  string
          Type  string
          Value string
        }{Kind: "maximum", Type: "number", Value: "255"}),
      )},
    }),
  }), props.Context.Emit)
  return nativefactories.ExpressionFactory.SelfCall(props.Context.Emit, f.NewBlock(f.NewNodeList([]*shimast.Node{
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "length", Value: length}, props.Context.Emit),
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
      Name: "buffer",
      Value: f.NewNewExpression(
        f.NewIdentifier("SharedArrayBuffer"),
        nil,
        f.NewNodeList([]*shimast.Node{f.NewIdentifier("length")}),
      ),
    }, props.Context.Emit),
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
      Name: "bytes",
      Value: f.NewNewExpression(
        f.NewIdentifier("Uint8Array"),
        nil,
        f.NewNodeList([]*shimast.Node{f.NewIdentifier("buffer")}),
      ),
    }, props.Context.Emit),
    f.NewExpressionStatement(f.NewCallExpression(
      nativefactories.IdentifierFactory.Access(props.Context.Emit, f.NewIdentifier("bytes"), "set"),
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{
        f.NewCallExpression(
          nativefactories.IdentifierFactory.Access(
            props.Context.Emit,
            f.NewCallExpression(
              nativefactories.IdentifierFactory.Access(
                props.Context.Emit,
                f.NewNewExpression(
                  f.NewIdentifier("Array"),
                  nil,
                  f.NewNodeList([]*shimast.Node{f.NewIdentifier("length")}),
                ),
                "fill",
              ),
              nil,
              nil,
              f.NewNodeList([]*shimast.Node{nativefactories.ExpressionFactory.Number(0, props.Context.Emit)}),
              shimast.NodeFlagsNone,
            ),
            "map",
          ),
          nil,
          nil,
          f.NewNodeList([]*shimast.Node{
            f.NewArrowFunction(nil, nil, f.NewNodeList(nil), nil, nil, f.NewToken(shimast.KindEqualsGreaterThanToken), byteValue),
          }),
          shimast.NodeFlagsNone,
        ),
        nativefactories.ExpressionFactory.Number(0, props.Context.Emit),
      }),
      shimast.NodeFlagsNone,
    )),
    f.NewReturnStatement(f.NewIdentifier("buffer")),
  }), true))
}

func randomProgrammer_decode_native_data_view(props struct {
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Explore randomProgrammer_IExplore
  Name    string
}) *shimast.Node {
  f := nativecontext.EmitFactoryOf(randomProgrammer_factory, props.Context.Emit)
  return f.NewNewExpression(
    f.NewIdentifier("DataView"),
    nil,
    f.NewNodeList([]*shimast.Node{
      nativefactories.IdentifierFactory.Access(
        props.Context.Emit,
        randomProgrammer_decode_native_byte_array(struct {
          Context nativecontext.ITypiaContext
          Functor *nativehelpers.FunctionProgrammer
          Explore randomProgrammer_IExplore
          Name    string
        }{Context: props.Context, Functor: props.Functor, Explore: props.Explore, Name: "Uint8Array"}),
        "buffer",
      ),
    }),
  )
}

func randomProgrammer_decode_regexp(context nativecontext.ITypiaContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(randomProgrammer_factory, context.Emit)
  return f.NewNewExpression(
    f.NewIdentifier("RegExp"),
    nil,
    f.NewNodeList([]*shimast.Node{
      f.NewCallExpression(randomProgrammer_coalesce(context, "regex", "randomFormatRegex"), nil, nil, nil, shimast.NodeFlagsNone),
    }),
  )
}

func randomProgrammer_write_ranged_string(context nativecontext.ITypiaContext, minLength int, maxLength int) *shimast.Node {
  return randomProgrammer_first(randomProgrammer_decode_atomic(randomProgrammer_decodeAtomicProps{
    Context: context,
    Atomic: schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{
      Type: "string",
      Tags: [][]schemametadata.IMetadataTypeTag{randomProgrammer_tags([]schemametadata.IMetadataTypeTag{},
        nativefactories.MetadataCommentTagFactory.Get(struct {
          Kind  string
          Type  string
          Value string
        }{Kind: "minLength", Type: "string", Value: fmt.Sprint(minLength)}),
        nativefactories.MetadataCommentTagFactory.Get(struct {
          Kind  string
          Type  string
          Value string
        }{Kind: "maxLength", Type: "string", Value: fmt.Sprint(maxLength)}),
      )},
    }),
  }), context.Emit)
}

func randomProgrammer_coalesce(context nativecontext.ITypiaContext, method string, internal string) *shimast.Node {
  f := nativecontext.EmitFactoryOf(randomProgrammer_factory, context.Emit)
  return nativefactories.ExpressionFactory.Coalesce(
    nativefactories.IdentifierFactory.Access(context.Emit, f.NewIdentifier("_generator"), method, true),
    randomProgrammer_internal(context, internal),
    context.Emit,
  )
}

func randomProgrammer_schema_without_items(schema nativeiterate.JsonSchema, emit *shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(randomProgrammer_factory, emit)
  keys := make([]string, 0, len(schema))
  for key := range schema {
    if key != "items" {
      keys = append(keys, key)
    }
  }
  sort.Strings(keys)
  properties := []*shimast.Node{}
  for _, key := range keys {
    properties = append(properties, f.NewPropertyAssignment(
      nil,
      nativefactories.IdentifierFactory.Identifier(key, emit),
      nil,
      nil,
      nativefactories.LiteralFactory.Write(schema[key], emit),
    ))
  }
  return f.NewObjectLiteralExpression(f.NewNodeList(properties), true)
}

func randomProgrammer_array_schema_list(
  array *schemametadata.MetadataArray,
  components *nativeiterate.OpenApi_IComponents,
  schemaList []nativeiterate.JsonSchema,
) []nativeiterate.JsonSchema {
  if array == nil ||
    array.Type == nil ||
    array.Type.Recursive == false ||
    components == nil ||
    components.Schemas == nil {
    return schemaList
  }
  schema, ok := components.Schemas[array.Type.Name]
  if ok == false || len(schema) == 0 {
    return schemaList
  }
  if oneOf, ok := schema["oneOf"].([]nativeiterate.JsonSchema); ok {
    return oneOf
  }
  return []nativeiterate.JsonSchema{schema}
}

func randomProgrammer_internal(context nativecontext.ITypiaContext, name string) *shimast.Node {
  if importer := context.Importer; importer != nil {
    return importer.Internal(name)
  }
  return nativecontext.EmitFactoryOf(randomProgrammer_factory, context.Emit).NewIdentifier(name)
}

func randomProgrammer_import_type(context nativecontext.ITypiaContext, props nativecontext.ImportProgrammer_TypeProps) *shimast.Node {
  if importer := context.Importer; importer != nil {
    return importer.Type(props)
  }
  f := nativecontext.EmitFactoryOf(randomProgrammer_factory, context.Emit)
  if str, ok := props.Name.(string); ok {
    return f.NewTypeReferenceNode(f.NewIdentifier(str), f.NewNodeList(props.Arguments))
  }
  return props.Name.(*shimast.Node)
}

func randomProgrammer_type_reference(context nativecontext.ITypiaContext, typ *shimchecker.Type, name *string) *shimast.Node {
  f := nativecontext.EmitFactoryOf(randomProgrammer_factory, context.Emit)
  if name != nil {
    return f.NewTypeReferenceNode(f.NewIdentifier(*name), nil)
  }
  return f.NewTypeReferenceNode(f.NewIdentifier(nativefactories.TypeFactory.GetFullName(nativefactories.TypeFactory_GetFullNameProps{
    Checker: context.Checker,
    Type:    typ,
  })), nil)
}

func randomProgrammer_method_text(modulo *shimast.Node) string {
  return nativehelpers.ModuloMethodText(modulo)
}

func randomProgrammer_errors(errors []nativefactories.MetadataFactory_IError) []nativecontext.TransformerError_MetadataFactory_IError {
  output := make([]nativecontext.TransformerError_MetadataFactory_IError, 0, len(errors))
  for _, err := range errors {
    output = append(output, nativecontext.TransformerError_MetadataFactory_IError{
      Name: err.Name,
      Explore: nativecontext.TransformerError_MetadataFactory_IExplore{
        Object:    err.Explore.Object,
        Property:  err.Explore.Property,
        Parameter: err.Explore.Parameter,
        Output:    err.Explore.Output,
      },
      Messages: append([]string{}, err.Messages...),
    })
  }
  return output
}

func randomProgrammer_prefix_object(i int) string {
  return fmt.Sprintf("%s%d", randomProgrammer_PREFIX_OBJECT, i)
}
func randomProgrammer_prefix_array(i int) string {
  return fmt.Sprintf("%s%d", randomProgrammer_PREFIX_ARRAY, i)
}
func randomProgrammer_prefix_tuple(i int) string {
  return fmt.Sprintf("%s%d", randomProgrammer_PREFIX_TUPLE, i)
}

func randomProgrammer_capitalize(str string) string {
  if str == "" {
    return ""
  }
  return strings.ToUpper(str[:1]) + str[1:]
}

func randomProgrammer_format_pascal(format string) string {
  parts := strings.Split(format, "-")
  for i, part := range parts {
    parts[i] = randomProgrammer_capitalize(part)
  }
  return strings.Join(parts, "")
}

func randomProgrammer_format_method(format string) string {
  parts := strings.Split(format, "-")
  for i, part := range parts {
    if i != 0 {
      parts[i] = randomProgrammer_capitalize(part)
    }
  }
  return strings.Join(parts, "")
}

func randomProgrammer_is_typed_array(name string) bool {
  switch name {
  case "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "BigUint64Array",
    "Int8Array", "Int16Array", "Int32Array", "BigInt64Array", "Float32Array", "Float64Array":
    return true
  default:
    return false
  }
}

func randomProgrammer_typed_array_range(name string) (string, string, string) {
  switch name {
  case "Uint8Array", "Uint8ClampedArray":
    return "uint32", "0", "255"
  case "Uint16Array":
    return "uint32", "0", "65535"
  case "Uint32Array":
    return "uint32", "0", "4294967295"
  case "BigUint64Array":
    return "uint64", "0", "18446744073709551615"
  case "Int8Array":
    return "int32", "-128", "127"
  case "Int16Array":
    return "int32", "-32768", "32767"
  case "Int32Array":
    return "int32", "-2147483648", "2147483647"
  case "BigInt64Array":
    return "uint64", "-9223372036854775808", "9223372036854775807"
  case "Float32Array":
    return "float", "-1.175494351e38", "3.4028235e38"
  default:
    return "double", fmt.Sprint(math.SmallestNonzeroFloat64), fmt.Sprint(math.MaxFloat64)
  }
}

func randomProgrammer_tags(base []schemametadata.IMetadataTypeTag, rows ...[]schemametadata.IMetadataTypeTag) []schemametadata.IMetadataTypeTag {
  output := append([]schemametadata.IMetadataTypeTag{}, base...)
  for _, row := range rows {
    output = append(output, row...)
  }
  return output
}

func randomProgrammer_first(list []*shimast.Node, emit *shimprinter.EmitContext) *shimast.Node {
  if len(list) == 0 {
    return nativecontext.EmitFactoryOf(randomProgrammer_factory, emit).NewIdentifier("undefined")
  }
  return list[0]
}
