package metadata

import (
	"fmt"
	"strings"
)

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

type TypeChecker interface {
	ReturnTypeOfMethod(TypeLike, string) TypeLike
}

type TypeLike interface {
	fmt.Stringer
	Flags() TypeFlags
	Symbol() SymbolLike
	AliasSymbol() SymbolLike
	Types() []TypeLike
	TypeArguments() []TypeLike
	BaseTypes() []TypeLike
	Properties() []TypeProperty
	Function() FunctionLike
	Literal() (any, bool)
	TemplateParts() []TemplatePart
	IsTypeParameter() bool
	IsUnion() bool
	IsIntersection() bool
	IsArray() bool
	IsTuple() bool
	IsObject() bool
	IsMap() bool
	IsSet() bool
}

type SymbolLike interface {
	Name() string
}

type TypeProperty struct {
	Name        string
	Type        TypeLike
	Optional    bool
	Description *string
	JSDocTags   []JSDocTag
	Mutability  *string
}

type FunctionLike interface {
	Parameters() []FunctionParameter
	ReturnType() TypeLike
	Async() bool
}

type FunctionParameter struct {
	Name        string
	Type        TypeLike
	Description *string
	JSDocTags   []JSDocTag
}

type TemplatePart struct {
	Text string
	Type TypeLike
}

