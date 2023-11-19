import typia from "../../../../src";
import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { CommentTagRange } from "../../../structures/CommentTagRange";

export const test_protobuf_createEncode_CommentTagRange = _test_protobuf_encode(
  "CommentTagRange",
)<CommentTagRange>(CommentTagRange)({
  encode: (input) =>
    ((input: CommentTagRange): Uint8Array => {
      const $Sizer = (typia.protobuf.encode as any).Sizer;
      const $Writer = (typia.protobuf.encode as any).Writer;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "value";
          if (0 !== input.value.length) {
            for (const elem of input.value) {
              // 1 -> CommentTagRange.Type;
              writer.uint32(10);
              writer.fork();
              $peo1(elem);
              writer.ldelim();
            }
          }
        };
        const $peo1 = (input: any): any => {
          // property "greater";
          writer.uint32(8);
          writer.int32(input.greater);
          // property "greater_equal";
          writer.uint32(16);
          writer.int32(input.greater_equal);
          // property "less";
          writer.uint32(24);
          writer.int32(input.less);
          // property "less_equal";
          writer.uint32(32);
          writer.int32(input.less_equal);
          // property "greater_less";
          writer.uint32(40);
          writer.int32(input.greater_less);
          // property "greater_equal_less";
          writer.uint32(48);
          writer.int32(input.greater_equal_less);
          // property "greater_less_equal";
          writer.uint32(56);
          writer.int32(input.greater_less_equal);
          // property "greater_equal_less_equal";
          writer.uint32(64);
          writer.int32(input.greater_equal_less_equal);
          // property "equal";
          writer.uint32(72);
          writer.int32(input.equal);
        };
        const $io1 = (input: any): boolean =>
          "number" === typeof input.greater &&
          Math.floor(input.greater) === input.greater &&
          -2147483648 <= input.greater &&
          input.greater <= 2147483647 &&
          3 < input.greater &&
          "number" === typeof input.greater_equal &&
          Math.floor(input.greater_equal) === input.greater_equal &&
          -2147483648 <= input.greater_equal &&
          input.greater_equal <= 2147483647 &&
          3 <= input.greater_equal &&
          "number" === typeof input.less &&
          Math.floor(input.less) === input.less &&
          -2147483648 <= input.less &&
          input.less <= 2147483647 &&
          input.less < 7 &&
          "number" === typeof input.less_equal &&
          Math.floor(input.less_equal) === input.less_equal &&
          -2147483648 <= input.less_equal &&
          input.less_equal <= 2147483647 &&
          input.less_equal <= 7 &&
          "number" === typeof input.greater_less &&
          Math.floor(input.greater_less) === input.greater_less &&
          -2147483648 <= input.greater_less &&
          input.greater_less <= 2147483647 &&
          3 < input.greater_less &&
          input.greater_less < 7 &&
          "number" === typeof input.greater_equal_less &&
          Math.floor(input.greater_equal_less) === input.greater_equal_less &&
          -2147483648 <= input.greater_equal_less &&
          input.greater_equal_less <= 2147483647 &&
          3 <= input.greater_equal_less &&
          input.greater_equal_less < 7 &&
          "number" === typeof input.greater_less_equal &&
          Math.floor(input.greater_less_equal) === input.greater_less_equal &&
          -2147483648 <= input.greater_less_equal &&
          input.greater_less_equal <= 2147483647 &&
          3 < input.greater_less_equal &&
          input.greater_less_equal <= 7 &&
          "number" === typeof input.greater_equal_less_equal &&
          Math.floor(input.greater_equal_less_equal) ===
            input.greater_equal_less_equal &&
          -2147483648 <= input.greater_equal_less_equal &&
          input.greater_equal_less_equal <= 2147483647 &&
          3 <= input.greater_equal_less_equal &&
          input.greater_equal_less_equal <= 7 &&
          "number" === typeof input.equal &&
          Math.floor(input.equal) === input.equal &&
          -2147483648 <= input.equal &&
          input.equal <= 2147483647 &&
          10 <= input.equal &&
          input.equal <= 10;
        //CommentTagRange;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $Sizer());
      const writer = encoder(new $Writer(sizer));
      return writer.buffer();
    })(input),
  decode: (input: Uint8Array): typia.Resolved<CommentTagRange> => {
    const $Reader = (typia.protobuf.createDecode as any).Reader;
    const $pdo0 = (reader: any, length: number = -1): any => {
      length = length < 0 ? reader.size() : reader.index() + length;
      const output = {
        value: [] as any,
      } as any;
      while (reader.index() < length) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            // type: Array<CommentTagRange.Type>;
            output.value.push($pdo1(reader, reader.uint32()));
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return output;
    };
    const $pdo1 = (reader: any, length: number = -1): any => {
      length = length < 0 ? reader.size() : reader.index() + length;
      const output = {
        greater: undefined as any,
        greater_equal: undefined as any,
        less: undefined as any,
        less_equal: undefined as any,
        greater_less: undefined as any,
        greater_equal_less: undefined as any,
        greater_less_equal: undefined as any,
        greater_equal_less_equal: undefined as any,
        equal: undefined as any,
      } as any;
      while (reader.index() < length) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            // int32;
            output.greater = reader.int32();
            break;
          case 2:
            // int32;
            output.greater_equal = reader.int32();
            break;
          case 3:
            // int32;
            output.less = reader.int32();
            break;
          case 4:
            // int32;
            output.less_equal = reader.int32();
            break;
          case 5:
            // int32;
            output.greater_less = reader.int32();
            break;
          case 6:
            // int32;
            output.greater_equal_less = reader.int32();
            break;
          case 7:
            // int32;
            output.greater_less_equal = reader.int32();
            break;
          case 8:
            // int32;
            output.greater_equal_less_equal = reader.int32();
            break;
          case 9:
            // int32;
            output.equal = reader.int32();
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
    'syntax = "proto3";\n\nmessage CommentTagRange {\n    repeated CommentTagRange.Type value = 1;\n    message Type {\n        required int32 greater = 1;\n        required int32 greater_equal = 2;\n        required int32 less = 3;\n        required int32 less_equal = 4;\n        required int32 greater_less = 5;\n        required int32 greater_equal_less = 6;\n        required int32 greater_less_equal = 7;\n        required int32 greater_equal_less_equal = 8;\n        required int32 equal = 9;\n    }\n}',
});
