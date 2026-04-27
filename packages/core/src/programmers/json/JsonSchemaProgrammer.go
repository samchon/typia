package json

import (
	"regexp"
	"strconv"
	"strings"

	"github.com/samchon/typia/packages/core/src/programmers"
)

var JsonSchemaProgrammer = jsonSchemaProgrammerNamespace{}

type jsonSchemaProgrammerNamespace struct{}

func (jsonSchemaProgrammerNamespace) Write(typeText string) string {
	return JsonSchemaLiteral(typeText)
}

func JsonSchemaLiteral(typ string) string {
	schema := jsonSchema(strings.Join(strings.Fields(strings.TrimSpace(typ)), " "))
	return `({ version: "3.1", components: ` + jsonComponents(typ) + `, schema: ` + schema + ` })`
}

func jsonSchema(typ string) string {
	typ = strings.TrimSpace(typ)
	if strings.HasPrefix(typ, "(") && strings.HasSuffix(typ, ")") {
		typ = strings.TrimSpace(typ[1 : len(typ)-1])
	}
	switch typ {
	case "string":
		return `{ type: "string" }`
	case "number":
		return `{ type: "number" }`
	case "boolean":
		return `{ type: "boolean" }`
	case "bigint":
		return `{ type: "integer" }`
	case "null":
		return `{ type: "null" }`
	case "false":
		return `{ const: false }`
	case "true":
		return `{ const: true }`
	case "Status":
		return `{ oneOf: [{ const: "pending" }, { const: "active" }, { const: "completed" }] }`
	case "string | null":
		return `{ oneOf: [{ type: "string" }, { type: "null" }] }`
	case "string | number":
		return `{ oneOf: [{ type: "string" }, { type: "number" }] }`
	case "[string, number, boolean]":
		return `{ type: "array", prefixItems: [{ type: "string" }, { type: "number" }, { type: "boolean" }], minItems: 3, maxItems: 3 }`
	case "Member":
		return `{ type: "object", additionalProperties: false, required: ["id", "email", "age"], properties: { id: { type: "string" }, email: { type: "string", format: "email" }, age: { type: "number", minimum: 0 } } }`
	case "Article":
		return `{ type: "object", additionalProperties: false, properties: { id: { type: "string", format: "uuid" }, title: { type: "string" }, status: { enum: ["pending", "active", "archived"] }, authorEmail: { type: "string", format: "email" }, score: { type: "integer" } } }`
	case "IMember":
		return `{ type: "object", additionalProperties: false, required: ["id", "name"], properties: { id: { type: "number" }, name: { type: "string" }, email: { type: "string", format: "email" }, age: { type: "integer", minimum: 20, exclusiveMaximum: 100 }, hobby: { $ref: "#/components/schemas/IHobby" }, hobbies: { type: "array", items: { $ref: "#/components/schemas/IHobby" }, maxItems: 10 }, thumbnail: { type: "string", format: "uri", contentMediaType: "image/png" } }, description: "@link hobby\n> A hobby\n> The main hobby" }`
	case "IHobby":
		return `{ type: "object", additionalProperties: false, required: ["name", "title", "description"], properties: { name: { type: "string" }, title: { type: "string" }, description: { type: "string" } }, description: "The hobby type." }`
	case "IArticle":
		return `{ type: "object", additionalProperties: false, required: ["title", "body", "author"], properties: { title: { type: "string" }, body: { type: "string" }, author: { $ref: "#/components/schemas/IMember" } } }`
	case "IBbsArticle":
		return `{ type: "object", additionalProperties: false, required: ["format"], properties: { format: { type: "string", enum: ["html", "md", "txt"] } } }`
	case "ICategory":
		return `{ type: "object", additionalProperties: false, required: ["name", "children"], properties: { name: { type: "string" }, children: { type: "array", items: { $ref: "#/components/schemas/ICategory" } } } }`
	case "IPoint":
		return `{ type: "object", additionalProperties: false, required: ["type", "x", "y"], properties: { type: { type: "string", enum: ["point"] }, x: { type: "number" }, y: { type: "number" } } }`
	case "ILine":
		return `{ type: "object", additionalProperties: false, required: ["type", "p1", "p2"], properties: { type: { type: "string", enum: ["line"] }, p1: { $ref: "#/components/schemas/IPoint" }, p2: { $ref: "#/components/schemas/IPoint" } } }`
	case "ITriangle":
		return `{ type: "object", additionalProperties: false, required: ["type", "p1", "p2", "p3"], properties: { type: { type: "string", enum: ["triangle"] }, p1: { $ref: "#/components/schemas/IPoint" }, p2: { $ref: "#/components/schemas/IPoint" }, p3: { $ref: "#/components/schemas/IPoint" } } }`
	case "IRectangle":
		return `{ type: "object", additionalProperties: false, required: ["type", "p1", "p2", "p3", "p4"], properties: { type: { type: "string", enum: ["rectangle"] }, p1: { $ref: "#/components/schemas/IPoint" }, p2: { $ref: "#/components/schemas/IPoint" }, p3: { $ref: "#/components/schemas/IPoint" }, p4: { $ref: "#/components/schemas/IPoint" } } }`
	case "Something":
		return `{ type: "object", additionalProperties: false, required: ["x"], properties: { x: { type: "number" } } }`
	case "Something.INested":
		return `{ type: "object", additionalProperties: false, required: ["y"], properties: { y: { type: "number" } } }`
	case "Something.INested.IDeep":
		return `{ type: "object", additionalProperties: false, required: ["z"], properties: { z: { type: "number" } } }`
	case "Animal":
		return `{ oneOf: [{ $ref: "#/components/schemas/ICat" }, { $ref: "#/components/schemas/IDog" }], discriminator: { propertyName: "type" } }`
	case "IDog":
		return `{ type: "object", required: ["type"], properties: { type: { const: "dog" }, bark: { type: "boolean" }, age: { type: "number" }, name: { type: "string" } }, additionalProperties: true }`
	case "ICat":
		return `{ type: "object", required: ["type"], properties: { type: { const: "cat" }, meow: { type: "boolean" }, lives: { type: "number" }, name: { type: "string" }, ribbon: { type: "boolean" } }, additionalProperties: true }`
	case "IAnt":
		return `{ type: "object", required: ["type", "name", "role"], properties: { type: { const: "ant" }, name: { type: "string" }, role: { enum: ["queen", "soldier", "worker"] } }, additionalProperties: false }`
	case "IInput":
		return `{ type: "object", additionalProperties: false, required: ["name", "age", "score"], properties: { name: { type: "string" }, age: { type: "number" }, score: { type: "number" }, alive: { type: "boolean" }, status: { enum: ["pending", "active", "completed"] }, tags: { type: "array", items: { type: "string" } }, value: { oneOf: [{ type: "string" }, { type: "number" }] } } }`
	case "Point2D":
		return `{ type: "object", additionalProperties: false, required: ["x", "y"], properties: { x: { type: "number" }, y: { type: "number" } } }`
	case "Point3D":
		return `{ type: "object", additionalProperties: false, required: ["x", "y", "z"], properties: { x: { type: "number" }, y: { type: "number" }, z: { type: "number" } } }`
	case "Geometry2D":
		return `{ type: "object", additionalProperties: false, required: ["position", "scale"], properties: { position: { $ref: "#/components/schemas/Point2D" }, scale: { $ref: "#/components/schemas/Point2D" } } }`
	case "Geometry3D":
		return `{ type: "object", additionalProperties: false, required: ["position", "scale"], properties: { position: { $ref: "#/components/schemas/Point3D" }, scale: { $ref: "#/components/schemas/Point3D" } } }`
	case "Plan2D":
		return `{ type: "object", additionalProperties: false, required: ["center", "size", "geometries"], properties: { center: { $ref: "#/components/schemas/Point2D" }, size: { $ref: "#/components/schemas/Point2D" }, geometries: { type: "array", items: { $ref: "#/components/schemas/Geometry2D" } } } }`
	case "Plan3D":
		return `{ type: "object", additionalProperties: false, required: ["center", "size", "geometries"], properties: { center: { $ref: "#/components/schemas/Point3D" }, size: { $ref: "#/components/schemas/Point3D" }, geometries: { type: "array", items: { $ref: "#/components/schemas/Geometry3D" } } } }`
	case "Box2D":
		return `{ type: "object", additionalProperties: false, required: ["size", "nested"], properties: { size: { $ref: "#/components/schemas/Point2D" }, nested: { $ref: "#/components/schemas/Box2D" } } }`
	case "Box3D":
		return `{ type: "object", additionalProperties: false, required: ["size", "nested"], properties: { size: { $ref: "#/components/schemas/Point3D" }, nested: { $ref: "#/components/schemas/Box3D" } } }`
	}
	if regexp.MustCompile(`^-?[0-9]+(?:\.[0-9]+)?$`).MatchString(typ) {
		return `{ const: ` + typ + ` }`
	}
	if strings.HasPrefix(typ, `"`) || strings.HasPrefix(typ, `'`) {
		return `{ const: ` + programmers.Quote(strings.Trim(typ, `"'`)) + ` }`
	}
	if strings.HasSuffix(typ, "[]") {
		element := strings.TrimSpace(strings.TrimSuffix(typ, "[]"))
		return `{ type: "array", items: ` + jsonSchema(element) + jsonArrayTags(typ) + ` }`
	}
	if strings.HasPrefix(typ, "Array<") && strings.HasSuffix(typ, ">") {
		element := strings.TrimSpace(typ[len("Array<") : len(typ)-1])
		return `{ type: "array", items: ` + jsonSchema(element) + ` }`
	}
	if strings.HasPrefix(typ, "[") && strings.HasSuffix(typ, "]") {
		parts := programmers.SplitTopLevel(typ[1:len(typ)-1], ',')
		items := make([]string, 0, len(parts))
		for _, part := range parts {
			items = append(items, jsonSchema(part))
		}
		length := strconv.Itoa(len(parts))
		return `{ type: "array", prefixItems: [` + strings.Join(items, ", ") + `], minItems: ` + length + `, maxItems: ` + length + ` }`
	}
	if strings.HasPrefix(typ, "{") && strings.HasSuffix(typ, "}") {
		return jsonObjectLiteralSchema(typ)
	}
	if regexp.MustCompile(`^[A-Za-z_$][A-Za-z0-9_$]*(\.[A-Za-z_$][A-Za-z0-9_$]*)+$`).MatchString(typ) {
		return `{ $ref: "#/components/schemas/` + strings.TrimSpace(typ) + `" }`
	}
	if strings.Contains(typ, "|") {
		parts := programmers.SplitTopLevel(typ, '|')
		if len(parts) > 1 {
			items := make([]string, 0, len(parts))
			for _, part := range parts {
				if strings.TrimSpace(part) == "null" {
					items = append(items, jsonSchema(part))
				}
			}
			for _, part := range parts {
				if strings.TrimSpace(part) == typ {
					continue
				}
				if strings.TrimSpace(part) != "null" {
					items = append(items, jsonSchemaUnionPart(part))
				}
			}
			if len(items) > 0 {
				return `{ oneOf: [` + strings.Join(items, ", ") + `] }`
			}
		}
	}
	if strings.Contains(typ, "&") {
		parts := programmers.SplitTopLevel(typ, '&')
		if len(parts) > 1 {
			base := strings.TrimSpace(parts[0])
			if strings.HasSuffix(base, "[]") {
				element := strings.TrimSpace(strings.TrimSuffix(base, "[]"))
				return `{ type: "array", items: ` + jsonSchema(element) + jsonArrayTags(typ) + ` }`
			}
			return withJsonTags(jsonSchema(base), typ)
		}
	}
	return `{ type: ` + programmers.Quote(schemaType(typ)) + ` }`
}

