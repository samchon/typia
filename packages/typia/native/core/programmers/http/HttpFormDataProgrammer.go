package http

import (
  "fmt"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type httpFormDataProgrammerNamespace struct{}

var HttpFormDataProgrammer = httpFormDataProgrammerNamespace{}

type HttpFormDataProgrammer_DecomposeProps struct {
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Type    *shimchecker.Type
  Name    *string
}

var httpFormDataProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (httpFormDataProgrammerNamespace) Decompose(props HttpFormDataProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  f := nativecontext.EmitFactoryOf(httpFormDataProgrammer_factory, props.Context.Emit)
  collection := schemametadata.NewMetadataCollection()
  result := nativefactories.MetadataFactory.Analyze(nativefactories.MetadataFactory_IProps{
    Checker: props.Context.Checker,
    Options: nativefactories.MetadataFactory_IOptions{
      Escape:   false,
      Constant: true,
      Absorb:   true,
      Validate: HttpFormDataProgrammer.Validate,
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
      Errors: httpParameterProgrammer_errors(result.Errors),
    }))
  }

  object := result.Data.Objects[0].Type
  statements := httpFormDataProgrammer_decode_object(struct {
    Context nativecontext.ITypiaContext
    Object  *schemametadata.MetadataObjectType
  }{
    Context: props.Context,
    Object:  object,
  })
  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions:  map[string]*shimast.Node{},
    Statements: []*shimast.Node{},
    Arrow: f.NewArrowFunction(
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{
        nativefactories.IdentifierFactory.Parameter(
          "input",
          f.NewTypeReferenceNode(f.NewIdentifier("FormData"), nil),
          nil,
          props.Context.Emit,
        ),
      }),
      httpProgrammer_import_type(props.Context, nativecontext.ImportProgrammer_TypeProps{
        File: "typia",
        Name: "Resolved",
        Arguments: []*shimast.TypeNode{
          httpProgrammer_typeReference(props.Context, props.Type, props.Name),
        },
      }),
      nil,
      f.NewToken(shimast.KindEqualsGreaterThanToken),
      f.NewBlock(f.NewNodeList(statements), true),
    ),
  }
}

func (httpFormDataProgrammerNamespace) Write(props nativecontext.IProgrammerProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(httpProgrammer_method_text(props.Modulo), props.Context.Emit)
  result := HttpFormDataProgrammer.Decompose(HttpFormDataProgrammer_DecomposeProps{
    Context: props.Context,
    Functor: functor,
    Type:    props.Type,
    Name:    props.Name,
  })
  return nativeinternal.FeatureProgrammer.WriteDecomposed(nativeinternal.FeatureProgrammer_WriteDecomposedProps{
    Modulo:  props.Modulo,
    Functor: functor,
    Result:  result,
  })
}

func (httpFormDataProgrammerNamespace) Validate(props struct {
  Metadata *schemametadata.MetadataSchema
  Explore  nativefactories.MetadataFactory_IExplore
  Top      *schemametadata.MetadataSchema
}) []string {
  errors := []string{}
  insert := func(msg string) {
    errors = append(errors, msg)
  }

  if props.Explore.Top == true {
    if len(props.Metadata.Objects) != 1 || props.Metadata.Bucket() != 1 {
      insert("only one object type is allowed.")
    }
    if props.Metadata.Nullable == true {
      insert("formdata parameters cannot be null.")
    }
    if props.Metadata.IsRequired() == false {
      insert("formdata parameters cannot be undefined.")
    }
  } else if _, ok := props.Explore.Nested.(*schemametadata.MetadataArrayType); props.Explore.Nested != nil && ok {
    atomics := nativehelpers.HttpMetadataUtil.Atomics(props.Metadata)
    expected := len(props.Metadata.Atomics) + len(props.Metadata.Templates)
    for _, c := range props.Metadata.Constants {
      expected += len(c.Values)
    }
    for _, native := range props.Metadata.Natives {
      if native.Name == "Blob" || native.Name == "File" {
        expected++
      }
    }
    if len(atomics) > 1 {
      insert("union type is not allowed in array.")
    }
    if props.Metadata.Size() != expected {
      insert("only atomic, constant or blob (file) types are allowed in array.")
    }
  } else if props.Explore.Object != nil && props.Explore.Property != nil {
    if _, ok := props.Explore.Property.(string); ok == false {
      insert("dynamic property is not allowed.")
    }
    if len(props.Metadata.Tuples) != 0 {
      insert("tuple type is not allowed.")
    }
    if nativehelpers.HttpMetadataUtil.IsUnion(props.Metadata) {
      insert("union type is not allowed.")
    }
    foreignNatives := 0
    for _, native := range props.Metadata.Natives {
      if native.Name != "Blob" && native.Name != "File" {
        foreignNatives++
      }
    }
    if len(props.Metadata.Objects) != 0 ||
      len(props.Metadata.Sets) != 0 ||
      len(props.Metadata.Maps) != 0 ||
      foreignNatives != 0 {
      insert("nested object type is not allowed.")
    }
  }
  return errors
}

