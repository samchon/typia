import typia from "typia";

import { _test_protobuf_decode } from "../../../internal/_test_protobuf_decode";
import { ObjectHttpUndefindable } from "../../../structures/ObjectHttpUndefindable";

export const test_protobuf_createDecode_ObjectHttpUndefindable =
  _test_protobuf_decode("ObjectHttpUndefindable")<ObjectHttpUndefindable>(
    ObjectHttpUndefindable,
  )({
    decode: (input) =>
      ((input: Uint8Array): typia.Resolved<ObjectHttpUndefindable> => {
        // @ts-ignore;
        declare const require: (lib: string) => any;
        const $ProtobufReader =
          require("typia/lib/functional/$ProtobufReader").$ProtobufReader;
        const $pdo0 = (reader: any, length: number = -1): any => {
          length = length < 0 ? reader.size() : reader.index() + length;
          const output = {
            boolean: undefined as any,
            bigint: undefined as any,
            number: undefined as any,
            string: undefined as any,
            constantBoolean: undefined as any,
            constantBigint: undefined as any,
            constantNumber: undefined as any,
            constantString: undefined as any,
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
              default:
                reader.skipType(tag & 7);
                break;
            }
          }
          return output;
        };
        const reader = new $ProtobufReader(input);
        return $pdo0(reader);
      })(input),
    encode: (input: ObjectHttpUndefindable): Uint8Array => {
      // @ts-ignore;
      declare const require: (lib: string) => any;
      const $ProtobufSizer =
        require("typia/lib/functional/$ProtobufSizer").$ProtobufSizer;
      const $ProtobufWriter =
        require("typia/lib/functional/$ProtobufWriter").$ProtobufWriter;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "boolean";
          if (undefined !== input.boolean) {
            writer.uint32(8);
            writer.bool(input.boolean);
          }
          // property "bigint";
          if (undefined !== input.bigint) {
            writer.uint32(16);
            writer.int64(input.bigint);
          }
          // property "number";
          if (undefined !== input.number) {
            writer.uint32(25);
            writer.double(input.number);
          }
          // property "string";
          if (undefined !== input.string) {
            writer.uint32(34);
            writer.string(input.string);
          }
          // property "constantBoolean";
          if (undefined !== input.constantBoolean) {
            writer.uint32(40);
            writer.bool(input.constantBoolean);
          }
          // property "constantBigint";
          if (undefined !== input.constantBigint) {
            writer.uint32(48);
            writer.uint64(input.constantBigint);
          }
          // property "constantNumber";
          if (undefined !== input.constantNumber) {
            writer.uint32(56);
            writer.int32(input.constantNumber);
          }
          // property "constantString";
          if (undefined !== input.constantString) {
            writer.uint32(66);
            writer.string(input.constantString);
          }
        };
        //ObjectHttpUndefindable;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $ProtobufSizer());
      const writer = encoder(new $ProtobufWriter(sizer));
      return writer.buffer();
    },
  });
