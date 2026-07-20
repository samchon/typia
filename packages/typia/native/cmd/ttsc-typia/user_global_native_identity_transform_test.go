package main

import (
  "fmt"
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestUserGlobalNativeIdentityTransform keeps a user-authored global structural
// while a runtime-provided global of the same name stays runtime-native (#2200).
//
// Winning the checker's global type table proves only that a declaration is
// global. A project whose sole `File` or `Blob` declaration is its own `declare
// global` block wins that same lookup, so a resolution-only identity gate erases
// the user's members, emits `input instanceof File`, and throws `ReferenceError`
// wherever no runtime supplies that constructor. Native classification therefore
// has to ask which authority provides the constructor, and it must ask that
// question without demoting the genuine default-library, Node bare-global, or
// augmented natives that legitimately answer it.
//
//  1. Transform a project whose only File/Blob declarations are user globals in
//     both the interface and the class spelling, one of them carrying its own
//     `declare var` constructor binding, across is/assert/assertGuard/validate/
//     equals/random, direct and factory forms, and alias, nested, intersection,
//     union, and re-exported compositions.
//  2. Transform that project's json, protobuf, and llm schema surfaces, which a
//     native classification removes from those consumers entirely.
//  3. Transform a global `type` alias spelling of the same collision in a second
//     project, and near-miss control names in the first.
//  4. Transform a third project where @types/node provides the runtime bridge
//     and the user contributes only an empty augmentation, requiring every
//     default-library and Node-provided native to keep its `instanceof` check.
//  5. Execute every emitted validator in Node against structural user values and
//     against the real runtime instances, requiring exact case counts so a
//     dropped branch cannot pass silently.
func TestUserGlobalNativeIdentityTransform(t *testing.T) {
  project := userGlobalNativeIdentityProject(t)
  aliasProject := userGlobalNativeIdentityAliasProject(t)
  providedProject := userGlobalNativeIdentityProvidedProject(t)
  transform := func(dir string, file string) string {
    t.Helper()
    js, errText, code := ttscTypiaTestCapture(func() int {
      return runTransform([]string{
        "--cwd", dir,
        "--tsconfig", "tsconfig.json",
        "--file", file,
        "--output", "js",
      })
    })
    if code != 0 {
      t.Fatalf("user global native identity transform %s/%s failed: code=%d stderr=\n%s", dir, file, code, errText)
    }
    return js
  }

  js := transform(project, "src/input.ts")
  schemasJS := transform(project, "src/schemas.ts")
  controlsJS := transform(project, "src/controls.ts")
  aliasJS := transform(aliasProject, "src/input.ts")
  providedJS := transform(providedProject, "src/input.ts")

  failures := []string{}
  for _, native := range []string{"instanceof File", "instanceof Blob"} {
    for name, emit := range map[string]string{
      "validator emit":    js,
      "schema emit":       schemasJS,
      "type alias emit":   aliasJS,
      "near-miss control": controlsJS,
    } {
      if strings.Contains(emit, native) {
        failures = append(failures, fmt.Sprintf("%s promoted a user-authored global to %q", name, native))
      }
    }
  }
  for _, member := range []string{"userBlobBrand", "userFileBrand"} {
    for name, emit := range map[string]string{
      "validator emit":  js,
      "schema emit":     schemasJS,
      "type alias emit": aliasJS,
    } {
      if !strings.Contains(emit, member) {
        failures = append(failures, fmt.Sprintf("%s dropped user-declared member %q", name, member))
      }
    }
  }
  for _, member := range []string{"intersectionBrand", "unionControl", "nestedHolder"} {
    if !strings.Contains(js, member) {
      failures = append(failures, fmt.Sprintf("validator emit dropped composition member %q", member))
    }
  }
  for _, member := range []string{"nearMissBrand", "prefixBrand"} {
    if !strings.Contains(controlsJS, member) {
      failures = append(failures, fmt.Sprintf("near-miss control emit dropped member %q", member))
    }
  }
  for _, kept := range []string{
    "instanceof Date",
    "instanceof RegExp",
    "instanceof Uint8Array",
    "instanceof Map",
    "instanceof Set",
    "instanceof WeakMap",
    "instanceof WeakSet",
    "instanceof File",
    "instanceof Blob",
  } {
    if !strings.Contains(providedJS, kept) {
      failures = append(failures, fmt.Sprintf("runtime-provided native lost %q", kept))
    }
  }

  output, runtimeErr := userGlobalNativeIdentityRun(t, project, js, controlsJS)
  if runtimeErr != nil {
    failures = append(failures, fmt.Sprintf("user global runtime matrix failed: %v\n%s", runtimeErr, output))
  }
  // Counted from the runner's own table, which is the ground truth: 11 rows for
  // the is/assert/assertGuard/validate/equals/random matrix, 15 for the
  // createIs forms across direct, alias, re-export, branded intersection, union,
  // and nested positions, and 2 near-miss name controls. The count is asserted
  // rather than the exit code so a row that silently stops running cannot pass
  // as a row that ran and agreed.
  if expected := "RAN 28 USER GLOBAL CASES"; !strings.Contains(output, expected) {
    failures = append(failures, fmt.Sprintf("user global runner did not report %q; got:\n%s", expected, output))
  }
  providedOutput, providedErr := userGlobalNativeIdentityProvidedRun(t, providedProject, providedJS)
  if providedErr != nil {
    failures = append(failures, fmt.Sprintf("runtime-provided matrix failed: %v\n%s", providedErr, providedOutput))
  }
  if expected := "RAN 18 PROVIDED CASES"; !strings.Contains(providedOutput, expected) {
    failures = append(failures, fmt.Sprintf("provided runner did not report %q; got:\n%s", expected, providedOutput))
  }

  if len(failures) != 0 {
    t.Fatalf(
      "user global native identity mismatches:\n%s\n\nvalidator emit:\n%s\n\nschema emit:\n%s\n\nalias emit:\n%s\n\ncontrol emit:\n%s\n\nprovided emit:\n%s",
      strings.Join(failures, "\n"),
      js,
      schemasJS,
      aliasJS,
      controlsJS,
      providedJS,
    )
  }
}

func userGlobalNativeIdentityWriteProject(t *testing.T, prefix string, files map[string]string) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, prefix)
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() {
    _ = os.RemoveAll(dir)
  })
  for name, content := range files {
    path := filepath.Join(dir, filepath.FromSlash(name))
    if err := os.MkdirAll(filepath.Dir(path), 0o755); err != nil {
      t.Fatalf("mkdir fixture path %s: %v", filepath.Dir(path), err)
    }
    if err := os.WriteFile(path, []byte(content), 0o644); err != nil {
      t.Fatalf("write fixture file %s: %v", path, err)
    }
  }
  return dir
}

