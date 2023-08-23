import typia from "../../../../src";
import { _test_json_validateStringify } from "../../../internal/_test_json_validateStringify";
import { NativeUnion } from "../../../structures/NativeUnion";

export const test_json_validateStringify_NativeUnion =
    _test_json_validateStringify("NativeUnion")<NativeUnion>(NativeUnion)(
        (input: NativeUnion): typia.IValidation<string> => {
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
                    const $report = (
                        typia.json.createValidateStringify as any
                    ).report(errors);
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
                                    input.unsigned instanceof
                                        Uint8ClampedArray ||
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
                                        expected:
                                            "(Float32Array | Float64Array)",
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
                                                        _path +
                                                        "[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        "NativeUnion.Union",
                                                    value: elem,
                                                })) &&
                                                $vo0(
                                                    elem,
                                                    _path + "[" + _index1 + "]",
                                                    true,
                                                )) ||
                                            $report(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
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
            const stringify = (input: NativeUnion): string => {
                const $string = (typia.json.createValidateStringify as any)
                    .string;
                const $throws = (typia.json.createValidateStringify as any)
                    .throws;
                const $so0 = (input: any): any =>
                    `{"date":${
                        null !== input.date
                            ? $string(input.date.toJSON())
                            : "null"
                    },"unsigned":${(() => {
                        if (input.unsigned instanceof Uint8Array) return "{}";
                        if (input.unsigned instanceof Uint8ClampedArray)
                            return "{}";
                        if (input.unsigned instanceof Uint16Array) return "{}";
                        if (input.unsigned instanceof Uint32Array) return "{}";
                        if (input.unsigned instanceof BigUint64Array)
                            return "{}";
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
                        if (input.buffer instanceof ArrayBuffer) return "{}";
                        if (input.buffer instanceof SharedArrayBuffer)
                            return "{}";
                        $throws({
                            expected: "(ArrayBuffer | SharedArrayBuffer)",
                            value: input.buffer,
                        });
                    })()}}`;
                return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
            };
            const output = validate(input) as any;
            if (output.success) output.data = stringify(input);
            return output;
        },
    );
