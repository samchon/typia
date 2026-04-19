package emitter

import (
	"errors"
	"fmt"

	"github.com/samchon/typia/packages/ttsc/internal/engine/metadata"
)

// EmitNotationArrowFunction returns a runtime recursive key-renamer matching
// `typia.notations.<case><T>(input)`. Case is one of "camel", "pascal",
// "snake" and controls how string identifiers are rewritten.
//
// typia v12 emits a structure-specific recursive function driven by the
// MetadataSchema. Phase 0 keeps a simpler runtime recursion that re-uses
// proven `toCamel`/`toPascal`/`toSnake` helpers inlined below — the cost
// premium over the schema-driven variant only matters on huge payloads and
// we'll tackle it in Phase 1 once the full object walker is in place.
func EmitNotationArrowFunction(_ *metadata.Schema, kind string) (string, error) {
	helper, err := notationHelper(kind)
	if err != nil {
		return "", err
	}
	return fmt.Sprintf(`((__rename) => (input) => { const __walk = (v) => { if (Array.isArray(v)) return v.map(__walk); if (v && typeof v === "object") { const out = {}; for (const k of Object.keys(v)) out[__rename(k)] = __walk(v[k]); return out; } return v; }; return __walk(input); })(%s)`, helper), nil
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
		return `((s) => s.replace(/([A-Z])/g, "_$1").replace(/[-\s]+/g, "_").replace(/^_+|_+$/g, "").toLowerCase())`, nil
	}
	return "", errors.New("notationHelper: unknown kind " + kind)
}
