package factories

import (
	"encoding/json"
	"fmt"
	"strconv"
	"strings"
)

type NodeField struct {
	Key   string
	Value any
}

type ASTNode struct {
	Kind     string
	Text     string
	Value    any
	Children []ASTNode
	Fields   map[string]any
}

type Expression = ASTNode
type Statement = ASTNode
type TypeNode = ASTNode

func Field(key string, value any) NodeField {
	return NodeField{Key: key, Value: value}
}

func Node(kind string, fields ...NodeField) ASTNode {
	node := ASTNode{Kind: kind, Fields: map[string]any{}}
	for _, field := range fields {
		node.Fields[field.Key] = field.Value
	}
	if text, ok := node.Fields["text"].(string); ok {
		node.Text = text
	}
	if value, ok := node.Fields["value"]; ok {
		node.Value = value
	}
	return node
}

func Identifier(text string) Expression {
	return Node("identifier", Field("text", text))
}

func StringLiteral(text string) Expression {
	return Node("stringLiteral", Field("text", text), Field("value", text))
}

func Null() Expression {
	return Node("null")
}

func True() Expression {
	return Node("true", Field("value", true))
}

func False() Expression {
	return Node("false", Field("value", false))
}

func (node ASTNode) String() string {
	if node.Text != "" {
		return node.Text
	}
	raw, err := json.Marshal(node)
	if err != nil {
		return node.Kind
	}
	return string(raw)
}

func asExpression(value any) Expression {
	if exp, ok := value.(Expression); ok {
		return exp
	}
	return Expression{}
}

func reduceExpression(kind string, conditions []Expression) Expression {
	if len(conditions) == 0 {
		return Expression{}
	}
	out := conditions[0]
	for _, next := range conditions[1:] {
		out = Node(kind, Field("left", out), Field("right", next))
	}
	return out
}

type SymbolDisplayPart struct {
	Text string
}

type JSDocTag struct {
	Name      string
	Text      string
	Parameter string
}

type CommentSymbol interface {
	Declarations() []any
	Documentation() []SymbolDisplayPart
	JSDocTags() []JSDocTag
}

type ObjectProperty struct {
	Key   Expression
	Value Expression
}

type IsObjectProps struct {
	CheckNull  bool
	CheckArray bool
	Input      Expression
}

type CurryingProps struct {
	Function  Expression
	Arguments []Expression
}

type TranspileProps struct {
	Transformer any
	Importer    any
	Script      string
}

type ParameterDeclaration struct {
	Name any
	Type TypeNode
	Init Expression
}

type VariableStatementProps struct {
	Name        string
	Type        TypeNode
	Initializer Expression
}

type EntryProps struct {
	Key   string
	Value string
}

type TemplateSpan struct {
	Expression Expression
	Literal    string
	Tail       bool
}

type templateIterator struct {
	Value string
	Index int
}

type TypeChecker interface {
	TypeToString(TypeLike) string
	ReturnTypeOf(SymbolLike) TypeLike
}

type TypeLike interface {
	String() string
	Flags() TypeFlags
	Symbol() SymbolLike
	AliasSymbol() SymbolLike
	Types() []TypeLike
	TypeArguments() []TypeLike
	Property(string) SymbolLike
	Function() FunctionLike
	IsUnionOrIntersection() bool
	IsIntersection() bool
}

type SymbolLike interface {
	Name() string
}

type FunctionLike interface{}

type TypeFlags uint64

const (
	TypeFlagAny TypeFlags = 1 << iota
	TypeFlagUnknown
	TypeFlagNull
	TypeFlagUndefined
	TypeFlagNever
	TypeFlagVoid
	TypeFlagBoolean
	TypeFlagNumber
	TypeFlagBigint
	TypeFlagString
	TypeFlagBooleanLiteral
	TypeFlagNumberLiteral
	TypeFlagBigintLiteral
	TypeFlagStringLiteral
	TypeFlagTemplateLiteral
	TypeFlagObject
)

type ReturnTypeOfClassMethodProps struct {
	Checker  TypeChecker
	Class    TypeLike
	Function string
}

