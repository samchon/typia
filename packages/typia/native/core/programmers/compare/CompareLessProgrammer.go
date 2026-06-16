package compare

import (
  "fmt"
  "strconv"
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type compareLessProgrammerNamespace struct{}

var CompareLessProgrammer = compareLessProgrammerNamespace{}

type CompareLessProgrammer_IProps struct {
  Context nativecontext.ITypiaContext
  Modulo  *shimast.Node
  Type    *shimchecker.Type
}

type compareLessProgrammerGenerator struct {
  Recursive bool
  Counter   int
}

var compareLessProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

// Write emits an `(x, y) => boolean` predicate that reports whether `x`
// lexicographically precedes `y`. It builds a three-way comparator (negative /
// zero / positive) over the declared structure of the type and returns
// `cmp(x, y) < 0` so that `equal` and `less` together compose into an
// Array.prototype.sort comparator.
func (compareLessProgrammerNamespace) Write(props CompareLessProgrammer_IProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(compareLessProgrammer_factory, props.Context.Emit)
  method := nativehelpers.ModuloMethodText(props.Modulo)
  collection := schemametadata.NewMetadataCollection()
  result := nativefactories.MetadataFactory.Analyze(nativefactories.MetadataFactory_IProps{
    Checker: props.Context.Checker,
    Options: nativefactories.MetadataFactory_IOptions{
      Escape:   false,
      Constant: true,
      Absorb:   true,
      Validate: func(next struct {
        Metadata *schemametadata.MetadataSchema
        Explore  nativefactories.MetadataFactory_IExplore
        Top      *schemametadata.MetadataSchema
      }) []string {
        return compareLessProgrammer_validate(next.Metadata)
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

  generator := &compareLessProgrammerGenerator{
    Recursive: nativeinternal.FeatureProgrammer.CollectionRecursive(collection),
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
  if generator.Recursive {
    statements = append(statements, "return (x, y) => { const _vctx = {}; return ("+body+") < 0; };")
  } else {
    statements = append(statements, "return (x, y) => ("+body+") < 0;")
  }
  return f.NewIdentifier("(() => { " + strings.Join(statements, " ") + " })()")
}

// compareLessProgrammer_validate rejects types that have no sound total order.
func compareLessProgrammer_validate(metadata *schemametadata.MetadataSchema) []string {
  if metadata == nil {
    return nil
  }
  output := []string{}
  if metadata.Any {
    output = append(output, "unable to order any")
  }
  if len(metadata.Functions) != 0 {
    output = append(output, "unable to order Function")
  }
  if len(metadata.Sets) != 0 {
    output = append(output, "unable to order Set")
  }
  if len(metadata.Maps) != 0 {
    output = append(output, "unable to order Map")
  }
  for _, native := range metadata.Natives {
    if compareLessProgrammer_orderableNative(native.Name) == false {
      output = append(output, fmt.Sprintf("unable to order %s", native.Name))
    }
  }
  if len(metadata.Objects) > 1 {
    output = append(output, "unable to order a union of multiple object types")
  }
  return output
}

// schema renders a three-way comparator expression for `metadata` over the two
// operands `x` and `y`.
func (g *compareLessProgrammerGenerator) schema(metadata *schemametadata.MetadataSchema, x string, y string) string {
  if metadata == nil {
    return "0"
  }
  metadata = schemametadata.MetadataSchema_unalias(metadata)
  core := g.core(metadata, x, y)

  // wrap the core comparator with undefined / null ordering when the type
  // admits them: undefined precedes null precedes any present value.
  guards := []string{}
  optional := metadata.IsRequired() == false
  if optional {
    guards = append(guards, fmt.Sprintf("%s === undefined || %s === undefined", g.wrap(x), g.wrap(y)))
  }
  if metadata.Nullable {
    guards = append(guards, fmt.Sprintf("%s === null || %s === null", g.wrap(x), g.wrap(y)))
  }
  if len(guards) == 0 {
    return core
  }
  // rank: undefined(0) < null(1) < value(2); equal ranks fall through to core.
  rank := func(v string) string {
    if optional && metadata.Nullable {
      return fmt.Sprintf("(%s === undefined ? 0 : %s === null ? 1 : 2)", g.wrap(v), g.wrap(v))
    } else if optional {
      return fmt.Sprintf("(%s === undefined ? 0 : 1)", g.wrap(v))
    }
    return fmt.Sprintf("(%s === null ? 0 : 1)", g.wrap(v))
  }
  return fmt.Sprintf("(%s !== %s ? %s - %s : %s)", rank(x), rank(y), rank(x), rank(y), core)
}

// core renders the comparator for the non-null, non-undefined branches.
func (g *compareLessProgrammerGenerator) core(metadata *schemametadata.MetadataSchema, x string, y string) string {
  scalars := g.scalarTypeofs(metadata)
  hasObject := len(metadata.Objects) != 0
  hasArray := len(metadata.Arrays) != 0
  hasTuple := len(metadata.Tuples) != 0
  hasNative := len(metadata.Natives) != 0

  branchCount := len(scalars)
  if hasObject {
    branchCount++
  }
  if hasArray {
    branchCount++
  }
  if hasTuple {
    branchCount++
  }
  if hasNative {
    branchCount += len(metadata.Natives)
  }

  // single homogeneous branch — emit the specific comparator directly.
  if branchCount == 1 {
    if len(scalars) == 1 {
      return g.primitive(x, y)
    }
    if hasObject {
      return g.objectCall(metadata.Objects[0].Type, x, y)
    }
    if hasArray {
      return g.array(metadata.Arrays[0], x, y)
    }
    if hasTuple {
      return g.tuple(metadata.Tuples[0], x, y)
    }
    if hasNative {
      return g.native(metadata.Natives[0].Name, x, y)
    }
  }

  // mixed scalars only (e.g. `string | number`): order by runtime typeof, then
  // by value within the same primitive kind.
  if branchCount == len(scalars) && len(scalars) > 1 {
    return fmt.Sprintf("(%s !== %s ? (%s < %s ? -1 : 1) : %s)",
      g.typeofRank(x), g.typeofRank(y), g.typeofRank(x), g.typeofRank(y), g.primitive(x, y))
  }

  // empty (e.g. `never`-ish) — treat as equal.
  if branchCount == 0 {
    return "0"
  }

  // heterogeneous mix (scalar + container, or container + container) — rank by
  // runtime category, then compare within the matching category.
  return g.mixed(metadata, x, y)
}

// primitive renders the scalar three-way comparator (works for number, string,
// boolean and bigint via the relational operators).
func (g *compareLessProgrammerGenerator) primitive(x string, y string) string {
  return fmt.Sprintf("(%s < %s ? -1 : %s > %s ? 1 : 0)", g.wrap(x), g.wrap(y), g.wrap(x), g.wrap(y))
}

func (g *compareLessProgrammerGenerator) native(name string, x string, y string) string {
  switch name {
  case "Date":
    return g.primitive(g.call(x, "getTime"), g.call(y, "getTime"))
  default:
    if compareEqualProgrammer_typedArray(name) {
      return g.bytes(x, y)
    }
    return "0"
  }
}

// bytes compares two typed arrays / buffers lexicographically by byte.
func (g *compareLessProgrammerGenerator) bytes(x string, y string) string {
  bx := g.local("bx")
  by := g.local("by")
  index := g.local("i")
  length := g.local("n")
  return fmt.Sprintf("(() => { const %s = new Uint8Array(%s), %s = new Uint8Array(%s); const %s = Math.min(%s.length, %s.length); for (let %s = 0; %s < %s; ++%s) if (%s[%s] !== %s[%s]) return %s[%s] < %s[%s] ? -1 : 1; return %s.length - %s.length; })()",
    bx, g.bufferOf(x), by, g.bufferOf(y), length, bx, by, index, index, length, index, bx, index, by, index, bx, index, by, index, bx, by)
}

func (g *compareLessProgrammerGenerator) bufferOf(input string) string {
  return g.wrap(input)
}

func (g *compareLessProgrammerGenerator) array(array *schemametadata.MetadataArray, x string, y string) string {
  if array.Type.Recursive {
    return g.arrayCall(array.Type, x, y)
  }
  return g.arrayInline(array.Type.Value, x, y)
}

func (g *compareLessProgrammerGenerator) arrayInline(value *schemametadata.MetadataSchema, x string, y string) string {
  index := g.local("i")
  length := g.local("n")
  elem := g.schema(value, fmt.Sprintf("%s[%s]", g.wrap(x), index), fmt.Sprintf("%s[%s]", g.wrap(y), index))
  cmp := g.local("c")
  return fmt.Sprintf("(() => { const %s = Math.min(%s.length, %s.length); for (let %s = 0; %s < %s; ++%s) { const %s = %s; if (%s) return %s; } return %s.length - %s.length; })()",
    length, g.wrap(x), g.wrap(y), index, index, length, index, cmp, elem, cmp, cmp, g.wrap(x), g.wrap(y))
}

func (g *compareLessProgrammerGenerator) tuple(tuple *schemametadata.MetadataTuple, x string, y string) string {
  if tuple.Type.Recursive {
    return g.tupleCall(tuple.Type, x, y)
  }
  return g.tupleInline(tuple.Type, x, y)
}

func (g *compareLessProgrammerGenerator) tupleInline(tuple *schemametadata.MetadataTupleType, x string, y string) string {
  fixed := len(tuple.Elements)
  var rest *schemametadata.MetadataSchema
  if fixed != 0 && tuple.Elements[fixed-1].Rest != nil {
    rest = tuple.Elements[fixed-1].Rest
    fixed--
  }
  steps := []string{}
  for i := 0; i < fixed; i++ {
    cmp := g.schema(tuple.Elements[i], g.index(x, strconv.Itoa(i)), g.index(y, strconv.Itoa(i)))
    steps = append(steps, fmt.Sprintf("{ const _c = %s; if (_c) return _c; }", cmp))
  }
  tail := fmt.Sprintf("return %s.length - %s.length;", g.wrap(x), g.wrap(y))
  if rest != nil {
    index := g.local("i")
    length := g.local("n")
    inner := g.schema(rest, fmt.Sprintf("%s[%s]", g.wrap(x), index), fmt.Sprintf("%s[%s]", g.wrap(y), index))
    steps = append(steps, fmt.Sprintf("{ const %s = Math.min(%s.length, %s.length); for (let %s = %d; %s < %s; ++%s) { const _c = %s; if (_c) return _c; } }", length, g.wrap(x), g.wrap(y), index, fixed, index, length, index, inner))
  }
  return fmt.Sprintf("(() => { %s %s })()", strings.Join(steps, " "), tail)
}

func (g *compareLessProgrammerGenerator) objectCall(object *schemametadata.MetadataObjectType, x string, y string) string {
  if g.Recursive {
    return fmt.Sprintf("_lo%d(%s, %s, _vctx)", object.Index, g.wrap(x), g.wrap(y))
  }
  return fmt.Sprintf("_lo%d(%s, %s)", object.Index, g.wrap(x), g.wrap(y))
}

func (g *compareLessProgrammerGenerator) arrayCall(array *schemametadata.MetadataArrayType, x string, y string) string {
  index := 0
  if array.Index != nil {
    index = *array.Index
  }
  if g.Recursive {
    return fmt.Sprintf("_la%d(%s, %s, _vctx)", index, g.wrap(x), g.wrap(y))
  }
  return fmt.Sprintf("_la%d(%s, %s)", index, g.wrap(x), g.wrap(y))
}

func (g *compareLessProgrammerGenerator) tupleCall(tuple *schemametadata.MetadataTupleType, x string, y string) string {
  index := 0
  if tuple.Index != nil {
    index = *tuple.Index
  }
  if g.Recursive {
    return fmt.Sprintf("_lt%d(%s, %s, _vctx)", index, g.wrap(x), g.wrap(y))
  }
  return fmt.Sprintf("_lt%d(%s, %s)", index, g.wrap(x), g.wrap(y))
}

func (g *compareLessProgrammerGenerator) objectFunction(object *schemametadata.MetadataObjectType) string {
  body := g.objectInline(object, "x", "y")
  if g.Recursive {
    if object.Recursive {
      return fmt.Sprintf("const _lo%d = (x, y, _vctx) => { if (x === y) return 0; %s return %s; };", object.Index, g.visit("lo", object.Index), body)
    }
    return fmt.Sprintf("const _lo%d = (x, y, _vctx) => { if (x === y) return 0; return %s; };", object.Index, body)
  }
  return fmt.Sprintf("const _lo%d = (x, y) => { if (x === y) return 0; return %s; };", object.Index, body)
}

func (g *compareLessProgrammerGenerator) arrayFunction(array *schemametadata.MetadataArrayType) string {
  index := 0
  if array.Index != nil {
    index = *array.Index
  }
  body := g.arrayInline(array.Value, "x", "y")
  if g.Recursive {
    return fmt.Sprintf("const _la%d = (x, y, _vctx) => { if (x === y) return 0; %s return %s; };", index, g.visit("la", index), body)
  }
  return fmt.Sprintf("const _la%d = (x, y) => %s;", index, body)
}

func (g *compareLessProgrammerGenerator) tupleFunction(tuple *schemametadata.MetadataTupleType) string {
  index := 0
  if tuple.Index != nil {
    index = *tuple.Index
  }
  body := g.tupleInline(tuple, "x", "y")
  if g.Recursive {
    return fmt.Sprintf("const _lt%d = (x, y, _vctx) => { if (x === y) return 0; %s return %s; };", index, g.visit("lt", index), body)
  }
  return fmt.Sprintf("const _lt%d = (x, y) => %s;", index, body)
}

func (g *compareLessProgrammerGenerator) objectInline(object *schemametadata.MetadataObjectType, x string, y string) string {
  steps := []string{}
  for _, property := range object.Properties {
    if property.Key.GetSoleLiteral() == nil {
      continue // dynamic-key (index signature) members have no declaration order
    }
    key := *property.Key.GetSoleLiteral()
    left := g.property(x, key)
    right := g.property(y, key)
    cmp := g.schema(property.Value, left, right)
    steps = append(steps, fmt.Sprintf("{ const _c = %s; if (_c) return _c; }", cmp))
  }
  return fmt.Sprintf("(() => { %s return 0; })()", strings.Join(steps, " "))
}

// mixed orders a heterogeneous union by runtime category rank, then compares
// within the matching category.
func (g *compareLessProgrammerGenerator) mixed(metadata *schemametadata.MetadataSchema, x string, y string) string {
  rankExpr := func(v string) string {
    return fmt.Sprintf("(typeof %s === \"boolean\" ? 2 : typeof %s === \"number\" ? 3 : typeof %s === \"bigint\" ? 4 : typeof %s === \"string\" ? 5 : Array.isArray(%s) ? 6 : 7)",
      g.wrap(v), g.wrap(v), g.wrap(v), g.wrap(v), g.wrap(v))
  }
  within := []string{}
  if len(metadata.Objects) != 0 {
    within = append(within, g.objectCall(metadata.Objects[0].Type, x, y))
  } else if len(metadata.Arrays) != 0 {
    within = append(within, g.array(metadata.Arrays[0], x, y))
  } else if len(metadata.Tuples) != 0 {
    within = append(within, g.tuple(metadata.Tuples[0], x, y))
  }
  inner := g.primitive(x, y)
  if len(within) != 0 {
    inner = fmt.Sprintf("(typeof %s === \"object\" && %s !== null ? %s : %s)", g.wrap(x), g.wrap(x), within[0], inner)
  }
  return fmt.Sprintf("(%s !== %s ? (%s < %s ? -1 : 1) : %s)", rankExpr(x), rankExpr(y), rankExpr(x), rankExpr(y), inner)
}

func (g *compareLessProgrammerGenerator) visit(kind string, index int) string {
  slot := fmt.Sprintf("_vctx.%s%d", kind, index)
  return fmt.Sprintf("const _map = %s || (%s = new WeakMap()); let _set = _map.get(x); if (_set && _set.has(y)) return 0; if (!_set) _map.set(x, (_set = new WeakSet())); _set.add(y);", slot, slot)
}

func (g *compareLessProgrammerGenerator) scalarTypeofs(metadata *schemametadata.MetadataSchema) map[string]bool {
  out := map[string]bool{}
  for _, atomic := range metadata.Atomics {
    out[atomic.Type] = true
  }
  for _, constant := range metadata.Constants {
    if constant.Type == "boolean" || constant.Type == "number" || constant.Type == "bigint" || constant.Type == "string" {
      out[constant.Type] = true
    }
  }
  if len(metadata.Templates) != 0 {
    out["string"] = true
  }
  return out
}

func (g *compareLessProgrammerGenerator) typeofRank(v string) string {
  return fmt.Sprintf("(typeof %s === \"boolean\" ? 0 : typeof %s === \"number\" ? 1 : typeof %s === \"bigint\" ? 2 : 3)", g.wrap(v), g.wrap(v), g.wrap(v))
}

func (g *compareLessProgrammerGenerator) call(input string, method string) string {
  return fmt.Sprintf("%s.%s()", g.wrap(input), method)
}

func (g *compareLessProgrammerGenerator) property(input string, key string) string {
  if compareEqualProgrammer_identifier(key) {
    return fmt.Sprintf("%s.%s", g.wrap(input), key)
  }
  return g.index(input, strconv.Quote(key))
}

func (g *compareLessProgrammerGenerator) index(input string, key string) string {
  return fmt.Sprintf("%s[%s]", g.wrap(input), key)
}

func (g *compareLessProgrammerGenerator) wrap(input string) string {
  if compareEqualProgrammer_simple(input) {
    return input
  }
  return "(" + input + ")"
}

func (g *compareLessProgrammerGenerator) local(prefix string) string {
  next := fmt.Sprintf("_%s%d", prefix, g.Counter)
  g.Counter++
  return next
}

func compareLessProgrammer_orderableNative(name string) bool {
  if name == "Date" {
    return true
  }
  return compareEqualProgrammer_typedArray(name)
}
