import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../../internal/_test_functional_validateEqualsParametersAsync";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_functional_validateEqualsParametersAsync_TemplateConstant =
  _test_functional_validateEqualsParametersAsync("TemplateConstant")(
    TemplateConstant,
  )(
    (p: (input: TemplateConstant) => Promise<TemplateConstant>) =>
      async (
        input: TemplateConstant,
      ): Promise<import("typia").IValidation<TemplateConstant>> => {
        const paramResults = [
          ((input: any): typia.IValidation<TemplateConstant> => {
            const errors = [] as any[];
            const __is = (
              input: any,
              _exceptionable: boolean = true,
            ): input is TemplateConstant => {
              const $io0 = (
                input: any,
                _exceptionable: boolean = true,
              ): boolean =>
                Array.isArray(input.value) &&
                input.value.every(
                  (elem: any, _index1: number) =>
                    "object" === typeof elem &&
                    null !== elem &&
                    $io1(elem, true && _exceptionable),
                ) &&
                (1 === Object.keys(input).length ||
                  Object.keys(input).every((key: any) => {
                    if (["value"].some((prop: any) => key === prop))
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                  }));
              const $io1 = (
                input: any,
                _exceptionable: boolean = true,
              ): boolean =>
                ("prefix_A" === input.prefix ||
                  "prefix_B" === input.prefix ||
                  "prefix_C" === input.prefix) &&
                ("1_postfix" === input.postfix ||
                  "2_postfix" === input.postfix ||
                  "3_postfix" === input.postfix) &&
                ("the_1_value_with_label_A" === input.combined ||
                  "the_1_value_with_label_B" === input.combined ||
                  "the_1_value_with_label_C" === input.combined ||
                  "the_2_value_with_label_A" === input.combined ||
                  "the_2_value_with_label_B" === input.combined ||
                  "the_2_value_with_label_C" === input.combined ||
                  "the_3_value_with_label_A" === input.combined ||
                  "the_3_value_with_label_B" === input.combined ||
                  "the_3_value_with_label_C" === input.combined) &&
                (3 === Object.keys(input).length ||
                  Object.keys(input).every((key: any) => {
                    if (
                      ["prefix", "postfix", "combined"].some(
                        (prop: any) => key === prop,
                      )
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
                typia.functional.validateEqualsParameters as any
              ).report(errors);
              ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): input is TemplateConstant => {
                const $join = (typia.functional.validateEqualsParameters as any)
                  .join;
                const $vo0 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    ((Array.isArray(input.value) ||
                      $report(_exceptionable, {
                        path: _path + ".value",
                        expected: "Array<TemplateConstant.Type>",
                        value: input.value,
                      })) &&
                      input.value
                        .map(
                          (elem: any, _index1: number) =>
                            ((("object" === typeof elem && null !== elem) ||
                              $report(_exceptionable, {
                                path: _path + ".value[" + _index1 + "]",
                                expected: "TemplateConstant.Type",
                                value: elem,
                              })) &&
                              $vo1(
                                elem,
                                _path + ".value[" + _index1 + "]",
                                true && _exceptionable,
                              )) ||
                            $report(_exceptionable, {
                              path: _path + ".value[" + _index1 + "]",
                              expected: "TemplateConstant.Type",
                              value: elem,
                            }),
                        )
                        .every((flag: boolean) => flag)) ||
                      $report(_exceptionable, {
                        path: _path + ".value",
                        expected: "Array<TemplateConstant.Type>",
                        value: input.value,
                      }),
                    1 === Object.keys(input).length ||
                      false === _exceptionable ||
                      Object.keys(input)
                        .map((key: any) => {
                          if (["value"].some((prop: any) => key === prop))
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
                const $vo1 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    "prefix_A" === input.prefix ||
                      "prefix_B" === input.prefix ||
                      "prefix_C" === input.prefix ||
                      $report(_exceptionable, {
                        path: _path + ".prefix",
                        expected: '("prefix_A" | "prefix_B" | "prefix_C")',
                        value: input.prefix,
                      }),
                    "1_postfix" === input.postfix ||
                      "2_postfix" === input.postfix ||
                      "3_postfix" === input.postfix ||
                      $report(_exceptionable, {
                        path: _path + ".postfix",
                        expected: '("1_postfix" | "2_postfix" | "3_postfix")',
                        value: input.postfix,
                      }),
                    "the_1_value_with_label_A" === input.combined ||
                      "the_1_value_with_label_B" === input.combined ||
                      "the_1_value_with_label_C" === input.combined ||
                      "the_2_value_with_label_A" === input.combined ||
                      "the_2_value_with_label_B" === input.combined ||
                      "the_2_value_with_label_C" === input.combined ||
                      "the_3_value_with_label_A" === input.combined ||
                      "the_3_value_with_label_B" === input.combined ||
                      "the_3_value_with_label_C" === input.combined ||
                      $report(_exceptionable, {
                        path: _path + ".combined",
                        expected:
                          '("the_1_value_with_label_A" | "the_1_value_with_label_B" | "the_1_value_with_label_C" | "the_2_value_with_label_A" | "the_2_value_with_label_B" | "the_2_value_with_label_C" | "the_3_value_with_label_A" | "the_3_value_with_label_B" | "the_3_value_with_label_C")',
                        value: input.combined,
                      }),
                    3 === Object.keys(input).length ||
                      false === _exceptionable ||
                      Object.keys(input)
                        .map((key: any) => {
                          if (
                            ["prefix", "postfix", "combined"].some(
                              (prop: any) => key === prop,
                            )
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
                      expected: "TemplateConstant",
                      value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "TemplateConstant",
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
          })(input) as import("typia").IValidation.IFailure,
        ].filter((r: any) => false === r.success);
        if (paramResults.length > 0)
          return {
            success: false,
            errors: paramResults
              .map((r: any, i: any) =>
                r.errors.map((error: any) => ({
                  ...error,
                  path: error.path.replace("$input", `$input.parameters[${i}]`),
                })),
              )
              .flat(),
          };
        return {
          success: true,
          data: await p(input),
          errors: [],
        };
      },
  );
