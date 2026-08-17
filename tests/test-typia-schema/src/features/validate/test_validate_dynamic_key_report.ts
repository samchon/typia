import { TestValidator } from "@nestia/e2e";
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
 */
export const test_validate_dynamic_key_report = (): void => {
  interface ILengthKey {
    [key: string & tags.MinLength<3>]: string;
  }

  const result = typia.validate<ILengthKey>({ ab: "x" });
  TestValidator.equals("a short key is rejected", result.success, false);
  if (result.success === false) {
    const error = result.errors[0];
    TestValidator.equals(
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
  TestValidator.equals(
    "assert names the key type too",
    [message.includes("$input.ab"), message.includes("string & MinLength<3>")],
    [true, true],
  );

  //----
  // The negative twin: a key that satisfies its signature reports nothing.
  //----
  TestValidator.equals(
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
  TestValidator.equals(
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
  TestValidator.equals(
    "a plain signature accepts any key",
    typia.validate<IPlainKey>({ "": "x", "anything at all": "y" }).success,
    true,
  );
};
