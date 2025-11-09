import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertEncodeCustom_TypeTagRangeBigInt = (): void => _test_protobuf_assertEncode(CustomGuardError)(
  "TypeTagRangeBigInt",
)<TypeTagRangeBigInt>(TypeTagRangeBigInt)({
  encode: typia.protobuf.createAssertEncode<TypeTagRangeBigInt>((p) => new CustomGuardError(p)),
  decode: typia.protobuf.createDecode<TypeTagRangeBigInt>(),
  message: typia.protobuf.message<TypeTagRangeBigInt>(),
});
