import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { DynamicConstant } from "../../structures/DynamicConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertDecodeCustom_DynamicConstant = (): void => _test_protobuf_assertDecode(CustomGuardError)(
  "DynamicConstant",
)<DynamicConstant>(DynamicConstant)({
  decode: typia.protobuf.createAssertDecode<DynamicConstant>((p) => new CustomGuardError(p)),
  encode: typia.protobuf.createEncode<DynamicConstant>(),
});
