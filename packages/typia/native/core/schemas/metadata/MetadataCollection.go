package metadata

import (
  "hash/fnv"
  "maps"
  "slices"
  "strconv"
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
  display_names_         map[*nativechecker.Type]string
  apparent_properties_   map[*nativechecker.Type][]*nativeast.Symbol
  index_infos_           map[*nativechecker.Type][]*nativechecker.IndexInfo
  plain_objects_         map[*nativechecker.Type]bool
  literal_conflicts_     map[*nativechecker.Type]bool
  object_index_          int
  recursive_array_index_ int
  recursive_tuple_index_ int
  explore_cache_         map[MetadataCollection_ExploreCacheKey]*MetadataSchema
}

type MetadataCollection_ExploreCacheKey struct {
  Type       *nativechecker.Type
  Escape     bool
  Absorb     bool
  Constant   bool
  Functional bool
  Top        bool
  Aliased    bool
  Escaped    bool
  Output     bool
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
    explore_cache_:         map[MetadataCollection_ExploreCacheKey]*MetadataSchema{},
    apparent_properties_:   map[*nativechecker.Type][]*nativeast.Symbol{},
    index_infos_:           map[*nativechecker.Type][]*nativechecker.IndexInfo{},
    plain_objects_:         map[*nativechecker.Type]bool{},
    literal_conflicts_:     map[*nativechecker.Type]bool{},
  }
}

func (collection *MetadataCollection) Clone() *MetadataCollection {
  // Clone snapshots the collection before intersection exploration and keeps
  // every lookup cache aligned with that snapshot.
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
    type_full_names_:       maps.Clone(collection.type_full_names_),
    full_names_:            maps.Clone(collection.full_names_),
    display_names_:         maps.Clone(collection.display_names_),
    apparent_properties_:   maps.Clone(collection.apparent_properties_),
    index_infos_:           maps.Clone(collection.index_infos_),
    plain_objects_:         maps.Clone(collection.plain_objects_),
    literal_conflicts_:     maps.Clone(collection.literal_conflicts_),
    object_index_:          collection.object_index_,
    recursive_array_index_: collection.recursive_array_index_,
    recursive_tuple_index_: collection.recursive_tuple_index_,
    explore_cache_:         maps.Clone(collection.explore_cache_),
  }
  for k, v := range collection.object_unions_ {
    output.object_unions_[k] = slices.Clone(v)
  }
  for k, v := range collection.names_ {
    output.names_[k] = maps.Clone(v)
  }
  return output
}

func (collection *MetadataCollection) LookupExploreCache(key MetadataCollection_ExploreCacheKey) (*MetadataSchema, bool) {
  if collection == nil || collection.explore_cache_ == nil {
    return nil, false
  }
  value, ok := collection.explore_cache_[key]
  if ok == false || value == nil {
    return nil, false
  }
  return value.Clone(), true
}

func (collection *MetadataCollection) StoreExploreCache(key MetadataCollection_ExploreCacheKey, value *MetadataSchema) {
  if collection == nil || key.Type == nil || value == nil {
    return
  }
  if collection.explore_cache_ == nil {
    collection.explore_cache_ = map[MetadataCollection_ExploreCacheKey]*MetadataSchema{}
  }
  collection.explore_cache_[key] = value.Clone()
}

func (collection *MetadataCollection) ApparentProperties(checker *nativechecker.Checker, typ *nativechecker.Type) []*nativeast.Symbol {
  if collection == nil {
    return metadataCollection_touchProperties(checker, nativechecker.Checker_getApparentProperties(checker, typ))
  }
  if collection.apparent_properties_ == nil {
    collection.apparent_properties_ = map[*nativechecker.Type][]*nativeast.Symbol{}
  }
  if value, ok := collection.apparent_properties_[typ]; ok {
    return value
  }
  value := metadataCollection_touchProperties(checker, nativechecker.Checker_getApparentProperties(checker, typ))
  collection.apparent_properties_[typ] = value
  return value
}

// metadataCollection_touchProperties reports each enumerated property symbol to
// the dependency listener. Inherited members keep their declaring symbol, so an
// object type declared in one file registers the base-interface or base-class
// files its properties actually come from.
func metadataCollection_touchProperties(checker *nativechecker.Checker, symbols []*nativeast.Symbol) []*nativeast.Symbol {
  for _, symbol := range symbols {
    MetadataDependency_touchSymbol(checker, symbol)
  }
  return symbols
}

