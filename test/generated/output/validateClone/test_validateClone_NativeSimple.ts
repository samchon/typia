import typia from "../../../../src";
import { _test_validateClone } from "../../../internal/_test_validateClone";
import { NativeSimple } from "../../../structures/NativeSimple";

export const test_validateClone_NativeSimple = _test_validateClone(
    "NativeSimple",
    NativeSimple.generate,
    (input) =>
        ((input: any): typia.IValidation<typia.Primitive<NativeSimple>> => {
            const validate = (input: any): typia.IValidation<NativeSimple> => {
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
                        input.buffer instanceof Buffer &&
                        input.arrayBuffer instanceof ArrayBuffer &&
                        input.sharedArrayBuffer instanceof SharedArrayBuffer &&
                        input.dataView instanceof DataView &&
                        input.weakSet instanceof WeakSet &&
                        input.weakMap instanceof WeakMap;
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        $io0(input)
                    );
                };
                const errors = [] as any[];
                const $report = (typia.validateClone as any).report(errors);
                if (false === __is(input))
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
                                input.uint8ClampedArray instanceof
                                    Uint8ClampedArray ||
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
                                input.bigUint64Array instanceof
                                    BigUint64Array ||
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
                                input.buffer instanceof Buffer ||
                                    $report(_exceptionable, {
                                        path: _path + ".buffer",
                                        expected: "Buffer",
                                        value: input.buffer,
                                    }),
                                input.arrayBuffer instanceof ArrayBuffer ||
                                    $report(_exceptionable, {
                                        path: _path + ".arrayBuffer",
                                        expected: "ArrayBuffer",
                                        value: input.arrayBuffer,
                                    }),
                                input.sharedArrayBuffer instanceof
                                    SharedArrayBuffer ||
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
                                input.weakSet instanceof WeakSet ||
                                    $report(_exceptionable, {
                                        path: _path + ".weakSet",
                                        expected: "WeakSet",
                                        value: input.weakSet,
                                    }),
                                input.weakMap instanceof WeakMap ||
                                    $report(_exceptionable, {
                                        path: _path + ".weakMap",
                                        expected: "WeakMap",
                                        value: input.weakMap,
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
                const success = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const clone = (
                input: NativeSimple,
            ): typia.Primitive<NativeSimple> => {
                const $co0 = (input: any): any => ({
                    date:
                        "object" === typeof input.date &&
                        null !== input.date &&
                        "function" === typeof input.date.toJSON
                            ? (input.date.toJSON() as any)
                            : (input.date as any),
                    uint8Array:
                        input.uint8Array instanceof Uint8Array
                            ? {}
                            : (input.uint8Array as any),
                    uint8ClampedArray:
                        input.uint8ClampedArray instanceof Uint8ClampedArray
                            ? {}
                            : (input.uint8ClampedArray as any),
                    uint16Array:
                        input.uint16Array instanceof Uint16Array
                            ? {}
                            : (input.uint16Array as any),
                    uint32Array:
                        input.uint32Array instanceof Uint32Array
                            ? {}
                            : (input.uint32Array as any),
                    bigUint64Array:
                        input.bigUint64Array instanceof BigUint64Array
                            ? {}
                            : (input.bigUint64Array as any),
                    int8Array:
                        input.int8Array instanceof Int8Array
                            ? {}
                            : (input.int8Array as any),
                    int16Array:
                        input.int16Array instanceof Int16Array
                            ? {}
                            : (input.int16Array as any),
                    int32Array:
                        input.int32Array instanceof Int32Array
                            ? {}
                            : (input.int32Array as any),
                    bigInt64Array:
                        input.bigInt64Array instanceof BigInt64Array
                            ? {}
                            : (input.bigInt64Array as any),
                    float32Array:
                        input.float32Array instanceof Float32Array
                            ? {}
                            : (input.float32Array as any),
                    float64Array:
                        input.float64Array instanceof Float64Array
                            ? {}
                            : (input.float64Array as any),
                    buffer:
                        "object" === typeof input.buffer &&
                        null !== input.buffer &&
                        "function" === typeof input.buffer.toJSON
                            ? "object" === typeof input.buffer.toJSON() &&
                              null !== input.buffer.toJSON()
                                ? $co1(input.buffer.toJSON())
                                : (input.buffer.toJSON() as any)
                            : (input.buffer as any),
                    arrayBuffer:
                        input.arrayBuffer instanceof ArrayBuffer
                            ? {}
                            : (input.arrayBuffer as any),
                    sharedArrayBuffer:
                        input.sharedArrayBuffer instanceof SharedArrayBuffer
                            ? {}
                            : (input.sharedArrayBuffer as any),
                    dataView:
                        input.dataView instanceof DataView
                            ? {}
                            : (input.dataView as any),
                    weakSet:
                        input.weakSet instanceof WeakSet
                            ? {}
                            : (input.weakSet as any),
                    weakMap:
                        input.weakMap instanceof WeakMap
                            ? {}
                            : (input.weakMap as any),
                });
                const $co1 = (input: any): any => ({
                    type: input.type as any,
                    data: Array.isArray(input.data)
                        ? input.data.map((elem: any) => elem as any)
                        : (input.data as any),
                });
                return "object" === typeof input && null !== input
                    ? $co0(input)
                    : (input as any);
            };
            const output = validate(input) as any;
            if (output.success) output.data = clone(input);
            return output;
        })(input),
    NativeSimple.SPOILERS,
);
