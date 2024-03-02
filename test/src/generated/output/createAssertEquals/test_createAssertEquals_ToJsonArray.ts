import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ToJsonArray } from "../../../structures/ToJsonArray";

export const test_createAssertEquals_ToJsonArray = _test_assertEquals(
  TypeGuardError,
)("ToJsonArray")<ToJsonArray>(ToJsonArray)(
  (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): ToJsonArray => {
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is ToJsonArray => {
      const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
        "function" === typeof input.toJSON &&
        (1 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["toJSON"].some((prop: any) => key === prop)) return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
        "function" === typeof input.toJSON &&
        (1 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["toJSON"].some((prop: any) => key === prop)) return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      const $io2 = (input: any, _exceptionable: boolean = true): boolean =>
        "function" === typeof input.toJSON &&
        (1 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["toJSON"].some((prop: any) => key === prop)) return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      const $io3 = (input: any, _exceptionable: boolean = true): boolean =>
        "function" === typeof input.toJSON &&
        (1 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["toJSON"].some((prop: any) => key === prop)) return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      return (
        Array.isArray(input) &&
        input.length === 4 &&
        "object" === typeof input[0] &&
        null !== input[0] &&
        $io0(input[0], true) &&
        "object" === typeof input[1] &&
        null !== input[1] &&
        $io1(input[1], true) &&
        "object" === typeof input[2] &&
        null !== input[2] &&
        $io2(input[2], true) &&
        "object" === typeof input[3] &&
        null !== input[3] &&
        $io3(input[3], true)
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ToJsonArray => {
        const $guard = (typia.createAssertEquals as any).guard;
        const $join = (typia.createAssertEquals as any).join;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("function" === typeof input.toJSON ||
            $guard(
              _exceptionable,
              {
                path: _path + ".toJSON",
                expected: "unknown",
                value: input.toJSON,
              },
              errorFactory,
            )) &&
          (1 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (["toJSON"].some((prop: any) => key === prop)) return true;
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
          ("function" === typeof input.toJSON ||
            $guard(
              _exceptionable,
              {
                path: _path + ".toJSON",
                expected: "unknown",
                value: input.toJSON,
              },
              errorFactory,
            )) &&
          (1 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (["toJSON"].some((prop: any) => key === prop)) return true;
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
        const $ao2 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("function" === typeof input.toJSON ||
            $guard(
              _exceptionable,
              {
                path: _path + ".toJSON",
                expected: "unknown",
                value: input.toJSON,
              },
              errorFactory,
            )) &&
          (1 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (["toJSON"].some((prop: any) => key === prop)) return true;
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
        const $ao3 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("function" === typeof input.toJSON ||
            $guard(
              _exceptionable,
              {
                path: _path + ".toJSON",
                expected: "unknown",
                value: input.toJSON,
              },
              errorFactory,
            )) &&
          (1 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (["toJSON"].some((prop: any) => key === prop)) return true;
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
          ((Array.isArray(input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ToJsonArray",
                value: input,
              },
              errorFactory,
            )) &&
            (input.length === 4 ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected:
                    "[ToJsonArray.IArray<boolean>, ToJsonArray.IArray<number>, ToJsonArray.IArray<string>, ToJsonArray.IArray<ToJsonArray.IObject>]",
                  value: input,
                },
                errorFactory,
              )) &&
            (((("object" === typeof input[0] && null !== input[0]) ||
              $guard(
                true,
                {
                  path: _path + "[0]",
                  expected: "ToJsonArray.IArray<boolean>",
                  value: input[0],
                },
                errorFactory,
              )) &&
              $ao0(input[0], _path + "[0]", true)) ||
              $guard(
                true,
                {
                  path: _path + "[0]",
                  expected: "ToJsonArray.IArray<boolean>",
                  value: input[0],
                },
                errorFactory,
              )) &&
            (((("object" === typeof input[1] && null !== input[1]) ||
              $guard(
                true,
                {
                  path: _path + "[1]",
                  expected: "ToJsonArray.IArray<number>",
                  value: input[1],
                },
                errorFactory,
              )) &&
              $ao1(input[1], _path + "[1]", true)) ||
              $guard(
                true,
                {
                  path: _path + "[1]",
                  expected: "ToJsonArray.IArray<number>",
                  value: input[1],
                },
                errorFactory,
              )) &&
            (((("object" === typeof input[2] && null !== input[2]) ||
              $guard(
                true,
                {
                  path: _path + "[2]",
                  expected: "ToJsonArray.IArray<string>",
                  value: input[2],
                },
                errorFactory,
              )) &&
              $ao2(input[2], _path + "[2]", true)) ||
              $guard(
                true,
                {
                  path: _path + "[2]",
                  expected: "ToJsonArray.IArray<string>",
                  value: input[2],
                },
                errorFactory,
              )) &&
            (((("object" === typeof input[3] && null !== input[3]) ||
              $guard(
                true,
                {
                  path: _path + "[3]",
                  expected: "ToJsonArray.IArray<ToJsonArray.IObject>",
                  value: input[3],
                },
                errorFactory,
              )) &&
              $ao3(input[3], _path + "[3]", true)) ||
              $guard(
                true,
                {
                  path: _path + "[3]",
                  expected: "ToJsonArray.IArray<ToJsonArray.IObject>",
                  value: input[3],
                },
                errorFactory,
              ))) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "ToJsonArray",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  },
);