type FullNameProps struct {
	Checker            TypeChecker
	Type               TypeLike
	Symbol             SymbolLike
	AliasTypeArguments *bool
}

type MetadataExplore struct {
	Top       bool
	Object    any
	Property  any
	Parameter any
	Nested    any
	Aliased   bool
	Escaped   bool
	Output    bool
}

func InitialExplore() MetadataExplore {
	return MetadataExplore{Top: true}
}

type MetadataTypeTag struct {
	Name      string
	Target    string
	Kind      string
	Value     any
	Validate  string
	Exclusive bool
	Schema    map[string]any
}

type MetadataAtomic struct {
	Type string
	Tags [][]MetadataTypeTag
}

type MetadataConstantValue struct {
	Value       any
	Tags        [][]MetadataTypeTag
	Description *string
	JSDocTags   []JSDocTag
}

type MetadataConstant struct {
	Type   string
	Values []MetadataConstantValue
}

type MetadataArray struct {
	Type MetadataArrayType
	Tags [][]MetadataTypeTag
}

type MetadataArrayType struct {
	Name      string
	Value     *MetadataSchema
	Nullables []bool
	Recursive *bool
}

type MetadataTuple struct {
	Type MetadataTupleType
	Tags [][]MetadataTypeTag
}

type MetadataTupleType struct {
	Name      string
	Elements  []*MetadataSchema
	Nullables []bool
	Recursive bool
}

type MetadataObject struct {
	Type MetadataObjectType
	Tags [][]MetadataTypeTag
}

type MetadataObjectType struct {
	Name       string
	Properties []MetadataProperty
	Nullables  []bool
	Recursive  *bool
	Tagged     bool
}

type MetadataProperty struct {
	Key         *MetadataSchema
	Value       *MetadataSchema
	Description *string
	JSDocTags   []JSDocTag
	Mutability  *string
}

type MetadataAlias struct {
	Type MetadataAliasType
	Tags [][]MetadataTypeTag
}

type MetadataAliasType struct {
	Name      string
	Value     *MetadataSchema
	Nullables []bool
}

type MetadataEscaped struct {
	Original *MetadataSchema
	Returns  *MetadataSchema
}

type MetadataFunction struct {
	Parameters []MetadataParameter
	Output     *MetadataSchema
	Async      bool
}

type MetadataParameter struct {
	Name        string
	Type        *MetadataSchema
	TSType      TypeLike
	Description *string
	JSDocTags   []JSDocTag
}

type MetadataTemplate struct {
	Row  []*MetadataSchema
	Tags [][]MetadataTypeTag
}

type MetadataMap struct {
	Key   *MetadataSchema
	Value *MetadataSchema
	Tags  [][]MetadataTypeTag
}

type MetadataSet struct {
	Value *MetadataSchema
	Tags  [][]MetadataTypeTag
}

type MetadataNative struct {
	Name string
	Tags [][]MetadataTypeTag
}

type MetadataSchema struct {
	Any         bool
	Required    bool
	Optional    bool
	Nullable    bool
	Escaped     *MetadataEscaped
	Atomics     []MetadataAtomic
	Constants   []MetadataConstant
	Templates   []MetadataTemplate
	Rest        *MetadataSchema
	Aliases     []MetadataAlias
	Arrays      []MetadataArray
	Tuples      []MetadataTuple
	Objects     []MetadataObject
	Functions   []MetadataFunction
	Natives     []MetadataNative
	Sets        []MetadataSet
	Maps        []MetadataMap
	UnionIndex  *int
	SoleLiteral any
}

func NewMetadataSchema(escaped ...bool) *MetadataSchema {
	return &MetadataSchema{Required: true, Optional: false}
}

func (schema *MetadataSchema) Size() int {
	if schema == nil {
		return 0
	}
	count := 0
	if schema.Any {
		count++
	}
	count += len(schema.Atomics) + len(schema.Constants) + len(schema.Templates) + len(schema.Aliases)
	count += len(schema.Arrays) + len(schema.Tuples) + len(schema.Objects) + len(schema.Functions)
	count += len(schema.Natives) + len(schema.Sets) + len(schema.Maps)
	if schema.Escaped != nil {
		count++
	}
	if schema.Rest != nil {
		count++
	}
	return count
}

