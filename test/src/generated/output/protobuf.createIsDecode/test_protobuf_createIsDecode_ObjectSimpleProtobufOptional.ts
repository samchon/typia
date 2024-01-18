import typia from "typia";

import { _test_protobuf_isDecode } from "../../../internal/_test_protobuf_isDecode";
import { ObjectSimpleProtobufOptional } from "../../../structures/ObjectSimpleProtobufOptional";

export const test_protobuf_createIsDecode_ObjectSimpleProtobufOptional =
  _test_protobuf_isDecode(
    "ObjectSimpleProtobufOptional",
  )<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)({
    decode: (
      input: Uint8Array,
    ): typia.Resolved<ObjectSimpleProtobufOptional> | null => {
      const is = (input: any): input is ObjectSimpleProtobufOptional => {
        const $io0 = (input: any): boolean =>
          (undefined === input.bool || "boolean" === typeof input.bool) &&
          (undefined === input.int32 ||
            ("number" === typeof input.int32 &&
              Math.floor(input.int32) === input.int32 &&
              -2147483648 <= input.int32 &&
              input.int32 <= 2147483647)) &&
          (undefined === input.uint32 ||
            ("number" === typeof input.uint32 &&
              Math.floor(input.uint32) === input.uint32 &&
              0 <= input.uint32 &&
              input.uint32 <= 4294967295)) &&
          (undefined === input.int64 || "bigint" === typeof input.int64) &&
          (undefined === input.uint64 ||
            ("bigint" === typeof input.uint64 && BigInt(0) <= input.uint64)) &&
          (undefined === input.float ||
            ("number" === typeof input.float &&
              -1.175494351e38 <= input.float &&
              input.float <= 3.4028235e38)) &&
          (undefined === input.double ||
            ("number" === typeof input.double &&
              Number.isFinite(input.double) &&
              true)) &&
          (undefined === input.string || "string" === typeof input.string) &&
          (undefined === input.bytes || input.bytes instanceof Uint8Array);
        return (
          "object" === typeof input &&
          null !== input &&
          false === Array.isArray(input) &&
          $io0(input)
        );
      };
      const decode = (
        input: Uint8Array,
      ): typia.Resolved<ObjectSimpleProtobufOptional> => {
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
      };
      const output = decode(input);
      if (!is(output)) return null;
      return output;
    },
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