type JSDocTag struct {
	Name string
	Text string
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

func (explore MetadataExplore) WithAliased(value bool) MetadataExplore {
	explore.Aliased = value
	return explore
}

func (explore MetadataExplore) WithEscaped(value bool) MetadataExplore {
	explore.Escaped = value
	return explore
}

func (explore MetadataExplore) WithTop(value bool) MetadataExplore {
	explore.Top = value
	return explore
}

type MetadataFactoryOptions struct {
	Absorb     *bool
	Escape     *bool
	Constant   *bool
	Functional *bool
}

func (options MetadataFactoryOptions) WithAbsorb(value bool) MetadataFactoryOptions {
	options.Absorb = &value
	return options
}

func (options MetadataFactoryOptions) WithFunctional(value bool) MetadataFactoryOptions {
	options.Functional = &value
	return options
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
	Any       bool
	Required  bool
	Optional  bool
	Nullable  bool
	Escaped   *MetadataEscaped
	Atomics   []MetadataAtomic
	Constants []MetadataConstant
	Templates []MetadataTemplate
	Rest      *MetadataSchema
	Aliases   []MetadataAlias
	Arrays    []MetadataArray
	Tuples    []MetadataTuple
	Objects   []MetadataObject
	Functions []MetadataFunction
	Natives   []MetadataNative
	Sets      []MetadataSet
	Maps      []MetadataMap
	Sole      any
}

func NewMetadataSchema(...bool) *MetadataSchema {
	return &MetadataSchema{Required: true}
}

func (schema *MetadataSchema) IsRequired() bool {
	return schema != nil && schema.Required
}

func (schema *MetadataSchema) IsSoleLiteral() bool {
	return schema != nil && schema.Sole != nil
}

func (schema *MetadataSchema) GetSoleLiteral() any {
	if schema == nil {
		return nil
	}
	return schema.Sole
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
	return count
}

func (schema *MetadataSchema) GetName() string {
	if schema == nil {
		return "unknown"
	}
	if schema.Sole != nil {
		return fmt.Sprint(schema.Sole)
	}
	names := make([]string, 0)
	for _, atomic := range schema.Atomics {
		names = append(names, atomic.Type)
	}
	for _, object := range schema.Objects {
		names = append(names, object.Type.Name)
	}
	if len(names) == 0 {
		return "unknown"
	}
	return strings.Join(names, " | ")
}

type MetadataCollection struct {
	ArrayTypes  []MetadataArrayType
	TupleTypes  []MetadataTupleType
	ObjectTypes []MetadataObjectType
	AliasTypes  []MetadataAliasType
}

func (collection *MetadataCollection) EmplaceAlias(typ TypeLike) (MetadataAliasType, bool, func(*MetadataSchema)) {
	name := typeName(typ)
	for _, alias := range collection.AliasTypes {
		if alias.Name == name {
			return alias, false, func(*MetadataSchema) {}
		}
	}
	alias := MetadataAliasType{Name: name}
	collection.AliasTypes = append(collection.AliasTypes, alias)
	index := len(collection.AliasTypes) - 1
	return alias, true, func(value *MetadataSchema) {
		collection.AliasTypes[index].Value = value
	}
}

func (collection *MetadataCollection) EmplaceArray(typ TypeLike) (MetadataArrayType, bool, func(*MetadataSchema)) {
	name := typeName(typ)
	for _, array := range collection.ArrayTypes {
		if array.Name == name {
			return array, false, func(*MetadataSchema) {}
		}
	}
	array := MetadataArrayType{Name: name}
	collection.ArrayTypes = append(collection.ArrayTypes, array)
	index := len(collection.ArrayTypes) - 1
	return array, true, func(value *MetadataSchema) {
		collection.ArrayTypes[index].Value = value
	}
}

func (collection *MetadataCollection) EmplaceTuple(typ TypeLike) (MetadataTupleType, bool, func([]*MetadataSchema)) {
	name := typeName(typ)
	for _, tuple := range collection.TupleTypes {
		if tuple.Name == name {
			return tuple, false, func([]*MetadataSchema) {}
		}
	}
	tuple := MetadataTupleType{Name: name}
	collection.TupleTypes = append(collection.TupleTypes, tuple)
	index := len(collection.TupleTypes) - 1
	return tuple, true, func(elements []*MetadataSchema) {
		collection.TupleTypes[index].Elements = elements
	}
}

func (collection *MetadataCollection) EmplaceObject(typ TypeLike) (MetadataObjectType, bool) {
	name := typeName(typ)
	for _, object := range collection.ObjectTypes {
		if object.Name == name {
			return object, false
		}
	}
	object := MetadataObjectType{Name: name}
	collection.ObjectTypes = append(collection.ObjectTypes, object)
	return object, true
}

type MetadataError struct {
	Name     string
	Explore  MetadataExplore
	Messages []string
}

type MetadataErrors []MetadataError

func (errors *MetadataErrors) Add(err MetadataError) {
	if errors != nil {
		*errors = append(*errors, err)
	}
}

type ExploreMetadataProps struct {
	Options     MetadataFactoryOptions
	Checker     TypeChecker
	Components  *MetadataCollection
	Errors      *MetadataErrors
	Type        TypeLike
	Explore     MetadataExplore
	Intersected bool
}

func typeName(typ TypeLike) string {
	if typ == nil {
		return "unknown"
	}
	return typ.String()
}

func addBool(list *[]bool, value bool) {
	for _, item := range *list {
		if item == value {
			return
		}
	}
	*list = append(*list, value)
}

func takeAtomic(list *[]MetadataAtomic, value MetadataAtomic) {
	for i := range *list {
		if (*list)[i].Type == value.Type {
			return
		}
	}
	*list = append(*list, value)
}

func takeConstant(list *[]MetadataConstant, kind string) *MetadataConstant {
	for i := range *list {
		if (*list)[i].Type == kind {
			return &(*list)[i]
		}
	}
	*list = append(*list, MetadataConstant{Type: kind})
	return &(*list)[len(*list)-1]
}

func addConstantValue(list *[]MetadataConstantValue, value MetadataConstantValue) {
	for _, item := range *list {
		if fmt.Sprint(item.Value) == fmt.Sprint(value.Value) {
			return
		}
	}
	*list = append(*list, value)
}

func takeAlias(list *[]MetadataAlias, value MetadataAlias) {
	for _, item := range *list {
		if item.Type.Name == value.Type.Name {
			return
		}
	}
	*list = append(*list, value)
}

func addArray(list *[]MetadataArray, value MetadataArray) {
	for _, item := range *list {
		if item.Type.Name == value.Type.Name {
			return
		}
	}
	*list = append(*list, value)
}

func addTuple(list *[]MetadataTuple, value MetadataTuple) {
	for _, item := range *list {
		if item.Type.Name == value.Type.Name {
			return
		}
	}
	*list = append(*list, value)
}

func addObject(list *[]MetadataObject, value MetadataObject) {
	for _, item := range *list {
		if item.Type.Name == value.Type.Name {
			return
		}
	}
	*list = append(*list, value)
}

func addMap(list *[]MetadataMap, value MetadataMap) {
	for _, item := range *list {
		if item.Key.GetName() == value.Key.GetName() && item.Value.GetName() == value.Value.GetName() {
			return
		}
	}
	*list = append(*list, value)
}

func addSet(list *[]MetadataSet, value MetadataSet) {
	for _, item := range *list {
		if item.Value.GetName() == value.Value.GetName() {
			return
		}
	}
	*list = append(*list, value)
}

func takeNative(list *[]MetadataNative, value MetadataNative) {
	for _, item := range *list {
		if item.Name == value.Name {
			return
		}
	}
	*list = append(*list, value)
}

func literalKind(value any) string {
	switch value.(type) {
	case bool:
		return "boolean"
	case int, int64, float64, float32:
		return "number"
	case string:
		return "string"
	default:
		return "unknown"
	}
}

func AnalyzeCommentTags(props struct {
	Errors   *MetadataErrors
	Metadata *MetadataSchema
	Tags     []JSDocTag
	Explore  MetadataExplore
}) {
	if len(props.Tags) == 0 || props.Metadata == nil {
		return
	}
}

func IsTypeTagObject(object MetadataObjectType) bool {
	for _, property := range object.Properties {
		if property.Key.GetSoleLiteral() == "typia.tag" {
			return true
		}
	}
	return false
}

func AnalyzeTypeTags(objects []MetadataObjectType, target string) []MetadataTypeTag {
	tags := make([]MetadataTypeTag, 0)
	for _, object := range objects {
		for _, property := range object.Properties {
			if property.Key.GetSoleLiteral() == "typia.tag" {
				tags = append(tags, MetadataTypeTag{Name: target, Target: target, Kind: "type", Value: target})
			}
		}
	}
	return tags
}

func AbsorbMetadata(target *MetadataSchema, source *MetadataSchema) {
	if target == nil || source == nil {
		return
	}
	target.Atomics = append(target.Atomics, source.Atomics...)
	target.Constants = append(target.Constants, source.Constants...)
	target.Templates = append(target.Templates, source.Templates...)
	target.Aliases = append(target.Aliases, source.Aliases...)
	target.Arrays = append(target.Arrays, source.Arrays...)
	target.Tuples = append(target.Tuples, source.Tuples...)
	target.Objects = append(target.Objects, source.Objects...)
	target.Functions = append(target.Functions, source.Functions...)
	target.Natives = append(target.Natives, source.Natives...)
	target.Sets = append(target.Sets, source.Sets...)
	target.Maps = append(target.Maps, source.Maps...)
}

func assignTags(metadata *MetadataSchema, tags []MetadataTypeTag) {
	if metadata == nil || len(tags) == 0 {
		return
	}
	if len(metadata.Atomics) != 0 {
		metadata.Atomics[len(metadata.Atomics)-1].Tags = append(metadata.Atomics[len(metadata.Atomics)-1].Tags, tags)
	}
	if len(metadata.Objects) != 0 {
		metadata.Objects[len(metadata.Objects)-1].Tags = append(metadata.Objects[len(metadata.Objects)-1].Tags, tags)
	}
}

func toString(value any) string {
	return fmt.Sprint(value)
}
