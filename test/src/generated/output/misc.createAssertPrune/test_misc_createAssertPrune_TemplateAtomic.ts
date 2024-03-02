import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";

export const test_misc_createAssertPrune_TemplateAtomic =
  _test_misc_assertPrune(TypeGuardError)("TemplateAtomic")<TemplateAtomic>(
    TemplateAtomic,
  )(
    (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): TemplateAtomic => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): TemplateAtomic => {
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
            const $guard = (typia.misc.createAssertPrune as any).guard;
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (("string" === typeof input.prefix &&
                RegExp(/^prefix_(.*)/).test(input.prefix)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".prefix",
                    expected: "`prefix_${string}`",
                    value: input.prefix,
                  },
                  errorFactory,
                )) &&
              (("string" === typeof input.postfix &&
                RegExp(/(.*)_postfix$/).test(input.postfix)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".postfix",
                    expected: "`${string}_postfix`",
                    value: input.postfix,
                  },
                  errorFactory,
                )) &&
              (("string" === typeof input.middle_string &&
                RegExp(/^the_(.*)_value$/).test(input.middle_string)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".middle_string",
                    expected: "`the_${string}_value`",
                    value: input.middle_string,
                  },
                  errorFactory,
                )) &&
              (("string" === typeof input.middle_string_empty &&
                RegExp(/^the_(.*)_value$/).test(input.middle_string_empty)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".middle_string_empty",
                    expected: "`the_${string}_value`",
                    value: input.middle_string_empty,
                  },
                  errorFactory,
                )) &&
              (("string" === typeof input.middle_numeric &&
                RegExp(/^the_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_value$/).test(
                  input.middle_numeric,
                )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".middle_numeric",
                    expected: "`the_${number}_value`",
                    value: input.middle_numeric,
                  },
                  errorFactory,
                )) &&
              ("the_false_value" === input.middle_boolean ||
                "the_true_value" === input.middle_boolean ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".middle_boolean",
                    expected: '("the_false_value" | "the_true_value")',
                    value: input.middle_boolean,
                  },
                  errorFactory,
                )) &&
              (("string" === typeof input.ipv4 &&
                RegExp(
                  /^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                ).test(input.ipv4)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".ipv4",
                    expected: "`${number}.${number}.${number}.${number}`",
                    value: input.ipv4,
                  },
                  errorFactory,
                )) &&
              (("string" === typeof input.email &&
                RegExp(/(.*)@(.*)\.(.*)/).test(input.email)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".email",
                    expected: "`${string}@${string}.${string}`",
                    value: input.email,
                  },
                  errorFactory,
                ));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "TemplateAtomic",
                    value: input,
                  },
                  errorFactory,
                )) &&
                $ao0(input, _path + "", true)) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "TemplateAtomic",
                  value: input,
                },
                errorFactory,
              )
            );
          })(input, "$input", true);
        return input;
      };
      const prune = (input: TemplateAtomic): void => {
        const $po0 = (input: any): any => {
          for (const key of Object.keys(input)) {
            if (
              "prefix" === key ||
              "postfix" === key ||
              "middle_string" === key ||
              "middle_string_empty" === key ||
              "middle_numeric" === key ||
              "middle_boolean" === key ||
              "ipv4" === key ||
              "email" === key
            )
              continue;
            delete input[key];
          }
        };
        if ("object" === typeof input && null !== input) $po0(input);
      };
      assert(input, errorFactory);
      prune(input);
      return input;
    },
  );
