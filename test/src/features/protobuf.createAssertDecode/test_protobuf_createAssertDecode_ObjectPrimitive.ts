import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertDecode_ObjectPrimitive = (): void => _test_protobuf_assertDecode(TypeGuardError)(
  "ObjectPrimitive",
)<ObjectPrimitive>(ObjectPrimitive)({
  decode: typia.protobuf.createAssertDecode<ObjectPrimitive>(),
  encode: typia.protobuf.createEncode<ObjectPrimitive>(),
});
