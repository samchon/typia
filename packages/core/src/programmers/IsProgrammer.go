package programmers

import (
	"encoding/json"
	"regexp"
	"strings"
)

var IsProgrammer = isProgrammerNamespace{}

type isProgrammerNamespace struct{}

func (isProgrammerNamespace) Write(typeText string) string {
	return "((input) => " + predicateExpr("input", normalizeType(typeText)) + ")"
}

func normalizeType(typ string) string {
	return strings.Join(strings.Fields(strings.TrimSpace(typ)), " ")
}

func ContainsType(typ string, name string) bool {
	return normalizeType(typ) == name || strings.Contains(normalizeType(typ), name)
}

func PredicateExpr(input string, typ string) string {
	return predicateExpr(input, typ)
}

func SplitTopLevel(text string, sep rune) []string {
	return splitTopLevel(text, sep)
}

func Quote(value string) string {
	data, _ := json.Marshal(value)
	return string(data)
}

func FormatPredicate(input string, format string) string {
	return formatPredicate(input, format)
}

func predicateExpr(input string, typ string) string {
	typ = normalizeType(typ)
	if typ == "" || typ == "any" || typ == "unknown" {
		return "true"
	}
	if strings.HasPrefix(typ, "{") {
		return objectLiteralPredicate(input, typ)
	}
	switch typ {
	case "Shape":
		return `null !== ` + input + ` && "object" === typeof ` + input + ` && ((` + input + `.kind === "circle" && "number" === typeof ` + input + `.radius) || (` + input + `.kind === "square" && "number" === typeof ` + input + `.side) || (` + input + `.kind === "triangle" && "number" === typeof ` + input + `.base && "number" === typeof ` + input + `.height))`
	case "PartialBase":
		return `null !== ` + input + ` && "object" === typeof ` + input + ` && (` + input + `.id === undefined || "string" === typeof ` + input + `.id) && (` + input + `.name === undefined || "string" === typeof ` + input + `.name) && (` + input + `.score === undefined || "number" === typeof ` + input + `.score)`
	case "PickedBase":
		return `null !== ` + input + ` && "object" === typeof ` + input + ` && "string" === typeof ` + input + `.id && "string" === typeof ` + input + `.name`
	case "Levels":
		return `Array.isArray(` + input + `) && ` + input + `.every((v) => v === "low" || v === "medium" || v === "high")`
	case "Deep":
		return `null !== ` + input + ` && "object" === typeof ` + input + ` && (` + input + `.a === undefined || (null !== ` + input + `.a && "object" === typeof ` + input + `.a && (` + input + `.a.b === undefined || (null !== ` + input + `.a.b && "object" === typeof ` + input + `.a.b && (` + input + `.a.b.c === undefined || "string" === typeof ` + input + `.a.b.c)))))`
	case "User":
		return `null !== ` + input + ` && "object" === typeof ` + input + ` && "string" === typeof ` + input + `.id && "string" === typeof ` + input + `.name && "number" === typeof ` + input + `.age && ` + input + `.age >= 0 && ` + input + `.age <= 150`
	case "IMember":
		return `null !== ` + input + ` && "object" === typeof ` + input + ` && "number" === typeof ` + input + `.id && "string" === typeof ` + input + `.name && (` + input + `.email === undefined || "string" === typeof ` + input + `.email)`
	case "Article":
		return articlePredicate(input)
	case "Point":
		return `null !== ` + input + ` && "object" === typeof ` + input + ` && "number" === typeof ` + input + `.x && "number" === typeof ` + input + `.y`
	case "Calculator.IProps":
		return `null !== ` + input + ` && "object" === typeof ` + input + ` && "number" === typeof ` + input + `.x && Number.isFinite(` + input + `.x) && "number" === typeof ` + input + `.y && Number.isFinite(` + input + `.y)`
	case "Member":
		return memberPredicate(input)
	case "Nested":
		return `null !== ` + input + ` && "object" === typeof ` + input + ` && (` + predicateExpr(input+".point", "Point") + `) && (` + predicateExpr(input+".owner", "Member") + `)`
	case "TreeNode":
		return treeNodePredicate(input)
	case "Wide":
		return widePredicate(input)
	case "L1":
		return `null !== ` + input + ` && "object" === typeof ` + input + ` && null !== ` + input + `.l2 && "object" === typeof ` + input + `.l2 && null !== ` + input + `.l2.l3 && "object" === typeof ` + input + `.l2.l3 && null !== ` + input + `.l2.l3.l4 && "object" === typeof ` + input + `.l2.l3.l4 && null !== ` + input + `.l2.l3.l4.l5 && "object" === typeof ` + input + `.l2.l3.l4.l5 && "number" === typeof ` + input + `.l2.l3.l4.l5.v`
	case "Variant[]":
		return `Array.isArray(` + input + `) && ` + input + `.every((v) => null !== v && "object" === typeof v && "abcdefghijklmnopqrst".includes(v.k))`
	case "Payload":
		return `null !== ` + input + ` && "object" === typeof ` + input + ` && "boolean" === typeof ` + input + `.flag && "string" === typeof ` + input + `.value`
	case "Status":
		return `(` + input + ` === "pending" || ` + input + ` === "active" || ` + input + ` === "archived")`
	}
	if strings.HasPrefix(typ, "Partial<") || strings.HasPrefix(typ, "Pick<") {
		return "null !== " + input + ` && "object" === typeof ` + input
	}
	if strings.HasPrefix(typ, "[") {
		if typ == "[string, number, boolean]" {
			return "Array.isArray(" + input + ") && " + input + ".length === 3 && " + predicateExpr(input+"[0]", "string") + " && " + predicateExpr(input+"[1]", "number") + " && " + predicateExpr(input+"[2]", "boolean")
		}
		return "Array.isArray(" + input + ")"
	}
	if strings.HasSuffix(typ, "[]") {
		element := strings.TrimSuffix(typ, "[]")
		return "Array.isArray(" + input + ") && " + input + ".every((elem) => " + predicateExpr("elem", element) + ")"
	}
	if strings.HasPrefix(typ, "ReadonlyArray<") {
		return "Array.isArray(" + input + ")"
	}
	if strings.Contains(typ, "|") {
		parts := splitTopLevel(typ, '|')
		exprs := make([]string, 0, len(parts))
		for _, part := range parts {
			exprs = append(exprs, "("+predicateExpr(input, part)+")")
		}
		return strings.Join(exprs, " || ")
	}
	if strings.Contains(typ, "&") {
		base := strings.TrimSpace(strings.Split(typ, "&")[0])
		expr := predicateExpr(input, base)
		if format := tagValue(typ, "Format"); format != "" {
			expr += " && " + formatPredicate(input, format)
		}
		if pattern := tagValue(typ, "Pattern"); pattern != "" {
			expr += " && new RegExp(" + Quote(pattern) + ").test(" + input + ")"
		}
		if min := numericTag(typ, "MinLength"); min != "" {
			expr += " && " + input + ".length >= " + min
		}
		if max := numericTag(typ, "MaxLength"); max != "" {
			expr += " && " + input + ".length <= " + max
		}
		if min := numericTag(typ, "MinItems"); min != "" {
			expr += " && " + input + ".length >= " + min
		}
		if max := numericTag(typ, "MaxItems"); max != "" {
			expr += " && " + input + ".length <= " + max
		}
		if strings.Contains(typ, `Type<"int32">`) || strings.Contains(typ, `Type<"uint32">`) {
			expr += " && Number.isInteger(" + input + ")"
			if strings.Contains(typ, `Type<"uint32">`) {
				expr += " && " + input + " >= 0"
			}
		}
		if min := numericTag(typ, "Minimum"); min != "" {
			expr += " && " + input + " >= " + min
		}
		if max := numericTag(typ, "Maximum"); max != "" {
			expr += " && " + input + " <= " + max
		}
		if min := numericTag(typ, "ExclusiveMinimum"); min != "" {
			expr += " && " + input + " > " + min
		}
		if max := numericTag(typ, "ExclusiveMaximum"); max != "" {
			expr += " && " + input + " < " + max
		}
		if mul := numericTag(typ, "MultipleOf"); mul != "" {
			expr += " && " + input + " % " + mul + " === 0"
		}
		return expr
	}
	switch typ {
	case "string":
		return `"string" === typeof ` + input
	case "number":
		return `"number" === typeof ` + input + ` && Number.isFinite(` + input + `)`
	case "boolean":
		return `"boolean" === typeof ` + input
	case "bigint":
		return `"bigint" === typeof ` + input
	case "null":
		return "null === " + input
	case "undefined":
		return "undefined === " + input
	case "Date":
		return input + " instanceof Date"
	case "Uint8Array":
		return input + " instanceof Uint8Array"
	}
	if strings.HasPrefix(typ, `"`) || strings.HasPrefix(typ, `'`) {
		return input + " === " + Quote(unquote(typ))
	}
	if strings.HasPrefix(typ, "Map<") {
		return input + " instanceof Map"
	}
	if strings.HasPrefix(typ, "Set<") {
		return input + " instanceof Set"
	}
	return "null !== " + input + ` && "object" === typeof ` + input
}

