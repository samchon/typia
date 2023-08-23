import typia from "../../../../src";
import { _test_protobuf_assertDecode } from "../../../internal/_test_protobuf_assertDecode";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_protobuf_assertDecode_ObjectIntersection =
    _test_protobuf_assertDecode("ObjectIntersection")<ObjectIntersection>(
        ObjectIntersection,
    )({
        assertDecode: (input) =>
            ((input: Uint8Array): ObjectIntersection => {
                const decode = (input: Uint8Array): ObjectIntersection => {
                    const $Reader = (typia.protobuf.assertDecode as any).Reader;
                    const $pdo0 = (reader: any, length: number = -1): any => {
                        length =
                            length < 0
                                ? reader.size()
                                : reader.index() + length;
                        const output = {
                            email: "" as any,
                            name: "" as any,
                            vulnerable: undefined as any,
                        };
                        while (reader.index() < length) {
                            const tag = reader.uint32();
                            switch (tag >>> 3) {
                                case 1:
                                    // string;
                                    output.email = reader.string();
                                    break;
                                case 2:
                                    // string;
                                    output.name = reader.string();
                                    break;
                                case 3:
                                    // boolean;
                                    output.vulnerable = reader.bool();
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
                const assert = (input: any): ObjectIntersection => {
                    const __is = (input: any): input is ObjectIntersection => {
                        return (
                            "object" === typeof input &&
                            null !== input &&
                            "string" === typeof (input as any).email &&
                            "string" === typeof (input as any).name &&
                            "boolean" === typeof (input as any).vulnerable
                        );
                    };
                    if (false === __is(input))
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is ObjectIntersection => {
                            const $guard = (typia.protobuf.assertDecode as any)
                                .guard;
                            const $ao0 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                ("string" === typeof input.email ||
                                    $guard(_exceptionable, {
                                        path: _path + ".email",
                                        expected: "string",
                                        value: input.email,
                                    })) &&
                                ("string" === typeof input.name ||
                                    $guard(_exceptionable, {
                                        path: _path + ".name",
                                        expected: "string",
                                        value: input.name,
                                    })) &&
                                ("boolean" === typeof input.vulnerable ||
                                    $guard(_exceptionable, {
                                        path: _path + ".vulnerable",
                                        expected: "boolean",
                                        value: input.vulnerable,
                                    }));
                            return (
                                ((("object" === typeof input &&
                                    null !== input) ||
                                    $guard(true, {
                                        path: _path + "",
                                        expected: "ObjectIntersection",
                                        value: input,
                                    })) &&
                                    $ao0(input, _path + "", true)) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "ObjectIntersection",
                                    value: input,
                                })
                            );
                        })(input, "$input", true);
                    return input;
                };
                const output = decode(input);
                return assert(output);
            })(input),
        encode: (input: ObjectIntersection): Uint8Array => {
            const $Sizer = (typia.protobuf.createEncode as any).Sizer;
            const $Writer = (typia.protobuf.createEncode as any).Writer;
            const encoder = (writer: any): any => {
                const $peo0 = (input: any): any => {
                    // property "email";
                    writer.uint32(10);
                    writer.string(input.email);
                    // property "name";
                    writer.uint32(18);
                    writer.string(input.name);
                    // property "vulnerable";
                    writer.uint32(24);
                    writer.bool(input.vulnerable);
                };
                //ObjectIntersection;
                $peo0(input);
                return writer;
            };
            const sizer = encoder(new $Sizer());
            const writer = encoder(new $Writer(sizer));
            return writer.buffer();
        },
    });
