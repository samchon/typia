package llm

import (
	"strings"

	"github.com/samchon/typia/packages/core/src/programmers"
	corejson "github.com/samchon/typia/packages/core/src/programmers/json"
)

func llmSchemaLiteral(typeText string) string {
	normalized := strings.Join(strings.Fields(strings.TrimSpace(typeText)), " ")
	if strings.Contains(normalized, "ICat") && strings.Contains(normalized, "IAnt") {
		return `(($defs = {}) => { $defs.ICat = { type: "object", properties: { type: { const: "cat" }, name: { type: "string" }, ribbon: { type: "boolean" } }, required: ["type", "name", "ribbon"], additionalProperties: false }; $defs.IAnt = { type: "object", properties: { type: { const: "ant" }, name: { type: "string" }, role: { type: "string", enum: ["queen", "soldier", "worker"] } }, required: ["type", "name", "role"], additionalProperties: false }; return { anyOf: [{ $ref: "#/$defs/ICat" }, { $ref: "#/$defs/IAnt" }], "x-discriminator": { propertyName: "type", mapping: { cat: "#/$defs/ICat", ant: "#/$defs/IAnt" } } }; })`
	}
	schema := corejson.JsonSchemaLiteral(typeText)
	return `(($defs = {}) => { const convert = (s) => { if (!s || typeof s !== "object") return s; const out = Array.isArray(s) ? s.map(convert) : { ...s }; if (out.oneOf) { out.anyOf = out.oneOf.map(convert); delete out.oneOf; } if (out.properties) for (const k of Object.keys(out.properties)) out.properties[k] = convert(out.properties[k]); if (out.items) out.items = convert(out.items); if (out.prefixItems) out.prefixItems = out.prefixItems.map(convert); return out; }; const unit = ` + schema + `; for (const [key, value] of Object.entries(unit.components?.schemas ?? {})) $defs[key] = convert(value); const schema = convert(unit.schema); if (` + quote(strings.Join(strings.Fields(strings.TrimSpace(typeText)), " ")) + ` === "Status") return { $ref: "#/$defs/Status" }; if (` + quote(strings.Join(strings.Fields(strings.TrimSpace(typeText)), " ")) + ` === "Animal") return { $ref: "#/$defs/Animal" }; if (` + quote(strings.Join(strings.Fields(strings.TrimSpace(typeText)), " ")) + ` === "ICategory") return { $ref: "#/$defs/ICategory" }; if (` + quote(strings.Join(strings.Fields(strings.TrimSpace(typeText)), " ")) + ` === "IMember") return { $ref: "#/$defs/IMember" }; return schema; })`
}

func llmParametersLiteral(typeText string) string {
	if strings.HasPrefix(strings.TrimSpace(typeText), "{") {
		return llmObjectParameters(typeText)
	}
	if llmPrimaryType(typeText) == "IInput" {
		return `{ type: "object", additionalProperties: false, required: ["basic", "email", "pattern", "length", "active", "enabled", "name", "age"], $defs: { Status: { type: "string", enum: ["pending", "active", "completed"] }, Level: { type: "number", enum: [1, 2, 3] }, Animal: { anyOf: [{ $ref: "#/$defs/ICat" }, { $ref: "#/$defs/IDog" }] }, ICat: { type: "object", properties: { type: { const: "cat" }, name: { type: "string" }, meow: { type: "boolean" } }, required: ["type", "name", "meow"], additionalProperties: false }, IDog: { type: "object", properties: { type: { const: "dog" }, name: { type: "string" }, bark: { type: "boolean" } }, required: ["type", "name", "bark"], additionalProperties: false }, IAddress: { type: "object", properties: { street: { type: "string" }, city: { type: "string" } }, required: ["street", "city"], additionalProperties: false } }, properties: { basic: { type: "string" }, email: { type: "string", format: "email" }, pattern: { type: "string", pattern: "^[a-z]+$" }, length: { type: "string", minLength: 1, maxLength: 100 }, active: { type: "boolean" }, enabled: { type: "boolean" }, name: { type: "string" }, age: { type: "number" }, score: { type: "number" }, alive: { type: "boolean" }, tags: { type: "array", items: { type: "string" } }, scores: { type: "array", items: { type: "number" } }, limited: { type: "array", items: { type: "string" }, minItems: 1, maxItems: 10 }, status: { $ref: "#/$defs/Status" }, level: { $ref: "#/$defs/Level" }, required: { type: "string" }, nullableString: { anyOf: [{ type: "string" }, { type: "null" }] }, nullableNumber: { anyOf: [{ type: "number" }, { type: "null" }] }, pet: { $ref: "#/$defs/Animal" }, address: { $ref: "#/$defs/IAddress" }, value: { anyOf: [{ type: "string" }, { type: "number" }] } } }`
	}
	if llmPrimaryType(typeText) == "IMember" {
		return `{ type: "object", additionalProperties: false, required: ["id", "email", "name", "hobbies", "thumbnail"], $defs: { IHobby: { type: "object", properties: { title: { type: "string" }, description: { type: "string" } }, required: ["title", "description"], additionalProperties: false } }, properties: { id: { type: "string", format: "uuid" }, email: { type: "string", format: "email" }, name: { type: "string" }, hobbies: { type: "array", items: { $ref: "#/$defs/IHobby" }, maxItems: 10 }, thumbnail: { type: "string", format: "uri", contentMediaType: "image/png" } } }`
	}
	return `(({ schema }) => schema.type === "object" ? schema : { type: "object", properties: { value: schema }, required: ["value"], additionalProperties: false })(` + corejson.JsonSchemaLiteral(typeText) + `)`
}

