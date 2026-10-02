import typia from "typia";

// 1. the canonical all-optional union: no member has a unique required key
type Opt =
  | {
      a?: number;
    }
  | {
      b?: string;
    };
const isOpt = typia.createIs<Opt>();
const eqOpt = typia.compare.createEquals<Opt>();
const cloneOpt = typia.plain.createClone<Opt>();
// 2. a key shared by both members, still no required discriminant
type Shared =
  | {
      a?: number;
      c?: boolean;
    }
  | {
      b?: string;
      c?: boolean;
    };
const isShared = typia.createIs<Shared>();
const eqShared = typia.compare.createEquals<Shared>();
const cloneShared = typia.plain.createClone<Shared>();
// 3. three all-optional members
type Three =
  | {
      a?: number;
    }
  | {
      b?: string;
    }
  | {
      c?: boolean;
    };
const isThree = typia.createIs<Three>();
const eqThree = typia.compare.createEquals<Three>();
const cloneThree = typia.plain.createClone<Three>();
// 4. a member that declares nothing, so it matches every object
type WithEmpty =
  | {
      a?: number;
    }
  | {
      [key: string]: never;
    };
const isWithEmpty = typia.createIs<WithEmpty>();
const eqWithEmpty = typia.compare.createEquals<WithEmpty>();
// 5. a discriminable member alongside a non-discriminable pair
type Mixed =
  | {
      type: "a";
      x: number;
    }
  | {
      p?: number;
    }
  | {
      q?: string;
    };
const isMixed = typia.createIs<Mixed>();
const eqMixed = typia.compare.createEquals<Mixed>();
const cloneMixed = typia.plain.createClone<Mixed>();
// 6. a nested non-discriminable union property
type Nested = {
  wrap:
    | {
        a?: number;
      }
    | {
        b?: string;
      };
};
const isNested = typia.createIs<Nested>();
const eqNested = typia.compare.createEquals<Nested>();
const cloneNested = typia.plain.createClone<Nested>();
// 7. container-valued members: the array and tuple checks in the matcher are
//    what routes a value, since the two members share their only key
type Container =
  | {
      value?: number[];
    }
  | {
      value?: [number, string];
    };
const isContainer = typia.createIs<Container>();
const eqContainer = typia.compare.createEquals<Container>();
const cloneContainer = typia.plain.createClone<Container>();
// 8. a recursive non-discriminable union (matcher must not recurse forever at
//    generation time, and the comparator still receives its _vctx)
type Rec =
  | {
      child?: Rec;
      a?: number;
    }
  | {
      b?: string;
    };
const isRec = typia.createIs<Rec>();
const eqRec = typia.compare.createEquals<Rec>();
// 9. a native alongside a non-discriminable object union (notNatives guard)
type WithNative =
  | Date
  | {
      a?: number;
    }
  | {
      b?: string;
    };
const eqWithNative = typia.compare.createEquals<WithNative>();
// controls that must keep the discriminated / flat forms
const eqDisc = typia.compare.createEquals<
  | {
      type: "a";
      x: number;
    }
  | {
      type: "b";
      y: string;
    }
