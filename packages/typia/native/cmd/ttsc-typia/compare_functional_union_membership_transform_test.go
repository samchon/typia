package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestCompareFunctionalUnionMembershipTransform verifies functional membership during comparison union routing.
//
// Comparison may ignore function identity after member selection but functional membership still requires a function-valued property to select that arm. Ordering has a separate contract that rejects this object union.
//
// 1. The fixture includes direct/factory and reversed/nested object-union calls; the actual assertions own functional membership emission and less rejection rather than runtime equality results.
// 2. Functional-mode emit retains the typeof handler function guard and compare.less keeps its multiple-object-union diagnostic.
//
// @evidence contracts/testing.md#behavioral-verification Functional-mode emit retains the typeof handler function guard and compare.less keeps its multiple-object-union diagnostic.
// @evidence contracts/testing.md#independent-expectations Comparison may ignore function identity after member selection but functional membership still requires a function-valued property to select that arm. Ordering has a separate contract that rejects this object union.
// @evidence contracts/testing.md#distinguishing-cases The fixture includes direct/factory and reversed/nested object-union calls; the actual assertions own functional membership emission and less rejection rather than runtime equality results.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestCompareFunctionalUnionMembershipTransform as a unit test. The fixture and captured Go operation execute in process; helper assertions retain the same source inputs and failure identity without launching a compiler or JavaScript subprocess.
func TestCompareFunctionalUnionMembershipTransform(t *testing.T) {
  project := compareFunctionalUnionMembershipProject(t)
  functional := compareFunctionalUnionMembershipTransform(t, project, true)
  if strings.Contains(functional, `typeof v.handler === "function"`) == false {
    t.Fatalf("functional equality emit did not retain the function membership guard:\n%s", functional)
  }
  compareFunctionalUnionMembershipRejectsLess(t, project)
}

func compareFunctionalUnionMembershipProject(t *testing.T) string {
  t.Helper()
  base := os.Getenv("TYPIA_TEST_TMPDIR")
  if base == "" {
    root := ttscTypiaTestRepoRoot(t)
    base = filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  }
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "compare-functional-union-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() {
    _ = os.RemoveAll(dir)
  })
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.main.json"), []byte(compareFunctionalUnionMembershipTSConfig("src/main.ts")), 0o644); err != nil {
    t.Fatalf("write main tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.less.json"), []byte(compareFunctionalUnionMembershipTSConfig("src/less.ts")), 0o644); err != nil {
    t.Fatalf("write less tsconfig: %v", err)
  }
  compareFunctionalUnionMembershipWriteTypiaFixture(t, dir)
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(compareFunctionalUnionMembershipSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "less.ts"), []byte(compareFunctionalUnionMembershipLessSource), 0o644); err != nil {
    t.Fatalf("write less source: %v", err)
  }
  return dir
}

func compareFunctionalUnionMembershipWriteTypiaFixture(t *testing.T, project string) {
  t.Helper()
  root := filepath.Join(project, "node_modules", "typia")
  if err := os.MkdirAll(filepath.Join(root, "src"), 0o755); err != nil {
    t.Fatalf("mkdir typia fixture: %v", err)
  }
  if err := os.MkdirAll(filepath.Join(root, "lib"), 0o755); err != nil {
    t.Fatalf("mkdir typia fixture lib: %v", err)
  }
  files := map[string]string{
    "package.json": `{
  "name": "typia",
  "version": "0.0.0-test",
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "exports": {
    ".": "./src/index.ts",
    "./lib/transform": "./lib/transform.js"
  },
  "ttsc": {
    "plugin": { "transform": "typia/lib/transform" }
  }
}
`,
    "src/index.ts":     compareFunctionalUnionMembershipTypiaIndex,
    "src/module.ts":    compareFunctionalUnionMembershipTypiaModule,
    "src/compare.ts":   compareFunctionalUnionMembershipTypiaCompare,
    "src/plain.ts":     compareFunctionalUnionMembershipTypiaPlain,
    "lib/transform.js": "module.exports = {};\n",
  }
  for name, body := range files {
    if err := os.WriteFile(filepath.Join(root, name), []byte(body), 0o644); err != nil {
      t.Fatalf("write typia fixture %s: %v", name, err)
    }
  }
}

func compareFunctionalUnionMembershipTransform(t *testing.T, project string, functional bool) string {
  t.Helper()
  payload := `[{"config":{"transform":"typia/lib/transform"},"name":"typia","stage":"transform"}]`
  if functional {
    payload = `[{"config":{"transform":"typia/lib/transform","functional":true},"name":"typia","stage":"transform"}]`
  }
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.main.json",
      "--file", "src/main.ts",
      "--output", "js",
      "--plugins-json=" + payload,
    })
  })
  if code != 0 {
    t.Fatalf("functional=%t transform failed: code=%d stderr=\n%s", functional, code, errText)
  }
  return out
}

func compareFunctionalUnionMembershipRejectsLess(t *testing.T, project string) {
  t.Helper()
  payload := `[{"config":{"transform":"typia/lib/transform","functional":true},"name":"typia","stage":"transform"}]`
  _, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.less.json",
      "--file", "src/less.ts",
      "--output", "js",
      "--plugins-json=" + payload,
    })
  })
  if code == 0 || strings.Contains(errText, "unable to order a union of multiple object types") == false {
    t.Fatalf("compare.less did not retain its object-union diagnostic: code=%d stderr=\n%s", code, errText)
  }
}

