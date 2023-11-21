import typia from "../../../../src";
import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { ObjectHttpArray } from "../../../structures/ObjectHttpArray";

export const test_protobuf_createEncode_ObjectHttpArray = _test_protobuf_encode(
  "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)({
  encode: (input: ObjectHttpArray): Uint8Array => {
    const $Sizer = (typia.protobuf.createEncode as any).Sizer;
    const $Writer = (typia.protobuf.createEncode as any).Writer;
    const encoder = (writer: any): any => {
      const $peo0 = (input: any): any => {
        // property "booleans";
        if (0 !== input.booleans.length) {
          writer.uint32(10);
          writer.fork();
          for (const elem of input.booleans) {
            writer.bool(elem);
          }
          writer.ldelim();
        }
        // property "bigints";
        if (0 !== input.bigints.length) {
          writer.uint32(18);
          writer.fork();
          for (const elem of input.bigints) {
            writer.int64(elem);
          }
          writer.ldelim();
        }
        // property "numbers";
        if (0 !== input.numbers.length) {
          writer.uint32(26);
          writer.fork();
          for (const elem of input.numbers) {
            writer.double(elem);
          }
          writer.ldelim();
        }
        // property "strings";
        if (0 !== input.strings.length) {
          for (const elem of input.strings) {
            writer.uint32(34);
            writer.string(elem);
          }
        }
        // property "templates";
        if (0 !== input.templates.length) {
          for (const elem of input.templates) {
            writer.uint32(42);
            writer.string(elem);
          }
        }
      };
      //ObjectHttpArray;
      $peo0(input);
      return writer;
    };
    const sizer = encoder(new $Sizer());
    const writer = encoder(new $Writer(sizer));
    return writer.buffer();
  },
  decode: (input: Uint8Array): typia.Resolved<ObjectHttpArray> => {
    const $Reader = (typia.protobuf.createDecode as any).Reader;
    const $pdo0 = (reader: any, length: number = -1): any => {
      length = length < 0 ? reader.size() : reader.index() + length;
      const output = {
        booleans: [] as any,
        bigints: [] as any,
        numbers: [] as any,
        strings: [] as any,
        templates: [] as any,
      } as any;
      while (reader.index() < length) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            // type: Array<boolean>;
            if (2 === (tag & 7)) {
              const piece = reader.uint32() + reader.index();
              while (reader.index() < piece)
                output.booleans.push(reader.bool());
            } else output.booleans.push(reader.bool());
            break;
          case 2:
            // type: Array<bigint>;
            if (2 === (tag & 7)) {
              const piece = reader.uint32() + reader.index();
              while (reader.index() < piece)
                output.bigints.push(reader.int64());
            } else output.bigints.push(reader.int64());
            break;
          case 3:
            // type: Array<number>;
            if (2 === (tag & 7)) {
              const piece = reader.uint32() + reader.index();
              while (reader.index() < piece)
                output.numbers.push(reader.double());
            } else output.numbers.push(reader.double());
            break;
          case 4:
            // type: Array<string>;
            output.strings.push(reader.string());
            break;
          case 5:
            // type: Array<`something_${string}`>;
            output.templates.push(reader.string());
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
    'syntax = "proto3";\n\nmessage ObjectHttpArray {\n    repeated bool booleans = 1;\n    repeated int64 bigints = 2;\n    repeated double numbers = 3;\n    repeated string strings = 4;\n    repeated string templates = 5;\n}',
});
