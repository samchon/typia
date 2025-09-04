import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_protobuf_createAssertDecode_TypeTagBigInt = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)("TypeTagBigInt")<TypeTagBigInt>(
    TypeTagBigInt,
  )({
    decode: typia.protobuf.createAssertDecode<TypeTagBigInt>(),
    encode: typia.protobuf.createEncode<TypeTagBigInt>(),
  });
