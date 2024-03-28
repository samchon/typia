import typia from "typia";

import { _test_functional_validateFunction } from "../../../internal/_test_functional_validateFunction";
import { NativeSimple } from "../../../structures/NativeSimple";

export const test_functional_validateFunction_NativeSimple =
  _test_functional_validateFunction("NativeSimple")(NativeSimple)(
    (p: (input: NativeSimple) => NativeSimple) =>
      (input: NativeSimple): import("typia").IValidation<NativeSimple> => {
        const paramResults = [
          ((input: any): typia.IValidation<NativeSimple> => {
            const errors = [] as any[];
            const __is = (input: any): input is NativeSimple => {
              const $io0 = (input: any): boolean =>
                input.date instanceof Date &&
                input.uint8Array instanceof Uint8Array &&
                input.uint8ClampedArray instanceof Uint8ClampedArray &&
                input.uint16Array instanceof Uint16Array &&
                input.uint32Array instanceof Uint32Array &&
                input.bigUint64Array instanceof BigUint64Array &&
                input.int8Array instanceof Int8Array &&
                input.int16Array instanceof Int16Array &&
                input.int32Array instanceof Int32Array &&
                input.bigInt64Array instanceof BigInt64Array &&
                input.float32Array instanceof Float32Array &&
                input.float64Array instanceof Float64Array &&
                input.arrayBuffer instanceof ArrayBuffer &&
                input.sharedArrayBuffer instanceof SharedArrayBuffer &&
                input.dataView instanceof DataView;
              return "object" === typeof input && null !== input && $io0(input);
            };
            if (false === __is(input)) {
              const $report = (typia.functional.validateFunction as any).report(
                errors,
              );
              ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): input is NativeSimple => {
                const $vo0 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    input.date instanceof Date ||
                      $report(_exceptionable, {
                        path: _path + ".date",
                        expected: "Date",
                        value: input.date,
                      }),
                    input.uint8Array instanceof Uint8Array ||
                      $report(_exceptionable, {
                        path: _path + ".uint8Array",
                        expected: "Uint8Array",
                        value: input.uint8Array,
                      }),
                    input.uint8ClampedArray instanceof Uint8ClampedArray ||
                      $report(_exceptionable, {
                        path: _path + ".uint8ClampedArray",
                        expected: "Uint8ClampedArray",
                        value: input.uint8ClampedArray,
                      }),
                    input.uint16Array instanceof Uint16Array ||
                      $report(_exceptionable, {
                        path: _path + ".uint16Array",
                        expected: "Uint16Array",
                        value: input.uint16Array,
                      }),
                    input.uint32Array instanceof Uint32Array ||
                      $report(_exceptionable, {
                        path: _path + ".uint32Array",
                        expected: "Uint32Array",
                        value: input.uint32Array,
                      }),
                    input.bigUint64Array instanceof BigUint64Array ||
                      $report(_exceptionable, {
                        path: _path + ".bigUint64Array",
                        expected: "BigUint64Array",
                        value: input.bigUint64Array,
                      }),
                    input.int8Array instanceof Int8Array ||
                      $report(_exceptionable, {
                        path: _path + ".int8Array",
                        expected: "Int8Array",
                        value: input.int8Array,
                      }),
                    input.int16Array instanceof Int16Array ||
                      $report(_exceptionable, {
                        path: _path + ".int16Array",
                        expected: "Int16Array",
                        value: input.int16Array,
                      }),
                    input.int32Array instanceof Int32Array ||
                      $report(_exceptionable, {
                        path: _path + ".int32Array",
                        expected: "Int32Array",
                        value: input.int32Array,
                      }),
                    input.bigInt64Array instanceof BigInt64Array ||
                      $report(_exceptionable, {
                        path: _path + ".bigInt64Array",
                        expected: "BigInt64Array",
                        value: input.bigInt64Array,
                      }),
                    input.float32Array instanceof Float32Array ||
                      $report(_exceptionable, {
                        path: _path + ".float32Array",
                        expected: "Float32Array",
                        value: input.float32Array,
                      }),
                    input.float64Array instanceof Float64Array ||
                      $report(_exceptionable, {
                        path: _path + ".float64Array",
                        expected: "Float64Array",
                        value: input.float64Array,
                      }),
                    input.arrayBuffer instanceof ArrayBuffer ||
                      $report(_exceptionable, {
                        path: _path + ".arrayBuffer",
                        expected: "ArrayBuffer",
                        value: input.arrayBuffer,
                      }),
                    input.sharedArrayBuffer instanceof SharedArrayBuffer ||
                      $report(_exceptionable, {
                        path: _path + ".sharedArrayBuffer",
                        expected: "SharedArrayBuffer",
                        value: input.sharedArrayBuffer,
                      }),
                    input.dataView instanceof DataView ||
                      $report(_exceptionable, {
                        path: _path + ".dataView",
                        expected: "DataView",
                        value: input.dataView,
                      }),
                  ].every((flag: boolean) => flag);
                return (
                  ((("object" === typeof input && null !== input) ||
                    $report(true, {
                      path: _path + "",
                      expected: "NativeSimple",
                      value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "NativeSimple",
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
          })(input) as import("typia").IValidation.IFailure,
        ].filter((r: any) => false === r.success);
        if (paramResults.length > 0)
          return {
            success: false,
            errors: paramResults
              .map((r: any, i: any) =>
                r.errors.map((error: any) => ({
                  ...error,
                  path: error.path.replace("$input", `$input.parameters[${i}]`),
                })),
              )
              .flat(),
          };
        const result = ((input: any): typia.IValidation<NativeSimple> => {
          const errors = [] as any[];
          const __is = (input: any): input is NativeSimple => {
            const $io0 = (input: any): boolean =>
              input.date instanceof Date &&
              input.uint8Array instanceof Uint8Array &&
              input.uint8ClampedArray instanceof Uint8ClampedArray &&
              input.uint16Array instanceof Uint16Array &&
              input.uint32Array instanceof Uint32Array &&
              input.bigUint64Array instanceof BigUint64Array &&
              input.int8Array instanceof Int8Array &&
              input.int16Array instanceof Int16Array &&
              input.int32Array instanceof Int32Array &&
              input.bigInt64Array instanceof BigInt64Array &&
              input.float32Array instanceof Float32Array &&
              input.float64Array instanceof Float64Array &&
              input.arrayBuffer instanceof ArrayBuffer &&
              input.sharedArrayBuffer instanceof SharedArrayBuffer &&
              input.dataView instanceof DataView;
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input)) {
            const $report = (typia.functional.validateFunction as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is NativeSimple => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  input.date instanceof Date ||
                    $report(_exceptionable, {
                      path: _path + ".date",
                      expected: "Date",
                      value: input.date,
                    }),
                  input.uint8Array instanceof Uint8Array ||
                    $report(_exceptionable, {
                      path: _path + ".uint8Array",
                      expected: "Uint8Array",
                      value: input.uint8Array,
                    }),
                  input.uint8ClampedArray instanceof Uint8ClampedArray ||
                    $report(_exceptionable, {
                      path: _path + ".uint8ClampedArray",
                      expected: "Uint8ClampedArray",
                      value: input.uint8ClampedArray,
                    }),
                  input.uint16Array instanceof Uint16Array ||
                    $report(_exceptionable, {
                      path: _path + ".uint16Array",
                      expected: "Uint16Array",
                      value: input.uint16Array,
                    }),
                  input.uint32Array instanceof Uint32Array ||
                    $report(_exceptionable, {
                      path: _path + ".uint32Array",
                      expected: "Uint32Array",
                      value: input.uint32Array,
                    }),
                  input.bigUint64Array instanceof BigUint64Array ||
                    $report(_exceptionable, {
                      path: _path + ".bigUint64Array",
                      expected: "BigUint64Array",
                      value: input.bigUint64Array,
                    }),
                  input.int8Array instanceof Int8Array ||
                    $report(_exceptionable, {
                      path: _path + ".int8Array",
                      expected: "Int8Array",
                      value: input.int8Array,
                    }),
                  input.int16Array instanceof Int16Array ||
                    $report(_exceptionable, {
                      path: _path + ".int16Array",
                      expected: "Int16Array",
                      value: input.int16Array,
                    }),
                  input.int32Array instanceof Int32Array ||
                    $report(_exceptionable, {
                      path: _path + ".int32Array",
                      expected: "Int32Array",
                      value: input.int32Array,
                    }),
                  input.bigInt64Array instanceof BigInt64Array ||
                    $report(_exceptionable, {
                      path: _path + ".bigInt64Array",
                      expected: "BigInt64Array",
                      value: input.bigInt64Array,
                    }),
                  input.float32Array instanceof Float32Array ||
                    $report(_exceptionable, {
                      path: _path + ".float32Array",
                      expected: "Float32Array",
                      value: input.float32Array,
                    }),
                  input.float64Array instanceof Float64Array ||
                    $report(_exceptionable, {
                      path: _path + ".float64Array",
                      expected: "Float64Array",
                      value: input.float64Array,
                    }),
                  input.arrayBuffer instanceof ArrayBuffer ||
                    $report(_exceptionable, {
                      path: _path + ".arrayBuffer",
                      expected: "ArrayBuffer",
                      value: input.arrayBuffer,
                    }),
                  input.sharedArrayBuffer instanceof SharedArrayBuffer ||
                    $report(_exceptionable, {
                      path: _path + ".sharedArrayBuffer",
                      expected: "SharedArrayBuffer",
                      value: input.sharedArrayBuffer,
                    }),
                  input.dataView instanceof DataView ||
                    $report(_exceptionable, {
                      path: _path + ".dataView",
                      expected: "DataView",
                      value: input.dataView,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "NativeSimple",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "NativeSimple",
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
        })(p(input));
        if (!result.success)
          result.errors = result.errors.map((error: any) => ({
            ...error,
            path: error.path.replace("$input", "$input.return"),
          }));
        return result;
      },
  );
