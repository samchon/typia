import typia from "../../../../src";
import { _test_protobuf_validateEncode } from "../../../internal/_test_protobuf_validateEncode";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_protobuf_validateEncode_ObjectOptional =
    _test_protobuf_validateEncode("ObjectOptional")<ObjectOptional>(
        ObjectOptional,
    )({
        validateEncode: (input) =>
            ((input: ObjectOptional): typia.IValidation<Uint8Array> => {
                const validate = (
                    input: any,
                ): typia.IValidation<ObjectOptional> => {
                    const errors = [] as any[];
                    const __is = (input: any): input is ObjectOptional => {
                        const $io0 = (input: any): boolean =>
                            (undefined === input.id ||
                                "string" === typeof input.id) &&
                            (undefined === input.name ||
                                "string" === typeof input.name) &&
                            (undefined === input.email ||
                                "string" === typeof input.email) &&
                            (undefined === input.sequence ||
                                ("number" === typeof input.sequence &&
                                    Number.isFinite(input.sequence)));
                        return (
                            "object" === typeof input &&
                            null !== input &&
                            false === Array.isArray(input) &&
                            $io0(input)
                        );
                    };
                    if (false === __is(input)) {
                        const $report = (
                            typia.protobuf.validateEncode as any
                        ).report(errors);
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is ObjectOptional => {
                            const $vo0 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                [
                                    undefined === input.id ||
                                        "string" === typeof input.id ||
                                        $report(_exceptionable, {
                                            path: _path + ".id",
                                            expected: "(string | undefined)",
                                            value: input.id,
                                        }),
                                    undefined === input.name ||
                                        "string" === typeof input.name ||
                                        $report(_exceptionable, {
                                            path: _path + ".name",
                                            expected: "(string | undefined)",
                                            value: input.name,
                                        }),
                                    undefined === input.email ||
                                        "string" === typeof input.email ||
                                        $report(_exceptionable, {
                                            path: _path + ".email",
                                            expected: "(string | undefined)",
                                            value: input.email,
                                        }),
                                    undefined === input.sequence ||
                                        ("number" === typeof input.sequence &&
                                            Number.isFinite(input.sequence)) ||
                                        $report(_exceptionable, {
                                            path: _path + ".sequence",
                                            expected: "(number | undefined)",
                                            value: input.sequence,
                                        }),
                                ].every((flag: boolean) => flag);
                            return (
                                ((("object" === typeof input &&
                                    null !== input &&
                                    false === Array.isArray(input)) ||
                                    $report(true, {
                                        path: _path + "",
                                        expected: "ObjectOptional",
                                        value: input,
                                    })) &&
                                    $vo0(input, _path + "", true)) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "ObjectOptional",
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
                const encode = (input: ObjectOptional): Uint8Array => {
                    const $Sizer = (typia.protobuf.validateEncode as any).Sizer;
                    const $Writer = (typia.protobuf.validateEncode as any)
                        .Writer;
                    const encoder = (writer: any): any => {
                        const $peo0 = (input: any): any => {
                            // property "id";
                            if (undefined != input.id && null != input.id) {
                                writer.uint32(10);
                                writer.string(input.id);
                            }
                            // property "name";
                            if (undefined != input.name && null != input.name) {
                                writer.uint32(18);
                                writer.string(input.name);
                            }
                            // property "email";
                            if (
                                undefined != input.email &&
                                null != input.email
                            ) {
                                writer.uint32(26);
                                writer.string(input.email);
                            }
                            // property "sequence";
                            if (
                                undefined != input.sequence &&
                                null != input.sequence
                            ) {
                                writer.uint32(33);
                                writer.double(input.sequence);
                            }
                        };
                        //ObjectOptional;
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
            })(input),
        message:
            'syntax = "proto3";\n\nmessage ObjectOptional {\n    optional string id = 1;\n    optional string name = 2;\n    optional string email = 3;\n    optional double sequence = 4;\n}',
        decode: (input: Uint8Array): typia.Resolved<ObjectOptional> => {
            const $Reader = (typia.protobuf.createDecode as any).Reader;
            const $pdo0 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    id: undefined as any,
                    name: undefined as any,
                    email: undefined as any,
                    sequence: undefined as any,
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
                            output.name = reader.string();
                            break;
                        case 3:
                            // string;
                            output.email = reader.string();
                            break;
                        case 4:
                            // double;
                            output.sequence = reader.double();
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
