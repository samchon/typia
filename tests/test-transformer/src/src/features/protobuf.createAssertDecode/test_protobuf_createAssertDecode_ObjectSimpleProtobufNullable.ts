import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertDecode_ObjectSimpleProtobufNullable = (): void => _test_protobuf_assertDecode(TypeGuardError)(
  "ObjectSimpleProtobufNullable",
)<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)({
  decode: typia.protobuf.createAssertDecode<ObjectSimpleProtobufNullable>(),
  encode: typia.protobuf.createEncode<ObjectSimpleProtobufNullable>(),
});
