import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_protobuf_createValidateEncode_TypeTagFormat = (): void => _test_protobuf_validateEncode(
  "TypeTagFormat",
)<TypeTagFormat>(TypeTagFormat)({
  encode: typia.protobuf.createValidateEncode<TypeTagFormat>(),
  decode: typia.protobuf.createDecode<TypeTagFormat>(),
  message: typia.protobuf.message<TypeTagFormat>(),
});
