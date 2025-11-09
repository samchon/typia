import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_protobuf_createIsEncode_TypeTagArray = (): void => _test_protobuf_isEncode(
  "TypeTagArray",
)<TypeTagArray>(TypeTagArray)({
  encode: typia.protobuf.createIsEncode<TypeTagArray>(),
  decode: typia.protobuf.createDecode<TypeTagArray>(),
  message: typia.protobuf.message<TypeTagArray>(),
});
