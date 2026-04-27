package reflect

import (
	"strings"

	"github.com/samchon/typia/packages/core/src/programmers"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var ReflectNameTransformer = reflectNameTransformerNamespace{}

type reflectNameTransformerNamespace struct{}

func (reflectNameTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return programmers.Quote(baseTypeName(call.TypeText))
}

func baseTypeName(typ string) string {
	typ = strings.Join(strings.Fields(strings.TrimSpace(typ)), " ")
	if typ == "" {
		return "unknown"
	}
	return typ
}
