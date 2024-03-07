import typia from "typia";
import { _test_functional_validateReturn } from "../../../internal/_test_functional_validateReturn";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";
export const test_functional_validateReturn_TemplateAtomic =
  _test_functional_validateReturn("TemplateAtomic")(TemplateAtomic)(
    (p: (input: TemplateAtomic) => TemplateAtomic) =>
      (input: TemplateAtomic): import("typia").IValidation<TemplateAtomic> => {
        const result = ((input: any): typia.IValidation<TemplateAtomic> => {
          const errors = [] as any[];
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
          if (false === __is(input)) {
            const $report = (typia.functional.validateReturn as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is TemplateAtomic => {
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
                      expected: "`prefix_${string}`",
                      value: input.prefix,
                    }),
                  ("string" === typeof input.postfix &&
                    RegExp(/(.*)_postfix$/).test(input.postfix)) ||
                    $report(_exceptionable, {
                      path: _path + ".postfix",
                      expected: "`${string}_postfix`",
                      value: input.postfix,
                    }),
                  ("string" === typeof input.middle_string &&
                    RegExp(/^the_(.*)_value$/).test(input.middle_string)) ||
                    $report(_exceptionable, {
                      path: _path + ".middle_string",
                      expected: "`the_${string}_value`",
                      value: input.middle_string,
                    }),
                  ("string" === typeof input.middle_string_empty &&
                    RegExp(/^the_(.*)_value$/).test(
                      input.middle_string_empty,
                    )) ||
                    $report(_exceptionable, {
                      path: _path + ".middle_string_empty",
                      expected: "`the_${string}_value`",
                      value: input.middle_string_empty,
                    }),
                  ("string" === typeof input.middle_numeric &&
                    RegExp(
                      /^the_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_value$/,
                    ).test(input.middle_numeric)) ||
                    $report(_exceptionable, {
                      path: _path + ".middle_numeric",
                      expected: "`the_${number}_value`",
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
                      expected: "`${number}.${number}.${number}.${number}`",
                      value: input.ipv4,
                    }),
                  ("string" === typeof input.email &&
                    RegExp(/(.*)@(.*)\.(.*)/).test(input.email)) ||
                    $report(_exceptionable, {
                      path: _path + ".email",
                      expected: "`${string}@${string}.${string}`",
                      value: input.email,
                    }),
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
