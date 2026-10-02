package typia_test

import (
  "testing"

  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  helpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
)

// TestOptionPredicatorDefaultsAndFlags verifies transform-option defaults.
//
// typia's native helpers distinguish nil options from explicit false values.
// Undefined checking defaults to enabled, while numeric, finite, and functional
// behavior must only enable when the corresponding flag is true.
//
// 1. Evaluate predicates against empty transform options.
// 2. Assert undefined defaults to enabled and the other flags default disabled.
// 3. Enable finite and assert numeric follows finite.
// 4. Explicitly disable undefined and assert the predicate follows the flag.
//
// @evidence contracts/testing.md#behavioral-verification The option predicates are evaluated on empty options, with finite enabled and with undefined explicitly disabled; each default and implication is asserted.
// @evidence contracts/testing.md#independent-expectations The documented option semantics (undefined on by default, numeric/finite/functional off, finite implying numeric) give literal expectations.
// @evidence contracts/testing.md#distinguishing-cases Empty options are compared with options setting finite=true and undefined=false together; separate Numeric and Undefined assertions observe those two effects. The flags are not varied in separate calls.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It calls the exported predicates with constructed option values and no filesystem fixture, process or native command build.
func TestOptionPredicatorDefaultsAndFlags(t *testing.T) {
  options := nativecontext.ITransformOptions{}
  if helpers.OptionPredicator.Numeric(options) {
    t.Fatal("numeric should default to false")
  }
  if helpers.OptionPredicator.Functional(options) {
    t.Fatal("functional should default to false")
  }
  if helpers.OptionPredicator.Finite(options) {
    t.Fatal("finite should default to false")
  }
  if !helpers.OptionPredicator.Undefined(options) {
    t.Fatal("undefined should default to true")
  }

  enabled := true
  disabled := false
  options.Finite = &enabled
  options.Undefined = &disabled
  if !helpers.OptionPredicator.Numeric(options) {
    t.Fatal("finite=true should imply numeric=true")
  }
  if helpers.OptionPredicator.Undefined(options) {
    t.Fatal("undefined=false should disable undefined checks")
  }
}
