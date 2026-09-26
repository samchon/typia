package factories

import (
  "reflect"
  "testing"

  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataCommentTagFactoryReadsJavaScriptNumbers verifies numeric JSDoc
// comment tags read JavaScript numbers and splice their values.
//
// The tags used Go's float syntax, and each record spliced the raw tag text into
// the emitted validator (samchon/typia#2442). Go-only spellings therefore became
// broken JavaScript: `@minimum inf` emitted `inf <= $input`, a ReferenceError,
// while `@minimum 0x10`, which JavaScript reads as 16, was rejected. The bigint
// splice appended `n` to the text, so an integer spelled `1e3` emitted `1e3n`,
// which is no BigInt literal. A non-finite value has no JSON spelling for the
// schema keyword and is reported (samchon/typia#2452). The expectations are the
// values `Number(text)` yields in JavaScript.
//
//  1. Read `0x10`, `1e3`, `+5`, and `.5` as their JavaScript values, and splice
//     the value into both the number and the bigint records, with integer
//     spellings keeping their exact digits.
//  2. Report Go-only spellings as invalid numbers and infinities as non-finite.
//  3. Keep ordinary spellings byte-identical, and every tag name in its source
//     spelling.
func TestMetadataCommentTagFactoryReadsJavaScriptNumbers(t *testing.T) {
  parse := func(name string, value string) (metadataCommentTagFactory_TagRecord, []string) {
    messages := []string{}
    record := metadataCommentTagFactory_parse(struct {
      Report func(msg string) any
      Tag    schemametadata.IJsDocTagInfo
    }{
      Report: func(msg string) any {
        messages = append(messages, msg)
        return nil
      },
      Tag: schemametadata.IJsDocTagInfo{
        Name: name,
        Text: []schemametadata.IJsDocTagInfo_IText{{Text: value, Kind: "text"}},
      },
    })
    return record, messages
  }
  single := func(record metadataCommentTagFactory_TagRecord, target string) schemametadata.IMetadataTypeTag {
    t.Helper()
    tags := record[target]
    if len(tags) != 1 {
      t.Fatalf("expected one %s record, got %#v", target, record)
    }
    return tags[0]
  }

  //----
  // 1. JavaScript spellings, spliced as values
  //----
  for _, item := range []struct {
    name     string
    value    string
    target   string
    number   float64
    validate string
  }{
    {"minimum", "0x10", "number", 16, "16 <= $input"},
    {"minimum", "0x10", "bigint", 16, "16 <= $input"},
    {"maximum", "+5", "number", 5, "$input <= 5"},
    {"exclusiveMinimum", ".5", "number", 0.5, "0.5 < $input"},
    {"multipleOf", "1e3", "bigint", 1000, "$input % 1000n === 0n"},
    {"multipleOf", "1.0", "bigint", 1, "$input % 1n === 0n"},
    {"multipleOf", "1e3", "number", 1000, "$importInternal(\"_isMultipleOf\")($input, 1000)"},
    {"minItems", "0b11", "array", 3, "3 <= $input.length"},
    {"minLength", "0o7", "string", 7, "$importInternal(\"_stringLengthGte\")($input, 7)"},
    {"multipleOf", "+5", "bigint", 5, "$input % 5n === 0n"},
    {"multipleOf", "007", "bigint", 7, "$input % 7n === 0n"},
    // Beyond 2^53 a bigint keeps an integer a number literal spells exactly;
    // one it cannot spell has no bigint record (samchon/typia#2457).
    {"multipleOf", "18014398509481984", "bigint", 18014398509481984, "$input % 18014398509481984n === 0n"},
    {"maximum", "0.0000001", "number", 1e-7, "$input <= 1e-7"},
  } {
    record, messages := parse(item.name, item.value)
    if len(messages) != 0 {
      t.Fatalf("@%s %s must be accepted, reports=%#v", item.name, item.value, messages)
    }
    tag := single(record, item.target)
    if tag.Validate != item.validate {
      t.Fatalf("@%s %s on %s should validate %q, got %q", item.name, item.value, item.target, item.validate, tag.Validate)
    }
    var value float64
    switch v := tag.Value.(type) {
    case float64:
      value = v
    case int64:
      value = float64(v)
    default:
      t.Fatalf("@%s %s on %s carried a %T value", item.name, item.value, item.target, tag.Value)
    }
    if value != item.number {
      t.Fatalf("@%s %s on %s should carry %v, got %v", item.name, item.value, item.target, item.number, value)
    }
  }

  //----
  // 2. Go-only spellings and infinities
  //----
  for _, item := range []struct {
    name    string
    value   string
    message string
  }{
    {"minimum", "inf", "invalid number"},
    {"minimum", "NaN", "invalid number"},
    {"minimum", "0x1p4", "invalid number"},
    {"maximum", "1_000", "invalid number"},
    {"multipleOf", "-0x10", "invalid number"},
    {"minimum", "Infinity", "non-finite number"},
    {"exclusiveMaximum", "-Infinity", "non-finite number"},
    {"maximum", "1e400", "non-finite number"},
  } {
    _, messages := parse(item.name, item.value)
    found := false
    for _, message := range messages {
      if message == item.message {
        found = true
      }
    }
    if found == false {
      t.Fatalf("@%s %s should report %q, got %#v", item.name, item.value, item.message, messages)
    }
  }

  //----
  // 3. ordinary spellings are unchanged
  //----
  record, messages := parse("minimum", "3")
  if len(messages) != 0 {
    t.Fatalf("@minimum 3 must be accepted, reports=%#v", messages)
  }
  expected := schemametadata.IMetadataTypeTag{
    Name:      "Minimum<3>",
    Target:    "number",
    Kind:      "minimum",
    Value:     float64(3),
    Validate:  "3 <= $input",
    Exclusive: metadataCommentTagFactory_exclusive("minimum"),
    Schema:    map[string]any{"minimum": float64(3)},
  }
  if actual := single(record, "number"); reflect.DeepEqual(actual, expected) == false {
    t.Fatalf("@minimum 3 changed:\nexpected %#v\nactual   %#v", expected, actual)
  }
  // Only the splice is respelled; the tag name keeps the source spelling, so
  // validation messages and reflected metadata do not change.
  record, _ = parse("minimum", "1.0")
  if tag := single(record, "number"); tag.Name != "Minimum<1.0>" || tag.Validate != "1 <= $input" {
    t.Fatalf("@minimum 1.0 should keep its name and splice 1, got %q / %q", tag.Name, tag.Validate)
  }
}
