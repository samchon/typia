import typia from "typia";

import { _test_protobuf_decode } from "../../../internal/_test_protobuf_decode";
import { ObjectHttpConstant } from "../../../structures/ObjectHttpConstant";

export const test_protobuf_createDecode_ObjectHttpConstant =
  _test_protobuf_decode("ObjectHttpConstant")<ObjectHttpConstant>(
    ObjectHttpConstant,
  )({
    decode: (input: Uint8Array): typia.Resolved<ObjectHttpConstant> => {
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
          template: undefined as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // bool;
              output.boolean = reader.bool();
              break;
            case 2:
              // uint64;
              output.bigint = reader.uint64();
              break;
            case 3:
              // int32;
              output.number = reader.int32();
              break;
            case 4:
              // string;
              output.string = reader.string();
              break;
            case 5:
              // string;
              output.template = reader.string();
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
    encode: (input: ObjectHttpConstant): Uint8Array => {
      // @ts-ignore;
      declare const require: (lib: string) => any;
      const $ProtobufSizer =
        require("typia/lib/functional/$ProtobufSizer").$ProtobufSizer;
      const $ProtobufWriter =
        require("typia/lib/functional/$ProtobufWriter").$ProtobufWriter;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "boolean";
          writer.uint32(8);
          writer.bool(input.boolean);
          // property "bigint";
          writer.uint32(16);
          writer.uint64(input.bigint);
          // property "number";
          writer.uint32(24);
          writer.int32(input.number);
          // property "string";
          writer.uint32(34);
          writer.string(input.string);
          // property "template";
          writer.uint32(42);
          writer.string(input.template);
        };
        //ObjectHttpConstant;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $ProtobufSizer());
      const writer = encoder(new $ProtobufWriter(sizer));
      return writer.buffer();
    },
  });
