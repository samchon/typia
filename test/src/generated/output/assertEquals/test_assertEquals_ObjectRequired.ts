import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ObjectRequired } from "../../../structures/ObjectRequired";

export const test_assertEquals_ObjectRequired = _test_assertEquals(
  TypeGuardError,
)("ObjectRequired")<ObjectRequired>(ObjectRequired)((input) =>
  ((
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): ObjectRequired => {
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is ObjectRequired => {
      const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
        "boolean" === typeof input.boolean &&
        "number" === typeof input.number &&
        Number.isFinite(input.number) &&
        "string" === typeof input.string &&
        Array.isArray(input.array) &&
        input.array.every(
          (elem: any, _index1: number) =>
            "number" === typeof elem && Number.isFinite(elem),
        ) &&
        (null === input.object ||
          ("object" === typeof input.object &&
            null !== input.object &&
            false === Array.isArray(input.object) &&
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
      const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
        (undefined === input.boolean || "boolean" === typeof input.boolean) &&
        (undefined === input.number ||
          ("number" === typeof input.number &&
            Number.isFinite(input.number))) &&
        (undefined === input.string || "string" === typeof input.string) &&
        (undefined === input.array ||
          (Array.isArray(input.array) &&
            input.array.every(
              (elem: any, _index2: number) =>
                "number" === typeof elem && Number.isFinite(elem),
            ))) &&
        (null === input.object ||
          undefined === input.object ||
          ("object" === typeof input.object &&
            null !== input.object &&
            false === Array.isArray(input.object) &&
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
      return "object" === typeof input && null !== input && $io0(input, true);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectRequired => {
        const $guard = (typia.assertEquals as any).guard;
        const $join = (typia.assertEquals as any).join;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("boolean" === typeof input.boolean ||
            $guard(
              _exceptionable,
              {
                path: _path + ".boolean",
                expected: "boolean",
                value: input.boolean,
              },
              errorFactory,
            )) &&
          (("number" === typeof input.number &&
            Number.isFinite(input.number)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".number",
                expected: "number",
                value: input.number,
              },
              errorFactory,
            )) &&
          ("string" === typeof input.string ||
            $guard(
              _exceptionable,
              {
                path: _path + ".string",
                expected: "string",
                value: input.string,
              },
              errorFactory,
            )) &&
          (((Array.isArray(input.array) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".array",
                expected: "Array<number>",
                value: input.array,
              },
              errorFactory,
            )) &&
            input.array.every(
              (elem: any, _index1: number) =>
                ("number" === typeof elem && Number.isFinite(elem)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".array[" + _index1 + "]",
                    expected: "number",
                    value: elem,
                  },
                  errorFactory,
                ),
            )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".array",
                expected: "Array<number>",
                value: input.array,
              },
              errorFactory,
            )) &&
          (null === input.object ||
            ((("object" === typeof input.object &&
              null !== input.object &&
              false === Array.isArray(input.object)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".object",
                  expected: "(ObjectRequired.IBase | null)",
                  value: input.object,
                },
                errorFactory,
              )) &&
              $ao1(input.object, _path + ".object", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".object",
                expected: "(ObjectRequired.IBase | null)",
                value: input.object,
              },
              errorFactory,
            )) &&
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
              return $guard(
                _exceptionable,
                {
                  path: _path + $join(key),
                  expected: "undefined",
                  value: value,
                },
                errorFactory,
              );
            }));
        const $ao1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (undefined === input.boolean ||
            "boolean" === typeof input.boolean ||
            $guard(
              _exceptionable,
              {
                path: _path + ".boolean",
                expected: "(boolean | undefined)",
                value: input.boolean,
              },
              errorFactory,
            )) &&
          (undefined === input.number ||
            ("number" === typeof input.number &&
              Number.isFinite(input.number)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".number",
                expected: "(number | undefined)",
                value: input.number,
              },
              errorFactory,
            )) &&
          (undefined === input.string ||
            "string" === typeof input.string ||
            $guard(
              _exceptionable,
              {
                path: _path + ".string",
                expected: "(string | undefined)",
                value: input.string,
              },
              errorFactory,
            )) &&
          (undefined === input.array ||
            ((Array.isArray(input.array) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".array",
                  expected: "(Array<number> | undefined)",
                  value: input.array,
                },
                errorFactory,
              )) &&
              input.array.every(
                (elem: any, _index2: number) =>
                  ("number" === typeof elem && Number.isFinite(elem)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".array[" + _index2 + "]",
                      expected: "number",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".array",
                expected: "(Array<number> | undefined)",
                value: input.array,
              },
              errorFactory,
            )) &&
          (null === input.object ||
            undefined === input.object ||
            ((("object" === typeof input.object &&
              null !== input.object &&
              false === Array.isArray(input.object)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".object",
                  expected: "(ObjectRequired.IBase | null | undefined)",
                  value: input.object,
                },
                errorFactory,
              )) &&
              $ao1(input.object, _path + ".object", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".object",
                expected: "(ObjectRequired.IBase | null | undefined)",
                value: input.object,
              },
              errorFactory,
            )) &&
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
              return $guard(
                _exceptionable,
                {
                  path: _path + $join(key),
                  expected: "undefined",
                  value: value,
                },
                errorFactory,
              );
            }));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "Required<ObjectRequired.IBase>",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "Required<ObjectRequired.IBase>",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  })(input),
);
