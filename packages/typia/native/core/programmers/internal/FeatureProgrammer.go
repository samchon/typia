package internal

import (
  "fmt"
  "sort"
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativeiterate "github.com/samchon/typia/packages/typia/native/core/programmers/iterate"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type featureProgrammerNamespace struct{}

var FeatureProgrammer = featureProgrammerNamespace{}

// FeatureProgrammer_IConfig is the configuration of FeatureProgrammer, which
// lets each generating feature supply its types, decoder, object operations and
// generators. Prefix names the generated helper functions. Path and Trace add
// the `_path` and `_exceptionable` parameters. ObjectParents turns on the
// object-parent compaction, and Addition adds statements for the analyzed
// collection.
//
// @evidence contracts/common.md#principled-implementation It is the configuration of FeatureProgrammer, which lets each generating feature supply its types, decoder, object operations and generators; its 12 members (Types, Prefix, Path, Trace, Addition, Initializer, Decoder, Objector, Generator, ObjectParents, Visited, VisitGuard) are supplied by the caller, so the shared programmer holds no feature-specific behavior.
// @evidence contracts/common.md#clear-and-simple-design A 12-member record of values and callbacks.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
// @evidence contracts/common.md#meaningful-documentation The doc states the role and the meaning of the members that are not obvious.
type FeatureProgrammer_IConfig struct {
  Types         FeatureProgrammer_IConfig_ITypes
  Prefix        string
  Path          bool
  Trace         bool
  Addition      func(collection *nativemetadata.MetadataCollection) []*shimast.Node
  Initializer   func(props FeatureProgrammer_InitializerProps) FeatureProgrammer_InitializerOutput
  Decoder       func(props FeatureProgrammer_DecoderProps) *shimast.Node
  Objector      FeatureProgrammer_IConfig_IObjector
  Generator     FeatureProgrammer_IConfig_IGenerator
  ObjectParents bool
  // Visited reports whether the analyzed type graph carries a recursive
  // component (issue #1820). It is a closure (usually the functor's Visited
  // method) because the answer is unknown until metadata analysis runs,
  // which happens after the config is constructed. When true, generated
  // functions thread a per-invocation `_vctx` visit context.
  Visited func() bool
  // VisitGuard wraps a recursive function's body with the feature's own
  // cycle handling (e.g. checkers report a revisited object as valid). Nil
  // keeps the body untouched even when Visited is on.
  VisitGuard func(props FeatureProgrammer_VisitGuardProps) *shimast.Node
}

// FeatureProgrammer_VisitGuardProps is the argument of the VisitGuard hook,
// which wraps the body of a recursive function.
//
// @evidence contracts/common.md#principled-implementation It is the argument of the VisitGuard hook, which wraps the body of a recursive function; its 4 fields (Key, Input, Body, Object) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 4-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type FeatureProgrammer_VisitGuardProps struct {
  // Key names the `_vctx` slot of the guarded function (e.g. "o3" for the
  // object function of index 3), so each recursive function tracks its own
  // visit set and union-branch probing cannot pollute sibling checks.
  Key   string
  Input *shimast.Expression
  Body  *shimast.Node
  // Object is the recursive object being guarded, so a feature's VisitGuard can
  // choose a prototype-bearing allocator (classify: Object.create(Name.prototype)
  // for a named class, matching ClassifyJoiner.Object). nil keeps the legacy
  // plain-container ({}/[]) behavior used by clone, notation, and the rest.
  Object *nativemetadata.MetadataObjectType
}

// FeatureProgrammer_IConfig_ITypes is the type builders of a feature, which give
// the type of the generated function's input and output.
//
// @evidence contracts/common.md#principled-implementation It is the type builders of a feature, which give the type of the generated function's input and output; its 2 members (Input, Output) are supplied by the caller, so the shared programmer holds no feature-specific behavior.
// @evidence contracts/common.md#clear-and-simple-design A 2-member record of values and callbacks.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
// @evidence contracts/common.md#meaningful-documentation The doc states the role.
type FeatureProgrammer_IConfig_ITypes struct {
  Input  func(t *shimchecker.Type, name *string) *shimast.TypeNode
  Output func(t *shimchecker.Type, name *string) *shimast.TypeNode
}

// FeatureProgrammer_IConfig_IObjector is the object operations that a feature
// supplies to FeatureProgrammer. Checker, Decoder, Joiner, Unionizer, Failure
// and Full build the feature's checks and results, Is and Required test an
// input, and Type is the checked type.
//
// @evidence contracts/common.md#principled-implementation It is the object operations that a feature supplies to FeatureProgrammer; its 9 members (Checker, Decoder, Joiner, Unionizer, Failure, Is, Required, Full, Type) are supplied by the caller, so the shared programmer holds no feature-specific behavior.
// @evidence contracts/common.md#clear-and-simple-design A 9-member record of values and callbacks.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
// @evidence contracts/common.md#meaningful-documentation The doc states the role and the meaning of the members that are not obvious.
type FeatureProgrammer_IConfig_IObjector struct {
  Checker   func(props FeatureProgrammer_ObjectorCheckerProps) *shimast.Node
  Decoder   func(props FeatureProgrammer_ObjectorDecoderProps) *shimast.Node
  Joiner    func(props FeatureProgrammer_ObjectorJoinerProps) *shimast.Node
  Unionizer func(props FeatureProgrammer_ObjectorUnionizerProps) *shimast.Node
  Failure   func(props FeatureProgrammer_ObjectorFailureProps) *shimast.Node
  Is        func(exp *shimast.Expression) *shimast.Node
  Required  func(exp *shimast.Expression) *shimast.Node
  Full      func(props FeatureProgrammer_ObjectorFullProps) *shimast.Node
  Type      *shimast.TypeNode
}

// FeatureProgrammer_IConfig_IGenerator is the optional generators that replace
// how a feature writes its object, union, array and tuple functions.
//
// @evidence contracts/common.md#principled-implementation It is the optional generators that replace how a feature writes its object, union, array and tuple functions; its 4 members (Objects, Unions, Arrays, Tuples) are supplied by the caller, so the shared programmer holds no feature-specific behavior.
// @evidence contracts/common.md#clear-and-simple-design A 4-member record of values and callbacks.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
// @evidence contracts/common.md#meaningful-documentation The doc states the role.
type FeatureProgrammer_IConfig_IGenerator struct {
  Objects func(collection *nativemetadata.MetadataCollection) []*shimast.Node
  Unions  func(collection *nativemetadata.MetadataCollection) []*shimast.Node
  Arrays  func(collection *nativemetadata.MetadataCollection) []*shimast.Node
  Tuples  func(collection *nativemetadata.MetadataCollection) []*shimast.Node
}

// FeatureProgrammer_IExplore is the explore state of the union explorer, which
// feature programmers share.
//
// @evidence contracts/common.md#principled-implementation It is the explore state of the union explorer, which feature programmers share, so the two names cannot drift apart.
// @evidence contracts/common.md#clear-and-simple-design A type alias.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
// @evidence contracts/common.md#meaningful-documentation The doc states what the alias stands for.
type FeatureProgrammer_IExplore = nativehelpers.UnionExplorer_IExplore

// FeatureProgrammer_InitializerProps is the argument of the Initializer hook,
// which analyzes the type of a feature.
//
// @evidence contracts/common.md#principled-implementation It is the argument of the Initializer hook, which analyzes the type of a feature; its 3 fields (Context, Functor, Type) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 3-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type FeatureProgrammer_InitializerProps struct {
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Type    *shimchecker.Type
}

// FeatureProgrammer_InitializerOutput is the result of the Initializer hook: the
// metadata collection and the metadata of the analyzed type.
//
// @evidence contracts/common.md#principled-implementation It is the result of the Initializer hook: the metadata collection and the metadata of the analyzed type; its 2 fields (Collection, Metadata) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 2-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type FeatureProgrammer_InitializerOutput struct {
  Collection *nativemetadata.MetadataCollection
  Metadata   *nativemetadata.MetadataSchema
}

// FeatureProgrammer_DecoderProps is the argument of the Decoder hook of a
// feature: the metadata, the input and the explore state.
//
// @evidence contracts/common.md#principled-implementation It is the argument of the Decoder hook of a feature: the metadata, the input and the explore state; its 3 fields (Metadata, Input, Explore) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 3-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type FeatureProgrammer_DecoderProps struct {
  Metadata *nativemetadata.MetadataSchema
  Input    *shimast.Expression
  Explore  FeatureProgrammer_IExplore
}

