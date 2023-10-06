import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { NativeUnion } from "../../../structures/NativeUnion";

export const test_misc_createClone_NativeUnion = _test_misc_clone(
    "NativeUnion",
)<NativeUnion>(NativeUnion)(
    (input: NativeUnion): typia.Resolved<NativeUnion> => {
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
                    ? new Uint8Array(input.unsigned)
                    : input.unsigned instanceof Uint8ClampedArray
                    ? new Uint8ClampedArray(input.unsigned)
                    : input.unsigned instanceof Uint16Array
                    ? new Uint16Array(input.unsigned)
                    : input.unsigned instanceof Uint32Array
                    ? new Uint32Array(input.unsigned)
                    : input.unsigned instanceof BigUint64Array
                    ? new BigUint64Array(input.unsigned)
                    : (input.unsigned as any),
            signed:
                input.signed instanceof Int8Array
                    ? new Int8Array(input.signed)
                    : input.signed instanceof Int16Array
                    ? new Int16Array(input.signed)
                    : input.signed instanceof Int32Array
                    ? new Int32Array(input.signed)
                    : input.signed instanceof BigInt64Array
                    ? new BigInt64Array(input.signed)
                    : (input.signed as any),
            float:
                input.float instanceof Float32Array
                    ? new Float32Array(input.float)
                    : input.float instanceof Float64Array
                    ? new Float64Array(input.float)
                    : (input.float as any),
            buffer:
                input.buffer instanceof ArrayBuffer
                    ? (() => {
                          const buffer = new ArrayBuffer(
                              input.buffer.byteLength,
                          );
                          new Uint8Array(buffer).set(
                              new Uint8Array(input.buffer),
                          );
                          return buffer;
                      })()
                    : input.buffer instanceof SharedArrayBuffer
                    ? (() => {
                          const buffer = new SharedArrayBuffer(
                              input.buffer.byteLength,
                          );
                          new Uint8Array(buffer).set(
                              new Uint8Array(input.buffer),
                          );
                          return buffer;
                      })()
                    : (input.buffer as any),
        });
        return Array.isArray(input) ? $cp0(input) : (input as any);
    },
);
