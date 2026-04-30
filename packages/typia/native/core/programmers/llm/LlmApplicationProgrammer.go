package llm

import (
	"fmt"
	"regexp"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
	nativeiterate "github.com/samchon/typia/packages/typia/native/core/programmers/iterate"
	nativejson "github.com/samchon/typia/packages/typia/native/core/programmers/json"
	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type llmApplicationProgrammerNamespace struct{}

var LlmApplicationProgrammer = llmApplicationProgrammerNamespace{}

type LlmApplicationProgrammer_IProps struct {
	Context nativecontext.ITypiaContext
	Modulo  *shimast.Node
	Type    any
	Name    *string
	Init    *shimast.Node
	Config  map[string]any
}

type LlmApplicationProgrammer_IWriteProps struct {
	Context        nativecontext.ITypiaContext
	Modulo         *shimast.Node
	Metadata       *schemametadata.MetadataSchema
	Config         map[string]any
	Name           *string
	ConfigArgument *shimast.Node
}

var llmApplicationProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (llmApplicationProgrammerNamespace) Write(props LlmApplicationProgrammer_IWriteProps) *shimast.Node {
	application := LlmApplicationProgrammer.WriteApplication(struct {
		Context  nativecontext.ITypiaContext
		Modulo   *shimast.Node
		Metadata *schemametadata.MetadataSchema
		Config   map[string]any
		Name     *string
	}{
		Context:  props.Context,
		Modulo:   props.Modulo,
		Metadata: props.Metadata,
		Config:   props.Config,
		Name:     props.Name,
	})
	var arguments []*shimast.TypeNode
	if props.Name != nil {
		arguments = []*shimast.TypeNode{llmProgrammer_type_reference(*props.Name)}
	}
	typeNode := llmProgrammer_import_type(props.Context, nativeprogrammers.ImportProgrammer_TypeProps{
		File:      "typia",
		Name:      "ILlmApplication.__IPrimitive",
		Arguments: arguments,
	})
	args := []*shimast.Node{
		llmApplicationProgrammer_factory.NewAsExpression(
			llmApplicationProgrammer_factory.NewSatisfiesExpression(nativefactories.LiteralFactory.Write(application), typeNode),
			typeNode,
		),
	}
	if props.ConfigArgument != nil {
		args = append(args, props.ConfigArgument)
	}
	var typeArguments *shimast.NodeList
	if props.Name != nil {
		typeArguments = llmApplicationProgrammer_factory.NewNodeList([]*shimast.Node{llmProgrammer_type_reference(*props.Name)})
	}
	return llmApplicationProgrammer_factory.NewCallExpression(
		llmProgrammer_internal(props.Context, "llmApplicationFinalize"),
		nil,
		typeArguments,
		llmApplicationProgrammer_factory.NewNodeList(args),
		shimast.NodeFlagsNone,
	)
}

func (llmApplicationProgrammerNamespace) Validate(props struct {
	Config   map[string]any
	Metadata *schemametadata.MetadataSchema
	Explore  nativefactories.MetadataFactory_IExplore
	Top      *schemametadata.MetadataSchema
}) []string {
	if props.Explore.Top == false {
		if props.Top != nil &&
			len(props.Top.Objects) != 0 &&
			props.Explore.Object == props.Top.Objects[0].Type {
			if _, ok := props.Explore.Property.(string); ok &&
				props.Metadata.Size() == 1 &&
				props.Metadata.Nullable == false &&
				props.Metadata.IsRequired() == true &&
				len(props.Metadata.Functions) == 1 {
				return llmApplicationProgrammer_validateFunction(fmt.Sprint(props.Explore.Property), props.Metadata.Functions[0])
			}
		}
		return LlmSchemaProgrammer.Validate(struct {
			Config   map[string]any
			Metadata *schemametadata.MetadataSchema
			Explore  nativefactories.MetadataFactory_IExplore
		}{Config: props.Config, Metadata: props.Metadata, Explore: props.Explore})
	}

	output := []string{}
	isValidType := props.Metadata.Size() == 1 &&
		len(props.Metadata.Objects) == 1 &&
		props.Metadata.IsRequired() == true &&
		props.Metadata.Nullable == false
	if isValidType == false {
		output = append(output, "LLM application's generic argument must be a class/interface type.")
	}
	var object *schemametadata.MetadataObjectType
	if len(props.Metadata.Objects) != 0 {
		object = props.Metadata.Objects[0].Type
	}
	if object != nil {
		for _, property := range object.Properties {
			if property.Key.IsSoleLiteral() == false {
				output = append(output, "LLM application does not allow dynamic keys on class/interface type.")
				break
			}
		}
		least := false
		for _, property := range object.Properties {
			rawName := property.Key.GetSoleLiteral()
			if rawName == nil {
				continue
			}
			value := property.Value
			if len(value.Functions) == 0 {
				continue
			}
			least = true
			name := fmt.Sprintf("%q", *rawName)
			if isValidType == false {
				if len(value.Functions) != 1 || value.Size() != 1 {
					output = append(output, "LLM application's function ("+name+") type does not allow union type.")
				}
				if value.IsRequired() == false {
					output = append(output, "LLM application's function ("+name+") type must be required.")
				}
				if value.Nullable {
					output = append(output, "LLM application's function ("+name+") type must not be nullable.")
				}
			}
			prefix := "LLM application's function (" + name + ")"
			output = append(output, llmApplicationProgrammer_validateName(prefix, *rawName)...)
			description := llmApplicationProgrammer_propertyDescription(property)
			if description != nil && len(*description) > 1024 {
				output = append(output, "LLM application's function ("+name+") description must not exceed 1,024 characters.")
			}
		}
		if least == false {
			output = append(output, "LLM application's target type must have at least a function type.")
		}
	}
	return output
}

func (llmApplicationProgrammerNamespace) WriteApplication(props struct {
	Context  nativecontext.ITypiaContext
	Modulo   *shimast.Node
	Metadata *schemametadata.MetadataSchema
	Config   map[string]any
	Name     *string
}) map[string]any {
	metadata := schemametadata.MetadataSchema_unalias(props.Metadata)
	functionParameters := map[string]*schemametadata.MetadataParameter{}
	if len(metadata.Objects) != 0 {
		for _, property := range metadata.Objects[0].Type.Properties {
			if property.Key.IsSoleLiteral() == false ||
				property.Value.Size() != 1 ||
				property.Value.Nullable ||
				property.Value.IsRequired() == false {
				continue
			}
			unaliased := schemametadata.MetadataSchema_unalias(property.Value)
			if len(unaliased.Functions) != 1 || llmApplicationProgrammer_hidden(property.JsDocTags) {
				continue
			}
			key := property.Key.GetSoleLiteral()
			if key == nil || len(unaliased.Functions[0].Parameters) == 0 {
				continue
			}
			functionParameters[*key] = unaliased.Functions[0].Parameters[0]
		}
	}
	application := nativejson.JsonApplicationProgrammer.WriteApplication(struct {
		Version  string
		Metadata *schemametadata.MetadataSchema
		Filter   func(prop *schemametadata.MetadataProperty) bool
	}{
		Version:  "3.1",
		Metadata: metadata,
		Filter: func(prop *schemametadata.MetadataProperty) bool {
			for _, tag := range prop.JsDocTags {
				if tag.Name == "human" {
					return false
				}
			}
			return true
		},
	})
	components, _ := application["components"].(*nativeiterate.OpenApi_IComponents)
	rawFunctions, _ := application["functions"].([]any)
	functions := []any{}
	for _, raw := range rawFunctions {
		fn, ok := raw.(map[string]any)
		if ok == false {
			continue
		}
		name, _ := fn["name"].(string)
		written := llmApplicationProgrammer_writeFunction(struct {
			Context    nativecontext.ITypiaContext
			Modulo     *shimast.Node
			Components *nativeiterate.OpenApi_IComponents
			Function   map[string]any
			Parameter  *schemametadata.MetadataParameter
			ClassName  *string
			Config     map[string]any
		}{
			Context:    props.Context,
			Modulo:     props.Modulo,
			Components: components,
			Function:   fn,
			Parameter:  functionParameters[name],
			ClassName:  props.Name,
			Config:     props.Config,
		})
		if written != nil {
			functions = append(functions, written)
		}
	}
	return map[string]any{"functions": functions}
}

func llmApplicationProgrammer_writeFunction(props struct {
	Context    nativecontext.ITypiaContext
	Modulo     *shimast.Node
	Components *nativeiterate.OpenApi_IComponents
	Function   map[string]any
	Parameter  *schemametadata.MetadataParameter
	ClassName  *string
	Config     map[string]any
}) map[string]any {
	name, _ := props.Function["name"].(string)
	parameters := llmApplicationProgrammer_writeParameters(struct {
		Context    nativecontext.ITypiaContext
		Components *nativeiterate.OpenApi_IComponents
		Function   map[string]any
		Config     map[string]any
	}{
		Context:    props.Context,
		Components: props.Components,
		Function:   props.Function,
		Config:     props.Config,
	})
	var output any
	if raw, ok := props.Function["output"].(map[string]any); ok {
		if schema, ok := raw["schema"].(nativeiterate.JsonSchema); ok {
			output = llmApplicationProgrammer_writeOutput(struct {
				Context    nativecontext.ITypiaContext
				Components *nativeiterate.OpenApi_IComponents
				Schema     nativeiterate.JsonSchema
				Output     map[string]any
				Config     map[string]any
			}{Context: props.Context, Components: props.Components, Schema: schema, Output: raw, Config: props.Config})
		} else if schema, ok := raw["schema"].(map[string]any); ok {
			output = llmApplicationProgrammer_writeOutput(struct {
				Context    nativecontext.ITypiaContext
				Components *nativeiterate.OpenApi_IComponents
				Schema     nativeiterate.JsonSchema
				Output     map[string]any
				Config     map[string]any
			}{Context: props.Context, Components: props.Components, Schema: nativeiterate.JsonSchema(schema), Output: raw, Config: props.Config})
		}
	}
	result := map[string]any{
		"name":       name,
		"parameters": parameters,
		"validate": llmApplicationProgrammer_writeValidator(struct {
			Context   nativecontext.ITypiaContext
			Modulo    *shimast.Node
			Parameter *schemametadata.MetadataParameter
			Name      string
			Equals    bool
			ClassName *string
		}{
			Context:   props.Context,
			Modulo:    props.Modulo,
			Parameter: props.Parameter,
			Name:      name,
			Equals:    llmApplicationProgrammer_equals(props.Config),
			ClassName: props.ClassName,
		}),
	}
	if output != nil {
		result["output"] = output
	}
	if summary, ok := props.Function["summary"].(string); ok {
		if description, ok := props.Function["description"].(string); ok {
			result["description"] = *llmProgrammer_concat_description(&summary, &description)
		} else {
			result["description"] = summary
		}
	} else if description, ok := props.Function["description"].(string); ok {
		result["description"] = description
	}
	if deprecated, ok := props.Function["deprecated"].(bool); ok && deprecated {
		result["deprecated"] = true
	}
	if tags, ok := props.Function["tags"].([]any); ok && len(tags) != 0 {
		result["tags"] = tags
	}
	return result
}

func llmApplicationProgrammer_writeParameters(props struct {
	Context    nativecontext.ITypiaContext
	Components *nativeiterate.OpenApi_IComponents
	Function   map[string]any
	Config     map[string]any
}) any {
	rawParameters, _ := props.Function["parameters"].([]any)
	if len(rawParameters) == 0 {
		return llmParametersProgrammer_write_parameters_expression(
			props.Context,
			props.Components,
			nativeiterate.JsonSchema{"type": "object", "properties": map[string]any{}, "additionalProperties": false, "required": []any{}},
			props.Config,
		)
	}
	param, _ := rawParameters[0].(map[string]any)
	var schema nativeiterate.JsonSchema
	if raw, ok := param["schema"].(nativeiterate.JsonSchema); ok {
		schema = raw
	} else if raw, ok := param["schema"].(map[string]any); ok {
		schema = nativeiterate.JsonSchema(raw)
	} else {
		schema = nativeiterate.JsonSchema{"type": "object", "properties": map[string]any{}, "additionalProperties": false, "required": []any{}}
	}
	if _, ok := schema["title"]; ok == false {
		if title, ok := param["title"]; ok {
			schema["title"] = title
		}
	}
	if _, ok := schema["description"]; ok == false {
		if description, ok := param["description"]; ok {
			schema["description"] = description
		}
	}
	return llmParametersProgrammer_write_parameters_expression(props.Context, props.Components, schema, props.Config)
}

func llmApplicationProgrammer_writeOutput(props struct {
	Context    nativecontext.ITypiaContext
	Components *nativeiterate.OpenApi_IComponents
	Schema     nativeiterate.JsonSchema
	Output     map[string]any
	Config     map[string]any
}) any {
	if _, exists := props.Schema["description"]; exists == false {
		if desc, ok := props.Output["description"].(string); ok && desc != "" {
			props.Schema["description"] = desc
		}
	}
	return llmParametersProgrammer_write_parameters_expression(props.Context, props.Components, props.Schema, props.Config)
}

func llmApplicationProgrammer_writeValidator(props struct {
	Context   nativecontext.ITypiaContext
	Modulo    *shimast.Node
	Parameter *schemametadata.MetadataParameter
	Name      string
	Equals    bool
	ClassName *string
}) *shimast.Node {
	if props.Parameter == nil || props.Parameter.TsType == nil {
		typ := props.Context.Checker.GetAnyType()
		return nativeprogrammers.ValidateProgrammer.Write(nativeprogrammers.ValidateProgrammer_IProps{
			Context: props.Context,
			Modulo:  props.Modulo,
			Type:    typ,
			Name:    nil,
			Config:  nativeprogrammers.ValidateProgrammer_IConfig{Equals: props.Equals},
		})
	}
	var name *string
	if props.ClassName != nil {
		text := fmt.Sprintf("Parameters<%s[%q]>[0]", *props.ClassName, props.Name)
		name = &text
	}
	return nativeprogrammers.ValidateProgrammer.Write(nativeprogrammers.ValidateProgrammer_IProps{
		Context: props.Context,
		Modulo:  props.Modulo,
		Type:    props.Parameter.TsType,
		Name:    name,
		Config:  nativeprogrammers.ValidateProgrammer_IConfig{Equals: props.Equals},
	})
}

func llmApplicationProgrammer_validateObjectSchema(prefix string, label string, schema *schemametadata.MetadataSchema) []string {
	errors := []string{}
	if schema.IsRequired() == false {
		errors = append(errors, prefix+" "+label+" cannot be optional (union with undefined).")
	}
	if schema.Nullable {
		errors = append(errors, prefix+" "+label+" cannot be nullable.")
	}
	if schema.Size() != 1 || len(schema.Objects) != 1 {
		errors = append(errors, prefix+" "+label+" must be a single object type.")
	} else {
		for _, property := range schema.Objects[0].Type.Properties {
			if property.Key.IsSoleLiteral() == false {
				errors = append(errors, prefix+" "+label+" cannot have dynamic property keys.")
				break
			}
		}
	}
	return errors
}

func llmApplicationProgrammer_validateFunction(name string, fn *schemametadata.MetadataFunction) []string {
	messages := []string{}
	prefix := fmt.Sprintf("LLM application's function (%q)", name)
	messages = append(messages, llmApplicationProgrammer_validateName(prefix, name)...)
	if fn.Output != nil && fn.Output.Size() != 0 {
		messages = append(messages, llmApplicationProgrammer_validateObjectSchema(prefix, "return type", fn.Output)...)
	}
	if len(fn.Parameters) != 0 && len(fn.Parameters) != 1 {
		messages = append(messages, prefix+" must have exactly one parameter or no parameters.")
	}
	if len(fn.Parameters) != 0 {
		messages = append(messages, llmApplicationProgrammer_validateObjectSchema(prefix, "parameter", fn.Parameters[0].Type)...)
	}
	return messages
}

func llmApplicationProgrammer_validateName(prefix string, name string) []string {
	output := []string{}
	if len(name) != 0 && regexp.MustCompile(`^[0-9]`).MatchString(name[:1]) {
		output = append(output, prefix+" name cannot start with a number.")
	}
	if regexp.MustCompile(`^[a-zA-Z0-9_-]+$`).MatchString(name) == false {
		output = append(output, prefix+" name must contain only alphanumeric characters, underscores, or hyphens.")
	}
	if len(name) > 64 {
		output = append(output, prefix+" name cannot exceed 64 characters.")
	}
	return output
}

func llmApplicationProgrammer_propertyDescription(property *schemametadata.MetadataProperty) *string {
	description := property.Description
	if description == nil {
		for _, tag := range property.JsDocTags {
			if tag.Name == "description" && len(tag.Text) != 0 {
				text := tag.Text[0].Text
				description = &text
				break
			}
		}
	}
	desc := nativejson.JsonApplicationProgrammer.WriteDescription(struct {
		Description *string
		JsDocTags   []schemametadata.IJsDocTagInfo
		Kind        string
	}{Description: description, JsDocTags: property.JsDocTags, Kind: "summary"})
	var summary *string
	if s, ok := desc["summary"].(string); ok {
		summary = &s
	}
	if d, ok := desc["description"].(string); ok {
		description = &d
	}
	return llmProgrammer_concat_description(summary, description)
}

func llmApplicationProgrammer_hidden(tags []schemametadata.IJsDocTagInfo) bool {
	for _, tag := range tags {
		if tag.Name == "hidden" || tag.Name == "ignore" || tag.Name == "internal" {
			return true
		}
	}
	return false
}

func llmApplicationProgrammer_equals(config map[string]any) bool {
	if config == nil {
		return false
	}
	value, _ := config["equals"].(bool)
	return value
}