func httpFormDataProgrammer_decode_object(props struct {
  Context nativecontext.ITypiaContext
  Object  *schemametadata.MetadataObjectType
}) []*shimast.Node {
  f := nativecontext.EmitFactoryOf(httpFormDataProgrammer_factory, props.Context.Emit)
  output := f.NewIdentifier("output")
  properties := make([]*shimast.Node, 0, len(props.Object.Properties))
  for _, p := range props.Object.Properties {
    properties = append(properties, httpFormDataProgrammer_decode_regular_property(struct {
      Context  nativecontext.ITypiaContext
      Property *schemametadata.MetadataProperty
    }{
      Context:  props.Context,
      Property: p,
    }))
  }
  return []*shimast.Node{
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
      Name: "output",
      Value: f.NewObjectLiteralExpression(
        f.NewNodeList(properties),
        true,
      ),
    }, props.Context.Emit),
    f.NewReturnStatement(
      f.NewAsExpression(output, nativefactories.TypeFactory.Keyword("any", props.Context.Emit)),
    ),
  }
}

func httpFormDataProgrammer_decode_regular_property(props struct {
  Context  nativecontext.ITypiaContext
  Property *schemametadata.MetadataProperty
}) *shimast.Node {
  f := nativecontext.EmitFactoryOf(httpFormDataProgrammer_factory, props.Context.Emit)
  key := httpProgrammer_property_key(props.Property)
  value := props.Property.Value
  typ, isArray := httpProgrammer_decode_type(value, true)
  input := f.NewCallExpression(
    nativefactories.IdentifierFactory.Access(f.NewIdentifier("input"), "get"),
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{
      f.NewStringLiteral(key, shimast.TokenFlagsNone),
    }),
    shimast.NodeFlagsNone,
  )
  if isArray {
    input = f.NewCallExpression(
      nativefactories.IdentifierFactory.Access(
        f.NewCallExpression(
          nativefactories.IdentifierFactory.Access(f.NewIdentifier("input"), "getAll"),
          nil,
          nil,
          f.NewNodeList([]*shimast.Node{
            f.NewStringLiteral(key, shimast.TokenFlagsNone),
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
            nativefactories.IdentifierFactory.Parameter("elem", nil, nil, props.Context.Emit),
          }),
          nil,
          nil,
          f.NewToken(shimast.KindEqualsGreaterThanToken),
          httpFormDataProgrammer_decode_value(struct {
            Context  nativecontext.ITypiaContext
            Type     string
            Coalesce bool
            Input    *shimast.Node
          }{
            Context:  props.Context,
            Type:     typ,
            Coalesce: false,
            Input:    f.NewIdentifier("elem"),
          }),
        ),
      }),
      shimast.NodeFlagsNone,
    )
    input = httpFormDataProgrammer_decode_array(struct {
      Context  nativecontext.ITypiaContext
      Metadata *schemametadata.MetadataSchema
      Input    *shimast.Node
    }{
      Context:  props.Context,
      Metadata: value,
      Input:    input,
    })
  } else {
    input = httpFormDataProgrammer_decode_value(struct {
      Context  nativecontext.ITypiaContext
      Type     string
      Coalesce bool
      Input    *shimast.Node
    }{
      Context:  props.Context,
      Type:     typ,
      Coalesce: value.Nullable == false && value.IsRequired() == false,
      Input:    input,
    })
  }
  return f.NewPropertyAssignment(
    nil,
    nativefactories.IdentifierFactory.Identifier(key, props.Context.Emit),
    nil,
    nil,
    input,
  )
}

