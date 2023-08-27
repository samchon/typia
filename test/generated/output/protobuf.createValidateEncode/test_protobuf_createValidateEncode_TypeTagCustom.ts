import typia from "../../../../src";
import { _test_protobuf_validateEncode } from "../../../internal/_test_protobuf_validateEncode";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";

export const test_protobuf_validateEncode_TypeTagCustom =
    _test_protobuf_validateEncode("TypeTagCustom")<TypeTagCustom>(
        TypeTagCustom,
    )({
        validateEncode: (
            input: TypeTagCustom,
        ): typia.IValidation<Uint8Array> => {
            const validate = (input: any): typia.IValidation<TypeTagCustom> => {
                const errors = [] as any[];
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
                if (false === __is(input)) {
                    const $report = (
                        typia.protobuf.createValidateEncode as any
                    ).report(errors);
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is TypeTagCustom => {
                        const $vo0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ("string" === typeof input.id &&
                                    (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                                        input.id,
                                    ) ||
                                        $report(_exceptionable, {
                                            path: _path + ".id",
                                            expected: 'string & Format<"uuid">',
                                            value: input.id,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".id",
                                        expected: '(string & Format<"uuid">)',
                                        value: input.id,
                                    }),
                                ("string" === typeof input.dollar &&
                                    ((input.dollar[0] === "$" &&
                                        !isNaN(
                                            Number(
                                                input.dollar
                                                    .substring(1)
                                                    .split(",")
                                                    .join(""),
                                            ),
                                        )) ||
                                        $report(_exceptionable, {
                                            path: _path + ".dollar",
                                            expected: "string & Dolloar",
                                            value: input.dollar,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".dollar",
                                        expected: "(string & Dolloar)",
                                        value: input.dollar,
                                    }),
                                ("string" === typeof input.postfix &&
                                    (input.postfix.endsWith("abcd") ||
                                        $report(_exceptionable, {
                                            path: _path + ".postfix",
                                            expected:
                                                'string & Postfix<"abcd">',
                                            value: input.postfix,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".postfix",
                                        expected: '(string & Postfix<"abcd">)',
                                        value: input.postfix,
                                    }),
                            ].every((flag: boolean) => flag);
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "TypeTagCustom",
                                    value: input,
                                })) &&
                                $vo0(input, _path + "", true)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "TypeTagCustom",
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
            const encode = (input: TypeTagCustom): Uint8Array => {
                const $Sizer = (typia.protobuf.createValidateEncode as any)
                    .Sizer;
                const $Writer = (typia.protobuf.createValidateEncode as any)
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
            const output = validate(input) as any;
            if (output.success) output.data = encode(input);
            return output;
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
