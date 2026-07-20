package metadata

import (
  "strings"

  nativeast "github.com/microsoft/typescript-go/shim/ast"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

func Iterate_metadata_native(props IMetadataIteratorProps) bool {
  var symbol *nativeast.Symbol
  name := ""
  if props.Type != nil {
    symbol = props.Type.Symbol()
    name = metadata_type_symbol_base_name(props.Type)
  }
  if name == "" && props.Checker != nil && props.Type != nil {
    apparent := props.Checker.GetApparentType(props.Type)
    if apparent != nil {
      symbol = apparent.Symbol()
    }
    name = metadata_type_symbol_base_name(apparent)
  }
  name = iterate_metadata_native_getNativeName(name)
  if _, ok := iterate_metadata_native_simples[name]; ok {
    // Match the built-in only when the checker resolves this exact symbol from
    // the global type table *and* a runtime authority provides its constructor.
    // A colliding package declaration then falls through to its structural
    // members regardless of whether it was authored in `.ts` or published
    // through `.d.ts` (#2239), and so does a purely user-authored global that
    // merely wins the same global lookup (#2200). Node's authoritative Blob and
    // File module exports are distinct symbols for the same runtime globals, so
    // admit only their value-bearing exact core-module declaration shape as the
    // second identity path (#1568).
    if !metadata_symbol_is_runtime_native_type(props.Checker, symbol, name) {
      return false
    }
    iterate_metadata_native_take(props.Metadata, name)
    return true
  }
  for _, generic := range iterate_metadata_native_generics {
    if name == generic.Name || strings.HasPrefix(name, generic.Name+"<") {
      // Use the same runtime-provenance identity gate for WeakMap/WeakSet. The
      // `+"<"` arity guard (#2181) and generic metadata remain unchanged.
      if !metadata_symbol_is_runtime_global_type(props.Checker, symbol, generic.Name) {
        return false
      }
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
  // `global.` is the qualifier `metadata_symbol_name` produces for a symbol
  // declared inside a `declare global` block, which is how @types/node declares
  // the bare `Blob` and `File` globals. A project that includes the DOM library
  // never showed it, because the DOM declares those names at file scope and the
  // DOM declaration won the name; drop the DOM library — an ordinary Node
  // service compiled with `"lib": ["ES2022"]` — and the only declaration left is
  // the augmented one, so the name arrives as `global.Blob` and this lookup
  // misses before any identity question is asked. Stripping the qualifier only
  // restores the question; whether the declaration is a runtime-provided native
  // or a same-named user global stays the identity gate's answer to give.
  //
  // An ambient module's qualifier is deliberately not stripped here: a lookalike
  // published as `declare module "user-buffer-lookalike"` arrives as
  // `user-buffer-lookalike.Blob` and must keep failing this lookup.
  for _, module := range []string{"node:buffer.", "buffer.", "global."} {
    if strings.HasPrefix(name, module) {
      return strings.TrimPrefix(name, module)
    }
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
  "BigInt":            {Name: "BigInt"},
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
