import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_protobuf_createIsDecode_TypeTagNaN = (): void => _test_protobuf_isDecode(
  "TypeTagNaN",
)<TypeTagNaN>(TypeTagNaN)({
  decode: typia.protobuf.createIsDecode<TypeTagNaN>(),
  encode: typia.protobuf.createEncode<TypeTagNaN>(),
});
