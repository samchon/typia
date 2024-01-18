import typia from "typia";

import { _test_protobuf_assertDecode } from "../../../internal/_test_protobuf_assertDecode";
import { TypeTagTypeBigInt } from "../../../structures/TypeTagTypeBigInt";

export const test_protobuf_createAssertDecode_TypeTagTypeBigInt =
  _test_protobuf_assertDecode("TypeTagTypeBigInt")<TypeTagTypeBigInt>(
    TypeTagTypeBigInt,
  )({
    decode: (input: Uint8Array): typia.Resolved<TypeTagTypeBigInt> => {
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
      const assert = (input: any): TypeTagTypeBigInt => {
        const __is = (input: any): input is TypeTagTypeBigInt => {
          return (
            "object" === typeof input &&
            null !== input &&
            "bigint" === typeof (input as any).in64 &&
            "bigint" === typeof (input as any).uint64 &&
            BigInt(0) <= (input as any).uint64
          );
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is TypeTagTypeBigInt => {
            // @ts-ignore;
            declare const require: (lib: string) => any;
            const $guard = require("typia/lib/functional/$guard").$guard(
              "typia.protobuf.createAssertDecode",
            );
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              ("bigint" === typeof input.in64 ||
                $guard(_exceptionable, {
                  path: _path + ".in64",
                  expected: "bigint",
                  value: input.in64,
                })) &&
              (("bigint" === typeof input.uint64 &&
                (BigInt(0) <= input.uint64 ||
                  $guard(_exceptionable, {
                    path: _path + ".uint64",
                    expected: 'bigint & Type<"uint64">',
                    value: input.uint64,
                  }))) ||
                $guard(_exceptionable, {
                  path: _path + ".uint64",
                  expected: '(bigint & Type<"uint64">)',
                  value: input.uint64,
                }));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(true, {
                  path: _path + "",
                  expected: "TypeTagTypeBigInt",
                  value: input,
                })) &&
                $ao0(input, _path + "", true)) ||
              $guard(true, {
                path: _path + "",
                expected: "TypeTagTypeBigInt",
                value: input,
              })
            );
          })(input, "$input", true);
        return input;
      };
      const output = decode(input);
      return assert(output) as any;
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
