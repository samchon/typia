import typia from "typia";

import { _test_assert } from "../../../internal/_test_assert";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";

export const test_assert_DynamicUndefined = _test_assert(
  "DynamicUndefined",
)<DynamicUndefined>(DynamicUndefined)((input) =>
  ((input: any): DynamicUndefined => {
    const __is = (input: any): input is DynamicUndefined => {
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
      ): input is DynamicUndefined => {
        const $guard = (typia.assert as any).guard;
        const $join = (typia.assert as any).join;
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
              expected: "DynamicUndefined",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "DynamicUndefined",
            value: input,
          })
        );
      })(input, "$input", true);
    return input;
  })(input),
);