func (schema *MetadataSchema) IsRequired() bool {
	return schema != nil && schema.Required
}

func (schema *MetadataSchema) IsSoleLiteral() bool {
	return schema != nil && schema.SoleLiteral != nil
}

func (schema *MetadataSchema) GetSoleLiteral() any {
	if schema == nil {
		return nil
	}
	return schema.SoleLiteral
}

func (schema *MetadataSchema) GetName() string {
	if schema == nil {
		return "unknown"
	}
	if schema.SoleLiteral != nil {
		return fmt.Sprintf("%v", schema.SoleLiteral)
	}
	parts := make([]string, 0)
	for _, atomic := range schema.Atomics {
		parts = append(parts, atomic.Type)
	}
	for _, constant := range schema.Constants {
		for _, value := range constant.Values {
			parts = append(parts, fmt.Sprintf("%v", value.Value))
		}
	}
	for _, object := range schema.Objects {
		parts = append(parts, object.Type.Name)
	}
	if len(parts) == 0 {
		return "unknown"
	}
	return strings.Join(parts, " | ")
}

func (schema *MetadataSchema) FindAtomic(kind string) *MetadataAtomic {
	for i := range schema.Atomics {
		if schema.Atomics[i].Type == kind {
			return &schema.Atomics[i]
		}
	}
	return nil
}

func (schema *MetadataSchema) TagMatrix() [][]MetadataTypeTag {
	matrix := make([][]MetadataTypeTag, 0)
	for _, atomic := range schema.Atomics {
		matrix = append(matrix, atomic.Tags...)
	}
	for _, constant := range schema.Constants {
		for _, value := range constant.Values {
			matrix = append(matrix, value.Tags...)
		}
	}
	for _, template := range schema.Templates {
		matrix = append(matrix, template.Tags...)
	}
	for _, object := range schema.Objects {
		matrix = append(matrix, object.Tags...)
	}
	for _, array := range schema.Arrays {
		matrix = append(matrix, array.Tags...)
	}
	for _, native := range schema.Natives {
		matrix = append(matrix, native.Tags...)
	}
	return matrix
}

type MetadataCollection struct {
	ArrayTypes  []MetadataArrayType
	TupleTypes  []MetadataTupleType
	ObjectTypes []MetadataObjectType
	AliasTypes  []MetadataAliasType
}

func NewMetadataCollection() *MetadataCollection {
	return &MetadataCollection{}
}

func (collection *MetadataCollection) Clone() *MetadataCollection {
	if collection == nil {
		return NewMetadataCollection()
	}
	out := *collection
	return &out
}

type MetadataFactoryOptions struct {
	Absorb     *bool
	Escape     *bool
	Constant   *bool
	Functional *bool
	Validate   MetadataValidator
}

type MetadataValidator func(MetadataValidateProps) []string

type MetadataAnalyzeProps struct {
	Checker     TypeChecker
	Transformer any
	Options     MetadataFactoryOptions
	Components  *MetadataCollection
	Type        TypeLike
}

type MetadataValidateProps struct {
	Metadata *MetadataSchema
	Explore  MetadataExplore
}

type MetadataError struct {
	Name     string
	Explore  MetadataExplore
	Messages []string
}

type MetadataErrors []MetadataError

func (errors *MetadataErrors) Add(err MetadataError) {
	*errors = append(*errors, err)
}

type ValidationPipe struct {
	Success bool
	Data    *MetadataSchema
	Errors  MetadataErrors
}

type JsonMetadataAnalyzeProps struct {
	Method      string
	Checker     TypeChecker
	Transformer any
	Type        TypeLike
	Validate    MetadataValidator
}

type JsonMetadataOutput struct {
	Collection *MetadataCollection
	Metadata   *MetadataSchema
}

type TransformerError struct {
	Code   string
	Errors MetadataErrors
}

