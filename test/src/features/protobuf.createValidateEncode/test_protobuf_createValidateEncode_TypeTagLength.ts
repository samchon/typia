import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_protobuf_createValidateEncode_TypeTagLength = (): void => _test_protobuf_validateEncode(
  "TypeTagLength",
)<TypeTagLength>(TypeTagLength)({
  encode: typia.protobuf.createValidateEncode<TypeTagLength>(),
  decode: typia.protobuf.createDecode<TypeTagLength>(),
  message: typia.protobuf.message<TypeTagLength>(),
});
