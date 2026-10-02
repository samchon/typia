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
 * @evidence contracts/testing.md#behavioral-verification The case asserts that blank numeric/bigint/nullable path inputs throw TypeGuardError while zero/padded/null and blank string controls retain values.
 * @evidence contracts/testing.md#independent-expectations Authored outputs follow path parameters' lack of an absent state; explicit exception identity distinguishes contract rejection from incidental errors.
 * @evidence contracts/testing.md#distinguishing-cases Empty/space/tab inputs cross number/bigint/nullable number; zero, padded one, bigint zero, nullable null and space string remain.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_http_parameter_blank_numbers in test-typia-schema start. Each actual typia.http call is rewritten in the native suite project and its emitted decoder executes on local HTTP representations in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Native atomic/nullability dispatch must emit the correct path decoder and assertion rather than coercing blanks to zero. Calling a portable read helper alone cannot detect wrong compiler metadata selection, omitted generated validation or broken direct/factory decoder assembly.
 * @evidence contracts/e2e.md#shared-execution All declared operation/type variants share the existing ttsx suite project and process plus content-keyed native artifact. Runtime input matrices reuse those prepared decoders; no input row causes a compiler process or fixture installation.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Input query/header/FormData values and result projections are local. Decoders are required to read these representations without changing their contents; no case changes a foreign prototype or retained fixture. The suite owns process termination and ttsc owns artifact invalidation; cache warmth is not a behavior assertion.
 * @evidence contracts/e2e.md#preserved-coverage Empty/space/tab inputs cross number/bigint/nullable number; zero, padded one, bigint zero, nullable null and space string remain. Every original HTTP producer form, input and assertion stays under the unchanged exported entry; no malformed/optional/nullability distinction was dropped to reduce execution.
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
