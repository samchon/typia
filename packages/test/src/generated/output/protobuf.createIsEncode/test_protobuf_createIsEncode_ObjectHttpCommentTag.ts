import typia from "typia";

import { _test_protobuf_isEncode } from "../../../internal/_test_protobuf_isEncode";
import { ObjectHttpCommentTag } from "../../../structures/ObjectHttpCommentTag";

export const test_protobuf_createIsEncode_ObjectHttpCommentTag =
  _test_protobuf_isEncode("ObjectHttpCommentTag")<ObjectHttpCommentTag>(
    ObjectHttpCommentTag,
  )({
    encode: (input: ObjectHttpCommentTag): Uint8Array | null => {
      const is = (input: any): input is ObjectHttpCommentTag => {
        const $io0 = (input: any): boolean =>
          "number" === typeof input.int &&
          Math.floor(input.int) === input.int &&
          -2147483648 <= input.int &&
          input.int <= 2147483647 &&
          "bigint" === typeof input.uint64 &&
          BigInt(0) <= input.uint64 &&
          "string" === typeof input.uuid &&
          /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
            input.uuid,
          ) &&
          Array.isArray(input.items) &&
          10 <= input.items.length &&
          input.items.length <= 100 &&
          input.items.every(
            (elem: any) => "number" === typeof elem && Number.isFinite(elem),
          );
        return "object" === typeof input && null !== input && $io0(input);
      };
      const encode = (input: ObjectHttpCommentTag): Uint8Array => {
        const $Sizer = (typia.protobuf.createIsEncode as any).Sizer;
        const $Writer = (typia.protobuf.createIsEncode as any).Writer;
        const encoder = (writer: any): any => {
          const $peo0 = (input: any): any => {
            // property "int";
            writer.uint32(8);
            writer.int32(input.int);
            // property "uint64";
            writer.uint32(16);
            writer.uint64(input.uint64);
            // property "uuid";
            writer.uint32(26);
            writer.string(input.uuid);
            // property "items";
            if (0 !== input.items.length) {
              writer.uint32(34);
              writer.fork();
              for (const elem of input.items) {
                writer.double(elem);
              }
              writer.ldelim();
            }
          };
          //ObjectHttpCommentTag;
          $peo0(input);
          return writer;
        };
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
      };
      return is(input) ? encode(input) : null;
    },
    decode: (input: Uint8Array): typia.Resolved<ObjectHttpCommentTag> => {
      const $Reader = (typia.protobuf.createDecode as any).Reader;
      const $pdo0 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          int: undefined as any,
          uint64: undefined as any,
          uuid: "" as any,
          items: [] as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // int32;
              output.int = reader.int32();
              break;
            case 2:
              // uint64;
              output.uint64 = reader.uint64();
              break;
            case 3:
              // string;
              output.uuid = reader.string();
              break;
            case 4:
              // type: Array<number>;
              if (2 === (tag & 7)) {
                const piece = reader.uint32() + reader.index();
                while (reader.index() < piece)
                  output.items.push(reader.double());
              } else output.items.push(reader.double());
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
      'syntax = "proto3";\n\nmessage ObjectHttpCommentTag {\n    required int32 int = 1;\n    required uint64 uint64 = 2;\n    required string uuid = 3;\n    repeated double items = 4;\n}',
  });
