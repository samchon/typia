package misc

import (
  "fmt"
  "math"
  "strconv"
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type miscEqualProgrammerNamespace struct{}

var MiscEqualProgrammer = miscEqualProgrammerNamespace{}

type MiscEqualProgrammer_IConfig struct {
  Cover bool
}

type MiscEqualProgrammer_IProps struct {
  Context nativecontext.ITypiaContext
  Modulo  *shimast.Node
  Type    *shimchecker.Type
  Name    *string
  Config  MiscEqualProgrammer_IConfig
}

type miscEqualProgrammerGenerator struct {
  Config    MiscEqualProgrammer_IConfig
  Recursive bool
  Counter   int
}

var miscEqualProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (miscEqualProgrammerNamespace) Write(props MiscEqualProgrammer_IProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(miscEqualProgrammer_factory, props.Context.Emit)
  method := nativehelpers.ModuloMethodText(props.Modulo)
  collection := schemametadata.NewMetadataCollection()
  result := nativefactories.MetadataFactory.Analyze(nativefactories.MetadataFactory_IProps{
    Checker: props.Context.Checker,
    Options: nativefactories.MetadataFactory_IOptions{
      Escape:   false,
      Constant: true,
      Absorb:   true,
      Validate: func(next struct {
        Metadata *schemametadata.MetadataSchema
        Explore  nativefactories.MetadataFactory_IExplore
        Top      *schemametadata.MetadataSchema
      }) []string {
        return miscEqualProgrammer_validate(next.Metadata)
      },
    },
    Components: collection,
    Type:       props.Type,
  })
  if result.Success == false {
    panic(nativecontext.TransformerError_from(struct {
      Code   string
      Errors []nativecontext.TransformerError_MetadataFactory_IError
    }{
      Code:   method,
      Errors: miscCloneProgrammer_errors(result.Errors),
    }))
  }

  generator := &miscEqualProgrammerGenerator{
    Config:    props.Config,
    Recursive: nativeinternal.FeatureProgrammer.CollectionRecursive(collection),
  }
  body := generator.schema(result.Data, "x", "y")
  statements := []string{}
  for _, object := range collection.Objects() {
    statements = append(statements, generator.objectFunction(object))
  }
  for _, array := range collection.Arrays() {
    if array.Recursive {
      statements = append(statements, generator.arrayFunction(array))
    }
  }
  for _, tuple := range collection.Tuples() {
    if tuple.Recursive {
      statements = append(statements, generator.tupleFunction(tuple))
    }
  }
  if generator.Recursive {
    statements = append(statements, "return (x, y) => { const _vctx = {}; return "+body+"; };")
  } else {
    statements = append(statements, "return (x, y) => "+body+";")
  }
  return f.NewIdentifier("(() => { " + strings.Join(statements, " ") + " })()")
}

func miscEqualProgrammer_validate(metadata *schemametadata.MetadataSchema) []string {
  if metadata == nil {
    return nil
  }
  output := []string{}
  if metadata.Any {
    output = append(output, "unable to compare any")
  }
  if len(metadata.Functions) != 0 {
    output = append(output, "unable to compare Function")
  }
  if len(metadata.Sets) != 0 {
    output = append(output, "unable to compare Set")
  }
  if len(metadata.Maps) != 0 {
    output = append(output, "unable to compare Map")
  }
  for _, native := range metadata.Natives {
    if native.Name == "WeakSet" {
      output = append(output, "unable to compare WeakSet")
    } else if native.Name == "WeakMap" {
      output = append(output, "unable to compare WeakMap")
    }
  }
  return output
}

func (g *miscEqualProgrammerGenerator) schema(metadata *schemametadata.MetadataSchema, x string, y string) string {
  if metadata == nil {
    return g.same(x, y)
  }
  metadata = schemametadata.MetadataSchema_unalias(metadata)
  branches := []string{}
  for _, constant := range metadata.Constants {
    for _, value := range constant.Values {
      literal := miscEqualProgrammer_literal(value.Value, constant.Type)
      branches = append(branches, g.and(g.same(x, literal), g.same(y, literal)))
    }
  }
  for _, atomic := range metadata.Atomics {
    branches = append(branches, g.atomic(atomic.Type, x, y))
  }
  if len(metadata.Templates) != 0 {
    branches = append(branches, g.and(g.typeof(x, "string"), g.and(g.typeof(y, "string"), g.same(x, y))))
  }
  for _, native := range metadata.Natives {
    branches = append(branches, g.native(native.Name, x, y))
  }
  for _, tuple := range metadata.Tuples {
    branches = append(branches, g.tuple(tuple, x, y))
  }
  for _, array := range metadata.Arrays {
    branches = append(branches, g.array(array, x, y))
  }
  for _, object := range metadata.Objects {
    branches = append(branches, g.objectCall(object.Type, x, y))
  }
  for _, alias := range metadata.Aliases {
    branches = append(branches, g.schema(alias.Type.Value, x, y))
  }
  if metadata.Escaped != nil {
    branches = append(branches, g.schema(metadata.Escaped.Original, x, y))
  }
  if metadata.Rest != nil {
    branches = append(branches, g.schema(metadata.Rest, x, y))
  }
  if len(branches) == 0 {
    return g.same(x, y)
  }
  return g.or(append([]string{g.same(x, y)}, branches...)...)
}

func (g *miscEqualProgrammerGenerator) atomic(typ string, x string, y string) string {
  return g.and(g.typeof(x, typ), g.and(g.typeof(y, typ), g.same(x, y)))
}

func (g *miscEqualProgrammerGenerator) native(name string, x string, y string) string {
  switch name {
  case "Date":
    return g.and(g.instanceof(x, name), g.and(g.instanceof(y, name), g.same(g.call(x, "getTime"), g.call(y, "getTime"))))
  case "RegExp":
    return g.and(g.instanceof(x, name), g.and(g.instanceof(y, name), g.and(g.same(g.access(x, "source"), g.access(y, "source")), g.same(g.access(x, "flags"), g.access(y, "flags")))))
  case "ArrayBuffer", "SharedArrayBuffer":
    return g.and(g.instanceof(x, name), g.and(g.instanceof(y, name), g.bytes(g.newBytes(x), g.newBytes(y))))
  case "DataView":
    left := fmt.Sprintf("new Uint8Array(%s.buffer, %s.byteOffset, %s.byteLength)", g.wrap(x), g.wrap(x), g.wrap(x))
    right := fmt.Sprintf("new Uint8Array(%s.buffer, %s.byteOffset, %s.byteLength)", g.wrap(y), g.wrap(y), g.wrap(y))
    return g.and(g.instanceof(x, name), g.and(g.instanceof(y, name), g.bytes(left, right)))
  case "Boolean", "BigInt", "Number", "String":
    return g.and(g.instanceof(x, name), g.and(g.instanceof(y, name), g.same(g.call(x, "valueOf"), g.call(y, "valueOf"))))
  default:
    if miscEqualProgrammer_typedArray(name) {
      return g.and(g.instanceof(x, name), g.and(g.instanceof(y, name), g.bytes(x, y)))
    }
    return g.same(x, y)
  }
}

func (g *miscEqualProgrammerGenerator) array(array *schemametadata.MetadataArray, x string, y string) string {
  if array.Type.Recursive {
    return g.arrayCall(array.Type, x, y)
  }
  return g.arrayInline(array.Type.Value, x, y)
}

func (g *miscEqualProgrammerGenerator) arrayInline(value *schemametadata.MetadataSchema, x string, y string) string {
  elem := g.local("elem")
  index := g.local("i")
  next := g.schema(value, elem, g.index(y, index))
  return g.and(g.isArray(x), g.and(g.isArray(y), g.and(g.same(g.access(x, "length"), g.access(y, "length")), fmt.Sprintf("%s.every((%s, %s) => %s)", g.wrap(x), elem, index, next))))
}

func (g *miscEqualProgrammerGenerator) tuple(tuple *schemametadata.MetadataTuple, x string, y string) string {
  if tuple.Type.Recursive {
    return g.tupleCall(tuple.Type, x, y)
  }
  return g.tupleInline(tuple.Type, x, y)
}

func (g *miscEqualProgrammerGenerator) tupleInline(tuple *schemametadata.MetadataTupleType, x string, y string) string {
  fixed := len(tuple.Elements)
  var rest *schemametadata.MetadataSchema
  if fixed != 0 && tuple.Elements[fixed-1].Rest != nil {
    rest = tuple.Elements[fixed-1].Rest
    fixed--
  }
  checks := []string{
    g.isArray(x),
    g.isArray(y),
    g.same(g.access(x, "length"), g.access(y, "length")),
  }
  if rest == nil {
    checks = append(checks, g.same(g.access(x, "length"), strconv.Itoa(fixed)))
  } else {
    checks = append(checks, fmt.Sprintf("%s.length >= %d", g.wrap(x), fixed))
  }
  for i := 0; i < fixed; i++ {
    checks = append(checks, g.schema(tuple.Elements[i], g.index(x, strconv.Itoa(i)), g.index(y, strconv.Itoa(i))))
  }
  if rest != nil {
    elem := g.local("elem")
    index := g.local("i")
    right := fmt.Sprintf("%s[%d + %s]", g.wrap(y), fixed, index)
    checks = append(checks, fmt.Sprintf("%s.slice(%d).every((%s, %s) => %s)", g.wrap(x), fixed, elem, index, g.schema(rest, elem, right)))
  }
  return g.and(checks...)
}

func (g *miscEqualProgrammerGenerator) objectCall(object *schemametadata.MetadataObjectType, x string, y string) string {
  if g.Recursive {
    return fmt.Sprintf("_eo%d(%s, %s, _vctx)", object.Index, g.wrap(x), g.wrap(y))
  }
  return fmt.Sprintf("_eo%d(%s, %s)", object.Index, g.wrap(x), g.wrap(y))
}

func (g *miscEqualProgrammerGenerator) arrayCall(array *schemametadata.MetadataArrayType, x string, y string) string {
  index := 0
  if array.Index != nil {
    index = *array.Index
  }
  if g.Recursive {
    return fmt.Sprintf("_ea%d(%s, %s, _vctx)", index, g.wrap(x), g.wrap(y))
  }
  return fmt.Sprintf("_ea%d(%s, %s)", index, g.wrap(x), g.wrap(y))
}

func (g *miscEqualProgrammerGenerator) tupleCall(tuple *schemametadata.MetadataTupleType, x string, y string) string {
  index := 0
  if tuple.Index != nil {
    index = *tuple.Index
  }
  if g.Recursive {
    return fmt.Sprintf("_et%d(%s, %s, _vctx)", index, g.wrap(x), g.wrap(y))
  }
  return fmt.Sprintf("_et%d(%s, %s)", index, g.wrap(x), g.wrap(y))
}

func (g *miscEqualProgrammerGenerator) objectFunction(object *schemametadata.MetadataObjectType) string {
  body := g.objectInline(object, "x", "y")
  if g.Recursive {
    if object.Recursive {
      return fmt.Sprintf("const _eo%d = (x, y, _vctx) => { if (x === y) return true; if (!(%s)) return false; %s const _ok = %s; if (!_ok) _set.delete(y); return _ok; };", object.Index, g.objectGuard("x", "y"), g.visit("eo", object.Index), body)
    }
    return fmt.Sprintf("const _eo%d = (x, y, _vctx) => x === y || (%s && %s);", object.Index, g.objectGuard("x", "y"), body)
  }
  return fmt.Sprintf("const _eo%d = (x, y) => x === y || (%s && %s);", object.Index, g.objectGuard("x", "y"), body)
}

func (g *miscEqualProgrammerGenerator) arrayFunction(array *schemametadata.MetadataArrayType) string {
  index := 0
  if array.Index != nil {
    index = *array.Index
  }
  body := g.arrayInline(array.Value, "x", "y")
  if g.Recursive {
    return fmt.Sprintf("const _ea%d = (x, y, _vctx) => { if (x === y) return true; if (!(Array.isArray(x) && Array.isArray(y))) return false; %s const _ok = %s; if (!_ok) _set.delete(y); return _ok; };", index, g.visit("ea", index), body)
  }
  return fmt.Sprintf("const _ea%d = (x, y) => %s;", index, body)
}

func (g *miscEqualProgrammerGenerator) tupleFunction(tuple *schemametadata.MetadataTupleType) string {
  index := 0
  if tuple.Index != nil {
    index = *tuple.Index
  }
  body := g.tupleInline(tuple, "x", "y")
  if g.Recursive {
    return fmt.Sprintf("const _et%d = (x, y, _vctx) => { if (x === y) return true; if (!(Array.isArray(x) && Array.isArray(y))) return false; %s const _ok = %s; if (!_ok) _set.delete(y); return _ok; };", index, g.visit("et", index), body)
  }
  return fmt.Sprintf("const _et%d = (x, y) => %s;", index, body)
}

func (g *miscEqualProgrammerGenerator) objectInline(object *schemametadata.MetadataObjectType, x string, y string) string {
  regular := []*schemametadata.MetadataProperty{}
  dynamic := []*schemametadata.MetadataProperty{}
  for _, property := range object.Properties {
    if property.Key.GetSoleLiteral() != nil {
      regular = append(regular, property)
    } else {
      dynamic = append(dynamic, property)
    }
  }

  checks := []string{}
  regularKeys := []string{}
  for _, property := range regular {
    key := *property.Key.GetSoleLiteral()
    regularKeys = append(regularKeys, key)
    left := g.property(x, key)
    right := g.property(y, key)
    expr := g.schema(property.Value, left, right)
    if g.Config.Cover {
      expr = g.or(g.same(right, "undefined"), expr)
    }
    checks = append(checks, expr)
  }

  regularCheck := miscEqualProgrammer_regularKeyCheck(regularKeys)
  if len(dynamic) != 0 {
    key := g.local("key")
    checks = append(checks, g.dynamicKeys(x, y, key, regularCheck, dynamic))
    if g.Config.Cover == false {
      checks = append(checks, fmt.Sprintf("Object.keys(%s).every((%s) => %s || Object.prototype.hasOwnProperty.call(%s, %s))", g.wrap(y), key, regularCheck(key), g.wrap(x), key))
    }
  } else if g.Config.Cover {
    key := g.local("key")
    checks = append(checks, fmt.Sprintf("Object.keys(%s).every((%s) => %s || %s === undefined)", g.wrap(y), key, regularCheck(key), g.index(y, key)))
  }

  return g.and(checks...)
}

func (g *miscEqualProgrammerGenerator) dynamicKeys(x string, y string, key string, regularCheck func(string) string, dynamic []*schemametadata.MetadataProperty) string {
  conditions := []string{}
  for _, property := range dynamic {
    left := g.index(x, key)
    right := g.index(y, key)
    value := g.schema(property.Value, left, right)
    conditions = append(conditions, g.and(g.dynamicKey(property.Key, key), value))
  }
  compare := g.or(conditions...)
  if g.Config.Cover {
    return fmt.Sprintf("Object.keys(%s).every((%s) => %s || %s === undefined || %s)", g.wrap(y), key, regularCheck(key), g.index(y, key), compare)
  }
  return fmt.Sprintf("Object.keys(%s).every((%s) => %s || (Object.prototype.hasOwnProperty.call(%s, %s) && %s))", g.wrap(x), key, regularCheck(key), g.wrap(y), key, compare)
}

func (g *miscEqualProgrammerGenerator) dynamicKey(metadata *schemametadata.MetadataSchema, key string) string {
  metadata = schemametadata.MetadataSchema_unalias(metadata)
  checks := []string{}
  for _, constant := range metadata.Constants {
    for _, value := range constant.Values {
      checks = append(checks, g.same(key, strconv.Quote(fmt.Sprint(value.Value))))
    }
  }
  if len(metadata.Atomics) != 0 || len(metadata.Templates) != 0 {
    checks = append(checks, "true")
  }
  if len(checks) == 0 {
    return "true"
  }
  return g.or(checks...)
}

func (g *miscEqualProgrammerGenerator) visit(kind string, index int) string {
  slot := fmt.Sprintf("_vctx.%s%d", kind, index)
  return fmt.Sprintf("const _map = %s || (%s = new WeakMap()); let _set = _map.get(x); if (_set && _set.has(y)) return true; if (!_set) _map.set(x, (_set = new WeakSet())); _set.add(y);", slot, slot)
}

func (g *miscEqualProgrammerGenerator) bytes(x string, y string) string {
  elem := g.local("byte")
  index := g.local("i")
  return g.and(g.same(g.access(x, "byteLength"), g.access(y, "byteLength")), fmt.Sprintf("%s.every((%s, %s) => %s === %s)", g.wrap(x), elem, index, elem, g.index(y, index)))
}

func (g *miscEqualProgrammerGenerator) objectGuard(x string, y string) string {
  return g.and(g.isObject(x), g.isObject(y))
}

func (g *miscEqualProgrammerGenerator) isObject(input string) string {
  return fmt.Sprintf("typeof %s === \"object\" && %s !== null && !Array.isArray(%s)", g.wrap(input), g.wrap(input), g.wrap(input))
}

func (g *miscEqualProgrammerGenerator) isArray(input string) string {
  return fmt.Sprintf("Array.isArray(%s)", g.wrap(input))
}

func (g *miscEqualProgrammerGenerator) instanceof(input string, name string) string {
  return fmt.Sprintf("%s instanceof %s", g.wrap(input), name)
}

func (g *miscEqualProgrammerGenerator) typeof(input string, typ string) string {
  return fmt.Sprintf("typeof %s === %s", g.wrap(input), strconv.Quote(typ))
}

func (g *miscEqualProgrammerGenerator) newBytes(input string) string {
  return fmt.Sprintf("new Uint8Array(%s)", g.wrap(input))
}

func (g *miscEqualProgrammerGenerator) call(input string, method string) string {
  return fmt.Sprintf("%s.%s()", g.wrap(input), method)
}

func (g *miscEqualProgrammerGenerator) property(input string, key string) string {
  if miscEqualProgrammer_identifier(key) {
    return g.access(input, key)
  }
  return g.index(input, strconv.Quote(key))
}

func (g *miscEqualProgrammerGenerator) access(input string, key string) string {
  return fmt.Sprintf("%s.%s", g.wrap(input), key)
}

func (g *miscEqualProgrammerGenerator) index(input string, key string) string {
  return fmt.Sprintf("%s[%s]", g.wrap(input), key)
}

func (g *miscEqualProgrammerGenerator) wrap(input string) string {
  if miscEqualProgrammer_simple(input) {
    return input
  }
  return "(" + input + ")"
}

func (g *miscEqualProgrammerGenerator) same(x string, y string) string {
  return fmt.Sprintf("%s === %s", g.wrap(x), g.wrap(y))
}

func (g *miscEqualProgrammerGenerator) and(expressions ...string) string {
  filtered := []string{}
  for _, expr := range expressions {
    if expr != "" && expr != "true" {
      filtered = append(filtered, expr)
    }
  }
  if len(filtered) == 0 {
    return "true"
  }
  return "(" + strings.Join(filtered, " && ") + ")"
}

func (g *miscEqualProgrammerGenerator) or(expressions ...string) string {
  filtered := []string{}
  for _, expr := range expressions {
    if expr == "true" {
      return "true"
    }
    if expr != "" && expr != "false" {
      filtered = append(filtered, expr)
    }
  }
  if len(filtered) == 0 {
    return "false"
  }
  return "(" + strings.Join(filtered, " || ") + ")"
}

func (g *miscEqualProgrammerGenerator) local(prefix string) string {
  next := fmt.Sprintf("_%s%d", prefix, g.Counter)
  g.Counter++
  return next
}

func miscEqualProgrammer_literal(value any, typ string) string {
  switch v := value.(type) {
  case string:
    if typ == "bigint" {
      if strings.HasSuffix(v, "n") {
        return v
      }
      return v + "n"
    }
    return strconv.Quote(v)
  case bool:
    if v {
      return "true"
    }
    return "false"
  case int:
    return fmt.Sprint(v)
  case int32:
    return fmt.Sprint(v)
  case int64:
    return fmt.Sprint(v)
  case uint:
    return fmt.Sprint(v)
  case uint32:
    return fmt.Sprint(v)
  case uint64:
    return fmt.Sprint(v)
  case float32:
    return miscEqualProgrammer_float(float64(v))
  case float64:
    return miscEqualProgrammer_float(v)
  default:
    if typ == "bigint" {
      text := fmt.Sprint(value)
      if strings.HasSuffix(text, "n") {
        return text
      }
      return text + "n"
    }
    return fmt.Sprint(value)
  }
}

func miscEqualProgrammer_float(value float64) string {
  if math.IsInf(value, 1) {
    return "Infinity"
  }
  if math.IsInf(value, -1) {
    return "-Infinity"
  }
  if math.IsNaN(value) {
    return "NaN"
  }
  return strconv.FormatFloat(value, 'f', -1, 64)
}

func miscEqualProgrammer_regularKeyCheck(keys []string) func(string) string {
  quoted := make([]string, 0, len(keys))
  for _, key := range keys {
    quoted = append(quoted, strconv.Quote(key))
  }
  return func(input string) string {
    if len(quoted) == 0 {
      return "false"
    }
    checks := make([]string, 0, len(quoted))
    for _, key := range quoted {
      checks = append(checks, input+" === "+key)
    }
    return "(" + strings.Join(checks, " || ") + ")"
  }
}

func miscEqualProgrammer_typedArray(name string) bool {
  switch name {
  case "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "BigUint64Array",
    "Int8Array", "Int16Array", "Int32Array", "BigInt64Array", "Float32Array", "Float64Array":
    return true
  default:
    return false
  }
}

func miscEqualProgrammer_identifier(str string) bool {
  if str == "" || miscEqualProgrammer_reserved[str] {
    return false
  }
  for i := 0; i < len(str); i++ {
    c := str[i]
    if i == 0 {
      if !(('a' <= c && c <= 'z') || ('A' <= c && c <= 'Z') || c == '_' || c == '$') {
        return false
      }
    } else if !(('a' <= c && c <= 'z') || ('A' <= c && c <= 'Z') || ('0' <= c && c <= '9') || c == '_' || c == '$') {
      return false
    }
  }
  return true
}

func miscEqualProgrammer_simple(str string) bool {
  if miscEqualProgrammer_identifier(str) {
    return true
  }
  for i := 0; i < len(str); i++ {
    c := str[i]
    if !(('a' <= c && c <= 'z') || ('A' <= c && c <= 'Z') || ('0' <= c && c <= '9') || c == '_' || c == '$' || c == '.') {
      return false
    }
  }
  return str != ""
}

var miscEqualProgrammer_reserved = map[string]bool{
  "break":      true,
  "case":       true,
  "catch":      true,
  "class":      true,
  "const":      true,
  "continue":   true,
  "debugger":   true,
  "default":    true,
  "delete":     true,
  "do":         true,
  "else":       true,
  "enum":       true,
  "export":     true,
  "extends":    true,
  "false":      true,
  "finally":    true,
  "for":        true,
  "function":   true,
  "if":         true,
  "import":     true,
  "in":         true,
  "instanceof": true,
  "module":     true,
  "new":        true,
  "null":       true,
  "package":    true,
  "private":    true,
  "protected":  true,
  "return":     true,
  "super":      true,
  "switch":     true,
  "this":       true,
  "throw":      true,
  "true":       true,
  "try":        true,
  "typeof":     true,
  "var":        true,
  "void":       true,
  "while":      true,
  "with":       true,
}
