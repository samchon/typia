import typia from "../../../../src";
import { _test_json_validateStringify } from "../../../internal/_test_json_validateStringify";
import { NativeAlias } from "../../../structures/NativeAlias";

export const test_json_validateStringify_NativeAlias =
    _test_json_validateStringify(
        "NativeAlias",
        NativeAlias.generate,
        (input) =>
            ((input: NativeAlias): typia.IValidation<string> => {
                const validate = (
                    input: any,
                ): typia.IValidation<NativeAlias> => {
                    const errors = [] as any[];
                    const __is = (input: any): input is NativeAlias => {
                        const $io0 = (input: any): boolean =>
                            input.date instanceof Date &&
                            input.uint8Array instanceof Uint8Array &&
                            input.uint8ClampedArray instanceof
                                Uint8ClampedArray &&
                            input.uint16Array instanceof Uint16Array &&
                            input.uint32Array instanceof Uint32Array &&
                            input.bigUint64Array instanceof BigUint64Array &&
                            input.int8Array instanceof Int8Array &&
                            input.int16Array instanceof Int16Array &&
                            input.int32Array instanceof Int32Array &&
                            input.bigInt64Array instanceof BigInt64Array &&
                            input.float32Array instanceof Float32Array &&
                            input.float64Array instanceof Float64Array &&
                            input.buffer instanceof Buffer &&
                            input.arrayBuffer instanceof ArrayBuffer &&
                            input.sharedArrayBuffer instanceof
                                SharedArrayBuffer &&
                            input.dataView instanceof DataView &&
                            input.weakSet instanceof WeakSet &&
                            input.weakMap instanceof WeakMap;
                        return (
                            "object" === typeof input &&
                            null !== input &&
                            $io0(input)
                        );
                    };
                    if (false === __is(input)) {
                        const $report = (
                            typia.json.validateStringify as any
                        ).report(errors);
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is NativeAlias => {
                            const $vo0 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                [
                                    input.date instanceof Date ||
                                        $report(_exceptionable, {
                                            path: _path + ".date",
                                            expected: "Date",
                                            value: input.date,
                                        }),
                                    input.uint8Array instanceof Uint8Array ||
                                        $report(_exceptionable, {
                                            path: _path + ".uint8Array",
                                            expected: "Uint8Array",
                                            value: input.uint8Array,
                                        }),
                                    input.uint8ClampedArray instanceof
                                        Uint8ClampedArray ||
                                        $report(_exceptionable, {
                                            path: _path + ".uint8ClampedArray",
                                            expected: "Uint8ClampedArray",
                                            value: input.uint8ClampedArray,
                                        }),
                                    input.uint16Array instanceof Uint16Array ||
                                        $report(_exceptionable, {
                                            path: _path + ".uint16Array",
                                            expected: "Uint16Array",
                                            value: input.uint16Array,
                                        }),
                                    input.uint32Array instanceof Uint32Array ||
                                        $report(_exceptionable, {
                                            path: _path + ".uint32Array",
                                            expected: "Uint32Array",
                                            value: input.uint32Array,
                                        }),
                                    input.bigUint64Array instanceof
                                        BigUint64Array ||
                                        $report(_exceptionable, {
                                            path: _path + ".bigUint64Array",
                                            expected: "BigUint64Array",
                                            value: input.bigUint64Array,
                                        }),
                                    input.int8Array instanceof Int8Array ||
                                        $report(_exceptionable, {
                                            path: _path + ".int8Array",
                                            expected: "Int8Array",
                                            value: input.int8Array,
                                        }),
                                    input.int16Array instanceof Int16Array ||
                                        $report(_exceptionable, {
                                            path: _path + ".int16Array",
                                            expected: "Int16Array",
                                            value: input.int16Array,
                                        }),
                                    input.int32Array instanceof Int32Array ||
                                        $report(_exceptionable, {
                                            path: _path + ".int32Array",
                                            expected: "Int32Array",
                                            value: input.int32Array,
                                        }),
                                    input.bigInt64Array instanceof
                                        BigInt64Array ||
                                        $report(_exceptionable, {
                                            path: _path + ".bigInt64Array",
                                            expected: "BigInt64Array",
                                            value: input.bigInt64Array,
                                        }),
                                    input.float32Array instanceof
                                        Float32Array ||
                                        $report(_exceptionable, {
                                            path: _path + ".float32Array",
                                            expected: "Float32Array",
                                            value: input.float32Array,
                                        }),
                                    input.float64Array instanceof
                                        Float64Array ||
                                        $report(_exceptionable, {
                                            path: _path + ".float64Array",
                                            expected: "Float64Array",
                                            value: input.float64Array,
                                        }),
                                    input.buffer instanceof Buffer ||
                                        $report(_exceptionable, {
                                            path: _path + ".buffer",
                                            expected: "Buffer",
                                            value: input.buffer,
                                        }),
                                    input.arrayBuffer instanceof ArrayBuffer ||
                                        $report(_exceptionable, {
                                            path: _path + ".arrayBuffer",
                                            expected: "ArrayBuffer",
                                            value: input.arrayBuffer,
                                        }),
                                    input.sharedArrayBuffer instanceof
                                        SharedArrayBuffer ||
                                        $report(_exceptionable, {
                                            path: _path + ".sharedArrayBuffer",
                                            expected: "SharedArrayBuffer",
                                            value: input.sharedArrayBuffer,
                                        }),
                                    input.dataView instanceof DataView ||
                                        $report(_exceptionable, {
                                            path: _path + ".dataView",
                                            expected: "DataView",
                                            value: input.dataView,
                                        }),
                                    input.weakSet instanceof WeakSet ||
                                        $report(_exceptionable, {
                                            path: _path + ".weakSet",
                                            expected: "WeakSet",
                                            value: input.weakSet,
                                        }),
                                    input.weakMap instanceof WeakMap ||
                                        $report(_exceptionable, {
                                            path: _path + ".weakMap",
                                            expected: "WeakMap",
                                            value: input.weakMap,
                                        }),
                                ].every((flag: boolean) => flag);
                            return (
                                ((("object" === typeof input &&
                                    null !== input) ||
                                    $report(true, {
                                        path: _path + "",
                                        expected: "NativeAlias",
                                        value: input,
                                    })) &&
                                    $vo0(input, _path + "", true)) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "NativeAlias",
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
                const stringify = (input: NativeAlias): string => {
                    const $string = (typia.json.validateStringify as any)
                        .string;
                    const $throws = (typia.json.validateStringify as any)
                        .throws;
                    const $number = (typia.json.validateStringify as any)
                        .number;
                    const $so0 = (input: any): any =>
                        `{"date":${$string(
                            input.date.toJSON(),
                        )},"uint8Array":{},"uint8ClampedArray":{},"uint16Array":{},"uint32Array":{},"bigUint64Array":{},"int8Array":{},"int16Array":{},"int32Array":{},"bigInt64Array":{},"float32Array":{},"float64Array":{},"buffer":${$so1(
                            input.buffer.toJSON(),
                        )},"arrayBuffer":{},"sharedArrayBuffer":{},"dataView":{},"weakSet":{},"weakMap":{}}`;
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
                    return $so0(input);
                };
                const output = validate(input) as any;
                if (output.success) output.data = stringify(input);
                return output;
            })(input),
        NativeAlias.SPOILERS,
    );
