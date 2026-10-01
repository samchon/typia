package transform

import nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"

// TransformerError is the error that the transform raises for an unsupported
// input. It aliases the programmers' type.
//
// @evidence contracts/common.md#principled-implementation The transform package re-exports the programmers' error type, so a raise from either layer is the same type and the file transformer handles one case.
// @evidence contracts/common.md#clear-and-simple-design A type alias.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
// @evidence contracts/common.md#meaningful-documentation The doc states that it aliases the programmers' type.
type TransformerError = nativeinternal.TransformerError
// TransformerError_IProps holds the properties of a TransformerError.
//
// @evidence contracts/common.md#principled-implementation The properties are the programmers' record under this package's name.
// @evidence contracts/common.md#clear-and-simple-design A type alias.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
// @evidence contracts/common.md#meaningful-documentation The doc states what it holds.
type TransformerError_IProps = nativeinternal.TransformerError_IProps
// TransformerError_MetadataFactory_IError describes one unsupported type.
//
// @evidence contracts/common.md#principled-implementation One unsupported type is described by the programmers' record under this package's name.
// @evidence contracts/common.md#clear-and-simple-design A type alias.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
// @evidence contracts/common.md#meaningful-documentation The doc states what it describes.
type TransformerError_MetadataFactory_IError = nativeinternal.TransformerError_MetadataFactory_IError
// TransformerError_MetadataFactory_IExplore locates a metadata error.
//
// @evidence contracts/common.md#principled-implementation The location of an unsupported type is the programmers' record under this package's name.
// @evidence contracts/common.md#clear-and-simple-design A type alias.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
// @evidence contracts/common.md#meaningful-documentation The doc states what it locates.
type TransformerError_MetadataFactory_IExplore = nativeinternal.TransformerError_MetadataFactory_IExplore

// NewTransformerError creates a TransformerError from its properties.
var NewTransformerError = nativeinternal.NewTransformerError
// TransformerError_from builds the error that lists unsupported types.
var TransformerError_from = nativeinternal.TransformerError_from
