import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../../internal/_test_protobuf_assertEncode";
import { ObjectSimpleProtobufOptional } from "../../../structures/ObjectSimpleProtobufOptional";

export const test_protobuf_assertEncode_ObjectSimpleProtobufOptional =
  _test_protobuf_assertEncode(TypeGuardError)(
    "ObjectSimpleProtobufOptional",
  )<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)({
    encode: (input) =>
      ((
        input: any,
        errorFactory?: import("typia").TypeGuardError.IProps,
      ): Uint8Array => {
        const assert = (
          input: any,
          errorFactory?: import("typia").TypeGuardError.IProps,
        ): ObjectSimpleProtobufOptional => {
          const $guard = (typia.protobuf.assertEncode as any).guard(
            errorFactory,
          );
          const __is = (input: any): input is ObjectSimpleProtobufOptional => {
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
                ("bigint" === typeof input.uint64 &&
                  BigInt(0) <= input.uint64)) &&
              (undefined === input.float ||
                ("number" === typeof input.float &&
                  -1.175494351e38 <= input.float &&
                  input.float <= 3.4028235e38)) &&
              (undefined === input.double ||
                ("number" === typeof input.double &&
                  Number.isFinite(input.double) &&
                  true)) &&
              (undefined === input.string ||
                "string" === typeof input.string) &&
              (undefined === input.bytes || input.bytes instanceof Uint8Array);
            return (
              "object" === typeof input &&
              null !== input &&
              false === Array.isArray(input) &&
              $io0(input)
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectSimpleProtobufOptional => {
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (undefined === input.bool ||
                  "boolean" === typeof input.bool ||
                  $guard(_exceptionable, {
                    path: _path + ".bool",
                    expected: "(boolean | undefined)",
                    value: input.bool,
                  })) &&
                (undefined === input.int32 ||
                  ("number" === typeof input.int32 &&
                    ((Math.floor(input.int32) === input.int32 &&
                      -2147483648 <= input.int32 &&
                      input.int32 <= 2147483647) ||
                      $guard(_exceptionable, {
                        path: _path + ".int32",
                        expected: 'number & Type<"int32">',
                        value: input.int32,
                      }))) ||
                  $guard(_exceptionable, {
                    path: _path + ".int32",
                    expected: '((number & Type<"int32">) | undefined)',
                    value: input.int32,
                  })) &&
                (undefined === input.uint32 ||
                  ("number" === typeof input.uint32 &&
                    ((Math.floor(input.uint32) === input.uint32 &&
                      0 <= input.uint32 &&
                      input.uint32 <= 4294967295) ||
                      $guard(_exceptionable, {
                        path: _path + ".uint32",
                        expected: 'number & Type<"uint32">',
                        value: input.uint32,
                      }))) ||
                  $guard(_exceptionable, {
                    path: _path + ".uint32",
                    expected: '((number & Type<"uint32">) | undefined)',
                    value: input.uint32,
                  })) &&
                (undefined === input.int64 ||
                  "bigint" === typeof input.int64 ||
                  $guard(_exceptionable, {
                    path: _path + ".int64",
                    expected: "(bigint | undefined)",
                    value: input.int64,
                  })) &&
                (undefined === input.uint64 ||
                  ("bigint" === typeof input.uint64 &&
                    (BigInt(0) <= input.uint64 ||
                      $guard(_exceptionable, {
                        path: _path + ".uint64",
                        expected: 'bigint & Type<"uint64">',
                        value: input.uint64,
                      }))) ||
                  $guard(_exceptionable, {
                    path: _path + ".uint64",
                    expected: '((bigint & Type<"uint64">) | undefined)',
                    value: input.uint64,
                  })) &&
                (undefined === input.float ||
                  ("number" === typeof input.float &&
                    ((-1.175494351e38 <= input.float &&
                      input.float <= 3.4028235e38) ||
                      $guard(_exceptionable, {
                        path: _path + ".float",
                        expected: 'number & Type<"float">',
                        value: input.float,
                      }))) ||
                  $guard(_exceptionable, {
                    path: _path + ".float",
                    expected: '((number & Type<"float">) | undefined)',
                    value: input.float,
                  })) &&
                (undefined === input.double ||
                  ("number" === typeof input.double &&
                    (Number.isFinite(input.double) ||
                      $guard(_exceptionable, {
                        path: _path + ".double",
                        expected: "number",
                        value: input.double,
                      })) &&
                    (true ||
                      $guard(_exceptionable, {
                        path: _path + ".double",
                        expected: 'number & Type<"double">',
                        value: input.double,
                      }))) ||
                  $guard(_exceptionable, {
                    path: _path + ".double",
                    expected: '((number & Type<"double">) | undefined)',
                    value: input.double,
                  })) &&
                (undefined === input.string ||
                  "string" === typeof input.string ||
                  $guard(_exceptionable, {
                    path: _path + ".string",
                    expected: "(string | undefined)",
                    value: input.string,
                  })) &&
                (undefined === input.bytes ||
                  input.bytes instanceof Uint8Array ||
                  $guard(_exceptionable, {
                    path: _path + ".bytes",
                    expected: "(Uint8Array | undefined)",
                    value: input.bytes,
                  }));
              return (
                ((("object" === typeof input &&
                  null !== input &&
                  false === Array.isArray(input)) ||
                  $guard(true, {
                    path: _path + "",
                    expected: "ObjectSimpleProtobufOptional",
                    value: input,
                  })) &&
                  $ao0(input, _path + "", true)) ||
                $guard(true, {
                  path: _path + "",
                  expected: "ObjectSimpleProtobufOptional",
                  value: input,
                })
              );
            })(input, "$input", true);
          return input;
        };
        const encode = (input: ObjectSimpleProtobufOptional): Uint8Array => {
          const $Sizer = (typia.protobuf.assertEncode as any).Sizer;
          const $Writer = (typia.protobuf.assertEncode as any).Writer;
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
          const sizer = encoder(new $Sizer());
          const writer = encoder(new $Writer(sizer));
          return writer.buffer();
        };
        return encode(assert(input, errorFactory));
      })(input),
    decode: (
      input: Uint8Array,
    ): typia.Resolved<ObjectSimpleProtobufOptional> => {
      const $Reader = (typia.protobuf.createDecode as any).Reader;
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
      const reader = new $Reader(input);
      return $pdo0(reader);
    },
    message:
      'syntax = "proto3";\n\nmessage ObjectSimpleProtobufOptional {\n    optional bool bool = 1;\n    optional int32 int32 = 2;\n    optional uint32 uint32 = 3;\n    optional int64 int64 = 4;\n    optional uint64 uint64 = 5;\n    optional float float = 6;\n    optional double double = 7;\n    optional string string = 8;\n    optional bytes bytes = 9;\n}',
  });
