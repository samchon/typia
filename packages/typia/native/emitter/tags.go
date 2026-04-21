package emitter

import (
	"fmt"
	"strings"

	"github.com/samchon/typia/packages/typia/native/metadata"
)

// tagCheck returns the JS expression for a single typia tag. `ve` is the
// value being validated (e.g. `input` or `$input.foo`). Returns "" when the
// tag is unknown so the caller can skip it rather than miscompile.
//
// Strategy (matches typia v12):
//
//  1. For `format` and `pattern` we emit a regex test inline.
//  2. For `type` we emit a typeof / Number.isInteger + bounds check.
//  3. Otherwise we prefer the tag's `validate` template (`2 <= $input.length`,
//     `$input % 2 === 0`, …) which comes pre-baked with the generic's
//     instantiated numeric / string value.
//  4. As a last resort we fall back to a numeric/length switch based on
//     `tag.Value` — used only when `validate` is missing or unparsable.
func tagCheck(ve string, tag metadata.TypeTag) string {
	// Format / Pattern — inline regex (typia's `_isFormat*` helpers folded).
	switch tag.Kind {
	case "format":
		if s, ok := tag.Value.(string); ok {
			if expr := formatCheck(ve, s); expr != "" {
				return expr
			}
		}
	case "pattern":
		if s, ok := tag.Value.(string); ok {
			return fmt.Sprintf("new RegExp(%s).test(%s)", jsonQuote(s), ve)
		}
	case "type":
		if s, ok := tag.Value.(string); ok {
			if expr := typeTagCheck(ve, s); expr != "" {
				return expr
			}
		}
	case "uniqueItems":
		if b, ok := tag.Value.(bool); ok && !b {
			return ""
		}
		return fmt.Sprintf("(new Set(%s).size === %s.length)", ve, ve)
	}

	// Validate template — handles minimum/maximum/exclusive*/multipleOf/
	// minLength/maxLength/minItems/maxItems because those all ship a
	// `validate` string like `"2 <= $input.length"` carrying the
	// instantiated generic value.
	if tag.Validate != "" {
		if expanded := expandValidate(tag.Validate, ve); expanded != "" {
			return expanded
		}
	}

	// Numeric fallbacks — kept for tags users author themselves without a
	// `validate` template.
	switch tag.Kind {
	case "minimum":
		return fmt.Sprintf("%s <= %s", numberLiteral(tag.Value), ve)
	case "maximum":
		return fmt.Sprintf("%s >= %s", numberLiteral(tag.Value), ve)
	case "exclusiveMinimum":
		return fmt.Sprintf("%s < %s", numberLiteral(tag.Value), ve)
	case "exclusiveMaximum":
		return fmt.Sprintf("%s > %s", numberLiteral(tag.Value), ve)
	case "multipleOf":
		return fmt.Sprintf("%s %% %s === 0", ve, numberLiteral(tag.Value))
	case "minLength", "minItems":
		return fmt.Sprintf("%s <= %s.length", numberLiteral(tag.Value), ve)
	case "maxLength", "maxItems":
		return fmt.Sprintf("%s >= %s.length", numberLiteral(tag.Value), ve)
	}
	return ""
}

// formatCheck returns an inline JS expression that validates a string against
// the given format. Mirrors typia v12's `FormatCheatSheet` — two special
// formats short-circuit the regex path:
//
//   - `password` accepts anything (typia emits `true`).
//   - `regex` tries to construct a RegExp from the value.
//
// Anything else looks up `formatRegexps` and emits an inline RegExp test.
func formatCheck(ve, format string) string {
	switch format {
	case "password":
		return "true"
	case "regex":
		return fmt.Sprintf(`(() => { try { new RegExp(%s); return true; } catch { return false; } })()`, ve)
	}
	re, ok := formatRegexps[format]
	if !ok {
		// Unknown format — emit a permissive pass-through so the overall
		// validator doesn't silently reject well-formed strings. Phase 1
		// surfaces this as a diagnostic.
		return ""
	}
	return fmt.Sprintf("new RegExp(%s).test(%s)", jsonQuote(re), ve)
}

// typeTagCheck handles `tags.Type<"int32" | "int64" | "uint32" | "float" | ...>`.
func typeTagCheck(ve, kind string) string {
	switch kind {
	case "int", "int8", "int16", "int32", "int64", "uint", "uint8", "uint16", "uint32", "uint64":
		base := fmt.Sprintf("Number.isInteger(%s)", ve)
		if bounds, ok := integerBounds[kind]; ok {
			return base + " && " + strings.ReplaceAll(bounds, "__INPUT__", ve)
		}
		return base
	case "float":
		// typia v12 bounds float to single-precision IEEE-754 range.
		return fmt.Sprintf("(Number.isFinite(%s) && -1.175494351e38 <= %s && %s <= 3.4028235e38)", ve, ve, ve)
	case "double":
		// typia v12 emits `true` for double (already represented natively).
		return fmt.Sprintf("Number.isFinite(%s)", ve)
	}
	return ""
}

