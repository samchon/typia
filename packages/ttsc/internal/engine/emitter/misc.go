package emitter

import (
	"errors"
	"fmt"
	"sort"
	"strings"

	"github.com/samchon/typia/packages/ttsc/internal/engine/metadata"
)

// EmitMiscLiteralsExpression returns a JS expression whose runtime value is
// an array of every literal in the given union type. Matches
// `typia.misc.literals<"a" | "b">()`.
func EmitMiscLiteralsExpression(schema *metadata.Schema) (string, error) {
	if schema == nil {
		return "", errors.New("emitter: nil schema")
	}
	values := make([]string, 0)
	for _, c := range schema.Constants {
		for _, v := range c.Values {
			values = append(values, jsLiteral(c.Type, v.Value))
		}
	}
	sort.Strings(values)
	return "(" + "[" + strings.Join(values, ",") + "]" + ")", nil
}

// jsLiteral renders a literal value in JS source form.
func jsLiteral(k metadata.AtomicKind, v any) string {
	switch k {
	case metadata.AtomicString:
		if s, ok := v.(string); ok {
			return jsonQuote(s)
		}
	case metadata.AtomicNumber:
		return numberLiteral(v)
	case metadata.AtomicBigint:
		return numberLiteral(v) + "n"
	case metadata.AtomicBoolean:
		if b, ok := v.(bool); ok {
			if b {
				return "true"
			}
			return "false"
		}
	}
	return "null"
}

// EmitMiscCloneArrowFunction returns a naïve deep-clone that handles the
// shapes the Phase 0 analyzer supports. Rather than structure the clone
// around MetadataSchema (which gives the fastest typia v12 output), we use
// structured-clone-equivalent semantics via JSON round-trip for primitives /
// arrays / objects. Users requiring protobuf / Map / Set etc. will fall back
// to `typia.misc.clone` typia-v12 in the interim.
func EmitMiscCloneArrowFunction(_ *metadata.Schema) (string, error) {
	return "(input) => JSON.parse(JSON.stringify(input))", nil
}

// EmitMiscPruneArrowFunction returns an in-place prune that walks a schema
// and deletes properties not declared in the TS type. Phase 0 supports
// objects with a fixed property set.
func EmitMiscPruneArrowFunction(schema *metadata.Schema) (string, error) {
	if schema == nil {
		return "", errors.New("emitter: nil schema")
	}
	if len(schema.Objects) != 1 {
		// Fallback: no-op prune — returns input unchanged.
		return "(input) => input", nil
	}
	obj := schema.Objects[0].Type
	if obj == nil {
		return "(input) => input", nil
	}
	allowed := make([]string, 0, len(obj.Properties))
	for _, p := range obj.Properties {
		if name, ok := p.Key.GetSoleLiteral(); ok {
			allowed = append(allowed, jsonQuote(name))
		}
	}
	allowedArr := "[" + strings.Join(allowed, ",") + "]"
	return fmt.Sprintf(
		"(input) => { const __allow = new Set(%s); for (const __k of Object.keys(input)) { if (!__allow.has(__k)) delete input[__k]; } return input; }",
		allowedArr,
	), nil
}