// FeatureProgrammer_ObjectorCheckerProps is the argument of the Checker
// operation of a feature: the metadata, the input and the explore state.
//
// @evidence contracts/common.md#principled-implementation It is the argument of the Checker operation of a feature: the metadata, the input and the explore state; its 3 fields (Metadata, Input, Explore) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 3-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type FeatureProgrammer_ObjectorCheckerProps struct {
  Metadata *nativemetadata.MetadataSchema
  Input    *shimast.Expression
  Explore  FeatureProgrammer_IExplore
}

// FeatureProgrammer_ObjectorDecoderProps is the argument of the Decoder
// operation of a feature: the input, the object type and the explore state.
//
// @evidence contracts/common.md#principled-implementation It is the argument of the Decoder operation of a feature: the input, the object type and the explore state; its 3 fields (Input, Object, Explore) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 3-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type FeatureProgrammer_ObjectorDecoderProps struct {
  Input   *shimast.Expression
  Object  *nativemetadata.MetadataObjectType
  Explore FeatureProgrammer_IExplore
}

// FeatureProgrammer_ObjectorJoinerProps is the argument of the Joiner operation
// of a feature: the property entries, the input and the object type.
//
// @evidence contracts/common.md#principled-implementation It is the argument of the Joiner operation of a feature: the property entries, the input and the object type; its 3 fields (Entries, Input, Object) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 3-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type FeatureProgrammer_ObjectorJoinerProps struct {
  Entries []nativehelpers.IExpressionEntry
  Input   *shimast.Expression
  Object  *nativemetadata.MetadataObjectType
}

// FeatureProgrammer_ObjectorUnionizerProps is the argument of the Unionizer
// operation of a feature: the object types, the input and the explore state.
//
// @evidence contracts/common.md#principled-implementation It is the argument of the Unionizer operation of a feature: the object types, the input and the explore state; its 3 fields (Objects, Input, Explore) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 3-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type FeatureProgrammer_ObjectorUnionizerProps struct {
  Objects []*nativemetadata.MetadataObjectType
  Input   *shimast.Expression
  Explore FeatureProgrammer_IExplore
}

// FeatureProgrammer_ObjectorFailureProps is the argument of the Failure
// operation of a feature: the input, the expected description and the explore
// state.
//
// @evidence contracts/common.md#principled-implementation It is the argument of the Failure operation of a feature: the input, the expected description and the explore state; its 3 fields (Input, Expected, Explore) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 3-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type FeatureProgrammer_ObjectorFailureProps struct {
  Input    *shimast.Expression
  Expected string
  Explore  *FeatureProgrammer_IExplore
}

// FeatureProgrammer_ObjectorFullProps is the argument of the Full operation of a
// feature: the condition, the input, the expected description and the explore
// state.
//
// @evidence contracts/common.md#principled-implementation It is the argument of the Full operation of a feature: the condition, the input, the expected description and the explore state; its 4 fields (Condition, Input, Expected, Explore) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 4-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type FeatureProgrammer_ObjectorFullProps struct {
  Condition *shimast.Expression
  Input     *shimast.Expression
  Expected  string
  Explore   FeatureProgrammer_IExplore
}

// FeatureProgrammer_Decoder is the callback type that decodes a definition of
// any metadata kind with an input and an explore state.
//
// @evidence contracts/common.md#principled-implementation It is the callback type that decodes a definition of any metadata kind with an input and an explore state.
// @evidence contracts/common.md#clear-and-simple-design A single type declaration.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
// @evidence contracts/common.md#meaningful-documentation The doc states what the type is.
type FeatureProgrammer_Decoder[T any] func(props struct {
  Input      *shimast.Expression
  Definition T
  Explore    FeatureProgrammer_IExplore
}) *shimast.Node

// FeatureProgrammer_IComposed is the result of FeatureProgrammer.Compose: the
// body, the parameters, the helper functions, the statements and the response
// type.
//
// @evidence contracts/common.md#principled-implementation It is the result of FeatureProgrammer.Compose: the body, the parameters, the helper functions, the statements and the response type; its 5 fields (Body, Parameters, Functions, Statements, Response) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 5-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type FeatureProgrammer_IComposed struct {
  Body       *shimast.Node
  Parameters []*shimast.Node
  Functions  map[string]*shimast.Node
  Statements []*shimast.Node
  Response   *shimast.TypeNode
}

// FeatureProgrammer_IDecomposed is the result of FeatureProgrammer.Decompose:
// the helper functions, the statements and the arrow function.
//
// @evidence contracts/common.md#principled-implementation It is the result of FeatureProgrammer.Decompose: the helper functions, the statements and the arrow function; its 3 fields (Functions, Statements, Arrow) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 3-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type FeatureProgrammer_IDecomposed struct {
  Functions  map[string]*shimast.Node
  Statements []*shimast.Node
  Arrow      *shimast.Node
}

// FeatureProgrammer_ComposeProps is the argument record of
// FeatureProgrammer.Compose, which composes the function of a type.
//
// @evidence contracts/common.md#principled-implementation It is the argument record of FeatureProgrammer.Compose, which composes the function of a type; its 5 fields (Context, Config, Functor, Type, Name) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 5-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type FeatureProgrammer_ComposeProps struct {
  Context nativecontext.ITypiaContext
  Config  FeatureProgrammer_IConfig
  Functor *nativehelpers.FunctionProgrammer
  Type    *shimchecker.Type
  Name    *string
}

// FeatureProgrammer_WriteDecomposedProps is the argument record of
// FeatureProgrammer.WriteDecomposed, which writes a decomposed function as one
// call expression. ReturnWrapper, when set, wraps the arrow that is returned.
//
// @evidence contracts/common.md#principled-implementation It is the argument record of FeatureProgrammer.WriteDecomposed, which writes a decomposed function as one call expression; its 5 fields (Modulo, Functor, Result, ReturnWrapper, Emit) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 5-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is and explains its non-obvious fields.
type FeatureProgrammer_WriteDecomposedProps struct {
  Modulo        *shimast.Expression
  Functor       *nativehelpers.FunctionProgrammer
  Result        FeatureProgrammer_IDecomposed
  ReturnWrapper func(arrow *shimast.Node) *shimast.Node
  Emit          *shimprinter.EmitContext
}

// FeatureProgrammer_WriteProps is the argument record of
// FeatureProgrammer.Write, which writes the function of a type.
//
// @evidence contracts/common.md#principled-implementation It is the argument record of FeatureProgrammer.Write, which writes the function of a type; its 5 fields (Context, Config, Functor, Type, Name) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 5-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type FeatureProgrammer_WriteProps struct {
  Context nativecontext.ITypiaContext
  Config  FeatureProgrammer_IConfig
  Functor *nativehelpers.FunctionProgrammer
  Type    *shimchecker.Type
  Name    *string
}

// FeatureProgrammer_WriteObjectFunctionsProps is the argument record of
// FeatureProgrammer.Write_object_functions, which writes the object functions of
// a metadata collection.
//
// @evidence contracts/common.md#principled-implementation It is the argument record of FeatureProgrammer.Write_object_functions, which writes the object functions of a metadata collection; its 4 fields (Config, Context, Functor, Collection) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 4-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type FeatureProgrammer_WriteObjectFunctionsProps struct {
  Config     FeatureProgrammer_IConfig
  Context    nativecontext.ITypiaContext
  Functor    *nativehelpers.FunctionProgrammer
  Collection *nativemetadata.MetadataCollection
}

// FeatureProgrammer_WriteUnionFunctionsProps is the argument record of
// FeatureProgrammer.Write_union_functions, which writes the union functions of a
// metadata collection.
//
// @evidence contracts/common.md#principled-implementation It is the argument record of FeatureProgrammer.Write_union_functions, which writes the union functions of a metadata collection; its 3 fields (Config, Collection, Emit) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 3-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type FeatureProgrammer_WriteUnionFunctionsProps struct {
  Config     FeatureProgrammer_IConfig
  Collection *nativemetadata.MetadataCollection
  Emit       *shimprinter.EmitContext
}

