import typia from "typia";

import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { ObjectRequired } from "../../../structures/ObjectRequired";

export const test_misc_createAssertClone_ObjectRequired =
  _test_misc_assertClone("ObjectRequired")<ObjectRequired>(ObjectRequired)(
    (input: any): typia.Resolved<ObjectRequired> => {
      const assert = (input: any): ObjectRequired => {
        const __is = (input: any): input is ObjectRequired => {
          const $io0 = (input: any): boolean =>
            "boolean" === typeof input.boolean &&
            "number" === typeof input.number &&
            Number.isFinite(input.number) &&
            "string" === typeof input.string &&
            Array.isArray(input.array) &&
            input.array.every(
              (elem: any) => "number" === typeof elem && Number.isFinite(elem),
            ) &&
            (null === input.object ||
              ("object" === typeof input.object &&
                null !== input.object &&
                false === Array.isArray(input.object) &&
                $io1(input.object)));
          const $io1 = (input: any): boolean =>
            (undefined === input.boolean ||
              "boolean" === typeof input.boolean) &&
            (undefined === input.number ||
              ("number" === typeof input.number &&
                Number.isFinite(input.number))) &&
            (undefined === input.string || "string" === typeof input.string) &&
            (undefined === input.array ||
              (Array.isArray(input.array) &&
                input.array.every(
                  (elem: any) =>
                    "number" === typeof elem && Number.isFinite(elem),
                ))) &&
            (null === input.object ||
              undefined === input.object ||
              ("object" === typeof input.object &&
                null !== input.object &&
                false === Array.isArray(input.object) &&
                $io1(input.object)));
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectRequired => {
            const $guard = require("typia/lib/functional/$guard").$guard(
              "typia.misc.createAssertClone",
            );
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              ("boolean" === typeof input.boolean ||
                $guard(_exceptionable, {
                  path: _path + ".boolean",
                  expected: "boolean",
                  value: input.boolean,
                })) &&
              (("number" === typeof input.number &&
                Number.isFinite(input.number)) ||
                $guard(_exceptionable, {
                  path: _path + ".number",
                  expected: "number",
                  value: input.number,
                })) &&
              ("string" === typeof input.string ||
                $guard(_exceptionable, {
                  path: _path + ".string",
                  expected: "string",
                  value: input.string,
                })) &&
              (((Array.isArray(input.array) ||
                $guard(_exceptionable, {
                  path: _path + ".array",
                  expected: "Array<number>",
                  value: input.array,
                })) &&
                input.array.every(
                  (elem: any, _index1: number) =>
                    ("number" === typeof elem && Number.isFinite(elem)) ||
                    $guard(_exceptionable, {
                      path: _path + ".array[" + _index1 + "]",
                      expected: "number",
                      value: elem,
                    }),
                )) ||
                $guard(_exceptionable, {
                  path: _path + ".array",
                  expected: "Array<number>",
                  value: input.array,
                })) &&
              (null === input.object ||
                ((("object" === typeof input.object &&
                  null !== input.object &&
                  false === Array.isArray(input.object)) ||
                  $guard(_exceptionable, {
                    path: _path + ".object",
                    expected: "(ObjectRequired.IBase | null)",
                    value: input.object,
                  })) &&
                  $ao1(
                    input.object,
                    _path + ".object",
                    true && _exceptionable,
                  )) ||
                $guard(_exceptionable, {
                  path: _path + ".object",
                  expected: "(ObjectRequired.IBase | null)",
                  value: input.object,
                }));
            const $ao1 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (undefined === input.boolean ||
                "boolean" === typeof input.boolean ||
                $guard(_exceptionable, {
                  path: _path + ".boolean",
                  expected: "(boolean | undefined)",
                  value: input.boolean,
                })) &&
              (undefined === input.number ||
                ("number" === typeof input.number &&
                  Number.isFinite(input.number)) ||
                $guard(_exceptionable, {
                  path: _path + ".number",
                  expected: "(number | undefined)",
                  value: input.number,
                })) &&
              (undefined === input.string ||
                "string" === typeof input.string ||
                $guard(_exceptionable, {
                  path: _path + ".string",
                  expected: "(string | undefined)",
                  value: input.string,
                })) &&
              (undefined === input.array ||
                ((Array.isArray(input.array) ||
                  $guard(_exceptionable, {
                    path: _path + ".array",
                    expected: "(Array<number> | undefined)",
                    value: input.array,
                  })) &&
                  input.array.every(
                    (elem: any, _index2: number) =>
                      ("number" === typeof elem && Number.isFinite(elem)) ||
                      $guard(_exceptionable, {
                        path: _path + ".array[" + _index2 + "]",
                        expected: "number",
                        value: elem,
                      }),
                  )) ||
                $guard(_exceptionable, {
                  path: _path + ".array",
                  expected: "(Array<number> | undefined)",
                  value: input.array,
                })) &&
              (null === input.object ||
                undefined === input.object ||
                ((("object" === typeof input.object &&
                  null !== input.object &&
                  false === Array.isArray(input.object)) ||
                  $guard(_exceptionable, {
                    path: _path + ".object",
                    expected: "(ObjectRequired.IBase | null | undefined)",
                    value: input.object,
                  })) &&
                  $ao1(
                    input.object,
                    _path + ".object",
                    true && _exceptionable,
                  )) ||
                $guard(_exceptionable, {
                  path: _path + ".object",
                  expected: "(ObjectRequired.IBase | null | undefined)",
                  value: input.object,
                }));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(true, {
                  path: _path + "",
                  expected: "Required<ObjectRequired.IBase>",
                  value: input,
                })) &&
                $ao0(input, _path + "", true)) ||
              $guard(true, {
                path: _path + "",
                expected: "Required<ObjectRequired.IBase>",
                value: input,
              })
            );
          })(input, "$input", true);
        return input;
      };
      const clone = (input: ObjectRequired): typia.Resolved<ObjectRequired> => {
        const $io1 = (input: any): boolean =>
          (undefined === input.boolean || "boolean" === typeof input.boolean) &&
          (undefined === input.number || "number" === typeof input.number) &&
          (undefined === input.string || "string" === typeof input.string) &&
          (undefined === input.array ||
            (Array.isArray(input.array) &&
              input.array.every((elem: any) => "number" === typeof elem))) &&
          (null === input.object ||
            undefined === input.object ||
            ("object" === typeof input.object &&
              null !== input.object &&
              false === Array.isArray(input.object) &&
              $io1(input.object)));
        const $cp0 = (input: any) => input.map((elem: any) => elem as any);
        const $co0 = (input: any): any => ({
          boolean: input.boolean as any,
          number: input.number as any,
          string: input.string as any,
          array: Array.isArray(input.array)
            ? $cp0(input.array)
            : (input.array as any),
          object:
            "object" === typeof input.object && null !== input.object
              ? $co1(input.object)
              : (input.object as any),
        });
        const $co1 = (input: any): any => ({
          boolean: input.boolean as any,
          number: input.number as any,
          string: input.string as any,
          array: Array.isArray(input.array)
            ? $cp0(input.array)
            : (input.array as any),
          object:
            "object" === typeof input.object && null !== input.object
              ? $co1(input.object)
              : (input.object as any),
        });
        return "object" === typeof input && null !== input
          ? $co0(input)
          : (input as any);
      };
      assert(input);
      const output = clone(input);
      return output;
    },
  );
