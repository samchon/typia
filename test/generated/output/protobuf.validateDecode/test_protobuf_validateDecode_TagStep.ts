import typia from "../../../../src";
import { _test_protobuf_validateDecode } from "../../../internal/_test_protobuf_validateDecode";
import { TagStep } from "../../../structures/TagStep";

export const test_protobuf_validateDecode_TagStep =
    _test_protobuf_validateDecode("TagStep")<TagStep>(TagStep)({
        validateDecode: (input) =>
            ((input: Uint8Array): typia.IValidation<TagStep> => {
                const validate = (input: any): typia.IValidation<TagStep> => {
                    const errors = [] as any[];
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
                            "object" === typeof input &&
                            null !== input &&
                            $io0(input)
                        );
                    };
                    if (false === __is(input)) {
                        const $report = (
                            typia.protobuf.validateDecode as any
                        ).report(errors);
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is TagStep => {
                            const $vo0 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                [
                                    ((Array.isArray(input.value) ||
                                        $report(_exceptionable, {
                                            path: _path + ".value",
                                            expected: "Array<TagStep.Type>",
                                            value: input.value,
                                        })) &&
                                        input.value
                                            .map(
                                                (elem: any, _index1: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    ".value[" +
                                                                    _index1 +
                                                                    "]",
                                                                expected:
                                                                    "TagStep.Type",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vo1(
                                                            elem,
                                                            _path +
                                                                ".value[" +
                                                                _index1 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".value[" +
                                                            _index1 +
                                                            "]",
                                                        expected:
                                                            "TagStep.Type",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                        $report(_exceptionable, {
                                            path: _path + ".value",
                                            expected: "Array<TagStep.Type>",
                                            value: input.value,
                                        }),
                                ].every((flag: boolean) => flag);
                            const $vo1 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                [
                                    ("number" ===
                                        typeof input.exclusiveMinimum &&
                                        (0 ===
                                            (input.exclusiveMinimum % 5) - 3 ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path + ".exclusiveMinimum",
                                                expected: "number (@step 5)",
                                                value: input.exclusiveMinimum,
                                            })) &&
                                        (3 < input.exclusiveMinimum ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path + ".exclusiveMinimum",
                                                expected:
                                                    "number (@exclusiveMinimum 3)",
                                                value: input.exclusiveMinimum,
                                            }))) ||
                                        $report(_exceptionable, {
                                            path: _path + ".exclusiveMinimum",
                                            expected: "number",
                                            value: input.exclusiveMinimum,
                                        }),
                                    ("number" === typeof input.minimum &&
                                        (0 === (input.minimum % 5) - 3 ||
                                            $report(_exceptionable, {
                                                path: _path + ".minimum",
                                                expected: "number (@step 5)",
                                                value: input.minimum,
                                            })) &&
                                        (3 <= input.minimum ||
                                            $report(_exceptionable, {
                                                path: _path + ".minimum",
                                                expected: "number (@minimum 3)",
                                                value: input.minimum,
                                            }))) ||
                                        $report(_exceptionable, {
                                            path: _path + ".minimum",
                                            expected: "number",
                                            value: input.minimum,
                                        }),
                                    ("number" === typeof input.range &&
                                        (0 === (input.range % 5) - 0 ||
                                            $report(_exceptionable, {
                                                path: _path + ".range",
                                                expected: "number (@step 5)",
                                                value: input.range,
                                            })) &&
                                        (0 < input.range ||
                                            $report(_exceptionable, {
                                                path: _path + ".range",
                                                expected:
                                                    "number (@exclusiveMinimum 0)",
                                                value: input.range,
                                            })) &&
                                        (100 > input.range ||
                                            $report(_exceptionable, {
                                                path: _path + ".range",
                                                expected:
                                                    "number (@exclusiveMaximum 100)",
                                                value: input.range,
                                            }))) ||
                                        $report(_exceptionable, {
                                            path: _path + ".range",
                                            expected: "number",
                                            value: input.range,
                                        }),
                                    ("number" === typeof input.multipleOf &&
                                        (0 === input.multipleOf % 5 ||
                                            $report(_exceptionable, {
                                                path: _path + ".multipleOf",
                                                expected:
                                                    "number (@multipleOf 5)",
                                                value: input.multipleOf,
                                            })) &&
                                        (3 <= input.multipleOf ||
                                            $report(_exceptionable, {
                                                path: _path + ".multipleOf",
                                                expected: "number (@minimum 3)",
                                                value: input.multipleOf,
                                            })) &&
                                        (99 >= input.multipleOf ||
                                            $report(_exceptionable, {
                                                path: _path + ".multipleOf",
                                                expected:
                                                    "number (@maximum 99)",
                                                value: input.multipleOf,
                                            }))) ||
                                        $report(_exceptionable, {
                                            path: _path + ".multipleOf",
                                            expected: "number",
                                            value: input.multipleOf,
                                        }),
                                ].every((flag: boolean) => flag);
                            return (
                                ((("object" === typeof input &&
                                    null !== input) ||
                                    $report(true, {
                                        path: _path + "",
                                        expected: "TagStep",
                                        value: input,
                                    })) &&
                                    $vo0(input, _path + "", true)) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "TagStep",
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
                const decode = (input: Uint8Array): TagStep => {
                    const $Reader = (typia.protobuf.validateDecode as any)
                        .Reader;
                    const $pdo0 = (reader: any, length: number = -1): any => {
                        length =
                            length < 0
                                ? reader.size()
                                : reader.index() + length;
                        const output = {
                            value: [] as any,
                        };
                        while (reader.index() < length) {
                            const tag = reader.uint32();
                            switch (tag >>> 3) {
                                case 1:
                                    // type: Array<TagStep.Type>;
                                    output.value.push(
                                        $pdo1(reader, reader.uint32()),
                                    );
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                            }
                        }
                        return output;
                    };
                    const $pdo1 = (reader: any, length: number = -1): any => {
                        length =
                            length < 0
                                ? reader.size()
                                : reader.index() + length;
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
                const output = decode(input);
                return validate(output) as any;
            })(input),
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
