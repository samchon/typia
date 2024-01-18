import typia from "typia";

import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_createAssertEquals_ToJsonDouble = _test_assertEquals(
  "ToJsonDouble",
)<ToJsonDouble>(ToJsonDouble)((input: any): ToJsonDouble => {
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
      const $guard = require("typia/lib/functional/$guard").$guard(
        "typia.createAssertEquals",
      );
      const $join = require("typia/lib/functional/$join").$join;
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
  return input;
});
