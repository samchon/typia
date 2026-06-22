package iterate

import (
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type Check_templateProps struct {
  Context   nativecontext.ITypiaContext
  Templates []*nativemetadata.MetadataTemplate
  Input     *shimast.Expression
  Emit      *shimprinter.EmitContext
}

func Check_template(props Check_templateProps) nativehelpers.ICheckEntry {
  f := nativecontext.EmitFactoryOf(check_template_factory, props.Emit)
  conditions := []*shimast.Node{
    f.NewBinaryExpression(
      nil,
      f.NewStringLiteral("string", shimast.TokenFlagsNone),
      nil,
      f.NewToken(shimast.KindEqualsEqualsEqualsToken),
      f.NewTypeOfExpression(props.Input),
    ),
  }
  internal := make([]*shimast.Node, 0, len(props.Templates))
  var solePattern string
  var soleCaptures []templateCapture
  for _, tpl := range props.Templates {
    pattern, captures := template_runtime_pattern(tpl.Row)
    expression := f.NewCallExpression(
      f.NewIdentifier("RegExp(/"+pattern+"/).test"),
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{props.Input}),
      shimast.NodeFlagsNone,
    )
    // A template with more than one neighbor cannot route its type tags
    // through the entry conditions (those gate the whole entry), so inline
    // them — both the whole-string matrix and the per-placeholder
    // interpolation matrix — into the member expression instead.
    if len(props.Templates) > 1 {
      if tags := check_template_inline_all_tags(props, tpl, pattern, captures); tags != nil {
        expression = f.NewBinaryExpression(
          nil,
          expression,
          nil,
          f.NewToken(shimast.KindAmpersandAmpersandToken),
          tags,
        )
      }
    } else {
      solePattern = pattern
      soleCaptures = captures
    }
    internal = append(internal, expression)
  }
  if len(internal) != 0 {
    conditions = append(conditions, check_template_reduce(internal, shimast.KindBarBarToken, props.Emit))
  }
  names := make([]string, 0, len(props.Templates))
  for _, tpl := range props.Templates {
    names = append(names, tpl.GetName())
  }
  entry := nativehelpers.ICheckEntry{
    Expression: check_template_reduce(conditions, shimast.KindAmpersandAmpersandToken, props.Emit),
    Conditions: nil,
    Expected:   strings.Join(names, " | "),
  }
  if len(props.Templates) == 1 {
    entry.Conditions = check_template_all_conditions(props, props.Templates[0], solePattern, soleCaptures)
  }
  return entry
}

// check_template_type_tags mirrors check_string_type_tags: a sole template
// reports each violated type tag individually through the entry conditions.
func check_template_type_tags(props Check_templateProps, tpl *nativemetadata.MetadataTemplate) [][]nativehelpers.ICheckEntry_ICondition {
  output := [][]nativehelpers.ICheckEntry_ICondition{}
  for _, row := range tpl.Tags {
    tags := check_string_filter_validate(row)
    conditions := make([]nativehelpers.ICheckEntry_ICondition, 0, len(tags))
    for _, tag := range tags {
      conditions = append(conditions, nativehelpers.ICheckEntry_ICondition{
        Expected:   tpl.GetBaseName() + " & " + tag.Name,
        Expression: check_string_transpile(props.Context, tag.Validate)(props.Input),
      })
    }
    for _, tag := range row {
      if condition := check_exclude_condition("string", tag, props.Input, props.Emit); condition != nil {
        conditions = append(conditions, *condition)
      }
    }
    if len(conditions) == 0 {
      continue
    }
    output = append(output, conditions)
  }
  return output
}

// check_template_all_conditions composes a sole template's whole-string tag
// matrix (#1635) with its per-placeholder interpolation matrices (#1968) into
// the entry conditions.
//
// Without interpolation matrices the whole-string output is returned verbatim,
// preserving the established OR-of-rows reporting. With them, every constraint
// must hold simultaneously, so all matrices collapse into a single AND row:
// single-row matrices keep one ICondition per tag (so validate still names the
// exact tag), while a multi-row (union) matrix collapses to one OR'd ICondition.
func check_template_all_conditions(props Check_templateProps, tpl *nativemetadata.MetadataTemplate, pattern string, captures []templateCapture) [][]nativehelpers.ICheckEntry_ICondition {
  wholeString := check_template_type_tags(props, tpl)
  groups := check_template_placeholder_groups(props, tpl, pattern, captures)
  if len(groups) == 0 {
    return wholeString
  }
  // groups is non-empty here, and every group contributes at least one
  // condition, so the combined AND row is always non-empty.
  row := []nativehelpers.ICheckEntry_ICondition{}
  check_template_append_matrix(&row, wholeString, props.Emit)
  for _, group := range groups {
    check_template_append_matrix(&row, group, props.Emit)
  }
  return [][]nativehelpers.ICheckEntry_ICondition{row}
}

