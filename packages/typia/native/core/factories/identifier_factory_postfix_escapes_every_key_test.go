package factories

import (
  "encoding/json"
  "strings"
  "testing"
)

// TestIdentifierFactoryPostfixEscapesEveryKey verifies emitted accessor paths.
//
// Postfix returns JavaScript source that callers splice into the emit as
// `_path + <postfix>`, so it carries two nested escaping levels: the key becomes
// a JSON literal, and that literal sits inside the JavaScript literal returned.
// Escaping one level and not the other emitted a file that does not parse for a
// `"` key, and a path that JSON.parse rejects inside _createStandardSchema for a
// control-character key. The expected strings below come from the contract that
// typia's own runtime helper _accessExpressionAsString implements for dynamic
// keys, `variable(str) ? ".{str}" : "[{JSON.stringify(str)}]"`, not from what
// the emitter happens to produce.
//
//  1. Assert the exact source text Postfix returns for identifier keys, quoting
//     keys, escape-sensitive keys, control characters, and non-ASCII keys.
//  2. Decode every result as JSON twice and assert the original key survives.
//  3. Assert the identifier fast path stays a dotted accessor, so ordinary keys
//     and prototype-shadowing keys keep their existing output.
func TestIdentifierFactoryPostfixEscapesEveryKey(t *testing.T) {
  for _, item := range []struct {
    name     string
    key      string
    expected string
  }{
    // Identifier fast path: no escaping is possible, so output is unchanged.
    {"identifier", "field", `".field"`},
    {"underscore", "_private", `"._private"`},
    {"dollar", "$ref", `".$ref"`},
    // A prototype-shadowing key is still a plain property access, because the
    // emitted accessor reads the property and never the prototype.
    {"proto", "__proto__", `".__proto__"`},
    {"constructor", "constructor", `".constructor"`},
    {"toString", "toString", `".toString"`},
    // Ordinary quoted keys: byte-identical to the pre-fix output.
    {"hyphen", "a-b", `"[\"a-b\"]"`},
    {"space", "not valid", `"[\"not valid\"]"`},
    {"empty", "", `"[\"\"]"`},
    {"digit first", "0abc", `"[\"0abc\"]"`},
    {"dotted", "a.b", `"[\"a.b\"]"`},
    {"bracket", "a[0]", `"[\"a[0]\"]"`},
    {"reserved", "for", `"[\"for\"]"`},
    // Neither quote nor backslash, so no escape applies at either level.
    {"single quote", "a'b", `"[\"a'b\"]"`},
    {"backtick", "a`b", "\"[\\\"a`b\\\"]\""},
    {"template hole", "a${b}c", `"[\"a${b}c\"]"`},
    // The double quote is escaped once per level: `"` -> `\"` -> `\\\"`.
    {"double quote", `a"b`, `"[\"a\\\"b\"]"`},
    {"only double quote", `"`, `"[\"\\\"\"]"`},
    // The backslash likewise. Escaping it once left the emitted path saying
    // `["a\b"]`, which JSON.parse reads back as a backspace, not a backslash.
    {"backslash", `a\b`, `"[\"a\\\\b\"]"`},
    {"only backslash", `\`, `"[\"\\\\\"]"`},
    {"quote and backslash", `a"\b`, `"[\"a\\\"\\\\b\"]"`},
    // Control characters need a JSON escape; a raw one makes JSON.parse throw.
    {"newline", "a\nb", `"[\"a\\nb\"]"`},
    {"tab", "a\tb", `"[\"a\\tb\"]"`},
    {"carriage return", "a\rb", `"[\"a\\rb\"]"`},
    {"backspace", "a\bb", `"[\"a\\bb\"]"`},
    {"form feed", "a\fb", `"[\"a\\fb\"]"`},
    {"null", "a\x00b", `"[\"a\\u0000b\"]"`},
    {"unit separator", "a\x1fb", `"[\"a\\u001fb\"]"`},
    // strconv.Quote wrote `\a` and `\v` here. JavaScript has no `\a`, so it
    // decoded to a plain "a" and silently changed the key.
    {"bell", "a\x07b", `"[\"a\\u0007b\"]"`},
    {"vertical tab", "a\x0bb", `"[\"a\\u000bb\"]"`},
    // Line separators are only legal raw in a JavaScript string since ES2019.
    {"line separator", "a\u2028b", `"[\"a\\u2028b\"]"`},
    {"paragraph separator", "a\u2029b", `"[\"a\\u2029b\"]"`},
    // Printable non-ASCII stays raw, exactly as JSON.stringify leaves it.
    {"non ascii", "한글", `"[\"한글\"]"`},
    {"emoji", "a\U0001F600b", "\"[\\\"a\U0001F600b\\\"]\""},
    // strconv.Quote wrote `\U0001d173` for a non-printable astral rune, and
    // JavaScript has no `\U` escape at all; it read back as "U0001d173".
    {"astral format", "a\U0001D173b", "\"[\\\"a\U0001D173b\\\"]\""},
    // A lone surrogate arrives WTF-8 encoded and has no valid UTF-8 form, so an
    // escape is the only way to carry it.
    {"lone surrogate", "a\xed\xa0\x80b", `"[\"a\\ud800b\"]"`},
    // No escape denotes a byte that is not UTF-8 at all.
    {"invalid utf8", "a\xffb", `"[\"a\\ufffdb\"]"`},
  } {
    t.Run(item.name, func(t *testing.T) {
      output := IdentifierFactory.Postfix(item.key)
      if output != item.expected {
        t.Fatalf("Postfix(%q)\n got: %s\nwant: %s", item.key, output, item.expected)
      }
      identifierFactoryPostfixRoundTrip(t, item.key, output)
    })
  }
}

// identifierFactoryPostfixRoundTrip decodes the emitted source the way the
// runtime does: JavaScript reads the outer literal, then _createStandardSchema
// hands the bracketed key to JSON.parse. encoding/json stands in for both,
// which makes this an independent check that the escaping is real rather than a
// restatement of the emitter's own logic.
func identifierFactoryPostfixRoundTrip(t *testing.T, key string, output string) {
  t.Helper()
  var path string
  if err := json.Unmarshal([]byte(output), &path); err != nil {
    t.Fatalf("Postfix(%q) is not a JavaScript string literal: %s (%v)", key, output, err)
  }
  if strings.HasPrefix(path, ".") {
    if path[1:] != key {
      t.Fatalf("Postfix(%q) dotted accessor lost the key: %q", key, path)
    }
    return
  }
  if !strings.HasPrefix(path, "[") || !strings.HasSuffix(path, "]") {
    t.Fatalf("Postfix(%q) is neither a dotted nor a bracketed accessor: %q", key, path)
  }
  var decoded string
  if err := json.Unmarshal([]byte(path[1:len(path)-1]), &decoded); err != nil {
    t.Fatalf("Postfix(%q) bracketed key is not JSON: %q (%v)", key, path, err)
  }
  if want := identifierFactoryPostfixDecodable(key); decoded != want {
    t.Fatalf("Postfix(%q) round-tripped to %q, want %q", key, decoded, want)
  }
}

// identifierFactoryPostfixDecodable states what a JSON decoder can return for
// `key`. encoding/json replaces an unpaired surrogate and never yields invalid
// UTF-8, so those two inputs come back as the replacement character even though
// the emitted escape itself is exact.
func identifierFactoryPostfixDecodable(key string) string {
  var builder strings.Builder
  for i := 0; i < len(key); {
    // Detect a WTF-8 surrogate here rather than calling the factory's own
    // helper, so this expectation stays independent of the code under test.
    if len(key)-i >= 3 && key[i] == 0xed && key[i+1] >= 0xa0 && key[i+1] <= 0xbf {
      builder.WriteRune('�')
      i += 3
      continue
    }
    builder.WriteByte(key[i])
    i++
  }
  return strings.ToValidUTF8(builder.String(), "�")
}
