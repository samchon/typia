import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_protobuf_encode_ObjectPartialAndRequired = (): void => _test_protobuf_encode(
  "ObjectPartialAndRequired",
)<ObjectPartialAndRequired>(ObjectPartialAndRequired)({
  encode: (input) => typia.protobuf.encode<ObjectPartialAndRequired>(input),
  decode: typia.protobuf.createDecode<ObjectPartialAndRequired>(),
  message: typia.protobuf.message<ObjectPartialAndRequired>(),
});
