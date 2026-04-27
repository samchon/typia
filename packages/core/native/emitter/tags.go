package emitter

import (
	"fmt"
	"regexp"
	"strings"

	"github.com/samchon/typia/packages/core/native/metadata"
)

// tagCheck returns the JS expression for a single typia tag. `ve` is the
// value being validated (e.g. `input` or `$input.foo`). Returns "" when the
// tag is unknown so the caller can skip it rather than miscompile.
//
// Strategy (matches typia v12):
//
//  1. For `format` we delegate to typia's internal `_isFormat*` helpers, and
//     for `pattern` we emit the same `RegExp` test shape.
//  2. For `type` we emit a typeof / Number.isInteger + bounds check.
//  3. Otherwise we prefer the tag's `validate` template (`2 <= $input.length`,
//     `$input % 2 === 0`, …) which comes pre-baked with the generic's
//     instantiated numeric / string value.
//  4. As a last resort we fall back to a numeric/length switch based on
//     `tag.Value` — used only when `validate` is missing or unparsable.
func tagCheck(ve string, tag metadata.TypeTag) string {
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
			if expr := typeTagCheck(ve, tag.Target, s); expr != "" {
				return expr
			}
		}
	case "uniqueItems":
		if b, ok := tag.Value.(bool); ok && !b {
			return ""
		}
		return fmt.Sprintf("%s._isUniqueItems(%s)", isUniqueItemsImportAlias, ve)
	}

	// Validate template — handles minimum/maximum/exclusive*/multipleOf/
	// minLength/maxLength/minItems/maxItems because those all ship a
	// `validate` string like `"2 <= $input.length"` carrying the
	// instantiated generic value.
	if tag.Validate != "" {
		if expanded := expandValidate(instantiateTagValidate(tag.Validate, tag.Value), ve); expanded != "" {
			return expanded
		}
	}

	// Numeric fallbacks — kept for tags users author themselves without a
	// `validate` template.
	literal := numberLiteral(tag.Value)
	if tag.Target == "bigint" {
		literal = literal + "n"
	}
	switch tag.Kind {
	case "minimum":
		return fmt.Sprintf("%s <= %s", literal, ve)
	case "maximum":
		return fmt.Sprintf("%s >= %s", literal, ve)
	case "exclusiveMinimum":
		return fmt.Sprintf("%s < %s", literal, ve)
	case "exclusiveMaximum":
		return fmt.Sprintf("%s > %s", literal, ve)
	case "multipleOf":
		if tag.Target == "bigint" {
			return fmt.Sprintf("%s %% %s === 0n", ve, literal)
		}
		return fmt.Sprintf("%s %% %s === 0", ve, literal)
	case "minLength", "minItems":
		return fmt.Sprintf("%s <= %s.length", literal, ve)
	case "maxLength", "maxItems":
		return fmt.Sprintf("%s >= %s.length", literal, ve)
	}
	return ""
}

func instantiateTagValidate(template string, value any) string {
	switch v := value.(type) {
	case string:
		return strings.ReplaceAll(template, "${Value}", v)
	case fmt.Stringer:
		return strings.ReplaceAll(template, "${Value}", v.String())
	default:
		return strings.ReplaceAll(template, "${Value}", fmt.Sprint(value))
	}
}

// formatCheck returns the same internal helper calls emitted by typia's
// TypeScript transformer.
func formatCheck(ve, format string) string {
	helpers := map[string]struct {
		alias string
		name  string
	}{
		"byte":                  {isFormatByteImportAlias, "_isFormatByte"},
		"date":                  {isFormatDateImportAlias, "_isFormatDate"},
		"date-time":             {isFormatDateTimeImportAlias, "_isFormatDateTime"},
		"duration":              {isFormatDurationImportAlias, "_isFormatDuration"},
		"email":                 {isFormatEmailImportAlias, "_isFormatEmail"},
		"hostname":              {isFormatHostnameImportAlias, "_isFormatHostname"},
		"idn-email":             {isFormatIdnEmailImportAlias, "_isFormatIdnEmail"},
		"idn-hostname":          {isFormatIdnHostnameAlias, "_isFormatIdnHostname"},
		"ipv4":                  {isFormatIpv4ImportAlias, "_isFormatIpv4"},
		"ipv6":                  {isFormatIpv6ImportAlias, "_isFormatIpv6"},
		"iri":                   {isFormatIriImportAlias, "_isFormatIri"},
		"iri-reference":         {isFormatIriReferenceAlias, "_isFormatIriReference"},
		"json-pointer":          {isFormatJsonPointerAlias, "_isFormatJsonPointer"},
		"password":              {isFormatPasswordAlias, "_isFormatPassword"},
		"regex":                 {isFormatRegexImportAlias, "_isFormatRegex"},
		"relative-json-pointer": {isFormatRelativeJsonPtrAlias, "_isFormatRelativeJsonPointer"},
		"time":                  {isFormatTimeImportAlias, "_isFormatTime"},
		"uri":                   {isFormatUriImportAlias, "_isFormatUri"},
		"uri-reference":         {isFormatUriReferenceAlias, "_isFormatUriReference"},
		"uri-template":          {isFormatUriTemplateAlias, "_isFormatUriTemplate"},
		"url":                   {isFormatUrlImportAlias, "_isFormatUrl"},
		"uuid":                  {isFormatUuidImportAlias, "_isFormatUuid"},
	}
	helper, ok := helpers[format]
	if !ok {
		return ""
	}
	return fmt.Sprintf("%s.%s(%s)", helper.alias, helper.name, ve)
}

