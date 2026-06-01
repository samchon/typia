package metadata

import (
  "maps"
  "slices"
  "strings"

  nativeast "github.com/microsoft/typescript-go/shim/ast"
  nativechecker "github.com/microsoft/typescript-go/shim/checker"
)

type MetadataCollection_IOptions struct {
  Replace func(str string) string
}

type MetadataCollection struct {
  Options *MetadataCollection_IOptions

  objects_       map[*nativechecker.Type]*MetadataObjectType
  object_unions_ map[string][]*MetadataObjectType
  aliases_       map[*nativechecker.Type]*MetadataAliasType
  arrays_        map[*nativechecker.Type]*MetadataArrayType
  tuples_        map[*nativechecker.Type]*MetadataTupleType

  objects_order_       []*nativechecker.Type
  object_unions_order_ []string
  aliases_order_       []*nativechecker.Type
  arrays_order_        []*nativechecker.Type
  tuples_order_        []*nativechecker.Type

  names_                 map[string]map[*nativechecker.Type]string
  type_full_names_       map[*nativechecker.Type]string
  full_names_            map[*nativechecker.Type]string
  object_index_          int
  recursive_array_index_ int
  recursive_tuple_index_ int
}

// LookupTypeFullName / StoreTypeFullName memoize the pure type -> full-name
// reconstruction (checker.TypeToString, recursing unions) per collection. The
// Set/Map iterators recompute it for every explored type just to test a name
// prefix, so the same pointer is resolved repeatedly within one analysis.
func (collection *MetadataCollection) LookupTypeFullName(typ *nativechecker.Type) (string, bool) {
  if collection.type_full_names_ == nil {
    return "", false
  }
  value, ok := collection.type_full_names_[typ]
  return value, ok
}

func (collection *MetadataCollection) StoreTypeFullName(typ *nativechecker.Type, name string) {
  if typ == nil {
    return
  }
  if collection.type_full_names_ == nil {
    collection.type_full_names_ = map[*nativechecker.Type]string{}
  }
  collection.type_full_names_[typ] = name
}

func NewMetadataCollection(options ...*MetadataCollection_IOptions) *MetadataCollection {
  var opt *MetadataCollection_IOptions
  if len(options) > 0 {
    opt = options[0]
  }
  return &MetadataCollection{
    Options: opt,

    objects_:       map[*nativechecker.Type]*MetadataObjectType{},
    object_unions_: map[string][]*MetadataObjectType{},
    aliases_:       map[*nativechecker.Type]*MetadataAliasType{},
    arrays_:        map[*nativechecker.Type]*MetadataArrayType{},
    tuples_:        map[*nativechecker.Type]*MetadataTupleType{},

    objects_order_:       []*nativechecker.Type{},
    object_unions_order_: []string{},
    aliases_order_:       []*nativechecker.Type{},
    arrays_order_:        []*nativechecker.Type{},
    tuples_order_:        []*nativechecker.Type{},

    names_:                 map[string]map[*nativechecker.Type]string{},
    object_index_:          0,
    recursive_array_index_: 0,
    recursive_tuple_index_: 0,
  }
}

func (collection *MetadataCollection) Clone() *MetadataCollection {
  // Clone is the snapshot taken before every intersection exploration, so it is
  // one of the hottest allocation sites. Pre-size each destination map (maps.Clone)
  // instead of copying into the empty maps NewMetadataCollection allocates, which
  // forced repeated rehashing as entries were re-inserted.
  output := &MetadataCollection{
    Options: collection.Options,

    objects_:       maps.Clone(collection.objects_),
    object_unions_: make(map[string][]*MetadataObjectType, len(collection.object_unions_)),
    aliases_:       maps.Clone(collection.aliases_),
    arrays_:        maps.Clone(collection.arrays_),
    tuples_:        maps.Clone(collection.tuples_),

    objects_order_:       slices.Clone(collection.objects_order_),
    object_unions_order_: slices.Clone(collection.object_unions_order_),
    aliases_order_:       slices.Clone(collection.aliases_order_),
    arrays_order_:        slices.Clone(collection.arrays_order_),
    tuples_order_:        slices.Clone(collection.tuples_order_),

    names_:                 make(map[string]map[*nativechecker.Type]string, len(collection.names_)),
    object_index_:          collection.object_index_,
    recursive_array_index_: collection.recursive_array_index_,
    recursive_tuple_index_: collection.recursive_tuple_index_,
  }
  for k, v := range collection.object_unions_ {
    output.object_unions_[k] = slices.Clone(v)
  }
  for k, v := range collection.names_ {
    output.names_[k] = maps.Clone(v)
  }
  return output
}