// FeatureProgrammer_DecodeArrayConfig is the configuration of
// FeatureProgrammer.Decode_array. Trace and Path add the index parameter, Prefix
// names the helper functions and Decoder decodes the elements.
//
// @evidence contracts/common.md#principled-implementation It is the configuration of FeatureProgrammer.Decode_array; its 4 members (Trace, Path, Decoder, Prefix) are supplied by the caller, so the shared programmer holds no feature-specific behavior.
// @evidence contracts/common.md#clear-and-simple-design A 4-member record of values and callbacks.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
// @evidence contracts/common.md#meaningful-documentation The doc states the role and the meaning of the members that are not obvious.
type FeatureProgrammer_DecodeArrayConfig struct {
  Trace   bool
  Path    bool
  Decoder func(props FeatureProgrammer_DecoderProps) *shimast.Node
  Prefix  string
}

// FeatureProgrammer_DecodeArrayProps is the argument record of
// FeatureProgrammer.Decode_array, which decodes an array type. Combiner joins
// the input and the element arrow.
//
// @evidence contracts/common.md#principled-implementation It is the argument record of FeatureProgrammer.Decode_array, which decodes an array type; its 7 fields (Config, Functor, Combiner, Array, Input, Explore, Emit) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 7-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is and explains its non-obvious fields.
type FeatureProgrammer_DecodeArrayProps struct {
  Config   FeatureProgrammer_DecodeArrayConfig
  Functor  *nativehelpers.FunctionProgrammer
  Combiner func(next struct {
    Input *shimast.Expression
    Arrow *shimast.Node
  }) *shimast.Node
  Array   *nativemetadata.MetadataArray
  Input   *shimast.Expression
  Explore FeatureProgrammer_IExplore
  Emit    *shimprinter.EmitContext
}

// FeatureProgrammer_DecodeObjectConfig is the configuration of
// FeatureProgrammer.Decode_object.
//
// @evidence contracts/common.md#principled-implementation It is the configuration of FeatureProgrammer.Decode_object; its 4 members (Trace, Path, Prefix, Visited) are supplied by the caller, so the shared programmer holds no feature-specific behavior.
// @evidence contracts/common.md#clear-and-simple-design A 4-member record of values and callbacks.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
// @evidence contracts/common.md#meaningful-documentation The doc states the role.
type FeatureProgrammer_DecodeObjectConfig struct {
  Trace  bool
  Path   bool
  Prefix string
  // Visited threads the per-invocation `_vctx` argument to the called object
  // function. It must come from the calling feature's own config — not from
  // the (possibly shared) functor — so a visit-tracking feature composed with
  // a non-tracking one (e.g. assert + clone) cannot leak the argument into
  // functions that do not declare it.
  Visited bool
}

// FeatureProgrammer_DecodeObjectProps is the argument record of
// FeatureProgrammer.Decode_object, which calls the function of one object type.
//
// @evidence contracts/common.md#principled-implementation It is the argument record of FeatureProgrammer.Decode_object, which calls the function of one object type; its 6 fields (Config, Functor, Object, Input, Explore, Emit) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 6-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type FeatureProgrammer_DecodeObjectProps struct {
  Config  FeatureProgrammer_DecodeObjectConfig
  Functor *nativehelpers.FunctionProgrammer
  Object  *nativemetadata.MetadataObjectType
  Input   *shimast.Expression
  Explore FeatureProgrammer_IExplore
  Emit    *shimprinter.EmitContext
}

// FeatureProgrammer_IndexProps is the argument record of
// FeatureProgrammer.Index, which builds the path text of an array element. Start
// is the index offset, Postfix the path suffix and Rand the counter suffix of
// the generated index variable.
//
// @evidence contracts/common.md#principled-implementation It is the argument record of FeatureProgrammer.Index, which builds the path text of an array element; its 3 fields (Start, Postfix, Rand) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 3-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is and explains its non-obvious fields.
type FeatureProgrammer_IndexProps struct {
  Start   *int
  Postfix string
  Rand    string
}

// FeatureProgrammer_ArgumentsArrayProps is the argument record of
// FeatureProgrammer.ArgumentsArray, which builds the arguments of a call to a
// generated array function.
//
// @evidence contracts/common.md#principled-implementation It is the argument record of FeatureProgrammer.ArgumentsArray, which builds the arguments of a call to a generated array function; its 4 fields (Config, Input, Explore, Emit) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 4-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type FeatureProgrammer_ArgumentsArrayProps struct {
  Config  FeatureProgrammer_ArgumentsArrayConfig
  Input   *shimast.Expression
  Explore FeatureProgrammer_IExplore
  Emit    *shimprinter.EmitContext
}

// FeatureProgrammer_ArgumentsArrayConfig is the configuration of
// FeatureProgrammer.ArgumentsArray. Path and Trace add the path and
// exceptionable arguments, and Visited adds the `_vctx` argument.
//
// @evidence contracts/common.md#principled-implementation It is the configuration of FeatureProgrammer.ArgumentsArray; its 3 members (Path, Trace, Visited) are supplied by the caller, so the shared programmer holds no feature-specific behavior.
// @evidence contracts/common.md#clear-and-simple-design A 3-member record of values and callbacks.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
// @evidence contracts/common.md#meaningful-documentation The doc states the role and the meaning of the members that are not obvious.
type FeatureProgrammer_ArgumentsArrayConfig struct {
  Path    bool
  Trace   bool
  Visited bool
}

// FeatureProgrammer_ParameterDeclarationsProps is the argument record of
// FeatureProgrammer.ParameterDeclarations, which builds the parameters of a
// generated function.
//
// @evidence contracts/common.md#principled-implementation It is the argument record of FeatureProgrammer.ParameterDeclarations, which builds the parameters of a generated function; its 4 fields (Config, Type, Input, Emit) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 4-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type FeatureProgrammer_ParameterDeclarationsProps struct {
  Config FeatureProgrammer_ParameterConfig
  Type   *shimast.TypeNode
  Input  *shimast.Node
  Emit   *shimprinter.EmitContext
}

// FeatureProgrammer_ParameterConfig is the configuration of
// FeatureProgrammer.ParameterDeclarations. Path adds the `_path` parameter,
// Trace the `_exceptionable` parameter and Visited the `_vctx` parameter.
//
// @evidence contracts/common.md#principled-implementation It is the configuration of FeatureProgrammer.ParameterDeclarations; its 3 members (Path, Trace, Visited) are supplied by the caller, so the shared programmer holds no feature-specific behavior.
// @evidence contracts/common.md#clear-and-simple-design A 3-member record of values and callbacks.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
// @evidence contracts/common.md#meaningful-documentation The doc states the role and the meaning of the members that are not obvious.
type FeatureProgrammer_ParameterConfig struct {
  Path    bool
  Trace   bool
  Visited bool
}

// featureProgrammer_visited resolves the late-bound recursion flag; the
// closure is nil for features that do not participate in visit tracking.
func featureProgrammer_visited(config FeatureProgrammer_IConfig) bool {
  return config.Visited != nil && config.Visited()
}

// VisitKey names a recursive function's `_vctx` slot after the function
// itself (its prefixed name minus the leading underscore, e.g. "io0", "co2").
// Composed features share one context object — clone embeds is-checks for
// union discrimination, for instance — so the slot must carry the feature
// prefix or two families would clash on the same key with different
// container kinds.
func (featureProgrammerNamespace) VisitKey(prefix string, kind string, index int) string {
  return strings.TrimPrefix(fmt.Sprintf("%s%s%d", prefix, kind, index), "_")
}

// CollectionRecursive reports whether the analyzed type graph carries any
// recursive component — the precondition for a runtime value to drive the
// generated function call graph into a cycle (issue #1820).
func (featureProgrammerNamespace) CollectionRecursive(collection *nativemetadata.MetadataCollection) bool {
  for _, object := range collection.Objects() {
    if object.Recursive {
      return true
    }
  }
  for _, array := range collection.Arrays() {
    if array.Recursive {
      return true
    }
  }
  for _, tuple := range collection.Tuples() {
    if tuple.Recursive {
      return true
    }
  }
  return false
}

