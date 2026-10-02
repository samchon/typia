package helpers

import (
  shimcore "github.com/microsoft/typescript-go/shim/core"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  "testing"
)

// TestOptionPredicatorContractMatrix verifies option defaults and their exact-optional conjunction.
//
// Finite implies numeric admission, while omitted undefined permits undefined.
// Exact optionality requires the compiler flag, explicit undefined:false and an
// optional property; only an optional property without undefined is strict.
//
// @evidence contracts/testing.md#behavioral-verification Calls all six option predicates with nil, false and true options and the complete compiler/undefined/property decision table.
// @evidence contracts/testing.md#independent-expectations Literal numeric rows and the two authored positive exact-optional rows define the oracle; every other exact-optional row must be false.
// @evidence contracts/testing.md#distinguishing-cases Nil compiler, unset/false/true compiler flags, omitted/false/true undefined, nil metadata and all optional/required pairs are exercised. Finite-on/numeric-off must still enable numeric admission.
// @evidence contracts/testing.md#execution-ownership The native Go runner invokes this same-package unit in process on actual contexts and metadata, without a compiler or JavaScript subprocess.
func TestOptionPredicatorContractMatrix(t *testing.T) {
  yes, no := true, false
  flags := []struct {
    name  string
    value *bool
  }{{"nil", nil}, {"false", &no}, {"true", &yes}}
  numeric := map[string]bool{"nil/nil": false, "nil/false": false, "nil/true": true, "false/nil": false, "false/false": false, "false/true": true, "true/nil": true, "true/false": true, "true/true": true}
  for _, n := range flags {
    for _, f := range flags {
      t.Run("numeric="+n.name+"/finite="+f.name, func(t *testing.T) {
        options := nativecontext.ITransformOptions{Numeric: n.value, Finite: f.value}
        if actual := OptionPredicator.Numeric(options); actual != numeric[n.name+"/"+f.name] {
          t.Fatalf("numeric=%v", actual)
        }
        if actual := OptionPredicator.Finite(options); actual != (f.name == "true") {
          t.Fatalf("finite=%v", actual)
        }
      })
    }
  }
  for _, flag := range flags {
    t.Run("functional-and-undefined="+flag.name, func(t *testing.T) {
      options := nativecontext.ITransformOptions{Functional: flag.value, Undefined: flag.value}
      if actual := OptionPredicator.Functional(options); actual != (flag.name == "true") {
        t.Fatalf("functional=%v", actual)
      }
      if actual := OptionPredicator.Undefined(options); actual != (flag.name != "false") {
        t.Fatalf("undefined=%v", actual)
      }
    })
  }
  compilers := []struct {
    name  string
    value *shimcore.CompilerOptions
  }{
    {"nil", nil}, {"unset", &shimcore.CompilerOptions{}}, {"false", &shimcore.CompilerOptions{ExactOptionalPropertyTypes: shimcore.TSFalse}}, {"true", &shimcore.CompilerOptions{ExactOptionalPropertyTypes: shimcore.TSTrue}},
  }
  properties := []struct {
    name  string
    value *metadata.MetadataSchema
  }{
    {"nil", nil}, {"optional-required", &metadata.MetadataSchema{Optional: true, Required: true}},
    {"optional-undefined", &metadata.MetadataSchema{Optional: true, Required: false}},
    {"required-only", &metadata.MetadataSchema{Optional: false, Required: true}},
    {"required-undefined", &metadata.MetadataSchema{Optional: false, Required: false}},
  }
  positive := map[string][2]bool{"true/false/optional-required": {true, true}, "true/false/optional-undefined": {true, false}}
  for _, compiler := range compilers {
    for _, undefined := range flags {
      for _, property := range properties {
        name := compiler.name + "/" + undefined.name + "/" + property.name
        t.Run(name, func(t *testing.T) {
          context := nativecontext.ITypiaContext{CompilerOptions: compiler.value, Options: nativecontext.ITransformOptions{Undefined: undefined.value}}
          expected := positive[name]
          if actual := OptionPredicator.ExactOptionalProperty(context, property.value); actual != expected[0] {
            t.Fatalf("exact=%v want %v", actual, expected[0])
          }
          if actual := OptionPredicator.StrictOptionalUndefined(context, property.value); actual != expected[1] {
            t.Fatalf("strict=%v want %v", actual, expected[1])
          }
        })
      }
    }
  }
}