func (err TransformerError) Error() string {
	messages := make([]string, 0, len(err.Errors))
	for _, item := range err.Errors {
		messages = append(messages, item.Name+": "+strings.Join(item.Messages, ", "))
	}
	return err.Code + ": " + strings.Join(messages, "; ")
}

func TransformerErrorFrom(code string, errors MetadataErrors) error {
	return TransformerError{Code: code, Errors: errors}
}

type MetadataCommentAnalyzeProps struct {
	Errors   *MetadataErrors
	Metadata *MetadataSchema
	Tags     []JSDocTag
	Explore  MetadataExplore
}

type MetadataCommentGetProps struct {
	Kind  string
	Type  string
	Value string
}

type ValidateReportProps struct {
	Property *string
	Message  string
}

type MetadataTypeTagAnalyzeProps struct {
	Errors  *MetadataErrors
	Type    string
	Objects []MetadataObjectType
	Explore MetadataExplore
}

type MetadataTypeTagValidateProps struct {
	Report func(ValidateReportProps) bool
	Type   string
	Tags   []MetadataTypeTag
}

type ProtobufAnalyzeProps struct {
	Method   string
	Checker  TypeChecker
	Type     TypeLike
	Validate MetadataValidator
}

type ProtobufSchema struct {
	Messages []ProtobufMessage
}

type ProtobufMessage struct {
	Name       string
	Properties []ProtobufProperty
}

type ProtobufProperty struct {
	Name     string
	Sequence int
	Type     ProtobufPropertyType
	Required bool
}

type ProtobufPropertyType struct {
	Name    string
	Key     *ProtobufPropertyType
	Element *ProtobufPropertyType
}

func ptrProtobufType(value ProtobufPropertyType) *ProtobufPropertyType {
	return &value
}

func normalizeNewline(str string) string {
	return strings.ReplaceAll(str, "\r\n", "\n")
}

func boolPtr(value bool) *bool {
	return &value
}

func toString(value any) string {
	return fmt.Sprint(value)
}

func contains(values []string, target string) bool {
	for _, value := range values {
		if value == target {
			return true
		}
	}
	return false
}

func upperFirst(value string) string {
	if value == "" {
		return value
	}
	return strings.ToUpper(value[:1]) + value[1:]
}

func parseInteger(value string, unsigned bool, report func(string)) int {
	parsed, err := strconv.Atoi(strings.TrimSpace(value))
	if err != nil || (unsigned && parsed < 0) {
		report("requires integer value")
		return 0
	}
	return parsed
}

func parseFloat(value string, report func(string)) float64 {
	parsed, err := strconv.ParseFloat(strings.TrimSpace(value), 64)
	if err != nil {
		report("requires numeric value")
		return 0
	}
	return parsed
}

func numericRangeTags(kind, value string, report func(string)) map[string][]MetadataTypeTag {
	parsed := parseFloat(value, report)
	validate := ""
	switch kind {
	case "minimum":
		validate = fmt.Sprintf("%s <= $input", value)
	case "exclusiveMinimum":
		validate = fmt.Sprintf("%s < $input", value)
	case "maximum":
		validate = fmt.Sprintf("$input <= %s", value)
	case "exclusiveMaximum":
		validate = fmt.Sprintf("$input < %s", value)
	case "multipleOf":
		validate = fmt.Sprintf("$input %% %s === 0", value)
	}
	tag := MetadataTypeTag{Name: upperFirst(kind) + "<" + value + ">", Target: "number", Kind: kind, Value: parsed, Validate: validate, Exclusive: true, Schema: map[string]any{kind: parsed}}
	return map[string][]MetadataTypeTag{"number": {tag}, "bigint": {tag}}
}

func stringLengthTags(kind, value string, report func(string)) map[string][]MetadataTypeTag {
	parsed := parseInteger(value, true, report)
	validate := fmt.Sprintf("%s <= $input.length", value)
	if kind == "maxLength" {
		validate = fmt.Sprintf("$input.length <= %s", value)
	}
	return map[string][]MetadataTypeTag{"string": {{Name: upperFirst(kind) + "<" + value + ">", Target: "string", Kind: kind, Value: parsed, Validate: validate, Exclusive: true, Schema: map[string]any{kind: parsed}}}}
}

