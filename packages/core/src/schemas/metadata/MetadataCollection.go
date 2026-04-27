package metadata

import (
	"fmt"
	"strings"
)

type MetadataCollection struct {
	options MetadataCollectionOptions

	objects      map[string]*MetadataObjectType
	objectUnions map[string][]*MetadataObjectType
	aliases      map[string]*MetadataAliasType
	arrays       map[string]*MetadataArrayType
	tuples       map[string]*MetadataTupleType
	names        map[string]map[string]string

	objectOrder []string
	aliasOrder  []string
	arrayOrder  []string
	tupleOrder  []string
	unionOrder  []string

	objectIndex         int
	recursiveArrayIndex int
	recursiveTupleIndex int
}

type MetadataCollectionOptions struct {
	Replace func(string) string
}

type MetadataAliasEmplaceResult struct {
	Alias *MetadataAliasType
	New   bool
	Set   func(*MetadataSchema)
}

type MetadataArrayEmplaceResult struct {
	Array *MetadataArrayType
	New   bool
	Set   func(*MetadataSchema)
}

type MetadataTupleEmplaceResult struct {
	Tuple *MetadataTupleType
	New   bool
	Set   func([]*MetadataSchema)
}

func NewMetadataCollection(options ...MetadataCollectionOptions) *MetadataCollection {
	var opt MetadataCollectionOptions
	if len(options) != 0 {
		opt = options[0]
	}
	return &MetadataCollection{
		options:      opt,
		objects:      map[string]*MetadataObjectType{},
		objectUnions: map[string][]*MetadataObjectType{},
		aliases:      map[string]*MetadataAliasType{},
		arrays:       map[string]*MetadataArrayType{},
		tuples:       map[string]*MetadataTupleType{},
		names:        map[string]map[string]string{},
	}
}

func (m *MetadataCollection) Clone() *MetadataCollection {
	output := NewMetadataCollection(m.options)
	for k, v := range m.objects {
		output.objects[k] = v
	}
	for k, v := range m.objectUnions {
		output.objectUnions[k] = append([]*MetadataObjectType(nil), v...)
	}
	for k, v := range m.aliases {
		output.aliases[k] = v
	}
	for k, v := range m.arrays {
		output.arrays[k] = v
	}
	for k, v := range m.tuples {
		output.tuples[k] = v
	}
	for k, v := range m.names {
		next := map[string]string{}
		for kk, vv := range v {
			next[kk] = vv
		}
		output.names[k] = next
	}
	output.objectOrder = append([]string(nil), m.objectOrder...)
	output.aliasOrder = append([]string(nil), m.aliasOrder...)
	output.arrayOrder = append([]string(nil), m.arrayOrder...)
	output.tupleOrder = append([]string(nil), m.tupleOrder...)
	output.unionOrder = append([]string(nil), m.unionOrder...)
	output.objectIndex = m.objectIndex
	output.recursiveArrayIndex = m.recursiveArrayIndex
	output.recursiveTupleIndex = m.recursiveTupleIndex
	return output
}

func (m *MetadataCollection) Aliases() []*MetadataAliasType {
	return valuesByOrder(m.aliasOrder, m.aliases)
}

func (m *MetadataCollection) Objects() []*MetadataObjectType {
	return valuesByOrder(m.objectOrder, m.objects)
}

func (m *MetadataCollection) Unions() [][]*MetadataObjectType {
	output := make([][]*MetadataObjectType, 0, len(m.unionOrder))
	for _, key := range m.unionOrder {
		output = append(output, append([]*MetadataObjectType(nil), m.objectUnions[key]...))
	}
	return output
}

func (m *MetadataCollection) Arrays() []*MetadataArrayType {
	return valuesByOrder(m.arrayOrder, m.arrays)
}

func (m *MetadataCollection) Tuples() []*MetadataTupleType {
	return valuesByOrder(m.tupleOrder, m.tuples)
}

func (m *MetadataCollection) GetUnionIndex(meta *MetadataSchema) int {
	names := make([]string, 0, len(meta.Objects))
	for _, obj := range meta.Objects {
		names = append(names, obj.Type.Name)
	}
	key := strings.Join(names, " | ")
	if _, ok := m.objectUnions[key]; !ok {
		types := make([]*MetadataObjectType, 0, len(meta.Objects))
		for _, obj := range meta.Objects {
			types = append(types, obj.Type)
		}
		m.objectUnions[key] = types
		m.unionOrder = append(m.unionOrder, key)
	}
	for i, candidate := range m.unionOrder {
		if candidate == key {
			return i
		}
	}
	return -1
}

func (m *MetadataCollection) Emplace(typeKey any, rawName string, description *string, jsDocTags []JsDocTagInfo) (*MetadataObjectType, bool) {
	key := collectionKey(typeKey)
	if old := m.objects[key]; old != nil {
		return old, false
	}
	id := m.getName(key, rawName)
	obj := CreateMetadataObjectType(MetadataObjectTypeProps{
		Name:        id,
		Properties:  []*MetadataProperty{},
		Description: description,
		JsDocTags:   jsDocTags,
		Validated:   false,
		Index:       m.objectIndex,
		Nullables:   []bool{},
	})
	m.objectIndex++
	m.objects[key] = obj
	m.objectOrder = append(m.objectOrder, key)
	return obj, true
}

