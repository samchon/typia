import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_protobuf_createIsEncode_TypeTagRangeBigInt =
  _test_protobuf_isEncode("TypeTagRangeBigInt")<TypeTagRangeBigInt>(
    TypeTagRangeBigInt,
  )({
    encode: typia.protobuf.createIsEncode<TypeTagRangeBigInt>(),
    decode: typia.protobuf.createDecode<TypeTagRangeBigInt>(),
    message: typia.protobuf.message<TypeTagRangeBigInt>(),
  });
