package metadata

import (
	"fmt"
	"reflect"
	"sort"
)

type MetadataTypeTag struct {
	Target    string         `json:"target,omitempty"`
	Name      string         `json:"name,omitempty"`
	Kind      string         `json:"kind,omitempty"`
	Value     any            `json:"value,omitempty"`
	Validate  string         `json:"validate,omitempty"`
	Exclusive any            `json:"exclusive,omitempty"`
	Schema    map[string]any `json:"schema,omitempty"`
}

type JsDocTagInfo map[string]any

type BigIntValue struct {
	Value string
}

type MetadataSchema struct {
	Any      bool
	Required bool
	Optional bool
	Nullable bool

	Escaped   *MetadataEscaped
	Atomics   []*MetadataAtomic
	Constants []*MetadataConstant
	Templates []*MetadataTemplate

	Rest      *MetadataSchema
	Aliases   []*MetadataAlias
	Arrays    []*MetadataArray
	Tuples    []*MetadataTuple
	Objects   []*MetadataObject
	Functions []*MetadataFunction

	Natives []*MetadataNative
	Sets    []*MetadataSet
	Maps    []*MetadataMap

	UnionIndex                *int
	Fixed                     *int
	BooleanLiteralIntersected *bool
	name                      string
	parentResolved            bool
	isSequence                *bool
}

type MetadataSchemaProps struct {
	Any      bool
	Required bool
	Optional bool
	Nullable bool

	Escaped   *MetadataEscaped
	Atomics   []*MetadataAtomic
	Constants []*MetadataConstant
	Templates []*MetadataTemplate

	Rest      *MetadataSchema
	Aliases   []*MetadataAlias
	Arrays    []*MetadataArray
	Tuples    []*MetadataTuple
	Objects   []*MetadataObject
	Functions []*MetadataFunction

	Natives []*MetadataNative
	Sets    []*MetadataSet
	Maps    []*MetadataMap
}

type MetadataSchemaJSON struct {
	Any       bool                   `json:"any"`
	Required  bool                   `json:"required"`
	Optional  bool                   `json:"optional"`
	Nullable  bool                   `json:"nullable"`
	Functions []MetadataFunctionJSON `json:"functions"`

	Atomics   []MetadataAtomicJSON   `json:"atomics"`
	Constants []MetadataConstantJSON `json:"constants"`
	Templates []MetadataTemplateJSON `json:"templates"`
	Escaped   *MetadataEscapedJSON   `json:"escaped"`

	Rest    *MetadataSchemaJSON     `json:"rest"`
	Arrays  []MetadataReferenceJSON `json:"arrays"`
	Tuples  []MetadataReferenceJSON `json:"tuples"`
	Objects []MetadataReferenceJSON `json:"objects"`
	Aliases []MetadataReferenceJSON `json:"aliases"`

	Natives []MetadataReferenceJSON `json:"natives"`
	Sets    []MetadataSetJSON       `json:"sets"`
	Maps    []MetadataMapJSON       `json:"maps"`
}

type MetadataReferenceJSON struct {
	Name string              `json:"name"`
	Tags [][]MetadataTypeTag `json:"tags"`
}

type MetadataAtomicJSON struct {
	Type string              `json:"type"`
	Tags [][]MetadataTypeTag `json:"tags"`
}

type MetadataConstantJSON struct {
	Type   string                      `json:"type"`
	Values []MetadataConstantValueJSON `json:"values"`
}

type MetadataConstantValueJSON struct {
	Value       any                 `json:"value"`
	Tags        [][]MetadataTypeTag `json:"tags"`
	Description *string             `json:"description,omitempty"`
	JsDocTags   []JsDocTagInfo      `json:"jsDocTags,omitempty"`
}

type MetadataTemplateJSON struct {
	Row  []MetadataSchemaJSON `json:"row"`
	Tags [][]MetadataTypeTag  `json:"tags"`
}

type MetadataEscapedJSON struct {
	Original MetadataSchemaJSON `json:"original"`
	Returns  MetadataSchemaJSON `json:"returns"`
}

type MetadataSetJSON struct {
	Value MetadataSchemaJSON  `json:"value"`
	Tags  [][]MetadataTypeTag `json:"tags"`
}

type MetadataMapJSON struct {
	Key   MetadataSchemaJSON  `json:"key"`
	Value MetadataSchemaJSON  `json:"value"`
	Tags  [][]MetadataTypeTag `json:"tags"`
}

type MetadataFunctionJSON struct {
	Parameters []MetadataParameterJSON `json:"parameters"`
	Output     MetadataSchemaJSON      `json:"output"`
	Async      bool                    `json:"async"`
}

type MetadataParameterJSON struct {
	Name        string             `json:"name"`
	Type        MetadataSchemaJSON `json:"type"`
	Description *string            `json:"description"`
	JsDocTags   []JsDocTagInfo     `json:"jsDocTags"`
}