func compareFunctionalUnionMembershipTSConfig(entry string) string {
  return `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "bundler",
    "ignoreDeprecations": "6.0",
    "types": ["*"],
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["` + entry + `"]
}
`
}

const compareFunctionalUnionMembershipTypiaIndex = `import * as typia from "./module";

export default typia;
export * from "./module";
`

const compareFunctionalUnionMembershipTypiaModule = `export * as compare from "./compare";
export * as plain from "./plain";

export declare function is<T>(input: unknown): input is T;
export declare function createIs<T>(): (input: unknown) => input is T;
`

const compareFunctionalUnionMembershipTypiaCompare = `export type Cover<T> = T extends object
  ? { [K in keyof T]?: Cover<T[K]> }
  : T;

export declare function equals<T>(x: T, y: T): boolean;
export declare function cover<T>(x: T, y: Cover<T>): boolean;
export declare function less<T>(x: T, y: T): boolean;
export declare function createEquals<T>(): (x: T, y: T) => boolean;
export declare function createCover<T>(): (x: T, y: Cover<T>) => boolean;
`

const compareFunctionalUnionMembershipTypiaPlain = `export declare function clone<T>(input: T): T;
export declare function createClone<T>(): (input: T) => T;
export declare function createPrune<T extends object>(): (input: T) => void;
`

const compareFunctionalUnionMembershipSource = `import typia from "typia";

type FunctionUnion =
  | { handler: (value: number) => string; common: string }
  | { handler: string; common: string; label: string };
type StringFirstUnion =
  | { handler: string; common: string; label: string }
  | { handler: (value: number) => string; common: string };
type FunctionSecondUnion =
  | { handler: string; common: string }
  | { handler: (value: number) => string; common: string; label: string };
type CoverPartial = { common: string; label: string };
type Nested = { value: FunctionUnion };
type FunctionSecondNested = { value: FunctionSecondUnion };
interface Delegated {
  value: string;
  equals(input: Delegated): boolean;
}

export const directIs = (input: unknown): input is FunctionUnion =>
  typia.is<FunctionUnion>(input);
export const factoryIs = typia.createIs<FunctionUnion>();
export const directEquals = (x: unknown, y: unknown): boolean =>
  typia.compare.equals<FunctionUnion>(x as FunctionUnion, y as FunctionUnion);
export const factoryEquals = typia.compare.createEquals<FunctionUnion>();
export const directCover = (x: FunctionUnion, y: unknown): boolean =>
  typia.compare.cover<FunctionUnion>(x, y as typia.compare.Cover<FunctionUnion>);
export const factoryCover = typia.compare.createCover<FunctionUnion>();
export const directClone = (input: FunctionUnion) =>
  typia.plain.clone<FunctionUnion>(input);
export const factoryClone = typia.plain.createClone<FunctionUnion>();
export const prune = typia.plain.createPrune<FunctionUnion>();

export const reversedEquals = typia.compare.createEquals<StringFirstUnion>();
export const functionSecondDirectIs = (input: unknown): input is FunctionSecondUnion =>
  typia.is<FunctionSecondUnion>(input);
export const functionSecondFactoryIs = typia.createIs<FunctionSecondUnion>();
export const functionSecondDirectEquals = (x: FunctionSecondUnion, y: FunctionSecondUnion): boolean =>
  typia.compare.equals<FunctionSecondUnion>(x, y);
export const functionSecondFactoryEquals = typia.compare.createEquals<FunctionSecondUnion>();
export const functionSecondDirectCover = (x: FunctionSecondUnion, y: unknown): boolean =>
  typia.compare.cover<FunctionSecondUnion>(x, y as typia.compare.Cover<FunctionSecondUnion>);
export const functionSecondFactoryCover = typia.compare.createCover<FunctionSecondUnion>();
export const coverPartialDirect = (x: CoverPartial, y: unknown): boolean =>
  typia.compare.cover<CoverPartial>(x, y as typia.compare.Cover<CoverPartial>);
export const coverPartialFactory = typia.compare.createCover<CoverPartial>();
export const functionSecondNestedDirectEquals = (x: FunctionSecondNested, y: FunctionSecondNested): boolean =>
  typia.compare.equals<FunctionSecondNested>(x, y);
export const functionSecondNestedFactoryEquals = typia.compare.createEquals<FunctionSecondNested>();
export const delegatedDirectEquals = (x: Delegated, y: Delegated): boolean =>
  typia.compare.equals<Delegated>(x, y);
export const delegatedFactoryEquals = typia.compare.createEquals<Delegated>();
export const nestedEquals = typia.compare.createEquals<Nested>();
export const nestedDirectEquals = (x: Nested, y: Nested): boolean =>
  typia.compare.equals<Nested>(x, y);
`

const compareFunctionalUnionMembershipLessSource = `import typia from "typia";

type FunctionUnion =
  | { handler: (value: number) => string; common: string }
  | { handler: string; common: string; label: string };

typia.compare.less<FunctionUnion>({} as FunctionUnion, {} as FunctionUnion);
`
