import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_protobuf_encode_ArraySimpleProtobufNullable = (): void =>
  _test_protobuf_encode(
    "ArraySimpleProtobufNullable",
  )<ArraySimpleProtobufNullable>(ArraySimpleProtobufNullable)({
    encode: (input) =>
      typia.protobuf.encode<ArraySimpleProtobufNullable>(input),
    decode: typia.protobuf.createDecode<ArraySimpleProtobufNullable>(),
    message: typia.protobuf.message<ArraySimpleProtobufNullable>(),
  });
