package context

// ITransformOptions holds the typia-owned options. A nil pointer means the option
// was not set. Runtime retains the adapter's runtime label; internal helper
// imports use the fixed typia package path.
//
// @evidence contracts/common.md#principled-implementation Each boolean option is a pointer so an unset option is distinguishable from false. Runtime is forwarded to ImportProgrammer as a label; helper imports use fixed typia paths rather than selecting a package from this value.
// @evidence contracts/common.md#clear-and-simple-design One flat record.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states the meaning of nil and of Runtime.
type ITransformOptions struct {
  // Finite enables finite-number checks when true.
  Finite *bool

  // Numeric enables NaN checks when true; Finite also enables them.
  Numeric *bool

  // Functional enables function checks when true.
  Functional *bool

  // Undefined permits undefined optional properties by default. False lets
  // exactOptionalPropertyTypes determine their stricter handling.
  Undefined *bool

  // Runtime is the forwarded adapter label, not an internal import path switch.
  Runtime string
}
