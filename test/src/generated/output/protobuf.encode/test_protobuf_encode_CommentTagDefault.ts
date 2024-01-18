import typia from "typia";

import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { CommentTagDefault } from "../../../structures/CommentTagDefault";

export const test_protobuf_createEncode_CommentTagDefault =
  _test_protobuf_encode("CommentTagDefault")<CommentTagDefault>(
    CommentTagDefault,
  )({
    encode: (input) =>
      ((input: CommentTagDefault): Uint8Array => {
        const $throws = require("typia/lib/functional/$throws").$throws(
          "typia.protobuf.encode",
        );
        const $ProtobufSizer =
          require("typia/lib/functional/$ProtobufSizer").$ProtobufSizer;
        const $ProtobufWriter =
          require("typia/lib/functional/$ProtobufWriter").$ProtobufWriter;
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
            if ("boolean" === typeof input.boolean_and_number_and_string) {
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
            if ("boolean" === typeof input.boolean_and_number_and_template) {
              writer.uint32(144);
              writer.bool(input.boolean_and_number_and_template);
            } else if (
              "number" === typeof input.boolean_and_number_and_template
            ) {
              writer.uint32(153);
              writer.double(input.boolean_and_number_and_template);
            } else if (
              "string" === typeof input.boolean_and_number_and_template
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
        const sizer = encoder(new $ProtobufSizer());
        const writer = encoder(new $ProtobufWriter(sizer));
        return writer.buffer();
      })(input),
    decode: (input: Uint8Array): typia.Resolved<CommentTagDefault> => {
      const $ProtobufReader =
        require("typia/lib/functional/$ProtobufReader").$ProtobufReader;
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
        } as any;
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
              output.boolean_and_number_and_string = reader.bool();
              break;
            case 6:
              // double;
              output.boolean_and_number_and_string = reader.double();
              break;
            case 7:
              // string;
              output.boolean_and_number_and_string = reader.string();
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
              output.boolean_and_number_and_template = reader.bool();
              break;
            case 19:
              // double;
              output.boolean_and_number_and_template = reader.double();
              break;
            case 20:
              // string;
              output.boolean_and_number_and_template = reader.string();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return output;
      };
      const reader = new $ProtobufReader(input);
      return $pdo0(reader);
    },
    message:
      'syntax = "proto3";\n\nmessage CommentTagDefault {\n    required bool boolean = 1;\n    required double number = 2;\n    required string string = 3;\n    required string text = 4;\n    oneof boolean_and_number_and_string {\n        bool v5 = 5;\n        double v6 = 6;\n        string v7 = 7;\n    }\n    oneof union_but_boolean {\n        bool v8 = 8;\n        double v9 = 9;\n        string v10 = 10;\n    }\n    oneof union_but_number {\n        bool v11 = 11;\n        double v12 = 12;\n        string v13 = 13;\n    }\n    oneof union_but_string {\n        bool v14 = 14;\n        double v15 = 15;\n        string v16 = 16;\n    }\n    required double vulnerable_range = 17;\n    oneof boolean_and_number_and_template {\n        bool v18 = 18;\n        double v19 = 19;\n        string v20 = 20;\n    }\n}',
  });
