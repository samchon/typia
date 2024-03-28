import typia from "typia";

import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { ClassNonPublic } from "../../../structures/ClassNonPublic";

export const test_protobuf_encode_ClassNonPublic = _test_protobuf_encode(
  "ClassNonPublic",
)<ClassNonPublic>(ClassNonPublic)({
  encode: (input) =>
    ((input: ClassNonPublic): Uint8Array => {
      const $Sizer = (typia.protobuf.encode as any).Sizer;
      const $Writer = (typia.protobuf.encode as any).Writer;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "implicit";
          writer.uint32(10);
          writer.string(input.implicit);
          // property "shown";
          writer.uint32(18);
          writer.string(input.shown);
        };
        //ClassNonPublic.Accessor;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $Sizer());
      const writer = encoder(new $Writer(sizer));
      return writer.buffer();
    })(input),
  decode: (input: Uint8Array): import("typia").Resolved<ClassNonPublic> => {
    const $Reader = (typia.protobuf.createDecode as any).Reader;
    const $pdo0 = (reader: any, length: number = -1): any => {
      length = length < 0 ? reader.size() : reader.index() + length;
      const output = {
        implicit: "" as any,
        shown: "" as any,
      } as any;
      while (reader.index() < length) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            // string;
            output.implicit = reader.string();
            break;
          case 2:
            // string;
            output.shown = reader.string();
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
    'syntax = "proto3";\n\nmessage ClassNonPublic {\n  message Accessor {\n    required string implicit = 1;\n    required string shown = 2;\n  }\n}',
});