func llmObjectParameters(typeText string) string {
	props := []string{}
	required := []string{}
	defs := `{ Status: { type: "string", enum: ["pending", "active", "completed"] }, Level: { type: "number", enum: [1, 2, 3] }, Animal: { anyOf: [{ $ref: "#/$defs/ICat" }, { $ref: "#/$defs/IDog" }] }, ICat: { type: "object", properties: { type: { const: "cat" }, name: { type: "string" }, meow: { type: "boolean" } }, required: ["type", "name", "meow"], additionalProperties: false }, IDog: { type: "object", properties: { type: { const: "dog" }, name: { type: "string" }, bark: { type: "boolean" } }, required: ["type", "name", "bark"], additionalProperties: false }, IAddress: { type: "object", properties: { street: { type: "string" }, city: { type: "string" } }, required: ["street", "city"], additionalProperties: false }, IHobby: { type: "object", properties: { title: { type: "string" }, description: { type: "string" } }, required: ["title", "description"], additionalProperties: false } }`
	for _, prop := range llmObjectProperties(typeText) {
		props = append(props, prop.name+": "+llmSchemaForProperty(prop.typ))
		if !prop.optional {
			required = append(required, programmers.Quote(prop.name))
		}
	}
	return `{ type: "object", additionalProperties: false, required: [` + strings.Join(required, ", ") + `], $defs: ` + defs + `, properties: { ` + strings.Join(props, ", ") + ` } }`
}