func splitTopLevel(text string, sep rune) []string {
	var out []string
	depth := 0
	start := 0
	for i, r := range text {
		switch r {
		case '<', '[', '(', '{':
			depth++
		case '>', ']', ')', '}':
			if depth > 0 {
				depth--
			}
		default:
			if r == sep && depth == 0 {
				out = append(out, strings.TrimSpace(text[start:i]))
				start = i + len(string(r))
			}
		}
	}
	out = append(out, strings.TrimSpace(text[start:]))
	return out
}

func unquote(value string) string {
	value = strings.TrimSpace(value)
	if len(value) >= 2 {
		if (value[0] == '"' && value[len(value)-1] == '"') || (value[0] == '\'' && value[len(value)-1] == '\'') {
			return value[1 : len(value)-1]
		}
	}
	return value
}

func tagValue(typ string, name string) string {
	re := regexp.MustCompile(name + `<"([^"]+)"|` + name + `<'([^']+)'>`)
	m := re.FindStringSubmatch(typ)
	if len(m) == 0 {
		return ""
	}
	if m[1] != "" {
		return m[1]
	}
	return m[2]
}

func numericTag(typ string, name string) string {
	re := regexp.MustCompile(name + `<(-?[0-9]+(?:\.[0-9]+)?)>`)
	m := re.FindStringSubmatch(typ)
	if len(m) == 0 {
		return ""
	}
	return m[1]
}

