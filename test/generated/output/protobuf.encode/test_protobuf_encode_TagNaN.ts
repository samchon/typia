import typia from "../../../../src";
import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { TagNaN } from "../../../structures/TagNaN";

export const test_protobuf_encode_TagNaN = _test_protobuf_encode(
    "TagNaN",
)<TagNaN>(TagNaN)({
    encode: (input) =>
        ((input: TagNaN): Uint8Array => {
            const $Sizer = (typia.protobuf.encode as any).Sizer;
            const $Writer = (typia.protobuf.encode as any).Writer;
            const encoder = (writer: any): any => {
                const $peo0 = (input: any): any => {
                    // property "value";
                    writer.uint32(9);
                    writer.double(input.value);
                    // property "ranged";
                    writer.uint32(17);
                    writer.double(input.ranged);
                    // property "minimum";
                    writer.uint32(25);
                    writer.double(input.minimum);
                    // property "maximum";
                    writer.uint32(33);
                    writer.double(input.maximum);
                    // property "multipleOf";
                    writer.uint32(41);
                    writer.double(input.multipleOf);
                    // property "typed";
                    writer.uint32(48);
                    writer.int32(input.typed);
                };
                //TagNaN;
                $peo0(input);
                return writer;
            };
            const sizer = encoder(new $Sizer());
            const writer = encoder(new $Writer(sizer));
            return writer.buffer();
        })(input),
    message:
        'syntax = "proto3";\n\nmessage TagNaN {\n    required double value = 1;\n    required double ranged = 2;\n    required double minimum = 3;\n    required double maximum = 4;\n    required double multipleOf = 5;\n    required int32 typed = 6;\n}',
    decode: (input: Uint8Array): TagNaN => {
        const $Reader = (typia.protobuf.createDecode as any).Reader;
        const $pdo0 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
                value: undefined as any,
                ranged: undefined as any,
                minimum: undefined as any,
                maximum: undefined as any,
                multipleOf: undefined as any,
                typed: undefined as any,
            };
            while (reader.index() < length) {
                const tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        // number;
                        output.value = reader.double();
                        break;
                    case 2:
                        // number;
                        output.ranged = reader.double();
                        break;
                    case 3:
                        // number;
                        output.minimum = reader.double();
                        break;
                    case 4:
                        // number;
                        output.maximum = reader.double();
                        break;
                    case 5:
                        // number;
                        output.multipleOf = reader.double();
                        break;
                    case 6:
                        // number;
                        output.typed = reader.int32();
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
