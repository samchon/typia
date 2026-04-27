package http

import internal "github.com/samchon/typia/packages/transform/src/internal"

func scalar(write func(string) string) internal.Task {
	return func(call internal.ITypiaCallExpression) string {
		return write(call.TypeText)
	}
}

func factory(write func(string) string) internal.Task {
	return func(call internal.ITypiaCallExpression) string {
		return write(call.TypeText)
	}
}