type MetadataPropertyJSON struct {
	Key         MetadataSchemaJSON `json:"key"`
	Value       MetadataSchemaJSON `json:"value"`
	Description *string            `json:"description"`
	JsDocTags   []JsDocTagInfo     `json:"jsDocTags"`
	Mutability  *string            `json:"mutability,omitempty"`
}

type MetadataObjectTypeJSON struct {
	Name        string                 `json:"name"`
	Properties  []MetadataPropertyJSON `json:"properties"`
	Description *string                `json:"description,omitempty"`
	JsDocTags   []JsDocTagInfo         `json:"jsDocTags"`
	Index       int                    `json:"index"`
	Recursive   bool                   `json:"recursive"`
	Nullables   []bool                 `json:"nullables"`
}

type MetadataAliasTypeJSON struct {
	Name        string             `json:"name"`
	Value       MetadataSchemaJSON `json:"value"`
	Description *string            `json:"description"`
	Recursive   bool               `json:"recursive"`
	JsDocTags   []JsDocTagInfo     `json:"jsDocTags"`
	Nullables   []bool             `json:"nullables"`
}

type MetadataArrayTypeJSON struct {
	Name      string             `json:"name"`
	Value     MetadataSchemaJSON `json:"value"`
	Nullables []bool             `json:"nullables"`
	Recursive bool               `json:"recursive"`
	Index     *int               `json:"index"`
}

type MetadataTupleTypeJSON struct {
	Name      string               `json:"name"`
	Index     *int                 `json:"index"`
	Elements  []MetadataSchemaJSON `json:"elements"`
	Recursive bool                 `json:"recursive"`
	Nullables []bool               `json:"nullables"`
}

type MetadataComponentsJSON struct {
	Objects []MetadataObjectTypeJSON `json:"objects"`
	Aliases []MetadataAliasTypeJSON  `json:"aliases"`
	Arrays  []MetadataArrayTypeJSON  `json:"arrays"`
	Tuples  []MetadataTupleTypeJSON  `json:"tuples"`
}

type MetadataSchemaCollectionJSON struct {
	Schemas    []MetadataSchemaJSON   `json:"schemas"`
	Components MetadataComponentsJSON `json:"components"`
}

func CreateMetadataSchema(props MetadataSchemaProps) *MetadataSchema {
	return &MetadataSchema{
		Any:       props.Any,
		Required:  props.Required,
		Optional:  props.Optional,
		Nullable:  props.Nullable,
		Functions: append([]*MetadataFunction(nil), props.Functions...),
		Escaped:   props.Escaped,
		Atomics:   append([]*MetadataAtomic(nil), props.Atomics...),
		Constants: append([]*MetadataConstant(nil), props.Constants...),
		Templates: append([]*MetadataTemplate(nil), props.Templates...),
		Rest:      props.Rest,
		Arrays:    append([]*MetadataArray(nil), props.Arrays...),
		Tuples:    append([]*MetadataTuple(nil), props.Tuples...),
		Objects:   append([]*MetadataObject(nil), props.Objects...),
		Aliases:   append([]*MetadataAlias(nil), props.Aliases...),
		Natives:   append([]*MetadataNative(nil), props.Natives...),
		Sets:      append([]*MetadataSet(nil), props.Sets...),
		Maps:      append([]*MetadataMap(nil), props.Maps...),
	}
}

func InitializeMetadataSchema(parentResolved ...bool) *MetadataSchema {
	meta := CreateMetadataSchema(MetadataSchemaProps{
		Required:  true,
		Atomics:   []*MetadataAtomic{},
		Constants: []*MetadataConstant{},
		Templates: []*MetadataTemplate{},
		Arrays:    []*MetadataArray{},
		Tuples:    []*MetadataTuple{},
		Objects:   []*MetadataObject{},
		Aliases:   []*MetadataAlias{},
		Functions: []*MetadataFunction{},
		Natives:   []*MetadataNative{},
		Sets:      []*MetadataSet{},
		Maps:      []*MetadataMap{},
	})
	if len(parentResolved) != 0 {
		meta.parentResolved = parentResolved[0]
	}
	return meta
}