func userGlobalNativeIdentityProject(t *testing.T) string {
  t.Helper()
  return userGlobalNativeIdentityWriteProject(t, "user-global-native-identity-", map[string]string{
    "tsconfig.json":     userGlobalNativeIdentityTSConfig,
    "src/globals.d.ts":  userGlobalNativeIdentityGlobals,
    "src/reexport.ts":   userGlobalNativeIdentityReexport,
    "src/input.ts":      userGlobalNativeIdentitySource,
    "src/schemas.ts":    userGlobalNativeIdentitySchemaSource,
    "src/controls.ts":   userGlobalNativeIdentityControlSource,
  })
}

func userGlobalNativeIdentityAliasProject(t *testing.T) string {
  t.Helper()
  return userGlobalNativeIdentityWriteProject(t, "user-global-native-identity-alias-", map[string]string{
    "tsconfig.json":    userGlobalNativeIdentityTSConfig,
    "src/globals.d.ts": userGlobalNativeIdentityAliasGlobals,
    "src/input.ts":     userGlobalNativeIdentityAliasSource,
  })
}

func userGlobalNativeIdentityProvidedProject(t *testing.T) string {
  t.Helper()
  return userGlobalNativeIdentityWriteProject(t, "user-global-native-identity-provided-", map[string]string{
    "tsconfig.json":    userGlobalNativeIdentityProvidedTSConfig,
    "src/globals.d.ts": userGlobalNativeIdentityProvidedGlobals,
    "src/input.ts":     userGlobalNativeIdentityProvidedSource,
  })
}

