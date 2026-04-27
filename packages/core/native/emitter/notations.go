package emitter

import (
	"errors"
	"fmt"

	"github.com/samchon/typia/packages/core/native/metadata"
)

// EmitNotationArrowFunction returns a runtime recursive key-renamer matching
// `typia.notations.<case><T>(input)`. Case is one of "camel", "pascal",
// "snake" and controls how string identifiers are rewritten.
//
// typia v12 emits a structure-specific recursive function driven by the
// MetadataSchema. The current port keeps a simpler runtime recursion that
// re-uses proven `toCamel`/`toPascal`/`toSnake` helpers inlined below — the
// cost premium over the schema-driven variant only matters on huge payloads.
func EmitNotationArrowFunction(_ *metadata.Schema, kind string) (string, error) {
	helper, err := notationHelper(kind)
	if err != nil {
		return "", err
	}
	return fmt.Sprintf(`((__rename) => (input) => { const __walk = (v) => { if (Array.isArray(v)) return v.map(__walk); if (v instanceof Date) return new Date(v.getTime()); if (v instanceof RegExp) return new RegExp(v.source, v.flags); if (v instanceof Set) return new Set(Array.from(v, __walk)); if (v instanceof Map) return new Map(Array.from(v, ([k, val]) => [__walk(k), __walk(val)])); if (v && typeof v === "object") { const out = {}; for (const k of Object.keys(v)) out[__rename(k)] = __walk(v[k]); return out; } return v; }; return __walk(input); })(%s)`, helper), nil
}

// notationHelper returns the inline JS function that performs the per-key
// rename. Kept tiny so the emitted .js doesn't explode in size — the logic
// mirrors typia v12's `NamingConvention.camel/pascal/snake`.
func notationHelper(kind string) (string, error) {
	switch kind {
	case "camel":
		return `((s) => s.replace(/[_\-\s]+(.)/g, (_, c) => c.toUpperCase()).replace(/^(.)/, c => c.toLowerCase()))`, nil
	case "pascal":
		return `((s) => { const camel = s.replace(/[_\-\s]+(.)/g, (_, c) => c.toUpperCase()); return camel.charAt(0).toUpperCase() + camel.slice(1); })`, nil
	case "snake":
		return `((s) => { if (s.length === 0) return s; let prefix = ""; for (let i = 0; i < s.length; i++) { if (s[i] === "_") prefix += "_"; else break; } if (prefix.length) s = s.substring(prefix.length); const out = (v) => prefix + v; const items = s.split("_"); if (items.length > 1) return out(items.map((x) => x.toLowerCase()).join("_")); const indexes = []; for (let i = 0; i < s.length; i++) { const code = s.charCodeAt(i); if (65 <= code && code <= 90) indexes.push(i); } for (let i = indexes.length - 1; i > 0; --i) { const now = indexes[i], prev = indexes[i - 1]; if (now - prev === 1) indexes.splice(i, 1); } if (indexes.length && indexes[0] === 0) indexes.splice(0, 1); if (indexes.length === 0) return out(s.toLowerCase()); let ret = ""; for (let i = 0; i < indexes.length; i++) { const first = i === 0 ? 0 : indexes[i - 1]; const last = indexes[i]; ret += s.substring(first, last).toLowerCase(); ret += "_"; } ret += s.substring(indexes[indexes.length - 1]).toLowerCase(); return out(ret); })`, nil
	}
	return "", errors.New("notationHelper: unknown kind " + kind)
}
