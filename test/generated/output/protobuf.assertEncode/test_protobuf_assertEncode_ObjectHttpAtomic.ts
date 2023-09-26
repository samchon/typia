import typia from "../../../../src";
import { _test_protobuf_assertEncode } from "../../../internal/_test_protobuf_assertEncode";
import { ObjectHttpAtomic } from "../../../structures/ObjectHttpAtomic";

export const test_protobuf_assertEncode_ObjectHttpAtomic =
    _test_protobuf_assertEncode("ObjectHttpAtomic")<ObjectHttpAtomic>(
        ObjectHttpAtomic,
    )({
        assertEncode: (input) =>
            ((input: any): Uint8Array => {
                const assert = (input: any): ObjectHttpAtomic => {
                    const __is = (input: any): input is ObjectHttpAtomic => {
                        return (
                            "object" === typeof input &&
                            null !== input &&
                            "boolean" === typeof (input as any).boolean &&
                            "bigint" === typeof (input as any).bigint &&
                            "number" === typeof (input as any).number &&
                            Number.isFinite((input as any).number) &&
                            "string" === typeof (input as any).string
                        );
                    };
                    if (false === __is(input))
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is ObjectHttpAtomic => {
                            const $guard = (typia.protobuf.assertEncode as any)
                                .guard;
                            const $ao0 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                ("boolean" === typeof input.boolean ||
                                    $guard(_exceptionable, {
                                        path: _path + ".boolean",
                                        expected: "boolean",
                                        value: input.boolean,
                                    })) &&
                                ("bigint" === typeof input.bigint ||
                                    $guard(_exceptionable, {
                                        path: _path + ".bigint",
                                        expected: "bigint",
                                        value: input.bigint,
                                    })) &&
                                (("number" === typeof input.number &&
                                    Number.isFinite(input.number)) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".number",
                                        expected: "number",
                                        value: input.number,
                                    })) &&
                                ("string" === typeof input.string ||
                                    $guard(_exceptionable, {
                                        path: _path + ".string",
                                        expected: "string",
                                        value: input.string,
                                    }));
                            return (
                                ((("object" === typeof input &&
                                    null !== input) ||
                                    $guard(true, {
                                        path: _path + "",
                                        expected: "ObjectHttpAtomic",
                                        value: input,
                                    })) &&
                                    $ao0(input, _path + "", true)) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "ObjectHttpAtomic",
                                    value: input,
                                })
                            );
                        })(input, "$input", true);
                    return input;
                };
                const encode = (input: ObjectHttpAtomic): Uint8Array => {
                    const $Sizer = (typia.protobuf.assertEncode as any).Sizer;
                    const $Writer = (typia.protobuf.assertEncode as any).Writer;
                    const encoder = (writer: any): any => {
                        const $peo0 = (input: any): any => {
                            // property "boolean";
                            writer.uint32(8);
                            writer.bool(input.boolean);
                            // property "bigint";
                            writer.uint32(16);
                            writer.int64(input.bigint);
                            // property "number";
                            writer.uint32(25);
                            writer.double(input.number);
                            // property "string";
                            writer.uint32(34);
                            writer.string(input.string);
                        };
                        //ObjectHttpAtomic;
                        $peo0(input);
                        return writer;
                    };
                    const sizer = encoder(new $Sizer());
                    const writer = encoder(new $Writer(sizer));
                    return writer.buffer();
                };
                return encode(assert(input));
            })(input),
        message:
            'syntax = "proto3";\n\nmessage ObjectHttpAtomic {\n    required bool boolean = 1;\n    required int64 bigint = 2;\n    required double number = 3;\n    required string string = 4;\n}',
        decode: (input: Uint8Array): typia.Resolved<ObjectHttpAtomic> => {
            const $Reader = (typia.protobuf.createDecode as any).Reader;
            const $pdo0 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    boolean: undefined as any,
                    bigint: undefined as any,
                    number: undefined as any,
                    string: "" as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            // bool;
                            output.boolean = reader.bool();
                            break;
                        case 2:
                            // int64;
                            output.bigint = reader.int64();
                            break;
                        case 3:
                            // double;
                            output.number = reader.double();
                            break;
                        case 4:
                            // string;
                            output.string = reader.string();
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
