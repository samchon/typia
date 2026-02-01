import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_protobuf_createIsDecode_TypeTagType = (): void => _test_protobuf_isDecode(
  "TypeTagType",
)<TypeTagType>(TypeTagType)({
  decode: typia.protobuf.createIsDecode<TypeTagType>(),
  encode: typia.protobuf.createEncode<TypeTagType>(),
});
