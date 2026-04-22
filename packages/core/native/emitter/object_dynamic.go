package emitter

import (
	"fmt"
	"sort"
	"strings"

	"github.com/samchon/typia/packages/core/native/metadata"
)

func splitObjectProperties(obj *metadata.ObjectType) ([]*metadata.Property, []*metadata.Property) {
	if obj == nil {
		return nil, nil
	}
	literal := make([]*metadata.Property, 0, len(obj.Properties))
	dynamic := make([]*metadata.Property, 0, len(obj.DynamicProperties))
	for _, prop := range obj.Properties {
		if prop == nil || prop.Key == nil {
			continue
		}
		if _, ok := prop.Key.GetSoleLiteral(); ok {
			literal = append(literal, prop)
			continue
		}
		dynamic = append(dynamic, prop)
	}
	dynamic = append(dynamic, obj.DynamicProperties...)
	sort.Slice(literal, func(i, j int) bool {
		ki, _ := literal[i].Key.GetSoleLiteral()
		kj, _ := literal[j].Key.GetSoleLiteral()
		return ki < kj
	})
	return literal, dynamic
}

func dynamicKeyCheck(keyExpr string, schema *metadata.Schema) (string, error) {
	if schema == nil || schema.Any || allowsAnyStringKey(schema) {
		return "true", nil
	}
	parts := make([]string, 0, schema.Size()+4)
	if schema.Nullable {
		parts = append(parts, `"null" === `+keyExpr)
	}
	if !schema.IsRequired() {
		parts = append(parts, `"undefined" === `+keyExpr)
	}
	for _, atom := range schema.Atomics {
		if expr := dynamicAtomicKeyCheck(keyExpr, atom.Type, atom.Tags); expr != "" {
			parts = append(parts, expr)
		}
	}
	for _, constant := range schema.Constants {
		for _, value := range constant.Values {
			parts = append(parts, jsonQuote(fmt.Sprint(value.Value))+` === `+keyExpr)
		}
	}
	for _, tpl := range schema.Templates {
		if expr := templateCheck(keyExpr, tpl); expr != "" {
			parts = append(parts, expr)
		}
	}
	for _, native := range schema.Natives {
		if expr := dynamicNativeKeyCheck(keyExpr, native.Name); expr != "" {
			parts = append(parts, expr)
		}
	}
	if len(parts) == 0 {
		return "false", nil
	}
	sort.Strings(parts)
	if len(parts) == 1 {
		return parts[0], nil
	}
	return "(" + strings.Join(parts, " || ") + ")", nil
}

func allowsAnyStringKey(schema *metadata.Schema) bool {
	if schema == nil || schema.Any {
		return true
	}
	for _, atom := range schema.Atomics {
		if atom.Type == metadata.AtomicString && len(atom.Tags) == 0 {
			return true
		}
	}
	for _, native := range schema.Natives {
		if native.Name == "String" {
			return true
		}
	}
	return false
}

func dynamicAtomicKeyCheck(keyExpr string, kind metadata.AtomicKind, tags metadata.TagMatrix) string {
	switch kind {
	case metadata.AtomicString:
		return atomicWithTags(`"string" === typeof `+keyExpr, keyExpr, tags)
	case metadata.AtomicNumber:
		numberExpr := `Number(` + keyExpr + `)`
		base := `!Number.isNaN(` + numberExpr + `) && Number.isFinite(` + numberExpr + `)`
		return base + " && " + atomicWithTags("true", numberExpr, tags)
	case metadata.AtomicBigint:
		if len(tags) == 0 {
			return `(/^[-]?(?:0|[1-9]\d*)$/).test(` + keyExpr + `)`
		}
		return `((/^[-]?(?:0|[1-9]\d*)$/).test(` + keyExpr + `) && ` + atomicWithTags("true", `BigInt(`+keyExpr+`)`, tags) + `)`
	case metadata.AtomicBoolean:
		return `("false" === ` + keyExpr + ` || "true" === ` + keyExpr + `)`
	default:
		return ""
	}
}

func dynamicNativeKeyCheck(keyExpr, name string) string {
	switch name {
	case "String":
		return "true"
	case "Number":
		return `(!Number.isNaN(Number(` + keyExpr + `)) && Number.isFinite(Number(` + keyExpr + `)))`
	case "BigInt":
		return `(/^[-]?(?:0|[1-9]\d*)$/).test(` + keyExpr + `)`
	case "Boolean":
		return `("false" === ` + keyExpr + ` || "true" === ` + keyExpr + `)`
	default:
		return ""
	}
}
