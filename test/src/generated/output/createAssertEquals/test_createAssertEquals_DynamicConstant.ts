import typia from "typia";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { DynamicConstant } from "../../../structures/DynamicConstant";
import { TypeGuardError } from "typia";
export const test_createAssertEquals_DynamicConstant = _test_assertEquals(
  TypeGuardError,
)("DynamicConstant")<DynamicConstant>(DynamicConstant)(
  (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): DynamicConstant => {
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is DynamicConstant => {
      const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
        "object" === typeof input.value &&
        null !== input.value &&
        $io1(input.value, true && _exceptionable) &&
        (1 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["value"].some((prop: any) => key === prop)) return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
        "number" === typeof input.a &&
        Number.isFinite(input.a) &&
        "number" === typeof input.b &&
        Number.isFinite(input.b) &&
        "number" === typeof input.c &&
        Number.isFinite(input.c) &&
        "number" === typeof input.d &&
        Number.isFinite(input.d) &&
        (4 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["a", "b", "c", "d"].some((prop: any) => key === prop))
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
      ): input is DynamicConstant => {
        const $guard = (typia.createAssertEquals as any).guard;
        const $join = (typia.createAssertEquals as any).join;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((("object" === typeof input.value && null !== input.value) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".value",
                expected: "__type",
                value: input.value,
              },
              errorFactory,
            )) &&
            $ao1(input.value, _path + ".value", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".value",
                expected: "__type",
                value: input.value,
              },
              errorFactory,
            )) &&
          (1 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (["value"].some((prop: any) => key === prop)) return true;
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
          (("number" === typeof input.a && Number.isFinite(input.a)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".a",
                expected: "number",
                value: input.a,
              },
              errorFactory,
            )) &&
          (("number" === typeof input.b && Number.isFinite(input.b)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".b",
                expected: "number",
                value: input.b,
              },
              errorFactory,
            )) &&
          (("number" === typeof input.c && Number.isFinite(input.c)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".c",
                expected: "number",
                value: input.c,
              },
              errorFactory,
            )) &&
          (("number" === typeof input.d && Number.isFinite(input.d)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".d",
                expected: "number",
                value: input.d,
              },
              errorFactory,
            )) &&
          (4 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (["a", "b", "c", "d"].some((prop: any) => key === prop))
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
                expected: "DynamicConstant",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "DynamicConstant",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  },
);
