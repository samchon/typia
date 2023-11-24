import typia from "typia";

import { _test_protobuf_isEncode } from "../../../internal/_test_protobuf_isEncode";
import { TypeTagType } from "../../../structures/TypeTagType";

export const test_protobuf_createIsEncode_TypeTagType = _test_protobuf_isEncode(
  "TypeTagType",
)<TypeTagType>(TypeTagType)({
  encode: (input) =>
    ((input: TypeTagType): Uint8Array | null => {
      const is = (input: any): input is TypeTagType => {
        const $io0 = (input: any): boolean =>
          Array.isArray(input.value) &&
          input.value.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io1(elem),
          );
        const $io1 = (input: any): boolean =>
          "number" === typeof input.int &&
          Math.floor(input.int) === input.int &&
          -2147483648 <= input.int &&
          input.int <= 2147483647 &&
          "number" === typeof input.uint &&
          Math.floor(input.uint) === input.uint &&
          0 <= input.uint &&
          input.uint <= 4294967295 &&
          "number" === typeof input.int32 &&
          Math.floor(input.int32) === input.int32 &&
          -2147483648 <= input.int32 &&
          input.int32 <= 2147483647 &&
          "number" === typeof input.uint32 &&
          Math.floor(input.uint32) === input.uint32 &&
          0 <= input.uint32 &&
          input.uint32 <= 4294967295 &&
          "number" === typeof input.int64 &&
          Math.floor(input.int64) === input.int64 &&
          -9223372036854776000 <= input.int64 &&
          input.int64 <= 9223372036854776000 &&
          "number" === typeof input.uint64 &&
          Math.floor(input.uint64) === input.uint64 &&
          0 <= input.uint64 &&
          input.uint64 <= 18446744073709552000 &&
          "number" === typeof input.float &&
          -1.175494351e38 <= input.float &&
          input.float <= 3.4028235e38;
        return "object" === typeof input && null !== input && $io0(input);
      };
      const encode = (input: TypeTagType): Uint8Array => {
        const $Sizer = (typia.protobuf.isEncode as any).Sizer;
        const $Writer = (typia.protobuf.isEncode as any).Writer;
        const encoder = (writer: any): any => {
          const $peo0 = (input: any): any => {
            // property "value";
            if (0 !== input.value.length) {
              for (const elem of input.value) {
                // 1 -> TypeTagType.Type;
                writer.uint32(10);
                writer.fork();
                $peo1(elem);
                writer.ldelim();
              }
            }
          };
          const $peo1 = (input: any): any => {
            // property "int";
            writer.uint32(8);
            writer.int32(input.int);
            // property "uint";
            writer.uint32(16);
            writer.uint32(input.uint);
            // property "int32";
            writer.uint32(24);
            writer.int32(input.int32);
            // property "uint32";
            writer.uint32(32);
            writer.uint32(input.uint32);
            // property "int64";
            writer.uint32(40);
            writer.int64(input.int64);
            // property "uint64";
            writer.uint32(48);
            writer.uint64(input.uint64);
            // property "float";
            writer.uint32(61);
            writer.float(input.float);
          };
          const $io1 = (input: any): boolean =>
            "number" === typeof input.int &&
            Math.floor(input.int) === input.int &&
            -2147483648 <= input.int &&
            input.int <= 2147483647 &&
            "number" === typeof input.uint &&
            Math.floor(input.uint) === input.uint &&
            0 <= input.uint &&
            input.uint <= 4294967295 &&
            "number" === typeof input.int32 &&
            Math.floor(input.int32) === input.int32 &&
            -2147483648 <= input.int32 &&
            input.int32 <= 2147483647 &&
            "number" === typeof input.uint32 &&
            Math.floor(input.uint32) === input.uint32 &&
            0 <= input.uint32 &&
            input.uint32 <= 4294967295 &&
            "number" === typeof input.int64 &&
            Math.floor(input.int64) === input.int64 &&
            -9223372036854776000 <= input.int64 &&
            input.int64 <= 9223372036854776000 &&
            "number" === typeof input.uint64 &&
            Math.floor(input.uint64) === input.uint64 &&
            0 <= input.uint64 &&
            input.uint64 <= 18446744073709552000 &&
            "number" === typeof input.float &&
            -1.175494351e38 <= input.float &&
            input.float <= 3.4028235e38;
          //TypeTagType;
          $peo0(input);
          return writer;
        };
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
      };
      return is(input) ? encode(input) : null;
    })(input),
  decode: (input: Uint8Array): typia.Resolved<TypeTagType> => {
    const $Reader = (typia.protobuf.createDecode as any).Reader;
    const $pdo0 = (reader: any, length: number = -1): any => {
      length = length < 0 ? reader.size() : reader.index() + length;
      const output = {
        value: [] as any,
      } as any;
      while (reader.index() < length) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            // type: Array<TypeTagType.Type>;
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
        int: undefined as any,
        uint: undefined as any,
        int32: undefined as any,
        uint32: undefined as any,
        int64: undefined as any,
        uint64: undefined as any,
        float: undefined as any,
      } as any;
      while (reader.index() < length) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            // int32;
            output.int = reader.int32();
            break;
          case 2:
            // uint32;
            output.uint = reader.uint32();
            break;
          case 3:
            // int32;
            output.int32 = reader.int32();
            break;
          case 4:
            // uint32;
            output.uint32 = reader.uint32();
            break;
          case 5:
            // int64;
            output.int64 = Number(reader.int64());
            break;
          case 6:
            // uint64;
            output.uint64 = Number(reader.uint64());
            break;
          case 7:
            // float;
            output.float = reader.float();
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
    'syntax = "proto3";\n\nmessage TypeTagType {\n    repeated TypeTagType.Type value = 1;\n    message Type {\n        required int32 int = 1;\n        required uint32 uint = 2;\n        required int32 int32 = 3;\n        required uint32 uint32 = 4;\n        required int64 int64 = 5;\n        required uint64 uint64 = 6;\n        required float float = 7;\n    }\n}',
});
