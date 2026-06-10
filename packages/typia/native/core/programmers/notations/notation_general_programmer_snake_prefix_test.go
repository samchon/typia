package notations

import "testing"

// TestNotationGeneralProgrammerSnakePrefix verifies underscore preservation.
//
// Issue #1926: the no-word-separation fallback of the snake derivation
// returned early without the `out()` prefix wrapper, so `snake("_foo")`
// produced `"foo"` and `snake("___")` produced `""`, diverging from the
// `SnakeCase<T>` typing which preserves such keys verbatim. The kebab
// derivation composes over snake and must inherit the corrected behavior.
func TestNotationGeneralProgrammerSnakePrefix(t *testing.T) {
  snake := []struct{ input, expected string }{
    {"userId", "user_id"},
    {"UserId", "user_id"},
    {"user_name", "user_name"},
    {"_privateValue", "_private_value"},
    {"__doublePrefix", "__double_prefix"},
    {"_solo", "_solo"},
    {"_FOO", "_foo"},
    {"___", "___"},
    {"XMLParser", "xmlparser"},
    {"toHTML", "to_html"},
    {"", ""},
    {"word", "word"},
  }
  for _, c := range snake {
    if actual := notationGeneralProgrammer_snake(c.input); actual != c.expected {
      t.Errorf("snake(%q) == %q, expected %q", c.input, actual, c.expected)
    }
  }
  kebab := []struct{ input, expected string }{
    {"_privateValue", "_private-value"},
    {"_solo", "_solo"},
    {"_XML", "_xml"},
    {"___", "___"},
    {"toHTML", "to-html"},
  }
  for _, c := range kebab {
    if actual := notationGeneralProgrammer_kebab(c.input); actual != c.expected {
      t.Errorf("kebab(%q) == %q, expected %q", c.input, actual, c.expected)
    }
  }
}