func (m *MetadataSchema) ToJSON() MetadataSchemaJSON {
	output := MetadataSchemaJSON{
		Any:       m.Any,
		Required:  m.Required,
		Optional:  m.Optional,
		Nullable:  m.Nullable,
		Functions: make([]MetadataFunctionJSON, 0, len(m.Functions)),
		Atomics:   make([]MetadataAtomicJSON, 0, len(m.Atomics)),
		Constants: make([]MetadataConstantJSON, 0, len(m.Constants)),
		Templates: make([]MetadataTemplateJSON, 0, len(m.Templates)),
		Arrays:    make([]MetadataReferenceJSON, 0, len(m.Arrays)),
		Tuples:    make([]MetadataReferenceJSON, 0, len(m.Tuples)),
		Objects:   make([]MetadataReferenceJSON, 0, len(m.Objects)),
		Aliases:   make([]MetadataReferenceJSON, 0, len(m.Aliases)),
		Natives:   make([]MetadataReferenceJSON, 0, len(m.Natives)),
		Sets:      make([]MetadataSetJSON, 0, len(m.Sets)),
		Maps:      make([]MetadataMapJSON, 0, len(m.Maps)),
	}
	for _, f := range m.Functions {
		output.Functions = append(output.Functions, f.ToJSON())
	}
	for _, a := range m.Atomics {
		output.Atomics = append(output.Atomics, a.ToJSON())
	}
	for _, c := range m.Constants {
		output.Constants = append(output.Constants, c.ToJSON())
	}
	for _, t := range m.Templates {
		output.Templates = append(output.Templates, t.ToJSON())
	}
	if m.Escaped != nil {
		escaped := m.Escaped.ToJSON()
		output.Escaped = &escaped
	}
	if m.Rest != nil {
		rest := m.Rest.ToJSON()
		output.Rest = &rest
	}
	for _, array := range m.Arrays {
		output.Arrays = append(output.Arrays, array.ToJSON())
	}
	for _, tuple := range m.Tuples {
		output.Tuples = append(output.Tuples, tuple.ToJSON())
	}
	for _, object := range m.Objects {
		output.Objects = append(output.Objects, object.ToJSON())
	}
	for _, alias := range m.Aliases {
		output.Aliases = append(output.Aliases, alias.ToJSON())
	}
	for _, native := range m.Natives {
		output.Natives = append(output.Natives, native.ToJSON())
	}
	for _, set := range m.Sets {
		output.Sets = append(output.Sets, set.ToJSON())
	}
	for _, mp := range m.Maps {
		output.Maps = append(output.Maps, mp.ToJSON())
	}
	return output
}

func MetadataSchemaFrom(meta MetadataSchemaJSON, dict *IMetadataDictionary) (*MetadataSchema, error) {
	functions := make([]*MetadataFunction, 0, len(meta.Functions))
	for _, f := range meta.Functions {
		next, err := MetadataFunctionFrom(f, dict)
		if err != nil {
			return nil, err
		}
		functions = append(functions, next)
	}
	templates := make([]*MetadataTemplate, 0, len(meta.Templates))
	for _, tpl := range meta.Templates {
		next, err := MetadataTemplateFrom(tpl, dict)
		if err != nil {
			return nil, err
		}
		templates = append(templates, next)
	}
	var escaped *MetadataEscaped
	if meta.Escaped != nil {
		next, err := MetadataEscapedFrom(*meta.Escaped, dict)
		if err != nil {
			return nil, err
		}
		escaped = next
	}
	var rest *MetadataSchema
	if meta.Rest != nil {
		next, err := MetadataSchemaFrom(*meta.Rest, dict)
		if err != nil {
			return nil, err
		}
		rest = next
	}
	arrays, err := referencesToArrays(meta.Arrays, dict)
	if err != nil {
		return nil, err
	}
	tuples, err := referencesToTuples(meta.Tuples, dict)
	if err != nil {
		return nil, err
	}
	objects, err := referencesToObjects(meta.Objects, dict)
	if err != nil {
		return nil, err
	}
	aliases, err := referencesToAliases(meta.Aliases, dict)
	if err != nil {
		return nil, err
	}
	sets := make([]*MetadataSet, 0, len(meta.Sets))
	for _, set := range meta.Sets {
		value, err := MetadataSchemaFrom(set.Value, dict)
		if err != nil {
			return nil, err
		}
		sets = append(sets, CreateMetadataSet(MetadataSetProps{Value: value, Tags: set.Tags}))
	}
	maps := make([]*MetadataMap, 0, len(meta.Maps))
	for _, mp := range meta.Maps {
		key, err := MetadataSchemaFrom(mp.Key, dict)
		if err != nil {
			return nil, err
		}
		value, err := MetadataSchemaFrom(mp.Value, dict)
		if err != nil {
			return nil, err
		}
		maps = append(maps, CreateMetadataMap(MetadataMapProps{Key: key, Value: value, Tags: mp.Tags}))
	}
	atomics := make([]*MetadataAtomic, 0, len(meta.Atomics))
	for _, atomic := range meta.Atomics {
		atomics = append(atomics, MetadataAtomicFrom(atomic))
	}
	constants := make([]*MetadataConstant, 0, len(meta.Constants))
	for _, constant := range meta.Constants {
		constants = append(constants, MetadataConstantFrom(constant))
	}
	natives := make([]*MetadataNative, 0, len(meta.Natives))
	for _, native := range meta.Natives {
		natives = append(natives, CreateMetadataNative(MetadataNativeProps{Name: native.Name, Tags: native.Tags}))
	}
	return CreateMetadataSchema(MetadataSchemaProps{
		Any:       meta.Any,
		Required:  meta.Required,
		Optional:  meta.Optional,
		Nullable:  meta.Nullable,
		Functions: functions,
		Constants: constants,
		Atomics:   atomics,
		Templates: templates,
		Escaped:   escaped,
		Rest:      rest,
		Arrays:    arrays,
		Tuples:    tuples,
		Objects:   objects,
		Aliases:   aliases,
		Natives:   natives,
		Sets:      sets,
		Maps:      maps,
	}), nil
}

