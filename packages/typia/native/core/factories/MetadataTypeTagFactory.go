package factories

import (
	"fmt"
	"strings"

	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type metadataTypeTagFactoryNamespace struct{}

var MetadataTypeTagFactory = metadataTypeTagFactoryNamespace{}

func (metadataTypeTagFactoryNamespace) Is(obj *schemametadata.MetadataObjectType) bool {
	if obj == nil || len(obj.Properties) != 1 {
		return false
	}

	top := obj.Properties[0]
	if top.Key.IsSoleLiteral() == false {
		return false
	}
	if literal := top.Key.GetSoleLiteral(); literal == nil || *literal != "typia.tag" {
		return false
	}

	value := top.Value
	if value.Size() != 1 ||
		len(value.Objects) != 1 ||
		value.IsRequired() == true ||
		value.Nullable == true {
		return false
	}

	tag := top.Value.Objects[0].Type
	statics := []string{}
	for _, property := range tag.Properties {
		if str := property.Key.GetSoleLiteral(); str != nil {
			statics = append(statics, *str)
		}
	}
	for _, field := range metadataTypeTagFactory_ESSENTIAL_FIELDS {
		if metadataTypeTagFactory_includes(statics, field) == false {
			return false
		}
	}
	return true
}

func (metadataTypeTagFactoryNamespace) Analyze(props struct {
	Errors  *[]MetadataFactory_IError
	Type    string
	Objects []*schemametadata.MetadataObjectType
	Explore MetadataFactory_IExplore
}) []schemametadata.IMetadataTypeTag {
	messages := []string{}
	report := func(next struct {
		Property *string
		Message  string
	}) bool {
		property := "[\"typia.tag\"]"
		if next.Property != nil {
			property = "[\"typia.tag." + *next.Property + "\"]"
		}
		messages = append(messages, "the property "+property+" "+next.Message+".")
		return false
	}

	filtered := []*schemametadata.MetadataObjectType{}
	for _, obj := range props.Objects {
		if len(obj.Properties) != 1 {
			continue
		}
		top := obj.Properties[0]
		literal := top.Key.GetSoleLiteral()
		if literal == nil ||
			*literal != "typia.tag" ||
			top.Value.Size() != 1 ||
			len(top.Value.Objects) != 1 {
			continue
		}
		if top.Value.Optional == false {
			report(struct {
				Property *string
				Message  string
			}{Property: nil, Message: "must be optional object"})
			continue
		}

		tag := top.Value.Objects[0].Type
		statistics := []string{}
		for _, property := range tag.Properties {
			if str := property.Key.GetSoleLiteral(); str != nil {
				statistics = append(statistics, *str)
			}
		}
		missing := false
		for _, field := range metadataTypeTagFactory_ESSENTIAL_FIELDS {
			if metadataTypeTagFactory_includes(statistics, field) == false {
				missing = true
				break
			}
		}
		if missing {
			report(struct {
				Property *string
				Message  string
			}{
				Property: nil,
				Message:  "must have at least three properties - " + metadataTypeTagFactory_essentialFieldsMessage(),
			})
			continue
		}
		success := true
		for _, property := range tag.Properties {
			key := property.Key.GetSoleLiteral()
			if key == nil {
				continue
			}
			if metadataTypeTagFactory_includes(metadataTypeTagFactory_FIELDS, *key) == false {
				continue
			}
			if metadataTypeTagFactory_validate_property(struct {
				Report func(struct {
					Property *string
					Message  string
				}) bool
				Key   string
				Value *schemametadata.MetadataSchema
			}{
				Report: report,
				Key:    *key,
				Value:  property.Value,
			}) == false {
				success = false
			}
		}
		if success {
			filtered = append(filtered, obj)
		}
	}
	if len(filtered) == 0 {
		return []schemametadata.IMetadataTypeTag{}
	}

	tagList := []*metadataTypeTagFactory_ITypeTag{}
	for _, object := range filtered {
		tagList = append(tagList, metadataTypeTagFactory_create_metadata_type_tag(struct {
			Report func(struct {
				Property *string
				Message  string
			}) bool
			Object *schemametadata.MetadataObjectType
		}{
			Report: report,
			Object: object,
		}))
	}

	output := []schemametadata.IMetadataTypeTag{}
	for _, tag := range tagList {
		if tag == nil {
			continue
		}
		target := ""
		if metadataTypeTagFactory_includes(tag.Target, props.Type) {
			target = props.Type
		}
		output = append(output, schemametadata.IMetadataTypeTag{
			Target:    target,
			Name:      tag.Name,
			Kind:      tag.Kind,
			Value:     tag.Value,
			Validate:  tag.Validate[props.Type],
			Exclusive: tag.Exclusive,
			Schema:    tag.Schema,
		})
	}
	MetadataTypeTagFactory.Validate(struct {
		Report func(struct {
			Property *string
			Message  string
		}) bool
		Type string
		Tags []schemametadata.IMetadataTypeTag
	}{
		Report: report,
		Type:   props.Type,
		Tags:   output,
	})

	if len(messages) > 0 {
		if props.Errors != nil {
			names := []string{props.Type}
			for _, object := range props.Objects {
				names = append(names, object.Name)
			}
			*props.Errors = append(*props.Errors, MetadataFactory_IError{
				Name:     strings.Join(names, " & "),
				Explore:  props.Explore,
				Messages: messages,
			})
		}
		return []schemametadata.IMetadataTypeTag{}
	}
	return output
}

func (metadataTypeTagFactoryNamespace) Validate(props struct {
	Report func(struct {
		Property *string
		Message  string
	}) bool
	Type string
	Tags []schemametadata.IMetadataTypeTag
}) bool {
	success := true
	for _, tag := range props.Tags {
		if tag.Target != props.Type {
			if success {
				success = props.Report(struct {
					Property *string
					Message  string
				}{Property: nil, Message: "target must contain " + props.Type + " type"})
			}
		}
	}

	for i, tag := range props.Tags {
		switch exclusive := tag.Exclusive.(type) {
		case bool:
			if exclusive == false {
				continue
			}
			some := false
			for j, opposite := range props.Tags {
				if i != j && opposite.Kind == tag.Kind {
					some = true
					break
				}
			}
			if some && success {
				success = props.Report(struct {
					Property *string
					Message  string
				}{Property: nil, Message: "kind '" + tag.Kind + "' can't be duplicated"})
			}
		case []string:
			var some *schemametadata.IMetadataTypeTag
			for j, opposite := range props.Tags {
				if i != j && opposite.Kind == tag.Kind && metadataTypeTagFactory_includes(exclusive, opposite.Name) {
					copied := opposite
					some = &copied
					break
				}
			}
			if some != nil && success {
				success = props.Report(struct {
					Property *string
					Message  string
				}{Property: nil, Message: "kind '" + tag.Kind + "' can't be used with '" + some.Name + "'"})
			}
		}
	}
	return success
}

func metadataTypeTagFactory_validate_property(props struct {
	Report func(struct {
		Property *string
		Message  string
	}) bool
	Key   string
	Value *schemametadata.MetadataSchema
}) bool {
	key := props.Key
	property := &key
	if props.Key == "target" && (len(props.Value.Constants) != 1 ||
		len(props.Value.Constants[0].Values) != props.Value.Size() ||
		metadataTypeTagFactory_some(props.Value.Constants[0].Values, func(v *schemametadata.MetadataConstantValue) bool {
			str, ok := v.Value.(string)
			return ok == false || metadataTypeTagFactory_includes([]string{"boolean", "bigint", "number", "string", "array", "object"}, str) == false
		})) {
		return props.Report(struct {
			Property *string
			Message  string
		}{Property: property, Message: "must be one of 'boolean', 'bigint', 'number', 'string', 'array', 'object'"})
	}
	if props.Key == "kind" && (props.Value.Size() != 1 ||
		len(props.Value.Constants) != 1 ||
		props.Value.Constants[0].Type != "string" ||
		len(props.Value.Constants[0].Values) != 1) {
		return props.Report(struct {
			Property *string
			Message  string
		}{Property: property, Message: "must be a string literal type"})
	}
	if props.Key == "value" && !((props.Value.Size() == 0 && props.Value.IsRequired() == false) ||
		(props.Value.Size() == 1 && (len(props.Value.Objects) == 1 || len(props.Value.Constants) == 1))) {
		return props.Report(struct {
			Property *string
			Message  string
		}{Property: property, Message: "must be a literal type or undefined value"})
	}
	if props.Key == "exclusive" {
		return metadataTypeTagFactory_get_exclusive(struct {
			Report func(struct {
				Property *string
				Message  string
			}) bool
			Key   string
			Value *schemametadata.MetadataSchema
		}{Report: props.Report, Key: props.Key, Value: props.Value}) != nil
	}
	if props.Key == "validate" {
		if props.Value.Size() == 0 && props.Value.IsRequired() == false && props.Value.Nullable == false {
			return true
		}
		if props.Value.Size() == 1 &&
			len(props.Value.Constants) == 1 &&
			props.Value.Constants[0].Type == "string" &&
			len(props.Value.Constants[0].Values) == 1 {
			return true
		}
		target := []string{}
		if len(props.Value.Objects) == 0 {
			targetProperty := "target"
			return props.Report(struct {
				Property *string
				Message  string
			}{Property: &targetProperty, Message: "must be one of 'boolean', 'bigint', 'number', 'string', 'array', 'object"})
		}
		for _, property := range props.Value.Objects[0].Type.Properties {
			if lit := property.Key.GetSoleLiteral(); lit != nil {
				target = append(target, *lit)
			}
		}
		variadic := props.Value.Size() == 1 && len(props.Value.Objects) == 1
		for _, vp := range props.Value.Objects[0].Type.Properties {
			lit := vp.Key.GetSoleLiteral()
			if !(vp.Value.Size() == 1 &&
				vp.Value.IsRequired() &&
				vp.Value.Nullable == false &&
				len(vp.Value.Constants) == 1 &&
				vp.Value.Constants[0].Type == "string" &&
				len(vp.Value.Constants[0].Values) == 1 &&
				lit != nil &&
				metadataTypeTagFactory_includes(target, *lit)) {
				variadic = false
				break
			}
		}
		if variadic == false {
			return props.Report(struct {
				Property *string
				Message  string
			}{Property: property, Message: "must be a string literal type or Record<Target, string> type."})
		}
	}
	return true
}

func metadataTypeTagFactory_create_metadata_type_tag(props struct {
	Report func(struct {
		Property *string
		Message  string
	}) bool
	Object *schemametadata.MetadataObjectType
}) *metadataTypeTagFactory_ITypeTag {
	find := func(key string) *schemametadata.MetadataProperty {
		if len(props.Object.Properties) == 0 ||
			props.Object.Properties[0].Value == nil ||
			len(props.Object.Properties[0].Value.Objects) == 0 {
			return nil
		}
		for _, property := range props.Object.Properties[0].Value.Objects[0].Type.Properties {
			if lit := property.Key.GetSoleLiteral(); lit != nil && *lit == key {
				return property
			}
		}
		return nil
	}
	targetProperty := find("target")
	if targetProperty == nil || len(targetProperty.Value.Constants) == 0 {
		return nil
	}
	target := []string{}
	for _, v := range targetProperty.Value.Constants[0].Values {
		target = append(target, fmt.Sprint(v.Value))
	}
	kindProperty := find("kind")
	if kindProperty == nil || len(kindProperty.Value.Constants) == 0 || len(kindProperty.Value.Constants[0].Values) == 0 {
		return nil
	}
	kind := fmt.Sprint(kindProperty.Value.Constants[0].Values[0].Value)

	var value any
	if valueProperty := find("value"); valueProperty != nil && len(valueProperty.Value.Constants) != 0 && len(valueProperty.Value.Constants[0].Values) != 0 {
		value = valueProperty.Value.Constants[0].Values[0].Value
	}
	exclusive := metadataTypeTagFactory_get_exclusive(struct {
		Report func(struct {
			Property *string
			Message  string
		}) bool
		Key   string
		Value *schemametadata.MetadataSchema
	}{Report: props.Report, Key: "exclusive", Value: metadataTypeTagFactory_property_value(find("exclusive"))})
	if exclusive == nil {
		return nil
	}

	validate := map[string]string{}
	validateProperty := find("validate")
	if validateProperty != nil {
		validateValue := validateProperty.Value
		if validateValue.Size() == 0 {
			validate = map[string]string{}
		} else if len(validateValue.Constants) != 0 {
			text := fmt.Sprint(validateValue.Constants[0].Values[0].Value)
			for _, t := range target {
				validate[t] = text
			}
		} else if len(validateValue.Objects) != 0 {
			for _, property := range validateValue.Objects[0].Type.Properties {
				if key := property.Key.GetSoleLiteral(); key != nil &&
					len(property.Value.Constants) != 0 &&
					len(property.Value.Constants[0].Values) != 0 {
					validate[*key] = fmt.Sprint(property.Value.Constants[0].Values[0].Value)
				}
			}
		}
	}

	var schema any
	if property := find("schema"); property != nil {
		p := property.Value
		if p.Size() == 0 && p.IsRequired() == false {
			schema = nil
		} else if p.Size() == 1 && p.Nullable == false && p.IsRequired() == true && p.Any == false && len(p.Objects) != 0 {
			schema = MetadataTypeTagSchemaFactory.Object(struct {
				Report func(msg string) bool
				Object *schemametadata.MetadataObjectType
			}{
				Report: func(message string) bool {
					schemaProperty := "schema"
					return props.Report(struct {
						Property *string
						Message  string
					}{Property: &schemaProperty, Message: message})
				},
				Object: p.Objects[0].Type,
			})
		} else {
			schemaProperty := "schema"
			props.Report(struct {
				Property *string
				Message  string
			}{Property: &schemaProperty, Message: "must be an object type"})
		}
	}
	return &metadataTypeTagFactory_ITypeTag{
		Name:      props.Object.Name,
		Target:    target,
		Kind:      kind,
		Value:     value,
		Validate:  validate,
		Exclusive: exclusive,
		Schema:    schema,
	}
}

func metadataTypeTagFactory_get_exclusive(props struct {
	Report func(struct {
		Property *string
		Message  string
	}) bool
	Key   string
	Value *schemametadata.MetadataSchema
}) any {
	if props.Value == nil {
		return false
	}
	if props.Value.Size() == 1 &&
		len(props.Value.Constants) == 1 &&
		props.Value.Constants[0].Type == "boolean" &&
		len(props.Value.Constants[0].Values) == 1 {
		return props.Value.Constants[0].Values[0].Value
	}
	if props.Value.Size() == 1 && len(props.Value.Tuples) == 1 {
		output := []string{}
		for _, elem := range props.Value.Tuples[0].Type.Elements {
			if !(elem.Size() == 1 &&
				len(elem.Constants) == 1 &&
				elem.Constants[0].Type == "string" &&
				len(elem.Constants[0].Values) == 1) {
				property := props.Key
				props.Report(struct {
					Property *string
					Message  string
				}{Property: &property, Message: "must a boolean literal type or a tuple of string literal types."})
				return nil
			}
			output = append(output, fmt.Sprint(elem.Constants[0].Values[0].Value))
		}
		return output
	}
	property := props.Key
	props.Report(struct {
		Property *string
		Message  string
	}{Property: &property, Message: "must a boolean literal type or a tuple of string literal types."})
	return nil
}

type metadataTypeTagFactory_ITypeTag struct {
	Name      string
	Target    []string
	Kind      string
	Value     any
	Validate  map[string]string
	Exclusive any
	Schema    any
}

var metadataTypeTagFactory_ESSENTIAL_FIELDS = []string{"target", "kind", "value"}
var metadataTypeTagFactory_FIELDS = []string{"target", "kind", "value", "validate", "exclusive"}

func metadataTypeTagFactory_includes(values []string, target string) bool {
	for _, value := range values {
		if value == target {
			return true
		}
	}
	return false
}

func metadataTypeTagFactory_some[T any](values []T, pred func(T) bool) bool {
	for _, value := range values {
		if pred(value) {
			return true
		}
	}
	return false
}

func metadataTypeTagFactory_property_value(property *schemametadata.MetadataProperty) *schemametadata.MetadataSchema {
	if property == nil {
		return nil
	}
	return property.Value
}

func metadataTypeTagFactory_essentialFieldsMessage() string {
	values := make([]string, 0, len(metadataTypeTagFactory_ESSENTIAL_FIELDS))
	for _, field := range metadataTypeTagFactory_ESSENTIAL_FIELDS {
		values = append(values, "'"+field+"'")
	}
	return strings.Join(values, ", ")
}
