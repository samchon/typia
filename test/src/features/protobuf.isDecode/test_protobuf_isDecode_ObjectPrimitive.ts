import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_protobuf_isDecode_ObjectPrimitive = (): void =>
  _test_protobuf_isDecode("ObjectPrimitive")<ObjectPrimitive>(ObjectPrimitive)({
    decode: (input) => typia.protobuf.isDecode<ObjectPrimitive>(input),
    encode: typia.protobuf.createEncode<ObjectPrimitive>(),
  });
