package json

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativejsonprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/json"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  nativetransform "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type jsonApplicationTransformerNamespace struct{}

var JsonApplicationTransformer = jsonApplicationTransformerNamespace{}

func (jsonApplicationTransformerNamespace) Transform(props nativetransform.ITransformProps) *shimast.Node {
  if props.Expression == nil || props.Expression.TypeArguments == nil || len(props.Expression.TypeArguments.Nodes) == 0 {
    panic(nativetransform.NewTransformerError(nativetransform.TransformerError_IProps{
      Code:    "typia.json.application",
      Message: "no generic argument.",
    }))
  }

  top := props.Expression.TypeArguments.Nodes[0]
  if top == nil {
    return props.Expression.AsNode()
  }

  var versionNode *shimast.Node
  if len(props.Expression.TypeArguments.Nodes) > 1 {
    versionNode = props.Expression.TypeArguments.Nodes[1]
  }
  version := jsonTransformer_getParameter(jsonTransformer_getParameterProps{
    Checker: props.Context.Checker,
    Code:    "typia.json.application",
    Name:    "Version",
    Is: func(str string) bool {
      return str == "3.0" || str == "3.1"
    },
    Default: func() string {
      return "3.1"
    },
  })(versionNode)

  typ := props.Context.Checker.GetTypeFromTypeNode(top)
  collection := schemametadata.NewMetadataCollection(&schemametadata.MetadataCollection_IOptions{
    Replace: schemametadata.MetadataCollection_replace,
  })
  result := nativefactories.MetadataFactory.Analyze(nativefactories.MetadataFactory_IProps{
    Checker:     props.Context.Checker,
    Transformer: props.Context.Transformer,
    Options: nativefactories.MetadataFactory_IOptions{
      Escape:     true,
      Constant:   true,
      Absorb:     false,
      Functional: true,
      Validate:   jsonTransformer_applicationValidator,
    },
    Components: collection,
    Type:       typ,
  })
  if result.Success == false {
    panic(nativetransform.TransformerError_from(struct {
      Code   string
      Errors []nativetransform.TransformerError_MetadataFactory_IError
    }{
      Code:   "typia.json.application",
      Errors: jsonTransformer_errors(result.Errors),
    }))
  }

  return nativejsonprogrammers.JsonApplicationProgrammer.Write(nativejsonprogrammers.JsonApplicationProgrammer_IWriteProps{
    Context:  props.Context,
    Version:  version,
    Metadata: result.Data,
  })
}
