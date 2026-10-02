import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies a rejected dynamic key is reported as a bad key, not as an extra
 * property.
 *
 * Rejecting the key was the fix (#2347); reporting it correctly is a separate
 * question the fix raised. The report an extra property already used says the
 * property is not defined in the object type and advises removing it — both
 * false here, because the property _is_ declared and only its key broke a
 * constraint. Advising a caller to delete their only property would be worse
 * than the silence it replaced.
 *
 * 1. Require `validate` to name the key's declared type as `expected`, and to
 *    explain that the key is what failed.
 * 2. Require `assert` to carry the same expectation.
 * 3. Require a key that satisfies its signature to report nothing, so the case
 *    cannot pass by rejecting everything.
 * 4. Require a declared property to stay exempt from the signature's tag, so the
 *    rejection reaches dynamic keys only.
 *
 * @evidence contracts/testing.md#behavioral-verification Bad dynamic keys report their declared key constraint rather than surplus-property advice.
 * @evidence contracts/testing.md#independent-expectations Literal path/type text and positive/exempt/untagged twins independently distinguish key constraint failures.
 * @evidence contracts/testing.md#distinguishing-cases Short and satisfying keys, assert message, named-property exemption with valid/invalid neighbors and unconstrained empty keys remain.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_validate_dynamic_key_report in the schema start suite under ttsx and the native plugin; the exported body owns these assertions.
 * @evidence contracts/e2e.md#necessary-boundary Native constrained index-signature emission must connect to validation reporting with the correct diagnostic category.
 * @evidence contracts/e2e.md#shared-execution The suite project load and native artifact are reused with neighboring cases; no per-input process or build is created.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Inputs and observed outputs are local to the case. The suite owns shared host lifetime; mutable data is not handed to another case and no cold cache behavior is asserted.
 * @evidence contracts/e2e.md#preserved-coverage Short and satisfying keys, assert message, named-property exemption with valid/invalid neighbors and unconstrained empty keys remain. Source review preserves the executable matrix; final native execution is tracked separately.
 */
export const test_validate_dynamic_key_report = (): void => {
  interface ILengthKey {
    [key: string & tags.MinLength<3>]: string;
  }

  const result = typia.validate<ILengthKey>({ ab: "x" });
  TestEquality.equals("a short key is rejected", result.success, false);
  if (result.success === false) {
    const error = result.errors[0];
    TestEquality.equals(
      "the report names the key type and the key",
      [
        error?.path ?? null,
        error?.expected ?? null,
        (error?.description ?? "").includes("The key `ab`"),
        (error?.description ?? "").includes("does not satisfy"),
        // The advice an extra property gets must not appear: nothing here
        // should be removed.
        (error?.description ?? "").includes("remove"),
      ],
      ["$input.ab", "(string & MinLength<3>)", true, true, false],
    );
  }

  let message: string = "";
  try {
    typia.assert<ILengthKey>({ ab: "x" });
  } catch (error) {
    message = (error as Error).message;
  }
  TestEquality.equals(
    "assert names the key type too",
    [message.includes("$input.ab"), message.includes("string & MinLength<3>")],
    [true, true],
  );

  //----
  // The negative twin: a key that satisfies its signature reports nothing.
  //----
  TestEquality.equals(
    "a satisfying key is accepted",
    typia.validate<ILengthKey>({ abc: "x" }).success,
    true,
  );

  //----
  // A declared property is not a dynamic key, so its name never has to satisfy
  // the signature's tag. `id` is two characters and would fail `MinLength<3>`
  // if it were routed through the check the fix made binding -- rejecting it
  // would break every object that pairs a named property with a constrained
  // index signature.
  //----
  interface IMixedKey {
    id: string;
    [key: string & tags.MinLength<3>]: string;
  }
  TestEquality.equals(
    "a declared property is exempt from the key tag",
    [
      typia.validate<IMixedKey>({ id: "v" }).success,
      typia.validate<IMixedKey>({ id: "v", abc: "y" }).success,
      // ...while a dynamic key beside it is still checked, so the exemption is
      // the declaration and not the presence of one.
      typia.validate<IMixedKey>({ id: "v", ab: "y" }).success,
    ],
    [true, true, false],
  );

  //----
  // An untagged signature still accepts anything, so the report belongs to the
  // constraint rather than to dynamic keys as such.
  //----
  interface IPlainKey {
    [key: string]: string;
  }
  TestEquality.equals(
    "a plain signature accepts any key",
    typia.validate<IPlainKey>({ "": "x", "anything at all": "y" }).success,
    true,
  );
};
