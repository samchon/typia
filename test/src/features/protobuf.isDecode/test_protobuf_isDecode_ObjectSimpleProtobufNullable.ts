import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_protobuf_isDecode_ObjectSimpleProtobufNullable = (): void =>
  _test_protobuf_isDecode(
    "ObjectSimpleProtobufNullable",
  )<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)({
    decode: (input) =>
      typia.protobuf.isDecode<ObjectSimpleProtobufNullable>(input),
    encode: typia.protobuf.createEncode<ObjectSimpleProtobufNullable>(),
  });
