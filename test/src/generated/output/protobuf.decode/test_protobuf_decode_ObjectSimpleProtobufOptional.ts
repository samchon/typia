import typia from "typia";

import { _test_protobuf_decode } from "../../../internal/_test_protobuf_decode";
import { ObjectSimpleProtobufOptional } from "../../../structures/ObjectSimpleProtobufOptional";

export const test_protobuf_createDecode_ObjectSimpleProtobufOptional =
  _test_protobuf_decode(
    "ObjectSimpleProtobufOptional",
  )<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)({
    decode: (input) =>
      ((input: Uint8Array): typia.Resolved<ObjectSimpleProtobufOptional> => {
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
                // bool;
                output.bool = reader.bool();
                break;
              case 2:
                // int32;
                output.int32 = reader.int32();
                break;
              case 3:
                // uint32;
                output.uint32 = reader.uint32();
                break;
              case 4:
                // int64;
                output.int64 = reader.int64();
                break;
              case 5:
                // uint64;
                output.uint64 = reader.uint64();
                break;
              case 6:
                // float;
                output.float = reader.float();
                break;
              case 7:
                // double;
                output.double = reader.double();
                break;
              case 8:
                // string;
                output.string = reader.string();
                break;
              case 9:
                // bytes;
                output.bytes = reader.bytes();
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
      })(input),
    encode: (input: ObjectSimpleProtobufOptional): Uint8Array => {
      // @ts-ignore;
      declare const require: (lib: string) => any;
      const $ProtobufSizer =
        require("typia/lib/functional/$ProtobufSizer").$ProtobufSizer;
      const $ProtobufWriter =
        require("typia/lib/functional/$ProtobufWriter").$ProtobufWriter;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "bool";
          if (undefined !== input.bool) {
            writer.uint32(8);
            writer.bool(input.bool);
          }
          // property "int32";
          if (undefined !== input.int32) {
            writer.uint32(16);
            writer.int32(input.int32);
          }
          // property "uint32";
          if (undefined !== input.uint32) {
            writer.uint32(24);
            writer.uint32(input.uint32);
          }
          // property "int64";
          if (undefined !== input.int64) {
            writer.uint32(32);
            writer.int64(input.int64);
          }
          // property "uint64";
          if (undefined !== input.uint64) {
            writer.uint32(40);
            writer.uint64(input.uint64);
          }
          // property "float";
          if (undefined !== input.float) {
            writer.uint32(53);
            writer.float(input.float);
          }
          // property "double";
          if (undefined !== input.double) {
            writer.uint32(57);
            writer.double(input.double);
          }
          // property "string";
          if (undefined !== input.string) {
            writer.uint32(66);
            writer.string(input.string);
          }
          // property "bytes";
          if (undefined !== input.bytes) {
            writer.uint32(74);
            writer.bytes(input.bytes);
          }
        };
        //ObjectSimpleProtobufOptional;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $ProtobufSizer());
      const writer = encoder(new $ProtobufWriter(sizer));
      return writer.buffer();
    },
  });
