import typia from "../../../../src";
import { _test_protobuf_isEncode } from "../../../internal/_test_protobuf_isEncode";
import { TagType } from "../../../structures/TagType";

export const test_protobuf_isEncode_TagType = _test_protobuf_isEncode<TagType>(
    TagType,
)({
    isEncode: (input: TagType): Uint8Array | null => {
        const is = (input: any): input is TagType => {
            const $io0 = (input: any): boolean =>
                Array.isArray(input.value) &&
                input.value.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io1(elem),
                );
            const $io1 = (input: any): boolean =>
                "number" === typeof input.int &&
                Number.isFinite(input.int) &&
                parseInt(input.int) === input.int &&
                "number" === typeof input.uint &&
                Number.isFinite(input.uint) &&
                parseInt(input.uint) === input.uint &&
                0 <= input.uint;
            return "object" === typeof input && null !== input && $io0(input);
        };
        const encode = (input: TagType): Uint8Array => {
            const $Sizer = (typia.protobuf.createIsEncode as any).Sizer;
            const $Writer = (typia.protobuf.createIsEncode as any).Writer;
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
        return is(input) ? encode(input) : null;
    },
    message:
        'syntax = "proto3";\n\nmessage TagType {\n    repeated TagType.Type value = 1;\n    message Type {\n        required int32 int = 1;\n        required uint32 uint = 2;\n    }\n}',
});
