import typia from "../../../../src";
import { _test_protobuf_validateDecode } from "../../../internal/_test_protobuf_validateDecode";
import { TagBigInt } from "../../../structures/TagBigInt";

export const test_protobuf_validateDecode_TagBigInt =
    _test_protobuf_validateDecode("TagBigInt")<TagBigInt>(TagBigInt)({
        validateDecode: (input: Uint8Array): typia.IValidation<TagBigInt> => {
            const validate = (input: any): typia.IValidation<TagBigInt> => {
                const errors = [] as any[];
                const __is = (input: any): input is TagBigInt => {
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        "bigint" === typeof (input as any).value &&
                        "bigint" === typeof (input as any).ranged &&
                        BigInt(0) <= (input as any).ranged &&
                        BigInt(100) >= (input as any).ranged &&
                        "bigint" === typeof (input as any).minimum &&
                        BigInt(0) <= (input as any).minimum &&
                        "bigint" === typeof (input as any).maximum &&
                        BigInt(100) >= (input as any).maximum &&
                        "bigint" === typeof (input as any).multipleOf &&
                        BigInt(0) === (input as any).multipleOf % BigInt(3)
                    );
                };
                if (false === __is(input)) {
                    const $report = (
                        typia.protobuf.createValidateDecode as any
                    ).report(errors);
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is TagBigInt => {
                        const $vo0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "bigint" === typeof input.value ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "bigint",
                                        value: input.value,
                                    }),
                                ("bigint" === typeof input.ranged &&
                                    (BigInt(0) <= input.ranged ||
                                        $report(_exceptionable, {
                                            path: _path + ".ranged",
                                            expected: "bigint (@minimum 0)",
                                            value: input.ranged,
                                        })) &&
                                    (BigInt(100) >= input.ranged ||
                                        $report(_exceptionable, {
                                            path: _path + ".ranged",
                                            expected: "bigint (@maximum 100)",
                                            value: input.ranged,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".ranged",
                                        expected: "bigint",
                                        value: input.ranged,
                                    }),
                                ("bigint" === typeof input.minimum &&
                                    (BigInt(0) <= input.minimum ||
                                        $report(_exceptionable, {
                                            path: _path + ".minimum",
                                            expected: "bigint (@minimum 0)",
                                            value: input.minimum,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".minimum",
                                        expected: "bigint",
                                        value: input.minimum,
                                    }),
                                ("bigint" === typeof input.maximum &&
                                    (BigInt(100) >= input.maximum ||
                                        $report(_exceptionable, {
                                            path: _path + ".maximum",
                                            expected: "bigint (@maximum 100)",
                                            value: input.maximum,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".maximum",
                                        expected: "bigint",
                                        value: input.maximum,
                                    }),
                                ("bigint" === typeof input.multipleOf &&
                                    (BigInt(0) ===
                                        input.multipleOf % BigInt(3) ||
                                        $report(_exceptionable, {
                                            path: _path + ".multipleOf",
                                            expected: "bigint (@multipleOf 3)",
                                            value: input.multipleOf,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".multipleOf",
                                        expected: "bigint",
                                        value: input.multipleOf,
                                    }),
                            ].every((flag: boolean) => flag);
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "TagBigInt",
                                    value: input,
                                })) &&
                                $vo0(input, _path + "", true)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "TagBigInt",
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
            const decode = (input: Uint8Array): TagBigInt => {
                const $Reader = (typia.protobuf.createValidateDecode as any)
                    .Reader;
                const $pdo0 = (reader: any, length: number = -1): any => {
                    length =
                        length < 0 ? reader.size() : reader.index() + length;
                    const output = {
                        value: undefined as any,
                        ranged: undefined as any,
                        minimum: undefined as any,
                        maximum: undefined as any,
                        multipleOf: undefined as any,
                    };
                    while (reader.index() < length) {
                        const tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                output.value = reader.int64();
                                break;
                            case 2:
                                output.ranged = reader.int64();
                                break;
                            case 3:
                                output.minimum = reader.int64();
                                break;
                            case 4:
                                output.maximum = reader.int64();
                                break;
                            case 5:
                                output.multipleOf = reader.int64();
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
        },
        encode: (input: TagBigInt): Uint8Array => {
            const $Sizer = (typia.protobuf.createEncode as any).Sizer;
            const $Writer = (typia.protobuf.createEncode as any).Writer;
            const encoder = (writer: any): any => {
                const $peo0 = (input: any): any => {
                    // property "value";
                    writer.uint32(8);
                    writer.int64(input.value);
                    // property "ranged";
                    writer.uint32(16);
                    writer.int64(input.ranged);
                    // property "minimum";
                    writer.uint32(24);
                    writer.int64(input.minimum);
                    // property "maximum";
                    writer.uint32(32);
                    writer.int64(input.maximum);
                    // property "multipleOf";
                    writer.uint32(40);
                    writer.int64(input.multipleOf);
                };
                $peo0(input);
                return writer;
            };
            const sizer = encoder(new $Sizer());
            const writer = encoder(new $Writer(sizer));
            return writer.buffer();
        },
    });
