import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_protobuf_encode_ArraySimpleProtobufOptional =
  _test_protobuf_encode(
    "ArraySimpleProtobufOptional",
  )<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)({
    encode: (input) =>
      typia.protobuf.encode<ArraySimpleProtobufOptional>(input),
    decode: typia.protobuf.createDecode<ArraySimpleProtobufOptional>(),
    message: typia.protobuf.message<ArraySimpleProtobufOptional>(),
  });
