import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectPartial } from "../../structures/ObjectPartial";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertEncodeCustom_ObjectPartial = (): void => _test_protobuf_assertEncode(CustomGuardError)(
  "ObjectPartial",
)<ObjectPartial>(ObjectPartial)({
  encode: typia.protobuf.createAssertEncode<ObjectPartial>((p) => new CustomGuardError(p)),
  decode: typia.protobuf.createDecode<ObjectPartial>(),
  message: typia.protobuf.message<ObjectPartial>(),
});
