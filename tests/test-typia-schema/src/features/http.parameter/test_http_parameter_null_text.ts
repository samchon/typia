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
 * @evidence contracts/testing.md#behavioral-verification The case asserts that string/literal/template paths keep the text null while nullable paths return null and numeric-only paths reject.
 * @evidence contracts/testing.md#independent-expectations Handwritten text/null expectations follow each declared TypeScript domain and rejection must have TypeGuardError identity.
 * @evidence contracts/testing.md#distinguishing-cases Ordinary/literal/template strings, nullable string/number and nonnullable number negative twin remain.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_http_parameter_null_text in test-typia-schema start. Each actual typia.http call is rewritten in the native suite project and its emitted decoder executes on local HTTP representations in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Native type/nullability selection must choose literal-text versus nullable parameter decoding at the public call site. Calling a portable read helper alone cannot detect wrong compiler metadata selection, omitted generated validation or broken direct/factory decoder assembly.
 * @evidence contracts/e2e.md#shared-execution All declared operation/type variants share the existing ttsx suite project and process plus content-keyed native artifact. Runtime input matrices reuse those prepared decoders; no input row causes a compiler process or fixture installation.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Input query/header/FormData values and result projections are local. Decoders are required to read these representations without changing their contents; no case changes a foreign prototype or retained fixture. The suite owns process termination and ttsc owns artifact invalidation; cache warmth is not a behavior assertion.
 * @evidence contracts/e2e.md#preserved-coverage Ordinary/literal/template strings, nullable string/number and nonnullable number negative twin remain. Every original HTTP producer form, input and assertion stays under the unchanged exported entry; no malformed/optional/nullability distinction was dropped to reduce execution.
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
