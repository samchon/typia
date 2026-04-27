package features

import (
	"github.com/samchon/typia/packages/core/src/programmers"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var CreateValidateTransformer = createValidateTransformerNamespace{}

type createValidateTransformerNamespace struct{}

func (createValidateTransformerNamespace) Transform(equals bool) internal.Task {
	return internal.GenericTransformer.Factory(createValidateWrite)
}

func createValidateWrite(typeText string) string {
	validate := programmers.ValidateProgrammer.Write(typeText)
	return `Object.assign(` + validate + `, { "~standard": { version: 1, vendor: "typia", validate: (input) => { const result = ` + validate + `(input); return result.success ? { value: result.data } : { issues: (result.errors ?? []).map((error) => ({ message: error.expected ?? "validation failed", path: [] })) }; } } })`
}
