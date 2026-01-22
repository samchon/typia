import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_protobuf_createValidateEncode_TypeTagTypeBigInt = (): void =>
  _test_protobuf_validateEncode("TypeTagTypeBigInt")<TypeTagTypeBigInt>(
    TypeTagTypeBigInt,
  )({
    encode: typia.protobuf.createValidateEncode<TypeTagTypeBigInt>(),
    decode: typia.protobuf.createDecode<TypeTagTypeBigInt>(),
    message: typia.protobuf.message<TypeTagTypeBigInt>(),
  });
