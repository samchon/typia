import typia from "typia";

import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { TypeTagRangeBigInt } from "../../../structures/TypeTagRangeBigInt";

export const test_protobuf_createEncode_TypeTagRangeBigInt =
  _test_protobuf_encode("TypeTagRangeBigInt")<TypeTagRangeBigInt>(
    TypeTagRangeBigInt,
  )({
    encode: (input: TypeTagRangeBigInt): Uint8Array => {
      // @ts-ignore;
      declare const require: (lib: string) => any;
      const $ProtobufSizer =
        require("typia/lib/functional/$ProtobufSizer").$ProtobufSizer;
      const $ProtobufWriter =
        require("typia/lib/functional/$ProtobufWriter").$ProtobufWriter;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "value";
          if (0 !== input.value.length) {
            for (const elem of input.value) {
              // 1 -> TypeTagRangeBigInt.Type;
              writer.uint32(10);
              writer.fork();
              $peo1(elem);
              writer.ldelim();
            }
          }
        };
        const $peo1 = (input: any): any => {
          // property "greater";
          writer.uint32(8);
          writer.int64(input.greater);
          // property "greater_equal";
          writer.uint32(16);
          writer.int64(input.greater_equal);
          // property "less";
          writer.uint32(24);
          writer.int64(input.less);
          // property "less_equal";
          writer.uint32(32);
          writer.int64(input.less_equal);
          // property "greater_less";
          writer.uint32(40);
          writer.int64(input.greater_less);
          // property "greater_equal_less";
          writer.uint32(48);
          writer.int64(input.greater_equal_less);
          // property "greater_less_equal";
          writer.uint32(56);
          writer.int64(input.greater_less_equal);
          // property "greater_equal_less_equal";
          writer.uint32(64);
          writer.int64(input.greater_equal_less_equal);
          // property "equal";
          writer.uint32(72);
          writer.int64(input.equal);
        };
        const $io1 = (input: any): boolean =>
          "bigint" === typeof input.greater &&
          BigInt(3) < input.greater &&
          "bigint" === typeof input.greater_equal &&
          BigInt(3) <= input.greater_equal &&
          "bigint" === typeof input.less &&
          input.less < BigInt(7) &&
          "bigint" === typeof input.less_equal &&
          input.less_equal <= BigInt(7) &&
          "bigint" === typeof input.greater_less &&
          BigInt(3) < input.greater_less &&
          input.greater_less < BigInt(7) &&
          "bigint" === typeof input.greater_equal_less &&
          BigInt(3) <= input.greater_equal_less &&
          input.greater_equal_less < BigInt(7) &&
          "bigint" === typeof input.greater_less_equal &&
          BigInt(3) < input.greater_less_equal &&
          input.greater_less_equal <= BigInt(7) &&
          "bigint" === typeof input.greater_equal_less_equal &&
          BigInt(3) <= input.greater_equal_less_equal &&
          input.greater_equal_less_equal <= BigInt(7) &&
          "bigint" === typeof input.equal &&
          BigInt(10) <= input.equal &&
          input.equal <= BigInt(10);
        //TypeTagRangeBigInt;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $ProtobufSizer());
      const writer = encoder(new $ProtobufWriter(sizer));
      return writer.buffer();
    },
    decode: (input: Uint8Array): typia.Resolved<TypeTagRangeBigInt> => {
      // @ts-ignore;
      declare const require: (lib: string) => any;
      const $ProtobufReader =
        require("typia/lib/functional/$ProtobufReader").$ProtobufReader;
      const $pdo0 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          value: [] as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // type: Array<TypeTagRangeBigInt.Type>;
              output.value.push($pdo1(reader, reader.uint32()));
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return output;
      };
      const $pdo1 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          greater: undefined as any,
          greater_equal: undefined as any,
          less: undefined as any,
          less_equal: undefined as any,
          greater_less: undefined as any,
          greater_equal_less: undefined as any,
          greater_less_equal: undefined as any,
          greater_equal_less_equal: undefined as any,
          equal: undefined as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // int64;
              output.greater = reader.int64();
              break;
            case 2:
              // int64;
              output.greater_equal = reader.int64();
              break;
            case 3:
              // int64;
              output.less = reader.int64();
              break;
            case 4:
              // int64;
              output.less_equal = reader.int64();
              break;
            case 5:
              // int64;
              output.greater_less = reader.int64();
              break;
            case 6:
              // int64;
              output.greater_equal_less = reader.int64();
              break;
            case 7:
              // int64;
              output.greater_less_equal = reader.int64();
              break;
            case 8:
              // int64;
              output.greater_equal_less_equal = reader.int64();
              break;
            case 9:
              // int64;
              output.equal = reader.int64();
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
      'syntax = "proto3";\n\nmessage TypeTagRangeBigInt {\n    repeated TypeTagRangeBigInt.Type value = 1;\n    message Type {\n        required int64 greater = 1;\n        required int64 greater_equal = 2;\n        required int64 less = 3;\n        required int64 less_equal = 4;\n        required int64 greater_less = 5;\n        required int64 greater_equal_less = 6;\n        required int64 greater_less_equal = 7;\n        required int64 greater_equal_less_equal = 8;\n        required int64 equal = 9;\n    }\n}',
  });
