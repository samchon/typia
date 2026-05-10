package functional

import (
	"testing"

	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
)

// TestFunctionalAssertHelperCoverage exercises internal helper lookup.
//
// Functional assert programmers import runtime helpers through the context when
// available and otherwise fall back to a local identifier. The fallback is a
// small but distinct branch from transform-time importer use.
//
// 1. Call the helper lookup with an empty transform context.
// 2. Require the fallback identifier to be produced.
// 3. Keep the assertion local to the functional package.
// 4. Avoid depending on a TypeScript checker or importer.
func TestFunctionalAssertHelperCoverage(t *testing.T) {
	if functionalAssertProgrammer_internal(nativecontext.ITypiaContext{}, "helper") == nil {
		t.Fatal("functional assert internal helper returned nil")
	}
}
