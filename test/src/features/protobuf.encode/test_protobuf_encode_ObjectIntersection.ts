import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_protobuf_encode_ObjectIntersection = (): void =>
  _test_protobuf_encode("ObjectIntersection")<ObjectIntersection>(
    ObjectIntersection,
  )({
    encode: (input) => typia.protobuf.encode<ObjectIntersection>(input),
    decode: typia.protobuf.createDecode<ObjectIntersection>(),
    message: typia.protobuf.message<ObjectIntersection>(),
  });
