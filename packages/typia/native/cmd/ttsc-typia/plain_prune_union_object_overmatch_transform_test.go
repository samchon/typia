package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "testing"
)

// TestPlainPruneUnionObjectOvermatchTransform pins prune over mixed unions.
//
// PlainPruneProgrammer emits one independent `if` per union member, and the
// object arm's guard is `IsObject` with `CheckArray:false`, which also matches
// arrays and native instances. With no `else` the array/native arm AND the
// object arm both run, so `Object.keys(input)` on a value another arm already
// owns gets its slots deleted: a typed array throws on `delete input[0]`, a
// plain array collapses to holes, and a native's own properties are stripped.
// clone/classify resolve the same unions with a mutually exclusive ladder, so
// the object arm is only reached when the value is a plain object. This test
// drives every native kind unioned with an object in both orders, plus an
// object∪tuple, and requires the native/array/tuple value to survive intact.
//
//  1. Transform prune factories over native|object, object|native, array|object
//     and object|tuple unions.
//  2. Execute prune against a typed array, Date, Map, Set, RegExp, plain array,
//     and tuple, requiring each to keep its identity and own state.
//  3. Require the object arm still prunes an ordinary object member.
func TestPlainPruneUnionObjectOvermatchTransform(t *testing.T) {
  project := plainPruneUnionObjectOvermatchProject(t)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("prune union/object over-match transform failed: code=%d stderr=\n%s", code, errText)
  }
  plainPruneUnionObjectOvermatchRunRuntimeCases(t, project, out)
}

func plainPruneUnionObjectOvermatchProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "plain-prune-union-object-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(plainPruneUnionObjectOvermatchTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(plainPruneUnionObjectOvermatchSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func plainPruneUnionObjectOvermatchRunRuntimeCases(t *testing.T, project string, js string) {
  t.Helper()
  node, err := exec.LookPath("node")
  if err != nil {
    t.Skip("node executable not found")
  }
  runtimeDir := filepath.Join(project, "runtime")
  if err := os.MkdirAll(runtimeDir, 0o755); err != nil {
    t.Fatalf("mkdir runtime dir: %v", err)
  }
  ttscTypiaTestWriteCommonRuntimeStubs(t, runtimeDir)
  runtimeJS := ttscTypiaTestRewriteCommonJS(t, js)
  if err := os.WriteFile(filepath.Join(runtimeDir, "main.cjs"), []byte(runtimeJS), 0o644); err != nil {
    t.Fatalf("write runtime module: %v", err)
  }
  runner := filepath.Join(runtimeDir, "run.cjs")
  if err := os.WriteFile(runner, []byte(plainPruneUnionObjectOvermatchRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("prune union/object over-match runtime cases failed: %v\n%s", err, output)
  }
}

const plainPruneUnionObjectOvermatchTSConfig = `{
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
  "include": ["src"]
}
`

const plainPruneUnionObjectOvermatchSource = `import typia from "typia";

interface IBox {
  x: number;
}
interface IElem {
  y: number;
}

export const pruneBytesFirst = typia.plain.createPrune<Uint8Array | IBox>();
export const pruneBytesLast = typia.plain.createPrune<IBox | Uint8Array>();
export const pruneDateFirst = typia.plain.createPrune<Date | IBox>();
export const pruneDateLast = typia.plain.createPrune<IBox | Date>();
export const pruneMap = typia.plain.createPrune<Map<string, number> | IBox>();
export const pruneSet = typia.plain.createPrune<IBox | Set<number>>();
export const pruneRegExp = typia.plain.createPrune<RegExp | IBox>();
export const pruneArray = typia.plain.createPrune<IElem[] | IBox>();
export const pruneTuple = typia.plain.createPrune<IBox | [IElem, IElem]>();
`

