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

type Check_dynamic_propertiesProps struct {
  Config  Check_object_IConfig
  Context nativecontext.ITypiaContext
  Regular []nativehelpers.IExpressionEntry
  Dynamic []nativehelpers.IExpressionEntry
  Input   *shimast.Expression
}

func Check_dynamic_properties(props Check_dynamic_propertiesProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(check_dynamic_properties_factory, props.Context.Emit)
  length := nativefactories.IdentifierFactory.Access(
    props.Context.Emit,
    f.NewCallExpression(
      f.NewIdentifier("Object.keys"),
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{props.Input}),
      shimast.NodeFlagsNone,
    ),
    "length",
  )

  var left *shimast.Node
  if props.Config.Equals && len(props.Dynamic) == 0 {
    required := check_dynamic_properties_required_count(props.Regular)
    if props.Config.Undefined || check_dynamic_properties_every_required(props.Regular) {
      left = f.NewBinaryExpression(
        nil,
        nativefactories.ExpressionFactory.Number(required, props.Context.Emit),
        nil,
        f.NewToken(shimast.KindEqualsEqualsEqualsToken),
        length,
      )
    } else {
      left = f.NewCallExpression(
        check_dynamic_properties_internal(props.Context, "isBetween"),
        nil,
        f.NewNodeList(nil),
        f.NewNodeList([]*shimast.Node{
          length,
          nativefactories.ExpressionFactory.Number(required, props.Context.Emit),
          nativefactories.ExpressionFactory.Number(len(props.Regular), props.Context.Emit),
        }),
        shimast.NodeFlagsNone,
      )
    }
  }
  if left != nil && !props.Config.Undefined && check_dynamic_properties_every_required(props.Regular) {
    return left
  }

  var criteria *shimast.Node
  property := check_dynamic_property(props)
  keys := f.NewCallExpression(
    f.NewIdentifier("Object.keys"),
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{props.Input}),
    shimast.NodeFlagsNone,
  )
  if props.Config.Entries != nil {
    criteria = f.NewCallExpression(
      props.Config.Entries,
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{keys, property}),
      shimast.NodeFlagsNone,
    )
  } else {
    method := "map"
    if props.Config.Assert {
      method = "every"
    }
    criteria = f.NewCallExpression(
      nativefactories.IdentifierFactory.Access(props.Context.Emit, keys, method),
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{property}),
      shimast.NodeFlagsNone,
    )
  }

  right := criteria
  if !props.Config.Assert {
    right = Check_everything(criteria, props.Context.Emit)
  }
  if props.Config.Halt != nil {
    right = props.Config.Halt(right)
  }
  if left == nil {
    return right
  }
  operator := shimast.KindAmpersandAmpersandToken
  if props.Config.Undefined {
    operator = shimast.KindBarBarToken
  }
  return f.NewBinaryExpression(
    nil,
    left,
    nil,
    f.NewToken(operator),
    right,
  )
}

