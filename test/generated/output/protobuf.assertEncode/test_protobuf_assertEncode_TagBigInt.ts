import typia from "../../../../src";
import { _test_protobuf_assertEncode } from "../../../internal/_test_protobuf_assertEncode";
import { TagBigInt } from "../../../structures/TagBigInt";

export const test_protobuf_assertEncode_TagBigInt = _test_protobuf_assertEncode(
    "TagBigInt",
)<TagBigInt>(TagBigInt)({
    assertEncode: (input) =>
        ((input: any): Uint8Array => {
            const assert = (input: any): TagBigInt => {
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
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is TagBigInt => {
                        const $guard = (typia.protobuf.assertEncode as any)
                            .guard;
                        const $ao0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            ("bigint" === typeof input.value ||
                                $guard(_exceptionable, {
                                    path: _path + ".value",
                                    expected: "bigint",
                                    value: input.value,
                                })) &&
                            (("bigint" === typeof input.ranged &&
                                (BigInt(0) <= input.ranged ||
                                    $guard(_exceptionable, {
                                        path: _path + ".ranged",
                                        expected: "bigint (@minimum 0)",
                                        value: input.ranged,
                                    })) &&
                                (BigInt(100) >= input.ranged ||
                                    $guard(_exceptionable, {
                                        path: _path + ".ranged",
                                        expected: "bigint (@maximum 100)",
                                        value: input.ranged,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".ranged",
                                    expected: "bigint",
                                    value: input.ranged,
                                })) &&
                            (("bigint" === typeof input.minimum &&
                                (BigInt(0) <= input.minimum ||
                                    $guard(_exceptionable, {
                                        path: _path + ".minimum",
                                        expected: "bigint (@minimum 0)",
                                        value: input.minimum,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".minimum",
                                    expected: "bigint",
                                    value: input.minimum,
                                })) &&
                            (("bigint" === typeof input.maximum &&
                                (BigInt(100) >= input.maximum ||
                                    $guard(_exceptionable, {
                                        path: _path + ".maximum",
                                        expected: "bigint (@maximum 100)",
                                        value: input.maximum,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".maximum",
                                    expected: "bigint",
                                    value: input.maximum,
                                })) &&
                            (("bigint" === typeof input.multipleOf &&
                                (BigInt(0) === input.multipleOf % BigInt(3) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".multipleOf",
                                        expected: "bigint (@multipleOf 3)",
                                        value: input.multipleOf,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".multipleOf",
                                    expected: "bigint",
                                    value: input.multipleOf,
                                }));
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "TagBigInt",
                                    value: input,
                                })) &&
                                $ao0(input, _path + "", true)) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "TagBigInt",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            const encode = (input: TagBigInt): Uint8Array => {
                const $Sizer = (typia.protobuf.assertEncode as any).Sizer;
                const $Writer = (typia.protobuf.assertEncode as any).Writer;
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
            };
            return encode(assert(input));
        })(input),
    message:
        'syntax = "proto3";\n\nmessage TagBigInt {\n    required int64 value = 1;\n    required int64 ranged = 2;\n    required int64 minimum = 3;\n    required int64 maximum = 4;\n    required int64 multipleOf = 5;\n}',
});
