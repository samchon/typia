package utils

import (
  "math/big"
  "testing"
)

// TestNumberUtilRationalKeepsWrittenValue verifies NumberUtil.Rational keeps the
// value a numeric text writes, not the double `Number()` rounds it to.
//
// A bigint comment tag must know whether a double is the written integer itself
// before it states a bound with it (samchon/typia#2457), so the exact value has
// to survive every spelling `Read` admits: points, exponents, signs, radix
// prefixes, and surrounding whitespace. Text `Read` refuses, or finds infinite,
// has no exact value.
//
//  1. Keep integers past 2^53, in every spelling.
//  2. Keep fractions and point-edge spellings exactly.
//  3. Refuse what `Read` refuses, and infinities.
func TestNumberUtilRationalKeepsWrittenValue(t *testing.T) {
  exact := func(text string) *big.Rat {
    value, ok := new(big.Rat).SetString(text)
    if ok == false {
      t.Fatalf("bad expectation %s", text)
    }
    return value
  }
  for _, item := range []struct {
    text     string
    expected string
  }{
    // 1. integers past 2^53
    {"9007199254740993", "9007199254740993"},
    {"9007199254740993.0", "9007199254740993"},
    {"9.007199254740993e15", "9007199254740993"},
    {"+9007199254740993", "9007199254740993"},
    {"-9007199254740993", "-9007199254740993"},
    {"0x20000000000001", "9007199254740993"},
    {"0o400000000000000001", "9007199254740993"},
    {" 9007199254740993\t", "9007199254740993"},
    // 2. fractions and point edges
    {".5", "1/2"},
    {"5.", "5"},
    {"-.5e1", "-5"},
    {"1e-3", "1/1000"},
    {"-0", "0"},
  } {
    value, ok := NumberUtil.Rational(item.text)
    if ok == false || value.Cmp(exact(item.expected)) != 0 {
      t.Fatalf("%q must be exactly %s, got %v (ok=%v)", item.text, item.expected, value, ok)
    }
  }

  // 3. what Read refuses, and infinities
  for _, text := range []string{"", " ", "1_000", "0x1p4", "inf", "NaN", "-0x10", "Infinity", "-Infinity", "1e400"} {
    if value, ok := NumberUtil.Rational(text); ok {
      t.Fatalf("%q must have no exact value, got %v", text, value)
    }
  }
}
