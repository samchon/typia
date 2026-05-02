package metadata

import (
  "fmt"
  "reflect"
  "sort"
  "strings"
)

type IMetadataSchema struct {
  Any       bool
  Required  bool
  Optional  bool
  Nullable  bool
  Functions []*IMetadataSchema_IFunction

  Atomics   []IMetadataSchema_IAtomic
  Constants []IMetadataSchema_IConstant
  Templates []IMetadataSchema_ITemplate
  Escaped   *IMetadataSchema_IEscaped

  Rest    *IMetadataSchema
  Arrays  []IMetadataSchema_IReference
  Tuples  []IMetadataSchema_IReference
  Objects []IMetadataSchema_IReference
  Aliases []IMetadataSchema_IReference

  Natives []IMetadataSchema_IReference
  Sets    []IMetadataSchema_ISet
  Maps    []IMetadataSchema_IMap
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

  name_                        string
  parent_resolved_             bool
  Union_index                  *int
  Fixed_                       *int
  Boolean_literal_intersected_ *bool
  is_sequence_                 *bool
}

func MetadataSchema_create(props MetadataSchema) *MetadataSchema {
  return &MetadataSchema{
    Any:       props.Any,
    Required:  props.Required,
    Optional:  props.Optional,
    Nullable:  props.Nullable,
    Functions: props.Functions,

    Escaped:   props.Escaped,
    Atomics:   props.Atomics,
    Constants: props.Constants,
    Templates: props.Templates,

    Rest:    props.Rest,
    Arrays:  props.Arrays,
    Tuples:  props.Tuples,
    Objects: props.Objects,
    Aliases: props.Aliases,

    Natives: props.Natives,
    Sets:    props.Sets,
    Maps:    props.Maps,
  }
}

func MetadataSchema_initialize(parentResolved ...bool) *MetadataSchema {
  resolved := false
  if len(parentResolved) > 0 {
    resolved = parentResolved[0]
  }
  meta := MetadataSchema_create(MetadataSchema{
    Any:       false,
    Nullable:  false,
    Required:  true,
    Optional:  false,
    Escaped:   nil,
    Constants: []*MetadataConstant{},
    Atomics:   []*MetadataAtomic{},
    Templates: []*MetadataTemplate{},
    Arrays:    []*MetadataArray{},
    Tuples:    []*MetadataTuple{},
    Objects:   []*MetadataObject{},
    Aliases:   []*MetadataAlias{},
    Functions: []*MetadataFunction{},
    Rest:      nil,
    Natives:   []*MetadataNative{},
    Sets:      []*MetadataSet{},
    Maps:      []*MetadataMap{},
  })
  meta.parent_resolved_ = resolved
  return meta
}

func (obj *MetadataSchema) ToJSON() *IMetadataSchema {
  output := &IMetadataSchema{
    Any:      obj.Any,
    Required: obj.Required,
    Optional: obj.Optional,
    Nullable: obj.Nullable,
  }
  for _, f := range obj.Functions {
    json := f.ToJSON()
    output.Functions = append(output.Functions, &json)
  }
  for _, a := range obj.Atomics {
    output.Atomics = append(output.Atomics, a.ToJSON())
  }
  for _, c := range obj.Constants {
    output.Constants = append(output.Constants, c.ToJSON())
  }
  for _, tpl := range obj.Templates {
    output.Templates = append(output.Templates, tpl.ToJSON())
  }
  if obj.Escaped != nil {
    escaped := obj.Escaped.ToJSON()
    output.Escaped = &escaped
  }
  if obj.Rest != nil {
    output.Rest = obj.Rest.ToJSON()
  }
  for _, array := range obj.Arrays {
    output.Arrays = append(output.Arrays, array.ToJSON())
  }
  for _, tuple := range obj.Tuples {
    output.Tuples = append(output.Tuples, tuple.ToJSON())
  }
  for _, object := range obj.Objects {
    output.Objects = append(output.Objects, object.ToJSON())
  }
  for _, alias := range obj.Aliases {
    output.Aliases = append(output.Aliases, alias.ToJSON())
  }
  for _, native := range obj.Natives {
    output.Natives = append(output.Natives, native.ToJSON())
  }
  for _, set := range obj.Sets {
    output.Sets = append(output.Sets, set.ToJSON())
  }
  for _, m := range obj.Maps {
    output.Maps = append(output.Maps, m.ToJSON())
  }
  return output
}

