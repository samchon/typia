package utils

import (
  "math"
  "math/big"
  "regexp"
  "strconv"
  "strings"
  "unicode"
)

// NumberUtil reads numeric text the way JavaScript's `Number()` does.
//
// Tag values and JSDoc extensions are written in TypeScript source, and typia
// splices numbers it reads from them into the JavaScript it emits, so their
// grammar is JavaScript's StringNumericLiteral, not Go's float syntax. The two
// differ in both directions: `strconv.ParseFloat` accepts `NaN`, `Inf`, and
// `infinity` in any case, hexadecimal floats (`0x1p4`), and digit separators
// (`1_000`), all of which `Number()` reads as NaN, while it rejects the
// `0x`/`0o`/`0b` integers that `Number()` accepts. A spelling Go accepts but
// JavaScript does not also becomes invalid emitted code once it is spliced into
// a validator (samchon/typia#2442).
type numberUtilNamespace struct{}

var NumberUtil = numberUtilNamespace{}

// NumberUtil_Reading is the outcome of reading one numeric text.
type NumberUtil_Reading struct {
  // Value is what `Number(text)` evaluates to, with negative zero read as zero.
  Value float64

  // Numeric is false when `Number(text)` is NaN, or when the text is blank.
  Numeric bool

  // Finite is false for `Infinity`, `-Infinity`, and values that overflow to
  // them, such as `1e400`. JSON has no spelling for either.
  Finite bool
}

// Read evaluates text with the grammar of JavaScript's `Number()`.
//
// Surrounding JavaScript whitespace is ignored, as `Number()` ignores it. One
// deliberate difference remains: `Number("")` and `Number("  ")` are 0, but
// blank text names no number, so it reads as non-numeric here.
func (numberUtilNamespace) Read(text string) NumberUtil_Reading {
  text = strings.TrimFunc(text, numberUtil_isWhiteSpace)
  if text == "" {
    return NumberUtil_Reading{}
  }
  if match := numberUtil_NON_DECIMAL.FindStringSubmatch(text); match != nil {
    base := 16
    switch match[1] {
    case "o", "O":
      base = 8
    case "b", "B":
      base = 2
    }
    integer, ok := new(big.Int).SetString(match[2], base)
    if ok == false {
      return NumberUtil_Reading{}
    }
    // big.Float rounds to nearest, ties to even, as the specification's
    // mathematical-value conversion does, and reports overflow as an infinity.
    value, _ := new(big.Float).SetInt(integer).Float64()
    return numberUtil_reading(value)
  }
  if numberUtil_DECIMAL.MatchString(text) == false {
    return NumberUtil_Reading{}
  }
  if strings.HasSuffix(text, "Infinity") {
    if strings.HasPrefix(text, "-") {
      return numberUtil_reading(math.Inf(-1))
    }
    return numberUtil_reading(math.Inf(1))
  }
  if numberUtil_mantissaLength(text) > numberUtil_LONG_MANTISSA {
    return numberUtil_reading(numberUtil_readLong(text))
  }
  // The pattern admits only plain decimal notation, which ParseFloat reads with
  // IEEE round-to-nearest. An out-of-range magnitude comes back as an infinity
  // with ErrRange, which is exactly what `Number()` yields; underflow comes back
  // as zero without an error, as it does in JavaScript.
  value, err := strconv.ParseFloat(text, 64)
  if err != nil && math.IsInf(value, 0) == false {
    return NumberUtil_Reading{}
  }
  return numberUtil_reading(value)
}

