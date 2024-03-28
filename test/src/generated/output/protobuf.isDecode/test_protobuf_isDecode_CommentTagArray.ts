import typia from "typia";

import { _test_protobuf_isDecode } from "../../../internal/_test_protobuf_isDecode";
import { CommentTagArray } from "../../../structures/CommentTagArray";

export const test_protobuf_isDecode_CommentTagArray = _test_protobuf_isDecode(
  "CommentTagArray",
)<CommentTagArray>(CommentTagArray)({
  decode: (input) =>
    ((input: Uint8Array): import("typia").Resolved<CommentTagArray> | null => {
      const is = (input: any): input is CommentTagArray => {
        const $io0 = (input: any): boolean =>
          Array.isArray(input.value) &&
          input.value.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io1(elem),
          );
        const $io1 = (input: any): boolean =>
          Array.isArray(input.items) &&
          3 <= input.items.length &&
          input.items.length <= 3 &&
          input.items.every((elem: any) => "string" === typeof elem) &&
          Array.isArray(input.minItems) &&
          3 <= input.minItems.length &&
          input.minItems.every(
            (elem: any) => "number" === typeof elem && Number.isFinite(elem),
          ) &&
          Array.isArray(input.both) &&
          3 <= input.both.length &&
          input.both.length <= 7 &&
          input.both.every((elem: any) => "string" === typeof elem) &&
          Array.isArray(input.equal) &&
          10 <= input.equal.length &&
          input.equal.length <= 10 &&
          input.equal.every(
            (elem: any) => "number" === typeof elem && Number.isFinite(elem),
          );
        return "object" === typeof input && null !== input && $io0(input);
      };
      const decode = (
        input: Uint8Array,
      ): import("typia").Resolved<CommentTagArray> => {
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
                // type: Array<CommentTagArray.Type>;
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
            items: [] as any,
            minItems: [] as any,
            both: [] as any,
            equal: [] as any,
          } as any;
          while (reader.index() < length) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                // type: Array<string>;
                output.items.push(reader.string());
                break;
              case 2:
                // type: Array<number>;
                if (2 === (tag & 7)) {
                  const piece = reader.uint32() + reader.index();
                  while (reader.index() < piece)
                    output.minItems.push(reader.double());
                } else output.minItems.push(reader.double());
                break;
              case 3:
                // type: Array<string>;
                output.both.push(reader.string());
                break;
              case 4:
                // type: Array<number>;
                if (2 === (tag & 7)) {
                  const piece = reader.uint32() + reader.index();
                  while (reader.index() < piece)
                    output.equal.push(reader.double());
                } else output.equal.push(reader.double());
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
  encode: (input: CommentTagArray): Uint8Array => {
    const $Sizer = (typia.protobuf.createEncode as any).Sizer;
    const $Writer = (typia.protobuf.createEncode as any).Writer;
    const encoder = (writer: any): any => {
      const $peo0 = (input: any): any => {
        // property "value";
        if (0 !== input.value.length) {
          for (const elem of input.value) {
            // 1 -> CommentTagArray.Type;
            writer.uint32(10);
            writer.fork();
            $peo1(elem);
            writer.ldelim();
          }
        }
      };
      const $peo1 = (input: any): any => {
        // property "items";
        if (0 !== input.items.length) {
          for (const elem of input.items) {
            writer.uint32(10);
            writer.string(elem);
          }
        }
        // property "minItems";
        if (0 !== input.minItems.length) {
          writer.uint32(18);
          writer.fork();
          for (const elem of input.minItems) {
            writer.double(elem);
          }
          writer.ldelim();
        }
        // property "both";
        if (0 !== input.both.length) {
          for (const elem of input.both) {
            writer.uint32(26);
            writer.string(elem);
          }
        }
        // property "equal";
        if (0 !== input.equal.length) {
          writer.uint32(34);
          writer.fork();
          for (const elem of input.equal) {
            writer.double(elem);
          }
          writer.ldelim();
        }
      };
      const $io1 = (input: any): boolean =>
        Array.isArray(input.items) &&
        3 <= input.items.length &&
        input.items.length <= 3 &&
        input.items.every((elem: any) => "string" === typeof elem) &&
        Array.isArray(input.minItems) &&
        3 <= input.minItems.length &&
        input.minItems.every((elem: any) => "number" === typeof elem) &&
        Array.isArray(input.both) &&
        3 <= input.both.length &&
        input.both.length <= 7 &&
        input.both.every((elem: any) => "string" === typeof elem) &&
        Array.isArray(input.equal) &&
        10 <= input.equal.length &&
        input.equal.length <= 10 &&
        input.equal.every((elem: any) => "number" === typeof elem);
      //CommentTagArray;
      $peo0(input);
      return writer;
    };
    const sizer = encoder(new $Sizer());
    const writer = encoder(new $Writer(sizer));
    return writer.buffer();
  },
});
