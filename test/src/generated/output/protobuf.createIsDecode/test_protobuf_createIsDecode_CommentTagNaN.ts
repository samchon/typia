import typia from "typia";

import { _test_protobuf_isDecode } from "../../../internal/_test_protobuf_isDecode";
import { CommentTagNaN } from "../../../structures/CommentTagNaN";

export const test_protobuf_createIsDecode_CommentTagNaN =
  _test_protobuf_isDecode("CommentTagNaN")<CommentTagNaN>(CommentTagNaN)({
    decode: (input: Uint8Array): typia.Resolved<CommentTagNaN> | null => {
      const is = (input: any): input is CommentTagNaN => {
        return (
          "object" === typeof input &&
          null !== input &&
          "number" === typeof (input as any).value &&
          Number.isFinite((input as any).value) &&
          "number" === typeof (input as any).ranged &&
          0 <= (input as any).ranged &&
          (input as any).ranged <= 100 &&
          "number" === typeof (input as any).minimum &&
          Number.isFinite((input as any).minimum) &&
          0 <= (input as any).minimum &&
          "number" === typeof (input as any).maximum &&
          Number.isFinite((input as any).maximum) &&
          (input as any).maximum <= 100 &&
          "number" === typeof (input as any).multipleOf &&
          (input as any).multipleOf % 3 === 0 &&
          "number" === typeof (input as any).typed &&
          Math.floor((input as any).typed) === (input as any).typed &&
          -2147483648 <= (input as any).typed &&
          (input as any).typed <= 2147483647
        );
      };
      const decode = (input: Uint8Array): typia.Resolved<CommentTagNaN> => {
        const $ProtobufReader =
          require("typia/lib/functional/$ProtobufReader").$ProtobufReader;
        const $pdo0 = (reader: any, length: number = -1): any => {
          length = length < 0 ? reader.size() : reader.index() + length;
          const output = {
            value: undefined as any,
            ranged: undefined as any,
            minimum: undefined as any,
            maximum: undefined as any,
            multipleOf: undefined as any,
            typed: undefined as any,
          } as any;
          while (reader.index() < length) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                // double;
                output.value = reader.double();
                break;
              case 2:
                // double;
                output.ranged = reader.double();
                break;
              case 3:
                // double;
                output.minimum = reader.double();
                break;
              case 4:
                // double;
                output.maximum = reader.double();
                break;
              case 5:
                // double;
                output.multipleOf = reader.double();
                break;
              case 6:
                // int32;
                output.typed = reader.int32();
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
      };
      const output = decode(input);
      if (!is(output)) return null;
      return output;
    },
    encode: (input: CommentTagNaN): Uint8Array => {
      const $ProtobufSizer =
        require("typia/lib/functional/$ProtobufSizer").$ProtobufSizer;
      const $ProtobufWriter =
        require("typia/lib/functional/$ProtobufWriter").$ProtobufWriter;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "value";
          writer.uint32(9);
          writer.double(input.value);
          // property "ranged";
          writer.uint32(17);
          writer.double(input.ranged);
          // property "minimum";
          writer.uint32(25);
          writer.double(input.minimum);
          // property "maximum";
          writer.uint32(33);
          writer.double(input.maximum);
          // property "multipleOf";
          writer.uint32(41);
          writer.double(input.multipleOf);
          // property "typed";
          writer.uint32(48);
          writer.int32(input.typed);
        };
        //CommentTagNaN;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $ProtobufSizer());
      const writer = encoder(new $ProtobufWriter(sizer));
      return writer.buffer();
    },
  });
