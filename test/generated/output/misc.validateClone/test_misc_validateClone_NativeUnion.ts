import typia from "../../../../src";
import { _test_misc_validateClone } from "../../../internal/_test_misc_validateClone";
import { NativeUnion } from "../../../structures/NativeUnion";

export const test_misc_validateClone_NativeUnion = _test_misc_validateClone(
    "NativeUnion",
)<NativeUnion>(NativeUnion)((input) =>
    ((input: any): typia.IValidation<typia.Resolved<NativeUnion>> => {
        const validate = (input: any): typia.IValidation<NativeUnion> => {
            const errors = [] as any[];
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
            if (false === __is(input)) {
                const $report = (typia.misc.validateClone as any).report(
                    errors,
                );
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is NativeUnion => {
                    const $vo0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            null === input.date ||
                                input.date instanceof Date ||
                                $report(_exceptionable, {
                                    path: _path + ".date",
                                    expected: "(Date | null)",
                                    value: input.date,
                                }),
                            input.unsigned instanceof Uint8Array ||
                                input.unsigned instanceof Uint8ClampedArray ||
                                input.unsigned instanceof Uint16Array ||
                                input.unsigned instanceof Uint32Array ||
                                input.unsigned instanceof BigUint64Array ||
                                $report(_exceptionable, {
                                    path: _path + ".unsigned",
                                    expected:
                                        "(BigUint64Array | Uint16Array | Uint32Array | Uint8Array | Uint8ClampedArray)",
                                    value: input.unsigned,
                                }),
                            input.signed instanceof Int8Array ||
                                input.signed instanceof Int16Array ||
                                input.signed instanceof Int32Array ||
                                input.signed instanceof BigInt64Array ||
                                $report(_exceptionable, {
                                    path: _path + ".signed",
                                    expected:
                                        "(BigInt64Array | Int16Array | Int32Array | Int8Array)",
                                    value: input.signed,
                                }),
                            input.float instanceof Float32Array ||
                                input.float instanceof Float64Array ||
                                $report(_exceptionable, {
                                    path: _path + ".float",
                                    expected: "(Float32Array | Float64Array)",
                                    value: input.float,
                                }),
                            input.buffer instanceof ArrayBuffer ||
                                input.buffer instanceof SharedArrayBuffer ||
                                $report(_exceptionable, {
                                    path: _path + ".buffer",
                                    expected:
                                        "(ArrayBuffer | SharedArrayBuffer)",
                                    value: input.buffer,
                                }),
                        ].every((flag: boolean) => flag);
                    return (
                        ((Array.isArray(input) ||
                            $report(true, {
                                path: _path + "",
                                expected: "NativeUnion",
                                value: input,
                            })) &&
                            input
                                .map(
                                    (elem: any, _index1: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $report(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected: "NativeUnion.Union",
                                                value: elem,
                                            })) &&
                                            $vo0(
                                                elem,
                                                _path + "[" + _index1 + "]",
                                                true,
                                            )) ||
                                        $report(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected: "NativeUnion.Union",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "NativeUnion",
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
        const output = validate(input) as any;
        if (output.success) output.data = clone(input);
        return output;
    })(input),
);
