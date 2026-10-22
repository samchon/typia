//go:build typia_native_internal

package metadata

import (
  "os"
  "path/filepath"
  "testing"

  nativeast "github.com/microsoft/typescript-go/shim/ast"
  "github.com/samchon/ttsc/packages/ttsc/driver"
)

// jsDocTestSource loads authored comments with the real compiler binder so
// metadata tests consume compiler-owned symbols on either TypeScript target.
// The caller selects declarations from the returned file; one Program can hold
// every comment spelling in a table, and test cleanup closes that Program.
func jsDocTestSource(t *testing.T, text string) (*driver.Program, *nativeast.SourceFile) {
  t.Helper()
  root := t.TempDir()
  fileName := filepath.Join(root, "comments.ts")
  for name, content := range map[string]string{
    "comments.ts": text,
    "tsconfig.json": `{"compilerOptions":{"target":"es2022","module":"nodenext","moduleResolution":"nodenext","strict":true,"skipLibCheck":true,"types":[]},"files":["comments.ts"]}`,
  } {
    if err := os.WriteFile(filepath.Join(root, name), []byte(content), 0o644); err != nil { t.Fatal(err) }
  }
  program, diagnostics, err := driver.LoadProgram(root, "tsconfig.json", driver.LoadProgramOptions{})
  if err != nil || driver.CountErrors(diagnostics) != 0 { t.Fatalf("load JSDoc fixture: %v; %+v", err, diagnostics) }
  t.Cleanup(func() { if err := program.Close(); err != nil { t.Error(err) } })
  source := program.SourceFile(fileName)
  if source == nil { t.Fatal("JSDoc source was not loaded") }
  return program, source
}