// check_template_append_matrix folds one constraint matrix (an OR of AND rows)
// into the shared AND row. A single-row matrix contributes its conditions
// individually so each keeps its own report; a multi-row matrix collapses to one
// condition whose expression is the OR of its rows.
func check_template_append_matrix(row *[]nativehelpers.ICheckEntry_ICondition, matrix [][]nativehelpers.ICheckEntry_ICondition, emit *shimprinter.EmitContext) {
  if len(matrix) == 0 {
    return
  }
  if len(matrix) == 1 {
    *row = append(*row, matrix[0]...)
    return
  }
  rows := make([]*shimast.Node, 0, len(matrix))
  expectedParts := make([]string, 0, len(matrix))
  for _, set := range matrix {
    cols := make([]*shimast.Node, 0, len(set))
    names := make([]string, 0, len(set))
    for _, condition := range set {
      cols = append(cols, condition.Expression)
      names = append(names, condition.Expected)
    }
    rows = append(rows, check_template_reduce(cols, shimast.KindAmpersandAmpersandToken, emit))
    expectedParts = append(expectedParts, "("+strings.Join(names, " & ")+")")
  }
  *row = append(*row, nativehelpers.ICheckEntry_ICondition{
    Expected:   strings.Join(expectedParts, " | "),
    Expression: check_template_reduce(rows, shimast.KindBarBarToken, emit),
  })
}

// check_template_placeholder_groups builds, for each constrained interpolation
// placeholder, the matrix of conditions that validate its captured substring.
func check_template_placeholder_groups(props Check_templateProps, tpl *nativemetadata.MetadataTemplate, pattern string, captures []templateCapture) [][][]nativehelpers.ICheckEntry_ICondition {
  base := tpl.GetBaseName()
  output := [][][]nativehelpers.ICheckEntry_ICondition{}
  for _, capture := range captures {
    matrix := check_template_capture_conditions(props, base, pattern, capture)
    if len(matrix) != 0 {
      output = append(output, matrix)
    }
  }
  return output
}

// check_template_capture_conditions reuses check_number_transpile /
// check_string_transpile to validate one placeholder's captured substring,
// parsed to its base type, against the placeholder's own tag matrix.
//
// Every row yields at least one condition: template_constrained_capture admitted
// this placeholder only because template_fully_constrained holds, i.e. each row
// carries a validate-able tag, so no produced row is empty.
func check_template_capture_conditions(props Check_templateProps, base string, pattern string, capture templateCapture) [][]nativehelpers.ICheckEntry_ICondition {
  output := [][]nativehelpers.ICheckEntry_ICondition{}
  for _, row := range capture.Atomic.Tags {
    conditions := []nativehelpers.ICheckEntry_ICondition{}
    if capture.Kind != "string" {
      // number and bigint share the numeric transpiler; the bigint validate
      // scripts already compare via `BigInt(...)`, and check_template_capture_input
      // hands them a `BigInt(...)`-parsed value. The exclude literals use
      // capture.Kind so a bigint placeholder emits bigint literals.
      for _, tag := range check_number_filter_validate(row) {
        conditions = append(conditions, nativehelpers.ICheckEntry_ICondition{
          Expected:   base + " & " + tag.Name,
          Expression: check_number_transpile(props.Context, tag.Validate)(check_template_capture_input(pattern, capture, props.Input, props.Emit)),
        })
      }
      for _, tag := range row {
        if condition := check_exclude_condition(capture.Kind, tag, check_template_capture_input(pattern, capture, props.Input, props.Emit), props.Emit); condition != nil {
          conditions = append(conditions, *condition)
        }
      }
    } else {
      for _, tag := range check_string_filter_validate(row) {
        conditions = append(conditions, nativehelpers.ICheckEntry_ICondition{
          Expected:   base + " & " + tag.Name,
          Expression: check_string_transpile(props.Context, tag.Validate)(check_template_capture_input(pattern, capture, props.Input, props.Emit)),
        })
      }
      for _, tag := range row {
        if condition := check_exclude_condition("string", tag, check_template_capture_input(pattern, capture, props.Input, props.Emit), props.Emit); condition != nil {
          conditions = append(conditions, *condition)
        }
      }
    }
    output = append(output, conditions)
  }
  return output
}

