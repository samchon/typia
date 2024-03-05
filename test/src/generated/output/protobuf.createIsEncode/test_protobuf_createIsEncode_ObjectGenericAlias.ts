import typia from "typia";

import { _test_protobuf_isEncode } from "../../../internal/_test_protobuf_isEncode";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_protobuf_createIsEncode_ObjectGenericAlias =
  _test_protobuf_isEncode("ObjectGenericAlias")<ObjectGenericAlias>(
    ObjectGenericAlias,
  )({
    encode: (input: ObjectGenericAlias): Uint8Array | null => {
      const is = (input: any): input is ObjectGenericAlias => {
        return (
          "object" === typeof input &&
          null !== input &&
          "string" === typeof (input as any).value
        );
      };
      const encode = (input: ObjectGenericAlias): Uint8Array => {
        const $Sizer = (typia.protobuf.createIsEncode as any).Sizer;
        const $Writer = (typia.protobuf.createIsEncode as any).Writer;
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
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
      };
      return is(input) ? encode(input) : null;
    },
    decode: (
      input: Uint8Array,
    ): import("typia").Resolved<ObjectGenericAlias> => {
      const $Reader = (typia.protobuf.createDecode as any).Reader;
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
      const reader = new $Reader(input);
      return $pdo0(reader);
    },
    message:
      'syntax = "proto3";\n\nmessage ObjectGenericAlias {\n  message Alias {\n    required string value = 1;\n  }\n}',
  });
