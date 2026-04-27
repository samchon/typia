package json

import internal "github.com/samchon/typia/packages/transform/src/internal"

var JsonCreateAssertParseTransformer = jsonCreateAssertParseTransformerNamespace{}

type jsonCreateAssertParseTransformerNamespace struct{}

func (jsonCreateAssertParseTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return "JSON.parse"
}
