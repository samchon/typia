package metadata

import "testing"

// TestMetadataSchemaShallowCloneResetsNames verifies that a shallow clone
// recomputes its names after a flag changes.
//
// ShallowClone copied the cached names with the record, and its callers turn
// Optional off on the copy to render a strict-optional property, so the copy
// kept naming the schema with `undefined` after the flag was gone.
//
//  1. Read the name of an optional schema, so it is cached.
//  2. Clone it, turn Optional off and assert the clone's names drop `undefined`.
//  3. Assert the original keeps its optional name.
//
// @evidence contracts/testing.md#behavioral-verification ShallowClone is called after GetName and GetDisplayName filled the caches and the clone's names are read after Optional is changed; copying the caches fails the clone assertions.
// @evidence contracts/testing.md#independent-expectations The expected names, `(string | undefined)` and `string`, are the union notation written out in the test and not read from the implementation.
// @evidence contracts/testing.md#distinguishing-cases The clone and the original are asserted separately, so resetting a cache of the original or sharing one between them fails.
// @evidence contracts/testing.md#execution-ownership The canonical native Go command (pnpm test:go:native) runs this same-package Test function in process on constructed schemas, with no checker, filesystem fixture or process.
func TestMetadataSchemaShallowCloneResetsNames(t *testing.T) {
  schema := MetadataSchema_initialize()
  schema.Optional = true
  schema.Atomics = append(schema.Atomics, MetadataAtomic_create(MetadataAtomic{Type: "string"}))
  if schema.GetName() != "(string | undefined)" || schema.GetDisplayName() != "(string | undefined)" {
    t.Fatalf("unexpected optional name: %q", schema.GetName())
  }

  clone := schema.ShallowClone()
  clone.Optional = false
  if clone.GetName() != "string" || clone.GetDisplayName() != "string" {
    t.Fatalf("the clone kept a name computed with the old flag: %q %q", clone.GetName(), clone.GetDisplayName())
  }
  if schema.GetName() != "(string | undefined)" {
    t.Fatalf("the original lost its name: %q", schema.GetName())
  }
}
