import typia from "typia";

import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { ObjectHttpNullable } from "../../../structures/ObjectHttpNullable";

export const test_protobuf_createEncode_ObjectHttpNullable =
  _test_protobuf_encode("ObjectHttpNullable")<ObjectHttpNullable>(
    ObjectHttpNullable,
  )({
    encode: (input) =>
      ((input: ObjectHttpNullable): Uint8Array => {
        const $ProtobufSizer =
          require("typia/lib/functional/$ProtobufSizer").$ProtobufSizer;
        const $ProtobufWriter =
          require("typia/lib/functional/$ProtobufWriter").$ProtobufWriter;
        const encoder = (writer: any): any => {
          const $peo0 = (input: any): any => {
            // property "boolean";
            if (null !== input.boolean) {
              writer.uint32(8);
              writer.bool(input.boolean);
            }
            // property "bigint";
            if (null !== input.bigint) {
              writer.uint32(16);
              writer.int64(input.bigint);
            }
            // property "number";
            if (null !== input.number) {
              writer.uint32(25);
              writer.double(input.number);
            }
            // property "string";
            if (null !== input.string) {
              writer.uint32(34);
              writer.string(input.string);
            }
            // property "constantBoolean";
            if (null !== input.constantBoolean) {
              writer.uint32(40);
              writer.bool(input.constantBoolean);
            }
            // property "constantBigint";
            if (null !== input.constantBigint) {
              writer.uint32(48);
              writer.uint64(input.constantBigint);
            }
            // property "constantNumber";
            if (null !== input.constantNumber) {
              writer.uint32(56);
              writer.int32(input.constantNumber);
            }
            // property "constantString";
            if (null !== input.constantString) {
              writer.uint32(66);
              writer.string(input.constantString);
            }
            // property "nullableArray";
            if (null !== input.nullableArray) {
              if (0 !== input.nullableArray.length) {
                writer.uint32(74);
                writer.fork();
                for (const elem of input.nullableArray) {
                  writer.double(elem);
                }
                writer.ldelim();
              }
            }
          };
          //ObjectHttpNullable;
          $peo0(input);
          return writer;
        };
        const sizer = encoder(new $ProtobufSizer());
        const writer = encoder(new $ProtobufWriter(sizer));
        return writer.buffer();
      })(input),
    decode: (input: Uint8Array): typia.Resolved<ObjectHttpNullable> => {
      const $ProtobufReader =
        require("typia/lib/functional/$ProtobufReader").$ProtobufReader;
      const $pdo0 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          boolean: null as any,
          bigint: null as any,
          number: null as any,
          string: null as any,
          constantBoolean: null as any,
          constantBigint: null as any,
          constantNumber: null as any,
          constantString: null as any,
          nullableArray: null as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // bool;
              output.boolean = reader.bool();
              break;
            case 2:
              // int64;
              output.bigint = reader.int64();
              break;
            case 3:
              // double;
              output.number = reader.double();
              break;
            case 4:
              // string;
              output.string = reader.string();
              break;
            case 5:
              // bool;
              output.constantBoolean = reader.bool();
              break;
            case 6:
              // uint64;
              output.constantBigint = reader.uint64();
              break;
            case 7:
              // int32;
              output.constantNumber = reader.int32();
              break;
            case 8:
              // string;
              output.constantString = reader.string();
              break;
            case 9:
              // type: Array<number>;
              output.nullableArray ??= [] as any[];
              if (2 === (tag & 7)) {
                const piece = reader.uint32() + reader.index();
                while (reader.index() < piece)
                  output.nullableArray.push(reader.double());
              } else output.nullableArray.push(reader.double());
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
      'syntax = "proto3";\n\nmessage ObjectHttpNullable {\n    optional bool boolean = 1;\n    optional int64 bigint = 2;\n    optional double number = 3;\n    optional string string = 4;\n    optional bool constantBoolean = 5;\n    optional uint64 constantBigint = 6;\n    optional int32 constantNumber = 7;\n    optional string constantString = 8;\n    repeated double nullableArray = 9;\n}',
  });
