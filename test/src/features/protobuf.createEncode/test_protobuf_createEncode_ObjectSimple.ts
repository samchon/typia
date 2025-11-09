import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_protobuf_createEncode_ObjectSimple = (): void => _test_protobuf_encode(
  "ObjectSimple",
)<ObjectSimple>(ObjectSimple)({
  encode: typia.protobuf.createEncode<ObjectSimple>(),
  decode: typia.protobuf.createDecode<ObjectSimple>(),
  message: typia.protobuf.message<ObjectSimple>(),
});
