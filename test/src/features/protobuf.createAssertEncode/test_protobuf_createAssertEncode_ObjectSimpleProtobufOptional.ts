import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertEncode_ObjectSimpleProtobufOptional = (): void => _test_protobuf_assertEncode(TypeGuardError)(
  "ObjectSimpleProtobufOptional",
)<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)({
  encode: typia.protobuf.createAssertEncode<ObjectSimpleProtobufOptional>(),
  decode: typia.protobuf.createDecode<ObjectSimpleProtobufOptional>(),
  message: typia.protobuf.message<ObjectSimpleProtobufOptional>(),
});
