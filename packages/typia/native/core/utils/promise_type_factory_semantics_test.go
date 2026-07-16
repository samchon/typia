package utils

import (
  "os"
  "path/filepath"
  "testing"

  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  "github.com/samchon/ttsc/packages/ttsc/driver"
)

// TestPromiseTypeFactorySemantics verifies semantic promised-type resolution.
//
// Promise identity is structural in the checker rather than a symbol spelling.
// Derived classes, interfaces, and branded intersections must unwrap while an
// unrelated class named Promise and the weaker PromiseLike contract must remain
// synchronous.
//
//  1. Load eight return-shape declarations through the real checker.
//  2. Resolve the fulfilled type for every genuine Promise shape.
//  3. Keep PromiseLike, shadowed-name, and ordinary controls unchanged.
func TestPromiseTypeFactorySemantics(t *testing.T) {
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
class DerivedPromise<T> extends Promise<T> {}
interface InterfacePromise<T> extends Promise<T> {}
type BrandedPromise<T> = Promise<T> & { readonly __brand: unique symbol };
namespace Shadow { export class Promise<T> { public constructor(public value: T) {} } }
let builtin!: Promise<string>;
let derivedClass!: DerivedPromise<number>;
let derivedInterface!: InterfacePromise<boolean>;
let branded!: BrandedPromise<bigint>;
let shadowed!: Shadow.Promise<Date>;
let synchronous!: { value: RegExp };
let promiseLike!: PromiseLike<string>;
let structural!: Pick<Promise<URL>, "then" | "catch" | "finally">;
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
  if source == nil || source.Statements == nil || len(source.Statements.Nodes) != 12 {
    t.Fatal("fixture declarations were not loaded")
  }
  variableType := func(index int) *shimchecker.Type {
    declaration := source.Statements.Nodes[index].AsVariableStatement().DeclarationList.AsVariableDeclarationList().Declarations.Nodes[0]
    return program.Checker.GetTypeAtLocation(declaration)
  }
  tests := []struct {
    name      string
    index     int
    async     bool
    fulfilled string
  }{
    {"builtin", 4, true, "string"},
    {"derived-class", 5, true, "number"},
    {"derived-interface", 6, true, "boolean"},
    {"branded-intersection", 7, true, "bigint"},
    {"shadowed-name", 8, false, ""},
    {"synchronous", 9, false, ""},
    {"promise-like", 10, false, ""},
    {"structural", 11, true, "URL"},
  }
  for _, tc := range tests {
    t.Run(tc.name, func(t *testing.T) {
      input := variableType(tc.index)
      output := PromiseTypeFactory.Resolve(program.Checker, input)
      if output.Async != tc.async {
        t.Fatalf("async mismatch: got %v, want %v", output.Async, tc.async)
      }
      if tc.async {
        if got := program.Checker.TypeToString(output.Type); got != tc.fulfilled {
          t.Fatalf("fulfilled type mismatch: got %q, want %q", got, tc.fulfilled)
        }
      } else if output.Type != input {
        t.Fatal("non-Promise type was replaced")
      }
    })
  }
}
