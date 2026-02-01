import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertDecode_ObjectSimpleProtobuf = (): void => _test_protobuf_assertDecode(TypeGuardError)(
  "ObjectSimpleProtobuf",
)<ObjectSimpleProtobuf>(ObjectSimpleProtobuf)({
  decode: typia.protobuf.createAssertDecode<ObjectSimpleProtobuf>(),
  encode: typia.protobuf.createEncode<ObjectSimpleProtobuf>(),
});
