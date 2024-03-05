import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_protobuf_createAssertDecodeCustom_TypeTagBigInt =
  _test_protobuf_assertDecode(CustomGuardError)("TypeTagBigInt")<TypeTagBigInt>(
    TypeTagBigInt,
  )({
    decode: typia.protobuf.createAssertDecode<TypeTagBigInt>(
      (p) => new CustomGuardError(p),
    ),
    encode: typia.protobuf.createEncode<TypeTagBigInt>(),
  });
