import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_protobuf_assertEncode_TypeTagTypeBigInt = (): void =>
  _test_protobuf_assertEncode(TypeGuardError)(
    "TypeTagTypeBigInt",
  )<TypeTagTypeBigInt>(TypeTagTypeBigInt)({
    encode: (input) => typia.protobuf.assertEncode<TypeTagTypeBigInt>(input),
    decode: typia.protobuf.createDecode<TypeTagTypeBigInt>(),
    message: typia.protobuf.message<TypeTagTypeBigInt>(),
  });
