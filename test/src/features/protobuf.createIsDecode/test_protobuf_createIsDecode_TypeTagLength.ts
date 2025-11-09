import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_protobuf_createIsDecode_TypeTagLength = (): void => _test_protobuf_isDecode(
  "TypeTagLength",
)<TypeTagLength>(TypeTagLength)({
  decode: typia.protobuf.createIsDecode<TypeTagLength>(),
  encode: typia.protobuf.createEncode<TypeTagLength>(),
});
