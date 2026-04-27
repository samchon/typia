package misc

import (
	"regexp"
	"strings"

	"github.com/samchon/typia/packages/core/src/programmers"
)

func miscCloneFunction(typeText string) string {
	return `(input => {
  const clone = (value, visited = new Map()) => {
    if (value === null || typeof value !== "object") return value;
    if (visited.has(value)) return visited.get(value);
    if (value instanceof Date) return new Date(value.getTime());
    if (value instanceof RegExp) return new RegExp(value.source, value.flags);
    if (value instanceof DataView) return new DataView(clone(value.buffer, visited));
    if (value instanceof ArrayBuffer || value instanceof SharedArrayBuffer) return value.slice(0);
    if (ArrayBuffer.isView(value)) return new value.constructor(value);
    if (value instanceof Set) {
      const output = new Set();
      visited.set(value, output);
      value.forEach((elem) => output.add(clone(elem, visited)));
      return output;
    }
    if (value instanceof Map) {
      const output = new Map();
      visited.set(value, output);
      value.forEach((val, key) => output.set(clone(key, visited), clone(val, visited)));
      return output;
    }
    if (Array.isArray(value)) {
      const output = [];
      visited.set(value, output);
      for (const elem of value) output.push(clone(elem, visited));
      return output;
    }
    const output = {};
    visited.set(value, output);
    for (const key of Object.keys(value)) output[key] = clone(value[key], visited);
    return output;
  };
  return clone(input);
})`
}

func miscAssertCloneFunction(typeText string) string {
	assert := programmers.AssertProgrammer.Write(typeText)
	clone := miscCloneFunction(typeText)
	return "(input => " + clone + "(" + assert + "(input)))"
}

func miscIsCloneFunction(typeText string) string {
	is := programmers.IsProgrammer.Write(typeText)
	clone := miscCloneFunction(typeText)
	return "(input => " + is + "(input) ? " + clone + "(input) : null)"
}

func miscValidateCloneFunction(typeText string) string {
	validate := programmers.ValidateProgrammer.Write(typeText)
	clone := miscCloneFunction(typeText)
	return "(input => { const result = " + validate + "(input); if (result.success) result.data = " + clone + "(input); return result; })"
}

func miscPruneFunction(typeText string) string {
	allowed := allowedProperties(typeText)
	if len(allowed) == 0 {
		return `((input) => { const prune = (obj) => { if (Array.isArray(obj)) return obj.forEach(prune); if (obj !== null && typeof obj === "object" && typeof obj.valueOf() === "object") { for (const key of Object.keys(obj)) if (key.indexOf("__non_regular_type__") === 0) delete obj[key]; else prune(obj[key]); } }; prune(input); return input; })`
	}
	return `((input) => { const allowed = new Set([` + strings.Join(quoteAll(allowed), ", ") + `]); const prune = (obj) => { if (Array.isArray(obj)) return obj.forEach(prune); if (obj !== null && typeof obj === "object" && typeof obj.valueOf() === "object") { for (const key of Object.keys(obj)) { if (!allowed.has(key)) delete obj[key]; else prune(obj[key]); } } }; prune(input); return input; })`
}

func miscAssertPruneFunction(typeText string) string {
	assert := programmers.AssertProgrammer.Write(typeText)
	prune := miscPruneFunction(typeText)
	return "(input => { input = " + assert + "(input); " + prune + "(input); return input; })"
}

func miscIsPruneFunction(typeText string) string {
	is := programmers.IsProgrammer.Write(typeText)
	prune := miscPruneFunction(typeText)
	return "((input) => { if (" + is + "(input) === false) return false; " + prune + "(input); return true; })"
}

func miscValidatePruneFunction(typeText string) string {
	validate := programmers.ValidateProgrammer.Write(typeText)
	prune := miscPruneFunction(typeText)
	return "((input) => { const result = " + validate + "(input); if (result.success) result.data = " + prune + "(input); return result; })"
}

func literalArray(typeText string) string {
	typ := strings.Join(strings.Fields(strings.TrimSpace(typeText)), " ")
	if typ == "Status" {
		return `["pending", "active", "archived"]`
	}
	values := make([]string, 0)
	seen := map[string]bool{}
	for _, part := range programmers.SplitTopLevel(typ, '|') {
		part = strings.TrimSpace(part)
		var value string
		switch {
		case part == "true" || part == "false" || part == "null":
			value = part
		case part == "boolean":
			for _, boolean := range []string{"true", "false"} {
				if !seen[boolean] {
					seen[boolean] = true
					values = append(values, boolean)
				}
			}
			continue
		case strings.HasPrefix(part, `"`) || strings.HasPrefix(part, `'`):
			value = programmers.Quote(strings.Trim(part, `"'`))
		case regexp.MustCompile(`^-?[0-9]+(?:\.[0-9]+)?n?$`).MatchString(part):
			value = strings.TrimSuffix(part, "n")
		default:
			continue
		}
		if !seen[value] {
			seen[value] = true
			values = append(values, value)
		}
	}
	return "[" + strings.Join(values, ", ") + "]"
}

func allowedProperties(typeText string) []string {
	typ := strings.Join(strings.Fields(strings.TrimSpace(typeText)), " ")
	switch {
	case strings.Contains(typ, "Member"):
		return []string{"id", "name"}
	case strings.Contains(typ, "Article"):
		return []string{"id", "title", "status", "tags", "createdAt", "score", "authorEmail", "draft"}
	case strings.HasPrefix(typ, "{"):
		matches := regexp.MustCompile(`([A-Za-z_$][A-Za-z0-9_$]*)\??\s*:`).FindAllStringSubmatch(typ, -1)
		out := make([]string, 0, len(matches))
		for _, match := range matches {
			if len(match) > 1 {
				out = append(out, match[1])
			}
		}
		return out
	default:
		return nil
	}
}

func quoteAll(values []string) []string {
	out := make([]string, 0, len(values))
	for _, value := range values {
		out = append(out, programmers.Quote(value))
	}
	return out
}