// VisitGuardSkip wraps a recursive in-place walker (prune) so a revisited
// object is simply skipped: pruning is idempotent per instance, which makes
// the skip both the cycle breaker and the DAG deduplication. Handles the
// block bodies the prune joiner produces as well as expression bodies.
func (featureProgrammerNamespace) VisitGuardSkip(key string, body *shimast.Node, emit *shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(featureProgrammer_factory, emit)
  slot := "_vctx." + key
  has := f.NewIdentifier("(" + slot + " || (" + slot + " = new WeakSet())).has(input)")
  add := f.NewIdentifier(slot + ".add(input)")
  if body != nil && body.Kind == shimast.KindBlock {
    statements := []*shimast.Node{
      f.NewIfStatement(has, f.NewReturnStatement(nil), nil),
      f.NewExpressionStatement(add),
    }
    statements = append(statements, body.Statements()...)
    return f.NewBlock(f.NewNodeList(statements), true)
  }
  return nativefactories.ExpressionFactory.Conditional(
    has,
    f.NewIdentifier("undefined"),
    f.NewParenthesizedExpression(
      f.NewBinaryExpression(
        nil,
        add,
        nil,
        f.NewToken(shimast.KindCommaToken),
        f.NewParenthesizedExpression(body),
      ),
    ),
    emit,
  )
}

// VisitGuardSerialize wraps a recursive serializer function (json.stringify,
// protobuf.encode) with on-stack cycle detection: JSON and protobuf cannot
// represent cycles, so a value met again while still being serialized raises
// the feature's thrower instead of overflowing the stack. Unlike the checker
// and rebuilder guards the entry is removed after the body finishes either
// way, because re-serializing a DAG alias at another position is legal and
// must keep working.
func (featureProgrammerNamespace) VisitGuardSerialize(key string, thrower *shimast.Node, body *shimast.Node, emit *shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(featureProgrammer_factory, emit)
  slot := "_vctx." + key
  bodyExpression := featureProgrammer_block_to_expression(body, emit)
  finisher := f.NewArrowFunction(
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{
      nativefactories.IdentifierFactory.Parameter("_vout", nativefactories.TypeFactory.Keyword("any"), nil),
    }),
    nil,
    nil,
    f.NewToken(shimast.KindEqualsGreaterThanToken),
    f.NewParenthesizedExpression(
      f.NewBinaryExpression(
        nil,
        f.NewIdentifier(slot+".delete(input)"),
        nil,
        f.NewToken(shimast.KindCommaToken),
        f.NewIdentifier("_vout"),
      ),
    ),
  )
  return nativefactories.ExpressionFactory.Conditional(
    f.NewIdentifier("("+slot+" || ("+slot+" = new WeakSet())).has(input)"),
    thrower,
    f.NewParenthesizedExpression(
      f.NewBinaryExpression(
        nil,
        f.NewIdentifier(slot+".add(input)"),
        nil,
        f.NewToken(shimast.KindCommaToken),
        f.NewCallExpression(
          f.NewParenthesizedExpression(finisher),
          nil,
          nil,
          f.NewNodeList([]*shimast.Node{bodyExpression}),
          shimast.NodeFlagsNone,
        ),
      ),
    ),
    emit,
  )
}

// VisitGuardRebuild wraps a recursive rebuilder function (clone, notations)
// so a revisited source object returns the output instance allocated on its
// first visit — reproducing runtime cycles and deduplicating DAG aliases.
// The output container registers in the WeakMap BEFORE the body evaluates,
// so recursive references inside the body resolve to the same (still
// filling) instance, exactly like the structured-clone algorithm.
func (featureProgrammerNamespace) VisitGuardRebuild(key string, array bool, body *shimast.Node, emit *shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(featureProgrammer_factory, emit)
  allocator := f.NewObjectLiteralExpression(f.NewNodeList(nil), false)
  if array {
    allocator = f.NewArrayLiteralExpression(f.NewNodeList(nil), false)
  }
  return FeatureProgrammer.VisitGuardRebuildWith(key, allocator, body, emit)
}

// VisitGuardRebuildWith is VisitGuardRebuild with a caller-supplied output
// container. clone/notation pass a plain {} (or [] for arrays); classify passes
// Object.create(<Class>.prototype) for a named class so the WeakMap-registered
// instance carries the right prototype — `x instanceof Class` then holds even on
// the recursive arm, where the joiner body's own (unregistered) instance is
// merged onto this allocator by Object.assign and discarded. The allocator
// registers in the WeakMap BEFORE the body evaluates, so a back-reference
// inside the body resolves to this same (still filling) instance.
func (featureProgrammerNamespace) VisitGuardRebuildWith(key string, allocator *shimast.Node, body *shimast.Node, emit *shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(featureProgrammer_factory, emit)
  slot := "_vctx." + key
  bodyExpression := featureProgrammer_block_to_expression(body, emit)
  filler := f.NewArrowFunction(
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{
      nativefactories.IdentifierFactory.Parameter("_vout", nativefactories.TypeFactory.Keyword("any"), nil),
    }),
    nil,
    nil,
    f.NewToken(shimast.KindEqualsGreaterThanToken),
    f.NewParenthesizedExpression(
      f.NewBinaryExpression(
        nil,
        f.NewIdentifier(slot+".set(input, _vout)"),
        nil,
        f.NewToken(shimast.KindCommaToken),
        f.NewCallExpression(
          f.NewIdentifier("Object.assign"),
          nil,
          nil,
          f.NewNodeList([]*shimast.Node{
            f.NewIdentifier("_vout"),
            bodyExpression,
          }),
          shimast.NodeFlagsNone,
        ),
      ),
    ),
  )
  return nativefactories.ExpressionFactory.Conditional(
    f.NewIdentifier("("+slot+" || ("+slot+" = new WeakMap())).has(input)"),
    f.NewIdentifier(slot+".get(input)"),
    f.NewCallExpression(
      f.NewParenthesizedExpression(filler),
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{allocator}),
      shimast.NodeFlagsNone,
    ),
    emit,
  )
}

func featureProgrammer_block_to_expression(body *shimast.Node, emit *shimprinter.EmitContext) *shimast.Node {
  if body != nil && body.Kind == shimast.KindBlock {
    return nativefactories.ExpressionFactory.SelfCall(emit, body)
  }
  return body
}

var featureProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (featureProgrammerNamespace) Compose(props FeatureProgrammer_ComposeProps) FeatureProgrammer_IComposed {
  initialized := props.Config.Initializer(FeatureProgrammer_InitializerProps{
    Context: props.Context,
    Functor: props.Functor,
    Type:    props.Type,
  })
  featureProgrammer_compact_object_parents(props.Config, initialized.Collection)
  featureProgrammer_register_schema_unions(initialized.Collection, initialized.Metadata, map[*nativemetadata.MetadataSchema]bool{})
  body := props.Config.Decoder(FeatureProgrammer_DecoderProps{
    Input:    nativefactories.ValueFactory.INPUT(props.Context.Emit),
    Metadata: initialized.Metadata,
    Explore: FeatureProgrammer_IExplore{
      Tracable: props.Config.Path || props.Config.Trace,
      Source:   "top",
      From:     "top",
      Postfix:  "\"\"",
    },
  })
  statements := []*shimast.Node{}
  if props.Config.Addition != nil {
    statements = props.Config.Addition(initialized.Collection)
  }
  functions := map[string]*shimast.Node{}
  for i, v := range featureProgrammer_object_functions(props, initialized.Collection) {
    functions[fmt.Sprintf("%so%d", props.Config.Prefix, i)] = v
  }
  for i, v := range featureProgrammer_union_functions(props.Config, initialized.Collection, props.Context.Emit) {
    functions[fmt.Sprintf("%su%d", props.Config.Prefix, i)] = v
  }
  for i, v := range props.Config.Generator.Arrays(initialized.Collection) {
    functions[fmt.Sprintf("%sa%d", props.Config.Prefix, i)] = v
  }
  for i, v := range props.Config.Generator.Tuples(initialized.Collection) {
    functions[fmt.Sprintf("%st%d", props.Config.Prefix, i)] = v
  }
  return FeatureProgrammer_IComposed{
    Body:       body,
    Statements: statements,
    Functions:  functions,
    Parameters: FeatureProgrammer.ParameterDeclarations(FeatureProgrammer_ParameterDeclarationsProps{
      Config: FeatureProgrammer_ParameterConfig{Path: props.Config.Path, Trace: props.Config.Trace, Visited: featureProgrammer_visited(props.Config)},
      Type:   props.Config.Types.Input(props.Type, props.Name),
      Input:  nativefactories.ValueFactory.INPUT(props.Context.Emit),
      Emit:   props.Context.Emit,
    }),
    Response: props.Config.Types.Output(props.Type, props.Name),
  }
}

