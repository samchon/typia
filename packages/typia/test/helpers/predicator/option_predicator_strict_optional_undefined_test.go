package typia_test

import (
  "testing"

  shimcore "github.com/microsoft/typescript-go/shim/core"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  helpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestOptionPredicatorStrictOptionalUndefinedDistinguishesExplicitUnion verifies exact optional undefined handling.
//
// With exact optional properties and typia's `"undefined": false` option,
// `optional?: T` must reject an own `undefined` value, but
// `optional?: T | undefined` must still accept one because the undefined union
// is explicit.
//
// 1. Enable exact optional property types and disable typia undefined checks.
// 2. Assert `optional?: T` is strict.
// 3. Assert `optional?: T | undefined` is not strict.
//
// @evidence contracts/testing.md#behavioral-verification The strict-optional predicate runs with exact optional property types and undefined checks disabled, once for optional?: T and once for optional?: T | undefined.
// @evidence contracts/testing.md#independent-expectations TypeScript exactOptionalPropertyTypes semantics decide that only the explicit undefined union accepts an own undefined; the two verdicts are authored.
// @evidence contracts/testing.md#distinguishing-cases The plain optional is the strict case and the explicit union its negative twin; options with undefined checks enabled are covered by the defaults case.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It calls the exported predicate on constructed metadata and options with no filesystem fixture, process or native command build.
func TestOptionPredicatorStrictOptionalUndefinedDistinguishesExplicitUnion(t *testing.T) {
  disabled := false
  context := nativecontext.ITypiaContext{
    CompilerOptions: &shimcore.CompilerOptions{
      ExactOptionalPropertyTypes: shimcore.TSTrue,
    },
    Options: nativecontext.ITransformOptions{Undefined: &disabled},
  }

  implicit := schemametadata.MetadataSchema_initialize()
  implicit.Optional = true
  if !helpers.OptionPredicator.StrictOptionalUndefined(context, implicit) {
    t.Fatal("optional?: T should reject explicit undefined")
  }

  explicit := schemametadata.MetadataSchema_initialize()
  explicit.Required = false
  explicit.Optional = true
  if helpers.OptionPredicator.StrictOptionalUndefined(context, explicit) {
    t.Fatal("optional?: T | undefined should allow explicit undefined")
  }
}
