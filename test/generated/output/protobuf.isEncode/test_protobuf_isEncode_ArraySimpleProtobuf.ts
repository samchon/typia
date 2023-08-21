import typia from "../../../../src";
import { _test_protobuf_isEncode } from "../../../internal/_test_protobuf_isEncode";
import { ArraySimpleProtobuf } from "../../../structures/ArraySimpleProtobuf";

export const test_protobuf_isEncode_ArraySimpleProtobuf =
    _test_protobuf_isEncode("ArraySimpleProtobuf")<ArraySimpleProtobuf>(
        ArraySimpleProtobuf,
    )({
        isEncode: (input) =>
            ((input: ArraySimpleProtobuf): Uint8Array | null => {
                const is = (input: any): input is ArraySimpleProtobuf => {
                    const $io0 = (input: any): boolean =>
                        Array.isArray(input.boolean) &&
                        input.boolean.every(
                            (elem: any) => "boolean" === typeof elem,
                        ) &&
                        Array.isArray(input.int32) &&
                        input.int32.every(
                            (elem: any) =>
                                "number" === typeof elem &&
                                Number.isFinite(elem) &&
                                Math.floor(elem) === elem &&
                                -2147483648 <= elem &&
                                elem <= 2147483647,
                        ) &&
                        Array.isArray(input.uint32) &&
                        input.uint32.every(
                            (elem: any) =>
                                "number" === typeof elem &&
                                Number.isFinite(elem) &&
                                Math.floor(elem) === elem &&
                                0 <= elem &&
                                elem <= 4294967295,
                        ) &&
                        Array.isArray(input.int64) &&
                        input.int64.every(
                            (elem: any) => "bigint" === typeof elem,
                        ) &&
                        Array.isArray(input.uint64) &&
                        input.uint64.every(
                            (elem: any) =>
                                "bigint" === typeof elem && BigInt(0) <= elem,
                        ) &&
                        Array.isArray(input.float) &&
                        input.float.every(
                            (elem: any) =>
                                "number" === typeof elem &&
                                Number.isFinite(elem) &&
                                -1.175494351e38 <= elem &&
                                elem <= 3.4028235e38,
                        ) &&
                        Array.isArray(input.double) &&
                        input.double.every(
                            (elem: any) =>
                                "number" === typeof elem &&
                                Number.isFinite(elem),
                        ) &&
                        Array.isArray(input.string) &&
                        input.string.every(
                            (elem: any) => "string" === typeof elem,
                        ) &&
                        Array.isArray(input.bytes) &&
                        input.bytes.every(
                            (elem: any) => elem instanceof Uint8Array,
                        ) &&
                        Array.isArray(input.object) &&
                        input.object.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io0(elem),
                        );
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        $io0(input)
                    );
                };
                const encode = (input: ArraySimpleProtobuf): Uint8Array => {
                    const $Sizer = (typia.protobuf.isEncode as any).Sizer;
                    const $Writer = (typia.protobuf.isEncode as any).Writer;
                    const encoder = (writer: any): any => {
                        const $peo0 = (input: any): any => {
                            // property "boolean";
                            if (0 !== input.boolean.length) {
                                writer.uint32(10);
                                writer.fork();
                                for (const elem of input.boolean) {
                                    writer.bool(elem);
                                }
                                writer.ldelim();
                            }
                            // property "int32";
                            if (0 !== input.int32.length) {
                                writer.uint32(18);
                                writer.fork();
                                for (const elem of input.int32) {
                                    writer.int32(elem);
                                }
                                writer.ldelim();
                            }
                            // property "uint32";
                            if (0 !== input.uint32.length) {
                                writer.uint32(26);
                                writer.fork();
                                for (const elem of input.uint32) {
                                    writer.uint32(elem);
                                }
                                writer.ldelim();
                            }
                            // property "int64";
                            if (0 !== input.int64.length) {
                                writer.uint32(34);
                                writer.fork();
                                for (const elem of input.int64) {
                                    writer.int64(elem);
                                }
                                writer.ldelim();
                            }
                            // property "uint64";
                            if (0 !== input.uint64.length) {
                                writer.uint32(42);
                                writer.fork();
                                for (const elem of input.uint64) {
                                    writer.uint64(elem);
                                }
                                writer.ldelim();
                            }
                            // property "float";
                            if (0 !== input.float.length) {
                                writer.uint32(50);
                                writer.fork();
                                for (const elem of input.float) {
                                    writer.float(elem);
                                }
                                writer.ldelim();
                            }
                            // property "double";
                            if (0 !== input.double.length) {
                                writer.uint32(58);
                                writer.fork();
                                for (const elem of input.double) {
                                    writer.double(elem);
                                }
                                writer.ldelim();
                            }
                            // property "string";
                            if (0 !== input.string.length) {
                                for (const elem of input.string) {
                                    writer.uint32(66);
                                    writer.string(elem);
                                }
                            }
                            // property "bytes";
                            if (0 !== input.bytes.length) {
                                for (const elem of input.bytes) {
                                    writer.uint32(74);
                                    writer.bytes(elem);
                                }
                            }
                            // property "object";
                            if (0 !== input.object.length) {
                                for (const elem of input.object) {
                                    writer.uint32(82);
                                    writer.fork();
                                    $peo0(elem);
                                    writer.ldelim();
                                }
                            }
                        };
                        const $io0 = (input: any): boolean =>
                            Array.isArray(input.boolean) &&
                            input.boolean.every(
                                (elem: any) => "boolean" === typeof elem,
                            ) &&
                            Array.isArray(input.int32) &&
                            input.int32.every(
                                (elem: any) =>
                                    "number" === typeof elem &&
                                    Math.floor(elem) === elem &&
                                    -2147483648 <= elem &&
                                    elem <= 2147483647,
                            ) &&
                            Array.isArray(input.uint32) &&
                            input.uint32.every(
                                (elem: any) =>
                                    "number" === typeof elem &&
                                    Math.floor(elem) === elem &&
                                    0 <= elem &&
                                    elem <= 4294967295,
                            ) &&
                            Array.isArray(input.int64) &&
                            input.int64.every(
                                (elem: any) => "bigint" === typeof elem,
                            ) &&
                            Array.isArray(input.uint64) &&
                            input.uint64.every(
                                (elem: any) =>
                                    "bigint" === typeof elem &&
                                    BigInt(0) <= elem,
                            ) &&
                            Array.isArray(input.float) &&
                            input.float.every(
                                (elem: any) =>
                                    "number" === typeof elem &&
                                    -1.175494351e38 <= elem &&
                                    elem <= 3.4028235e38,
                            ) &&
                            Array.isArray(input.double) &&
                            input.double.every(
                                (elem: any) => "number" === typeof elem,
                            ) &&
                            Array.isArray(input.string) &&
                            input.string.every(
                                (elem: any) => "string" === typeof elem,
                            ) &&
                            Array.isArray(input.bytes) &&
                            input.bytes.every(
                                (elem: any) => elem instanceof Uint8Array,
                            ) &&
                            Array.isArray(input.object) &&
                            input.object.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io0(elem),
                            );
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
            'syntax = "proto3";\n\nmessage ArraySimpleProtobuf {\n    repeated bool boolean = 1;\n    repeated int32 int32 = 2;\n    repeated uint32 uint32 = 3;\n    repeated int64 int64 = 4;\n    repeated uint64 uint64 = 5;\n    repeated float float = 6;\n    repeated double double = 7;\n    repeated string string = 8;\n    repeated bytes bytes = 9;\n    repeated ArraySimpleProtobuf object = 10;\n}',
    });
