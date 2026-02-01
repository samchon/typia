import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_protobuf_createIsDecode_TypeTagFormat = (): void => _test_protobuf_isDecode(
  "TypeTagFormat",
)<TypeTagFormat>(TypeTagFormat)({
  decode: typia.protobuf.createIsDecode<TypeTagFormat>(),
  encode: typia.protobuf.createEncode<TypeTagFormat>(),
});
