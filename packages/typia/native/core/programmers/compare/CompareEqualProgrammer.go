package compare

import (
  "fmt"
  "math"
  "strconv"
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
  nativeiterate "github.com/samchon/typia/packages/typia/native/core/programmers/iterate"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type compareEqualProgrammerNamespace struct{}

var CompareEqualProgrammer = compareEqualProgrammerNamespace{}

type CompareEqualProgrammer_IConfig struct {
  Cover bool
}

type CompareEqualProgrammer_IProps struct {
  Context nativecontext.ITypiaContext
  Modulo  *shimast.Node
  Type    *shimchecker.Type
  Config  CompareEqualProgrammer_IConfig
}

type compareEqualProgrammerGenerator struct {
  Config     CompareEqualProgrammer_IConfig
  Functional bool
  Recursive  bool
  Counter    int
  // Member-resolution checkers (`_ui<index>`) emitted on demand for the object
  // unions that need the is-match ladder, keyed by the object's collection index.
  Matchers     []string
  MatcherIndex map[int]bool
}

var compareEqualProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (compareEqualProgrammerNamespace) Write(props CompareEqualProgrammer_IProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(compareEqualProgrammer_factory, props.Context.Emit)
  method := nativehelpers.ModuloMethodText(props.Modulo)
  collection := schemametadata.NewMetadataCollection()
  result := nativefactories.MetadataFactory.Analyze(nativefactories.MetadataFactory_IProps{
    Checker: props.Context.Checker,
    Options: nativefactories.MetadataFactory_IOptions{
      Escape:   false,
      Constant: true,
      Absorb:   true,
      Methods:  true,
      Validate: func(next struct {
        Metadata *schemametadata.MetadataSchema
        Explore  nativefactories.MetadataFactory_IExplore
        Top      *schemametadata.MetadataSchema
      }) []string {
        return compareEqualProgrammer_validate(next.Metadata, next.Metadata == next.Top)
      },
    },
    Components: collection,
    Type:       props.Type,
  })
  if result.Success == false {
    panic(nativecontext.TransformerError_from(struct {
      Code   string
      Errors []nativecontext.TransformerError_MetadataFactory_IError
    }{
      Code:   method,
      Errors: compareEqualProgrammer_errors(result.Errors),
    }))
  }

  generator := &compareEqualProgrammerGenerator{
    Config:       props.Config,
    Functional:   nativehelpers.OptionPredicator.Functional(props.Context.Options),
    Recursive:    nativeinternal.FeatureProgrammer.CollectionRecursive(collection),
    MatcherIndex: map[int]bool{},
  }
  body := generator.schema(result.Data, "x", "y")
  statements := []string{}
  for _, object := range collection.Objects() {
    statements = append(statements, generator.objectFunction(object))
  }
  for _, array := range collection.Arrays() {
    if array.Recursive {
      statements = append(statements, generator.arrayFunction(array))
    }
  }
  for _, tuple := range collection.Tuples() {
    if tuple.Recursive {
      statements = append(statements, generator.tupleFunction(tuple))
    }
  }
  // The member matchers are collected last because every generation step above
  // may request one. They are `const` arrow functions in the same scope as the
  // `_eo`/`_ea`/`_et` helpers and are only ever called after this IIFE returns,
  // so declaring them at the end is free of temporal-dead-zone hazards — the
  // same placement `is` uses for the `_io` checkers it appends after `_cu`.
  statements = append(statements, generator.Matchers...)
  if generator.Recursive {
    statements = append(statements, "return (x, y) => { const _vctx = {}; return "+body+"; };")
  } else {
    statements = append(statements, "return (x, y) => "+body+";")
  }
  return f.NewIdentifier("(() => { " + strings.Join(statements, " ") + " })()")
}

func compareEqualProgrammer_validate(metadata *schemametadata.MetadataSchema, top bool) []string {
  if metadata == nil {
    return nil
  }
  output := []string{}
  if metadata.Any {
    output = append(output, "unable to compare any")
  }
  // A function-typed property is a method: it carries no comparable data, so it
  // is ignored during comparison (and an `equals` method triggers delegation).
  // Only a top-level function type — which has nothing else to compare — is
  // rejected.
  if top && len(metadata.Functions) != 0 {
    output = append(output, "unable to compare Function")
  }
  if len(metadata.Sets) != 0 {
    output = append(output, "unable to compare Set")
  }
  if len(metadata.Maps) != 0 {
    output = append(output, "unable to compare Map")
  }
  for _, native := range metadata.Natives {
    if native.Name == "WeakSet" {
      output = append(output, "unable to compare WeakSet")
    } else if native.Name == "WeakMap" {
      output = append(output, "unable to compare WeakMap")
    }
  }
  return output
}

func (g *compareEqualProgrammerGenerator) schema(metadata *schemametadata.MetadataSchema, x string, y string) string {
  if metadata == nil {
    return g.same(x, y)
  }
  metadata = schemametadata.MetadataSchema_unalias(metadata)
  branches := []string{}
  for _, constant := range metadata.Constants {
    for _, value := range constant.Values {
      literal := compareEqualProgrammer_literal(value.Value, constant.Type)
      branches = append(branches, g.and(g.same(x, literal), g.same(y, literal)))
    }
  }
  for _, atomic := range metadata.Atomics {
    branches = append(branches, g.atomic(atomic.Type, x, y))
  }
  if len(metadata.Templates) != 0 {
    branches = append(branches, g.and(g.typeof(x, "string"), g.and(g.typeof(y, "string"), g.same(x, y))))
  }
  for _, native := range metadata.Natives {
    branches = append(branches, g.native(native.Name, x, y))
  }
  for _, tuple := range metadata.Tuples {
    branches = append(branches, g.tuple(tuple, x, y))
  }
  for _, array := range metadata.Arrays {
    branches = append(branches, g.array(array, x, y))
  }
  // A union of two or more object types must discriminate: route each operand
  // to exactly one member and compare within that single member. A flat OR of
  // member comparators lets a wrong member's comparator match spuriously — its
  // literal discriminant is satisfied by the always-present `x[k] === y[k]`
  // branch and its absent payload keys compare `undefined === undefined`. The
  // discrimination reuses the shared UnionPredicator specialization the sibling
  // programmers (is/clone/classify/...) route through, so `equals` agrees with
  // `is` on which member a value is. A union no discriminant can split (every
  // distinguishing key optional, e.g. `{ a?: number } | { b?: string }`) routes
  // through the first-is-match ladder instead — never a flat OR, which admits
  // the same spurious match through absent keys comparing
  // `undefined === undefined` (issue #2225).
  if len(metadata.Objects) >= 2 {
    expr := g.objectUnion(metadata.Objects, x, y)
    if guard := g.notNatives(metadata.Natives, x, y); guard != "" {
      expr = g.and(guard, expr)
    }
    branches = append(branches, expr)
  } else {
    for _, object := range metadata.Objects {
      branches = append(branches, g.objectFlatBranch(object.Type, metadata.Natives, x, y))
    }
  }
  for _, alias := range metadata.Aliases {
    branches = append(branches, g.schema(alias.Type.Value, x, y))
  }
  if metadata.Escaped != nil {
    branches = append(branches, g.schema(metadata.Escaped.Original, x, y))
  }
  if metadata.Rest != nil {
    branches = append(branches, g.schema(metadata.Rest, x, y))
  }
  if len(branches) == 0 {
    return g.same(x, y)
  }
  return g.or(append([]string{g.same(x, y)}, branches...)...)
}

func (g *compareEqualProgrammerGenerator) atomic(typ string, x string, y string) string {
  return g.and(g.typeof(x, typ), g.and(g.typeof(y, typ), g.same(x, y)))
}

func (g *compareEqualProgrammerGenerator) native(name string, x string, y string) string {
  switch name {
  case "Date":
    return g.and(g.instanceof(x, name), g.and(g.instanceof(y, name), g.same(g.call(x, "getTime"), g.call(y, "getTime"))))
  case "RegExp":
    return g.and(g.instanceof(x, name), g.and(g.instanceof(y, name), g.and(g.same(g.access(x, "source"), g.access(y, "source")), g.same(g.access(x, "flags"), g.access(y, "flags")))))
  case "ArrayBuffer", "SharedArrayBuffer":
    return g.and(g.instanceof(x, name), g.and(g.instanceof(y, name), g.bytes(g.newBytes(x), g.newBytes(y))))
  case "DataView":
    left := fmt.Sprintf("new Uint8Array(%s.buffer, %s.byteOffset, %s.byteLength)", g.wrap(x), g.wrap(x), g.wrap(x))
    right := fmt.Sprintf("new Uint8Array(%s.buffer, %s.byteOffset, %s.byteLength)", g.wrap(y), g.wrap(y), g.wrap(y))
    return g.and(g.instanceof(x, name), g.and(g.instanceof(y, name), g.bytes(left, right)))
  case "Boolean", "BigInt", "Number", "String":
    return g.and(g.instanceof(x, name), g.and(g.instanceof(y, name), g.same(g.call(x, "valueOf"), g.call(y, "valueOf"))))
  default:
    if compareEqualProgrammer_typedArray(name) {
      return g.and(g.instanceof(x, name), g.and(g.instanceof(y, name), g.bytes(x, y)))
    }
    return g.same(x, y)
  }
}

func (g *compareEqualProgrammerGenerator) array(array *schemametadata.MetadataArray, x string, y string) string {
  if array.Type.Recursive {
    return g.arrayCall(array.Type, x, y)
  }
  return g.arrayInline(array.Type.Value, x, y)
}

func (g *compareEqualProgrammerGenerator) arrayInline(value *schemametadata.MetadataSchema, x string, y string) string {
  elem := g.local("elem")
  index := g.local("i")
  next := g.schema(value, elem, g.index(y, index))
  return g.and(g.isArray(x), g.and(g.isArray(y), g.and(g.same(g.access(x, "length"), g.access(y, "length")), fmt.Sprintf("%s.every((%s, %s) => %s)", g.wrap(x), elem, index, next))))
}

func (g *compareEqualProgrammerGenerator) tuple(tuple *schemametadata.MetadataTuple, x string, y string) string {
  if tuple.Type.Recursive {
    return g.tupleCall(tuple.Type, x, y)
  }
  return g.tupleInline(tuple.Type, x, y)
}

func (g *compareEqualProgrammerGenerator) tupleInline(tuple *schemametadata.MetadataTupleType, x string, y string) string {
  fixed := len(tuple.Elements)
  var rest *schemametadata.MetadataSchema
  if fixed != 0 && tuple.Elements[fixed-1].Rest != nil {
    rest = tuple.Elements[fixed-1].Rest
    fixed--
  }
  checks := []string{
    g.isArray(x),
    g.isArray(y),
    g.same(g.access(x, "length"), g.access(y, "length")),
  }
  if rest == nil {
    // An omitted optional trailing element makes the tuple's length a range
    // [required, fixed] — exactly the gate `is` emits. A hard `=== fixed`
    // rejects a value `is` accepts and breaks reflexivity of `equals`; the
    // per-element `x[i] === y[i]` prefix already treats both-absent as equal,
    // so only the length gate needs the range. A fully-required tuple keeps
    // its byte-identical `x.length === fixed`.
    required := 0
    allRequired := true
    for i := 0; i < fixed; i++ {
      if tuple.Elements[i].Optional {
        allRequired = false
      } else {
        required++
      }
    }
    if allRequired {
      checks = append(checks, g.same(g.access(x, "length"), strconv.Itoa(fixed)))
    } else {
      length := g.access(x, "length")
      checks = append(checks, fmt.Sprintf("%d <= %s && %d >= %s", required, length, fixed, length))
    }
  } else {
    checks = append(checks, fmt.Sprintf("%s.length >= %d", g.wrap(x), fixed))
  }
  for i := 0; i < fixed; i++ {
    checks = append(checks, g.schema(tuple.Elements[i], g.index(x, strconv.Itoa(i)), g.index(y, strconv.Itoa(i))))
  }
  if rest != nil {
    elem := g.local("elem")
    index := g.local("i")
    right := fmt.Sprintf("%s[%d + %s]", g.wrap(y), fixed, index)
    checks = append(checks, fmt.Sprintf("%s.slice(%d).every((%s, %s) => %s)", g.wrap(x), fixed, elem, index, g.schema(rest, elem, right)))
  }
  return g.and(checks...)
}

func (g *compareEqualProgrammerGenerator) objectCall(object *schemametadata.MetadataObjectType, x string, y string) string {
  if g.Recursive {
    return fmt.Sprintf("_eo%d(%s, %s, _vctx)", object.Index, g.wrap(x), g.wrap(y))
  }
  return fmt.Sprintf("_eo%d(%s, %s)", object.Index, g.wrap(x), g.wrap(y))
}

// objectFlatBranch renders a single object member as a guarded comparator. A
// multi-object union always uses objectUnion's member dispatch instead.
func (g *compareEqualProgrammerGenerator) objectFlatBranch(object *schemametadata.MetadataObjectType, natives []*schemametadata.MetadataNative, x string, y string) string {
  // Guard the object branch against the sibling native instances. `_eo` admits
  // any `typeof === "object" && !Array.isArray` value, so a native (a Date is
  // an object) would be compared by the object's declared keys, which the
  // native lacks — two different Dates then look equal on their absent keys and
  // the OR wrongly accepts. Excluding what a native branch owns makes the arms
  // mutually exclusive, matching the clone/classify ladder whose object arm is
  // unreachable once a native arm matches.
  call := g.objectCall(object, x, y)
  if guard := g.notNatives(natives, x, y); guard != "" {
    call = g.and(guard, call)
  }
  return call
}

// objectUnion renders a discriminated comparison for a union of two or more
// object types. It mirrors the is/clone/classify discrimination: each operand is
// routed to exactly one member, and only when both land on the same member does
// that member's comparator run. This replaces the flat OR whose wrong-member
// comparator could match spuriously.
//
// Routing prefers the shared UnionPredicator discriminants (issue #2214). When
// no discriminant splits the members — every distinguishing key is optional, so
// UnionPredicator yields no specialization, or more than one member is left
// unspecialized — routing falls back to the first-is-match ladder that
// clone/classify/prune reach through Decode_union_object (issue #2225). There is
// no flat-OR fallback: the flat OR is the defect both issues describe.
func (g *compareEqualProgrammerGenerator) objectUnion(objects []*schemametadata.MetadataObject, x string, y string) string {
  types := make([]*schemametadata.MetadataObjectType, 0, len(objects))
  for _, object := range objects {
    types = append(types, object.Type)
  }
  ladder, ok := g.discriminantLadder(types)
  if ok == false {
    ladder = g.matchLadder(types)
  }

  tag := g.local("utag")
  tx := g.local("utx")
  // Dispatch: with the shared member index, run only that member's comparator.
  dispatch := "false"
  for i := len(types) - 1; i >= 0; i-- {
    dispatch = fmt.Sprintf("%s === %d ? %s : %s", tx, types[i].Index, g.objectCall(types[i], "x", "y"), dispatch)
  }
  body := fmt.Sprintf(
    "((x, y) => { const %s = (v) => (%s) ? (%s) : -1; const %s = %s(x); return %s !== -1 && %s === %s(y) && (%s); })(%s, %s)",
    tag, g.isObject("v"), ladder, tx, tag, tx, tx, tag, dispatch, g.wrap(x), g.wrap(y),
  )
  return body
}

// discriminantLadder renders the routing ternary from the shared UnionPredicator
// specialization: `<discriminant of member i> ? <index of member i> : ...`,
// ending in the lone unspecialized member (the unconditional else the
// discriminant ladder leaves) or -1 for "no member". It reports ok=false when
// the members carry no usable discriminant, when more than one member is left
// unspecialized, or when a discriminant value cannot be rendered as a check —
// the caller then routes by is-match instead.
func (g *compareEqualProgrammerGenerator) discriminantLadder(types []*schemametadata.MetadataObjectType) (string, bool) {
  specs := nativehelpers.UnionPredicator.Object(types)
  if len(specs) == 0 {
    return "", false
  }
  specialized := map[*schemametadata.MetadataObjectType]bool{}
  for _, spec := range specs {
    specialized[spec.Object] = true
  }
  remained := []*schemametadata.MetadataObjectType{}
  for _, object := range types {
    if specialized[object] == false {
      remained = append(remained, object)
    }
  }
  if len(remained) > 1 {
    return "", false
  }
  fallback := "-1"
  if len(remained) == 1 {
    fallback = strconv.Itoa(remained[0].Index)
  }
  ladder := fallback
  for i := len(specs) - 1; i >= 0; i-- {
    check, ok := g.discriminant(specs[i], "v")
    if ok == false {
      return "", false
    }
    ladder = fmt.Sprintf("%s ? %d : %s", check, specs[i].Object.Index, ladder)
  }
  return ladder, true
}

// matchLadder renders the routing ternary for a union no discriminant splits:
// the first member the value is-matches wins, exactly as `clone`/`classify`/
// `prune` resolve membership through Decode_union_object's `if (_io0(input))
// return ...; if (_io1(input)) ...` ladder. A value matching no member yields
// -1, which makes `equals` false rather than letting a wrong member's comparator
// decide.
func (g *compareEqualProgrammerGenerator) matchLadder(types []*schemametadata.MetadataObjectType) string {
  calls := make([]string, 0, len(types))
  for _, object := range types {
    // Declared in member order so the emitted matchers read in the same order
    // as the ladder that calls them; the ladder itself is folded back to front.
    calls = append(calls, g.matchCall(object, "v"))
  }
  ladder := "-1"
  for i := len(types) - 1; i >= 0; i-- {
    ladder = fmt.Sprintf("%s ? %d : %s", calls[i], types[i].Index, ladder)
  }
  return ladder
}

// matchCall returns a call to the member's `_ui<index>` matcher, declaring the
// matcher on first request. The index is registered before the body is rendered
// so a recursive member refers to its own matcher instead of recursing forever
// at generation time.
func (g *compareEqualProgrammerGenerator) matchCall(object *schemametadata.MetadataObjectType, v string) string {
  name := fmt.Sprintf("_ui%d", object.Index)
  if g.MatcherIndex[object.Index] == false {
    g.MatcherIndex[object.Index] = true
    g.Matchers = append(g.Matchers, fmt.Sprintf("const %s = (v) => %s;", name, g.matchObject(object, "v")))
  }
  return fmt.Sprintf("%s(%s)", name, g.wrap(v))
}

// matchObject renders the structural is-check of one object member: every
// declared regular key must hold a value of its declared type (an optional key
// may be absent), and every extra key a dynamic index signature declares must
// hold a value of the signature's type. It mirrors the `_io` checkers `is`
// emits, at the abstraction level the rest of this programmer works at — shape
// and typeof, plus structural template patterns. Function-valued properties
// participate in this routing check whenever `is` makes them meaningful; they
// remain excluded from object value comparison after a member is selected. It
// deliberately ignores `typia.tags.*` constraints.
func (g *compareEqualProgrammerGenerator) matchObject(object *schemametadata.MetadataObjectType, v string) string {
  checks := []string{}
  regularKeys := []string{}
  dynamic := []*schemametadata.MetadataProperty{}
  for _, property := range object.Properties {
    if sole := property.Key.GetSoleLiteral(); sole != nil {
      regularKeys = append(regularKeys, *sole)
      checks = append(checks, g.matchSlot(property.Value, g.property(v, *sole)))
    } else {
      dynamic = append(dynamic, property)
    }
  }
  if len(dynamic) != 0 {
    key := g.local("key")
    regularCheck := compareEqualProgrammer_regularKeyCheck(regularKeys)
    conditions := []string{}
    for _, property := range dynamic {
      conditions = append(conditions, g.and(g.dynamicKey(property.Key, key), g.matchSlot(property.Value, g.index(v, key))))
    }
    checks = append(checks, fmt.Sprintf("Object.keys(%s).every((%s) => %s)", g.wrap(v), key, g.or(regularCheck(key), g.or(conditions...))))
  }
  return g.and(checks...)
}

// matchSlot renders the is-check of a value slot — an object property or a tuple
// element — allowing the slot to be absent when it is optional.
func (g *compareEqualProgrammerGenerator) matchSlot(metadata *schemametadata.MetadataSchema, v string) string {
  check := g.match(metadata, v)
  if metadata != nil && metadata.IsRequired() == false {
    return g.or(g.same(v, "undefined"), check)
  }
  return check
}

// match renders the structural is-check of one metadata schema as the OR of its
// buckets, the same bucket walk `schema` compares over. An unconstrained bucket
// (anything the compare feature already rejects, or a bucket carrying no shape
// to test) renders as "true", which keeps the ladder's first-match order the
// deciding factor exactly as it is in `is`.
func (g *compareEqualProgrammerGenerator) match(metadata *schemametadata.MetadataSchema, v string) string {
  if metadata == nil {
    return "true"
  }
  metadata = schemametadata.MetadataSchema_unalias(metadata)
  if metadata.Any {
    return "true"
  }
  branches := []string{}
  if metadata.Nullable {
    branches = append(branches, g.same(v, "null"))
  }
  for _, constant := range metadata.Constants {
    for _, value := range constant.Values {
      branches = append(branches, g.same(v, compareEqualProgrammer_literal(value.Value, constant.Type)))
    }
  }
  for _, atomic := range metadata.Atomics {
    branches = append(branches, g.typeof(v, atomic.Type))
  }
  if len(metadata.Templates) != 0 {
    branches = append(branches, g.and(g.typeof(v, "string"), g.template(metadata.Templates, v)))
  }
  if len(metadata.Functions) != 0 && (g.Functional || metadata.Size() != 1) {
    branches = append(branches, g.typeof(v, "function"))
  }
  for _, native := range metadata.Natives {
    branches = append(branches, g.instanceof(v, native.Name))
  }
  for _, tuple := range metadata.Tuples {
    branches = append(branches, g.matchTuple(tuple.Type, v))
  }
  for _, array := range metadata.Arrays {
    elem := g.local("elem")
    branches = append(branches, g.and(g.isArray(v), fmt.Sprintf("%s.every((%s) => %s)", g.wrap(v), elem, g.match(array.Type.Value, elem))))
  }
  if len(metadata.Objects) != 0 {
    calls := []string{}
    for _, object := range metadata.Objects {
      calls = append(calls, g.matchCall(object.Type, v))
    }
    branches = append(branches, g.and(g.isObject(v), g.or(calls...)))
  }
  for _, alias := range metadata.Aliases {
    branches = append(branches, g.match(alias.Type.Value, v))
  }
  if metadata.Escaped != nil {
    branches = append(branches, g.match(metadata.Escaped.Original, v))
  }
  if metadata.Rest != nil {
    branches = append(branches, g.match(metadata.Rest, v))
  }
  if len(branches) == 0 {
    return "true"
  }
  return g.or(branches...)
}

// matchTuple renders the is-check of a tuple: the array gate, the length range
// an omitted optional trailing element makes legal (the same range `tupleInline`
// compares over), and each element's own check.
func (g *compareEqualProgrammerGenerator) matchTuple(tuple *schemametadata.MetadataTupleType, v string) string {
  fixed := len(tuple.Elements)
  var rest *schemametadata.MetadataSchema
  if fixed != 0 && tuple.Elements[fixed-1].Rest != nil {
    rest = tuple.Elements[fixed-1].Rest
    fixed--
  }
  checks := []string{g.isArray(v)}
  length := g.access(v, "length")
  if rest == nil {
    required := 0
    allRequired := true
    for i := 0; i < fixed; i++ {
      if tuple.Elements[i].Optional {
        allRequired = false
      } else {
        required++
      }
    }
    if allRequired {
      checks = append(checks, g.same(length, strconv.Itoa(fixed)))
    } else {
      checks = append(checks, fmt.Sprintf("%d <= %s && %d >= %s", required, length, fixed, length))
    }
  } else {
    checks = append(checks, fmt.Sprintf("%s >= %d", length, fixed))
  }
  for i := 0; i < fixed; i++ {
    checks = append(checks, g.matchSlot(tuple.Elements[i], g.index(v, strconv.Itoa(i))))
  }
  if rest != nil {
    elem := g.local("elem")
    checks = append(checks, fmt.Sprintf("%s.slice(%d).every((%s) => %s)", g.wrap(v), fixed, elem, g.match(rest, elem)))
  }
  return g.and(checks...)
}

// discriminant renders the routing predicate for one specialized union member,
// matching how `is` decides membership: presence (`v[key] !== undefined`) for a
// key unique to this member, or a value check (literal equality for constants,
// typeof for atomics/templates) for a shared key whose value distinguishes it.
// It returns ok=false for any discriminant value it cannot render as such a
// check, so the caller falls back rather than emit a weaker predicate.
func (g *compareEqualProgrammerGenerator) discriminant(spec nativehelpers.UnionPredicator_ISpecialized, v string) (string, bool) {
  sole := spec.Property.Key.GetSoleLiteral()
  if sole == nil {
    return "", false
  }
  access := g.property(v, *sole)
  if spec.Neighbor == false {
    return fmt.Sprintf("%s !== undefined", g.wrap(access)), true
  }
  meta := schemametadata.MetadataSchema_unalias(spec.Property.Value)
  if meta == nil || meta.Any {
    return "", false
  }
  if len(meta.Objects) != 0 || len(meta.Arrays) != 0 || len(meta.Tuples) != 0 ||
    len(meta.Natives) != 0 || len(meta.Sets) != 0 || len(meta.Maps) != 0 ||
    len(meta.Aliases) != 0 || len(meta.Functions) != 0 || meta.Escaped != nil || meta.Rest != nil {
    return "", false
  }
  checks := []string{}
  if meta.Nullable {
    // A nullable discriminant (e.g. `type: "a" | null`) routes a null value to
    // this member exactly as `is` does, so `equals(null-arm, null-arm)` stays
    // reflexive rather than falling through to no member.
    checks = append(checks, g.same(access, "null"))
  }
  for _, constant := range meta.Constants {
    for _, value := range constant.Values {
      checks = append(checks, g.same(access, compareEqualProgrammer_literal(value.Value, constant.Type)))
    }
  }
  for _, atomic := range meta.Atomics {
    checks = append(checks, g.typeof(access, atomic.Type))
  }
  if len(meta.Templates) != 0 {
    checks = append(checks, g.typeof(access, "string"))
  }
  if len(checks) == 0 {
    return "", false
  }
  return g.or(checks...), true
}

func (g *compareEqualProgrammerGenerator) arrayCall(array *schemametadata.MetadataArrayType, x string, y string) string {
  index := 0
  if array.Index != nil {
    index = *array.Index
  }
  if g.Recursive {
    return fmt.Sprintf("_ea%d(%s, %s, _vctx)", index, g.wrap(x), g.wrap(y))
  }
  return fmt.Sprintf("_ea%d(%s, %s)", index, g.wrap(x), g.wrap(y))
}

func (g *compareEqualProgrammerGenerator) tupleCall(tuple *schemametadata.MetadataTupleType, x string, y string) string {
  index := 0
  if tuple.Index != nil {
    index = *tuple.Index
  }
  if g.Recursive {
    return fmt.Sprintf("_et%d(%s, %s, _vctx)", index, g.wrap(x), g.wrap(y))
  }
  return fmt.Sprintf("_et%d(%s, %s)", index, g.wrap(x), g.wrap(y))
}

func (g *compareEqualProgrammerGenerator) objectFunction(object *schemametadata.MetadataObjectType) string {
  body := g.objectInline(object, "x", "y")
  if g.Recursive {
    if object.Recursive {
      return fmt.Sprintf("const _eo%d = (x, y, _vctx) => { if (x === y) return true; if (!(%s)) return false; %s const _ok = %s; if (!_ok) _set.delete(y); return _ok; };", object.Index, g.objectGuard("x", "y"), g.visit("eo", object.Index), body)
    }
    return fmt.Sprintf("const _eo%d = (x, y, _vctx) => x === y || (%s && %s);", object.Index, g.objectGuard("x", "y"), body)
  }
  return fmt.Sprintf("const _eo%d = (x, y) => x === y || (%s && %s);", object.Index, g.objectGuard("x", "y"), body)
}

func (g *compareEqualProgrammerGenerator) arrayFunction(array *schemametadata.MetadataArrayType) string {
  index := 0
  if array.Index != nil {
    index = *array.Index
  }
  body := g.arrayInline(array.Value, "x", "y")
  if g.Recursive {
    return fmt.Sprintf("const _ea%d = (x, y, _vctx) => { if (x === y) return true; if (!(Array.isArray(x) && Array.isArray(y))) return false; %s const _ok = %s; if (!_ok) _set.delete(y); return _ok; };", index, g.visit("ea", index), body)
  }
  return fmt.Sprintf("const _ea%d = (x, y) => %s;", index, body)
}

func (g *compareEqualProgrammerGenerator) tupleFunction(tuple *schemametadata.MetadataTupleType) string {
  index := 0
  if tuple.Index != nil {
    index = *tuple.Index
  }
  body := g.tupleInline(tuple, "x", "y")
  if g.Recursive {
    return fmt.Sprintf("const _et%d = (x, y, _vctx) => { if (x === y) return true; if (!(Array.isArray(x) && Array.isArray(y))) return false; %s const _ok = %s; if (!_ok) _set.delete(y); return _ok; };", index, g.visit("et", index), body)
  }
  return fmt.Sprintf("const _et%d = (x, y) => %s;", index, body)
}

func (g *compareEqualProgrammerGenerator) objectInline(object *schemametadata.MetadataObjectType, x string, y string) string {
  // Defer to a user-defined `equals(y): boolean` method when the type declares
  // one — the value owns its equality semantics.
  if compareProgrammer_hasMethod(object, "equals") {
    return fmt.Sprintf("%s.equals(%s)", g.wrap(x), g.wrap(y))
  }

  regular := []*schemametadata.MetadataProperty{}
  dynamic := []*schemametadata.MetadataProperty{}
  for _, property := range object.Properties {
    if compareProgrammer_isMethod(property) {
      continue // methods carry no comparable data
    }
    if property.Key.GetSoleLiteral() != nil {
      regular = append(regular, property)
    } else {
      dynamic = append(dynamic, property)
    }
  }

  checks := []string{}
  regularKeys := []string{}
  for _, property := range regular {
    key := *property.Key.GetSoleLiteral()
    regularKeys = append(regularKeys, key)
    left := g.property(x, key)
    right := g.property(y, key)
    expr := g.schema(property.Value, left, right)
    if g.Config.Cover {
      expr = g.or(g.same(right, "undefined"), expr)
    }
    checks = append(checks, expr)
  }

  regularCheck := compareEqualProgrammer_regularKeyCheck(regularKeys)
  if len(dynamic) != 0 {
    key := g.local("key")
    checks = append(checks, g.dynamicKeys(x, y, key, regularCheck, dynamic))
    if g.Config.Cover == false {
      checks = append(checks, fmt.Sprintf("Object.keys(%s).every((%s) => %s || Object.prototype.hasOwnProperty.call(%s, %s))", g.wrap(y), key, regularCheck(key), g.wrap(x), key))
    }
  } else if g.Config.Cover {
    key := g.local("key")
    checks = append(checks, fmt.Sprintf("Object.keys(%s).every((%s) => %s || %s === undefined)", g.wrap(y), key, regularCheck(key), g.index(y, key)))
  }

  return g.and(checks...)
}

func (g *compareEqualProgrammerGenerator) dynamicKeys(x string, y string, key string, regularCheck func(string) string, dynamic []*schemametadata.MetadataProperty) string {
  conditions := []string{}
  for _, property := range dynamic {
    left := g.index(x, key)
    right := g.index(y, key)
    value := g.schema(property.Value, left, right)
    conditions = append(conditions, g.and(g.dynamicKey(property.Key, key), value))
  }
  compare := g.or(conditions...)
  if g.Config.Cover {
    return fmt.Sprintf("Object.keys(%s).every((%s) => %s || %s === undefined || %s)", g.wrap(y), key, regularCheck(key), g.index(y, key), compare)
  }
  return fmt.Sprintf("Object.keys(%s).every((%s) => %s || (Object.prototype.hasOwnProperty.call(%s, %s) && %s))", g.wrap(x), key, regularCheck(key), g.wrap(y), key, compare)
}

func (g *compareEqualProgrammerGenerator) dynamicKey(metadata *schemametadata.MetadataSchema, key string) string {
  metadata = schemametadata.MetadataSchema_unalias(metadata)
  checks := []string{}
  for _, constant := range metadata.Constants {
    for _, value := range constant.Values {
      checks = append(checks, g.same(key, strconv.Quote(fmt.Sprint(value.Value))))
    }
  }
  if len(metadata.Atomics) != 0 || len(metadata.Templates) != 0 {
    checks = append(checks, "true")
  }
  if len(checks) == 0 {
    return "true"
  }
  return g.or(checks...)
}

// template renders the structural membership test shared with the authoritative
// runtime template checker. Compare still ignores typia tag predicates when it
// compares values, but it must retain the template-literal domain while routing
// an object union to a declared member.
func (g *compareEqualProgrammerGenerator) template(templates []*schemametadata.MetadataTemplate, input string) string {
  checks := make([]string, 0, len(templates))
  for _, template := range templates {
    pattern := nativeiterate.TemplateRuntimePattern(template.Row)
    checks = append(checks, fmt.Sprintf("RegExp(%s).test(%s)", strconv.Quote(pattern), g.wrap(input)))
  }
  return g.or(checks...)
}

func (g *compareEqualProgrammerGenerator) visit(kind string, index int) string {
  slot := fmt.Sprintf("_vctx.%s%d", kind, index)
  return fmt.Sprintf("const _map = %s || (%s = new WeakMap()); let _set = _map.get(x); if (_set && _set.has(y)) return true; if (!_set) _map.set(x, (_set = new WeakSet())); _set.add(y);", slot, slot)
}

func (g *compareEqualProgrammerGenerator) bytes(x string, y string) string {
  elem := g.local("byte")
  index := g.local("i")
  return g.and(g.same(g.access(x, "byteLength"), g.access(y, "byteLength")), fmt.Sprintf("%s.every((%s, %s) => %s === %s)", g.wrap(x), elem, index, elem, g.index(y, index)))
}

func (g *compareEqualProgrammerGenerator) objectGuard(x string, y string) string {
  return g.and(g.isObject(x), g.isObject(y))
}

// notNatives builds "neither x nor y is one of the union's native instances",
// so the object branch never claims a value a native branch owns. Empty when
// the union declares no native, keeping the object-only output unchanged.
func (g *compareEqualProgrammerGenerator) notNatives(natives []*schemametadata.MetadataNative, x string, y string) string {
  if len(natives) == 0 {
    return ""
  }
  checks := []string{}
  for _, native := range natives {
    checks = append(checks, "!"+g.wrap(g.instanceof(x, native.Name)))
    checks = append(checks, "!"+g.wrap(g.instanceof(y, native.Name)))
  }
  return g.and(checks...)
}

func (g *compareEqualProgrammerGenerator) isObject(input string) string {
  return fmt.Sprintf("typeof %s === \"object\" && %s !== null && !Array.isArray(%s)", g.wrap(input), g.wrap(input), g.wrap(input))
}

func (g *compareEqualProgrammerGenerator) isArray(input string) string {
  return fmt.Sprintf("Array.isArray(%s)", g.wrap(input))
}

func (g *compareEqualProgrammerGenerator) instanceof(input string, name string) string {
  return fmt.Sprintf("%s instanceof %s", g.wrap(input), name)
}

func (g *compareEqualProgrammerGenerator) typeof(input string, typ string) string {
  return fmt.Sprintf("typeof %s === %s", g.wrap(input), strconv.Quote(typ))
}

func (g *compareEqualProgrammerGenerator) newBytes(input string) string {
  return fmt.Sprintf("new Uint8Array(%s)", g.wrap(input))
}

func (g *compareEqualProgrammerGenerator) call(input string, method string) string {
  return fmt.Sprintf("%s.%s()", g.wrap(input), method)
}

func (g *compareEqualProgrammerGenerator) property(input string, key string) string {
  if compareEqualProgrammer_identifier(key) {
    return g.access(input, key)
  }
  return g.index(input, strconv.Quote(key))
}

func (g *compareEqualProgrammerGenerator) access(input string, key string) string {
  return fmt.Sprintf("%s.%s", g.wrap(input), key)
}

func (g *compareEqualProgrammerGenerator) index(input string, key string) string {
  return fmt.Sprintf("%s[%s]", g.wrap(input), key)
}

func (g *compareEqualProgrammerGenerator) wrap(input string) string {
  if compareEqualProgrammer_simple(input) {
    return input
  }
  return "(" + input + ")"
}

func (g *compareEqualProgrammerGenerator) same(x string, y string) string {
  return fmt.Sprintf("%s === %s", g.wrap(x), g.wrap(y))
}

func (g *compareEqualProgrammerGenerator) and(expressions ...string) string {
  filtered := []string{}
  for _, expr := range expressions {
    if expr != "" && expr != "true" {
      filtered = append(filtered, expr)
    }
  }
  if len(filtered) == 0 {
    return "true"
  }
  return "(" + strings.Join(filtered, " && ") + ")"
}

func (g *compareEqualProgrammerGenerator) or(expressions ...string) string {
  filtered := []string{}
  for _, expr := range expressions {
    if expr == "true" {
      return "true"
    }
    if expr != "" && expr != "false" {
      filtered = append(filtered, expr)
    }
  }
  if len(filtered) == 0 {
    return "false"
  }
  return "(" + strings.Join(filtered, " || ") + ")"
}

func (g *compareEqualProgrammerGenerator) local(prefix string) string {
  next := fmt.Sprintf("_%s%d", prefix, g.Counter)
  g.Counter++
  return next
}

func compareEqualProgrammer_literal(value any, typ string) string {
  switch v := value.(type) {
  case string:
    if typ == "bigint" {
      if strings.HasSuffix(v, "n") {
        return v
      }
      return v + "n"
    }
    return strconv.Quote(v)
  case bool:
    if v {
      return "true"
    }
    return "false"
  case int:
    return fmt.Sprint(v)
  case int32:
    return fmt.Sprint(v)
  case int64:
    return fmt.Sprint(v)
  case uint:
    return fmt.Sprint(v)
  case uint32:
    return fmt.Sprint(v)
  case uint64:
    return fmt.Sprint(v)
  case float32:
    return compareEqualProgrammer_float(float64(v))
  case float64:
    return compareEqualProgrammer_float(v)
  default:
    if typ == "bigint" {
      text := fmt.Sprint(value)
      if strings.HasSuffix(text, "n") {
        return text
      }
      return text + "n"
    }
    return fmt.Sprint(value)
  }
}

func compareEqualProgrammer_float(value float64) string {
  if math.IsInf(value, 1) {
    return "Infinity"
  }
  if math.IsInf(value, -1) {
    return "-Infinity"
  }
  if math.IsNaN(value) {
    return "NaN"
  }
  return strconv.FormatFloat(value, 'f', -1, 64)
}

func compareEqualProgrammer_regularKeyCheck(keys []string) func(string) string {
  quoted := make([]string, 0, len(keys))
  for _, key := range keys {
    quoted = append(quoted, strconv.Quote(key))
  }
  return func(input string) string {
    if len(quoted) == 0 {
      return "false"
    }
    checks := make([]string, 0, len(quoted))
    for _, key := range quoted {
      checks = append(checks, input+" === "+key)
    }
    return "(" + strings.Join(checks, " || ") + ")"
  }
}

func compareEqualProgrammer_typedArray(name string) bool {
  switch name {
  case "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "BigUint64Array",
    "Int8Array", "Int16Array", "Int32Array", "BigInt64Array", "Float32Array", "Float64Array":
    return true
  default:
    return false
  }
}

func compareEqualProgrammer_identifier(str string) bool {
  if str == "" || compareEqualProgrammer_reserved[str] {
    return false
  }
  for i := 0; i < len(str); i++ {
    c := str[i]
    if i == 0 {
      if !(('a' <= c && c <= 'z') || ('A' <= c && c <= 'Z') || c == '_' || c == '$') {
        return false
      }
    } else if !(('a' <= c && c <= 'z') || ('A' <= c && c <= 'Z') || ('0' <= c && c <= '9') || c == '_' || c == '$') {
      return false
    }
  }
  return true
}

func compareEqualProgrammer_simple(str string) bool {
  if compareEqualProgrammer_identifier(str) {
    return true
  }
  for i := 0; i < len(str); i++ {
    c := str[i]
    if !(('a' <= c && c <= 'z') || ('A' <= c && c <= 'Z') || ('0' <= c && c <= '9') || c == '_' || c == '$' || c == '.') {
      return false
    }
  }
  return str != ""
}

var compareEqualProgrammer_reserved = map[string]bool{
  "break":      true,
  "case":       true,
  "catch":      true,
  "class":      true,
  "const":      true,
  "continue":   true,
  "debugger":   true,
  "default":    true,
  "delete":     true,
  "do":         true,
  "else":       true,
  "enum":       true,
  "export":     true,
  "extends":    true,
  "false":      true,
  "finally":    true,
  "for":        true,
  "function":   true,
  "if":         true,
  "import":     true,
  "in":         true,
  "instanceof": true,
  "module":     true,
  "new":        true,
  "null":       true,
  "package":    true,
  "private":    true,
  "protected":  true,
  "return":     true,
  "super":      true,
  "switch":     true,
  "this":       true,
  "throw":      true,
  "true":       true,
  "try":        true,
  "typeof":     true,
  "var":        true,
  "void":       true,
  "while":      true,
  "with":       true,
}

func compareEqualProgrammer_errors(errors []nativefactories.MetadataFactory_IError) []nativecontext.TransformerError_MetadataFactory_IError {
  output := make([]nativecontext.TransformerError_MetadataFactory_IError, 0, len(errors))
  for _, err := range errors {
    output = append(output, nativecontext.TransformerError_MetadataFactory_IError{
      Name: err.Name,
      Explore: nativecontext.TransformerError_MetadataFactory_IExplore{
        Object:    err.Explore.Object,
        Property:  err.Explore.Property,
        Parameter: err.Explore.Parameter,
        Output:    err.Explore.Output,
      },
      Messages: append([]string{}, err.Messages...),
    })
  }
  return output
}