// typeTagCheck handles `tags.Type<"int32" | "int64" | "uint32" | "float" | ...>`.
func typeTagCheck(ve, target, kind string) string {
	if target == "bigint" {
		switch kind {
		case "int64":
			return "true"
		case "uint64":
			return fmt.Sprintf("(BigInt(0) <= %s)", ve)
		}
		return ""
	}
	switch kind {
	case "int32":
		return fmt.Sprintf("%s._isTypeInt32(%s)", isTypeInt32ImportAlias, ve)
	case "int64":
		return fmt.Sprintf("%s._isTypeInt64(%s)", isTypeInt64ImportAlias, ve)
	case "uint32":
		return fmt.Sprintf("%s._isTypeUint32(%s)", isTypeUint32ImportAlias, ve)
	case "uint64":
		return fmt.Sprintf("%s._isTypeUint64(%s)", isTypeUint64ImportAlias, ve)
	case "int", "int8", "int16", "uint", "uint8", "uint16":
		base := fmt.Sprintf("Number.isInteger(%s)", ve)
		if bounds, ok := integerBounds[kind]; ok {
			return base + " && " + strings.ReplaceAll(bounds, "__INPUT__", ve)
		}
		return base
	case "float":
		return fmt.Sprintf("%s._isTypeFloat(%s)", isTypeFloatImportAlias, ve)
	case "double":
		// typia v12 emits `true` for double (already represented natively).
		return fmt.Sprintf("Number.isFinite(%s)", ve)
	}
	return ""
}

// expandValidate substitutes `$input` in a validate template with the actual
// value expression and resolves typia's `$importInternal(...)` macros to the
// namespace imports used by this emitter.
func expandValidate(template, ve string) string {
	if len(template) >= 2 && template[0] == '`' && template[len(template)-1] == '`' {
		template = template[1 : len(template)-1]
	}
	if strings.Contains(template, "$importInternal") {
		rewritten, ok := rewriteImportInternal(template)
		if !ok {
			return ""
		}
		template = rewritten
	}
	return eraseValidateTypeAnnotations(strings.ReplaceAll(template, "$input", ve))
}

func rewriteImportInternal(template string) (string, bool) {
	ok := true
	rewritten := importInternalCallPattern.ReplaceAllStringFunc(template, func(match string) string {
		groups := importInternalCallPattern.FindStringSubmatch(match)
		if len(groups) != 2 {
			ok = false
			return match
		}
		ref, exists := internalHelperReference(groups[1])
		if !exists {
			ok = false
			return match
		}
		return ref
	})
	return rewritten, ok
}

