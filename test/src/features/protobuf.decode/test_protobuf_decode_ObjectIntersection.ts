import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_protobuf_decode_ObjectIntersection = (): void =>
  _test_protobuf_decode("ObjectIntersection")<ObjectIntersection>(
    ObjectIntersection,
  )({
    decode: (input) => typia.protobuf.decode<ObjectIntersection>(input),
    encode: typia.protobuf.createEncode<ObjectIntersection>(),
  });