// expandValidate substitutes `$input` in a validate template with the actual
// value expression, removing any `$importInternal(...)` wrappers because the
// runtime that would resolve them isn't present in the emitted JS.
func expandValidate(template, ve string) string {
	// Strip `$importInternal("…")(` / `)` pairs; the inner expression tends
	// to be a plain JS call using `$input` that is fine on its own *if* we
	// also emit the helper somewhere. Phase 1 will inject the helper; for
	// now we skip this family.
	if strings.Contains(template, "$importInternal") {
		return ""
	}
	return strings.ReplaceAll(template, "$input", ve)
}

// formatRegexps maps format names to the regex source typia v12 ships.
// Sourced from `packages/core/src/factories/FormatCheatSheet.ts` — the strings
// here are the patterns inside `RegexCall(/.../)` (leading/trailing slashes
// and trailing flags like `i`, `u`, `gm` stripped so `new RegExp(pattern)`
// gets the plain body). Flag differences are captured by the `formatFlags`
// map so emitted tests can replicate typia's behaviour exactly.
var formatRegexps = map[string]string{
	"byte":                  `^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$`,
	"date":                  `^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$`,
	"date-time":             `^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])(T|\s)([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](?:\.[0-9]{1,9})?(Z|[+-]([01][0-9]|2[0-3]):[0-5][0-9])$`,
	"duration":              `^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$`,
	"email":                 `^[a-z0-9!#$%&'*+/=?^_` + "`" + `{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_` + "`" + `{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$`,
	"hostname":              `^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$`,
	"idn-email":             `^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$`,
	"idn-hostname":          `^([a-z0-9\u00a1-\uffff0-9]+(-[a-z0-9\u00a1-\uffff0-9]+)*\.)+[a-z\u00a1-\uffff]{2,}$`,
	"ipv4":                  `^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$`,
	"iri":                   "^[A-Za-z][\\d+-.A-Za-z]*:[^\\u0000-\\u0020\"<>\\\\^`{|}]*$",
	"iri-reference":         "^[A-Za-z][\\d+-.A-Za-z]*:[^\\u0000-\\u0020\"<>\\\\^`{|}]*$",
	"json-pointer":          `^(?:\/(?:[^~/]|~0|~1)*)*$`,
	"relative-json-pointer": `^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$`,
	"time":                  `^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](?:\.[0-9]{1,9})?(Z|[+-]([01][0-9]|2[0-3]):[0-5][0-9])$`,
	"url":                   `^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9]+-)*[a-z0-9]+)(?:\.(?:[a-z0-9]+-)*[a-z0-9]+)*(?:\.(?:[a-z]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$`,
	// uuid accepts an optional `urn:uuid:` prefix — matches typia's case-insensitive pattern.
	"uuid": `^(?:urn:uuid:)?[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$`,
	// Light-weight URI / URI-reference / URI-template fallbacks — typia's full
	// patterns are large (1.5kB each) and rarely used in the current fixtures;
	// we keep compact but correct approximations and can restore the long
	// patterns when parity work becomes worthwhile.
	"uri":           `^[a-zA-Z][a-zA-Z0-9+.-]*:[^\s]*$`,
	"uri-reference": `^[^\s]*$`,
	"uri-template":  `^(?:(?:[^\x00-\x20"'<>%\\^` + "`" + `{|}]|%[0-9a-fA-F]{2})|\{[+#./;?&=,!@|]?(?:[a-zA-Z0-9_]|%[0-9a-fA-F]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-zA-Z0-9_]|%[0-9a-fA-F]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$`,
	"ipv6":          `^((([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)))$`,
}

// integerBounds maps signed/unsigned fixed-width kinds to an additional
// range check appended after Number.isInteger.
var integerBounds = map[string]string{
	"int8":   "-128 <= __INPUT__ && __INPUT__ <= 127",
	"int16":  "-32768 <= __INPUT__ && __INPUT__ <= 32767",
	"int32":  "-2147483648 <= __INPUT__ && __INPUT__ <= 2147483647",
	"int64":  "-9223372036854775808 <= __INPUT__ && __INPUT__ <= 9223372036854775807",
	"uint8":  "0 <= __INPUT__ && __INPUT__ <= 255",
	"uint16": "0 <= __INPUT__ && __INPUT__ <= 65535",
	"uint32": "0 <= __INPUT__ && __INPUT__ <= 4294967295",
	"uint64": "0 <= __INPUT__ && __INPUT__ <= 18446744073709551615",
}
