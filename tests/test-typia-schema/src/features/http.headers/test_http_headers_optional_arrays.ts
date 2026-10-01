import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies omitted optional array headers decode without a runtime error.
 *
 * The generated decoder removes empty optional arrays after decoding. An
 * omitted header also reaches that branch as `undefined`, including the special
 * `set-cookie` array, and must be removed without reading its length.
 *
 * 1. Exercise direct and factory forms of every headers decoder.
 * 2. Check omitted, explicitly undefined, empty, and populated arrays.
 * 3. Require omitted and empty arrays to be absent from the result.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.http.headers, typia.http.assertHeaders, typia.http.isHeaders is evaluated by the native host on the types declared in this case and the result is checked by 2 assertions (decoder …, case …). The case documents its purpose as: Verifies omitted optional array headers decode without a runtime error.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: The generated decoder removes empty optional arrays after decoding. An omitted header also reaches that branch as `undefined`, including the special `set-cookie` array, and must be removed without reading its length. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (decoder …, case …) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_http_headers_optional_arrays is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_http_headers_optional_arrays = (): void => {
  const decoders = [
    (input: Input) => typia.http.headers<IHeaders>(input),
    (input: Input) => typia.http.assertHeaders<IHeaders>(input),
    (input: Input) => typia.http.isHeaders<IHeaders>(input),
    (input: Input) => {
      const result = typia.http.validateHeaders<IHeaders>(input);
      return result.success ? result.data : null;
    },
    typia.http.createHeaders<IHeaders>(),
    typia.http.createAssertHeaders<IHeaders>(),
    typia.http.createIsHeaders<IHeaders>(),
    (input: Input) => {
      const result = typia.http.createValidateHeaders<IHeaders>()(input);
      return result.success ? result.data : null;
    },
  ];
  const cases: Array<{ input: Input; expected: IHeaders }> = [
    { input: { "x-text": "a" }, expected: { "x-text": "a" } },
    {
      input: { "x-text": "a", "x-list": undefined, "set-cookie": undefined },
      expected: { "x-text": "a" },
    },
    {
      input: { "x-text": "a", "x-list": [], "set-cookie": [] },
      expected: { "x-text": "a" },
    },
    {
      input: { "x-text": "a", "x-list": "one, two" },
      expected: { "x-text": "a", "x-list": ["one", "two"] },
    },
    {
      input: { "x-text": "a", "set-cookie": ["a=1", "b=2"] },
      expected: { "x-text": "a", "set-cookie": ["a=1", "b=2"] },
    },
  ];

  for (const [decoderIndex, decode] of decoders.entries())
    for (const [caseIndex, { input, expected }] of cases.entries()) {
      const result = decode(input);
      TestEquality.equals(
        `decoder ${decoderIndex}, case ${caseIndex}`,
        expected,
        result,
      );
      if (result === null) continue;
      for (const key of ["x-list", "set-cookie"] as const)
        if (key in expected === false && Object.hasOwn(result, key))
          throw new Error(
            `decoder ${decoderIndex}, case ${caseIndex}: unexpected ${key}`,
          );
    }
};

type Input = Record<string, string | string[] | undefined>;

interface IHeaders {
  "x-text": string;
  "x-list"?: string[];
  "set-cookie"?: string[];
}
