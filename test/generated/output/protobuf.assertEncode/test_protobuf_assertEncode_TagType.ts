import typia from "../../../../src";
import { _test_protobuf_assertEncode } from "../../../internal/_test_protobuf_assertEncode";
import { TagType } from "../../../structures/TagType";

export const test_protobuf_assertEncode_TagType =
    _test_protobuf_assertEncode<TagType>(TagType)({
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
                            parseInt(input.int) === input.int &&
                            "number" === typeof input.uint &&
                            Number.isFinite(input.uint) &&
                            parseInt(input.uint) === input.uint &&
                            0 <= input.uint;
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
                                    (parseInt(input.int) === input.int ||
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
                                    (parseInt(input.uint) === input.uint ||
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
                                        }))) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".uint",
                                        expected: "number",
                                        value: input.uint,
                                    }));
                            return (
                                ((("object" === typeof input &&
                                    null !== input) ||
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
                        };
                        const $io1 = (input: any): boolean =>
                            "number" === typeof input.int &&
                            parseInt(input.int) === input.int &&
                            "number" === typeof input.uint &&
                            parseInt(input.uint) === input.uint &&
                            0 <= input.uint;
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
            'syntax = "proto3";\n\nmessage TagType {\n    repeated TagType.Type value = 1;\n    message Type {\n        required int32 int = 1;\n        required uint32 uint = 2;\n    }\n}',
    });
