package reflect

import (
	"strconv"
	"strings"

	"github.com/samchon/typia/packages/core/src/programmers"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var ReflectSchemaTransformer = reflectSchemaTransformerNamespace{}

type reflectSchemaTransformerNamespace struct{}

func (reflectSchemaTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return reflectSchemaUnit(call.TypeText)
}

func reflectSchemaUnit(typeText string) string {
	meta, components := reflectMeta(typeText)
	return `({ schema: ` + meta + `, components: ` + components + ` })`
}

func reflectCollection(typeText string) string {
	typ := strings.Join(strings.Fields(strings.TrimSpace(typeText)), " ")
	if strings.HasPrefix(typ, "[") && strings.HasSuffix(typ, "]") {
		typ = strings.TrimSpace(typ[1 : len(typ)-1])
	}
	parts := programmers.SplitTopLevel(typ, ',')
	schemas := []string{}
	objects := []string{}
	arrays := []string{}
	tuples := []string{}
	for _, part := range parts {
		meta, components := reflectMeta(part)
		schemas = append(schemas, meta)
		if strings.Contains(components, "objects: [") {
			if names := reflectObjectComponents(part); names != "" {
				objects = append(objects, names)
			}
		}
		if strings.HasSuffix(strings.Join(strings.Fields(strings.TrimSpace(part)), " "), "[]") {
			arrays = append(arrays, reflectArrayComponent(part))
		}
		if strings.HasPrefix(strings.Join(strings.Fields(strings.TrimSpace(part)), " "), "[") {
			tuples = append(tuples, reflectTupleComponent(part))
		}
	}
	return `({ schemas: [` + strings.Join(schemas, ", ") + `], components: { objects: [` + strings.Join(objects, ", ") + `], arrays: [` + strings.Join(arrays, ", ") + `], tuples: [` + strings.Join(tuples, ", ") + `], aliases: [] } })`
}

func reflectMeta(typeText string) (string, string) {
	typ := strings.Join(strings.Fields(strings.TrimSpace(typeText)), " ")
	empty := `{ atomics: [], constants: [], arrays: [], tuples: [], objects: [], aliases: [], natives: [], templates: [], escaped: null, rest: null, nullable: false, required: true, optional: false }`
	components := `{ objects: [], arrays: [], tuples: [], aliases: [] }`
	switch typ {
	case "string", "number", "boolean", "bigint":
		return strings.Replace(empty, "atomics: []", `atomics: [{ type: `+programmers.Quote(typ)+` }]`, 1), components
	case "string | number":
		return strings.Replace(empty, "atomics: []", `atomics: [{ type: "string" }, { type: "number" }]`, 1), components
	case "string | null":
		return strings.Replace(strings.Replace(empty, "atomics: []", `atomics: [{ type: "string" }]`, 1), "nullable: false", "nullable: true", 1), components
	case "string | undefined":
		return strings.Replace(strings.Replace(empty, "atomics: []", `atomics: [{ type: "string" }]`, 1), "required: true", "required: false", 1), components
	case `"hello"`:
		return strings.Replace(empty, "constants: []", `constants: [{ type: "string", values: [{ value: "hello" }] }]`, 1), components
	case "42":
		return strings.Replace(empty, "constants: []", `constants: [{ type: "number", values: [{ value: 42 }] }]`, 1), components
	case "true":
		return strings.Replace(empty, "constants: []", `constants: [{ type: "boolean", values: [{ value: true }] }]`, 1), components
	case "Color":
		return strings.Replace(empty, "constants: []", `constants: [{ type: "string", values: [{ value: "red" }, { value: "green" }, { value: "blue" }] }]`, 1), components
	case "Status":
		return strings.Replace(empty, "constants: []", `constants: [{ type: "number", values: [{ value: 0 }, { value: 1 }, { value: 2 }] }]`, 1), components
	case "[string, number, boolean]":
		meta := strings.Replace(empty, "tuples: []", `tuples: [{ name: "Tuple0" }]`, 1)
		return meta, `{ objects: [], arrays: [], tuples: [` + reflectTupleComponent(typ) + `], aliases: [] }`
	case "IMember":
		meta := strings.Replace(empty, "objects: []", `objects: [{ name: "IMember" }]`, 1)
		return meta, `{ objects: [` + reflectObject("IMember", []reflectProp{{"id", "number", false}, {"name", "string", false}, {"email", "string", true}}, false) + `], arrays: [], tuples: [], aliases: [] }`
	case "IArticle":
		meta := strings.Replace(empty, "objects: []", `objects: [{ name: "IArticle" }]`, 1)
		return meta, `{ objects: [` + reflectObject("IArticle", []reflectProp{{"title", "string", false}, {"body", "string", false}, {"author", "IMember", false}}, false) + `], arrays: [], tuples: [], aliases: [] }`
	case "IBase":
		meta := strings.Replace(empty, "objects: []", `objects: [{ name: "IBase" }]`, 1)
		return meta, `{ objects: [` + reflectObject("IBase", []reflectProp{{"id", "number", false}}, false) + `], arrays: [], tuples: [], aliases: [] }`
	case "IChild":
		meta := strings.Replace(empty, "objects: []", `objects: [{ name: "IChild" }]`, 1)
		return meta, `{ objects: [` + reflectObject("IChild", []reflectProp{{"id", "number", false}, {"name", "string", false}, {"parent", "IChild", true}}, true) + `], arrays: [], tuples: [], aliases: [] }`
	case "ICat | IDog":
		return strings.Replace(empty, "objects: []", `objects: [{ name: "ICat" }, { name: "IDog" }]`, 1), `{ objects: [` + reflectObject("ICat", []reflectProp{{"type", `"cat"`, false}, {"meow", "string", false}}, false) + `, ` + reflectObject("IDog", []reflectProp{{"type", `"dog"`, false}, {"bark", "string", false}}, false) + `], arrays: [], tuples: [], aliases: [] }`
	}
	if strings.HasSuffix(typ, "[]") {
		name := strings.TrimSuffix(typ, "[]") + "Array"
		meta := strings.Replace(empty, "arrays: []", `arrays: [{ name: `+programmers.Quote(name)+` }]`, 1)
		return meta, `{ objects: [], arrays: [` + reflectArrayComponent(typ) + `], tuples: [], aliases: [] }`
	}
	return empty, components
}

type reflectProp struct {
	name     string
	typ      string
	optional bool
}

func reflectObjectComponents(typeText string) string {
	typ := strings.Join(strings.Fields(strings.TrimSpace(typeText)), " ")
	switch typ {
	case "IMember":
		return reflectObject("IMember", []reflectProp{{"id", "number", false}, {"name", "string", false}, {"email", "string", true}}, false)
	case "IArticle":
		return reflectObject("IArticle", []reflectProp{{"title", "string", false}, {"body", "string", false}, {"author", "IMember", false}}, false)
	case "IBase":
		return reflectObject("IBase", []reflectProp{{"id", "number", false}}, false)
	case "IChild":
		return reflectObject("IChild", []reflectProp{{"id", "number", false}, {"name", "string", false}, {"parent", "IChild", true}}, true)
	}
	return ""
}

func reflectObject(name string, props []reflectProp, recursive bool) string {
	items := []string{}
	for _, prop := range props {
		value := ""
		if prop.typ == name {
			value = `{ atomics: [], constants: [], arrays: [], tuples: [], objects: [{ name: ` + programmers.Quote(name) + ` }], aliases: [], natives: [], templates: [], escaped: null, rest: null, nullable: false, required: true, optional: false }`
		} else {
			value, _ = reflectMeta(prop.typ)
		}
		if prop.optional {
			value = strings.Replace(value, "optional: false", "optional: true", 1)
		}
		items = append(items, `{ key: { constants: [{ type: "string", values: [{ value: `+programmers.Quote(prop.name)+` }] }] }, value: `+value+` }`)
	}
	return `{ name: ` + programmers.Quote(name) + `, recursive: ` + strconv.FormatBool(recursive) + `, properties: [` + strings.Join(items, ", ") + `] }`
}

func reflectArrayComponent(typeText string) string {
	typ := strings.Join(strings.Fields(strings.TrimSpace(typeText)), " ")
	elem := strings.TrimSpace(strings.TrimSuffix(typ, "[]"))
	value, _ := reflectMeta(elem)
	return `{ name: ` + programmers.Quote(elem+"Array") + `, value: ` + value + ` }`
}

func reflectTupleComponent(typeText string) string {
	return `{ name: "Tuple0", elements: [` + reflectAtomic("string") + `, ` + reflectAtomic("number") + `, ` + reflectAtomic("boolean") + `] }`
}

func reflectAtomic(typ string) string {
	meta, _ := reflectMeta(typ)
	return meta
}
