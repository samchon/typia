import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { NativeUnion } from "../../../structures/NativeUnion";

export const test_validate_NativeUnion = _test_validate(
    "NativeUnion",
    NativeUnion.generate,
    (input) =>
        ((input: any): typia.IValidation<Array<NativeUnion.Union>> => {
            const __is: any = (
                input: any,
            ): input is Array<NativeUnion.Union> => {
                const $io0: any = (input: any): boolean =>
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
            const errors: any = [] as any[];
            const $report: any = (typia.validate as any).report(errors);
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is Array<NativeUnion.Union> => {
                    const $vo0: any = (
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
                                input.buffer instanceof DataView ||
                                input.buffer instanceof Buffer ||
                                $report(_exceptionable, {
                                    path: _path + ".buffer",
                                    expected:
                                        "(ArrayBuffer | Buffer | DataView | SharedArrayBuffer)",
                                    value: input.buffer,
                                }),
                            input.weak instanceof WeakSet ||
                                input.weak instanceof WeakMap ||
                                $report(_exceptionable, {
                                    path: _path + ".weak",
                                    expected: "(WeakMap | WeakSet)",
                                    value: input.weak,
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
            const success: any = 0 === errors.length;
            return {
                success,
                errors,
                data: success ? input : undefined,
            } as any;
        })(input),
    NativeUnion.SPOILERS,
);
