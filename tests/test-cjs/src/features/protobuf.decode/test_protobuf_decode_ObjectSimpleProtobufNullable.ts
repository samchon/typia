import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_protobuf_decode_ObjectSimpleProtobufNullable = (): void =>
  _test_protobuf_decode(
    "ObjectSimpleProtobufNullable",
  )<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)({
    decode: (input) =>
      typia.protobuf.decode<ObjectSimpleProtobufNullable>(input),
    encode: typia.protobuf.createEncode<ObjectSimpleProtobufNullable>(),
  });
