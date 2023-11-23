import typia from "typia";

import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { DynamicArray } from "../../../structures/DynamicArray";

export const test_createAssertGuard_DynamicArray = _test_assertGuard(
  "DynamicArray",
)<DynamicArray>(DynamicArray)((input: any): asserts input is DynamicArray => {
  const __is = (input: any): input is DynamicArray => {
    const $io0 = (input: any): boolean =>
      "object" === typeof input.value &&
      null !== input.value &&
      false === Array.isArray(input.value) &&
      $io1(input.value);
    const $io1 = (input: any): boolean =>
      Object.keys(input).every((key: any) => {
        const value = input[key];
        if (undefined === value) return true;
        if (true)
          return (
            Array.isArray(value) &&
            value.every((elem: any) => "string" === typeof elem)
          );
        return true;
      });
    return "object" === typeof input && null !== input && $io0(input);
  };
  if (false === __is(input))
    ((
      input: any,
      _path: string,
      _exceptionable: boolean = true,
    ): input is DynamicArray => {
      const $guard = (typia.createAssertGuard as any).guard;
      const $join = (typia.createAssertGuard as any).join;
      const $ao0 = (
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): boolean =>
        ((("object" === typeof input.value &&
          null !== input.value &&
          false === Array.isArray(input.value)) ||
          $guard(_exceptionable, {
            path: _path + ".value",
            expected: "__type",
            value: input.value,
          })) &&
          $ao1(input.value, _path + ".value", true && _exceptionable)) ||
        $guard(_exceptionable, {
          path: _path + ".value",
          expected: "__type",
          value: input.value,
        });
      const $ao1 = (
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
              ((Array.isArray(value) ||
                $guard(_exceptionable, {
                  path: _path + $join(key),
                  expected: "Array<string>",
                  value: value,
                })) &&
                value.every(
                  (elem: any, _index1: number) =>
                    "string" === typeof elem ||
                    $guard(_exceptionable, {
                      path: _path + $join(key) + "[" + _index1 + "]",
                      expected: "string",
                      value: elem,
                    }),
                )) ||
              $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "Array<string>",
                value: value,
              })
            );
          return true;
        });
      return (
        ((("object" === typeof input && null !== input) ||
          $guard(true, {
            path: _path + "",
            expected: "DynamicArray",
            value: input,
          })) &&
          $ao0(input, _path + "", true)) ||
        $guard(true, {
          path: _path + "",
          expected: "DynamicArray",
          value: input,
        })
      );
    })(input, "$input", true);
});