func userGlobalNativeIdentityRunner(t *testing.T, project string, modules map[string]string) (string, error) {
  t.Helper()
  node, err := exec.LookPath("node")
  if err != nil {
    t.Skip("node executable not found")
    return "", nil
  }
  runtimeDir := filepath.Join(project, "runtime")
  if err := os.MkdirAll(runtimeDir, 0o755); err != nil {
    t.Fatalf("mkdir runtime dir: %v", err)
  }
  ttscTypiaTestWriteCommonRuntimeStubs(t, runtimeDir)
  for name, content := range modules {
    if err := os.WriteFile(filepath.Join(runtimeDir, name), []byte(content), 0o644); err != nil {
      t.Fatalf("write runtime file %s: %v", name, err)
    }
  }
  cmd := exec.Command(node, filepath.Join(runtimeDir, "run.cjs"))
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  return string(output), err
}

func userGlobalNativeIdentityRun(t *testing.T, project string, js string, controlsJS string) (string, error) {
  t.Helper()
  return userGlobalNativeIdentityRunner(t, project, map[string]string{
    "input.cjs":    ttscTypiaTestRewriteCommonJS(t, js),
    "controls.cjs": ttscTypiaTestRewriteCommonJS(t, controlsJS),
    "run.cjs":      userGlobalNativeIdentityRuntimeRunner,
  })
}

func userGlobalNativeIdentityProvidedRun(t *testing.T, project string, js string) (string, error) {
  t.Helper()
  return userGlobalNativeIdentityRunner(t, project, map[string]string{
    "input.cjs": ttscTypiaTestRewriteCommonJS(t, js),
    "run.cjs":   userGlobalNativeIdentityProvidedRuntimeRunner,
  })
}

const userGlobalNativeIdentityTSConfig = `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "bundler",
    "ignoreDeprecations": "6.0",
    "lib": ["ES2022"],
    "types": [],
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
`

const userGlobalNativeIdentityProvidedTSConfig = `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "bundler",
    "ignoreDeprecations": "6.0",
    "lib": ["ES2022"],
    "types": ["node"],
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
`

// userGlobalNativeIdentityGlobals is the whole runtime-native declaration set of
// its project: neither the DOM libraries nor @types/node is loaded, so Blob and
// File exist only because this file declares them. Blob is the interface-only
// spelling and File is the class spelling, which additionally gives File a
// user-owned constructor binding — the one signal a runtime provider would
// otherwise be recognized by.
const userGlobalNativeIdentityGlobals = `export {};

declare global {
  interface Blob {
    userBlobBrand: string;
  }
  class File {
    userBlobBrand: string;
    userFileBrand: string;
  }
}
`

const userGlobalNativeIdentityReexport = `export type ReexportedFile = File;
`

const userGlobalNativeIdentitySource = `import typia from "typia";
import type { ReexportedFile } from "./reexport";

type FileAlias = File;
type BrandedFile = File & { intersectionBrand: string };
type FileUnion = BrandedFile | { unionControl: boolean };
type NestedFile = { nestedHolder: File };

export const isFile = (input: unknown): boolean => typia.is<File>(input);
export const assertFile = (input: unknown): File => typia.assert<File>(input);
export const assertGuardFile = (input: unknown): void => typia.assertGuard<File>(input);
export const validateFile = (input: unknown) => typia.validate<File>(input);
export const equalsFile = (input: unknown): boolean => typia.equals<File>(input);
export const randomBlob = (): Blob => typia.random<Blob>();

export const createdIsBlob = typia.createIs<Blob>();
export const createdIsFile = typia.createIs<File>();
export const createdIsAlias = typia.createIs<FileAlias>();
export const createdIsReexported = typia.createIs<ReexportedFile>();
export const createdIsBranded = typia.createIs<BrandedFile>();
export const createdIsUnion = typia.createIs<FileUnion>();
export const createdIsNested = typia.createIs<NestedFile>();
`