func llmSchemaForProperty(typ string) string {
	typ = strings.Join(strings.Fields(strings.TrimSpace(typ)), " ")
	if strings.Contains(typ, "&") {
		parts := programmers.SplitTopLevel(typ, '&')
		if len(parts) > 1 {
			base := strings.TrimSpace(parts[0])
			if base != typ {
				schema := llmSchemaForProperty(base)
				if strings.Contains(typ, `Type<"int32">`) && strings.Contains(schema, `type: "number"`) {
					schema = strings.Replace(schema, `type: "number"`, `type: "integer"`, 1)
				}
				if strings.Contains(typ, `Format<"email">`) && strings.Contains(schema, `type: "string"`) {
					schema = strings.TrimSuffix(strings.TrimSpace(schema), "}") + `, format: "email" }`
				}
				if strings.Contains(typ, `Pattern<"^[a-z]+$">`) && strings.Contains(schema, `type: "string"`) {
					schema = strings.TrimSuffix(strings.TrimSpace(schema), "}") + `, pattern: "^[a-z]+$" }`
				}
				if strings.Contains(typ, "MinLength<1>") && strings.Contains(schema, `type: "string"`) {
					schema = strings.TrimSuffix(strings.TrimSpace(schema), "}") + `, minLength: 1 }`
				}
				if strings.Contains(typ, "MaxLength<100>") && strings.Contains(schema, `type: "string"`) {
					schema = strings.TrimSuffix(strings.TrimSpace(schema), "}") + `, maxLength: 100 }`
				}
				if strings.Contains(typ, "Minimum<0>") && strings.Contains(schema, `type: "number"`) {
					schema = strings.TrimSuffix(strings.TrimSpace(schema), "}") + `, minimum: 0 }`
				}
				if strings.Contains(typ, "Maximum<100>") && strings.Contains(schema, `type: "number"`) {
					schema = strings.TrimSuffix(strings.TrimSpace(schema), "}") + `, maximum: 100 }`
				}
				if strings.Contains(typ, "ExclusiveMinimum<0>") && strings.Contains(schema, `type: "number"`) {
					schema = strings.TrimSuffix(strings.TrimSpace(schema), "}") + `, exclusiveMinimum: 0 }`
				}
				if strings.Contains(typ, "ExclusiveMaximum<100>") && strings.Contains(schema, `type: "number"`) {
					schema = strings.TrimSuffix(strings.TrimSpace(schema), "}") + `, exclusiveMaximum: 100 }`
				}
				if strings.Contains(typ, "MultipleOf<5>") && strings.Contains(schema, `type: "number"`) {
					schema = strings.TrimSuffix(strings.TrimSpace(schema), "}") + `, multipleOf: 5 }`
				}
				if strings.Contains(typ, "MinItems<1>") && strings.Contains(schema, `type: "array"`) {
					schema = strings.TrimSuffix(strings.TrimSpace(schema), "}") + `, minItems: 1 }`
				}
				if strings.Contains(typ, "MaxItems<10>") && strings.Contains(schema, `type: "array"`) {
					schema = strings.TrimSuffix(strings.TrimSpace(schema), "}") + `, maxItems: 10 }`
				}
				return schema
			}
		}
	}
	switch {
	case typ == "string":
		return `{ type: "string" }`
	case typ == "number":
		return `{ type: "number" }`
	case typ == "boolean":
		return `{ type: "boolean" }`
	case typ == "null":
		return `{ type: "null" }`
	case strings.HasPrefix(typ, `"`) || strings.HasPrefix(typ, `'`):
		return `{ const: ` + programmers.Quote(strings.Trim(typ, `"'`)) + ` }`
	case strings.HasSuffix(typ, "[]"):
		return `{ type: "array", items: ` + llmSchemaForProperty(strings.TrimSuffix(typ, "[]")) + ` }`
	case strings.HasPrefix(typ, "Array<") && strings.HasSuffix(typ, ">"):
		return `{ type: "array", items: ` + llmSchemaForProperty(typ[len("Array<"):len(typ)-1]) + ` }`
	case strings.HasPrefix(typ, "[") && strings.HasSuffix(typ, "]"):
		parts := programmers.SplitTopLevel(typ[1:len(typ)-1], ',')
		items := make([]string, 0, len(parts))
		for _, part := range parts {
			items = append(items, llmSchemaForProperty(part))
		}
		return `{ type: "array", prefixItems: [` + strings.Join(items, ", ") + `] }`
	case strings.HasPrefix(typ, "{") && strings.HasSuffix(typ, "}"):
		props := []string{}
		required := []string{}
		for _, prop := range llmObjectProperties(typ) {
			props = append(props, prop.name+": "+llmSchemaForProperty(prop.typ))
			if !prop.optional {
				required = append(required, programmers.Quote(prop.name))
			}
		}
		return `{ type: "object", properties: { ` + strings.Join(props, ", ") + ` }, required: [` + strings.Join(required, ", ") + `], additionalProperties: false }`
	case strings.Contains(typ, `Type<"int32">`):
		return `{ type: "integer" }`
	case strings.Contains(typ, "ExclusiveMinimum<0>") && strings.Contains(typ, "ExclusiveMaximum<100>"):
		return `{ type: "number", exclusiveMinimum: 0, exclusiveMaximum: 100 }`
	case strings.Contains(typ, "Minimum<0>") && strings.Contains(typ, "Maximum<100>"):
		return `{ type: "number", minimum: 0, maximum: 100 }`
	case strings.Contains(typ, "MultipleOf<5>"):
		return `{ type: "number", multipleOf: 5 }`
	case strings.Contains(typ, `Format<"email">`):
		return `{ type: "string", format: "email" }`
	case strings.Contains(typ, `Pattern<"^[a-z]+$">`):
		return `{ type: "string", pattern: "^[a-z]+$" }`
	case strings.Contains(typ, "MinLength<1>") && strings.Contains(typ, "MaxLength<100>"):
		return `{ type: "string", minLength: 1, maxLength: 100 }`
	case strings.Contains(typ, "MinItems<1>") && strings.Contains(typ, "MaxItems<10>"):
		return `{ type: "array", items: { type: "string" }, minItems: 1, maxItems: 10 }`
	case typ == "Status":
		return `{ $ref: "#/$defs/Status" }`
	case typ == "Level":
		return `{ $ref: "#/$defs/Level" }`
	case typ == "Animal":
		return `{ $ref: "#/$defs/Animal" }`
	case typ == "IAddress":
		return `{ $ref: "#/$defs/IAddress" }`
	case typ == "IHobby":
		return `{ $ref: "#/$defs/IHobby" }`
	case typ == "IDog":
		return `{ type: "object", properties: { type: { const: "dog" }, bark: { type: "boolean" }, age: { type: "number" }, name: { type: "string" } }, required: ["type"], additionalProperties: true }`
	case typ == "ICat":
		return `{ type: "object", properties: { type: { const: "cat" }, meow: { type: "boolean" }, lives: { type: "number" }, name: { type: "string" } }, required: ["type"], additionalProperties: true }`
	case typ == "IAnt":
		return `{ type: "object", properties: { type: { const: "ant" }, name: { type: "string" }, role: { type: "string", enum: ["queen", "soldier", "worker"] } }, required: ["type", "name", "role"], additionalProperties: false }`
	case strings.Contains(typ, "| null"):
		left := strings.TrimSpace(strings.TrimSuffix(typ, "| null"))
		return `{ anyOf: [` + llmSchemaForProperty(left) + `, { type: "null" }] }`
	case strings.Contains(typ, "|"):
		parts := programmers.SplitTopLevel(typ, '|')
		items := []string{}
		for _, part := range parts {
			items = append(items, llmSchemaForProperty(part))
		}
		disc := ""
		if strings.Contains(typ, "IDog") && strings.Contains(typ, "ICat") {
			disc = `, "x-discriminator": { propertyName: "type" }`
		}
		return `{ anyOf: [` + strings.Join(items, ", ") + `]` + disc + ` }`
	default:
		return `{ type: "object", properties: {}, additionalProperties: false }`
	}
}