>();
const eqPrim = typia.compare.createEquals<string | number>();
const eqArrUnion = typia.compare.createEquals<number[] | string[]>();
const eqObj = typia.compare.createEquals<{
  a?: number;
  b?: string;
}>();
/**
 * Verifies non-discriminable union matching before equality.
 *
 * Runs the real native callbacks so correct emitted text cannot hide a runtime
 * routing, receiver, copy or comparison defect.
 *
 * 1. Produce the same typed public callbacks as the original regression.
 * 2. Execute its authored inputs and independent result assertions.
 * 3. Propagate every failed comparison to the shared suite runner.
 *
 * @evidence contracts/testing.md#behavioral-verification All-optional, shared-key, three-arm, empty-arm, mixed, nested, array/tuple, recursive and native cases retain their positive, negative and empty controls. Pairwise clone/is agreement is a correlated consistency check; literal anchors independently constrain the results.
 * @evidence contracts/testing.md#independent-expectations The retained literal expectations encode the authored type/value contract, not emitted-source patterns. Clone/is-derived rows only test agreement and cannot alone exclude a shared routing bug; literal positive and negative anchors remain.
 * @evidence contracts/testing.md#distinguishing-cases All-optional, shared-key, three-arm, empty-arm, mixed, nested, array/tuple, recursive and native cases retain their positive, negative and empty controls. Pairwise clone/is agreement is a correlated consistency check; literal anchors independently constrain the results.
 * @evidence contracts/testing.md#execution-ownership The matching exported composite is discovered by TestServant in test-typia-automated. Private typed producers and deliberately unchecked JavaScript-style runtime inputs preserve the original test boundary.
 * @evidence contracts/e2e.md#necessary-boundary Real typia public calls are transformed and their callbacks execute in Node. Go unit assertions on metadata or emitted text cannot detect a runtime result, receiver or mutation defect.
 * @evidence contracts/e2e.md#shared-execution This case reuses the suite's generated project and shared worker with other native composites; it starts no compiler project, subprocess or artifact installation.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation constructs its own sample inputs and observations. Cases that mutate arrays, objects or recursive graphs retain those values within that invocation, and do not cache verdicts. The suite owns and closes the worker.
 * @evidence contracts/e2e.md#preserved-coverage The original typed fixture, public call forms and runtime input/assertion population are retained here. No original runtime distinction is removed from this case. Execution is verified by the canonical suite run, not this comment.
 */