func (collection *MetadataCollection) Aliases() []*MetadataAliasType {
  output := make([]*MetadataAliasType, 0, len(collection.aliases_))
  for _, key := range collection.aliases_order_ {
    if value := collection.aliases_[key]; value != nil {
      output = append(output, value)
    }
  }
  return output
}

func (collection *MetadataCollection) Objects() []*MetadataObjectType {
  output := make([]*MetadataObjectType, 0, len(collection.objects_))
  for _, key := range collection.objects_order_ {
    if value := collection.objects_[key]; value != nil {
      output = append(output, value)
    }
  }
  return output
}

func (collection *MetadataCollection) Unions() [][]*MetadataObjectType {
  output := make([][]*MetadataObjectType, 0, len(collection.object_unions_))
  for _, key := range collection.object_unions_order_ {
    if value := collection.object_unions_[key]; value != nil {
      output = append(output, value)
    }
  }
  return output
}

func (collection *MetadataCollection) Arrays() []*MetadataArrayType {
  output := make([]*MetadataArrayType, 0, len(collection.arrays_))
  for _, key := range collection.arrays_order_ {
    if value := collection.arrays_[key]; value != nil {
      output = append(output, value)
    }
  }
  return output
}

func (collection *MetadataCollection) Tuples() []*MetadataTupleType {
  output := make([]*MetadataTupleType, 0, len(collection.tuples_))
  for _, key := range collection.tuples_order_ {
    if value := collection.tuples_[key]; value != nil {
      output = append(output, value)
    }
  }
  return output
}

func (collection *MetadataCollection) getName(checker *nativechecker.Checker, typ *nativechecker.Type) string {
  // metadataCollection_getFullName (checker.TypeToString, recursing generics and
  // unions) is pure for a given type pointer, but the duplicate-numbering logic
  // below calls getName again for the same type. Cache only the full-name
  // reconstruction; the numbering bookkeeping still runs every call so ordering
  // is unaffected.
  fullName, ok := collection.full_names_[typ]
  if ok == false {
    fullName = metadataCollection_getFullName(checker, typ)
    if typ != nil {
      if collection.full_names_ == nil {
        collection.full_names_ = map[*nativechecker.Type]string{}
      }
      collection.full_names_[typ] = fullName
    }
  }
  name := fullName
  name = strings.ToValidUTF8(name, "__")
  name = strings.ReplaceAll(name, "\uFFFD", "__")
  if collection.Options != nil && collection.Options.Replace != nil {
    name = collection.Options.Replace(name)
  }
  duplicates := collection.names_[name]
  if duplicates == nil {
    duplicates = map[*nativechecker.Type]string{}
    collection.names_[name] = duplicates
  }
  if oldbie, ok := duplicates[typ]; ok {
    return oldbie
  }
  addicted := name
  if len(duplicates) != 0 {
    addicted = name + ".o" + metadataCollection_itoa(len(duplicates))
  }
  duplicates[typ] = addicted
  return addicted
}

func (collection *MetadataCollection) GetUnionIndex(meta *MetadataSchema) int {
  names := make([]string, 0, len(meta.Objects))
  for _, obj := range meta.Objects {
    names = append(names, obj.Type.Name)
  }
  key := strings.Join(names, " | ")
  if _, ok := collection.object_unions_[key]; ok == false {
    values := make([]*MetadataObjectType, 0, len(meta.Objects))
    for _, obj := range meta.Objects {
      values = append(values, obj.Type)
    }
    collection.object_unions_[key] = values
    collection.object_unions_order_ = append(collection.object_unions_order_, key)
  }
  for index, candidate := range collection.object_unions_order_ {
    if candidate == key {
      return index
    }
  }
  return -1
}

func (collection *MetadataCollection) Emplace(checker *nativechecker.Checker, typ *nativechecker.Type) (*MetadataObjectType, bool) {
  if oldbie := collection.objects_[typ]; oldbie != nil {
    return oldbie, false
  }
  id := collection.getName(checker, typ)
  obj := MetadataObjectType_create(MetadataObjectType{
    Name:        id,
    Properties:  []*MetadataProperty{},
    Description: metadataCollection_description(metadataCollection_symbol(typ)),
    JsDocTags:   metadataCollection_jsDocTags(metadataCollection_symbol(typ)),
    Validated:   false,
    Index:       collection.object_index_,
    Recursive:   false,
    Nullables:   []bool{},
  })
  collection.object_index_++
  collection.objects_[typ] = obj
  collection.objects_order_ = append(collection.objects_order_, typ)
  return obj, true
}

