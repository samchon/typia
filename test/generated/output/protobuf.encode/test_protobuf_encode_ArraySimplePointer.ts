import typia from "../../../../src";
import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { ArraySimplePointer } from "../../../structures/ArraySimplePointer";

export const test_protobuf_encode_ArraySimplePointer =
    _test_protobuf_encode<ArraySimplePointer>(ArraySimplePointer)({
        encode: (input) =>
            ((input: ArraySimplePointer): Uint8Array => {
                const $Sizer = (typia.protobuf.encode as any).Sizer;
                const $Writer = (typia.protobuf.encode as any).Writer;
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
                        // property "name";
                        writer.uint32(10);
                        writer.string(input.name);
                        // property "email";
                        writer.uint32(18);
                        writer.string(input.email);
                        // property "hobbies";
                        if (0 !== input.hobbies.length) {
                            for (const elem of input.hobbies) {
                                writer.uint32(26);
                                writer.fork();
                                $peo2(elem);
                                writer.ldelim();
                            }
                        }
                    };
                    const $peo2 = (input: any): any => {
                        // property "name";
                        writer.uint32(10);
                        writer.string(input.name);
                        // property "body";
                        writer.uint32(18);
                        writer.string(input.body);
                        // property "rank";
                        writer.uint32(25);
                        writer.double(input.rank);
                    };
                    const $io1 = (input: any): boolean =>
                        "string" === typeof input.name &&
                        "string" === typeof input.email &&
                        Array.isArray(input.hobbies) &&
                        input.hobbies.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        );
                    const $io2 = (input: any): boolean =>
                        "string" === typeof input.name &&
                        "string" === typeof input.body &&
                        "number" === typeof input.rank;
                    $peo0(input);
                    return writer;
                };
                const sizer = encoder(new $Sizer());
                const writer = encoder(new $Writer(sizer));
                return writer.buffer();
            })(input),
        message:
            'syntax = "proto3";\n\nmessage ArraySimplePointer {\n    repeated ArraySimplePointer.IPerson value = 1;\n    message IPerson {\n        required string name = 1;\n        required string email = 2;\n        repeated ArraySimplePointer.IHobby hobbies = 3;\n    }\n\n    message IHobby {\n        required string name = 1;\n        required string body = 2;\n        required double rank = 3;\n    }\n}',
    });
