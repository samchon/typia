import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_protobuf_createIsEncode_TypeTagType = (): void => _test_protobuf_isEncode(
  "TypeTagType",
)<TypeTagType>(TypeTagType)({
  encode: typia.protobuf.createIsEncode<TypeTagType>(),
  decode: typia.protobuf.createDecode<TypeTagType>(),
  message: typia.protobuf.message<TypeTagType>(),
});
