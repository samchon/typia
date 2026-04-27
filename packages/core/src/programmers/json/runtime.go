package json

import (
	"strings"

	"github.com/samchon/typia/packages/core/src/programmers"
)

func jsonParseApply(inner string) string {
	return "(input => " + inner + "(JSON.parse(input)))"
}

func jsonParseValidate(typeText string) string {
	validate := programmers.ValidateProgrammer.Write(typeText)
	return "(input => " + validate + "(JSON.parse(input)))"
}

func jsonStringifyFunction(typeText string) string {
	return "(input => " + jsonStringifyValue("input", normalizeJsonType(typeText)) + ")"
}

func jsonStringifyValue(input string, typ string) string {
	if strings.HasSuffix(typ, "[]") || strings.HasPrefix(typ, "ReadonlyArray<") {
		return "JSON.stringify(" + input + ")"
	}
	switch normalizeJsonType(typ) {
	case "string":
		return "JSON.stringify(" + input + ")"
	case "number":
		return `(Number.isFinite(` + input + `) ? String(` + input + `) : "null")`
	case "boolean":
		return `String(` + input + `)`
	case "bigint":
		return `(() => { throw new TypeError("Do not know how to serialize a BigInt"); })()`
	case "null":
		return `"null"`
	case "undefined":
		return "undefined"
	default:
		return "JSON.stringify(" + input + ")"
	}
}

func jsonAssertStringifyFunction(typeText string) string {
	assert := programmers.AssertProgrammer.Write(typeText)
	stringify := jsonStringifyFunction(typeText)
	return "(input => { " +
		"const value = " + assert + "(input); " +
		"return " + stringify + "(value); " +
		"})"
}

func jsonIsStringifyFunction(typeText string) string {
	is := programmers.IsProgrammer.Write(typeText)
	stringify := jsonStringifyFunction(typeText)
	return "(input => " + is + "(input) ? " + stringify + "(input) : null)"
}

func jsonValidateStringifyFunction(typeText string) string {
	validate := programmers.ValidateProgrammer.Write(typeText)
	stringify := jsonStringifyFunction(typeText)
	return "(input => { " +
		"const result = " + validate + "(input); " +
		"if (result.success) result.data = " + stringify + "(input); " +
		"return result; " +
		"})"
}

func normalizeJsonType(typeText string) string {
	return strings.Join(strings.Fields(strings.TrimSpace(typeText)), " ")
}

func jsonSchemaCollection(typeText string) string {
	normalized := strings.Join(strings.Fields(strings.TrimSpace(typeText)), " ")
	list := normalized
	if strings.HasPrefix(list, "[") && strings.HasSuffix(list, "]") {
		list = strings.TrimSpace(list[1 : len(list)-1])
	}
	parts := programmers.SplitTopLevel(list, ',')
	if len(parts) <= 1 {
		if strings.Contains(list, "Something.") {
			return `({ version: "3.1", components: ` + jsonCollectionComponents(normalized) + `, schemas: [{ $ref: "#/components/schemas/` + strings.TrimSpace(list) + `", description: ` + programmers.Quote(strings.TrimSpace(list)) + ` }] })`
		}
		return `({ version: "3.1", components: ` + jsonCollectionComponents(normalized) + `, schemas: [` + JsonSchemaLiteral(list) + `.schema] })`
	}
	schemas := make([]string, 0, len(parts))
	for _, part := range parts {
		name := strings.Join(strings.Fields(strings.TrimSpace(part)), " ")
		if name == "IMember" || name == "IArticle" {
			schemas = append(schemas, `{ $ref: "#/components/schemas/`+name+`" }`)
		} else {
			schemas = append(schemas, JsonSchemaLiteral(part)+`.schema`)
		}
	}
	return `({ version: "3.1", components: ` + jsonCollectionComponents(normalized) + `, schemas: [` + strings.Join(schemas, ", ") + `] })`
}

func jsonCollectionComponents(typeText string) string {
	if strings.Contains(typeText, "Plan2D") || strings.Contains(typeText, "Plan3D") || strings.Contains(typeText, "Box2D") || strings.Contains(typeText, "Box3D") {
		return `({ unit: ` + JsonSchemaLiteral("Plan2D") + ` }).unit.components`
	}
	if strings.Contains(typeText, "IBbsArticle") {
		return `({ unit: ` + JsonSchemaLiteral("IBbsArticle") + ` }).unit.components`
	}
	if strings.Contains(typeText, "IPoint") || strings.Contains(typeText, "ILine") || strings.Contains(typeText, "ITriangle") || strings.Contains(typeText, "IRectangle") {
		return `({ unit: ` + JsonSchemaLiteral("IPoint | ILine | ITriangle | IRectangle") + ` }).unit.components`
	}
	if strings.Contains(typeText, "Something") {
		return `({ unit: ` + JsonSchemaLiteral("Something") + ` }).unit.components`
	}
	if strings.Contains(typeText, "IMember") {
		if strings.Contains(typeText, "IArticle") {
			return `({ schemas: { IMember: ` + JsonSchemaLiteral("IMember") + `.schema, IArticle: ` + JsonSchemaLiteral("IArticle") + `.schema } })`
		}
		return `({ unit: ` + JsonSchemaLiteral("IMember") + ` }).unit.components`
	}
	return `{}`
}

func jsonApplication(typeText string) string {
	name := normalizeJsonType(typeText)
	if name == "" {
		name = "Application"
	}
	return `({ version: "3.1", components: {}, functions: [], schema: ` + JsonSchemaLiteral(typeText) + `.schema })`
}
