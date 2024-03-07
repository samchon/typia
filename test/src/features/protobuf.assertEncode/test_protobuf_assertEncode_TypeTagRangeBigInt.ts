import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

import { TypeGuardError } from "typia";

export const test_protobuf_assertEncode_TypeTagRangeBigInt =
  _test_protobuf_assertEncode(TypeGuardError)(
    "TypeTagRangeBigInt",
  )<TypeTagRangeBigInt>(TypeTagRangeBigInt)({
    encode: (input) => typia.protobuf.assertEncode<TypeTagRangeBigInt>(input),
    decode: typia.protobuf.createDecode<TypeTagRangeBigInt>(),
    message: typia.protobuf.message<TypeTagRangeBigInt>(),
  });
