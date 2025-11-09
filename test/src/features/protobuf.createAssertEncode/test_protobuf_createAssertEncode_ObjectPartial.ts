import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectPartial } from "../../structures/ObjectPartial";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertEncode_ObjectPartial = (): void => _test_protobuf_assertEncode(TypeGuardError)(
  "ObjectPartial",
)<ObjectPartial>(ObjectPartial)({
  encode: typia.protobuf.createAssertEncode<ObjectPartial>(),
  decode: typia.protobuf.createDecode<ObjectPartial>(),
  message: typia.protobuf.message<ObjectPartial>(),
});