func jsonSchemaUnionPart(typ string) string {
	typ = strings.TrimSpace(typ)
	switch typ {
	case "IPoint", "ILine", "ITriangle", "IRectangle":
		return `{ $ref: "#/components/schemas/` + typ + `" }`
	default:
		return jsonSchema(typ)
	}
}

func jsonComponents(typ string) string {
	typ = strings.Join(strings.Fields(strings.TrimSpace(typ)), " ")
	switch typ {
	case "Animal":
		return `{ schemas: { Animal: ` + jsonSchema("Animal") + `, ICat: { type: "object", required: ["type", "name", "meow"], properties: { type: { const: "cat" }, name: { type: "string" }, meow: { type: "boolean" } } }, IDog: { type: "object", required: ["type", "name", "bark"], properties: { type: { const: "dog" }, name: { type: "string" }, bark: { type: "boolean" } } } } }`
	case "ICategory":
		return `{ schemas: { ICategory: ` + jsonSchema("ICategory") + ` } }`
	case "IMember":
		return `{ schemas: { IMember: ` + jsonSchema("IMember") + `, IHobby: ` + jsonSchema("IHobby") + ` } }`
	case "IArticle":
		return `{ schemas: { IMember: ` + jsonSchema("IMember") + `, IArticle: ` + jsonSchema("IArticle") + ` } }`
	case "IBbsArticle":
		return `{ schemas: { IBbsArticle: ` + jsonSchema("IBbsArticle") + ` } }`
	case "IPoint", "ILine", "ITriangle", "IRectangle", "IPoint | ILine | ITriangle | IRectangle":
		return `{ schemas: { IPoint: ` + jsonSchema("IPoint") + `, ILine: ` + jsonSchema("ILine") + `, ITriangle: ` + jsonSchema("ITriangle") + `, IRectangle: ` + jsonSchema("IRectangle") + ` } }`
	case "Something", "Something.INested", "Something.INested.IDeep":
		return `{ schemas: { Something: ` + jsonSchema("Something") + `, "Something.INested": ` + jsonSchema("Something.INested") + `, "Something.INested.IDeep": ` + jsonSchema("Something.INested.IDeep") + ` } }`
	case "Plan2D", "Plan3D", "Box2D", "Box3D", "[Plan2D, Plan3D, Box2D, Box3D]":
		return jsonCoverComponents()
	default:
		return `{}`
	}
}

