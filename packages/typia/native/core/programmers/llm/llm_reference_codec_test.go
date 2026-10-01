package llm

import "testing"

// TestLlmReferenceCodec locks JSON Pointer token escaping before URI-fragment encoding.
//
// @evidence contracts/testing.md#behavioral-verification The reference codec encodes a table of keys and every result is compared with its expected string.
// @evidence contracts/testing.md#independent-expectations RFC 6901 token escaping followed by RFC 3986 fragment encoding defines each expected string; they are authored literals.
// @evidence contracts/testing.md#distinguishing-cases The table has plain, escaped and non-ASCII keys; decoding is not asserted here.
// @evidence contracts/testing.md#execution-ownership The canonical native Go command (pnpm test:go:native) runs this same-package Test function in process. It calls the codec on strings with no checker, filesystem fixture or process.
func TestLlmReferenceCodec(t *testing.T) {
  t.Parallel()
  cases := map[string]string{
    "Plain": "#/$defs/Plain",
    "":      "#/$defs/",
    "A/B":   "#/$defs/A~1B",
    "T~N":   "#/$defs/T~0N",
    "A~/B":  "#/$defs/A~0~1B",
    "~1":    "#/$defs/~01",
    "A B":   "#/$defs/A%20B",
    "C%D":   "#/$defs/C%25D",
    "Café":  "#/$defs/Caf%C3%A9",
  }
  for key, expected := range cases {
    if actual := llmSchemaProgrammer_encode_reference(key); actual != expected {
      t.Fatalf("encode %q: expected %q, got %q", key, expected, actual)
    }
  }
}
