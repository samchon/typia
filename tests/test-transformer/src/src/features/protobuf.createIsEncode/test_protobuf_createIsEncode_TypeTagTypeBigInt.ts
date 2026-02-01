import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_protobuf_createIsEncode_TypeTagTypeBigInt = (): void => _test_protobuf_isEncode(
  "TypeTagTypeBigInt",
)<TypeTagTypeBigInt>(TypeTagTypeBigInt)({
  encode: typia.protobuf.createIsEncode<TypeTagTypeBigInt>(),
  decode: typia.protobuf.createDecode<TypeTagTypeBigInt>(),
  message: typia.protobuf.message<TypeTagTypeBigInt>(),
});
