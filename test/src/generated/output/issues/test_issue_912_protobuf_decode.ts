import typia, { tags } from "typia";

import { protobuf_equal_to } from "../../../helpers/protobuf_equal_to";

export const test_issue_912_protobuf_decode = () => {
  type Foo = {
    id: number & tags.Type<"int64">;
  };
  const obj = { id: 12 };
  const encoded = ((input: Foo): Uint8Array => {
    const $Sizer = (typia.protobuf.encode as any).Sizer;
    const $Writer = (typia.protobuf.encode as any).Writer;
    const encoder = (writer: any): any => {
      const $peo0 = (input: any): any => {
        // property "id";
        writer.uint32(8);
        writer.int64(input.id);
      };
      //Foo;
      $peo0(input);
      return writer;
    };
    const sizer = encoder(new $Sizer());
    const writer = encoder(new $Writer(sizer));
    return writer.buffer();
  })(obj);
  const padded = Buffer.concat([
    Buffer.from("head"),
    Buffer.from(encoded, encoded.byteOffset, encoded.byteLength),
    Buffer.from("tail"),
  ]);
  const buffer = padded.subarray(4, 4 + encoded.length);
  let decoded1: Foo;
  let decoded2: Foo;
  try {
    decoded1 = ((input: Uint8Array): import("typia").Resolved<Foo> => {
      const $Reader = (typia.protobuf.decode as any).Reader;
      const $pdo0 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          id: undefined as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // int64;
              output.id = Number(reader.int64());
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
    })(encoded);
    decoded2 = ((input: Uint8Array): import("typia").Resolved<Foo> => {
      const $Reader = (typia.protobuf.decode as any).Reader;
      const $pdo0 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          id: undefined as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // int64;
              output.id = Number(reader.int64());
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
    })(buffer);
  } catch (e) {
    throw new Error(
      "Bug on typia.protobuf.decode(): decode Buffer with shared ArrayBuffer throws.",
    );
  }
  if (false === protobuf_equal_to("equal")(decoded1, obj))
    throw new Error(
      "Bug on typia.protobuf.decode(): failed to decode Uint8Array.",
    );
  if (false === protobuf_equal_to("equal")(decoded2, obj))
    throw new Error(
      "Bug on typia.protobuf.decode(): failed to decode Buffer with shared ArrayBuffer.",
    );
};
