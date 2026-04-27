package helpers

import (
	"encoding/json"
	"fmt"
	"regexp"
	"sort"
	"strconv"
	"strings"
)

type Expression string
type Statement string
type ConciseBody string
type Metadata map[string]any
type Schema map[string]any
type TypeTag map[string]any

type ICheckEntry struct {
	Expected   string
	Expression *Expression
	Conditions [][]ICheckEntryCondition
}

type ICheckEntryCondition struct {
	Expected   string
	Expression Expression
}

func Expr(value string) Expression { return Expression(value) }

func Str(value string) Expression { return Expression(QuoteString(value)) }

func StatementOf(value string) Statement { return Statement(value) }

func QuoteString(value string) string {
	data, _ := json.Marshal(value)
	return string(data)
}

func IdentifierName(value string) bool {
	return regexp.MustCompile(`^[A-Za-z_$][A-Za-z0-9_$]*$`).MatchString(value)
}

func Access(input Expression, key string) Expression {
	if IdentifierName(key) {
		return Expr(string(input) + "." + key)
	}
	return Expr(string(input) + "[" + QuoteString(key) + "]")
}

func Call(callee Expression, args ...Expression) Expression {
	parts := make([]string, len(args))
	for i, arg := range args {
		parts[i] = string(arg)
	}
	return Expr(string(callee) + "(" + strings.Join(parts, ", ") + ")")
}

func LogicalAnd(expressions ...Expression) Expression {
	return joinExpressions(" && ", expressions...)
}

func LogicalOr(expressions ...Expression) Expression {
	return joinExpressions(" || ", expressions...)
}

func StrictEqual(left Expression, right Expression) Expression {
	return Expr(string(left) + " === " + string(right))
}

func StrictNotEqual(left Expression, right Expression) Expression {
	return Expr(string(left) + " !== " + string(right))
}

func TypeOf(input Expression) Expression {
	return Expr("typeof " + string(input))
}

func Template(expressions []Expression) Expression {
	if len(expressions) == 0 {
		return Str("")
	}
	parts := make([]string, len(expressions))
	for i, expression := range expressions {
		parts[i] = string(expression)
	}
	return Expr(strings.Join(parts, " + "))
}

func ArrayLiteral(expressions []Expression) Expression {
	parts := make([]string, len(expressions))
	for i, expression := range expressions {
		parts[i] = string(expression)
	}
	return Expr("[" + strings.Join(parts, ", ") + "]")
}

func ObjectLiteral(entries map[string]Expression) Expression {
	if len(entries) == 0 {
		return Expr("{}")
	}
	keys := make([]string, 0, len(entries))
	for key := range entries {
		keys = append(keys, key)
	}
	sort.Strings(keys)
	parts := make([]string, 0, len(keys))
	for _, key := range keys {
		name := key
		if !IdentifierName(key) {
			name = QuoteString(key)
		}
		parts = append(parts, name+": "+string(entries[key]))
	}
	return Expr("{ " + strings.Join(parts, ", ") + " }")
}

func Literal(value any) Expression {
	data, err := json.Marshal(value)
	if err != nil {
		return Str(fmt.Sprint(value))
	}
	return Expr(string(data))
}

func GetString(value any, key string) string {
	if object, ok := value.(map[string]any); ok {
		if str, ok := object[key].(string); ok {
			return str
		}
	}
	if object, ok := value.(Metadata); ok {
		if str, ok := object[key].(string); ok {
			return str
		}
	}
	return ""
}

func GetBool(value any, key string) bool {
	if object, ok := value.(map[string]any); ok {
		if b, ok := object[key].(bool); ok {
			return b
		}
	}
	if object, ok := value.(Metadata); ok {
		if b, ok := object[key].(bool); ok {
			return b
		}
	}
	return false
}

func Has(value any, key string) bool {
	if object, ok := value.(map[string]any); ok {
		_, found := object[key]
		return found
	}
	if object, ok := value.(Metadata); ok {
		_, found := object[key]
		return found
	}
	return false
}

func GetInt(value any, key string) int {
	switch object := value.(type) {
	case map[string]any:
		return AsInt(object[key])
	case Metadata:
		return AsInt(object[key])
	default:
		return 0
	}
}

func GetNumber(value any, key string) float64 {
	switch object := value.(type) {
	case map[string]any:
		return AsNumber(object[key])
	case Metadata:
		return AsNumber(object[key])
	default:
		return 0
	}
}

func AsInt(value any) int {
	switch next := value.(type) {
	case int:
		return next
	case int32:
		return int(next)
	case int64:
		return int(next)
	case float32:
		return int(next)
	case float64:
		return int(next)
	default:
		return 0
	}
}

func AsNumber(value any) float64 {
	switch next := value.(type) {
	case int:
		return float64(next)
	case int32:
		return float64(next)
	case int64:
		return float64(next)
	case float32:
		return float64(next)
	case float64:
		return next
	default:
		return 0
	}
}

func GetSlice(value any, key string) []any {
	if object, ok := value.(map[string]any); ok {
		return AsSlice(object[key])
	}
	if object, ok := value.(Metadata); ok {
		return AsSlice(object[key])
	}
	return nil
}

func GetMap(value any, key string) map[string]any {
	switch object := value.(type) {
	case map[string]any:
		return AsMap(object[key])
	case Metadata:
		return AsMap(object[key])
	default:
		return nil
	}
}

