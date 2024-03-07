import typia from "typia";
import { _test_protobuf_validateEncode } from "../../../internal/_test_protobuf_validateEncode";
import { TypeTagTypeBigInt } from "../../../structures/TypeTagTypeBigInt";
export const test_protobuf_createValidateEncode_TypeTagTypeBigInt =
  _test_protobuf_validateEncode("TypeTagTypeBigInt")<TypeTagTypeBigInt>(
    TypeTagTypeBigInt,
  )({
    encode: (input: TypeTagTypeBigInt): typia.IValidation<Uint8Array> => {
      const validate = (input: any): typia.IValidation<TypeTagTypeBigInt> => {
        const errors = [] as any[];
        const __is = (input: any): input is TypeTagTypeBigInt => {
          return (
            "object" === typeof input &&
            null !== input &&
            "bigint" === typeof (input as any).in64 &&
            "bigint" === typeof (input as any).uint64 &&
            BigInt(0) <= (input as any).uint64
          );
        };
        if (false === __is(input)) {
          const $report = (typia.protobuf.createValidateEncode as any).report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is TypeTagTypeBigInt => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                "bigint" === typeof input.in64 ||
                  $report(_exceptionable, {
                    path: _path + ".in64",
                    expected: "bigint",
                    value: input.in64,
                  }),
                ("bigint" === typeof input.uint64 &&
                  (BigInt(0) <= input.uint64 ||
                    $report(_exceptionable, {
                      path: _path + ".uint64",
                      expected: 'bigint & Type<"uint64">',
                      value: input.uint64,
                    }))) ||
                  $report(_exceptionable, {
                    path: _path + ".uint64",
                    expected: '(bigint & Type<"uint64">)',
                    value: input.uint64,
                  }),
              ].every((flag: boolean) => flag);
            return (
              ((("object" === typeof input && null !== input) ||
                $report(true, {
                  path: _path + "",
                  expected: "TypeTagTypeBigInt",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "TypeTagTypeBigInt",
                value: input,
              })
            );
          })(input, "$input", true);
        }
        const success = 0 === errors.length;
        return {
          success,
          errors,
          data: success ? input : undefined,
        } as any;
      };
      const encode = (input: TypeTagTypeBigInt): Uint8Array => {
        const $Sizer = (typia.protobuf.createValidateEncode as any).Sizer;
        const $Writer = (typia.protobuf.createValidateEncode as any).Writer;
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
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
      };
      const output = validate(input) as any;
      if (output.success) output.data = encode(input);
      return output;
    },
    decode: (
      input: Uint8Array,
    ): import("typia").Resolved<TypeTagTypeBigInt> => {
      const $Reader = (typia.protobuf.createDecode as any).Reader;
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
      const reader = new $Reader(input);
      return $pdo0(reader);
    },
    message:
      'syntax = "proto3";\n\nmessage TypeTagTypeBigInt {\n  required int64 in64 = 1;\n  required uint64 uint64 = 2;\n}',
  });
