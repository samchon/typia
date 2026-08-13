import { TestValidator } from "@nestia/e2e";
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
  TestValidator.equals("valid elements pass", valid, valid.map(assertMember));

  for (const index of [0, 1, 2]) {
    const rows: unknown[] = valid.slice(0, index);
    rows.push({ id: "robin" });
    const error: unknown = capture(() => rows.map(assertMember));
    if (error instanceof TypeGuardError === false)
      throw new Error(
        `Expected TypeGuardError at index ${index}, got ${String(error)}.`,
      );
    TestValidator.equals(
      `index ${index} method`,
      "typia.createAssert",
      error.method,
    );
    TestValidator.equals(`index ${index} path`, "$input.age", error.path);
    TestValidator.equals(`index ${index} expected`, "number", error.expected);
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
  TestValidator.equals(
    "configured factory message",
    "configured",
    kept.message,
  );
};

const capture = (task: () => unknown): unknown => {
  try {
    task();
  } catch (exp) {
    return exp;
  }
  throw new Error("Expected the assertion to throw.");
};
