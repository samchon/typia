import typia from "../../../../src";
import { _test_protobuf_decode } from "../../../internal/_test_protobuf_decode";
import { ObjectHttpTypeTag } from "../../../structures/ObjectHttpTypeTag";

export const test_protobuf_createDecode_ObjectHttpTypeTag =
    _test_protobuf_decode("ObjectHttpTypeTag")<ObjectHttpTypeTag>(
        ObjectHttpTypeTag,
    )({
        decode: (input: Uint8Array): typia.Resolved<ObjectHttpTypeTag> => {
            const $Reader = (typia.protobuf.createDecode as any).Reader;
            const $pdo0 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    int32: undefined as any,
                    uint64: undefined as any,
                    uuid: "" as any,
                    range: [] as any,
                    length: [] as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            // int32;
                            output.int32 = reader.int32();
                            break;
                        case 2:
                            // uint64;
                            output.uint64 = reader.uint64();
                            break;
                        case 3:
                            // string;
                            output.uuid = reader.string();
                            break;
                        case 4:
                            // type: Array<(number & Minimum<3> & Maximum<7>)>;
                            if (2 === (tag & 7)) {
                                const piece = reader.uint32() + reader.index();
                                while (reader.index() < piece)
                                    output.range.push(reader.double());
                            } else output.range.push(reader.double());
                            break;
                        case 5:
                            // type: Array<(string & MinLength<3> & MaxLength<7>)>;
                            output.length.push(reader.string());
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
        encode: (input: ObjectHttpTypeTag): Uint8Array => {
            const $Sizer = (typia.protobuf.createEncode as any).Sizer;
            const $Writer = (typia.protobuf.createEncode as any).Writer;
            const encoder = (writer: any): any => {
                const $peo0 = (input: any): any => {
                    // property "int32";
                    writer.uint32(8);
                    writer.int32(input.int32);
                    // property "uint64";
                    writer.uint32(16);
                    writer.uint64(input.uint64);
                    // property "uuid";
                    writer.uint32(26);
                    writer.string(input.uuid);
                    // property "range";
                    if (0 !== input.range.length) {
                        writer.uint32(34);
                        writer.fork();
                        for (const elem of input.range) {
                            writer.double(elem);
                        }
                        writer.ldelim();
                    }
                    // property "length";
                    if (0 !== input.length.length) {
                        for (const elem of input.length) {
                            writer.uint32(42);
                            writer.string(elem);
                        }
                    }
                };
                //ObjectHttpTypeTag;
                $peo0(input);
                return writer;
            };
            const sizer = encoder(new $Sizer());
            const writer = encoder(new $Writer(sizer));
            return writer.buffer();
        },
    });
