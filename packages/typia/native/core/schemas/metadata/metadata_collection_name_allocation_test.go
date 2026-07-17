package metadata

import (
  "regexp"
  "testing"
)

// TestMetadataCollectionNameAllocation verifies every minted component id is
// unique across the whole collection rather than within its base-name bucket.
//
// The allocator used to key its bookkeeping on the base name and mint
// `<Base>.o<N>` without ever comparing that id against the ids already handed
// out. A type whose real full name was exactly `Foo.o1` therefore collided with
// the id minted for a second `Foo`, one of the two schemas was dropped from the
// document outright, and the surviving `$ref` documented the wrong type.
//
//  1. Allocate a free base name, then its duplicates in order.
//  2. Allocate against a taken set that already owns the id the base name would
//     mint, including the id the minted id would itself mint.
//  3. Prove every allocation is unique, repeatable, and a legal OpenAPI key.
func TestMetadataCollectionNameAllocation(t *testing.T) {
  grammar := regexp.MustCompile(`^[a-zA-Z0-9.\-_]+$`)

  // 1. A FREE NAME KEEPS ITSELF; DUPLICATES COUNT UP
  taken := map[string]bool{}
  ordered := []string{}
  for i := 0; i != 3; i++ {
    allocated := metadataCollection_allocateName(taken, "Foo")
    taken[allocated] = true
    ordered = append(ordered, allocated)
  }
  if ordered[0] != "Foo" {
    t.Fatalf("a free base name lost its own name: actual=%q", ordered[0])
  }
  for i, allocated := range ordered {
    for j, other := range ordered {
      if i != j && allocated == other {
        t.Fatalf("duplicate allocation collided: index=%d other=%d id=%q", i, j, allocated)
      }
    }
    if grammar.MatchString(allocated) == false {
      t.Fatalf("illegal allocated component key: id=%q", allocated)
    }
  }

  // 2. A MINTED ID NEVER SQUATS A NAME ANOTHER TYPE ALREADY OWNS
  //
  // Every id the base name can mint is pre-taken, so the allocator can only
  // pass by consulting the whole taken set instead of one base-name bucket.
  for _, name := range []string{"Foo", "Qualified.Member", "Escaped-x0", "_"} {
    reserved := map[string]bool{}
    for i := 0; i != 8; i++ {
      allocated := metadataCollection_allocateName(reserved, name)
      if reserved[allocated] {
        t.Fatalf("allocator handed out a taken id: name=%q id=%q", name, allocated)
      }
      if grammar.MatchString(allocated) == false {
        t.Fatalf("illegal allocated component key: name=%q id=%q", name, allocated)
      }
      reserved[allocated] = true
    }
  }

  // 3. A REAL TYPE'S NAME IS NEVER OVERWRITTEN BY AN INVENTED ONE
  //
  // The real `namespace Foo { interface o1 }` member owns `Foo.o1`. Whichever
  // order the two arrive in, both must survive with distinct ids.
  for _, order := range [][]string{
    {"Foo", "Foo", "Foo.o1"},
    {"Foo.o1", "Foo", "Foo"},
  } {
    reserved := map[string]bool{}
    allocations := []string{}
    for _, name := range order {
      allocated := metadataCollection_allocateName(reserved, name)
      reserved[allocated] = true
      allocations = append(allocations, allocated)
    }
    if len(reserved) != len(order) {
      t.Fatalf("distinct types collapsed onto one id: order=%v allocations=%v", order, allocations)
    }
  }

  // 4. ALLOCATION DEPENDS ONLY ON THE TAKEN SET
  first := metadataCollection_allocateName(map[string]bool{"Foo": true}, "Foo")
  second := metadataCollection_allocateName(map[string]bool{"Foo": true}, "Foo")
  if first != second {
    t.Fatalf("allocation is not repeatable: first=%q second=%q", first, second)
  }
}
