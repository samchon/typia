package metadata

import (
  "hash/fnv"
  "maps"
  "slices"
  "strconv"
  "strings"
  "unicode"

  nativeast "github.com/microsoft/typescript-go/shim/ast"
  nativechecker "github.com/microsoft/typescript-go/shim/checker"
)

// MetadataCollection_IOptions are the options of a collection. Replace rewrites a
// type's full name before an id is allocated for it.
//
// @evidence contracts/common.md#principled-implementation The id allocator takes its base name from a replaceable function so each output format can choose its key alphabet, and a nil function leaves the name as is.
// @evidence contracts/common.md#clear-and-simple-design One function field.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states when Replace runs.
type MetadataCollection_IOptions struct {
  // Replace rewrites a sanitized full name before unique-id allocation.
  Replace func(str string) string
}

// MetadataCollection owns the shared object, alias, array and tuple types found
// by one analysis, keyed by compiler type and listed in discovery order, and
// allocates their unique ids. It also memoizes the answers that analysis asks for
// repeatedly: full names, apparent properties, index infos, plain-object
// intersections, literal conflicts and explored schemas. Each programmer creates
// its own collection for one analysis.
//
// @evidence contracts/common.md#principled-implementation Types must be shared by identity so that recursive and repeated types resolve to one entry, and the ordered key lists make every list and id deterministic.
// @evidence contracts/common.md#clear-and-simple-design One record of maps, order slices, counters and caches, all reached through its methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The caches are per collection and are never process-wide, so an analysis cannot see another analysis's results.
// @evidence contracts/common.md#meaningful-documentation The doc states what is owned, what is cached and who creates it.
type MetadataCollection struct {
  // Options controls the base-name rewrite used by this analysis's id allocator.
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

  names_                 map[*nativechecker.Type]string
  allocated_names_       map[string]bool
  name_counters_         map[string]int
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

// MetadataCollection_ExploreCacheKey identifies one exploration in the cache: the
// type plus the recorded option and exploration flags used by Explore_metadata.
// Other member-analysis options must stay fixed within one collection. The key
// is not a certificate of equivalence across all unrecorded exploration context.
//
// @evidence contracts/common.md#principled-implementation Explore_metadata records the type and these varying option/exploration flags in a comparable key; reuse also depends on its eligibility guards and fixed member options within the collection.
// @evidence contracts/common.md#clear-and-simple-design One flat comparable record.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states what the key identifies.
type MetadataCollection_ExploreCacheKey struct {
  // Type identifies the checker type being explored.
  Type *nativechecker.Type
  // Escape records whether toJSON escape analysis is enabled.
  Escape bool
  // Absorb records structural analysis instead of a named alias wrapper.
  Absorb bool
  // Constant records whether literal-value alternatives are retained.
  Constant bool
  // Functional records whether callable alternatives are analyzed.
  Functional bool
  // Top records the root exploration position.
  Top bool
  // Aliased records exploration inside an alias target.
  Aliased bool
  // Escaped records exploration inside a toJSON escape.
  Escaped bool
  // Output records a callable-output exploration position.
  Output bool
}

// LookupTypeFullName / StoreTypeFullName memoize the pure type -> full-name
// reconstruction (checker.TypeToString, recursing unions and intersections) per
// collection. The intersection analysis, the object emplacement and error
// reports ask for the same type's name repeatedly within one analysis.
//
// @evidence contracts/common.md#principled-implementation The full name of a type is rebuilt from the checker on demand and repeats across the intersection analysis, the object emplacement and error reports, so it is memoized per collection, and a miss is reported instead of invented.
// @evidence contracts/common.md#clear-and-simple-design A nil-map-safe read on a non-nil collection.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The cache holds only the pure name and no analysis state.
// @evidence contracts/common.md#meaningful-documentation The doc states what is memoized and which callers repeat it.
func (collection *MetadataCollection) LookupTypeFullName(typ *nativechecker.Type) (string, bool) {
  if collection.type_full_names_ == nil {
    return "", false
  }
  value, ok := collection.type_full_names_[typ]
  return value, ok
}

// StoreTypeFullName records the full name of a type; a nil type is ignored.
//
// @evidence contracts/common.md#principled-implementation The store creates the map lazily so a collection built without it still works.
// @evidence contracts/common.md#clear-and-simple-design One guard and one map write.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Nothing is stored for a nil type.
// @evidence contracts/common.md#meaningful-documentation The doc states the ignored case.
func (collection *MetadataCollection) StoreTypeFullName(typ *nativechecker.Type, name string) {
  if typ == nil {
    return
  }
  if collection.type_full_names_ == nil {
    collection.type_full_names_ = map[*nativechecker.Type]string{}
  }
  collection.type_full_names_[typ] = name
}

// NewMetadataCollection creates an empty collection. The first option record is
// used when given.
//
// @evidence contracts/common.md#principled-implementation Shared-type registries and eager lookup maps start allocated; the full-name and display-name caches are initialized lazily by their stores.
// @evidence contracts/common.md#clear-and-simple-design One constructor with a variadic options parameter.
// @evidence contracts/common.md#prohibited-implementation-shortcuts No state is shared between collections.
// @evidence contracts/common.md#meaningful-documentation The doc states the option default.
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

    names_:                 map[*nativechecker.Type]string{},
    allocated_names_:       map[string]bool{},
    name_counters_:         map[string]int{},
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

// Clone copies the registries, order lists, counters and caches so that the copy
// can be assigned back as a rollback point. The type entries themselves are
// shared with the original and keep any later edit. Cached pointer/slice values
// and Options also remain shared; this is a registry snapshot, not a graph copy.
//
// @evidence contracts/common.md#principled-implementation The intersection analysis explores members on the real collection and restores the snapshot when the result is discarded, which needs every registry and counter copied.
// @evidence contracts/common.md#clear-and-simple-design One struct literal of map and slice copies and one loop for the union lists.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The sharing of the entries is stated and not hidden.
// @evidence contracts/common.md#meaningful-documentation The doc states what is copied and what is shared.
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

    names_:                 maps.Clone(collection.names_),
    allocated_names_:       maps.Clone(collection.allocated_names_),
    name_counters_:         maps.Clone(collection.name_counters_),
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
  return output
}

