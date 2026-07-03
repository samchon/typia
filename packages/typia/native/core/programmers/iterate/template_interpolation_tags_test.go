//go:build typia_native_internal
// +build typia_native_internal

package iterate

import (
  "strings"
  "testing"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestTemplateCountCapturingGroups counts regex capturing groups.
//
// The running capture index that maps a constrained placeholder to its
// `match[index]` slot is driven entirely by this counter, so it must agree with
// how a JS engine numbers groups: count an unescaped `(` that does not open an
// inline `(?...)` group, and skip escaped parens — including a literal paren
// that follows an escaped backslash.
//
//  1. Count bare, alternation, nested, and non-capturing patterns.
//  2. Count the numeric span (only inline groups) as zero.
//  3. Count escaped parens as zero and a real group after `\\` as one.
func TestTemplateCountCapturingGroups(t *testing.T) {
  cases := []struct {
    pattern string
    want    int
  }{
    {"", 0},
    {"(.*)", 1},
    {"[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?", 0},
    {"(a|b|c)", 1},
    {"(a(b)c)", 2},
    {"\\(literal\\)", 0},
    {"\\\\(group)", 1},
    {"(?:no)(yes)", 1},
    {"(.*)-([+-]?\\d+)", 2},
    {"([\\s\\S]*)", 1},
  }
  for _, tc := range cases {
    if got := template_count_capturing_groups(tc.pattern); got != tc.want {
      t.Fatalf("count(%q) = %d, want %d", tc.pattern, got, tc.want)
    }
  }
}

// TestTemplateFullyConstrained gates which tag matrices earn a capture.
//
// A placeholder is only captured when every OR row contributes at least one
// validate-able tag; otherwise some row admits the base type unconditionally and
// honoring the others would reject values the type accepts.
//
//  1. Reject nil and empty matrices.
//  2. Accept a matrix whose every row has a validate-able tag.
//  3. Reject a matrix with a row of only non-validating tags.
func TestTemplateFullyConstrained(t *testing.T) {
  validating := nativemetadata.IMetadataTypeTag{Name: "Minimum<0>", Validate: "0 <= $input"}
  schemaOnly := nativemetadata.IMetadataTypeTag{Name: "Format<\"uuid\">"}
  cases := []struct {
    name string
    tags [][]nativemetadata.IMetadataTypeTag
    want bool
  }{
    {"nil", nil, false},
    {"empty", [][]nativemetadata.IMetadataTypeTag{}, false},
    {"single", [][]nativemetadata.IMetadataTypeTag{{validating}}, true},
    {"mixed-row", [][]nativemetadata.IMetadataTypeTag{{schemaOnly, validating}}, true},
    {"schema-only-row", [][]nativemetadata.IMetadataTypeTag{{schemaOnly}}, false},
    {"one-unconstrained-row", [][]nativemetadata.IMetadataTypeTag{{validating}, {schemaOnly}}, false},
  }
  for _, tc := range cases {
    if got := template_fully_constrained(tc.tags); got != tc.want {
      t.Fatalf("template_fully_constrained(%s) = %v, want %v", tc.name, got, tc.want)
    }
  }
}

// TestTemplateConstrainedCapture decides which placeholders earn a capture.
//
// Only a sole, required, non-nullable `number`, `bigint`, or `string` primitive
// carrying a fully runtime-checkable tag matrix is captured; boolean/union/
// constant placeholders, schema-only tags, and nullable/optional placeholders
// fall back to structural-only matching.
//
//  1. Accept number, bigint, and string placeholders with validating tags.
//  2. Reject boolean, unconstrained, nullable, optional, multi-bucket.
func TestTemplateConstrainedCapture(t *testing.T) {
  minimum := [][]nativemetadata.IMetadataTypeTag{{{Name: "Minimum<0>", Validate: "0 <= $input"}}}

  if atomic, kind, ok := template_constrained_capture(iterateTemplateAtomic("number", minimum)); ok == false || kind != "number" || atomic == nil {
    t.Fatal("number placeholder with a validating tag should be captured")
  }
  if _, kind, ok := template_constrained_capture(iterateTemplateAtomic("string", [][]nativemetadata.IMetadataTypeTag{{{Name: "MinLength<3>", Validate: "$input.length >= 3"}}})); ok == false || kind != "string" {
    t.Fatal("string placeholder with a validating tag should be captured")
  }
  if _, kind, ok := template_constrained_capture(iterateTemplateAtomic("bigint", [][]nativemetadata.IMetadataTypeTag{{{Name: "Minimum<0>", Validate: "BigInt(0) <= $input"}}})); ok == false || kind != "bigint" {
    t.Fatal("bigint placeholder with a validating tag should be captured")
  }

  reject := func(label string, meta *nativemetadata.MetadataSchema) {
    if _, _, ok := template_constrained_capture(meta); ok {
      t.Fatalf("%s should not be captured", label)
    }
  }
  reject("nil", nil)
  reject("boolean", iterateTemplateAtomic("boolean", minimum))
  reject("unconstrained number", iterateTemplateAtomic("number", nil))

  nullable := iterateTemplateAtomic("number", minimum)
  nullable.Nullable = true
  reject("nullable", nullable)

  optional := iterateTemplateAtomic("number", minimum)
  optional.Required = false
  optional.Optional = true
  reject("optional", optional)

  twoAtomics := iterateTemplateAtomic("number", minimum)
  twoAtomics.Atomics = append(twoAtomics.Atomics, nativemetadata.MetadataAtomic_create(nativemetadata.MetadataAtomic{Type: "string"}))
  reject("two atomics", twoAtomics)

  withConstant := iterateTemplateAtomic("number", minimum)
  withConstant.Constants = append(withConstant.Constants, nativemetadata.MetadataConstant_create(nativemetadata.MetadataConstant{
    Type:   "string",
    Values: []*nativemetadata.MetadataConstantValue{nativemetadata.MetadataConstantValue_create(nativemetadata.MetadataConstantValue{Value: "x"})},
  }))
  reject("multi bucket", withConstant)
}

// TestTemplateRuntimePattern maps placeholders to stable capture indices.
//
// The structural regex mirrors metadata_to_pattern verbatim except that a
// constrained numeric placeholder is wrapped and a constrained string lowers to
// the newline-inclusive `([\s\S]*)`; every constrained placeholder must be
// assigned the capture index a JS engine would give it — counting the
// preexisting `(.*)`/alternation groups of unconstrained neighbors.
//
//  1. A leading literal plus a constrained number captures at index 1.
//  2. `${n}-${n}` keeps both numbers ("-" is not number-extendable) at 1 and 2;
//     a string with a sibling absorbs the separator and falls back entirely.
//  3. A sole constrained string lowers to `([\s\S]*)`, anchored.
//  4. A constrained bigint lowers to the integer-only `([+-]?\d+)`, anchored.
//  5. A constrained placeholder adjacent to a variable-width neighbor falls back.
//  6. A template with no constrained placeholder yields no captures and the
//     historical pattern.
func TestTemplateRuntimePattern(t *testing.T) {
  number := iterateTemplateAtomic("number", [][]nativemetadata.IMetadataTypeTag{{{Name: "Minimum<0>", Validate: "0 <= $input"}}})
  numberB := iterateTemplateAtomic("number", [][]nativemetadata.IMetadataTypeTag{{{Name: "Maximum<9>", Validate: "$input <= 9"}}})
  str := iterateTemplateAtomic("string", [][]nativemetadata.IMetadataTypeTag{{{Name: "MinLength<3>", Validate: "$input.length >= 3"}}})
  numberSpan := "[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?"

  pattern, captures := template_runtime_pattern([]*nativemetadata.MetadataSchema{iterateLiteral("v"), number})
  if want := "^v(" + numberSpan + ")$"; pattern != want {
    t.Fatalf("leading-literal pattern = %q, want %q", pattern, want)
  }
  if len(captures) != 1 || captures[0].Index != 1 || captures[0].Kind != "number" {
    t.Fatalf("leading-literal captures = %#v", captures)
  }

  // `${n}-${n}`: "-" is not in a number's right-extension set, so both numbers
  // are pinned and capture at indices 1 and 2.
  _, captures = template_runtime_pattern([]*nativemetadata.MetadataSchema{number, iterateLiteral("-"), numberB})
  if len(captures) != 2 || captures[0].Index != 1 || captures[0].Kind != "number" || captures[1].Index != 2 || captures[1].Kind != "number" {
    t.Fatalf("number-'-'-number captures = %#v", captures)
  }

  // A string with a sibling absorbs the "-" (greedy `[\s\S]*`), unpinning both
  // itself and the number, so the whole template falls back to no captures.
  _, captures = template_runtime_pattern([]*nativemetadata.MetadataSchema{str, iterateLiteral("-"), numberB})
  if len(captures) != 0 {
    t.Fatalf("string-with-sibling template must fall back, got %#v", captures)
  }

  // A constrained string captures every character (newlines included) via
  // `([\s\S]*)`, not the newline-blind `(.*)`.
  pattern, captures = template_runtime_pattern([]*nativemetadata.MetadataSchema{iterateLiteral("L:"), str})
  if want := "^L:([\\s\\S]*)$"; pattern != want {
    t.Fatalf("constrained-string pattern = %q, want %q", pattern, want)
  }
  if len(captures) != 1 || captures[0].Index != 1 || captures[0].Kind != "string" {
    t.Fatalf("constrained-string captures = %#v", captures)
  }

  // A constrained bigint captures an integer only, so BigInt(...) cannot throw.
  big := iterateTemplateAtomic("bigint", [][]nativemetadata.IMetadataTypeTag{{{Name: "Minimum<0>", Validate: "BigInt(0) <= $input"}}})
  pattern, captures = template_runtime_pattern([]*nativemetadata.MetadataSchema{iterateLiteral("#"), big})
  if want := "^#([+-]?\\d+)$"; pattern != want {
    t.Fatalf("constrained-bigint pattern = %q, want %q", pattern, want)
  }
  if len(captures) != 1 || captures[0].Index != 1 || captures[0].Kind != "bigint" {
    t.Fatalf("constrained-bigint captures = %#v", captures)
  }

  // A constrained placeholder adjacent to a variable-width neighbor (here an
  // unconstrained string before the number, with no literal between) is
  // ambiguous under greedy matching, so it falls back to structural-only
  // matching with no capture — rather than risking a false negative.
  _, captures = template_runtime_pattern([]*nativemetadata.MetadataSchema{iterateAtomic("string"), number})
  if len(captures) != 0 {
    t.Fatalf("number adjacent to a variable-width neighbor must not be captured, got %#v", captures)
  }
  _, captures = template_runtime_pattern([]*nativemetadata.MetadataSchema{str, numberB})
  if len(captures) != 0 {
    t.Fatalf("two adjacent constrained placeholders must both fall back, got %#v", captures)
  }

  pattern, captures = template_runtime_pattern([]*nativemetadata.MetadataSchema{iterateLiteral("plain"), iterateAtomic("string")})
  if len(captures) != 0 {
    t.Fatalf("unconstrained template should have no captures, got %#v", captures)
  }
  if want := "^plain(.*)"; pattern != want {
    t.Fatalf("unconstrained pattern = %q, want %q", pattern, want)
  }
}

// TestTemplateClearBoundary gates capture on boundaries the greedy regex pins.
//
// A placeholder is captured only when, on each side, the template edge or a
// literal whose first character its relevant variable neighbor cannot absorb
// pins it; otherwise the split can slide and it falls back.
//
//  1. A single literal segment is a boundary; an atomic, a multi-value constant,
//     and nil are not.
//  2. Sole / literal-fenced placeholders clear; an adjacent variable does not.
//  3. `${n}-${n}` clears ("-" not number-extendable); `${n}.${n}` does not (".").
//  4. A string before a sibling absorbs the separator, unpinning both itself and
//     the number; a number before a string keeps both.
func TestTemplateClearBoundary(t *testing.T) {
  num := iterateTemplateAtomic("number", [][]nativemetadata.IMetadataTypeTag{{{Name: "Minimum<0>", Validate: "0 <= $input"}}})
  str := iterateTemplateAtomic("string", [][]nativemetadata.IMetadataTypeTag{{{Name: "MinLength<1>", Validate: "$input.length >= 1"}}})
  bint := iterateTemplateAtomic("bigint", nil)
  multi := nativemetadata.MetadataSchema_initialize()
  multi.Constants = append(multi.Constants, nativemetadata.MetadataConstant_create(nativemetadata.MetadataConstant{
    Type: "string",
    Values: []*nativemetadata.MetadataConstantValue{
      nativemetadata.MetadataConstantValue_create(nativemetadata.MetadataConstantValue{Value: "a"}),
      nativemetadata.MetadataConstantValue_create(nativemetadata.MetadataConstantValue{Value: "bb"}),
    },
  }))

  if template_is_literal(iterateLiteral("x")) == false {
    t.Fatal("a single literal segment must count as a boundary")
  }
  for label, meta := range map[string]*nativemetadata.MetadataSchema{"atomic": num, "multi-constant": multi, "nil": nil} {
    if template_is_literal(meta) {
      t.Fatalf("%s must not count as a boundary", label)
    }
  }

  type clearCase struct {
    name string
    row  []*nativemetadata.MetadataSchema
    i    int
    want bool
  }
  for _, c := range []clearCase{
    {"sole", []*nativemetadata.MetadataSchema{num}, 0, true},
    {"fenced by literals", []*nativemetadata.MetadataSchema{iterateLiteral("a"), num, iterateLiteral("b")}, 1, true},
    {"adjacent variable", []*nativemetadata.MetadataSchema{num, num}, 0, false},
    {"num-'-'-num left", []*nativemetadata.MetadataSchema{num, iterateLiteral("-"), num}, 0, true},
    {"num-'-'-num right", []*nativemetadata.MetadataSchema{num, iterateLiteral("-"), num}, 2, true},
    {"num-'.'-num (decimal absorbs)", []*nativemetadata.MetadataSchema{num, iterateLiteral("."), num}, 0, false},
    {"string absorbs separator", []*nativemetadata.MetadataSchema{str, iterateLiteral("-"), num}, 0, false},
    {"number unpinned by left string", []*nativemetadata.MetadataSchema{str, iterateLiteral("-"), num}, 2, false},
    {"number before string, number pinned", []*nativemetadata.MetadataSchema{num, iterateLiteral("-"), str}, 0, true},
    {"number before string, string pinned", []*nativemetadata.MetadataSchema{num, iterateLiteral("-"), str}, 2, true},
    // An empty separator literal has no first character to absorb, so the
    // boundary is treated as pinned.
    {"empty separator literal", []*nativemetadata.MetadataSchema{num, iterateLiteral(""), num}, 0, true},
    // A bigint neighbor lowers to the decimal NUMBER span, so it absorbs "."
    // too (a constrained number after a bigint must fall back).
    {"bigint absorbs decimal", []*nativemetadata.MetadataSchema{bint, iterateLiteral("."), num}, 2, false},
  } {
    if got := template_clear_boundary(c.row, c.i); got != c.want {
      t.Fatalf("clear_boundary(%s) = %v, want %v", c.name, got, c.want)
    }
  }
}

// TestTemplateBoundaryHelpers covers the right-extension, kind, and literal-first
// primitives that drive template_clear_boundary.
//
//  1. right_extends: number and bigint grow through digit/'.'/e but not their
//     sign; string/other through anything.
//  2. variable_kind: number/bigint/string atomics map to themselves; everything
//     else (boolean, constant-only, nil) is conservatively "string".
//  3. literal_first: the text's first rune, or not-ok for empty/non-literal/nil.
func TestTemplateBoundaryHelpers(t *testing.T) {
  for _, c := range []struct {
    kind string
    ch   rune
    want bool
  }{
    {"number", '5', true}, {"number", '.', true}, {"number", 'e', true}, {"number", 'E', true},
    {"number", '-', false}, {"number", '%', false},
    {"bigint", '5', true}, {"bigint", '.', true}, {"bigint", '-', false},
    {"string", '%', true}, {"boolean", 't', true},
  } {
    if got := template_right_extends(c.kind, c.ch); got != c.want {
      t.Fatalf("right_extends(%q, %q) = %v, want %v", c.kind, c.ch, got, c.want)
    }
  }

  for _, c := range []struct {
    name string
    meta *nativemetadata.MetadataSchema
    want string
  }{
    {"number", iterateTemplateAtomic("number", nil), "number"},
    {"bigint", iterateTemplateAtomic("bigint", nil), "bigint"},
    {"string", iterateTemplateAtomic("string", nil), "string"},
    {"boolean", iterateTemplateAtomic("boolean", nil), "string"},
    {"constant-only", iterateLiteral("x"), "string"},
    {"nil", nil, "string"},
  } {
    if got := template_variable_kind(c.meta); got != c.want {
      t.Fatalf("variable_kind(%s) = %q, want %q", c.name, got, c.want)
    }
  }

  if r, ok := template_literal_first(iterateLiteral("abc")); ok == false || r != 'a' {
    t.Fatalf("literal_first(abc) = %q,%v", r, ok)
  }
  for label, meta := range map[string]*nativemetadata.MetadataSchema{
    "empty":       iterateLiteral(""),
    "non-literal": iterateTemplateAtomic("number", nil),
    "nil":         nil,
  } {
    if _, ok := template_literal_first(meta); ok {
      t.Fatalf("literal_first(%s) should be not-ok", label)
    }
  }
}

// TestCheckTemplateInterpolationConditions wires placeholder tags into the
// checker entry and inline union expressions.
//
// A sole template threads its placeholder tags through the entry conditions
// (one condition per tag for single-row matrices, one collapsed condition for a
// union matrix), composing with whole-string tags as a single AND row; a union
// of templates inlines them into the member expression instead.
//
//  1. Sole template, single-row numeric matrix → one row, two conditions.
//  2. Sole template, multi-row matrix → one collapsed condition naming both.
//  3. Sole template, whole-string tag only → unchanged whole-string conditions.
//  4. Sole template, string placeholder with an exclude tag → string conditions.
//  5. Union of constrained templates → no entry conditions, non-nil expression.
func TestCheckTemplateInterpolationConditions(t *testing.T) {
  emit := shimprinter.NewEmitContext()
  factory := shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
  input := factory.NewIdentifier("input")
  context := nativecontext.ITypiaContext{Emit: emit}

  call := func(templates []*nativemetadata.MetadataTemplate) nativehelpers.ICheckEntry {
    return Check_template(Check_templateProps{
      Context:   context,
      Templates: templates,
      Input:     input,
      Emit:      emit,
    })
  }

  // 1. single-row numeric matrix
  percent := iterateTemplateLiteral([]*nativemetadata.MetadataSchema{
    iterateTemplateAtomic("number", [][]nativemetadata.IMetadataTypeTag{{
      {Name: "Minimum<0>", Validate: "0 <= $input"},
      {Name: "Maximum<100>", Validate: "$input <= 100"},
    }}),
    iterateLiteral("%"),
  }, nil)
  entry := call([]*nativemetadata.MetadataTemplate{percent})
  if entry.Expression == nil || len(entry.Conditions) != 1 || len(entry.Conditions[0]) != 2 {
    t.Fatalf("percent entry must hold one row of two conditions, got %#v", entry.Conditions)
  }

  // 2. multi-row (union) matrix collapses to a single OR'd condition
  multi := iterateTemplateLiteral([]*nativemetadata.MetadataSchema{
    iterateTemplateAtomic("number", [][]nativemetadata.IMetadataTypeTag{
      {{Name: "Minimum<0>", Validate: "0 <= $input"}},
      {{Name: "Maximum<9>", Validate: "$input <= 9"}},
    }),
  }, nil)
  entry = call([]*nativemetadata.MetadataTemplate{multi})
  if len(entry.Conditions) != 1 || len(entry.Conditions[0]) != 1 {
    t.Fatalf("multi-row matrix must collapse to one condition, got %#v", entry.Conditions)
  }
  if expected := entry.Conditions[0][0].Expected; !strings.Contains(expected, " | ") {
    t.Fatalf("collapsed expected should disjoin both rows, got %q", expected)
  }

  // 2b. bigint placeholder routes through the numeric path with a BigInt(...) input
  bigEntry := call([]*nativemetadata.MetadataTemplate{iterateTemplateLiteral([]*nativemetadata.MetadataSchema{
    iterateLiteral("#"),
    iterateTemplateAtomic("bigint", [][]nativemetadata.IMetadataTypeTag{{
      {Name: "Minimum<0>", Validate: "BigInt(0) <= $input"},
    }}),
  }, nil)})
  if bigEntry.Expression == nil || len(bigEntry.Conditions) != 1 || len(bigEntry.Conditions[0]) != 1 {
    t.Fatalf("bigint entry must hold one row of one condition, got %#v", bigEntry.Conditions)
  }

  // 3. whole-string tag only — interpolation path is inert, output unchanged
  wholeOnly := iterateTemplateLiteral(
    []*nativemetadata.MetadataSchema{iterateLiteral("prefix"), iterateAtomic("string")},
    [][]nativemetadata.IMetadataTypeTag{{{Name: "MaxLength<5>", Validate: "$input.length <= 5"}}},
  )
  entry = call([]*nativemetadata.MetadataTemplate{wholeOnly})
  if len(entry.Conditions) != 1 || len(entry.Conditions[0]) != 1 {
    t.Fatalf("whole-string-only template should keep its single condition, got %#v", entry.Conditions)
  }

  // 4. string placeholder carrying a validating tag and an exclude tag
  excluded := iterateTemplateLiteral([]*nativemetadata.MetadataSchema{
    iterateLiteral("ID"),
    iterateTemplateAtomic("string", [][]nativemetadata.IMetadataTypeTag{{
      {Name: "MinLength<2>", Validate: "$input.length >= 2"},
      {Name: "Exclude", Kind: "exclude", Schema: map[string]any{"not": map[string]any{"enum": []any{"no"}}}},
    }}),
  }, nil)
  entry = call([]*nativemetadata.MetadataTemplate{excluded})
  if len(entry.Conditions) != 1 || len(entry.Conditions[0]) != 2 {
    t.Fatalf("string placeholder should emit a length and an exclude condition, got %#v", entry.Conditions)
  }

  // 4b. number placeholder carrying a validating tag and an exclude tag
  numberExcluded := iterateTemplateLiteral([]*nativemetadata.MetadataSchema{
    iterateTemplateAtomic("number", [][]nativemetadata.IMetadataTypeTag{{
      {Name: "Minimum<0>", Validate: "0 <= $input"},
      {Name: "Exclude", Kind: "exclude", Schema: map[string]any{"not": map[string]any{"enum": []any{5}}}},
    }}),
    iterateLiteral("u"),
  }, nil)
  entry = call([]*nativemetadata.MetadataTemplate{numberExcluded})
  if len(entry.Conditions) != 1 || len(entry.Conditions[0]) != 2 {
    t.Fatalf("number placeholder should emit a minimum and an exclude condition, got %#v", entry.Conditions)
  }

  // 5. union exercising every inline branch: interpolation-only (percent),
  // multi-row interpolation (multi), whole-string + interpolation combined, and
  // a tagless member whose inline expression collapses to nil.
  combined := iterateTemplateLiteral([]*nativemetadata.MetadataSchema{
    iterateLiteral("q"),
    iterateTemplateAtomic("number", [][]nativemetadata.IMetadataTypeTag{{{Name: "Minimum<0>", Validate: "0 <= $input"}}}),
  }, [][]nativemetadata.IMetadataTypeTag{{{Name: "MaxLength<5>", Validate: "$input.length <= 5"}}})
  tagless := iterateTemplateLiteral([]*nativemetadata.MetadataSchema{
    iterateLiteral("x"),
    iterateAtomic("string"),
  }, nil)
  union := call([]*nativemetadata.MetadataTemplate{percent, multi, combined, tagless})
  if union.Expression == nil {
    t.Fatal("union template expression must not be nil")
  }
  if union.Conditions != nil {
    t.Fatalf("union template must not carry entry conditions, got %#v", union.Conditions)
  }

  // 6. whole-string tags exercising the exclude branch and an empty
  // (non-validating) row of check_template_type_tags / check_template_inline_tags.
  wsExclude := iterateTemplateLiteral(
    []*nativemetadata.MetadataSchema{iterateLiteral("p"), iterateAtomic("string")},
    [][]nativemetadata.IMetadataTypeTag{
      {
        {Name: "MaxLength<5>", Validate: "$input.length <= 5"},
        {Name: "Exclude", Kind: "exclude", Schema: map[string]any{"not": map[string]any{"enum": []any{"no"}}}},
      },
      {{Name: "Format<\"uuid\">"}}, // non-validating only → skipped row
    },
  )
  entry = call([]*nativemetadata.MetadataTemplate{wsExclude})
  if len(entry.Conditions) != 1 || len(entry.Conditions[0]) != 2 {
    t.Fatalf("whole-string exclude should emit length + exclude, got %#v", entry.Conditions)
  }
  if unionWs := call([]*nativemetadata.MetadataTemplate{wsExclude, wsExclude}); unionWs.Expression == nil {
    t.Fatal("union whole-string inline expression must not be nil")
  }

  // 7. reducing an empty slice yields a literal (true/false) keyword.
  if check_template_reduce(nil, shimast.KindBarBarToken) == nil {
    t.Fatal("empty reduce should yield a keyword")
  }
}

func iterateTemplateAtomic(kind string, tags [][]nativemetadata.IMetadataTypeTag) *nativemetadata.MetadataSchema {
  meta := nativemetadata.MetadataSchema_initialize()
  meta.Atomics = append(meta.Atomics, nativemetadata.MetadataAtomic_create(nativemetadata.MetadataAtomic{Type: kind, Tags: tags}))
  return meta
}

func iterateTemplateLiteral(row []*nativemetadata.MetadataSchema, tags [][]nativemetadata.IMetadataTypeTag) *nativemetadata.MetadataTemplate {
  return &nativemetadata.MetadataTemplate{Row: row, Tags: tags}
}
