import typia from "../../../../src";
import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";

export const test_protobuf_createEncode_TypeTagCustom = _test_protobuf_encode(
    "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)({
    encode: (input: TypeTagCustom): Uint8Array => {
        const $Sizer = (typia.protobuf.createEncode as any).Sizer;
        const $Writer = (typia.protobuf.createEncode as any).Writer;
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
                // property "powerOf";
                writer.uint32(33);
                writer.double(input.powerOf);
            };
            //TypeTagCustom;
            $peo0(input);
            return writer;
        };
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
    },
    message:
        'syntax = "proto3";\n\nmessage TypeTagCustom {\n    required string id = 1;\n    required string dollar = 2;\n    required string postfix = 3;\n    required double powerOf = 4;\n}',
    decode: (input: Uint8Array): typia.Resolved<TypeTagCustom> => {
        const $Reader = (typia.protobuf.createDecode as any).Reader;
        const $pdo0 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
                id: "" as any,
                dollar: "" as any,
                postfix: "" as any,
                powerOf: undefined as any,
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
                    case 4:
                        // double;
                        output.powerOf = reader.double();
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
