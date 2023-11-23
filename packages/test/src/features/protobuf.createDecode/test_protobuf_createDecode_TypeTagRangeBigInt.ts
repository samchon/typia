import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_protobuf_createDecode_TypeTagRangeBigInt =
  _test_protobuf_decode("TypeTagRangeBigInt")<TypeTagRangeBigInt>(
    TypeTagRangeBigInt,
  )({
    decode: typia.protobuf.createDecode<TypeTagRangeBigInt>(),
    encode: typia.protobuf.createEncode<TypeTagRangeBigInt>(),
  });