func (m *MetadataSchema) GetName() string {
	if m.name == "" {
		m.name = metadataSchemaName(m)
	}
	return m.name
}

func (m *MetadataSchema) Empty() bool {
	return m.Bucket() == 0 || m.Size() == 0
}

func (m *MetadataSchema) Size() int {
	size := 0
	if m.Any {
		size++
	}
	if m.Escaped != nil {
		size++
	}
	if m.Rest != nil {
		size += m.Rest.Size()
	}
	size += len(m.Templates) + len(m.Atomics) + len(m.Arrays) + len(m.Tuples) + len(m.Natives) + len(m.Maps) + len(m.Sets) + len(m.Objects) + len(m.Functions) + len(m.Aliases)
	for _, constant := range m.Constants {
		size += len(constant.Values)
	}
	return size
}

func (m *MetadataSchema) Bucket() int {
	bucket := 0
	if m.Any {
		bucket++
	}
	if m.Escaped != nil {
		bucket++
	}
	if len(m.Templates) != 0 {
		bucket++
	}
	if len(m.Atomics) != 0 {
		bucket++
	}
	if len(m.Constants) != 0 {
		bucket++
	}
	if m.Rest != nil {
		bucket += m.Rest.Size()
	}
	for _, count := range []int{len(m.Arrays), len(m.Tuples), len(m.Natives), len(m.Sets), len(m.Maps), len(m.Objects), len(m.Functions), len(m.Aliases)} {
		if count != 0 {
			bucket++
		}
	}
	return bucket
}

func (m *MetadataSchema) IsSequence() bool {
	if m.isSequence != nil {
		return *m.isSequence
	}
	exists := func(tags [][]MetadataTypeTag) bool {
		for _, row := range tags {
			for _, tag := range row {
				if tag.Kind != "sequence" {
					continue
				}
				if _, ok := tag.Schema["x-protobuf-sequence"]; ok {
					return true
				}
			}
		}
		return false
	}
	value := anyBy(m.Atomics, func(atomic *MetadataAtomic) bool { return exists(atomic.Tags) }) &&
		anyBy(m.Constants, func(constant *MetadataConstant) bool {
			return anyBy(constant.Values, func(value *MetadataConstantValue) bool { return exists(value.Tags) })
		}) &&
		anyBy(m.Templates, func(template *MetadataTemplate) bool { return exists(template.Tags) }) &&
		anyBy(m.Arrays, func(array *MetadataArray) bool { return exists(array.Tags) }) &&
		anyBy(m.Objects, func(object *MetadataObject) bool { return exists(object.Tags) }) &&
		anyBy(m.Natives, func(native *MetadataNative) bool { return native.Name == "Uint8Array" && exists(native.Tags) })
	m.isSequence = &value
	return value
}

func (m *MetadataSchema) IsConstant() bool {
	one := 0
	if len(m.Constants) != 0 {
		one = 1
	}
	return m.Bucket() == one
}

func (m *MetadataSchema) IsRequired() bool {
	return m.Required && !m.Optional
}

func (m *MetadataSchema) IsUnionBucket() bool {
	size := m.Bucket()
	emended := size
	if len(m.Atomics) != 0 && len(m.Constants) != 0 {
		emended--
	}
	return emended > 1
}

func (m *MetadataSchema) GetSoleLiteral() *string {
	if m.Size() == 1 && len(m.Constants) == 1 && m.Constants[0].Type == "string" && len(m.Constants[0].Values) == 1 {
		if value, ok := m.Constants[0].Values[0].Value.(string); ok {
			return &value
		}
	}
	return nil
}

func (m *MetadataSchema) IsSoleLiteral() bool {
	return m.GetSoleLiteral() != nil
}

func (m *MetadataSchema) IsParentResolved() bool {
	return m.parentResolved
}

