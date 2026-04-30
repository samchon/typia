package json

import (
	"strings"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativeiterate "github.com/samchon/typia/packages/typia/native/core/programmers/iterate"
	nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type jsonSchemaProgrammerNamespace struct{}

var JsonSchemaProgrammer = jsonSchemaProgrammerNamespace{}

type JsonSchemaProgrammer_IWriteProps struct {
	Context  nativecontext.ITypiaContext
	Version  string
	Metadata *nativemetadata.MetadataSchema
}

type JsonSchemaProgrammer_IJsonSchemaUnit struct {
	Version    string
	Components *nativeiterate.OpenApi_IComponents
	Schema     nativeiterate.JsonSchema
}

func (jsonSchemaProgrammerNamespace) Validate(props struct {
	Metadata *nativemetadata.MetadataSchema
	Explore  nativefactories.MetadataFactory_IExplore
}) []string {
	return JsonSchemasProgrammer.Validate(props)
}

func (jsonSchemaProgrammerNamespace) Write(props JsonSchemaProgrammer_IWriteProps) *shimast.Node {
	schema := JsonSchemaProgrammer.WriteSchema(struct {
		Version  string
		Metadata *nativemetadata.MetadataSchema
	}{
		Version:  props.Version,
		Metadata: props.Metadata,
	})
	return nativefactories.LiteralFactory.Write(map[string]any{
		"version":    schema.Version,
		"components": schema.Components,
		"schema":     schema.Schema,
	})
}

func (jsonSchemaProgrammerNamespace) WriteSchema(props struct {
	Version  string
	Metadata *nativemetadata.MetadataSchema
}) JsonSchemaProgrammer_IJsonSchemaUnit {
	collection := JsonSchemasProgrammer.WriteSchemas(struct {
		Version   string
		Metadatas []*nativemetadata.MetadataSchema
	}{
		Version:   props.Version,
		Metadatas: []*nativemetadata.MetadataSchema{props.Metadata},
	})
	var schema nativeiterate.JsonSchema
	if len(collection.Schemas) != 0 {
		schema = jsonSchemaProgrammer_dereference_root(collection.Schemas[0], collection.Components)
	}
	return JsonSchemaProgrammer_IJsonSchemaUnit{
		Version:    collection.Version,
		Components: collection.Components,
		Schema:     schema,
	}
}

func jsonSchemaProgrammer_dereference_root(schema nativeiterate.JsonSchema, components *nativeiterate.OpenApi_IComponents) nativeiterate.JsonSchema {
	if schema == nil || components == nil || components.Schemas == nil {
		return schema
	}
	ref, ok := schema["$ref"].(string)
	if ok == false {
		return schema
	}
	const prefix = "#/components/schemas/"
	if strings.HasPrefix(ref, prefix) == false {
		return schema
	}
	target, ok := components.Schemas[strings.TrimPrefix(ref, prefix)]
	if ok == false {
		return schema
	}
	output := nativeiterate.JsonSchema{}
	for key, value := range target {
		output[key] = value
	}
	return output
}
