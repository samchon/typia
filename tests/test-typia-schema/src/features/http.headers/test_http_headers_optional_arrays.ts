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
 * @evidence contracts/testing.md#behavioral-verification The case asserts that all eight header forms omit undefined/empty optional arrays without errors and preserve populated arrays.
 * @evidence contracts/testing.md#independent-expectations Authored expected objects and Object.hasOwn checks independently distinguish absent properties from present undefined/empty arrays.
 * @evidence contracts/testing.md#distinguishing-cases Omitted/explicit-undefined/empty ordinary and set-cookie arrays, comma-separated ordinary lists and populated cookie arrays retain the entire eight-by-five matrix.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_http_headers_optional_arrays in test-typia-schema start. Each actual typia.http call is rewritten in the native suite project and its emitted decoder executes on local HTTP representations in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Native optional-array cleanup must operate safely after emitted header readers return either undefined or actual arrays. Calling a portable read helper alone cannot detect wrong compiler metadata selection, omitted generated validation or broken direct/factory decoder assembly.
 * @evidence contracts/e2e.md#shared-execution All declared operation/type variants share the existing ttsx suite project and process plus content-keyed native artifact. Runtime input matrices reuse those prepared decoders; no input row causes a compiler process or fixture installation.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Input query/header/FormData values and result projections are local. Decoders are required to read these representations without changing their contents; no case changes a foreign prototype or retained fixture. The suite owns process termination and ttsc owns artifact invalidation; cache warmth is not a behavior assertion.
 * @evidence contracts/e2e.md#preserved-coverage Omitted/explicit-undefined/empty ordinary and set-cookie arrays, comma-separated ordinary lists and populated cookie arrays retain the entire eight-by-five matrix. Every original HTTP producer form, input and assertion stays under the unchanged exported entry; no malformed/optional/nullability distinction was dropped to reduce execution.
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
