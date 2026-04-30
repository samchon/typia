package llm

import (
	"fmt"
	"strings"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
	nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
	nativeiterate "github.com/samchon/typia/packages/typia/native/core/programmers/iterate"
	nativejson "github.com/samchon/typia/packages/typia/native/core/programmers/json"
	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type llmSchemaProgrammerNamespace struct{}

var LlmSchemaProgrammer = llmSchemaProgrammerNamespace{}

type LlmSchemaProgrammer_IProps struct {
	Context nativecontext.ITypiaContext
	Modulo  *shimast.Node
	Type    any
	Name    *string
	Init    *shimast.Node
	Config  map[string]any
}

type LlmSchemaProgrammer_IOutput struct {
	Schema map[string]any
	Defs   map[string]any
}

type LlmSchemaProgrammer_IWriteProps struct {
	Context  nativecontext.ITypiaContext
	Metadata *schemametadata.MetadataSchema
	Config   map[string]any
}

var llmSchemaProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (llmSchemaProgrammerNamespace) Write(props LlmSchemaProgrammer_IWriteProps) *shimast.Node {
	collection := nativejson.JsonSchemasProgrammer.WriteSchemas(struct {
		Version   string
		Metadatas []*schemametadata.MetadataSchema
	}{
		Version:   "3.1",
		Metadatas: []*schemametadata.MetadataSchema{props.Metadata},
	})
	output := LlmSchemaProgrammer.WriteSchema(struct {
		Metadata *schemametadata.MetadataSchema
		Config   map[string]any
	}{
		Metadata: props.Metadata,
		Config:   props.Config,
	})
	schema := nativeiterate.JsonSchema{}
	if len(collection.Schemas) != 0 {
		schema = collection.Schemas[0]
	}
	schemaTypeNode := llmProgrammer_import_type(props.Context, nativeprogrammers.ImportProgrammer_TypeProps{
		File: "typia",
		Name: "ILlmSchema",
	})
	schemaLiteral := llmSchemaProgrammer_factory.NewAsExpression(
		llmSchemaProgrammer_factory.NewSatisfiesExpression(
			llmSchemaProgrammer_write_schema_expression(props.Context, collection.Components, schema, props.Config, nil),
			schemaTypeNode,
		),
		schemaTypeNode,
	)
	if len(output.Defs) == 0 {
		return schemaLiteral
	}
	recordType := llmSchemaProgrammer_factory.NewTypeReferenceNode(
		llmSchemaProgrammer_factory.NewIdentifier("Record"),
		llmSchemaProgrammer_factory.NewNodeList([]*shimast.Node{
			nativefactories.TypeFactory.Keyword("string"),
			schemaTypeNode,
		}),
	)
	return llmSchemaProgrammer_factory.NewArrowFunction(
		nil,
		nil,
		llmSchemaProgrammer_factory.NewNodeList([]*shimast.Node{
			nativefactories.IdentifierFactory.Parameter("$defs", recordType, nil),
		}),
		schemaTypeNode,
		nil,
		llmSchemaProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
		llmSchemaProgrammer_factory.NewBlock(llmSchemaProgrammer_factory.NewNodeList([]*shimast.Node{
			llmSchemaProgrammer_factory.NewReturnStatement(llmSchemaProgrammer_factory.NewAsExpression(
				llmSchemaProgrammer_factory.NewSatisfiesExpression(
					llmSchemaProgrammer_write_schema_expression(
						props.Context,
						collection.Components,
						schema,
						props.Config,
						llmSchemaProgrammer_factory.NewIdentifier("$defs"),
					),
					schemaTypeNode,
				),
				schemaTypeNode,
			)),
		}), true),
	)
}

func (llmSchemaProgrammerNamespace) WriteSchema(props struct {
	Metadata *schemametadata.MetadataSchema
	Config   map[string]any
}) LlmSchemaProgrammer_IOutput {
	collection := nativejson.JsonSchemasProgrammer.WriteSchemas(struct {
		Version   string
		Metadatas []*schemametadata.MetadataSchema
	}{
		Version:   "3.1",
		Metadatas: []*schemametadata.MetadataSchema{props.Metadata},
	})
	defs := map[string]any{}
	schema := map[string]any{}
	if len(collection.Schemas) != 0 {
		schema = llmSchemaProgrammer_convert_schema(collection.Schemas[0], collection.Components, defs)
	}
	return LlmSchemaProgrammer_IOutput{
		Defs:   defs,
		Schema: schema,
	}
}

func (llmSchemaProgrammerNamespace) Validate(props struct {
	Config   map[string]any
	Metadata *schemametadata.MetadataSchema
	Explore  nativefactories.MetadataFactory_IExplore
}) []string {
	output := []string{}
	strict, _ := props.Config["strict"].(bool)
	if strict {
		for _, object := range props.Metadata.Objects {
			for _, property := range object.Type.Properties {
				if property.Key.IsSoleLiteral() == false && property.Value.Size() != 0 {
					output = append(output, "Strict mode does not allow dynamic property in object.")
					break
				}
			}
		}
		for _, object := range props.Metadata.Objects {
			for _, property := range object.Type.Properties {
				if property.Value.IsRequired() == false {
					output = append(output, "Strict mode does not support optional property in object.")
					break
				}
			}
		}
	}
	for _, atomic := range props.Metadata.Atomics {
		if atomic.Type == "bigint" {
			output = append(output, "LLM schema does not support bigint type.")
			break
		}
	}
	for _, constant := range props.Metadata.Constants {
		if constant.Type == "bigint" {
			output = append(output, "LLM schema does not support bigint type.")
			break
		}
	}
	if len(props.Metadata.Tuples) != 0 {
		output = append(output, "LLM schema does not support tuple type.")
	}
	for _, array := range props.Metadata.Arrays {
		if array.Type.Value.IsRequired() == false {
			output = append(output, "LLM schema does not support undefined type in array.")
			break
		}
	}
	if len(props.Metadata.Maps) != 0 {
		output = append(output, "LLM schema does not support Map type.")
	}
	if len(props.Metadata.Sets) != 0 {
		output = append(output, "LLM schema does not support Set type.")
	}
	for _, native := range props.Metadata.Natives {
		if nativehelpers.AtomicPredicator.Native(native.Name) == false &&
			native.Name != "Date" &&
			native.Name != "Blob" &&
			native.Name != "File" {
			output = append(output, "LLM schema does not support "+native.Name+" type.")
		}
	}
	return output
}

func llmSchemaProgrammer_size(metadata *schemametadata.MetadataSchema) int {
	total := 0
	if metadata.Escaped != nil {
		total += llmSchemaProgrammer_size(metadata.Escaped.Returns)
	}
	total += len(metadata.Aliases) + len(metadata.Objects) + len(metadata.Arrays) + len(metadata.Tuples)
	if len(metadata.Maps) != 0 {
		total++
	}
	if len(metadata.Sets) != 0 {
		total++
	}
	for _, atomic := range metadata.Atomics {
		if atomic.Type == "boolean" {
			total += len(nativeiterate.Json_schema_boolean_export(atomic))
		} else if atomic.Type == "bigint" {
			total += len(nativeiterate.Json_schema_bigint_export(atomic))
		} else if atomic.Type == "number" {
			total += len(nativeiterate.Json_schema_number_export(atomic))
		} else {
			total += len(nativeiterate.Json_schema_string_export(atomic))
		}
	}
	for _, constant := range metadata.Constants {
		found := false
		for _, atomic := range metadata.Atomics {
			if atomic.Type == constant.Type {
				found = true
				break
			}
		}
		if found == false {
			total++
		}
	}
	total += len(metadata.Templates)
	components := &nativeiterate.OpenApi_IComponents{Schemas: map[string]nativeiterate.JsonSchema{}}
	for _, native := range metadata.Natives {
		found := false
		for _, atomic := range metadata.Atomics {
			if atomic.Type == native.Name {
				found = true
				break
			}
		}
		for _, constant := range metadata.Constants {
			if constant.Type == native.Name {
				found = true
				break
			}
		}
		if found == false {
			total += len(nativeiterate.Json_schema_native_export(nativeiterate.Json_schema_native_export_props{
				Components: components,
				Native:     native,
			}))
		}
	}
	return total
}

func llmSchemaProgrammer_convert_schema(schema nativeiterate.JsonSchema, components *nativeiterate.OpenApi_IComponents, defs map[string]any) map[string]any {
	output := map[string]any{}
	var oneOf any
	var discriminator map[string]any
	for key, value := range schema {
		if key == "$ref" {
			ref := fmt.Sprint(value)
			name := ref[strings.LastIndex(ref, "/")+1:]
			output["$ref"] = "#/$defs/" + name
			if components != nil && components.Schemas != nil {
				if target, ok := components.Schemas[name]; ok {
					if _, exists := defs[name]; exists == false {
						defs[name] = map[string]any{}
						defs[name] = llmSchemaProgrammer_convert_schema(target, components, defs)
					}
				}
			}
			continue
		}
		if key == "oneOf" {
			oneOf = value
			output["anyOf"] = llmSchemaProgrammer_convert_value(value, components, defs)
			continue
		}
		if key == "discriminator" {
			if mapValue, ok := value.(map[string]any); ok {
				discriminator = mapValue
			}
			continue
		}
		output[key] = llmSchemaProgrammer_convert_value(value, components, defs)
	}
	if oneOf != nil && discriminator != nil {
		if x := llmSchemaProgrammer_convert_discriminator(discriminator); x != nil {
			output["x-discriminator"] = x
		}
	}
	return output
}

func llmSchemaProgrammer_convert_discriminator(discriminator map[string]any) map[string]any {
	output := map[string]any{}
	if propertyName, ok := discriminator["propertyName"].(string); ok {
		output["propertyName"] = propertyName
	}
	if rawMapping, ok := discriminator["mapping"].(map[string]any); ok {
		mapping := map[string]any{}
		for key, value := range rawMapping {
			ref := fmt.Sprint(value)
			name := ref[strings.LastIndex(ref, "/")+1:]
			mapping[key] = "#/$defs/" + name
		}
		output["mapping"] = mapping
	}
	if len(output) == 0 {
		return nil
	}
	return output
}

func llmSchemaProgrammer_convert_value(value any, components *nativeiterate.OpenApi_IComponents, defs map[string]any) any {
	switch v := value.(type) {
	case nativeiterate.JsonSchema:
		return llmSchemaProgrammer_convert_schema(v, components, defs)
	case map[string]any:
		return llmSchemaProgrammer_convert_schema(nativeiterate.JsonSchema(v), components, defs)
	case []nativeiterate.JsonSchema:
		out := make([]any, 0, len(v))
		for _, elem := range v {
			out = append(out, llmSchemaProgrammer_convert_schema(elem, components, defs))
		}
		return out
	case []any:
		out := make([]any, 0, len(v))
		for _, elem := range v {
			out = append(out, llmSchemaProgrammer_convert_value(elem, components, defs))
		}
		return out
	default:
		return value
	}
}

func llmSchemaProgrammer_write_schema_expression(
	context nativecontext.ITypiaContext,
	components *nativeiterate.OpenApi_IComponents,
	schema nativeiterate.JsonSchema,
	config map[string]any,
	defs *shimast.Node,
) *shimast.Node {
	if defs == nil {
		defs = llmSchemaProgrammer_factory.NewObjectLiteralExpression(llmSchemaProgrammer_factory.NewNodeList(nil), false)
	}
	return llmProgrammer_converter_result(context, "schema", "typia.llm.schema", []*shimast.Node{
		llmProgrammer_object_property("config", llmProgrammer_config_expression(config)),
		llmProgrammer_object_property("components", nativefactories.LiteralFactory.Write(components)),
		llmProgrammer_object_property("schema", nativefactories.LiteralFactory.Write(schema)),
		llmProgrammer_object_property("$defs", defs),
	})
}

func llmProgrammer_converter_result(context nativecontext.ITypiaContext, method string, code string, properties []*shimast.Node) *shimast.Node {
	result := llmSchemaProgrammer_factory.NewIdentifier("__result")
	call := llmSchemaProgrammer_factory.NewCallExpression(
		nativefactories.IdentifierFactory.Access(llmProgrammer_llm_schema_converter(context), method),
		nil,
		nil,
		llmSchemaProgrammer_factory.NewNodeList([]*shimast.Node{
			llmSchemaProgrammer_factory.NewObjectLiteralExpression(llmSchemaProgrammer_factory.NewNodeList(properties), true),
		}),
		shimast.NodeFlagsNone,
	)
	return nativefactories.ExpressionFactory.SelfCall(
		llmSchemaProgrammer_factory.NewBlock(llmSchemaProgrammer_factory.NewNodeList([]*shimast.Node{
			nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
				Name:  "__result",
				Value: call,
			}),
			llmSchemaProgrammer_factory.NewIfStatement(
				llmSchemaProgrammer_factory.NewBinaryExpression(
					nil,
					nativefactories.IdentifierFactory.Access(result, "success"),
					nil,
					llmSchemaProgrammer_factory.NewToken(shimast.KindEqualsEqualsEqualsToken),
					llmSchemaProgrammer_factory.NewKeywordExpression(shimast.KindFalseKeyword),
				),
				llmSchemaProgrammer_factory.NewThrowStatement(llmSchemaProgrammer_factory.NewNewExpression(
					llmSchemaProgrammer_factory.NewIdentifier("Error"),
					nil,
					llmSchemaProgrammer_factory.NewNodeList([]*shimast.Node{
						llmSchemaProgrammer_factory.NewStringLiteral("failed to convert JSON schema to LLM schema: "+code, shimast.TokenFlagsNone),
					}),
				)),
				nil,
			),
			llmSchemaProgrammer_factory.NewReturnStatement(nativefactories.IdentifierFactory.Access(result, "value")),
		}), true),
	)
}

