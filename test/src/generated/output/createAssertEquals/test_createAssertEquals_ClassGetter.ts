import typia from "typia";

import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ClassGetter } from "../../../structures/ClassGetter";

export const test_createAssertEquals_ClassGetter = _test_assertEquals(
  "ClassGetter",
)<ClassGetter>(ClassGetter)((input: any): ClassGetter => {
  const __is = (
    input: any,
    _exceptionable: boolean = true,
  ): input is ClassGetter => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
      "string" === typeof input.id &&
      "string" === typeof input.name &&
      (null === input.dead || "boolean" === typeof input.dead) &&
      (3 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (["id", "name", "dead"].some((prop: any) => key === prop))
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
    ): input is ClassGetter => {
      // @ts-ignore;
      declare const require: (lib: string) => any;
      const $guard = require("typia/lib/functional/$guard").$guard(
        "typia.createAssertEquals",
      );
      const $join = require("typia/lib/functional/$join").$join;
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
        (null === input.dead ||
          "boolean" === typeof input.dead ||
          $guard(_exceptionable, {
            path: _path + ".dead",
            expected: "(boolean | null)",
            value: input.dead,
          })) &&
        (3 === Object.keys(input).length ||
          false === _exceptionable ||
          Object.keys(input).every((key: any) => {
            if (["id", "name", "dead"].some((prop: any) => key === prop))
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
            expected: "ClassGetter.Person",
            value: input,
          })) &&
          $ao0(input, _path + "", true)) ||
        $guard(true, {
          path: _path + "",
          expected: "ClassGetter.Person",
          value: input,
        })
      );
    })(input, "$input", true);
  return input;
});
