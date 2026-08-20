package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestProjectDependenciesCalleeInferenceTransform verifies a nested call whose
// identity comes from an inferred return type or a borrowed constant withholds
// its file, while the same indirection written with a type keeps it.
//
// The callee walk reports which files a callee's name resolves through, and for
// the OUTERMOST callee that is the whole answer: the identity is the resolved
// declaration, whose file is reported. One call in it stops being the answer,
// because there the identity is the inner call's return type. `const getNs = ()
// => ns` and `const FLAG = RAW` both carry it from a file no name on the chain
// writes, so reporting the names without admitting that declared the caller
// complete while an edit to the unreported file deleted the generated validator
// outright (samchon/typia#2360).
//
// A function DECLARATION with an inferred return type is the same defect one
// keyword apart, and it needs its own case: the shared boundedness predicate
// calls every callable bounded, because the type walk emits one as `typeof x
// === "function"` and never reads its signature. On this channel the signature
// is the whole question.
//
// The bounded twins are what keep the fix from degenerating into "withhold on
// every nested call": an indirection with a written return type pins its
// identity in the file that declares it, and that file must stay declared.
//
// The third shape samchon/typia#2360 reports -- an overload selected by a
// borrowed VALUE -- is NOT pinned here, and the fixture keeps it as the record
// of that. `const FLAG = RAW` is structurally identical to `const ns = typia`,
// whose caller must stay declared (samchon/typia#2357), so no boundedness
// answer separates them; reporting the initializer chain would.
//
//  1. Build a project with three unbounded shapes -- a computed argument, a
//     computed callee, and a function declaration with an inferred return type
//     -- plus a written-type twin for the `const` and the `function` spellings,
//     and the borrowed-value overload that stays declared.
//  2. Run project transform mode and decode the JSON envelope.
//  3. Assert each file really was rewritten into a validator, so the test is
//     measuring the shape it intends rather than a call typia never touched.
//  4. Assert the three unbounded files are absent from `dependenciesComplete`.
//  5. Assert both annotated twins are present, and that a file whose OUTERMOST
//     callee resolves to a local `const helper = () => ...` keeps its
//     declaration -- that name decides nothing, and charging it costs 65 more
//     files across the test workspaces than the fix needs.
func TestProjectDependenciesCalleeInferenceTransform(t *testing.T) {
  project := projectDependenciesCalleeInferenceProject(t)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--output", "ts",
    })
  })
  if code != 0 {
    t.Fatalf("project transform failed: code=%d stderr=\n%s", code, errText)
  }
  var envelope struct {
    TypeScript           map[string]string   `json:"typescript"`
    Dependencies         map[string][]string `json:"dependencies"`
    DependenciesComplete []string            `json:"dependenciesComplete"`
  }
  if err := json.Unmarshal([]byte(out), &envelope); err != nil {
    t.Fatalf("decode envelope: %v\n%s", err, out)
  }

  // Guard first: an assertion about dependencies means nothing on a file the
  // transform never rewrote, and that is exactly how this class hides.
  for _, file := range []string{
    "src/main_computed_arg.ts",
    "src/main_computed_callee.ts",
    "src/main_overload.ts",
    "src/main_annotated.ts",
    "src/main_function.ts",
    "src/main_function_annotated.ts",
    "src/main_outermost.ts",
  } {
    if text := envelope.TypeScript[file]; !strings.Contains(text, "input is Foo") {
      t.Fatalf("%s must have been rewritten into a validator, got:\n%s", file, text)
    }
  }

  declared := map[string]bool{}
  for _, key := range envelope.DependenciesComplete {
    declared[key] = true
  }
  for _, file := range []string{
    "src/main_computed_arg.ts",
    "src/main_computed_callee.ts",
    "src/main_function.ts",
  } {
    if declared[file] {
      t.Fatalf(
        "%s must be withheld: its callee identity comes from an inferred "+
          "return type or a borrowed constant, and %v does not name the file "+
          "that decides it",
        file,
        envelope.Dependencies[file],
      )
    }
  }
  for _, file := range []string{
    "src/main_annotated.ts",
    "src/main_function_annotated.ts",
  } {
    if declared[file] {
      continue
    }
    t.Fatalf(
      "%s must stay declared: its indirection carries a written return type, "+
        "so the reported files do pin the identity. Withholding it means the "+
        "boundedness answer stopped reading the written type: %v",
      file,
      envelope.DependenciesComplete,
    )
  }
  if !declared["src/main_outermost.ts"] {
    t.Fatalf(
      "src/main_outermost.ts must stay declared: its outermost callee IS the "+
        "declaration it resolves to, so a local arrow with an inferred return "+
        "type decides nothing. Withholding it means the nested guard is gone, "+
        "which costs 65 more files across the test workspaces: %v",
      envelope.DependenciesComplete,
    )
  }
}

func projectDependenciesCalleeInferenceProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "project-dependencies-callee-inference-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() { _ = os.RemoveAll(dir) })
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(projectDependenciesEnvelopeTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  for name, body := range map[string]string{
    "foo.ts":                     projectDependenciesCalleeInferenceSourceFoo,
    "ns.ts":                      projectDependenciesCalleeInferenceSourceNs,
    "getns.ts":                   projectDependenciesCalleeInferenceSourceGetNs,
    "pick.ts":                    projectDependenciesCalleeInferenceSourcePick,
    "rawflag.ts":                 projectDependenciesCalleeInferenceSourceRawFlag,
    "flag.ts":                    projectDependenciesCalleeInferenceSourceFlag,
    "other.ts":                   projectDependenciesCalleeInferenceSourceOther,
    "sel.ts":                     projectDependenciesCalleeInferenceSourceSel,
    "main_computed_arg.ts":       projectDependenciesCalleeInferenceSourceComputedArg,
    "main_computed_callee.ts":    projectDependenciesCalleeInferenceSourceComputedCallee,
    "main_overload.ts":           projectDependenciesCalleeInferenceSourceOverload,
    "main_annotated.ts":          projectDependenciesCalleeInferenceSourceAnnotated,
    "main_function.ts":           projectDependenciesCalleeInferenceSourceFunction,
    "main_function_annotated.ts": projectDependenciesCalleeInferenceSourceFunctionAnnotated,
    "main_outermost.ts":          projectDependenciesCalleeInferenceSourceOutermost,
  } {
    if err := os.WriteFile(filepath.Join(src, name), []byte(body), 0o644); err != nil {
      t.Fatalf("write %s: %v", name, err)
    }
  }
  return dir
}

const projectDependenciesCalleeInferenceSourceFoo = `export interface Foo {
  id: string;
}
`

const projectDependenciesCalleeInferenceSourceNs = `import typia from "typia";

export const ns = typia;
`

// The return type is inferred, so nothing written here says the result is
// typia's namespace; `ns.ts` decides it and no name on the callee chain reaches
// that file.
const projectDependenciesCalleeInferenceSourceGetNs = `import { ns } from "./ns";

export const getNs = () => ns;

export const getNsAnnotated: () => typeof ns = () => ns;

export function getNsFn() {
  return ns;
}

export function getNsFnAnnotated(): typeof ns {
  return ns;
}
`

const projectDependenciesCalleeInferenceSourcePick = `export const pick = <T>(value: T): T => value;
`

const projectDependenciesCalleeInferenceSourceRawFlag = `export const RAW = 1;
`

// The value is borrowed from another file, so the overload this selects is
// decided by `rawflag.ts`.
const projectDependenciesCalleeInferenceSourceFlag = `import { RAW } from "./rawflag";

export const FLAG = RAW;
`

const projectDependenciesCalleeInferenceSourceOther = `export const other = {
  is: <T>(_input: unknown): _input is T => false,
};
`

const projectDependenciesCalleeInferenceSourceSel = `import typia from "typia";

import { other } from "./other";

export function sel(x: 0): typeof other;
export function sel(x: 1): typeof typia;
export function sel(x: number): unknown {
  return x === 1 ? typia : other;
}
`

const projectDependenciesCalleeInferenceSourceComputedArg = `import { Foo } from "./foo";
import { getNs } from "./getns";
import { pick } from "./pick";

export const check = (input: unknown) => pick(getNs()).is<Foo>(input);
`

const projectDependenciesCalleeInferenceSourceComputedCallee = `import { Foo } from "./foo";
import { getNs } from "./getns";

export const check = (input: unknown) => getNs().is<Foo>(input);
`

const projectDependenciesCalleeInferenceSourceOverload = `import { Foo } from "./foo";
import { FLAG } from "./flag";
import { sel } from "./sel";

export const check = (input: unknown) => sel(FLAG).is<Foo>(input);
`

// The bounded twin: the indirection's return type is written, so `getns.ts`
// pins the identity and this file must keep its declaration.
const projectDependenciesCalleeInferenceSourceAnnotated = `import { Foo } from "./foo";
import { getNsAnnotated } from "./getns";

export const check = (input: unknown) => getNsAnnotated().is<Foo>(input);
`

const projectDependenciesCalleeInferenceSourceFunction = `import { Foo } from "./foo";
import { getNsFn } from "./getns";

export const check = (input: unknown) => getNsFn().is<Foo>(input);
`

const projectDependenciesCalleeInferenceSourceFunctionAnnotated = `import { Foo } from "./foo";
import { getNsFnAnnotated } from "./getns";

export const check = (input: unknown) => getNsFnAnnotated().is<Foo>(input);
`

// The outermost callee's identity IS the declaration it resolves to, so a local
// arrow with an inferred return type decides nothing here and must not withhold
// the file. Measured: charging it drops the eight test workspaces from 806
// declared to 741.
const projectDependenciesCalleeInferenceSourceOutermost = `import typia from "typia";

import { Foo } from "./foo";

const label = () => "x";

export const check = (input: unknown) => typia.is<Foo>(input) && label() !== "";
`
