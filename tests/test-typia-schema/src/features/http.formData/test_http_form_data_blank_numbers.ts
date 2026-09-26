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
 * 3. Keep `0` and ` 1 ` as the negative twins.
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
  list: number[];
}
