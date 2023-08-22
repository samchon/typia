import typia from "../../../../src";
import { _test_protobuf_decode } from "../../../internal/_test_protobuf_decode";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_protobuf_decode_DynamicConstant = _test_protobuf_decode(
    "DynamicConstant",
)<DynamicConstant>(DynamicConstant)({
    decode: (input) =>
        ((input: Uint8Array): DynamicConstant => {
            const $Reader = (typia.protobuf.decode as any).Reader;
            const $pdo0 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    value: undefined as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            output.value = $pdo1(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return output;
            };
            const $pdo1 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    a: undefined as any,
                    b: undefined as any,
                    c: undefined as any,
                    d: undefined as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            output.a = reader.double();
                            break;
                        case 2:
                            output.b = reader.double();
                            break;
                        case 3:
                            output.c = reader.double();
                            break;
                        case 4:
                            output.d = reader.double();
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
        })(input),
    encode: (input: DynamicConstant): Uint8Array => {
        const $Sizer = (typia.protobuf.createEncode as any).Sizer;
        const $Writer = (typia.protobuf.createEncode as any).Writer;
        const encoder = (writer: any): any => {
            const $peo0 = (input: any): any => {
                // property "value";
                writer.uint32(10);
                writer.fork();
                $peo1(input.value);
                writer.ldelim();
            };
            const $peo1 = (input: any): any => {
                // property "a";
                writer.uint32(9);
                writer.double(input.a);
                // property "b";
                writer.uint32(17);
                writer.double(input.b);
                // property "c";
                writer.uint32(25);
                writer.double(input.c);
                // property "d";
                writer.uint32(33);
                writer.double(input.d);
            };
            const $io1 = (input: any): boolean =>
                "number" === typeof input.a &&
                "number" === typeof input.b &&
                "number" === typeof input.c &&
                "number" === typeof input.d;
            $peo0(input);
            return writer;
        };
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
    },
});