func internalHelperReference(name string) (string, bool) {
	base := strings.TrimPrefix(name, "_")
	alias := ""
	switch base {
	case "isBigintString":
		alias = isBigintStringImportAlias
	case "isBetween":
		alias = isBetweenImportAlias
	case "isFormatByte":
		alias = isFormatByteImportAlias
	case "isFormatDate":
		alias = isFormatDateImportAlias
	case "isFormatDateTime":
		alias = isFormatDateTimeImportAlias
	case "isFormatDuration":
		alias = isFormatDurationImportAlias
	case "isFormatEmail":
		alias = isFormatEmailImportAlias
	case "isFormatHostname":
		alias = isFormatHostnameImportAlias
	case "isFormatIdnEmail":
		alias = isFormatIdnEmailImportAlias
	case "isFormatIdnHostname":
		alias = isFormatIdnHostnameAlias
	case "isFormatIpv4":
		alias = isFormatIpv4ImportAlias
	case "isFormatIpv6":
		alias = isFormatIpv6ImportAlias
	case "isFormatIri":
		alias = isFormatIriImportAlias
	case "isFormatIriReference":
		alias = isFormatIriReferenceAlias
	case "isFormatJsonPointer":
		alias = isFormatJsonPointerAlias
	case "isFormatPassword":
		alias = isFormatPasswordAlias
	case "isFormatRegex":
		alias = isFormatRegexImportAlias
	case "isFormatRelativeJsonPointer":
		alias = isFormatRelativeJsonPtrAlias
	case "isFormatTime":
		alias = isFormatTimeImportAlias
	case "isFormatUri":
		alias = isFormatUriImportAlias
	case "isFormatUriReference":
		alias = isFormatUriReferenceAlias
	case "isFormatUriTemplate":
		alias = isFormatUriTemplateAlias
	case "isFormatUrl":
		alias = isFormatUrlImportAlias
	case "isFormatUuid":
		alias = isFormatUuidImportAlias
	case "isTypeFloat":
		alias = isTypeFloatImportAlias
	case "isTypeInt32":
		alias = isTypeInt32ImportAlias
	case "isTypeInt64":
		alias = isTypeInt64ImportAlias
	case "isTypeUint32":
		alias = isTypeUint32ImportAlias
	case "isTypeUint64":
		alias = isTypeUint64ImportAlias
	case "isUniqueItems":
		alias = isUniqueItemsImportAlias
	}
	if alias == "" {
		return "", false
	}
	return alias + "._" + base, true
}

func eraseValidateTypeAnnotations(input string) string {
	input = validateVariableTypePattern.ReplaceAllString(input, `$1 $2 =`)

	var builder strings.Builder
	inSingle := false
	inDouble := false
	inTemplate := false
	escape := false

	for i := 0; i < len(input); i += 1 {
		ch := input[i]
		if escape {
			builder.WriteByte(ch)
			escape = false
			continue
		}
		switch ch {
		case '\\':
			builder.WriteByte(ch)
			escape = true
			continue
		case '\'':
			if !inDouble && !inTemplate {
				inSingle = !inSingle
			}
			builder.WriteByte(ch)
			continue
		case '"':
			if !inSingle && !inTemplate {
				inDouble = !inDouble
			}
			builder.WriteByte(ch)
			continue
		case '`':
			if !inSingle && !inDouble {
				inTemplate = !inTemplate
			}
			builder.WriteByte(ch)
			continue
		case ':':
			if inSingle || inDouble || inTemplate {
				builder.WriteByte(ch)
				continue
			}
			next := nextNonSpaceByte(input, i+1)
			if next == '=' || next == ',' || next == ')' || next == ';' {
				i = skipTypeAnnotation(input, i+1) - 1
				continue
			}
		}
		builder.WriteByte(ch)
	}
	return builder.String()
}

var (
	importInternalCallPattern   = regexp.MustCompile(`\$importInternal\("([^"]+)"\)`)
	validateVariableTypePattern = regexp.MustCompile(`\b(const|let|var)\s+([A-Za-z_$][A-Za-z0-9_$]*)\s*:\s*([^=]+?)\s*=`)
)

func skipTypeAnnotation(input string, start int) int {
	depthAngles := 0
	depthParens := 0
	depthBrackets := 0
	for i := start; i < len(input); i += 1 {
		switch input[i] {
		case '<':
			depthAngles += 1
		case '>':
			if depthAngles > 0 {
				depthAngles -= 1
			}
		case '(':
			depthParens += 1
		case ')':
			if depthParens == 0 && depthAngles == 0 && depthBrackets == 0 {
				return i
			}
			if depthParens > 0 {
				depthParens -= 1
			}
		case '[':
			depthBrackets += 1
		case ']':
			if depthBrackets > 0 {
				depthBrackets -= 1
			}
		case '=', ',', ';':
			if depthAngles == 0 && depthParens == 0 && depthBrackets == 0 {
				return i
			}
		}
	}
	return len(input)
}

func nextNonSpaceByte(input string, start int) byte {
	for i := start; i < len(input); i += 1 {
		if input[i] == ' ' || input[i] == '\n' || input[i] == '\r' || input[i] == '\t' {
			continue
		}
		return input[i]
	}
	return 0
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
