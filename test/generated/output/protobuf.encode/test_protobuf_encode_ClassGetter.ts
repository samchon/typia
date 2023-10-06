import typia from "../../../../src";
import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { ClassGetter } from "../../../structures/ClassGetter";

export const test_protobuf_createEncode_ClassGetter = _test_protobuf_encode(
    "ClassGetter",
)<ClassGetter>(ClassGetter)({
    encode: (input) =>
        ((input: ClassGetter): Uint8Array => {
            const $Sizer = (typia.protobuf.encode as any).Sizer;
            const $Writer = (typia.protobuf.encode as any).Writer;
            const encoder = (writer: any): any => {
                const $peo0 = (input: any): any => {
                    // property "id";
                    writer.uint32(10);
                    writer.string(input.id);
                    // property "name";
                    writer.uint32(18);
                    writer.string(input.name);
                    // property "dead";
                    if (null !== input.dead) {
                        writer.uint32(24);
                        writer.bool(input.dead);
                    }
                };
                //ClassGetter.Person;
                $peo0(input);
                return writer;
            };
            const sizer = encoder(new $Sizer());
            const writer = encoder(new $Writer(sizer));
            return writer.buffer();
        })(input),
    decode: (input: Uint8Array): typia.Resolved<ClassGetter> => {
        const $Reader = (typia.protobuf.createDecode as any).Reader;
        const $pdo0 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
                id: "" as any,
                name: "" as any,
                dead: null as any,
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
                        // bool;
                        output.dead = reader.bool();
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
    message:
        'syntax = "proto3";\n\nmessage ClassGetter {\n    message Person {\n        required string id = 1;\n        required string name = 2;\n        optional bool dead = 3;\n    }\n}',
});
