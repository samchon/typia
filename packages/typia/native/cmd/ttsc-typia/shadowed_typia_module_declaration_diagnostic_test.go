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
//     "typia"` that redeclares `createAssert`.
//  2. Run the transform over the project.
//  3. Require a diagnostic at the call site whose code names the operation and
//     whose message names the shadowing declaration file.
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
  if len(result.Diagnostics) != 1 {
    t.Fatalf("expected one transform diagnostic, got %+v", result.Diagnostics)
  }
  diag := result.Diagnostics[0]
  if diag.Code != "typia.createAssert" {
    t.Fatalf("diagnostic code did not name the operation: %+v", diag)
  }
  if diag.File == nil || !strings.HasSuffix(filepath.ToSlash(*diag.File), "src/main.ts") {
    t.Fatalf("diagnostic was not reported at the call site: %+v", diag)
  }
  if !strings.Contains(filepath.ToSlash(diag.MessageText), "src/typia.d.ts") {
    t.Fatalf("diagnostic did not name the shadowing declaration: %+v", diag)
  }
  if !strings.Contains(diag.MessageText, "no transform was applied") {
    t.Fatalf("diagnostic did not state the consequence: %+v", diag)
  }
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
  shadowedTypiaWriteFactoryStub(t, dir)
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

// shadowedTypiaWriteFactoryStub installs a typia whose declaration file sits at
// the path the identity test accepts, so the fixtures differ only in whether an
// ambient declaration outranks it.
func shadowedTypiaWriteFactoryStub(t *testing.T, project string) {
  t.Helper()
  root := filepath.Join(project, "node_modules", "typia")
  lib := filepath.Join(root, "lib")
  if err := os.MkdirAll(lib, 0o755); err != nil {
    t.Fatalf("mkdir typia stub: %v", err)
  }
  files := map[string]string{
    "package.json": `{
  "name": "typia",
  "version": "0.0.0-test",
  "main": "./lib/module.js",
  "types": "./lib/module.d.ts",
  "exports": {
    ".": {
      "types": "./lib/module.d.ts",
      "default": "./lib/module.js"
    },
    "./lib/transform": "./lib/transform.js"
  },
  "ttsc": {
    "plugin": { "transform": "typia/lib/transform" }
  }
}
`,
    filepath.Join("lib", "module.d.ts"): `declare namespace typia {
  function createAssert<T>(): (input: unknown) => T;
  function createIs<T>(): (input: unknown) => input is T;
}
declare const typia: {
  createAssert: typeof typia.createAssert;
  createIs: typeof typia.createIs;
};
export default typia;
export declare function createAssert<T>(): (input: unknown) => T;
export declare function createIs<T>(): (input: unknown) => input is T;
`,
    filepath.Join("lib", "module.js"):      "exports.createAssert = () => () => undefined;\nexports.createIs = () => () => false;\n",
    filepath.Join("lib", "transform.js"):   "module.exports = {};\n",
    filepath.Join("lib", "transform.d.ts"): "export {};\n",
  }
  for name, body := range files {
    if err := os.WriteFile(filepath.Join(root, name), []byte(body), 0o644); err != nil {
      t.Fatalf("write typia stub %s: %v", name, err)
    }
  }
}

const shadowedTypiaAmbientDeclaration = `declare module "typia" {
  type ErrorFactory = (props: { method: string }) => Error;
  export function createAssert<T>(
    errorFactory?: ErrorFactory,
  ): (input: unknown, errorFactory?: ErrorFactory) => T;
  const typia: {
    createAssert<T>(
      errorFactory?: ErrorFactory,
    ): (input: unknown, errorFactory?: ErrorFactory) => T;
  };
  export default typia;
}
`

const shadowedTypiaCallSource = `import typia from "typia";

export interface User {
  id: number;
}

export const parseUser = typia.createAssert<User>();
`