const plainPruneUnionObjectOvermatchRuntimeRunner = `const mod = require("./main.cjs");

const fail = (label, detail) => {
  throw new Error(label + ": " + detail);
};

// 1. A typed array must survive prune untouched (the buggy object arm throws
//    "Cannot delete property '0'" while deleting its integer-indexed slots).
for (const [label, prune] of [
  ["Uint8Array | IBox", mod.pruneBytesFirst],
  ["IBox | Uint8Array", mod.pruneBytesLast],
]) {
  const bytes = new Uint8Array([1, 2, 3]);
  prune(bytes);
  if (!(bytes instanceof Uint8Array) || bytes.length !== 3 || bytes[0] !== 1 || bytes[1] !== 2 || bytes[2] !== 3)
    fail(label, "typed array corrupted -> " + JSON.stringify(Array.from(bytes)));
}

// 2. A Date must keep its time and its own state; the object arm strips own keys.
for (const [label, prune] of [
  ["Date | IBox", mod.pruneDateFirst],
  ["IBox | Date", mod.pruneDateLast],
]) {
  const date = new Date(1000);
  date.tag = "keep";
  prune(date);
  if (!(date instanceof Date) || date.getTime() !== 1000)
    fail(label, "Date time corrupted -> " + date.getTime());
  if (date.tag !== "keep")
    fail(label, "Date own property stripped");
}

// 3. A Map / Set must keep their contents and own state.
{
  const map = new Map([["a", 1]]);
  map.tag = "keep";
  mod.pruneMap(map);
  if (!(map instanceof Map) || map.size !== 1 || map.get("a") !== 1 || map.tag !== "keep")
    fail("Map<string,number> | IBox", "Map corrupted");
}
{
  const set = new Set([7]);
  set.tag = "keep";
  mod.pruneSet(set);
  if (!(set instanceof Set) || set.size !== 1 || set.has(7) === false || set.tag !== "keep")
    fail("IBox | Set<number>", "Set corrupted");
}

// 4. A RegExp with equal source but its own state must survive.
{
  const re = /abc/gi;
  re.tag = "keep";
  mod.pruneRegExp(re);
  if (!(re instanceof RegExp) || re.source !== "abc" || re.flags !== "gi" || re.tag !== "keep")
    fail("RegExp | IBox", "RegExp corrupted");
}

// 5. A plain array must be pruned element-by-element, not deleted to holes.
{
  const arr = [{ y: 1, extra: 2 }, { y: 3, extra: 4 }];
  mod.pruneArray(arr);
  if (!Array.isArray(arr) || arr.length !== 2)
    fail("IElem[] | IBox", "array shape corrupted -> " + JSON.stringify(arr));
  if (arr[0] === undefined || arr[1] === undefined)
    fail("IElem[] | IBox", "array slot deleted -> " + JSON.stringify(arr));
  if (arr[0].y !== 1 || arr[1].y !== 3 || "extra" in arr[0] || "extra" in arr[1])
    fail("IElem[] | IBox", "array elements not pruned as objects -> " + JSON.stringify(arr));
}

// 6. An object∪tuple must prune the tuple positionally, not delete its slots.
{
  const tuple = [{ y: 1, extra: 2 }, { y: 3, extra: 4 }];
  mod.pruneTuple(tuple);
  if (!Array.isArray(tuple) || tuple.length !== 2 || tuple[0] === undefined || tuple[1] === undefined)
    fail("IBox | [IElem, IElem]", "tuple slot deleted -> " + JSON.stringify(tuple));
  if (tuple[0].y !== 1 || tuple[1].y !== 3 || "extra" in tuple[0] || "extra" in tuple[1])
    fail("IBox | [IElem, IElem]", "tuple elements not pruned -> " + JSON.stringify(tuple));
}

// 7. The object arm must still prune an ordinary object member (nothing lost).
{
  const box = { x: 1, junk: "drop" };
  mod.pruneBytesFirst(box);
  if (box.x !== 1 || "junk" in box)
    fail("Uint8Array | IBox", "object member not pruned -> " + JSON.stringify(box));
}
`
