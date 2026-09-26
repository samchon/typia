import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import typia, { TypeGuardError } from "typia";

/**
 * Verifies the path text `null` is a string unless the type admits `null`.
 *
 * `http.parameter<string>("null")` read the segment as `null` and then threw,
 * so a user named `null` could not be addressed, and the literal type `"null"`
 * could never be decoded (#2450). Only a parameter type that admits `null` may
 * read the text as `null`.
 *
 * 1. Decode `null` as `string`, a `"null"` literal union, and a template type.
 * 2. Require the string `"null"` for each.
 * 3. Keep `string | null` and `number | null` reading `null`, and a non-nullable
 *    number rejecting it, as the twins.
 */
export const test_http_parameter_null_text = (): void => {
  TestEquality.equals("string", typia.http.parameter<string>("null"), "null");
  TestEquality.equals(
    "literal",
    typia.http.parameter<"null" | "other">("null"),
    "null",
  );
  TestEquality.equals(
    "template",
    typia.http.parameter<`${string}l`>("null"),
    "null",
  );
  TestEquality.equals(
    "nullable string",
    typia.http.parameter<string | null>("null"),
    null,
  );
  TestEquality.equals(
    "nullable number",
    typia.http.parameter<number | null>("null"),
    null,
  );
  TestValidator.predicate("number rejects null", () => {
    try {
      typia.http.parameter<number>("null");
    } catch (error) {
      return error instanceof TypeGuardError;
    }
    return false;
  });
};
