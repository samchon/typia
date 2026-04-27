package json

import internal "github.com/samchon/typia/packages/transform/src/internal"

var JsonCreateIsParseTransformer = jsonCreateIsParseTransformerNamespace{}

type jsonCreateIsParseTransformerNamespace struct{}

func (jsonCreateIsParseTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return "((input) => { try { return JSON.parse(input); } catch { return null; } })"
}
