package analyzer

import (
	"strings"

	shimchecker "github.com/microsoft/typescript-go/shim/checker"

	"github.com/samchon/typia/packages/core/native/metadata"
)

func wrapperAtomicKind(_ *shimchecker.Checker, t *shimchecker.Type) (metadata.AtomicKind, bool) {
	if t == nil {
		return "", false
	}
	name := ""
	if sym := t.Symbol(); sym != nil && sym.Name != "" {
		name = sym.Name
	}
	if name == "" {
		name = strings.TrimSpace(shimTypeString(nil, t))
	}
	switch name {
	case "Boolean":
		return metadata.AtomicBoolean, true
	case "Number":
		return metadata.AtomicNumber, true
	case "String":
		return metadata.AtomicString, true
	default:
		return "", false
	}
}

// nativeName returns the canonical typia native name for built-in classes.
// The whitelist matches typia v12's `iterate_metadata_native.ts` SIMPLES +
// GENERICS tables plus `Map` / `Set`, which typia routes through dedicated
// MetadataMap / MetadataSet buckets, but the current emitter still treats them
// as natives to keep the IR simple.
func nativeName(_ *shimchecker.Checker, t *shimchecker.Type) (string, bool) {
	if t == nil {
		return "", false
	}
	if sym := t.Symbol(); sym != nil && sym.Name != "" {
		if name, ok := nativeByName(sym.Name); ok {
			return name, true
		}
	}
	if name, ok := nativeByTypeString(shimTypeString(nil, t)); ok {
		return name, true
	}
	return "", false
}

func nativeByName(name string) (string, bool) {
	switch name {
	case "Date", "Boolean", "Number", "String",
		"Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array",
		"Int8Array", "Int16Array", "Int32Array",
		"Float32Array", "Float64Array",
		"BigInt64Array", "BigUint64Array",
		"ArrayBuffer", "SharedArrayBuffer", "DataView",
		"Blob", "File", "RegExp",
		"WeakMap", "WeakSet",
		"Map", "Set":
		return name, true
	}
	return "", false
}

func nativeByTypeString(name string) (string, bool) {
	name = strings.TrimSpace(name)
	if name == "" {
		return "", false
	}
	for _, candidate := range []string{
		"Date", "Boolean", "Number", "String",
		"Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array",
		"Int8Array", "Int16Array", "Int32Array",
		"Float32Array", "Float64Array",
		"BigInt64Array", "BigUint64Array",
		"ArrayBuffer", "SharedArrayBuffer", "DataView",
		"Blob", "File", "RegExp",
		"WeakMap", "WeakSet",
		"Map", "Set",
	} {
		if name == candidate || strings.HasPrefix(name, candidate+"<") {
			return candidate, true
		}
	}
	return "", false
}
