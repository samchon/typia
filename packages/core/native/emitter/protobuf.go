package emitter

import (
	"errors"
	"fmt"
	"strings"

	"github.com/samchon/typia/packages/core/native/metadata"
)

func EmitProtobufMessageExpression(schema *metadata.Schema) (string, error) {
	if schema == nil {
		return "", errors.New("emitter: nil schema")
	}
	obj := firstObjectType(schema)
	if obj == nil {
		return "", errors.New("protobuf.message: target type must be an object")
	}
	body, err := protobufMessage(obj)
	if err != nil {
		return "", err
	}
	return jsonQuote(body), nil
}

func EmitProtobufEncodeArrowFunction(schema *metadata.Schema) (string, error) {
	message, err := EmitProtobufMessageExpression(schema)
	if err != nil {
		return "", err
	}
	return fmt.Sprintf(`(() => { const __message = %s; const __pjs = require("protobufjs"); const __name = (() => { const __getter = (str) => str.split("message ")[1].split(" {")[0]; const __lines = __message.split("\n").slice(2); const __title = __getter(__lines[0]); return __lines[1] && __lines[1].indexOf("message") !== -1 ? __title + "." + __getter(__lines[1]) : __title; })(); const __type = __pjs.parse(__message, { keepCase: true }).root.lookupType(__name); return (input) => __type.encode(input).finish(); })()`, message), nil
}

func EmitProtobufDecodeArrowFunction(schema *metadata.Schema) (string, error) {
	message, err := EmitProtobufMessageExpression(schema)
	if err != nil {
		return "", err
	}
	return fmt.Sprintf(`(() => { const __message = %s; const __pjs = require("protobufjs"); const __name = (() => { const __getter = (str) => str.split("message ")[1].split(" {")[0]; const __lines = __message.split("\n").slice(2); const __title = __getter(__lines[0]); return __lines[1] && __lines[1].indexOf("message") !== -1 ? __title + "." + __getter(__lines[1]) : __title; })(); const __type = __pjs.parse(__message, { keepCase: true }).root.lookupType(__name); return (input) => __type.toObject(__type.decode(input), { longs: Number, enums: String, bytes: Uint8Array, defaults: false, arrays: true, objects: true }); })()`, message), nil
}

func protobufMessage(obj *metadata.ObjectType) (string, error) {
	lines := []string{fmt.Sprintf("message %s {", obj.Name)}
	index := 1
	for _, prop := range obj.Properties {
		if prop == nil || prop.Key == nil || prop.Value == nil {
			continue
		}
		name, ok := prop.Key.GetSoleLiteral()
		if !ok {
			return "", errors.New("protobuf.message: dynamic keys are not supported")
		}
		fieldType, repeated, err := protobufFieldType(prop.Value)
		if err != nil {
			return "", fmt.Errorf("protobuf.message.%s: %w", name, err)
		}
		modifier := ""
		if !repeated && (!prop.Value.IsRequired() || prop.Value.Optional) {
			modifier = "optional "
		}
		lines = append(lines, fmt.Sprintf("  %s%s %s = %d;", modifier, fieldType, name, index))
		index++
	}
	lines = append(lines, "}")
	return `syntax = "proto3";` + "\n\n" + strings.Join(lines, "\n"), nil
}

func protobufFieldType(schema *metadata.Schema) (string, bool, error) {
	if schema == nil {
		return "", false, errors.New("missing schema")
	}
	if len(schema.Maps) > 0 {
		ref := schema.Maps[0]
		key, _, err := protobufFieldType(ref.Key)
		if err != nil {
			return "", false, err
		}
		value, _, err := protobufFieldType(ref.Value)
		if err != nil {
			return "", false, err
		}
		return fmt.Sprintf("map<%s, %s>", key, value), true, nil
	}
	if len(schema.Arrays) > 0 && schema.Arrays[0] != nil && schema.Arrays[0].Type != nil {
		value, _, err := protobufFieldType(schema.Arrays[0].Type.Value)
		if err != nil {
			return "", false, err
		}
		return "repeated " + value, true, nil
	}
	if len(schema.Objects) > 0 && schema.Objects[0] != nil && schema.Objects[0].Type != nil {
		if schema.Objects[0].Type.AdditionalProperties != nil {
			value, _, err := protobufFieldType(schema.Objects[0].Type.AdditionalProperties)
			if err != nil {
				return "", false, err
			}
			return fmt.Sprintf("map<string, %s>", value), true, nil
		}
		return schema.Objects[0].Type.Name, false, nil
	}
	if len(schema.Constants) > 0 {
		switch schema.Constants[0].Type {
		case metadata.AtomicString:
			return "string", false, nil
		case metadata.AtomicBoolean:
			return "bool", false, nil
		case metadata.AtomicNumber:
			return "double", false, nil
		case metadata.AtomicBigint:
			return "int64", false, nil
		}
	}
	if len(schema.Atomics) > 0 {
		atomic := schema.Atomics[0]
		switch atomic.Type {
		case metadata.AtomicString:
			return "string", false, nil
		case metadata.AtomicBoolean:
			return "bool", false, nil
		case metadata.AtomicBigint:
			return "int64", false, nil
		case metadata.AtomicNumber:
			if typ := protobufNumberType(atomic.Tags); typ != "" {
				return typ, false, nil
			}
			return "double", false, nil
		}
	}
	return "", false, errors.New("unsupported property type")
}

func protobufNumberType(matrix metadata.TagMatrix) string {
	for _, row := range matrix {
		for _, tag := range row {
			if tag.Kind != "type" {
				continue
			}
			if value, ok := tag.Value.(string); ok {
				switch value {
				case "int32", "uint32", "int64", "uint64", "double", "float":
					return value
				}
			}
		}
	}
	return ""
}
