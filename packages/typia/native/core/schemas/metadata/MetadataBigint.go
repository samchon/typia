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
type MetadataBigint struct {
  // Text is the exact value in base 10, prefixed with `-` when negative. A
  // bigint exists to hold what a float64 cannot, so the digits are the only
  // representation that stays exact at every magnitude.
  Text string
}

// String renders the base-10 digits, which is what every consumer that lowers a
// bigint into emitted code reads through `fmt.Sprint`.
func (obj MetadataBigint) String() string {
  return obj.Text
}

// MarshalJSON writes the digits unquoted, so metadata marshaled by a
// downstream tool carries the same JSON number a plain integer would.
func (obj MetadataBigint) MarshalJSON() ([]byte, error) {
  if obj.Text == "" {
    return []byte("0"), nil
  }
  return []byte(obj.Text), nil
}
