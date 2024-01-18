import typia from "typia";

import { _test_protobuf_decode } from "../../../internal/_test_protobuf_decode";
import { CommentTagInfinite } from "../../../structures/CommentTagInfinite";

export const test_protobuf_createDecode_CommentTagInfinite =
  _test_protobuf_decode("CommentTagInfinite")<CommentTagInfinite>(
    CommentTagInfinite,
  )({
    decode: (input) =>
      ((input: Uint8Array): typia.Resolved<CommentTagInfinite> => {
        // @ts-ignore;
        declare const require: (lib: string) => any;
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
      })(input),
    encode: (input: CommentTagInfinite): Uint8Array => {
      // @ts-ignore;
      declare const require: (lib: string) => any;
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
        //CommentTagInfinite;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $ProtobufSizer());
      const writer = encoder(new $ProtobufWriter(sizer));
      return writer.buffer();
    },
  });
