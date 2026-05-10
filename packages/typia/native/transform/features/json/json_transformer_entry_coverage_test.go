package json

import (
	"testing"

	nativetransform "github.com/samchon/typia/packages/typia/native/transform/internal"
)

// TestJSONTransformerEntryCoverage exercises JSON transform entrypoints.
//
// Synthetic projects cover successful JSON transform emission, while this test
// enters every JSON wrapper directly and relies on generic guard behavior. That
// makes scalar, factory, schema, and application routes visible to package
// coverage without a compiler program.
//
// 1. Visit JSON schema, schemas, and application wrappers.
// 2. Visit parse and stringify scalar wrappers.
// 3. Visit create/factory parse wrappers.
// 4. Visit create/factory stringify wrappers.
func TestJSONTransformerEntryCoverage(t *testing.T) {
	props := nativetransform.ITransformProps{}
	for _, run := range []func(){
		func() { JsonSchemaTransformer.Transform(props) },
		func() { JsonSchemasTransformer.Transform(props) },
		func() { JsonApplicationTransformer.Transform(props) },
		func() { JsonAssertParseTransformer.Transform(props) },
		func() { JsonIsParseTransformer.Transform(props) },
		func() { JsonValidateParseTransformer.Transform(props) },
		func() { JsonStringifyTransformer.Transform(props) },
		func() { JsonAssertStringifyTransformer.Transform(props) },
		func() { JsonIsStringifyTransformer.Transform(props) },
		func() { JsonValidateStringifyTransformer.Transform(props) },
		func() { JsonCreateAssertParseTransformer.Transform(props) },
		func() { JsonCreateIsParseTransformer.Transform(props) },
		func() { JsonCreateValidateParseTransformer.Transform(props) },
		func() { JsonCreateStringifyTransformer.Transform(props) },
		func() { JsonCreateAssertStringifyTransformer.Transform(props) },
		func() { JsonCreateIsStringifyTransformer.Transform(props) },
		func() { JsonCreateValidateStringifyTransformer.Transform(props) },
	} {
		expectJSONPanic(t, run)
	}
}

func expectJSONPanic(t *testing.T, run func()) {
	t.Helper()
	defer func() {
		if recover() == nil {
			t.Fatal("expected JSON transformer panic")
		}
	}()
	run()
}
