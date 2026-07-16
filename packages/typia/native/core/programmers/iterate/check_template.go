package iterate

import (
  "fmt"
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
  var soleBacktracking *nativehelpers.ICheckEntry_ICondition
  for _, tpl := range props.Templates {
    pattern, captures := template_runtime_pattern(tpl.Row)
    backtracking := template_requires_backtracking(tpl.Row)
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
      if backtracking {
        expression = f.NewBinaryExpression(
          nil,
          expression,
          nil,
          f.NewToken(shimast.KindAmpersandAmpersandToken),
          check_template_backtracking(props, tpl),
        )
        captures = nil
      }
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
      if backtracking {
        soleCaptures = nil
        soleBacktracking = &nativehelpers.ICheckEntry_ICondition{
          Expected:   check_template_backtracking_expected(tpl),
          Expression: check_template_backtracking(props, tpl),
        }
      } else {
        soleCaptures = captures
      }
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
    entry.Conditions = check_template_all_conditions(props, props.Templates[0], solePattern, soleCaptures, soleBacktracking)
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
func check_template_all_conditions(props Check_templateProps, tpl *nativemetadata.MetadataTemplate, pattern string, captures []templateCapture, backtracking *nativehelpers.ICheckEntry_ICondition) [][]nativehelpers.ICheckEntry_ICondition {
  wholeString := check_template_type_tags(props, tpl)
  groups := check_template_placeholder_groups(props, tpl, pattern, captures)
  if len(groups) == 0 && backtracking == nil {
    return wholeString
  }
  // groups is non-empty here, and every group contributes at least one
  // condition, so the combined AND row is always non-empty.
  row := []nativehelpers.ICheckEntry_ICondition{}
  check_template_append_matrix(&row, wholeString, props.Emit)
  for _, group := range groups {
    check_template_append_matrix(&row, group, props.Emit)
  }
  if backtracking != nil {
    row = append(row, *backtracking)
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
  return check_template_value_conditions(
    props,
    base,
    capture.Atomic,
    capture.Kind,
    check_template_capture_input(pattern, capture, props.Input, props.Emit),
  )
}

func check_template_value_conditions(props Check_templateProps, base string, atomic *nativemetadata.MetadataAtomic, kind string, input *shimast.Expression) [][]nativehelpers.ICheckEntry_ICondition {
  output := [][]nativehelpers.ICheckEntry_ICondition{}
  for _, row := range atomic.Tags {
    conditions := []nativehelpers.ICheckEntry_ICondition{}
    if kind != "string" {
      // Number and bigint share the numeric transpiler. Coercion stays here so
      // both direct RegExp captures and backtracking slices use the same tag
      // predicates, while bigint exclude checks still emit bigint literals.
      for _, tag := range check_number_filter_validate(row) {
        conditions = append(conditions, nativehelpers.ICheckEntry_ICondition{
          Expected:   base + " & " + tag.Name,
          Expression: check_number_transpile(props.Context, tag.Validate)(check_template_coerce_input(kind, input, props.Emit)),
        })
      }
      for _, tag := range row {
        if condition := check_exclude_condition(kind, tag, check_template_coerce_input(kind, input, props.Emit), props.Emit); condition != nil {
          conditions = append(conditions, *condition)
        }
      }
    } else {
      for _, tag := range check_string_filter_validate(row) {
        conditions = append(conditions, nativehelpers.ICheckEntry_ICondition{
          Expected:   base + " & " + tag.Name,
          Expression: check_string_transpile(props.Context, tag.Validate)(input),
        })
      }
      for _, tag := range row {
        if condition := check_exclude_condition("string", tag, input, props.Emit); condition != nil {
          conditions = append(conditions, *condition)
        }
      }
    }
    output = append(output, conditions)
  }
  return output
}

func check_template_coerce_input(kind string, input *shimast.Expression, emit *shimprinter.EmitContext) *shimast.Expression {
  f := nativecontext.EmitFactoryOf(check_template_factory, emit)
  coerce := ""
  switch kind {
  case "number":
    coerce = "Number"
  case "bigint":
    coerce = "BigInt"
  }
  if coerce == "" {
    return input
  }
  return f.NewCallExpression(
    f.NewIdentifier(coerce),
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{input}),
    shimast.NodeFlagsNone,
  )
}

// check_template_capture_input re-extracts a placeholder's raw captured
// substring: `RegExp(/pattern/).exec(input)[index]`. The surrounding `.test()`
// (entry expression for a sole template, member expression for a union)
// guarantees the match is non-null. Numeric coercion belongs to
// check_template_value_conditions so direct captures and backtracking slices
// share the same path.
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
  return element
}

// check_template_backtracking accepts a template when at least one complete
// assignment of substrings to placeholders satisfies both their structural
// patterns and every runtime-checkable tag. One memoized visitor per template
// row enumerates UTF-16 offsets, matching JavaScript string slicing and RegExp
// semantics without repeating the same suffix search or committing to
// RegExp.exec's single greedy capture.
func check_template_backtracking(props Check_templateProps, tpl *nativemetadata.MetadataTemplate) *shimast.Node {
  f := nativecontext.EmitFactoryOf(check_template_factory, props.Emit)
  statements := make([]*shimast.Node, 0, (len(tpl.Row)+1)*2+1)
  for index := 0; index <= len(tpl.Row); index++ {
    memoName := fmt.Sprintf("_templateMemo%d", index)
    visitName := fmt.Sprintf("_templateVisit%d", index)
    offsetName := fmt.Sprintf("_templateStart%d", index)
    cachedName := fmt.Sprintf("_templateCached%d", index)
    resultName := fmt.Sprintf("_templateResult%d", index)
    offset := f.NewIdentifier(offsetName)
    memo := f.NewIdentifier(memoName)

    statements = append(statements,
      nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
        Name:  memoName,
        Value: f.NewNewExpression(f.NewIdentifier("Map"), nil, f.NewNodeList(nil)),
      }, props.Emit),
      nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
        Name: visitName,
        Value: f.NewArrowFunction(
          nil,
          nil,
          f.NewNodeList([]*shimast.Node{
            nativefactories.IdentifierFactory.Parameter(offsetName, nativefactories.TypeFactory.Keyword("number", props.Emit), nil, props.Emit),
          }),
          nativefactories.TypeFactory.Keyword("boolean", props.Emit),
          nil,
          f.NewToken(shimast.KindEqualsGreaterThanToken),
          f.NewBlock(f.NewNodeList([]*shimast.Node{
            nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
              Name: cachedName,
              Value: f.NewCallExpression(
                nativefactories.IdentifierFactory.Access(props.Emit, memo, "get"),
                nil,
                nil,
                f.NewNodeList([]*shimast.Node{offset}),
                shimast.NodeFlagsNone,
              ),
            }, props.Emit),
            f.NewIfStatement(
              f.NewBinaryExpression(
                nil,
                f.NewIdentifier(cachedName),
                nil,
                f.NewToken(shimast.KindExclamationEqualsEqualsToken),
                f.NewIdentifier("undefined"),
              ),
              f.NewReturnStatement(f.NewIdentifier(cachedName)),
              nil,
            ),
            nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
              Name:  resultName,
              Type:  nativefactories.TypeFactory.Keyword("boolean", props.Emit),
              Value: check_template_backtracking_step(props, tpl, index, offset),
            }, props.Emit),
            f.NewExpressionStatement(f.NewCallExpression(
              nativefactories.IdentifierFactory.Access(props.Emit, memo, "set"),
              nil,
              nil,
              f.NewNodeList([]*shimast.Node{offset, f.NewIdentifier(resultName)}),
              shimast.NodeFlagsNone,
            )),
            f.NewReturnStatement(f.NewIdentifier(resultName)),
          }), true),
        ),
      }, props.Emit),
    )
  }
  statements = append(statements, f.NewReturnStatement(check_template_backtracking_call(
    0,
    nativefactories.ExpressionFactory.Number(0, props.Emit),
    props.Emit,
  )))
  return f.NewCallExpression(
    f.NewParenthesizedExpression(f.NewArrowFunction(
      nil,
      nil,
      f.NewNodeList(nil),
      nativefactories.TypeFactory.Keyword("boolean", props.Emit),
      nil,
      f.NewToken(shimast.KindEqualsGreaterThanToken),
      f.NewBlock(f.NewNodeList(statements), true),
    )),
    nil,
    nil,
    nil,
    shimast.NodeFlagsNone,
  )
}

