package driver

import (
	"regexp"
)

// dropUnusedTypiaImports removes `require("typia")` / ESM import lines that
// are no longer referenced after the rewrite pass. Mirrors the second pass
// of `packages/transform/src/ImportTransformer.ts` in typia v12: once every
// typia call has been replaced by its emitted IIFE, the import exists only
// for TypeScript types, so the runtime .js can safely drop it.
//
// Conservative by design — we only touch lines we fully recognise. When in
// doubt the import stays, and the user sees a runtime require("typia") that
// may point at the TS source (which is harmless other than the warning).
func dropUnusedTypiaImports(text string) string {
	for _, pattern := range unusedImportPatterns {
		loc := pattern.regex.FindStringIndex(text)
		for loc != nil {
			alias := pattern.alias(text[loc[0]:loc[1]])
			if alias != "" && !aliasStillReferenced(text, alias, loc[0], loc[1]) {
				// Drop the full matched line, including the trailing newline
				// if any, so we don't leave a stray blank line behind.
				end := loc[1]
				if end < len(text) && text[end] == '\n' {
					end++
				}
				text = text[:loc[0]] + text[end:]
				// Restart scan so overlapping patterns still work.
				loc = pattern.regex.FindStringIndex(text)
				continue
			}
			// Can't remove it safely — advance past this match.
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
	// alias extracts the local alias name (e.g. `typia_1`) from a matched
	// line so we can decide whether it's still referenced.
	alias func(string) string
}

var unusedImportPatterns = []unusedImportPattern{
	// commonjs + esModuleInterop: `const typia_1 = __importDefault(require("typia"));`
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
	// commonjs (no interop): `const typia_1 = require("typia");`
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
	// esm default import: `import typia from "typia";`
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

// aliasStillReferenced checks whether `alias` appears outside the slice
// [lineStart, lineEnd) of the original text. A conservative word-boundary
// check keeps us from matching substrings inside other identifiers.
func aliasStillReferenced(text, alias string, lineStart, lineEnd int) bool {
	head := text[:lineStart]
	tail := text[lineEnd:]
	pattern := regexp.MustCompile(`\b` + regexp.QuoteMeta(alias) + `\b`)
	return pattern.MatchString(head) || pattern.MatchString(tail)
}
