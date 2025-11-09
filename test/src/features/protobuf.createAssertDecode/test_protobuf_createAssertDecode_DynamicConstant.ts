import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { DynamicConstant } from "../../structures/DynamicConstant";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertDecode_DynamicConstant = (): void => _test_protobuf_assertDecode(TypeGuardError)(
  "DynamicConstant",
)<DynamicConstant>(DynamicConstant)({
  decode: typia.protobuf.createAssertDecode<DynamicConstant>(),
  encode: typia.protobuf.createEncode<DynamicConstant>(),
});
