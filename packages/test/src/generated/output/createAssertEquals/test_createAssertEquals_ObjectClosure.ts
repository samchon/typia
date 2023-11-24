import typia from "typia";

import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ObjectClosure } from "../../../structures/ObjectClosure";

export const test_createAssertEquals_ObjectClosure = _test_assertEquals(
  "ObjectClosure",
)<ObjectClosure>(ObjectClosure)((input: any): ObjectClosure => {
  const __is = (
    input: any,
    _exceptionable: boolean = true,
  ): input is ObjectClosure => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
      "string" === typeof input.id &&
      "function" === typeof input.open &&
      (2 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (["id", "open"].some((prop: any) => key === prop)) return true;
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
    ): input is ObjectClosure => {
      const $guard = (typia.createAssertEquals as any).guard;
      const $join = (typia.createAssertEquals as any).join;
      const $ao0 = (
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): boolean =>
        ("string" === typeof input.id ||
          $guard(_exceptionable, {
            path: _path + ".id",
            expected: "string",
            value: input.id,
          })) &&
        ("function" === typeof input.open ||
          $guard(_exceptionable, {
            path: _path + ".open",
            expected: "unknown",
            value: input.open,
          })) &&
        (2 === Object.keys(input).length ||
          false === _exceptionable ||
          Object.keys(input).every((key: any) => {
            if (["id", "open"].some((prop: any) => key === prop)) return true;
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
            expected: "ObjectClosure.IRecord",
            value: input,
          })) &&
          $ao0(input, _path + "", true)) ||
        $guard(true, {
          path: _path + "",
          expected: "ObjectClosure.IRecord",
          value: input,
        })
      );
    })(input, "$input", true);
  return input;
});
