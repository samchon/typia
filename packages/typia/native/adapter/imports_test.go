package adapter

import (
  "os"
  "path/filepath"
  "testing"

  "github.com/samchon/ttsc/packages/ttsc/driver"
)

// writeAdapterProjectFile materializes one fixture file under root, creating
// parent directories as needed. These tests build real tsconfig projects and
// run the genuine program loader instead of mocking compiler internals, so the
// per-file emit-format detection is exercised exactly as it is in production.
func writeAdapterProjectFile(t *testing.T, root, name, contents string) {
  t.Helper()
  file := filepath.Join(root, filepath.FromSlash(name))
  if err := os.MkdirAll(filepath.Dir(file), 0o755); err != nil {
    t.Fatal(err)
  }
  if err := os.WriteFile(file, []byte(contents), 0o644); err != nil {
    t.Fatal(err)
  }
}

func loadAdapterIndex(t *testing.T, packageJSON string) (*driver.Program, any) {
  t.Helper()
  root := t.TempDir()
  writeAdapterProjectFile(t, root, "package.json", packageJSON)
  writeAdapterProjectFile(t, root, "tsconfig.json", `{
  "compilerOptions": {
    "module": "nodenext",
    "moduleResolution": "nodenext",
    "target": "es2020",
    "outDir": "bin",
    "strict": true,
    "allowImportingTsExtensions": true
  },
  "files": ["index.ts", "foo.ts"]
}
`)
  writeAdapterProjectFile(t, root, "foo.ts", "export const Foo = 1;\n")
  writeAdapterProjectFile(t, root, "index.ts", `import { Foo } from "./foo.ts";
export const value = Foo;
`)
  prog, diags, err := driver.LoadProgram(root, "tsconfig.json", driver.LoadProgramOptions{ForceEmit: true})
  if err != nil {
    t.Fatal(err)
  }
  if len(diags) != 0 {
    t.Fatalf("unexpected config diagnostics: %#v", diags)
  }
  source := prog.SourceFile(filepath.Join(root, "index.ts"))
  if source == nil {
    prog.Close()
    t.Fatal("SourceFile did not find index.ts")
  }
  return prog, source
}

// TestIdentifierSubstitutionsForEmitAliasesPerFileCommonJS pins that import
// aliasing follows each file's emitted module format, not the project-wide
// `module` name. Under `module: nodenext` a package with no (or "commonjs")
// type emits every `.ts` file as CommonJS, so an imported value referenced by a
// generated transform node must be aliased to its require() form
// (`foo_1.Foo`). The old check keyed off GetEmitModuleKind().String(), which is
// "NodeNext" here, skipped aliasing, and left a bare `Foo`.
func TestIdentifierSubstitutionsForEmitAliasesPerFileCommonJS(t *testing.T) {
  prog, source := loadAdapterIndex(t, `{ "name": "fixture", "version": "1.0.0" }`+"\n")
  defer prog.Close()

  subs := identifierSubstitutionsForEmit(prog, source)
  if subs == nil {
    t.Fatalf("expected per-file CommonJS substitutions under module:nodenext, got nil")
  }
  if got := subs["Foo"]; got != "foo_1.Foo" {
    t.Fatalf("expected Foo -> foo_1.Foo, got %q (full map %#v)", got, subs)
  }
}

// TestIdentifierSubstitutionsForEmitSkipsPerFileESM is the other half: the same
// nodenext project whose package declares `"type": "module"` emits every `.ts`
// file as an ES module, where imported bindings keep their source names. No
// require()-form aliasing must be applied.
func TestIdentifierSubstitutionsForEmitSkipsPerFileESM(t *testing.T) {
  prog, source := loadAdapterIndex(t, `{ "name": "fixture", "version": "1.0.0", "type": "module" }`+"\n")
  defer prog.Close()

  if subs := identifierSubstitutionsForEmit(prog, source); subs != nil {
    t.Fatalf("expected no substitutions for an ESM-emitted file, got %#v", subs)
  }
}
