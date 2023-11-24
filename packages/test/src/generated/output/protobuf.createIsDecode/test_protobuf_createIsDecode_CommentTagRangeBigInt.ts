import typia from "typia";

import { _test_protobuf_isDecode } from "../../../internal/_test_protobuf_isDecode";
import { CommentTagRangeBigInt } from "../../../structures/CommentTagRangeBigInt";

export const test_protobuf_createIsDecode_CommentTagRangeBigInt =
  _test_protobuf_isDecode("CommentTagRangeBigInt")<CommentTagRangeBigInt>(
    CommentTagRangeBigInt,
  )({
    decode: (
      input: Uint8Array,
    ): typia.Resolved<CommentTagRangeBigInt> | null => {
      const is = (input: any): input is CommentTagRangeBigInt => {
        const $io0 = (input: any): boolean =>
          Array.isArray(input.value) &&
          input.value.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io1(elem),
          );
        const $io1 = (input: any): boolean =>
          "bigint" === typeof input.greater &&
          3 < input.greater &&
          "bigint" === typeof input.greater_equal &&
          3 <= input.greater_equal &&
          "bigint" === typeof input.less &&
          input.less < 7 &&
          "bigint" === typeof input.less_equal &&
          input.less_equal <= 7 &&
          "bigint" === typeof input.greater_less &&
          3 < input.greater_less &&
          input.greater_less < 7 &&
          "bigint" === typeof input.greater_equal_less &&
          3 <= input.greater_equal_less &&
          input.greater_equal_less < 7 &&
          "bigint" === typeof input.greater_less_equal &&
          3 < input.greater_less_equal &&
          input.greater_less_equal <= 7 &&
          "bigint" === typeof input.greater_equal_less_equal &&
          3 <= input.greater_equal_less_equal &&
          input.greater_equal_less_equal <= 7 &&
          "bigint" === typeof input.equal &&
          10 <= input.equal &&
          input.equal <= 10;
        return "object" === typeof input && null !== input && $io0(input);
      };
      const decode = (
        input: Uint8Array,
      ): typia.Resolved<CommentTagRangeBigInt> => {
        const $Reader = (typia.protobuf.createIsDecode as any).Reader;
        const $pdo0 = (reader: any, length: number = -1): any => {
          length = length < 0 ? reader.size() : reader.index() + length;
          const output = {
            value: [] as any,
          } as any;
          while (reader.index() < length) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                // type: Array<CommentTagRangeBigInt.Type>;
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
                // int64;
                output.greater = reader.int64();
                break;
              case 2:
                // int64;
                output.greater_equal = reader.int64();
                break;
              case 3:
                // int64;
                output.less = reader.int64();
                break;
              case 4:
                // int64;
                output.less_equal = reader.int64();
                break;
              case 5:
                // int64;
                output.greater_less = reader.int64();
                break;
              case 6:
                // int64;
                output.greater_equal_less = reader.int64();
                break;
              case 7:
                // int64;
                output.greater_less_equal = reader.int64();
                break;
              case 8:
                // int64;
                output.greater_equal_less_equal = reader.int64();
                break;
              case 9:
                // int64;
                output.equal = reader.int64();
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
    },
    encode: (input: CommentTagRangeBigInt): Uint8Array => {
      const $Sizer = (typia.protobuf.createEncode as any).Sizer;
      const $Writer = (typia.protobuf.createEncode as any).Writer;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "value";
          if (0 !== input.value.length) {
            for (const elem of input.value) {
              // 1 -> CommentTagRangeBigInt.Type;
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
          writer.int64(input.greater);
          // property "greater_equal";
          writer.uint32(16);
          writer.int64(input.greater_equal);
          // property "less";
          writer.uint32(24);
          writer.int64(input.less);
          // property "less_equal";
          writer.uint32(32);
          writer.int64(input.less_equal);
          // property "greater_less";
          writer.uint32(40);
          writer.int64(input.greater_less);
          // property "greater_equal_less";
          writer.uint32(48);
          writer.int64(input.greater_equal_less);
          // property "greater_less_equal";
          writer.uint32(56);
          writer.int64(input.greater_less_equal);
          // property "greater_equal_less_equal";
          writer.uint32(64);
          writer.int64(input.greater_equal_less_equal);
          // property "equal";
          writer.uint32(72);
          writer.int64(input.equal);
        };
        const $io1 = (input: any): boolean =>
          "bigint" === typeof input.greater &&
          3 < input.greater &&
          "bigint" === typeof input.greater_equal &&
          3 <= input.greater_equal &&
          "bigint" === typeof input.less &&
          input.less < 7 &&
          "bigint" === typeof input.less_equal &&
          input.less_equal <= 7 &&
          "bigint" === typeof input.greater_less &&
          3 < input.greater_less &&
          input.greater_less < 7 &&
          "bigint" === typeof input.greater_equal_less &&
          3 <= input.greater_equal_less &&
          input.greater_equal_less < 7 &&
          "bigint" === typeof input.greater_less_equal &&
          3 < input.greater_less_equal &&
          input.greater_less_equal <= 7 &&
          "bigint" === typeof input.greater_equal_less_equal &&
          3 <= input.greater_equal_less_equal &&
          input.greater_equal_less_equal <= 7 &&
          "bigint" === typeof input.equal &&
          10 <= input.equal &&
          input.equal <= 10;
        //CommentTagRangeBigInt;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $Sizer());
      const writer = encoder(new $Writer(sizer));
      return writer.buffer();
    },
  });
