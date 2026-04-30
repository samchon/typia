package context

type ITransformOptions struct {
	Finite     *bool
	Numeric    *bool
	Functional *bool
	Undefined  *bool
	Runtime    string
}
