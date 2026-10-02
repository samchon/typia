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
 * @evidence contracts/testing.md#behavioral-verification The case asserts that eight header forms preserve missing blank optional numbers/bigints, legitimate zero/padded/list values and exact malformed field paths.
 * @evidence contracts/testing.md#independent-expectations Authored header objects and $input["x-page"]/$input["x-list"][1] expectations distinguish absent values from zero and malformed list elements.
 * @evidence contracts/testing.md#distinguishing-cases Three accepted input objects across all direct/factory forms and required-blank/list-blank rejections remain.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_http_headers_blank_numbers in test-typia-schema start. Each actual typia.http call is rewritten in the native suite project and its emitted decoder executes on local HTTP representations in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Native header metadata and emitted optional/numeric/list readers must agree with each operation's decoding and validation contract. Calling a portable read helper alone cannot detect wrong compiler metadata selection, omitted generated validation or broken direct/factory decoder assembly.
 * @evidence contracts/e2e.md#shared-execution All declared operation/type variants share the existing ttsx suite project and process plus content-keyed native artifact. Runtime input matrices reuse those prepared decoders; no input row causes a compiler process or fixture installation.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Input query/header/FormData values and result projections are local. Decoders are required to read these representations without changing their contents; no case changes a foreign prototype or retained fixture. The suite owns process termination and ttsc owns artifact invalidation; cache warmth is not a behavior assertion.
 * @evidence contracts/e2e.md#preserved-coverage Three accepted input objects across all direct/factory forms and required-blank/list-blank rejections remain. Every original HTTP producer form, input and assertion stays under the unchanged exported entry; no malformed/optional/nullability distinction was dropped to reduce execution.
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
