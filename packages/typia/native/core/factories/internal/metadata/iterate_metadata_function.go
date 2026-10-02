package metadata

import (
  nativeast "github.com/microsoft/typescript-go/shim/ast"
  nativechecker "github.com/microsoft/typescript-go/shim/checker"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  nativeutils "github.com/samchon/typia/packages/typia/native/core/utils"
)

// Iterate_metadata_function records callable value identity or the selected
// signature's parameter and return metadata, according to Functional.
// Argument omission belongs to the selected formal declaration, independently
// of the variable's narrowed type inside its body.
//
// @evidence contracts/common.md#principled-implementation The checker supplies the existing first callable signature and inferred return type; the global Promise resolver separates asynchronous output. Selected parameter declarations supply question/default omission even when any/unknown erase undefined unions, and independent roots preserve required neighbors in the exploration cache.
// @evidence contracts/common.md#clear-and-simple-design Function recognition, signature analysis and output exploration remain in one iterator; declaration lookup avoids receiver indexing and implementation-only overload defaults. WithOptional owns root isolation and derived-name invalidation, while Explore_metadata owns shared type exploration.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The omission decision follows native selected declarations without rewriting foreign symbols, disabling type caches or recognizing fixture names. Nonfunctional analysis retains its callable marker; the existing first-signature policy is not expanded into overload enumeration.
// @evidence contracts/common.md#meaningful-documentation The native comment distinguishes callable identity from full signature analysis and explains why argument omission differs from the local variable type. The receiver/overload comment states the declaration-identity constraint at its use.
func Iterate_metadata_function(props IMetadataIteratorProps) bool {
  declaration := metadata_get_function_node(props.Checker, props.Type)
  if declaration == nil {
    return false
  }
  if props.Options.Functional == false {
    if len(props.Metadata.Functions) == 0 {
      props.Metadata.Functions = append(props.Metadata.Functions, schemametadata.MetadataFunction_create(schemametadata.MetadataFunction{
        Parameters: []*schemametadata.MetadataParameter{},
        Output:     schemametadata.MetadataSchema_initialize(),
        Async:      false,
      }))
    }
    return true
  }

  signatures := []*nativechecker.Signature{}
  if props.Checker != nil {
    signatures = props.Checker.GetSignaturesOfType(props.Type, nativechecker.SignatureKindCall)
  }
  if len(signatures) == 0 || signatures[0].Declaration() == nil {
    props.Metadata.Functions = append(props.Metadata.Functions, schemametadata.MetadataFunction_create(schemametadata.MetadataFunction{
      Parameters: []*schemametadata.MetadataParameter{},
      Output:     schemametadata.MetadataSchema_initialize(),
      Async:      false,
    }))
    return true
  }

  signature := signatures[0]
  returnType := props.Checker.GetReturnTypeOfSignature(signature)
  promised := nativeutils.PromiseTypeFactory.Resolve(props.Checker, returnType)
  returnType = promised.Type

  parameters := make([]*schemametadata.MetadataParameter, 0, len(signature.Parameters()))
  for _, p := range signature.Parameters() {
    paramType := props.Checker.GetTypeOfSymbol(p)
    explore := props.Explore
    explore.Top = false
    explore.Parameter = p.Name
    metadata := Explore_metadata(Explore_metadata_IProps{
      Options:     props.Options,
      Checker:     props.Checker,
      Components:  props.Components,
      Errors:      props.Errors,
      Type:        paramType,
      Explore:     explore,
      Intersected: false,
    })
    // Read the selected signature, not an overload implementation or a
    // contextual arrow's body. Symbol declarations also avoid indexing past
    // an explicit `this` parameter, which is absent from signature.Parameters.
    for _, node := range metadata_node_declarations(p) {
      if node.Kind == nativeast.KindParameter && node.Parent == signature.Declaration() {
        parameter := node.AsParameterDeclaration()
        if parameter.QuestionToken != nil || parameter.Initializer != nil {
          metadata = metadata.WithOptional(true)
        }
        break
      }
    }
    parameters = append(parameters, schemametadata.MetadataParameter_create(schemametadata.MetadataParameter{
      Name:        p.Name,
      Type:        metadata,
      TsType:      paramType,
      Description: metadata_node_description(p),
      JsDocTags:   metadata_node_js_doc_tags(p),
    }))
  }

  outputExplore := props.Explore
  outputExplore.Top = false
  outputExplore.Output = true
  outputOptions := props.Options
  outputOptions.Functional = false
  output := Explore_metadata(Explore_metadata_IProps{
    Options:     outputOptions,
    Checker:     props.Checker,
    Components:  props.Components,
    Errors:      props.Errors,
    Type:        returnType,
    Explore:     outputExplore,
    Intersected: false,
  })
  props.Metadata.Functions = append(props.Metadata.Functions, schemametadata.MetadataFunction_create(schemametadata.MetadataFunction{
    Parameters: parameters,
    Output:     output,
    Async:      promised.Async,
  }))
  return true
}
