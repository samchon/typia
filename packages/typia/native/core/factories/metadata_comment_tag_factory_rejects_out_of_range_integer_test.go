package factories

import "testing"

// TestMetadataCommentTagFactoryRejectsOutOfRangeInteger pins the boundary of the
// float64-to-int conversion behind every numeric JSDoc tag.
//
// `metadataCommentTagFactory_parse_integer` used to end in a bare `int(parsed)`.
// A float64 outside the destination range converts by an implementation-defined
// rule rather than by wrapping, so on amd64 both `1e19` and `-1e19` became
// -9223372036854775808 -- a magnitude and its negation collapsing to the same
// wrong number, silently, inside `@minItems` and `@maxItems`.
//
// The destination is int64, not int. `int` is 32 bits on the 32-bit platforms
// ttsc publishes a binary for (`@ttsc/linux-arm`), so bounding by `int` would
// leave the same defect at 2**31 there while closing it at 2**63 on x64 -- and
// would make `@minimum 3000000000` on a `bigint` mean one thing per platform.
// Case 4 is what holds the boundary platform-independent.
//
// The guard has to be exclusive at 2**63 rather than inclusive at
// math.MaxInt64. An untyped constant 9223372036854775807.0 rounds to 2**63 once
// it meets a float64 operand, so an inclusive comparison lets exactly the one
// value through that int64 cannot hold. This test is what keeps that distinction
// from being "simplified" back.
//
//  1. Reject magnitudes at and beyond 2**63 in both directions.
//  2. Accept the true minimum and the largest float64 below the maximum, and
//     require the value carried through to be the value parsed.
//  3. Keep the existing non-integer and unsigned diagnostics untouched.
//  4. Require the accepted range to be int64's on every platform, not the
//     compiling platform's `int`.
func TestMetadataCommentTagFactoryRejectsOutOfRangeInteger(t *testing.T) {
  parse := func(value string, unsigned bool) (*int64, []string) {
    messages := []string{}
    report := func(msg string) any {
      messages = append(messages, msg)
      return nil
    }
    return metadataCommentTagFactory_parse_integer(struct {
      Report   func(msg string) any
      Unsigned bool
      Value    string
    }{Report: report, Unsigned: unsigned, Value: value}), messages
  }

  //----
  // 1. out of range, both directions
  //----
  for _, value := range []string{
    "9223372036854775808",   // 2**63 exactly -- the value an inclusive guard let through
    "10000000000000000000",  // 1e19
    "-10000000000000000000", // -1e19, which collapsed to the same int as +1e19
    "1e30",
  } {
    parsed, messages := parse(value, false)
    if parsed != nil {
      t.Fatalf("%s must be rejected, got %d", value, *parsed)
    }
    if len(messages) == 0 {
      t.Fatalf("%s must be reported, not dropped silently", value)
    }
  }

  //----
  // 2. in range, carried through unchanged
  //----
  for _, tuple := range []struct {
    value    string
    expected int64
  }{
    {value: "0", expected: 0},
    {value: "1", expected: 1},
    {value: "-1", expected: -1},
    {value: "-9223372036854775808", expected: -9223372036854775808}, // the true minimum
    {value: "9223372036854774784", expected: 9223372036854774784},   // largest float64 below 2**63
  } {
    parsed, messages := parse(tuple.value, false)
    if parsed == nil {
      t.Fatalf("%s must be accepted, reports=%#v", tuple.value, messages)
    }
    if *parsed != tuple.expected {
      t.Fatalf("%s must parse to %d, got %d", tuple.value, tuple.expected, *parsed)
    }
    if len(messages) != 0 {
      t.Fatalf("%s must report nothing, got %#v", tuple.value, messages)
    }
  }

  //----
  // 3. the diagnostics that already existed
  //----
  if parsed, messages := parse("1.5", false); parsed != nil || len(messages) == 0 {
    t.Fatalf("a non-integer must still be rejected: %#v %#v", parsed, messages)
  }
  if parsed, messages := parse("-1", true); parsed != nil || len(messages) == 0 {
    t.Fatalf("a negative unsigned integer must still be rejected: %#v %#v", parsed, messages)
  }

  //----
  // 4. the boundary is int64's on every platform, not the compiling one's int
  //----
  // These sit above int32 and below int64. A guard written against `int`
  // accepts them here and converts them out of range on `@ttsc/linux-arm` --
  // the same defect this test closes, moved to a platform the suite does not
  // usually run on. `GOARCH=arm go vet ./core/factories/` is what executes this
  // case for real; on a 64-bit host it is the declared type that carries it.
  for _, tuple := range []struct {
    value    string
    expected int64
  }{
    {value: "2147483648", expected: 2147483648},   // 2**31
    {value: "-2147483649", expected: -2147483649}, // -2**31 - 1
    {value: "4294967296", expected: 4294967296},   // 2**32, past uint32 too
    {value: "3000000000", expected: 3000000000},   // a plausible @minimum on a bigint
  } {
    parsed, messages := parse(tuple.value, false)
    if parsed == nil {
      t.Fatalf("%s is inside int64 and must be accepted on every platform, reports=%#v", tuple.value, messages)
    }
    if *parsed != tuple.expected {
      t.Fatalf("%s must parse to %d, got %d", tuple.value, tuple.expected, *parsed)
    }
  }
}
