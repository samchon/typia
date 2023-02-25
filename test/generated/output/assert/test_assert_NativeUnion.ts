import typia from "../../../../src";
import { NativeUnion } from "../../../structures/NativeUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_NativeUnion = _test_assert(
    "NativeUnion",
    NativeUnion.generate,
    (input) =>
        ((input: any): NativeUnion => {
            const $guard = (typia.assert as any).guard;
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
                    (input.buffer instanceof Buffer ||
                        input.buffer instanceof ArrayBuffer ||
                        input.buffer instanceof SharedArrayBuffer ||
                        input.buffer instanceof DataView ||
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
                            expected: "Array<Resolve<NativeUnion.Union>>",
                            value: input,
                        })) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected: "Resolve<NativeUnion.Union>",
                                    value: elem,
                                })) &&
                            $ao0(elem, _path + "[" + _index1 + "]", true),
                    )
                );
            })(input, "$input", true);
            return input;
        })(input),
    NativeUnion.SPOILERS,
);
