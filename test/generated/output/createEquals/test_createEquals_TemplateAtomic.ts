import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";

export const test_createEquals_TemplateAtomic = _test_equals(
  "TemplateAtomic",
)<TemplateAtomic>(TemplateAtomic)(
  (input: any, _exceptionable: boolean = true): input is TemplateAtomic => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
      "string" === typeof input.prefix &&
      RegExp(/^prefix_(.*)/).test(input.prefix) &&
      "string" === typeof input.postfix &&
      RegExp(/(.*)_postfix$/).test(input.postfix) &&
      "string" === typeof input.middle_string &&
      RegExp(/^the_(.*)_value$/).test(input.middle_string) &&
      "string" === typeof input.middle_string_empty &&
      RegExp(/^the_(.*)_value$/).test(input.middle_string_empty) &&
      "string" === typeof input.middle_numeric &&
      RegExp(/^the_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_value$/).test(
        input.middle_numeric,
      ) &&
      ("the_false_value" === input.middle_boolean ||
        "the_true_value" === input.middle_boolean) &&
      "string" === typeof input.ipv4 &&
      RegExp(
        /^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
      ).test(input.ipv4) &&
      "string" === typeof input.email &&
      RegExp(/(.*)@(.*)\.(.*)/).test(input.email) &&
      (8 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (
            [
              "prefix",
              "postfix",
              "middle_string",
              "middle_string_empty",
              "middle_numeric",
              "middle_boolean",
              "ipv4",
              "email",
            ].some((prop: any) => key === prop)
          )
            return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    return "object" === typeof input && null !== input && $io0(input, true);
  },
);
