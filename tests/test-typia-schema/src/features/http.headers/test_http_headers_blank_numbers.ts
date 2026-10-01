import { TestEquality } from "@typia/template/equality";
import typia, { IValidation } from "typia";

/**
 * Verifies blank header values never decode to zero.
 *
 * The header readers had no blank guard at all: `Number("")` is 0, so an empty
 * `x-page` header read as page 0 and passed every validator, and an empty list
 * element read as `0` (#2448). A blank header is absent, like an empty query
 * value, and a blank list element is rejected.
 *
 * 1. Decode empty and blank numeric and bigint headers through all eight forms.
 * 2. Require optional blanks to be absent, and required blanks and blank list
 *    elements to be rejected.
 * 3. Keep `0`, a space-padded `1`, and `1, 2` as the negative twins.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.http.headers, typia.http.isHeaders, typia.http.validateHeaders is evaluated by the native host on the types declared in this case and the result is checked by 2 assertions (…(…); rejects …). The case documents its purpose as: Verifies blank header values never decode to zero.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: The header readers had no blank guard at all: `Number("")` is 0, so an empty `x-page` header read as page 0 and passed every validator, and an empty list element read as `0` (#2448). A blank header is absent, like an empty query value, and a blank list element is rejected. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (…(…); rejects …) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_http_headers_blank_numbers is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_http_headers_blank_numbers = (): void => {
  const decoders: Array<[string, (input: Input) => IHeaders | null]> = [
    ["headers", (input) => typia.http.headers<IHeaders>(input)],
    ["isHeaders", (input) => typia.http.isHeaders<IHeaders>(input)],
    [
      "validateHeaders",
      (input) => unwrap(typia.http.validateHeaders<IHeaders>(input)),
    ],
    ["assertHeaders", (input) => typia.http.assertHeaders<IHeaders>(input)],
    ["createHeaders", typia.http.createHeaders<IHeaders>()],
    ["createIsHeaders", typia.http.createIsHeaders<IHeaders>()],
    [
      "createValidateHeaders",
      (input) => unwrap(typia.http.createValidateHeaders<IHeaders>()(input)),
    ],
    ["createAssertHeaders", typia.http.createAssertHeaders<IHeaders>()],
  ];
  const cases: Array<[Input, IHeaders]> = [
    [{ "x-page": "1", "x-n": "", "x-b": " " }, { "x-page": 1 }],
    [
      { "x-page": "0", "x-n": "0", "x-b": "0" },
      { "x-page": 0, "x-n": 0, "x-b": 0n },
    ],
    [
      { "x-page": " 1 ", "x-list": "1, 2" },
      { "x-page": 1, "x-list": [1, 2] },
    ],
  ];
  for (const [name, decode] of decoders)
    for (const [input, expected] of cases)
      TestEquality.equals(
        `${name}(${JSON.stringify(input)})`,
        decode(input),
        expected,
      );

  // a required blank header and a blank list element are rejected
  const rejections: Array<[Input, string]> = [
    [{ "x-page": "" }, `$input["x-page"]`],
    [{ "x-page": "1", "x-list": "1, , 2" }, `$input["x-list"][1]`],
  ];
  for (const [input, path] of rejections)
    TestEquality.equals(
      `rejects ${JSON.stringify(input)}`,
      (() => {
        const result = typia.http.validateHeaders<IHeaders>(input);
        return result.success ? [] : result.errors.map((e) => e.path);
      })(),
      [path],
    );
};

const unwrap = <T>(result: IValidation<T>): T | null =>
  result.success ? result.data : null;

type Input = Record<string, string | string[] | undefined>;

interface IHeaders {
  "x-page": number;
  "x-n"?: number;
  "x-b"?: bigint;
  "x-list"?: number[];
}
