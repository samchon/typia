import typia from "typia";

import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_createAssertEquals_TemplateConstant = _test_assertEquals(
  "TemplateConstant",
)<TemplateConstant>(TemplateConstant)((input: any): TemplateConstant => {
  const __is = (
    input: any,
    _exceptionable: boolean = true,
  ): input is TemplateConstant => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
      Array.isArray(input.value) &&
      input.value.every(
        (elem: any, _index1: number) =>
          "object" === typeof elem &&
          null !== elem &&
          $io1(elem, true && _exceptionable),
      ) &&
      (1 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (["value"].some((prop: any) => key === prop)) return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
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
        "the_1_value_with_label_C" === input.combined) &&
      (3 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (
            ["prefix", "postfix", "combined"].some((prop: any) => key === prop)
          )
            return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    return "object" === typeof input && null !== input && $io0(input, true);
  };
  if (false === __is(input))
    ((
      input: any,
      _path: string,
      _exceptionable: boolean = true,
    ): input is TemplateConstant => {
      // @ts-ignore;
      declare const require: (lib: string) => any;
      const $guard = require("typia/lib/functional/$guard").$guard(
        "typia.createAssertEquals",
      );
      const $join = require("typia/lib/functional/$join").$join;
      const $ao0 = (
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): boolean =>
        (((Array.isArray(input.value) ||
          $guard(_exceptionable, {
            path: _path + ".value",
            expected: "Array<TemplateConstant.Type>",
            value: input.value,
          })) &&
          input.value.every(
            (elem: any, _index1: number) =>
              ((("object" === typeof elem && null !== elem) ||
                $guard(_exceptionable, {
                  path: _path + ".value[" + _index1 + "]",
                  expected: "TemplateConstant.Type",
                  value: elem,
                })) &&
                $ao1(
                  elem,
                  _path + ".value[" + _index1 + "]",
                  true && _exceptionable,
                )) ||
              $guard(_exceptionable, {
                path: _path + ".value[" + _index1 + "]",
                expected: "TemplateConstant.Type",
                value: elem,
              }),
          )) ||
          $guard(_exceptionable, {
            path: _path + ".value",
            expected: "Array<TemplateConstant.Type>",
            value: input.value,
          })) &&
        (1 === Object.keys(input).length ||
          false === _exceptionable ||
          Object.keys(input).every((key: any) => {
            if (["value"].some((prop: any) => key === prop)) return true;
            const value = input[key];
            if (undefined === value) return true;
            return $guard(_exceptionable, {
              path: _path + $join(key),
              expected: "undefined",
              value: value,
            });
          }));
      const $ao1 = (
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): boolean =>
        ("prefix_A" === input.prefix ||
          "prefix_B" === input.prefix ||
          "prefix_C" === input.prefix ||
          $guard(_exceptionable, {
            path: _path + ".prefix",
            expected: '("prefix_A" | "prefix_B" | "prefix_C")',
            value: input.prefix,
          })) &&
        ("3_postfix" === input.postfix ||
          "2_postfix" === input.postfix ||
          "1_postfix" === input.postfix ||
          $guard(_exceptionable, {
            path: _path + ".postfix",
            expected: '("1_postfix" | "2_postfix" | "3_postfix")',
            value: input.postfix,
          })) &&
        ("the_3_value_with_label_A" === input.combined ||
          "the_3_value_with_label_B" === input.combined ||
          "the_3_value_with_label_C" === input.combined ||
          "the_2_value_with_label_A" === input.combined ||
          "the_2_value_with_label_B" === input.combined ||
          "the_2_value_with_label_C" === input.combined ||
          "the_1_value_with_label_A" === input.combined ||
          "the_1_value_with_label_B" === input.combined ||
          "the_1_value_with_label_C" === input.combined ||
          $guard(_exceptionable, {
            path: _path + ".combined",
            expected:
              '("the_1_value_with_label_A" | "the_1_value_with_label_B" | "the_1_value_with_label_C" | "the_2_value_with_label_A" | "the_2_value_with_label_B" | "the_2_value_with_label_C" | "the_3_value_with_label_A" | "the_3_value_with_label_B" | "the_3_value_with_label_C")',
            value: input.combined,
          })) &&
        (3 === Object.keys(input).length ||
          false === _exceptionable ||
          Object.keys(input).every((key: any) => {
            if (
              ["prefix", "postfix", "combined"].some(
                (prop: any) => key === prop,
              )
            )
              return true;
            const value = input[key];
            if (undefined === value) return true;
            return $guard(_exceptionable, {
              path: _path + $join(key),
              expected: "undefined",
              value: value,
            });
          }));
      return (
        ((("object" === typeof input && null !== input) ||
          $guard(true, {
            path: _path + "",
            expected: "TemplateConstant",
            value: input,
          })) &&
          $ao0(input, _path + "", true)) ||
        $guard(true, {
          path: _path + "",
          expected: "TemplateConstant",
          value: input,
        })
      );
    })(input, "$input", true);
  return input;
});
