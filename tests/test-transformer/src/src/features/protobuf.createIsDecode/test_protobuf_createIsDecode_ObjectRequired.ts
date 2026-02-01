import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_protobuf_createIsDecode_ObjectRequired = (): void => _test_protobuf_isDecode(
  "ObjectRequired",
)<ObjectRequired>(ObjectRequired)({
  decode: typia.protobuf.createIsDecode<ObjectRequired>(),
  encode: typia.protobuf.createEncode<ObjectRequired>(),
});
