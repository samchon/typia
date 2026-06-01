package adapter

import (
  "fmt"
  "regexp"
  "sort"
  "strings"
  "sync"
)

// Static cleanup patterns are compiled once at package load. Compiling them
// inside the cleanup functions recompiled the same expressions on every emitted
// file, which dominated the cleanup cost (regex compilation, not matching, was
// the hot spot).
const typiaCleanupTypeAtom = `([A-Za-z_$][A-Za-z0-9_$.]*(<[^()\n;{}]*>)?)`

var (
  reImportTypeLine        = regexp.MustCompile(`(?m)^import type \{([^{}\n]+)\} from`)
  reImportTypeNormalize   = regexp.MustCompile(`^import type \{\s*([^{}\n]+?)\s*\} from`)
  reBlankBeforeDecl       = regexp.MustCompile(`(?m)(^import [^\n]+;\n)\n+(const |let |var |export )`)
  reInputIsParen          = regexp.MustCompile(`input is \(([A-Za-z_$][A-Za-z0-9_$.]*)\)`)
  reBlankBeforeCall       = regexp.MustCompile(`\n\n([A-Za-z_$][A-Za-z0-9_$]*\([^;\n]*\);?)`)
  reParenTypeArrow        = regexp.MustCompile(`: \(` + typiaCleanupTypeAtom + `\)(\s*=>)`)
  reParenNullUndefined    = regexp.MustCompile(`\| \((null|undefined)\)`)
  reConstAliasHead        = regexp.MustCompile(`^const (\w+) =`)
  reImportAliasHead       = regexp.MustCompile(`^import (\w+) from`)
  reRuntimeTransformAlias = regexp.MustCompile(`\b__typia_transform_([A-Za-z0-9_]+)\b`)
  reESModuleOutput        = regexp.MustCompile(`(?m)^(import\s|import\{|import\*|export\s)`)
)

// dynamicRegexpCache memoizes the alias/module-parameterized patterns used when
// checking for pre-existing runtime imports. Aliases and modules recur heavily
// across the files of a single build, so caching amortizes compilation.
var dynamicRegexpCache sync.Map // map[string]*regexp.Regexp

func cachedRegexp(pattern string) *regexp.Regexp {
  if v, ok := dynamicRegexpCache.Load(pattern); ok {
    return v.(*regexp.Regexp)
  }
  re := regexp.MustCompile(pattern)
  dynamicRegexpCache.Store(pattern, re)
  return re
}

func CleanupTransformedText(text string) string {
  // Every unused-import pattern references the "typia" module specifier, so the
  // regex scan can be skipped entirely when the emitted file never mentions it.
  if !strings.Contains(text, "typia") {
    return injectRuntimeImports(text)
  }
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

func CleanupTypeScriptTransformText(text string) string {
  text = CleanupTransformedText(text)
  text = normalizeParenthesizedTypeAnnotations(text)
  if strings.Contains(text, "import type {") {
    text = reImportTypeLine.ReplaceAllStringFunc(text, func(line string) string {
      return reImportTypeNormalize.ReplaceAllString(line, "import type { $1 } from")
    })
  }
  if strings.Contains(text, "\n\n") {
    text = reBlankBeforeDecl.ReplaceAllString(text, "$1$2")
  }
  text = strings.ReplaceAll(text, "=(() =>", "= (() =>")
  text = strings.ReplaceAll(text, ": (any) =>", ": any =>")
  text = strings.ReplaceAll(text, ": (boolean) =>", ": boolean =>")
  if strings.Contains(text, "input is (") {
    text = reInputIsParen.ReplaceAllString(text, "input is $1")
  }
  text = strings.ReplaceAll(text, "return (success ? ", "return success ? ")
  text = strings.ReplaceAll(text, "}) as any;", "} as any;")
  text = strings.ReplaceAll(text, "(() => {\n    const ", "(() => { const ")
  text = strings.ReplaceAll(text, "(() => {\n    let ", "(() => { let ")
  text = strings.ReplaceAll(text, "(() => {\n    return ", "(() => { return ")
  text = strings.ReplaceAll(text, ";\n    const ", "; const ")
  text = strings.ReplaceAll(text, ";\n    let ", "; let ")
  text = strings.ReplaceAll(text, ";\n    return ", "; return ")
  text = strings.ReplaceAll(text, "\n    };\n})()", "\n}; })()")
  text = strings.ReplaceAll(text, "\n    });\n})()", "\n}); })()")
  text = strings.ReplaceAll(text, "\n    }); let ", "\n}); let ")
  text = strings.ReplaceAll(text, ";\n})()", "; })()")
  text = strings.ReplaceAll(text, "\n        ", "\n    ")
  if strings.Contains(text, "\n\n") {
    text = reBlankBeforeCall.ReplaceAllString(text, "\n$1")
  }
  trimmed := strings.TrimRight(text, " \t\r\n")
  if strings.HasSuffix(trimmed, ")") && !strings.HasSuffix(trimmed, ";") {
    return trimmed + ";\n"
  }
  if text != "" && !strings.HasSuffix(text, "\n") {
    return text + "\n"
  }
  return text
}

func normalizeParenthesizedTypeAnnotations(text string) string {
  if strings.Contains(text, ": (") {
    text = reParenTypeArrow.ReplaceAllString(text, ": $1$3")
  }
  if strings.Contains(text, "| (") {
    text = reParenNullUndefined.ReplaceAllString(text, "| $1")
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
      return firstSubmatch(reConstAliasHead, s)
    },
  },
  {
    regex: regexp.MustCompile(`(?m)^const (typia(?:_\d+)?) = require\("typia"\);$`),
    alias: func(s string) string {
      return firstSubmatch(reConstAliasHead, s)
    },
  },
  {
    regex: regexp.MustCompile(`(?m)^import (\w+) from "typia";$`),
    alias: func(s string) string {
      return firstSubmatch(reImportAliasHead, s)
    },
  },
}

