import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertEncodeCustom_ObjectPrimitive = (): void => _test_protobuf_assertEncode(CustomGuardError)(
  "ObjectPrimitive",
)<ObjectPrimitive>(ObjectPrimitive)({
  encode: typia.protobuf.createAssertEncode<ObjectPrimitive>((p) => new CustomGuardError(p)),
  decode: typia.protobuf.createDecode<ObjectPrimitive>(),
  message: typia.protobuf.message<ObjectPrimitive>(),
});
