package notations

import internal "github.com/samchon/typia/packages/transform/src/internal"

var NotationGeneralTransformer = notationGeneralTransformerNamespace{}

type notationGeneralTransformerNamespace struct{}

func (notationGeneralTransformerNamespace) Transform(rename string) internal.Task {
	return func(call internal.ITypiaCallExpression) string {
		if rename == "camel" {
			return `(input => { const out = {}; for (const key of Object.keys(input ?? {})) { out[key.replace(/_([a-z])/g, (_, c) => c.toUpperCase())] = input[key]; } return out; })`
		}
		return "(input => input)"
	}
}