const userGlobalNativeIdentitySchemaSource = `import typia from "typia";

export const jsonSchema = typia.json.schema<File>();
export const jsonStringify = typia.json.createStringify<File>();
export const jsonIsStringify = typia.json.createIsStringify<File>();
export const protobufMessage = typia.protobuf.message<Blob>();
export const protobufEncode = typia.protobuf.createIsEncode<Blob>();
export const llmSchema = typia.llm.schema<File>({});
`

const userGlobalNativeIdentityControlSource = `import typia from "typia";

interface FileEntry {
  nearMissBrand: string;
}
interface Blobby {
  prefixBrand: string;
}

export const createdIsFileEntry = typia.createIs<FileEntry>();
export const createdIsBlobby = typia.createIs<Blobby>();
`

// userGlobalNativeIdentityAliasGlobals spells the same collision as a global
// `type` alias, whose symbol is an anonymous type literal rather than a named
// declaration. It is the negative twin that proves the classification is decided
// by declaration provenance rather than by the shape of the declaring node.
const userGlobalNativeIdentityAliasGlobals = `export {};

declare global {
  type Blob = { userBlobBrand: string };
  type File = { userBlobBrand: string; userFileBrand: string };
}
`

const userGlobalNativeIdentityAliasSource = `import typia from "typia";

export const isAliasFile = (input: unknown): boolean => typia.is<File>(input);
export const createdIsAliasBlob = typia.createIs<Blob>();
`

// userGlobalNativeIdentityProvidedGlobals is the positive control: @types/node
// bridges the node:buffer constructors to the bare globals, and the user adds
// only an empty augmentation. Merging a declaration into a runtime-provided
// global must not change what provides that global.
const userGlobalNativeIdentityProvidedGlobals = `export {};

declare global {
  interface Blob {}
  interface File {}
}
`

const userGlobalNativeIdentityProvidedSource = `import typia from "typia";

export const createdIsDate = typia.createIs<Date>();
export const createdIsRegExp = typia.createIs<RegExp>();
export const createdIsBytes = typia.createIs<Uint8Array>();
export const createdIsMap = typia.createIs<Map<string, number>>();
export const createdIsSet = typia.createIs<Set<string>>();
export const createdIsWeakMap = typia.createIs<WeakMap<object, string>>();
export const createdIsWeakSet = typia.createIs<WeakSet<object>>();
export const createdIsFile = typia.createIs<File>();
export const createdIsBlob = typia.createIs<Blob>();
`

