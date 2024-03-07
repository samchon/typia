import typia from "typia";
import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { TemplateConstant } from "../../../structures/TemplateConstant";
export const test_notation_validateSnake_TemplateConstant =
  _test_notation_validateGeneral("TemplateConstant")<TemplateConstant>(
    TemplateConstant,
  )<typia.SnakeCase<TemplateConstant>>({
    convert: (input) =>
      ((input: any): typia.IValidation<typia.SnakeCase<TemplateConstant>> => {
        const validate = (input: any): typia.IValidation<TemplateConstant> => {
          const errors = [] as any[];
          const __is = (input: any): input is TemplateConstant => {
            const $io0 = (input: any): boolean =>
              Array.isArray(input.value) &&
              input.value.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io1(elem),
              );
            const $io1 = (input: any): boolean =>
              ("prefix_A" === input.prefix ||
                "prefix_B" === input.prefix ||
                "prefix_C" === input.prefix) &&
              ("3_postfix" === input.postfix ||
                "2_postfix" === input.postfix ||
                "1_postfix" === input.postfix) &&
              ("the_3_value_with_label_A" === input.combined ||
                "the_3_value_with_label_B" === input.combined ||
                "the_3_value_with_label_C" === input.combined ||
                "the_2_value_with_label_A" === input.combined ||
                "the_2_value_with_label_B" === input.combined ||
                "the_2_value_with_label_C" === input.combined ||
                "the_1_value_with_label_A" === input.combined ||
                "the_1_value_with_label_B" === input.combined ||
                "the_1_value_with_label_C" === input.combined);
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input)) {
            const $report = (typia.notations.validateSnake as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is TemplateConstant => {
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
                  "3_postfix" === input.postfix ||
                    "2_postfix" === input.postfix ||
                    "1_postfix" === input.postfix ||
                    $report(_exceptionable, {
                      path: _path + ".postfix",
                      expected: '("1_postfix" | "2_postfix" | "3_postfix")',
                      value: input.postfix,
                    }),
                  "the_3_value_with_label_A" === input.combined ||
                    "the_3_value_with_label_B" === input.combined ||
                    "the_3_value_with_label_C" === input.combined ||
                    "the_2_value_with_label_A" === input.combined ||
                    "the_2_value_with_label_B" === input.combined ||
                    "the_2_value_with_label_C" === input.combined ||
                    "the_1_value_with_label_A" === input.combined ||
                    "the_1_value_with_label_B" === input.combined ||
                    "the_1_value_with_label_C" === input.combined ||
                    $report(_exceptionable, {
                      path: _path + ".combined",
                      expected:
                        '("the_1_value_with_label_A" | "the_1_value_with_label_B" | "the_1_value_with_label_C" | "the_2_value_with_label_A" | "the_2_value_with_label_B" | "the_2_value_with_label_C" | "the_3_value_with_label_A" | "the_3_value_with_label_B" | "the_3_value_with_label_C")',
                      value: input.combined,
                    }),
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
        };
        const general = (
          input: TemplateConstant,
        ): typia.SnakeCase<TemplateConstant> => {
          const $io1 = (input: any): boolean =>
            ("prefix_A" === input.prefix ||
              "prefix_B" === input.prefix ||
              "prefix_C" === input.prefix) &&
            ("3_postfix" === input.postfix ||
              "2_postfix" === input.postfix ||
              "1_postfix" === input.postfix) &&
            ("the_3_value_with_label_A" === input.combined ||
              "the_3_value_with_label_B" === input.combined ||
              "the_3_value_with_label_C" === input.combined ||
              "the_2_value_with_label_A" === input.combined ||
              "the_2_value_with_label_B" === input.combined ||
              "the_2_value_with_label_C" === input.combined ||
              "the_1_value_with_label_A" === input.combined ||
              "the_1_value_with_label_B" === input.combined ||
              "the_1_value_with_label_C" === input.combined);
          const $cp0 = (input: any) =>
            input.map((elem: any) =>
              "object" === typeof elem && null !== elem
                ? $co1(elem)
                : (elem as any),
            );
          const $co0 = (input: any): any => ({
            value: Array.isArray(input.value)
              ? $cp0(input.value)
              : (input.value as any),
          });
          const $co1 = (input: any): any => ({
            prefix: input.prefix as any,
            postfix: input.postfix as any,
            combined: input.combined as any,
          });
          return "object" === typeof input && null !== input
            ? $co0(input)
            : (input as any);
        };
        const output = validate(input) as any;
        if (output.success) output.data = general(input);
        return output;
      })(input),
    assert: (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): typia.SnakeCase<TemplateConstant> => {
      const __is = (input: any): input is typia.SnakeCase<TemplateConstant> => {
        const $io0 = (input: any): boolean =>
          Array.isArray(input.value) &&
          input.value.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io1(elem),
          );
        const $io1 = (input: any): boolean =>
          ("prefix_A" === input.prefix ||
            "prefix_B" === input.prefix ||
            "prefix_C" === input.prefix) &&
          ("3_postfix" === input.postfix ||
            "2_postfix" === input.postfix ||
            "1_postfix" === input.postfix) &&
          ("the_3_value_with_label_A" === input.combined ||
            "the_3_value_with_label_B" === input.combined ||
            "the_3_value_with_label_C" === input.combined ||
            "the_2_value_with_label_A" === input.combined ||
            "the_2_value_with_label_B" === input.combined ||
            "the_2_value_with_label_C" === input.combined ||
            "the_1_value_with_label_A" === input.combined ||
            "the_1_value_with_label_B" === input.combined ||
            "the_1_value_with_label_C" === input.combined);
        return "object" === typeof input && null !== input && $io0(input);
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.SnakeCase<TemplateConstant> => {
          const $guard = (typia.createAssert as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ((Array.isArray(input.value) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".value",
                  expected: "Array<TemplateConstant.Type>",
                  value: input.value,
                },
                errorFactory,
              )) &&
              input.value.every(
                (elem: any, _index1: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".value[" + _index1 + "]",
                        expected: "TemplateConstant.Type",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao1(
                      elem,
                      _path + ".value[" + _index1 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".value[" + _index1 + "]",
                      expected: "TemplateConstant.Type",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".value",
                expected: "Array<TemplateConstant.Type>",
                value: input.value,
              },
              errorFactory,
            );
          const $ao1 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ("prefix_A" === input.prefix ||
              "prefix_B" === input.prefix ||
              "prefix_C" === input.prefix ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".prefix",
                  expected: '("prefix_A" | "prefix_B" | "prefix_C")',
                  value: input.prefix,
                },
                errorFactory,
              )) &&
            ("3_postfix" === input.postfix ||
              "2_postfix" === input.postfix ||
              "1_postfix" === input.postfix ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".postfix",
                  expected: '("1_postfix" | "2_postfix" | "3_postfix")',
                  value: input.postfix,
                },
                errorFactory,
              )) &&
            ("the_3_value_with_label_A" === input.combined ||
              "the_3_value_with_label_B" === input.combined ||
              "the_3_value_with_label_C" === input.combined ||
              "the_2_value_with_label_A" === input.combined ||
              "the_2_value_with_label_B" === input.combined ||
              "the_2_value_with_label_C" === input.combined ||
              "the_1_value_with_label_A" === input.combined ||
              "the_1_value_with_label_B" === input.combined ||
              "the_1_value_with_label_C" === input.combined ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".combined",
                  expected:
                    '("the_1_value_with_label_A" | "the_1_value_with_label_B" | "the_1_value_with_label_C" | "the_2_value_with_label_A" | "the_2_value_with_label_B" | "the_2_value_with_label_C" | "the_3_value_with_label_A" | "the_3_value_with_label_B" | "the_3_value_with_label_C")',
                  value: input.combined,
                },
                errorFactory,
              ));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "TemplateConstant",
                  value: input,
                },
                errorFactory,
              )) &&
              $ao0(input, _path + "", true)) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "TemplateConstant",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
      return input;
    },
  });
