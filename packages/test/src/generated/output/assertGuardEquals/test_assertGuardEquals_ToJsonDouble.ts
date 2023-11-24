import typia from "typia";

import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_assertGuardEquals_ToJsonDouble = _test_assertGuardEquals(
  "ToJsonDouble",
)<ToJsonDouble>(ToJsonDouble)((input) =>
  ((input: any): asserts input is ToJsonDouble => {
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is ToJsonDouble => {
      const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
        0 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          const value = input[key];
          if (undefined === value) return true;
          return false;
        });
      return (
        "object" === typeof input &&
        null !== input &&
        false === Array.isArray(input) &&
        $io0(input, true)
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ToJsonDouble => {
        const $guard = (typia.assertGuardEquals as any).guard;
        const $join = (typia.assertGuardEquals as any).join;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          0 === Object.keys(input).length ||
          false === _exceptionable ||
          Object.keys(input).every((key: any) => {
            const value = input[key];
            if (undefined === value) return true;
            return $guard(_exceptionable, {
              path: _path + $join(key),
              expected: "undefined",
              value: value,
            });
          });
        return (
          ((("object" === typeof input &&
            null !== input &&
            false === Array.isArray(input)) ||
            $guard(true, {
              path: _path + "",
              expected: "ToJsonDouble.Parent",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "ToJsonDouble.Parent",
            value: input,
          })
        );
      })(input, "$input", true);
  })(input),
);