func (collection *MetadataCollection) IndexInfos(checker *nativechecker.Checker, typ *nativechecker.Type) []*nativechecker.IndexInfo {
  if collection == nil {
    return nativechecker.Checker_getIndexInfosOfType(checker, typ)
  }
  if collection.index_infos_ == nil {
    collection.index_infos_ = map[*nativechecker.Type][]*nativechecker.IndexInfo{}
  }
  if value, ok := collection.index_infos_[typ]; ok {
    return value
  }
  value := nativechecker.Checker_getIndexInfosOfType(checker, typ)
  collection.index_infos_[typ] = value
  return value
}

func (collection *MetadataCollection) LookupPlainObjectIntersection(typ *nativechecker.Type) (bool, bool) {
  if collection == nil || collection.plain_objects_ == nil {
    return false, false
  }
  value, ok := collection.plain_objects_[typ]
  return value, ok
}

func (collection *MetadataCollection) StorePlainObjectIntersection(typ *nativechecker.Type, value bool) {
  if collection == nil || typ == nil {
    return
  }
  if collection.plain_objects_ == nil {
    collection.plain_objects_ = map[*nativechecker.Type]bool{}
  }
  collection.plain_objects_[typ] = value
}

func (collection *MetadataCollection) LookupLiteralConflict(typ *nativechecker.Type) (bool, bool) {
  if collection == nil || collection.literal_conflicts_ == nil {
    return false, false
  }
  value, ok := collection.literal_conflicts_[typ]
  return value, ok
}

