import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_protobuf_createDecode_TypeTagTypeBigInt = (): void =>
  _test_protobuf_decode("TypeTagTypeBigInt")<TypeTagTypeBigInt>(
    TypeTagTypeBigInt,
  )({
    decode: typia.protobuf.createDecode<TypeTagTypeBigInt>(),
    encode: typia.protobuf.createEncode<TypeTagTypeBigInt>(),
  });
