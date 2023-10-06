import typia from "../../../../src";
import { _test_protobuf_assertEncode } from "../../../internal/_test_protobuf_assertEncode";
import { CommentTagDefault } from "../../../structures/CommentTagDefault";

export const test_protobuf_createAssertEncode_CommentTagDefault =
    _test_protobuf_assertEncode("CommentTagDefault")<CommentTagDefault>(
        CommentTagDefault,
    )({
        encode: (input) =>
            ((input: any): Uint8Array => {
                const assert = (input: any): CommentTagDefault => {
                    const __is = (input: any): input is CommentTagDefault => {
                        const $io0 = (input: any): boolean =>
                            "boolean" === typeof input.boolean &&
                            "number" === typeof input.number &&
                            Number.isFinite(input.number) &&
                            "string" === typeof input.string &&
                            "string" === typeof input.text &&
                            ("string" ===
                                typeof input.boolean_and_number_and_string ||
                                ("number" ===
                                    typeof input.boolean_and_number_and_string &&
                                    Number.isFinite(
                                        input.boolean_and_number_and_string,
                                    )) ||
                                "boolean" ===
                                    typeof input.boolean_and_number_and_string) &&
                            ("string" === typeof input.union_but_boolean ||
                                ("number" === typeof input.union_but_boolean &&
                                    Number.isFinite(input.union_but_boolean)) ||
                                "boolean" === typeof input.union_but_boolean) &&
                            ("string" === typeof input.union_but_number ||
                                ("number" === typeof input.union_but_number &&
                                    Number.isFinite(input.union_but_number)) ||
                                "boolean" === typeof input.union_but_number) &&
                            ("string" === typeof input.union_but_string ||
                                ("number" === typeof input.union_but_string &&
                                    Number.isFinite(input.union_but_string)) ||
                                "boolean" === typeof input.union_but_string) &&
                            "number" === typeof input.vulnerable_range &&
                            3 <= input.vulnerable_range &&
                            input.vulnerable_range <= 5 &&
                            null !== input.boolean_and_number_and_template &&
                            undefined !==
                                input.boolean_and_number_and_template &&
                            (("number" ===
                                typeof input.boolean_and_number_and_template &&
                                Number.isFinite(
                                    input.boolean_and_number_and_template,
                                )) ||
                                "boolean" ===
                                    typeof input.boolean_and_number_and_template ||
                                ("string" ===
                                    typeof input.boolean_and_number_and_template &&
                                    RegExp(/^prefix_(.*)/).test(
                                        input.boolean_and_number_and_template,
                                    )));
                        return (
                            "object" === typeof input &&
                            null !== input &&
                            $io0(input)
                        );
                    };
                    if (false === __is(input))
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is CommentTagDefault => {
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
                                    })) &&
                                ("string" === typeof input.text ||
                                    $guard(_exceptionable, {
                                        path: _path + ".text",
                                        expected: "string",
                                        value: input.text,
                                    })) &&
                                ("string" ===
                                    typeof input.boolean_and_number_and_string ||
                                    ("number" ===
                                        typeof input.boolean_and_number_and_string &&
                                        Number.isFinite(
                                            input.boolean_and_number_and_string,
                                        )) ||
                                    "boolean" ===
                                        typeof input.boolean_and_number_and_string ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".boolean_and_number_and_string",
                                        expected: "(boolean | number | string)",
                                        value: input.boolean_and_number_and_string,
                                    })) &&
                                ("string" === typeof input.union_but_boolean ||
                                    ("number" ===
                                        typeof input.union_but_boolean &&
                                        Number.isFinite(
                                            input.union_but_boolean,
                                        )) ||
                                    "boolean" ===
                                        typeof input.union_but_boolean ||
                                    $guard(_exceptionable, {
                                        path: _path + ".union_but_boolean",
                                        expected: "(boolean | number | string)",
                                        value: input.union_but_boolean,
                                    })) &&
                                ("string" === typeof input.union_but_number ||
                                    ("number" ===
                                        typeof input.union_but_number &&
                                        Number.isFinite(
                                            input.union_but_number,
                                        )) ||
                                    "boolean" ===
                                        typeof input.union_but_number ||
                                    $guard(_exceptionable, {
                                        path: _path + ".union_but_number",
                                        expected: "(boolean | number | string)",
                                        value: input.union_but_number,
                                    })) &&
                                ("string" === typeof input.union_but_string ||
                                    ("number" ===
                                        typeof input.union_but_string &&
                                        Number.isFinite(
                                            input.union_but_string,
                                        )) ||
                                    "boolean" ===
                                        typeof input.union_but_string ||
                                    $guard(_exceptionable, {
                                        path: _path + ".union_but_string",
                                        expected: "(boolean | number | string)",
                                        value: input.union_but_string,
                                    })) &&
                                (("number" === typeof input.vulnerable_range &&
                                    (3 <= input.vulnerable_range ||
                                        $guard(_exceptionable, {
                                            path: _path + ".vulnerable_range",
                                            expected: "number & Minimum<3>",
                                            value: input.vulnerable_range,
                                        })) &&
                                    (input.vulnerable_range <= 5 ||
                                        $guard(_exceptionable, {
                                            path: _path + ".vulnerable_range",
                                            expected: "number & Maximum<5>",
                                            value: input.vulnerable_range,
                                        }))) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".vulnerable_range",
                                        expected:
                                            "(number & Minimum<3> & Maximum<5>)",
                                        value: input.vulnerable_range,
                                    })) &&
                                (null !==
                                    input.boolean_and_number_and_template ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".boolean_and_number_and_template",
                                        expected:
                                            "(`prefix_${string}` | boolean | number)",
                                        value: input.boolean_and_number_and_template,
                                    })) &&
                                (undefined !==
                                    input.boolean_and_number_and_template ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".boolean_and_number_and_template",
                                        expected:
                                            "(`prefix_${string}` | boolean | number)",
                                        value: input.boolean_and_number_and_template,
                                    })) &&
                                (("number" ===
                                    typeof input.boolean_and_number_and_template &&
                                    Number.isFinite(
                                        input.boolean_and_number_and_template,
                                    )) ||
                                    "boolean" ===
                                        typeof input.boolean_and_number_and_template ||
                                    ("string" ===
                                        typeof input.boolean_and_number_and_template &&
                                        RegExp(/^prefix_(.*)/).test(
                                            input.boolean_and_number_and_template,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".boolean_and_number_and_template",
                                        expected:
                                            "(`prefix_${string}` | boolean | number)",
                                        value: input.boolean_and_number_and_template,
                                    }));
                            return (
                                ((("object" === typeof input &&
                                    null !== input) ||
                                    $guard(true, {
                                        path: _path + "",
                                        expected: "CommentTagDefault",
                                        value: input,
                                    })) &&
                                    $ao0(input, _path + "", true)) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "CommentTagDefault",
                                    value: input,
                                })
                            );
                        })(input, "$input", true);
                    return input;
                };
                const encode = (input: CommentTagDefault): Uint8Array => {
                    const $throws = (typia.protobuf.assertEncode as any).throws;
                    const $Sizer = (typia.protobuf.assertEncode as any).Sizer;
                    const $Writer = (typia.protobuf.assertEncode as any).Writer;
                    const encoder = (writer: any): any => {
                        const $peo0 = (input: any): any => {
                            // property "boolean";
                            writer.uint32(8);
                            writer.bool(input.boolean);
                            // property "number";
                            writer.uint32(17);
                            writer.double(input.number);
                            // property "string";
                            writer.uint32(26);
                            writer.string(input.string);
                            // property "text";
                            writer.uint32(34);
                            writer.string(input.text);
                            // property "boolean_and_number_and_string";
                            if (
                                "boolean" ===
                                typeof input.boolean_and_number_and_string
                            ) {
                                writer.uint32(40);
                                writer.bool(
                                    input.boolean_and_number_and_string,
                                );
                            } else if (
                                "number" ===
                                typeof input.boolean_and_number_and_string
                            ) {
                                writer.uint32(49);
                                writer.double(
                                    input.boolean_and_number_and_string,
                                );
                            } else if (
                                "string" ===
                                typeof input.boolean_and_number_and_string
                            ) {
                                writer.uint32(58);
                                writer.string(
                                    input.boolean_and_number_and_string,
                                );
                            } else
                                $throws({
                                    expected: "(boolean | number | string)",
                                    value: input.boolean_and_number_and_string,
                                });
                            // property "union_but_boolean";
                            if ("boolean" === typeof input.union_but_boolean) {
                                writer.uint32(64);
                                writer.bool(input.union_but_boolean);
                            } else if (
                                "number" === typeof input.union_but_boolean
                            ) {
                                writer.uint32(73);
                                writer.double(input.union_but_boolean);
                            } else if (
                                "string" === typeof input.union_but_boolean
                            ) {
                                writer.uint32(82);
                                writer.string(input.union_but_boolean);
                            } else
                                $throws({
                                    expected: "(boolean | number | string)",
                                    value: input.union_but_boolean,
                                });
                            // property "union_but_number";
                            if ("boolean" === typeof input.union_but_number) {
                                writer.uint32(88);
                                writer.bool(input.union_but_number);
                            } else if (
                                "number" === typeof input.union_but_number
                            ) {
                                writer.uint32(97);
                                writer.double(input.union_but_number);
                            } else if (
                                "string" === typeof input.union_but_number
                            ) {
                                writer.uint32(106);
                                writer.string(input.union_but_number);
                            } else
                                $throws({
                                    expected: "(boolean | number | string)",
                                    value: input.union_but_number,
                                });
                            // property "union_but_string";
                            if ("boolean" === typeof input.union_but_string) {
                                writer.uint32(112);
                                writer.bool(input.union_but_string);
                            } else if (
                                "number" === typeof input.union_but_string
                            ) {
                                writer.uint32(121);
                                writer.double(input.union_but_string);
                            } else if (
                                "string" === typeof input.union_but_string
                            ) {
                                writer.uint32(130);
                                writer.string(input.union_but_string);
                            } else
                                $throws({
                                    expected: "(boolean | number | string)",
                                    value: input.union_but_string,
                                });
                            // property "vulnerable_range";
                            writer.uint32(137);
                            writer.double(input.vulnerable_range);
                            // property "boolean_and_number_and_template";
                            if (
                                "boolean" ===
                                typeof input.boolean_and_number_and_template
                            ) {
                                writer.uint32(144);
                                writer.bool(
                                    input.boolean_and_number_and_template,
                                );
                            } else if (
                                "number" ===
                                typeof input.boolean_and_number_and_template
                            ) {
                                writer.uint32(153);
                                writer.double(
                                    input.boolean_and_number_and_template,
                                );
                            } else if (
                                "string" ===
                                typeof input.boolean_and_number_and_template
                            ) {
                                writer.uint32(162);
                                writer.string(
                                    input.boolean_and_number_and_template,
                                );
                            } else
                                $throws({
                                    expected:
                                        "(`prefix_${string}` | boolean | number)",
                                    value: input.boolean_and_number_and_template,
                                });
                        };
                        //CommentTagDefault;
                        $peo0(input);
                        return writer;
                    };
                    const sizer = encoder(new $Sizer());
                    const writer = encoder(new $Writer(sizer));
                    return writer.buffer();
                };
                return encode(assert(input));
            })(input),
        decode: (input: Uint8Array): typia.Resolved<CommentTagDefault> => {
            const $Reader = (typia.protobuf.createDecode as any).Reader;
            const $pdo0 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    boolean: undefined as any,
                    number: undefined as any,
                    string: "" as any,
                    text: "" as any,
                    boolean_and_number_and_string: "" as any,
                    union_but_boolean: "" as any,
                    union_but_number: "" as any,
                    union_but_string: "" as any,
                    vulnerable_range: undefined as any,
                    boolean_and_number_and_template: undefined as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            // bool;
                            output.boolean = reader.bool();
                            break;
                        case 2:
                            // double;
                            output.number = reader.double();
                            break;
                        case 3:
                            // string;
                            output.string = reader.string();
                            break;
                        case 4:
                            // string;
                            output.text = reader.string();
                            break;
                        case 5:
                            // bool;
                            output.boolean_and_number_and_string =
                                reader.bool();
                            break;
                        case 6:
                            // double;
                            output.boolean_and_number_and_string =
                                reader.double();
                            break;
                        case 7:
                            // string;
                            output.boolean_and_number_and_string =
                                reader.string();
                            break;
                        case 8:
                            // bool;
                            output.union_but_boolean = reader.bool();
                            break;
                        case 9:
                            // double;
                            output.union_but_boolean = reader.double();
                            break;
                        case 10:
                            // string;
                            output.union_but_boolean = reader.string();
                            break;
                        case 11:
                            // bool;
                            output.union_but_number = reader.bool();
                            break;
                        case 12:
                            // double;
                            output.union_but_number = reader.double();
                            break;
                        case 13:
                            // string;
                            output.union_but_number = reader.string();
                            break;
                        case 14:
                            // bool;
                            output.union_but_string = reader.bool();
                            break;
                        case 15:
                            // double;
                            output.union_but_string = reader.double();
                            break;
                        case 16:
                            // string;
                            output.union_but_string = reader.string();
                            break;
                        case 17:
                            // double;
                            output.vulnerable_range = reader.double();
                            break;
                        case 18:
                            // bool;
                            output.boolean_and_number_and_template =
                                reader.bool();
                            break;
                        case 19:
                            // double;
                            output.boolean_and_number_and_template =
                                reader.double();
                            break;
                        case 20:
                            // string;
                            output.boolean_and_number_and_template =
                                reader.string();
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
        message:
            'syntax = "proto3";\n\nmessage CommentTagDefault {\n    required bool boolean = 1;\n    required double number = 2;\n    required string string = 3;\n    required string text = 4;\n    oneof boolean_and_number_and_string {\n        bool v5 = 5;\n        double v6 = 6;\n        string v7 = 7;\n    }\n    oneof union_but_boolean {\n        bool v8 = 8;\n        double v9 = 9;\n        string v10 = 10;\n    }\n    oneof union_but_number {\n        bool v11 = 11;\n        double v12 = 12;\n        string v13 = 13;\n    }\n    oneof union_but_string {\n        bool v14 = 14;\n        double v15 = 15;\n        string v16 = 16;\n    }\n    required double vulnerable_range = 17;\n    oneof boolean_and_number_and_template {\n        bool v18 = 18;\n        double v19 = 19;\n        string v20 = 20;\n    }\n}',
    });
