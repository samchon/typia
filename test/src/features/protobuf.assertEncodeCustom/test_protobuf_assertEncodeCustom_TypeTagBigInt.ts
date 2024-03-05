import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_protobuf_assertEncodeCustom_TypeTagBigInt =
  _test_protobuf_assertEncode(CustomGuardError)("TypeTagBigInt")<TypeTagBigInt>(
    TypeTagBigInt,
  )({
    encode: (input) =>
      typia.protobuf.assertEncode<TypeTagBigInt>(
        input,
        (p) => new CustomGuardError(p),
      ),
    decode: typia.protobuf.createDecode<TypeTagBigInt>(),
    message: typia.protobuf.message<TypeTagBigInt>(),
  });