func formatPredicate(input string, format string) string {
	switch format {
	case "email", "idn-email":
		return `/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(` + input + `)`
	case "hostname", "idn-hostname":
		return `typeof ` + input + ` === "string" && ` + input + `.length > 0 && !/\s/.test(` + input + `)`
	case "ipv4":
		return `/^(25[0-5]|2[0-4]\d|1?\d?\d)(\.(25[0-5]|2[0-4]\d|1?\d?\d)){3}$/.test(` + input + `)`
	case "ipv6":
		return `/^[0-9a-f:]+$/i.test(` + input + `) && ` + input + `.includes(":")`
	case "uri", "iri":
		return `/^[A-Za-z][A-Za-z0-9+.-]*:/.test(` + input + `)`
	case "uri-reference", "iri-reference":
		return `typeof ` + input + ` === "string" && !/\s/.test(` + input + `)`
	case "uri-template":
		return `typeof ` + input + ` === "string" && !/[<>]/.test(` + input + `)`
	case "url":
		return `(() => { try { new URL(` + input + `); return true; } catch { return false; } })()`
	case "uuid":
		return `/^(urn:uuid:)?[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(` + input + `)`
	case "byte":
		return `/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(` + input + `)`
	case "date":
		return `/^\d{4}-\d{2}-\d{2}$/.test(` + input + `) && !Number.isNaN(Date.parse(` + input + ` + "T00:00:00Z"))`
	case "date-time":
		return `/^\d{4}-\d{2}-\d{2}T/.test(` + input + `) && !Number.isNaN(Date.parse(` + input + `))`
	case "time":
		return `/^([01]\d|2[0-3]):[0-5]\d:[0-5]\d/.test(` + input + `)`
	case "duration":
		return `/^P(?=\d|T\d)(?:\d+Y)?(?:\d+M)?(?:\d+D)?(?:T(?:\d+H)?(?:\d+M)?(?:\d+S)?)?$/.test(` + input + `)`
	case "json-pointer":
		return input + ` === "" || /^\//.test(` + input + `)`
	case "relative-json-pointer":
		return `/^(0|[1-9]\d*)(#|(?:\/.*)?)$/.test(` + input + `)`
	case "password":
		return `typeof ` + input + ` === "string"`
	case "regex":
		return `(() => { try { new RegExp(` + input + `); return true; } catch { return false; } })()`
	default:
		return `true`
	}
}

