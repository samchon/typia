import typia from "typia";
import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { TypeTagTypeUnion } from "../../../structures/TypeTagTypeUnion";
export const test_protobuf_encode_TypeTagTypeUnion = _test_protobuf_encode(
  "TypeTagTypeUnion",
)<TypeTagTypeUnion>(TypeTagTypeUnion)({
  encode: (input) =>
    ((input: TypeTagTypeUnion): Uint8Array => {
      const $throws = (typia.protobuf.encode as any).throws;
      const $Sizer = (typia.protobuf.encode as any).Sizer;
      const $Writer = (typia.protobuf.encode as any).Writer;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "int32_or_uint32";
          if (
            "number" === typeof input.int32_or_uint32 &&
            Math.floor(input.int32_or_uint32) === input.int32_or_uint32 &&
            -2147483648 <= input.int32_or_uint32 &&
            input.int32_or_uint32 <= 2147483647
          ) {
            writer.uint32(8);
            writer.int32(input.int32_or_uint32);
          } else if (
            "number" === typeof input.int32_or_uint32 &&
            Math.floor(input.int32_or_uint32) === input.int32_or_uint32 &&
            0 <= input.int32_or_uint32 &&
            input.int32_or_uint32 <= 4294967295
          ) {
            writer.uint32(16);
            writer.uint32(input.int32_or_uint32);
          } else
            $throws({
              expected: '(number & (Type<"int32"> | Type<"uint32">))',
              value: input.int32_or_uint32,
            });
          // property "int32_or_int64";
          if (
            "number" === typeof input.int32_or_int64 &&
            Math.floor(input.int32_or_int64) === input.int32_or_int64 &&
            -2147483648 <= input.int32_or_int64 &&
            input.int32_or_int64 <= 2147483647
          ) {
            writer.uint32(24);
            writer.int32(input.int32_or_int64);
          } else if (
            "number" === typeof input.int32_or_int64 &&
            Math.floor(input.int32_or_int64) === input.int32_or_int64 &&
            -9223372036854775808 <= input.int32_or_int64 &&
            input.int32_or_int64 <= 9223372036854775807
          ) {
            writer.uint32(32);
            writer.int64(input.int32_or_int64);
          } else
            $throws({
              expected: '(number & (Type<"int32"> | Type<"int64">))',
              value: input.int32_or_int64,
            });
          // property "int32_or_uint64";
          if (
            "number" === typeof input.int32_or_uint64 &&
            Math.floor(input.int32_or_uint64) === input.int32_or_uint64 &&
            -2147483648 <= input.int32_or_uint64 &&
            input.int32_or_uint64 <= 2147483647
          ) {
            writer.uint32(40);
            writer.int32(input.int32_or_uint64);
          } else if (
            "number" === typeof input.int32_or_uint64 &&
            Math.floor(input.int32_or_uint64) === input.int32_or_uint64 &&
            0 <= input.int32_or_uint64 &&
            input.int32_or_uint64 <= 18446744073709551615
          ) {
            writer.uint32(48);
            writer.uint64(input.int32_or_uint64);
          } else
            $throws({
              expected: '(number & (Type<"int32"> | Type<"uint64">))',
              value: input.int32_or_uint64,
            });
          // property "int32_or_float";
          if (
            "number" === typeof input.int32_or_float &&
            Math.floor(input.int32_or_float) === input.int32_or_float &&
            -2147483648 <= input.int32_or_float &&
            input.int32_or_float <= 2147483647
          ) {
            writer.uint32(56);
            writer.int32(input.int32_or_float);
          } else if (
            "number" === typeof input.int32_or_float &&
            -1.175494351e38 <= input.int32_or_float &&
            input.int32_or_float <= 3.4028235e38
          ) {
            writer.uint32(69);
            writer.float(input.int32_or_float);
          } else
            $throws({
              expected: '(number & (Type<"int32"> | Type<"float">))',
              value: input.int32_or_float,
            });
          // property "int32_or_double";
          if (
            "number" === typeof input.int32_or_double &&
            Math.floor(input.int32_or_double) === input.int32_or_double &&
            -2147483648 <= input.int32_or_double &&
            input.int32_or_double <= 2147483647
          ) {
            writer.uint32(72);
            writer.int32(input.int32_or_double);
          } else if ("number" === typeof input.int32_or_double && true) {
            writer.uint32(81);
            writer.double(input.int32_or_double);
          } else
            $throws({
              expected: '(number & (Type<"int32"> | Type<"double">))',
              value: input.int32_or_double,
            });
          // property "int64_or_uint64";
          if (
            "number" === typeof input.int64_or_uint64 &&
            Math.floor(input.int64_or_uint64) === input.int64_or_uint64 &&
            -9223372036854775808 <= input.int64_or_uint64 &&
            input.int64_or_uint64 <= 9223372036854775807
          ) {
            writer.uint32(88);
            writer.int64(input.int64_or_uint64);
          } else if (
            "number" === typeof input.int64_or_uint64 &&
            Math.floor(input.int64_or_uint64) === input.int64_or_uint64 &&
            0 <= input.int64_or_uint64 &&
            input.int64_or_uint64 <= 18446744073709551615
          ) {
            writer.uint32(96);
            writer.uint64(input.int64_or_uint64);
          } else
            $throws({
              expected: '(number & (Type<"int64"> | Type<"uint64">))',
              value: input.int64_or_uint64,
            });
          // property "int64_or_float";
          if (
            "number" === typeof input.int64_or_float &&
            Math.floor(input.int64_or_float) === input.int64_or_float &&
            -9223372036854775808 <= input.int64_or_float &&
            input.int64_or_float <= 9223372036854775807
          ) {
            writer.uint32(104);
            writer.int64(input.int64_or_float);
          } else if (
            "number" === typeof input.int64_or_float &&
            -1.175494351e38 <= input.int64_or_float &&
            input.int64_or_float <= 3.4028235e38
          ) {
            writer.uint32(117);
            writer.float(input.int64_or_float);
          } else
            $throws({
              expected: '(number & (Type<"float"> | Type<"int64">))',
              value: input.int64_or_float,
            });
          // property "int64_or_double";
          if (
            "number" === typeof input.int64_or_double &&
            Math.floor(input.int64_or_double) === input.int64_or_double &&
            -9223372036854775808 <= input.int64_or_double &&
            input.int64_or_double <= 9223372036854775807
          ) {
            writer.uint32(120);
            writer.int64(input.int64_or_double);
          } else if ("number" === typeof input.int64_or_double && true) {
            writer.uint32(129);
            writer.double(input.int64_or_double);
          } else
            $throws({
              expected: '(number & (Type<"double"> | Type<"int64">))',
              value: input.int64_or_double,
            });
          // property "float_or_double";
          if (
            "number" === typeof input.float_or_double &&
            -1.175494351e38 <= input.float_or_double &&
            input.float_or_double <= 3.4028235e38
          ) {
            writer.uint32(141);
            writer.float(input.float_or_double);
          } else if ("number" === typeof input.float_or_double && true) {
            writer.uint32(145);
            writer.double(input.float_or_double);
          } else
            $throws({
              expected: '(number & (Type<"float"> | Type<"double">))',
              value: input.float_or_double,
            });
          // property "everything";
          if (
            "number" === typeof input.everything &&
            Math.floor(input.everything) === input.everything &&
            -2147483648 <= input.everything &&
            input.everything <= 2147483647
          ) {
            writer.uint32(152);
            writer.int32(input.everything);
          } else if (
            "number" === typeof input.everything &&
            Math.floor(input.everything) === input.everything &&
            0 <= input.everything &&
            input.everything <= 4294967295
          ) {
            writer.uint32(160);
            writer.uint32(input.everything);
          } else if (
            "number" === typeof input.everything &&
            Math.floor(input.everything) === input.everything &&
            -9223372036854775808 <= input.everything &&
            input.everything <= 9223372036854775807
          ) {
            writer.uint32(168);
            writer.int64(input.everything);
          } else if (
            "number" === typeof input.everything &&
            Math.floor(input.everything) === input.everything &&
            0 <= input.everything &&
            input.everything <= 18446744073709551615
          ) {
            writer.uint32(176);
            writer.uint64(input.everything);
          } else if (
            "number" === typeof input.everything &&
            -1.175494351e38 <= input.everything &&
            input.everything <= 3.4028235e38
          ) {
            writer.uint32(189);
            writer.float(input.everything);
          } else if ("number" === typeof input.everything && true) {
            writer.uint32(193);
            writer.double(input.everything);
          } else
            $throws({
              expected:
                '(number & (Type<"int32"> | Type<"uint32"> | Type<"float"> | Type<"double"> | Type<"int64"> | Type<"uint64">))',
              value: input.everything,
            });
        };
        //TypeTagTypeUnion;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $Sizer());
      const writer = encoder(new $Writer(sizer));
      return writer.buffer();
    })(input),
  decode: (input: Uint8Array): import("typia").Resolved<TypeTagTypeUnion> => {
    const $Reader = (typia.protobuf.createDecode as any).Reader;
    const $pdo0 = (reader: any, length: number = -1): any => {
      length = length < 0 ? reader.size() : reader.index() + length;
      const output = {
        int32_or_uint32: undefined as any,
        int32_or_int64: undefined as any,
        int32_or_uint64: undefined as any,
        int32_or_float: undefined as any,
        int32_or_double: undefined as any,
        int64_or_uint64: undefined as any,
        int64_or_float: undefined as any,
        int64_or_double: undefined as any,
        float_or_double: undefined as any,
        everything: undefined as any,
      } as any;
      while (reader.index() < length) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            // int32;
            output.int32_or_uint32 = reader.int32();
            break;
          case 2:
            // uint32;
            output.int32_or_uint32 = reader.uint32();
            break;
          case 3:
            // int32;
            output.int32_or_int64 = reader.int32();
            break;
          case 4:
            // int64;
            output.int32_or_int64 = Number(reader.int64());
            break;
          case 5:
            // int32;
            output.int32_or_uint64 = reader.int32();
            break;
          case 6:
            // uint64;
            output.int32_or_uint64 = Number(reader.uint64());
            break;
          case 7:
            // int32;
            output.int32_or_float = reader.int32();
            break;
          case 8:
            // float;
            output.int32_or_float = reader.float();
            break;
          case 9:
            // int32;
            output.int32_or_double = reader.int32();
            break;
          case 10:
            // double;
            output.int32_or_double = reader.double();
            break;
          case 11:
            // int64;
            output.int64_or_uint64 = Number(reader.int64());
            break;
          case 12:
            // uint64;
            output.int64_or_uint64 = Number(reader.uint64());
            break;
          case 13:
            // int64;
            output.int64_or_float = Number(reader.int64());
            break;
          case 14:
            // float;
            output.int64_or_float = reader.float();
            break;
          case 15:
            // int64;
            output.int64_or_double = Number(reader.int64());
            break;
          case 16:
            // double;
            output.int64_or_double = reader.double();
            break;
          case 17:
            // float;
            output.float_or_double = reader.float();
            break;
          case 18:
            // double;
            output.float_or_double = reader.double();
            break;
          case 19:
            // int32;
            output.everything = reader.int32();
            break;
          case 20:
            // uint32;
            output.everything = reader.uint32();
            break;
          case 21:
            // int64;
            output.everything = Number(reader.int64());
            break;
          case 22:
            // uint64;
            output.everything = Number(reader.uint64());
            break;
          case 23:
            // float;
            output.everything = reader.float();
            break;
          case 24:
            // double;
            output.everything = reader.double();
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
    'syntax = "proto3";\n\nmessage TypeTagTypeUnion {\n  oneof int32_or_uint32 {\n    int32 v1 = 1;\n    uint32 v2 = 2;\n  }\n  oneof int32_or_int64 {\n    int32 v3 = 3;\n    int64 v4 = 4;\n  }\n  oneof int32_or_uint64 {\n    int32 v5 = 5;\n    uint64 v6 = 6;\n  }\n  oneof int32_or_float {\n    int32 v7 = 7;\n    float v8 = 8;\n  }\n  oneof int32_or_double {\n    int32 v9 = 9;\n    double v10 = 10;\n  }\n  oneof int64_or_uint64 {\n    int64 v11 = 11;\n    uint64 v12 = 12;\n  }\n  oneof int64_or_float {\n    int64 v13 = 13;\n    float v14 = 14;\n  }\n  oneof int64_or_double {\n    int64 v15 = 15;\n    double v16 = 16;\n  }\n  oneof float_or_double {\n    float v17 = 17;\n    double v18 = 18;\n  }\n  oneof everything {\n    int32 v19 = 19;\n    uint32 v20 = 20;\n    int64 v21 = 21;\n    uint64 v22 = 22;\n    float v23 = 23;\n    double v24 = 24;\n  }\n}',
});
