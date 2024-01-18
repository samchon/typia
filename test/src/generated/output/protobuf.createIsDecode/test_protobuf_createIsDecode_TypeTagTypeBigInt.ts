import typia from "typia";

import { _test_protobuf_isDecode } from "../../../internal/_test_protobuf_isDecode";
import { TypeTagTypeBigInt } from "../../../structures/TypeTagTypeBigInt";

export const test_protobuf_createIsDecode_TypeTagTypeBigInt =
  _test_protobuf_isDecode("TypeTagTypeBigInt")<TypeTagTypeBigInt>(
    TypeTagTypeBigInt,
  )({
    decode: (input: Uint8Array): typia.Resolved<TypeTagTypeBigInt> | null => {
      const is = (input: any): input is TypeTagTypeBigInt => {
        return (
          "object" === typeof input &&
          null !== input &&
          "bigint" === typeof (input as any).in64 &&
          "bigint" === typeof (input as any).uint64 &&
          BigInt(0) <= (input as any).uint64
        );
      };
      const decode = (input: Uint8Array): typia.Resolved<TypeTagTypeBigInt> => {
        // @ts-ignore;
        declare const require: (lib: string) => any;
        const $ProtobufReader =
          require("typia/lib/functional/$ProtobufReader").$ProtobufReader;
        const $pdo0 = (reader: any, length: number = -1): any => {
          length = length < 0 ? reader.size() : reader.index() + length;
          const output = {
            in64: undefined as any,
            uint64: undefined as any,
          } as any;
          while (reader.index() < length) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                // int64;
                output.in64 = reader.int64();
                break;
              case 2:
                // uint64;
                output.uint64 = reader.uint64();
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
    encode: (input: TypeTagTypeBigInt): Uint8Array => {
      // @ts-ignore;
      declare const require: (lib: string) => any;
      const $ProtobufSizer =
        require("typia/lib/functional/$ProtobufSizer").$ProtobufSizer;
      const $ProtobufWriter =
        require("typia/lib/functional/$ProtobufWriter").$ProtobufWriter;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "in64";
          writer.uint32(8);
          writer.int64(input.in64);
          // property "uint64";
          writer.uint32(16);
          writer.uint64(input.uint64);
        };
        //TypeTagTypeBigInt;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $ProtobufSizer());
      const writer = encoder(new $ProtobufWriter(sizer));
      return writer.buffer();
    },
  });
