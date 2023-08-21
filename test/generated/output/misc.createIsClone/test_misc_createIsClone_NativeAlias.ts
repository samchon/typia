import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { NativeAlias } from "../../../structures/NativeAlias";

export const test_misc_isClone_NativeAlias = _test_misc_isClone(
    "NativeAlias",
)<NativeAlias>(NativeAlias)(
    (input: any): typia.Primitive<NativeAlias> | null => {
        const is = (input: any): input is NativeAlias => {
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
            return "object" === typeof input && null !== input && $io0(input);
        };
        const clone = (input: NativeAlias): typia.Primitive<NativeAlias> => {
            const $cp0 = (input: any) => input.map((elem: any) => elem as any);
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
                    ? $cp0(input.data)
                    : (input.data as any),
            });
            return "object" === typeof input && null !== input
                ? $co0(input)
                : (input as any);
        };
        if (!is(input)) return null;
        const output = clone(input);
        return output;
    },
);
