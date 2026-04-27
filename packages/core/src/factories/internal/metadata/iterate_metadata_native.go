package metadata

func IterateMetadataNative(props IMetadataIteratorProps) bool {
	if props.Type == nil {
		return false
	}
	name := getNativeName(props.Type.String())
	if _, ok := simpleNativeClasses[name]; ok {
		takeNative(&props.Metadata.Natives, MetadataNative{Name: name})
		return true
	}
	if name == "WeakMap" || name == "WeakSet" {
		takeNative(&props.Metadata.Natives, MetadataNative{Name: name})
		return true
	}
	return false
}

func getNativeName(name string) string {
	for i, r := range name {
		if r == '<' {
			name = name[:i]
			break
		}
	}
	return name
}

var simpleNativeClasses = map[string]struct{}{
	"Date": {}, "Boolean": {}, "Number": {}, "String": {}, "Uint8Array": {}, "Uint8ClampedArray": {},
	"Uint16Array": {}, "Uint32Array": {}, "BigUint64Array": {}, "Int8Array": {}, "Int16Array": {},
	"Int32Array": {}, "BigInt64Array": {}, "Float32Array": {}, "Float64Array": {}, "ArrayBuffer": {},
	"SharedArrayBuffer": {}, "Blob": {}, "File": {}, "DataView": {}, "RegExp": {},
}
