import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertDecodeCustom_TypeTagRangeBigInt = (): void => _test_protobuf_assertDecode(CustomGuardError)(
  "TypeTagRangeBigInt",
)<TypeTagRangeBigInt>(TypeTagRangeBigInt)({
  decode: typia.protobuf.createAssertDecode<TypeTagRangeBigInt>((p) => new CustomGuardError(p)),
  encode: typia.protobuf.createEncode<TypeTagRangeBigInt>(),
});