func MetadataSchemaIntersects(x *MetadataSchema, y *MetadataSchema) bool {
	if x.Any || y.Any {
		return true
	}
	if !x.IsRequired() && !y.IsRequired() {
		return true
	}
	if x.Nullable && y.Nullable {
		return true
	}
	if len(x.Functions) != 0 && len(y.Functions) != 0 {
		return true
	}
	for _, count := range [][2]int{{len(x.Arrays), len(y.Arrays)}, {len(x.Tuples), len(y.Tuples)}, {len(x.Objects), len(y.Objects)}, {len(x.Aliases), len(y.Aliases)}} {
		if count[0] != 0 && count[1] != 0 {
			return true
		}
	}
	if anyBy(x.Natives, func(xn *MetadataNative) bool {
		return anyBy(y.Natives, func(yn *MetadataNative) bool { return xn == yn })
	}) {
		return true
	}
	if x.Escaped != nil && y.Escaped != nil {
		return MetadataSchemaIntersects(x.Escaped.Original, y.Escaped.Original) || MetadataSchemaIntersects(x.Escaped.Returns, y.Escaped.Returns)
	}
	for _, atomic := range x.Atomics {
		if anyBy(y.Atomics, func(ya *MetadataAtomic) bool { return atomic.Type == ya.Type }) || anyBy(y.Constants, func(yc *MetadataConstant) bool { return atomic.Type == yc.Type }) {
			return true
		}
	}
	for _, constant := range x.Constants {
		if anyBy(y.Atomics, func(elem *MetadataAtomic) bool { return elem.Type == constant.Type }) {
			return true
		}
		for _, opposite := range y.Constants {
			if opposite.Type != constant.Type {
				continue
			}
			seen := map[string]bool{}
			for _, value := range constant.Values {
				seen[fmt.Sprint(value.Value)] = true
			}
			for _, value := range opposite.Values {
				key := fmt.Sprint(value.Value)
				if seen[key] {
					return true
				}
				seen[key] = true
			}
		}
	}
	if len(x.Templates) != 0 && anyBy(y.Atomics, func(ya *MetadataAtomic) bool { return ya.Type == "string" }) {
		return true
	}
	if len(y.Templates) != 0 && anyBy(x.Atomics, func(xa *MetadataAtomic) bool { return xa.Type == "string" }) {
		return true
	}
	return false
}

func MetadataSchemaCovers(x *MetadataSchema, y *MetadataSchema, levelAndEscaped ...any) bool {
	level := 0
	escaped := false
	if len(levelAndEscaped) > 0 {
		if v, ok := levelAndEscaped[0].(int); ok {
			level = v
		}
	}
	if len(levelAndEscaped) > 1 {
		if v, ok := levelAndEscaped[1].(bool); ok {
			escaped = v
		}
	}
	if x == y {
		return false
	}
	if x.Any {
		return true
	}
	if y.Any {
		return false
	}
	if !escaped {
		if x.Escaped == nil && y.Escaped != nil {
			return false
		}
		if x.Escaped != nil && y.Escaped != nil &&
			(!MetadataSchemaCovers(x.Escaped.Original, y.Escaped.Original, level, true) || !MetadataSchemaCovers(x.Escaped.Returns, y.Escaped.Returns, level, true)) {
			return false
		}
	}
	if level == 0 {
		for _, ya := range y.Arrays {
			if !anyBy(x.Arrays, func(xa *MetadataArray) bool { return MetadataSchemaCovers(xa.Type.Value, ya.Type.Value, level+1) }) {
				return false
			}
		}
		for _, yt := range y.Tuples {
			if len(yt.Type.Elements) != 0 && !anyBy(x.Tuples, func(xt *MetadataTuple) bool {
				if len(xt.Type.Elements) < len(yt.Type.Elements) {
					return false
				}
				for i := range yt.Type.Elements {
					xv := xt.Type.Elements[len(yt.Type.Elements)+i-len(yt.Type.Elements)]
					if !MetadataSchemaCovers(xv, yt.Type.Elements[i], level+1) {
						return false
					}
				}
				return true
			}) {
				return false
			}
		}
	}
	for _, yo := range y.Objects {
		if !anyBy(x.Objects, func(xo *MetadataObject) bool { return MetadataObjectTypeCovers(xo.Type, yo.Type) }) {
			return false
		}
	}
	for _, yd := range y.Aliases {
		if !anyBy(x.Aliases, func(xd *MetadataAlias) bool { return xd.Type.Name == yd.Type.Name }) {
			return false
		}
	}
	for _, yn := range y.Natives {
		if !anyBy(x.Natives, func(xn *MetadataNative) bool { return xn == yn }) {
			return false
		}
	}
	for _, ys := range y.Sets {
		if !anyBy(x.Sets, func(xs *MetadataSet) bool { return MetadataSchemaCovers(xs.Value, ys.Value) }) {
			return false
		}
	}
	for _, ya := range y.Atomics {
		if !anyBy(x.Atomics, func(xa *MetadataAtomic) bool { return xa.Type == ya.Type }) {
			return false
		}
	}
	for _, yc := range y.Constants {
		if anyBy(x.Atomics, func(atom *MetadataAtomic) bool { return yc.Type == atom.Type }) {
			continue
		}
		var xc *MetadataConstant
		for _, candidate := range x.Constants {
			if candidate.Type == yc.Type {
				xc = candidate
				break
			}
		}
		if xc == nil {
			return false
		}
		for _, yv := range yc.Values {
			if !anyBy(xc.Values, func(xv *MetadataConstantValue) bool { return reflect.DeepEqual(xv.Value, yv.Value) }) {
				return false
			}
		}
	}
	if len(x.Functions) == 0 && len(y.Functions) != 0 {
		return false
	}
	return true
}

