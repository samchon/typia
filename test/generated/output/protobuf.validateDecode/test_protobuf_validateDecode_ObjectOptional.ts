import typia from "../../../../src";
import { _test_protobuf_validateDecode } from "../../../internal/_test_protobuf_validateDecode";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_protobuf_validateDecode_ObjectOptional =
    _test_protobuf_validateDecode("ObjectOptional")<ObjectOptional>(
        ObjectOptional,
    )({
        validateDecode: (input) =>
            ((input: Uint8Array): typia.IValidation<ObjectOptional> => {
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
                            typia.protobuf.validateDecode as any
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
                const decode = (input: Uint8Array): ObjectOptional => {
                    const $Reader = (typia.protobuf.validateDecode as any)
                        .Reader;
                    const $pdo0 = (reader: any, length: number = -1): any => {
                        length =
                            length < 0
                                ? reader.size()
                                : reader.index() + length;
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
                                    output.id = reader.string();
                                    break;
                                case 2:
                                    output.name = reader.string();
                                    break;
                                case 3:
                                    output.email = reader.string();
                                    break;
                                case 4:
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
                };
                const output = decode(input);
                return validate(output) as any;
            })(input),
        encode: (input: ObjectOptional): Uint8Array => {
            const $Sizer = (typia.protobuf.createEncode as any).Sizer;
            const $Writer = (typia.protobuf.createEncode as any).Writer;
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
                    if (undefined != input.email && null != input.email) {
                        writer.uint32(26);
                        writer.string(input.email);
                    }
                    // property "sequence";
                    if (undefined != input.sequence && null != input.sequence) {
                        writer.uint32(33);
                        writer.double(input.sequence);
                    }
                };
                $peo0(input);
                return writer;
            };
            const sizer = encoder(new $Sizer());
            const writer = encoder(new $Writer(sizer));
            return writer.buffer();
        },
    });
