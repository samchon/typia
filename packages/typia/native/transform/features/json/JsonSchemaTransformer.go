package json

import (
  "fmt"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativejsonprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/json"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  nativetransform "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type jsonSchemaTransformerNamespace struct{}

var JsonSchemaTransformer = jsonSchemaTransformerNamespace{}

func (jsonSchemaTransformerNamespace) Transform(props nativetransform.ITransformProps) *shimast.Node {
  if props.Expression == nil || props.Expression.TypeArguments == nil || len(props.Expression.TypeArguments.Nodes) == 0 {
    panic(nativetransform.NewTransformerError(nativetransform.TransformerError_IProps{
      Code:    "typia.json.schema",
      Message: "no generic argument.",
    }))
  }

  top := props.Expression.TypeArguments.Nodes[0]
  if top == nil {
    return props.Expression.AsNode()
  }

  typ := props.Context.Checker.GetTypeFromTypeNode(top)
  if typ != nil && typ.IsTypeParameter() {
    panic(nativetransform.NewTransformerError(nativetransform.TransformerError_IProps{
      Code:    "typia.json.schema",
      Message: "non-specified generic argument.",
    }))
  }

  var versionNode *shimast.Node
  if len(props.Expression.TypeArguments.Nodes) > 1 {
    versionNode = props.Expression.TypeArguments.Nodes[1]
  }
  version := jsonTransformer_getParameter(jsonTransformer_getParameterProps{
    Checker: props.Context.Checker,
    Code:    "typia.json.schema",
    Name:    "Version",
    Is: func(str string) bool {
      return str == "3.0" || str == "3.1"
    },
    Default: func() string {
      return "3.1"
    },
  })(versionNode)

  analyze := func(validate bool) *schemametadata.MetadataSchema {
    var validator nativefactories.MetadataFactory_Validator
    if validate {
      validator = jsonTransformer_schemasValidator
    }
    result := nativefactories.MetadataFactory.Analyze(nativefactories.MetadataFactory_IProps{
      Checker:     props.Context.Checker,
      Transformer: props.Context.Transformer,
      Options: nativefactories.MetadataFactory_IOptions{
        Absorb:   validate,
        Constant: true,
        Escape:   true,
        Validate: validator,
      },
      Components: schemametadata.NewMetadataCollection(&schemametadata.MetadataCollection_IOptions{
        Replace: schemametadata.MetadataCollection_replace,
      }),
      Type: typ,
    })
    if result.Success == false {
      panic(nativetransform.TransformerError_from(struct {
        Code   string
        Errors []nativetransform.TransformerError_MetadataFactory_IError
      }{
        Code:   "typia.json.schema",
        Errors: jsonTransformer_errors(result.Errors),
      }))
    }
    return result.Data
  }
  analyze(true)

  return nativejsonprogrammers.JsonSchemaProgrammer.Write(nativejsonprogrammers.JsonSchemaProgrammer_IWriteProps{
    Context:  props.Context,
    Version:  version,
    Metadata: analyze(false),
  })
}

type jsonTransformer_getParameterProps struct {
  Checker *shimchecker.Checker
  Code    string
  Name    string
  Is      func(value string) bool
  Default func() string
}

func jsonTransformer_getParameter(props jsonTransformer_getParameterProps) func(node *shimast.Node) string {
  return func(node *shimast.Node) string {
    if node == nil {
      return props.Default()
    }
    typ := props.Checker.GetTypeFromTypeNode(node)
    if typ == nil || (typ.Flags()&shimchecker.TypeFlagsLiteral) == 0 {
      panic(nativetransform.NewTransformerError(nativetransform.TransformerError_IProps{
        Code:    props.Code,
        Message: fmt.Sprintf("generic argument \"%s\" must be constant.", props.Name),
      }))
    }

    value := ""
    if typ.Flags()&shimchecker.TypeFlagsBooleanLiteral != 0 {
      value = props.Checker.TypeToString(typ)
    } else {
      if str, ok := typ.AsLiteralType().Value().(string); ok {
        value = str
      }
    }
    if value == "" || props.Is(value) == false {
      panic(nativetransform.NewTransformerError(nativetransform.TransformerError_IProps{
        Code:    props.Code,
        Message: fmt.Sprintf("invalid value on generic argument \"%s\".", props.Name),
      }))
    }
    return value
  }
}

func jsonTransformer_schemasValidator(props struct {
  Metadata *schemametadata.MetadataSchema
  Explore  nativefactories.MetadataFactory_IExplore
  Top      *schemametadata.MetadataSchema
}) []string {
  return nativejsonprogrammers.JsonSchemasProgrammer.Validate(struct {
    Metadata *schemametadata.MetadataSchema
    Explore  nativefactories.MetadataFactory_IExplore
  }{
    Metadata: props.Metadata,
    Explore:  props.Explore,
  })
}

func jsonTransformer_applicationValidator(props struct {
  Metadata *schemametadata.MetadataSchema
  Explore  nativefactories.MetadataFactory_IExplore
  Top      *schemametadata.MetadataSchema
}) []string {
  return nativejsonprogrammers.JsonApplicationProgrammer.Validate(struct {
    Metadata *schemametadata.MetadataSchema
    Explore  nativefactories.MetadataFactory_IExplore
  }{
    Metadata: props.Metadata,
    Explore:  props.Explore,
  })
}

func jsonTransformer_errors(errors []nativefactories.MetadataFactory_IError) []nativetransform.TransformerError_MetadataFactory_IError {
  output := make([]nativetransform.TransformerError_MetadataFactory_IError, 0, len(errors))
  for _, err := range errors {
    output = append(output, nativetransform.TransformerError_MetadataFactory_IError{
      Name: err.Name,
      Explore: nativetransform.TransformerError_MetadataFactory_IExplore{
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