func MetadataSchema_from(meta *IMetadataSchema, dict IMetadataDictionary) *MetadataSchema {
  functions := make([]*MetadataFunction, 0, len(meta.Functions))
  for _, f := range meta.Functions {
    functions = append(functions, MetadataFunction_from(*f, dict))
  }
  constants := make([]*MetadataConstant, 0, len(meta.Constants))
  for _, c := range meta.Constants {
    constants = append(constants, MetadataConstant_from(c))
  }
  atomics := make([]*MetadataAtomic, 0, len(meta.Atomics))
  for _, a := range meta.Atomics {
    atomics = append(atomics, MetadataAtomic_from(a))
  }
  templates := make([]*MetadataTemplate, 0, len(meta.Templates))
  for _, tpl := range meta.Templates {
    templates = append(templates, MetadataTemplate_from(tpl, dict))
  }

  var escaped *MetadataEscaped
  if meta.Escaped != nil {
    escaped = MetadataEscaped_from(*meta.Escaped, dict)
  }
  var rest *MetadataSchema
  if meta.Rest != nil {
    rest = MetadataSchema_from(meta.Rest, dict)
  }

  arrays := make([]*MetadataArray, 0, len(meta.Arrays))
  for _, ref := range meta.Arrays {
    typ := dict.Arrays[ref.Name]
    if typ == nil {
      panic(fmt.Sprintf("Error on Metadata.from(): failed to find array %q.", ref.Name))
    }
    arrays = append(arrays, MetadataArray_create(MetadataArray{Type: typ, Tags: cloneTagMatrix(ref.Tags)}))
  }
  tuples := make([]*MetadataTuple, 0, len(meta.Tuples))
  for _, ref := range meta.Tuples {
    typ := dict.Tuples[ref.Name]
    if typ == nil {
      panic(fmt.Sprintf("Error on Metadata.from(): failed to find tuple %q.", ref.Name))
    }
    tuples = append(tuples, MetadataTuple_create(MetadataTuple{Type: typ, Tags: cloneTagMatrix(ref.Tags)}))
  }
  objects := make([]*MetadataObject, 0, len(meta.Objects))
  for _, ref := range meta.Objects {
    found := dict.Objects[ref.Name]
    if found == nil {
      panic(fmt.Sprintf("Error on Metadata.from(): failed to find object %q.", ref.Name))
    }
    objects = append(objects, MetadataObject_create(MetadataObject{Type: found, Tags: cloneTagMatrix(ref.Tags)}))
  }
  aliases := make([]*MetadataAlias, 0, len(meta.Aliases))
  for _, ref := range meta.Aliases {
    typ := dict.Aliases[ref.Name]
    if typ == nil {
      panic(fmt.Sprintf("Error on Metadata.from(): failed to find alias %q.", ref.Name))
    }
    aliases = append(aliases, MetadataAlias_create(MetadataAlias{Type: typ, Tags: cloneTagMatrix(ref.Tags)}))
  }
  natives := make([]*MetadataNative, 0, len(meta.Natives))
  for _, native := range meta.Natives {
    natives = append(natives, MetadataNative_create(MetadataNative{Name: native.Name, Tags: cloneTagMatrix(native.Tags)}))
  }
  sets := make([]*MetadataSet, 0, len(meta.Sets))
  for _, set := range meta.Sets {
    sets = append(sets, MetadataSet_create(MetadataSet{
      Value: MetadataSchema_from(set.Value, dict),
      Tags:  cloneTagMatrix(set.Tags),
    }))
  }
  maps := make([]*MetadataMap, 0, len(meta.Maps))
  for _, m := range meta.Maps {
    maps = append(maps, MetadataMap_create(MetadataMap{
      Key:   MetadataSchema_from(m.Key, dict),
      Value: MetadataSchema_from(m.Value, dict),
      Tags:  cloneTagMatrix(m.Tags),
    }))
  }

  return MetadataSchema_create(MetadataSchema{
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
  })
}

func (obj *MetadataSchema) GetName() string {
  if obj.name_ == "" {
    obj.name_ = metadataSchema_getName(obj)
  }
  return obj.name_
}

func (obj *MetadataSchema) Empty() bool {
  return obj.Bucket() == 0 || obj.Size() == 0
}

