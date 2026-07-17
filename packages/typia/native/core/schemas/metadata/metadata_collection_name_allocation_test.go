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
// The per-base counter that survives is an optimization only. Uniqueness must
// rest on the taken set, so a stale or wrong counter has to cost a scan rather
// than a collision.
//
//  1. Allocate a free base name, then its duplicates in order.
//  2. Allocate against a taken set that already owns every id a base name would
//     mint, including the ids its minted ids would mint.
//  3. Prove a real type's name is never overwritten by an invented one, in
//     either discovery order.
//  4. Prove a cross-base-name collision, which no counter can see, is still
//     kept apart by the set.
//  5. Prove the counter is honored when it is right and overridden when it is
//     wrong.
func TestMetadataCollectionNameAllocation(t *testing.T) {
  grammar := regexp.MustCompile(`^[a-zA-Z0-9.\-_]+$`)
  allocate := func(taken map[string]bool, name string, from int) string {
    allocated, index := metadataCollection_allocateName(taken, name, from)
    if index < from {
      t.Fatalf("allocator moved the counter backwards: name=%q from=%d index=%d", name, from, index)
    }
    taken[allocated] = true
    return allocated
  }

  // 1. A FREE NAME KEEPS ITSELF; DUPLICATES COUNT UP
  taken := map[string]bool{}
  ordered := []string{}
  for i := 0; i != 3; i++ {
    ordered = append(ordered, allocate(taken, "Foo", i))
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
  // Every id these base names can mint is pre-taken by the loop itself, so the
  // allocator can only pass by consulting the whole taken set.
  for _, name := range []string{"Foo", "Qualified.Member", "Escaped-x0", "_"} {
    reserved := map[string]bool{}
    for i := 0; i != 8; i++ {
      allocated, _ := metadataCollection_allocateName(reserved, name, 0)
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
    counters := map[string]int{}
    allocations := []string{}
    for _, name := range order {
      allocated, index := metadataCollection_allocateName(reserved, name, counters[name])
      reserved[allocated] = true
      counters[name] = index + 1
      allocations = append(allocations, allocated)
    }
    if len(reserved) != len(order) {
      t.Fatalf("distinct types collapsed onto one id: order=%v allocations=%v", order, allocations)
    }
  }

  // 4. A COUNTER CANNOT SEE ACROSS BASE NAMES; THE TAKEN SET CAN
  //
  // This is the class the set exists for, and nothing else covers it. A second
  // `GenNs` mints `GenNs-o1` from its own counter, while `Gen<Ns.o1>` normalizes
  // to the base name `GenNs-o1` and mints that from a different counter. Neither
  // counter can see the other. Both orders must keep three types apart.
  for _, order := range [][]string{
    {"GenNs", "GenNs", "Gen<Ns.o1>"},
    {"Gen<Ns.o1>", "GenNs", "GenNs"},
  } {
    reserved := map[string]bool{}
    counters := map[string]int{}
    allocations := []string{}
    for _, declared := range order {
      name := MetadataCollection_replaceOpenApi(declared)
      allocated, index := metadataCollection_allocateName(reserved, name, counters[name])
      reserved[allocated] = true
      counters[name] = index + 1
      allocations = append(allocations, allocated)
    }
    if len(reserved) != len(order) {
      t.Fatalf("a cross-base-name collision dropped a type: order=%v allocations=%v", order, allocations)
    }
  }

  // 5. THE COUNTER IS AN OPTIMIZATION, NOT THE UNIQUENESS ARGUMENT
  //
  // A right counter settles where it starts, and that returned index is the
  // whole point: every anonymous type shares the name `__type`, so an allocator
  // that rescanned the run from zero each time would be quadratic in a
  // program's anonymous type count.
  run := map[string]bool{}
  for i := 0; i != 64; i++ {
    run[metadataCollection_composeName("__type", i)] = true
  }
  if _, index := metadataCollection_allocateName(run, "__type", 64); index != 64 {
    t.Fatalf("a correct counter was not honored: index=%d expected=64", index)
  }
  // A wrong counter costs a scan, never a collision.
  allocated, index := metadataCollection_allocateName(run, "__type", 0)
  if run[allocated] {
    t.Fatalf("a stale counter handed out a taken id: id=%q", allocated)
  }
  if index != 64 {
    t.Fatalf("a stale counter did not scan to the first free id: index=%d expected=64", index)
  }
}
