import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_protobuf_assertDecode_TypeTagRangeBigInt = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)(
    "TypeTagRangeBigInt",
  )<TypeTagRangeBigInt>(TypeTagRangeBigInt)({
    decode: (input) => typia.protobuf.assertDecode<TypeTagRangeBigInt>(input),
    encode: typia.protobuf.createEncode<TypeTagRangeBigInt>(),
  });
