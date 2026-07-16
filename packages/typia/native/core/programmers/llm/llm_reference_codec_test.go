package llm

import "testing"

// TestLlmReferenceCodec locks JSON Pointer token escaping before URI-fragment encoding.
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
