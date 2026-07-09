package factories

import (
  "bytes"
  "encoding/json"
  "math/big"
  "reflect"
  "sort"
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
)

type literalFactoryNamespace struct{}

var LiteralFactory = literalFactoryNamespace{}

// LiteralFactory_OrderedObject is an object literal whose property order is
// fixed by Keys rather than inferred from a Go map's (unordered) iteration or
// from propertyRank sorting. Use it for objects whose insertion order is
// semantically meaningful, such as `components.schemas` (schema-name keyed),
// which the legacy TS implementation emitted in discovery order. Keys not
// present in Values, and values that are nil-like, are skipped.
type LiteralFactory_OrderedObject struct {
  Keys   []string
  Values map[string]any
}

// MarshalJSON keeps encoding/json consumers aligned with the printer: the
// ordered object serializes as the plain JSON object it represents (in Keys
// order, skipping absent and nil-like entries), never as its raw struct
// fields. Downstream tools marshal schema metadata containing these objects
// (e.g. nestia's SDK transform), and the raw {Keys, Values} shape corrupted
// their output.
func (obj LiteralFactory_OrderedObject) MarshalJSON() ([]byte, error) {
  buffer := bytes.Buffer{}
  buffer.WriteByte('{')
  first := true
  for _, key := range obj.Keys {
    value, ok := obj.Values[key]
    if ok == false || literalFactory_isNilLike(value) {
      continue
    }
    encodedKey, err := json.Marshal(key)
    if err != nil {
      return nil, err
    }
    encodedValue, err := json.Marshal(value)
    if err != nil {
      return nil, err
    }
    if first == false {
      buffer.WriteByte(',')
    }
    first = false
    buffer.Write(encodedKey)
    buffer.WriteByte(':')
    buffer.Write(encodedValue)
  }
  buffer.WriteByte('}')
  return buffer.Bytes(), nil
}

var literalFactory_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (literalFactoryNamespace) Write(input any, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(literalFactory_factory, emit...)
  if input == nil {
    return f.NewKeywordExpression(shimast.KindNullKeyword)
  }
  if node, ok := input.(*shimast.Node); ok {
    if node.Kind == shimast.KindArrowFunction || node.Kind == shimast.KindCallExpression || node.Kind == shimast.KindIdentifier {
      return node
    }
  }
  if ordered, ok := input.(LiteralFactory_OrderedObject); ok {
    return literalFactory_writeOrderedObject(ordered, emit...)
  }
  if ordered, ok := input.(*LiteralFactory_OrderedObject); ok {
    if ordered == nil {
      return f.NewKeywordExpression(shimast.KindNullKeyword)
    }
    return literalFactory_writeOrderedObject(*ordered, emit...)
  }
  if array, ok := input.([]any); ok {
    return literalFactory_writeArray(array, emit...)
  }
  if object, ok := input.(map[string]any); ok {
    return literalFactory_writeObject(object, emit...)
  }
  switch value := input.(type) {
  case bool:
    return literalFactory_writeBoolean(value, emit...)
  case *big.Int:
    return literalFactory_writeBigint(value, emit...)
  case int:
    return literalFactory_writeNumber(value, emit...)
  case int64:
    return literalFactory_writeNumber(value, emit...)
  case float64:
    return literalFactory_writeNumber(value, emit...)
  case string:
    return literalFactory_writeString(value, emit...)
  }
  reflected := reflect.ValueOf(input)
  switch reflected.Kind() {
  case reflect.Bool:
    return literalFactory_writeBoolean(reflected.Bool(), emit...)
  case reflect.Int, reflect.Int8, reflect.Int16, reflect.Int32, reflect.Int64:
    return literalFactory_writeNumber(reflected.Int(), emit...)
  case reflect.Uint, reflect.Uint8, reflect.Uint16, reflect.Uint32, reflect.Uint64, reflect.Uintptr:
    return literalFactory_writeNumber(reflected.Uint(), emit...)
  case reflect.Float32, reflect.Float64:
    return literalFactory_writeNumber(reflected.Float(), emit...)
  case reflect.Pointer:
    if reflected.IsNil() {
      return f.NewKeywordExpression(shimast.KindNullKeyword)
    }
    return LiteralFactory.Write(reflected.Elem().Interface(), emit...)
  case reflect.Struct:
    object := map[string]any{}
    typ := reflected.Type()
    for i := 0; i < reflected.NumField(); i++ {
      field := typ.Field(i)
      if field.PkgPath != "" || reflected.Field(i).CanInterface() == false {
        continue
      }
      object[literalFactory_fieldName(field.Name)] = reflected.Field(i).Interface()
    }
    return literalFactory_writeObject(object, emit...)
  case reflect.Slice, reflect.Array:
    array := make([]any, 0, reflected.Len())
    for i := 0; i < reflected.Len(); i++ {
      array = append(array, reflected.Index(i).Interface())
    }
    return literalFactory_writeArray(array, emit...)
  case reflect.Map:
    if reflected.Type().Key().Kind() == reflect.String {
      object := map[string]any{}
      for _, key := range reflected.MapKeys() {
        object[key.String()] = reflected.MapIndex(key).Interface()
      }
      return literalFactory_writeObject(object, emit...)
    }
  case reflect.Func:
    return f.NewIdentifier("undefined")
  }
  panic("Error on LiteralFactory.generate(): unknown type.")
}

