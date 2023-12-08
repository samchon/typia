import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_protobuf_createAssertEncode_ArraySimpleProtobufOptional =
  _test_protobuf_assertEncode(
    "ArraySimpleProtobufOptional",
  )<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)({
    encode: typia.protobuf.createAssertEncode<ArraySimpleProtobufOptional>(),
    decode: typia.protobuf.createDecode<ArraySimpleProtobufOptional>(),
    message: typia.protobuf.message<ArraySimpleProtobufOptional>(),
  });
