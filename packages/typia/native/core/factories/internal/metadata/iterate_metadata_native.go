package metadata

import (
	"strings"

	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

func Iterate_metadata_native(props IMetadataIteratorProps) bool {
	name := iterate_metadata_native_getNativeName("")
	if props.Checker != nil && props.Type != nil {
		name = iterate_metadata_native_getNativeName(props.Checker.TypeToString(props.Type))
	}
	if _, ok := iterate_metadata_native_simples[name]; ok {
		iterate_metadata_native_take(props.Metadata, name)
		return true
	}
	for _, generic := range iterate_metadata_native_generics {
		if strings.HasPrefix(name, generic.Name) {
			iterate_metadata_native_take(props.Metadata, generic.Name)
			return true
		}
	}
	return false
}

func iterate_metadata_native_take(metadata *schemametadata.MetadataSchema, name string) {
	for _, native := range metadata.Natives {
		if native.Name == name {
			return
		}
	}
	metadata.Natives = append(metadata.Natives, schemametadata.MetadataNative_create(schemametadata.MetadataNative{
		Name: name,
		Tags: [][]schemametadata.IMetadataTypeTag{},
	}))
}

func iterate_metadata_native_getNativeName(name string) string {
	if index := strings.Index(name, "<"); index != -1 {
		name = name[:index]
	}
	if strings.HasPrefix(name, "\"") && strings.Contains(name, "\".") {
		if index := strings.Index(name[1:], "\"."); index != -1 {
			name = name[index+3:]
		}
	}
	return name
}

type iterate_metadata_native_classInfo struct {
	Name       string
	Methods    []iterate_metadata_native_method
	Properties []iterate_metadata_native_property
}

type iterate_metadata_native_method struct {
	Name   string
	Return string
}

type iterate_metadata_native_property struct {
	Name string
	Type string
}

var iterate_metadata_native_simples = map[string]iterate_metadata_native_classInfo{
	"Date":              {Name: "Date"},
	"Boolean":           {Name: "Boolean"},
	"Number":            {Name: "Number"},
	"String":            {Name: "String"},
	"Uint8Array":        iterate_metadata_native_getBinaryProps("Uint8Array"),
	"Uint8ClampedArray": iterate_metadata_native_getBinaryProps("Uint8ClampedArray"),
	"Uint16Array":       iterate_metadata_native_getBinaryProps("Uint16Array"),
	"Uint32Array":       iterate_metadata_native_getBinaryProps("Uint32Array"),
	"BigUint64Array":    iterate_metadata_native_getBinaryProps("BigUint64Array"),
	"Int8Array":         iterate_metadata_native_getBinaryProps("Int8Array"),
	"Int16Array":        iterate_metadata_native_getBinaryProps("Int16Array"),
	"Int32Array":        iterate_metadata_native_getBinaryProps("Int32Array"),
	"BigInt64Array":     iterate_metadata_native_getBinaryProps("BigInt64Array"),
	"Float32Array":      iterate_metadata_native_getBinaryProps("Float32Array"),
	"Float64Array":      iterate_metadata_native_getBinaryProps("Float64Array"),
	"ArrayBuffer":       {Name: "ArrayBuffer"},
	"SharedArrayBuffer": {Name: "SharedArrayBuffer"},
	"Blob":              {Name: "Blob"},
	"File":              {Name: "File"},
	"DataView":          {Name: "DataView"},
	"RegExp":            {Name: "RegExp"},
}

var iterate_metadata_native_generics = []iterate_metadata_native_classInfo{
	{Name: "WeakMap"},
	{Name: "WeakSet"},
}

func iterate_metadata_native_getBinaryProps(className string) iterate_metadata_native_classInfo {
	return iterate_metadata_native_classInfo{
		Name: className,
		Methods: []iterate_metadata_native_method{
			{Name: "indexOf", Return: "number"},
			{Name: "lastIndexOf", Return: "number"},
			{Name: "some", Return: "boolean"},
			{Name: "every", Return: "boolean"},
			{Name: "join", Return: "string"},
			{Name: "toLocaleString", Return: "string"},
			{Name: "reverse", Return: className},
			{Name: "slice", Return: className},
			{Name: "subarray", Return: className},
		},
		Properties: []iterate_metadata_native_property{
			{Name: "BYTES_PER_ELEMENT", Type: "number"},
			{Name: "length", Type: "number"},
			{Name: "byteLength", Type: "number"},
			{Name: "byteOffset", Type: "number"},
		},
	}
}
