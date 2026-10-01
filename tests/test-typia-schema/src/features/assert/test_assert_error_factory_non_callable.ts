import { TestEquality } from "@typia/template/equality";
import typia, { TypeGuardError } from "typia";

interface IMember {
  id: string;
  age: number;
}

/**
 * Verifies a non-callable error factory still raises TypeGuardError.
 *
 * The function a `create*Assert*` factory returns really takes a second
 * `errorFactory` parameter, so `rows.map(assertMember)` fills it with the
 * element index. `_assertGuard` used to accept any truthy value there and call
 * it, which reported `factory is not a function` for every index except the
 * falsy `0`. The declaration now rejects that hand-off at compile time, but
 * builds compiled against an already-published declaration still make the call,
 * so the runtime helper is what has to absorb it.
 *
 * 1. Drive a created assert function through `Array#map`, which is what puts the
 *    index in the `errorFactory` position.
 * 2. Require a TypeGuardError naming the real failure at index 0, 1 and 2.
 * 3. Pin the same fallback when a create-time factory was configured, and confirm
 *    that factory still wins for an ordinary single-argument call.
 *
 * @evidence contracts/testing.md#behavioral-verification the adapter or utility under test is called directly on inputs built in this case and the result is checked by 9 assertions (valid elements pass; index … method; index … path; index … expected; configured factory message). The case documents its purpose as: Verifies a non-callable error factory still raises TypeGuardError.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: The function a `create*Assert*` factory returns really takes a second `errorFactory` parameter, so `rows.map(assertMember)` fills it with the element index. `_assertGuard` used to accept any truthy value there and call it, which reported `factory is not a function` for every index except the falsy `0`. The declaration now rejects that hand-off at compile time, but builds compiled against an already-published declaration still make the call, so the runtime helper is what has to absorb it. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (valid elements pass; index … method; index … path; index … expected; configured factory message) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_assert_error_factory_non_callable is the exported entry; this case calls no typia producer, so it needs no native host and runs here only because the workspace has no separate plugin-free unit population, which is a recorded departure from the unit and boundary separation.
 */
export const test_assert_error_factory_non_callable = (): void => {
  // The cast is the point: it reproduces what the pre-fix declaration allowed
  // without a cast, which is exactly the code a published release compiled.
  const assertMember = typia.createAssert<IMember>() as unknown as (
    input: unknown,
    index: number,
  ) => IMember;

  const valid: IMember[] = [
    { id: "robin", age: 30 },
    { id: "sasha", age: 31 },
    { id: "kim", age: 32 },
  ];
  TestEquality.equals("valid elements pass", valid, valid.map(assertMember));

  for (const index of [0, 1, 2]) {
    const rows: unknown[] = valid.slice(0, index);
    rows.push({ id: "robin" });
    const error: unknown = capture(() => rows.map(assertMember));
    if (error instanceof TypeGuardError === false)
      throw new Error(
        `Expected TypeGuardError at index ${index}, got ${String(error)}.`,
      );
    TestEquality.equals(
      `index ${index} method`,
      "typia.createAssert",
      error.method,
    );
    TestEquality.equals(`index ${index} path`, "$input.age", error.path);
    TestEquality.equals(`index ${index} expected`, "number", error.expected);
  }

  // A configured factory is the default of that same parameter, so an index
  // overrides it. Falling back to TypeGuardError is the documented outcome:
  // the caller still learns which property failed, instead of losing that to
  // `factory is not a function`.
  const configured = typia.createAssert<IMember>((props) =>
    Object.assign(new Error("configured"), { path: props.path }),
  ) as unknown as (input: unknown, index?: number) => IMember;

  // The bad row is last, so the index that reaches `errorFactory` is truthy —
  // index 0 alone would be the one value the pre-fix helper already survived.
  const configuredRows: unknown[] = [...valid, { id: "robin" }];
  const overridden: unknown = capture(() => configuredRows.map(configured));
  if (overridden instanceof TypeGuardError === false)
    throw new Error(
      `Expected a non-callable override to fall back, got ${String(overridden)}.`,
    );

  const kept: unknown = capture(() => configured({ id: "robin" }));
  if (kept instanceof Error === false || kept instanceof TypeGuardError)
    throw new Error("Expected the configured factory to build the error.");
  TestEquality.equals("configured factory message", "configured", kept.message);
};

const capture = (task: () => unknown): unknown => {
  try {
    task();
  } catch (exp) {
    return exp;
  }
  throw new Error("Expected the assertion to throw.");
};
