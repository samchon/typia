package typia_test

import (
  testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
  "testing"

  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataMapAndSetGetNameWithTags verifies container display names.
//
// Map and Set metadata names compose child metadata names and then apply tag
// formatting. These names are used by schema merge and codegen helper caches, so
// both child names and tags must be stable.
//
// 1. Build tagged Set metadata with a string value schema.
// 2. Build tagged Map metadata with string keys and number values.
// 3. Assert both names include composed child schemas and tag names.
//
// @evidence contracts/testing.md#behavioral-verification GetName on tagged Set and Map metadata returns exact composed strings.
// @evidence contracts/testing.md#independent-expectations Composition of child names and the tag intersection is authored as (Set<string> & Unique) and (Map<string, number> & Entries).
// @evidence contracts/testing.md#distinguishing-cases One Set and one Map; untagged containers are not covered.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It reads names from constructed metadata with no filesystem fixture, process or native command build.
func TestMetadataMapAndSetGetNameWithTags(t *testing.T) {
  set := metadata.MetadataSet_create(metadata.MetadataSet{
    Value: testutil.AtomicMetadata("string"),
    Tags:  [][]metadata.IMetadataTypeTag{{testutil.NamedTag("Unique")}},
  })
  if got := set.GetName(); got != "(Set<string> & Unique)" {
    t.Fatalf("unexpected set name: %q", got)
  }

  m := metadata.MetadataMap_create(metadata.MetadataMap{
    Key:   testutil.AtomicMetadata("string"),
    Value: testutil.AtomicMetadata("number"),
    Tags:  [][]metadata.IMetadataTypeTag{{testutil.NamedTag("Entries")}},
  })
  if got := m.GetName(); got != "(Map<string, number> & Entries)" {
    t.Fatalf("unexpected map name: %q", got)
  }
}