// LookupExploreCache returns a clone of the cached schema for the key, or false.
// The clone gives the caller independent schema roots, records and rows within
// MetadataSchema.Clone's documented shared-definition/payload boundary.
//
// @evidence contracts/common.md#principled-implementation Explorations receive structurally cloned schemas for their root/row edits, while shared definitions and payload references retain the ownership boundary of Clone.
// @evidence contracts/common.md#clear-and-simple-design A nil-safe map read and one Clone.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A nil or missing entry reports a miss.
// @evidence contracts/common.md#meaningful-documentation The doc states the copy.
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

// StoreExploreCache records a clone of value under the key; a nil collection, nil
// key type or nil value is ignored.
//
// @evidence contracts/common.md#principled-implementation The stored schema owns the copied roots, records and rows within Clone's documented boundary; shared definitions and payload references are not made independent.
// @evidence contracts/common.md#clear-and-simple-design Guards, a lazy map and one Clone.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Nothing is stored without a type or value.
// @evidence contracts/common.md#meaningful-documentation The doc states the copy and the ignored cases.
func (collection *MetadataCollection) StoreExploreCache(key MetadataCollection_ExploreCacheKey, value *MetadataSchema) {
  if collection == nil || key.Type == nil || value == nil {
    return
  }
  if collection.explore_cache_ == nil {
    collection.explore_cache_ = map[MetadataCollection_ExploreCacheKey]*MetadataSchema{}
  }
  collection.explore_cache_[key] = value.Clone()
}

// ApparentProperties returns the properties of a type, including inherited ones,
// and reports each property symbol to the dependency listener. The result is
// cached per type, so the report happens when it is first computed; a nil
// collection computes and reports on every call.
//
// @evidence contracts/common.md#principled-implementation Apparent properties are asked for repeatedly and are pure for one program, and enumerating them is where inherited members reveal the files they come from.
// @evidence contracts/common.md#clear-and-simple-design A nil-safe cache over one checker call and one reporting loop.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The caching of the report is stated; the collection lives for one analysis.
// @evidence contracts/common.md#meaningful-documentation The doc states the caching and its effect on the dependency report.
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

// IndexInfos returns the index signatures of a type, cached per type; a nil
// collection computes them on every call.
//
// @evidence contracts/common.md#principled-implementation The index signatures are pure for one program and are asked for repeatedly.
// @evidence contracts/common.md#clear-and-simple-design A nil-safe cache over one checker call.
// @evidence contracts/common.md#prohibited-implementation-shortcuts No other state is kept.
// @evidence contracts/common.md#meaningful-documentation The doc states the cache and the nil case.
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

