import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_protobuf_validateEncode_TypeTagRangeBigInt = (): void =>
  _test_protobuf_validateEncode("TypeTagRangeBigInt")<TypeTagRangeBigInt>(
    TypeTagRangeBigInt,
  )({
    encode: (input) => typia.protobuf.validateEncode<TypeTagRangeBigInt>(input),
    decode: typia.protobuf.createDecode<TypeTagRangeBigInt>(),
    message: typia.protobuf.message<TypeTagRangeBigInt>(),
  });
