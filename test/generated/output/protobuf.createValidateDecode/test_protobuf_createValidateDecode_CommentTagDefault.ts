import typia from "../../../../src";
import { _test_protobuf_validateDecode } from "../../../internal/_test_protobuf_validateDecode";
import { CommentTagDefault } from "../../../structures/CommentTagDefault";

export const test_protobuf_createValidateDecode_CommentTagDefault =
    _test_protobuf_validateDecode("CommentTagDefault")<CommentTagDefault>(
        CommentTagDefault,
    )({
        validateDecode: (
            input: Uint8Array,
        ): typia.IValidation<typia.Resolved<CommentTagDefault>> => {
            const validate = (
                input: any,
            ): typia.IValidation<CommentTagDefault> => {
                const errors = [] as any[];
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
                        undefined !== input.boolean_and_number_and_template &&
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
                if (false === __is(input)) {
                    const $report = (
                        typia.protobuf.createValidateDecode as any
                    ).report(errors);
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is CommentTagDefault => {
                        const $vo0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "boolean" === typeof input.boolean ||
                                    $report(_exceptionable, {
                                        path: _path + ".boolean",
                                        expected: "boolean",
                                        value: input.boolean,
                                    }),
                                ("number" === typeof input.number &&
                                    Number.isFinite(input.number)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".number",
                                        expected: "number",
                                        value: input.number,
                                    }),
                                "string" === typeof input.string ||
                                    $report(_exceptionable, {
                                        path: _path + ".string",
                                        expected: "string",
                                        value: input.string,
                                    }),
                                "string" === typeof input.text ||
                                    $report(_exceptionable, {
                                        path: _path + ".text",
                                        expected: "string",
                                        value: input.text,
                                    }),
                                "string" ===
                                    typeof input.boolean_and_number_and_string ||
                                    ("number" ===
                                        typeof input.boolean_and_number_and_string &&
                                        Number.isFinite(
                                            input.boolean_and_number_and_string,
                                        )) ||
                                    "boolean" ===
                                        typeof input.boolean_and_number_and_string ||
                                    $report(_exceptionable, {
                                        path:
                                            _path +
                                            ".boolean_and_number_and_string",
                                        expected: "(boolean | number | string)",
                                        value: input.boolean_and_number_and_string,
                                    }),
                                "string" === typeof input.union_but_boolean ||
                                    ("number" ===
                                        typeof input.union_but_boolean &&
                                        Number.isFinite(
                                            input.union_but_boolean,
                                        )) ||
                                    "boolean" ===
                                        typeof input.union_but_boolean ||
                                    $report(_exceptionable, {
                                        path: _path + ".union_but_boolean",
                                        expected: "(boolean | number | string)",
                                        value: input.union_but_boolean,
                                    }),
                                "string" === typeof input.union_but_number ||
                                    ("number" ===
                                        typeof input.union_but_number &&
                                        Number.isFinite(
                                            input.union_but_number,
                                        )) ||
                                    "boolean" ===
                                        typeof input.union_but_number ||
                                    $report(_exceptionable, {
                                        path: _path + ".union_but_number",
                                        expected: "(boolean | number | string)",
                                        value: input.union_but_number,
                                    }),
                                "string" === typeof input.union_but_string ||
                                    ("number" ===
                                        typeof input.union_but_string &&
                                        Number.isFinite(
                                            input.union_but_string,
                                        )) ||
                                    "boolean" ===
                                        typeof input.union_but_string ||
                                    $report(_exceptionable, {
                                        path: _path + ".union_but_string",
                                        expected: "(boolean | number | string)",
                                        value: input.union_but_string,
                                    }),
                                ("number" === typeof input.vulnerable_range &&
                                    (3 <= input.vulnerable_range ||
                                        $report(_exceptionable, {
                                            path: _path + ".vulnerable_range",
                                            expected: "number & Minimum<3>",
                                            value: input.vulnerable_range,
                                        })) &&
                                    (input.vulnerable_range <= 5 ||
                                        $report(_exceptionable, {
                                            path: _path + ".vulnerable_range",
                                            expected: "number & Maximum<5>",
                                            value: input.vulnerable_range,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".vulnerable_range",
                                        expected:
                                            "(number & Minimum<3> & Maximum<5>)",
                                        value: input.vulnerable_range,
                                    }),
                                (null !==
                                    input.boolean_and_number_and_template ||
                                    $report(_exceptionable, {
                                        path:
                                            _path +
                                            ".boolean_and_number_and_template",
                                        expected:
                                            "(`prefix_${string}` | boolean | number)",
                                        value: input.boolean_and_number_and_template,
                                    })) &&
                                    (undefined !==
                                        input.boolean_and_number_and_template ||
                                        $report(_exceptionable, {
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
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".boolean_and_number_and_template",
                                            expected:
                                                "(`prefix_${string}` | boolean | number)",
                                            value: input.boolean_and_number_and_template,
                                        })),
                            ].every((flag: boolean) => flag);
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "CommentTagDefault",
                                    value: input,
                                })) &&
                                $vo0(input, _path + "", true)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "CommentTagDefault",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                }
                const success = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const decode = (
                input: Uint8Array,
            ): typia.Resolved<CommentTagDefault> => {
                const $Reader = (typia.protobuf.createValidateDecode as any)
                    .Reader;
                const $pdo0 = (reader: any, length: number = -1): any => {
                    length =
                        length < 0 ? reader.size() : reader.index() + length;
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
            };
            const output = decode(input);
            return validate(output) as any;
        },
        encode: (input: CommentTagDefault): Uint8Array => {
            const $throws = (typia.protobuf.createEncode as any).throws;
            const $Sizer = (typia.protobuf.createEncode as any).Sizer;
            const $Writer = (typia.protobuf.createEncode as any).Writer;
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
                        "boolean" === typeof input.boolean_and_number_and_string
                    ) {
                        writer.uint32(40);
                        writer.bool(input.boolean_and_number_and_string);
                    } else if (
                        "number" === typeof input.boolean_and_number_and_string
                    ) {
                        writer.uint32(49);
                        writer.double(input.boolean_and_number_and_string);
                    } else if (
                        "string" === typeof input.boolean_and_number_and_string
                    ) {
                        writer.uint32(58);
                        writer.string(input.boolean_and_number_and_string);
                    } else
                        $throws({
                            expected: "(boolean | number | string)",
                            value: input.boolean_and_number_and_string,
                        });
                    // property "union_but_boolean";
                    if ("boolean" === typeof input.union_but_boolean) {
                        writer.uint32(64);
                        writer.bool(input.union_but_boolean);
                    } else if ("number" === typeof input.union_but_boolean) {
                        writer.uint32(73);
                        writer.double(input.union_but_boolean);
                    } else if ("string" === typeof input.union_but_boolean) {
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
                    } else if ("number" === typeof input.union_but_number) {
                        writer.uint32(97);
                        writer.double(input.union_but_number);
                    } else if ("string" === typeof input.union_but_number) {
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
                    } else if ("number" === typeof input.union_but_string) {
                        writer.uint32(121);
                        writer.double(input.union_but_string);
                    } else if ("string" === typeof input.union_but_string) {
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
                        writer.bool(input.boolean_and_number_and_template);
                    } else if (
                        "number" ===
                        typeof input.boolean_and_number_and_template
                    ) {
                        writer.uint32(153);
                        writer.double(input.boolean_and_number_and_template);
                    } else if (
                        "string" ===
                        typeof input.boolean_and_number_and_template
                    ) {
                        writer.uint32(162);
                        writer.string(input.boolean_and_number_and_template);
                    } else
                        $throws({
                            expected: "(`prefix_${string}` | boolean | number)",
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
        },
    });
