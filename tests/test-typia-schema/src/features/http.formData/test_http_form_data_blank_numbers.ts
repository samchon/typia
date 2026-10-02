import { TestEquality } from "@typia/template/equality";
import typia, { IValidation } from "typia";

/**
 * Verifies blank form fields never decode to zero.
 *
 * `Number(" ")` and `BigInt(" ")` are zero, so a whitespace form field read as
 * `0` / `0n` and passed every validator (#2448). The empty field was already
 * absent; blank text must be absent the same way, and a blank array element
 * must be rejected.
 *
 * 1. Decode blank and empty numeric and bigint fields through all eight forms.
 * 2. Require optional blanks to be absent and array blanks to be rejected.
 * 3. Keep `0` and a space-padded `1` as the negative twins, and read a non-string
 *    value from a `FormData` stand-in as absent instead of throwing.
 *
 * @evidence contracts/testing.md#behavioral-verification The case asserts that eight FormData decoder forms preserve absent blank/empty optional numeric values, true zero/padded values and reject the blank array element.
 * @evidence contracts/testing.md#independent-expectations Authored output objects distinguish blank absence from Number/BigInt zero; literal $input.list[1] independently fixes the validation location.
 * @evidence contracts/testing.md#distinguishing-cases Eight direct/factory forms cross three data sets, nonstring Blob/undefined stand-ins remain absent without trim errors, and the malformed list twin remains rejected.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_http_form_data_blank_numbers in test-typia-schema start. Each actual typia.http call is rewritten in the native suite project and its emitted decoder executes on local HTTP representations in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Native numeric/optional/list metadata must select the correct FormData reader and validation path in emitted decoders. Calling a portable read helper alone cannot detect wrong compiler metadata selection, omitted generated validation or broken direct/factory decoder assembly.
 * @evidence contracts/e2e.md#shared-execution All declared operation/type variants share the existing ttsx suite project and process plus content-keyed native artifact. Runtime input matrices reuse those prepared decoders; no input row causes a compiler process or fixture installation.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Input query/header/FormData values and result projections are local. Decoders are required to read these representations without changing their contents; no case changes a foreign prototype or retained fixture. The suite owns process termination and ttsc owns artifact invalidation; cache warmth is not a behavior assertion.
 * @evidence contracts/e2e.md#preserved-coverage Eight direct/factory forms cross three data sets, nonstring Blob/undefined stand-ins remain absent without trim errors, and the malformed list twin remains rejected. Every original HTTP producer form, input and assertion stays under the unchanged exported entry; no malformed/optional/nullability distinction was dropped to reduce execution.
 */
export const test_http_form_data_blank_numbers = (): void => {
  const decoders: Array<[string, (input: FormData) => IForm | null]> = [
    ["formData", (input) => typia.http.formData<IForm>(input)],
    ["isFormData", (input) => typia.http.isFormData<IForm>(input)],
    [
      "validateFormData",
      (input) => unwrap(typia.http.validateFormData<IForm>(input)),
    ],
    ["assertFormData", (input) => typia.http.assertFormData<IForm>(input)],
    ["createFormData", typia.http.createFormData<IForm>()],
    ["createIsFormData", typia.http.createIsFormData<IForm>()],
    [
      "createValidateFormData",
      (input) => unwrap(typia.http.createValidateFormData<IForm>()(input)),
    ],
    ["createAssertFormData", typia.http.createAssertFormData<IForm>()],
  ];
  const cases: Array<[Array<[string, string]>, IForm]> = [
    [
      [
        ["n", " "],
        ["b", "\t"],
      ],
      { n: undefined, b: undefined, list: [] },
    ],
    [
      [
        ["n", ""],
        ["b", ""],
      ],
      { n: undefined, b: undefined, list: [] },
    ],
    [
      [
        ["n", "0"],
        ["b", "0"],
        ["list", " 1 "],
      ],
      { n: 0, b: 0n, list: [1] },
    ],
  ];
  for (const [name, decode] of decoders)
    for (const [entries, expected] of cases)
      TestEquality.equals(
        `${name}(${JSON.stringify(entries)})`,
        decode(form(entries)),
        expected,
      );

  for (const value of [new Blob(["1"]), undefined])
    TestEquality.equals(
      "non-string value",
      typia.http.formData<IForm>(foreign(value)),
      { n: undefined, b: undefined, list: [] },
    );

  TestEquality.equals(
    "blank element",
    (() => {
      const result = typia.http.validateFormData<IForm>(
        form([
          ["list", "1"],
          ["list", " "],
        ]),
      );
      return result.success ? [] : result.errors.map((e) => e.path);
    })(),
    ["$input.list[1]"],
  );
};

/**
 * A `FormData` stand-in whose values are not strings, as a polyfill may hand
 * over: the blank check must not call `.trim()` on them.
 */
const foreign = (value: unknown): FormData =>
  ({
    get: (key: string) =>
      key === "n" || key === "b" ? value : key === "flag" ? undefined : null,
    getAll: () => [],
  }) as unknown as FormData;

const form = (entries: Array<[string, string]>): FormData => {
  const data = new FormData();
  for (const [key, value] of entries) data.append(key, value);
  return data;
};

const unwrap = <T>(result: IValidation<T>): T | null =>
  result.success ? result.data : null;

interface IForm {
  n?: number;
  b?: bigint;
  flag?: boolean;
  list: number[];
}