func (obj *MetadataSchema) Size() int {
  size := 0
  if obj.Any {
    size++
  }
  if obj.Escaped != nil {
    size++
  }
  if obj.Rest != nil {
    size += obj.Rest.Size()
  }
  size += len(obj.Templates)
  size += len(obj.Atomics)
  for _, c := range obj.Constants {
    size += len(c.Values)
  }
  size += len(obj.Arrays) + len(obj.Tuples) + len(obj.Natives) + len(obj.Maps) + len(obj.Sets)
  size += len(obj.Objects) + len(obj.Functions) + len(obj.Aliases)
  return size
}

func (obj *MetadataSchema) Bucket() int {
  size := 0
  if obj.Any {
    size++
  }
  if obj.Escaped != nil {
    size++
  }
  if len(obj.Templates) != 0 {
    size++
  }
  if len(obj.Atomics) != 0 {
    size++
  }
  if len(obj.Constants) != 0 {
    size++
  }
  if obj.Rest != nil {
    size += obj.Rest.Size()
  }
  if len(obj.Arrays) != 0 {
    size++
  }
  if len(obj.Tuples) != 0 {
    size++
  }
  if len(obj.Natives) != 0 {
    size++
  }
  if len(obj.Sets) != 0 {
    size++
  }
  if len(obj.Maps) != 0 {
    size++
  }
  if len(obj.Objects) != 0 {
    size++
  }
  if len(obj.Functions) != 0 {
    size++
  }
  if len(obj.Aliases) != 0 {
    size++
  }
  return size
}

func (obj *MetadataSchema) IsSequence() bool {
  if obj.is_sequence_ != nil {
    return *obj.is_sequence_
  }
  exists := func(tags [][]IMetadataTypeTag) bool {
    for _, row := range tags {
      for _, t := range row {
        if t.Kind != "sequence" {
          continue
        }
        schema, ok := t.Schema.(map[string]any)
        if ok == false {
          continue
        }
        if _, ok := schema["x-protobuf-sequence"].(float64); ok {
          return true
        }
        if _, ok := schema["x-protobuf-sequence"].(int); ok {
          return true
        }
      }
    }
    return false
  }
  value := anyOf(obj.Atomics, func(atomic *MetadataAtomic) bool { return exists(atomic.Tags) }) &&
    anyOf(obj.Constants, func(c *MetadataConstant) bool {
      return anyOf(c.Values, func(v *MetadataConstantValue) bool { return exists(v.Tags) })
    }) &&
    anyOf(obj.Templates, func(tpl *MetadataTemplate) bool { return exists(tpl.Tags) }) &&
    anyOf(obj.Arrays, func(array *MetadataArray) bool { return exists(array.Tags) }) &&
    anyOf(obj.Objects, func(object *MetadataObject) bool { return exists(object.Tags) }) &&
    anyOf(obj.Natives, func(native *MetadataNative) bool { return native.Name == "Uint8Array" && exists(native.Tags) })
  obj.is_sequence_ = &value
  return value
}

func (obj *MetadataSchema) IsConstant() bool {
  count := 0
  if len(obj.Constants) != 0 {
    count = 1
  }
  return obj.Bucket() == count
}

func (obj *MetadataSchema) IsRequired() bool {
  return obj.Required == true && obj.Optional == false
}

func (obj *MetadataSchema) IsUnionBucket() bool {
  size := obj.Bucket()
  emended := size
  if len(obj.Atomics) != 0 && len(obj.Constants) != 0 {
    emended = size - 1
  }
  return emended > 1
}

func (obj *MetadataSchema) GetSoleLiteral() *string {
  if obj.Size() == 1 &&
    len(obj.Constants) == 1 &&
    obj.Constants[0].Type == "string" &&
    len(obj.Constants[0].Values) == 1 {
    if value, ok := obj.Constants[0].Values[0].Value.(string); ok {
      return &value
    }
  }
  return nil
}

func (obj *MetadataSchema) IsSoleLiteral() bool {
  return obj.GetSoleLiteral() != nil
}

func (obj *MetadataSchema) IsParentResolved() bool {
  return obj.parent_resolved_
}

