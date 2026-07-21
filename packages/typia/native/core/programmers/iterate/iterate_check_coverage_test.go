//go:build typia_native_internal
// +build typia_native_internal

package iterate

import (
  "testing"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestIterateCheckCoverage exercises dynamic and union check helpers.
//
// Dynamic object and array-like union checks are selected only for particular
// metadata shapes. This test constructs those shapes directly and verifies each
// helper returns AST nodes for dynamic keys and dynamic properties.
//
// 1. Check dynamic key branches for nullable, optional, atomic, constant, template, and native keys.
// 2. Check dynamic object property branches with equals, undefined, and superfluous handling.
func TestIterateCheckCoverage(t *testing.T) {
  factory := shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
  input := factory.NewIdentifier("input")
  keyMeta := nativemetadata.MetadataSchema_initialize()
  keyMeta.Nullable = true
  keyMeta.Required = false
  keyMeta.Optional = true
  keyMeta.Atomics = append(keyMeta.Atomics,
    nativemetadata.MetadataAtomic_create(nativemetadata.MetadataAtomic{Type: "boolean"}),
    nativemetadata.MetadataAtomic_create(nativemetadata.MetadataAtomic{Type: "number"}),
    nativemetadata.MetadataAtomic_create(nativemetadata.MetadataAtomic{Type: "bigint"}),
  )
  keyMeta.Constants = append(keyMeta.Constants, nativemetadata.MetadataConstant_create(nativemetadata.MetadataConstant{
    Type: "string",
    Values: []*nativemetadata.MetadataConstantValue{
      nativemetadata.MetadataConstantValue_create(nativemetadata.MetadataConstantValue{Value: "fixed"}),
    },
  }))
  keyMeta.Templates = append(keyMeta.Templates, nativemetadata.MetadataTemplate_create(nativemetadata.MetadataTemplate{
    Row: []*nativemetadata.MetadataSchema{iterateLiteral("x"), iterateAtomic("number")},
  }))
  keyMeta.Natives = append(keyMeta.Natives,
    nativemetadata.MetadataNative_create(nativemetadata.MetadataNative{Name: "Boolean"}),
    nativemetadata.MetadataNative_create(nativemetadata.MetadataNative{Name: "BigInt"}),
    nativemetadata.MetadataNative_create(nativemetadata.MetadataNative{Name: "Number"}),
  )
  if Check_dynamic_key(Check_dynamic_keyProps{
    Context:  nativecontext.ITypiaContext{},
    Metadata: keyMeta,
    Input:    input,
  }) == nil || check_dynamic_key_strict_equal(input, input) == nil ||
    check_dynamic_key_internal(nativecontext.ITypiaContext{}, "helper") == nil {
    t.Fatal("dynamic key helper returned nil")
  }
  if check_dynamic_key_atomist(nativehelpers.ICheckEntry{
    Expression: input,
    Conditions: [][]nativehelpers.ICheckEntry_ICondition{{
      {Expression: input},
    }},
  }) == nil || check_dynamic_key_reduce(nil, shimast.KindBarBarToken) == nil {
    t.Fatal("dynamic key atomist or reducer returned nil")
  }

  regularMeta := iterateAtomic("string")
  optionalMeta := iterateAtomic("string")
  optionalMeta.Required = false
  optionalMeta.Optional = true
  regular := []nativehelpers.IExpressionEntry{
    {Input: input, Key: iterateLiteral("fixed"), Meta: regularMeta, Expression: input},
    {Input: input, Key: iterateLiteral("optional"), Meta: optionalMeta, Expression: input},
  }
  dynamic := []nativehelpers.IExpressionEntry{
    {Input: input, Key: keyMeta, Meta: regularMeta, Expression: input},
  }
  config := Check_object_IConfig{
    Equals:    true,
    Undefined: false,
    Positive:  factory.NewKeywordExpression(shimast.KindTrueKeyword),
    Superfluous: func(value *shimast.Expression, description *shimast.Expression) *shimast.Node {
      return factory.NewKeywordExpression(shimast.KindFalseKeyword)
    },
  }
  if Check_dynamic_properties(Check_dynamic_propertiesProps{
    Config:  config,
    Context: nativecontext.ITypiaContext{},
    Regular: regular,
    Dynamic: dynamic,
    Input:   input,
  }) == nil || !check_dynamic_properties_every_required(regular[:1]) ||
    check_dynamic_properties_internal(nativecontext.ITypiaContext{}, "helper") == nil {
    t.Fatal("dynamic properties helper returned unexpected result")
  }

}
