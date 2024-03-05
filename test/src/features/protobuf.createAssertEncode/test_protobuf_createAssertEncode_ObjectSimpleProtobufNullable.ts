import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_protobuf_createAssertEncode_ObjectSimpleProtobufNullable =
  _test_protobuf_assertEncode(TypeGuardError)(
    "ObjectSimpleProtobufNullable",
  )<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)({
    encode: typia.protobuf.createAssertEncode<ObjectSimpleProtobufNullable>(),
    decode: typia.protobuf.createDecode<ObjectSimpleProtobufNullable>(),
    message: typia.protobuf.message<ObjectSimpleProtobufNullable>(),
  });
