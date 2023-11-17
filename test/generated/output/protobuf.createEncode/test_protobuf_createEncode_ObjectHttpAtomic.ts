import typia from "../../../../src";
import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { ObjectHttpAtomic } from "../../../structures/ObjectHttpAtomic";

export const test_protobuf_createEncode_ObjectHttpAtomic =
  _test_protobuf_encode("ObjectHttpAtomic")<ObjectHttpAtomic>(ObjectHttpAtomic)(
    {
      encode: (input: ObjectHttpAtomic): Uint8Array => {
        const $Sizer = (typia.protobuf.createEncode as any).Sizer;
        const $Writer = (typia.protobuf.createEncode as any).Writer;
        const encoder = (writer: any): any => {
          const $peo0 = (input: any): any => {
            // property "boolean";
            writer.uint32(8);
            writer.bool(input.boolean);
            // property "bigint";
            writer.uint32(16);
            writer.int64(input.bigint);
            // property "number";
            writer.uint32(25);
            writer.double(input.number);
            // property "string";
            writer.uint32(34);
            writer.string(input.string);
          };
          //ObjectHttpAtomic;
          $peo0(input);
          return writer;
        };
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
      },
      decode: (input: Uint8Array): typia.Resolved<ObjectHttpAtomic> => {
        const $Reader = (typia.protobuf.createDecode as any).Reader;
        const $pdo0 = (reader: any, length: number = -1): any => {
          length = length < 0 ? reader.size() : reader.index() + length;
          const output = {
            boolean: undefined as any,
            bigint: undefined as any,
            number: undefined as any,
            string: "" as any,
          };
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
        'syntax = "proto3";\n\nmessage ObjectHttpAtomic {\n    required bool boolean = 1;\n    required int64 bigint = 2;\n    required double number = 3;\n    required string string = 4;\n}',
    },
  );