func MetadataSchemaMerge(x *MetadataSchema, y *MetadataSchema) *MetadataSchema {
	output := CreateMetadataSchema(MetadataSchemaProps{
		Any:       x.Any || y.Any,
		Nullable:  x.Nullable || y.Nullable,
		Required:  x.Required && y.Required,
		Optional:  x.Optional || y.Optional,
		Functions: chooseFunctions(x.Functions, y.Functions),
		Escaped:   mergeEscaped(x.Escaped, y.Escaped),
		Atomics:   mergeTaggedTypes(x.Atomics, y.Atomics, func(a, b *MetadataAtomic) bool { return a.Type == b.Type }, func(a *MetadataAtomic) *[][]MetadataTypeTag { return &a.Tags }),
		Constants: append([]*MetadataConstant(nil), x.Constants...),
		Templates: append([]*MetadataTemplate(nil), x.Templates...),
		Rest:      mergeRest(x.Rest, y.Rest),
		Arrays:    mergeTaggedTypes(x.Arrays, y.Arrays, func(a, b *MetadataArray) bool { return a.Type.Name == b.Type.Name }, func(a *MetadataArray) *[][]MetadataTypeTag { return &a.Tags }),
		Tuples:    mergeTaggedTypes(x.Tuples, y.Tuples, func(a, b *MetadataTuple) bool { return a.Type.Name == b.Type.Name }, func(a *MetadataTuple) *[][]MetadataTypeTag { return &a.Tags }),
		Objects:   mergeTaggedTypes(x.Objects, y.Objects, func(a, b *MetadataObject) bool { return a.Type.Name == b.Type.Name }, func(a *MetadataObject) *[][]MetadataTypeTag { return &a.Tags }),
		Aliases:   mergeTaggedTypes(x.Aliases, y.Aliases, func(a, b *MetadataAlias) bool { return a.Type.Name == b.Type.Name }, func(a *MetadataAlias) *[][]MetadataTypeTag { return &a.Tags }),
		Natives:   mergeTaggedTypes(x.Natives, y.Natives, func(a, b *MetadataNative) bool { return a.Name == b.Name }, func(a *MetadataNative) *[][]MetadataTypeTag { return &a.Tags }),
		Sets:      mergeTaggedTypes(x.Sets, y.Sets, func(a, b *MetadataSet) bool { return a.Value.GetName() == b.Value.GetName() }, func(a *MetadataSet) *[][]MetadataTypeTag { return &a.Tags }),
		Maps: mergeTaggedTypes(x.Maps, y.Maps, func(a, b *MetadataMap) bool {
			return a.Key.GetName() == b.Key.GetName() && a.Value.GetName() == b.Value.GetName()
		}, func(a *MetadataMap) *[][]MetadataTypeTag { return &a.Tags }),
	})
	for _, constant := range y.Constants {
		var target *MetadataConstant
		for _, elem := range output.Constants {
			if elem.Type == constant.Type {
				target = elem
				break
			}
		}
		if target == nil {
			target = CreateMetadataConstant(MetadataConstantProps{Type: constant.Type, Values: []*MetadataConstantValue{}})
			output.Constants = append(output.Constants, target)
		}
		for _, value := range constant.Values {
			if !anyBy(target.Values, func(elem *MetadataConstantValue) bool { return reflect.DeepEqual(elem.Value, value.Value) }) {
				target.Values = append(target.Values, value)
			}
		}
	}
	return output
}

func MetadataSchemaUnalias(w *MetadataSchema) *MetadataSchema {
	visited := map[*MetadataSchema]bool{}
	for w.Size() == 1 && !w.Nullable && w.IsRequired() && len(w.Aliases) == 1 {
		if visited[w] {
			break
		}
		visited[w] = true
		w = w.Aliases[0].Type.Value
	}
	return w
}

