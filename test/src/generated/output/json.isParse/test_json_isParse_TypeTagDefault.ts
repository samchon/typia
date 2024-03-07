import typia from "typia";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";
export const test_json_isParse_TypeTagDefault = _test_json_isParse(
  "TypeTagDefault",
)<TypeTagDefault>(TypeTagDefault)((input) =>
  ((input: any): import("typia").Primitive<TypeTagDefault> => {
    const is = (input: any): input is TypeTagDefault => {
      const $io0 = (input: any): boolean =>
        "boolean" === typeof input.boolean &&
        "number" === typeof input.number &&
        Number.isFinite(input.number) &&
        "string" === typeof input.string &&
        "string" === typeof input.text &&
        (("number" === typeof input.boolean_and_number_and_string &&
          Number.isFinite(input.boolean_and_number_and_string)) ||
          "string" === typeof input.boolean_and_number_and_string ||
          "boolean" === typeof input.boolean_and_number_and_string) &&
        ("string" === typeof input.union_but_boolean ||
          ("number" === typeof input.union_but_boolean &&
            Number.isFinite(input.union_but_boolean)) ||
          "boolean" === typeof input.union_but_boolean) &&
        ("string" === typeof input.union_but_number ||
          ("number" === typeof input.union_but_number &&
            Number.isFinite(input.union_but_number)) ||
          "boolean" === typeof input.union_but_number) &&
        (("number" === typeof input.union_but_string &&
          Number.isFinite(input.union_but_string)) ||
          "string" === typeof input.union_but_string ||
          "boolean" === typeof input.union_but_string) &&
        null !== input.boolean_and_number_and_template &&
        undefined !== input.boolean_and_number_and_template &&
        (("number" === typeof input.boolean_and_number_and_template &&
          Number.isFinite(input.boolean_and_number_and_template)) ||
          "boolean" === typeof input.boolean_and_number_and_template ||
          ("string" === typeof input.boolean_and_number_and_template &&
            RegExp(/^prefix_(.*)/).test(
              input.boolean_and_number_and_template,
            )));
      return "object" === typeof input && null !== input && $io0(input);
    };
    input = JSON.parse(input);
    return is(input) ? (input as any) : null;
  })(input),
);