func (featureProgrammerNamespace) WriteDecomposed(props FeatureProgrammer_WriteDecomposedProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(featureProgrammer_factory, props.Emit)
  statements := []*shimast.Node{}
  statements = append(statements, props.Functor.Declare()...)
  keys := make([]string, 0, len(props.Result.Functions))
  for key := range props.Result.Functions {
    keys = append(keys, key)
  }
  sort.Strings(keys)
  for _, key := range keys {
    if props.Functor != nil && props.Functor.HasLocal(key) == false {
      continue
    }
    statements = append(statements, props.Result.Functions[key])
  }
  statements = append(statements, props.Result.Statements...)
  response := props.Result.Arrow
  if props.ReturnWrapper != nil {
    response = props.ReturnWrapper(props.Result.Arrow)
  }
  statements = append(statements, f.NewReturnStatement(response))
  return f.NewCallExpression(
    f.NewArrowFunction(
      nil,
      nil,
      f.NewNodeList(nil),
      nil,
      nil,
      f.NewToken(shimast.KindEqualsGreaterThanToken),
      f.NewBlock(f.NewNodeList(statements), true),
    ),
    nil,
    nil,
    nil,
    shimast.NodeFlagsNone,
  )
}

func (featureProgrammerNamespace) Write(props FeatureProgrammer_WriteProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(featureProgrammer_factory, props.Context.Emit)
  initialized := props.Config.Initializer(FeatureProgrammer_InitializerProps{
    Context: props.Context,
    Functor: props.Functor,
    Type:    props.Type,
  })
  featureProgrammer_compact_object_parents(props.Config, initialized.Collection)
  featureProgrammer_register_schema_unions(initialized.Collection, initialized.Metadata, map[*nativemetadata.MetadataSchema]bool{})
  output := props.Config.Decoder(FeatureProgrammer_DecoderProps{
    Metadata: initialized.Metadata,
    Input:    nativefactories.ValueFactory.INPUT(props.Context.Emit),
    Explore: FeatureProgrammer_IExplore{
      Tracable: props.Config.Path || props.Config.Trace,
      Source:   "top",
      From:     "top",
      Postfix:  "\"\"",
    },
  })

  objects := featureProgrammer_object_functions(FeatureProgrammer_ComposeProps{
    Config:  props.Config,
    Context: props.Context,
    Functor: props.Functor,
    Type:    props.Type,
    Name:    props.Name,
  }, initialized.Collection)
  unions := featureProgrammer_union_functions(props.Config, initialized.Collection, props.Context.Emit)
  arrays := props.Config.Generator.Arrays(initialized.Collection)
  tuples := props.Config.Generator.Tuples(initialized.Collection)

  added := []*shimast.Node{}
  if props.Config.Addition != nil {
    added = props.Config.Addition(initialized.Collection)
  }

  statements := append([]*shimast.Node{}, added...)
  statements = append(statements, props.Functor.Declare()...)
  for _, v := range objects {
    statements = append(statements, v)
  }
  for _, v := range unions {
    statements = append(statements, v)
  }
  for _, v := range arrays {
    statements = append(statements, v)
  }
  for _, v := range tuples {
    statements = append(statements, v)
  }
  if output != nil && output.Kind == shimast.KindBlock {
    statements = append(statements, output.Statements()...)
  } else {
    statements = append(statements, f.NewReturnStatement(output))
  }

  return f.NewArrowFunction(
    nil,
    nil,
    f.NewNodeList(FeatureProgrammer.ParameterDeclarations(FeatureProgrammer_ParameterDeclarationsProps{
      Config: FeatureProgrammer_ParameterConfig{Path: props.Config.Path, Trace: props.Config.Trace, Visited: featureProgrammer_visited(props.Config)},
      Type:   props.Config.Types.Input(props.Type, props.Name),
      Input:  nativefactories.ValueFactory.INPUT(props.Context.Emit),
      Emit:   props.Context.Emit,
    })),
    props.Config.Types.Output(props.Type, props.Name),
    nil,
    f.NewToken(shimast.KindEqualsGreaterThanToken),
    f.NewBlock(f.NewNodeList(statements), true),
  )
}

func (featureProgrammerNamespace) Write_object_functions(props FeatureProgrammer_WriteObjectFunctionsProps) []*shimast.Node {
  featureProgrammer_compact_object_parents(props.Config, props.Collection)
  return featureProgrammer_write_object_functions(props.Config, props.Context, props.Functor, props.Collection)
}

func (featureProgrammerNamespace) Write_union_functions(props FeatureProgrammer_WriteUnionFunctionsProps) []*shimast.Node {
  return featureProgrammer_write_union_functions(props.Config, props.Collection, props.Emit)
}

func (featureProgrammerNamespace) Decode_array(props FeatureProgrammer_DecodeArrayProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(featureProgrammer_factory, props.Emit)
  rand := fmt.Sprint(props.Functor.Increment())
  tail := []*shimast.Node{}
  if props.Config.Path || props.Config.Trace {
    tail = append(tail, nativefactories.IdentifierFactory.Parameter("_index"+rand, nativefactories.TypeFactory.Keyword("number"), nil))
  }
  parameters := []*shimast.Node{
    nativefactories.IdentifierFactory.Parameter("elem", nativefactories.TypeFactory.Keyword("any"), nil),
  }
  parameters = append(parameters, tail...)
  arrow := f.NewArrowFunction(
    nil,
    nil,
    f.NewNodeList(parameters),
    nil,
    nil,
    f.NewToken(shimast.KindEqualsGreaterThanToken),
    props.Config.Decoder(FeatureProgrammer_DecoderProps{
      Input:    nativefactories.ValueFactory.INPUT(nil, "elem"),
      Metadata: props.Array.Type.Value,
      Explore: FeatureProgrammer_IExplore{
        Tracable: props.Explore.Tracable,
        Source:   props.Explore.Source,
        From:     "array",
        Postfix: FeatureProgrammer.Index(FeatureProgrammer_IndexProps{
          Start:   props.Explore.Start,
          Postfix: props.Explore.Postfix,
          Rand:    rand,
        }),
      },
    }),
  )
  return props.Combiner(struct {
    Input *shimast.Expression
    Arrow *shimast.Node
  }{Input: props.Input, Arrow: arrow})
}

func (featureProgrammerNamespace) Decode_object(props FeatureProgrammer_DecodeObjectProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(featureProgrammer_factory, props.Emit)
  return f.NewCallExpression(
    f.NewIdentifier(
      props.Functor.UseLocal(fmt.Sprintf("%so%d", props.Config.Prefix, props.Object.Index)),
    ),
    nil,
    nil,
    f.NewNodeList(FeatureProgrammer.ArgumentsArray(FeatureProgrammer_ArgumentsArrayProps{
      Config:  FeatureProgrammer_ArgumentsArrayConfig{Path: props.Config.Path, Trace: props.Config.Trace, Visited: props.Config.Visited},
      Input:   props.Input,
      Explore: props.Explore,
      Emit:    props.Emit,
    })),
    shimast.NodeFlagsNone,
  )
}

func (featureProgrammerNamespace) Index(props FeatureProgrammer_IndexProps) string {
  tail := "\"[\" + _index" + props.Rand + " + \"]\""
  if props.Start != nil {
    tail = "\"[\" + (" + fmt.Sprint(*props.Start) + " + _index" + props.Rand + ") + \"]\""
  }
  if props.Postfix == "" {
    return tail
  }
  if props.Postfix[len(props.Postfix)-1:] == "\"" {
    return props.Postfix[:len(props.Postfix)-1] + tail[1:]
  }
  return props.Postfix + " + " + tail
}