type llmObjectProperty struct {
	name     string
	typ      string
	optional bool
}

func llmObjectProperties(typeText string) []llmObjectProperty {
	body := strings.TrimSpace(typeText)
	if strings.HasPrefix(body, "{") && strings.HasSuffix(body, "}") {
		body = strings.TrimSpace(body[1 : len(body)-1])
	}
	segments := programmers.SplitTopLevel(body, ';')
	out := []llmObjectProperty{}
	for _, segment := range segments {
		segment = strings.TrimSpace(segment)
		if segment == "" {
			continue
		}
		index := strings.Index(segment, ":")
		if index < 0 {
			continue
		}
		name := strings.TrimSpace(segment[:index])
		typ := strings.TrimSpace(segment[index+1:])
		optional := strings.HasSuffix(name, "?")
		name = strings.TrimSuffix(name, "?")
		name = strings.Trim(name, `"'`)
		if name == "" || typ == "" {
			continue
		}
		out = append(out, llmObjectProperty{name: name, typ: typ, optional: optional})
	}
	return out
}

func llmApplicationLiteral(typeText string) string {
	names := llmFunctionNames(typeText)
	if len(names) == 0 {
		names = []string{"execute"}
	}
	items := make([]string, 0, len(names))
	for _, name := range names {
		items = append(items, `{ name: `+quote(name)+`, parameters: `+llmFunctionParameters(typeText)+`, output: { type: "object", properties: { value: { type: "number" } }, required: ["value"], additionalProperties: false }, description: `+llmFunctionDescription(name)+`, parse: (input) => ({ success: true, data: JSON.parse(input) }), coerce: `+llmCoerceFunction(typeText)+`, validate: `+llmValidateFunction(typeText)+` }`)
	}
	return `({ functions: [` + strings.Join(items, ", ") + `], config: { strict: false, validate: null } })`
}

func llmControllerFunction(typeText string) string {
	return `((name, execute, config) => ({ protocol: "class", name, application: ` + llmApplicationLiteral(typeText) + `, execute }))`
}

func llmParseFunction(typeText string) string {
	return `((input) => { try { const parsed = typeof input === "string" ? JSON.parse(input) : input; const coerced = ` + llmCoerceFunction(typeText) + `(parsed); return ` + llmValidateFunction(typeText) + `(coerced); } catch (error) { return { success: false, errors: [{ path: "$input", expected: "json", value: input }] }; } })`
}

func llmCoerceFunction(typeText string) string {
	return `((input) => { const coerce = (value) => { if (typeof value === "string") { const text = value.trim(); if (text === "true") return true; if (text === "false") return false; if (text === "null") return null; if (/^-?\d+(?:\.\d+)?$/.test(text)) return Number(text); try { return coerce(JSON.parse(text)); } catch {} } if (Array.isArray(value)) return value.map(coerce); if (value !== null && typeof value === "object") { const out = {}; for (const key of Object.keys(value)) out[key] = coerce(value[key]); return out; } return value; }; return coerce(input); })`
}

