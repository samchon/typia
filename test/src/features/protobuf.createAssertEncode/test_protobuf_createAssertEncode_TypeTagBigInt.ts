import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_protobuf_createAssertEncode_TypeTagBigInt =
  _test_protobuf_assertEncode(TypeGuardError)("TypeTagBigInt")<TypeTagBigInt>(
    TypeTagBigInt,
  )({
    encode: typia.protobuf.createAssertEncode<TypeTagBigInt>(),
    decode: typia.protobuf.createDecode<TypeTagBigInt>(),
    message: typia.protobuf.message<TypeTagBigInt>(),
  });