func firstSubmatch(re *regexp.Regexp, text string) string {
  match := re.FindStringSubmatch(text)
  if len(match) < 2 {
    return ""
  }
  return match[1]
}

func aliasStillReferenced(text, alias string, lineStart, lineEnd int) bool {
  // Equivalent to matching `\b<alias>\b`, but alias is always a `\w+` token, so
  // a manual word-boundary scan avoids compiling a regex per import line.
  return containsWord(text[:lineStart], alias) || containsWord(text[lineEnd:], alias)
}

// containsWord reports whether word appears in haystack delimited by ASCII word
// boundaries, matching Go regexp's `\b<word>\b` for word-only tokens.
func containsWord(haystack, word string) bool {
  if word == "" {
    return false
  }
  for i := 0; i+len(word) <= len(haystack); {
    j := strings.Index(haystack[i:], word)
    if j < 0 {
      return false
    }
    start := i + j
    end := start + len(word)
    if (start == 0 || !isWordByte(haystack[start-1])) &&
      (end == len(haystack) || !isWordByte(haystack[end])) {
      return true
    }
    i = start + 1
  }
  return false
}

func isWordByte(b byte) bool {
  return b == '_' ||
    (b >= '0' && b <= '9') ||
    (b >= 'a' && b <= 'z') ||
    (b >= 'A' && b <= 'Z')
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
      imports = append(imports, fmt.Sprintf(`import { %s as %s } from %q;`, name, alias, module))
    } else {
      imports = append(imports, fmt.Sprintf(`const { %s: %s } = require(%q);`, name, alias, module))
    }
  }
  if len(imports) == 0 {
    return text
  }
  index := runtimeImportInsertionIndex(text, esModule)
  return text[:index] + strings.Join(imports, "\n") + "\n" + text[index:]
}

func collectRuntimeAliases(text string) []string {
  // The alias regex can only match where the literal prefix appears; skipping
  // the full-text scan when it is absent avoids work on most emitted files.
  if !strings.Contains(text, "__typia_transform_") {
    return nil
  }
  seen := map[string]bool{}
  for _, match := range reRuntimeTransformAlias.FindAllStringSubmatch(text, -1) {
    seen[match[0]] = true
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
  // Fast reject: every shape below mentions both the alias and the module, so
  // skip the regex work entirely when either is absent.
  if !strings.Contains(text, alias) || !strings.Contains(text, module) {
    return false
  }
  a := regexp.QuoteMeta(alias)
  m := regexp.QuoteMeta(module)
  return cachedRegexp(`(?m)^import \* as `+a+` from ["']`+m+`["'];$`).MatchString(text) ||
    cachedRegexp(`(?m)^import \{[^}\n]*\bas\s+`+a+`\b[^}\n]*\} from ["']`+m+`["'];$`).MatchString(text) ||
    cachedRegexp(`(?m)^const `+a+` = require\(["']`+m+`["']\);$`).MatchString(text) ||
    cachedRegexp(`(?m)^const \{[^}\n]*:\s*`+a+`\b[^}\n]*\} = require\(["']`+m+`["']\);$`).MatchString(text)
}

func isESModuleOutput(text string) bool {
  return reESModuleOutput.MatchString(text)
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
