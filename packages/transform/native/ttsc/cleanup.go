package ttsc

import (
	"fmt"
	"regexp"
	"strings"
)

// CleanupTransformedText removes typia runtime imports left unused after the
// native rewrite pass.
func CleanupTransformedText(text string) string {
	for _, pattern := range unusedImportPatterns {
		loc := pattern.regex.FindStringIndex(text)
		for loc != nil {
			alias := pattern.alias(text[loc[0]:loc[1]])
			if alias != "" && !aliasStillReferenced(text, alias, loc[0], loc[1]) {
				end := loc[1]
				if end < len(text) && text[end] == '\n' {
					end++
				}
				text = text[:loc[0]] + text[end:]
				loc = pattern.regex.FindStringIndex(text)
				continue
			}
			next := pattern.regex.FindStringIndex(text[loc[1]:])
			if next == nil {
				break
			}
			loc = []int{loc[1] + next[0], loc[1] + next[1]}
		}
	}
	return injectRuntimeImports(text)
}

type unusedImportPattern struct {
	regex *regexp.Regexp
	alias func(string) string
}

var unusedImportPatterns = []unusedImportPattern{
	{
		regex: regexp.MustCompile(`(?m)^const (typia(?:_\d+)?) = __importDefault\(require\("typia"\)\);$`),
		alias: func(s string) string {
			m := regexp.MustCompile(`^const (\w+) =`).FindStringSubmatch(s)
			if len(m) >= 2 {
				return m[1]
			}
			return ""
		},
	},
	{
		regex: regexp.MustCompile(`(?m)^const (typia(?:_\d+)?) = require\("typia"\);$`),
		alias: func(s string) string {
			m := regexp.MustCompile(`^const (\w+) =`).FindStringSubmatch(s)
			if len(m) >= 2 {
				return m[1]
			}
			return ""
		},
	},
	{
		regex: regexp.MustCompile(`(?m)^import (\w+) from "typia";$`),
		alias: func(s string) string {
			m := regexp.MustCompile(`^import (\w+) from`).FindStringSubmatch(s)
			if len(m) >= 2 {
				return m[1]
			}
			return ""
		},
	},
}

func aliasStillReferenced(text, alias string, lineStart, lineEnd int) bool {
	head := text[:lineStart]
	tail := text[lineEnd:]
	pattern := regexp.MustCompile(`\b` + regexp.QuoteMeta(alias) + `\b`)
	return pattern.MatchString(head) || pattern.MatchString(tail)
}

type runtimeImport struct {
	alias  string
	module string
}

