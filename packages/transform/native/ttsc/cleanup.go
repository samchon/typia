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