func numberTypeValidate(value string) string {
	switch value {
	case "int32":
		return "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647"
	case "uint32":
		return "Math.floor($input) === $input && 0 <= $input && $input <= 4294967295"
	case "int64":
		return "Math.floor($input) === $input && -9223372036854775808 <= $input && $input <= 9223372036854775807"
	case "uint64":
		return "Math.floor($input) === $input && 0 <= $input && $input <= 18446744073709551615"
	case "float":
		return "Math.fround($input) === $input"
	default:
		return "Number.isFinite($input)"
	}
}

func bigintTypeValidate(value string) string {
	if value == "uint64" {
		return "BigInt(0) <= $input && $input <= BigInt('18446744073709551615')"
	}
	return "BigInt('-9223372036854775808') <= $input && $input <= BigInt('9223372036854775807')"
}

func mergeTagMatrix(matrix [][]MetadataTypeTag, filtered []MetadataTypeTag, typ string, report func(ValidateReportProps) bool) [][]MetadataTypeTag {
	if len(filtered) == 0 {
		return matrix
	}
	output := make([][]MetadataTypeTag, 0, len(matrix))
	for _, row := range matrix {
		candidate := append(append([]MetadataTypeTag{}, row...), filtered...)
		if MetadataTypeTagFactory.Validate(MetadataTypeTagValidateProps{Report: report, Type: typ, Tags: candidate}) {
			output = append(output, candidate)
		}
	}
	if len(output) == 0 {
		output = append(output, append([]MetadataTypeTag{}, filtered...))
	}
	return output
}

func toFloat(value any) (float64, bool) {
	switch v := value.(type) {
	case int:
		return float64(v), true
	case int64:
		return float64(v), true
	case float64:
		return v, true
	case float32:
		return float64(v), true
	default:
		return 0, false
	}
}

func atomicNative(name string) bool {
	return name == "Boolean" || name == "Number" || name == "String"
}

func getSequenceFromMatrix(matrix [][]MetadataTypeTag) *int {
	for _, row := range matrix {
		for _, tag := range row {
			if tag.Kind == "sequence" || tag.Kind == "Sequence" {
				if value, ok := tag.Value.(int); ok {
					return &value
				}
			}
		}
	}
	return nil
}

func ExploreMetadata(props ExploreMetadataProps) *MetadataSchema {
	metadata := NewMetadataSchema(props.Explore.Escaped)
	if props.Type == nil {
		return metadata
	}
	if props.Type.Flags()&TypeFlagAny != 0 || props.Type.Flags()&TypeFlagUnknown != 0 {
		metadata.Any = true
	}
	if props.Type.Flags()&TypeFlagNull != 0 {
		metadata.Nullable = true
	}
	if props.Type.Flags()&(TypeFlagUndefined|TypeFlagNever|TypeFlagVoid) != 0 {
		metadata.Required = false
	}
	if props.Type.Flags()&TypeFlagBoolean != 0 {
		metadata.Atomics = append(metadata.Atomics, MetadataAtomic{Type: "boolean"})
	}
	if props.Type.Flags()&TypeFlagNumber != 0 {
		metadata.Atomics = append(metadata.Atomics, MetadataAtomic{Type: "number"})
	}
	if props.Type.Flags()&TypeFlagBigint != 0 {
		metadata.Atomics = append(metadata.Atomics, MetadataAtomic{Type: "bigint"})
	}
	if props.Type.Flags()&TypeFlagString != 0 {
		metadata.Atomics = append(metadata.Atomics, MetadataAtomic{Type: "string"})
	}
	if metadata.Size() == 0 {
		metadata.Objects = append(metadata.Objects, MetadataObject{Type: MetadataObjectType{Name: props.Type.String()}})
	}
	return metadata
}

type ExploreMetadataProps struct {
	Options    MetadataFactoryOptions
	Checker    TypeChecker
	Components *MetadataCollection
	Errors     *MetadataErrors
	Type       TypeLike
	Explore    MetadataExplore
}
