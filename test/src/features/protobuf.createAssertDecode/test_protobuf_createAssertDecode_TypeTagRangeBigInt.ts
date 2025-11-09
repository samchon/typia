import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertDecode_TypeTagRangeBigInt = (): void => _test_protobuf_assertDecode(TypeGuardError)(
  "TypeTagRangeBigInt",
)<TypeTagRangeBigInt>(TypeTagRangeBigInt)({
  decode: typia.protobuf.createAssertDecode<TypeTagRangeBigInt>(),
  encode: typia.protobuf.createEncode<TypeTagRangeBigInt>(),
});
