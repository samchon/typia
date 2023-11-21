import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ObjectTuple } from "../../../structures/ObjectTuple";

export const test_createAssertEquals_ObjectTuple = _test_assertEquals(
  "ObjectTuple",
)<ObjectTuple>(ObjectTuple)((input: any): ObjectTuple => {
  const __is = (
    input: any,
    _exceptionable: boolean = true,
  ): input is ObjectTuple => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
      "string" === typeof input.id &&
      "string" === typeof input.code &&
      "string" === typeof input.name &&
      (3 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (["id", "code", "name"].some((prop: any) => key === prop))
            return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
      "string" === typeof input.id &&
      "string" === typeof input.mobile &&
      "string" === typeof input.name &&
      (3 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (["id", "mobile", "name"].some((prop: any) => key === prop))
            return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    return (
      Array.isArray(input) &&
      input.length === 2 &&
      "object" === typeof input[0] &&
      null !== input[0] &&
      $io0(input[0], true) &&
      "object" === typeof input[1] &&
      null !== input[1] &&
      $io1(input[1], true)
    );
  };
  if (false === __is(input))
    ((
      input: any,
      _path: string,
      _exceptionable: boolean = true,
    ): input is ObjectTuple => {
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
        ("string" === typeof input.code ||
          $guard(_exceptionable, {
            path: _path + ".code",
            expected: "string",
            value: input.code,
          })) &&
        ("string" === typeof input.name ||
          $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name,
          })) &&
        (3 === Object.keys(input).length ||
          false === _exceptionable ||
          Object.keys(input).every((key: any) => {
            if (["id", "code", "name"].some((prop: any) => key === prop))
              return true;
            const value = input[key];
            if (undefined === value) return true;
            return $guard(_exceptionable, {
              path: _path + $join(key),
              expected: "undefined",
              value: value,
            });
          }));
      const $ao1 = (
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
        ("string" === typeof input.mobile ||
          $guard(_exceptionable, {
            path: _path + ".mobile",
            expected: "string",
            value: input.mobile,
          })) &&
        ("string" === typeof input.name ||
          $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name,
          })) &&
        (3 === Object.keys(input).length ||
          false === _exceptionable ||
          Object.keys(input).every((key: any) => {
            if (["id", "mobile", "name"].some((prop: any) => key === prop))
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
        ((Array.isArray(input) ||
          $guard(true, {
            path: _path + "",
            expected: "ObjectTuple",
            value: input,
          })) &&
          (input.length === 2 ||
            $guard(true, {
              path: _path + "",
              expected: "[ObjectTuple.ISection, ObjectTuple.ICitizen]",
              value: input,
            })) &&
          (((("object" === typeof input[0] && null !== input[0]) ||
            $guard(true, {
              path: _path + "[0]",
              expected: "ObjectTuple.ISection",
              value: input[0],
            })) &&
            $ao0(input[0], _path + "[0]", true)) ||
            $guard(true, {
              path: _path + "[0]",
              expected: "ObjectTuple.ISection",
              value: input[0],
            })) &&
          (((("object" === typeof input[1] && null !== input[1]) ||
            $guard(true, {
              path: _path + "[1]",
              expected: "ObjectTuple.ICitizen",
              value: input[1],
            })) &&
            $ao1(input[1], _path + "[1]", true)) ||
            $guard(true, {
              path: _path + "[1]",
              expected: "ObjectTuple.ICitizen",
              value: input[1],
            }))) ||
        $guard(true, {
          path: _path + "",
          expected: "ObjectTuple",
          value: input,
        })
      );
    })(input, "$input", true);
  return input;
});
