package helpers

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type classifyJoinerNamespace struct{}

var ClassifyJoiner = classifyJoinerNamespace{}

type ClassifyJoiner_ObjectProps struct {
  Input   *shimast.Expression
  Entries []IExpressionEntry
  Object  *nativemetadata.MetadataObjectType
  // ClassRef is the value reference to the class (a bare identifier when in
  // lexical scope, or a resolved value import for a cross-module class). When
  // nil the bare object name is used. Resolved by the classify programmer, which
  // owns the importer and the call-site file.
  ClassRef *shimast.Node
  Emit     *shimprinter.EmitContext
}

var classifyJoiner_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

// Object reconstructs an object value for plain.classify.
//
// For an anonymous / interface (literal) shape there is no class to
// instantiate, so it builds a plain object literal exactly like clone. For a
// named class it field-copies onto the prototype:
//
//	const output = Object.create(<Class>.prototype) as any;
//	output.<key> = <decoded>;        // (guarded for optional properties)
//	for (const [key, value] of Object.entries(input)) { ...dynamic keys... }
//	return output;
//
// This is the universal fallback of the design's from -> new -> field-copy
// precedence: Object.create never calls the constructor, so it reconstructs any
// class regardless of its constructor signature. (The from / new strategies,
// which need the construct-signature checker APIs and per-class arity metadata,
// land in a later slice.)
//
// The class is referenced by props.ClassRef: a bare identifier when the class
// is in lexical scope at the classify() call site (the common same-file case),
// or a resolved value import when it is declared in another module (so a
// cross-module field-copied class does not throw ReferenceError).
func (classifyJoinerNamespace) Object(props ClassifyJoiner_ObjectProps) *shimast.Node {
  if props.Object == nil || props.Object.IsLiteral() {
    return CloneJoiner.Object(CloneJoiner_ObjectProps{
      Input:   props.Input,
      Entries: props.Entries,
      Emit:    props.Emit,
    })
  }
  f := nativecontext.EmitFactoryOf(classifyJoiner_factory, props.Emit)

  regular := []IExpressionEntry{}
  dynamic := []IExpressionEntry{}
  for _, entry := range props.Entries {
    if entry.Key.IsSoleLiteral() {
      regular = append(regular, entry)
    } else {
      dynamic = append(dynamic, entry)
    }
  }

  output := f.NewIdentifier("output")
  classRef := props.ClassRef
  if classRef == nil {
    classRef = f.NewIdentifier(props.Object.Name)
  }

  statements := []*shimast.Node{
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
      Name: "output",
      Value: f.NewAsExpression(
        f.NewCallExpression(
          f.NewIdentifier("Object.create"),
          nil,
          nil,
          f.NewNodeList([]*shimast.Node{
            nativefactories.IdentifierFactory.Access(props.Emit, classRef, "prototype"),
          }),
          shimast.NodeFlagsNone,
        ),
        nativefactories.TypeFactory.Keyword("any", props.Emit),
      ),
    }, props.Emit),
  }

  for _, entry := range regular {
    key := entry.Key.GetSoleLiteral()
    assignment := f.NewExpressionStatement(f.NewBinaryExpression(
      nil,
      nativefactories.IdentifierFactory.Access(props.Emit, output, *key),
      nil,
      f.NewToken(shimast.KindEqualsToken),
      entry.Expression,
    ))
    if entry.OptionalProperty {
      statements = append(statements, f.NewIfStatement(
        cloneJoiner_optional_condition(entry, props.Input, props.Emit),
        assignment,
        nil,
      ))
    } else {
      statements = append(statements, assignment)
    }
  }

  if len(dynamic) != 0 {
    key := f.NewIdentifier("key")
    loop := []*shimast.Node{}
    if len(regular) != 0 {
      loop = append(loop, cloneJoiner_regular_skip(regular, props.Emit))
    }
    for _, entry := range dynamic {
      loop = append(loop, f.NewIfStatement(
        f.NewCallExpression(
          f.NewIdentifier("RegExp(/"+cloneJoiner_metadata_to_pattern(struct {
            top      bool
            metadata *nativemetadata.MetadataSchema
          }{top: true, metadata: entry.Key})+"/).test"),
          nil,
          nil,
          f.NewNodeList([]*shimast.Node{key}),
          shimast.NodeFlagsNone,
        ),
        f.NewBlock(
          f.NewNodeList([]*shimast.Node{
            f.NewExpressionStatement(f.NewBinaryExpression(
              nil,
              f.NewElementAccessExpression(output, nil, key, shimast.NodeFlagsNone),
              nil,
              f.NewToken(shimast.KindEqualsToken),
              entry.Expression,
            )),
            f.NewContinueStatement(nil),
          }),
          false,
        ),
        nil,
      ))
    }
    statements = append(statements, f.NewForInOrOfStatement(
      shimast.KindForOfStatement,
      nil,
      nativefactories.StatementFactory.Entry(nativefactories.StatementFactory_EntryProps{Key: "key", Value: "value"}, props.Emit),
      f.NewCallExpression(
        f.NewIdentifier("Object.entries"),
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{props.Input}),
        shimast.NodeFlagsNone,
      ),
      f.NewBlock(f.NewNodeList(loop), false),
    ))
  }

  statements = append(statements, f.NewReturnStatement(output))
  // Wrap the reconstruction statements in an IIFE so the result is an
  // EXPRESSION, not a bare Block. The shared FeatureProgrammer object pipeline
  // treats the joiner result as an expression — it &&-reduces it with parent
  // checks, threads it through the recursion VisitGuard, and nests it as a
  // property value — so a raw Block lands in an expression position and the
  // emitter rejects it ("unexpected Expression: KindBlock"). Cloning's joiner
  // returns an object-literal expression for the same reason; the native-class
  // arm matches it via SelfCall, exactly like the typed-array buffer decode.
  return nativefactories.ExpressionFactory.SelfCall(props.Emit, f.NewBlock(f.NewNodeList(statements), true))
}
