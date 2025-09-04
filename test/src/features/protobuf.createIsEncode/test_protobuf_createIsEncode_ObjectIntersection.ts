import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_protobuf_createIsEncode_ObjectIntersection = (): void =>
  _test_protobuf_isEncode("ObjectIntersection")<ObjectIntersection>(
    ObjectIntersection,
  )({
    encode: typia.protobuf.createIsEncode<ObjectIntersection>(),
    decode: typia.protobuf.createDecode<ObjectIntersection>(),
    message: typia.protobuf.message<ObjectIntersection>(),
  });
