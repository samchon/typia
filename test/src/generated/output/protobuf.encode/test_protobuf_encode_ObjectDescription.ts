import typia from "typia";

import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { ObjectDescription } from "../../../structures/ObjectDescription";

export const test_protobuf_encode_ObjectDescription = _test_protobuf_encode(
  "ObjectDescription",
)<ObjectDescription>(ObjectDescription)({
  encode: (input) =>
    ((input: ObjectDescription): Uint8Array => {
      const $Sizer = (typia.protobuf.encode as any).Sizer;
      const $Writer = (typia.protobuf.encode as any).Writer;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "id";
          writer.uint32(10);
          writer.string(input.id);
          // property "deprecated";
          writer.uint32(16);
          writer.bool(input.deprecated);
          // property "title";
          writer.uint32(26);
          writer.string(input.title);
          // property "descriptions";
          if (0 !== input.descriptions.length) {
            for (const elem of input.descriptions) {
              writer.uint32(34);
              writer.string(elem);
            }
          }
          // property "newLine";
          writer.uint32(41);
          writer.double(input.newLine);
        };
        //ObjectDescription;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $Sizer());
      const writer = encoder(new $Writer(sizer));
      return writer.buffer();
    })(input),
  decode: (input: Uint8Array): typia.Resolved<ObjectDescription> => {
    const $Reader = (typia.protobuf.createDecode as any).Reader;
    const $pdo0 = (reader: any, length: number = -1): any => {
      length = length < 0 ? reader.size() : reader.index() + length;
      const output = {
        id: "" as any,
        deprecated: undefined as any,
        title: "" as any,
        descriptions: [] as any,
        newLine: undefined as any,
      } as any;
      while (reader.index() < length) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            // string;
            output.id = reader.string();
            break;
          case 2:
            // bool;
            output.deprecated = reader.bool();
            break;
          case 3:
            // string;
            output.title = reader.string();
            break;
          case 4:
            // type: Array<string>;
            output.descriptions.push(reader.string());
            break;
          case 5:
            // double;
            output.newLine = reader.double();
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
    'syntax = "proto3";\n\nmessage ObjectDescription {\n    required string id = 1;\n    required bool deprecated = 2;\n    required string title = 3;\n    repeated string descriptions = 4;\n    required double newLine = 5;\n}',
});
