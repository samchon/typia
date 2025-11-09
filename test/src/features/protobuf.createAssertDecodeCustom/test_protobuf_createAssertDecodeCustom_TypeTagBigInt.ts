import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertDecodeCustom_TypeTagBigInt = (): void => _test_protobuf_assertDecode(CustomGuardError)(
  "TypeTagBigInt",
)<TypeTagBigInt>(TypeTagBigInt)({
  decode: typia.protobuf.createAssertDecode<TypeTagBigInt>((p) => new CustomGuardError(p)),
  encode: typia.protobuf.createEncode<TypeTagBigInt>(),
});
