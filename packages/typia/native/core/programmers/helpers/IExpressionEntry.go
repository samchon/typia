package helpers

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// IExpressionEntry is one property of an object, with the input accessor, the
// key and value metadata, the decoded expression and whether the property is
// exact-optional or strict-optional-undefined.
//
// @evidence contracts/common.md#principled-implementation It is one property of an object, with the input accessor, the key and value metadata, the decoded expression and whether the property is exact-optional or strict-optional-undefined; its 6 fields (Input, Key, Meta, Expression, OptionalProperty, StrictOptionalUndefined) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 6-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type IExpressionEntry struct {
  Input                   *shimast.Node
  Key                     *nativemetadata.MetadataSchema
  Meta                    *nativemetadata.MetadataSchema
  Expression              *shimast.Node
  OptionalProperty        bool
  StrictOptionalUndefined bool
}