func llmProgrammer_object_property(name string, value *shimast.Node) *shimast.Node {
	return llmSchemaProgrammer_factory.NewPropertyAssignment(
		nil,
		nativefactories.IdentifierFactory.Identifier(name),
		nil,
		nil,
		value,
	)
}

func llmProgrammer_config_expression(config map[string]any) *shimast.Node {
	if config == nil {
		return llmSchemaProgrammer_factory.NewIdentifier("undefined")
	}
	return nativefactories.LiteralFactory.Write(config)
}

func llmProgrammer_llm_schema_converter(context nativecontext.ITypiaContext) *shimast.Node {
	if importer, ok := context.Importer.(interface {
		Namespace(nativeprogrammers.ImportProgrammer_INamespace) *shimast.Node
	}); ok {
		return nativefactories.IdentifierFactory.Access(importer.Namespace(nativeprogrammers.ImportProgrammer_INamespace{
			File: "@typia/utils",
			Name: "__typia_utils",
		}), "LlmSchemaConverter")
	}
	return nativefactories.IdentifierFactory.Access(llmSchemaProgrammer_factory.NewIdentifier("__typia_utils"), "LlmSchemaConverter")
}

func llmProgrammer_internal(context nativecontext.ITypiaContext, name string) *shimast.Node {
	if importer, ok := context.Importer.(interface{ Internal(string) *shimast.Node }); ok {
		return importer.Internal(name)
	}
	return llmSchemaProgrammer_factory.NewIdentifier(name)
}

