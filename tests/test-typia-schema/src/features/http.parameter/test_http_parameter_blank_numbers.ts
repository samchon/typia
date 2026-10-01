import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import typia, { TypeGuardError } from "typia";

/**
 * Verifies blank path parameters never decode to zero.
 *
 * `http.parameter` read `""` and `" "` through `Number()` / `BigInt()`, which
 * return zero, so a blank segment passed the assertion as `0` / `0n` (#2448). A
 * path parameter has no absent state, so blank text stays text and the
 * assertion rejects it.
 *
 * 1. Decode empty and blank segments as number, bigint, and nullable number.
 * 2. Require a `TypeGuardError` for each.
 * 3. Keep `0`, a space-padded `1`, `null`, and a blank string parameter as the
 *    negative twins.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.http.parameter is evaluated by the native host on the types declared in this case and the result is checked by 6 assertions (…(…); zero; padded; bigint zero; null; blank string). The case documents its purpose as: Verifies blank path parameters never decode to zero.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: `http.parameter` read `""` and `" "` through `Number()` / `BigInt()`, which return zero, so a blank segment passed the assertion as `0` / `0n` (#2448). A path parameter has no absent state, so blank text stays text and the assertion rejects it. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (…(…); zero; padded; bigint zero; null; blank string) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_http_parameter_blank_numbers is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_http_parameter_blank_numbers = (): void => {
  for (const input of ["", " ", "\t"]) {
    const parsers: Array<[string, () => unknown]> = [
      ["number", () => typia.http.parameter<number>(input)],
      ["bigint", () => typia.http.parameter<bigint>(input)],
      ["nullable", () => typia.http.parameter<number | null>(input)],
    ];
    for (const [name, parse] of parsers)
      TestValidator.predicate(`${name}(${JSON.stringify(input)})`, () => {
        try {
          parse();
        } catch (error) {
          return error instanceof TypeGuardError;
        }
        return false;
      });
  }
  TestEquality.equals("zero", typia.http.parameter<number>("0"), 0);
  TestEquality.equals("padded", typia.http.parameter<number>(" 1 "), 1);
  TestEquality.equals("bigint zero", typia.http.parameter<bigint>("0"), 0n);
  TestEquality.equals(
    "null",
    typia.http.parameter<number | null>("null"),
    null,
  );
  TestEquality.equals("blank string", typia.http.parameter<string>(" "), " ");
};
