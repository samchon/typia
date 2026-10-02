import typia from "typia";

interface IBox {
  x: number;
}
interface IElem {
  y: number;
}

const pruneBytesFirst = typia.plain.createPrune<Uint8Array | IBox>();
const pruneBytesLast = typia.plain.createPrune<IBox | Uint8Array>();
const pruneDateFirst = typia.plain.createPrune<Date | IBox>();
const pruneDateLast = typia.plain.createPrune<IBox | Date>();
const pruneMap = typia.plain.createPrune<Map<string, number> | IBox>();
const pruneSet = typia.plain.createPrune<IBox | Set<number>>();
const pruneRegExp = typia.plain.createPrune<RegExp | IBox>();
const pruneArray = typia.plain.createPrune<IElem[] | IBox>();
const pruneTuple = typia.plain.createPrune<IBox | [IElem, IElem]>();
const fixture = {
  pruneBytesFirst,
  pruneBytesLast,
  pruneDateFirst,
  pruneDateLast,
  pruneMap,
  pruneSet,
  pruneRegExp,
  pruneArray,
  pruneTuple,
};

/**
 * Verifies plain prune union object overmatch in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original
 * plainPruneUnionObjectOvermatchSource declarations; the former
 * plainPruneUnionObjectOvermatchRuntimeRunner observations execute in the
 * existing automated worker. This detects a generated program whose output
 * compiles but changes these runtime decisions: the literal runtime assertions
 * below.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from plainPruneUnionObjectOvermatchRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations The input's Date time, Map/Set entries, RegExp source/flags, own marker state and array slots establish content that pruning must preserve. Plain object extras must be removed, so accepting all objects or deleting all own keys fails opposite controls.
 * @evidence contracts/testing.md#distinguishing-cases Preserves the literal runtime assertions below; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_plain_prune_union_object_overmatch in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed plainPruneUnionObjectOvermatchSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/plain_prune_union_object_overmatch_transform_test.go plainPruneUnionObjectOvermatchRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_plain_prune_union_object_overmatch = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const fail: any = (label: any, detail: any): any => {
    throw new Error(label + ": " + detail);
  };

  // 1. A typed array must survive prune untouched (the buggy object arm throws
  //    "Cannot delete property '0'" while deleting its integer-indexed slots).
  for (const [label, prune] of [
    ["Uint8Array | IBox", mod.pruneBytesFirst],
    ["IBox | Uint8Array", mod.pruneBytesLast],
  ]) {
    const bytes: any = new Uint8Array([1, 2, 3]);
    prune(bytes);
    if (
      !(bytes instanceof Uint8Array) ||
      bytes.length !== 3 ||
      bytes[0] !== 1 ||
      bytes[1] !== 2 ||
      bytes[2] !== 3
    )
      fail(
        label,
        "typed array corrupted -> " + JSON.stringify(Array.from(bytes)),
      );
  }

  // 2. A Date must keep its time and its own state; the object arm strips own keys.
  for (const [label, prune] of [
    ["Date | IBox", mod.pruneDateFirst],
    ["IBox | Date", mod.pruneDateLast],
  ]) {
    const date: any = new Date(1000);
    date.tag = "keep";
    prune(date);
    if (!(date instanceof Date) || date.getTime() !== 1000)
      fail(label, "Date time corrupted -> " + date.getTime());
    if (date.tag !== "keep") fail(label, "Date own property stripped");
  }

  // 3. A Map / Set must keep their contents and own state.
  {
    const map: any = new Map([["a", 1]]);
    (map as any).tag = "keep";
    mod.pruneMap(map);
    if (
      !(map instanceof Map) ||
      map.size !== 1 ||
      map.get("a") !== 1 ||
      (map as any).tag !== "keep"
    )
      fail("Map<string,number> | IBox", "Map corrupted");
  }
  {
    const set: any = new Set([7]);
    (set as any).tag = "keep";
    mod.pruneSet(set);
    if (
      !(set instanceof Set) ||
      set.size !== 1 ||
      set.has(7) === false ||
      (set as any).tag !== "keep"
    )
      fail("IBox | Set<number>", "Set corrupted");
  }

  // 4. A RegExp with equal source but its own state must survive.
  {
    const re: any = /abc/gi;
    (re as any).tag = "keep";
    mod.pruneRegExp(re);
    if (
      !(re instanceof RegExp) ||
      re.source !== "abc" ||
      re.flags !== "gi" ||
      (re as any).tag !== "keep"
    )
      fail("RegExp | IBox", "RegExp corrupted");
  }

  // 5. A plain array must be pruned element-by-element, not deleted to holes.
  {
    const arr: any = [
      { y: 1, extra: 2 },
      { y: 3, extra: 4 },
    ];
    mod.pruneArray(arr);
    if (!Array.isArray(arr) || arr.length !== 2)
      fail("IElem[] | IBox", "array shape corrupted -> " + JSON.stringify(arr));
    if (arr[0] === undefined || arr[1] === undefined)
      fail("IElem[] | IBox", "array slot deleted -> " + JSON.stringify(arr));
    if (
      arr[0].y !== 1 ||
      arr[1].y !== 3 ||
      "extra" in arr[0] ||
      "extra" in arr[1]
    )
      fail(
        "IElem[] | IBox",
        "array elements not pruned as objects -> " + JSON.stringify(arr),
      );
  }

  // 6. An object∪tuple must prune the tuple positionally, not delete its slots.
  {
    const tuple: any = [
      { y: 1, extra: 2 },
      { y: 3, extra: 4 },
    ];
    mod.pruneTuple(tuple);
    if (
      !Array.isArray(tuple) ||
      tuple.length !== 2 ||
      tuple[0] === undefined ||
      tuple[1] === undefined
    )
      fail(
        "IBox | [IElem, IElem]",
        "tuple slot deleted -> " + JSON.stringify(tuple),
      );
    if (
      tuple[0].y !== 1 ||
      tuple[1].y !== 3 ||
      "extra" in tuple[0] ||
      "extra" in tuple[1]
    )
      fail(
        "IBox | [IElem, IElem]",
        "tuple elements not pruned -> " + JSON.stringify(tuple),
      );
  }

  // 7. The object arm must still prune an ordinary object member (nothing lost).
  {
    const box: any = { x: 1, junk: "drop" };
    mod.pruneBytesFirst(box);
    if (box.x !== 1 || "junk" in box)
      fail(
        "Uint8Array | IBox",
        "object member not pruned -> " + JSON.stringify(box),
      );
  }
};