var runtimeImports = []runtimeImport{
	{
		alias:  "__typia_transform_assertGuard",
		module: "typia/lib/internal/_assertGuard",
	},
	{
		alias:  "__typia_transform_validateReport",
		module: "typia/lib/internal/_validateReport",
	},
	{
		alias:  "__typia_transform_createStandardSchema",
		module: "typia/lib/internal/_createStandardSchema",
	},
	{
		alias:  "__typia_transform_accessExpressionAsString",
		module: "typia/lib/internal/_accessExpressionAsString",
	},
	{
		alias:  "__typia_transform_parseLlmArguments",
		module: "typia/lib/internal/_parseLlmArguments",
	},
	{
		alias:  "__typia_transform_coerceLlmArguments",
		module: "typia/lib/internal/_coerceLlmArguments",
	},
	{
		alias:  "__typia_transform_llmApplicationFinalize",
		module: "typia/lib/internal/_llmApplicationFinalize",
	},
	{
		alias:  "__typia_transform_ProtobufSizer",
		module: "typia/lib/internal/_ProtobufSizer",
	},
	{
		alias:  "__typia_transform_ProtobufWriter",
		module: "typia/lib/internal/_ProtobufWriter",
	},
	{
		alias:  "__typia_transform_ProtobufReader",
		module: "typia/lib/internal/_ProtobufReader",
	},
	{alias: "__typia_transform_isFormatByte", module: "typia/lib/internal/_isFormatByte"},
	{alias: "__typia_transform_isFormatDate", module: "typia/lib/internal/_isFormatDate"},
	{alias: "__typia_transform_isFormatDateTime", module: "typia/lib/internal/_isFormatDateTime"},
	{alias: "__typia_transform_isFormatDuration", module: "typia/lib/internal/_isFormatDuration"},
	{alias: "__typia_transform_isFormatEmail", module: "typia/lib/internal/_isFormatEmail"},
	{alias: "__typia_transform_isFormatHostname", module: "typia/lib/internal/_isFormatHostname"},
	{alias: "__typia_transform_isFormatIdnEmail", module: "typia/lib/internal/_isFormatIdnEmail"},
	{alias: "__typia_transform_isFormatIdnHostname", module: "typia/lib/internal/_isFormatIdnHostname"},
	{alias: "__typia_transform_isFormatIpv4", module: "typia/lib/internal/_isFormatIpv4"},
	{alias: "__typia_transform_isFormatIpv6", module: "typia/lib/internal/_isFormatIpv6"},
	{alias: "__typia_transform_isFormatIri", module: "typia/lib/internal/_isFormatIri"},
	{alias: "__typia_transform_isFormatIriReference", module: "typia/lib/internal/_isFormatIriReference"},
	{alias: "__typia_transform_isFormatJsonPointer", module: "typia/lib/internal/_isFormatJsonPointer"},
	{alias: "__typia_transform_isFormatPassword", module: "typia/lib/internal/_isFormatPassword"},
	{alias: "__typia_transform_isFormatRegex", module: "typia/lib/internal/_isFormatRegex"},
	{alias: "__typia_transform_isFormatRelativeJsonPointer", module: "typia/lib/internal/_isFormatRelativeJsonPointer"},
	{alias: "__typia_transform_isFormatTime", module: "typia/lib/internal/_isFormatTime"},
	{alias: "__typia_transform_isFormatUri", module: "typia/lib/internal/_isFormatUri"},
	{alias: "__typia_transform_isFormatUriReference", module: "typia/lib/internal/_isFormatUriReference"},
	{alias: "__typia_transform_isFormatUriTemplate", module: "typia/lib/internal/_isFormatUriTemplate"},
	{alias: "__typia_transform_isFormatUrl", module: "typia/lib/internal/_isFormatUrl"},
	{alias: "__typia_transform_isFormatUuid", module: "typia/lib/internal/_isFormatUuid"},
	{alias: "__typia_transform_isTypeFloat", module: "typia/lib/internal/_isTypeFloat"},
	{alias: "__typia_transform_isTypeInt32", module: "typia/lib/internal/_isTypeInt32"},
	{alias: "__typia_transform_isTypeInt64", module: "typia/lib/internal/_isTypeInt64"},
	{alias: "__typia_transform_isTypeUint32", module: "typia/lib/internal/_isTypeUint32"},
	{alias: "__typia_transform_isTypeUint64", module: "typia/lib/internal/_isTypeUint64"},
	{alias: "__typia_transform_isUniqueItems", module: "typia/lib/internal/_isUniqueItems"},
	{alias: "__typia_transform_isBetween", module: "typia/lib/internal/_isBetween"},
	{alias: "__typia_transform_isBigintString", module: "typia/lib/internal/_isBigintString"},
	{alias: "__typia_transform_httpParameterReadString", module: "typia/lib/internal/_httpParameterReadString"},
	{alias: "__typia_transform_httpParameterReadNumber", module: "typia/lib/internal/_httpParameterReadNumber"},
	{alias: "__typia_transform_httpParameterReadBoolean", module: "typia/lib/internal/_httpParameterReadBoolean"},
	{alias: "__typia_transform_httpParameterReadBigint", module: "typia/lib/internal/_httpParameterReadBigint"},
	{alias: "__typia_transform_httpQueryParseURLSearchParams", module: "typia/lib/internal/_httpQueryParseURLSearchParams"},
	{alias: "__typia_transform_httpQueryReadString", module: "typia/lib/internal/_httpQueryReadString"},
	{alias: "__typia_transform_httpQueryReadNumber", module: "typia/lib/internal/_httpQueryReadNumber"},
	{alias: "__typia_transform_httpQueryReadBoolean", module: "typia/lib/internal/_httpQueryReadBoolean"},
	{alias: "__typia_transform_httpQueryReadBigint", module: "typia/lib/internal/_httpQueryReadBigint"},
	{alias: "__typia_transform_httpQueryReadArray", module: "typia/lib/internal/_httpQueryReadArray"},
	{alias: "__typia_transform_httpHeaderReadNumber", module: "typia/lib/internal/_httpHeaderReadNumber"},
	{alias: "__typia_transform_httpHeaderReadBoolean", module: "typia/lib/internal/_httpHeaderReadBoolean"},
	{alias: "__typia_transform_httpHeaderReadBigint", module: "typia/lib/internal/_httpHeaderReadBigint"},
	{alias: "__typia_transform_httpFormDataReadString", module: "typia/lib/internal/_httpFormDataReadString"},
	{alias: "__typia_transform_httpFormDataReadNumber", module: "typia/lib/internal/_httpFormDataReadNumber"},
	{alias: "__typia_transform_httpFormDataReadBoolean", module: "typia/lib/internal/_httpFormDataReadBoolean"},
	{alias: "__typia_transform_httpFormDataReadBigint", module: "typia/lib/internal/_httpFormDataReadBigint"},
	{alias: "__typia_transform_httpFormDataReadBlob", module: "typia/lib/internal/_httpFormDataReadBlob"},
	{alias: "__typia_transform_httpFormDataReadFile", module: "typia/lib/internal/_httpFormDataReadFile"},
	{alias: "__typia_transform_httpFormDataReadArray", module: "typia/lib/internal/_httpFormDataReadArray"},
	{alias: "__typia_transform_jsonStringifyString", module: "typia/lib/internal/_jsonStringifyString"},
	{alias: "__typia_transform_jsonStringifyNumber", module: "typia/lib/internal/_jsonStringifyNumber"},
	{alias: "__typia_transform_jsonStringifyRest", module: "typia/lib/internal/_jsonStringifyRest"},
	{alias: "__typia_transform_jsonStringifyTail", module: "typia/lib/internal/_jsonStringifyTail"},
	{alias: "__typia_transform_throwTypeGuardError", module: "typia/lib/internal/_throwTypeGuardError"},
	{alias: "__typia_transform_miscCloneAny", module: "typia/lib/internal/_miscCloneAny"},
	{alias: "__typia_transform_notationAny", module: "typia/lib/internal/_notationAny"},
	{alias: "__typia_transform_notationCamel", module: "typia/lib/internal/_notationCamel"},
	{alias: "__typia_transform_notationPascal", module: "typia/lib/internal/_notationPascal"},
	{alias: "__typia_transform_notationSnake", module: "typia/lib/internal/_notationSnake"},
	{alias: "__typia_transform_randomArray", module: "typia/lib/internal/_randomArray"},
	{alias: "__typia_transform_randomBigint", module: "typia/lib/internal/_randomBigint"},
	{alias: "__typia_transform_randomBoolean", module: "typia/lib/internal/_randomBoolean"},
	{alias: "__typia_transform_randomInteger", module: "typia/lib/internal/_randomInteger"},
	{alias: "__typia_transform_randomNumber", module: "typia/lib/internal/_randomNumber"},
	{alias: "__typia_transform_randomPattern", module: "typia/lib/internal/_randomPattern"},
	{alias: "__typia_transform_randomPick", module: "typia/lib/internal/_randomPick"},
	{alias: "__typia_transform_randomString", module: "typia/lib/internal/_randomString"},
	{alias: "__typia_transform_randomFormatByte", module: "typia/lib/internal/_randomFormatByte"},
	{alias: "__typia_transform_randomFormatDate", module: "typia/lib/internal/_randomFormatDate"},
	{alias: "__typia_transform_randomFormatDatetime", module: "typia/lib/internal/_randomFormatDatetime"},
	{alias: "__typia_transform_randomFormatDuration", module: "typia/lib/internal/_randomFormatDuration"},
	{alias: "__typia_transform_randomFormatEmail", module: "typia/lib/internal/_randomFormatEmail"},
	{alias: "__typia_transform_randomFormatHostname", module: "typia/lib/internal/_randomFormatHostname"},
	{alias: "__typia_transform_randomFormatIdnEmail", module: "typia/lib/internal/_randomFormatIdnEmail"},
	{alias: "__typia_transform_randomFormatIdnHostname", module: "typia/lib/internal/_randomFormatIdnHostname"},
	{alias: "__typia_transform_randomFormatIpv4", module: "typia/lib/internal/_randomFormatIpv4"},
	{alias: "__typia_transform_randomFormatIpv6", module: "typia/lib/internal/_randomFormatIpv6"},
	{alias: "__typia_transform_randomFormatIri", module: "typia/lib/internal/_randomFormatIri"},
	{alias: "__typia_transform_randomFormatIriReference", module: "typia/lib/internal/_randomFormatIriReference"},
	{alias: "__typia_transform_randomFormatJsonPointer", module: "typia/lib/internal/_randomFormatJsonPointer"},
	{alias: "__typia_transform_randomFormatPassword", module: "typia/lib/internal/_randomFormatPassword"},
	{alias: "__typia_transform_randomFormatRegex", module: "typia/lib/internal/_randomFormatRegex"},
	{alias: "__typia_transform_randomFormatRelativeJsonPointer", module: "typia/lib/internal/_randomFormatRelativeJsonPointer"},
	{alias: "__typia_transform_randomFormatTime", module: "typia/lib/internal/_randomFormatTime"},
	{alias: "__typia_transform_randomFormatUri", module: "typia/lib/internal/_randomFormatUri"},
	{alias: "__typia_transform_randomFormatUriReference", module: "typia/lib/internal/_randomFormatUriReference"},
	{alias: "__typia_transform_randomFormatUriTemplate", module: "typia/lib/internal/_randomFormatUriTemplate"},
	{alias: "__typia_transform_randomFormatUrl", module: "typia/lib/internal/_randomFormatUrl"},
	{alias: "__typia_transform_randomFormatUuid", module: "typia/lib/internal/_randomFormatUuid"},
}

