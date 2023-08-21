import typia from "../../../../src";
import { _test_protobuf_assertEncode } from "../../../internal/_test_protobuf_assertEncode";
import { TagInfinite } from "../../../structures/TagInfinite";

export const test_protobuf_assertEncode_TagInfinite =
    _test_protobuf_assertEncode("TagInfinite")<TagInfinite>(TagInfinite)({
        assertEncode: (input: any): Uint8Array => {
            const assert = (input: any): TagInfinite => {
                const __is = (input: any): input is TagInfinite => {
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        "number" === typeof (input as any).value &&
                        Number.isFinite((input as any).value) &&
                        "number" === typeof (input as any).ranged &&
                        0 <= (input as any).ranged &&
                        100 >= (input as any).ranged &&
                        "number" === typeof (input as any).minimum &&
                        Number.isFinite((input as any).minimum) &&
                        0 <= (input as any).minimum &&
                        "number" === typeof (input as any).maximum &&
                        Number.isFinite((input as any).maximum) &&
                        100 >= (input as any).maximum &&
                        "number" === typeof (input as any).multipleOf &&
                        0 === (input as any).multipleOf % 3 &&
                        "number" === typeof (input as any).typed &&
                        Number.isFinite((input as any).typed) &&
                        Math.floor((input as any).typed) ===
                            (input as any).typed &&
                        -2147483648 <= (input as any).typed &&
                        (input as any).typed <= 2147483647
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is TagInfinite => {
                        const $guard = (
                            typia.protobuf.createAssertEncode as any
                        ).guard;
                        const $ao0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (("number" === typeof input.value &&
                                Number.isFinite(input.value)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".value",
                                    expected: "number",
                                    value: input.value,
                                })) &&
                            (("number" === typeof input.ranged &&
                                (0 <= input.ranged ||
                                    $guard(_exceptionable, {
                                        path: _path + ".ranged",
                                        expected: "number (@minimum 0)",
                                        value: input.ranged,
                                    })) &&
                                (100 >= input.ranged ||
                                    $guard(_exceptionable, {
                                        path: _path + ".ranged",
                                        expected: "number (@maximum 100)",
                                        value: input.ranged,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".ranged",
                                    expected: "number",
                                    value: input.ranged,
                                })) &&
                            (("number" === typeof input.minimum &&
                                Number.isFinite(input.minimum) &&
                                (0 <= input.minimum ||
                                    $guard(_exceptionable, {
                                        path: _path + ".minimum",
                                        expected: "number (@minimum 0)",
                                        value: input.minimum,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".minimum",
                                    expected: "number",
                                    value: input.minimum,
                                })) &&
                            (("number" === typeof input.maximum &&
                                Number.isFinite(input.maximum) &&
                                (100 >= input.maximum ||
                                    $guard(_exceptionable, {
                                        path: _path + ".maximum",
                                        expected: "number (@maximum 100)",
                                        value: input.maximum,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".maximum",
                                    expected: "number",
                                    value: input.maximum,
                                })) &&
                            (("number" === typeof input.multipleOf &&
                                (0 === input.multipleOf % 3 ||
                                    $guard(_exceptionable, {
                                        path: _path + ".multipleOf",
                                        expected: "number (@multipleOf 3)",
                                        value: input.multipleOf,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".multipleOf",
                                    expected: "number",
                                    value: input.multipleOf,
                                })) &&
                            (("number" === typeof input.typed &&
                                Number.isFinite(input.typed) &&
                                (Math.floor(input.typed) === input.typed ||
                                    $guard(_exceptionable, {
                                        path: _path + ".typed",
                                        expected: "number (@type int)",
                                        value: input.typed,
                                    })) &&
                                ((-2147483648 <= input.typed &&
                                    input.typed <= 2147483647) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".typed",
                                        expected: "number (@type int)",
                                        value: input.typed,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".typed",
                                    expected: "number",
                                    value: input.typed,
                                }));
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "TagInfinite",
                                    value: input,
                                })) &&
                                $ao0(input, _path + "", true)) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "TagInfinite",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            const encode = (input: TagInfinite): Uint8Array => {
                const $Sizer = (typia.protobuf.createAssertEncode as any).Sizer;
                const $Writer = (typia.protobuf.createAssertEncode as any)
                    .Writer;
                const encoder = (writer: any): any => {
                    const $peo0 = (input: any): any => {
                        // property "value";
                        writer.uint32(9);
                        writer.double(input.value);
                        // property "ranged";
                        writer.uint32(17);
                        writer.double(input.ranged);
                        // property "minimum";
                        writer.uint32(25);
                        writer.double(input.minimum);
                        // property "maximum";
                        writer.uint32(33);
                        writer.double(input.maximum);
                        // property "multipleOf";
                        writer.uint32(41);
                        writer.double(input.multipleOf);
                        // property "typed";
                        writer.uint32(48);
                        writer.int32(input.typed);
                    };
                    $peo0(input);
                    return writer;
                };
                const sizer = encoder(new $Sizer());
                const writer = encoder(new $Writer(sizer));
                return writer.buffer();
            };
            return encode(assert(input));
        },
        message:
            'syntax = "proto3";\n\nmessage TagInfinite {\n    required double value = 1;\n    required double ranged = 2;\n    required double minimum = 3;\n    required double maximum = 4;\n    required double multipleOf = 5;\n    required int32 typed = 6;\n}',
    });