func MetadataSchema_intersects(x *MetadataSchema, y *MetadataSchema) bool {
  if x.Any || y.Any {
    return true
  }
  if x.IsRequired() == false && y.IsRequired() == false {
    return true
  }
  if x.Nullable && y.Nullable {
    return true
  }
  if len(x.Functions) != 0 && len(y.Functions) != 0 {
    return true
  }
  if len(x.Arrays) != 0 && len(y.Arrays) != 0 {
    return true
  }
  if len(x.Tuples) != 0 && len(y.Tuples) != 0 {
    return true
  }
  if len(x.Objects) != 0 && len(y.Objects) != 0 {
    return true
  }
  if len(x.Aliases) != 0 && len(y.Aliases) != 0 {
    return true
  }
  if anyOf(x.Natives, func(xn *MetadataNative) bool {
    return anyOf(y.Natives, func(yn *MetadataNative) bool { return xn == yn })
  }) {
    return true
  }
  if x.Escaped != nil && y.Escaped != nil {
    return MetadataSchema_intersects(x.Escaped.Original, y.Escaped.Original) ||
      MetadataSchema_intersects(x.Escaped.Returns, y.Escaped.Returns)
  }
  for _, atomic := range x.Atomics {
    if anyOf(y.Atomics, func(ya *MetadataAtomic) bool { return atomic.Type == ya.Type }) {
      return true
    }
    if anyOf(y.Constants, func(yc *MetadataConstant) bool { return atomic.Type == yc.Type }) {
      return true
    }
  }
  for _, constant := range x.Constants {
    if anyOf(y.Atomics, func(elem *MetadataAtomic) bool { return elem.Type == constant.Type }) {
      return true
    }
    var opposite *MetadataConstant
    for _, elem := range y.Constants {
      if elem.Type == constant.Type {
        opposite = elem
        break
      }
    }
    if opposite == nil {
      continue
    }
    values := map[string]struct{}{}
    for _, v := range constant.Values {
      values[fmt.Sprint(v.Value)] = struct{}{}
    }
    for _, v := range opposite.Values {
      values[fmt.Sprint(v.Value)] = struct{}{}
    }
    if len(values) != len(constant.Values)+len(opposite.Values) {
      return true
    }
  }
  if len(x.Templates) != 0 && anyOf(y.Atomics, func(ya *MetadataAtomic) bool { return ya.Type == "string" }) {
    return true
  }
  if len(y.Templates) != 0 && anyOf(x.Atomics, func(xa *MetadataAtomic) bool { return xa.Type == "string" }) {
    return true
  }
  return false
}

func MetadataSchema_covers(x *MetadataSchema, y *MetadataSchema, levelAndEscaped ...any) bool {
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
  if escaped == false {
    if x.Escaped == nil && y.Escaped != nil {
      return false
    }
    if x.Escaped != nil && y.Escaped != nil &&
      (MetadataSchema_covers(x.Escaped.Original, y.Escaped.Original, level, true) == false ||
        MetadataSchema_covers(x.Escaped.Returns, y.Escaped.Returns, level, true) == false) {
      return false
    }
  }
  if level == 0 {
    for _, ya := range y.Arrays {
      if anyOf(x.Arrays, func(xa *MetadataArray) bool {
        return MetadataSchema_covers(xa.Type.Value, ya.Type.Value, level+1)
      }) == false {
        return false
      }
    }
    for _, yt := range y.Tuples {
      if len(yt.Type.Elements) != 0 && anyOf(x.Tuples, func(xt *MetadataTuple) bool {
        if len(xt.Type.Elements) < len(yt.Type.Elements) {
          return false
        }
        for i := len(yt.Type.Elements); i < len(xt.Type.Elements); i++ {
          if MetadataSchema_covers(xt.Type.Elements[i], yt.Type.Elements[i-len(yt.Type.Elements)], level+1) == false {
            return false
          }
        }
        return true
      }) == false {
        return false
      }
    }
  }
  for _, yo := range y.Objects {
    if anyOf(x.Objects, func(xo *MetadataObject) bool {
      return MetadataObjectType_covers(xo.Type, yo.Type)
    }) == false {
      return false
    }
  }
  for _, yd := range y.Aliases {
    if anyOf(x.Aliases, func(xd *MetadataAlias) bool { return xd.Type.Name == yd.Type.Name }) == false {
      return false
    }
  }
  for _, yn := range y.Natives {
    if anyOf(x.Natives, func(xn *MetadataNative) bool { return xn == yn }) == false {
      return false
    }
  }
  for _, ys := range y.Sets {
    if anyOf(x.Sets, func(xs *MetadataSet) bool { return MetadataSchema_covers(xs.Value, ys.Value) }) == false {
      return false
    }
  }
  if anyOf(y.Atomics, func(ya *MetadataAtomic) bool {
    return anyOf(x.Atomics, func(xa *MetadataAtomic) bool { return xa.Type == ya.Type }) == false
  }) {
    return false
  }
  for _, yc := range y.Constants {
    if anyOf(x.Atomics, func(atom *MetadataAtomic) bool { return yc.Type == atom.Type }) {
      continue
    }
    var xc *MetadataConstant
    for _, elem := range x.Constants {
      if elem.Type == yc.Type {
        xc = elem
        break
      }
    }
    if xc == nil {
      return false
    }
    for _, yv := range yc.Values {
      if anyOf(xc.Values, func(xv *MetadataConstantValue) bool { return reflect.DeepEqual(xv.Value, yv.Value) }) == false {
        return false
      }
    }
  }
  if len(x.Functions) == 0 && len(y.Functions) != 0 {
    return false
  }
  return true
}