func llmProgrammer_import_type(context nativecontext.ITypiaContext, props nativeprogrammers.ImportProgrammer_TypeProps) *shimast.Node {
	if importer, ok := context.Importer.(interface {
		Type(nativeprogrammers.ImportProgrammer_TypeProps) *shimast.Node
	}); ok {
		return importer.Type(props)
	}
	if str, ok := props.Name.(string); ok {
		return llmSchemaProgrammer_factory.NewTypeReferenceNode(llmSchemaProgrammer_factory.NewIdentifier(str), llmSchemaProgrammer_factory.NewNodeList(props.Arguments))
	}
	return props.Name.(*shimast.Node)
}

func llmProgrammer_type_reference(name string) *shimast.Node {
	if name == "" {
		name = "unknown"
	}
	return llmSchemaProgrammer_factory.NewTypeReferenceNode(llmSchemaProgrammer_factory.NewIdentifier(name), nil)
}

func llmProgrammer_method_text(modulo *shimast.Node) string {
	if modulo == nil {
		return ""
	}
	return modulo.Text()
}

func llmProgrammer_concat_description(summary *string, description *string) *string {
	if summary == nil || len(*summary) == 0 || description == nil || len(*description) == 0 {
		if summary != nil && len(*summary) != 0 {
			return summary
		}
		return description
	}
	head := *summary
	if strings.HasSuffix(head, ".") {
		head = head[:len(head)-1]
	}
	if strings.HasPrefix(*description, head) {
		return description
	}
	out := head + ".\n\n" + *description
	return &out
}
