import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { DynamicConstant } from "../../structures/DynamicConstant";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertEncode_DynamicConstant = (): void => _test_protobuf_assertEncode(TypeGuardError)(
  "DynamicConstant",
)<DynamicConstant>(DynamicConstant)({
  encode: typia.protobuf.createAssertEncode<DynamicConstant>(),
  decode: typia.protobuf.createDecode<DynamicConstant>(),
  message: typia.protobuf.message<DynamicConstant>(),
});
