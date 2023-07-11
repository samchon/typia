import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { NativeUnion } from "../../../structures/NativeUnion";

export const test_isClone_NativeUnion = _test_isClone(
    "NativeUnion",
    NativeUnion.generate,
    (input) =>
        ((input: any): typia.Primitive<Array<NativeUnion.Union>> | null => {
            const is = (input: any): input is Array<NativeUnion.Union> => {
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
                        input.buffer instanceof SharedArrayBuffer ||
                        input.buffer instanceof DataView ||
                        input.buffer instanceof Buffer) &&
                    (input.weak instanceof WeakSet ||
                        input.weak instanceof WeakMap);
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    )
                );
            };
            const clone = (
                input: Array<NativeUnion.Union>,
            ): typia.Primitive<Array<NativeUnion.Union>> => {
                const $cp0 = (input: any) =>
                    input.map((elem: any) =>
                        "object" === typeof elem && null !== elem
                            ? $co0(elem)
                            : (elem as any),
                    );
                const $cp1 = (input: any) =>
                    input.map((elem: any) => elem as any);
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
            };
            if (!is(input)) return null;
            const output = clone(input);
            return output;
        })(input),
    NativeUnion.SPOILERS,
);
