package helpers

import shimast "github.com/microsoft/typescript-go/shim/ast"

// ICheckEntry is one check of a type: its expected description, an optional
// guard on the value itself, and type-tag conditions. Conditions are
// alternatives, each an and-list of conditions; the entry holds when Expression
// holds and one alternative holds.
//
// @evidence contracts/common.md#principled-implementation It is one check of a type: its expected description, an optional guard on the value itself, and type-tag conditions; its 3 fields (Expected, Expression, Conditions) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 3-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is and explains its non-obvious fields.
type ICheckEntry struct {
  Expected   string
  Expression *shimast.Node
  Conditions [][]ICheckEntry_ICondition
}

// ICheckEntry_ICondition is one type-tag condition of a check entry, with its
// expected description and condition expression.
//
// @evidence contracts/common.md#principled-implementation It is one type-tag condition of a check entry, with its expected description and condition expression; its 2 fields (Expected, Expression) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 2-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type ICheckEntry_ICondition struct {
  Expected   string
  Expression *shimast.Node
}
