package analyzer

import (
	shimchecker "github.com/microsoft/typescript-go/shim/checker"
)

// nativeName returns the canonical typia native name for built-in classes.
// The whitelist matches typia v12's `iterate_metadata_native.ts` SIMPLES +
// GENERICS tables plus `Map` / `Set`, which typia routes through dedicated
// MetadataMap / MetadataSet buckets, but the current emitter still treats them
// as natives to keep the IR simple.
func nativeName(_ *shimchecker.Checker, t *shimchecker.Type) (string, bool) {
	if t == nil {
		return "", false
	}
	sym := t.Symbol()
	if sym == nil || sym.Name == "" {
		return "", false
	}
	switch sym.Name {
	case "Date", "Boolean", "Number", "String",
		"Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array",
		"Int8Array", "Int16Array", "Int32Array",
		"Float32Array", "Float64Array",
		"BigInt64Array", "BigUint64Array",
		"ArrayBuffer", "SharedArrayBuffer", "DataView",
		"Blob", "File", "RegExp",
		"WeakMap", "WeakSet",
		"Map", "Set":
		return sym.Name, true
	}
	return "", false
}
