import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_protobuf_createValidateEncode_TypeTagNaN = (): void => _test_protobuf_validateEncode(
  "TypeTagNaN",
)<TypeTagNaN>(TypeTagNaN)({
  encode: typia.protobuf.createValidateEncode<TypeTagNaN>(),
  decode: typia.protobuf.createDecode<TypeTagNaN>(),
  message: typia.protobuf.message<TypeTagNaN>(),
});
