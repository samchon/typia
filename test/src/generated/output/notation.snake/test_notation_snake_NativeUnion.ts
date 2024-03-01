import typia from "typia";

import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { NativeUnion } from "../../../structures/NativeUnion";

export const test_notation_validateSnake_NativeUnion =
  _test_notation_validateGeneral("NativeUnion")<NativeUnion>(NativeUnion)<
    typia.SnakeCase<NativeUnion>
  >({
    convert: (input) =>
      ((input: any): typia.IValidation<typia.SnakeCase<NativeUnion>> => {
        const validate = (input: any): typia.IValidation<NativeUnion> => {
          const errors = [] as any[];
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
          if (false === __is(input)) {
            const $report = (typia.notations.validateSnake as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is NativeUnion => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  null === input.date ||
                    input.date instanceof Date ||
                    $report(_exceptionable, {
                      path: _path + ".date",
                      expected: "(Date | null)",
                      value: input.date,
                    }),
                  input.unsigned instanceof Uint8Array ||
                    input.unsigned instanceof Uint8ClampedArray ||
                    input.unsigned instanceof Uint16Array ||
                    input.unsigned instanceof Uint32Array ||
                    input.unsigned instanceof BigUint64Array ||
                    $report(_exceptionable, {
                      path: _path + ".unsigned",
                      expected:
                        "(BigUint64Array | Uint16Array | Uint32Array | Uint8Array | Uint8ClampedArray)",
                      value: input.unsigned,
                    }),
                  input.signed instanceof Int8Array ||
                    input.signed instanceof Int16Array ||
                    input.signed instanceof Int32Array ||
                    input.signed instanceof BigInt64Array ||
                    $report(_exceptionable, {
                      path: _path + ".signed",
                      expected:
                        "(BigInt64Array | Int16Array | Int32Array | Int8Array)",
                      value: input.signed,
                    }),
                  input.float instanceof Float32Array ||
                    input.float instanceof Float64Array ||
                    $report(_exceptionable, {
                      path: _path + ".float",
                      expected: "(Float32Array | Float64Array)",
                      value: input.float,
                    }),
                  input.buffer instanceof ArrayBuffer ||
                    input.buffer instanceof SharedArrayBuffer ||
                    $report(_exceptionable, {
                      path: _path + ".buffer",
                      expected: "(ArrayBuffer | SharedArrayBuffer)",
                      value: input.buffer,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((Array.isArray(input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "NativeUnion",
                    value: input,
                  })) &&
                  input
                    .map(
                      (elem: any, _index1: number) =>
                        ((("object" === typeof elem && null !== elem) ||
                          $report(true, {
                            path: _path + "[" + _index1 + "]",
                            expected: "NativeUnion.Union",
                            value: elem,
                          })) &&
                          $vo0(elem, _path + "[" + _index1 + "]", true)) ||
                        $report(true, {
                          path: _path + "[" + _index1 + "]",
                          expected: "NativeUnion.Union",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                $report(true, {
                  path: _path + "",
                  expected: "NativeUnion",
                  value: input,
                })
              );
            })(input, "$input", true);
          }
          const success = 0 === errors.length;
          return {
            success,
            errors,
            data: success ? input : undefined,
          } as any;
        };
        const general = (input: NativeUnion): typia.SnakeCase<NativeUnion> => {
          const $cp0 = (input: any) =>
            input.map((elem: any) =>
              "object" === typeof elem && null !== elem
                ? $co0(elem)
                : (elem as any),
            );
          const $co0 = (input: any): any => ({
            date:
              input.date instanceof Date
                ? new Date(input.date)
                : (input.date as any),
            unsigned:
              input.unsigned instanceof Uint8Array
                ? input.unsigned
                : input.unsigned instanceof Uint8ClampedArray
                ? input.unsigned
                : input.unsigned instanceof Uint16Array
                ? input.unsigned
                : input.unsigned instanceof Uint32Array
                ? input.unsigned
                : input.unsigned instanceof BigUint64Array
                ? input.unsigned
                : (input.unsigned as any),
            signed:
              input.signed instanceof Int8Array
                ? input.signed
                : input.signed instanceof Int16Array
                ? input.signed
                : input.signed instanceof Int32Array
                ? input.signed
                : input.signed instanceof BigInt64Array
                ? input.signed
                : (input.signed as any),
            float:
              input.float instanceof Float32Array
                ? input.float
                : input.float instanceof Float64Array
                ? input.float
                : (input.float as any),
            buffer:
              input.buffer instanceof ArrayBuffer
                ? input.buffer
                : input.buffer instanceof SharedArrayBuffer
                ? input.buffer
                : (input.buffer as any),
          });
          return Array.isArray(input) ? $cp0(input) : (input as any);
        };
        const output = validate(input) as any;
        if (output.success) output.data = general(input);
        return output;
      })(input),
    assert: (
      input: any,
      errorFactory?: import("typia").TypeGuardError.IProps,
    ): typia.SnakeCase<NativeUnion> => {
      const $guard = (typia.createAssert as any).guard(errorFactory);
      const __is = (input: any): input is typia.SnakeCase<NativeUnion> => {
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
        ): input is typia.SnakeCase<NativeUnion> => {
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (null === input.date ||
              input.date instanceof Date ||
              $guard(_exceptionable, {
                path: _path + ".date",
                expected: "(Date | null)",
                value: input.date,
              })) &&
            (input.unsigned instanceof Uint8Array ||
              input.unsigned instanceof Uint8ClampedArray ||
              input.unsigned instanceof Uint16Array ||
              input.unsigned instanceof Uint32Array ||
              input.unsigned instanceof BigUint64Array ||
              $guard(_exceptionable, {
                path: _path + ".unsigned",
                expected:
                  "(BigUint64Array | Uint16Array | Uint32Array | Uint8Array | Uint8ClampedArray)",
                value: input.unsigned,
              })) &&
            (input.signed instanceof Int8Array ||
              input.signed instanceof Int16Array ||
              input.signed instanceof Int32Array ||
              input.signed instanceof BigInt64Array ||
              $guard(_exceptionable, {
                path: _path + ".signed",
                expected:
                  "(BigInt64Array | Int16Array | Int32Array | Int8Array)",
                value: input.signed,
              })) &&
            (input.float instanceof Float32Array ||
              input.float instanceof Float64Array ||
              $guard(_exceptionable, {
                path: _path + ".float",
                expected: "(Float32Array | Float64Array)",
                value: input.float,
              })) &&
            (input.buffer instanceof ArrayBuffer ||
              input.buffer instanceof SharedArrayBuffer ||
              $guard(_exceptionable, {
                path: _path + ".buffer",
                expected: "(ArrayBuffer | SharedArrayBuffer)",
                value: input.buffer,
              }));
          return (
            ((Array.isArray(input) ||
              $guard(true, {
                path: _path + "",
                expected: "NativeUnion",
                value: input,
              })) &&
              input.every(
                (elem: any, _index1: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(true, {
                      path: _path + "[" + _index1 + "]",
                      expected: "NativeUnion.Union",
                      value: elem,
                    })) &&
                    $ao0(elem, _path + "[" + _index1 + "]", true)) ||
                  $guard(true, {
                    path: _path + "[" + _index1 + "]",
                    expected: "NativeUnion.Union",
                    value: elem,
                  }),
              )) ||
            $guard(true, {
              path: _path + "",
              expected: "NativeUnion",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    },
  });
