import typia from "typia";

import { _test_json_validateStringify } from "../../../internal/_test_json_validateStringify";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_json_createValidateStringify_TemplateConstant =
  _test_json_validateStringify("TemplateConstant")<TemplateConstant>(
    TemplateConstant,
  )((input: TemplateConstant): typia.IValidation<string> => {
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
        const $report = require("typia/lib/functional/$report").$report(errors);
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
    const stringify = (input: TemplateConstant): string => {
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
      // @ts-ignore;
      declare const require: (lib: string) => any;
      const $string = require("typia/lib/functional/$string").$string;
      const $throws = require("typia/lib/functional/$throws").$throws(
        "typia.json.createValidateStringify",
      );
      const $so0 = (input: any): any =>
        `{"value":${`[${input.value
          .map((elem: any) => $so1(elem))
          .join(",")}]`}}`;
      const $so1 = (input: any): any =>
        `{"prefix":${(() => {
          if ("string" === typeof input.prefix) return $string(input.prefix);
          if ("string" === typeof input.prefix) return '"' + input.prefix + '"';
          $throws({
            expected: '("prefix_A" | "prefix_B" | "prefix_C")',
            value: input.prefix,
          });
        })()},"postfix":${(() => {
          if ("string" === typeof input.postfix) return $string(input.postfix);
          if ("string" === typeof input.postfix)
            return '"' + input.postfix + '"';
          $throws({
            expected: '("1_postfix" | "2_postfix" | "3_postfix")',
            value: input.postfix,
          });
        })()},"combined":${(() => {
          if ("string" === typeof input.combined)
            return $string(input.combined);
          if ("string" === typeof input.combined)
            return '"' + input.combined + '"';
          $throws({
            expected:
              '("the_1_value_with_label_A" | "the_1_value_with_label_B" | "the_1_value_with_label_C" | "the_2_value_with_label_A" | "the_2_value_with_label_B" | "the_2_value_with_label_C" | "the_3_value_with_label_A" | "the_3_value_with_label_B" | "the_3_value_with_label_C")',
            value: input.combined,
          });
        })()}}`;
      return $so0(input);
    };
    const output = validate(input) as any;
    if (output.success) output.data = stringify(input);
    return output;
  });
