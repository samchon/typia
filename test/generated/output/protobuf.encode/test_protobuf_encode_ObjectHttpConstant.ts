import typia from "../../../../src";
import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { ObjectHttpConstant } from "../../../structures/ObjectHttpConstant";

export const test_protobuf_createEncode_ObjectHttpConstant =
  _test_protobuf_encode("ObjectHttpConstant")<ObjectHttpConstant>(
    ObjectHttpConstant,
  )({
    encode: (input) =>
      ((input: ObjectHttpConstant): Uint8Array => {
        const $Sizer = (typia.protobuf.encode as any).Sizer;
        const $Writer = (typia.protobuf.encode as any).Writer;
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
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
      })(input),
    decode: (input: Uint8Array): typia.Resolved<ObjectHttpConstant> => {
      const $Reader = (typia.protobuf.createDecode as any).Reader;
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
      const reader = new $Reader(input);
      return $pdo0(reader);
    },
    message:
      'syntax = "proto3";\n\nmessage ObjectHttpConstant {\n    required bool boolean = 1;\n    required uint64 bigint = 2;\n    required int32 number = 3;\n    required string string = 4;\n    required string template = 5;\n}',
  });
