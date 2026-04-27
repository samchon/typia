package http

import "github.com/samchon/typia/packages/core/src/programmers"

func httpDecodeQueryFunction() string {
	return `((input) => {
  const src = input instanceof URLSearchParams ? input : new URLSearchParams(typeof input === "string" ? input : input ?? {});
  const out = {};
  for (const [key, value] of src.entries()) {
    const next = decode(value);
    if (Object.prototype.hasOwnProperty.call(out, key)) out[key] = Array.isArray(out[key]) ? [...out[key], next] : [out[key], next];
    else out[key] = next;
  }
  return out;
  function decode(value) {
    if (value === "true") return true;
    if (value === "false") return false;
    if (/^-?\d+(?:\.\d+)?$/.test(value) && value.trim() !== "") return Number(value);
    return value;
  }
})`
}

func httpDecodeHeadersFunction() string {
	return `((input) => {
  const out = {};
  const each = input instanceof Headers ? input.entries() : Object.entries(input ?? {});
  for (const [key, value] of each) {
    const name = String(key).toLowerCase();
    const raw = Array.isArray(value) ? value.join(", ") : value;
    out[name] = decode(String(raw));
  }
  return out;
  function decode(value) {
    if (value === "true") return true;
    if (value === "false") return false;
    if (/^-?\d+(?:\.\d+)?$/.test(value) && value.trim() !== "") return Number(value);
    return value;
  }
})`
}

func httpDecodeFormDataFunction() string {
	return `((input) => {
  const out = {};
  const each = input instanceof FormData ? input.entries() : Object.entries(input ?? {});
  for (const [key, value] of each) {
    const next = decode(value);
    if (Object.prototype.hasOwnProperty.call(out, key)) out[key] = Array.isArray(out[key]) ? [...out[key], next] : [out[key], next];
    else out[key] = next;
  }
  return out;
  function decode(value) {
    if (typeof Blob !== "undefined" && value instanceof Blob) return value;
    if (value === "true") return true;
    if (value === "false") return false;
    if (typeof value === "string" && /^-?\d+(?:\.\d+)?$/.test(value) && value.trim() !== "") return Number(value);
    return value;
  }
})`
}

func httpParameterFunction(typeText string) string {
	if programmers.ContainsType(typeText, "number") {
		return "(input => Number(input))"
	}
	if programmers.ContainsType(typeText, "bigint") {
		return "(input => BigInt(input))"
	}
	if programmers.ContainsType(typeText, "boolean") {
		return `(input => input === "true")`
	}
	return "(input => input)"
}

func httpAssertWrap(method string, decode string, typeText string) string {
	predicate := programmers.PredicateExpr("value", typeText)
	return `((input, errorFactory) => { const value = ` + decode + `(input); if (` + predicate + `) return value; const error = (errorFactory ?? ((p) => { const e = new Error("Error on typia.` + method + `(): invalid type on " + p.path + ", expect to be " + p.expected); e.name = "TypeGuardError"; Object.assign(e, p); return e; }))({ method: "typia.` + method + `", path: "$input", expected: ` + programmers.Quote(typeText) + `, value }); throw error; })`
}

func httpIsWrap(decode string, typeText string) string {
	predicate := programmers.PredicateExpr("value", typeText)
	return `((input) => { const value = ` + decode + `(input); return ` + predicate + ` ? value : null; })`
}

func httpValidateWrap(decode string, typeText string) string {
	predicate := programmers.PredicateExpr("value", typeText)
	return `((input) => { const value = ` + decode + `(input); return ` + predicate + ` ? { success: true, data: value } : { success: false, errors: [{ path: "$input", expected: ` + programmers.Quote(typeText) + `, value }] }; })`
}