// Integer reads text that spells an integer exactly: decimal digits with an
// optional sign, or an unsigned `0x` / `0o` / `0b` literal.
//
// `Number()` rounds such text to the nearest double, so `9007199254740993`
// reads as 9007199254740992. Splicing the digits as written keeps a check that
// reads them as a BigInt literal (`$input % 9007199254740993n`) exact. Any
// other spelling, including an integer written with an exponent or a point
// (`1e3`, `1.0`), reports false; its value is the double `Read` returns.
func (numberUtilNamespace) Integer(text string) (*big.Int, bool) {
  text = strings.TrimFunc(text, numberUtil_isWhiteSpace)
  if match := numberUtil_NON_DECIMAL.FindStringSubmatch(text); match != nil {
    base := 16
    switch match[1] {
    case "o", "O":
      base = 8
    case "b", "B":
      base = 2
    }
    return new(big.Int).SetString(match[2], base)
  }
  if numberUtil_INTEGER.MatchString(text) == false {
    return nil, false
  }
  return new(big.Int).SetString(strings.TrimPrefix(text, "+"), 10)
}

// Rational is the exact value a finite numeric text writes.
//
// `Read` evaluates the text as `Number()` does, rounding it to the nearest
// double; this keeps what the text says, so a caller can tell whether that
// double is the written value itself. `9007199254740993` and
// `9007199254740993.0` both read as 9007199254740992, but their rational value
// is 9007199254740993. Text `Read` does not find numeric and finite reports
// false, and so does text `big.Rat` refuses to expand: an exponent outside the
// int64 range, or a non-zero mantissa whose exponent, net of its fraction
// digits, lies beyond a million in magnitude (`1e-1000001` reads as 0 but has
// no exact value here).
func (numberUtilNamespace) Rational(text string) (*big.Rat, bool) {
  if reading := NumberUtil.Read(text); reading.Numeric == false || reading.Finite == false {
    return nil, false
  }
  if integer, ok := NumberUtil.Integer(text); ok {
    return new(big.Rat).SetInt(integer), true
  }
  // `Read` admitted only StrDecimalLiteral here, whose spellings `big.Rat`
  // parses: `5.`, `.5`, `+5`, and `1E3` included.
  return new(big.Rat).SetString(strings.TrimFunc(text, numberUtil_isWhiteSpace))
}

// String spells a value exactly as JavaScript's `String(value)` does.
//
// That is `Number.prototype.toString`: positional notation from 1e-6 up to
// 1e21, exponent notation outside with a signed exponent of no padded zeros
// (`1e+21`, `1e-7`), and `NaN`, `Infinity`, `-Infinity`, and `0` for negative
// zero. Each result is also JavaScript source text that evaluates to the value,
// negative zero reading back as zero.
func (numberUtilNamespace) String(value float64) string {
  switch {
  case math.IsNaN(value):
    return "NaN"
  case math.IsInf(value, 1):
    return "Infinity"
  case math.IsInf(value, -1):
    return "-Infinity"
  case value == 0:
    return "0"
  }
  magnitude := math.Abs(value)
  if magnitude >= 1e-6 && magnitude < 1e21 {
    return strconv.FormatFloat(value, 'f', -1, 64)
  }
  // Go pads the exponent to two digits (`1e-07`); JavaScript does not.
  text := strconv.FormatFloat(value, 'e', -1, 64)
  index := strings.IndexByte(text, 'e')
  mantissa, sign, digits := text[:index], text[index+1:index+2], strings.TrimLeft(text[index+2:], "0")
  return mantissa + "e" + sign + digits
}

// numberUtil_LONG_MANTISSA is the mantissa length beyond which
// numberUtil_readLong replaces `strconv.ParseFloat`. When ParseFloat's fast
// paths give up, it falls back to a decimal buffer of 800 digits that places
// the point by the stored ones, so a mantissa of more than 800 significant
// digits with an exponent can read wrong: `1` followed by 800 zeros and `e-800`
// reads as 0.1, where `Number()` reads 1. Counting every digit against 700
// keeps well clear of that edge.
const numberUtil_LONG_MANTISSA = 700

// numberUtil_EXPONENT_LIMIT bounds the exponent numberUtil_readLong computes
// with, far beyond any double yet far from overflowing int64.
const numberUtil_EXPONENT_LIMIT = int64(1) << 40

