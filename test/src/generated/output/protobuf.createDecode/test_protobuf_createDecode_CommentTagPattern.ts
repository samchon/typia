import typia from "typia";

import { _test_protobuf_decode } from "../../../internal/_test_protobuf_decode";
import { CommentTagPattern } from "../../../structures/CommentTagPattern";

export const test_protobuf_createDecode_CommentTagPattern =
  _test_protobuf_decode("CommentTagPattern")<CommentTagPattern>(
    CommentTagPattern,
  )({
    decode: (
      input: Uint8Array,
    ): import("typia").Resolved<CommentTagPattern> => {
      const $Reader = (typia.protobuf.createDecode as any).Reader;
      const $pdo0 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          uuid: "" as any,
          email: "" as any,
          ipv4: "" as any,
          ipv6: "" as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // string;
              output.uuid = reader.string();
              break;
            case 2:
              // string;
              output.email = reader.string();
              break;
            case 3:
              // string;
              output.ipv4 = reader.string();
              break;
            case 4:
              // string;
              output.ipv6 = reader.string();
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
    encode: (input: CommentTagPattern): Uint8Array => {
      const $Sizer = (typia.protobuf.createEncode as any).Sizer;
      const $Writer = (typia.protobuf.createEncode as any).Writer;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "uuid";
          writer.uint32(10);
          writer.string(input.uuid);
          // property "email";
          writer.uint32(18);
          writer.string(input.email);
          // property "ipv4";
          writer.uint32(26);
          writer.string(input.ipv4);
          // property "ipv6";
          writer.uint32(34);
          writer.string(input.ipv6);
        };
        //CommentTagPattern;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $Sizer());
      const writer = encoder(new $Writer(sizer));
      return writer.buffer();
    },
  });
