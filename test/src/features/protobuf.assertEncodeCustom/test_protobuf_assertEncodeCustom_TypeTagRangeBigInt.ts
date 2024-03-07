import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertEncodeCustom_TypeTagRangeBigInt =
  _test_protobuf_assertEncode(CustomGuardError)(
    "TypeTagRangeBigInt",
  )<TypeTagRangeBigInt>(TypeTagRangeBigInt)({
    encode: (input) =>
      typia.protobuf.assertEncode<TypeTagRangeBigInt>(
        input,
        (p) => new CustomGuardError(p),
      ),
    decode: typia.protobuf.createDecode<TypeTagRangeBigInt>(),
    message: typia.protobuf.message<TypeTagRangeBigInt>(),
  });
