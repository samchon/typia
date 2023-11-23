import typia from "typia";

import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";

export const test_misc_createIsClone_TemplateAtomic = _test_misc_isClone(
  "TemplateAtomic",
)<TemplateAtomic>(TemplateAtomic)(
  (input: any): typia.Resolved<TemplateAtomic> | null => {
    const is = (input: any): input is TemplateAtomic => {
      const $io0 = (input: any): boolean =>
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
        RegExp(/(.*)@(.*)\.(.*)/).test(input.email);
      return "object" === typeof input && null !== input && $io0(input);
    };
    const clone = (input: TemplateAtomic): typia.Resolved<TemplateAtomic> => {
      const $co0 = (input: any): any => ({
        prefix: input.prefix as any,
        postfix: input.postfix as any,
        middle_string: input.middle_string as any,
        middle_string_empty: input.middle_string_empty as any,
        middle_numeric: input.middle_numeric as any,
        middle_boolean: input.middle_boolean as any,
        ipv4: input.ipv4 as any,
        email: input.email as any,
      });
      return "object" === typeof input && null !== input
        ? $co0(input)
        : (input as any);
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
  },
);