const userGlobalNativeIdentityRuntimeRunner = `const validators = require("./input.cjs");
const controls = require("./controls.cjs");

let ran = 0;
const failures = [];
const eq = (name, actual, expected) => {
  ran += 1;
  if (actual !== expected) {
    failures.push(name + ": expected " + expected + " but got " + actual);
  }
};
const throws = (name, run) => {
  ran += 1;
  try {
    run();
    failures.push(name + ": expected a throw but none happened");
  } catch {}
};

const userBlob = { userBlobBrand: "user" };
const userFile = { userBlobBrand: "user", userFileBrand: "user" };
const realBlob = new Blob(["x"]);
const realFile = new File(["x"], "x.txt");

eq("is user File", validators.isFile(userFile), true);
eq("is real File", validators.isFile(realFile), false);
eq("assert user File", validators.assertFile(userFile), userFile);
throws("assert real File", () => validators.assertFile(realFile));
eq("assertGuard user File", validators.assertGuardFile(userFile), undefined);
throws("assertGuard real File", () => validators.assertGuardFile(realFile));
eq("validate user File", validators.validateFile(userFile).success, true);
eq("validate real File", validators.validateFile(realFile).success, false);
eq("equals user File", validators.equalsFile(userFile), true);
eq("equals real File", validators.equalsFile(realFile), false);
eq("random Blob brand", typeof validators.randomBlob().userBlobBrand, "string");

eq("createIs user Blob", validators.createdIsBlob(userBlob), true);
eq("createIs real Blob", validators.createdIsBlob(realBlob), false);
eq("createIs user File", validators.createdIsFile(userFile), true);
eq("createIs real File", validators.createdIsFile(realFile), false);
eq("alias user File", validators.createdIsAlias(userFile), true);
eq("alias real File", validators.createdIsAlias(realFile), false);
eq("re-export user File", validators.createdIsReexported(userFile), true);
eq("re-export real File", validators.createdIsReexported(realFile), false);
eq("branded user File", validators.createdIsBranded({ ...userFile, intersectionBrand: "x" }), true);
eq("branded user File without brand", validators.createdIsBranded(userFile), false);
eq("union branded arm", validators.createdIsUnion({ ...userFile, intersectionBrand: "x" }), true);
eq("union control arm", validators.createdIsUnion({ unionControl: true }), true);
eq("union rejects real File", validators.createdIsUnion(realFile), false);
eq("nested user File", validators.createdIsNested({ nestedHolder: userFile }), true);
eq("nested real File", validators.createdIsNested({ nestedHolder: realFile }), false);

eq("near-miss FileEntry", controls.createdIsFileEntry({ nearMissBrand: "x" }), true);
eq("prefix Blobby", controls.createdIsBlobby({ prefixBrand: "x" }), true);

console.log("RAN " + ran + " USER GLOBAL CASES");
if (failures.length !== 0) {
  throw new Error("MISMATCHES:\n" + failures.join("\n"));
}
`

const userGlobalNativeIdentityProvidedRuntimeRunner = `const validators = require("./input.cjs");

let ran = 0;
const failures = [];
const eq = (name, actual, expected) => {
  ran += 1;
  if (actual !== expected) {
    failures.push(name + ": expected " + expected + " but got " + actual);
  }
};

eq("Date real", validators.createdIsDate(new Date()), true);
eq("Date plain", validators.createdIsDate({}), false);
eq("RegExp real", validators.createdIsRegExp(/x/), true);
eq("RegExp plain", validators.createdIsRegExp({}), false);
eq("Uint8Array real", validators.createdIsBytes(new Uint8Array(1)), true);
eq("Uint8Array plain", validators.createdIsBytes({}), false);
eq("Map real", validators.createdIsMap(new Map([["x", 1]])), true);
eq("Map plain", validators.createdIsMap({}), false);
eq("Set real", validators.createdIsSet(new Set(["x"])), true);
eq("Set plain", validators.createdIsSet({}), false);
eq("WeakMap real", validators.createdIsWeakMap(new WeakMap()), true);
eq("WeakMap plain", validators.createdIsWeakMap({}), false);
eq("WeakSet real", validators.createdIsWeakSet(new WeakSet()), true);
eq("WeakSet plain", validators.createdIsWeakSet({}), false);
eq("File real", validators.createdIsFile(new File(["x"], "x.txt")), true);
eq("File plain", validators.createdIsFile({ name: "x.txt", size: 1 }), false);
eq("Blob real", validators.createdIsBlob(new Blob(["x"])), true);
eq("Blob plain", validators.createdIsBlob({ size: 1, type: "text/plain" }), false);

console.log("RAN " + ran + " PROVIDED CASES");
if (failures.length !== 0) {
  throw new Error("MISMATCHES:\n" + failures.join("\n"));
}
`
