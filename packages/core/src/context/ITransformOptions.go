package context

type ITransformOptions struct {
	Finite     *bool   `json:"finite,omitempty"`
	Numeric    *bool   `json:"numeric,omitempty"`
	Functional *bool   `json:"functional,omitempty"`
	Undefined  *bool   `json:"undefined,omitempty"`
	Runtime    *string `json:"runtime,omitempty"`
}
