import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { NativeUnion } from "../../../structures/NativeUnion";

export const test_createAssertStringify_NativeUnion = _test_assertStringify(
    "NativeUnion",
    NativeUnion.generate,
    (input: any): string => {
        const assert = (input: any): NativeUnion => {
            const $guard = (typia.createAssertStringify as any).guard;
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
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is NativeUnion => {
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
                            input.buffer instanceof DataView ||
                            input.buffer instanceof Buffer ||
                            $guard(_exceptionable, {
                                path: _path + ".buffer",
                                expected:
                                    "(ArrayBuffer | Buffer | DataView | SharedArrayBuffer)",
                                value: input.buffer,
                            })) &&
                        (input.weak instanceof WeakSet ||
                            input.weak instanceof WeakMap ||
                            $guard(_exceptionable, {
                                path: _path + ".weak",
                                expected: "(WeakMap | WeakSet)",
                                value: input.weak,
                            }));
                    return (
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "Array<NativeUnion.Union>",
                                value: input,
                            })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected: "NativeUnion.Union",
                                        value: elem,
                                    })) &&
                                $ao0(elem, _path + "[" + _index1 + "]", true),
                        )
                    );
                })(input, "$input", true);
            return input;
        };
        const stringify = (input: NativeUnion): string => {
            const $string = (typia.createAssertStringify as any).string;
            const $throws = (typia.createAssertStringify as any).throws;
            const $number = (typia.createAssertStringify as any).number;
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
        return stringify(assert(input));
    },
    NativeUnion.SPOILERS,
);
