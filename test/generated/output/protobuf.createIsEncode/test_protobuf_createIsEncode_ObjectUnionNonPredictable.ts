import typia from "../../../../src";
import { _test_protobuf_isEncode } from "../../../internal/_test_protobuf_isEncode";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_protobuf_isEncode_ObjectUnionNonPredictable =
    _test_protobuf_isEncode(
        "ObjectUnionNonPredictable",
    )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)({
        isEncode: (input: ObjectUnionNonPredictable): Uint8Array | null => {
            const is = (input: any): input is ObjectUnionNonPredictable => {
                const $io0 = (input: any): boolean =>
                    Array.isArray(input.value) &&
                    input.value.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io1(elem),
                    );
                const $io1 = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    $io2(input.value);
                const $io2 = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    $iu0(input.value);
                const $io3 = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    "boolean" === typeof (input.value as any).value;
                const $io5 = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    "number" === typeof (input.value as any).value &&
                    Number.isFinite((input.value as any).value);
                const $io7 = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    "string" === typeof (input.value as any).value;
                const $iu0 = (input: any): any =>
                    (() => {
                        if ($io7(input)) return $io7(input);
                        else if ($io5(input)) return $io5(input);
                        else if ($io3(input)) return $io3(input);
                        else return false;
                    })();
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const encode = (input: ObjectUnionNonPredictable): Uint8Array => {
                const $throws = (typia.protobuf.createIsEncode as any).throws;
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
                        // property "value";
                        writer.uint32(10);
                        writer.fork();
                        $peo2(input.value);
                        writer.ldelim();
                    };
                    const $peo2 = (input: any): any => {
                        // property "value";
                        (() => {
                            if ($io7(input.value))
                                return (() => {
                                    writer.uint32(10);
                                    writer.fork();
                                    $peo7(input.value);
                                    writer.ldelim();
                                })();
                            else if ($io5(input.value))
                                return (() => {
                                    writer.uint32(18);
                                    writer.fork();
                                    $peo5(input.value);
                                    writer.ldelim();
                                })();
                            else if ($io3(input.value))
                                return (() => {
                                    writer.uint32(26);
                                    writer.fork();
                                    $peo3(input.value);
                                    writer.ldelim();
                                })();
                            else
                                $throws({
                                    expected:
                                        "(ObjectUnionNonPredictable.IWrapper<string> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<boolean>)",
                                    value: input.value,
                                });
                        })();
                    };
                    const $peo3 = (input: any): any => {
                        // property "value";
                        writer.uint32(10);
                        writer.fork();
                        $peo4(input.value);
                        writer.ldelim();
                    };
                    const $peo4 = (input: any): any => {
                        // property "value";
                        writer.uint32(8);
                        writer.bool(input.value);
                    };
                    const $peo5 = (input: any): any => {
                        // property "value";
                        writer.uint32(10);
                        writer.fork();
                        $peo6(input.value);
                        writer.ldelim();
                    };
                    const $peo6 = (input: any): any => {
                        // property "value";
                        writer.uint32(9);
                        writer.double(input.value);
                    };
                    const $peo7 = (input: any): any => {
                        // property "value";
                        writer.uint32(10);
                        writer.fork();
                        $peo8(input.value);
                        writer.ldelim();
                    };
                    const $peo8 = (input: any): any => {
                        // property "value";
                        writer.uint32(10);
                        writer.string(input.value);
                    };
                    const $io1 = (input: any): boolean =>
                        "object" === typeof input.value &&
                        null !== input.value &&
                        $io2(input.value);
                    const $io2 = (input: any): boolean =>
                        "object" === typeof input.value &&
                        null !== input.value &&
                        $iu0(input.value);
                    const $io3 = (input: any): boolean =>
                        "object" === typeof input.value &&
                        null !== input.value &&
                        $io4(input.value);
                    const $io4 = (input: any): boolean =>
                        "boolean" === typeof input.value;
                    const $io5 = (input: any): boolean =>
                        "object" === typeof input.value &&
                        null !== input.value &&
                        $io6(input.value);
                    const $io6 = (input: any): boolean =>
                        "number" === typeof input.value;
                    const $io7 = (input: any): boolean =>
                        "object" === typeof input.value &&
                        null !== input.value &&
                        $io8(input.value);
                    const $io8 = (input: any): boolean =>
                        "string" === typeof input.value;
                    const $iu0 = (input: any): any =>
                        $io7(input) || $io5(input) || $io3(input);
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
            'syntax = "proto3";\n\nmessage ObjectUnionNonPredictable {\n    repeated ObjectUnionNonPredictable.IWrapper_lt_ObjectUnionNonPredictable.IUnion_gt_ value = 1;\n    message IWrapper_lt_ObjectUnionNonPredictable {\n        message IUnion_gt_ {\n            required IPointer_lt_ObjectUnionNonPredictable.IUnion_gt_ value = 1;\n        }\n    }\n\n    message IWrapper_lt_boolean_gt_ {\n        required IPointer_lt_boolean_gt_ value = 1;\n    }\n\n    message IWrapper_lt_number_gt_ {\n        required IPointer_lt_number_gt_ value = 1;\n    }\n\n    message IWrapper_lt_string_gt_ {\n        required IPointer_lt_string_gt_ value = 1;\n    }\n}\n\nmessage IPointer_lt_ObjectUnionNonPredictable {\n    message IUnion_gt_ {\n        oneof value {\n            ObjectUnionNonPredictable.IWrapper_lt_string_gt_ v1 = 1;\n            ObjectUnionNonPredictable.IWrapper_lt_number_gt_ v2 = 2;\n            ObjectUnionNonPredictable.IWrapper_lt_boolean_gt_ v3 = 3;\n        }\n    }\n}\n\nmessage IPointer_lt_boolean_gt_ {\n    required bool value = 1;\n}\n\nmessage IPointer_lt_number_gt_ {\n    required double value = 1;\n}\n\nmessage IPointer_lt_string_gt_ {\n    required string value = 1;\n}',
        decode: (input: Uint8Array): ObjectUnionNonPredictable => {
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
                    value: undefined as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            output.value = $pdo2(reader, reader.uint32());
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
                    value: undefined as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            output.value = $pdo7(reader, reader.uint32());
                            break;
                        case 2:
                            output.value = $pdo5(reader, reader.uint32());
                            break;
                        case 3:
                            output.value = $pdo3(reader, reader.uint32());
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
                    value: undefined as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            output.value = $pdo4(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return output;
            };
            const $pdo4 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    value: undefined as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            output.value = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return output;
            };
            const $pdo5 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    value: undefined as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            output.value = $pdo6(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return output;
            };
            const $pdo6 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    value: undefined as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            output.value = reader.double();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return output;
            };
            const $pdo7 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    value: undefined as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            output.value = $pdo8(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return output;
            };
            const $pdo8 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    value: "" as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            output.value = reader.string();
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
