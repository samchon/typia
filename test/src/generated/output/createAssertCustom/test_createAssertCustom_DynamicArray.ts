import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_assert } from "../../../internal/_test_assert";
import { DynamicArray } from "../../../structures/DynamicArray";

export const test_createAssertCustom_DynamicArray = _test_assert(
  CustomGuardError,
)("DynamicArray")<DynamicArray>(DynamicArray)(
  (
    input: any,
    errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
      new CustomGuardError(p),
  ): DynamicArray => {
    const __is = (input: any): input is DynamicArray => {
      const $io0 = (input: any): boolean =>
        "object" === typeof input.value &&
        null !== input.value &&
        false === Array.isArray(input.value) &&
        $io1(input.value);
      const $io1 = (input: any): boolean =>
        Object.keys(input).every((key: any) => {
          const value = input[key];
          if (undefined === value) return true;
          return (
            Array.isArray(value) &&
            value.every((elem: any) => "string" === typeof elem)
          );
        });
      return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is DynamicArray => {
        const $guard = (typia.createAssert as any).guard;
        const $join = (typia.createAssert as any).join;
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
              ((Array.isArray(value) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected: "Array<string>",
                    value: value,
                  },
                  errorFactory,
                )) &&
                value.every(
                  (elem: any, _index1: number) =>
                    "string" === typeof elem ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + $join(key) + "[" + _index1 + "]",
                        expected: "string",
                        value: elem,
                      },
                      errorFactory,
                    ),
                )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + $join(key),
                  expected: "Array<string>",
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
                expected: "DynamicArray",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "DynamicArray",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  },
);