// LookupPlainObjectIntersection returns the remembered answer to whether an
// intersection type is made of plain objects, and whether one was remembered.
//
// @evidence contracts/common.md#principled-implementation The answer is pure for one type, so it is memoized with a found flag that keeps false a real answer.
// @evidence contracts/common.md#clear-and-simple-design A nil-safe map read.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A missing collection or entry reports not found.
// @evidence contracts/common.md#meaningful-documentation The doc states the two results.
func (collection *MetadataCollection) LookupPlainObjectIntersection(typ *nativechecker.Type) (bool, bool) {
  if collection == nil || collection.plain_objects_ == nil {
    return false, false
  }
  value, ok := collection.plain_objects_[typ]
  return value, ok
}

// StorePlainObjectIntersection remembers the answer for a type; a nil collection
// or type is ignored.
//
// @evidence contracts/common.md#principled-implementation It is the write side of the memo.
// @evidence contracts/common.md#clear-and-simple-design Guards, a lazy map and one write.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Nothing is stored for a nil type.
// @evidence contracts/common.md#meaningful-documentation The doc states the ignored case.
func (collection *MetadataCollection) StorePlainObjectIntersection(typ *nativechecker.Type, value bool) {
  if collection == nil || typ == nil {
    return
  }
  if collection.plain_objects_ == nil {
    collection.plain_objects_ = map[*nativechecker.Type]bool{}
  }
  collection.plain_objects_[typ] = value
}

// LookupLiteralConflict returns the remembered answer to whether an intersection
// type has conflicting required literals, and whether one was remembered.
//
// @evidence contracts/common.md#principled-implementation The answer is pure for one type, so it is memoized with a found flag that keeps false a real answer.
// @evidence contracts/common.md#clear-and-simple-design A nil-safe map read.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A missing collection or entry reports not found.
// @evidence contracts/common.md#meaningful-documentation The doc states the two results.
func (collection *MetadataCollection) LookupLiteralConflict(typ *nativechecker.Type) (bool, bool) {
  if collection == nil || collection.literal_conflicts_ == nil {
    return false, false
  }
  value, ok := collection.literal_conflicts_[typ]
  return value, ok
}

// StoreLiteralConflict remembers the answer for a type; a nil collection or type
// is ignored.
//
// @evidence contracts/common.md#principled-implementation It is the write side of the memo.
// @evidence contracts/common.md#clear-and-simple-design Guards, a lazy map and one write.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Nothing is stored for a nil type.
// @evidence contracts/common.md#meaningful-documentation The doc states the ignored case.
func (collection *MetadataCollection) StoreLiteralConflict(typ *nativechecker.Type, value bool) {
  if collection == nil || typ == nil {
    return
  }
  if collection.literal_conflicts_ == nil {
    collection.literal_conflicts_ = map[*nativechecker.Type]bool{}
  }
  collection.literal_conflicts_[typ] = value
}

// Aliases returns the alias types in the order they were first found.
//
// @evidence contracts/common.md#principled-implementation The order slice, not map iteration, decides the list so ids and output are deterministic.
// @evidence contracts/common.md#clear-and-simple-design One loop over the order list.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Entries missing from the map are skipped.
// @evidence contracts/common.md#meaningful-documentation The doc states the order.
func (collection *MetadataCollection) Aliases() []*MetadataAliasType {
  output := make([]*MetadataAliasType, 0, len(collection.aliases_))
  for _, key := range collection.aliases_order_ {
    if value := collection.aliases_[key]; value != nil {
      output = append(output, value)
    }
  }
  return output
}

// Objects returns the object types in the order they were first found.
//
// @evidence contracts/common.md#principled-implementation The order slice decides the list so output is deterministic.
// @evidence contracts/common.md#clear-and-simple-design One loop over the order list.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Entries missing from the map are skipped.
// @evidence contracts/common.md#meaningful-documentation The doc states the order.
func (collection *MetadataCollection) Objects() []*MetadataObjectType {
  output := make([]*MetadataObjectType, 0, len(collection.objects_))
  for _, key := range collection.objects_order_ {
    if value := collection.objects_[key]; value != nil {
      output = append(output, value)
    }
  }
  return output
}

