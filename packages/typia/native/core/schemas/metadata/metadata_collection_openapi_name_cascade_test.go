package metadata

import (
  "strings"
  "testing"
)

// TestMetadataCollectionOpenApiNameCascade verifies the allocator never invents
// a namespace parent for an escaped component name.
//
// JsonDescriptor.cascade reads every dotted prefix of a component key as a
// parent namespace and inherits that parent's description. A disambiguating
// suffix joined with "." would therefore present an escaped name's own base as
// a fake parent, and an unrelated component owning that base would leak its
// description into the escaped type's schema.
//
//  1. Allocate a legal name and the escaped name that shares its base.
//  2. Collect every dotted prefix each allocation exposes.
//  3. Require no allocation to expose another allocation as its parent.
//
// @evidence contracts/testing.md#behavioral-verification The OpenAPI name allocator is called on escaped names and must never produce a name whose dotted prefix is another allocated component; collisions are rejected.
// @evidence contracts/testing.md#independent-expectations A dotted prefix would be read as a namespace parent, so the check compares allocated names for that structure instead of a snapshot.
// @evidence contracts/testing.md#distinguishing-cases A legal escape-looking base and its escaped counterpart distinguish a false suffix parent; empty, Unicode, generic and real-qualified controls exercise the other selected shapes. Existing legitimate namespace parents are not included.
// @evidence contracts/testing.md#execution-ownership The canonical native Go command (pnpm test:go:native) runs this same-package Test function in process. It calls the allocator in memory with no filesystem fixture, process or native command build.
func TestMetadataCollectionOpenApiNameCascade(t *testing.T) {
  inputs := []string{
    "A_x2F_B",
    "A/B",
    "Recursive",
    `Recursive<"">`,
    `Recursive<"A/B">`,
    "Qualified.Member",
    "Café",
    "$Plain",
    "",
  }
  allocated := map[string]string{}
  for _, input := range inputs {
    output := MetadataCollection_replaceOpenApi(input)
    if previous, ok := allocated[output]; ok {
      t.Fatalf("allocation collided: %q and %q both produced %q", previous, input, output)
    }
    allocated[output] = input
  }
  for output, input := range allocated {
    segments := strings.Split(output, ".")
    for i := 1; i < len(segments); i++ {
      parent := strings.Join(segments[:i], ".")
      if owner, ok := allocated[parent]; ok {
        t.Fatalf(
          "allocation %q (from %q) claims unrelated allocation %q (from %q) as a namespace parent",
          output,
          input,
          parent,
          owner,
        )
      }
    }
  }
}
