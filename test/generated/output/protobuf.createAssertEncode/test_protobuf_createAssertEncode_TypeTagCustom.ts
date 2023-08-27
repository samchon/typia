import typia from "../../../../src";
import { _test_protobuf_assertEncode } from "../../../internal/_test_protobuf_assertEncode";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";

export const test_protobuf_assertEncode_TypeTagCustom =
    _test_protobuf_assertEncode("TypeTagCustom")<TypeTagCustom>(TypeTagCustom)({
        assertEncode: (input: any): Uint8Array => {
            const assert = (input: any): TypeTagCustom => {
                const __is = (input: any): input is TypeTagCustom => {
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        "string" === typeof (input as any).id &&
                        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                            (input as any).id,
                        ) &&
                        "string" === typeof (input as any).dollar &&
                        (input as any).dollar[0] === "$" &&
                        !isNaN(
                            Number(
                                (input as any).dollar
                                    .substring(1)
                                    .split(",")
                                    .join(""),
                            ),
                        ) &&
                        "string" === typeof (input as any).postfix &&
                        (input as any).postfix.endsWith("abcd")
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is TypeTagCustom => {
                        const $guard = (
                            typia.protobuf.createAssertEncode as any
                        ).guard;
                        const $ao0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (("string" === typeof input.id &&
                                (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                                    input.id,
                                ) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".id",
                                        expected: 'string & Format<"uuid">',
                                        value: input.id,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".id",
                                    expected: '(string & Format<"uuid">)',
                                    value: input.id,
                                })) &&
                            (("string" === typeof input.dollar &&
                                ((input.dollar[0] === "$" &&
                                    !isNaN(
                                        Number(
                                            input.dollar
                                                .substring(1)
                                                .split(",")
                                                .join(""),
                                        ),
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".dollar",
                                        expected: "string & Dolloar",
                                        value: input.dollar,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".dollar",
                                    expected: "(string & Dolloar)",
                                    value: input.dollar,
                                })) &&
                            (("string" === typeof input.postfix &&
                                (input.postfix.endsWith("abcd") ||
                                    $guard(_exceptionable, {
                                        path: _path + ".postfix",
                                        expected: 'string & Postfix<"abcd">',
                                        value: input.postfix,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".postfix",
                                    expected: '(string & Postfix<"abcd">)',
                                    value: input.postfix,
                                }));
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "TypeTagCustom",
                                    value: input,
                                })) &&
                                $ao0(input, _path + "", true)) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "TypeTagCustom",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            const encode = (input: TypeTagCustom): Uint8Array => {
                const $Sizer = (typia.protobuf.createAssertEncode as any).Sizer;
                const $Writer = (typia.protobuf.createAssertEncode as any)
                    .Writer;
                const encoder = (writer: any): any => {
                    const $peo0 = (input: any): any => {
                        // property "id";
                        writer.uint32(10);
                        writer.string(input.id);
                        // property "dollar";
                        writer.uint32(18);
                        writer.string(input.dollar);
                        // property "postfix";
                        writer.uint32(26);
                        writer.string(input.postfix);
                    };
                    //TypeTagCustom;
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
            'syntax = "proto3";\n\nmessage TypeTagCustom {\n    required string id = 1;\n    required string dollar = 2;\n    required string postfix = 3;\n}',
        decode: (input: Uint8Array): typia.Resolved<TypeTagCustom> => {
            const $Reader = (typia.protobuf.createDecode as any).Reader;
            const $pdo0 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    id: "" as any,
                    dollar: "" as any,
                    postfix: "" as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            // string;
                            output.id = reader.string();
                            break;
                        case 2:
                            // string;
                            output.dollar = reader.string();
                            break;
                        case 3:
                            // string;
                            output.postfix = reader.string();
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
        },
    });
