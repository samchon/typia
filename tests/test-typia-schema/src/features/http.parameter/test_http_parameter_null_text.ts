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
 *
 * @evidence contracts/testing.md#behavioral-verification typia.http.parameter is evaluated by the native host on the types declared in this case and the result is checked by 6 assertions (string; literal; template; nullable string; nullable number; number rejects null). The case documents its purpose as: Verifies the path text `null` is a string unless the type admits `null`.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: `http.parameter<string>("null")` read the segment as `null` and then threw, so a user named `null` could not be addressed, and the literal type `"null"` could never be decoded (#2450). Only a parameter type that admits `null` may read the text as `null`. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (string; literal; template; nullable string; nullable number; number rejects null) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_http_parameter_null_text is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