func (m *MetadataCollection) EmplaceAlias(typeKey any, rawName string, description *string, jsDocTags []JsDocTagInfo) MetadataAliasEmplaceResult {
	key := collectionKey(typeKey)
	if old := m.aliases[key]; old != nil {
		return MetadataAliasEmplaceResult{Alias: old, New: false, Set: func(*MetadataSchema) {}}
	}
	alias := CreateMetadataAliasType(MetadataAliasTypeProps{
		Name:        m.getName(key, rawName),
		Description: description,
		Nullables:   []bool{},
		JsDocTags:   jsDocTags,
	})
	m.aliases[key] = alias
	m.aliasOrder = append(m.aliasOrder, key)
	return MetadataAliasEmplaceResult{Alias: alias, New: true, Set: func(meta *MetadataSchema) { alias.Value = meta }}
}

func (m *MetadataCollection) EmplaceArray(typeKey any, rawName string) MetadataArrayEmplaceResult {
	key := collectionKey(typeKey)
	if old := m.arrays[key]; old != nil {
		return MetadataArrayEmplaceResult{Array: old, New: false, Set: func(*MetadataSchema) {}}
	}
	array := CreateMetadataArrayType(MetadataArrayTypeProps{
		Name:      m.getName(key, rawName),
		Nullables: []bool{},
	})
	m.arrays[key] = array
	m.arrayOrder = append(m.arrayOrder, key)
	return MetadataArrayEmplaceResult{Array: array, New: true, Set: func(meta *MetadataSchema) { array.Value = meta }}
}

func (m *MetadataCollection) EmplaceTuple(typeKey any, rawName string) MetadataTupleEmplaceResult {
	key := collectionKey(typeKey)
	if old := m.tuples[key]; old != nil {
		return MetadataTupleEmplaceResult{Tuple: old, New: false, Set: func([]*MetadataSchema) {}}
	}
	tuple := CreateMetadataTupleType(MetadataTupleTypeProps{
		Name:      m.getName(key, rawName),
		Nullables: []bool{},
	})
	m.tuples[key] = tuple
	m.tupleOrder = append(m.tupleOrder, key)
	return MetadataTupleEmplaceResult{Tuple: tuple, New: true, Set: func(elements []*MetadataSchema) { tuple.Elements = elements }}
}

func (m *MetadataCollection) SetObjectRecursive(obj *MetadataObjectType, recursive bool) {
	obj.Recursive = recursive
}

func (m *MetadataCollection) SetAliasRecursive(alias *MetadataAliasType, recursive bool) {
	alias.Recursive = recursive
}

func (m *MetadataCollection) SetArrayRecursive(array *MetadataArrayType, recursive bool) {
	array.Recursive = recursive
	if recursive {
		index := m.recursiveArrayIndex
		array.Index = &index
		m.recursiveArrayIndex++
	}
}

func (m *MetadataCollection) SetTupleRecursive(tuple *MetadataTupleType, recursive bool) {
	tuple.Recursive = recursive
	if recursive {
		index := m.recursiveTupleIndex
		tuple.Index = &index
		m.recursiveTupleIndex++
	}
}

func (m *MetadataCollection) ToJSON() MetadataComponentsJSON {
	return (&MetadataComponents{
		Aliases: m.Aliases(),
		Objects: m.Objects(),
		Arrays:  m.Arrays(),
		Tuples:  m.Tuples(),
	}).ToJSON()
}

func (m *MetadataCollection) getName(typeKey string, rawName string) string {
	name := rawName
	if m.options.Replace != nil {
		name = m.options.Replace(rawName)
	}
	duplicates := m.names[name]
	if duplicates == nil {
		duplicates = map[string]string{}
		m.names[name] = duplicates
	}
	if old := duplicates[typeKey]; old != "" {
		return old
	}
	addicted := name
	if len(duplicates) != 0 {
		addicted = fmt.Sprintf("%s.o%d", name, len(duplicates))
	}
	duplicates[typeKey] = addicted
	return addicted
}

func MetadataCollectionReplace(str string) string {
	replaced := str
	for _, pair := range metadataCollectionReplacers {
		replaced = strings.ReplaceAll(replaced, pair[0], "")
	}
	if replaced != "" {
		return replaced
	}
	for _, pair := range metadataCollectionReplacers {
		str = strings.ReplaceAll(str, pair[0], pair[1])
	}
	return str
}

func MetadataCollectionEscape(str string) string {
	for _, pair := range metadataCollectionReplacers {
		if pair[1] != "" {
			str = strings.ReplaceAll(str, pair[1], pair[0])
		}
	}
	return str
}

var metadataCollectionReplacers = [][2]string{
	{"$", "_dollar_"},
	{"&", "_and_"},
	{"|", "_or_"},
	{"{", "_blt_"},
	{"}", "_bgt_"},
	{"<", "_lt_"},
	{">", "_gt_"},
	{"[", "_alt_"},
	{"]", "_agt_"},
	{",", "_comma_"},
	{"`", "_backquote_"},
	{"'", "_singlequote_"},
	{"\"", "_doublequote_"},
	{" ", "_space_"},
	{"?", "_question_"},
	{":", "_colon_"},
	{";", "_semicolon_"},
}

func collectionKey(value any) string {
	return fmt.Sprintf("%#v", value)
}
