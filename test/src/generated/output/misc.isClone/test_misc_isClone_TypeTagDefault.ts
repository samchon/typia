import typia from "typia";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";
export const test_misc_isClone_TypeTagDefault = _test_misc_isClone(
  "TypeTagDefault",
)<TypeTagDefault>(TypeTagDefault)((input) =>
  ((input: any): import("typia").Resolved<TypeTagDefault> | null => {
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
    const clone = (
      input: TypeTagDefault,
    ): import("typia").Resolved<TypeTagDefault> => {
      const $co0 = (input: any): any => ({
        boolean: input.boolean as any,
        number: input.number as any,
        string: input.string as any,
        text: input.text as any,
        boolean_and_number_and_string:
          input.boolean_and_number_and_string as any,
        union_but_boolean: input.union_but_boolean as any,
        union_but_number: input.union_but_number as any,
        union_but_string: input.union_but_string as any,
        boolean_and_number_and_template:
          input.boolean_and_number_and_template as any,
      });
      return "object" === typeof input && null !== input
        ? $co0(input)
        : (input as any);
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
  })(input),
);
