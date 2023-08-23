import typia from "../../../../src";
import { _test_protobuf_assertDecode } from "../../../internal/_test_protobuf_assertDecode";
import { TagStep } from "../../../structures/TagStep";

export const test_protobuf_assertDecode_TagStep = _test_protobuf_assertDecode(
    "TagStep",
)<TagStep>(TagStep)({
    assertDecode: (input: Uint8Array): typia.Resolved<TagStep> => {
        const decode = (input: Uint8Array): typia.Resolved<TagStep> => {
            const $Reader = (typia.protobuf.createAssertDecode as any).Reader;
            const $pdo0 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    value: [] as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            // type: Array<TagStep.Type>;
                            output.value.push($pdo1(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return output;
            };
            const $pdo1 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    exclusiveMinimum: undefined as any,
                    minimum: undefined as any,
                    range: undefined as any,
                    multipleOf: undefined as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            // number;
                            output.exclusiveMinimum = reader.double();
                            break;
                        case 2:
                            // number;
                            output.minimum = reader.double();
                            break;
                        case 3:
                            // number;
                            output.range = reader.double();
                            break;
                        case 4:
                            // number;
                            output.multipleOf = reader.double();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return output;
            };
            const reader = new $Reader(input);
            return $pdo0(reader);
        };
        const assert = (input: any): TagStep => {
            const __is = (input: any): input is TagStep => {
                const $io0 = (input: any): boolean =>
                    Array.isArray(input.value) &&
                    input.value.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io1(elem),
                    );
                const $io1 = (input: any): boolean =>
                    "number" === typeof input.exclusiveMinimum &&
                    0 === (input.exclusiveMinimum % 5) - 3 &&
                    3 < input.exclusiveMinimum &&
                    "number" === typeof input.minimum &&
                    0 === (input.minimum % 5) - 3 &&
                    3 <= input.minimum &&
                    "number" === typeof input.range &&
                    0 === (input.range % 5) - 0 &&
                    0 < input.range &&
                    100 > input.range &&
                    "number" === typeof input.multipleOf &&
                    0 === input.multipleOf % 5 &&
                    3 <= input.multipleOf &&
                    99 >= input.multipleOf;
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is TagStep => {
                    const $guard = (typia.protobuf.createAssertDecode as any)
                        .guard;
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ((Array.isArray(input.value) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "Array<TagStep.Type>",
                                value: input.value,
                            })) &&
                            input.value.every(
                                (elem: any, _index1: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".value[" +
                                                _index1 +
                                                "]",
                                            expected: "TagStep.Type",
                                            value: elem,
                                        })) &&
                                        $ao1(
                                            elem,
                                            _path + ".value[" + _index1 + "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".value[" + _index1 + "]",
                                        expected: "TagStep.Type",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "Array<TagStep.Type>",
                            value: input.value,
                        });
                    const $ao1 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("number" === typeof input.exclusiveMinimum &&
                            (0 === (input.exclusiveMinimum % 5) - 3 ||
                                $guard(_exceptionable, {
                                    path: _path + ".exclusiveMinimum",
                                    expected: "number (@step 5)",
                                    value: input.exclusiveMinimum,
                                })) &&
                            (3 < input.exclusiveMinimum ||
                                $guard(_exceptionable, {
                                    path: _path + ".exclusiveMinimum",
                                    expected: "number (@exclusiveMinimum 3)",
                                    value: input.exclusiveMinimum,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".exclusiveMinimum",
                                expected: "number",
                                value: input.exclusiveMinimum,
                            })) &&
                        (("number" === typeof input.minimum &&
                            (0 === (input.minimum % 5) - 3 ||
                                $guard(_exceptionable, {
                                    path: _path + ".minimum",
                                    expected: "number (@step 5)",
                                    value: input.minimum,
                                })) &&
                            (3 <= input.minimum ||
                                $guard(_exceptionable, {
                                    path: _path + ".minimum",
                                    expected: "number (@minimum 3)",
                                    value: input.minimum,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".minimum",
                                expected: "number",
                                value: input.minimum,
                            })) &&
                        (("number" === typeof input.range &&
                            (0 === (input.range % 5) - 0 ||
                                $guard(_exceptionable, {
                                    path: _path + ".range",
                                    expected: "number (@step 5)",
                                    value: input.range,
                                })) &&
                            (0 < input.range ||
                                $guard(_exceptionable, {
                                    path: _path + ".range",
                                    expected: "number (@exclusiveMinimum 0)",
                                    value: input.range,
                                })) &&
                            (100 > input.range ||
                                $guard(_exceptionable, {
                                    path: _path + ".range",
                                    expected: "number (@exclusiveMaximum 100)",
                                    value: input.range,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".range",
                                expected: "number",
                                value: input.range,
                            })) &&
                        (("number" === typeof input.multipleOf &&
                            (0 === input.multipleOf % 5 ||
                                $guard(_exceptionable, {
                                    path: _path + ".multipleOf",
                                    expected: "number (@multipleOf 5)",
                                    value: input.multipleOf,
                                })) &&
                            (3 <= input.multipleOf ||
                                $guard(_exceptionable, {
                                    path: _path + ".multipleOf",
                                    expected: "number (@minimum 3)",
                                    value: input.multipleOf,
                                })) &&
                            (99 >= input.multipleOf ||
                                $guard(_exceptionable, {
                                    path: _path + ".multipleOf",
                                    expected: "number (@maximum 99)",
                                    value: input.multipleOf,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".multipleOf",
                                expected: "number",
                                value: input.multipleOf,
                            }));
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "TagStep",
                                value: input,
                            })) &&
                            $ao0(input, _path + "", true)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "TagStep",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        };
        const output = decode(input);
        return assert(output);
    },
    encode: (input: TagStep): Uint8Array => {
        const $Sizer = (typia.protobuf.createEncode as any).Sizer;
        const $Writer = (typia.protobuf.createEncode as any).Writer;
        const encoder = (writer: any): any => {
            const $peo0 = (input: any): any => {
                // property "value";
                if (0 !== input.value.length) {
                    for (const elem of input.value) {
                        // 1 -> TagStep.Type;
                        writer.uint32(10);
                        writer.fork();
                        $peo1(elem);
                        writer.ldelim();
                    }
                }
            };
            const $peo1 = (input: any): any => {
                // property "exclusiveMinimum";
                writer.uint32(9);
                writer.double(input.exclusiveMinimum);
                // property "minimum";
                writer.uint32(17);
                writer.double(input.minimum);
                // property "range";
                writer.uint32(25);
                writer.double(input.range);
                // property "multipleOf";
                writer.uint32(33);
                writer.double(input.multipleOf);
            };
            const $io1 = (input: any): boolean =>
                "number" === typeof input.exclusiveMinimum &&
                0 === (input.exclusiveMinimum % 5) - 3 &&
                3 < input.exclusiveMinimum &&
                "number" === typeof input.minimum &&
                0 === (input.minimum % 5) - 3 &&
                3 <= input.minimum &&
                "number" === typeof input.range &&
                0 === (input.range % 5) - 0 &&
                0 < input.range &&
                100 > input.range &&
                "number" === typeof input.multipleOf &&
                0 === input.multipleOf % 5 &&
                3 <= input.multipleOf &&
                99 >= input.multipleOf;
            //TagStep;
            $peo0(input);
            return writer;
        };
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
    },
});
