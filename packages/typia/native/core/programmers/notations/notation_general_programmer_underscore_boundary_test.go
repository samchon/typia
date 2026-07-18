package notations

import "testing"

// TestNotationGeneralProgrammerUnderscoreBoundary pins the snake/kebab/camel/
// pascal compile-time emit against the `SnakeCase`/`KebabCase`/`CamelCase`/
// `PascalCase` type oracle on keys that mix an underscore with a case boundary.
//
// Issue #2190: when a key combined an internal or trailing underscore with a
// camelCase boundary, `snake`/`kebab` lowercased each underscore-delimited
// segment atomically (`fooBar_baz` -> `foobar_baz`) instead of walking the case
// boundary inside the segment, and `camel`/`pascal` collapsed a trailing
// underscore onto the underscore-free path (`fooBar_` -> `FooBar`). Both
// disagreed with the declared `*Case<T>` type, so reading the declared key was
// `undefined`. The expected values below are the type-oracle output, obtained by
// revealing `keyof *Case<{ key: 1 }>` through the compiler.
//
//  1. Convert the underscore+case-boundary witnesses under every notation.
//  2. Assert each equals the `*Case<T>` value byte for byte.
//  3. Re-cover underscore-free and all-caps-segment keys so the boundary walk
//     did not regress them (`userID`, `XMLParser`, `MAX_COUNT`, #2186's pascal).
func TestNotationGeneralProgrammerUnderscoreBoundary(t *testing.T) {
  type row struct {
    input  string
    snake  string
    kebab  string
    camel  string
    pascal string
  }
  rows := []row{
    // issue matrix
    {"fooBar_baz", "foo_bar_baz", "foo-bar-baz", "foobarBaz", "FoobarBaz"},
    {"openAI_key", "open_ai_key", "open-ai-key", "openaiKey", "OpenaiKey"},
    {"HTTP_fooBar", "http_foo_bar", "http-foo-bar", "httpFoobar", "HttpFoobar"},
    {"fooBar", "foo_bar", "foo-bar", "fooBar", "FooBar"},
    {"fooBar_", "foo_bar_", "foo-bar-", "foobar_", "Foobar"},
    {"_fooBar", "_foo_bar", "_foo-bar", "_fooBar", "_FooBar"},
    {"userID", "user_id", "user-id", "userID", "UserID"},
    {"a_b_c", "a_b_c", "a-b-c", "aBc", "ABC"},
    {"MAX_COUNT", "max_count", "max-count", "maxCount", "MaxCount"},
    // boundary edges
    {"_fooBar_", "_foo_bar_", "_foo-bar-", "_foobar_", "_Foobar"},
    {"fooBarBaz_", "foo_bar_baz_", "foo-bar-baz-", "foobarbaz_", "Foobarbaz"},
    {"foo__bar", "foo__bar", "foo--bar", "fooBar", "FooBar"},
    {"userID_", "user_id_", "user-id-", "userid_", "Userid"},
    {"HTTP_", "http_", "http-", "http_", "Http"},
    // regressions that must stay unchanged (no underscore / all-caps segment)
    {"XMLParser", "xmlparser", "xmlparser", "xMLParser", "XMLParser"},
    {"toHTML", "to_html", "to-html", "toHTML", "ToHTML"},
    {"html5Parser", "html5_parser", "html5-parser", "html5Parser", "Html5Parser"},
    {"iOS", "i_os", "i-os", "iOS", "IOS"},
    {"HTTP_PORT", "http_port", "http-port", "httpPort", "HttpPort"},
  }
  for _, c := range rows {
    if actual := NotationGeneralProgrammer_Snake.Func(c.input); actual != c.snake {
      t.Errorf("snake(%q) == %q, expected %q", c.input, actual, c.snake)
    }
    if actual := NotationGeneralProgrammer_Kebab.Func(c.input); actual != c.kebab {
      t.Errorf("kebab(%q) == %q, expected %q", c.input, actual, c.kebab)
    }
    if actual := NotationGeneralProgrammer_Camel.Func(c.input); actual != c.camel {
      t.Errorf("camel(%q) == %q, expected %q", c.input, actual, c.camel)
    }
    if actual := NotationGeneralProgrammer_Pascal.Func(c.input); actual != c.pascal {
      t.Errorf("pascal(%q) == %q, expected %q", c.input, actual, c.pascal)
    }
  }
}
