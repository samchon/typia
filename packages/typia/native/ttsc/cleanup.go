package ttsc

import "regexp"

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
	return text
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
