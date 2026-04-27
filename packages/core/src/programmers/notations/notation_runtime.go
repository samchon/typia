package notations

import "github.com/samchon/typia/packages/core/src/programmers"

func notationFunction(rename string) string {
	return `((input) => convert(input, ` + programmers.Quote(rename) + `))`
}

func notationAssertFunction(rename string, typeText string) string {
	predicate := programmers.PredicateExpr("input", typeText)
	return `((input, errorFactory) => { if (!(` + predicate + `)) { const props = { method: "typia.notations.assert` + notationTitle(rename) + `", path: "$input", expected: ` + programmers.Quote(typeText) + `, value: input }; if (errorFactory) throw errorFactory(props); const error = new Error("Error on typia.notations.assert` + notationTitle(rename) + `(): invalid type on $input"); error.name = "TypeGuardError"; Object.assign(error, props); throw error; } return convert(input, ` + programmers.Quote(rename) + `); })`
}

func notationIsFunction(rename string, typeText string) string {
	predicate := programmers.PredicateExpr("input", typeText)
	return `((input) => (` + predicate + `) ? convert(input, ` + programmers.Quote(rename) + `) : null)`
}

func notationValidateFunction(rename string, typeText string) string {
	predicate := programmers.PredicateExpr("input", typeText)
	return `((input) => (` + predicate + `) ? { success: true, data: convert(input, ` + programmers.Quote(rename) + `) } : { success: false, errors: [{ path: "$input", expected: ` + programmers.Quote(typeText) + `, value: input }] })`
}

func notationPrelude() string {
	return `function convert(input, mode) {
  if (Array.isArray(input)) return input.map((elem) => convert(elem, mode));
  if (input === null || typeof input !== "object" || input instanceof Date || input instanceof Uint8Array) return input;
  const out = {};
  for (const key of Object.keys(input)) out[renameKey(key, mode)] = convert(input[key], mode);
  return out;
}
function renameKey(key, mode) {
  const words = String(key).replace(/([a-z0-9])([A-Z])/g, "$1_$2").split(/[_\-\s]+/g).filter((v) => v.length !== 0);
  if (mode === "snake") return words.map((v) => v.toLowerCase()).join("_");
  if (mode === "pascal") return words.map(capitalize).join("");
  return words.map((v, i) => i === 0 ? v.toLowerCase() : capitalize(v)).join("");
}
function capitalize(value) {
  const lower = String(value).toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}`
}

func notationWithPrelude(body string) string {
	return `(() => { ` + notationPrelude() + ` return ` + body + `; })()`
}

func notationTitle(rename string) string {
	switch rename {
	case "pascal":
		return "Pascal"
	case "snake":
		return "Snake"
	default:
		return "Camel"
	}
}
