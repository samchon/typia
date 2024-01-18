import typia from "typia";

import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { ArraySimple } from "../../../structures/ArraySimple";

export const test_assertGuardEquals_ArraySimple = _test_assertGuardEquals(
  "ArraySimple",
)<ArraySimple>(ArraySimple)((input) =>
  ((input: any): asserts input is ArraySimple => {
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is ArraySimple => {
      const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
        "string" === typeof input.name &&
        "string" === typeof input.email &&
        Array.isArray(input.hobbies) &&
        input.hobbies.every(
          (elem: any, _index2: number) =>
            "object" === typeof elem &&
            null !== elem &&
            $io1(elem, true && _exceptionable),
        ) &&
        (3 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["name", "email", "hobbies"].some((prop: any) => key === prop))
              return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
        "string" === typeof input.name &&
        "string" === typeof input.body &&
        "number" === typeof input.rank &&
        Number.isFinite(input.rank) &&
        (3 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["name", "body", "rank"].some((prop: any) => key === prop))
              return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      return (
        Array.isArray(input) &&
        input.every(
          (elem: any, _index1: number) =>
            "object" === typeof elem && null !== elem && $io0(elem, true),
        )
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ArraySimple => {
        // @ts-ignore;
        declare const require: (lib: string) => any;
        const $guard = require("typia/lib/functional/$guard").$guard(
          "typia.assertGuardEquals",
        );
        const $join = require("typia/lib/functional/$join").$join;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("string" === typeof input.name ||
            $guard(_exceptionable, {
              path: _path + ".name",
              expected: "string",
              value: input.name,
            })) &&
          ("string" === typeof input.email ||
            $guard(_exceptionable, {
              path: _path + ".email",
              expected: "string",
              value: input.email,
            })) &&
          (((Array.isArray(input.hobbies) ||
            $guard(_exceptionable, {
              path: _path + ".hobbies",
              expected: "Array<ArraySimple.IHobby>",
              value: input.hobbies,
            })) &&
            input.hobbies.every(
              (elem: any, _index2: number) =>
                ((("object" === typeof elem && null !== elem) ||
                  $guard(_exceptionable, {
                    path: _path + ".hobbies[" + _index2 + "]",
                    expected: "ArraySimple.IHobby",
                    value: elem,
                  })) &&
                  $ao1(
                    elem,
                    _path + ".hobbies[" + _index2 + "]",
                    true && _exceptionable,
                  )) ||
                $guard(_exceptionable, {
                  path: _path + ".hobbies[" + _index2 + "]",
                  expected: "ArraySimple.IHobby",
                  value: elem,
                }),
            )) ||
            $guard(_exceptionable, {
              path: _path + ".hobbies",
              expected: "Array<ArraySimple.IHobby>",
              value: input.hobbies,
            })) &&
          (3 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (
                ["name", "email", "hobbies"].some((prop: any) => key === prop)
              )
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
          ("string" === typeof input.name ||
            $guard(_exceptionable, {
              path: _path + ".name",
              expected: "string",
              value: input.name,
            })) &&
          ("string" === typeof input.body ||
            $guard(_exceptionable, {
              path: _path + ".body",
              expected: "string",
              value: input.body,
            })) &&
          (("number" === typeof input.rank && Number.isFinite(input.rank)) ||
            $guard(_exceptionable, {
              path: _path + ".rank",
              expected: "number",
              value: input.rank,
            })) &&
          (3 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (["name", "body", "rank"].some((prop: any) => key === prop))
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
              expected: "ArraySimple",
              value: input,
            })) &&
            input.every(
              (elem: any, _index1: number) =>
                ((("object" === typeof elem && null !== elem) ||
                  $guard(true, {
                    path: _path + "[" + _index1 + "]",
                    expected: "ArraySimple.IPerson",
                    value: elem,
                  })) &&
                  $ao0(elem, _path + "[" + _index1 + "]", true)) ||
                $guard(true, {
                  path: _path + "[" + _index1 + "]",
                  expected: "ArraySimple.IPerson",
                  value: elem,
                }),
            )) ||
          $guard(true, {
            path: _path + "",
            expected: "ArraySimple",
            value: input,
          })
        );
      })(input, "$input", true);
  })(input),
);
