import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_protobuf_createIsEncode_ArraySimpleProtobufNullable =
  _test_protobuf_isEncode(
    "ArraySimpleProtobufNullable",
  )<ArraySimpleProtobufNullable>(ArraySimpleProtobufNullable)({
    encode: typia.protobuf.createIsEncode<ArraySimpleProtobufNullable>(),
    decode: typia.protobuf.createDecode<ArraySimpleProtobufNullable>(),
    message: typia.protobuf.message<ArraySimpleProtobufNullable>(),
  });