func check_template_backtracking_step(props Check_templateProps, tpl *nativemetadata.MetadataTemplate, index int, offset *shimast.Expression) *shimast.Node {
  f := nativecontext.EmitFactoryOf(check_template_factory, props.Emit)
  if index == len(tpl.Row) {
    return f.NewBinaryExpression(
      nil,
      offset,
      nil,
      f.NewToken(shimast.KindEqualsEqualsEqualsToken),
      nativefactories.IdentifierFactory.Access(props.Emit, props.Input, "length"),
    )
  }
  meta := tpl.Row[index]
  if literal, ok := template_literal_value(meta); ok {
    value := f.NewStringLiteral(literal, shimast.TokenFlagsNone)
    starts := f.NewCallExpression(
      nativefactories.IdentifierFactory.Access(props.Emit, props.Input, "startsWith"),
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{value, offset}),
      shimast.NodeFlagsNone,
    )
    nextOffset := f.NewBinaryExpression(
      nil,
      offset,
      nil,
      f.NewToken(shimast.KindPlusToken),
      nativefactories.IdentifierFactory.Access(props.Emit, value, "length"),
    )
    return f.NewBinaryExpression(
      nil,
      starts,
      nil,
      f.NewToken(shimast.KindAmpersandAmpersandToken),
      check_template_backtracking_call(index+1, nextOffset, props.Emit),
    )
  }

  endName := fmt.Sprintf("_templateEnd%d", index)
  end := f.NewIdentifier(endName)
  slice := f.NewCallExpression(
    nativefactories.IdentifierFactory.Access(props.Emit, props.Input, "slice"),
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{offset, end}),
    shimast.NodeFlagsNone,
  )
  conditions := []*shimast.Node{
    f.NewCallExpression(
      f.NewIdentifier("RegExp(/"+template_backtracking_pattern(meta)+"/).test"),
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{slice}),
      shimast.NodeFlagsNone,
    ),
  }
  if atomic, kind, ok := template_constrained_capture(meta); ok {
    conditions = append(conditions, check_template_condition_matrix(check_template_value_conditions(
      props,
      tpl.GetBaseName(),
      atomic,
      kind,
      slice,
    ), props.Emit))
  }
  conditions = append(conditions, check_template_backtracking_call(index+1, end, props.Emit))

  length := f.NewBinaryExpression(
    nil,
    f.NewBinaryExpression(
      nil,
      nativefactories.IdentifierFactory.Access(props.Emit, props.Input, "length"),
      nil,
      f.NewToken(shimast.KindMinusToken),
      offset,
    ),
    nil,
    f.NewToken(shimast.KindPlusToken),
    nativefactories.ExpressionFactory.Number(1, props.Emit),
  )
  positionName := fmt.Sprintf("_templateOffset%d", index)
  candidates := f.NewCallExpression(
    f.NewIdentifier("Array.from"),
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{
      f.NewObjectLiteralExpression(f.NewNodeList([]*shimast.Node{
        f.NewPropertyAssignment(nil, f.NewIdentifier("length"), nil, nil, length),
      }), false),
      f.NewArrowFunction(
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{
          nativefactories.IdentifierFactory.Parameter(fmt.Sprintf("_templateUnused%d", index), nil, nil, props.Emit),
          nativefactories.IdentifierFactory.Parameter(positionName, nativefactories.TypeFactory.Keyword("number", props.Emit), nil, props.Emit),
        }),
        nil,
        nil,
        f.NewToken(shimast.KindEqualsGreaterThanToken),
        f.NewBinaryExpression(
          nil,
          offset,
          nil,
          f.NewToken(shimast.KindPlusToken),
          f.NewIdentifier(positionName),
        ),
      ),
    }),
    shimast.NodeFlagsNone,
  )
  return f.NewCallExpression(
    nativefactories.IdentifierFactory.Access(props.Emit, candidates, "some"),
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{
      f.NewArrowFunction(
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{
          nativefactories.IdentifierFactory.Parameter(endName, nativefactories.TypeFactory.Keyword("number", props.Emit), nil, props.Emit),
        }),
        nil,
        nil,
        f.NewToken(shimast.KindEqualsGreaterThanToken),
        check_template_reduce(conditions, shimast.KindAmpersandAmpersandToken, props.Emit),
      ),
    }),
    shimast.NodeFlagsNone,
  )
}

