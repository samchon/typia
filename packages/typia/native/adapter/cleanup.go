package adapter

import (
	"fmt"
	"regexp"
	"sort"
	"strings"
)

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
			return firstSubmatch(`^const (\w+) =`, s)
		},
	},
	{
		regex: regexp.MustCompile(`(?m)^const (typia(?:_\d+)?) = require\("typia"\);$`),
		alias: func(s string) string {
			return firstSubmatch(`^const (\w+) =`, s)
		},
	},
	{
		regex: regexp.MustCompile(`(?m)^import (\w+) from "typia";$`),
		alias: func(s string) string {
			return firstSubmatch(`^import (\w+) from`, s)
		},
	},
}

func firstSubmatch(pattern string, text string) string {
	match := regexp.MustCompile(pattern).FindStringSubmatch(text)
	if len(match) < 2 {
		return ""
	}
	return match[1]
}

func aliasStillReferenced(text, alias string, lineStart, lineEnd int) bool {
	head := text[:lineStart]
	tail := text[lineEnd:]
	pattern := regexp.MustCompile(`\b` + regexp.QuoteMeta(alias) + `\b`)
	return pattern.MatchString(head) || pattern.MatchString(tail)
}

func injectRuntimeImports(text string) string {
	aliases := collectRuntimeAliases(text)
	if len(aliases) == 0 {
		return text
	}
	esModule := isESModuleOutput(text)
	imports := make([]string, 0, len(aliases))
	for _, alias := range aliases {
		module := runtimeModuleOf(alias)
		if runtimeImportAlreadyExists(text, alias, module) {
			continue
		}
		name := runtimeNameOf(alias)
		if esModule {
			if alias == "__typia_utils" {
				imports = append(imports, fmt.Sprintf(`import * as %s from %q;`, alias, module))
			} else {
				imports = append(imports, fmt.Sprintf(`import { %s as %s } from %q;`, name, alias, module))
			}
		} else {
			if alias == "__typia_utils" {
				imports = append(imports, fmt.Sprintf(`const %s = require(%q);`, alias, module))
			} else {
				imports = append(imports, fmt.Sprintf(`const { %s: %s } = require(%q);`, name, alias, module))
			}
		}
	}
	if len(imports) == 0 {
		return text
	}
	index := runtimeImportInsertionIndex(text, esModule)
	return text[:index] + strings.Join(imports, "\n") + "\n" + text[index:]
}

func collectRuntimeAliases(text string) []string {
	re := regexp.MustCompile(`\b__typia_transform_([A-Za-z0-9_]+)\b`)
	seen := map[string]bool{}
	for _, match := range re.FindAllStringSubmatch(text, -1) {
		seen[match[0]] = true
	}
	if regexp.MustCompile(`\b__typia_utils\b`).MatchString(text) {
		seen["__typia_utils"] = true
	}
	aliases := make([]string, 0, len(seen))
	for alias := range seen {
		aliases = append(aliases, alias)
	}
	sort.SliceStable(aliases, func(i, j int) bool {
		left, right := runtimeAliasRank(aliases[i]), runtimeAliasRank(aliases[j])
		if left != right {
			return left < right
		}
		return aliases[i] < aliases[j]
	})
	return aliases
}

func runtimeAliasRank(alias string) int {
	if alias == "__typia_utils" {
		return 50
	}
	name := strings.TrimPrefix(alias, "__typia_transform_")
	switch {
	case strings.HasPrefix(name, "_is"):
		return 100
	case strings.HasPrefix(name, "_assert"):
		return 150
	case strings.HasPrefix(name, "_randomFormat"):
		return 200
	case name == "_randomString":
		return 210
	case name == "_randomInteger":
		return 220
	case name == "_randomNumber":
		return 221
	case strings.HasPrefix(name, "_random"):
		return 230
	case name == "_validateReport":
		return 800
	case name == "_createStandardSchema":
		return 900
	}
	return 500
}

func runtimeModuleOf(alias string) string {
	if alias == "__typia_utils" {
		return "@typia/utils"
	}
	return "typia/lib/internal/" + runtimeNameOf(alias)
}

func runtimeNameOf(alias string) string {
	name := strings.TrimPrefix(alias, "__typia_transform_")
	if !strings.HasPrefix(name, "_") {
		name = "_" + name
	}
	return name
}

func runtimeImportAlreadyExists(text string, alias string, module string) bool {
	return regexp.MustCompile(`(?m)^import \* as `+regexp.QuoteMeta(alias)+` from ["']`+regexp.QuoteMeta(module)+`["'];$`).MatchString(text) ||
		regexp.MustCompile(`(?m)^import \{[^}\n]*\bas\s+`+regexp.QuoteMeta(alias)+`\b[^}\n]*\} from ["']`+regexp.QuoteMeta(module)+`["'];$`).MatchString(text) ||
		regexp.MustCompile(`(?m)^const `+regexp.QuoteMeta(alias)+` = require\(["']`+regexp.QuoteMeta(module)+`["']\);$`).MatchString(text) ||
		regexp.MustCompile(`(?m)^const \{[^}\n]*:\s*`+regexp.QuoteMeta(alias)+`\b[^}\n]*\} = require\(["']`+regexp.QuoteMeta(module)+`["']\);$`).MatchString(text)
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
