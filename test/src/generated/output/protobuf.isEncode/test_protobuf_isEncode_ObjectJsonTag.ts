import typia from "typia";

import { _test_protobuf_isEncode } from "../../../internal/_test_protobuf_isEncode";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_protobuf_createIsEncode_ObjectJsonTag =
  _test_protobuf_isEncode("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)({
    encode: (input) =>
      ((input: ObjectJsonTag): Uint8Array | null => {
        const is = (input: any): input is ObjectJsonTag => {
          return (
            "object" === typeof input &&
            null !== input &&
            "string" === typeof (input as any).vulnerable &&
            "string" === typeof (input as any).description &&
            "string" === typeof (input as any).title &&
            "string" === typeof (input as any).complicate_title
          );
        };
        const encode = (input: ObjectJsonTag): Uint8Array => {
          const $ProtobufSizer =
            require("typia/lib/functional/$ProtobufSizer").$ProtobufSizer;
          const $ProtobufWriter =
            require("typia/lib/functional/$ProtobufWriter").$ProtobufWriter;
          const encoder = (writer: any): any => {
            const $peo0 = (input: any): any => {
              // property "vulnerable";
              writer.uint32(10);
              writer.string(input.vulnerable);
              // property "description";
              writer.uint32(18);
              writer.string(input.description);
              // property "title";
              writer.uint32(26);
              writer.string(input.title);
              // property "complicate_title";
              writer.uint32(34);
              writer.string(input.complicate_title);
            };
            //ObjectJsonTag;
            $peo0(input);
            return writer;
          };
          const sizer = encoder(new $ProtobufSizer());
          const writer = encoder(new $ProtobufWriter(sizer));
          return writer.buffer();
        };
        return is(input) ? encode(input) : null;
      })(input),
    decode: (input: Uint8Array): typia.Resolved<ObjectJsonTag> => {
      const $ProtobufReader =
        require("typia/lib/functional/$ProtobufReader").$ProtobufReader;
      const $pdo0 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          vulnerable: "" as any,
          description: "" as any,
          title: "" as any,
          complicate_title: "" as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // string;
              output.vulnerable = reader.string();
              break;
            case 2:
              // string;
              output.description = reader.string();
              break;
            case 3:
              // string;
              output.title = reader.string();
              break;
            case 4:
              // string;
              output.complicate_title = reader.string();
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
      'syntax = "proto3";\n\nmessage ObjectJsonTag {\n    required string vulnerable = 1;\n    required string description = 2;\n    required string title = 3;\n    required string complicate_title = 4;\n}',
  });
