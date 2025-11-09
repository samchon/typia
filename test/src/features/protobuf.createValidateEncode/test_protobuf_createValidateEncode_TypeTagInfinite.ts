import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_protobuf_createValidateEncode_TypeTagInfinite = (): void => _test_protobuf_validateEncode(
  "TypeTagInfinite",
)<TypeTagInfinite>(TypeTagInfinite)({
  encode: typia.protobuf.createValidateEncode<TypeTagInfinite>(),
  decode: typia.protobuf.createDecode<TypeTagInfinite>(),
  message: typia.protobuf.message<TypeTagInfinite>(),
});
