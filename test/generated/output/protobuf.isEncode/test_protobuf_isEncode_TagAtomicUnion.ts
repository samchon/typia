import typia from "../../../../src";
import { _test_protobuf_isEncode } from "../../../internal/_test_protobuf_isEncode";
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";

export const test_protobuf_isEncode_TagAtomicUnion =
    _test_protobuf_isEncode<TagAtomicUnion>(TagAtomicUnion)({
        isEncode: (input) =>
            ((input: TagAtomicUnion): Uint8Array | null => {
                const is = (input: any): input is TagAtomicUnion => {
                    const $io0 = (input: any): boolean =>
                        Array.isArray(input.value) &&
                        input.value.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io1(elem),
                        );
                    const $io1 = (input: any): boolean =>
                        ("string" === typeof input.value &&
                            3 <= input.value.length &&
                            7 >= input.value.length) ||
                        ("number" === typeof input.value &&
                            Number.isFinite(input.value) &&
                            3 <= input.value);
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        $io0(input)
                    );
                };
                const encode = (input: TagAtomicUnion): Uint8Array => {
                    const $throws = (typia.protobuf.isEncode as any).throws;
                    const $Sizer = (typia.protobuf.isEncode as any).Sizer;
                    const $Writer = (typia.protobuf.isEncode as any).Writer;
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
                            // property "value";
                            if ("number" === typeof input.value) {
                                writer.uint32(9);
                                writer.double(input.value);
                            } else if ("string" === typeof input.value) {
                                writer.uint32(18);
                                writer.string(input.value);
                            } else
                                $throws({
                                    expected: "(number | string)",
                                    value: input.value,
                                });
                        };
                        const $io1 = (input: any): boolean =>
                            ("string" === typeof input.value &&
                                3 <= input.value.length &&
                                7 >= input.value.length) ||
                            ("number" === typeof input.value &&
                                3 <= input.value);
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
            'syntax = "proto3";\n\nmessage TagAtomicUnion {\n    repeated TagAtomicUnion.Type value = 1;\n    message Type {\n        oneof value {\n            double v1 = 1;\n            string v2 = 2;\n        }\n    }\n}',
    });
