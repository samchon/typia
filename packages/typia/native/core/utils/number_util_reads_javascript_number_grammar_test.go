package utils

import (
  "math"
  "strings"
  "testing"
)

// TestNumberUtilReadsJavaScriptNumberGrammar verifies NumberUtil.Read against
// JavaScript's `Number()`.
//
// Tag values and JSDoc extensions are TypeScript source, so the grammar that
// reads them is JavaScript's StringNumericLiteral. The expectations below are
// what `Number(text)` returns in JavaScript (samchon/typia#2442), not what the
// Go float parser accepts; the Go-only spellings (`NaN`, `Inf`, `0x1p4`,
// `1_000`) are the cases that used to leak through. Text without digits is the
// one deliberate difference: `Number("")` is 0, but it names no number here.
//
//  1. Read decimal, signed, exponent, and point-edge spellings.
//  2. Read hexadecimal, octal, and binary integers, and reject signed ones.
//  3. Classify `Infinity`, overflow, and underflow by finiteness.
//  4. Reject Go-only spellings, separators, and empty or blank text.
//  5. Spell values back exactly as JavaScript's `String()` does.
//  6. Read integer spellings exactly, beyond double precision.
//  7. Read decimals longer than `strconv.ParseFloat`'s 800-digit buffer as
//     `Number()` does: it read `1` followed by 800 zeros and `e-800` as 0.1.
func TestNumberUtilReadsJavaScriptNumberGrammar(t *testing.T) {
  finite := func(value float64) NumberUtil_Reading {
    return NumberUtil_Reading{Value: value, Numeric: true, Finite: true}
  }
  infinite := func(sign int) NumberUtil_Reading {
    return NumberUtil_Reading{Value: math.Inf(sign), Numeric: true, Finite: false}
  }
  invalid := NumberUtil_Reading{}
  for _, item := range []struct {
    text     string
    expected NumberUtil_Reading
  }{
    // Decimal notation, including every point and sign edge `Number()` admits.
    {"0", finite(0)},
    {"3", finite(3)},
    {"-2.5", finite(-2.5)},
    {"+5", finite(5)},
    {".5", finite(0.5)},
    {"5.", finite(5)},
    {"1e3", finite(1000)},
    {"1E-3", finite(0.001)},
    {"-0", finite(0)},
    {"  12\t", finite(12)},
    {"\u00a012\u2028", finite(12)},
    {"007", finite(7)},
    // Non-decimal integers: unsigned only, any letter case in the prefix.
    {"0x10", finite(16)},
    {"0XfF", finite(255)},
    {"0o7", finite(7)},
    {"0b101", finite(5)},
    {"-0x10", invalid},
    {"+0x10", invalid},
    {"0o8", invalid},
    {"0b2", invalid},
    {"0x", invalid},
    // Non-finite values are numeric but not finite.
    {"Infinity", infinite(1)},
    {"+Infinity", infinite(1)},
    {"-Infinity", infinite(-1)},
    {"1e400", infinite(1)},
    {"-1e400", infinite(-1)},
    {"1e-400", finite(0)},
    // Go-only spellings and separators: NaN in JavaScript.
    {"NaN", invalid},
    {"nan", invalid},
    {"Inf", invalid},
    {"inf", invalid},
    {"-inf", invalid},
    {"infinity", invalid},
    {"0x1p4", invalid},
    {"1_000", invalid},
    {"1e", invalid},
    {".", invalid},
    {"1.2.3", invalid},
    {"12px", invalid},
    // No digits at all.
    {"", invalid},
    {"   ", invalid},
    {"+", invalid},
  } {
    actual := NumberUtil.Read(item.text)
    if actual != item.expected || math.Signbit(actual.Value) != math.Signbit(item.expected.Value) {
      t.Fatalf("Read(%q) = %+v, expected %+v", item.text, actual, item.expected)
    }
  }

  // String: the oracle is JavaScript's `String(value)`.
  for _, item := range []struct {
    value    float64
    expected string
  }{
    {0, "0"},
    {math.Copysign(0, -1), "0"},
    {16, "16"},
    {-2.5, "-2.5"},
    {0.001, "0.001"},
    {0.000001, "0.000001"},
    {1e6, "1000000"},
    {123456789012345680000, "123456789012345680000"},
    {1e21, "1e+21"},
    {1e-7, "1e-7"},
    {-1e-7, "-1e-7"},
    {1.23e-18, "1.23e-18"},
    {1.5e300, "1.5e+300"},
    {9007199254740993, "9007199254740992"},
    {math.NaN(), "NaN"},
    {math.Inf(1), "Infinity"},
    {math.Inf(-1), "-Infinity"},
  } {
    if actual := NumberUtil.String(item.value); actual != item.expected {
      t.Fatalf("String(%v) = %q, expected %q", item.value, actual, item.expected)
    }
  }

  // Integer: exact digits for integer spellings, nothing for the rest.
  for _, item := range []struct {
    text     string
    expected string
    ok       bool
  }{
    {"9007199254740993", "9007199254740993", true},
    {"-12", "-12", true},
    {"+5", "5", true},
    {"007", "7", true},
    {"-0", "0", true},
    {" 42 ", "42", true},
    {"0x10", "16", true},
    {"0b101", "5", true},
    {"0o17", "15", true},
    {"0xffffffffffffffffff", "4722366482869645213695", true},
    {"1e3", "", false},
    {"1.0", "", false},
    {"-0x10", "", false},
    {"0o8", "", false},
    {"", "", false},
    {"Infinity", "", false},
  } {
    integer, ok := NumberUtil.Integer(item.text)
    if ok != item.ok || (ok && integer.String() != item.expected) {
      t.Fatalf("Integer(%q) = %v, %v; expected %q, %v", item.text, integer, ok, item.expected, item.ok)
    }
  }

  // Long mantissas: the expectations are Node's `Number(text)`.
  zeros := func(n int) string { return strings.Repeat("0", n) }
  for _, item := range []struct {
    text     string
    expected NumberUtil_Reading
  }{
    {"1" + zeros(800) + "e-800", finite(1)},
    {"7" + zeros(810) + "e-810", finite(7)},
    {"0." + zeros(900) + "1e901", finite(1)},
    {"-2" + zeros(1000) + "e-1000", finite(-2)},
    // a tie rounds to even, and one digit past the buffer breaks it
    {"9007199254740993" + zeros(800) + "e-800", finite(9007199254740992)},
    {"9007199254740993" + zeros(800) + "1e-801", finite(9007199254740994)},
    {"1" + zeros(900) + "e-1300", finite(0)},
    {"1" + zeros(2000), infinite(1)},
    {"-1" + zeros(2000), infinite(-1)},
    {"1" + zeros(800) + "e99999999999999999999", infinite(1)},
    {zeros(900) + "e99999999999999999999", finite(0)},
  } {
    if reading := NumberUtil.Read(item.text); reading != item.expected {
      t.Fatalf("Read(%d digits) = %#v, expected %#v", len(item.text), reading, item.expected)
    }
  }
}
