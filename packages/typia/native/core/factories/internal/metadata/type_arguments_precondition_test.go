package metadata

import (
  "os"
  "path/filepath"
  "testing"

  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  "github.com/samchon/ttsc/packages/ttsc/driver"
)

// TestMetadataTypeArgumentsPrecondition verifies reference-only extraction.
//
// The checker accepts GetTypeArguments only for object-reference types. The
// helper should identify that capability explicitly, return no arguments for a
// primitive, and preserve generic arguments for a real reference.
//
//  1. Load primitive and generic reference declarations through the checker.
//  2. Verify the primitive follows the unsupported-input fallback.
//  3. Verify the reference returns its sole string argument.
func TestMetadataTypeArgumentsPrecondition(t *testing.T) {
  dir := t.TempDir()
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(`{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "bundler",
    "ignoreDeprecations": "6.0",
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}`), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.MkdirAll(filepath.Join(dir, "src"), 0o755); err != nil {
    t.Fatalf("mkdir src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "src", "main.ts"), []byte(`
interface Box<T> { value: T; }
let primitive!: number;
let reference!: Box<string>;
`), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  program, diagnostics, err := driver.LoadProgram(dir, "tsconfig.json", driver.LoadProgramOptions{})
  if err != nil {
    t.Fatalf("load program: %v", err)
  }
  if len(diagnostics) != 0 {
    t.Fatalf("fixture diagnostics: %+v", diagnostics)
  }
  defer program.Close()

  source := program.SourceFile(filepath.Join(dir, "src", "main.ts"))
  if source == nil || source.Statements == nil || len(source.Statements.Nodes) != 3 {
    t.Fatal("fixture declarations were not loaded")
  }
  variableType := func(index int) *shimchecker.Type {
    declaration := source.Statements.Nodes[index].AsVariableStatement().DeclarationList.AsVariableDeclarationList().Declarations.Nodes[0]
    return program.Checker.GetTypeAtLocation(declaration)
  }
  if args := metadata_get_type_arguments(program.Checker, variableType(1)); len(args) != 0 {
    t.Fatalf("primitive type returned %d type arguments", len(args))
  }
  args := metadata_get_type_arguments(program.Checker, variableType(2))
  if len(args) != 1 || program.Checker.TypeToString(args[0]) != "string" {
    t.Fatalf("generic reference arguments mismatch: %#v", args)
  }
}
