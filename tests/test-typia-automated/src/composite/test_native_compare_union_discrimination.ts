import typia from "typia";

// 1. discriminated union
type Disc =
  | {
      type: "a";
      x: number;
    }
  | {
      type: "b";
      y: string;
    };
const isDisc = typia.createIs<Disc>();
const eqDisc = typia.compare.createEquals<Disc>();
// 2. non-discriminated union with disjoint keys
type Disjoint =
  | {
      x: number;
    }
  | {
      y: string;
    };
const isDisjoint = typia.createIs<Disjoint>();
const eqDisjoint = typia.compare.createEquals<Disjoint>();
// 3. narrower-masks-wider
type Mask =
  | {
      a: number;
    }
  | {
      a: number;
      b: string;
    };
const isMask = typia.createIs<Mask>();
const eqMask = typia.compare.createEquals<Mask>();
// 4. three-member discriminated union
type Three =
  | {
      type: "a";
      x: number;
    }
  | {
      type: "b";
      y: string;
    }
  | {
      type: "c";
      z: boolean;
    };
const isThree = typia.createIs<Three>();
const eqThree = typia.compare.createEquals<Three>();
// 5. a member whose payload is itself an array / element union
type ArrMember =
  | {
      kind: "multi";
      values: (number | string)[];
    }
  | {
      kind: "single";
      value: number;
    };
const isArrMember = typia.createIs<ArrMember>();
const eqArrMember = typia.compare.createEquals<ArrMember>();
// 6. nested object-union property
type Nested = {
  wrap:
    | {
        type: "a";
        x: number;
      }
    | {
        type: "b";
        y: string;
      };
};
const isNested = typia.createIs<Nested>();
const eqNested = typia.compare.createEquals<Nested>();
// 7. recursive discriminated union (exercises _vctx capture through the IIFE)
type Tree =
  | {
      type: "leaf";
      value: number;
    }
  | {
      type: "node";
      left: Tree;
      right: Tree;
    };
const isTree = typia.createIs<Tree>();
const eqTree = typia.compare.createEquals<Tree>();
// 8. native alongside a discriminated object union (notNatives guard + ladder)
type WithNative =
  | Date
  | {
      kind: "a";
      x: number;
    }
  | {
      kind: "b";
      y: string;
    };
const eqWithNative = typia.compare.createEquals<WithNative>();
// control: a native unioned with a SINGLE object keeps the flat guarded branch
type DateOrStamp =
  | Date
  | {
      timestamp: number;
    };
const eqDateStamp = typia.compare.createEquals<DateOrStamp>();
// controls: primitive union, array union, non-union object
const eqPrim = typia.compare.createEquals<string | number>();
const eqArrUnion = typia.compare.createEquals<number[] | string[]>();
const eqObj = typia.compare.createEquals<{
  a: number;
  b: string;
}>();
/**
 * Verifies union branch selection preserves distinguishing payloads.
 *
 * Runs the real native callbacks so correct emitted text cannot hide a runtime
 * routing, receiver, copy or comparison defect.
 *
 * 1. Produce the same typed public callbacks as the original regression.
 * 2. Execute its authored inputs and independent result assertions.
 * 3. Propagate every failed comparison to the shared suite runner.
 *
 * @evidence contracts/testing.md#behavioral-verification Discriminated, disjoint, masking, three-arm, container, nested, recursive and native cases retain literal same/different expectations; ordered sample pairs additionally check equality against validity and independently serialized input.
 * @evidence contracts/testing.md#independent-expectations The retained literal expectations encode the authored type/value contract, not emitted-source patterns. Type-level equality assertions, where present, remain compiled independently of runtime comparisons.
 * @evidence contracts/testing.md#distinguishing-cases Discriminated, disjoint, masking, three-arm, container, nested, recursive and native cases retain literal same/different expectations; ordered sample pairs additionally check equality against validity and independently serialized input.
 * @evidence contracts/testing.md#execution-ownership The matching exported composite is discovered by TestServant in test-typia-automated. Private typed producers and deliberately unchecked JavaScript-style runtime inputs preserve the original test boundary.
 * @evidence contracts/e2e.md#necessary-boundary Real typia public calls are transformed and their callbacks execute in Node. Go unit assertions on metadata or emitted text cannot detect a runtime result, receiver or mutation defect.
 * @evidence contracts/e2e.md#shared-execution This case reuses the suite's generated project and shared worker with other native composites; it starts no compiler project, subprocess or artifact installation.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation constructs its own sample inputs and observations. Cases that mutate arrays, objects or recursive graphs retain those values within that invocation, and do not cache verdicts. The suite owns and closes the worker.
 * @evidence contracts/e2e.md#preserved-coverage The original typed fixture, public call forms and runtime input/assertion population are retained here. No original runtime distinction is removed from this case. Execution is verified by the canonical suite run, not this comment.
 */
