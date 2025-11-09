import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_protobuf_createIsDecode_ObjectPartialAndRequired = (): void => _test_protobuf_isDecode(
  "ObjectPartialAndRequired",
)<ObjectPartialAndRequired>(ObjectPartialAndRequired)({
  decode: typia.protobuf.createIsDecode<ObjectPartialAndRequired>(),
  encode: typia.protobuf.createEncode<ObjectPartialAndRequired>(),
});
