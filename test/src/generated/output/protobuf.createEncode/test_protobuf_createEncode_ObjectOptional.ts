import typia from "typia";

import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_protobuf_createEncode_ObjectOptional = _test_protobuf_encode(
  "ObjectOptional",
)<ObjectOptional>(ObjectOptional)({
  encode: (input: ObjectOptional): Uint8Array => {
    // @ts-ignore;
    declare const require: (lib: string) => any;
    const $ProtobufSizer =
      require("typia/lib/functional/$ProtobufSizer").$ProtobufSizer;
    const $ProtobufWriter =
      require("typia/lib/functional/$ProtobufWriter").$ProtobufWriter;
    const encoder = (writer: any): any => {
      const $peo0 = (input: any): any => {
        // property "id";
        if (undefined !== input.id) {
          writer.uint32(10);
          writer.string(input.id);
        }
        // property "name";
        if (undefined !== input.name) {
          writer.uint32(18);
          writer.string(input.name);
        }
        // property "email";
        if (undefined !== input.email) {
          writer.uint32(26);
          writer.string(input.email);
        }
        // property "sequence";
        if (undefined !== input.sequence) {
          writer.uint32(33);
          writer.double(input.sequence);
        }
      };
      //ObjectOptional;
      $peo0(input);
      return writer;
    };
    const sizer = encoder(new $ProtobufSizer());
    const writer = encoder(new $ProtobufWriter(sizer));
    return writer.buffer();
  },
  decode: (input: Uint8Array): typia.Resolved<ObjectOptional> => {
    // @ts-ignore;
    declare const require: (lib: string) => any;
    const $ProtobufReader =
      require("typia/lib/functional/$ProtobufReader").$ProtobufReader;
    const $pdo0 = (reader: any, length: number = -1): any => {
      length = length < 0 ? reader.size() : reader.index() + length;
      const output = {} as any;
      while (reader.index() < length) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            // string;
            output.id = reader.string();
            break;
          case 2:
            // string;
            output.name = reader.string();
            break;
          case 3:
            // string;
            output.email = reader.string();
            break;
          case 4:
            // double;
            output.sequence = reader.double();
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
    'syntax = "proto3";\n\nmessage ObjectOptional {\n    optional string id = 1;\n    optional string name = 2;\n    optional string email = 3;\n    optional double sequence = 4;\n}',
});