func (collection *MetadataCollection) StoreLiteralConflict(typ *nativechecker.Type, value bool) {
  if collection == nil || typ == nil {
    return
  }
  if collection.literal_conflicts_ == nil {
    collection.literal_conflicts_ = map[*nativechecker.Type]bool{}
  }
  collection.literal_conflicts_[typ] = value
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

func (collection *MetadataCollection) getName(checker *nativechecker.Checker, typ *nativechecker.Type) (string, string) {
  fullName := collection.getFullName(checker, typ)
  name := fullName
  name = strings.ToValidUTF8(name, "__")
  name = strings.ReplaceAll(name, "\uFFFD", "__")
  // The anonymous marker only reads "__type" after sanitization: the raw
  // symbol name carries tsgo's internal prefix byte, which the lines above
  // rewrite to "__". Gate the display rendering on the sanitized form.
  display := collection.getDisplayName(checker, typ, name)
  if collection.Options != nil && collection.Options.Replace != nil {
    name = collection.Options.Replace(name)
  }
  duplicates := collection.names_[name]
  if duplicates == nil {
    duplicates = map[*nativechecker.Type]string{}
    collection.names_[name] = duplicates
  }
  if oldbie, ok := duplicates[typ]; ok {
    return oldbie, display
  }
  addicted := name
  if len(duplicates) != 0 {
    addicted = name + ".o" + metadataCollection_itoa(len(duplicates))
  }
  duplicates[typ] = addicted
  return addicted, display
}

func (collection *MetadataCollection) getFullName(checker *nativechecker.Checker, typ *nativechecker.Type) string {
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
  return fullName
}

// getDisplayName renders the structural form (checker.TypeToString) of types
// whose sanitized identifier name carries the anonymous "__type" marker, so
// human-facing expected strings can show `{ id: string; name: string; }`
// instead of `__type.o1`. Named types return "": their identifier name is
// already the best display, and so is the degenerate case where the rendering
// brings no extra information.
func (collection *MetadataCollection) getDisplayName(checker *nativechecker.Checker, typ *nativechecker.Type, sanitized string) string {
  if strings.Contains(sanitized, "__type") == false {
    return ""
  }
  if checker == nil || typ == nil {
    return ""
  }
  if display, ok := collection.display_names_[typ]; ok {
    return display
  }
  display := metadataCollection_sanitizeName(checker.TypeToString(typ))
  if display == sanitized {
    display = ""
  }
  if collection.display_names_ == nil {
    collection.display_names_ = map[*nativechecker.Type]string{}
  }
  collection.display_names_[typ] = display
  return display
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
  id, display := collection.getName(checker, typ)
  obj := MetadataObjectType_create(MetadataObjectType{
    Name:        id,
    DisplayName: display,
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
  id, display := collection.getName(checker, typ)
  alias := MetadataAliasType_create(MetadataAliasType{
    Name:        id,
    DisplayName: display,
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
  id, display := collection.getName(checker, typ)
  array := MetadataArrayType_create(MetadataArrayType{
    Name:        id,
    DisplayName: display,
    Value:       nil,
    Index:       nil,
    Recursive:   false,
    Nullables:   []bool{},
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
  id, display := collection.getName(checker, typ)
  tuple := MetadataTupleType_create(MetadataTupleType{
    Name:        id,
    DisplayName: display,
    Elements:    nil,
    Index:       nil,
    Recursive:   false,
    Nullables:   []bool{},
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

// MetadataCollection_replaceOpenApi converts a metadata display name into an
// OpenAPI Components Object key. Keep this separate from the general metadata
// replacement used by LLM `$defs`: OpenAPI restricts keys to an ASCII grammar,
// while an LLM definition map can own arbitrary JSON object keys.
func MetadataCollection_replaceOpenApi(str string) string {
  var escaped strings.Builder
  var quote rune
  quotedContent := false
  quotedEscape := false
  disambiguate := false
  for _, ch := range str {
    if quote != 0 {
      if quotedEscape {
        disambiguate = metadataCollection_writeOpenApiNameRune(&escaped, ch) || disambiguate
        quotedContent = true
        quotedEscape = false
        continue
      }
      if ch == '\\' {
        disambiguate = metadataCollection_writeOpenApiNameRune(&escaped, ch) || disambiguate
        quotedContent = true
        quotedEscape = true
        continue
      }
      if ch == quote {
        if quotedContent == false {
          disambiguate = true
        }
        quote = 0
        continue
      }
      disambiguate = metadataCollection_writeOpenApiNameRune(&escaped, ch) || disambiguate
      quotedContent = true
      continue
    }
    if ch == '\'' || ch == '"' || ch == '`' {
      quote = ch
      quotedContent = false
      continue
    }
    if ch == '$' {
      disambiguate = metadataCollection_writeOpenApiNameRune(&escaped, ch) || disambiguate
    } else {
      escaped.WriteRune(ch)
    }
  }
  normalized := MetadataCollection_replace(escaped.String())
  if len(normalized) == 0 {
    normalized = "_"
    disambiguate = true
  }
  var builder strings.Builder
  for _, ch := range normalized {
    disambiguate = metadataCollection_writeOpenApiNameRune(&builder, ch) || disambiguate
  }
  if disambiguate {
    builder.WriteString(".x")
    builder.WriteString(metadataCollection_openApiNameHash(str))
  }
  return builder.String()
}

func metadataCollection_writeOpenApiNameRune(builder *strings.Builder, ch rune) bool {
  if metadataCollection_isOpenApiNameRune(ch) {
    builder.WriteRune(ch)
    return false
  }
  builder.WriteString("_x")
  builder.WriteString(strings.ToUpper(strconv.FormatInt(int64(ch), 16)))
  builder.WriteByte('_')
  return true
}

func metadataCollection_openApiNameHash(str string) string {
  hasher := fnv.New64a()
  _, _ = hasher.Write([]byte(str))
  encoded := strings.ToUpper(strconv.FormatUint(hasher.Sum64(), 16))
  return strings.Repeat("0", 16-len(encoded)) + encoded
}

func metadataCollection_isOpenApiNameRune(ch rune) bool {
  return (ch >= 'a' && ch <= 'z') ||
    (ch >= 'A' && ch <= 'Z') ||
    (ch >= '0' && ch <= '9') ||
    ch == '.' ||
    ch == '-' ||
    ch == '_'
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

  // Mirror TypeFactory.getFullName: prefer the alias symbol, then the type's
  // own symbol. getTypeNameSymbol already returns t.alias.symbol first (the
  // alias symbol), so a non-nil result that differs from typ.Symbol() means the
  // name was derived from a type alias such as `type Foo = Bar[]`.
  nameSymbol := nativechecker.Type_getTypeNameSymbol(typ)
  rawSymbol := typ.Symbol()
  aliasDerived := nameSymbol != nil && nameSymbol != rawSymbol
  symbol := nameSymbol
  if symbol == nil {
    symbol = rawSymbol
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

  // Legacy chooses generic arguments by alias-ness: when the type carries an
  // alias symbol it uses that alias' own type arguments (empty for a plain,
  // non-generic alias), NOT checker.getTypeArguments(type) which would expose a
  // reference type's element/instantiation arguments (e.g. the element type of
  // `Foo = Bar[]`). Reading reference arguments for an alias doubled the name
  // into `Foo<Foo.Member>` -> sanitized `FooFoo.Member`. A non-generic alias
  // therefore resolves to the plain alias name; a generic alias is still caught
  // by the specialized-name branch below because its rendered form is `Foo<..>`.
  generic := []*nativechecker.Type{}
  if aliasDerived == false && typ.ObjectFlags()&nativechecker.ObjectFlagsReference != 0 {
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
