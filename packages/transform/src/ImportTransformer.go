package transform

import (
	"regexp"
	"strings"
)

var ImportTransformer = importTransformerNamespace{}

type importTransformerNamespace struct{}

func (importTransformerNamespace) Cleanup(text string) string {
	if strings.Contains(text, ".default.") || strings.Contains(text, "typia.") {
		return text
	}
	lines := strings.Split(text, "\n")
	out := make([]string, 0, len(lines))
	for _, line := range lines {
		trimmed := strings.TrimSpace(line)
		if strings.Contains(trimmed, `require("typia")`) || strings.Contains(trimmed, `require('typia')`) {
			continue
		}
		if strings.HasPrefix(trimmed, `import `) && (strings.Contains(trimmed, ` from "typia"`) || strings.Contains(trimmed, ` from 'typia'`)) {
			continue
		}
		out = append(out, line)
	}
	return strings.Join(out, "\n")
}

func (importTransformerNamespace) typiaRoots(text string) []string {
	seen := map[string]bool{}
	var out []string
	add := func(name string) {
		if name != "" && !seen[name] {
			seen[name] = true
			out = append(out, name)
		}
	}
	for _, match := range regexp.MustCompile(`(?m)import\s+([A-Za-z_$][\w$]*)\s+from\s+["']typia["']`).FindAllStringSubmatch(text, -1) {
		add(match[1])
	}
	for _, match := range regexp.MustCompile(`(?m)import\s+\*\s+as\s+([A-Za-z_$][\w$]*)\s+from\s+["']typia["']`).FindAllStringSubmatch(text, -1) {
		add(match[1])
	}
	if strings.Contains(text, " from \"typia\"") || strings.Contains(text, " from 'typia'") {
		add("typia")
	}
	return out
}
