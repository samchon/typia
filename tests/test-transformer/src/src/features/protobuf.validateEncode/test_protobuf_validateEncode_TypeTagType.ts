import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_protobuf_validateEncode_TypeTagType = (): void => _test_protobuf_validateEncode(
  "TypeTagType",
)<TypeTagType>(TypeTagType)({
  encode: (input) => typia.protobuf.validateEncode<TypeTagType>(input),
  decode: typia.protobuf.createDecode<TypeTagType>(),
  message: typia.protobuf.message<TypeTagType>(),
});