func injectRuntimeImports(text string) string {
	imports := make([]string, 0, len(runtimeImports))
	esModule := isESModuleOutput(text)
	for _, imp := range runtimeImports {
		if !needsRuntimeImport(text, imp) {
			continue
		}
		if esModule {
			imports = append(imports, fmt.Sprintf(`import * as %s from %q;`, imp.alias, imp.module))
		} else {
			imports = append(imports, fmt.Sprintf(`const %s = require(%q);`, imp.alias, imp.module))
		}
	}
	if len(imports) == 0 {
		return text
	}
	index := runtimeImportInsertionIndex(text, esModule)
	block := strings.Join(imports, "\n") + "\n"
	return text[:index] + block + text[index:]
}

func needsRuntimeImport(text string, imp runtimeImport) bool {
	if !regexp.MustCompile(`\b` + regexp.QuoteMeta(imp.alias) + `\b`).MatchString(text) {
		return false
	}
	if regexp.MustCompile(`(?m)^import \* as ` + regexp.QuoteMeta(imp.alias) + ` from ["']` + regexp.QuoteMeta(imp.module) + `["'];$`).MatchString(text) {
		return false
	}
	if regexp.MustCompile(`(?m)^const ` + regexp.QuoteMeta(imp.alias) + ` = require\(["']` + regexp.QuoteMeta(imp.module) + `["']\);$`).MatchString(text) {
		return false
	}
	return true
}

func isESModuleOutput(text string) bool {
	return regexp.MustCompile(`(?m)^(import\s|import\{|import\*|export\s)`).MatchString(text)
}

func runtimeImportInsertionIndex(text string, esModule bool) int {
	index := 0
	if strings.HasPrefix(text, "#!") {
		if next := strings.IndexByte(text, '\n'); next >= 0 {
			index = next + 1
		} else {
			return len(text)
		}
	}
	if esModule {
		return index
	}
	for {
		next := consumeRuntimeImportPrefix(text[index:])
		if next == 0 {
			return index
		}
		index += next
	}
}

func consumeRuntimeImportPrefix(text string) int {
	for _, prefix := range []string{
		"\"use strict\";\n",
		"'use strict';\n",
		"/* @ttsc-rewritten */\n",
	} {
		if strings.HasPrefix(text, prefix) {
			return len(prefix)
		}
	}
	return 0
}