func MetadataSchema_merge(x *MetadataSchema, y *MetadataSchema) *MetadataSchema {
  output := MetadataSchema_create(MetadataSchema{
    Any:       x.Any || y.Any,
    Nullable:  x.Nullable || y.Nullable,
    Required:  x.Required && y.Required,
    Optional:  x.Optional || y.Optional,
    Functions: firstNonEmpty(x.Functions, y.Functions),
    Escaped:   mergeEscaped(x.Escaped, y.Escaped),
    Atomics:   append([]*MetadataAtomic{}, x.Atomics...),
    Constants: append([]*MetadataConstant{}, x.Constants...),
    Templates: append([]*MetadataTemplate{}, x.Templates...),
    Rest:      mergeRest(x.Rest, y.Rest),
    Arrays:    append([]*MetadataArray{}, x.Arrays...),
    Tuples:    append([]*MetadataTuple{}, x.Tuples...),
    Objects:   append([]*MetadataObject{}, x.Objects...),
    Aliases:   append([]*MetadataAlias{}, x.Aliases...),
    Natives:   append([]*MetadataNative{}, x.Natives...),
    Sets:      append([]*MetadataSet{}, x.Sets...),
    Maps:      append([]*MetadataMap{}, x.Maps...),
  })
  mergeTagged(&output.Atomics, y.Atomics, func(a, b *MetadataAtomic) bool { return a.Type == b.Type }, func(v *MetadataAtomic) *[][]IMetadataTypeTag { return &v.Tags })
  mergeTagged(&output.Arrays, y.Arrays, func(a, b *MetadataArray) bool { return a.Type.Name == b.Type.Name }, func(v *MetadataArray) *[][]IMetadataTypeTag { return &v.Tags })
  mergeTagged(&output.Tuples, y.Tuples, func(a, b *MetadataTuple) bool { return a.Type.Name == b.Type.Name }, func(v *MetadataTuple) *[][]IMetadataTypeTag { return &v.Tags })
  mergeTagged(&output.Objects, y.Objects, func(a, b *MetadataObject) bool { return a.Type.Name == b.Type.Name }, func(v *MetadataObject) *[][]IMetadataTypeTag { return &v.Tags })
  mergeTagged(&output.Aliases, y.Aliases, func(a, b *MetadataAlias) bool { return a.Type.Name == b.Type.Name }, func(v *MetadataAlias) *[][]IMetadataTypeTag { return &v.Tags })
  mergeTagged(&output.Natives, y.Natives, func(a, b *MetadataNative) bool { return a.Name == b.Name }, func(v *MetadataNative) *[][]IMetadataTypeTag { return &v.Tags })
  mergeTagged(&output.Sets, y.Sets, func(a, b *MetadataSet) bool { return a.Value.GetName() == b.Value.GetName() }, func(v *MetadataSet) *[][]IMetadataTypeTag { return &v.Tags })
  mergeTagged(&output.Maps, y.Maps, func(a, b *MetadataMap) bool {
    return a.Key.GetName() == b.Key.GetName() && a.Value.GetName() == b.Value.GetName()
  }, func(v *MetadataMap) *[][]IMetadataTypeTag { return &v.Tags })
  for _, constant := range y.Constants {
    var target *MetadataConstant
    for _, elem := range output.Constants {
      if elem.Type == constant.Type {
        target = elem
        break
      }
    }
    if target == nil {
      target = MetadataConstant_create(MetadataConstant{Type: constant.Type, Values: []*MetadataConstantValue{}})
      output.Constants = append(output.Constants, target)
    }
    for _, value := range constant.Values {
      if anyOf(target.Values, func(elem *MetadataConstantValue) bool { return reflect.DeepEqual(elem.Value, value.Value) }) == false {
        target.Values = append(target.Values, value)
      }
    }
  }
  return output
}

