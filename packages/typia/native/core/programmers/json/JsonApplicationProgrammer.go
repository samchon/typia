package json

import (
	"strings"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativeiterate "github.com/samchon/typia/packages/typia/native/core/programmers/iterate"
	nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type jsonApplicationProgrammerNamespace struct{}

var JsonApplicationProgrammer = jsonApplicationProgrammerNamespace{}

type JsonApplicationProgrammer_IWriteProps struct {
	Context  nativecontext.ITypiaContext
	Version  string
	Metadata *nativemetadata.MetadataSchema
	Filter   func(prop *nativemetadata.MetadataProperty) bool
}

func (jsonApplicationProgrammerNamespace) Validate(props struct {
	Metadata *nativemetadata.MetadataSchema
	Explore  nativefactories.MetadataFactory_IExplore
}) []string {
	if props.Explore.Top == false {
		return JsonSchemasProgrammer.Validate(props)
	}

	output := []string{}
	valid := props.Metadata.Size() == 1 &&
		len(props.Metadata.Objects) == 1 &&
		props.Metadata.IsRequired() == true &&
		props.Metadata.Nullable == false
	if valid == false {
		output = append(output, "JSON application's generic argument must be a class/interface type.")
	}

	var object *nativemetadata.MetadataObjectType
	if len(props.Metadata.Objects) != 0 {
		object = props.Metadata.Objects[0].Type
	}
	if object != nil {
		for _, p := range object.Properties {
			if p.Key.IsSoleLiteral() == false {
				output = append(output, "JSON application does not allow dynamic keys.")
				break
			}
		}
		least := false
		for _, p := range object.Properties {
			value := p.Value
			if len(value.Functions) != 0 {
				least = true
				if valid == false {
					if len(value.Functions) != 1 || value.Size() != 1 {
						output = append(output, "JSON application's function type does not allow union type.")
					}
					if value.IsRequired() == false {
						output = append(output, "JSON application's function type must be required.")
					}
					if value.Nullable == true {
						output = append(output, "JSON application's function type must not be nullable.")
					}
				}
			}
		}
		if least == false {
			output = append(output, "JSON application's target type must have at least a function type.")
		}
	}
	return output
}

func (jsonApplicationProgrammerNamespace) Write(props JsonApplicationProgrammer_IWriteProps) *shimast.Node {
	app := JsonApplicationProgrammer.WriteApplication(struct {
		Version  string
		Metadata *nativemetadata.MetadataSchema
		Filter   func(prop *nativemetadata.MetadataProperty) bool
	}{
		Version:  props.Version,
		Metadata: props.Metadata,
		Filter:   props.Filter,
	})
	return nativefactories.LiteralFactory.Write(app)
}

func (jsonApplicationProgrammerNamespace) WriteApplication(props struct {
	Version  string
	Metadata *nativemetadata.MetadataSchema
	Filter   func(prop *nativemetadata.MetadataProperty) bool
}) map[string]any {
	object := props.Metadata.Objects[0].Type
	definitions := []*nativemetadata.MetadataSchema{}
	setters := []func(nativeiterate.JsonSchema){}
	collect := func(metadata *nativemetadata.MetadataSchema, setter func(nativeiterate.JsonSchema)) {
		definitions = append(definitions, metadata)
		setters = append(setters, setter)
	}

	functions := []any{}
	for _, property := range object.Properties {
		unaliased := nativemetadata.MetadataSchema_unalias(property.Value)
		if property.Key.IsSoleLiteral() == false ||
			property.Value.Size() != 1 ||
			property.Value.Nullable != false ||
			property.Value.IsRequired() != true ||
			len(unaliased.Functions) != 1 {
			continue
		}
		if jsonApplicationProgrammer_hidden(property.JsDocTags) {
			continue
		}
		if props.Filter != nil && props.Filter(property) == false {
			continue
		}
		functions = append(functions, jsonApplicationProgrammer_collectFunction(struct {
			Version     string
			Name        string
			Function    *nativemetadata.MetadataFunction
			Description *string
			JsDocTags   []nativemetadata.IJsDocTagInfo
			Collect     func(*nativemetadata.MetadataSchema, func(nativeiterate.JsonSchema))
		}{
			Version:     props.Version,
			Name:        *property.Key.GetSoleLiteral(),
			Function:    unaliased.Functions[0],
			Description: property.Description,
			JsDocTags:   property.JsDocTags,
			Collect:     collect,
		}))
	}
	collection := JsonSchemasProgrammer.WriteSchemas(struct {
		Version   string
		Metadatas []*nativemetadata.MetadataSchema
	}{
		Version:   props.Version,
		Metadatas: definitions,
	})
	for i, schema := range collection.Schemas {
		if i < len(setters) && setters[i] != nil {
			setters[i](schema)
		}
	}
	return map[string]any{
		"version":    props.Version,
		"components": collection.Components,
		"functions":  functions,
	}
}

func (jsonApplicationProgrammerNamespace) WriteDescription(props struct {
	Description *string
	JsDocTags   []nativemetadata.IJsDocTagInfo
	Kind        string
}) map[string]any {
	var title any
	texts := jsonApplicationProgrammer_getJsDocTexts(struct {
		JsDocTags []nativemetadata.IJsDocTagInfo
		Name      string
	}{
		JsDocTags: props.JsDocTags,
		Name:      props.Kind,
	})
	if len(texts) != 0 && len(texts[0]) != 0 {
		title = texts[0]
	} else if props.Description != nil && len(*props.Description) != 0 {
		index := strings.Index(*props.Description, "\n")
		top := *props.Description
		if index != -1 {
			top = (*props.Description)[:index]
		}
		top = strings.TrimSpace(top)
		if strings.HasSuffix(top, ".") {
			title = top[:len(top)-1]
		}
	}
	output := map[string]any{}
	if title != nil {
		output[props.Kind] = title
	}
	if props.Description != nil && len(*props.Description) != 0 {
		output["description"] = *props.Description
	}
	return output
}

func jsonApplicationProgrammer_collectFunction(props struct {
	Version     string
	Name        string
	Function    *nativemetadata.MetadataFunction
	Description *string
	JsDocTags   []nativemetadata.IJsDocTagInfo
	Collect     func(*nativemetadata.MetadataSchema, func(nativeiterate.JsonSchema))
}) map[string]any {
	deprecated := false
	for _, tag := range props.JsDocTags {
		if tag.Name == "deprecated" {
			deprecated = true
			break
		}
	}
	tags := []any{}
	for _, tag := range props.JsDocTags {
		if tag.Name != "tag" {
			continue
		}
		for _, elem := range tag.Text {
			if elem.Kind == "text" {
				words := strings.Fields(strings.TrimSpace(elem.Text))
				if len(words) != 0 {
					tags = append(tags, words[0])
				}
			}
		}
	}

	parameters := []any{}
	for _, param := range props.Function.Parameters {
		appParam := map[string]any{
			"name":     param.Name,
			"required": param.Type.IsRequired(),
			"schema":   nil,
		}
		description := param.Description
		if description == nil {
			description = jsonApplicationProgrammer_descriptionFromParam(props.JsDocTags, param)
		}
		for key, value := range JsonApplicationProgrammer.WriteDescription(struct {
			Description *string
			JsDocTags   []nativemetadata.IJsDocTagInfo
			Kind        string
		}{
			Description: description,
			JsDocTags:   props.JsDocTags,
			Kind:        "title",
		}) {
			appParam[key] = value
		}
		target := appParam
		props.Collect(param.Type, func(schema nativeiterate.JsonSchema) {
			target["schema"] = schema
		})
		parameters = append(parameters, appParam)
	}

	var output any
	if props.Function.Output != nil && props.Function.Output.Size() != 0 {
		appOutput := map[string]any{
			"schema":   nil,
			"required": props.Function.Output.IsRequired(),
		}
		description := jsonApplicationProgrammer_writeDescriptionFromJsDocTag(struct {
			JsDocTags []nativemetadata.IJsDocTagInfo
			Name      string
			Parameter *string
		}{JsDocTags: props.JsDocTags, Name: "return"})
		if description == nil {
			description = jsonApplicationProgrammer_writeDescriptionFromJsDocTag(struct {
				JsDocTags []nativemetadata.IJsDocTagInfo
				Name      string
				Parameter *string
			}{JsDocTags: props.JsDocTags, Name: "returns"})
		}
		if description != nil {
			appOutput["description"] = *description
		}
		target := appOutput
		props.Collect(props.Function.Output, func(schema nativeiterate.JsonSchema) {
			target["schema"] = schema
		})
		output = appOutput
	}

	fn := map[string]any{
		"name":       props.Name,
		"async":      props.Function.Async,
		"parameters": parameters,
	}
	if output != nil {
		fn["output"] = output
	}
	if props.Description != nil {
		fn["description"] = *props.Description
	}
	if deprecated {
		fn["deprecated"] = true
	}
	if len(tags) != 0 {
		fn["tags"] = tags
	}
	return fn
}

func jsonApplicationProgrammer_writeDescriptionFromJsDocTag(props struct {
	JsDocTags []nativemetadata.IJsDocTagInfo
	Name      string
	Parameter *string
}) *string {
	for _, tag := range props.JsDocTags {
		if tag.Name != props.Name || len(tag.Text) == 0 {
			continue
		}
		if props.Parameter != nil {
			found := false
			for _, elem := range tag.Text {
				if elem.Kind == "parameterName" && elem.Text == *props.Parameter {
					found = true
					break
				}
			}
			if found == false {
				continue
			}
		}
		for _, elem := range tag.Text {
			if elem.Kind == "text" {
				text := elem.Text
				return &text
			}
		}
	}
	return nil
}

func jsonApplicationProgrammer_getJsDocTexts(props struct {
	JsDocTags []nativemetadata.IJsDocTagInfo
	Name      string
}) []string {
	output := []string{}
	for _, tag := range props.JsDocTags {
		if tag.Name != props.Name {
			continue
		}
		for _, elem := range tag.Text {
			if elem.Kind == "text" && len(elem.Text) != 0 {
				output = append(output, elem.Text)
				break
			}
		}
	}
	return output
}

func jsonApplicationProgrammer_descriptionFromParam(tags []nativemetadata.IJsDocTagInfo, param *nativemetadata.MetadataParameter) *string {
	for _, tag := range param.JsDocTags {
		if tag.Name == "description" && len(tag.Text) != 0 {
			text := tag.Text[0].Text
			return &text
		}
	}
	name := param.Name
	description := jsonApplicationProgrammer_writeDescriptionFromJsDocTag(struct {
		JsDocTags []nativemetadata.IJsDocTagInfo
		Name      string
		Parameter *string
	}{JsDocTags: tags, Name: "param", Parameter: &name})
	if description == nil {
		return nil
	}
	text := strings.TrimPrefix(*description, param.Name)
	return &text
}

func jsonApplicationProgrammer_hidden(tags []nativemetadata.IJsDocTagInfo) bool {
	for _, tag := range tags {
		if tag.Name == "hidden" || tag.Name == "ignore" || tag.Name == "internal" {
			return true
		}
	}
	return false
}