func AsMap(value any) map[string]any {
	switch next := value.(type) {
	case map[string]any:
		return next
	case Metadata:
		return map[string]any(next)
	case Schema:
		return map[string]any(next)
	case TypeTag:
		return map[string]any(next)
	default:
		return nil
	}
}

func AsSlice(value any) []any {
	switch next := value.(type) {
	case []any:
		return next
	case []Metadata:
		out := make([]any, len(next))
		for i, elem := range next {
			out[i] = elem
		}
		return out
	case []Schema:
		out := make([]any, len(next))
		for i, elem := range next {
			out[i] = elem
		}
		return out
	case []TypeTag:
		out := make([]any, len(next))
		for i, elem := range next {
			out[i] = elem
		}
		return out
	default:
		return nil
	}
}

func AsStringSlice(value any) []string {
	array := AsSlice(value)
	if len(array) == 0 {
		return nil
	}
	out := make([]string, 0, len(array))
	for _, elem := range array {
		if str, ok := elem.(string); ok {
			out = append(out, str)
		}
	}
	return out
}

func GetStringSlice(value any, key string) []string {
	switch object := value.(type) {
	case map[string]any:
		return AsStringSlice(object[key])
	case Metadata:
		return AsStringSlice(object[key])
	default:
		return nil
	}
}

func AsMetadata(value any) Metadata {
	switch next := value.(type) {
	case Metadata:
		return next
	case map[string]any:
		return Metadata(next)
	default:
		return Metadata{}
	}
}

func IsRequired(metadata Metadata) bool {
	if value, ok := metadata["required"].(bool); ok {
		return value
	}
	if value, ok := metadata["optional"].(bool); ok {
		return !value
	}
	return true
}

func MetadataSize(metadata Metadata) int {
	total := 0
	for _, key := range []string{"atomics", "constants", "templates", "arrays", "tuples", "natives", "maps", "sets", "objects", "aliases", "functions"} {
		total += len(GetSlice(metadata, key))
	}
	if GetBool(metadata, "any") {
		total++
	}
	return total
}

func GetName(value any) string {
	if str := GetString(value, "name"); str != "" {
		return str
	}
	if str := GetString(value, "type"); str != "" {
		return str
	}
	return fmt.Sprint(value)
}

func SoleLiteral(value any) (string, bool) {
	object := AsMetadata(value)
	if literal, ok := object["soleLiteral"].(string); ok {
		return literal, true
	}
	if literal, ok := object["literal"].(string); ok {
		return literal, true
	}
	if literal, ok := object["value"].(string); ok {
		return literal, true
	}
	return "", false
}

func PatternEscape(value string) string {
	return regexp.QuoteMeta(value)
}

func PatternFix(value string) string {
	if strings.HasPrefix(value, "^") && strings.HasSuffix(value, "$") {
		return value
	}
	return "^" + value + "$"
}

func PatternNumber() string  { return `-?\d+(?:\.\d+)?` }
func PatternBoolean() string { return `(?:true|false)` }
func PatternString() string  { return `(.*)` }

func NumberLiteral(value int) Expression {
	return Expr(strconv.Itoa(value))
}

func MetadataPattern(metadata Metadata, top bool) string {
	alternatives := make([]string, 0)
	if top && !IsRequired(metadata) {
		alternatives = append(alternatives, "undefined")
	}
	for _, constant := range GetSlice(metadata, "constants") {
		for _, value := range GetSlice(constant, "values") {
			if literal, ok := SoleLiteral(value); ok {
				alternatives = append(alternatives, PatternEscape(literal))
			}
		}
	}
	for _, atomic := range GetSlice(metadata, "atomics") {
		switch GetName(atomic) {
		case "number":
			alternatives = append(alternatives, PatternNumber())
		case "boolean":
			alternatives = append(alternatives, PatternBoolean())
		case "string":
			alternatives = append(alternatives, PatternString())
		case "bigint":
			alternatives = append(alternatives, "-?\\d+")
		}
	}
	for _, template := range GetSlice(metadata, "templates") {
		alternatives = append(alternatives, TemplatePattern(template))
	}
	if len(alternatives) == 0 {
		return PatternString()
	}
	if len(alternatives) == 1 {
		return alternatives[0]
	}
	return "(?:" + strings.Join(alternatives, "|") + ")"
}

func TemplatePattern(value any) string {
	metadata := AsMetadata(value)
	if rows := GetSlice(metadata, "row"); len(rows) > 0 {
		parts := make([]string, 0, len(rows))
		for _, elem := range rows {
			parts = append(parts, MetadataPattern(AsMetadata(elem), false))
		}
		return strings.Join(parts, "")
	}
	if rows := GetSlice(metadata, "tags"); len(rows) > 0 {
		parts := make([]string, 0, len(rows))
		for _, elem := range rows {
			parts = append(parts, MetadataPattern(AsMetadata(elem), false))
		}
		return strings.Join(parts, "")
	}
	if str, ok := value.(string); ok {
		return PatternEscape(str)
	}
	return PatternString()
}

func joinExpressions(sep string, expressions ...Expression) Expression {
	if len(expressions) == 0 {
		return Expr("true")
	}
	parts := make([]string, len(expressions))
	for i, expression := range expressions {
		parts[i] = "(" + string(expression) + ")"
	}
	return Expr(strings.Join(parts, sep))
}
