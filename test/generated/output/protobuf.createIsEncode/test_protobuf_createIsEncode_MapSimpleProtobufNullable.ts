import typia from "../../../../src";
import { _test_protobuf_isEncode } from "../../../internal/_test_protobuf_isEncode";
import { MapSimpleProtobufNullable } from "../../../structures/MapSimpleProtobufNullable";

export const test_protobuf_isEncode_MapSimpleProtobufNullable =
    _test_protobuf_isEncode(
        "MapSimpleProtobufNullable",
    )<MapSimpleProtobufNullable>(MapSimpleProtobufNullable)({
        isEncode: (input: MapSimpleProtobufNullable): Uint8Array | null => {
            const is = (input: any): input is MapSimpleProtobufNullable => {
                const $io0 = (input: any): boolean =>
                    (null === input.boolean ||
                        (input.boolean instanceof Map &&
                            (() =>
                                [...input.boolean].every(
                                    (elem: any) =>
                                        Array.isArray(elem) &&
                                        elem.length === 2 &&
                                        "string" === typeof elem[0] &&
                                        "boolean" === typeof elem[1],
                                ))())) &&
                    (null === input.int32 ||
                        (input.int32 instanceof Map &&
                            (() =>
                                [...input.int32].every(
                                    (elem: any) =>
                                        Array.isArray(elem) &&
                                        elem.length === 2 &&
                                        "string" === typeof elem[0] &&
                                        "number" === typeof elem[1] &&
                                        Math.floor(elem[1]) === elem[1] &&
                                        -2147483648 <= elem[1] &&
                                        elem[1] <= 2147483647,
                                ))())) &&
                    (null === input.bigint ||
                        (input.bigint instanceof Map &&
                            (() =>
                                [...input.bigint].every(
                                    (elem: any) =>
                                        Array.isArray(elem) &&
                                        elem.length === 2 &&
                                        "string" === typeof elem[0] &&
                                        "bigint" === typeof elem[1],
                                ))())) &&
                    (null === input.double ||
                        (input.double instanceof Map &&
                            (() =>
                                [...input.double].every(
                                    (elem: any) =>
                                        Array.isArray(elem) &&
                                        elem.length === 2 &&
                                        "string" === typeof elem[0] &&
                                        "number" === typeof elem[1] &&
                                        Number.isFinite(elem[1]),
                                ))())) &&
                    (null === input.string ||
                        (input.string instanceof Map &&
                            (() =>
                                [...input.string].every(
                                    (elem: any) =>
                                        Array.isArray(elem) &&
                                        elem.length === 2 &&
                                        "string" === typeof elem[0] &&
                                        "string" === typeof elem[1] &&
                                        1 <= elem[1].length,
                                ))())) &&
                    (null === input.bytes ||
                        (input.bytes instanceof Map &&
                            (() =>
                                [...input.bytes].every(
                                    (elem: any) =>
                                        Array.isArray(elem) &&
                                        elem.length === 2 &&
                                        "string" === typeof elem[0] &&
                                        elem[1] instanceof Uint8Array,
                                ))())) &&
                    (null === input.objects ||
                        (input.objects instanceof Map &&
                            (() =>
                                [...input.objects].every(
                                    (elem: any) =>
                                        Array.isArray(elem) &&
                                        elem.length === 2 &&
                                        "string" === typeof elem[0] &&
                                        "object" === typeof elem[1] &&
                                        null !== elem[1] &&
                                        $io0(elem[1]),
                                ))()));
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const encode = (input: MapSimpleProtobufNullable): Uint8Array => {
                const $Sizer = (typia.protobuf.createIsEncode as any).Sizer;
                const $Writer = (typia.protobuf.createIsEncode as any).Writer;
                const encoder = (writer: any): any => {
                    const $peo0 = (input: any): any => {
                        // property "boolean";
                        if (null !== input.boolean) {
                            for (const [key, value] of input.boolean) {
                                writer.uint32(10);
                                writer.fork();
                                writer.uint32(10);
                                writer.string(key);
                                writer.uint32(16);
                                writer.bool(value);
                                writer.ldelim();
                            }
                        }
                        // property "int32";
                        if (null !== input.int32) {
                            for (const [key, value] of input.int32) {
                                writer.uint32(18);
                                writer.fork();
                                writer.uint32(10);
                                writer.string(key);
                                writer.uint32(16);
                                writer.int32(value);
                                writer.ldelim();
                            }
                        }
                        // property "bigint";
                        if (null !== input.bigint) {
                            for (const [key, value] of input.bigint) {
                                writer.uint32(26);
                                writer.fork();
                                writer.uint32(10);
                                writer.string(key);
                                writer.uint32(16);
                                writer.int64(value);
                                writer.ldelim();
                            }
                        }
                        // property "double";
                        if (null !== input.double) {
                            for (const [key, value] of input.double) {
                                writer.uint32(34);
                                writer.fork();
                                writer.uint32(10);
                                writer.string(key);
                                writer.uint32(17);
                                writer.double(value);
                                writer.ldelim();
                            }
                        }
                        // property "string";
                        if (null !== input.string) {
                            for (const [key, value] of input.string) {
                                writer.uint32(42);
                                writer.fork();
                                writer.uint32(10);
                                writer.string(key);
                                writer.uint32(18);
                                writer.string(value);
                                writer.ldelim();
                            }
                        }
                        // property "bytes";
                        if (null !== input.bytes) {
                            for (const [key, value] of input.bytes) {
                                writer.uint32(50);
                                writer.fork();
                                writer.uint32(10);
                                writer.string(key);
                                writer.uint32(18);
                                writer.bytes(value);
                                writer.ldelim();
                            }
                        }
                        // property "objects";
                        if (null !== input.objects) {
                            for (const [key, value] of input.objects) {
                                writer.uint32(58);
                                writer.fork();
                                writer.uint32(10);
                                writer.string(key);
                                // 2 -> MapSimpleProtobufNullable;
                                writer.uint32(18);
                                writer.fork();
                                $peo0(value);
                                writer.ldelim();
                                writer.ldelim();
                            }
                        }
                    };
                    const $io0 = (input: any): boolean =>
                        (null === input.boolean ||
                            (input.boolean instanceof Map &&
                                (() =>
                                    [...input.boolean].every(
                                        (elem: any) =>
                                            Array.isArray(elem) &&
                                            elem.length === 2 &&
                                            "string" === typeof elem[0] &&
                                            "boolean" === typeof elem[1],
                                    ))())) &&
                        (null === input.int32 ||
                            (input.int32 instanceof Map &&
                                (() =>
                                    [...input.int32].every(
                                        (elem: any) =>
                                            Array.isArray(elem) &&
                                            elem.length === 2 &&
                                            "string" === typeof elem[0] &&
                                            "number" === typeof elem[1] &&
                                            Math.floor(elem[1]) === elem[1] &&
                                            -2147483648 <= elem[1] &&
                                            elem[1] <= 2147483647,
                                    ))())) &&
                        (null === input.bigint ||
                            (input.bigint instanceof Map &&
                                (() =>
                                    [...input.bigint].every(
                                        (elem: any) =>
                                            Array.isArray(elem) &&
                                            elem.length === 2 &&
                                            "string" === typeof elem[0] &&
                                            "bigint" === typeof elem[1],
                                    ))())) &&
                        (null === input.double ||
                            (input.double instanceof Map &&
                                (() =>
                                    [...input.double].every(
                                        (elem: any) =>
                                            Array.isArray(elem) &&
                                            elem.length === 2 &&
                                            "string" === typeof elem[0] &&
                                            "number" === typeof elem[1],
                                    ))())) &&
                        (null === input.string ||
                            (input.string instanceof Map &&
                                (() =>
                                    [...input.string].every(
                                        (elem: any) =>
                                            Array.isArray(elem) &&
                                            elem.length === 2 &&
                                            "string" === typeof elem[0] &&
                                            "string" === typeof elem[1] &&
                                            1 <= elem[1].length,
                                    ))())) &&
                        (null === input.bytes ||
                            (input.bytes instanceof Map &&
                                (() =>
                                    [...input.bytes].every(
                                        (elem: any) =>
                                            Array.isArray(elem) &&
                                            elem.length === 2 &&
                                            "string" === typeof elem[0] &&
                                            elem[1] instanceof Uint8Array,
                                    ))())) &&
                        (null === input.objects ||
                            (input.objects instanceof Map &&
                                (() =>
                                    [...input.objects].every(
                                        (elem: any) =>
                                            Array.isArray(elem) &&
                                            elem.length === 2 &&
                                            "string" === typeof elem[0] &&
                                            "object" === typeof elem[1] &&
                                            null !== elem[1] &&
                                            $io0(elem[1]),
                                    ))()));
                    //MapSimpleProtobufNullable;
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
            'syntax = "proto3";\n\nmessage MapSimpleProtobufNullable {\n    map<string, bool> boolean = 1;\n    map<string, int32> int32 = 2;\n    map<string, int64> bigint = 3;\n    map<string, double> double = 4;\n    map<string, string> string = 5;\n    map<string, bytes> bytes = 6;\n    map<string, MapSimpleProtobufNullable> objects = 7;\n}',
        decode: (
            input: Uint8Array,
        ): typia.Resolved<MapSimpleProtobufNullable> => {
            const $Reader = (typia.protobuf.createDecode as any).Reader;
            const $pdo0 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    boolean: null as any,
                    int32: null as any,
                    bigint: null as any,
                    double: null as any,
                    string: null as any,
                    bytes: null as any,
                    objects: null as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            // type: Map<string, boolean>;
                            (() => {
                                output.boolean ??= new Map<any, any>();
                                const piece = reader.uint32() + reader.index();
                                const entry = {
                                    key: "" as any,
                                    value: undefined as any,
                                };
                                while (reader.index() < piece) {
                                    const kind = reader.uint32();
                                    switch (kind >>> 3) {
                                        case 1:
                                            // string;
                                            entry.key = reader.string();
                                            break;
                                        case 2:
                                            // bool;
                                            entry.value = reader.bool();
                                            break;
                                        default:
                                            reader.skipType(kind & 7);
                                            break;
                                    }
                                }
                                output.boolean.set(entry.key, entry.value);
                            })();
                            break;
                        case 2:
                            // type: Map<string, (number & Type<"int32">)>;
                            (() => {
                                output.int32 ??= new Map<any, any>();
                                const piece = reader.uint32() + reader.index();
                                const entry = {
                                    key: "" as any,
                                    value: undefined as any,
                                };
                                while (reader.index() < piece) {
                                    const kind = reader.uint32();
                                    switch (kind >>> 3) {
                                        case 1:
                                            // string;
                                            entry.key = reader.string();
                                            break;
                                        case 2:
                                            // int32;
                                            entry.value = reader.int32();
                                            break;
                                        default:
                                            reader.skipType(kind & 7);
                                            break;
                                    }
                                }
                                output.int32.set(entry.key, entry.value);
                            })();
                            break;
                        case 3:
                            // type: Map<string, bigint>;
                            (() => {
                                output.bigint ??= new Map<any, any>();
                                const piece = reader.uint32() + reader.index();
                                const entry = {
                                    key: "" as any,
                                    value: undefined as any,
                                };
                                while (reader.index() < piece) {
                                    const kind = reader.uint32();
                                    switch (kind >>> 3) {
                                        case 1:
                                            // string;
                                            entry.key = reader.string();
                                            break;
                                        case 2:
                                            // int64;
                                            entry.value = reader.int64();
                                            break;
                                        default:
                                            reader.skipType(kind & 7);
                                            break;
                                    }
                                }
                                output.bigint.set(entry.key, entry.value);
                            })();
                            break;
                        case 4:
                            // type: Map<string, number>;
                            (() => {
                                output.double ??= new Map<any, any>();
                                const piece = reader.uint32() + reader.index();
                                const entry = {
                                    key: "" as any,
                                    value: undefined as any,
                                };
                                while (reader.index() < piece) {
                                    const kind = reader.uint32();
                                    switch (kind >>> 3) {
                                        case 1:
                                            // string;
                                            entry.key = reader.string();
                                            break;
                                        case 2:
                                            // double;
                                            entry.value = reader.double();
                                            break;
                                        default:
                                            reader.skipType(kind & 7);
                                            break;
                                    }
                                }
                                output.double.set(entry.key, entry.value);
                            })();
                            break;
                        case 5:
                            // type: Map<string, (string & MinLength<1>)>;
                            (() => {
                                output.string ??= new Map<any, any>();
                                const piece = reader.uint32() + reader.index();
                                const entry = {
                                    key: "" as any,
                                    value: "" as any,
                                };
                                while (reader.index() < piece) {
                                    const kind = reader.uint32();
                                    switch (kind >>> 3) {
                                        case 1:
                                            // string;
                                            entry.key = reader.string();
                                            break;
                                        case 2:
                                            // string;
                                            entry.value = reader.string();
                                            break;
                                        default:
                                            reader.skipType(kind & 7);
                                            break;
                                    }
                                }
                                output.string.set(entry.key, entry.value);
                            })();
                            break;
                        case 6:
                            // type: Map<string, Uint8Array>;
                            (() => {
                                output.bytes ??= new Map<any, any>();
                                const piece = reader.uint32() + reader.index();
                                const entry = {
                                    key: "" as any,
                                    value: new Uint8Array() as any,
                                };
                                while (reader.index() < piece) {
                                    const kind = reader.uint32();
                                    switch (kind >>> 3) {
                                        case 1:
                                            // string;
                                            entry.key = reader.string();
                                            break;
                                        case 2:
                                            // bytes;
                                            entry.value = reader.bytes();
                                            break;
                                        default:
                                            reader.skipType(kind & 7);
                                            break;
                                    }
                                }
                                output.bytes.set(entry.key, entry.value);
                            })();
                            break;
                        case 7:
                            // type: Map<string, MapSimpleProtobufNullable>;
                            (() => {
                                output.objects ??= new Map<any, any>();
                                const piece = reader.uint32() + reader.index();
                                const entry = {
                                    key: "" as any,
                                    value: undefined as any,
                                };
                                while (reader.index() < piece) {
                                    const kind = reader.uint32();
                                    switch (kind >>> 3) {
                                        case 1:
                                            // string;
                                            entry.key = reader.string();
                                            break;
                                        case 2:
                                            // MapSimpleProtobufNullable;
                                            entry.value = $pdo0(
                                                reader,
                                                reader.uint32(),
                                            );
                                            break;
                                        default:
                                            reader.skipType(kind & 7);
                                            break;
                                    }
                                }
                                output.objects.set(entry.key, entry.value);
                            })();
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
