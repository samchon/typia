package llm

import (
	"testing"

	nativetransform "github.com/samchon/typia/packages/typia/native/transform/internal"
)

// TestLLMTransformerEntryCoverage exercises LLM transform entrypoints.
//
// LLM schema generation has deep programmer coverage through project fixtures,
// but each transform wrapper also owns generic argument and argument-shape
// guards. Empty transform props visit those entrypoints and recover their guard
// failures deterministically.
//
// 1. Visit schema, parameters, application, and structured-output wrappers.
// 2. Visit controller and parse/coerce scalar wrappers.
// 3. Visit create-parse and create-coerce factory wrappers.
// 4. Recover expected guard panics for every wrapper call.
func TestLLMTransformerEntryCoverage(t *testing.T) {
	props := nativetransform.ITransformProps{}
	for _, run := range []func(){
		func() { LlmSchemaTransformer.Transform(props) },
		func() { LlmParametersTransformer.Transform(props) },
		func() { LlmApplicationTransformer.Transform(props) },
		func() { LlmStructuredOutputTransformer.Transform(props) },
		func() { LlmControllerTransformer.Transform(props) },
		func() { LlmParseTransformer.Transform(props) },
		func() { LlmCoerceTransformer.Transform(props) },
		func() { LlmCreateParseTransformer.Transform(props) },
		func() { LlmCreateCoerceTransformer.Transform(props) },
	} {
		expectLLMPanic(t, run)
	}
}

func expectLLMPanic(t *testing.T, run func()) {
	t.Helper()
	defer func() {
		if recover() == nil {
			t.Fatal("expected LLM transformer panic")
		}
	}()
	run()
}
