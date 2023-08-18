import typia from "../../../../src";
import { _test_protobuf_isEncode } from "../../../internal/_test_protobuf_isEncode";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";

export const test_protobuf_isEncode_ObjectRecursive =
    _test_protobuf_isEncode<ObjectRecursive>(ObjectRecursive)({
        isEncode: (input) =>
            ((input: ObjectRecursive): Uint8Array | null => {
                const is = (input: any): input is ObjectRecursive => {
                    const $io0 = (input: any): boolean =>
                        (null === input.parent ||
                            ("object" === typeof input.parent &&
                                null !== input.parent &&
                                $io0(input.parent))) &&
                        "number" === typeof input.id &&
                        Number.isFinite(input.id) &&
                        "string" === typeof input.code &&
                        "string" === typeof input.name &&
                        "number" === typeof input.sequence &&
                        Number.isFinite(input.sequence) &&
                        "object" === typeof input.created_at &&
                        null !== input.created_at &&
                        "number" === typeof (input.created_at as any).time &&
                        Number.isFinite((input.created_at as any).time) &&
                        "number" === typeof (input.created_at as any).zone &&
                        Number.isFinite((input.created_at as any).zone);
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        $io0(input)
                    );
                };
                const encode = (input: ObjectRecursive): Uint8Array => {
                    const $Sizer = (typia.protobuf.isEncode as any).Sizer;
                    const $Writer = (typia.protobuf.isEncode as any).Writer;
                    const encoder = (writer: any): any => {
                        const $peo0 = (input: any): any => {
                            // property "parent";
                            if (null != input.parent) {
                                writer.uint32(10);
                                writer.fork();
                                $peo0(input.parent);
                                writer.ldelim();
                            }
                            // property "id";
                            writer.uint32(17);
                            writer.double(input.id);
                            // property "code";
                            writer.uint32(26);
                            writer.string(input.code);
                            // property "name";
                            writer.uint32(34);
                            writer.string(input.name);
                            // property "sequence";
                            writer.uint32(41);
                            writer.double(input.sequence);
                            // property "created_at";
                            writer.uint32(50);
                            writer.fork();
                            $peo1(input.created_at);
                            writer.ldelim();
                        };
                        const $peo1 = (input: any): any => {
                            // property "time";
                            writer.uint32(9);
                            writer.double(input.time);
                            // property "zone";
                            writer.uint32(17);
                            writer.double(input.zone);
                        };
                        const $io0 = (input: any): boolean =>
                            (null === input.parent ||
                                ("object" === typeof input.parent &&
                                    null !== input.parent &&
                                    $io0(input.parent))) &&
                            "number" === typeof input.id &&
                            "string" === typeof input.code &&
                            "string" === typeof input.name &&
                            "number" === typeof input.sequence &&
                            "object" === typeof input.created_at &&
                            null !== input.created_at &&
                            $io1(input.created_at);
                        const $io1 = (input: any): boolean =>
                            "number" === typeof input.time &&
                            "number" === typeof input.zone;
                        $peo0(input);
                        return writer;
                    };
                    const sizer = encoder(new $Sizer());
                    const writer = encoder(new $Writer(sizer));
                    return writer.buffer();
                };
                return is(input) ? encode(input) : null;
            })(input),
        message:
            'syntax = "proto3";\n\nmessage ObjectRecursive {\n    message IDepartment {\n        optional ObjectRecursive.IDepartment parent = 1;\n        required double id = 2;\n        required string code = 3;\n        required string name = 4;\n        required double sequence = 5;\n        required ObjectRecursive.ITimestamp created_at = 6;\n    }\n\n    message ITimestamp {\n        required double time = 1;\n        required double zone = 2;\n    }\n}',
    });
