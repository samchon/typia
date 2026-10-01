package factories

import "testing"

// TestFormatAliasTableTargetsTheCheatSheet verifies every declared `@format` alias names a real cheat sheet format.
//
// The original defect was structural, not arithmetic: the aliases were appended
// after a loop that copied the cheat sheet, so they were invisible to any sweep
// that enumerated the cheat sheet's entries and could drift from the format they
// emit without contradicting anything. The alias table now holds only cheat
// sheet keys, and this pins that shape — an alias pointing nowhere, or shadowing
// a real format with a different meaning, fails here rather than at a user's
// call site.
//
// 1. Require every alias to resolve to an existing cheat sheet entry.
// 2. Require no alias to shadow a cheat sheet key of its own name.
// 3. Require resolution to reject a format the cheat sheet does not own.
//
// @evidence contracts/testing.md#behavioral-verification The alias table is enumerated, every alias must target a cheat sheet format, must not shadow a cheat sheet name and must resolve to its canonical entry; canonical names resolve to themselves and an unsupported name does not resolve.
// @evidence contracts/testing.md#independent-expectations The cheat sheet is the authoritative set of formats and the table is judged against it; the test does not copy the table's entries as expectations.
// @evidence contracts/testing.md#distinguishing-cases Aliases, canonical names and an unsupported name are the three resolution cases; this is a consistency invariant of one data structure with its resolver and does not check emitted validators, which the sibling case owns.
// @evidence contracts/testing.md#execution-ownership The canonical native Go command (pnpm test:go:native) runs this same-package Test function in process. It reads the package tables and calls the resolver in memory with no filesystem fixture or process.
func TestFormatAliasTableTargetsTheCheatSheet(t *testing.T) {
  if len(formatCheatSheet_ALIASES) == 0 {
    t.Fatal("the alias table should stay the enumerable owner of every alternative spelling")
  }
  for alias, canonical := range formatCheatSheet_ALIASES {
    expected, ok := FormatCheatSheet[canonical]
    if ok == false {
      t.Fatalf("the alias %s targets %s, which the cheat sheet does not own", alias, canonical)
    }
    if _, ok := FormatCheatSheet[alias]; ok {
      t.Fatalf("the alias %s shadows a cheat sheet format of the same name", alias)
    }
    name, validate, ok := formatCheatSheet_resolve(alias)
    if ok == false || name != canonical || validate != expected {
      t.Fatalf("the alias %s must resolve to the cheat sheet %s entry, resolved to %s", alias, canonical, name)
    }
  }
  for name, validate := range FormatCheatSheet {
    resolvedName, resolvedValidate, ok := formatCheatSheet_resolve(name)
    if ok == false || resolvedName != name || resolvedValidate != validate {
      t.Fatalf("the canonical format %s must resolve to itself", name)
    }
  }
  if _, _, ok := formatCheatSheet_resolve("not-a-format"); ok {
    t.Fatal("an unsupported format must not resolve")
  }
}
