import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_protobuf_createAssertEncode_ObjectSimpleProtobufOptional =
  _test_protobuf_assertEncode(
    "ObjectSimpleProtobufOptional",
  )<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)({
    encode: typia.protobuf.createAssertEncode<ObjectSimpleProtobufOptional>(),
    decode: typia.protobuf.createDecode<ObjectSimpleProtobufOptional>(),
    message: typia.protobuf.message<ObjectSimpleProtobufOptional>(),
  });
