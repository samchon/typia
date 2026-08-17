package factories

import "testing"

// TestMetadataCommentTagFactoryRejectsOutOfRangeInteger pins the boundary of the
// float64-to-int conversion behind every numeric JSDoc tag.
//
// `metadataCommentTagFactory_parse_integer` used to end in a bare `int(parsed)`.
// A float64 outside the int range converts by an implementation-defined rule
// rather than by wrapping, so on amd64 both `1e19` and `-1e19` became
// -9223372036854775808 -- a magnitude and its negation collapsing to the same
// wrong number, silently, inside `@minItems` and `@maxItems`.
//
// The guard has to be exclusive at 2**63 rather than inclusive at
// math.MaxInt64. An untyped constant 9223372036854775807.0 rounds to 2**63 once
// it meets a float64 operand, so an inclusive comparison lets exactly the one
// value through that int cannot hold. This test is what keeps that distinction
// from being "simplified" back.
//
//  1. Reject magnitudes at and beyond 2**63 in both directions.
//  2. Accept the true minimum and the largest float64 below the maximum, and
//     require the value carried through to be the value parsed.
//  3. Keep the existing non-integer and unsigned diagnostics untouched.
func TestMetadataCommentTagFactoryRejectsOutOfRangeInteger(t *testing.T) {
  parse := func(value string, unsigned bool) (*int, []string) {
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
    expected int
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
}
