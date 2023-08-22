import typia from "../../../../src";
import { _test_protobuf_validateEncode } from "../../../internal/_test_protobuf_validateEncode";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_protobuf_validateEncode_ObjectGenericAlias =
    _test_protobuf_validateEncode("ObjectGenericAlias")<ObjectGenericAlias>(
        ObjectGenericAlias,
    )({
        validateEncode: (input) =>
            ((input: ObjectGenericAlias): typia.IValidation<Uint8Array> => {
                const validate = (
                    input: any,
                ): typia.IValidation<ObjectGenericAlias> => {
                    const errors = [] as any[];
                    const __is = (input: any): input is ObjectGenericAlias => {
                        return (
                            "object" === typeof input &&
                            null !== input &&
                            "string" === typeof (input as any).value
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
                        ): input is ObjectGenericAlias => {
                            const $vo0 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                [
                                    "string" === typeof input.value ||
                                        $report(_exceptionable, {
                                            path: _path + ".value",
                                            expected: "string",
                                            value: input.value,
                                        }),
                                ].every((flag: boolean) => flag);
                            return (
                                ((("object" === typeof input &&
                                    null !== input) ||
                                    $report(true, {
                                        path: _path + "",
                                        expected: "ObjectGenericAlias.Alias",
                                        value: input,
                                    })) &&
                                    $vo0(input, _path + "", true)) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "ObjectGenericAlias.Alias",
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
                const encode = (input: ObjectGenericAlias): Uint8Array => {
                    const $Sizer = (typia.protobuf.validateEncode as any).Sizer;
                    const $Writer = (typia.protobuf.validateEncode as any)
                        .Writer;
                    const encoder = (writer: any): any => {
                        const $peo0 = (input: any): any => {
                            // property "value";
                            writer.uint32(10);
                            writer.string(input.value);
                        };
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
            'syntax = "proto3";\n\nmessage ObjectGenericAlias {\n    message Alias {\n        required string value = 1;\n    }\n}',
        decode: (input: Uint8Array): ObjectGenericAlias => {
            const $Reader = (typia.protobuf.createDecode as any).Reader;
            const $pdo0 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    value: "" as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            output.value = reader.string();
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
