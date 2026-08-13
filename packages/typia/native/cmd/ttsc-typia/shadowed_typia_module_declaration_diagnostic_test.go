package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestShadowedTypiaModuleDeclarationDiagnostic verifies a redeclared typia call
// is reported instead of silently skipped (#2328).
//
// The transformer attributes a call by the file its resolved signature is
// declared in, which is what stops another package from claiming typia's
// transform. A project-local `declare module "typia"` moves that declaration out
// of typia's own files, so the identity test misses and the call used to pass
// through untransformed with no diagnostic — `ttsc.transform()` returned
// `type: "success"` with an empty diagnostic list, and the failure surfaced only
// at run time as `no transform has been configured`. The identity test stays;
// the silence does not.
//
//  1. Build a project with typia installed and an ambient `declare module
//     "typia"` that redeclares `createAssert`, `json.createAssertParse`, and a
//     `json.createAssert` that names no typia operation at all.
//  2. Run the transform over the project.
//  3. Require one diagnostic for each of the two real operations, at its call
//     site, naming the operation as written and the shadowing file — and none
//     for the third, whose spelling puts a root operation in a namespace.
func TestShadowedTypiaModuleDeclarationDiagnostic(t *testing.T) {
  project := shadowedTypiaModuleProject(t)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
    })
  })
  if code != 3 {
    t.Fatalf("shadowed typia declaration should fail with code 3, got %d\nstdout=%s\nstderr=%s", code, out, errText)
  }

  var result transformProjectOutput
  if err := json.Unmarshal([]byte(out), &result); err != nil {
    t.Fatalf("decode transform output: %v\n%s", err, out)
  }
  // The root and namespaced spellings are looked up in different functor
  // tables, so both have to be reported for the gate to be correct, and the
  // code has to carry the namespace the user wrote.
  expected := map[string]bool{
    "typia.createAssert":           false,
    "typia.json.createAssertParse": false,
  }
  if len(result.Diagnostics) != len(expected) {
    t.Fatalf("expected %d transform diagnostics, got %+v", len(expected), result.Diagnostics)
  }
  for _, diag := range result.Diagnostics {
    seen, owned := expected[diag.Code]
    if owned == false {
      t.Fatalf("diagnostic code did not name a shadowed operation as written: %+v", diag)
    }
    if seen {
      t.Fatalf("diagnostic code reported twice: %+v", diag)
    }
    expected[diag.Code] = true
    if diag.File == nil || !strings.HasSuffix(filepath.ToSlash(*diag.File), "src/main.ts") {
      t.Fatalf("diagnostic was not reported at the call site: %+v", diag)
    }
    if diag.Line != shadowedTypiaCallLines[diag.Code] {
      t.Fatalf("diagnostic line mismatch for %s: %+v", diag.Code, diag)
    }
    if !strings.Contains(filepath.ToSlash(diag.MessageText), "src/typia.d.ts") {
      t.Fatalf("diagnostic did not name the shadowing declaration: %+v", diag)
    }
    if !strings.Contains(diag.MessageText, "no transform was applied") {
      t.Fatalf("diagnostic did not state the consequence: %+v", diag)
    }
  }
  for code, seen := range expected {
    if seen == false {
      t.Fatalf("no diagnostic reported %s", code)
    }
  }
}

// shadowedTypiaCallLines is the 1-based line of each shadowed call in
// shadowedTypiaCallSource, so a regression that reports the whole file or the
// wrong statement cannot pass on the file name alone.
var shadowedTypiaCallLines = map[string]int{
  "typia.createAssert":           7,
  "typia.json.createAssertParse": 8,
}

func shadowedTypiaModuleProject(t *testing.T) string {
  t.Helper()
  dir := t.TempDir()
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(transformDiagnosticTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  // typia is installed as well as shadowed, matching the reporter's project: an
  // ambient module declaration outranks node resolution, and the fixture is
  // only faithful if there is something for it to outrank.
  ttscTypiaTestWriteFactoryStub(t, dir)
  for name, body := range map[string]string{
    "typia.d.ts": shadowedTypiaAmbientDeclaration,
    "main.ts":    shadowedTypiaCallSource,
  } {
    if err := os.WriteFile(filepath.Join(src, name), []byte(body), 0o644); err != nil {
      t.Fatalf("write fixture %s: %v", name, err)
    }
  }
  return dir
}

const shadowedTypiaAmbientDeclaration = `declare module "typia" {
  type ErrorFactory = (props: { method: string }) => Error;
  export function createAssert<T>(
    errorFactory?: ErrorFactory,
  ): (input: unknown, errorFactory?: ErrorFactory) => T;
  export namespace json {
    function createAssertParse<T>(
      errorFactory?: ErrorFactory,
    ): (input: string, errorFactory?: ErrorFactory) => T;
    function createAssert<T>(
      errorFactory?: ErrorFactory,
    ): (input: unknown, errorFactory?: ErrorFactory) => T;
  }
  const typia: {
    createAssert<T>(
      errorFactory?: ErrorFactory,
    ): (input: unknown, errorFactory?: ErrorFactory) => T;
    json: typeof json;
  };
  export default typia;
}
`

// The third call spells a root operation inside a namespace. typia has no
// `json.createAssert`, so nothing was shadowed and nothing may be reported.
const shadowedTypiaCallSource = `import typia from "typia";

export interface User {
  id: number;
}

export const parseUser = typia.createAssert<User>();
export const parseUserJson = typia.json.createAssertParse<User>();
export const bogus = typia.json.createAssert<User>();
`
