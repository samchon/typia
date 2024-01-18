import typia from "typia";

import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_protobuf_createEncode_ObjectGenericAlias =
  _test_protobuf_encode("ObjectGenericAlias")<ObjectGenericAlias>(
    ObjectGenericAlias,
  )({
    encode: (input: ObjectGenericAlias): Uint8Array => {
      // @ts-ignore;
      declare const require: (lib: string) => any;
      const $ProtobufSizer =
        require("typia/lib/functional/$ProtobufSizer").$ProtobufSizer;
      const $ProtobufWriter =
        require("typia/lib/functional/$ProtobufWriter").$ProtobufWriter;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "value";
          writer.uint32(10);
          writer.string(input.value);
        };
        //ObjectGenericAlias.Alias;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $ProtobufSizer());
      const writer = encoder(new $ProtobufWriter(sizer));
      return writer.buffer();
    },
    decode: (input: Uint8Array): typia.Resolved<ObjectGenericAlias> => {
      // @ts-ignore;
      declare const require: (lib: string) => any;
      const $ProtobufReader =
        require("typia/lib/functional/$ProtobufReader").$ProtobufReader;
      const $pdo0 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          value: "" as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // string;
              output.value = reader.string();
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
      'syntax = "proto3";\n\nmessage ObjectGenericAlias {\n    message Alias {\n        required string value = 1;\n    }\n}',
  });
