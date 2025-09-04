import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_protobuf_validateDecode_TypeTagRangeBigInt = (): void =>
  _test_protobuf_validateDecode("TypeTagRangeBigInt")<TypeTagRangeBigInt>(
    TypeTagRangeBigInt,
  )({
    decode: (input) => typia.protobuf.validateDecode<TypeTagRangeBigInt>(input),
    encode: typia.protobuf.createEncode<TypeTagRangeBigInt>(),
  });
