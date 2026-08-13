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
 * `errorFactory` parameter, so a pointwise hand-off such as
 * `rows.map(assertMember)` fills it with the element index. `_assertGuard` used
 * to accept any truthy value there and call it, which reported `factory is not
 * a function` for every index except the falsy `0`. Builds compiled against an
 * already-published declaration can still make that call, so the runtime helper
 * is what has to absorb it.
 *
 * 1. Take a created assert function and call it the way `Array#map` does.
 * 2. Require a TypeGuardError naming the real failure for indices 0, 1 and 2.
 * 3. Confirm a genuine factory still wins, so the fallback did not swallow it.
 */
export const test_assert_error_factory_non_callable = (): void => {
  const assertMember = typia.createAssert<IMember>();
  const pointwise = assertMember as unknown as (
    input: unknown,
    index: number,
  ) => IMember;

  const valid: IMember = { id: "robin", age: 30 };
  TestValidator.equals("valid element passes", valid, pointwise(valid, 3));

  for (const index of [0, 1, 2]) {
    const error: unknown = capture(() => pointwise({ id: "robin" }, index));
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

  const assertCustom = typia.createAssert<IMember>((props) =>
    Object.assign(new Error("custom"), { path: props.path }),
  );
  const custom: unknown = capture(() => assertCustom({ id: "robin" }));
  if (custom instanceof Error === false || custom instanceof TypeGuardError)
    throw new Error("Expected the configured factory to build the error.");
  TestValidator.equals("custom factory message", "custom", custom.message);
};

const capture = (task: () => unknown): unknown => {
  try {
    task();
  } catch (exp) {
    return exp;
  }
  throw new Error("Expected the assertion to throw.");
};
