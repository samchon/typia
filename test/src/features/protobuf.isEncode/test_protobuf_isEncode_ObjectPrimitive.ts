import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_protobuf_isEncode_ObjectPrimitive = (): void => _test_protobuf_isEncode(
  "ObjectPrimitive",
)<ObjectPrimitive>(ObjectPrimitive)({
  encode: (input) => typia.protobuf.isEncode<ObjectPrimitive>(input),
  decode: typia.protobuf.createDecode<ObjectPrimitive>(),
  message: typia.protobuf.message<ObjectPrimitive>(),
});
