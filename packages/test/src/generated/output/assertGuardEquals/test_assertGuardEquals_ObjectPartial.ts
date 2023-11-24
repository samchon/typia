import typia from "typia";

import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { ObjectPartial } from "../../../structures/ObjectPartial";

export const test_assertGuardEquals_ObjectPartial = _test_assertGuardEquals(
  "ObjectPartial",
)<ObjectPartial>(ObjectPartial)((input) =>
  ((input: any): asserts input is ObjectPartial => {
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is ObjectPartial => {
      const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
        (undefined === input.boolean || "boolean" === typeof input.boolean) &&
        (undefined === input.number ||
          ("number" === typeof input.number &&
            Number.isFinite(input.number))) &&
        (undefined === input.string || "string" === typeof input.string) &&
        (undefined === input.array ||
          (Array.isArray(input.array) &&
            input.array.every(
              (elem: any, _index1: number) =>
                "number" === typeof elem && Number.isFinite(elem),
            ))) &&
        (null === input.object ||
          undefined === input.object ||
          ("object" === typeof input.object &&
            null !== input.object &&
            $io1(input.object, true && _exceptionable))) &&
        (0 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (
              ["boolean", "number", "string", "array", "object"].some(
                (prop: any) => key === prop,
              )
            )
              return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
        "boolean" === typeof input.boolean &&
        "number" === typeof input.number &&
        Number.isFinite(input.number) &&
        "string" === typeof input.string &&
        Array.isArray(input.array) &&
        input.array.every(
          (elem: any, _index2: number) =>
            "number" === typeof elem && Number.isFinite(elem),
        ) &&
        (null === input.object ||
          ("object" === typeof input.object &&
            null !== input.object &&
            $io1(input.object, true && _exceptionable))) &&
        (5 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (
              ["boolean", "number", "string", "array", "object"].some(
                (prop: any) => key === prop,
              )
            )
              return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
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
      ): input is ObjectPartial => {
        const $guard = (typia.assertGuardEquals as any).guard;
        const $join = (typia.assertGuardEquals as any).join;
        const $ao0 = (
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
              expected: "(Array<number> | undefined)",
              value: input.array,
            })) &&
          (null === input.object ||
            undefined === input.object ||
            ((("object" === typeof input.object && null !== input.object) ||
              $guard(_exceptionable, {
                path: _path + ".object",
                expected: "(ObjectPartial.IBase | null | undefined)",
                value: input.object,
              })) &&
              $ao1(input.object, _path + ".object", true && _exceptionable)) ||
            $guard(_exceptionable, {
              path: _path + ".object",
              expected: "(ObjectPartial.IBase | null | undefined)",
              value: input.object,
            })) &&
          (0 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (
                ["boolean", "number", "string", "array", "object"].some(
                  (prop: any) => key === prop,
                )
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
              expected: "Array<number>",
              value: input.array,
            })) &&
          (null === input.object ||
            ((("object" === typeof input.object && null !== input.object) ||
              $guard(_exceptionable, {
                path: _path + ".object",
                expected: "(ObjectPartial.IBase | null)",
                value: input.object,
              })) &&
              $ao1(input.object, _path + ".object", true && _exceptionable)) ||
            $guard(_exceptionable, {
              path: _path + ".object",
              expected: "(ObjectPartial.IBase | null)",
              value: input.object,
            })) &&
          (5 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (
                ["boolean", "number", "string", "array", "object"].some(
                  (prop: any) => key === prop,
                )
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
        return (
          ((("object" === typeof input &&
            null !== input &&
            false === Array.isArray(input)) ||
            $guard(true, {
              path: _path + "",
              expected: "Partial<ObjectPartial.IBase>",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "Partial<ObjectPartial.IBase>",
            value: input,
          })
        );
      })(input, "$input", true);
  })(input),
);
