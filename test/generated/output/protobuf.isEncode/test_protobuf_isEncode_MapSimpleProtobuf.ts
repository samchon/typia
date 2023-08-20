import typia from "../../../../src";
import { _test_protobuf_isEncode } from "../../../internal/_test_protobuf_isEncode";
import { MapSimpleProtobuf } from "../../../structures/MapSimpleProtobuf";

export const test_protobuf_isEncode_MapSimpleProtobuf =
    _test_protobuf_isEncode<MapSimpleProtobuf>(MapSimpleProtobuf)({
        isEncode: (input) =>
            ((input: MapSimpleProtobuf): Uint8Array | null => {
                const is = (input: any): input is MapSimpleProtobuf => {
                    const $io0 = (input: any): boolean =>
                        input.boolean instanceof Map &&
                        (() =>
                            [...input.boolean].every(
                                (elem: any) =>
                                    Array.isArray(elem) &&
                                    elem.length === 2 &&
                                    "string" === typeof elem[0] &&
                                    "boolean" === typeof elem[1],
                            ))() &&
                        input.int32 instanceof Map &&
                        (() =>
                            [...input.int32].every(
                                (elem: any) =>
                                    Array.isArray(elem) &&
                                    elem.length === 2 &&
                                    "string" === typeof elem[0] &&
                                    "number" === typeof elem[1] &&
                                    Number.isFinite(elem[1]) &&
                                    Math.floor(elem[1]) === elem[1] &&
                                    -2147483648 <= elem[1] &&
                                    elem[1] <= 2147483647,
                            ))() &&
                        input.bigint instanceof Map &&
                        (() =>
                            [...input.bigint].every(
                                (elem: any) =>
                                    Array.isArray(elem) &&
                                    elem.length === 2 &&
                                    "string" === typeof elem[0] &&
                                    "bigint" === typeof elem[1],
                            ))() &&
                        input.double instanceof Map &&
                        (() =>
                            [...input.double].every(
                                (elem: any) =>
                                    Array.isArray(elem) &&
                                    elem.length === 2 &&
                                    "string" === typeof elem[0] &&
                                    "number" === typeof elem[1] &&
                                    Number.isFinite(elem[1]),
                            ))() &&
                        input.string instanceof Map &&
                        (() =>
                            [...input.string].every(
                                (elem: any) =>
                                    Array.isArray(elem) &&
                                    elem.length === 2 &&
                                    "string" === typeof elem[0] &&
                                    "string" === typeof elem[1] &&
                                    1 <= elem[1].length,
                            ))() &&
                        input.bytes instanceof Map &&
                        (() =>
                            [...input.bytes].every(
                                (elem: any) =>
                                    Array.isArray(elem) &&
                                    elem.length === 2 &&
                                    "string" === typeof elem[0] &&
                                    elem[1] instanceof Uint8Array,
                            ))() &&
                        input.objects instanceof Map &&
                        (() =>
                            [...input.objects].every(
                                (elem: any) =>
                                    Array.isArray(elem) &&
                                    elem.length === 2 &&
                                    "string" === typeof elem[0] &&
                                    "object" === typeof elem[1] &&
                                    null !== elem[1] &&
                                    $io0(elem[1]),
                            ))();
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        $io0(input)
                    );
                };
                const encode = (input: MapSimpleProtobuf): Uint8Array => {
                    const $Sizer = (typia.protobuf.isEncode as any).Sizer;
                    const $Writer = (typia.protobuf.isEncode as any).Writer;
                    const encoder = (writer: any): any => {
                        const $peo0 = (input: any): any => {
                            // property "boolean";
                            for (const [key, value] of input.boolean) {
                                writer.uint32(10);
                                writer.fork();
                                writer.uint32(10);
                                writer.string(key);
                                writer.uint32(16);
                                writer.bool(value);
                                writer.ldelim();
                            }
                            // property "int32";
                            for (const [key, value] of input.int32) {
                                writer.uint32(18);
                                writer.fork();
                                writer.uint32(10);
                                writer.string(key);
                                writer.uint32(16);
                                writer.int32(value);
                                writer.ldelim();
                            }
                            // property "bigint";
                            for (const [key, value] of input.bigint) {
                                writer.uint32(26);
                                writer.fork();
                                writer.uint32(10);
                                writer.string(key);
                                writer.uint32(16);
                                writer.int64(value);
                                writer.ldelim();
                            }
                            // property "double";
                            for (const [key, value] of input.double) {
                                writer.uint32(34);
                                writer.fork();
                                writer.uint32(10);
                                writer.string(key);
                                writer.uint32(17);
                                writer.double(value);
                                writer.ldelim();
                            }
                            // property "string";
                            for (const [key, value] of input.string) {
                                writer.uint32(42);
                                writer.fork();
                                writer.uint32(10);
                                writer.string(key);
                                writer.uint32(18);
                                writer.string(value);
                                writer.ldelim();
                            }
                            // property "bytes";
                            for (const [key, value] of input.bytes) {
                                writer.uint32(50);
                                writer.fork();
                                writer.uint32(10);
                                writer.string(key);
                                writer.uint32(18);
                                writer.bytes(value);
                                writer.ldelim();
                            }
                            // property "objects";
                            for (const [key, value] of input.objects) {
                                writer.uint32(58);
                                writer.fork();
                                writer.uint32(10);
                                writer.string(key);
                                writer.uint32(18);
                                writer.fork();
                                $peo0(value);
                                writer.ldelim();
                                writer.ldelim();
                            }
                        };
                        const $io0 = (input: any): boolean =>
                            input.boolean instanceof Map &&
                            (() =>
                                [...input.boolean].every(
                                    (elem: any) =>
                                        Array.isArray(elem) &&
                                        elem.length === 2 &&
                                        "string" === typeof elem[0] &&
                                        "boolean" === typeof elem[1],
                                ))() &&
                            input.int32 instanceof Map &&
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
                                ))() &&
                            input.bigint instanceof Map &&
                            (() =>
                                [...input.bigint].every(
                                    (elem: any) =>
                                        Array.isArray(elem) &&
                                        elem.length === 2 &&
                                        "string" === typeof elem[0] &&
                                        "bigint" === typeof elem[1],
                                ))() &&
                            input.double instanceof Map &&
                            (() =>
                                [...input.double].every(
                                    (elem: any) =>
                                        Array.isArray(elem) &&
                                        elem.length === 2 &&
                                        "string" === typeof elem[0] &&
                                        "number" === typeof elem[1],
                                ))() &&
                            input.string instanceof Map &&
                            (() =>
                                [...input.string].every(
                                    (elem: any) =>
                                        Array.isArray(elem) &&
                                        elem.length === 2 &&
                                        "string" === typeof elem[0] &&
                                        "string" === typeof elem[1] &&
                                        1 <= elem[1].length,
                                ))() &&
                            input.bytes instanceof Map &&
                            (() =>
                                [...input.bytes].every(
                                    (elem: any) =>
                                        Array.isArray(elem) &&
                                        elem.length === 2 &&
                                        "string" === typeof elem[0] &&
                                        elem[1] instanceof Uint8Array,
                                ))() &&
                            input.objects instanceof Map &&
                            (() =>
                                [...input.objects].every(
                                    (elem: any) =>
                                        Array.isArray(elem) &&
                                        elem.length === 2 &&
                                        "string" === typeof elem[0] &&
                                        "object" === typeof elem[1] &&
                                        null !== elem[1] &&
                                        $io0(elem[1]),
                                ))();
                        $peo0(input);
                        return writer;
                    };
                    const sizer = encoder(new $Sizer());
                    const writer = encoder(new $Writer(sizer));
                    return writer.buffer();
                };
                return is(input) ? encode(input) : null;
            })(input),
        message:
            'syntax = "proto3";\n\nmessage MapSimpleProtobuf {\n    map<string, bool> boolean = 1;\n    map<string, int32> int32 = 2;\n    map<string, int64> bigint = 3;\n    map<string, double> double = 4;\n    map<string, string> string = 5;\n    map<string, bytes> bytes = 6;\n    map<string, MapSimpleProtobuf> objects = 7;\n}',
    });
