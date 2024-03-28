import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_createAssertGuardCustom_DynamicSimple = _test_assertGuard(
  CustomGuardError,
)("DynamicSimple")<DynamicSimple>(DynamicSimple)(
  (
    input: any,
    errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
      new CustomGuardError(p),
  ): asserts input is DynamicSimple => {
    const __is = (input: any): input is DynamicSimple => {
      const $io0 = (input: any): boolean =>
        "object" === typeof input.value &&
        null !== input.value &&
        false === Array.isArray(input.value) &&
        $io1(input.value);
      const $io1 = (input: any): boolean =>
        Object.keys(input).every((key: any) => {
          const value = input[key];
          if (undefined === value) return true;
          return "number" === typeof value && Number.isFinite(value);
        });
      return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is DynamicSimple => {
        const $guard = (typia.createAssertGuard as any).guard;
        const $join = (typia.createAssertGuard as any).join;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ((("object" === typeof input.value &&
            null !== input.value &&
            false === Array.isArray(input.value)) ||
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
          );
        const $ao1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          false === _exceptionable ||
          Object.keys(input).every((key: any) => {
            const value = input[key];
            if (undefined === value) return true;
            return (
              ("number" === typeof value && Number.isFinite(value)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + $join(key),
                  expected: "number",
                  value: value,
                },
                errorFactory,
              )
            );
          });
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "DynamicSimple",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "DynamicSimple",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
  },
);
