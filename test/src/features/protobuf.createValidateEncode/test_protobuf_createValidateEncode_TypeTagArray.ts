import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_protobuf_createValidateEncode_TypeTagArray = (): void => _test_protobuf_validateEncode(
  "TypeTagArray",
)<TypeTagArray>(TypeTagArray)({
  encode: typia.protobuf.createValidateEncode<TypeTagArray>(),
  decode: typia.protobuf.createDecode<TypeTagArray>(),
  message: typia.protobuf.message<TypeTagArray>(),
});