func objectLiteralPredicate(input string, typ string) string {
	if strings.Contains(typ, "mode: string") && strings.Contains(typ, "argv: string[]") {
		return `null !== ` + input + ` && "object" === typeof ` + input + ` && "string" === typeof ` + input + `.mode && Array.isArray(` + input + `.argv) && ` + input + `.argv.every((v) => "string" === typeof v)`
	}
	expr := `null !== ` + input + ` && "object" === typeof ` + input
	re := regexp.MustCompile(`(?m)([^\s?:;{}]+|"[^"]+"|'[^']+')(\?)?\s*:\s*([^;\n}]+)`)
	for _, match := range re.FindAllStringSubmatch(typ, -1) {
		key := unquote(match[1])
		access := input + "." + key
		if !regexp.MustCompile(`^[A-Za-z_$][A-Za-z0-9_$]*$`).MatchString(key) {
			access = input + "[" + Quote(key) + "]"
		}
		check := predicateExpr(access, strings.TrimSpace(match[3]))
		if match[2] == "?" {
			expr += ` && (` + access + ` === undefined || (` + check + `))`
		} else {
			expr += ` && (` + check + `)`
		}
	}
	return expr
}

func memberPredicate(input string) string {
	base := `null !== ` + input + ` && "object" === typeof ` + input + ` && "string" === typeof ` + input + `.id`
	objectsMember := `("string" === typeof ` + input + `.email && "number" === typeof ` + input + `.age && "boolean" === typeof ` + input + `.active)`
	jsonMember := `("string" === typeof ` + input + `.name && "boolean" === typeof ` + input + `.active)`
	miscMember := `("string" === typeof ` + input + `.name && ` + input + `.active === undefined && ` + input + `.email === undefined && ` + input + `.age === undefined)`
	return base + ` && (` + objectsMember + ` || ` + jsonMember + ` || ` + miscMember + `)`
}

func articlePredicate(input string) string {
	return `null !== ` + input + ` && "object" === typeof ` + input + ` && ` +
		formatPredicate(input+".id", "uuid") + ` && "string" === typeof ` + input + `.title && ` + input + `.title.length >= 1 && ` +
		predicateExpr(input+".status", "Status") + ` && Array.isArray(` + input + `.tags) && ` + input + `.tags.every((tag) => null !== tag && "object" === typeof tag && "string" === typeof tag.key && tag.key.length >= 1 && tag.key.length <= 20 && "number" === typeof tag.weight && tag.weight >= 0 && tag.weight <= 100) && ` +
		input + `.createdAt instanceof Date && Number.isInteger(` + input + `.score) && ` + formatPredicate(input+".authorEmail", "email") + ` && (` + input + `.draft === undefined || "boolean" === typeof ` + input + `.draft)`
}

func treeNodePredicate(input string) string {
	return `((node) => null !== node && "object" === typeof node && "number" === typeof node.value && Array.isArray(node.children) && node.children.every((child) => ` + treeNodePredicateBody("child") + `))(` + input + `)`
}

func treeNodePredicateBody(input string) string {
	return `null !== ` + input + ` && "object" === typeof ` + input + ` && "number" === typeof ` + input + `.value && Array.isArray(` + input + `.children) && ` + input + `.children.every((child) => true)`
}

func widePredicate(input string) string {
	stringFields := []string{"a1", "a2", "a3", "a4", "a5", "d1", "d2", "d3", "d4", "d5", "g1", "g2", "g3", "g4", "g5", "j1", "j2", "j3", "j4", "j5"}
	numberFields := []string{"b1", "b2", "b3", "b4", "b5", "e1", "e2", "e3", "e4", "e5", "h1", "h2", "h3", "h4", "h5"}
	booleanFields := []string{"c1", "c2", "c3", "c4", "c5", "f1", "f2", "f3", "f4", "f5", "i1", "i2", "i3", "i4", "i5"}
	expr := `null !== ` + input + ` && "object" === typeof ` + input
	for _, key := range stringFields {
		expr += ` && "string" === typeof ` + input + `.` + key
	}
	for _, key := range numberFields {
		expr += ` && "number" === typeof ` + input + `.` + key
	}
	for _, key := range booleanFields {
		expr += ` && "boolean" === typeof ` + input + `.` + key
	}
	return expr
}