// Unions returns the object unions in the order they were registered by
// GetUnionIndex.
//
// @evidence contracts/common.md#principled-implementation The order slice decides the list so union indexes match their positions.
// @evidence contracts/common.md#clear-and-simple-design One loop over the order list.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Entries missing from the map are skipped.
// @evidence contracts/common.md#meaningful-documentation The doc states the order.
func (collection *MetadataCollection) Unions() [][]*MetadataObjectType {
  output := make([][]*MetadataObjectType, 0, len(collection.object_unions_))
  for _, key := range collection.object_unions_order_ {
    if value := collection.object_unions_[key]; value != nil {
      output = append(output, value)
    }
  }
  return output
}

// Arrays returns the array types in the order they were first found.
//
// @evidence contracts/common.md#principled-implementation The order slice decides the list so output is deterministic.
// @evidence contracts/common.md#clear-and-simple-design One loop over the order list.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Entries missing from the map are skipped.
// @evidence contracts/common.md#meaningful-documentation The doc states the order.
func (collection *MetadataCollection) Arrays() []*MetadataArrayType {
  output := make([]*MetadataArrayType, 0, len(collection.arrays_))
  for _, key := range collection.arrays_order_ {
    if value := collection.arrays_[key]; value != nil {
      output = append(output, value)
    }
  }
  return output
}

// Tuples returns the tuple types in the order they were first found.
//
// @evidence contracts/common.md#principled-implementation The order slice decides the list so output is deterministic.
// @evidence contracts/common.md#clear-and-simple-design One loop over the order list.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Entries missing from the map are skipped.
// @evidence contracts/common.md#meaningful-documentation The doc states the order.
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
  if oldbie, ok := collection.names_[typ]; ok {
    return oldbie, display
  }
  addicted, index := metadataCollection_allocateName(
    collection.allocated_names_,
    name,
    collection.name_counters_[name],
  )
  collection.allocated_names_[addicted] = true
  collection.name_counters_[name] = index + 1
  collection.names_[typ] = addicted
  return addicted, display
}

// metadataCollection_duplicateSuffix separates a duplicated base name from its
// disambiguating counter.
//
// It must not be ".", which is how a qualified name separates a namespace from
// its member. Two consumers read that meaning back out of an allocated id:
// `JsonDescriptor.cascade` inherits the prefix component's description into the
// child, and a reader of `reflect.name` sees a member of a namespace that never
// declared it. A dotted counter also let an invented id land on the real full
// name of a `namespace Foo { interface o1 }` member, and the loser was dropped
// from the document outright. "-" cannot occur in a qualified name, is in the
// OpenAPI Components Object key alphabet, and needs no JSON Pointer or URI
// escaping; `metadataCollection_openApiNameSuffix` picks it for the same reason.
const metadataCollection_duplicateSuffix = "-o"

// metadataCollection_allocateName mints the first id at or after `from` that no
// other type in the collection has already been given, and reports the counter
// it settled on.
//
// `taken` is the whole collection's allocated-id set, not one base name's
// bucket. Bucketing by base name alone cannot see that another base name
// already minted, or genuinely owns, the id being handed out, so two distinct
// types received one id and one of them silently disappeared from every
// generated document. Consulting the whole set is what makes an id unique; the
// separator only keeps that id from being *read* as something it is not.
//
// `from` is the caller's per-base-name counter and is an optimization, never
// the uniqueness argument: the set is still checked, so a wrong `from` costs a
// scan rather than a collision. It exists because every anonymous type shares
// the name `__type`. Always starting at zero rescans the whole run of previous
// `__type` ids for each new one, which is quadratic in a program's anonymous
// type count. Resuming from the per-base counter avoids that repeated prefix scan.
func metadataCollection_allocateName(taken map[string]bool, name string, from int) (string, int) {
  index := from
  allocated := metadataCollection_composeName(name, index)
  for taken[allocated] {
    index++
    allocated = metadataCollection_composeName(name, index)
  }
  return allocated, index
}

