import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_protobuf_createEncode_TypeTagTypeBigInt = (): void => _test_protobuf_encode(
  "TypeTagTypeBigInt",
)<TypeTagTypeBigInt>(TypeTagTypeBigInt)({
  encode: typia.protobuf.createEncode<TypeTagTypeBigInt>(),
  decode: typia.protobuf.createDecode<TypeTagTypeBigInt>(),
  message: typia.protobuf.message<TypeTagTypeBigInt>(),
});
