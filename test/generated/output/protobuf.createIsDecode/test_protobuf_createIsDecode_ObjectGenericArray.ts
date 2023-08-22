import typia from "../../../../src";
import { _test_protobuf_isDecode } from "../../../internal/_test_protobuf_isDecode";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";

export const test_protobuf_isDecode_ObjectGenericArray =
    _test_protobuf_isDecode("ObjectGenericArray")<ObjectGenericArray>(
        ObjectGenericArray,
    )({
        isDecode: (input: Uint8Array): ObjectGenericArray | null => {
            const is = (input: any): input is ObjectGenericArray => {
                const $io0 = (input: any): boolean =>
                    "object" === typeof input.pagination &&
                    null !== input.pagination &&
                    "number" === typeof (input.pagination as any).page &&
                    Number.isFinite((input.pagination as any).page) &&
                    "number" === typeof (input.pagination as any).limit &&
                    Number.isFinite((input.pagination as any).limit) &&
                    "number" === typeof (input.pagination as any).total_count &&
                    Number.isFinite((input.pagination as any).total_count) &&
                    "number" === typeof (input.pagination as any).total_pages &&
                    Number.isFinite((input.pagination as any).total_pages) &&
                    Array.isArray(input.data) &&
                    input.data.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
                    );
                const $io2 = (input: any): boolean =>
                    "string" === typeof input.name &&
                    "number" === typeof input.age &&
                    Number.isFinite(input.age);
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const decode = (input: Uint8Array): ObjectGenericArray => {
                const $Reader = (typia.protobuf.createIsDecode as any).Reader;
                const $pdo0 = (reader: any, length: number = -1): any => {
                    length =
                        length < 0 ? reader.size() : reader.index() + length;
                    const output = {
                        pagination: undefined as any,
                        data: [] as any,
                    };
                    while (reader.index() < length) {
                        const tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                output.pagination = $pdo1(
                                    reader,
                                    reader.uint32(),
                                );
                                break;
                            case 2:
                                output.data.push(
                                    $pdo2(reader, reader.uint32()),
                                );
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return output;
                };
                const $pdo1 = (reader: any, length: number = -1): any => {
                    length =
                        length < 0 ? reader.size() : reader.index() + length;
                    const output = {
                        page: undefined as any,
                        limit: undefined as any,
                        total_count: undefined as any,
                        total_pages: undefined as any,
                    };
                    while (reader.index() < length) {
                        const tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                output.page = reader.double();
                                break;
                            case 2:
                                output.limit = reader.double();
                                break;
                            case 3:
                                output.total_count = reader.double();
                                break;
                            case 4:
                                output.total_pages = reader.double();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return output;
                };
                const $pdo2 = (reader: any, length: number = -1): any => {
                    length =
                        length < 0 ? reader.size() : reader.index() + length;
                    const output = {
                        name: "" as any,
                        age: undefined as any,
                    };
                    while (reader.index() < length) {
                        const tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                output.name = reader.string();
                                break;
                            case 2:
                                output.age = reader.double();
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
            };
            const output = decode(input);
            if (!is(output)) return null;
            return output;
        },
        encode: (input: ObjectGenericArray): Uint8Array => {
            const $Sizer = (typia.protobuf.createEncode as any).Sizer;
            const $Writer = (typia.protobuf.createEncode as any).Writer;
            const encoder = (writer: any): any => {
                const $peo0 = (input: any): any => {
                    // property "pagination";
                    writer.uint32(10);
                    writer.fork();
                    $peo1(input.pagination);
                    writer.ldelim();
                    // property "data";
                    if (0 !== input.data.length) {
                        for (const elem of input.data) {
                            writer.uint32(18);
                            writer.fork();
                            $peo2(elem);
                            writer.ldelim();
                        }
                    }
                };
                const $peo1 = (input: any): any => {
                    // property "page";
                    writer.uint32(9);
                    writer.double(input.page);
                    // property "limit";
                    writer.uint32(17);
                    writer.double(input.limit);
                    // property "total_count";
                    writer.uint32(25);
                    writer.double(input.total_count);
                    // property "total_pages";
                    writer.uint32(33);
                    writer.double(input.total_pages);
                };
                const $peo2 = (input: any): any => {
                    // property "name";
                    writer.uint32(10);
                    writer.string(input.name);
                    // property "age";
                    writer.uint32(17);
                    writer.double(input.age);
                };
                const $io1 = (input: any): boolean =>
                    "number" === typeof input.page &&
                    "number" === typeof input.limit &&
                    "number" === typeof input.total_count &&
                    "number" === typeof input.total_pages;
                const $io2 = (input: any): boolean =>
                    "string" === typeof input.name &&
                    "number" === typeof input.age;
                $peo0(input);
                return writer;
            };
            const sizer = encoder(new $Sizer());
            const writer = encoder(new $Writer(sizer));
            return writer.buffer();
        },
    });
