import typia from "../../../../src";
import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { NativeUnion } from "../../../structures/NativeUnion";

export const test_misc_assertClone_NativeUnion = _test_misc_assertClone(
    "NativeUnion",
)<NativeUnion>(NativeUnion)((input) =>
    ((input: any): typia.Resolved<NativeUnion> => {
        const assert = (input: any): NativeUnion => {
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
                    const $guard = (typia.misc.assertClone as any).guard;
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
                            $guard(_exceptionable, {
                                path: _path + ".buffer",
                                expected: "(ArrayBuffer | SharedArrayBuffer)",
                                value: input.buffer,
                            }));
                    return (
                        ((Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "NativeUnion",
                                value: input,
                            })) &&
                            input.every(
                                (elem: any, _index1: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected: "NativeUnion.Union",
                                            value: elem,
                                        })) &&
                                        $ao0(
                                            elem,
                                            _path + "[" + _index1 + "]",
                                            true,
                                        )) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected: "NativeUnion.Union",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "NativeUnion",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        };
        const clone = (input: NativeUnion): typia.Resolved<NativeUnion> => {
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
        };
        assert(input);
        const output = clone(input);
        return output;
    })(input),
);
