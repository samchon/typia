import typia from "typia";

import { _test_validate } from "../../../internal/_test_validate";
import { ToJsonAtomicSimple } from "../../../structures/ToJsonAtomicSimple";

export const test_createValidate_ToJsonAtomicSimple = _test_validate(
  "ToJsonAtomicSimple",
)<ToJsonAtomicSimple>(ToJsonAtomicSimple)(
  (input: any): typia.IValidation<ToJsonAtomicSimple> => {
    const errors = [] as any[];
    const __is = (input: any): input is ToJsonAtomicSimple => {
      const $io0 = (input: any): boolean => "function" === typeof input.toJSON;
      const $io1 = (input: any): boolean => "function" === typeof input.toJSON;
      const $io2 = (input: any): boolean => "function" === typeof input.toJSON;
      return (
        Array.isArray(input) &&
        input.length === 3 &&
        "object" === typeof input[0] &&
        null !== input[0] &&
        $io0(input[0]) &&
        "object" === typeof input[1] &&
        null !== input[1] &&
        $io1(input[1]) &&
        "object" === typeof input[2] &&
        null !== input[2] &&
        $io2(input[2])
      );
    };
    if (false === __is(input)) {
      const $report = (typia.createValidate as any).report(errors);
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ToJsonAtomicSimple => {
        const $vo0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            "function" === typeof input.toJSON ||
              $report(_exceptionable, {
                path: _path + ".toJSON",
                expected: "unknown",
                value: input.toJSON,
              }),
          ].every((flag: boolean) => flag);
        const $vo1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            "function" === typeof input.toJSON ||
              $report(_exceptionable, {
                path: _path + ".toJSON",
                expected: "unknown",
                value: input.toJSON,
              }),
          ].every((flag: boolean) => flag);
        const $vo2 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            "function" === typeof input.toJSON ||
              $report(_exceptionable, {
                path: _path + ".toJSON",
                expected: "unknown",
                value: input.toJSON,
              }),
          ].every((flag: boolean) => flag);
        return (
          ((Array.isArray(input) ||
            $report(true, {
              path: _path + "",
              expected: "ToJsonAtomicSimple",
              value: input,
            })) &&
            (input.length === 3 ||
              $report(true, {
                path: _path + "",
                expected:
                  "[ToJsonAtomicSimple.IToJson<boolean>, ToJsonAtomicSimple.IToJson<number>, ToJsonAtomicSimple.IToJson<string>]",
                value: input,
              })) &&
            [
              ((("object" === typeof input[0] && null !== input[0]) ||
                $report(true, {
                  path: _path + "[0]",
                  expected: "ToJsonAtomicSimple.IToJson<boolean>",
                  value: input[0],
                })) &&
                $vo0(input[0], _path + "[0]", true)) ||
                $report(true, {
                  path: _path + "[0]",
                  expected: "ToJsonAtomicSimple.IToJson<boolean>",
                  value: input[0],
                }),
              ((("object" === typeof input[1] && null !== input[1]) ||
                $report(true, {
                  path: _path + "[1]",
                  expected: "ToJsonAtomicSimple.IToJson<number>",
                  value: input[1],
                })) &&
                $vo1(input[1], _path + "[1]", true)) ||
                $report(true, {
                  path: _path + "[1]",
                  expected: "ToJsonAtomicSimple.IToJson<number>",
                  value: input[1],
                }),
              ((("object" === typeof input[2] && null !== input[2]) ||
                $report(true, {
                  path: _path + "[2]",
                  expected: "ToJsonAtomicSimple.IToJson<string>",
                  value: input[2],
                })) &&
                $vo2(input[2], _path + "[2]", true)) ||
                $report(true, {
                  path: _path + "[2]",
                  expected: "ToJsonAtomicSimple.IToJson<string>",
                  value: input[2],
                }),
            ].every((flag: boolean) => flag)) ||
          $report(true, {
            path: _path + "",
            expected: "ToJsonAtomicSimple",
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
