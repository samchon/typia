import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_protobuf_createIsDecode_ObjectPrimitive = (): void => _test_protobuf_isDecode(
  "ObjectPrimitive",
)<ObjectPrimitive>(ObjectPrimitive)({
  decode: typia.protobuf.createIsDecode<ObjectPrimitive>(),
  encode: typia.protobuf.createEncode<ObjectPrimitive>(),
});
