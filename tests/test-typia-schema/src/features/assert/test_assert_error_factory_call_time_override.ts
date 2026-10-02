import { TestEquality } from "@typia/template/equality";
import typia, { TypeGuardError } from "typia";

interface IMember {
  id: string;
  age: number;
}

/**
 * Verifies the declared call-time errorFactory really overrides the create-time
 * one.
 *
 * `create*Assert*` emits `(input, errorFactory = <create-time factory>)`, and
 * the declarations now name that second parameter. This is the runtime twin of
 * that declaration: the parameter has to be honored against the shipped
 * `_assertGuard`, not only type-check, and omitting it has to keep falling back
 * to the factory the caller configured when the function was created.
 *
 * 1. Create assert, json.assertParse and plain.assertClone factories with a
 *    create-time factory.
 * 2. Call each with no override and require the create-time factory's error.
 * 3. Call each with an override and require the override's error instead.
 *
 * @evidence contracts/testing.md#behavioral-verification Call-time factories override configured errors for assert, JSON parsing and cloning.
 * @evidence contracts/testing.md#independent-expectations Captured Error identity, literal configured/overridden messages and the exact age path independently anchor failures.
 * @evidence contracts/testing.md#distinguishing-cases All three families retain configured-default and explicit call-time override failures on missing age.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_assert_error_factory_call_time_override in the schema start suite under ttsx and the native plugin; its exported body owns all runtime assertions.
 * @evidence contracts/e2e.md#necessary-boundary Native factory options and generated calls must preserve actual runtime override selection.
 * @evidence contracts/e2e.md#shared-execution The case reuses the suite project load and native artifact; input variants do not create separate hosts or builds.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Inputs, generated results and captured errors are local to the exported body. The suite owns host lifetime; no cold cache or invalidation transition is asserted.
 * @evidence contracts/e2e.md#preserved-coverage All three families retain configured-default and explicit call-time override failures on missing age. Every original input/call/assertion remains; final execution is reported separately from source review.
 */
export const test_assert_error_factory_call_time_override = (): void => {
  const created = (props: TypeGuardError.IProps): Error =>
    Object.assign(new Error("created"), { path: props.path });
  const overridden = (props: TypeGuardError.IProps): Error =>
    Object.assign(new Error("overridden"), { path: props.path });

  const assertMember = typia.createAssert<IMember>(created);
  const parseMember = typia.json.createAssertParse<IMember>(created);
  const cloneMember = typia.plain.createAssertClone<IMember>(created);

  const invalid = { id: "robin" };
  const invalidText = JSON.stringify(invalid);

  assertError("assert default", () => assertMember(invalid), "created");
  assertError("parse default", () => parseMember(invalidText), "created");
  assertError("clone default", () => cloneMember(invalid), "created");

  assertError(
    "assert override",
    () => assertMember(invalid, overridden),
    "overridden",
  );
  assertError(
    "parse override",
    () => parseMember(invalidText, overridden),
    "overridden",
  );
  assertError(
    "clone override",
    () => cloneMember(invalid, overridden),
    "overridden",
  );
};

const assertError = (
  label: string,
  task: () => unknown,
  message: string,
): void => {
  try {
    task();
  } catch (exp) {
    if (exp instanceof Error === false)
      throw new Error(`Expected ${label} to throw an Error.`);
    TestEquality.equals(`${label} message`, message, exp.message);
    TestEquality.equals(`${label} path`, "$input.age", (exp as any).path);
    return;
  }
  throw new Error(`Expected ${label} to throw.`);
};