func check_template_backtracking_call(index int, offset *shimast.Expression, emit *shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(check_template_factory, emit)
  return f.NewCallExpression(
    f.NewIdentifier(fmt.Sprintf("_templateVisit%d", index)),
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{offset}),
    shimast.NodeFlagsNone,
  )
}

func check_template_condition_matrix(matrix [][]nativehelpers.ICheckEntry_ICondition, emit *shimprinter.EmitContext) *shimast.Node {
  rows := make([]*shimast.Node, 0, len(matrix))
  for _, row := range matrix {
    columns := make([]*shimast.Node, 0, len(row))
    for _, condition := range row {
      columns = append(columns, condition.Expression)
    }
    rows = append(rows, check_template_reduce(columns, shimast.KindAmpersandAmpersandToken, emit))
  }
  return check_template_reduce(rows, shimast.KindBarBarToken, emit)
}

func check_template_backtracking_expected(tpl *nativemetadata.MetadataTemplate) string {
  names := []string{}
  seen := map[string]bool{}
  for _, meta := range tpl.Row {
    atomic, _, ok := template_constrained_capture(meta)
    if ok == false {
      continue
    }
    for _, row := range atomic.Tags {
      for _, tag := range row {
        if tag.Validate == "" && (tag.Kind != "exclude" || len(check_exclude_values(tag)) == 0) {
          continue
        }
        if seen[tag.Name] == false {
          seen[tag.Name] = true
          names = append(names, tag.Name)
        }
      }
    }
  }
  if len(names) == 0 {
    return tpl.GetBaseName()
  }
  return tpl.GetBaseName() + " & (" + strings.Join(names, " & ") + ")"
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
