import typia from "typia";

import { _test_protobuf_assertDecode } from "../../../internal/_test_protobuf_assertDecode";
import { ObjectSimpleProtobuf } from "../../../structures/ObjectSimpleProtobuf";

export const test_protobuf_createAssertDecode_ObjectSimpleProtobuf =
  _test_protobuf_assertDecode("ObjectSimpleProtobuf")<ObjectSimpleProtobuf>(
    ObjectSimpleProtobuf,
  )({
    decode: (input) =>
      ((input: Uint8Array): typia.Resolved<ObjectSimpleProtobuf> => {
        const decode = (
          input: Uint8Array,
        ): typia.Resolved<ObjectSimpleProtobuf> => {
          const $ProtobufReader =
            require("typia/lib/functional/$ProtobufReader").$ProtobufReader;
          const $pdo0 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
              bool: undefined as any,
              int32: undefined as any,
              uint32: undefined as any,
              int64: undefined as any,
              uint64: undefined as any,
              float: undefined as any,
              double: undefined as any,
              string: "" as any,
              bytes: new Uint8Array() as any,
            } as any;
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
        const assert = (input: any): ObjectSimpleProtobuf => {
          const __is = (input: any): input is ObjectSimpleProtobuf => {
            const $io0 = (input: any): boolean =>
              "boolean" === typeof input.bool &&
              "number" === typeof input.int32 &&
              Math.floor(input.int32) === input.int32 &&
              -2147483648 <= input.int32 &&
              input.int32 <= 2147483647 &&
              "number" === typeof input.uint32 &&
              Math.floor(input.uint32) === input.uint32 &&
              0 <= input.uint32 &&
              input.uint32 <= 4294967295 &&
              "bigint" === typeof input.int64 &&
              "bigint" === typeof input.uint64 &&
              BigInt(0) <= input.uint64 &&
              "number" === typeof input.float &&
              -1.175494351e38 <= input.float &&
              input.float <= 3.4028235e38 &&
              "number" === typeof input.double &&
              Number.isFinite(input.double) &&
              true &&
              "string" === typeof input.string &&
              input.bytes instanceof Uint8Array;
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectSimpleProtobuf => {
              const $guard = require("typia/lib/functional/$guard").$guard(
                "typia.protobuf.assertDecode",
              );
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                ("boolean" === typeof input.bool ||
                  $guard(_exceptionable, {
                    path: _path + ".bool",
                    expected: "boolean",
                    value: input.bool,
                  })) &&
                (("number" === typeof input.int32 &&
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
                    expected: '(number & Type<"int32">)',
                    value: input.int32,
                  })) &&
                (("number" === typeof input.uint32 &&
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
                    expected: '(number & Type<"uint32">)',
                    value: input.uint32,
                  })) &&
                ("bigint" === typeof input.int64 ||
                  $guard(_exceptionable, {
                    path: _path + ".int64",
                    expected: "bigint",
                    value: input.int64,
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
                  })) &&
                (("number" === typeof input.float &&
                  ((-1.175494351e38 <= input.float &&
                    input.float <= 3.4028235e38) ||
                    $guard(_exceptionable, {
                      path: _path + ".float",
                      expected: 'number & Type<"float">',
                      value: input.float,
                    }))) ||
                  $guard(_exceptionable, {
                    path: _path + ".float",
                    expected: '(number & Type<"float">)',
                    value: input.float,
                  })) &&
                (("number" === typeof input.double &&
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
                    expected: '(number & Type<"double">)',
                    value: input.double,
                  })) &&
                ("string" === typeof input.string ||
                  $guard(_exceptionable, {
                    path: _path + ".string",
                    expected: "string",
                    value: input.string,
                  })) &&
                (input.bytes instanceof Uint8Array ||
                  $guard(_exceptionable, {
                    path: _path + ".bytes",
                    expected: "Uint8Array",
                    value: input.bytes,
                  }));
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(true, {
                    path: _path + "",
                    expected: "ObjectSimpleProtobuf",
                    value: input,
                  })) &&
                  $ao0(input, _path + "", true)) ||
                $guard(true, {
                  path: _path + "",
                  expected: "ObjectSimpleProtobuf",
                  value: input,
                })
              );
            })(input, "$input", true);
          return input;
        };
        const output = decode(input);
        return assert(output) as any;
      })(input),
    encode: (input: ObjectSimpleProtobuf): Uint8Array => {
      const $ProtobufSizer =
        require("typia/lib/functional/$ProtobufSizer").$ProtobufSizer;
      const $ProtobufWriter =
        require("typia/lib/functional/$ProtobufWriter").$ProtobufWriter;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "bool";
          writer.uint32(8);
          writer.bool(input.bool);
          // property "int32";
          writer.uint32(16);
          writer.int32(input.int32);
          // property "uint32";
          writer.uint32(24);
          writer.uint32(input.uint32);
          // property "int64";
          writer.uint32(32);
          writer.int64(input.int64);
          // property "uint64";
          writer.uint32(40);
          writer.uint64(input.uint64);
          // property "float";
          writer.uint32(53);
          writer.float(input.float);
          // property "double";
          writer.uint32(57);
          writer.double(input.double);
          // property "string";
          writer.uint32(66);
          writer.string(input.string);
          // property "bytes";
          writer.uint32(74);
          writer.bytes(input.bytes);
        };
        //ObjectSimpleProtobuf;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $ProtobufSizer());
      const writer = encoder(new $ProtobufWriter(sizer));
      return writer.buffer();
    },
  });
