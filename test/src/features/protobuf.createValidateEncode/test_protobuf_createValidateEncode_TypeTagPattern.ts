import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_protobuf_createValidateEncode_TypeTagPattern = (): void => _test_protobuf_validateEncode(
  "TypeTagPattern",
)<TypeTagPattern>(TypeTagPattern)({
  encode: typia.protobuf.createValidateEncode<TypeTagPattern>(),
  decode: typia.protobuf.createDecode<TypeTagPattern>(),
  message: typia.protobuf.message<TypeTagPattern>(),
});
