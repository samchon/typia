import typia from "typia";
import { _test_protobuf_isEncode } from "../../../internal/_test_protobuf_isEncode";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";
export const test_protobuf_createIsEncode_ObjectIntersection =
  _test_protobuf_isEncode("ObjectIntersection")<ObjectIntersection>(
    ObjectIntersection,
  )({
    encode: (input: ObjectIntersection): Uint8Array | null => {
      const is = (input: any): input is ObjectIntersection => {
        return (
          "object" === typeof input &&
          null !== input &&
          "string" === typeof (input as any).email &&
          "string" === typeof (input as any).name &&
          "boolean" === typeof (input as any).vulnerable
        );
      };
      const encode = (input: ObjectIntersection): Uint8Array => {
        const $Sizer = (typia.protobuf.createIsEncode as any).Sizer;
        const $Writer = (typia.protobuf.createIsEncode as any).Writer;
        const encoder = (writer: any): any => {
          const $peo0 = (input: any): any => {
            // property "email";
            writer.uint32(10);
            writer.string(input.email);
            // property "name";
            writer.uint32(18);
            writer.string(input.name);
            // property "vulnerable";
            writer.uint32(24);
            writer.bool(input.vulnerable);
          };
          //ObjectIntersection;
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
    ): import("typia").Resolved<ObjectIntersection> => {
      const $Reader = (typia.protobuf.createDecode as any).Reader;
      const $pdo0 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          email: "" as any,
          name: "" as any,
          vulnerable: undefined as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // string;
              output.email = reader.string();
              break;
            case 2:
              // string;
              output.name = reader.string();
              break;
            case 3:
              // bool;
              output.vulnerable = reader.bool();
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
      'syntax = "proto3";\n\nmessage ObjectIntersection {\n  required string email = 1;\n  required string name = 2;\n  required bool vulnerable = 3;\n}',
  });
