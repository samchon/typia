import typia from "../../../../src";
import { _test_protobuf_assertEncode } from "../../../internal/_test_protobuf_assertEncode";
import { TagType } from "../../../structures/TagType";

export const test_protobuf_assertEncode_TagType = _test_protobuf_assertEncode(
    "TagType",
)<TagType>(TagType)({
    assertEncode: (input) =>
        ((input: any): Uint8Array => {
            const assert = (input: any): TagType => {
                const __is = (input: any): input is TagType => {
                    const $io0 = (input: any): boolean =>
                        Array.isArray(input.value) &&
                        input.value.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io1(elem),
                        );
                    const $io1 = (input: any): boolean =>
                        "number" === typeof input.int &&
                        Number.isFinite(input.int) &&
                        Math.floor(input.int) === input.int &&
                        -2147483648 <= input.int &&
                        input.int <= 2147483647 &&
                        "number" === typeof input.uint &&
                        Number.isFinite(input.uint) &&
                        Math.floor(input.uint) === input.uint &&
                        0 <= input.uint &&
                        input.uint <= 4294967295 &&
                        "number" === typeof input.int32 &&
                        Number.isFinite(input.int32) &&
                        Math.floor(input.int32) === input.int32 &&
                        -2147483648 <= input.int32 &&
                        input.int32 <= 2147483647 &&
                        "number" === typeof input.uint32 &&
                        Number.isFinite(input.uint32) &&
                        Math.floor(input.uint32) === input.uint32 &&
                        0 <= input.uint32 &&
                        input.uint32 <= 4294967295 &&
                        "number" === typeof input.int64 &&
                        Number.isFinite(input.int64) &&
                        Math.floor(input.int64) === input.int64 &&
                        -9223372036854776000 <= input.int64 &&
                        input.int64 <= 9223372036854776000 &&
                        "number" === typeof input.uint64 &&
                        Number.isFinite(input.uint64) &&
                        Math.floor(input.uint64) === input.uint64 &&
                        0 <= input.uint64 &&
                        input.uint64 <= 18446744073709552000 &&
                        "number" === typeof input.float &&
                        Number.isFinite(input.float) &&
                        -1.175494351e38 <= input.float &&
                        input.float <= 3.4028235e38;
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        $io0(input)
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is TagType => {
                        const $guard = (typia.protobuf.assertEncode as any)
                            .guard;
                        const $ao0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            ((Array.isArray(input.value) ||
                                $guard(_exceptionable, {
                                    path: _path + ".value",
                                    expected: "Array<TagType.Type>",
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
                                                expected: "TagType.Type",
                                                value: elem,
                                            })) &&
                                            $ao1(
                                                elem,
                                                _path +
                                                    ".value[" +
                                                    _index1 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".value[" +
                                                _index1 +
                                                "]",
                                            expected: "TagType.Type",
                                            value: elem,
                                        }),
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "Array<TagType.Type>",
                                value: input.value,
                            });
                        const $ao1 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (("number" === typeof input.int &&
                                Number.isFinite(input.int) &&
                                (Math.floor(input.int) === input.int ||
                                    $guard(_exceptionable, {
                                        path: _path + ".int",
                                        expected: "number (@type int)",
                                        value: input.int,
                                    })) &&
                                ((-2147483648 <= input.int &&
                                    input.int <= 2147483647) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".int",
                                        expected: "number (@type int)",
                                        value: input.int,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".int",
                                    expected: "number",
                                    value: input.int,
                                })) &&
                            (("number" === typeof input.uint &&
                                Number.isFinite(input.uint) &&
                                (Math.floor(input.uint) === input.uint ||
                                    $guard(_exceptionable, {
                                        path: _path + ".uint",
                                        expected: "number (@type uint)",
                                        value: input.uint,
                                    })) &&
                                (0 <= input.uint ||
                                    $guard(_exceptionable, {
                                        path: _path + ".uint",
                                        expected: "number (@type uint)",
                                        value: input.uint,
                                    })) &&
                                (input.uint <= 4294967295 ||
                                    $guard(_exceptionable, {
                                        path: _path + ".uint",
                                        expected: "number (@type uint)",
                                        value: input.uint,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".uint",
                                    expected: "number",
                                    value: input.uint,
                                })) &&
                            (("number" === typeof input.int32 &&
                                Number.isFinite(input.int32) &&
                                (Math.floor(input.int32) === input.int32 ||
                                    $guard(_exceptionable, {
                                        path: _path + ".int32",
                                        expected: "number (@type int32)",
                                        value: input.int32,
                                    })) &&
                                ((-2147483648 <= input.int32 &&
                                    input.int32 <= 2147483647) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".int32",
                                        expected: "number (@type int32)",
                                        value: input.int32,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".int32",
                                    expected: "number",
                                    value: input.int32,
                                })) &&
                            (("number" === typeof input.uint32 &&
                                Number.isFinite(input.uint32) &&
                                (Math.floor(input.uint32) === input.uint32 ||
                                    $guard(_exceptionable, {
                                        path: _path + ".uint32",
                                        expected: "number (@type uint32)",
                                        value: input.uint32,
                                    })) &&
                                (0 <= input.uint32 ||
                                    $guard(_exceptionable, {
                                        path: _path + ".uint32",
                                        expected: "number (@type uint32)",
                                        value: input.uint32,
                                    })) &&
                                (input.uint32 <= 4294967295 ||
                                    $guard(_exceptionable, {
                                        path: _path + ".uint32",
                                        expected: "number (@type uint32)",
                                        value: input.uint32,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".uint32",
                                    expected: "number",
                                    value: input.uint32,
                                })) &&
                            (("number" === typeof input.int64 &&
                                Number.isFinite(input.int64) &&
                                (Math.floor(input.int64) === input.int64 ||
                                    $guard(_exceptionable, {
                                        path: _path + ".int64",
                                        expected: "number (@type int64)",
                                        value: input.int64,
                                    })) &&
                                ((-9223372036854776000 <= input.int64 &&
                                    input.int64 <= 9223372036854776000) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".int64",
                                        expected: "number (@type int64)",
                                        value: input.int64,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".int64",
                                    expected: "number",
                                    value: input.int64,
                                })) &&
                            (("number" === typeof input.uint64 &&
                                Number.isFinite(input.uint64) &&
                                (Math.floor(input.uint64) === input.uint64 ||
                                    $guard(_exceptionable, {
                                        path: _path + ".uint64",
                                        expected: "number (@type uint64)",
                                        value: input.uint64,
                                    })) &&
                                (0 <= input.uint64 ||
                                    $guard(_exceptionable, {
                                        path: _path + ".uint64",
                                        expected: "number (@type uint64)",
                                        value: input.uint64,
                                    })) &&
                                (input.uint64 <= 18446744073709552000 ||
                                    $guard(_exceptionable, {
                                        path: _path + ".uint64",
                                        expected: "number (@type uint64)",
                                        value: input.uint64,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".uint64",
                                    expected: "number",
                                    value: input.uint64,
                                })) &&
                            (("number" === typeof input.float &&
                                Number.isFinite(input.float) &&
                                ((-1.175494351e38 <= input.float &&
                                    input.float <= 3.4028235e38) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".float",
                                        expected: "number (@type float)",
                                        value: input.float,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".float",
                                    expected: "number",
                                    value: input.float,
                                }));
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "TagType",
                                    value: input,
                                })) &&
                                $ao0(input, _path + "", true)) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "TagType",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            const encode = (input: TagType): Uint8Array => {
                const $Sizer = (typia.protobuf.assertEncode as any).Sizer;
                const $Writer = (typia.protobuf.assertEncode as any).Writer;
                const encoder = (writer: any): any => {
                    const $peo0 = (input: any): any => {
                        // property "value";
                        if (0 !== input.value.length) {
                            for (const elem of input.value) {
                                writer.uint32(10);
                                writer.fork();
                                $peo1(elem);
                                writer.ldelim();
                            }
                        }
                    };
                    const $peo1 = (input: any): any => {
                        // property "int";
                        writer.uint32(8);
                        writer.int32(input.int);
                        // property "uint";
                        writer.uint32(16);
                        writer.uint32(input.uint);
                        // property "int32";
                        writer.uint32(24);
                        writer.int32(input.int32);
                        // property "uint32";
                        writer.uint32(32);
                        writer.uint32(input.uint32);
                        // property "int64";
                        writer.uint32(40);
                        writer.int64(input.int64);
                        // property "uint64";
                        writer.uint32(48);
                        writer.uint64(input.uint64);
                        // property "float";
                        writer.uint32(61);
                        writer.float(input.float);
                    };
                    const $io1 = (input: any): boolean =>
                        "number" === typeof input.int &&
                        Math.floor(input.int) === input.int &&
                        -2147483648 <= input.int &&
                        input.int <= 2147483647 &&
                        "number" === typeof input.uint &&
                        Math.floor(input.uint) === input.uint &&
                        0 <= input.uint &&
                        input.uint <= 4294967295 &&
                        "number" === typeof input.int32 &&
                        Math.floor(input.int32) === input.int32 &&
                        -2147483648 <= input.int32 &&
                        input.int32 <= 2147483647 &&
                        "number" === typeof input.uint32 &&
                        Math.floor(input.uint32) === input.uint32 &&
                        0 <= input.uint32 &&
                        input.uint32 <= 4294967295 &&
                        "number" === typeof input.int64 &&
                        Math.floor(input.int64) === input.int64 &&
                        -9223372036854776000 <= input.int64 &&
                        input.int64 <= 9223372036854776000 &&
                        "number" === typeof input.uint64 &&
                        Math.floor(input.uint64) === input.uint64 &&
                        0 <= input.uint64 &&
                        input.uint64 <= 18446744073709552000 &&
                        "number" === typeof input.float &&
                        -1.175494351e38 <= input.float &&
                        input.float <= 3.4028235e38;
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
        'syntax = "proto3";\n\nmessage TagType {\n    repeated TagType.Type value = 1;\n    message Type {\n        required int32 int = 1;\n        required uint32 uint = 2;\n        required int32 int32 = 3;\n        required uint32 uint32 = 4;\n        required int64 int64 = 5;\n        required uint64 uint64 = 6;\n        required float float = 7;\n    }\n}',
});