func literalFactory_fieldName(name string) string {
  if name == "" {
    return name
  }
  return strings.ToLower(name[:1]) + name[1:]
}

func literalFactory_writeObject(obj map[string]any, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(literalFactory_factory, emit...)
  keys := make([]string, 0, len(obj))
  for key, value := range obj {
    if literalFactory_isNilLike(value) {
      continue
    }
    keys = append(keys, key)
  }
  sort.SliceStable(keys, func(i, j int) bool {
    left, right := literalFactory_propertyRank(keys[i]), literalFactory_propertyRank(keys[j])
    if left != right {
      return left < right
    }
    return keys[i] < keys[j]
  })
  properties := make([]*shimast.Node, 0, len(keys))
  for _, key := range keys {
    properties = append(properties, f.NewPropertyAssignment(
      nil,
      IdentifierFactory.Identifier(key, emit...),
      nil,
      nil,
      LiteralFactory.Write(obj[key], emit...),
    ))
  }
  return f.NewObjectLiteralExpression(
    f.NewNodeList(properties),
    true,
  )
}

func literalFactory_writeOrderedObject(obj LiteralFactory_OrderedObject, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(literalFactory_factory, emit...)
  properties := make([]*shimast.Node, 0, len(obj.Keys))
  for _, key := range obj.Keys {
    value, ok := obj.Values[key]
    if ok == false || literalFactory_isNilLike(value) {
      continue
    }
    properties = append(properties, f.NewPropertyAssignment(
      nil,
      IdentifierFactory.Identifier(key, emit...),
      nil,
      nil,
      LiteralFactory.Write(value, emit...),
    ))
  }
  return f.NewObjectLiteralExpression(
    f.NewNodeList(properties),
    true,
  )
}

func literalFactory_propertyRank(key string) int {
  switch key {
  case "$ref":
    return 0
  case "type":
    return 10
  case "nullable":
    return 11
  case "const":
    return 12
  case "enum":
    return 13
  case "minimum":
    return 20
  case "exclusiveMinimum":
    return 21
  case "maximum":
    return 22
  case "exclusiveMaximum":
    return 23
  case "multipleOf":
    return 24
  case "minLength":
    return 30
  case "maxLength":
    return 31
  case "pattern":
    return 32
  case "format":
    return 33
  case "minItems":
    return 40
  case "maxItems":
    return 41
  case "uniqueItems":
    return 42
  case "items":
    return 43
  case "prefixItems":
    return 44
  case "properties":
    return 50
  case "required":
    return 51
  case "additionalProperties":
    return 52
  case "oneOf":
    return 60
  case "anyOf":
    return 61
  case "allOf":
    return 62
  case "title":
    return 90
  case "description":
    return 91
  case "default":
    return 92
  }
  return 1_000
}

func literalFactory_isNilLike(value any) bool {
  if value == nil {
    return true
  }
  reflected := reflect.ValueOf(value)
  switch reflected.Kind() {
  case reflect.Chan, reflect.Func, reflect.Interface, reflect.Map, reflect.Pointer, reflect.Slice:
    return reflected.IsNil()
  default:
    return false
  }
}

func literalFactory_writeArray(array []any, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(literalFactory_factory, emit...)
  elements := make([]*shimast.Node, 0, len(array))
  for _, elem := range array {
    elements = append(elements, LiteralFactory.Write(elem, emit...))
  }
  return f.NewArrayLiteralExpression(
    f.NewNodeList(elements),
    true,
  )
}

func literalFactory_writeBoolean(value bool, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(literalFactory_factory, emit...)
  if value {
    return f.NewKeywordExpression(shimast.KindTrueKeyword)
  }
  return f.NewKeywordExpression(shimast.KindFalseKeyword)
}

func literalFactory_writeNumber(value any, emit ...*shimprinter.EmitContext) *shimast.Node {
  return ExpressionFactory.Number(value, emit...)
}

func literalFactory_writeBigint(value any, emit ...*shimprinter.EmitContext) *shimast.Node {
  return ExpressionFactory.Bigint(value, emit...)
}

func literalFactory_writeString(value string, emit ...*shimprinter.EmitContext) *shimast.Node {
  return nativecontext.EmitFactoryOf(literalFactory_factory, emit...).NewStringLiteral(value, shimast.TokenFlagsNone)
}
