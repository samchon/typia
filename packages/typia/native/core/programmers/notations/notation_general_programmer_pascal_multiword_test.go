package notations

import "testing"

// TestNotationGeneralProgrammerPascalMultiword verifies pascal tail lowercasing.
//
// Issue #2183: the pascal multi-word callback capitalized each word without
// first lowercasing its tail, so a word carrying uppercase inner characters
// (`MAX`, `HTTP`) kept them and `MAX_COUNT` emitted `MAXCOUNT`. That diverged
// from the runtime `_notationPascal` helper (`__notationCapitalize` = upper
// first character, lowercase the rest) and from the declared `PascalCase<T>`
// type, leaving `.MaxCount` undefined on the compile-time result. The sibling
// `camel` callback already lowercased the tail, so pascal was the sole outlier.
// The single-word `plain` path (`userID` -> `UserID`, `ID` -> `ID`, tail kept)
// must stay untouched, because single words are dispatched to `plain` rather
// than the multi-word callback.
//
//  1. Pascalize multi-word keys whose non-leading words carry uppercase or
//     mixed-case characters, plus digits and a leading underscore, and match
//     the `PascalCase<T>` / `_notationPascal` oracle.
//  2. Confirm single-word keys still route through `plain` unchanged.
//  3. Confirm camel, snake, and kebab of the same keys are unaffected.
func TestNotationGeneralProgrammerPascalMultiword(t *testing.T) {
  pascal := []struct{ input, expected string }{
    // Multi-word: every word becomes upper-first + lower-rest, byte-equal to
    // `_notationPascal` and assignable to `PascalCase<T>`.
    {"MAX_COUNT", "MaxCount"},
    {"HTTP_PORT", "HttpPort"},
    {"USER_ID", "UserId"},
    {"user_name", "UserName"},
    {"fooBar_baz", "FoobarBaz"},
    {"HTTP2_PORT", "Http2Port"},
    {"MAX_COUNT_2", "MaxCount2"},
    {"_MAX_COUNT", "_MaxCount"},
    {"a_b_c", "ABC"},
    // Single word: routed through `plain`, tail preserved — unchanged by the fix.
    {"userID", "UserID"},
    {"ID", "ID"},
    {"MAX", "MAX"},
    {"html5Parser", "Html5Parser"},
    {"FirstName", "FirstName"},
    {"_internal", "_Internal"},
    {"XMLParser", "XMLParser"},
  }
  for _, c := range pascal {
    if actual := NotationGeneralProgrammer_Pascal.Func(c.input); actual != c.expected {
      t.Errorf("pascal(%q) == %q, expected %q", c.input, actual, c.expected)
    }
  }

  // The fix touches pascal only; camel/snake/kebab of the same multi-word
  // witnesses already lowercased the tail and must stay byte-for-byte the same.
  siblings := []struct {
    input, camel, snake, kebab string
  }{
    {"MAX_COUNT", "maxCount", "max_count", "max-count"},
    {"HTTP_PORT", "httpPort", "http_port", "http-port"},
    {"USER_ID", "userId", "user_id", "user-id"},
    {"_MAX_COUNT", "_maxCount", "_max_count", "_max-count"},
  }
  for _, c := range siblings {
    if actual := NotationGeneralProgrammer_Camel.Func(c.input); actual != c.camel {
      t.Errorf("camel(%q) == %q, expected %q", c.input, actual, c.camel)
    }
    if actual := NotationGeneralProgrammer_Snake.Func(c.input); actual != c.snake {
      t.Errorf("snake(%q) == %q, expected %q", c.input, actual, c.snake)
    }
    if actual := NotationGeneralProgrammer_Kebab.Func(c.input); actual != c.kebab {
      t.Errorf("kebab(%q) == %q, expected %q", c.input, actual, c.kebab)
    }
  }
}
