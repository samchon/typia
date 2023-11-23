import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_protobuf_createEncode_ObjectRequired = _test_protobuf_encode(
  "ObjectRequired",
)<ObjectRequired>(ObjectRequired)({
  encode: (input) => typia.protobuf.encode<ObjectRequired>(input),
  decode: typia.protobuf.createDecode<ObjectRequired>(),
  message: typia.protobuf.message<ObjectRequired>(),
});
