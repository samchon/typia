import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { DynamicTree } from "../../structures/DynamicTree";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertEncode_DynamicTree = (): void => _test_protobuf_assertEncode(TypeGuardError)(
  "DynamicTree",
)<DynamicTree>(DynamicTree)({
  encode: typia.protobuf.createAssertEncode<DynamicTree>(),
  decode: typia.protobuf.createDecode<DynamicTree>(),
  message: typia.protobuf.message<DynamicTree>(),
});
