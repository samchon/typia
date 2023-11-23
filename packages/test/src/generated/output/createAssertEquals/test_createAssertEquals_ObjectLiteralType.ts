import typia from "typia";

import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";

export const test_createAssertEquals_ObjectLiteralType = _test_assertEquals(
  "ObjectLiteralType",
)<ObjectLiteralType>(ObjectLiteralType)((input: any): ObjectLiteralType => {
  const __is = (
    input: any,
    _exceptionable: boolean = true,
  ): input is ObjectLiteralType => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
      "string" === typeof input.id &&
      "string" === typeof input.name &&
      "number" === typeof input.age &&
      Number.isFinite(input.age) &&
      (3 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (["id", "name", "age"].some((prop: any) => key === prop))
            return true;
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
    ): input is ObjectLiteralType => {
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
        ("string" === typeof input.name ||
          $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name,
          })) &&
        (("number" === typeof input.age && Number.isFinite(input.age)) ||
          $guard(_exceptionable, {
            path: _path + ".age",
            expected: "number",
            value: input.age,
          })) &&
        (3 === Object.keys(input).length ||
          false === _exceptionable ||
          Object.keys(input).every((key: any) => {
            if (["id", "name", "age"].some((prop: any) => key === prop))
              return true;
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
            expected: "__object",
            value: input,
          })) &&
          $ao0(input, _path + "", true)) ||
        $guard(true, {
          path: _path + "",
          expected: "__object",
          value: input,
        })
      );
    })(input, "$input", true);
  return input;
});