func metadataSchemaName(metadata *MetadataSchema) string {
	if metadata.Any {
		return "any"
	}
	elements := []string{}
	if metadata.Nullable {
		elements = append(elements, "null")
	}
	if !metadata.IsRequired() {
		elements = append(elements, "undefined")
	}
	for _, atom := range metadata.Atomics {
		elements = append(elements, atom.GetName())
	}
	for _, constant := range metadata.Constants {
		for _, value := range constant.Values {
			elements = append(elements, value.GetName())
		}
	}
	for _, template := range metadata.Templates {
		elements = append(elements, template.GetName())
	}
	for _, native := range metadata.Natives {
		elements = append(elements, native.GetName())
	}
	for _, set := range metadata.Sets {
		elements = append(elements, set.GetName())
	}
	for _, mp := range metadata.Maps {
		elements = append(elements, mp.GetName())
	}
	if metadata.Rest != nil {
		elements = append(elements, "..."+metadata.Rest.GetName())
	}
	for _, tuple := range metadata.Tuples {
		elements = append(elements, tuple.Type.Name)
	}
	for _, array := range metadata.Arrays {
		elements = append(elements, array.GetName())
	}
	for _, object := range metadata.Objects {
		elements = append(elements, object.GetName())
	}
	for _, alias := range metadata.Aliases {
		elements = append(elements, alias.GetName())
	}
	if metadata.Escaped != nil {
		elements = append(elements, metadata.Escaped.GetName())
	}
	if len(elements) == 0 {
		return "unknown"
	}
	if len(elements) == 1 {
		return elements[0]
	}
	sort.Strings(elements)
	return "(" + join(elements, " | ") + ")"
}

func taggedReferenceName(base string, tags [][]MetadataTypeTag) string {
	if len(tags) == 0 {
		return base
	}
	if len(tags) == 1 {
		names := make([]string, 0, len(tags[0])+1)
		names = append(names, base)
		for _, tag := range tags[0] {
			names = append(names, tag.Name)
		}
		return "(" + join(names, " & ") + ")"
	}
	rows := make([]string, 0, len(tags))
	for _, row := range tags {
		names := make([]string, 0, len(row))
		for _, tag := range row {
			names = append(names, tag.Name)
		}
		str := join(names, " & ")
		if len(row) != 1 {
			str = "(" + str + ")"
		}
		rows = append(rows, str)
	}
	return "(" + base + " & (" + join(rows, " | ") + "))"
}

func join(values []string, sep string) string {
	if len(values) == 0 {
		return ""
	}
	output := values[0]
	for _, value := range values[1:] {
		output += sep + value
	}
	return output
}

func referencesToArrays(refs []MetadataReferenceJSON, dict *IMetadataDictionary) ([]*MetadataArray, error) {
	output := make([]*MetadataArray, 0, len(refs))
	for _, ref := range refs {
		found := dict.Arrays[ref.Name]
		if found == nil {
			return nil, fmt.Errorf("Error on Metadata.from(): failed to find array %q", ref.Name)
		}
		output = append(output, CreateMetadataArray(MetadataArrayProps{Type: found, Tags: ref.Tags}))
	}
	return output, nil
}

func referencesToTuples(refs []MetadataReferenceJSON, dict *IMetadataDictionary) ([]*MetadataTuple, error) {
	output := make([]*MetadataTuple, 0, len(refs))
	for _, ref := range refs {
		found := dict.Tuples[ref.Name]
		if found == nil {
			return nil, fmt.Errorf("Error on Metadata.from(): failed to find tuple %q", ref.Name)
		}
		output = append(output, CreateMetadataTuple(MetadataTupleProps{Type: found, Tags: ref.Tags}))
	}
	return output, nil
}

func referencesToObjects(refs []MetadataReferenceJSON, dict *IMetadataDictionary) ([]*MetadataObject, error) {
	output := make([]*MetadataObject, 0, len(refs))
	for _, ref := range refs {
		found := dict.Objects[ref.Name]
		if found == nil {
			return nil, fmt.Errorf("Error on Metadata.from(): failed to find object %q", ref.Name)
		}
		output = append(output, CreateMetadataObject(MetadataObjectProps{Type: found, Tags: ref.Tags}))
	}
	return output, nil
}

func referencesToAliases(refs []MetadataReferenceJSON, dict *IMetadataDictionary) ([]*MetadataAlias, error) {
	output := make([]*MetadataAlias, 0, len(refs))
	for _, ref := range refs {
		found := dict.Aliases[ref.Name]
		if found == nil {
			return nil, fmt.Errorf("Error on Metadata.from(): failed to find alias %q", ref.Name)
		}
		output = append(output, CreateMetadataAlias(MetadataAliasProps{Type: found, Tags: ref.Tags}))
	}
	return output, nil
}

func anyBy[T any](values []T, pred func(T) bool) bool {
	for _, value := range values {
		if pred(value) {
			return true
		}
	}
	return false
}

func chooseFunctions(x []*MetadataFunction, y []*MetadataFunction) []*MetadataFunction {
	if len(x) != 0 {
		return append([]*MetadataFunction(nil), x...)
	}
	return append([]*MetadataFunction(nil), y...)
}

func mergeEscaped(x *MetadataEscaped, y *MetadataEscaped) *MetadataEscaped {
	if x != nil && y != nil {
		return CreateMetadataEscaped(MetadataEscapedProps{
			Original: MetadataSchemaMerge(x.Original, y.Original),
			Returns:  MetadataSchemaMerge(x.Returns, y.Returns),
		})
	}
	if x != nil {
		return x
	}
	return y
}

