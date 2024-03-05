import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { NativeUnion } from "../../../structures/NativeUnion";

export const test_assertGuardCustom_NativeUnion = _test_assertGuard(
  CustomGuardError,
)("NativeUnion")<NativeUnion>(NativeUnion)((input) =>
  ((
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): asserts input is NativeUnion => {
    const __is = (input: any): input is NativeUnion => {
      const $io0 = (input: any): boolean =>
        (null === input.date || input.date instanceof Date) &&
        (input.unsigned instanceof Uint8Array ||
          input.unsigned instanceof Uint8ClampedArray ||
          input.unsigned instanceof Uint16Array ||
          input.unsigned instanceof Uint32Array ||
          input.unsigned instanceof BigUint64Array) &&
        (input.signed instanceof Int8Array ||
          input.signed instanceof Int16Array ||
          input.signed instanceof Int32Array ||
          input.signed instanceof BigInt64Array) &&
        (input.float instanceof Float32Array ||
          input.float instanceof Float64Array) &&
        (input.buffer instanceof ArrayBuffer ||
          input.buffer instanceof SharedArrayBuffer);
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
      ): input is NativeUnion => {
        const $guard = (typia.assertGuard as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (null === input.date ||
            input.date instanceof Date ||
            $guard(
              _exceptionable,
              {
                path: _path + ".date",
                expected: "(Date | null)",
                value: input.date,
              },
              errorFactory,
            )) &&
          (input.unsigned instanceof Uint8Array ||
            input.unsigned instanceof Uint8ClampedArray ||
            input.unsigned instanceof Uint16Array ||
            input.unsigned instanceof Uint32Array ||
            input.unsigned instanceof BigUint64Array ||
            $guard(
              _exceptionable,
              {
                path: _path + ".unsigned",
                expected:
                  "(BigUint64Array | Uint16Array | Uint32Array | Uint8Array | Uint8ClampedArray)",
                value: input.unsigned,
              },
              errorFactory,
            )) &&
          (input.signed instanceof Int8Array ||
            input.signed instanceof Int16Array ||
            input.signed instanceof Int32Array ||
            input.signed instanceof BigInt64Array ||
            $guard(
              _exceptionable,
              {
                path: _path + ".signed",
                expected:
                  "(BigInt64Array | Int16Array | Int32Array | Int8Array)",
                value: input.signed,
              },
              errorFactory,
            )) &&
          (input.float instanceof Float32Array ||
            input.float instanceof Float64Array ||
            $guard(
              _exceptionable,
              {
                path: _path + ".float",
                expected: "(Float32Array | Float64Array)",
                value: input.float,
              },
              errorFactory,
            )) &&
          (input.buffer instanceof ArrayBuffer ||
            input.buffer instanceof SharedArrayBuffer ||
            $guard(
              _exceptionable,
              {
                path: _path + ".buffer",
                expected: "(ArrayBuffer | SharedArrayBuffer)",
                value: input.buffer,
              },
              errorFactory,
            ));
        return (
          ((Array.isArray(input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "NativeUnion",
                value: input,
              },
              errorFactory,
            )) &&
            input.every(
              (elem: any, _index1: number) =>
                ((("object" === typeof elem && null !== elem) ||
                  $guard(
                    true,
                    {
                      path: _path + "[" + _index1 + "]",
                      expected: "NativeUnion.Union",
                      value: elem,
                    },
                    errorFactory,
                  )) &&
                  $ao0(elem, _path + "[" + _index1 + "]", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "[" + _index1 + "]",
                    expected: "NativeUnion.Union",
                    value: elem,
                  },
                  errorFactory,
                ),
            )) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "NativeUnion",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
  })(input, (p) => new CustomGuardError(p)),
);
