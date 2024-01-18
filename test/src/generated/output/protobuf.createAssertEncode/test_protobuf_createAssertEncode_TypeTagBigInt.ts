import typia from "typia";

import { _test_protobuf_assertEncode } from "../../../internal/_test_protobuf_assertEncode";
import { TypeTagBigInt } from "../../../structures/TypeTagBigInt";

export const test_protobuf_createAssertEncode_TypeTagBigInt =
  _test_protobuf_assertEncode("TypeTagBigInt")<TypeTagBigInt>(TypeTagBigInt)({
    encode: (input: any): Uint8Array => {
      const assert = (input: any): TypeTagBigInt => {
        const __is = (input: any): input is TypeTagBigInt => {
          return (
            "object" === typeof input &&
            null !== input &&
            "bigint" === typeof (input as any).value &&
            "bigint" === typeof (input as any).ranged &&
            BigInt(0) <= (input as any).ranged &&
            (input as any).ranged <= BigInt(100) &&
            "bigint" === typeof (input as any).minimum &&
            BigInt(0) <= (input as any).minimum &&
            "bigint" === typeof (input as any).maximum &&
            (input as any).maximum <= BigInt(100) &&
            "bigint" === typeof (input as any).multipleOf &&
            (input as any).multipleOf % BigInt(3) === BigInt(0)
          );
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is TypeTagBigInt => {
            // @ts-ignore;
            declare const require: (lib: string) => any;
            const $guard = require("typia/lib/functional/$guard").$guard(
              "typia.protobuf.createAssertEncode",
            );
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              ("bigint" === typeof input.value ||
                $guard(_exceptionable, {
                  path: _path + ".value",
                  expected: "bigint",
                  value: input.value,
                })) &&
              (("bigint" === typeof input.ranged &&
                (BigInt(0) <= input.ranged ||
                  $guard(_exceptionable, {
                    path: _path + ".ranged",
                    expected: "bigint & Minimum<0n>",
                    value: input.ranged,
                  })) &&
                (input.ranged <= BigInt(100) ||
                  $guard(_exceptionable, {
                    path: _path + ".ranged",
                    expected: "bigint & Maximum<100n>",
                    value: input.ranged,
                  }))) ||
                $guard(_exceptionable, {
                  path: _path + ".ranged",
                  expected: "(bigint & Minimum<0n> & Maximum<100n>)",
                  value: input.ranged,
                })) &&
              (("bigint" === typeof input.minimum &&
                (BigInt(0) <= input.minimum ||
                  $guard(_exceptionable, {
                    path: _path + ".minimum",
                    expected: "bigint & Minimum<0n>",
                    value: input.minimum,
                  }))) ||
                $guard(_exceptionable, {
                  path: _path + ".minimum",
                  expected: "(bigint & Minimum<0n>)",
                  value: input.minimum,
                })) &&
              (("bigint" === typeof input.maximum &&
                (input.maximum <= BigInt(100) ||
                  $guard(_exceptionable, {
                    path: _path + ".maximum",
                    expected: "bigint & Maximum<100n>",
                    value: input.maximum,
                  }))) ||
                $guard(_exceptionable, {
                  path: _path + ".maximum",
                  expected: "(bigint & Maximum<100n>)",
                  value: input.maximum,
                })) &&
              (("bigint" === typeof input.multipleOf &&
                (input.multipleOf % BigInt(3) === BigInt(0) ||
                  $guard(_exceptionable, {
                    path: _path + ".multipleOf",
                    expected: "bigint & MultipleOf<3n>",
                    value: input.multipleOf,
                  }))) ||
                $guard(_exceptionable, {
                  path: _path + ".multipleOf",
                  expected: "(bigint & MultipleOf<3n>)",
                  value: input.multipleOf,
                }));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(true, {
                  path: _path + "",
                  expected: "TypeTagBigInt",
                  value: input,
                })) &&
                $ao0(input, _path + "", true)) ||
              $guard(true, {
                path: _path + "",
                expected: "TypeTagBigInt",
                value: input,
              })
            );
          })(input, "$input", true);
        return input;
      };
      const encode = (input: TypeTagBigInt): Uint8Array => {
        // @ts-ignore;
        declare const require: (lib: string) => any;
        const $ProtobufSizer =
          require("typia/lib/functional/$ProtobufSizer").$ProtobufSizer;
        const $ProtobufWriter =
          require("typia/lib/functional/$ProtobufWriter").$ProtobufWriter;
        const encoder = (writer: any): any => {
          const $peo0 = (input: any): any => {
            // property "value";
            writer.uint32(8);
            writer.int64(input.value);
            // property "ranged";
            writer.uint32(16);
            writer.int64(input.ranged);
            // property "minimum";
            writer.uint32(24);
            writer.int64(input.minimum);
            // property "maximum";
            writer.uint32(32);
            writer.int64(input.maximum);
            // property "multipleOf";
            writer.uint32(40);
            writer.int64(input.multipleOf);
          };
          //TypeTagBigInt;
          $peo0(input);
          return writer;
        };
        const sizer = encoder(new $ProtobufSizer());
        const writer = encoder(new $ProtobufWriter(sizer));
        return writer.buffer();
      };
      return encode(assert(input));
    },
    decode: (input: Uint8Array): typia.Resolved<TypeTagBigInt> => {
      // @ts-ignore;
      declare const require: (lib: string) => any;
      const $ProtobufReader =
        require("typia/lib/functional/$ProtobufReader").$ProtobufReader;
      const $pdo0 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          value: undefined as any,
          ranged: undefined as any,
          minimum: undefined as any,
          maximum: undefined as any,
          multipleOf: undefined as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // int64;
              output.value = reader.int64();
              break;
            case 2:
              // int64;
              output.ranged = reader.int64();
              break;
            case 3:
              // int64;
              output.minimum = reader.int64();
              break;
            case 4:
              // int64;
              output.maximum = reader.int64();
              break;
            case 5:
              // int64;
              output.multipleOf = reader.int64();
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
      'syntax = "proto3";\n\nmessage TypeTagBigInt {\n    required int64 value = 1;\n    required int64 ranged = 2;\n    required int64 minimum = 3;\n    required int64 maximum = 4;\n    required int64 multipleOf = 5;\n}',
  });
