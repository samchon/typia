import typia from "typia";

import { _test_protobuf_assertDecode } from "../../../internal/_test_protobuf_assertDecode";
import { TypeTagTypeUnion } from "../../../structures/TypeTagTypeUnion";

export const test_protobuf_createAssertDecode_TypeTagTypeUnion =
  _test_protobuf_assertDecode("TypeTagTypeUnion")<TypeTagTypeUnion>(
    TypeTagTypeUnion,
  )({
    decode: (input) =>
      ((input: Uint8Array): typia.Resolved<TypeTagTypeUnion> => {
        const decode = (
          input: Uint8Array,
        ): typia.Resolved<TypeTagTypeUnion> => {
          const $Reader = (typia.protobuf.assertDecode as any).Reader;
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
        };
        const assert = (input: any): TypeTagTypeUnion => {
          const __is = (input: any): input is TypeTagTypeUnion => {
            const $io0 = (input: any): boolean =>
              "number" === typeof input.int32_or_uint32 &&
              ((Math.floor(input.int32_or_uint32) === input.int32_or_uint32 &&
                -2147483648 <= input.int32_or_uint32 &&
                input.int32_or_uint32 <= 2147483647) ||
                (Math.floor(input.int32_or_uint32) === input.int32_or_uint32 &&
                  0 <= input.int32_or_uint32 &&
                  input.int32_or_uint32 <= 4294967295)) &&
              "number" === typeof input.int32_or_int64 &&
              ((Math.floor(input.int32_or_int64) === input.int32_or_int64 &&
                -2147483648 <= input.int32_or_int64 &&
                input.int32_or_int64 <= 2147483647) ||
                (Math.floor(input.int32_or_int64) === input.int32_or_int64 &&
                  -9223372036854776000 <= input.int32_or_int64 &&
                  input.int32_or_int64 <= 9223372036854776000)) &&
              "number" === typeof input.int32_or_uint64 &&
              ((Math.floor(input.int32_or_uint64) === input.int32_or_uint64 &&
                -2147483648 <= input.int32_or_uint64 &&
                input.int32_or_uint64 <= 2147483647) ||
                (Math.floor(input.int32_or_uint64) === input.int32_or_uint64 &&
                  0 <= input.int32_or_uint64 &&
                  input.int32_or_uint64 <= 18446744073709552000)) &&
              "number" === typeof input.int32_or_float &&
              ((Math.floor(input.int32_or_float) === input.int32_or_float &&
                -2147483648 <= input.int32_or_float &&
                input.int32_or_float <= 2147483647) ||
                (-1.175494351e38 <= input.int32_or_float &&
                  input.int32_or_float <= 3.4028235e38)) &&
              "number" === typeof input.int32_or_double &&
              ((Math.floor(input.int32_or_double) === input.int32_or_double &&
                -2147483648 <= input.int32_or_double &&
                input.int32_or_double <= 2147483647) ||
                (Number.isFinite(input.int32_or_double) && true)) &&
              "number" === typeof input.int64_or_uint64 &&
              ((Math.floor(input.int64_or_uint64) === input.int64_or_uint64 &&
                -9223372036854776000 <= input.int64_or_uint64 &&
                input.int64_or_uint64 <= 9223372036854776000) ||
                (Math.floor(input.int64_or_uint64) === input.int64_or_uint64 &&
                  0 <= input.int64_or_uint64 &&
                  input.int64_or_uint64 <= 18446744073709552000)) &&
              "number" === typeof input.int64_or_float &&
              ((-1.175494351e38 <= input.int64_or_float &&
                input.int64_or_float <= 3.4028235e38) ||
                (Math.floor(input.int64_or_float) === input.int64_or_float &&
                  -9223372036854776000 <= input.int64_or_float &&
                  input.int64_or_float <= 9223372036854776000)) &&
              "number" === typeof input.int64_or_double &&
              ((Number.isFinite(input.int64_or_double) && true) ||
                (Math.floor(input.int64_or_double) === input.int64_or_double &&
                  -9223372036854776000 <= input.int64_or_double &&
                  input.int64_or_double <= 9223372036854776000)) &&
              "number" === typeof input.float_or_double &&
              ((-1.175494351e38 <= input.float_or_double &&
                input.float_or_double <= 3.4028235e38) ||
                (Number.isFinite(input.float_or_double) && true)) &&
              "number" === typeof input.everything &&
              ((Math.floor(input.everything) === input.everything &&
                -2147483648 <= input.everything &&
                input.everything <= 2147483647) ||
                (Math.floor(input.everything) === input.everything &&
                  0 <= input.everything &&
                  input.everything <= 4294967295) ||
                (-1.175494351e38 <= input.everything &&
                  input.everything <= 3.4028235e38) ||
                (Number.isFinite(input.everything) && true) ||
                (Math.floor(input.everything) === input.everything &&
                  -9223372036854776000 <= input.everything &&
                  input.everything <= 9223372036854776000) ||
                (Math.floor(input.everything) === input.everything &&
                  0 <= input.everything &&
                  input.everything <= 18446744073709552000));
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is TypeTagTypeUnion => {
              const $guard = (typia.protobuf.assertDecode as any).guard;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (("number" === typeof input.int32_or_uint32 &&
                  ((Math.floor(input.int32_or_uint32) ===
                    input.int32_or_uint32 &&
                    -2147483648 <= input.int32_or_uint32 &&
                    input.int32_or_uint32 <= 2147483647) ||
                    (Math.floor(input.int32_or_uint32) ===
                      input.int32_or_uint32 &&
                      0 <= input.int32_or_uint32 &&
                      input.int32_or_uint32 <= 4294967295) ||
                    $guard(_exceptionable, {
                      path: _path + ".int32_or_uint32",
                      expected: '(number & (Type<"int32"> | Type<"uint32">))',
                      value: input.int32_or_uint32,
                    }))) ||
                  $guard(_exceptionable, {
                    path: _path + ".int32_or_uint32",
                    expected: '(number & (Type<"int32"> | Type<"uint32">))',
                    value: input.int32_or_uint32,
                  })) &&
                (("number" === typeof input.int32_or_int64 &&
                  ((Math.floor(input.int32_or_int64) === input.int32_or_int64 &&
                    -2147483648 <= input.int32_or_int64 &&
                    input.int32_or_int64 <= 2147483647) ||
                    (Math.floor(input.int32_or_int64) ===
                      input.int32_or_int64 &&
                      -9223372036854776000 <= input.int32_or_int64 &&
                      input.int32_or_int64 <= 9223372036854776000) ||
                    $guard(_exceptionable, {
                      path: _path + ".int32_or_int64",
                      expected: '(number & (Type<"int32"> | Type<"int64">))',
                      value: input.int32_or_int64,
                    }))) ||
                  $guard(_exceptionable, {
                    path: _path + ".int32_or_int64",
                    expected: '(number & (Type<"int32"> | Type<"int64">))',
                    value: input.int32_or_int64,
                  })) &&
                (("number" === typeof input.int32_or_uint64 &&
                  ((Math.floor(input.int32_or_uint64) ===
                    input.int32_or_uint64 &&
                    -2147483648 <= input.int32_or_uint64 &&
                    input.int32_or_uint64 <= 2147483647) ||
                    (Math.floor(input.int32_or_uint64) ===
                      input.int32_or_uint64 &&
                      0 <= input.int32_or_uint64 &&
                      input.int32_or_uint64 <= 18446744073709552000) ||
                    $guard(_exceptionable, {
                      path: _path + ".int32_or_uint64",
                      expected: '(number & (Type<"int32"> | Type<"uint64">))',
                      value: input.int32_or_uint64,
                    }))) ||
                  $guard(_exceptionable, {
                    path: _path + ".int32_or_uint64",
                    expected: '(number & (Type<"int32"> | Type<"uint64">))',
                    value: input.int32_or_uint64,
                  })) &&
                (("number" === typeof input.int32_or_float &&
                  ((Math.floor(input.int32_or_float) === input.int32_or_float &&
                    -2147483648 <= input.int32_or_float &&
                    input.int32_or_float <= 2147483647) ||
                    (-1.175494351e38 <= input.int32_or_float &&
                      input.int32_or_float <= 3.4028235e38) ||
                    $guard(_exceptionable, {
                      path: _path + ".int32_or_float",
                      expected: '(number & (Type<"int32"> | Type<"float">))',
                      value: input.int32_or_float,
                    }))) ||
                  $guard(_exceptionable, {
                    path: _path + ".int32_or_float",
                    expected: '(number & (Type<"int32"> | Type<"float">))',
                    value: input.int32_or_float,
                  })) &&
                (("number" === typeof input.int32_or_double &&
                  ((Math.floor(input.int32_or_double) ===
                    input.int32_or_double &&
                    -2147483648 <= input.int32_or_double &&
                    input.int32_or_double <= 2147483647) ||
                    (Number.isFinite(input.int32_or_double) && true) ||
                    $guard(_exceptionable, {
                      path: _path + ".int32_or_double",
                      expected: '(number & (Type<"int32"> | Type<"double">))',
                      value: input.int32_or_double,
                    }))) ||
                  $guard(_exceptionable, {
                    path: _path + ".int32_or_double",
                    expected: '(number & (Type<"int32"> | Type<"double">))',
                    value: input.int32_or_double,
                  })) &&
                (("number" === typeof input.int64_or_uint64 &&
                  ((Math.floor(input.int64_or_uint64) ===
                    input.int64_or_uint64 &&
                    -9223372036854776000 <= input.int64_or_uint64 &&
                    input.int64_or_uint64 <= 9223372036854776000) ||
                    (Math.floor(input.int64_or_uint64) ===
                      input.int64_or_uint64 &&
                      0 <= input.int64_or_uint64 &&
                      input.int64_or_uint64 <= 18446744073709552000) ||
                    $guard(_exceptionable, {
                      path: _path + ".int64_or_uint64",
                      expected: '(number & (Type<"int64"> | Type<"uint64">))',
                      value: input.int64_or_uint64,
                    }))) ||
                  $guard(_exceptionable, {
                    path: _path + ".int64_or_uint64",
                    expected: '(number & (Type<"int64"> | Type<"uint64">))',
                    value: input.int64_or_uint64,
                  })) &&
                (("number" === typeof input.int64_or_float &&
                  ((-1.175494351e38 <= input.int64_or_float &&
                    input.int64_or_float <= 3.4028235e38) ||
                    (Math.floor(input.int64_or_float) ===
                      input.int64_or_float &&
                      -9223372036854776000 <= input.int64_or_float &&
                      input.int64_or_float <= 9223372036854776000) ||
                    $guard(_exceptionable, {
                      path: _path + ".int64_or_float",
                      expected: '(number & (Type<"float"> | Type<"int64">))',
                      value: input.int64_or_float,
                    }))) ||
                  $guard(_exceptionable, {
                    path: _path + ".int64_or_float",
                    expected: '(number & (Type<"float"> | Type<"int64">))',
                    value: input.int64_or_float,
                  })) &&
                (("number" === typeof input.int64_or_double &&
                  ((Number.isFinite(input.int64_or_double) && true) ||
                    (Math.floor(input.int64_or_double) ===
                      input.int64_or_double &&
                      -9223372036854776000 <= input.int64_or_double &&
                      input.int64_or_double <= 9223372036854776000) ||
                    $guard(_exceptionable, {
                      path: _path + ".int64_or_double",
                      expected: '(number & (Type<"double"> | Type<"int64">))',
                      value: input.int64_or_double,
                    }))) ||
                  $guard(_exceptionable, {
                    path: _path + ".int64_or_double",
                    expected: '(number & (Type<"double"> | Type<"int64">))',
                    value: input.int64_or_double,
                  })) &&
                (("number" === typeof input.float_or_double &&
                  ((-1.175494351e38 <= input.float_or_double &&
                    input.float_or_double <= 3.4028235e38) ||
                    (Number.isFinite(input.float_or_double) && true) ||
                    $guard(_exceptionable, {
                      path: _path + ".float_or_double",
                      expected: '(number & (Type<"float"> | Type<"double">))',
                      value: input.float_or_double,
                    }))) ||
                  $guard(_exceptionable, {
                    path: _path + ".float_or_double",
                    expected: '(number & (Type<"float"> | Type<"double">))',
                    value: input.float_or_double,
                  })) &&
                (("number" === typeof input.everything &&
                  ((Math.floor(input.everything) === input.everything &&
                    -2147483648 <= input.everything &&
                    input.everything <= 2147483647) ||
                    (Math.floor(input.everything) === input.everything &&
                      0 <= input.everything &&
                      input.everything <= 4294967295) ||
                    (-1.175494351e38 <= input.everything &&
                      input.everything <= 3.4028235e38) ||
                    (Number.isFinite(input.everything) && true) ||
                    (Math.floor(input.everything) === input.everything &&
                      -9223372036854776000 <= input.everything &&
                      input.everything <= 9223372036854776000) ||
                    (Math.floor(input.everything) === input.everything &&
                      0 <= input.everything &&
                      input.everything <= 18446744073709552000) ||
                    $guard(_exceptionable, {
                      path: _path + ".everything",
                      expected:
                        '(number & (Type<"int32"> | Type<"uint32"> | Type<"float"> | Type<"double"> | Type<"int64"> | Type<"uint64">))',
                      value: input.everything,
                    }))) ||
                  $guard(_exceptionable, {
                    path: _path + ".everything",
                    expected:
                      '(number & (Type<"int32"> | Type<"uint32"> | Type<"float"> | Type<"double"> | Type<"int64"> | Type<"uint64">))',
                    value: input.everything,
                  }));
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(true, {
                    path: _path + "",
                    expected: "TypeTagTypeUnion",
                    value: input,
                  })) &&
                  $ao0(input, _path + "", true)) ||
                $guard(true, {
                  path: _path + "",
                  expected: "TypeTagTypeUnion",
                  value: input,
                })
              );
            })(input, "$input", true);
          return input;
        };
        const output = decode(input);
        return assert(output) as any;
      })(input),
    encode: (input: TypeTagTypeUnion): Uint8Array => {
      const $throws = (typia.protobuf.createEncode as any).throws;
      const $Sizer = (typia.protobuf.createEncode as any).Sizer;
      const $Writer = (typia.protobuf.createEncode as any).Writer;
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
    },
  });
