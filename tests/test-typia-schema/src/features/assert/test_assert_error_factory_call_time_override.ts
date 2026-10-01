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
 * @evidence contracts/testing.md#behavioral-verification typia.json.createAssertParse, typia.plain.createAssertClone is evaluated by the native host on the types declared in this case and the result is checked by 4 assertions (… message; … path). The case documents its purpose as: Verifies the declared call-time errorFactory really overrides the create-time one.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: `create*Assert*` emits `(input, errorFactory = <create-time factory>)`, and the declarations now name that second parameter. This is the runtime twin of that declaration: the parameter has to be honored against the shipped `_assertGuard`, not only type-check, and omitting it has to keep falling back to the factory the caller configured when the function was created. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (… message; … path) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_assert_error_factory_call_time_override is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
