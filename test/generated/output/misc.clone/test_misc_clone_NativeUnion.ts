import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { NativeUnion } from "../../../structures/NativeUnion";

export const test_misc_clone_NativeUnion = _test_misc_clone<NativeUnion>(
    NativeUnion,
)((input) =>
    ((input: NativeUnion): typia.Primitive<NativeUnion> => {
        const $cp0 = (input: any) =>
            input.map((elem: any) =>
                "object" === typeof elem && null !== elem
                    ? $co0(elem)
                    : (elem as any),
            );
        const $cp1 = (input: any) => input.map((elem: any) => elem as any);
        const $co0 = (input: any): any => ({
            date:
                "object" === typeof input.date &&
                null !== input.date &&
                "function" === typeof input.date.toJSON
                    ? (input.date.toJSON() as any)
                    : (input.date as any),
            unsigned:
                input.unsigned instanceof Uint8Array
                    ? {}
                    : input.unsigned instanceof Uint8ClampedArray
                    ? {}
                    : input.unsigned instanceof Uint16Array
                    ? {}
                    : input.unsigned instanceof Uint32Array
                    ? {}
                    : input.unsigned instanceof BigUint64Array
                    ? {}
                    : (input.unsigned as any),
            signed:
                input.signed instanceof Int8Array
                    ? {}
                    : input.signed instanceof Int16Array
                    ? {}
                    : input.signed instanceof Int32Array
                    ? {}
                    : input.signed instanceof BigInt64Array
                    ? {}
                    : (input.signed as any),
            float:
                input.float instanceof Float32Array
                    ? {}
                    : input.float instanceof Float64Array
                    ? {}
                    : (input.float as any),
            buffer:
                "object" === typeof input.buffer &&
                null !== input.buffer &&
                "function" === typeof input.buffer.toJSON
                    ? "object" === typeof input.buffer.toJSON() &&
                      null !== input.buffer.toJSON()
                        ? $co1(input.buffer.toJSON())
                        : (input.buffer.toJSON() as any)
                    : input.buffer instanceof ArrayBuffer
                    ? {}
                    : input.buffer instanceof SharedArrayBuffer
                    ? {}
                    : input.buffer instanceof DataView
                    ? {}
                    : (input.buffer as any),
            weak:
                input.weak instanceof WeakSet
                    ? {}
                    : input.weak instanceof WeakMap
                    ? {}
                    : (input.weak as any),
        });
        const $co1 = (input: any): any => ({
            type: input.type as any,
            data: Array.isArray(input.data)
                ? $cp1(input.data)
                : (input.data as any),
        });
        return Array.isArray(input) ? $cp0(input) : (input as any);
    })(input),
);
