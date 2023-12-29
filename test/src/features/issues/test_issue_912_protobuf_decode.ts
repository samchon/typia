import typia, { tags } from "typia";
import { protobuf_equal_to } from "../../helpers/protobuf_equal_to";

export const test_issue_912_protobuf_decode = () => {
  type Foo = { id: number & tags.Type<'int64'> }

  const obj = { id: 12 }
  const encoded = typia.protobuf.encode<Foo>(obj)
  const padded = Buffer.concat([
    Buffer.from("head"),
    Buffer.from(encoded, encoded.byteOffset, encoded.byteLength),
    Buffer.from("tail")
  ])
  const buffer = padded.subarray(4, 4 + encoded.length)

  let decoded1: Foo
  let decoded2: Foo

  try {
    decoded1 = typia.protobuf.decode<Foo>(encoded)
    decoded2 = typia.protobuf.decode<Foo>(buffer)
  } catch (e) {
    throw new Error(
      "Bug on typia.protobuf.decode(): decode Buffer with shared ArrayBuffer throws.",
    )
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


