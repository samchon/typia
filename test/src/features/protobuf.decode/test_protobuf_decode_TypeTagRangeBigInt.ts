import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_protobuf_decode_TypeTagRangeBigInt = (): void => _test_protobuf_decode(
  "TypeTagRangeBigInt",
)<TypeTagRangeBigInt>(TypeTagRangeBigInt)({
  decode: (input) => typia.protobuf.decode<TypeTagRangeBigInt>(input),
  encode: typia.protobuf.createEncode<TypeTagRangeBigInt>(),
});