func check_dynamic_property(props Check_dynamic_propertiesProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(check_dynamic_properties_factory, props.Context.Emit)
  key := f.NewIdentifier("key")
  value := f.NewIdentifier("value")

  statements := []*shimast.Node{}
  add := func(expression *shimast.Expression, output *shimast.Expression) {
    statements = append(statements, f.NewIfStatement(
      expression,
      f.NewReturnStatement(output),
      nil,
    ))
  }
  // terminated marks that `statements` already ends in an unconditional return,
  // so nothing after it could run. A signature that accepts every key sets it
  // from the loop; a declared key type that covers every key sets it from the
  // tail below.
  terminated := false

  if len(props.Regular) != 0 {
    add(is_regular_property(props.Regular, props.Context.Emit), props.Config.Positive)
  }
  statements = append(statements, nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
    Name:  "value",
    Value: f.NewElementAccessExpression(props.Input, nil, key, shimast.NodeFlagsNone),
  }, props.Context.Emit))
  if props.Config.Undefined {
    add(
      f.NewBinaryExpression(
        nil,
        f.NewIdentifier("undefined"),
        nil,
        f.NewToken(shimast.KindEqualsEqualsEqualsToken),
        value,
      ),
      props.Config.Positive,
    )
  }

  for _, entry := range props.Dynamic {
    condition := Check_dynamic_key(Check_dynamic_keyProps{
      Context:  props.Context,
      Metadata: entry.Key,
      Input:    key,
    })
    if condition.Kind == shimast.KindTrueKeyword {
      statements = append(statements, f.NewReturnStatement(entry.Expression))
      terminated = true
      break
    }
    add(condition, entry.Expression)
  }

  if !terminated {
    // Reaching here means the key satisfied no dynamic signature. Two different
    // things bring a key here, and they are not the same failure.
    //
    // A key whose *declared type* no signature covers -- `wrong` against
    // `[key: `prefix_${string}`]` -- is an extra property. Nothing declares it,
    // so `is` accepts it as it accepts any surplus property, and `equals`
    // reports it through `Superfluous`.
    //
    // A key the declaration does cover but whose *type tag* it breaks -- `ab`
    // against `[key: string & tags.MinLength<3>]` -- is a declared property
    // with an invalid key. It used to reach the same accepting tail, which made
    // every key tag inert: `[key: string & tags.Format<"uuid">]` accepted any
    // key at all, while the emitted check sat right above, used only to decide
    // *which* signature's value type to apply (#2347).
    //
    // So the tag failure is separated out first, by re-asking the same key
    // question with every type tag removed. What is left is exactly the
    // declared key type, and a key that answers it is a member of the object
    // whose key broke a constraint -- never a surplus property.
    shape := check_dynamic_properties_key_shape(props, key)
    if shape != nil {
      var invalid *shimast.Node
      if props.Config.InvalidKey != nil {
        invalid = props.Config.InvalidKey(
          value,
          check_dynamic_properties_key_expected(props.Dynamic),
          check_dynamic_properties_invalid_key_description(props.Context.Emit),
        )
      } else {
        // A programmer with no better report reduces both to the same answer,
        // as `is` does with `false`.
        invalid = props.Config.Superfluous(value, check_dynamic_properties_superfluous_description(props.Context.Emit))
      }
      if shape.Kind == shimast.KindTrueKeyword {
        // Every key the signature accepts is covered -- a string index
        // signature covers every key `Object.keys` can yield -- so the surplus
        // tail below is unreachable and is not emitted.
        statements = append(statements, f.NewReturnStatement(invalid))
        terminated = true
      } else {
        add(shape, invalid)
      }
    }
  }
  if !terminated {
    output := props.Config.Positive
    if props.Config.Equals {
      output = props.Config.Superfluous(value, check_dynamic_properties_superfluous_description(props.Context.Emit))
    }
    statements = append(statements, f.NewReturnStatement(output))
  }

  block := f.NewBlock(
    f.NewNodeList(statements),
    true,
  )
  return f.NewArrowFunction(
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{
      nativefactories.IdentifierFactory.Parameter("key", nil, nil, props.Context.Emit),
    }),
    nil,
    nil,
    f.NewToken(shimast.KindEqualsGreaterThanToken),
    block,
  )
}

func is_regular_property(regular []nativehelpers.IExpressionEntry, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(check_dynamic_properties_factory, emit...)
  elements := make([]*shimast.Node, 0, len(regular))
  for _, entry := range regular {
    key := entry.Key.GetSoleLiteral()
    if key != nil {
      elements = append(elements, f.NewStringLiteral(*key, shimast.TokenFlagsNone))
    }
  }
  return f.NewCallExpression(
    nativefactories.IdentifierFactory.Access(
      nil,
      f.NewArrayLiteralExpression(
        f.NewNodeList(elements),
        false,
      ),
      "some",
    ),
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{
      f.NewArrowFunction(
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{
          nativefactories.IdentifierFactory.Parameter("prop", nil, nil, emit...),
        }),
        nil,
        nil,
        f.NewToken(shimast.KindEqualsGreaterThanToken),
        f.NewBinaryExpression(
          nil,
          f.NewIdentifier("key"),
          nil,
          f.NewToken(shimast.KindEqualsEqualsEqualsToken),
          f.NewIdentifier("prop"),
        ),
      ),
    }),
    shimast.NodeFlagsNone,
  )
}

func check_dynamic_properties_required_count(entries []nativehelpers.IExpressionEntry) int {
  count := 0
  for _, entry := range entries {
    if entry.Meta.IsRequired() {
      count++
    }
  }
  return count
}

func check_dynamic_properties_every_required(entries []nativehelpers.IExpressionEntry) bool {
  for _, entry := range entries {
    if !entry.Meta.IsRequired() {
      return false
    }
  }
  return true
}

func check_dynamic_properties_internal(context nativecontext.ITypiaContext, name string) *shimast.Node {
  if importer := context.Importer; importer != nil {
    return importer.Internal(name)
  }
  f := nativecontext.EmitFactoryOf(check_dynamic_properties_factory, context.Emit)
  return f.NewIdentifier(name)
}

// The condition that the key belongs to some index signature's declared key
// type while breaking that signature's type tags -- the question the tail has
// to answer to tell an invalid key from a surplus property.
//
// It is the same `Check_dynamic_key` question asked of every signature with its
// type tags removed, joined with `||`. The tail runs only after each full
// condition returned false, so a signature whose declared type still answers
// yes is one whose tags are what the key broke.
//
// Nil when no signature carries a key tag. Then each stripped condition equals
// the full one the tail already refuted, so the check could never fire, and an
// object with untagged index signatures emits exactly what it emitted before.
func check_dynamic_properties_key_shape(props Check_dynamic_propertiesProps, key *shimast.Expression) *shimast.Node {
  tagged := false
  for _, entry := range props.Dynamic {
    if check_dynamic_properties_key_tagged(entry.Key) {
      tagged = true
      break
    }
  }
  if !tagged {
    return nil
  }
  conditions := make([]*shimast.Node, 0, len(props.Dynamic))
  for _, entry := range props.Dynamic {
    condition := Check_dynamic_key(Check_dynamic_keyProps{
      Context:  props.Context,
      Metadata: check_dynamic_properties_key_untagged(entry.Key),
      Input:    key,
    })
    if condition.Kind == shimast.KindTrueKeyword {
      return condition
    }
    conditions = append(conditions, condition)
  }
  return check_dynamic_key_reduce(conditions, shimast.KindBarBarToken, props.Context.Emit)
}