func mergeRest(x *MetadataSchema, y *MetadataSchema) *MetadataSchema {
	if x != nil && y != nil {
		return MetadataSchemaMerge(x, y)
	}
	if x != nil {
		return x
	}
	return y
}

func mergeTaggedTypes[T any](x []T, y []T, equals func(T, T) bool, getter func(T) *[][]MetadataTypeTag) []T {
	output := append([]T(nil), x...)
	for _, elem := range y {
		var equal T
		found := false
		for _, current := range x {
			if equals(current, elem) {
				equal = current
				found = true
				break
			}
		}
		if !found {
			output = append(output, elem)
			continue
		}
		matrix := tagNameMatrix(*getter(equal))
		for _, tags := range *getter(elem) {
			names := make([]string, 0, len(tags))
			for _, tag := range tags {
				names = append(names, tag.Name)
			}
			sort.Strings(names)
			if !containsStringRow(matrix, names) {
				*getter(equal) = append(*getter(equal), tags)
			}
		}
	}
	return output
}

func tagNameMatrix(tags [][]MetadataTypeTag) [][]string {
	matrix := make([][]string, 0, len(tags))
	for _, row := range tags {
		names := make([]string, 0, len(row))
		for _, tag := range row {
			names = append(names, tag.Name)
		}
		sort.Strings(names)
		matrix = append(matrix, names)
	}
	return matrix
}

func containsStringRow(matrix [][]string, names []string) bool {
	for _, row := range matrix {
		if len(row) != len(names) {
			continue
		}
		same := true
		for i := range row {
			if row[i] != names[i] {
				same = false
				break
			}
		}
		if same {
			return true
		}
	}
	return false
}

func cloneTagMatrix(input [][]MetadataTypeTag) [][]MetadataTypeTag {
	output := make([][]MetadataTypeTag, 0, len(input))
	for _, row := range input {
		output = append(output, append([]MetadataTypeTag(nil), row...))
	}
	return output
}

func cloneJsDocTags(input []JsDocTagInfo) []JsDocTagInfo {
	output := make([]JsDocTagInfo, 0, len(input))
	for _, tag := range input {
		next := JsDocTagInfo{}
		for key, value := range tag {
			next[key] = value
		}
		output = append(output, next)
	}
	return output
}

func cloneIntPtr(input *int) *int {
	if input == nil {
		return nil
	}
	value := *input
	return &value
}

func normalizeTagMatrixFromJSON(input [][]MetadataTypeTag) [][]MetadataTypeTag {
	output := cloneTagMatrix(input)
	for i := range output {
		for j := range output[i] {
			output[i][j].Value = normalizeValueFromJSON(output[i][j].Value)
		}
	}
	return output
}

func normalizeTagMatrixToJSON(input [][]MetadataTypeTag) [][]MetadataTypeTag {
	output := cloneTagMatrix(input)
	for i := range output {
		for j := range output[i] {
			output[i][j].Value = normalizeValueToJSON(output[i][j].Value)
		}
	}
	return output
}

func normalizeValueFromJSON(value any) any {
	if object, ok := value.(map[string]any); ok {
		if object["type"] == "bigint" {
			if text, ok := object["value"].(string); ok {
				return BigIntValue{Value: text}
			}
		}
	}
	return value
}

func normalizeValueToJSON(value any) any {
	if bigint, ok := value.(BigIntValue); ok {
		return map[string]any{"type": "bigint", "value": bigint.Value}
	}
	return value
}

func valuesByAliasJSONOrder(order []MetadataAliasTypeJSON, dict map[string]*MetadataAliasType) []*MetadataAliasType {
	output := make([]*MetadataAliasType, 0, len(order))
	for _, elem := range order {
		output = append(output, dict[elem.Name])
	}
	return output
}

func valuesByObjectJSONOrder(order []MetadataObjectTypeJSON, dict map[string]*MetadataObjectType) []*MetadataObjectType {
	output := make([]*MetadataObjectType, 0, len(order))
	for _, elem := range order {
		output = append(output, dict[elem.Name])
	}
	return output
}

func valuesByArrayJSONOrder(order []MetadataArrayTypeJSON, dict map[string]*MetadataArrayType) []*MetadataArrayType {
	output := make([]*MetadataArrayType, 0, len(order))
	for _, elem := range order {
		output = append(output, dict[elem.Name])
	}
	return output
}

func valuesByTupleJSONOrder(order []MetadataTupleTypeJSON, dict map[string]*MetadataTupleType) []*MetadataTupleType {
	output := make([]*MetadataTupleType, 0, len(order))
	for _, elem := range order {
		output = append(output, dict[elem.Name])
	}
	return output
}

func valuesByOrder[T any](order []string, dict map[string]T) []T {
	output := make([]T, 0, len(order))
	for _, key := range order {
		output = append(output, dict[key])
	}
	return output
}
