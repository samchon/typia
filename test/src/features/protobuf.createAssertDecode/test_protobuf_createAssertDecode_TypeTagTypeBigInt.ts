import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_protobuf_createAssertDecode_TypeTagTypeBigInt = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)(
    "TypeTagTypeBigInt",
  )<TypeTagTypeBigInt>(TypeTagTypeBigInt)({
    decode: typia.protobuf.createAssertDecode<TypeTagTypeBigInt>(),
    encode: typia.protobuf.createEncode<TypeTagTypeBigInt>(),
  });