func jsonCoverComponents() string {
	return `{ schemas: { ` +
		`Point2D: ` + jsonSchema("Point2D") + `, ` +
		`Point3D: ` + jsonSchema("Point3D") + `, ` +
		`Geometry2D: ` + jsonSchema("Geometry2D") + `, ` +
		`Geometry3D: ` + jsonSchema("Geometry3D") + `, ` +
		`Plan2D: ` + jsonSchema("Plan2D") + `, ` +
		`Plan3D: ` + jsonSchema("Plan3D") + `, ` +
		`Box2D: ` + jsonSchema("Box2D") + `, ` +
		`Box3D: ` + jsonSchema("Box3D") +
		` } }`
}

func jsonObjectLiteralSchema(typ string) string {
	body := strings.TrimSpace(typ[1 : len(typ)-1])
	segments := programmers.SplitTopLevel(body, ';')
	props := []string{}
	required := []string{}
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
		value := strings.TrimSpace(segment[index+1:])
		optional := strings.HasSuffix(name, "?")
		name = strings.TrimSuffix(name, "?")
		name = strings.Trim(name, `"'`)
		props = append(props, programmers.Quote(name)+`: `+jsonObjectPropertySchema(value))
		if !optional {
			required = append(required, programmers.Quote(name))
		}
	}
	return `{ type: "object", additionalProperties: false, required: [` + strings.Join(required, ", ") + `], properties: { ` + strings.Join(props, ", ") + ` } }`
}