// metadataCollection_composeName renders a base name at a counter. Counter zero
// is the base name itself, so the first type of a name keeps it unchanged.
func metadataCollection_composeName(name string, index int) string {
  if index == 0 {
    return name
  }
  return name + metadataCollection_duplicateSuffix + strconv.Itoa(index)
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
// instead of `__type-o1`. Named types return "": their identifier name is
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

// GetUnionIndex returns the index of the object union that the schema's objects
// form, registering it when it is new. Unions are identified by the type names of
// their members joined with ` | `, in schema order.
//
// @evidence contracts/common.md#principled-implementation A union of the same member list must receive the same index wherever it occurs, so the index is looked up by the member names and appended once.
// @evidence contracts/common.md#clear-and-simple-design One key construction, one registration and one scan of the order list.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The identity is the member name list, which the doc states.
// @evidence contracts/common.md#meaningful-documentation The doc states the key and the registration.
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

// Emplace returns the object type registered for a compiler type and whether it
// is new. A new entry gets a unique id, a display name and the next object index,
// and starts with no properties, description or JSDoc tags; the factory fills
// those in.
//
// @evidence contracts/common.md#principled-implementation An object is registered before its members are explored so a self reference finds the same entry, and its id is allocated once.
// @evidence contracts/common.md#clear-and-simple-design One map lookup and one construction.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The documentation is intentionally left to the factory, which reads the AST.
// @evidence contracts/common.md#meaningful-documentation The doc states the new-entry state and who fills it.
func (collection *MetadataCollection) Emplace(checker *nativechecker.Checker, typ *nativechecker.Type) (*MetadataObjectType, bool) {
  if oldbie := collection.objects_[typ]; oldbie != nil {
    return oldbie, false
  }
  id, display := collection.getName(checker, typ)
  obj := MetadataObjectType_create(MetadataObjectType{
    Name:        id,
    DisplayName: display,
    Properties:  []*MetadataProperty{},
    Description: nil,
    JsDocTags:   []IJsDocTagInfo{},
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

// EmplaceAlias returns the alias type registered for a compiler type, whether it
// is new, and a function that sets its value once the target is analyzed (a no-op
// for a known alias). A new entry has no value, description or JSDoc tags.
//
// @evidence contracts/common.md#principled-implementation The alias is registered before its target is explored, which is what lets a recursive alias refer to itself, and the value is attached afterwards.
// @evidence contracts/common.md#clear-and-simple-design One lookup, one construction and one closure.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The value hook is explicit and not a hidden mutation.
// @evidence contracts/common.md#meaningful-documentation The doc states the three results and the empty new entry.
func (collection *MetadataCollection) EmplaceAlias(
  checker *nativechecker.Checker,
  typ *nativechecker.Type,
) (*MetadataAliasType, bool, func(meta *MetadataSchema)) {
  if oldbie := collection.aliases_[typ]; oldbie != nil {
    return oldbie, false, func(meta *MetadataSchema) {}
  }
  id, display := collection.getName(checker, typ)
  alias := MetadataAliasType_create(MetadataAliasType{
    Name:        id,
    DisplayName: display,
    Value:       nil,
    Description: nil,
    Recursive:   false,
    Nullables:   []bool{},
    JsDocTags:   []IJsDocTagInfo{},
  })
  collection.aliases_[typ] = alias
  collection.aliases_order_ = append(collection.aliases_order_, typ)
  return alias, true, func(meta *MetadataSchema) {
    alias.Value = meta
  }
}

// EmplaceArray returns the array type registered for a compiler type, whether it
// is new, and a function that sets its element schema once analyzed (a no-op for
// a known array).
//
// @evidence contracts/common.md#principled-implementation The array is registered before its element is explored so a recursive array finds itself.
// @evidence contracts/common.md#clear-and-simple-design One lookup, one construction and one closure.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The value hook is explicit.
// @evidence contracts/common.md#meaningful-documentation The doc states the three results.
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

// EmplaceTuple returns the tuple type registered for a compiler type, whether it
// is new, and a function that sets its elements once analyzed (a no-op for a
// known tuple).
//
// @evidence contracts/common.md#principled-implementation The tuple is registered before its elements are explored so a recursive tuple finds itself.
// @evidence contracts/common.md#clear-and-simple-design One lookup, one construction and one closure.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The elements hook is explicit.
// @evidence contracts/common.md#meaningful-documentation The doc states the three results.
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

// SetObjectRecursive sets the object type's recursion flag.
//
// @evidence contracts/common.md#principled-implementation Recursion of objects is decided after analysis, and only the flag is needed.
// @evidence contracts/common.md#clear-and-simple-design One assignment.
// @evidence contracts/common.md#prohibited-implementation-shortcuts No hidden index is allocated for objects.
// @evidence contracts/common.md#meaningful-documentation The doc states that only the flag is set.
func (collection *MetadataCollection) SetObjectRecursive(obj *MetadataObjectType, recursive bool) {
  obj.Recursive = recursive
}

// SetAliasRecursive sets the alias type's recursion flag.
//
// @evidence contracts/common.md#principled-implementation Only the flag is needed for an alias.
// @evidence contracts/common.md#clear-and-simple-design One assignment.
// @evidence contracts/common.md#prohibited-implementation-shortcuts No hidden index is allocated for aliases.
// @evidence contracts/common.md#meaningful-documentation The doc states that only the flag is set.
func (collection *MetadataCollection) SetAliasRecursive(alias *MetadataAliasType, recursive bool) {
  alias.Recursive = recursive
}

// SetArrayRecursive sets the array type's recursion flag. Each call with true
// assigns the next recursive-array index, so call it once per array.
//
// @evidence contracts/common.md#principled-implementation A recursive array needs a stable index for the generated code, handed out in order by the collection.
// @evidence contracts/common.md#clear-and-simple-design One assignment and a counter.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The once-per-array rule is stated; the only caller skips arrays already marked.
// @evidence contracts/common.md#meaningful-documentation The doc states the index allocation.
func (collection *MetadataCollection) SetArrayRecursive(array *MetadataArrayType, recursive bool) {
  array.Recursive = recursive
  if recursive {
    index := collection.recursive_array_index_
    array.Index = &index
    collection.recursive_array_index_++
  }
}

// SetTupleRecursive sets the tuple type's recursion flag. Each call with true
// assigns the next recursive-tuple index, so call it once per tuple.
//
// @evidence contracts/common.md#principled-implementation A recursive tuple needs a stable index for the generated code, handed out in order by the collection.
// @evidence contracts/common.md#clear-and-simple-design One assignment and a counter.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The once-per-tuple rule is stated; the only caller skips tuples already marked.
// @evidence contracts/common.md#meaningful-documentation The doc states the index allocation.
func (collection *MetadataCollection) SetTupleRecursive(tuple *MetadataTupleType, recursive bool) {
  tuple.Recursive = recursive
  if recursive {
    index := collection.recursive_tuple_index_
    tuple.Index = &index
    collection.recursive_tuple_index_++
  }
}

// ToJSON returns the JSON form of the shared types in discovery order.
//
// @evidence contracts/common.md#principled-implementation The ordered accessors give a deterministic list and each type converts itself.
// @evidence contracts/common.md#clear-and-simple-design Four loops over the accessors.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The ordered accessors supply non-nil registered entries; projection adds no further filter.
// @evidence contracts/common.md#meaningful-documentation The doc states the order.
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

// MetadataCollection_replace turns a name into a key by deleting the characters
// that keys cannot carry (`$ & | { } < > [ ] , ` ' " space ? : ;`). Only when
// nothing is left does it spell those characters out instead, so the result is
// never empty for non-empty input.
//
// @evidence contracts/common.md#principled-implementation Deleting the characters keeps keys short and readable, and the fallback keeps a name that consisted only of such characters from vanishing.
// @evidence contracts/common.md#clear-and-simple-design Two loops over one table of replacements.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Distinct names can collapse to one key, which the collection's id allocator resolves with a counter.
// @evidence contracts/common.md#meaningful-documentation The doc states both modes.
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

// metadataCollection_qualifyOpenApiName keeps the dots of a type's own
// namespace qualification and rewrites every other dot in a rendered name.
//
// A dot in a Components Object key is read back as a namespace boundary:
// `JsonDescriptor.cascade` looks the dotted prefix up as a component and
// inherits its description into the child. Deleting a rendered name's angle
// brackets flattens a nested type into the key and used to leave that nested
// type's dots behind, so `Gen<Ns.Inner>` became `GenNs.Inner` and claimed the
// unrelated `GenNs` interface as its parent. The dots of a nested rendering —
// a type argument, a union member — belong to the nested type, never to the
// whole.
//
// Only the leading run of identifier runes is the type's own name, because
// `metadataCollection_exploreName` builds exactly that prefix from the
// declaration's enclosing module blocks. Once a structural rune appears the
// rendering has descended into another type, so no later dot can be this type's
// namespace boundary.
//
// This owns the OpenAPI key space alone. Deliberately not `MetadataCollection_replace`:
// the LLM `$defs` and `reflect.name` key spaces carry no namespace meaning, and
// no consumer reads a parent relation out of them.
func metadataCollection_qualifyOpenApiName(str string) string {
  var builder strings.Builder
  qualified := true
  for _, ch := range str {
    if ch == '.' {
      if qualified {
        builder.WriteRune('.')
      } else {
        builder.WriteString(metadataCollection_qualifySeparator)
      }
      continue
    }
    if metadataCollection_isIdentifierRune(ch) == false {
      qualified = false
    }
    builder.WriteRune(ch)
  }
  return builder.String()
}

// metadataCollection_qualifySeparator renders a flattened nested type's
// boundary. "-" is in the OpenAPI key alphabet and cannot occur in a qualified
// name, so it can never be mistaken for the namespace boundary a dot denotes.
//
// A quoted literal argument can contain "-" of its own, so this alone is not
// injective; `metadataCollection_writeOpenApiQuotedRune` is what keeps a
// literal dot from colliding with it, and `metadataCollection_allocateName`
// bounds whatever remains.
const metadataCollection_qualifySeparator = "-"

// metadataCollection_isIdentifierRune accepts Unicode letters and digits plus
// underscore and dollar for the qualification-prefix scan. It is not a full
// TypeScript identifier grammar. Accepted non-ASCII prefix runes are escaped
// later when producing the final OpenAPI key.
func metadataCollection_isIdentifierRune(ch rune) bool {
  return unicode.IsLetter(ch) ||
    unicode.IsDigit(ch) ||
    ch == '_' ||
    ch == '$'
}

// MetadataCollection_replaceOpenApi converts a metadata full name into an
// OpenAPI Components Object key. Keep this separate from the general metadata
// replacement used by LLM `$defs`, for two reasons. OpenAPI restricts keys to
// an ASCII grammar, while an LLM definition map can own arbitrary JSON object
// keys. And an OpenAPI key is structure a consumer reads back — a dot in one is
// a namespace boundary to `JsonDescriptor.cascade` — so this replacer also owes
// `metadataCollection_qualifyOpenApiName`'s rule, which an LLM key does not.
//
// @evidence contracts/common.md#principled-implementation An OpenAPI key must stay inside an ASCII grammar and a dot in it is read as a namespace boundary, so the quoted literals, the characters outside the alphabet and the dots of nested renderings are escaped or rewritten, and any key that was altered in a way that could collide gets a hash of the original text appended.
// @evidence contracts/common.md#clear-and-simple-design A quoted-content rune pass is followed by namespace qualification, shared character replacement and a final alphabet pass; private helpers own escaping and the optional hash.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The disambiguation rests on the hash and the allocator, and the doc states why this replacer is separate from the general one.
// @evidence contracts/common.md#meaningful-documentation The doc states the reasons for the separate rules.
func MetadataCollection_replaceOpenApi(str string) string {
  var escaped strings.Builder
  var quote rune
  quotedContent := false
  quotedEscape := false
  disambiguate := false
  for _, ch := range str {
    if quote != 0 {
      if quotedEscape {
        disambiguate = metadataCollection_writeOpenApiQuotedRune(&escaped, ch) || disambiguate
        quotedContent = true
        quotedEscape = false
        continue
      }
      if ch == '\\' {
        disambiguate = metadataCollection_writeOpenApiQuotedRune(&escaped, ch) || disambiguate
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
      disambiguate = metadataCollection_writeOpenApiQuotedRune(&escaped, ch) || disambiguate
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
  normalized := MetadataCollection_replace(metadataCollection_qualifyOpenApiName(escaped.String()))
  if len(normalized) == 0 {
    normalized = "_"
    disambiguate = true
  }
  var builder strings.Builder
  for _, ch := range normalized {
    disambiguate = metadataCollection_writeOpenApiNameRune(&builder, ch) || disambiguate
  }
  if disambiguate {
    builder.WriteString(metadataCollection_openApiNameSuffix)
    builder.WriteString(metadataCollection_openApiNameHash(str))
  }
  return builder.String()
}

// metadataCollection_openApiNameSuffix separates an escaped base name from its
// disambiguating hash. It must not be ".": JsonDescriptor.cascade reads a dot
// in a component key as a namespace boundary and inherits the parent
// component's description, so a dotted suffix would present the escaped base as
// a fake parent and pull an unrelated type's description into the escaped
// schema. "-" is in the OpenAPI key alphabet, needs no JSON Pointer or URI
// escaping, and carries no such meaning.
const metadataCollection_openApiNameSuffix = "-x"

func metadataCollection_writeOpenApiNameRune(builder *strings.Builder, ch rune) bool {
  if metadataCollection_isOpenApiNameRune(ch) {
    builder.WriteRune(ch)
    return false
  }
  metadataCollection_writeOpenApiEscapedRune(builder, ch)
  return true
}

// metadataCollection_writeOpenApiQuotedRune writes one rune of a quoted literal
// type argument, such as the `A.B` of `Recursive<"A.B">`.
//
// A dot inside a quote is literal content, never the namespace boundary a
// component key's dot denotes, so it is escaped like every other rune the key
// alphabet cannot carry unaltered. Escaping is also what keeps the rewrite
// injective: an escaped name earns the disambiguating hash of its original
// text, so `Recursive<"A.B">` can neither collide with the `Recursive<"A-B">`
// that `metadataCollection_qualifySeparator` would otherwise have shared, nor
// squat the name `Recursive<"A_x2E_B">` legally owns.
func metadataCollection_writeOpenApiQuotedRune(builder *strings.Builder, ch rune) bool {
  if ch == '.' {
    metadataCollection_writeOpenApiEscapedRune(builder, ch)
    return true
  }
  return metadataCollection_writeOpenApiNameRune(builder, ch)
}

func metadataCollection_writeOpenApiEscapedRune(builder *strings.Builder, ch rune) {
  builder.WriteString("_x")
  builder.WriteString(strings.ToUpper(strconv.FormatInt(int64(ch), 16)))
  builder.WriteByte('_')
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
  return metadataCollection_getFullNameOf(checker, typ, nil)
}

// metadataCollection_getFullNameOf carries the types whose name is still being
// composed on the current path. A recursive type graph reaches the same *Type
// again before its name is finished: `type Rec<T> = T extends Date ? string : T
// extends (infer U)[] ? Rec<U>[] : never` instantiated at `Date | Node[]`
// resolves to the union `string | Rec<Node>[]`, whose array member is a
// reference whose sole type argument is that very union. Walking union member ->
// array reference -> type argument returns to the union, so the unguarded walk
// never terminates and overflows the plugin's stack instead of naming the type
// (#2331). A type reached a second time on one path is therefore named by its
// own symbol with its arguments left unexpanded -- the recursion's placeholder,
// `Array<string | Array>` for the example above -- and a symbol-less one by the
// anonymous marker the collection already allocates unique names from. Expanding
// the checker's elided rendering there instead would name every such component
// after a several-hundred-character structural dump.
func metadataCollection_getFullNameOf(
  checker *nativechecker.Checker,
  typ *nativechecker.Type,
  visiting map[*nativechecker.Type]bool,
) string {
  if checker == nil || typ == nil {
    return "__type"
  }
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
  if visiting[typ] {
    if symbol != nil {
      return metadataCollection_getName(symbol)
    }
    return "__type"
  }
  rendered := metadataCollection_sanitizeName(checker.TypeToString(typ))
  if symbol == nil {
    if typ.IsUnion() || typ.IsIntersection() {
      joiner := " | "
      if typ.IsIntersection() {
        joiner = " & "
      }
      children := typ.Types()
      names := make([]string, 0, len(children))
      visiting = metadataCollection_markVisiting(visiting, typ)
      for _, child := range children {
        names = append(names, metadataCollection_getFullNameOf(checker, child, visiting))
      }
      delete(visiting, typ)
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
  visiting = metadataCollection_markVisiting(visiting, typ)
  defer delete(visiting, typ)
  if name == "Promise" {
    return metadataCollection_getFullNameOf(checker, generic[0], visiting)
  }
  names := make([]string, 0, len(generic))
  for _, child := range generic {
    names = append(names, metadataCollection_getFullNameOf(checker, child, visiting))
  }
  return name + "<" + strings.Join(names, ", ") + ">"
}

func metadataCollection_markVisiting(
  visiting map[*nativechecker.Type]bool,
  typ *nativechecker.Type,
) map[*nativechecker.Type]bool {
  if visiting == nil {
    visiting = map[*nativechecker.Type]bool{}
  }
  visiting[typ] = true
  return visiting
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
