import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_protobuf_encode_ObjectPrimitive = (): void =>
  _test_protobuf_encode("ObjectPrimitive")<ObjectPrimitive>(ObjectPrimitive)({
    encode: (input) => typia.protobuf.encode<ObjectPrimitive>(input),
    decode: typia.protobuf.createDecode<ObjectPrimitive>(),
    message: typia.protobuf.message<ObjectPrimitive>(),
  });
