package metadata

import (
  "fmt"
  "testing"
)

// TestMetadataComponentsFromKeepsJsonOrder verifies the order of the components
// rebuilt from their JSON form.
//
// MetadataComponents_from listed its objects and tuples by ranging over the
// dictionary maps it had just filled, so the order of the rebuilt lists, and of
// the JSON written back from them, changed from one run to the next.
//
//  1. Rebuild components holding many objects and tuples whose names are not in
//     sorted order, repeatedly.
//  2. Assert every rebuilt list is exactly the input order, and the JSON written
//     back repeats it.
//
// @evidence contracts/testing.md#behavioral-verification MetadataComponents_from and ToJSON are called on 24 objects and 24 tuples and the produced name lists are compared with the input list in every one of 20 repeated runs; map-order iteration fails with a probability that is practically one.
// @evidence contracts/testing.md#independent-expectations The expected order is the order of the names written into the input in the test, a contract the rebuilt list must follow, not a value read from the implementation.
// @evidence contracts/testing.md#distinguishing-cases The names are deliberately not sorted so neither alphabetical nor insertion-sorted output passes by accident, and objects and tuples are checked as separate lists.
// @evidence contracts/testing.md#execution-ownership The canonical native Go command (pnpm test:go:native) runs this same-package Test function in process on plain JSON-shaped structs, with no checker, filesystem fixture or process.
func TestMetadataComponentsFromKeepsJsonOrder(t *testing.T) {
  names := []string{}
  for i := 0; i < 24; i++ {
    names = append(names, fmt.Sprintf("N%02d", (i*7)%24))
  }
  input := IMetadataComponents{}
  for _, name := range names {
    input.Objects = append(input.Objects, IMetadataSchema_IObjectType{Name: name})
    input.Tuples = append(input.Tuples, IMetadataSchema_ITupleType{Name: name})
  }
  for run := 0; run < 20; run++ {
    components := MetadataComponents_from(input)
    output := components.ToJSON()
    if len(components.Objects) != len(names) || len(components.Tuples) != len(names) ||
      len(output.Objects) != len(names) || len(output.Tuples) != len(names) {
      t.Fatalf("component counts changed: %d objects, %d tuples", len(components.Objects), len(components.Tuples))
    }
    for i, name := range names {
      if components.Objects[i].Name != name || components.Tuples[i].Name != name ||
        output.Objects[i].Name != name || output.Tuples[i].Name != name {
        t.Fatalf("run %d position %d: want %s, got object %s, tuple %s, json object %s, json tuple %s",
          run, i, name, components.Objects[i].Name, components.Tuples[i].Name, output.Objects[i].Name, output.Tuples[i].Name)
      }
    }
  }
}
