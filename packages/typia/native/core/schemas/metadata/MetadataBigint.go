package metadata

// MetadataBigint is the value of a `bigint` constant.
//
// typescript-go reports a bigint literal as a `jsnum.PseudoBigInt`, a struct in
// an internal package the shim does not re-export. Nothing downstream could
// name it, so consumers that had to render the value reflected its fields
// instead and emitted `{ base10Value: "2", negative: false }` where the caller
// declared `bigint`. This is the nameable stand-in.
//
// It is a comparable struct on purpose. Every other value a
// `MetadataConstantValue` carries -- `string`, `bool`, the number -- is
// comparable, and the factories compare those values with `==`; the
// intersection tag assigner is one such site. A pointer type such as
// `*math/big.Int` would compare identity there and, for bigints alone,
// silently drop whatever the comparison decides.
//
// @evidence contracts/common.md#principled-implementation The value is kept as base-10 text, which stays exact at every magnitude and, as a comparable struct, compares by value with == like every other constant value, which the factories rely on.
// @evidence contracts/common.md#clear-and-simple-design One string field.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The type is a stand-in for an unexported typescript-go type and invents no other representation.
// @evidence contracts/common.md#meaningful-documentation The doc explains why the stand-in exists and why it must stay comparable.
type MetadataBigint struct {
  // Text is the exact value in base 10, prefixed with `-` when negative.
  // The metadata producer supplies the checker's canonical digits, avoiding
  // conversion of an exact integer through float64.
  Text string
}

// String renders the base-10 digits, which is what every consumer that lowers a
// bigint into emitted code reads through `fmt.Sprint`.
//
// @evidence contracts/common.md#principled-implementation Returning the stored digits is what code lowering a bigint into emitted text reads through fmt.Sprint.
// @evidence contracts/common.md#clear-and-simple-design One accessor.
// @evidence contracts/common.md#prohibited-implementation-shortcuts No reformatting of the digits.
// @evidence contracts/common.md#meaningful-documentation The doc states that it renders the digits.
func (obj MetadataBigint) String() string {
  return obj.Text
}

// MarshalJSON writes the digits unquoted, so metadata marshaled by a
// downstream tool carries the same JSON number a plain integer would. Text is
// expected to contain the producer's canonical decimal digits; empty text is 0.
//
// @evidence contracts/common.md#principled-implementation The digits are written unquoted as a JSON number, so metadata marshaled by a downstream tool carries the same number an integer would, and empty text is written as 0.
// @evidence contracts/common.md#clear-and-simple-design One method with one empty-text branch.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The output is not routed through a float, so large values keep every digit.
// @evidence contracts/common.md#meaningful-documentation The doc states the unquoted form.
func (obj MetadataBigint) MarshalJSON() ([]byte, error) {
  if obj.Text == "" {
    return []byte("0"), nil
  }
  return []byte(obj.Text), nil
}
