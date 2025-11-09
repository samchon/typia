import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_protobuf_createEncode_TypeTagBigInt = (): void => _test_protobuf_encode(
  "TypeTagBigInt",
)<TypeTagBigInt>(TypeTagBigInt)({
  encode: typia.protobuf.createEncode<TypeTagBigInt>(),
  decode: typia.protobuf.createDecode<TypeTagBigInt>(),
  message: typia.protobuf.message<TypeTagBigInt>(),
});
