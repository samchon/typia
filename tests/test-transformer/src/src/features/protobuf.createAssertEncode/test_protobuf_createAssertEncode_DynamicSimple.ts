import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { DynamicSimple } from "../../structures/DynamicSimple";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertEncode_DynamicSimple = (): void => _test_protobuf_assertEncode(TypeGuardError)(
  "DynamicSimple",
)<DynamicSimple>(DynamicSimple)({
  encode: typia.protobuf.createAssertEncode<DynamicSimple>(),
  decode: typia.protobuf.createDecode<DynamicSimple>(),
  message: typia.protobuf.message<DynamicSimple>(),
});