// check_template_capture_input builds the expression that re-extracts a
// placeholder's captured substring: `RegExp(/pattern/).exec(input)[index]`,
// coerced through `Number(...)` for a numeric placeholder or `BigInt(...)` for a
// bigint one (a string placeholder uses the raw substring). The surrounding
// `.test()` (entry expression for a sole template, member expression for a
// union) guarantees the match is non-null, and the bigint capture pattern admits
// only integers, so the conversion never throws.
func check_template_capture_input(pattern string, capture templateCapture, input *shimast.Expression, emit *shimprinter.EmitContext) *shimast.Expression {
  f := nativecontext.EmitFactoryOf(check_template_factory, emit)
  element := f.NewElementAccessExpression(
    f.NewCallExpression(
      f.NewIdentifier("RegExp(/"+pattern+"/).exec"),
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{input}),
      shimast.NodeFlagsNone,
    ),
    nil,
    nativefactories.ExpressionFactory.Number(capture.Index, emit),
    shimast.NodeFlagsNone,
  )
  coerce := ""
  switch capture.Kind {
  case "number":
    coerce = "Number"
  case "bigint":
    coerce = "BigInt"
  }
  if coerce != "" {
    return f.NewCallExpression(
      f.NewIdentifier(coerce),
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{element}),
      shimast.NodeFlagsNone,
    )
  }
  return element
}

// check_template_inline_all_tags folds a union member template's whole-string
// matrix and interpolation matrices into one boolean for members that cannot
// carry conditions.
func check_template_inline_all_tags(props Check_templateProps, tpl *nativemetadata.MetadataTemplate, pattern string, captures []templateCapture) *shimast.Node {
  nodes := []*shimast.Node{}
  if whole := check_template_inline_tags(props, tpl); whole != nil {
    nodes = append(nodes, whole)
  }
  if interpolation := check_template_inline_interpolation_tags(props, tpl, pattern, captures); interpolation != nil {
    nodes = append(nodes, interpolation)
  }
  if len(nodes) == 0 {
    return nil
  }
  return check_template_reduce(nodes, shimast.KindAmpersandAmpersandToken, props.Emit)
}

// check_template_inline_tags folds a template's tag matrix (OR of AND rows)
// into a single expression for union members that cannot carry conditions.
func check_template_inline_tags(props Check_templateProps, tpl *nativemetadata.MetadataTemplate) *shimast.Node {
  rows := make([]*shimast.Node, 0, len(tpl.Tags))
  for _, row := range tpl.Tags {
    tags := check_string_filter_validate(row)
    expressions := make([]*shimast.Node, 0, len(tags))
    for _, tag := range tags {
      expressions = append(expressions, check_string_transpile(props.Context, tag.Validate)(props.Input))
    }
    for _, tag := range row {
      if condition := check_exclude_condition("string", tag, props.Input, props.Emit); condition != nil {
        expressions = append(expressions, condition.Expression)
      }
    }
    if len(expressions) == 0 {
      continue
    }
    rows = append(rows, check_template_reduce(expressions, shimast.KindAmpersandAmpersandToken, props.Emit))
  }
  if len(rows) == 0 {
    return nil
  }
  return check_template_reduce(rows, shimast.KindBarBarToken, props.Emit)
}

// check_template_inline_interpolation_tags folds every constrained placeholder's
// matrix into one AND'd boolean (each matrix kept as an OR of its rows) for
// union members that cannot carry conditions.
func check_template_inline_interpolation_tags(props Check_templateProps, tpl *nativemetadata.MetadataTemplate, pattern string, captures []templateCapture) *shimast.Node {
  groups := check_template_placeholder_groups(props, tpl, pattern, captures)
  if len(groups) == 0 {
    return nil
  }
  conjuncts := make([]*shimast.Node, 0, len(groups))
  for _, matrix := range groups {
    rows := make([]*shimast.Node, 0, len(matrix))
    for _, set := range matrix {
      cols := make([]*shimast.Node, 0, len(set))
      for _, condition := range set {
        cols = append(cols, condition.Expression)
      }
      rows = append(rows, check_template_reduce(cols, shimast.KindAmpersandAmpersandToken, props.Emit))
    }
    conjuncts = append(conjuncts, check_template_reduce(rows, shimast.KindBarBarToken, props.Emit))
  }
  return check_template_reduce(conjuncts, shimast.KindAmpersandAmpersandToken, props.Emit)
}

func check_template_reduce(expressions []*shimast.Node, operator shimast.Kind, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(check_template_factory, emit...)
  if len(expressions) == 0 {
    return f.NewKeywordExpression(shimast.KindTrueKeyword)
  }
  output := expressions[0]
  for _, next := range expressions[1:] {
    output = f.NewBinaryExpression(
      nil,
      output,
      nil,
      f.NewToken(operator),
      next,
    )
  }
  return output
}

var check_template_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
