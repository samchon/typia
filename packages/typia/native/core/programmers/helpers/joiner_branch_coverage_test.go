//go:build typia_native_internal
// +build typia_native_internal

package helpers

import (
  "testing"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestJoinerBranchCoverage exercises joiner helper branches.
//
// Transform fixtures cover common object assembly, but several tuple, dynamic
// property, regular-skip, internal-import, and pattern conversion branches are
// only reachable with specific metadata shapes. This test builds those shapes
// directly in the helpers package.
//
// 1. Build literal, dynamic string, numeric, boolean, and template metadata keys.
// 2. Exercise clone, prune, and stringify joiners for objects, arrays, and tuples.
// 3. Exercise function programmer variable declaration and declaration-disable branches.
// 4. Verify string joining, internal import fallback, and metadata pattern helpers.
func TestJoinerBranchCoverage(t *testing.T) {
  factory := shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
  input := factory.NewIdentifier("input")
  value := factory.NewIdentifier("value")
  literalKey := helperLiteralKey("known")
  dynamicKey := helperAtomic("string")
  numberKey := helperAtomic("number")
  booleanKey := helperAtomic("boolean")
  templateKey := nativemetadata.MetadataSchema_initialize()
  templateKey.Templates = append(templateKey.Templates, nativemetadata.MetadataTemplate_create(nativemetadata.MetadataTemplate{
    Row: []*nativemetadata.MetadataSchema{literalKey, numberKey},
  }))
  required := helperAtomic("string")
  optional := helperAtomic("string")
  optional.Optional = true
  optional.Required = false
  functional := nativemetadata.MetadataSchema_initialize()
  functional.Functions = append(functional.Functions, nativemetadata.MetadataFunction_create(nativemetadata.MetadataFunction{
    Output: helperAtomic("string"),
  }))
  entries := []IExpressionEntry{
    {Input: input, Key: literalKey, Meta: required, Expression: value},
    {Input: input, Key: dynamicKey, Meta: optional, Expression: value},
  }
  if CloneJoiner.Tuple(CloneJoiner_TupleProps{Elements: []*shimast.Expression{value}, Rest: input}) == nil ||
    CloneJoiner.Array(CloneJoiner_ArrayProps{Input: input, Arrow: value}) == nil ||
    CloneJoiner.Object(CloneJoiner_ObjectProps{Input: input, Entries: entries}) == nil {
    t.Fatal("clone joiner returned nil")
  }
  if NotationJoiner.Object(NotationJoiner_ObjectProps{
    Rename:        func(str string) string { return str },
    DynamicRename: func() *shimast.Node { return factory.NewIdentifier("rename") },
    DynamicAssign: func() *shimast.Node { return factory.NewIdentifier("assign") },
    Input:         input,
    Entries:       entries,
  }) == nil ||
    NotationJoiner.Tuple(NotationJoiner_TupleProps{Elements: []*shimast.Expression{value}, Rest: input}) == nil ||
    NotationJoiner.Array(NotationJoiner_ArrayProps{Input: input, Arrow: value}) == nil {
    t.Fatal("notation joiner returned nil")
  }
  object := nativemetadata.MetadataObjectType_create(nativemetadata.MetadataObjectType{
    Name: "Object",
    Properties: []*nativemetadata.MetadataProperty{
      nativemetadata.MetadataProperty_create(nativemetadata.MetadataProperty{Key: literalKey, Value: required}),
      nativemetadata.MetadataProperty_create(nativemetadata.MetadataProperty{Key: dynamicKey, Value: required}),
    },
  })
  if PruneJoiner.Tuple(PruneJoiner_TupleProps{Elements: []*shimast.ConciseBody{value}, Rest: value}) == nil ||
    PruneJoiner.Array(PruneJoiner_ArrayProps{Input: input, Arrow: value}) == nil ||
    PruneJoiner.Object(PruneJoiner_ObjectProps{Input: input, Entries: entries, Object: object}) == nil {
    t.Fatal("prune joiner returned nil")
  }
  if StringifyJoiner.Tuple(StringifyJoiner_TupleProps{}) == nil ||
    StringifyJoiner.Tuple(StringifyJoiner_TupleProps{
      Elements: []*shimast.Expression{
        factory.NewStringLiteral("a", shimast.TokenFlagsNone),
        factory.NewStringLiteral("b", shimast.TokenFlagsNone),
      },
    }) == nil ||
    StringifyJoiner.Tuple(StringifyJoiner_TupleProps{Elements: []*shimast.Expression{value}, Rest: input}) == nil ||
    StringifyJoiner.Array(StringifyJoiner_ArrayProps{Input: input, Arrow: value}) == nil {
    t.Fatal("stringify tuple or array joiner returned nil")
  }
  stringifyEntries := []IExpressionEntry{
    {Input: input, Key: literalKey, Meta: functional, Expression: value},
    {Input: input, Key: dynamicKey, Meta: optional, Expression: value},
  }
  if StringifyJoiner.Object(StringifyJoiner_ObjectProps{Context: nativecontext.ITypiaContext{}, Entries: stringifyEntries}) == nil {
    t.Fatal("stringify object joiner returned nil")
  }
  if stringifyJoiner_regular_condition(IExpressionEntry{Input: input, Meta: functional}) == nil ||
    stringifyJoiner_regular_arrow() == nil ||
    stringifyJoiner_binding_pattern() == nil ||
    stringifyJoiner_reduce([]*shimast.Node{input, value}, shimast.KindAmpersandAmpersandToken) == nil ||
    stringifyJoiner_internal(nativecontext.ITypiaContext{}, "helper") == nil {
    t.Fatal("stringify helper returned nil")
  }
  if joinStrings([]string{}, ",") != "" || joinStrings([]string{"a", "b"}, ",") != "a,b" {
    t.Fatal("joinStrings returned unexpected output")
  }
  if cloneJoiner_regular_skip([]IExpressionEntry{{Key: literalKey}}) == nil ||
    cloneJoiner_metadata_to_pattern(struct {
      top      bool
      metadata *nativemetadata.MetadataSchema
    }{top: true, metadata: booleanKey}) == "" ||
    cloneJoiner_metadata_to_pattern(struct {
      top      bool
      metadata *nativemetadata.MetadataSchema
    }{top: true, metadata: templateKey}) == "" ||
    cloneJoiner_template_to_pattern(struct {
      top      bool
      template []*nativemetadata.MetadataSchema
    }{top: true, template: []*nativemetadata.MetadataSchema{literalKey, numberKey}}) == "" {
    t.Fatal("clone pattern helper returned empty output")
  }

  programmer := NewFunctionProgrammer("joiner")
  if programmer.EmplaceVariable("cached", value) == nil || len(programmer.Declare(false)) == 0 {
    t.Fatal("function programmer variable branch failed")
  }
  if stringifyJoiner_internal(nativecontext.ITypiaContext{Importer: nativecontext.NewImportProgrammer()}, "jsonStringifyTail") == nil {
    t.Fatal("stringify internal importer branch returned nil")
  }
}

func helperLiteralKey(value string) *nativemetadata.MetadataSchema {
  meta := nativemetadata.MetadataSchema_initialize()
  meta.Constants = append(meta.Constants, nativemetadata.MetadataConstant_create(nativemetadata.MetadataConstant{
    Type: "string",
    Values: []*nativemetadata.MetadataConstantValue{
      nativemetadata.MetadataConstantValue_create(nativemetadata.MetadataConstantValue{Value: value}),
    },
  }))
  return meta
}

func helperAtomic(kind string) *nativemetadata.MetadataSchema {
  meta := nativemetadata.MetadataSchema_initialize()
  meta.Atomics = append(meta.Atomics, nativemetadata.MetadataAtomic_create(nativemetadata.MetadataAtomic{Type: kind}))
  return meta
}
