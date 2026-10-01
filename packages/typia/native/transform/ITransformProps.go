package transform

import nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"

// ITransformProps is the input of a feature transformer: the context, the module
// expression and the call. It aliases the record of the internal package.
//
// @evidence contracts/common.md#principled-implementation The alias keeps one definition of the feature transformers' input in the internal package, which the feature packages import.
// @evidence contracts/common.md#clear-and-simple-design A type alias.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
// @evidence contracts/common.md#meaningful-documentation The doc states that it aliases the internal record.
type ITransformProps = nativeinternal.ITransformProps
