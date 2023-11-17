import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";

export const test_misc_isPrune_TypeTagDefault = _test_misc_isPrune(
  "TypeTagDefault",
)<TypeTagDefault>(TypeTagDefault)((input) =>
  ((input: any): input is TypeTagDefault => {
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
    const prune = (input: TypeTagDefault): void => {
      const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if (
            "boolean" === key ||
            "number" === key ||
            "string" === key ||
            "text" === key ||
            "boolean_and_number_and_string" === key ||
            "union_but_boolean" === key ||
            "union_but_number" === key ||
            "union_but_string" === key ||
            "boolean_and_number_and_template" === key
          )
            continue;
          delete input[key];
        }
      };
      if ("object" === typeof input && null !== input) $po0(input);
    };
    if (!is(input)) return false;
    prune(input);
    return true;
  })(input),
);