func (featureProgrammerNamespace) ArgumentsArray(props FeatureProgrammer_ArgumentsArrayProps) []*shimast.Node {
  f := nativecontext.EmitFactoryOf(featureProgrammer_factory, props.Emit)
  tail := []*shimast.Node{}
  if props.Config.Path == false && props.Config.Trace == false {
    tail = []*shimast.Node{}
  } else if props.Config.Path && props.Config.Trace {
    path := "_path"
    if props.Explore.Postfix != "" {
      path = "_path + " + props.Explore.Postfix
    }
    tail = append(tail, f.NewIdentifier(path))
    if props.Explore.Source == "function" {
      tail = append(tail, f.NewIdentifier(fmt.Sprintf("%t && _exceptionable", props.Explore.Tracable)))
    } else if props.Explore.Tracable {
      tail = append(tail, f.NewKeywordExpression(shimast.KindTrueKeyword))
    } else {
      tail = append(tail, f.NewKeywordExpression(shimast.KindFalseKeyword))
    }
  } else if props.Config.Path {
    path := "_path"
    if props.Explore.Postfix != "" {
      path = "_path + " + props.Explore.Postfix
    }
    tail = append(tail, f.NewIdentifier(path))
  } else {
    if props.Explore.Source == "function" {
      tail = append(tail, f.NewIdentifier(fmt.Sprintf("%t && _exceptionable", props.Explore.Tracable)))
    } else if props.Explore.Tracable {
      tail = append(tail, f.NewKeywordExpression(shimast.KindTrueKeyword))
    } else {
      tail = append(tail, f.NewKeywordExpression(shimast.KindFalseKeyword))
    }
  }
  if props.Config.Visited {
    tail = append(tail, f.NewIdentifier("_vctx"))
  }
  return append([]*shimast.Node{props.Input}, tail...)
}

func (featureProgrammerNamespace) ParameterDeclarations(props FeatureProgrammer_ParameterDeclarationsProps) []*shimast.Node {
  f := nativecontext.EmitFactoryOf(featureProgrammer_factory, props.Emit)
  tail := []*shimast.Node{}
  if props.Config.Path {
    tail = append(tail, nativefactories.IdentifierFactory.Parameter("_path", nativefactories.TypeFactory.Keyword("string"), nil))
  }
  if props.Config.Trace {
    tail = append(tail, nativefactories.IdentifierFactory.Parameter(
      "_exceptionable",
      nativefactories.TypeFactory.Keyword("boolean"),
      f.NewKeywordExpression(shimast.KindTrueKeyword),
    ))
  }
  if props.Config.Visited {
    // The per-invocation visit context: internal calls always pass it along,
    // so the default object literal only materializes at the public entry.
    tail = append(tail, nativefactories.IdentifierFactory.Parameter(
      "_vctx",
      nativefactories.TypeFactory.Keyword("any"),
      f.NewObjectLiteralExpression(f.NewNodeList(nil), false),
    ))
  }
  return append([]*shimast.Node{
    nativefactories.IdentifierFactory.Parameter(props.Input, props.Type, nil),
  }, tail...)
}

func featureProgrammer_object_functions(props FeatureProgrammer_ComposeProps, collection *nativemetadata.MetadataCollection) []*shimast.Node {
  if props.Config.Generator.Objects != nil {
    return props.Config.Generator.Objects(collection)
  }
  return featureProgrammer_write_object_functions(props.Config, props.Context, props.Functor, collection)
}

func featureProgrammer_union_functions(config FeatureProgrammer_IConfig, collection *nativemetadata.MetadataCollection, emit *shimprinter.EmitContext) []*shimast.Node {
  if config.Generator.Unions != nil {
    if generated := config.Generator.Unions(collection); generated != nil {
      return generated
    }
  }
  return featureProgrammer_write_union_functions(config, collection, emit)
}

type featureProgrammer_schemaUnionVisit struct {
  Schemas map[*nativemetadata.MetadataSchema]bool
  Objects map[*nativemetadata.MetadataObjectType]bool
}

const featureProgrammer_objectParentMinProperties = 8

type featureProgrammer_objectPropertySet struct {
  Properties map[string]*nativemetadata.MetadataProperty
  Order      []string
  Anchor     string
}

func featureProgrammer_compact_object_parents(config FeatureProgrammer_IConfig, collection *nativemetadata.MetadataCollection) {
  if config.ObjectParents == false || collection == nil {
    return
  }
  objects := collection.Objects()
  signatures := make([]featureProgrammer_objectPropertySet, len(objects))
  frequencies := map[string]int{}
  for i, object := range objects {
    signatures[i] = featureProgrammer_object_property_set(object)
    for _, key := range signatures[i].Order {
      frequencies[key]++
    }
  }
  buckets := map[string][]int{}
  for i := range objects {
    if len(signatures[i].Order) < featureProgrammer_objectParentMinProperties {
      continue
    }
    anchor := featureProgrammer_object_parent_anchor(signatures[i], frequencies)
    if anchor == "" {
      continue
    }
    signatures[i].Anchor = anchor
    buckets[anchor] = append(buckets[anchor], i)
  }
  for i, object := range objects {
    if object.Check_properties_ != nil || len(object.Properties) <= featureProgrammer_objectParentMinProperties {
      continue
    }
    current := signatures[i]
    if len(current.Order) <= featureProgrammer_objectParentMinProperties {
      continue
    }
    best := -1
    bestSize := 0
    visited := map[int]bool{}
    for _, key := range current.Order {
      for _, candidate := range buckets[key] {
        if visited[candidate] || candidate == i {
          continue
        }
        visited[candidate] = true
        candidateSize := len(signatures[candidate].Order)
        if candidateSize <= bestSize || candidateSize >= len(current.Order) {
          continue
        }
        if featureProgrammer_object_parent_covers(current, signatures[candidate]) {
          best = candidate
          bestSize = candidateSize
        }
      }
    }
    if best == -1 {
      continue
    }
    parent := objects[best]
    object.Parent_objects_ = append(object.Parent_objects_, nativemetadata.MetadataObject_create(nativemetadata.MetadataObject{
      Type: parent,
      Tags: [][]nativemetadata.IMetadataTypeTag{},
    }))
    object.Check_properties_ = featureProgrammer_object_remaining_properties(object.Properties, signatures[best])
  }
}

func featureProgrammer_object_property_set(object *nativemetadata.MetadataObjectType) featureProgrammer_objectPropertySet {
  if object == nil {
    return featureProgrammer_objectPropertySet{}
  }
  output := featureProgrammer_objectPropertySet{
    Properties: map[string]*nativemetadata.MetadataProperty{},
    Order:      []string{},
  }
  for _, property := range object.Properties {
    if property == nil || property.Key == nil {
      return featureProgrammer_objectPropertySet{}
    }
    key := property.Key.GetSoleLiteral()
    if key == nil {
      return featureProgrammer_objectPropertySet{}
    }
    signature := featureProgrammer_object_property_signature(property)
    if signature == "" {
      return featureProgrammer_objectPropertySet{}
    }
    output.Properties[signature] = property
    output.Order = append(output.Order, signature)
  }
  return output
}

func featureProgrammer_object_property_signature(property *nativemetadata.MetadataProperty) string {
  if property == nil || property.Key == nil || property.Value == nil {
    return ""
  }
  key := property.Key.GetSoleLiteral()
  if key == nil {
    return ""
  }
  return *key + "\x00" +
    property.Key.GetName() + "\x00" +
    property.Value.GetName() + "\x00" +
    fmt.Sprintf("%t\x00%t", property.Value.Optional, property.Value.Nullable)
}

func featureProgrammer_object_parent_anchor(set featureProgrammer_objectPropertySet, frequencies map[string]int) string {
  anchor := ""
  score := 0
  for _, key := range set.Order {
    next := frequencies[key]
    if anchor == "" || next < score {
      anchor = key
      score = next
    }
  }
  return anchor
}

func featureProgrammer_object_parent_covers(
  current featureProgrammer_objectPropertySet,
  candidate featureProgrammer_objectPropertySet,
) bool {
  if len(candidate.Order) == 0 || len(candidate.Order) >= len(current.Order) {
    return false
  }
  for _, key := range candidate.Order {
    if current.Properties[key] == nil {
      return false
    }
  }
  return true
}

func featureProgrammer_object_remaining_properties(
  properties []*nativemetadata.MetadataProperty,
  parent featureProgrammer_objectPropertySet,
) []*nativemetadata.MetadataProperty {
  output := make([]*nativemetadata.MetadataProperty, 0, len(properties)-len(parent.Order))
  for _, property := range properties {
    if parent.Properties[featureProgrammer_object_property_signature(property)] != nil {
      continue
    }
    output = append(output, property)
  }
  return output
}

