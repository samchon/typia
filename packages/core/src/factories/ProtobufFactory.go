package factories

import "fmt"

type protobufFactory struct{}

var ProtobufFactory protobufFactory

func (protobufFactory) Analyze(props ProtobufAnalyzeProps) (ProtobufSchema, error) {
	collection := NewMetadataCollection()
	result := MetadataFactory.Analyze(MetadataAnalyzeProps{
		Checker:    props.Checker,
		Components: collection,
		Type:       props.Type,
		Options: MetadataFactoryOptions{
			Absorb:   boolPtr(true),
			Constant: boolPtr(true),
			Validate: func(next MetadataValidateProps) []string {
				errors := ProtobufFactory.Validate(next.Metadata)
				if props.Validate != nil {
					errors = append(errors, props.Validate(next)...)
				}
				return errors
			},
		},
	})
	if !result.Success {
		return ProtobufSchema{}, TransformerErrorFrom(props.Method, result.Errors)
	}
	return ProtobufFactory.Schema(result.Data), nil
}

func (protobufFactory) Schema(metadata *MetadataSchema) ProtobufSchema {
	schema := ProtobufSchema{Messages: []ProtobufMessage{}}
	for _, object := range metadata.Objects {
		message := ProtobufMessage{Name: object.Type.Name, Properties: []ProtobufProperty{}}
		for i, property := range object.Type.Properties {
			sequence := i + 1
			if value := getSequenceFromMatrix(property.Value.TagMatrix()); value != nil {
				sequence = *value
			}
			message.Properties = append(message.Properties, ProtobufProperty{
				Name:     fmt.Sprint(property.Key.GetSoleLiteral()),
				Sequence: sequence,
				Type:     ProtobufFactory.PropertyType(property.Value),
				Required: property.Value.IsRequired(),
			})
		}
		schema.Messages = append(schema.Messages, message)
	}
	return schema
}

func (protobufFactory) PropertyType(metadata *MetadataSchema) ProtobufPropertyType {
	if len(metadata.Atomics) != 0 {
		switch metadata.Atomics[0].Type {
		case "boolean":
			return ProtobufPropertyType{Name: "bool"}
		case "bigint":
			return ProtobufPropertyType{Name: "int64"}
		case "number":
			return ProtobufPropertyType{Name: "double"}
		case "string":
			return ProtobufPropertyType{Name: "string"}
		}
	}
	if len(metadata.Arrays) != 0 {
		return ProtobufPropertyType{Name: "repeated", Element: ptrProtobufType(ProtobufFactory.PropertyType(metadata.Arrays[0].Type.Value))}
	}
	if len(metadata.Objects) != 0 {
		return ProtobufPropertyType{Name: metadata.Objects[0].Type.Name}
	}
	if len(metadata.Maps) != 0 {
		return ProtobufPropertyType{Name: "map", Key: ptrProtobufType(ProtobufFactory.PropertyType(metadata.Maps[0].Key)), Element: ptrProtobufType(ProtobufFactory.PropertyType(metadata.Maps[0].Value))}
	}
	if len(metadata.Natives) != 0 && metadata.Natives[0].Name == "Uint8Array" {
		return ProtobufPropertyType{Name: "bytes"}
	}
	return ProtobufPropertyType{Name: "unknown"}
}

func (protobufFactory) Validate(metadata *MetadataSchema) []string {
	errors := make([]string, 0)
	if metadata.Any {
		errors = append(errors, "any type")
	}
	if len(metadata.Tuples) != 0 {
		errors = append(errors, "tuple type")
	}
	if len(metadata.Sets) != 0 {
		errors = append(errors, "Set type")
	}
	for _, native := range metadata.Natives {
		if native.Name != "Uint8Array" {
			errors = append(errors, native.Name+" type")
		}
	}
	for _, array := range metadata.Arrays {
		if len(array.Type.Value.Arrays) != 0 {
			errors = append(errors, "over two dimensional array type")
		}
		if !array.Type.Value.IsRequired() || array.Type.Value.Nullable {
			errors = append(errors, "optional type in array")
		}
	}
	if metadata.Size() > 1 && len(metadata.Arrays) != 0 {
		errors = append(errors, "union type with array type")
	}
	if metadata.Size() > 1 && len(metadata.Maps) != 0 {
		errors = append(errors, "union type with map type")
	}
	return errors
}
