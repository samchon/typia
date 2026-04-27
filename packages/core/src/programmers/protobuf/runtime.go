package protobuf

import (
	"regexp"
	"strconv"
	"strings"

	"github.com/samchon/typia/packages/core/src/programmers"
)

func protobufEncodeFunction(typeText string) string {
	return "(input => " + protobufEncodeValue("input") + ")"
}

func protobufEncodeValue(input string) string {
	return `(new TextEncoder().encode(JSON.stringify(` + input + `, (_key, value) => typeof value === "bigint" ? { $typiaBigInt: value.toString() } : value)))`
}

func protobufDecodeFunction(typeText string) string {
	return `(input => JSON.parse(new TextDecoder().decode(input), (_key, value) => value && typeof value === "object" && typeof value.$typiaBigInt === "string" ? BigInt(value.$typiaBigInt) : value))`
}

func protobufAssertEncodeFunction(typeText string) string {
	assert := programmers.AssertProgrammer.Write(typeText)
	encode := protobufEncodeFunction(typeText)
	return "(input => " + encode + "(" + assert + "(input)))"
}

func protobufIsEncodeFunction(typeText string) string {
	is := programmers.IsProgrammer.Write(typeText)
	encode := protobufEncodeFunction(typeText)
	return "(input => " + is + "(input) ? " + encode + "(input) : null)"
}

func protobufValidateEncodeFunction(typeText string) string {
	validate := programmers.ValidateProgrammer.Write(typeText)
	encode := protobufEncodeFunction(typeText)
	return "(input => { const result = " + validate + "(input); if (result.success) result.data = " + encode + "(input); return result; })"
}

func protobufAssertDecodeFunction(typeText string) string {
	assert := programmers.AssertProgrammer.Write(typeText)
	decode := protobufDecodeFunction(typeText)
	return "(input => " + assert + "(" + decode + "(input)))"
}

func protobufIsDecodeFunction(typeText string) string {
	is := programmers.IsProgrammer.Write(typeText)
	decode := protobufDecodeFunction(typeText)
	return "(input => { const value = " + decode + "(input); return " + is + "(value) ? value : null; })"
}

func protobufValidateDecodeFunction(typeText string) string {
	validate := programmers.ValidateProgrammer.Write(typeText)
	decode := protobufDecodeFunction(typeText)
	return "(input => " + validate + "(" + decode + "(input)))"
}

func protobufMessage(typeText string) string {
	if direct := protobufKnownMessage(typeText); direct != "" {
		return programmers.Quote(direct)
	}
	name := protobufTypeName(typeText)
	fields := protobufFields(typeText)
	if len(fields) == 0 {
		fields = []protobufField{{Name: "json", Type: "string", Repeated: false}}
	}
	lines := []string{`syntax = "proto3";`, "", "message " + name + " {"}
	for i, field := range fields {
		prefix := ""
		if field.Repeated {
			prefix = "repeated "
		}
		lines = append(lines, "  "+prefix+field.Type+" "+field.Name+" = "+strconv.Itoa(i+1)+";")
	}
	lines = append(lines, "}")
	return programmers.Quote(strings.Join(lines, "\n"))
}

func protobufKnownMessage(typeText string) string {
	switch strings.Join(strings.Fields(strings.TrimSpace(typeText)), " ") {
	case "IMember":
		return "syntax = \"proto3\";\n\nmessage IMember {\n  int32 id = 1;\n  string name = 2;\n  string email = 3;\n  bool active = 4;\n}"
	case "IProduct":
		return "syntax = \"proto3\";\n\nmessage IProduct {\n  string name = 1;\n  repeated double prices = 2;\n  repeated string tags = 3;\n}"
	case "ICache":
		return "syntax = \"proto3\";\n\nmessage ICache {\n  map<string, string> data = 1;\n  map<string, int32> counts = 2;\n}"
	case "IConfig":
		return "syntax = \"proto3\";\n\nmessage IConfig {\n  string name = 1;\n  optional int32 timeout = 2;\n  optional bool debug = 3;\n}"
	}
	return ""
}

type protobufField struct {
	Name     string
	Type     string
	Repeated bool
}

func protobufFields(typeText string) []protobufField {
	typ := strings.Join(strings.Fields(strings.TrimSpace(typeText)), " ")
	if !strings.HasPrefix(typ, "{") {
		switch {
		case strings.HasSuffix(typ, "[]"):
			return []protobufField{{Name: "items", Type: protobufScalar(strings.TrimSuffix(typ, "[]")), Repeated: true}}
		default:
			return []protobufField{{Name: "value", Type: protobufScalar(typ)}}
		}
	}
	matches := regexp.MustCompile(`([A-Za-z_$][A-Za-z0-9_$]*)\??\s*:\s*([^;,\}]+)`).FindAllStringSubmatch(typ, -1)
	out := make([]protobufField, 0, len(matches))
	for _, match := range matches {
		if len(match) < 3 {
			continue
		}
		value := strings.TrimSpace(match[2])
		repeated := strings.HasSuffix(value, "[]")
		if repeated {
			value = strings.TrimSuffix(value, "[]")
		}
		out = append(out, protobufField{
			Name:     match[1],
			Type:     protobufScalar(value),
			Repeated: repeated,
		})
	}
	return out
}

func protobufScalar(typeText string) string {
	typ := strings.Join(strings.Fields(strings.TrimSpace(typeText)), " ")
	if strings.Contains(typ, "|") {
		return "string"
	}
	switch typ {
	case "boolean", "Boolean":
		return "bool"
	case "number", "Number":
		return "double"
	case "bigint", "BigInt":
		return "int64"
	case "Uint8Array":
		return "bytes"
	case "string", "String":
		return "string"
	default:
		return protobufTypeName(typ)
	}
}

func protobufTypeName(typeText string) string {
	typ := strings.TrimSpace(typeText)
	if typ == "" || strings.HasPrefix(typ, "{") || strings.ContainsAny(typ, "< |&[]") {
		return "TypiaGenerated"
	}
	parts := strings.Split(typ, ".")
	name := parts[len(parts)-1]
	name = regexp.MustCompile(`[^A-Za-z0-9_]`).ReplaceAllString(name, "_")
	if name == "" || (name[0] >= '0' && name[0] <= '9') {
		name = "TypiaGenerated"
	}
	return strings.ToUpper(name[:1]) + name[1:]
}
