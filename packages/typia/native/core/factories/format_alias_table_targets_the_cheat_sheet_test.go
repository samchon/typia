package factories

import "testing"

// TestFormatAliasTableTargetsTheCheatSheet verifies supported format spellings resolve to canonical validators.
//
// Alternative date-time spellings must share the canonical validator rather
// than resolve to a second implementation. Authored requests exercise the
// resolver independently of how its alias table is represented.
//
// 1. Resolve both supported aliases and the canonical date-time spelling.
// 2. Compare canonical names and validator references, including password.
// 3. Require resolution to reject a format the cheat sheet does not own.
//
// @evidence contracts/testing.md#behavioral-verification The resolver is called with authored alternative spellings, their canonical date-time name, another canonical name and an unsupported name; canonical name and validator identity are compared. No assertion depends on the alias table's arrangement.
// @evidence contracts/testing.md#independent-expectations The supported dateTime and datetime spellings mean date-time independently of the table. The cheat sheet supplies the shared validator reference, so this detects wrong resolution but not a defect shared by the canonical validator itself.
// @evidence contracts/testing.md#distinguishing-cases Both supported aliases, the canonical date-time spelling, a non-alias canonical password and an unsupported name distinguish lookup branches; the sibling expansion test owns the emitted tag shape.
// @evidence contracts/testing.md#execution-ownership The canonical native Go command (pnpm test:go:native) runs this same-package Test function in process. It reads the package tables and calls the resolver in memory with no filesystem fixture or process.
func TestFormatAliasTableTargetsTheCheatSheet(t *testing.T) {
  for _, item := range []struct {
    input     string
    canonical string
  }{
    {"datetime", "date-time"}, {"dateTime", "date-time"}, {"date-time", "date-time"}, {"password", "password"},
  } {
    name, validate, ok := formatCheatSheet_resolve(item.input)
    if !ok || name != item.canonical || validate != FormatCheatSheet[item.canonical] {
      t.Fatalf("%s must resolve to the canonical %s validator, got %s (%t)", item.input, item.canonical, name, ok)
    }
  }
  if _, _, ok := formatCheatSheet_resolve("not-a-format"); ok {
    t.Fatal("an unsupported format must not resolve")
  }
}
