import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../../internal/_test_functional_validateEqualsReturn";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";

export const test_functional_validateEqualsReturn_TemplateAtomic =
  _test_functional_validateEqualsReturn("TemplateAtomic")(TemplateAtomic)(
    (p: (input: TemplateAtomic) => TemplateAtomic) =>
      (input: TemplateAtomic): import("typia").IValidation<TemplateAtomic> => {
        const result = ((input: any): typia.IValidation<TemplateAtomic> => {
          const errors = [] as any[];
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is TemplateAtomic => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
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
            return (
              "object" === typeof input && null !== input && $io0(input, true)
            );
          };
          if (false === __is(input)) {
            const $report = (
              typia.functional.validateEqualsReturn as any
            ).report(errors);
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is TemplateAtomic => {
              const $join = (typia.functional.validateEqualsReturn as any).join;
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  ("string" === typeof input.prefix &&
                    RegExp(/^prefix_(.*)/).test(input.prefix)) ||
                    $report(_exceptionable, {
                      path: _path + ".prefix",
                      expected: "`[object Object]${string}`",
                      value: input.prefix,
                    }),
                  ("string" === typeof input.postfix &&
                    RegExp(/(.*)_postfix$/).test(input.postfix)) ||
                    $report(_exceptionable, {
                      path: _path + ".postfix",
                      expected: "`${string}[object Object]`",
                      value: input.postfix,
                    }),
                  ("string" === typeof input.middle_string &&
                    RegExp(/^the_(.*)_value$/).test(input.middle_string)) ||
                    $report(_exceptionable, {
                      path: _path + ".middle_string",
                      expected: "`[object Object]${string}[object Object]`",
                      value: input.middle_string,
                    }),
                  ("string" === typeof input.middle_string_empty &&
                    RegExp(/^the_(.*)_value$/).test(
                      input.middle_string_empty,
                    )) ||
                    $report(_exceptionable, {
                      path: _path + ".middle_string_empty",
                      expected: "`[object Object]${string}[object Object]`",
                      value: input.middle_string_empty,
                    }),
                  ("string" === typeof input.middle_numeric &&
                    RegExp(
                      /^the_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_value$/,
                    ).test(input.middle_numeric)) ||
                    $report(_exceptionable, {
                      path: _path + ".middle_numeric",
                      expected: "`[object Object]${number}[object Object]`",
                      value: input.middle_numeric,
                    }),
                  "the_false_value" === input.middle_boolean ||
                    "the_true_value" === input.middle_boolean ||
                    $report(_exceptionable, {
                      path: _path + ".middle_boolean",
                      expected: '("the_false_value" | "the_true_value")',
                      value: input.middle_boolean,
                    }),
                  ("string" === typeof input.ipv4 &&
                    RegExp(
                      /^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                    ).test(input.ipv4)) ||
                    $report(_exceptionable, {
                      path: _path + ".ipv4",
                      expected:
                        "`${number}[object Object]${number}[object Object]${number}[object Object]${number}`",
                      value: input.ipv4,
                    }),
                  ("string" === typeof input.email &&
                    RegExp(/(.*)@(.*)\.(.*)/).test(input.email)) ||
                    $report(_exceptionable, {
                      path: _path + ".email",
                      expected:
                        "`${string}[object Object]${string}[object Object]${string}`",
                      value: input.email,
                    }),
                  8 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input)
                      .map((key: any) => {
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
                        return $report(_exceptionable, {
                          path: _path + $join(key),
                          expected: "undefined",
                          value: value,
                        });
                      })
                      .every((flag: boolean) => flag),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "TemplateAtomic",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "TemplateAtomic",
                  value: input,
                })
              );
            })(input, "$input", true);
          }
          const success = 0 === errors.length;
          return {
            success,
            errors,
            data: success ? input : undefined,
          } as any;
        })(p(input));
        if (!result.success)
          result.errors = result.errors.map((error: any) => ({
            ...error,
            path: error.path.replace("$input", "$input.return"),
          }));
        return result;
      },
  );