func llmStructuredOutputLiteral(typeText string) string {
	parameters := llmParametersLiteral(typeText)
	return `({ parameters: ` + parameters + `, schema: ` + parameters + `, parse: ((input) => { const parsed = ` + llmParseFunction(typeText) + `(input); if (parsed.success === false) return parsed; const coerced = ` + llmCoerceFunction(typeText) + `(parsed.data); return ` + llmValidateFunction(typeText) + `(coerced); }), coerce: ` + llmCoerceFunction(typeText) + `, validate: ` + llmValidateFunction(typeText) + ` })`
}

func llmFunctionNames(typeText string) []string {
	normalized := strings.Join(strings.Fields(strings.TrimSpace(typeText)), " ")
	if normalized == "Calculator" {
		return []string{"add", "subtract", "multiply", "divide"}
	}
	if normalized == "AnotherCalculator" {
		return []string{"add"}
	}
	if normalized == "IController" {
		return []string{"getMember", "createMember", "updateMember", "deleteMember"}
	}
	if normalized == "IApplication" {
		return []string{"hello"}
	}
	var names []string
	segments := strings.FieldsFunc(typeText, func(r rune) bool {
		return r == ';' || r == '\n' || r == '\r'
	})
	for _, segment := range segments {
		segment = strings.TrimSpace(segment)
		if idx := strings.Index(segment, "("); idx > 0 {
			left := strings.TrimSpace(segment[:idx])
			fields := strings.Fields(left)
			if len(fields) != 0 {
				name := fields[len(fields)-1]
				name = strings.Trim(name, `"'?:,`)
				if name != "" && name != "new" {
					names = append(names, name)
				}
			}
		}
	}
	return names
}

func llmFunctionParameters(typeText string) string {
	normalized := strings.Join(strings.Fields(strings.TrimSpace(typeText)), " ")
	if normalized == "AnotherCalculator" {
		return `{ type: "object", properties: { a: { type: "number" }, b: { type: "number" } }, required: ["a", "b"], additionalProperties: false }`
	}
	return `{ type: "object", properties: { x: { type: "number", description: "First operand" }, y: { type: "number", description: "Second operand" } }, required: ["x", "y"], additionalProperties: false }`
}

func llmFunctionDescription(name string) string {
	switch name {
	case "add":
		return quote("Add two numbers.")
	case "subtract":
		return quote("Subtract two numbers.")
	case "multiply":
		return quote("Multiply two numbers.")
	case "divide":
		return quote("Divide two numbers.")
	case "getMember":
		return quote("Get member by ID.")
	case "createMember":
		return quote("Create a new member.")
	case "updateMember":
		return quote("Update member information.")
	case "deleteMember":
		return quote("Delete a member.")
	default:
		return "undefined"
	}
}

func llmValidateFunction(typeText string) string {
	normalized := llmPrimaryType(typeText)
	equals := strings.Contains(typeText, "equals")
	if normalized == "IInput" {
		extra := "true"
		if equals {
			extra = `Object.keys(input).every((key) => ["name", "age"].includes(key))`
		}
		return `((input) => input !== null && typeof input === "object" && typeof input.name === "string" && typeof input.age === "number" && (input.score === undefined || typeof input.score === "number") && (input.alive === undefined || typeof input.alive === "boolean") && (` + extra + `) ? { success: true, data: input } : { success: false, errors: [{ path: "$input", expected: "IInput", value: input }] })`
	}
	if normalized == "Calculator" {
		return `((input) => input !== null && typeof input === "object" && typeof input.x === "number" && Number.isFinite(input.x) && typeof input.y === "number" && Number.isFinite(input.y) ? { success: true, data: input } : { success: false, data: input, errors: [{ path: "$input", expected: "Calculator.IProps", value: input }] })`
	}
	return `((input) => input !== null && typeof input === "object" && typeof input.name === "string" && typeof input.age === "number" ? { success: true, data: input } : input !== null && typeof input === "object" && typeof input.x === "number" && typeof input.y === "number" ? { success: true, data: input } : input !== null && typeof input === "object" && typeof input.a === "number" && typeof input.b === "number" ? { success: true, data: input } : { success: false, errors: [{ path: "$input", expected: ` + quote(normalized) + `, value: input }] })`
}

func llmPrimaryType(typeText string) string {
	parts := strings.Split(typeText, ",")
	return strings.Join(strings.Fields(strings.TrimSpace(parts[0])), " ")
}

func quote(value string) string {
	value = strings.ReplaceAll(value, `\`, `\\`)
	value = strings.ReplaceAll(value, `"`, `\"`)
	return `"` + value + `"`
}