func httpFormDataProgrammer_decode_value(props struct {
  Context  nativecontext.ITypiaContext
  Type     string
  Coalesce bool
  Input    *shimast.Node
}) *shimast.Node {
  f := nativecontext.EmitFactoryOf(httpFormDataProgrammer_factory, props.Context.Emit)
  call := f.NewCallExpression(
    httpParameterProgrammer_internal(props.Context, "httpFormDataRead"+httpParameterProgrammer_capitalize(props.Type)),
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{props.Input}),
    shimast.NodeFlagsNone,
  )
  if props.Coalesce == false {
    return call
  }
  return f.NewBinaryExpression(
    nil,
    call,
    nil,
    f.NewToken(shimast.KindQuestionQuestionToken),
    f.NewIdentifier("undefined"),
  )
}

func httpFormDataProgrammer_decode_array(props struct {
  Context  nativecontext.ITypiaContext
  Metadata *schemametadata.MetadataSchema
  Input    *shimast.Node
}) *shimast.Node {
  f := nativecontext.EmitFactoryOf(httpFormDataProgrammer_factory, props.Context.Emit)
  if props.Metadata.Nullable == false && props.Metadata.IsRequired() == true {
    return props.Input
  }
  fallback := f.NewIdentifier("undefined")
  if props.Metadata.Nullable {
    fallback = f.NewKeywordExpression(shimast.KindNullKeyword)
  }
  return f.NewCallExpression(
    httpParameterProgrammer_internal(props.Context, "httpFormDataReadArray"),
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{
      props.Input,
      fallback,
    }),
    shimast.NodeFlagsNone,
  )
}

func httpProgrammer_method_text(modulo *shimast.Node) string {
  return nativehelpers.ModuloMethodText(modulo)
}

func httpProgrammer_import_type(context nativecontext.ITypiaContext, props nativecontext.ImportProgrammer_TypeProps) *shimast.Node {
  if importer := context.Importer; importer != nil {
    return importer.Type(props)
  }
  f := nativecontext.EmitFactoryOf(httpFormDataProgrammer_factory, context.Emit)
  if str, ok := props.Name.(string); ok {
    return f.NewTypeReferenceNode(
      f.NewIdentifier(str),
      f.NewNodeList(props.Arguments),
    )
  }
  return props.Name.(*shimast.Node)
}

func httpProgrammer_typeReference(context nativecontext.ITypiaContext, typ *shimchecker.Type, name *string) *shimast.Node {
  f := nativecontext.EmitFactoryOf(httpFormDataProgrammer_factory, context.Emit)
  if name != nil {
    return f.NewTypeReferenceNode(f.NewIdentifier(*name), nil)
  }
  return f.NewTypeReferenceNode(f.NewIdentifier(nativefactories.TypeFactory.GetFullName(nativefactories.TypeFactory_GetFullNameProps{
    Checker: context.Checker,
    Type:    typ,
  })), nil)
}

func httpProgrammer_property_key(property *schemametadata.MetadataProperty) string {
  if property == nil || property.Key == nil {
    return ""
  }
  if key := property.Key.GetSoleLiteral(); key != nil {
    return *key
  }
  return ""
}

func httpProgrammer_decode_type(value *schemametadata.MetadataSchema, blob bool) (string, bool) {
  return httpProgrammer_decode_type_from_metadata(value, blob, false)
}

func httpProgrammer_decode_type_from_metadata(value *schemametadata.MetadataSchema, blob bool, array bool) (string, bool) {
  if value == nil {
    return "string", array
  }
  if len(value.Atomics) != 0 {
    return value.Atomics[0].Type, array
  }
  if len(value.Constants) != 0 {
    return value.Constants[0].Type, array
  }
  if len(value.Templates) != 0 {
    return "string", array
  }
  if blob {
    for _, native := range value.Natives {
      if native.Name == "Blob" {
        return "blob", array
      }
    }
    for _, native := range value.Natives {
      if native.Name == "File" {
        return "file", array
      }
    }
  }
  if len(value.Arrays) != 0 {
    return httpProgrammer_decode_type_from_metadata(value.Arrays[0].Type.Value, blob, true)
  }
  if len(value.Tuples) != 0 && len(value.Tuples[0].Type.Elements) != 0 {
    return httpProgrammer_decode_type_from_metadata(value.Tuples[0].Type.Elements[0], blob, true)
  }
  return "string", array
}

func httpProgrammer_debug(value any) string {
  return fmt.Sprint(value)
}