func (collection *MetadataCollection) EmplaceAlias(
  checker *nativechecker.Checker,
  typ *nativechecker.Type,
  symbol *nativeast.Symbol,
) (*MetadataAliasType, bool, func(meta *MetadataSchema)) {
  if oldbie := collection.aliases_[typ]; oldbie != nil {
    return oldbie, false, func(meta *MetadataSchema) {}
  }
  id := collection.getName(checker, typ)
  alias := MetadataAliasType_create(MetadataAliasType{
    Name:        id,
    Value:       nil,
    Description: metadataCollection_description(symbol),
    Recursive:   false,
    Nullables:   []bool{},
    JsDocTags:   metadataCollection_jsDocTags(symbol),
  })
  collection.aliases_[typ] = alias
  collection.aliases_order_ = append(collection.aliases_order_, typ)
  return alias, true, func(meta *MetadataSchema) {
    alias.Value = meta
  }
}

func (collection *MetadataCollection) EmplaceArray(
  checker *nativechecker.Checker,
  typ *nativechecker.Type,
) (*MetadataArrayType, bool, func(meta *MetadataSchema)) {
  if oldbie := collection.arrays_[typ]; oldbie != nil {
    return oldbie, false, func(meta *MetadataSchema) {}
  }
  id := collection.getName(checker, typ)
  array := MetadataArrayType_create(MetadataArrayType{
    Name:      id,
    Value:     nil,
    Index:     nil,
    Recursive: false,
    Nullables: []bool{},
  })
  collection.arrays_[typ] = array
  collection.arrays_order_ = append(collection.arrays_order_, typ)
  return array, true, func(meta *MetadataSchema) {
    array.Value = meta
  }
}

func (collection *MetadataCollection) EmplaceTuple(
  checker *nativechecker.Checker,
  typ *nativechecker.Type,
) (*MetadataTupleType, bool, func(elements []*MetadataSchema)) {
  if oldbie := collection.tuples_[typ]; oldbie != nil {
    return oldbie, false, func(elements []*MetadataSchema) {}
  }
  id := collection.getName(checker, typ)
  tuple := MetadataTupleType_create(MetadataTupleType{
    Name:      id,
    Elements:  nil,
    Index:     nil,
    Recursive: false,
    Nullables: []bool{},
  })
  collection.tuples_[typ] = tuple
  collection.tuples_order_ = append(collection.tuples_order_, typ)
  return tuple, true, func(elements []*MetadataSchema) {
    tuple.Elements = elements
  }
}

func (collection *MetadataCollection) SetObjectRecursive(obj *MetadataObjectType, recursive bool) {
  obj.Recursive = recursive
}

func (collection *MetadataCollection) SetAliasRecursive(alias *MetadataAliasType, recursive bool) {
  alias.Recursive = recursive
}

func (collection *MetadataCollection) SetArrayRecursive(array *MetadataArrayType, recursive bool) {
  array.Recursive = recursive
  if recursive {
    index := collection.recursive_array_index_
    array.Index = &index
    collection.recursive_array_index_++
  }
}

func (collection *MetadataCollection) SetTupleRecursive(tuple *MetadataTupleType, recursive bool) {
  tuple.Recursive = recursive
  if recursive {
    index := collection.recursive_tuple_index_
    tuple.Index = &index
    collection.recursive_tuple_index_++
  }
}

func (collection *MetadataCollection) ToJSON() IMetadataComponents {
  objects := make([]IMetadataSchema_IObjectType, 0, len(collection.objects_))
  for _, object := range collection.Objects() {
    objects = append(objects, object.ToJSON())
  }
  aliases := make([]IMetadataSchema_IAliasType, 0, len(collection.aliases_))
  for _, alias := range collection.Aliases() {
    aliases = append(aliases, alias.ToJSON())
  }
  arrays := make([]IMetadataSchema_IArrayType, 0, len(collection.arrays_))
  for _, array := range collection.Arrays() {
    arrays = append(arrays, array.ToJSON())
  }
  tuples := make([]IMetadataSchema_ITupleType, 0, len(collection.tuples_))
  for _, tuple := range collection.Tuples() {
    tuples = append(tuples, tuple.ToJSON())
  }
  return IMetadataComponents{
    Objects: objects,
    Aliases: aliases,
    Arrays:  arrays,
    Tuples:  tuples,
  }
}

func MetadataCollection_replace(str string) string {
  replaced := str
  for _, pair := range metadataCollection_replacers {
    replaced = strings.ReplaceAll(replaced, pair.Before, "")
  }
  if len(replaced) != 0 {
    return replaced
  }
  for _, pair := range metadataCollection_replacers {
    str = strings.ReplaceAll(str, pair.Before, pair.After)
  }
  return str
}

