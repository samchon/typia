import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_protobuf_createDecode_ObjectRequired = _test_protobuf_decode(
  "ObjectRequired",
)<ObjectRequired>(ObjectRequired)({
  decode: typia.protobuf.createDecode<ObjectRequired>(),
  encode: typia.protobuf.createEncode<ObjectRequired>(),
});
