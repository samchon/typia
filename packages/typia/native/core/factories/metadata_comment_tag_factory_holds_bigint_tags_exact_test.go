package factories

import (
  "fmt"
  "testing"

  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataCommentTagFactoryHoldsBigintTagsExact verifies a numeric comment
// tag states a bigint bound only when it can state it exactly.
//
// The bigint arm of `@minimum`, `@maximum`, `@exclusiveMinimum`,
// `@exclusiveMaximum`, and `@multipleOf` read its value through a double, so
// `@minimum 9007199254740993` was enforced as 9007199254740992: the bound
// validators splice a number literal JavaScript rounds, and `random` drew from
// the rounded schema while the `@multipleOf` check stayed exact
// (samchon/typia#2457). Every consumer of the bigint record holds its value as
// a double, so the record now admits an integer only when a double represents
// it exactly, within the int64 range of samchon/typia#2352, and splices its
// exact digits into the bigint check. A number target keeps reading the text
// as `Number()` does.
//
//  1. Admit integers a double represents exactly, whatever their spelling, and
//     splice their exact digits into the bigint check.
//  2. Refuse every other finite value as a bigint bound: integers a double
//     cannot represent, integers beyond int64, and non-integers, including
//     ones `Number()` rounds to an integer.
//  3. Report a refused value on a bigint property, and on the bigint part of a
//     `number | bigint` one, while a number property and the number part
//     still take the tag, and report text that is no finite number once.
func TestMetadataCommentTagFactoryHoldsBigintTagsExact(t *testing.T) {
  //----
  // 1. exact integers
  //----
  for _, item := range []struct {
    text  string
    value int64
  }{
    {"9007199254740991", 9007199254740991},
    {"9007199254740992", 9007199254740992},
    {"18014398509481984", 18014398509481984},     // 2^54
    {"54043195528445952", 54043195528445952},     // 3 * 2^54, although `String()` spells it ...950
    {"1152921504606846976", 1152921504606846976}, // 2^60
    {"1.152921504606846976e18", 1152921504606846976},
    {"-9007199254740992", -9007199254740992},
    {"1e3", 1000},
    {"0x10", 16},
    {"-0", 0},
    {"10000000000000000", 10000000000000000},
  } {
    value, numeric, ok := metadataCommentTagFactory_bigint(item.text)
    if ok == false || numeric == false || value != item.value {
      t.Fatalf("%s must be the bigint %d, got %d (numeric=%v ok=%v)", item.text, item.value, value, numeric, ok)
    }
    if spliced := metadataCommentTagFactory_splice_integer(item.text); spliced != fmt.Sprint(item.value) {
      t.Fatalf("%s must splice into a bigint check as %d, got %s", item.text, item.value, spliced)
    }
  }

  //----
  // 2. finite values no bigint tag states, and text that is no number
  //----
  for _, text := range []string{
    "9007199254740993",     // rounds to ...992
    "9007199254740993.0",   // the same integer, spelled with a point
    "9.007199254740993e15", // and with an exponent
    "-9007199254740993",
    "0x20000000000001",     // 2^53 + 1 in hexadecimal
    "1152921504606847000",  // `String(2 ** 60)`, which is not 2^60
    "10000000000000000000", // beyond int64
    "1.5",
    "1e-3",
    "5.0000000000000001", // `Number()` reads 5
    "1e-400",             // `Number()` reads 0
    "1e-1000001",         // too large an exponent to hold exactly
  } {
    if _, numeric, ok := metadataCommentTagFactory_bigint(text); ok || numeric == false {
      t.Fatalf("%s must be a finite value no bigint tag states (numeric=%v ok=%v)", text, numeric, ok)
    }
  }
  for _, text := range []string{"Infinity", "abc", "1_000"} {
    if _, numeric, ok := metadataCommentTagFactory_bigint(text); ok || numeric {
      t.Fatalf("%s is no finite number (numeric=%v ok=%v)", text, numeric, ok)
    }
  }

  //----
  // 3. where the refusal is reported
  //----
  analyze := func(types []string, name string, text string) (*schemametadata.MetadataSchema, []string) {
    atomics := []*schemametadata.MetadataAtomic{}
    for _, typ := range types {
      atomics = append(atomics, schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: typ}))
    }
    meta := schemametadata.MetadataSchema_create(schemametadata.MetadataSchema{Atomics: atomics})
    errors := []MetadataFactory_IError{}
    MetadataCommentTagFactory.Analyze(struct {
      Errors   *[]MetadataFactory_IError
      Metadata *schemametadata.MetadataSchema
      Tags     []schemametadata.IJsDocTagInfo
      Explore  MetadataFactory_IExplore
    }{
      Errors:   &errors,
      Metadata: meta,
      Tags:     []schemametadata.IJsDocTagInfo{{Name: name, Text: []schemametadata.IJsDocTagInfo_IText{{Text: text}}}},
    })
    messages := []string{}
    for _, err := range errors {
      messages = append(messages, err.Messages...)
    }
    return meta, messages
  }
  refusal := "bigint value 9007199254740993 is not an int64 integer that a number represents exactly"
  for _, name := range []string{"minimum", "maximum", "exclusiveMinimum", "exclusiveMaximum", "multipleOf"} {
    if _, messages := analyze([]string{"bigint"}, name, "9007199254740993"); len(messages) != 1 || messages[0] != refusal {
      t.Fatalf("@%s on a bigint must report the refusal alone, got %#v", name, messages)
    }
    meta, messages := analyze([]string{"number"}, name, "9007199254740993")
    if len(messages) != 0 || len(meta.Atomics[0].Tags) != 1 {
      t.Fatalf("@%s on a number must apply, got %#v", name, messages)
    }
    meta, messages = analyze([]string{"number", "bigint"}, name, "9007199254740993")
    if len(messages) != 1 || messages[0] != refusal {
      t.Fatalf("@%s on number | bigint must report the bigint part, got %#v", name, messages)
    }
    if len(meta.Atomics[0].Tags) != 1 || len(meta.Atomics[1].Tags) != 0 {
      t.Fatalf("@%s on number | bigint must constrain the number part only", name)
    }
    if meta, messages := analyze([]string{"bigint"}, name, "9007199254740992"); len(messages) != 0 || len(meta.Atomics[0].Tags) != 1 {
      t.Fatalf("@%s 9007199254740992 on a bigint must apply, got %#v", name, messages)
    }
  }
  // A value `Number()` rounds to an integer still names no bigint bound: the
  // number part takes it as 5, and the bigint part is reported, not dropped.
  meta, messages := analyze([]string{"number", "bigint"}, "minimum", "5.0000000000000001")
  if len(messages) != 1 || messages[0] != "bigint value 5.0000000000000001 is not an int64 integer that a number represents exactly" {
    t.Fatalf("@minimum 5.0000000000000001 on number | bigint must report the bigint part, got %#v", messages)
  }
  if len(meta.Atomics[0].Tags) != 1 || meta.Atomics[0].Tags[0][0].Validate != "5 <= $input" || len(meta.Atomics[1].Tags) != 0 {
    t.Fatal("@minimum 5.0000000000000001 on number | bigint must constrain the number part only")
  }
  if _, messages := analyze([]string{"bigint"}, "minimum", "1.5"); len(messages) != 1 || messages[0] != "bigint value 1.5 is not an int64 integer that a number represents exactly" {
    t.Fatalf("@minimum 1.5 on a bigint must be refused, got %#v", messages)
  }
  if _, messages := analyze([]string{"number", "bigint"}, "multipleOf", "1e-1000001"); len(messages) != 1 || messages[0] != "bigint value 1e-1000001 is not an int64 integer that a number represents exactly" {
    t.Fatalf("@multipleOf 1e-1000001 on number | bigint must report the bigint part, got %#v", messages)
  }
  // Text that is no finite number is reported once, as such, on any target.
  for _, item := range []struct {
    text    string
    message string
  }{
    {"abc", "invalid number"},
    {"Infinity", "non-finite number"},
    {"1e400", "non-finite number"},
  } {
    for _, types := range [][]string{{"bigint"}, {"number", "bigint"}} {
      if _, messages := analyze(types, "minimum", item.text); len(messages) != 1 || messages[0] != item.message {
        t.Fatalf("@minimum %s on %v must report %q alone, got %#v", item.text, types, item.message, messages)
      }
    }
  }
}