func featureProgrammer_register_schema_unions(collection *nativemetadata.MetadataCollection, metadata *nativemetadata.MetadataSchema, visited map[*nativemetadata.MetadataSchema]bool) {
  if visited == nil {
    visited = map[*nativemetadata.MetadataSchema]bool{}
  }
  featureProgrammer_register_schema_unions_iterate(collection, metadata, &featureProgrammer_schemaUnionVisit{
    Schemas: visited,
    Objects: map[*nativemetadata.MetadataObjectType]bool{},
  })
}

func featureProgrammer_register_schema_unions_iterate(collection *nativemetadata.MetadataCollection, metadata *nativemetadata.MetadataSchema, visited *featureProgrammer_schemaUnionVisit) {
  if collection == nil || metadata == nil || visited.Schemas[metadata] {
    return
  }
  visited.Schemas[metadata] = true

  if len(metadata.Objects) > 1 {
    index := collection.GetUnionIndex(metadata)
    metadata.Union_index = &index
  }
  if metadata.Escaped != nil {
    featureProgrammer_register_schema_unions_iterate(collection, metadata.Escaped.Returns, visited)
  }
  if metadata.Rest != nil {
    featureProgrammer_register_schema_unions_iterate(collection, metadata.Rest, visited)
  }
  for _, alias := range metadata.Aliases {
    if alias.Type != nil {
      featureProgrammer_register_schema_unions_iterate(collection, alias.Type.Value, visited)
    }
  }
  for _, array := range metadata.Arrays {
    if array.Type != nil {
      featureProgrammer_register_schema_unions_iterate(collection, array.Type.Value, visited)
    }
  }
  for _, tuple := range metadata.Tuples {
    if tuple.Type != nil {
      for _, element := range tuple.Type.Elements {
        featureProgrammer_register_schema_unions_iterate(collection, element, visited)
      }
    }
  }
  for _, object := range metadata.Objects {
    if object.Type != nil && visited.Objects[object.Type] == false {
      visited.Objects[object.Type] = true
      for _, property := range object.Type.Properties {
        featureProgrammer_register_schema_unions_iterate(collection, property.Value, visited)
      }
    }
  }
  for _, set := range metadata.Sets {
    featureProgrammer_register_schema_unions_iterate(collection, set.Value, visited)
  }
  for _, item := range metadata.Maps {
    featureProgrammer_register_schema_unions_iterate(collection, item.Key, visited)
    featureProgrammer_register_schema_unions_iterate(collection, item.Value, visited)
  }
}

func featureProgrammer_write_object_functions(config FeatureProgrammer_IConfig, context nativecontext.ITypiaContext, functor *nativehelpers.FunctionProgrammer, collection *nativemetadata.MetadataCollection) []*shimast.Node {
  f := nativecontext.EmitFactoryOf(featureProgrammer_factory, context.Emit)
  objects := collection.Objects()
  propertyFrequencies := featureProgrammer_object_property_frequencies(config, context, functor, objects)
  output := make([]*shimast.Node, 0, len(objects))
  for _, object := range objects {
    input := f.NewIdentifier("input")
    objectType := config.Objector.Type
    if objectType == nil {
      objectType = nativefactories.TypeFactory.Keyword("any", context.Emit)
    }
    entriesObject := object
    if config.ObjectParents && len(object.Parent_objects_) != 0 {
      entriesObject = &nativemetadata.MetadataObjectType{
        Name:        object.Name,
        DisplayName: object.DisplayName,
        Properties:  object.CheckProperties(),
        Description: object.Description,
        JsDocTags:   object.JsDocTags,
        Index:       object.Index,
        Validated:   object.Validated,
        Recursive:   object.Recursive,
        Nullables:   object.Nullables,
      }
    }
    helperAllProperties := config.ObjectParents && functor != nil && len(entriesObject.Properties) >= 16
    body := config.Objector.Joiner(FeatureProgrammer_ObjectorJoinerProps{
      Input: input,
      Entries: nativeiterate.Feature_object_entries(nativeiterate.Feature_object_entriesProps{
        Config: nativeiterate.Feature_object_entriesConfig{
          Path:  config.Path,
          Trace: config.Trace,
          Decoder: func(next nativeiterate.Feature_object_entriesDecoderProps) *shimast.Node {
            if key := featureProgrammer_object_property_helper_key(context, next.Property, next.Metadata); key != "" && (propertyFrequencies[key] > 1 || helperAllProperties) {
              return featureProgrammer_object_property_helper_call(featureProgrammer_objectPropertyHelperProps{
                Config:     config,
                Context:    context,
                Functor:    functor,
                Input:      input,
                ReturnType: objectType,
                Next:       next,
                Key:        key,
              })
            }
            return config.Decoder(FeatureProgrammer_DecoderProps{
              Input:    next.Input,
              Metadata: next.Metadata,
              Explore:  featureProgrammer_from_iterate_explore(next.Explore),
            })
          },
        },
        Context: context,
        Input:   input,
        Object:  entriesObject,
      }),
      Object: object,
    })
    if config.ObjectParents && len(object.Parent_objects_) != 0 {
      expressions := make([]*shimast.Node, 0, len(object.Parent_objects_)+1)
      explore := FeatureProgrammer_IExplore{
        Tracable: config.Path || config.Trace,
        Source:   "function",
        From:     "object",
        Postfix:  "",
      }
      for _, parent := range object.Parent_objects_ {
        expressions = append(expressions, config.Objector.Decoder(FeatureProgrammer_ObjectorDecoderProps{
          Input:   input,
          Object:  parent.Type,
          Explore: explore,
        }))
      }
      expressions = append(expressions, body)
      body = checkerProgrammer_reduce(expressions, shimast.KindAmpersandAmpersandToken, f.NewKeywordExpression(shimast.KindTrueKeyword), context.Emit)
    }
    if object.Recursive && config.VisitGuard != nil && featureProgrammer_visited(config) {
      body = config.VisitGuard(FeatureProgrammer_VisitGuardProps{
        Key:    FeatureProgrammer.VisitKey(config.Prefix, "o", object.Index),
        Input:  input,
        Body:   body,
        Object: object,
      })
    }
    output = append(output, nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
      Name: fmt.Sprintf("%so%d", config.Prefix, object.Index),
      Value: f.NewArrowFunction(
        nil,
        nil,
        f.NewNodeList(FeatureProgrammer.ParameterDeclarations(FeatureProgrammer_ParameterDeclarationsProps{
          Config: FeatureProgrammer_ParameterConfig{Path: config.Path, Trace: config.Trace, Visited: featureProgrammer_visited(config)},
          Type:   nativefactories.TypeFactory.Keyword("any"),
          Input:  nativefactories.ValueFactory.INPUT(context.Emit),
          Emit:   context.Emit,
        })),
        objectType,
        nil,
        f.NewToken(shimast.KindEqualsGreaterThanToken),
        body,
      ),
    }, context.Emit))
  }
  return output
}

type featureProgrammer_objectPropertyHelperProps struct {
  Config     FeatureProgrammer_IConfig
  Context    nativecontext.ITypiaContext
  Functor    *nativehelpers.FunctionProgrammer
  Input      *shimast.Expression
  ReturnType *shimast.TypeNode
  Next       nativeiterate.Feature_object_entriesDecoderProps
  Key        string
}

func featureProgrammer_object_property_frequencies(
  config FeatureProgrammer_IConfig,
  context nativecontext.ITypiaContext,
  functor *nativehelpers.FunctionProgrammer,
  objects []*nativemetadata.MetadataObjectType,
) map[string]int {
  output := map[string]int{}
  if config.ObjectParents == false || functor == nil {
    return output
  }
  for _, object := range objects {
    for _, property := range object.CheckProperties() {
      if property == nil || property.Key == nil || property.Value == nil {
        continue
      }
      metadata := property.Value
      if property.Key.GetSoleLiteral() != nil && nativehelpers.OptionPredicator.StrictOptionalUndefined(context, property.Value) {
        metadata = property.Value.ShallowClone()
        metadata.Optional = false
      }
      key := featureProgrammer_object_property_helper_key(context, property, metadata)
      if key != "" {
        output[key]++
      }
    }
  }
  return output
}

