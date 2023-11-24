import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_protobuf_createAssertEncode_ArraySimpleProtobufNullable =
  _test_protobuf_assertEncode(
    "ArraySimpleProtobufNullable",
  )<ArraySimpleProtobufNullable>(ArraySimpleProtobufNullable)({
    encode: (input) =>
      typia.protobuf.assertEncode<ArraySimpleProtobufNullable>(input),
    decode: typia.protobuf.createDecode<ArraySimpleProtobufNullable>(),
    message: typia.protobuf.message<ArraySimpleProtobufNullable>(),
  });
