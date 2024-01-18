import typia from "typia";

import { _test_validate } from "../../../internal/_test_validate";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_createValidate_DynamicSimple = _test_validate(
  "DynamicSimple",
)<DynamicSimple>(DynamicSimple)(
  (input: any): typia.IValidation<DynamicSimple> => {
    const errors = [] as any[];
    const __is = (input: any): input is DynamicSimple => {
      const $io0 = (input: any): boolean =>
        "object" === typeof input.value &&
        null !== input.value &&
        false === Array.isArray(input.value) &&
        $io1(input.value);
      const $io1 = (input: any): boolean =>
        Object.keys(input).every((key: any) => {
          const value = input[key];
          if (undefined === value) return true;
          if (true) return "number" === typeof value && Number.isFinite(value);
          return true;
        });
      return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input)) {
      const $report = require("typia/lib/functional/$report").$report(errors);
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is DynamicSimple => {
        const $join = require("typia/lib/functional/$join").$join;
        const $vo0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            ((("object" === typeof input.value &&
              null !== input.value &&
              false === Array.isArray(input.value)) ||
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
            false === _exceptionable ||
              Object.keys(input)
                .map((key: any) => {
                  const value = input[key];
                  if (undefined === value) return true;
                  if (true)
                    return (
                      ("number" === typeof value && Number.isFinite(value)) ||
                      $report(_exceptionable, {
                        path: _path + $join(key),
                        expected: "number",
                        value: value,
                      })
                    );
                  return true;
                })
                .every((flag: boolean) => flag),
          ].every((flag: boolean) => flag);
        return (
          ((("object" === typeof input && null !== input) ||
            $report(true, {
              path: _path + "",
              expected: "DynamicSimple",
              value: input,
            })) &&
            $vo0(input, _path + "", true)) ||
          $report(true, {
            path: _path + "",
            expected: "DynamicSimple",
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