func featureProgrammer_object_property_helper_key(
  context nativecontext.ITypiaContext,
  property *nativemetadata.MetadataProperty,
  metadata *nativemetadata.MetadataSchema,
) string {
  if property == nil || property.Key == nil || metadata == nil {
    return ""
  }
  key := property.Key.GetSoleLiteral()
  if key == nil {
    return ""
  }
  return *key + "\x00" +
    property.Key.GetName() + "\x00" +
    metadata.GetName() + "\x00" +
    fmt.Sprintf("%t\x00%t\x00%t", metadata.Optional, metadata.Nullable, nativehelpers.OptionPredicator.Numeric(context.Options))
}

func featureProgrammer_object_property_helper_call(props featureProgrammer_objectPropertyHelperProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(featureProgrammer_factory, props.Context.Emit)
  helper := props.Functor.EmplaceVariableByKey(props.Config.Prefix+"p", props.Key, func(string) *shimast.Expression {
    input := nativefactories.ValueFactory.INPUT(props.Context.Emit)
    propertyInput := featureProgrammer_object_property_input(input, props.Next.Key, props.Context.Emit)
    body := props.Config.Decoder(FeatureProgrammer_DecoderProps{
      Input:    propertyInput,
      Metadata: props.Next.Metadata,
      Explore:  featureProgrammer_from_iterate_explore(props.Next.Explore),
    })
    return f.NewArrowFunction(
      nil,
      nil,
      f.NewNodeList(FeatureProgrammer.ParameterDeclarations(FeatureProgrammer_ParameterDeclarationsProps{
        Config: FeatureProgrammer_ParameterConfig{Path: props.Config.Path, Trace: props.Config.Trace, Visited: featureProgrammer_visited(props.Config)},
        Type:   nativefactories.TypeFactory.Keyword("any"),
        Input:  input,
        Emit:   props.Context.Emit,
      })),
      props.ReturnType,
      nil,
      f.NewToken(shimast.KindEqualsGreaterThanToken),
      body,
    )
  })
  return f.NewCallExpression(
    helper,
    nil,
    nil,
    f.NewNodeList(FeatureProgrammer.ArgumentsArray(FeatureProgrammer_ArgumentsArrayProps{
      Config: FeatureProgrammer_ArgumentsArrayConfig{Path: props.Config.Path, Trace: props.Config.Trace, Visited: featureProgrammer_visited(props.Config)},
      Input:  props.Input,
      Explore: FeatureProgrammer_IExplore{
        Tracable: props.Config.Path || props.Config.Trace,
        Source:   "function",
        From:     "object",
        Postfix:  "",
      },
      Emit: props.Context.Emit,
    })),
    shimast.NodeFlagsNone,
  )
}

func featureProgrammer_object_property_input(input *shimast.Expression, key *string, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(featureProgrammer_factory, emit...)
  if key == nil {
    return f.NewIdentifier("value")
  }
  return f.NewElementAccessExpression(
    input,
    nil,
    f.NewStringLiteral(*key, shimast.TokenFlagsNone),
    shimast.NodeFlagsNone,
  )
}

func featureProgrammer_write_union_functions(config FeatureProgrammer_IConfig, collection *nativemetadata.MetadataCollection, emit *shimprinter.EmitContext) []*shimast.Node {
  unions := collection.Unions()
  output := make([]*shimast.Node, 0, len(unions))
  for i, union := range unions {
    output = append(output, nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
      Name: fmt.Sprintf("%su%d", config.Prefix, i),
      Value: featureProgrammer_write_union(struct {
        Config  FeatureProgrammer_IConfig
        Objects []*nativemetadata.MetadataObjectType
      }{Config: config, Objects: union}, emit),
    }))
  }
  return output
}

func featureProgrammer_write_union(props struct {
  Config  FeatureProgrammer_IConfig
  Objects []*nativemetadata.MetadataObjectType
}, emit *shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(featureProgrammer_factory, emit)
  return f.NewArrowFunction(
    nil,
    nil,
    f.NewNodeList(FeatureProgrammer.ParameterDeclarations(FeatureProgrammer_ParameterDeclarationsProps{
      Config: FeatureProgrammer_ParameterConfig{Path: props.Config.Path, Trace: props.Config.Trace, Visited: featureProgrammer_visited(props.Config)},
      Type:   nativefactories.TypeFactory.Keyword("any"),
      Input:  nativefactories.ValueFactory.INPUT(nil),
      Emit:   emit,
    })),
    nativefactories.TypeFactory.Keyword("any"),
    nil,
    f.NewToken(shimast.KindEqualsGreaterThanToken),
    nativehelpers.UnionExplorer.Object(nativehelpers.UnionExplorer_ObjectProps{
      Config: nativehelpers.UnionExplorer_ObjectConfig{
        Objector: featureProgrammer_union_objector(props.Config.Objector),
      },
      Objects: props.Objects,
      Input:   nativefactories.ValueFactory.INPUT(nil),
      Explore: FeatureProgrammer_IExplore{
        Tracable: props.Config.Path || props.Config.Trace,
        Source:   "function",
        From:     "object",
        Postfix:  "",
      },
      Emit: emit,
    }),
  )
}

func featureProgrammer_union_objector(objector FeatureProgrammer_IConfig_IObjector) nativehelpers.UnionExplorer_IObjector {
  return nativehelpers.UnionExplorer_IObjector{
    Checker: func(props nativehelpers.UnionExplorer_ObjectorCheckerProps) *shimast.Node {
      return objector.Checker(FeatureProgrammer_ObjectorCheckerProps{
        Metadata: props.Metadata,
        Input:    props.Input,
        Explore:  featureProgrammer_as_explore(props.Explore),
      })
    },
    Decoder: func(props nativehelpers.UnionExplorer_ObjectorDecoderProps) *shimast.Node {
      return objector.Decoder(FeatureProgrammer_ObjectorDecoderProps{
        Input:   props.Input,
        Object:  props.Object,
        Explore: featureProgrammer_as_explore(props.Explore),
      })
    },
    Unionizer: func(props nativehelpers.UnionExplorer_ObjectorUnionizerProps) *shimast.Node {
      return objector.Unionizer(FeatureProgrammer_ObjectorUnionizerProps{
        Objects: props.Objects,
        Input:   props.Input,
        Explore: featureProgrammer_as_explore(props.Explore),
      })
    },
    Failure: func(props nativehelpers.UnionExplorer_ObjectorFailureProps) *shimast.Node {
      explore := featureProgrammer_as_explore(props.Explore)
      return objector.Failure(FeatureProgrammer_ObjectorFailureProps{
        Input:    props.Input,
        Expected: props.Expected,
        Explore:  &explore,
      })
    },
    Is:       objector.Is,
    Required: objector.Required,
    Full: func(props nativehelpers.UnionExplorer_ObjectorFullProps) *shimast.Node {
      if objector.Full == nil {
        return props.Condition
      }
      return objector.Full(FeatureProgrammer_ObjectorFullProps{
        Condition: props.Condition,
        Input:     props.Input,
        Expected:  props.Expected,
        Explore:   featureProgrammer_as_explore(props.Explore),
      })
    },
    Type: objector.Type,
  }
}

func featureProgrammer_from_iterate_explore(input nativeiterate.Feature_object_entriesExplore) FeatureProgrammer_IExplore {
  return FeatureProgrammer_IExplore{
    Tracable: input.Tracable,
    Source:   input.Source,
    From:     input.From,
    Postfix:  input.Postfix,
  }
}

func featureProgrammer_as_explore(input any) FeatureProgrammer_IExplore {
  switch value := input.(type) {
  case FeatureProgrammer_IExplore:
    return value
  case *FeatureProgrammer_IExplore:
    return *value
  case map[string]any:
    output := FeatureProgrammer_IExplore{}
    if v, ok := value["tracable"].(bool); ok {
      output.Tracable = v
    }
    if v, ok := value["source"].(string); ok {
      output.Source = v
    }
    if v, ok := value["from"].(string); ok {
      output.From = v
    }
    if v, ok := value["postfix"].(string); ok {
      output.Postfix = v
    }
    if v, ok := value["start"].(int); ok {
      output.Start = &v
    }
    return output
  default:
    return FeatureProgrammer_IExplore{}
  }
}
