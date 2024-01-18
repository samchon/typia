import typia from "typia";

import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";

export const test_misc_createAssertClone_TemplateAtomic =
  _test_misc_assertClone("TemplateAtomic")<TemplateAtomic>(TemplateAtomic)(
    (input: any): typia.Resolved<TemplateAtomic> => {
      const assert = (input: any): TemplateAtomic => {
        const __is = (input: any): input is TemplateAtomic => {
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
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is TemplateAtomic => {
            // @ts-ignore;
            declare const require: (lib: string) => any;
            const $guard = require("typia/lib/functional/$guard").$guard(
              "typia.misc.createAssertClone",
            );
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (("string" === typeof input.prefix &&
                RegExp(/^prefix_(.*)/).test(input.prefix)) ||
                $guard(_exceptionable, {
                  path: _path + ".prefix",
                  expected: "`prefix_${string}`",
                  value: input.prefix,
                })) &&
              (("string" === typeof input.postfix &&
                RegExp(/(.*)_postfix$/).test(input.postfix)) ||
                $guard(_exceptionable, {
                  path: _path + ".postfix",
                  expected: "`${string}_postfix`",
                  value: input.postfix,
                })) &&
              (("string" === typeof input.middle_string &&
                RegExp(/^the_(.*)_value$/).test(input.middle_string)) ||
                $guard(_exceptionable, {
                  path: _path + ".middle_string",
                  expected: "`the_${string}_value`",
                  value: input.middle_string,
                })) &&
              (("string" === typeof input.middle_string_empty &&
                RegExp(/^the_(.*)_value$/).test(input.middle_string_empty)) ||
                $guard(_exceptionable, {
                  path: _path + ".middle_string_empty",
                  expected: "`the_${string}_value`",
                  value: input.middle_string_empty,
                })) &&
              (("string" === typeof input.middle_numeric &&
                RegExp(/^the_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_value$/).test(
                  input.middle_numeric,
                )) ||
                $guard(_exceptionable, {
                  path: _path + ".middle_numeric",
                  expected: "`the_${number}_value`",
                  value: input.middle_numeric,
                })) &&
              ("the_false_value" === input.middle_boolean ||
                "the_true_value" === input.middle_boolean ||
                $guard(_exceptionable, {
                  path: _path + ".middle_boolean",
                  expected: '("the_false_value" | "the_true_value")',
                  value: input.middle_boolean,
                })) &&
              (("string" === typeof input.ipv4 &&
                RegExp(
                  /^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                ).test(input.ipv4)) ||
                $guard(_exceptionable, {
                  path: _path + ".ipv4",
                  expected: "`${number}.${number}.${number}.${number}`",
                  value: input.ipv4,
                })) &&
              (("string" === typeof input.email &&
                RegExp(/(.*)@(.*)\.(.*)/).test(input.email)) ||
                $guard(_exceptionable, {
                  path: _path + ".email",
                  expected: "`${string}@${string}.${string}`",
                  value: input.email,
                }));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(true, {
                  path: _path + "",
                  expected: "TemplateAtomic",
                  value: input,
                })) &&
                $ao0(input, _path + "", true)) ||
              $guard(true, {
                path: _path + "",
                expected: "TemplateAtomic",
                value: input,
              })
            );
          })(input, "$input", true);
        return input;
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
      assert(input);
      const output = clone(input);
      return output;
    },
  );
