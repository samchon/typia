import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertEncode_ArraySimpleProtobufNullable = (): void => _test_protobuf_assertEncode(TypeGuardError)(
  "ArraySimpleProtobufNullable",
)<ArraySimpleProtobufNullable>(ArraySimpleProtobufNullable)({
  encode: typia.protobuf.createAssertEncode<ArraySimpleProtobufNullable>(),
  decode: typia.protobuf.createDecode<ArraySimpleProtobufNullable>(),
  message: typia.protobuf.message<ArraySimpleProtobufNullable>(),
});
