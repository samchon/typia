package programmers

import (
  "testing"

  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativeiterate "github.com/samchon/typia/packages/typia/native/core/programmers/iterate"
)

// TestRandomProgrammerComposeAtomicThreadsLength locks the length forwarding
// for constrained string leaves.
//
// A string leaf that combines a format or pattern with minLength/maxLength used
// to lose the length bounds because only the plain-string fall-through carried
// the full schema, so the generated value failed its own validator (#2189). The
// format and pattern branches now forward a length object, and the format-only
// and pattern-only branches must stay byte-identical (no extra argument).
//
// 1. A format or pattern without a length tag emits no length argument.
// 2. A format or pattern with a length tag forwards exactly one length object.
// 3. The length-argument helper is nil without a length tag.
func TestRandomProgrammerComposeAtomicThreadsLength(t *testing.T) {
  emit := shimprinter.NewEmitContext()

  formatPlain := randomProgrammer_compose_atomic("string", nativeiterate.JsonSchema{"type": "string", "format": "email"}, emit)
  if len(formatPlain.Arguments) != 0 {
    t.Fatalf("email format without length must emit no argument, got %d", len(formatPlain.Arguments))
  }
  patternPlain := randomProgrammer_compose_atomic("string", nativeiterate.JsonSchema{"type": "string", "pattern": "^[0-9]+$"}, emit)
  if len(patternPlain.Arguments) != 1 {
    t.Fatalf("pattern without length must emit only the RegExp, got %d", len(patternPlain.Arguments))
  }

  formatLength := randomProgrammer_compose_atomic("string", nativeiterate.JsonSchema{"type": "string", "format": "email", "minLength": 40}, emit)
  if len(formatLength.Arguments) != 1 {
    t.Fatalf("email format with length must forward the length object, got %d", len(formatLength.Arguments))
  }
  datetimeLength := randomProgrammer_compose_atomic("string", nativeiterate.JsonSchema{"type": "string", "format": "date-time", "maxLength": 10}, emit)
  if datetimeLength.Internal != "randomFormatDatetime" || len(datetimeLength.Arguments) != 1 {
    t.Fatalf("date-time format with length must forward the length object, got %d", len(datetimeLength.Arguments))
  }
  patternLength := randomProgrammer_compose_atomic("string", nativeiterate.JsonSchema{"type": "string", "pattern": "^[0-9]+$", "minLength": 10, "maxLength": 20}, emit)
  if len(patternLength.Arguments) != 2 {
    t.Fatalf("pattern with length must emit RegExp and the length object, got %d", len(patternLength.Arguments))
  }

  if randomProgrammer_length_argument(nativeiterate.JsonSchema{"type": "string"}, emit) != nil {
    t.Fatal("length argument must be nil without minLength/maxLength")
  }
  if got := randomProgrammer_length_argument(nativeiterate.JsonSchema{"type": "string", "maxLength": 3}, emit); got == nil || len(got) != 1 {
    t.Fatal("length argument must forward a single object when a length tag is present")
  }
}