func MetadataCollection_escape(str string) string {
  for _, pair := range metadataCollection_replacers {
    if pair.After != "" {
      str = strings.ReplaceAll(str, pair.After, pair.Before)
    }
  }
  return str
}

type metadataCollection_replacer struct {
  Before string
  After  string
}

var metadataCollection_replacers = []metadataCollection_replacer{
  {Before: "$", After: "_dollar_"},
  {Before: "&", After: "_and_"},
  {Before: "|", After: "_or_"},
  {Before: "{", After: "_blt_"},
  {Before: "}", After: "_bgt_"},
  {Before: "<", After: "_lt_"},
  {Before: ">", After: "_gt_"},
  {Before: "[", After: "_alt_"},
  {Before: "]", After: "_agt_"},
  {Before: ",", After: "_comma_"},
  {Before: "`", After: "_backquote_"},
  {Before: "'", After: "_singlequote_"},
  {Before: "\"", After: "_doublequote_"},
  {Before: " ", After: "_space_"},
  {Before: "?", After: "_question_"},
  {Before: ":", After: "_colon_"},
  {Before: ";", After: "_semicolon_"},
}

func metadataCollection_getFullName(checker *nativechecker.Checker, typ *nativechecker.Type) string {
  if checker == nil || typ == nil {
    return "__type"
  }
  rendered := metadataCollection_sanitizeName(checker.TypeToString(typ))
  symbol := nativechecker.Type_getTypeNameSymbol(typ)
  if symbol == nil {
    symbol = typ.Symbol()
  }
  if symbol == nil {
    if typ.IsUnion() || typ.IsIntersection() {
      joiner := " | "
      if typ.IsIntersection() {
        joiner = " & "
      }
      children := typ.Types()
      names := make([]string, 0, len(children))
      for _, child := range children {
        names = append(names, metadataCollection_getFullName(checker, child))
      }
      return strings.Join(names, joiner)
    }
    if rendered != "" {
      return rendered
    }
    return "__type"
  }
  name := metadataCollection_getName(symbol)
  generic := []*nativechecker.Type{}
  if typ.ObjectFlags()&nativechecker.ObjectFlagsReference != 0 {
    generic = nativechecker.Checker_getTypeArguments(checker, typ)
  }
  if len(generic) == 0 {
    if metadataCollection_isSpecializedName(rendered, name) {
      return rendered
    }
    return name
  }
  if name == "Promise" {
    return metadataCollection_getFullName(checker, generic[0])
  }
  names := make([]string, 0, len(generic))
  for _, child := range generic {
    names = append(names, metadataCollection_getFullName(checker, child))
  }
  return name + "<" + strings.Join(names, ", ") + ">"
}

func metadataCollection_getName(symbol *nativeast.Symbol) string {
  if symbol == nil || len(symbol.Declarations) == 0 || symbol.Declarations[0].Parent == nil {
    return "__type"
  }
  return metadataCollection_exploreName(symbol.Declarations[0].Parent, strings.ReplaceAll(symbol.Name, "\uFFFD", "__"))
}

func metadataCollection_exploreName(node *nativeast.Node, name string) string {
  if node != nil && nativeast.IsModuleBlock(node) && node.Parent != nil && node.Parent.Parent != nil {
    parentName := ""
    if node.Parent.Name() != nil {
      parentName = strings.TrimSpace(node.Parent.Name().Text())
    }
    if parentName != "" {
      return metadataCollection_exploreName(node.Parent.Parent, parentName+"."+name)
    }
  }
  return name
}

func metadataCollection_sanitizeName(name string) string {
  name = strings.ToValidUTF8(name, "__")
  name = strings.ReplaceAll(name, "\uFFFD", "__")
  return name
}

func metadataCollection_isSpecializedName(rendered string, name string) bool {
  if rendered == "" || name == "" {
    return false
  }
  return strings.HasPrefix(rendered, name+"<") ||
    strings.Contains(rendered, "."+name+"<")
}

func metadataCollection_symbol(typ *nativechecker.Type) *nativeast.Symbol {
  if typ == nil {
    return nil
  }
  if symbol := nativechecker.Type_getTypeNameSymbol(typ); symbol != nil {
    return symbol
  }
  return typ.Symbol()
}

func metadataCollection_description(symbol *nativeast.Symbol) *string {
  return nil
}

func metadataCollection_jsDocTags(symbol *nativeast.Symbol) []IJsDocTagInfo {
  return []IJsDocTagInfo{}
}

func metadataCollection_itoa(value int) string {
  if value == 0 {
    return "0"
  }
  digits := []byte{}
  for value > 0 {
    digits = append([]byte{byte('0' + value%10)}, digits...)
    value /= 10
  }
  return string(digits)
}