// Whether the key declaration constrains more than its own type, which is what
// makes the stripped question differ from the full one.
//
// One tag carrying a runtime check is enough, and the row it sits in need not
// carry them all. `Check_string` and `Check_number` filter per tag, so
// `[key: number & Minimum<0> & <a tag with no runtime check>]` still emits the
// minimum -- reading the row as all-or-nothing here would have declared that
// key untagged and left its minimum inert, which is the defect #2347 closed.
//
// Answering yes where the stripped question turns out identical costs an
// unreachable branch, never a wrong answer: the tail is reached only after
// every full condition refused the key, so a stripped condition equal to one of
// them refuses it too.
func check_dynamic_properties_key_tagged(metadata *nativemetadata.MetadataSchema) bool {
  for _, atomic := range metadata.Atomics {
    for _, row := range atomic.Tags {
      for _, tag := range row {
        if tag.Validate != "" {
          return true
        }
      }
    }
  }
  return false
}

// The key declaration with its type tags removed, leaving the declared type
// alone. Templates, constants, and natives carry no tags, so only the atomics
// are rebuilt; the clone keeps the original reportable name untouched.
func check_dynamic_properties_key_untagged(metadata *nativemetadata.MetadataSchema) *nativemetadata.MetadataSchema {
  clone := *metadata
  clone.Atomics = make([]*nativemetadata.MetadataAtomic, 0, len(metadata.Atomics))
  for _, atomic := range metadata.Atomics {
    clone.Atomics = append(clone.Atomics, nativemetadata.MetadataAtomic_create(nativemetadata.MetadataAtomic{
      Type: atomic.Type,
    }))
  }
  return &clone
}

// The type every declared key would have satisfied, for the report. Several
// signatures join with `|`, which is how the declaration reads.
func check_dynamic_properties_key_expected(dynamic []nativehelpers.IExpressionEntry) string {
  names := make([]string, 0, len(dynamic))
  for _, entry := range dynamic {
    names = append(names, entry.Key.GetName())
  }
  return strings.Join(names, " | ")
}

// The advice `Superfluous` gives -- remove the property -- is wrong here. The
// property is declared; its key is what broke.
func check_dynamic_properties_invalid_key_description(emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(check_dynamic_properties_factory, emit...)
  return f.NewCallExpression(
    nativefactories.IdentifierFactory.Access(
      nil,
      f.NewArrayLiteralExpression(
        f.NewNodeList([]*shimast.Node{
          f.NewTemplateExpression(
            f.NewTemplateHead("The key `", "The key \\`", shimast.TokenFlagsNone),
            f.NewNodeList([]*shimast.Node{
              f.NewTemplateSpan(
                f.NewIdentifier("key"),
                f.NewTemplateTail("` does not satisfy the type its index signature declares.", "\\` does not satisfy the type its index signature declares.", shimast.TokenFlagsNone),
              ),
            }),
          ),
          f.NewStringLiteral("", shimast.TokenFlagsNone),
          f.NewStringLiteral("Please correct the key next time.", shimast.TokenFlagsNone),
        }),
        true,
      ),
      "join",
    ),
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{
      f.NewStringLiteral("\n", shimast.TokenFlagsNone),
    }),
    shimast.NodeFlagsNone,
  )
}

func check_dynamic_properties_superfluous_description(emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(check_dynamic_properties_factory, emit...)
  return f.NewCallExpression(
    nativefactories.IdentifierFactory.Access(
      nil,
      f.NewArrayLiteralExpression(
        f.NewNodeList([]*shimast.Node{
          f.NewTemplateExpression(
            f.NewTemplateHead("The property `", "The property \\`", shimast.TokenFlagsNone),
            f.NewNodeList([]*shimast.Node{
              f.NewTemplateSpan(
                f.NewIdentifier("key"),
                f.NewTemplateTail("` is not defined in the object type.", "\\` is not defined in the object type.", shimast.TokenFlagsNone),
              ),
            }),
          ),
          f.NewStringLiteral("", shimast.TokenFlagsNone),
          f.NewStringLiteral("Please remove the property next time.", shimast.TokenFlagsNone),
        }),
        true,
      ),
      "join",
    ),
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{
      f.NewStringLiteral("\n", shimast.TokenFlagsNone),
    }),
    shimast.NodeFlagsNone,
  )
}

var check_dynamic_properties_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
