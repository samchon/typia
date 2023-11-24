import typia from "typia";

import { _test_assert } from "../../../internal/_test_assert";
import { DynamicNever } from "../../../structures/DynamicNever";

export const test_createAssert_DynamicNever = _test_assert(
  "DynamicNever",
)<DynamicNever>(DynamicNever)((input: any): DynamicNever => {
  const __is = (input: any): input is DynamicNever => {
    const $io0 = (input: any): boolean =>
      Object.keys(input).every((key: any) => {
        const value = input[key];
        if (undefined === value) return true;
        if (true) return null !== value && undefined === value;
        return true;
      });
    return (
      "object" === typeof input &&
      null !== input &&
      false === Array.isArray(input) &&
      $io0(input)
    );
  };
  if (false === __is(input))
    ((
      input: any,
      _path: string,
      _exceptionable: boolean = true,
    ): input is DynamicNever => {
      const $guard = (typia.createAssert as any).guard;
      const $join = (typia.createAssert as any).join;
      const $ao0 = (
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): boolean =>
        false === _exceptionable ||
        Object.keys(input).every((key: any) => {
          const value = input[key];
          if (undefined === value) return true;
          if (true)
            return (
              (null !== value ||
                $guard(_exceptionable, {
                  path: _path + $join(key),
                  expected: "undefined",
                  value: value,
                })) &&
              (undefined === value ||
                $guard(_exceptionable, {
                  path: _path + $join(key),
                  expected: "undefined",
                  value: value,
                }))
            );
          return true;
        });
      return (
        ((("object" === typeof input &&
          null !== input &&
          false === Array.isArray(input)) ||
          $guard(true, {
            path: _path + "",
            expected: "DynamicNever",
            value: input,
          })) &&
          $ao0(input, _path + "", true)) ||
        $guard(true, {
          path: _path + "",
          expected: "DynamicNever",
          value: input,
        })
      );
    })(input, "$input", true);
  return input;
});
