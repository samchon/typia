package factories

import (
  "testing"

  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestFormatAliasResolvesToCheatSheet verifies every `@format` alias generates the cheat sheet validator it emits.
//
// An alias that carries its own validator string is not an alias; it is a
// second implementation sharing a name, free to drift from the format it
// claims. `@format datetime` did exactly that: it emitted `format: "date-time"`
// while validating with `!isNaN(new Date($input).getTime())`, so it accepted
// February 30th and rejected the RFC 3339 leap second the cheat sheet handles.
// This pins the alias to the cheat sheet as the single owner of the validator.
//
// 1. Parse each alias spelling of the `date-time` format as a JSDoc comment tag.
// 2. Require the emitted format name, schema, and tag name to be the canonical one.
// 3. Require the generated validator to be the cheat sheet entry verbatim.
func TestFormatAliasResolvesToCheatSheet(t *testing.T) {
  canonical := "date-time"
  expected, ok := FormatCheatSheet[canonical]
  if ok == false {
    t.Fatalf("the cheat sheet must own the %s format", canonical)
  }
  for _, alias := range []string{"datetime", "dateTime", "date-time"} {
    record := metadataCommentTagFactory_parse(struct {
      Report func(msg string) any
      Tag    schemametadata.IJsDocTagInfo
    }{
      Report: func(msg string) any { return nil },
      Tag: schemametadata.IJsDocTagInfo{
        Name: "format",
        Text: []schemametadata.IJsDocTagInfo_IText{{Text: alias}},
      },
    })
    tags := record["string"]
    if len(tags) != 1 {
      t.Fatalf("@format %s should generate exactly one string tag, generated %d", alias, len(tags))
    }
    tag := tags[0]
    if tag.Value != canonical {
      t.Fatalf("@format %s should carry the canonical %s value, carried %v", alias, canonical, tag.Value)
    }
    if tag.Name != "Format<\""+canonical+"\">" {
      t.Fatalf("@format %s should name the canonical format tag, named %s", alias, tag.Name)
    }
    schema, ok := tag.Schema.(map[string]any)
    if ok == false || schema["format"] != canonical {
      t.Fatalf("@format %s should emit format %s, emitted %v", alias, canonical, tag.Schema)
    }
    if tag.Validate != expected {
      t.Fatalf("@format %s must validate as the cheat sheet %s entry does, validated with %s", alias, canonical, tag.Validate)
    }
  }
}
