package internal

type ITypiaCallExpression struct {
	Root       string
	Namespaces []string
	Method     string
	TypeText   string
	Factory    bool
}

type Task func(ITypiaCallExpression) string

var GenericTransformer = genericTransformerNamespace{}

type genericTransformerNamespace struct{}

func (genericTransformerNamespace) Scalar(write func(string) string) Task {
	return func(call ITypiaCallExpression) string {
		return write(call.TypeText)
	}
}

func (genericTransformerNamespace) Factory(write func(string) string) Task {
	return func(call ITypiaCallExpression) string {
		return write(call.TypeText)
	}
}
