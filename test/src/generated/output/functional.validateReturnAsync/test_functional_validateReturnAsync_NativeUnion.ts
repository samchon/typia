import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../../internal/_test_functional_validateReturnAsync";
import { NativeUnion } from "../../../structures/NativeUnion";

export const test_functional_validateReturnAsync_NativeUnion =
  _test_functional_validateReturnAsync("NativeUnion")(NativeUnion)(
    (p: (input: NativeUnion) => Promise<NativeUnion>) =>
      async (
        input: NativeUnion,
      ): Promise<import("typia").IValidation<NativeUnion>> => {
        const result = ((input: any): typia.IValidation<NativeUnion> => {
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
            const $report = (typia.functional.validateReturn as any).report(
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
        })(await p(input));
        if (!result.success)
          result.errors = result.errors.map((error: any) => ({
            ...error,
            path: error.path.replace("$input", "$input.return"),
          }));
        return result;
      },
  );