func MetadataSchema_unalias(w *MetadataSchema) *MetadataSchema {
  visited := map[*MetadataSchema]struct{}{}
  for w.Size() == 1 && w.Nullable == false && w.IsRequired() && len(w.Aliases) == 1 {
    if _, ok := visited[w]; ok {
      break
    }
    visited[w] = struct{}{}
    w = w.Aliases[0].Type.Value
  }
  return w
}

func metadataSchema_getName(metadata *MetadataSchema) string {
  if metadata.Any {
    return "any"
  }
  elements := []string{}
  if metadata.Nullable {
    elements = append(elements, "null")
  }
  if metadata.IsRequired() == false {
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
  for _, m := range metadata.Maps {
    elements = append(elements, m.GetName())
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
  return "(" + strings.Join(elements, " | ") + ")"
}

func cloneTagMatrix(input [][]IMetadataTypeTag) [][]IMetadataTypeTag {
  if input == nil {
    return nil
  }
  output := make([][]IMetadataTypeTag, len(input))
  for i, row := range input {
    output[i] = append([]IMetadataTypeTag{}, row...)
  }
  return output
}

func taggedName(base string, tags [][]IMetadataTypeTag) string {
  if len(tags) == 0 {
    return base
  }
  if len(tags) == 1 {
    row := []string{base}
    for _, tag := range tags[0] {
      row = append(row, tag.Name)
    }
    return "(" + strings.Join(row, " & ") + ")"
  }
  rows := make([]string, 0, len(tags))
  for _, row := range tags {
    names := make([]string, 0, len(row))
    for _, tag := range row {
      names = append(names, tag.Name)
    }
    str := strings.Join(names, " & ")
    if len(row) == 1 {
      rows = append(rows, str)
    } else {
      rows = append(rows, "("+str+")")
    }
  }
  return "(" + base + " & (" + strings.Join(rows, " | ") + "))"
}

func safeMetadataName(meta *MetadataSchema) string {
  if meta == nil {
    return "unknown"
  }
  return meta.GetName()
}

func anyOf[T any](input []T, pred func(T) bool) bool {
  for _, elem := range input {
    if pred(elem) {
      return true
    }
  }
  return false
}

func firstNonEmpty[T any](x []T, y []T) []T {
  if len(x) != 0 {
    return x
  }
  return y
}

func mergeEscaped(x *MetadataEscaped, y *MetadataEscaped) *MetadataEscaped {
  if x != nil && y != nil {
    return MetadataEscaped_create(MetadataEscaped{
      Original: MetadataSchema_merge(x.Original, y.Original),
      Returns:  MetadataSchema_merge(x.Returns, y.Returns),
    })
  }
  if x != nil {
    return x
  }
  return y
}

func mergeRest(x *MetadataSchema, y *MetadataSchema) *MetadataSchema {
  if x != nil && y != nil {
    return MetadataSchema_merge(x, y)
  }
  if x != nil {
    return x
  }
  return y
}

func mergeTagged[T any](container *[]T, opposite []T, equals func(T, T) bool, getter func(T) *[][]IMetadataTypeTag) {
  for _, elem := range opposite {
    var equal T
    found := false
    for _, x := range *container {
      if equals(x, elem) {
        equal = x
        found = true
        break
      }
    }
    if found == false {
      *container = append(*container, elem)
      continue
    }
    matrix := make([][]string, 0)
    for _, tags := range *getter(equal) {
      names := make([]string, 0, len(tags))
      for _, tag := range tags {
        names = append(names, tag.Name)
      }
      sort.Strings(names)
      matrix = append(matrix, names)
    }
    for _, tags := range *getter(elem) {
      names := make([]string, 0, len(tags))
      for _, tag := range tags {
        names = append(names, tag.Name)
      }
      sort.Strings(names)
      if anyOf(matrix, func(row []string) bool { return stringSliceEqual(row, names) }) {
        continue
      }
      target := getter(equal)
      *target = append(*target, tags)
    }
  }
}

func stringSliceEqual(x []string, y []string) bool {
  if len(x) != len(y) {
    return false
  }
  for i := range x {
    if x[i] != y[i] {
      return false
    }
  }
  return true
}
