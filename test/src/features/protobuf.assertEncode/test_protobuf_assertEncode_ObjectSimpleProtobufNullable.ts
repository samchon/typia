import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

import { TypeGuardError } from "typia";

export const test_protobuf_assertEncode_ObjectSimpleProtobufNullable =
  _test_protobuf_assertEncode(TypeGuardError)(
    "ObjectSimpleProtobufNullable",
  )<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)({
    encode: (input) =>
      typia.protobuf.assertEncode<ObjectSimpleProtobufNullable>(input),
    decode: typia.protobuf.createDecode<ObjectSimpleProtobufNullable>(),
    message: typia.protobuf.message<ObjectSimpleProtobufNullable>(),
  });
