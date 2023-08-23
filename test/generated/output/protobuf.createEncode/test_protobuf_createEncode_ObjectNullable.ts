import typia from "../../../../src";
import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_protobuf_encode_ObjectNullable = _test_protobuf_encode(
    "ObjectNullable",
)<ObjectNullable>(ObjectNullable)({
    encode: (input: ObjectNullable): Uint8Array => {
        const $throws = (typia.protobuf.createEncode as any).throws;
        const $Sizer = (typia.protobuf.createEncode as any).Sizer;
        const $Writer = (typia.protobuf.createEncode as any).Writer;
        const encoder = (writer: any): any => {
            const $peo0 = (input: any): any => {
                // property "value";
                if (0 !== input.value.length) {
                    for (const elem of input.value) {
                        // 1 -> ObjectNullable.IProduct;
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
                // property "manufacturer";
                // 2 -> ObjectNullable.IManufacturer;
                writer.uint32(18);
                writer.fork();
                $peo2(input.manufacturer);
                writer.ldelim();
                // property "brand";
                if (null != input.brand) {
                    // 3 -> ObjectNullable.IBrand;
                    writer.uint32(26);
                    writer.fork();
                    $peo3(input.brand);
                    writer.ldelim();
                }
                // property "similar";
                if (null != input.similar) {
                    if ("brand" === input.similar.type)
                        return (() => {
                            // 4 -> ObjectNullable.IBrand;
                            writer.uint32(34);
                            writer.fork();
                            $peo3(input.similar);
                            writer.ldelim();
                        })();
                    else if ("manufacturer" === input.similar.type)
                        return (() => {
                            // 5 -> ObjectNullable.IManufacturer;
                            writer.uint32(42);
                            writer.fork();
                            $peo2(input.similar);
                            writer.ldelim();
                        })();
                    else
                        $throws({
                            expected:
                                "(ObjectNullable.IBrand | ObjectNullable.IManufacturer)",
                            value: input.similar,
                        });
                }
            };
            const $peo2 = (input: any): any => {
                // property "type";
                writer.uint32(10);
                writer.string(input.type);
                // property "name";
                writer.uint32(18);
                writer.string(input.name);
            };
            const $peo3 = (input: any): any => {
                // property "type";
                writer.uint32(10);
                writer.string(input.type);
                // property "name";
                writer.uint32(18);
                writer.string(input.name);
            };
            const $io1 = (input: any): boolean =>
                "string" === typeof input.name &&
                "object" === typeof input.manufacturer &&
                null !== input.manufacturer &&
                $io2(input.manufacturer) &&
                (null === input.brand ||
                    ("object" === typeof input.brand &&
                        null !== input.brand &&
                        $io3(input.brand))) &&
                (null === input.similar ||
                    ("object" === typeof input.similar &&
                        null !== input.similar &&
                        $iu0(input.similar)));
            const $io2 = (input: any): boolean =>
                "manufacturer" === input.type && "string" === typeof input.name;
            const $io3 = (input: any): boolean =>
                "brand" === input.type && "string" === typeof input.name;
            const $iu0 = (input: any): any =>
                (() => {
                    if ("brand" === input.type) return $io3(input);
                    else if ("manufacturer" === input.type) return $io2(input);
                    else return false;
                })();
            //ObjectNullable;
            $peo0(input);
            return writer;
        };
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
    },
    message:
        'syntax = "proto3";\n\nmessage ObjectNullable {\n    repeated ObjectNullable.IProduct value = 1;\n    message IProduct {\n        required string name = 1;\n        required ObjectNullable.IManufacturer manufacturer = 2;\n        optional ObjectNullable.IBrand brand = 3;\n        oneof similar {\n            ObjectNullable.IBrand v4 = 4;\n            ObjectNullable.IManufacturer v5 = 5;\n        }\n    }\n\n    message IManufacturer {\n        required string type = 1;\n        required string name = 2;\n    }\n\n    message IBrand {\n        required string type = 1;\n        required string name = 2;\n    }\n}',
    decode: (input: Uint8Array): ObjectNullable => {
        const $Reader = (typia.protobuf.createDecode as any).Reader;
        const $pdo0 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
                value: [] as any,
            };
            while (reader.index() < length) {
                const tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        // type: Array<ObjectNullable.IProduct>;
                        output.value.push($pdo1(reader, reader.uint32()));
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
                name: "" as any,
                manufacturer: undefined as any,
                brand: null as any,
                similar: null as any,
            };
            while (reader.index() < length) {
                const tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        // string;
                        output.name = reader.string();
                        break;
                    case 2:
                        // ObjectNullable.IManufacturer;
                        output.manufacturer = $pdo2(reader, reader.uint32());
                        break;
                    case 3:
                        // ObjectNullable.IBrand;
                        output.brand = $pdo3(reader, reader.uint32());
                        break;
                    case 4:
                        // ObjectNullable.IBrand;
                        output.similar = $pdo3(reader, reader.uint32());
                        break;
                    case 5:
                        // ObjectNullable.IManufacturer;
                        output.similar = $pdo2(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return output;
        };
        const $pdo2 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
                type: undefined as any,
                name: "" as any,
            };
            while (reader.index() < length) {
                const tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        // string;
                        output.type = reader.string();
                        break;
                    case 2:
                        // string;
                        output.name = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return output;
        };
        const $pdo3 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
                type: undefined as any,
                name: "" as any,
            };
            while (reader.index() < length) {
                const tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        // string;
                        output.type = reader.string();
                        break;
                    case 2:
                        // string;
                        output.name = reader.string();
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
