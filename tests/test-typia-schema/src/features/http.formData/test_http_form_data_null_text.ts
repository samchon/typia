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
 *
 * @evidence contracts/testing.md#behavioral-verification The case asserts that eight FormData forms distinguish the literal text null from nullable data while preserving repeated string arrays.
 * @evidence contracts/testing.md#independent-expectations Handwritten expected string/null/array objects follow each declared type's actual null admission; no generated validator supplies the expected output.
 * @evidence contracts/testing.md#distinguishing-cases Required/optional/literal/nullable/array string and nullable numeric fields, unknown/any, nullable container versus nullable elements all remain.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_http_form_data_null_text in test-typia-schema start. Each actual typia.http call is rewritten in the native suite project and its emitted decoder executes on local HTTP representations in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Native nullability metadata must parameterize emitted scalar and array-element FormData readers correctly. Calling a portable read helper alone cannot detect wrong compiler metadata selection, omitted generated validation or broken direct/factory decoder assembly.
 * @evidence contracts/e2e.md#shared-execution All declared operation/type variants share the existing ttsx suite project and process plus content-keyed native artifact. Runtime input matrices reuse those prepared decoders; no input row causes a compiler process or fixture installation.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Input query/header/FormData values and result projections are local. Decoders are required to read these representations without changing their contents; no case changes a foreign prototype or retained fixture. The suite owns process termination and ttsc owns artifact invalidation; cache warmth is not a behavior assertion.
 * @evidence contracts/e2e.md#preserved-coverage Required/optional/literal/nullable/array string and nullable numeric fields, unknown/any, nullable container versus nullable elements all remain. Every original HTTP producer form, input and assertion stays under the unchanged exported entry; no malformed/optional/nullability distinction was dropped to reduce execution.
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
