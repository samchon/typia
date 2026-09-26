import { TestEquality } from "@typia/template/equality";
import typia, { IValidation } from "typia";

/**
 * Verifies the form text `null` is a string unless the type admits `null`.
 *
 * The string reader mapped `"null"` to `null` for every string field, so a
 * required `string` rejected the value `"null"`, an optional one dropped it,
 * and the literal type `"null"` could never be decoded (#2450). Only a type
 * that admits `null` may read the text as `null`.
 *
 * 1. Decode `null` into required, optional, literal, nullable, and array string
 *    fields through all eight forms.
 * 2. Require the string `"null"` everywhere `null` is not admitted.
 * 3. Keep nullable strings, nullable numbers, `unknown`, `any`, and nullable array
 *    elements reading `null` as the twins; a nullable array's own element does
 *    not admit it.
 */
export const test_http_form_data_null_text = (): void => {
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
  const data = new FormData();
  for (const key of ["text", "optional", "kind", "nullable", "list", "count"])
    data.append(key, "null");
  data.append("list", "x");
  const expected: IForm = {
    text: "null",
    optional: "null",
    kind: "null",
    nullable: null,
    list: ["null", "x"],
    count: null,
  };
  for (const [name, decode] of decoders)
    TestEquality.equals(name, decode(data), expected);

  // `unknown` and `any` admit `null`; a nullable array's element does not,
  // while an array of nullable strings does
  const admitting = new FormData();
  for (const key of [
    "unknown",
    "optionalUnknown",
    "any",
    "nullableList",
    "nullableElements",
  ])
    admitting.append(key, "null");
  admitting.append("nullableElements", "x");
  TestEquality.equals(
    "admitting units",
    typia.http.formData<IAdmitting>(admitting),
    {
      unknown: null,
      optionalUnknown: null,
      any: null,
      nullableList: ["null"],
      nullableElements: [null, "x"],
    },
  );
};

const unwrap = <T>(result: IValidation<T>): T | null =>
  result.success ? result.data : null;

interface IAdmitting {
  unknown: unknown;
  optionalUnknown?: unknown;
  any: any;
  nullableList: string[] | null;
  nullableElements: (string | null)[];
}
interface IForm {
  text: string;
  optional?: string;
  kind: "null" | "other";
  nullable: string | null;
  list: string[];
  count: number | null;
}