export const test_native_compare_union_discrimination = (): void => {
  // Untyped callers intentionally exercise invalid inputs beyond static TypeScript acceptance.
  const mod: Record<string, any> = {
    isDisc,
    eqDisc,
    isDisjoint,
    eqDisjoint,
    isMask,
    eqMask,
    isThree,
    eqThree,
    isArrMember,
    eqArrMember,
    isNested,
    eqNested,
    isTree,
    eqTree,
    eqWithNative,
    eqDateStamp,
    eqPrim,
    eqArrUnion,
    eqObj,
  };
  let failures = 0;
  const expect = (label: string, actual: unknown, expected: unknown) => {
    if (actual !== expected) {
      console.log(
        "FAIL " + label + ": expected " + expected + ", got " + actual,
      );
      failures++;
    }
  };
  // --- 1. discriminated union: {type:"a";x} | {type:"b";y} ---
  expect(
    "disc a distinct-different",
    mod.eqDisc({ type: "a", x: 1 }, { type: "a", x: 2 }),
    false,
  );
  expect(
    "disc b distinct-different",
    mod.eqDisc({ type: "b", y: "p" }, { type: "b", y: "q" }),
    false,
  );
  expect(
    "disc a distinct-identical",
    mod.eqDisc({ type: "a", x: 1 }, { type: "a", x: 1 }),
    true,
  );
  expect(
    "disc b distinct-identical",
    mod.eqDisc({ type: "b", y: "p" }, { type: "b", y: "p" }),
    true,
  );
  expect(
    "disc cross-arm a vs b",
    mod.eqDisc({ type: "a", x: 1 }, { type: "b", y: "p" }),
    false,
  );
  // --- 2. non-discriminated disjoint keys: {x} | {y} ---
  expect(
    "disjoint x distinct-different",
    mod.eqDisjoint({ x: 1 }, { x: 2 }),
    false,
  );
  expect(
    "disjoint y distinct-different",
    mod.eqDisjoint({ y: "p" }, { y: "q" }),
    false,
  );
  expect(
    "disjoint x distinct-identical",
    mod.eqDisjoint({ x: 1 }, { x: 1 }),
    true,
  );
  expect(
    "disjoint cross-arm x vs y",
    mod.eqDisjoint({ x: 1 }, { y: "p" }),
    false,
  );
  // --- 3. narrower-masks-wider: {a} | {a,b} ---
  expect(
    "mask wider distinct-different",
    mod.eqMask({ a: 1, b: "x" }, { a: 1, b: "y" }),
    false,
  );
  expect(
    "mask narrower distinct-identical",
    mod.eqMask({ a: 1 }, { a: 1 }),
    true,
  );
  expect(
    "mask wider distinct-identical",
    mod.eqMask({ a: 1, b: "x" }, { a: 1, b: "x" }),
    true,
  );
  expect(
    "mask narrower vs wider",
    mod.eqMask({ a: 1 }, { a: 1, b: "x" }),
    false,
  );
  // --- 4. three-member ---
  expect(
    "three a-different",
    mod.eqThree({ type: "a", x: 1 }, { type: "a", x: 2 }),
    false,
  );
  expect(
    "three b-different",
    mod.eqThree({ type: "b", y: "p" }, { type: "b", y: "q" }),
    false,
  );
  expect(
    "three c-different",
    mod.eqThree({ type: "c", z: true }, { type: "c", z: false }),
    false,
  );
  expect(
    "three c-identical",
    mod.eqThree({ type: "c", z: true }, { type: "c", z: true }),
    true,
  );
  expect(
    "three cross a vs c",
    mod.eqThree({ type: "a", x: 1 }, { type: "c", z: true }),
    false,
  );
  // --- 5. array/element-union member ---
  expect(
    "arrmember multi different length",
    mod.eqArrMember(
      { kind: "multi", values: [1, 2] },
      { kind: "multi", values: [1] },
    ),
    false,
  );
  expect(
    "arrmember multi different elem",
    mod.eqArrMember(
      { kind: "multi", values: [1, "a"] },
      { kind: "multi", values: [1, "b"] },
    ),
    false,
  );
  expect(
    "arrmember multi identical",
    mod.eqArrMember(
      { kind: "multi", values: [1, "a"] },
      { kind: "multi", values: [1, "a"] },
    ),
    true,
  );
  expect(
    "arrmember single different",
    mod.eqArrMember({ kind: "single", value: 1 }, { kind: "single", value: 2 }),
    false,
  );
  expect(
    "arrmember cross multi vs single",
    mod.eqArrMember(
      { kind: "multi", values: [1] },
      { kind: "single", value: 1 },
    ),
    false,
  );
  // --- 6. nested object-union property ---
  expect(
    "nested inner different",
    mod.eqNested({ wrap: { type: "a", x: 1 } }, { wrap: { type: "a", x: 2 } }),
    false,
  );
  expect(
    "nested inner identical",
    mod.eqNested({ wrap: { type: "a", x: 1 } }, { wrap: { type: "a", x: 1 } }),
    true,
  );
  expect(
    "nested cross arm",
    mod.eqNested(
      { wrap: { type: "a", x: 1 } },
      { wrap: { type: "b", y: "p" } },
    ),
    false,
  );
  // --- controls: primitive / array unions, non-union object ---
  expect("prim number-different", mod.eqPrim(1, 2), false);
  expect("prim string-identical", mod.eqPrim("x", "x"), true);
  expect("prim cross string vs number", mod.eqPrim("1", 1), false);
  expect("arrunion number-different", mod.eqArrUnion([1, 2], [1, 3]), false);
  expect("arrunion number-identical", mod.eqArrUnion([1, 2], [1, 2]), true);
  expect("arrunion string-identical", mod.eqArrUnion(["a"], ["a"]), true);
  expect("obj different", mod.eqObj({ a: 1, b: "x" }, { a: 1, b: "y" }), false);
  expect("obj identical", mod.eqObj({ a: 1, b: "x" }, { a: 1, b: "x" }), true);
  // --- recursive discriminated union (distinct references throughout) ---
  const mkTree = () => ({
    type: "node",
    left: { type: "leaf", value: 1 },
    right: { type: "leaf", value: 2 },
  });
  expect("tree identical", mod.eqTree(mkTree(), mkTree()), true);
  expect(
    "tree leaf value differs",
    mod.eqTree({ type: "leaf", value: 1 }, { type: "leaf", value: 2 }),
    false,
  );
  expect(
    "tree deep differs",
    mod.eqTree(mkTree(), {
      type: "node",
      left: { type: "leaf", value: 1 },
      right: { type: "leaf", value: 9 },
    }),
    false,
  );
  expect(
    "tree leaf vs node",
    mod.eqTree({ type: "leaf", value: 1 }, mkTree()),
    false,
  );
  expect(
    "tree shape differs",
    mod.eqTree(
      {
        type: "node",
        left: { type: "leaf", value: 1 },
        right: { type: "leaf", value: 2 },
      },
      {
        type: "node",
        left: { type: "leaf", value: 1 },
        right: {
          type: "node",
          left: { type: "leaf", value: 2 },
          right: { type: "leaf", value: 3 },
        },
      },
    ),
    false,
  );
  // --- native alongside a discriminated object union ---
  expect(
    "withnative same date",
    mod.eqWithNative(new Date(0), new Date(0)),
    true,
  );
  expect(
    "withnative diff date",
    mod.eqWithNative(new Date(0), new Date(5000)),
    false,
  );
  expect(
    "withnative obj a different",
    mod.eqWithNative({ kind: "a", x: 1 }, { kind: "a", x: 2 }),
    false,
  );
  expect(
    "withnative obj a identical",
    mod.eqWithNative({ kind: "a", x: 1 }, { kind: "a", x: 1 }),
    true,
  );
  expect(
    "withnative date vs obj",
    mod.eqWithNative(new Date(0), { kind: "a", x: 1 }),
    false,
  );
  expect(
    "withnative cross arm",
    mod.eqWithNative({ kind: "a", x: 1 }, { kind: "b", y: "p" }),
    false,
  );
  // --- native unioned with a single object (control) ---
  expect(
    "datestamp same date",
    mod.eqDateStamp(new Date(0), new Date(0)),
    true,
  );
  expect(
    "datestamp diff date",
    mod.eqDateStamp(new Date(0), new Date(5000)),
    false,
  );
  expect(
    "datestamp stamp identical",
    mod.eqDateStamp({ timestamp: 5 }, { timestamp: 5 }),
    true,
  );
  expect(
    "datestamp stamp different",
    mod.eqDateStamp({ timestamp: 5 }, { timestamp: 9 }),
    false,
  );
  expect(
    "datestamp date vs stamp",
    mod.eqDateStamp(new Date(0), { timestamp: 0 }),
    false,
  );
  // --- equals must imply is on both operands (agree with is) ---
  const discSamples: any = [
    { type: "a", x: 1 },
    { type: "a", x: 2 },
    { type: "b", y: "p" },
    { type: "b", y: "q" },
  ];
  for (const a of discSamples)
    for (const b of discSamples) {
      // fresh distinct references
      const x: any = JSON.parse(JSON.stringify(a));
      const y: any = JSON.parse(JSON.stringify(b));
      if (mod.eqDisc(x, y)) {
        expect("agree-is disc lhs " + JSON.stringify(a), mod.isDisc(x), true);
        expect("agree-is disc rhs " + JSON.stringify(b), mod.isDisc(y), true);
        // equal implies structurally same JSON
        expect(
          "equal implies same json " +
            JSON.stringify(a) +
            "|" +
            JSON.stringify(b),
          JSON.stringify(x) === JSON.stringify(y),
          true,
        );
      }
    }
  const maskSamples: any = [
    { a: 1 },
    { a: 1, b: "x" },
    { a: 1, b: "y" },
    { a: 2 },
  ];
  for (const a of maskSamples)
    for (const b of maskSamples) {
      const x: any = JSON.parse(JSON.stringify(a));
      const y: any = JSON.parse(JSON.stringify(b));
      if (mod.eqMask(x, y)) {
        expect(
          "agree-is mask same json " +
            JSON.stringify(a) +
            "|" +
            JSON.stringify(b),
          JSON.stringify(x) === JSON.stringify(y),
          true,
        );
      }
    }
  if (failures > 0) {
    throw new Error(failures + " assertion(s) failed");
  }
};
