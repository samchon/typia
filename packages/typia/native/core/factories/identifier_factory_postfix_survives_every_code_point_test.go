package factories

import (
  "encoding/json"
  "fmt"
  "strings"
  "testing"
  "unicode/utf8"
)

// TestIdentifierFactoryPostfixSurvivesEveryCodePoint verifies total escaping.
//
// The emitted accessor is spliced into the emit as source text, and nothing
// downstream parses the file, so a key the escaper mishandles ships as a broken
// artifact behind a successful build. The table-driven case list pins the
// characters that actually regressed; this one closes the class by sweeping the
// whole input space, because the escape decision is per rune and a sampled
// matrix cannot prove a per-rune rule. encoding/json decodes the result, which
// is an implementation typia does not own and therefore a real oracle: JSON
// string syntax is a subset of JavaScript string syntax, so a literal it accepts
// also parses in the emitted file.
//
//  1. Sweep every scalar value and assert the key round-trips exactly.
//  2. Sweep every surrogate code unit and assert the WTF-8 form survives as an
//     escape rather than corrupting the literal.
//  3. Sweep every single byte, including the ones that are not UTF-8, and assert
//     the emitted literal still decodes.
func TestIdentifierFactoryPostfixSurvivesEveryCodePoint(t *testing.T) {
  for code := rune(0); code <= utf8.MaxRune; code++ {
    if code >= 0xd800 && code <= 0xdfff {
      continue // Not a scalar value; covered by the surrogate sweep below.
    }
    key := "a" + string(code) + "b"
    if decoded := identifierFactoryPostfixDecode(t, key); decoded != key {
      t.Fatalf("U+%04X: Postfix round-tripped to %q, want %q", code, decoded, key)
    }
  }

  for unit := rune(0xd800); unit <= 0xdfff; unit++ {
    key := "a" + string([]byte{
      0xe0 | byte(unit>>12),
      0x80 | byte((unit>>6)&0x3f),
      0x80 | byte(unit&0x3f),
    }) + "b"
    output := IdentifierFactory.Postfix(key)
    // The inner level writes `\ud800` and the outer level escapes that
    // backslash, so the emitted source carries `\\ud800`.
    if want := fmt.Sprintf(`\\u%04x`, unit); !strings.Contains(output, want) {
      t.Fatalf("U+%04X: lone surrogate was not escaped as %s: %s", unit, want, output)
    }
    // The decoder replaces an unpaired surrogate, so assert the literal stays
    // well formed rather than demanding the original bytes back.
    identifierFactoryPostfixDecode(t, key)
  }

  for value := 0; value <= 0xff; value++ {
    key := "a" + string([]byte{byte(value)}) + "b"
    decoded := identifierFactoryPostfixDecode(t, key)
    if utf8.ValidString(key) && decoded != key {
      t.Fatalf("byte 0x%02X: Postfix round-tripped to %q, want %q", value, decoded, key)
    }
  }
}

// identifierFactoryPostfixDecode reads the emitted source the way the runtime
// does and fails the test if any layer rejects it: JavaScript parses the outer
// literal, then _createStandardSchema hands the bracketed key to JSON.parse.
func identifierFactoryPostfixDecode(t *testing.T, key string) string {
  t.Helper()
  output := IdentifierFactory.Postfix(key)
  var path string
  if err := json.Unmarshal([]byte(output), &path); err != nil {
    t.Fatalf("Postfix(%q) is not a string literal: %s (%v)", key, output, err)
  }
  if strings.HasPrefix(path, ".") {
    return path[1:]
  }
  if !strings.HasPrefix(path, "[") || !strings.HasSuffix(path, "]") {
    t.Fatalf("Postfix(%q) is not an accessor: %q", key, path)
  }
  var decoded string
  if err := json.Unmarshal([]byte(path[1:len(path)-1]), &decoded); err != nil {
    t.Fatalf("Postfix(%q) bracketed key is not JSON: %q (%v)", key, path, err)
  }
  return decoded
}
