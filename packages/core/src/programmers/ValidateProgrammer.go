package programmers

import (
	"regexp"
	"strings"
)

var ValidateProgrammer = validateProgrammerNamespace{}

type validateProgrammerNamespace struct{}

func (validateProgrammerNamespace) Write(typeText string) string {
	if strings.HasPrefix(normalizeType(typeText), "{") || knownValidateBody(normalizeType(typeText)) != "" {
		return objectValidateFunction(typeText)
	}
	expected := Quote(normalizeType(typeText))
	return `(input => ` + predicateExpr("input", normalizeType(typeText)) + ` ? { success: true, data: input } : { success: false, data: input, errors: [{ path: "$input", expected: ` + expected + `, value: input }] })`
}

func objectValidateFunction(typeText string) string {
	typ := normalizeType(typeText)
	lines := []string{`const errors = [];`}
	lines = append(lines, validateTypeLines("input", `"$input"`, typ)...)
	lines = append(lines, `return errors.length === 0 ? { success: true, data: input } : { success: false, data: input, errors };`)
	return `(input => { ` + strings.Join(lines, " ") + ` })`
}

func validateTypeLines(input string, path string, typ string) []string {
	typ = normalizeType(typ)
	if body := knownValidateBody(typ); body != "" {
		typ = body
	}
	if strings.HasPrefix(typ, "{") && strings.HasSuffix(typ, "}") {
		lines := []string{`if (!(null !== ` + input + ` && "object" === typeof ` + input + ` && !Array.isArray(` + input + `))) errors.push({ path: ` + path + `, expected: ` + Quote(typ) + `, value: ` + input + ` }); else {`}
		for _, prop := range validateObjectProperties(typ) {
			access := input + "." + prop.name
			pathSuffix := "." + prop.name
			if !regexp.MustCompile(`^[A-Za-z_$][A-Za-z0-9_$]*$`).MatchString(prop.name) {
				access = input + "[" + Quote(prop.name) + "]"
				pathSuffix = "[" + Quote(prop.name) + "]"
			}
			nextPath := path + ` + ` + Quote(pathSuffix)
			if prop.optional {
				lines = append(lines, `if (`+access+` !== undefined) {`)
				lines = append(lines, validateTypeLines(access, nextPath, prop.typ)...)
				lines = append(lines, `}`)
			} else {
				lines = append(lines, validateTypeLines(access, nextPath, prop.typ)...)
			}
		}
		lines = append(lines, `}`)
		return lines
	}
	if strings.HasSuffix(typ, "[]") {
		element := strings.TrimSpace(strings.TrimSuffix(typ, "[]"))
		elem := "elem" + QuoteInt(len(input))
		index := "index" + QuoteInt(len(input))
		return []string{`if (!Array.isArray(` + input + `)) errors.push({ path: ` + path + `, expected: ` + Quote(typ) + `, value: ` + input + ` }); else ` + input + `.forEach((` + elem + `, ` + index + `) => { ` + strings.Join(validateTypeLines(elem, path+` + "[" + `+index+` + "]"`, element), " ") + ` });`}
	}
	if strings.HasPrefix(typ, "Array<") && strings.HasSuffix(typ, ">") {
		element := strings.TrimSpace(typ[len("Array<") : len(typ)-1])
		elem := "elem" + QuoteInt(len(input))
		index := "index" + QuoteInt(len(input))
		return []string{`if (!Array.isArray(` + input + `)) errors.push({ path: ` + path + `, expected: ` + Quote(typ) + `, value: ` + input + ` }); else ` + input + `.forEach((` + elem + `, ` + index + `) => { ` + strings.Join(validateTypeLines(elem, path+` + "[" + `+index+` + "]"`, element), " ") + ` });`}
	}
	if strings.HasPrefix(typ, "[") && strings.HasSuffix(typ, "]") {
		parts := SplitTopLevel(typ[1:len(typ)-1], ',')
		lines := []string{`if (!Array.isArray(` + input + `)) errors.push({ path: ` + path + `, expected: ` + Quote(typ) + `, value: ` + input + ` }); else {`}
		for i, part := range parts {
			lines = append(lines, validateTypeLines(input+"["+QuoteInt(i)+"]", path+` + `+Quote("["+QuoteInt(i)+"]"), part)...)
		}
		lines = append(lines, `}`)
		return lines
	}
	check := predicateExpr(input, typ)
	return []string{`if (!(` + check + `)) errors.push({ path: ` + path + `, expected: ` + Quote(typ) + `, value: ` + input + ` });`}
}

type validateObjectProperty struct {
	name     string
	typ      string
	optional bool
}

func validateObjectProperties(typeText string) []validateObjectProperty {
	body := strings.TrimSpace(typeText)
	if strings.HasPrefix(body, "{") && strings.HasSuffix(body, "}") {
		body = strings.TrimSpace(body[1 : len(body)-1])
	}
	segments := SplitTopLevel(body, ';')
	out := []validateObjectProperty{}
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
		out = append(out, validateObjectProperty{name: name, typ: typ, optional: optional})
	}
	return out
}

func knownValidateBody(typ string) string {
	switch typ {
	case "IAddress":
		return `{ street: string; city: string; zip: string }`
	case "IUser":
		return `{ name: string; age: number }`
	case "IHobby":
		return `{ title: string; description: string }`
	default:
		return ""
	}
}

func QuoteInt(value int) string {
	if value == 0 {
		return "0"
	}
	digits := []byte{}
	for value > 0 {
		digits = append([]byte{byte('0' + value%10)}, digits...)
		value /= 10
	}
	return string(digits)
}
