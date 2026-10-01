package context

// ITransformOptions holds the typia-owned options. A nil pointer means the option
// was not set; Runtime names the package that emitted code imports from.
//
// @evidence contracts/common.md#principled-implementation Each typia option is a pointer so an unset option is distinguishable from false, and the runtime name selects the package whose internal helpers generated code imports.
// @evidence contracts/common.md#clear-and-simple-design One flat record.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states the meaning of nil and of Runtime.
type ITransformOptions struct {
  Finite     *bool
  Numeric    *bool
  Functional *bool
  Undefined  *bool
  Runtime    string
}
