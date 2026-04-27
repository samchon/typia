package json

import internal "github.com/samchon/typia/packages/transform/src/internal"

var JsonCreateValidateParseTransformer = jsonCreateValidateParseTransformerNamespace{}

type jsonCreateValidateParseTransformerNamespace struct{}

func (jsonCreateValidateParseTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return `((input) => { try { return { success: true, data: JSON.parse(input) }; } catch (error) { return { success: false, errors: [{ path: "$input", expected: "json", value: input }] }; } })`
}
