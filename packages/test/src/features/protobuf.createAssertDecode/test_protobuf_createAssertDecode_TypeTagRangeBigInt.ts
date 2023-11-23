import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_protobuf_createAssertDecode_TypeTagRangeBigInt =
  _test_protobuf_assertDecode("TypeTagRangeBigInt")<TypeTagRangeBigInt>(
    TypeTagRangeBigInt,
  )({
    decode: typia.protobuf.createAssertDecode<TypeTagRangeBigInt>(),
    encode: typia.protobuf.createEncode<TypeTagRangeBigInt>(),
  });
