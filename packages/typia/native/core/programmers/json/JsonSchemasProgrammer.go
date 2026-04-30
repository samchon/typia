package json

import (
	"fmt"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
	nativeiterate "github.com/samchon/typia/packages/typia/native/core/programmers/iterate"
	nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type jsonSchemasProgrammerNamespace struct{}

var JsonSchemasProgrammer = jsonSchemasProgrammerNamespace{}

type JsonSchemasProgrammer_IWriteProps struct {
	Context   nativecontext.ITypiaContext
	Version   string
	Metadatas []*nativemetadata.MetadataSchema
}

type JsonSchemasProgrammer_IJsonSchemaCollection struct {
	Version    string
	Components *nativeiterate.OpenApi_IComponents
	Schemas    []nativeiterate.JsonSchema
}

func (jsonSchemasProgrammerNamespace) Validate(props struct {
	Metadata *nativemetadata.MetadataSchema
	Explore  nativefactories.MetadataFactory_IExplore
}) []string {
	output := []string{}
	for _, atomic := range props.Metadata.Atomics {
		if atomic.Type == "bigint" {
			output = append(output, "JSON schema does not support bigint type.")
			break
		}
	}
	for _, constant := range props.Metadata.Constants {
		if constant.Type == "bigint" {
			output = append(output, "JSON schema does not support bigint type.")
			break
		}
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
		output = append(output, "JSON schema does not support undefined type in array.")
	}
	if len(props.Metadata.Maps) != 0 {
		output = append(output, "JSON schema does not support Map type.")
	}
	if len(props.Metadata.Sets) != 0 {
		output = append(output, "JSON schema does not support Set type.")
	}
	for _, native := range props.Metadata.Natives {
		if nativehelpers.AtomicPredicator.Native(native.Name) == false &&
			native.Name != "Date" &&
			native.Name != "Blob" &&
			native.Name != "File" {
			output = append(output, "JSON schema does not support "+native.Name+" type.")
		}
	}
	return output
}

func (jsonSchemasProgrammerNamespace) Write(props JsonSchemasProgrammer_IWriteProps) *shimast.Node {
	collection := JsonSchemasProgrammer.WriteSchemas(struct {
		Version   string
		Metadatas []*nativemetadata.MetadataSchema
	}{
		Version:   props.Version,
		Metadatas: props.Metadatas,
	})
	return nativefactories.LiteralFactory.Write(map[string]any{
		"version":    collection.Version,
		"components": collection.Components,
		"schemas":    collection.Schemas,
	})
}

func (jsonSchemasProgrammerNamespace) WriteSchemas(props struct {
	Version   string
	Metadatas []*nativemetadata.MetadataSchema
}) JsonSchemasProgrammer_IJsonSchemaCollection {
	if props.Version == "3.0" {
		return jsonSchemasProgrammer_writeV3_0(props.Metadatas)
	}
	return jsonSchemasProgrammer_writeV3_1(props.Metadatas)
}

func jsonSchemasProgrammer_writeV3_0(metadataList []*nativemetadata.MetadataSchema) JsonSchemasProgrammer_IJsonSchemaCollection {
	collection := jsonSchemasProgrammer_writeV3_1(metadataList)
	return JsonSchemasProgrammer_IJsonSchemaCollection{
		Version:    "3.0",
		Components: collection.Components,
		Schemas:    collection.Schemas,
	}
}

func jsonSchemasProgrammer_writeV3_1(metadataList []*nativemetadata.MetadataSchema) JsonSchemasProgrammer_IJsonSchemaCollection {
	components := &nativeiterate.OpenApi_IComponents{
		Schemas: map[string]nativeiterate.JsonSchema{},
	}
	generator := func(metadata *nativemetadata.MetadataSchema) nativeiterate.JsonSchema {
		return nativeiterate.Json_schema_station(nativeiterate.Json_schema_station_props{
			BlockNever: true,
			Components: components,
			Attribute:  nativeiterate.JsonSchema{},
			Metadata:   metadata,
		})
	}
	schemas := make([]nativeiterate.JsonSchema, 0, len(metadataList))
	for i, meta := range metadataList {
		schema := generator(meta)
		if schema == nil {
			panic(nativecontext.NewTransformerError(nativecontext.TransformerError_IProps{
				Code:    "typia.json.schemas",
				Message: fmt.Sprintf("invalid type on argument - (%s, %d)", meta.GetName(), i),
			}))
		}
		schemas = append(schemas, schema)
	}
	return JsonSchemasProgrammer_IJsonSchemaCollection{
		Version:    "3.1",
		Components: components,
		Schemas:    schemas,
	}
}
