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
func TestOptionPredicatorStrictOptionalUndefinedDistinguishesExplicitUnion(t *testing.T) {
  disabled := false
  context := nativecontext.ITypiaContext{
    CompilerOptions: &shimcore.CompilerOptions{
      ExactOptionalPropertyTypes: shimcore.TSTrue,
    },
    Options: nativecontext.ITransformOptions{Undefined: &disabled},
  }

  implicit := schemametadata.MetadataSchema_initialize()
  implicit.Required = false
  implicit.Optional = true
  if !helpers.OptionPredicator.StrictOptionalUndefined(context, implicit) {
    t.Fatal("optional?: T should reject explicit undefined")
  }

  explicit := schemametadata.MetadataSchema_initialize()
  explicit.Required = true
  explicit.Optional = true
  if helpers.OptionPredicator.StrictOptionalUndefined(context, explicit) {
    t.Fatal("optional?: T | undefined should allow explicit undefined")
  }
}