// numberUtil_mantissaLength counts the digits before the exponent.
func numberUtil_mantissaLength(text string) int {
  count := 0
  for _, r := range text {
    if r == 'e' || r == 'E' {
      break
    }
    if '0' <= r && r <= '9' {
      count++
    }
  }
  return count
}

// numberUtil_readLong rounds a decimal literal with a long mantissa to the
// nearest double, as `Number()` does.
//
// A value past the double range in either direction is settled by its decimal
// order of magnitude alone. Otherwise the significant digits are cut to a
// thousand with a sticky digit for anything non-zero beyond, which rounds the
// same as the full text, since a double never needs more than 768 digits to
// decide a tie, and `big.Rat` rounds the result exactly.
func numberUtil_readLong(text string) float64 {
  negative := strings.HasPrefix(text, "-")
  body := strings.TrimLeft(text, "+-")
  exponent := int64(0)
  if index := strings.IndexAny(body, "eE"); index != -1 {
    // Saturate: any exponent past 2^40 in magnitude puts the value beyond the
    // double range, and clamping keeps the order below from overflowing int64.
    parsed, err := strconv.ParseInt(body[index+1:], 10, 64)
    if err != nil || parsed > numberUtil_EXPONENT_LIMIT || parsed < -numberUtil_EXPONENT_LIMIT {
      parsed = numberUtil_EXPONENT_LIMIT
      if strings.HasPrefix(body[index+1:], "-") {
        parsed = -parsed
      }
    }
    exponent = parsed
    body = body[:index]
  }
  fraction := int64(0)
  if point := strings.IndexByte(body, '.'); point != -1 {
    fraction = int64(len(body) - point - 1)
    body = body[:point] + body[point+1:]
  }
  digits := strings.TrimLeft(body, "0")
  signed := func(value float64) float64 {
    if negative {
      return -value
    }
    return value
  }
  if digits == "" {
    return 0
  }
  // the value is 0.digits times ten to the order
  order := int64(len(digits)) + exponent - fraction
  if order > 310 {
    return signed(math.Inf(1))
  }
  if order < -330 {
    return 0
  }
  if len(digits) > 1000 {
    sticky := strings.Trim(digits[1000:], "0") != ""
    digits = digits[:1000]
    if sticky {
      digits += "1"
    }
  }
  rational, _ := new(big.Rat).SetString(digits + "e" + strconv.FormatInt(order-int64(len(digits)), 10))
  value, _ := rational.Float64()
  return signed(value)
}

func numberUtil_reading(value float64) NumberUtil_Reading {
  if value == 0 {
    value = 0 // negative zero
  }
  return NumberUtil_Reading{
    Value:   value,
    Numeric: true,
    Finite:  math.IsInf(value, 0) == false,
  }
}

// numberUtil_isWhiteSpace is StrWhiteSpaceChar: WhiteSpace and LineTerminator.
func numberUtil_isWhiteSpace(r rune) bool {
  switch r {
  case '\t', '\v', '\f', ' ', 0x00a0, 0xfeff, '\n', '\r', 0x2028, 0x2029:
    return true
  }
  return unicode.Is(unicode.Zs, r)
}

// numberUtil_NON_DECIMAL is NonDecimalIntegerLiteral without separators. It
// takes no sign: `Number("-0x10")` is NaN.
var numberUtil_NON_DECIMAL = regexp.MustCompile(`^0([xXoObB])([0-9a-fA-F]+)$`)

// numberUtil_INTEGER is a decimal integer with an optional sign.
var numberUtil_INTEGER = regexp.MustCompile(`^[+-]?[0-9]+$`)

// numberUtil_DECIMAL is StrDecimalLiteral: an optional sign before `Infinity`
// or a decimal literal whose digits may omit either side of the point, with an
// optional exponent. Separators are not part of it.
var numberUtil_DECIMAL = regexp.MustCompile(`^[+-]?(?:Infinity|(?:[0-9]+\.?[0-9]*|\.[0-9]+)(?:[eE][+-]?[0-9]+)?)$`)
