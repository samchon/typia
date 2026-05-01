package factories

import (
	"math/big"
	"reflect"
	"sort"
	"strings"
)

import shimast "github.com/microsoft/typescript-go/shim/ast"

type literalFactoryNamespace struct{}

var LiteralFactory = literalFactoryNamespace{}

var literalFactory_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (literalFactoryNamespace) Write(input any) *shimast.Node {
	if input == nil {
		return literalFactory_factory.NewKeywordExpression(shimast.KindNullKeyword)
	}
	if node, ok := input.(*shimast.Node); ok {
		if node.Kind == shimast.KindArrowFunction || node.Kind == shimast.KindCallExpression || node.Kind == shimast.KindIdentifier {
			return node
		}
	}
	if array, ok := input.([]any); ok {
		return literalFactory_writeArray(array)
	}
	if object, ok := input.(map[string]any); ok {
		return literalFactory_writeObject(object)
	}
	switch value := input.(type) {
	case bool:
		return literalFactory_writeBoolean(value)
	case *big.Int:
		return literalFactory_writeBigint(value)
	case int:
		return literalFactory_writeNumber(value)
	case int64:
		return literalFactory_writeNumber(value)
	case float64:
		return literalFactory_writeNumber(value)
	case string:
		return literalFactory_writeString(value)
	}
	reflected := reflect.ValueOf(input)
	switch reflected.Kind() {
	case reflect.Bool:
		return literalFactory_writeBoolean(reflected.Bool())
	case reflect.Int, reflect.Int8, reflect.Int16, reflect.Int32, reflect.Int64:
		return literalFactory_writeNumber(reflected.Int())
	case reflect.Uint, reflect.Uint8, reflect.Uint16, reflect.Uint32, reflect.Uint64, reflect.Uintptr:
		return literalFactory_writeNumber(reflected.Uint())
	case reflect.Float32, reflect.Float64:
		return literalFactory_writeNumber(reflected.Float())
	case reflect.Pointer:
		if reflected.IsNil() {
			return literalFactory_factory.NewKeywordExpression(shimast.KindNullKeyword)
		}
		return LiteralFactory.Write(reflected.Elem().Interface())
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
		return literalFactory_writeObject(object)
	case reflect.Slice, reflect.Array:
		array := make([]any, 0, reflected.Len())
		for i := 0; i < reflected.Len(); i++ {
			array = append(array, reflected.Index(i).Interface())
		}
		return literalFactory_writeArray(array)
	case reflect.Map:
		if reflected.Type().Key().Kind() == reflect.String {
			object := map[string]any{}
			for _, key := range reflected.MapKeys() {
				object[key.String()] = reflected.MapIndex(key).Interface()
			}
			return literalFactory_writeObject(object)
		}
	case reflect.Func:
		return literalFactory_factory.NewIdentifier("undefined")
	}
	panic("Error on LiteralFactory.generate(): unknown type.")
}

func literalFactory_fieldName(name string) string {
	if name == "" {
		return name
	}
	return strings.ToLower(name[:1]) + name[1:]
}

func literalFactory_writeObject(obj map[string]any) *shimast.Node {
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
		properties = append(properties, literalFactory_factory.NewPropertyAssignment(
			nil,
			IdentifierFactory.Identifier(key),
			nil,
			nil,
			LiteralFactory.Write(obj[key]),
		))
	}
	return literalFactory_factory.NewObjectLiteralExpression(
		literalFactory_factory.NewNodeList(properties),
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

func literalFactory_writeArray(array []any) *shimast.Node {
	elements := make([]*shimast.Node, 0, len(array))
	for _, elem := range array {
		elements = append(elements, LiteralFactory.Write(elem))
	}
	return literalFactory_factory.NewArrayLiteralExpression(
		literalFactory_factory.NewNodeList(elements),
		true,
	)
}

func literalFactory_writeBoolean(value bool) *shimast.Node {
	if value {
		return literalFactory_factory.NewKeywordExpression(shimast.KindTrueKeyword)
	}
	return literalFactory_factory.NewKeywordExpression(shimast.KindFalseKeyword)
}

func literalFactory_writeNumber(value any) *shimast.Node {
	return ExpressionFactory.Number(value)
}

func literalFactory_writeBigint(value any) *shimast.Node {
	return ExpressionFactory.Bigint(value)
}

func literalFactory_writeString(value string) *shimast.Node {
	return literalFactory_factory.NewStringLiteral(value, shimast.TokenFlagsNone)
}
