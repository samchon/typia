import { TestEquality } from "@typia/template/equality";
import typia, { IReadableURLSearchParams, IValidation } from "typia";

/**
 * Verifies blank query values never decode to zero.
 *
 * `Number(" ")` and `BigInt(" ")` are zero, so a whitespace query value read as
 * `0` / `0n` and passed every validator (#2448). The empty value was already
 * absent; blank text must be absent the same way, in scalars and in array
 * elements, while non-blank text keeps its `Number()` reading.
 *
 * 1. Decode blank and empty numeric and bigint values through all eight forms.
 * 2. Require optional blanks to be absent and array blanks to be rejected.
 * 3. Keep `0`, a space-padded `1`, `1e3`, and `0x10` as the negative twins, and
 *    read an `undefined` from a stand-in reader as absent.
 *
 * @evidence contracts/testing.md#behavioral-verification The case asserts that eight query forms distinguish blank numeric/bigint absence from true zero, padded numbers and legitimate exponent/radix inputs.
 * @evidence contracts/testing.md#independent-expectations Authored expected objects independently establish 0/0n/1/1000/16 values and absence; the fixed list error path pins the malformed element.
 * @evidence contracts/testing.md#distinguishing-cases Four queries across eight forms, undefined-valued readable stand-in and blank numeric list rejection retain all assertions.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_http_query_blank_numbers in test-typia-schema start. Each actual typia.http call is rewritten in the native suite project and its emitted decoder executes on local HTTP representations in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Native query decoder assembly must forward numeric/optional/list metadata to the correct runtime readers and error paths. Calling a portable read helper alone cannot detect wrong compiler metadata selection, omitted generated validation or broken direct/factory decoder assembly.
 * @evidence contracts/e2e.md#shared-execution All declared operation/type variants share the existing ttsx suite project and process plus content-keyed native artifact. Runtime input matrices reuse those prepared decoders; no input row causes a compiler process or fixture installation.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Input query/header/FormData values and result projections are local. Decoders are required to read these representations without changing their contents; no case changes a foreign prototype or retained fixture. The suite owns process termination and ttsc owns artifact invalidation; cache warmth is not a behavior assertion.
 * @evidence contracts/e2e.md#preserved-coverage Four queries across eight forms, undefined-valued readable stand-in and blank numeric list rejection retain all assertions. Every original HTTP producer form, input and assertion stays under the unchanged exported entry; no malformed/optional/nullability distinction was dropped to reduce execution.
 */
export const test_http_query_blank_numbers = (): void => {
  const decoders: Array<[string, (input: string) => IQuery | null]> = [
    ["query", (input) => typia.http.query<IQuery>(input)],
    ["isQuery", (input) => typia.http.isQuery<IQuery>(input)],
    [
      "validateQuery",
      (input) => unwrap(typia.http.validateQuery<IQuery>(input)),
    ],
    ["assertQuery", (input) => typia.http.assertQuery<IQuery>(input)],
    ["createQuery", typia.http.createQuery<IQuery>()],
    ["createIsQuery", typia.http.createIsQuery<IQuery>()],
    [
      "createValidateQuery",
      (input) => unwrap(typia.http.createValidateQuery<IQuery>()(input)),
    ],
    ["createAssertQuery", typia.http.createAssertQuery<IQuery>()],
  ];
  const cases: Array<[string, IQuery]> = [
    ["n=%20&b=%20", { n: undefined, b: undefined, list: undefined }],
    ["n=&b=%09", { n: undefined, b: undefined, list: undefined }],
    ["n=0&b=0", { n: 0, b: 0n, list: undefined }],
    ["n=%201%20&b=1&list=1e3&list=0x10", { n: 1, b: 1n, list: [1000, 16] }],
  ];
  for (const [name, decode] of decoders)
    for (const [input, expected] of cases)
      TestEquality.equals(`${name}(${input})`, decode(input), expected);

  // a stand-in reader that answers `undefined` for an absent key reads as
  // absent in every reader, instead of throwing on `.length`
  const foreign: IReadableURLSearchParams = {
    size: 0,
    get: () => undefined as unknown as null,
    getAll: () => [],
    has: () => false,
    forEach: () => {},
  } as unknown as IReadableURLSearchParams;
  TestEquality.equals("stand-in reader", typia.http.query<IQuery>(foreign), {
    n: undefined,
    b: undefined,
    flag: undefined,
    list: undefined,
  });

  // a blank element is not a number
  TestEquality.equals(
    "blank element",
    (() => {
      const result = typia.http.validateQuery<IQuery>("list=1&list=%20");
      return result.success ? [] : result.errors.map((e) => e.path);
    })(),
    ["$input.list[1]"],
  );
};

const unwrap = <T>(result: IValidation<T>): T | null =>
  result.success ? result.data : null;

interface IQuery {
  n?: number;
  b?: bigint;
  flag?: boolean;
  list?: number[];
}