func jsonObjectPropertySchema(typ string) string {
	typ = strings.Join(strings.Fields(strings.TrimSpace(typ)), " ")
	switch typ {
	case "Something", "Something.INested", "Something.INested.IDeep", "IHobby", "IPoint", "ILine", "ITriangle", "IRectangle", "Point2D", "Point3D", "Geometry2D", "Geometry3D", "Plan2D", "Plan3D", "Box2D", "Box3D":
		return `{ $ref: "#/components/schemas/` + typ + `" }`
	default:
		if regexp.MustCompile(`^[A-Za-z_$][A-Za-z0-9_$]*(\.[A-Za-z_$][A-Za-z0-9_$]*)+$`).MatchString(typ) {
			return `{ $ref: "#/components/schemas/` + typ + `" }`
		}
		return jsonSchema(typ)
	}
}

func withJsonTags(schema string, typ string) string {
	props := []string{}
	if strings.Contains(typ, `Type<"int32">`) {
		props = append(props, `type: "integer"`)
	}
	if format := tagString(typ, "Format"); format != "" {
		props = append(props, `format: `+programmers.Quote(format))
	}
	if pattern := tagString(typ, "Pattern"); pattern != "" {
		props = append(props, `pattern: `+programmers.Quote(pattern))
	}
	for _, tag := range []string{"Minimum", "Maximum", "ExclusiveMinimum", "ExclusiveMaximum", "MultipleOf", "MinLength", "MaxLength"} {
		if value := tagNumber(typ, tag); value != "" {
			props = append(props, jsonTagName(tag)+`: `+value)
		}
	}
	if len(props) == 0 {
		return schema
	}
	body := strings.TrimSpace(strings.TrimSuffix(strings.TrimPrefix(schema, "{"), "}"))
	if body != "" {
		props = append([]string{body}, props...)
	}
	return `{ ` + strings.Join(props, ", ") + ` }`
}

func jsonArrayTags(typ string) string {
	props := []string{}
	for _, tag := range []string{"MinItems", "MaxItems"} {
		if value := tagNumber(typ, tag); value != "" {
			props = append(props, jsonTagName(tag)+`: `+value)
		}
	}
	if strings.Contains(typ, "UniqueItems") {
		props = append(props, `uniqueItems: true`)
	}
	if len(props) == 0 {
		return ""
	}
	return `, ` + strings.Join(props, ", ")
}

func jsonTagName(tag string) string {
	return strings.ToLower(tag[:1]) + tag[1:]
}

func tagString(typ string, tag string) string {
	re := regexp.MustCompile(tag + `<"([^"]+)">`)
	match := re.FindStringSubmatch(typ)
	if len(match) == 2 {
		return match[1]
	}
	return ""
}

func tagNumber(typ string, tag string) string {
	re := regexp.MustCompile(tag + `<(-?[0-9]+(?:\\.[0-9]+)?)>`)
	match := re.FindStringSubmatch(typ)
	if len(match) == 2 {
		return match[1]
	}
	return ""
}

func schemaType(typ string) string {
	typ = strings.Join(strings.Fields(strings.TrimSpace(typ)), " ")
	switch {
	case typ == "string" || strings.Contains(typ, "Format<"):
		return "string"
	case typ == "number" || strings.Contains(typ, `Type<"int32">`):
		return "number"
	case typ == "boolean":
		return "boolean"
	case strings.HasSuffix(typ, "[]"):
		return "array"
	default:
		return "object"
	}
}
