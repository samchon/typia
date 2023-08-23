import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { NativeSimple } from "../../../structures/NativeSimple";

export const test_misc_isClone_NativeSimple = _test_misc_isClone(
    "NativeSimple",
)<NativeSimple>(NativeSimple)((input) =>
    ((input: any): typia.Resolved<NativeSimple> | null => {
        const is = (input: any): input is NativeSimple => {
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
        const clone = (input: NativeSimple): typia.Resolved<NativeSimple> => {
            const $co0 = (input: any): any => ({
                date:
                    input.date instanceof Date
                        ? new Date(input.date)
                        : (input.date as any),
                uint8Array:
                    input.uint8Array instanceof Uint8Array
                        ? new Uint8Array(input.uint8Array)
                        : (input.uint8Array as any),
                uint8ClampedArray:
                    input.uint8ClampedArray instanceof Uint8ClampedArray
                        ? new Uint8ClampedArray(input.uint8ClampedArray)
                        : (input.uint8ClampedArray as any),
                uint16Array:
                    input.uint16Array instanceof Uint16Array
                        ? new Uint16Array(input.uint16Array)
                        : (input.uint16Array as any),
                uint32Array:
                    input.uint32Array instanceof Uint32Array
                        ? new Uint32Array(input.uint32Array)
                        : (input.uint32Array as any),
                bigUint64Array:
                    input.bigUint64Array instanceof BigUint64Array
                        ? new BigUint64Array(input.bigUint64Array)
                        : (input.bigUint64Array as any),
                int8Array:
                    input.int8Array instanceof Int8Array
                        ? new Int8Array(input.int8Array)
                        : (input.int8Array as any),
                int16Array:
                    input.int16Array instanceof Int16Array
                        ? new Int16Array(input.int16Array)
                        : (input.int16Array as any),
                int32Array:
                    input.int32Array instanceof Int32Array
                        ? new Int32Array(input.int32Array)
                        : (input.int32Array as any),
                bigInt64Array:
                    input.bigInt64Array instanceof BigInt64Array
                        ? new BigInt64Array(input.bigInt64Array)
                        : (input.bigInt64Array as any),
                float32Array:
                    input.float32Array instanceof Float32Array
                        ? new Float32Array(input.float32Array)
                        : (input.float32Array as any),
                float64Array:
                    input.float64Array instanceof Float64Array
                        ? new Float64Array(input.float64Array)
                        : (input.float64Array as any),
                arrayBuffer:
                    input.arrayBuffer instanceof ArrayBuffer
                        ? (() => {
                              const buffer = new ArrayBuffer(
                                  input.arrayBuffer.byteLength,
                              );
                              new Uint8Array(buffer).set(
                                  new Uint8Array(input.arrayBuffer),
                              );
                              return buffer;
                          })()
                        : (input.arrayBuffer as any),
                sharedArrayBuffer:
                    input.sharedArrayBuffer instanceof SharedArrayBuffer
                        ? (() => {
                              const buffer = new SharedArrayBuffer(
                                  input.sharedArrayBuffer.byteLength,
                              );
                              new Uint8Array(buffer).set(
                                  new Uint8Array(input.sharedArrayBuffer),
                              );
                              return buffer;
                          })()
                        : (input.sharedArrayBuffer as any),
                dataView:
                    input.dataView instanceof DataView
                        ? new DataView(input.dataView.buffer)
                        : (input.dataView as any),
            });
            return "object" === typeof input && null !== input
                ? $co0(input)
                : (input as any);
        };
        if (!is(input)) return null;
        const output = clone(input);
        return output;
    })(input),
);
