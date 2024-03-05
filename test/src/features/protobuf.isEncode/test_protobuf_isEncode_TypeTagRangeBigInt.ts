import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_protobuf_isEncode_TypeTagRangeBigInt =
  _test_protobuf_isEncode("TypeTagRangeBigInt")<TypeTagRangeBigInt>(
    TypeTagRangeBigInt,
  )({
    encode: (input) => typia.protobuf.isEncode<TypeTagRangeBigInt>(input),
    decode: typia.protobuf.createDecode<TypeTagRangeBigInt>(),
    message: typia.protobuf.message<TypeTagRangeBigInt>(),
  });
