import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies functional wrappers accept every call their function accepts.
 *
 * The wrappers reused each parameter node and validated its written annotation,
 * forwarding the arguments as one array. So an optional `y?: string` was
 * validated as a required `string` and an omitted or `undefined` argument was
 * rejected, a rest parameter reached the function as one array (`sum(1, 2, 3)`
 * returned `"102,3"`), a rest tuple with an optional element rejected a legal
 * call, and a destructured parameter or one typed by its default made the
 * transform panic (#2461).
 *
 * 1. Call each spelling through the `is`, `assert`, and `validate` variants of
 *    `Function` and `Parameters`, and `isReturn`, and compare with a direct
 *    call.
 * 2. Keep a destructured parameter apart from a parameter named like its
 *    positional stand-in, and let a later default read a name the pattern
 *    binds.
 * 3. Keep rejecting a wrong optional argument, rest element, rest tuple element,
 *    array pattern element, defaulted argument, and destructured property.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.functional.isFunction, typia.functional.assertFunction, typia.functional.validateFunction is evaluated by the native host on the types declared in this case and the result is checked by 8 assertions (wrong optional; wrong default beside a pattern; wrong array pattern; wrong rest tuple; wrong inferred; wrong rest element). The case documents its purpose as: Verifies functional wrappers accept every call their function accepts.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: The wrappers reused each parameter node and validated its written annotation, forwarding the arguments as one array. So an optional `y?: string` was validated as a required `string` and an omitted or `undefined` argument was rejected, a rest parameter reached the function as one array (`sum(1, 2, 3)` returned `"102,3"`), a rest tuple with an optional element rejected a legal call, and a destructured parameter or one typed by its default made the transform panic (#2461). Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (wrong optional; wrong default beside a pattern; wrong array pattern; wrong rest tuple; wrong inferred; wrong rest element) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_functional_parameter_spellings is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_functional_parameter_spellings = (): void => {
  const optional = (x: number, y?: string): number => x + (y?.length ?? 0);
  const undefinedOnly = (x?: number): number => x ?? -1;
  const rest = (x: number, ...ys: number[]): number =>
    ys.reduce((a, b) => a + b, x);
  const tuple = (...args: [number, string?]): number =>
    args[0] + (args[1]?.length ?? 0);
  const object = ({ a, b }: { a: number; b: string }): number => a + b.length;
  const array = ([a, b]: [number, string]): number => a + b.length;
  const inferred = (x = 1): number => x * 2;
  const collide = ({ a }: { a: number }, __param0: number): number =>
    a * 10 + __param0;
  const reference = ({ a }: { a: number }, b = a): number => a + b;

  const cases: Array<[string, () => unknown, unknown]> = [
    ["optional omitted", () => typia.functional.isFunction(optional)(1), 1],
    ["optional given", () => typia.functional.isFunction(optional)(1, "ab"), 3],
    ["optional assert", () => typia.functional.assertFunction(optional)(1), 1],
    [
      "optional validate",
      () => typia.functional.validateFunction(optional)(1),
      { success: true, data: 1 },
    ],
    [
      "optional isParameters",
      () => typia.functional.isParameters(optional)(1),
      1,
    ],
    [
      "explicit undefined",
      () => typia.functional.isFunction(undefinedOnly)(undefined),
      -1,
    ],
    ["rest", () => typia.functional.isFunction(rest)(1, 2, 3), 6],
    ["rest none", () => typia.functional.isFunction(rest)(1), 1],
    [
      "rest assertParameters",
      () => typia.functional.assertParameters(rest)(1, 2, 3),
      6,
    ],
    [
      "rest validateParameters",
      () => typia.functional.validateParameters(rest)(1, 2, 3),
      { success: true, data: 6, errors: [] },
    ],
    ["rest isReturn", () => typia.functional.isReturn(rest)(1, 2, 3), 6],
    ["rest tuple", () => typia.functional.isFunction(tuple)(1, "xy"), 3],
    ["rest tuple short", () => typia.functional.isFunction(tuple)(1), 1],
    [
      "object pattern",
      () => typia.functional.isFunction(object)({ a: 1, b: "xy" }),
      3,
    ],
    [
      "array pattern",
      () => typia.functional.assertFunction(array)([1, "xy"]),
      3,
    ],
    ["inferred default", () => typia.functional.isFunction(inferred)(), 2],
    ["inferred given", () => typia.functional.isFunction(inferred)(4), 8],
    [
      "pattern beside its positional name",
      () => typia.functional.isFunction(collide)({ a: 1 }, 2),
      12,
    ],
    [
      "default reading a pattern",
      () => typia.functional.isFunction(reference)({ a: 1 }),
      2,
    ],
    [
      "default reading a pattern, given",
      () => typia.functional.assertFunction(reference)({ a: 1 }, 5),
      6,
    ],
  ];
  for (const [title, call, expected] of cases)
    TestEquality.equals(title, call(), expected);

  TestEquality.equals(
    "wrong optional",
    typia.functional.isFunction(optional)(1, 3 as any),
    null,
  );
  TestEquality.equals(
    "wrong default beside a pattern",
    typia.functional.isFunction(reference)({ a: 1 }, "x" as any),
    null,
  );
  TestEquality.equals(
    "wrong array pattern",
    typia.functional.isFunction(array)([1, 2] as any),
    null,
  );
  TestEquality.equals(
    "wrong rest tuple",
    typia.functional.isFunction(tuple)(1, 2 as any),
    null,
  );
  TestEquality.equals(
    "wrong inferred",
    typia.functional.isFunction(inferred)("a" as any),
    null,
  );
  const paths = (result: typia.IValidation<unknown>): string[] =>
    result.success ? [] : result.errors.map((error) => error.path);
  TestEquality.equals(
    "wrong rest element",
    paths(typia.functional.validateParameters(rest)(1, 2, "x" as any)),
    ["$input.parameters[1][1]"],
  );
  TestEquality.equals(
    "wrong destructured property",
    paths(
      typia.functional.validateFunction(object)({ a: "1", b: "xy" } as any),
    ),
    ["$input.parameters[0].a"],
  );
};
