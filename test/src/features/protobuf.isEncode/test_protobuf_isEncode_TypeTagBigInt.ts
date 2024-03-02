import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_protobuf_isEncode_TypeTagBigInt = _test_protobuf_isEncode(
  "TypeTagBigInt",
)<TypeTagBigInt>(TypeTagBigInt)({
  encode: (input) => typia.protobuf.isEncode<TypeTagBigInt>(input),
  decode: typia.protobuf.createDecode<TypeTagBigInt>(),
  message: typia.protobuf.message<TypeTagBigInt>(),
});
