import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { NativeUnion } from "../../../structures/NativeUnion";

export const test_createIsStringify_NativeUnion = _test_isStringify(
    "NativeUnion",
    NativeUnion.generate,
    (input: NativeUnion): string | null => {
        const is = (input: any): input is NativeUnion => {
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
                        "object" === typeof elem && null !== elem && $io0(elem),
                )
            );
        };
        const stringify = (input: NativeUnion): string => {
            const $string = (typia.createIsStringify as any).string;
            const $throws = (typia.createIsStringify as any).throws;
            const $number = (typia.createIsStringify as any).number;
            const $io1 = (input: any): boolean =>
                "Buffer" === input.type &&
                Array.isArray(input.data) &&
                input.data.every((elem: any) => "number" === typeof elem);
            const $so0 = (input: any): any =>
                `{"date":${
                    null !== input.date
                        ? (() => {
                              if (
                                  "object" === typeof input.date &&
                                  "function" === typeof input.date.toJSON
                              )
                                  return JSON.stringify(input.date.toJSON());
                              if ("string" === typeof input.date)
                                  return $string(input.date);
                              $throws({
                                  expected: "(null | string | unknown)",
                                  value: input.date,
                              });
                          })()
                        : "null"
                },"unsigned":${(() => {
                    if (input.unsigned instanceof Uint8Array) return "{}";
                    if (input.unsigned instanceof Uint8ClampedArray)
                        return "{}";
                    if (input.unsigned instanceof Uint16Array) return "{}";
                    if (input.unsigned instanceof Uint32Array) return "{}";
                    if (input.unsigned instanceof BigUint64Array) return "{}";
                    $throws({
                        expected:
                            "(BigUint64Array | Uint16Array | Uint32Array | Uint8Array | Uint8ClampedArray)",
                        value: input.unsigned,
                    });
                })()},"signed":${(() => {
                    if (input.signed instanceof Int8Array) return "{}";
                    if (input.signed instanceof Int16Array) return "{}";
                    if (input.signed instanceof Int32Array) return "{}";
                    if (input.signed instanceof BigInt64Array) return "{}";
                    $throws({
                        expected:
                            "(BigInt64Array | Int16Array | Int32Array | Int8Array)",
                        value: input.signed,
                    });
                })()},"float":${(() => {
                    if (input.float instanceof Float32Array) return "{}";
                    if (input.float instanceof Float64Array) return "{}";
                    $throws({
                        expected: "(Float32Array | Float64Array)",
                        value: input.float,
                    });
                })()},"buffer":${(() => {
                    if (
                        "object" === typeof input.buffer &&
                        "function" === typeof input.buffer.toJSON
                    )
                        return JSON.stringify(input.buffer.toJSON());
                    if (input.buffer instanceof ArrayBuffer) return "{}";
                    if (input.buffer instanceof SharedArrayBuffer) return "{}";
                    if (input.buffer instanceof DataView) return "{}";
                    if (
                        "object" === typeof input.buffer &&
                        null !== input.buffer
                    )
                        return $so1(input.buffer);
                    $throws({
                        expected:
                            "(ArrayBuffer | DataView | SharedArrayBuffer | __type | unknown)",
                        value: input.buffer,
                    });
                })()},"weak":${(() => {
                    if (input.weak instanceof WeakSet) return "{}";
                    if (input.weak instanceof WeakMap) return "{}";
                    $throws({
                        expected: "(WeakMap | WeakSet)",
                        value: input.weak,
                    });
                })()}}`;
            const $so1 = (input: any): any =>
                `{"type":${(() => {
                    if ("string" === typeof input.type)
                        return $string(input.type);
                    if ("string" === typeof input.type)
                        return '"' + input.type + '"';
                    $throws({
                        expected: '"Buffer"',
                        value: input.type,
                    });
                })()},"data":${`[${input.data
                    .map((elem: any) => $number(elem))
                    .join(",")}]`}}`;
            return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
        };
        return is(input) ? stringify(input) : null;
    },
    NativeUnion.SPOILERS,
);
