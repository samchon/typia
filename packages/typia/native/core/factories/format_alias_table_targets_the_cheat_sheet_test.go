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
