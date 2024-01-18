import typia from "typia";

import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { ArraySimple } from "../../../structures/ArraySimple";

export const test_misc_assertClone_ArraySimple = _test_misc_assertClone(
  "ArraySimple",
)<ArraySimple>(ArraySimple)((input) =>
  ((input: any): typia.Resolved<ArraySimple> => {
    const assert = (input: any): ArraySimple => {
      const __is = (input: any): input is ArraySimple => {
        const $io0 = (input: any): boolean =>
          "string" === typeof input.name &&
          "string" === typeof input.email &&
          Array.isArray(input.hobbies) &&
          input.hobbies.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io1(elem),
          );
        const $io1 = (input: any): boolean =>
          "string" === typeof input.name &&
          "string" === typeof input.body &&
          "number" === typeof input.rank &&
          Number.isFinite(input.rank);
        return (
          Array.isArray(input) &&
          input.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io0(elem),
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
            "typia.misc.assertClone",
          );
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
      return input;
    };
    const clone = (input: ArraySimple): typia.Resolved<ArraySimple> => {
      const $io1 = (input: any): boolean =>
        "string" === typeof input.name &&
        "string" === typeof input.body &&
        "number" === typeof input.rank;
      const $cp0 = (input: any) =>
        input.map((elem: any) =>
          "object" === typeof elem && null !== elem
            ? $co0(elem)
            : (elem as any),
        );
      const $cp1 = (input: any) =>
        input.map((elem: any) =>
          "object" === typeof elem && null !== elem
            ? $co1(elem)
            : (elem as any),
        );
      const $co0 = (input: any): any => ({
        name: input.name as any,
        email: input.email as any,
        hobbies: Array.isArray(input.hobbies)
          ? $cp1(input.hobbies)
          : (input.hobbies as any),
      });
      const $co1 = (input: any): any => ({
        name: input.name as any,
        body: input.body as any,
        rank: input.rank as any,
      });
      return Array.isArray(input) ? $cp0(input) : (input as any);
    };
    assert(input);
    const output = clone(input);
    return output;
  })(input),
);