export const test_native_compare_nondiscriminable_union = (): void => {
  // Untyped callers intentionally exercise invalid inputs beyond static TypeScript acceptance.
  const mod: Record<string, any> = {
    isOpt,
    eqOpt,
    cloneOpt,
    isShared,
    eqShared,
    cloneShared,
    isThree,
    eqThree,
    cloneThree,
    isWithEmpty,
    eqWithEmpty,
    isMixed,
    eqMixed,
    cloneMixed,
    isNested,
    eqNested,
    cloneNested,
    isContainer,
    eqContainer,
    cloneContainer,
    isRec,
    eqRec,
    eqWithNative,
    eqDisc,
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
  const copy = (v: any) => JSON.parse(JSON.stringify(v));
  // Serialize a clone so that a key the resolved member declares but the value
  // omits stays visible: JSON.stringify drops an undefined-valued key, which would
  // make two members that declare different keys look alike.
  const shape = (v: any) =>
    JSON.stringify(v, (_key: any, value: any) =>
      value === undefined ? null : value,
    );
  // --- 1. the reported defect: {a?:number} | {b?:string} ---
  expect("opt a different", mod.eqOpt({ a: 1 }, { a: 2 }), false);
  expect("opt populated vs empty", mod.eqOpt({ a: 1 }, {}), false);
  expect("opt empty vs populated", mod.eqOpt({}, { a: 1 }), false);
  expect("opt cross member", mod.eqOpt({ a: 1 }, { b: "p" }), false);
  expect("opt identical", mod.eqOpt({ a: 1 }, { a: 1 }), true);
  expect("opt both empty", mod.eqOpt({}, {}), true);
  // both values resolve to the first member, under which "b" is not declared:
  // exactly what clone keeps, so equals must agree with clone rather than with
  // the raw literals.
  expect(
    "opt second-member payload follows clone",
    mod.eqOpt({ b: "p" }, { b: "q" }),
    JSON.stringify(mod.cloneOpt({ b: "p" })) ===
      JSON.stringify(mod.cloneOpt({ b: "q" })),
  );
  expect(
    "opt member resolution follows clone",
    mod.eqOpt({}, { a: "x" }),
    false,
  );
  expect(
    "opt invalid operand",
    mod.eqOpt({ a: "x", b: 1 }, { a: "x", b: 1 }),
    false,
  );
  // --- 2. shared optional key ---
  expect("shared c different", mod.eqShared({ c: true }, { c: false }), false);
  expect(
    "shared c identical",
    mod.eqShared({ a: 1, c: true }, { a: 1, c: true }),
    true,
  );
  expect(
    "shared a different",
    mod.eqShared({ a: 1, c: true }, { a: 2, c: true }),
    false,
  );
  expect("shared populated vs empty", mod.eqShared({ a: 1 }, {}), false);
  expect("shared c only vs empty", mod.eqShared({ c: true }, {}), false);
  // --- 3. three all-optional members ---
  expect("three a different", mod.eqThree({ a: 1 }, { a: 2 }), false);
  expect("three populated vs empty", mod.eqThree({ a: 1 }, {}), false);
  expect("three identical", mod.eqThree({ a: 1 }, { a: 1 }), true);
  expect("three cross member", mod.eqThree({ a: 1 }, { c: true }), false);
  // --- 4. member matching everything ---
  expect("withempty a different", mod.eqWithEmpty({ a: 1 }, { a: 2 }), false);
  expect("withempty populated vs empty", mod.eqWithEmpty({ a: 1 }, {}), false);
  expect("withempty identical", mod.eqWithEmpty({ a: 1 }, { a: 1 }), true);
  // --- 5. discriminable member beside a non-discriminable pair ---
  expect(
    "mixed disc different",
    mod.eqMixed({ type: "a", x: 1 }, { type: "a", x: 2 }),
    false,
  );
  expect(
    "mixed disc identical",
    mod.eqMixed({ type: "a", x: 1 }, { type: "a", x: 1 }),
    true,
  );
  expect(
    "mixed disc vs optional",
    mod.eqMixed({ type: "a", x: 1 }, { p: 1 }),
    false,
  );
  expect("mixed optional different", mod.eqMixed({ p: 1 }, { p: 2 }), false);
  expect("mixed optional vs empty", mod.eqMixed({ p: 1 }, {}), false);
  expect("mixed optional identical", mod.eqMixed({ p: 1 }, { p: 1 }), true);
  // --- 6. nested non-discriminable union property ---
  expect(
    "nested inner different",
    mod.eqNested({ wrap: { a: 1 } }, { wrap: { a: 2 } }),
    false,
  );
  expect(
    "nested inner populated vs empty",
    mod.eqNested({ wrap: { a: 1 } }, { wrap: {} }),
    false,
  );
  expect(
    "nested inner identical",
    mod.eqNested({ wrap: { a: 1 } }, { wrap: { a: 1 } }),
    true,
  );
  expect(
    "nested cross member",
    mod.eqNested({ wrap: { a: 1 } }, { wrap: { b: "p" } }),
    false,
  );
  // --- 7. container-valued members ---
  expect(
    "container array different",
    mod.eqContainer({ value: [1, 2] }, { value: [1, 3] }),
    false,
  );
  expect(
    "container array identical",
    mod.eqContainer({ value: [1, 2] }, { value: [1, 2] }),
    true,
  );
  expect(
    "container array vs empty",
    mod.eqContainer({ value: [1] }, {}),
    false,
  );
  expect(
    "container tuple different",
    mod.eqContainer({ value: [1, "p"] }, { value: [1, "q"] }),
    false,
  );
  expect(
    "container tuple identical",
    mod.eqContainer({ value: [1, "p"] }, { value: [1, "p"] }),
    true,
  );
  expect(
    "container cross member",
    mod.eqContainer({ value: [1] }, { value: [1, "p"] }),
    false,
  );
  // --- 8. recursive non-discriminable union ---
  const mkRec = () => ({ a: 1, child: { a: 2, child: { a: 3 } } });
  expect("rec identical", mod.eqRec(mkRec(), mkRec()), true);
  expect(
    "rec deep different",
    mod.eqRec(mkRec(), { a: 1, child: { a: 2, child: { a: 9 } } }),
    false,
  );
  expect(
    "rec depth different",
    mod.eqRec(mkRec(), { a: 1, child: { a: 2 } }),
    false,
  );
  expect("rec populated vs empty", mod.eqRec(mkRec(), {}), false);
  // --- 9. native beside the non-discriminable union ---
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
    "withnative date vs object",
    mod.eqWithNative(new Date(0), { a: 1 }),
    false,
  );
  expect(
    "withnative object different",
    mod.eqWithNative({ a: 1 }, { a: 2 }),
    false,
  );
  expect(
    "withnative object identical",
    mod.eqWithNative({ a: 1 }, { a: 1 }),
    true,
  );
  expect(
    "withnative populated vs empty",
    mod.eqWithNative({ a: 1 }, {}),
    false,
  );
  // --- controls: the discriminated path and the non-union paths are untouched ---
  expect(
    "disc different",
    mod.eqDisc({ type: "a", x: 1 }, { type: "a", x: 2 }),
    false,
  );
  expect(
    "disc identical",
    mod.eqDisc({ type: "a", x: 1 }, { type: "a", x: 1 }),
    true,
  );
  expect(
    "disc cross arm",
    mod.eqDisc({ type: "a", x: 1 }, { type: "b", y: "p" }),
    false,
  );
  expect("prim different", mod.eqPrim(1, 2), false);
  expect("prim identical", mod.eqPrim("x", "x"), true);
  expect("arrunion different", mod.eqArrUnion([1, 2], [1, 3]), false);
  expect("arrunion identical", mod.eqArrUnion([1, 2], [1, 2]), true);
  expect("obj optional different", mod.eqObj({ a: 1 }, { a: 2 }), false);
  expect("obj optional vs empty", mod.eqObj({ a: 1 }, {}), false);
  expect("obj optional identical", mod.eqObj({ a: 1 }, { a: 1 }), true);
  // --- equals agrees with is and with the member clone resolves to ---
  // For every ordered pair of samples (distinct references throughout):
  //   * an operand is rejects is never equal to anything, and
  //   * two is-valid operands are equal exactly when their clones are, which is
  //     the statement "both resolved to the same member and agree on everything
  //     that member declares".
  const agree: any = (
    label: any,
    eq: any,
    is: any,
    clone: any,
    samples: any,
  ) => {
    for (const a of samples)
      for (const b of samples) {
        const x: any = copy(a);
        const y: any = copy(b);
        const suffix: any = " " + JSON.stringify(a) + " | " + JSON.stringify(b);
        if (is(x) === false || is(y) === false) {
          expect(
            label + " invalid operand not equal" + suffix,
            eq(x, y),
            false,
          );
          continue;
        }
        expect(
          label + " equals agrees with clone" + suffix,
          eq(x, y),
          shape(clone(x)) === shape(clone(y)),
        );
      }
  };
  agree("opt", mod.eqOpt, mod.isOpt, mod.cloneOpt, [
    {},
    { a: 1 },
    { a: 2 },
    { b: "p" },
    { b: "q" },
    { a: 1, b: "p" },
    { a: "x", b: 1 },
    { a: "x" },
  ]);
  agree("shared", mod.eqShared, mod.isShared, mod.cloneShared, [
    {},
    { a: 1 },
    { c: true },
    { c: false },
    { a: 1, c: true },
    { b: "p" },
    { b: "p", c: true },
    { a: "x", b: 1 },
  ]);
  agree("three", mod.eqThree, mod.isThree, mod.cloneThree, [
    {},
    { a: 1 },
    { b: "p" },
    { c: true },
    { c: false },
    { a: 1, c: true },
    { a: "x", b: 1, c: 2 },
  ]);
  agree("mixed", mod.eqMixed, mod.isMixed, mod.cloneMixed, [
    {},
    { type: "a", x: 1 },
    { type: "a", x: 2 },
    { p: 1 },
    { p: 2 },
    { q: "z" },
  ]);
  agree("nested", mod.eqNested, mod.isNested, mod.cloneNested, [
    { wrap: {} },
    { wrap: { a: 1 } },
    { wrap: { a: 2 } },
    { wrap: { b: "p" } },
  ]);
  agree("container", mod.eqContainer, mod.isContainer, mod.cloneContainer, [
    {},
    { value: [] },
    { value: [1] },
    { value: [1, 2] },
    { value: [1, "p"] },
    { value: [2, "p"] },
  ]);
  if (failures > 0) {
    throw new Error(failures + " assertion(s) failed");
  }
};
