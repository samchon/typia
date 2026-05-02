package llm

import (
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
  nativeiterate "github.com/samchon/typia/packages/typia/native/core/programmers/iterate"
  nativejson "github.com/samchon/typia/packages/typia/native/core/programmers/json"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type llmParametersProgrammerNamespace struct{}

var LlmParametersProgrammer = llmParametersProgrammerNamespace{}

type LlmParametersProgrammer_IProps struct {
  Context nativecontext.ITypiaContext
  Modulo  *shimast.Node
  Type    any
  Name    *string
  Init    *shimast.Node
  Config  map[string]any
}

type LlmParametersProgrammer_IWriteProps struct {
  Context  nativecontext.ITypiaContext
  Metadata *schemametadata.MetadataSchema
  Config   map[string]any
}

var llmParametersProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (llmParametersProgrammerNamespace) Write(props LlmParametersProgrammer_IWriteProps) *shimast.Node {
  typeNode := llmProgrammer_import_type(props.Context, nativeprogrammers.ImportProgrammer_TypeProps{
    File: "typia",
    Name: llmParametersProgrammer_factory.NewIdentifier("ILlmSchema.IParameters"),
  })
  return llmParametersProgrammer_factory.NewAsExpression(
    llmParametersProgrammer_factory.NewSatisfiesExpression(LlmParametersProgrammer.WriteParametersExpression(props), typeNode),
    typeNode,
  )
}

func (llmParametersProgrammerNamespace) WriteParametersExpression(props LlmParametersProgrammer_IWriteProps) *shimast.Node {
  return nativefactories.LiteralFactory.Write(LlmParametersProgrammer.WriteParameters(struct {
    Metadata *schemametadata.MetadataSchema
    Config   map[string]any
  }{
    Metadata: props.Metadata,
    Config:   props.Config,
  }))
}

func (llmParametersProgrammerNamespace) WriteParameters(props struct {
  Metadata *schemametadata.MetadataSchema
  Config   map[string]any
}) map[string]any {
  collection := nativejson.JsonSchemasProgrammer.WriteSchemas(struct {
    Version   string
    Metadatas []*schemametadata.MetadataSchema
  }{
    Version:   "3.1",
    Metadatas: []*schemametadata.MetadataSchema{props.Metadata},
  })
  if len(collection.Schemas) == 0 {
    return map[string]any{"type": "object", "properties": map[string]any{}, "required": []any{}}
  }
  schema := collection.Schemas[0]
  if typ, ok := schema["type"].(string); ok && typ == "object" {
    return llmParametersProgrammer_convert_parameters(schema, collection.Components, props.Config)
  }
  if ref, ok := schema["$ref"].(string); ok {
    name := ref[strings.LastIndex(ref, "/")+1:]
    if collection.Components != nil && collection.Components.Schemas != nil {
      if target, found := collection.Components.Schemas[name]; found {
        if typ, ok := target["type"].(string); ok && typ == "object" {
          return llmParametersProgrammer_convert_parameters(target, collection.Components, props.Config)
        }
      }
    }
  }
  panic("Unreachable code. Failed to find the object schema.")
}

func (llmParametersProgrammerNamespace) Validate(props struct {
  Config   map[string]any
  Metadata *schemametadata.MetadataSchema
  Explore  nativefactories.MetadataFactory_IExplore
}) []string {
  output := []string{}
  if props.Explore.Top == true {
    if len(props.Metadata.Objects) == 0 {
      output = append(output, "LLM parameters must be an object type.")
    } else if len(props.Metadata.Objects) != 1 || props.Metadata.Size() > 1 {
      output = append(output, "LLM parameters must be a single object type.")
    } else {
      for _, property := range props.Metadata.Objects[0].Type.Properties {
        if property.Key.IsSoleLiteral() == false {
          output = append(output, "LLM parameters must not have dynamic keys.")
          break
        }
      }
      if props.Metadata.Nullable {
        output = append(output, "LLM parameters must be a non-nullable object type.")
      }
      if props.Metadata.IsRequired() == false {
        output = append(output, "LLM parameters must be a non-undefined object type.")
      }
    }
  }
  output = append(output, LlmSchemaProgrammer.Validate(struct {
    Config   map[string]any
    Metadata *schemametadata.MetadataSchema
    Explore  nativefactories.MetadataFactory_IExplore
  }{Config: props.Config, Metadata: props.Metadata, Explore: props.Explore})...)
  return output
}

func llmParametersProgrammer_convert_parameters(schema nativeiterate.JsonSchema, components *nativeiterate.OpenApi_IComponents, config map[string]any) map[string]any {
  defs := map[string]any{}
  target := llmParametersProgrammer_dereference_schema(schema, components)
  output := llmSchemaProgrammer_convert_schema_config(target, components, defs, config)
  output["additionalProperties"] = false
  output["$defs"] = defs
  return output
}

func llmParametersProgrammer_dereference_schema(schema nativeiterate.JsonSchema, components *nativeiterate.OpenApi_IComponents) nativeiterate.JsonSchema {
  ref, ok := schema["$ref"].(string)
  if ok == false || components == nil || components.Schemas == nil {
    return schema
  }
  name := ref[strings.LastIndex(ref, "/")+1:]
  if target, found := components.Schemas[name]; found {
    return target
  }
  return schema
}
