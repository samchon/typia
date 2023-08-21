import typia from "../../../../src";
import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { TagDefault } from "../../../structures/TagDefault";

export const test_protobuf_encode_TagDefault = _test_protobuf_encode(
    "TagDefault",
)<TagDefault>(TagDefault)({
    encode: (input: TagDefault): Uint8Array => {
        const $throws = (typia.protobuf.createEncode as any).throws;
        const $is_custom = (typia.protobuf.createEncode as any).is_custom;
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
                // property "template";
                writer.uint32(42);
                writer.string(input.template);
                // property "boolean_and_number_and_string";
                if ("boolean" === typeof input.boolean_and_number_and_string) {
                    writer.uint32(48);
                    writer.bool(input.boolean_and_number_and_string);
                } else if (
                    "number" === typeof input.boolean_and_number_and_string
                ) {
                    writer.uint32(57);
                    writer.double(input.boolean_and_number_and_string);
                } else if (
                    "string" === typeof input.boolean_and_number_and_string
                ) {
                    writer.uint32(66);
                    writer.string(input.boolean_and_number_and_string);
                } else
                    $throws({
                        expected: "(boolean | number | string)",
                        value: input.boolean_and_number_and_string,
                    });
                // property "union_but_boolean";
                if ("boolean" === typeof input.union_but_boolean) {
                    writer.uint32(72);
                    writer.bool(input.union_but_boolean);
                } else if ("number" === typeof input.union_but_boolean) {
                    writer.uint32(81);
                    writer.double(input.union_but_boolean);
                } else if ("string" === typeof input.union_but_boolean) {
                    writer.uint32(90);
                    writer.string(input.union_but_boolean);
                } else
                    $throws({
                        expected: "(boolean | number | string)",
                        value: input.union_but_boolean,
                    });
                // property "union_but_number";
                if ("boolean" === typeof input.union_but_number) {
                    writer.uint32(96);
                    writer.bool(input.union_but_number);
                } else if ("number" === typeof input.union_but_number) {
                    writer.uint32(105);
                    writer.double(input.union_but_number);
                } else if ("string" === typeof input.union_but_number) {
                    writer.uint32(114);
                    writer.string(input.union_but_number);
                } else
                    $throws({
                        expected: "(boolean | number | string)",
                        value: input.union_but_number,
                    });
                // property "union_but_string";
                if ("boolean" === typeof input.union_but_string) {
                    writer.uint32(120);
                    writer.bool(input.union_but_string);
                } else if ("number" === typeof input.union_but_string) {
                    writer.uint32(129);
                    writer.double(input.union_but_string);
                } else if ("string" === typeof input.union_but_string) {
                    writer.uint32(138);
                    writer.string(input.union_but_string);
                } else
                    $throws({
                        expected: "(boolean | number | string)",
                        value: input.union_but_string,
                    });
                // property "vulnerable_range";
                writer.uint32(145);
                writer.double(input.vulnerable_range);
                // property "vulnerable_template";
                writer.uint32(154);
                writer.string(input.vulnerable_template);
                // property "boolean_and_number_and_template";
                if (
                    "boolean" === typeof input.boolean_and_number_and_template
                ) {
                    writer.uint32(160);
                    writer.bool(input.boolean_and_number_and_template);
                } else if (
                    "number" === typeof input.boolean_and_number_and_template
                ) {
                    writer.uint32(169);
                    writer.double(input.boolean_and_number_and_template);
                } else if (
                    "string" === typeof input.boolean_and_number_and_template
                ) {
                    writer.uint32(178);
                    writer.string(input.boolean_and_number_and_template);
                } else
                    $throws({
                        expected: "(`prefix_${string}` | boolean | number)",
                        value: input.boolean_and_number_and_template,
                    });
            };
            $peo0(input);
            return writer;
        };
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
    },
    message:
        'syntax = "proto3";\n\nmessage TagDefault {\n    required bool boolean = 1;\n    required double number = 2;\n    required string string = 3;\n    required string text = 4;\n    required string template = 5;\n    oneof boolean_and_number_and_string {\n        bool v6 = 6;\n        double v7 = 7;\n        string v8 = 8;\n    }\n    oneof union_but_boolean {\n        bool v9 = 9;\n        double v10 = 10;\n        string v11 = 11;\n    }\n    oneof union_but_number {\n        bool v12 = 12;\n        double v13 = 13;\n        string v14 = 14;\n    }\n    oneof union_but_string {\n        bool v15 = 15;\n        double v16 = 16;\n        string v17 = 17;\n    }\n    required double vulnerable_range = 18;\n    required string vulnerable_template = 19;\n    oneof boolean_and_number_and_template {\n        bool v20 = 20;\n        double v21 = 21;\n        string v22 = 22;\n    }\n}',
});
