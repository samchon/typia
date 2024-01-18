import typia from "typia";

import { _test_validate } from "../../../internal/_test_validate";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_createValidate_DynamicConstant = _test_validate(
  "DynamicConstant",
)<DynamicConstant>(DynamicConstant)(
  (input: any): typia.IValidation<DynamicConstant> => {
    const errors = [] as any[];
    const __is = (input: any): input is DynamicConstant => {
      return (
        "object" === typeof input &&
        null !== input &&
        "object" === typeof (input as any).value &&
        null !== (input as any).value &&
        "number" === typeof ((input as any).value as any).a &&
        Number.isFinite(((input as any).value as any).a) &&
        "number" === typeof ((input as any).value as any).b &&
        Number.isFinite(((input as any).value as any).b) &&
        "number" === typeof ((input as any).value as any).c &&
        Number.isFinite(((input as any).value as any).c) &&
        "number" === typeof ((input as any).value as any).d &&
        Number.isFinite(((input as any).value as any).d)
      );
    };
    if (false === __is(input)) {
      const $report = require("typia/lib/functional/$report").$report(errors);
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is DynamicConstant => {
        const $vo0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            ((("object" === typeof input.value && null !== input.value) ||
              $report(_exceptionable, {
                path: _path + ".value",
                expected: "__type",
                value: input.value,
              })) &&
              $vo1(input.value, _path + ".value", true && _exceptionable)) ||
              $report(_exceptionable, {
                path: _path + ".value",
                expected: "__type",
                value: input.value,
              }),
          ].every((flag: boolean) => flag);
        const $vo1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            ("number" === typeof input.a && Number.isFinite(input.a)) ||
              $report(_exceptionable, {
                path: _path + ".a",
                expected: "number",
                value: input.a,
              }),
            ("number" === typeof input.b && Number.isFinite(input.b)) ||
              $report(_exceptionable, {
                path: _path + ".b",
                expected: "number",
                value: input.b,
              }),
            ("number" === typeof input.c && Number.isFinite(input.c)) ||
              $report(_exceptionable, {
                path: _path + ".c",
                expected: "number",
                value: input.c,
              }),
            ("number" === typeof input.d && Number.isFinite(input.d)) ||
              $report(_exceptionable, {
                path: _path + ".d",
                expected: "number",
                value: input.d,
              }),
          ].every((flag: boolean) => flag);
        return (
          ((("object" === typeof input && null !== input) ||
            $report(true, {
              path: _path + "",
              expected: "DynamicConstant",
              value: input,
            })) &&
            $vo0(input, _path + "", true)) ||
          $report(true, {
            path: _path + "",
            expected: "DynamicConstant",
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
  },
);
