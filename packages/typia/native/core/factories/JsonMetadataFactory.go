package factories

import (
  nativechecker "github.com/microsoft/typescript-go/shim/checker"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type jsonMetadataFactoryNamespace struct{}

var JsonMetadataFactory = jsonMetadataFactoryNamespace{}

// JsonMetadataFactory_IProps describes one JSON analysis: the typia method name
// for diagnostics, the checker and type, and a validator of the metadata.
//
// @evidence contracts/common.md#principled-implementation A JSON analysis needs the method name for diagnostic codes, the checker and type to analyze and a validator that adds the call-specific rules to the shared JSON validation.
// @evidence contracts/common.md#clear-and-simple-design A four-field argument record for Analyze.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states what each field is for.
type JsonMetadataFactory_IProps struct {
  // Method identifies the invoking typia API in transformation diagnostics.
  Method string

  // Checker resolves the Type within the current compiler program.
  Checker *nativechecker.Checker

  // Type is the root TypeScript type to analyze for JSON representation.
  Type *nativechecker.Type

  // Validate adds consumer-specific checks after the shared JSON checks.
  // Nil adds no checks.
  Validate MetadataFactory_Validator
}

// JsonMetadataFactory_IOutput is the analyzed metadata and the collection of
// named types it refers to.
//
// @evidence contracts/common.md#principled-implementation The analysis returns both the root schema and the collection of named types that it refers to, because the schema refers to components by name.
// @evidence contracts/common.md#clear-and-simple-design A two-field result record.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states both parts.
type JsonMetadataFactory_IOutput struct {
  // Collection owns named components referenced by Metadata.
  Collection *schemametadata.MetadataCollection

  // Metadata is the validated root schema, sharing its named components.
  Metadata *schemametadata.MetadataSchema
}

func (jsonMetadataFactoryNamespace) Analyze(props JsonMetadataFactory_IProps) JsonMetadataFactory_IOutput {
  collection := schemametadata.NewMetadataCollection()
  validate := func(next struct {
    Metadata *schemametadata.MetadataSchema
    Explore  MetadataFactory_IExplore
    Top      *schemametadata.MetadataSchema
  }) []string {
    errors := JsonMetadataFactory.Validate(struct {
      Metadata *schemametadata.MetadataSchema
      Explore  MetadataFactory_IExplore
    }{
      Metadata: next.Metadata,
      Explore:  next.Explore,
    })
    if props.Validate != nil {
      errors = append(errors, props.Validate(next)...)
    }
    return errors
  }
  result := MetadataFactory.Analyze(MetadataFactory_IProps{
    Checker: props.Checker,
    Options: MetadataFactory_IOptions{
      Absorb:   true,
      Escape:   true,
      Constant: true,
      Validate: validate,
    },
    Components: collection,
    Type:       props.Type,
  })
  if result.Success == false {
    panic(nativecontext.TransformerError_from(struct {
      Code   string
      Errors []nativecontext.TransformerError_MetadataFactory_IError
    }{
      Code:   props.Method,
      Errors: jsonMetadataFactory_errors(result.Errors),
    }))
  }
  return JsonMetadataFactory_IOutput{
    Collection: collection,
    Metadata:   result.Data,
  }
}

func (jsonMetadataFactoryNamespace) Validate(props struct {
  Metadata *schemametadata.MetadataSchema
  Explore  MetadataFactory_IExplore
}) []string {
  output := []string{}
  if schemametadata.MetadataSchema_hasBigint(props.Metadata) {
    output = append(output, "JSON does not support bigint type.")
  }
  tupleInvalid := false
  for _, tuple := range props.Metadata.Tuples {
    for _, element := range tuple.Type.Elements {
      if element.IsRequired() == false {
        tupleInvalid = true
        break
      }
    }
    if tupleInvalid {
      break
    }
  }
  arrayInvalid := false
  for _, array := range props.Metadata.Arrays {
    if array.Type.Value.IsRequired() == false {
      arrayInvalid = true
      break
    }
  }
  if tupleInvalid || arrayInvalid {
    output = append(output, "JSON does not support undefined type in array.")
  }
  if len(props.Metadata.Maps) != 0 {
    output = append(output, "JSON does not support Map type.")
  }
  if len(props.Metadata.Sets) != 0 {
    output = append(output, "JSON does not support Set type.")
  }
  for _, native := range props.Metadata.Natives {
    if native.Name == "BigInt" {
      continue
    }
    if jsonMetadataFactory_atomic_predicator_native(native.Name) == false && native.Name != "Date" {
      output = append(output, "JSON does not support "+native.Name+" type.")
    }
  }
  return output
}

func jsonMetadataFactory_atomic_predicator_native(name string) bool {
  _, ok := jsonMetadataFactory_atomic_like[jsonMetadataFactory_lower(name)]
  return ok
}

var jsonMetadataFactory_atomic_like = map[string]struct{}{
  "boolean": {},
  "bigint":  {},
  "number":  {},
  "string":  {},
}

func jsonMetadataFactory_lower(str string) string {
  output := []byte(str)
  for i, ch := range output {
    if 'A' <= ch && ch <= 'Z' {
      output[i] = ch + ('a' - 'A')
    }
  }
  return string(output)
}

func jsonMetadataFactory_errors(errors []MetadataFactory_IError) []nativecontext.TransformerError_MetadataFactory_IError {
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
      Messages: err.Messages,
    })
  }
  return output
}
