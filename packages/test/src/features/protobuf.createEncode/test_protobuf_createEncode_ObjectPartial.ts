import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_protobuf_createEncode_ObjectPartial = _test_protobuf_encode(
  "ObjectPartial",
)<ObjectPartial>(ObjectPartial)({
  encode: typia.protobuf.createEncode<ObjectPartial>(),
  decode: typia.protobuf.createDecode<ObjectPartial>(),
  message: typia.protobuf.message<ObjectPartial>(),
});
