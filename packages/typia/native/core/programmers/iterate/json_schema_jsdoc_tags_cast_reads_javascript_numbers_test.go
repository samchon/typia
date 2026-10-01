package iterate

import (
  "encoding/json"
  "math"
  "reflect"
  "testing"
)

// TestJsonSchemaJsDocTagsCastReadsJavaScriptNumbers verifies the `@x-*`
// extension cast.
//
// The Go port swapped the v12 cast's JavaScript `Number()` grammar for Go's
// float syntax (samchon/typia#2442). `NaN` and every `Inf` spelling then became
// floats that `encoding/json` refuses and JavaScript prints as `null`, while
// `0x10` stopped being a number and `0x1p4` / `1_000` started being one. The
// expectations restore v12's numbers where they are finite and keep the text
// where JSON has no number: a non-finite spelling stays a string instead of
// degrading to `null`, and empty text stays `""` instead of v12's `0`.
//
//  1. Cast every row of the issue's table.
//  2. Assert no result is NaN or an infinity, and every result marshals.
//
// @evidence contracts/testing.md#behavioral-verification The @x- extension cast is called on JavaScript number spellings (hex, NaN, infinities, exponents) and ordinary text; each result must equal the authored value and numbers must marshal as JSON.
// @evidence contracts/testing.md#independent-expectations The JavaScript Number() grammar defines which spellings are numbers; expected values are authored literals and JSON marshaling is the independent check.
// @evidence contracts/testing.md#distinguishing-cases Accepted JavaScript spellings and Go-only spellings give positives and negatives.
// @evidence contracts/testing.md#execution-ownership The canonical native Go command (pnpm test:go:native) runs this same-package Test function in process. It calls the cast and encoding/json in memory with no checker, filesystem fixture or process.
func TestJsonSchemaJsDocTagsCastReadsJavaScriptNumbers(t *testing.T) {
  for _, item := range []struct {
    text     string
    expected any
  }{
    {"NaN", "NaN"},
    {"nan", "nan"},
    {"Infinity", "Infinity"},
    {"-Infinity", "-Infinity"},
    {"infinity", "infinity"},
    {"inf", "inf"},
    {"Inf", "Inf"},
    {"1e400", "1e400"},
    {"0x10", float64(16)},
    {"0b101", float64(5)},
    {"0o7", float64(7)},
    {"0x1p4", "0x1p4"},
    {"1_000", "1_000"},
    {"", ""},
    {"-0", float64(0)},
    {"+5", float64(5)},
    {".5", 0.5},
    {"1e3", float64(1000)},
    {"true", true},
    {"false", false},
    {"null", nil},
    {"text", "text"},
  } {
    actual := json_schema_jsDocTags_cast(item.text)
    if reflect.DeepEqual(actual, item.expected) == false {
      t.Fatalf("cast(%q) = %#v, expected %#v", item.text, actual, item.expected)
    }
    if number, ok := actual.(float64); ok {
      if math.IsNaN(number) || math.IsInf(number, 0) || math.Signbit(number) && number == 0 {
        t.Fatalf("cast(%q) = %v is not a JSON number", item.text, number)
      }
    }
    if _, err := json.Marshal(actual); err != nil {
      t.Fatalf("cast(%q) does not marshal: %v", item.text, err)
    }
  }
}
