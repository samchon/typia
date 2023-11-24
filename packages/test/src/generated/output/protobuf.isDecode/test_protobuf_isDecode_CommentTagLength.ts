import typia from "typia";

import { _test_protobuf_isDecode } from "../../../internal/_test_protobuf_isDecode";
import { CommentTagLength } from "../../../structures/CommentTagLength";

export const test_protobuf_createIsDecode_CommentTagLength =
  _test_protobuf_isDecode("CommentTagLength")<CommentTagLength>(
    CommentTagLength,
  )({
    decode: (input) =>
      ((input: Uint8Array): typia.Resolved<CommentTagLength> | null => {
        const is = (input: any): input is CommentTagLength => {
          const $io0 = (input: any): boolean =>
            Array.isArray(input.value) &&
            input.value.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io1(elem),
            );
          const $io1 = (input: any): boolean =>
            "string" === typeof input.fixed &&
            5 <= input.fixed.length &&
            input.fixed.length <= 5 &&
            "string" === typeof input.minimum &&
            3 <= input.minimum.length &&
            "string" === typeof input.maximum &&
            input.maximum.length <= 7 &&
            "string" === typeof input.minimum_and_maximum &&
            3 <= input.minimum_and_maximum.length &&
            input.minimum_and_maximum.length <= 7 &&
            "string" === typeof input.equal &&
            10 <= input.equal.length &&
            input.equal.length <= 19;
          return "object" === typeof input && null !== input && $io0(input);
        };
        const decode = (
          input: Uint8Array,
        ): typia.Resolved<CommentTagLength> => {
          const $Reader = (typia.protobuf.isDecode as any).Reader;
          const $pdo0 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
              value: [] as any,
            } as any;
            while (reader.index() < length) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  // type: Array<CommentTagLength.Type>;
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
              fixed: "" as any,
              minimum: "" as any,
              maximum: "" as any,
              minimum_and_maximum: "" as any,
              equal: "" as any,
            } as any;
            while (reader.index() < length) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  // string;
                  output.fixed = reader.string();
                  break;
                case 2:
                  // string;
                  output.minimum = reader.string();
                  break;
                case 3:
                  // string;
                  output.maximum = reader.string();
                  break;
                case 4:
                  // string;
                  output.minimum_and_maximum = reader.string();
                  break;
                case 5:
                  // string;
                  output.equal = reader.string();
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
        };
        const output = decode(input);
        if (!is(output)) return null;
        return output;
      })(input),
    encode: (input: CommentTagLength): Uint8Array => {
      const $Sizer = (typia.protobuf.createEncode as any).Sizer;
      const $Writer = (typia.protobuf.createEncode as any).Writer;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "value";
          if (0 !== input.value.length) {
            for (const elem of input.value) {
              // 1 -> CommentTagLength.Type;
              writer.uint32(10);
              writer.fork();
              $peo1(elem);
              writer.ldelim();
            }
          }
        };
        const $peo1 = (input: any): any => {
          // property "fixed";
          writer.uint32(10);
          writer.string(input.fixed);
          // property "minimum";
          writer.uint32(18);
          writer.string(input.minimum);
          // property "maximum";
          writer.uint32(26);
          writer.string(input.maximum);
          // property "minimum_and_maximum";
          writer.uint32(34);
          writer.string(input.minimum_and_maximum);
          // property "equal";
          writer.uint32(42);
          writer.string(input.equal);
        };
        const $io1 = (input: any): boolean =>
          "string" === typeof input.fixed &&
          5 <= input.fixed.length &&
          input.fixed.length <= 5 &&
          "string" === typeof input.minimum &&
          3 <= input.minimum.length &&
          "string" === typeof input.maximum &&
          input.maximum.length <= 7 &&
          "string" === typeof input.minimum_and_maximum &&
          3 <= input.minimum_and_maximum.length &&
          input.minimum_and_maximum.length <= 7 &&
          "string" === typeof input.equal &&
          10 <= input.equal.length &&
          input.equal.length <= 19;
        //CommentTagLength;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $Sizer());
      const writer = encoder(new $Writer(sizer));
      return writer.buffer();
    },
  });
