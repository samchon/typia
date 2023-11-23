import typia from "typia";

import { _test_assert } from "../../../internal/_test_assert";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_createAssert_DynamicSimple = _test_assert(
  "DynamicSimple",
)<DynamicSimple>(DynamicSimple)((input: any): DynamicSimple => {
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
  if (false === __is(input))
    ((
      input: any,
      _path: string,
      _exceptionable: boolean = true,
    ): input is DynamicSimple => {
      const $guard = (typia.createAssert as any).guard;
      const $join = (typia.createAssert as any).join;
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
              ("number" === typeof value && Number.isFinite(value)) ||
              $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "number",
                value: value,
              })
            );
          return true;
        });
      return (
        ((("object" === typeof input && null !== input) ||
          $guard(true, {
            path: _path + "",
            expected: "DynamicSimple",
            value: input,
          })) &&
          $ao0(input, _path + "", true)) ||
        $guard(true, {
          path: _path + "",
          expected: "DynamicSimple",
          value: input,
        })
      );
    })(input, "$input", true);
  return input;
});
